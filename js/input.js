



























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
    // Track ghost position across entire page
    document.addEventListener('drag', (e) => {
      if (!_dragged || !e.clientX) return;
      _dragGhost.style.left = e.clientX + 'px';
      _dragGhost.style.top = e.clientY + 'px';
    });
    // ── Unified pointer events (works for mouse, touch, pen) ──
    _canvas.addEventListener('pointermove',  _onPointerMove);
    _canvas.addEventListener('pointerleave', _onMouseLeave);
    _canvas.addEventListener('pointerdown',  _onPointerDown);
    _canvas.addEventListener('pointerup',    _onPointerUp);
    _canvas.addEventListener('pointercancel',_onPointerUp);
    _canvas.addEventListener('click',        _onCanvasClick);
    _canvas.addEventListener('wheel',        _onWheel, { passive: false });
    // Block native context menu on long-press / right-click so it doesn't pop on touch
    _canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  // ── Multi-pointer state (for pinch zoom + two-finger pan) ──
  const _pointers = new Map(); // pointerId -> { x, y }
  let _pinchStartDist = 0;
  let _pinchCenter    = { x: 0, y: 0 };
  let _pinching       = false;
  function _pointerDist() {
    const pts = [..._pointers.values()];
    if (pts.length < 2) return 0;
    const dx = pts[0].x - pts[1].x, dy = pts[0].y - pts[1].y;
    return Math.hypot(dx, dy);
  }
  function _pointerMid() {
    const pts = [..._pointers.values()];
    if (pts.length < 2) return { x: 0, y: 0 };
    return { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };
  }

  function _onPointerDown(e) {
    _pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { _canvas.setPointerCapture(e.pointerId); } catch (_) {}

    if (_pointers.size === 2) {
      // Begin pinch — cancel any single-pointer pan/drag
      _panning   = false;
      _dragNode  = null;
      _pinching  = true;
      _pinchStartDist = _pointerDist();
      const mid = _pointerMid();
      const rect = _canvas.getBoundingClientRect();
      _pinchCenter = { x: mid.x - rect.left, y: mid.y - rect.top };
      _setCanvasCursor('grabbing');
      return;
    }

    if (_pointers.size === 1) _onMouseDown(e);
  }

  function _onPointerUp(e) {
    _pointers.delete(e.pointerId);
    if (_pointers.size < 2) {
      _pinching = false;
      _pinchStartDist = 0;
    }
    if (_pointers.size === 0) _onMouseUp(e);
  }

  function _onPointerMove(e) {
    if (_pointers.has(e.pointerId)) {
      _pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    }

    if (_pinching && _pointers.size === 2) {
      const newDist = _pointerDist();
      if (_pinchStartDist > 0 && newDist > 0) {
        const factor = newDist / _pinchStartDist;
        // Convert to wheel-equivalent step calls — call zoomAt repeatedly in small ticks
        if (factor > 1.04) {
          Renderer.zoomAt(_pinchCenter.x, _pinchCenter.y, -1); // zoom in
          _pinchStartDist = newDist;
        } else if (factor < 0.96) {
          Renderer.zoomAt(_pinchCenter.x, _pinchCenter.y, 1);  // zoom out
          _pinchStartDist = newDist;
        }
      }
      // Two-finger pan
      const mid = _pointerMid();
      const rect = _canvas.getBoundingClientRect();
      const cx = mid.x - rect.left, cy = mid.y - rect.top;
      const dx = cx - _pinchCenter.x, dy = cy - _pinchCenter.y;
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        Renderer.panBy(dx, dy);
        _pinchCenter = { x: cx, y: cy };
      }
      return;
    }

    _onMouseMove(e);
  }

  function _onWheel(e) {
    if (!State.level) return;
    e.preventDefault();
    const { x, y } = _getCanvasPoint(e);
    Renderer.zoomAt(x, y, e.deltaY);
  }

  // ── Design Mode: Node Dragging & Canvas Panning ──
  let _dragNode = null;
  let _dragOffset = { x: 0, y: 0 };
  let _panning = false;
  let _panStart = { x: 0, y: 0 };

  function _onMouseDown(e) {
    if (!State.level) return;

    // Normal mode: pan if not clicking a node
    if (!State.designMode) {
      const canvasPoint = _getCanvasPoint(e);
      const node = Renderer.getNodeAtPoint(canvasPoint.x, canvasPoint.y, State.level.nodes);
      if (!node) {
        _panning = true;
        _panStart = { x: e.clientX, y: e.clientY };
      }
      return;
    }

    // Design mode
    if (State.designTool !== 'select') return;
    const canvasPoint = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(canvasPoint.x, canvasPoint.y, State.level.nodes);
    if (node) {
      const world = Renderer.canvasToWorld(canvasPoint.x, canvasPoint.y);
      _dragNode = node;
      _dragOffset = { x: world.x - node.x, y: world.y - node.y };
      State.selectedNodeId = node.id;
    } else {
      // No node — start panning the canvas
      _panning = true;
      _panStart = { x: e.clientX, y: e.clientY };
    }
  }

  function _onMouseUp(e) {
    _dragNode = null;
    _panning = false;
  }

  // Node defaults for design mode placement
  const _nodeDefaults = {
    'place-input':  (x, y) => ({ type: 'INPUT',      x, y, fixedValue: 0, label: 'IN' }),
    'place-output': (x, y) => ({ type: 'OUTPUT',     x, y, targetValue: 0, label: 'OUT', sandbox: true }),
    'place-gate':   (x, y) => ({ type: 'GATE_SLOT',  x, y, gate: null, label: 'G' }),
    'place-ff':     (x, y) => ({ type: 'FF_SLOT',    x, y, ffType: null, initialQ: 0, label: 'FF' }),
    'place-clock':  (x, y) => ({ type: 'CLOCK',      x, y, value: 0 }),
    'place-mux':    (x, y) => ({ type: 'MUX_SELECT', x, y, value: 0, label: 'SW' }),
    'place-7seg':   (x, y) => ({ type: 'DISPLAY_7SEG', x, y, label: '7SEG' }),
  };

  function _onCanvasClick(e) {
    if (!State.level) return;
    const canvasPoint = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(canvasPoint.x, canvasPoint.y, State.level.nodes);

    // ── Design Mode ──
    if (State.designMode) {
      const tool = State.designTool;
      const world = Renderer.canvasToWorld(canvasPoint.x, canvasPoint.y);

      // Place node tools
      if (_nodeDefaults[tool]) {
        const newNode = _nodeDefaults[tool](world.x, world.y);
        const id = State.addNode(newNode);
        State.selectedNodeId = id;
        if (_onGatePlaced) _onGatePlaced(id);
        return;
      }

      // Select tool
      if (tool === 'select') {
        State.selectedNodeId = node ? node.id : null;
        return;
      }

      // Delete tool
      if (tool === 'delete') {
        if (node) {
          State.deleteNode(node.id);
        } else {
          // Try deleting a wire
          const wire = Renderer.getWireAtPoint(canvasPoint.x, canvasPoint.y, State.level);
          if (wire) State.deleteWire(wire.id);
        }
        if (_onGatePlaced) _onGatePlaced(null);
        return;
      }

      // Wire tool — handled separately (needs two clicks)
      if (tool === 'wire') {
        if (node) {
          if (!_wireSource) {
            _wireSource = node;
          } else if (node.id !== _wireSource.id) {
            // Validate: no duplicate wires
            const duplicate = State.level.wires.some(w =>
              w.sourceId === _wireSource.id && w.targetId === node.id
            );
            if (duplicate) {
              _wireSource = null;
              return;
            }
            // Determine targetInputIndex
            const existingWires = State.level.wires.filter(w => w.targetId === node.id);
            const nextIdx = existingWires.length;
            State.addWire({
              sourceId: _wireSource.id,
              targetId: node.id,
              targetInputIndex: nextIdx,
              sourceOutputIndex: 0,
            });
            Sound.play('wire');
            _wireSource = null;
            if (_onGatePlaced) _onGatePlaced(null);
          }
        } else {
          _wireSource = null; // click on empty space cancels wire
        }
        return;
      }

      return;
    }

    // ── Normal Mode ──
    if (node && node.type === 'MUX_SELECT') {
      node.value = (node.value ?? 0) ^ 1;
      Sound.play('toggle');
      if (_onGatePlaced) _onGatePlaced(node.id);
    }

  }

  // Wire drawing state
  let _wireSource = null;
  let _mouseWorld = { x: 0, y: 0 };
  let _mouseCanvas = { x: 0, y: 0 };

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

  const _dragGhost = document.getElementById('drag-ghost');

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
      // Hide native ghost
      const emptyImg = new Image();
      emptyImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      e.dataTransfer.setDragImage(emptyImg, 0, 0);
    }

    // Show custom ghost
    _dragGhost.textContent = _dragged.value + (_dragged.kind === 'ff' ? '-FF' : '');
    _dragGhost.className = _dragged.kind === 'ff' ? 'ff-ghost' : '';
    _dragGhost.style.left = e.clientX + 'px';
    _dragGhost.style.top = e.clientY + 'px';

    _setCanvasCursor('copy');
  }

  function _onChipDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    _dragged = null;
    _dragGhost.classList.add('hidden');
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
      Sound.play('gate');
      if (_onGatePlaced) _onGatePlaced(node.id);
      return true;
    }

    if (dragged.kind === 'ff' && node.type === 'FF_SLOT') {
      State.setFfType(node.id, dragged.value);
      Sound.play('ff');
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

    // Move ghost and snap effect
    _dragGhost.style.left = e.clientX + 'px';
    _dragGhost.style.top = e.clientY + 'px';
    _dragGhost.classList.toggle('snap', !!target);
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
    _dragGhost.classList.add('hidden');
    _setCanvasCursor('default');
  }

  function _onMouseMove(e) {
    if (!State.level) return;

    const { x, y } = _getCanvasPoint(e);
    const node = Renderer.getNodeAtPoint(x, y, State.level.nodes);

    // Hoverable: in design mode all nodes, otherwise GATE_SLOT, FF_SLOT, MUX_SELECT
    const isHoverable = State.designMode
      ? !!node
      : node && (node.type === 'GATE_SLOT' || node.type === 'FF_SLOT' || node.type === 'MUX_SELECT');
    const hoverId = isHoverable ? node.id : null;

    // Track mouse positions
    _mouseCanvas = { x, y };
    if (State.designMode) {
      _mouseWorld = Renderer.canvasToWorld(x, y);
    }

    // Canvas panning (design mode select tool OR normal mode)
    if (_panning && (State.designMode ? State.designTool === 'select' : true)) {
      const dx = e.clientX - _panStart.x;
      const dy = e.clientY - _panStart.y;
      _panStart = { x: e.clientX, y: e.clientY };
      Renderer.panBy(dx, dy);
      _setCanvasCursor('grabbing');
      return;
    }

    // Design mode: drag node movement
    if (_dragNode && State.designMode && State.designTool === 'select') {
      const world = _mouseWorld;
      _dragNode.x = world.x - _dragOffset.x;
      _dragNode.y = world.y - _dragOffset.y;
      _setCanvasCursor('grabbing');
      return;
    }

    if (State.designMode) {
      const tool = State.designTool;
      if (tool && tool.startsWith('place-')) {
        _setCanvasCursor('crosshair');
      } else if (tool === 'wire') {
        _setCanvasCursor(node ? 'cell' : 'crosshair');
      } else if (tool === 'delete') {
        const wire = !node ? Renderer.getWireAtPoint(x, y, State.level) : null;
        _setCanvasCursor((node || wire) ? 'not-allowed' : 'default');
      } else {
        _setCanvasCursor(node ? 'move' : 'default');
      }
    } else if (_dragged) {
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

  // Touch-drag entry point — used by the touch.js chip-drag system since
  // HTML5 drag-and-drop is unreliable on iOS / mobile Chrome.
  function dropAt(canvasX, canvasY, dragged) {
    return _handleDrop(canvasX, canvasY, dragged);
  }
  function resolveDropTargetAt(canvasX, canvasY, dragged) {
    const prev = _dragged;
    _dragged = dragged;
    const t = _resolveDropTarget(canvasX, canvasY);
    _dragged = prev;
    return t;
  }

  return {
    init, refreshChips, dropAt, resolveDropTargetAt,
    get wireSource() { return _wireSource; },
    get mouseWorld() { return _mouseWorld; },
    get mouseCanvas() { return _mouseCanvas; },
  };

})();
