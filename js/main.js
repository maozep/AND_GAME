/* ============================================================
   main.js — Bootstrap & Game Loop
   ============================================================ */

(function () {

  // ── DOM References ────────────────────────────────────────
  const canvas      = document.getElementById('game-canvas');
  const levelName   = document.getElementById('level-name');
  const winOverlay  = document.getElementById('win-overlay');
  const winLevelEl  = document.getElementById('win-level');
  const finalOverlay = document.getElementById('final-overlay');
  const infoOverlay = document.getElementById('info-overlay');
  const btnInfo     = document.getElementById('btn-info');
  const btnInfoClose = document.getElementById('btn-info-close');
  const btnNext     = document.getElementById('btn-next');
  const btnRestart  = document.getElementById('btn-restart');
  const btnPlayAgain = document.getElementById('btn-play-again');

  function colorizeTruthTableBits() {
    const cells = document.querySelectorAll('#truth-grid td');
    cells.forEach((cell) => {
      const value = cell.textContent.trim();
      cell.classList.remove('bit-0', 'bit-1');
      if (value === '0') cell.classList.add('bit-0');
      if (value === '1') cell.classList.add('bit-1');
    });
  }

  // ── Animation loop (for dashed border pulse) ─────────────
  let _rafId = null;
  let _lastSolved = false;
  let _winTimeout = null;

  // ── Core: Evaluate + Render ───────────────────────────────
  function tick() {
    const level  = State.level;
    if (!level) return;

    const result = Engine.evaluate(level);
    State.setEvalResult(result);

    Renderer.render(level, result, State.hoveredNodeId, result.solved);

    // Trigger win sequence if newly solved
    if (result.solved && !_lastSolved) {
      _lastSolved = true;
      _onSolve();
    }
    if (!result.solved) {
      _lastSolved = false;
    }

    _rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (_rafId) cancelAnimationFrame(_rafId);
    _rafId = requestAnimationFrame(tick);
  }

  // ── Load a Level ─────────────────────────────────────────
  function loadLevel(index) {
    if (index >= LEVELS.length) {
      _showFinalScreen();
      return;
    }

    const levelDef = LEVELS[index];
    State.setLevelIndex(index);
    State.setLevel(levelDef);
    _lastSolved = false;

    // Update HUD
    levelName.textContent = `${index + 1}. ${levelDef.name}`;

    // Hide overlays
    winOverlay.classList.add('hidden');
    finalOverlay.classList.add('hidden');

    startLoop();
  }

  // ── Win Sequence ─────────────────────────────────────────
  function _onSolve() {
    clearTimeout(_winTimeout);
    _winTimeout = setTimeout(() => {
      const idx = State.currentLevelIndex;
      winLevelEl.textContent = `LEVEL ${idx + 1} — ${LEVELS[idx].name}`;
      winOverlay.classList.remove('hidden');
    }, 900);   // short delay so player sees the green flash first
  }

  function _showFinalScreen() {
    if (_rafId) cancelAnimationFrame(_rafId);
    finalOverlay.classList.remove('hidden');
  }

  // ── Button Handlers ───────────────────────────────────────
  btnNext.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    State.advanceLevel();
    loadLevel(State.currentLevelIndex);
  });

  btnRestart.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    State.resetLevel();
    _lastSolved = false;
  });

  btnPlayAgain.addEventListener('click', () => {
    finalOverlay.classList.add('hidden');
    loadLevel(0);
  });

  // ── Info Overlay Handlers ───────────────────────────────
  function openInfoOverlay() {
    infoOverlay.classList.remove('hidden');
    infoOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeInfoOverlay() {
    infoOverlay.classList.add('hidden');
    infoOverlay.setAttribute('aria-hidden', 'true');
  }

  btnInfo.addEventListener('click', openInfoOverlay);
  btnInfoClose.addEventListener('click', closeInfoOverlay);

  // Close when clicking the dark backdrop
  infoOverlay.addEventListener('click', (e) => {
    if (e.target === infoOverlay) closeInfoOverlay();
  });

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !infoOverlay.classList.contains('hidden')) {
      closeInfoOverlay();
    }
  });

  colorizeTruthTableBits();

  // ── Input Callbacks ───────────────────────────────────────
  Input.init(canvas, {
    onGatePlaced:  () => { /* tick loop handles re-render */ },
    onHoverChange: () => { /* hover state already in State, tick renders it */ },
  });

  // ── Renderer Init & Resize ────────────────────────────────
  Renderer.init(canvas);
  window.addEventListener('resize', () => Renderer.resize());

  // ── Gate Palette Highlight (hover sync) ───────────────────
  function updatePaletteHighlight(gate) {
    document.querySelectorAll('.gate-chip').forEach(el => {
      el.classList.toggle('active', el.dataset.gate === gate);
    });
  }

  // Sync palette with hovered gate slot
  setInterval(() => {
    const h = State.hoveredNodeId;
    if (h && State.level) {
      const node = State.level.nodes.find(n => n.id === h);
      updatePaletteHighlight(node ? node.gate : null);
    } else {
      updatePaletteHighlight(null);
    }
  }, 100);

  // ── Start ─────────────────────────────────────────────────
  loadLevel(0);

})();
