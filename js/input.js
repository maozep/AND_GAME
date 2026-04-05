/* ============================================================
   input.js — Mouse Interaction Handler
   ============================================================ */

const Input = (() => {

  let _canvas;
  let _onGatePlaced = null;   // callback(nodeId)
  let _onHoverChange = null;  // callback(nodeId | null)
  let _draggedGate = null;

  function init(canvasEl, { onGatePlaced, onHoverChange }) {
    _canvas       = canvasEl;
    _onGatePlaced  = onGatePlaced;
    _onHoverChange = onHoverChange;

    document.querySelectorAll('.gate-chip').forEach((chip) => {
      chip.draggable = true;
      chip.addEventListener('dragstart', _onGateDragStart);
      chip.addEventListener('dragend', _onGateDragEnd);
    });

    _canvas.addEventListener('dragover',  _onCanvasDragOver);
    _canvas.addEventListener('drop',      _onCanvasDrop);
    _canvas.addEventListener('mousemove', _onMouseMove);
    _canvas.addEventListener('mouseleave', _onMouseLeave);
  }

  function _setCanvasCursor(cursor) {
    _canvas.style.cursor = cursor;
  }

  function _getCanvasPoint(e) {
    const rect = _canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function _onGateDragStart(e) {
    _draggedGate = e.currentTarget.dataset.gate || null;
    e.currentTarget.classList.add('dragging');

    if (e.dataTransfer && _draggedGate) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', _draggedGate);
    }

    _setCanvasCursor('copy');
  }

  function _onGateDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    _draggedGate = null;
    _setCanvasCursor('default');
  }

  function _handleDropAtPoint(x, y, gateName) {
    if (!State.level || !gateName) return false;

    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);
    if (!node || node.type !== 'GATE_SLOT') return false;

    State.setGate(node.id, gateName);
    if (_onGatePlaced) _onGatePlaced(node.id);
    return true;
  }

  function _onCanvasDragOver(e) {
    if (!State.level || !_draggedGate) return;

    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);
    _setCanvasCursor(node && node.type === 'GATE_SLOT' ? 'copy' : 'default');
  }

  function _onCanvasDrop(e) {
    if (!State.level) return;

    e.preventDefault();

    const gateName = (e.dataTransfer && e.dataTransfer.getData('text/plain')) || _draggedGate;
    const { x, y } = _getCanvasPoint(e);

    _handleDropAtPoint(x, y, gateName);
    _draggedGate = null;
    _setCanvasCursor('default');
  }

  function _onMouseMove(e) {
    if (!State.level) return;

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);

    const hoverId = (node && node.type === 'GATE_SLOT') ? node.id : null;

    // Update cursor style only while dragging a gate
    if (_draggedGate) {
      _setCanvasCursor(hoverId ? 'copy' : 'default');
    }

    // Notify only on change
    if (hoverId !== State.hoveredNodeId) {
      State.setHoveredNode(hoverId);
      if (_onHoverChange) _onHoverChange(hoverId);
    }
  }

  function _onMouseLeave() {
    if (!_draggedGate) _setCanvasCursor('default');
    if (State.hoveredNodeId !== null) {
      State.setHoveredNode(null);
      if (_onHoverChange) _onHoverChange(null);
    }
  }

  return { init };

})();
