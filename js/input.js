/* ============================================================
   input.js — Mouse Interaction Handler
   ============================================================ */

const Input = (() => {

  let _canvas;
  let _onGatePlaced = null;   // callback(nodeId)
  let _onHoverChange = null;  // callback(nodeId | null)

  function init(canvasEl, { onGatePlaced, onHoverChange }) {
    _canvas       = canvasEl;
    _onGatePlaced  = onGatePlaced;
    _onHoverChange = onHoverChange;

    _canvas.addEventListener('click',     _onClick);
    _canvas.addEventListener('mousemove', _onMouseMove);
    _canvas.addEventListener('mouseleave', _onMouseLeave);
  }

  function _getCanvasPoint(e) {
    const rect = _canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function _onClick(e) {
    if (!State.level) return;

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);

    if (node && node.type === 'GATE_SLOT') {
      State.cycleGate(node.id);
      if (_onGatePlaced) _onGatePlaced(node.id);
    }
  }

  function _onMouseMove(e) {
    if (!State.level) return;

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);

    const hoverId = (node && node.type === 'GATE_SLOT') ? node.id : null;

    // Update cursor style
    _canvas.style.cursor = hoverId ? 'pointer' : 'default';

    // Notify only on change
    if (hoverId !== State.hoveredNodeId) {
      State.setHoveredNode(hoverId);
      if (_onHoverChange) _onHoverChange(hoverId);
    }
  }

  function _onMouseLeave() {
    _canvas.style.cursor = 'default';
    if (State.hoveredNodeId !== null) {
      State.setHoveredNode(null);
      if (_onHoverChange) _onHoverChange(null);
    }
  }

  return { init };

})();
