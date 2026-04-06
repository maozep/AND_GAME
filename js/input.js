



























/* ============================================================
   input.js — Mouse Interaction Handler
   Supports dragging both logic gates (GATE_SLOT) and
   flip-flop types (FF_SLOT) from the palette to the canvas.
   ============================================================ */

const Input = (() => {

  let _canvas;
  let _onGatePlaced  = null;
  let _onHoverChange = null;

  // What is being dragged: { kind: 'gate'|'ff', value: string }
  let _dragged = null;

  function init(canvasEl, { onGatePlaced, onHoverChange }) {
    _canvas        = canvasEl;
    _onGatePlaced  = onGatePlaced;
    _onHoverChange = onHoverChange;

    // Attach drag listeners to ALL palette chips (gates + FF)
    document.querySelectorAll('.gate-chip').forEach(_attachChipDrag);

    _canvas.addEventListener('dragover',   _onCanvasDragOver);
    _canvas.addEventListener('drop',       _onCanvasDrop);
    _canvas.addEventListener('mousemove',  _onMouseMove);
    _canvas.addEventListener('mouseleave', _onMouseLeave);
  }

  function _attachChipDrag(chip) {
    chip.draggable = true;
    chip.addEventListener('dragstart', _onChipDragStart);
    chip.addEventListener('dragend',   _onChipDragEnd);
  }

  // Called externally when FF palette chips are injected into DOM after init
  function refreshChips() {
    document.querySelectorAll('.gate-chip').forEach(chip => {
      chip.removeEventListener('dragstart', _onChipDragStart);
      chip.removeEventListener('dragend',   _onChipDragEnd);
      _attachChipDrag(chip);
    });
  }

  function _setCanvasCursor(cursor) {
    _canvas.style.cursor = cursor;
  }

  function _getCanvasPoint(e) {
    const rect = _canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function _onChipDragStart(e) {
    const gate = e.currentTarget.dataset.gate;
    const ff   = e.currentTarget.dataset.ff;

    if (gate) {
      _dragged = { kind: 'gate', value: gate };
    } else if (ff) {
      _dragged = { kind: 'ff', value: ff };
    } else {
      _dragged = null;
      return;
    }

    e.currentTarget.classList.add('dragging');
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', JSON.stringify(_dragged));
    }
    _setCanvasCursor('copy');
  }

  function _onChipDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    _dragged = null;
    _setCanvasCursor('default');
  }

  function _resolveDropTarget(x, y) {
    if (!State.level) return null;
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);
    if (!node) return null;
    if (_dragged && _dragged.kind === 'gate'  && node.type === 'GATE_SLOT') return node;
    if (_dragged && _dragged.kind === 'ff'    && node.type === 'FF_SLOT')   return node;
    return null;
  }

  function _handleDrop(x, y, dragged) {
    if (!State.level || !dragged) return false;

    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);
    if (!node) return false;

    if (dragged.kind === 'gate' && node.type === 'GATE_SLOT') {
      State.setGate(node.id, dragged.value);
      if (_onGatePlaced) _onGatePlaced(node.id);
      return true;
    }

    if (dragged.kind === 'ff' && node.type === 'FF_SLOT') {
      State.setFfType(node.id, dragged.value);
      if (_onGatePlaced) _onGatePlaced(node.id);
      return true;
    }

    return false;
  }

  function _onCanvasDragOver(e) {
    if (!State.level || !_dragged) return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';

    const { x, y } = _getCanvasPoint(e);
    const target = _resolveDropTarget(x, y);
    _setCanvasCursor(target ? 'copy' : 'no-drop');
  }

  function _onCanvasDrop(e) {
    if (!State.level) return;
    e.preventDefault();

    // Parse from dataTransfer (supports cross-frame drops)
    let dragged = _dragged;
    if (!dragged && e.dataTransfer) {
      try { dragged = JSON.parse(e.dataTransfer.getData('text/plain')); } catch (_) {}
    }

    const { x, y } = _getCanvasPoint(e);
    _handleDrop(x, y, dragged);
    _dragged = null;
    _setCanvasCursor('default');
  }

  function _onMouseMove(e) {
    if (!State.level) return;

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);

    // Hoverable: GATE_SLOT and FF_SLOT
    const isHoverable = node && (node.type === 'GATE_SLOT' || node.type === 'FF_SLOT');
    const hoverId = isHoverable ? node.id : null;

    if (_dragged) {
      const target = _resolveDropTarget(x, y);
      _setCanvasCursor(target ? 'copy' : 'default');
    } else {
      _setCanvasCursor(hoverId ? 'pointer' : 'default');
    }

    if (hoverId !== State.hoveredNodeId) {
      State.setHoveredNode(hoverId);
      if (_onHoverChange) _onHoverChange(hoverId);
    }
  }

  function _onMouseLeave() {
    if (!_dragged) _setCanvasCursor('default');
    if (State.hoveredNodeId !== null) {
      State.setHoveredNode(null);
      if (_onHoverChange) _onHoverChange(null);
    }
  }

  return { init, refreshChips };

})();
