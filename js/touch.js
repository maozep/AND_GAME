/* ============================================================
   touch.js — Mobile touch-drag for the gate / FF palette chips,
   plus an orientation hint and PWA registration. HTML5 drag-and-drop
   is unreliable on iOS Safari and inconsistent across mobile Chrome,
   so we implement a manual pointer-based drag for touch/pen pointers.
   Mouse pointers continue to use the existing HTML5 dnd flow in input.js.
   ============================================================ */

const Touch = (() => {

  let _ghost;
  let _canvas;
  let _activeDrag = null; // { kind, value, pointerId }

  function init() {
    _ghost  = document.getElementById('drag-ghost');
    _canvas = document.getElementById('game-canvas');
    if (!_canvas) return;

    _wireChips();

    // PWA service worker (best-effort, failures are silent)
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }

    _setupOrientationHint();
    _setupWaveformDrawer();
  }

  // ── Waveform: drag handle to resize, expand button to toggle full/normal/collapsed ──
  function _setupWaveformDrawer() {
    const panel  = document.getElementById('waveform-panel');
    const handle = document.getElementById('waveform-handle');
    const btnExp = document.getElementById('btn-waveform-expand');
    if (!panel || !handle) return;

    let dragging   = false;
    let startY     = 0;
    let startH     = 0;
    let movedPx    = 0;
    let pointerId  = null;

    handle.addEventListener('pointerdown', (e) => {
      dragging = true;
      pointerId = e.pointerId;
      startY = e.clientY;
      startH = panel.getBoundingClientRect().height;
      movedPx = 0;
      handle.classList.add('dragging');
      try { handle.setPointerCapture(e.pointerId); } catch (_) {}
      e.preventDefault();
    });

    handle.addEventListener('pointermove', (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dy = e.clientY - startY;
      movedPx = Math.abs(dy);
      // Drag down shrinks (handle is at top), drag up grows
      const newH = Math.max(60, Math.min(window.innerHeight * 0.92, startH - dy));
      panel.classList.remove('expanded', 'collapsed');
      panel.style.height = newH + 'px';
      // Notify renderer that the canvas size changed so it re-draws crisply
      if (typeof Waveform !== 'undefined' && Waveform.resize) Waveform.resize();
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      handle.classList.remove('dragging');
      try { handle.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;

      // Treat as a tap if the user barely moved → toggle expand state
      if (movedPx < 6) _cycleWaveformState(panel);
    }
    handle.addEventListener('pointerup',     endDrag);
    handle.addEventListener('pointercancel', endDrag);

    if (btnExp) {
      btnExp.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.style.height = ''; // clear inline so class-based size applies
        _cycleWaveformState(panel);
      });
    }

    // Re-clear inline height when window resizes (so dvh-based size kicks in fresh)
    window.addEventListener('orientationchange', () => {
      panel.style.height = '';
      panel.classList.remove('expanded', 'collapsed');
    });
  }

  function _cycleWaveformState(panel) {
    panel.style.height = '';
    if (panel.classList.contains('expanded')) {
      panel.classList.remove('expanded');
      panel.classList.add('collapsed');
    } else if (panel.classList.contains('collapsed')) {
      panel.classList.remove('collapsed');
    } else {
      panel.classList.add('expanded');
    }
    if (typeof Waveform !== 'undefined' && Waveform.resize) {
      // Wait one frame for the new height to apply, then resize the inner canvas
      requestAnimationFrame(() => Waveform.resize());
    }
  }

  function _wireChips() {
    document.querySelectorAll('.gate-chip').forEach(chip => {
      // Bind only once
      if (chip.dataset.touchBound === '1') return;
      chip.dataset.touchBound = '1';
      chip.addEventListener('pointerdown', _onChipPointerDown);
    });
  }

  function _onChipPointerDown(e) {
    // Only handle touch / pen here — mouse uses HTML5 dnd
    if (e.pointerType === 'mouse') return;
    if (!State.level) return;

    const chip = e.currentTarget;
    const gate = chip.dataset.gate;
    const ff   = chip.dataset.ff;
    if (!gate && !ff) return;

    e.preventDefault();
    _activeDrag = {
      kind:      gate ? 'gate' : 'ff',
      value:     gate || ff,
      pointerId: e.pointerId,
    };

    chip.classList.add('dragging');
    _showGhost(_activeDrag, e.clientX, e.clientY);

    // Capture so we keep getting moves even if finger leaves the chip
    try { chip.setPointerCapture(e.pointerId); } catch (_) {}

    chip.addEventListener('pointermove',  _onChipPointerMove);
    chip.addEventListener('pointerup',    _onChipPointerUp);
    chip.addEventListener('pointercancel',_onChipPointerUp);
  }

  function _onChipPointerMove(e) {
    if (!_activeDrag || e.pointerId !== _activeDrag.pointerId) return;
    e.preventDefault();
    _moveGhost(e.clientX, e.clientY);

    // Visualize snap target while finger hovers a slot
    const pt = _toCanvas(e.clientX, e.clientY);
    if (pt && Input && Input.resolveDropTargetAt) {
      const target = Input.resolveDropTargetAt(pt.x, pt.y, _activeDrag);
      _ghost.classList.toggle('snap', !!target);
    }
  }

  function _onChipPointerUp(e) {
    if (!_activeDrag || e.pointerId !== _activeDrag.pointerId) return;
    e.preventDefault();
    const chip = e.currentTarget;

    const pt = _toCanvas(e.clientX, e.clientY);
    if (pt && Input && Input.dropAt) {
      Input.dropAt(pt.x, pt.y, _activeDrag);
    }

    chip.classList.remove('dragging');
    chip.removeEventListener('pointermove',  _onChipPointerMove);
    chip.removeEventListener('pointerup',    _onChipPointerUp);
    chip.removeEventListener('pointercancel',_onChipPointerUp);
    try { chip.releasePointerCapture(e.pointerId); } catch (_) {}

    _hideGhost();
    _activeDrag = null;
  }

  function _toCanvas(clientX, clientY) {
    if (!_canvas) return null;
    const r = _canvas.getBoundingClientRect();
    if (clientX < r.left || clientX > r.right || clientY < r.top || clientY > r.bottom) return null;
    return { x: clientX - r.left, y: clientY - r.top };
  }

  function _showGhost(drag, x, y) {
    if (!_ghost) return;
    _ghost.textContent = drag.value + (drag.kind === 'ff' ? '-FF' : '');
    _ghost.className = drag.kind === 'ff' ? 'ff-ghost' : '';
    _ghost.classList.remove('hidden');
    _moveGhost(x, y);
  }

  function _moveGhost(x, y) {
    if (!_ghost) return;
    _ghost.style.left = x + 'px';
    _ghost.style.top  = y + 'px';
  }

  function _hideGhost() {
    if (!_ghost) return;
    _ghost.classList.add('hidden');
    _ghost.classList.remove('snap');
  }

  // ── Orientation hint: encourage landscape on small portrait phones ──
  function _setupOrientationHint() {
    // Build only once; show via media query + visibility check
    let hint = document.getElementById('orientation-hint');
    if (!hint) {
      hint = document.createElement('div');
      hint.id = 'orientation-hint';
      hint.className = 'hidden';
      hint.innerHTML = `
        <div class="rotate-icon">📱</div>
        <h3>BETTER IN LANDSCAPE</h3>
        <p>This circuit playground works best with your phone rotated sideways. You can keep it portrait if you prefer.</p>
        <button id="btn-orient-dismiss">CONTINUE ANYWAY</button>
      `;
      document.body.appendChild(hint);
      hint.querySelector('#btn-orient-dismiss').addEventListener('click', () => {
        hint.classList.add('hidden');
        try { localStorage.setItem('and_game_orient_dismissed', '1'); } catch (_) {}
      });
    }
    function check() {
      try {
        if (localStorage.getItem('and_game_orient_dismissed') === '1') {
          hint.classList.add('hidden');
          return;
        }
      } catch (_) {}
      const isPortraitPhone = window.matchMedia('(max-width: 520px) and (orientation: portrait)').matches;
      hint.classList.toggle('hidden', !isPortraitPhone);
    }
    check();
    window.addEventListener('resize', check);
    window.addEventListener('orientationchange', check);
  }

  return { init, refreshChips: _wireChips };

})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Touch.init());
} else {
  Touch.init();
}
