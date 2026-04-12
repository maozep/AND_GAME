/* ============================================================
   state.js — Global Game State
   Supports combinational and sequential (flip-flop) levels.
   ============================================================ */

const State = (() => {

  let _currentLevelIndex = 0;
  let _level             = null;
  let _evalResult        = null;
  let _solved            = false;
  let _hoveredNodeId     = null;

  // ── Sequential state ──────────────────────────────────────
  let _ffStates    = new Map();  // Map<nodeId, { q, qNot, prevClkValue }>
  let _stepCount   = 0;          // Rising clock edges delivered so far
  let _clockHigh   = false;      // True while CLK is in HIGH phase

  // Gate cycling palette
  const GATE_PALETTE = [null, 'AND', 'OR', 'XOR', 'NAND', 'NOR', 'NOT'];

  // ── Undo / Redo ───────────────────────────────────────────
  let _undoStack = [];
  let _redoStack = [];
  const MAX_UNDO = 50;

  function _snapshot() {
    if (!_level) return null;
    return {
      gates: _level.nodes.filter(n => n.type === 'GATE_SLOT').map(n => ({ id: n.id, gate: n.gate })),
      ffs: _level.nodes.filter(n => n.type === 'FF_SLOT').map(n => ({ id: n.id, ffType: n.ffType })),
      muxes: _level.nodes.filter(n => n.type === 'MUX_SELECT').map(n => ({ id: n.id, value: n.value })),
      inputs: _level.nodes.filter(n => n.type === 'INPUT' && n.stepValues).map(n => ({ id: n.id, fixedValue: n.fixedValue })),
      stepCount: _stepCount,
      clockHigh: _clockHigh,
      ffStates: new Map([..._ffStates].map(([k, v]) => [k, { ...v }])),
      clockValues: _level.nodes.filter(n => n.type === 'CLOCK').map(n => ({ id: n.id, value: n.value })),
    };
  }

  function _restore(snap) {
    if (!_level || !snap) return;
    snap.gates.forEach(s => { const n = _level.nodes.find(nd => nd.id === s.id); if (n) n.gate = s.gate; });
    snap.ffs.forEach(s => { const n = _level.nodes.find(nd => nd.id === s.id); if (n) n.ffType = s.ffType; });
    snap.muxes.forEach(s => { const n = _level.nodes.find(nd => nd.id === s.id); if (n) n.value = s.value; });
    snap.inputs.forEach(s => { const n = _level.nodes.find(nd => nd.id === s.id); if (n) n.fixedValue = s.fixedValue; });
    _stepCount = snap.stepCount;
    _clockHigh = snap.clockHigh;
    _ffStates = new Map([...snap.ffStates].map(([k, v]) => [k, { ...v }]));
    snap.clockValues.forEach(s => { const n = _level.nodes.find(nd => nd.id === s.id); if (n) n.value = s.value; });
    _solved = false;
    _evalResult = null;
  }

  function _pushUndo() {
    const snap = _snapshot();
    if (snap) {
      _undoStack.push(snap);
      if (_undoStack.length > MAX_UNDO) _undoStack.shift();
      _redoStack = []; // clear redo on new action
    }
  }

  // ── Helpers ───────────────────────────────────────────────
  function _initFfStates(nodes) {
    _ffStates = new Map();
    (nodes || []).forEach(n => {
      if (Engine.FF_TYPES.has(n.type)) {
        const q0 = (n.initialQ != null) ? n.initialQ : 0;
        _ffStates.set(n.id, { q: q0, qNot: q0 ^ 1, prevClkValue: null });
      }
    });
  }

  // Also re-init a single FF_SLOT when a type is placed (so state starts fresh)
  function _ensureFfState(nodeId) {
    if (!_ffStates.has(nodeId)) {
      const node = _level.nodes.find(n => n.id === nodeId);
      const q0 = (node && node.initialQ != null) ? node.initialQ : 0;
      _ffStates.set(nodeId, { q: q0, qNot: q0 ^ 1, prevClkValue: null });
    }
  }


  function _setClockValue(val) {
    if (!_level) return;
    _level.nodes.forEach(n => {
      if (n.type === 'CLOCK') n.value = val;
    });
  }

  // ── Public API ────────────────────────────────────────────
  return {

    get currentLevelIndex() { return _currentLevelIndex; },
    get level()             { return _level; },
    get evalResult()        { return _evalResult; },
    get solved()            { return _solved; },
    get hoveredNodeId()     { return _hoveredNodeId; },
    get GATE_PALETTE()      { return GATE_PALETTE; },
    get stepCount()         { return _stepCount; },
    get clockHigh()         { return _clockHigh; },

    getFfStates() { return _ffStates; },

    setLevel(levelObj) {
      _level      = JSON.parse(JSON.stringify(levelObj));
      _undoStack  = [];
      _redoStack  = [];
      _solved     = false;
      _evalResult = null;
      _stepCount  = 0;
      _clockHigh  = false;
      _initFfStates(_level.nodes);
      _setClockValue(0);
    },

    setLevelIndex(idx) {
      _currentLevelIndex = idx;
    },

    setEvalResult(result) {
      _evalResult = result;
      _solved     = result.solved;
    },

    setHoveredNode(id) {
      _hoveredNodeId = id;
    },

    cycleGate(nodeId) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (!node || node.type !== 'GATE_SLOT') return false;
      _pushUndo();
      const idx  = GATE_PALETTE.indexOf(node.gate);
      node.gate  = GATE_PALETTE[(idx + 1) % GATE_PALETTE.length];
      return true;
    },

    setGate(nodeId, gate) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (!node || node.type !== 'GATE_SLOT') return;
      _pushUndo();
      node.gate = gate;
      // Propagate to all linked gate slots in the same group
      if (node.linkedGroup) {
        _level.nodes.forEach(n => {
          if (n.type === 'GATE_SLOT' && n.linkedGroup === node.linkedGroup && n.id !== nodeId) {
            n.gate = gate;
          }
        });
      }
    },

    // Place a flip-flop type into an FF_SLOT node.
    setFfType(nodeId, ffType) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (!node || node.type !== 'FF_SLOT') return;
      _pushUndo();
      node.ffType = ffType || null;
      if (ffType) _ensureFfState(nodeId);
      else _ffStates.delete(nodeId);
      // Propagate to all linked FF slots in the same group
      if (node.linkedGroup) {
        _level.nodes.forEach(n => {
          if (n.type === 'FF_SLOT' && n.linkedGroup === node.linkedGroup && n.id !== nodeId) {
            n.ffType = ffType || null;
            if (ffType) _ensureFfState(n.id);
            else _ffStates.delete(n.id);
          }
        });
      }
    },

    advanceLevel() {
      _currentLevelIndex++;
    },

    undo() {
      if (_undoStack.length === 0 || !_level) return false;
      _redoStack.push(_snapshot());
      _restore(_undoStack.pop());
      return true;
    },

    redo() {
      if (_redoStack.length === 0 || !_level) return false;
      _undoStack.push(_snapshot());
      _restore(_redoStack.pop());
      return true;
    },

    get canUndo() { return _undoStack.length > 0; },
    get canRedo() { return _redoStack.length > 0; },

    resetLevel() {
      if (!_level) return;
      _undoStack = [];
      _redoStack = [];
      _level.nodes.forEach(n => {
        if (n.type === 'GATE_SLOT') n.gate = null;
        if (n.type === 'FF_SLOT') n.ffType = null;
        if (n.type === 'INPUT' && n.stepValues) n.fixedValue = n.stepValues[0];
        if (n.type === 'MUX_SELECT') n.value = n.initialValue ?? 0;
      });
      _solved     = false;
      _evalResult = null;
      _stepCount  = 0;
      _clockHigh  = false;
      _initFfStates(_level.nodes);
      _setClockValue(0);
    },

    // ── Clock Control ──────────────────────────────────────

    // Deliver one full clock cycle: CLK goes 0→1 (rising edge triggers FFs),
    // then immediately falls back to 0. This is the "STEP" action.
    stepClock() {
      if (!_level || _solved) return;
      _pushUndo();
      _stepCount++;
      // Update inputs that have per-step values (stepValues array)
      _level.nodes.forEach(n => {
        if (n.type === 'INPUT' && n.stepValues) {
          const idx = Math.min(_stepCount, n.stepValues.length) - 1;
          n.fixedValue = n.stepValues[idx];
        }
      });
      _clockHigh = true;
      _setClockValue(1);
      // tick() in main.js will call evaluate() while CLK=1 (detecting the rising edge),
      // then lower the clock via State.lowerClock().
    },

    // For auto-clock: raise CLK, let one tick pass, then lower.
    // Returns the value the clock was set to (caller may need to re-evaluate).
    raiseClock() {
      if (!_level) return;
      _clockHigh = true;
      _setClockValue(1);
    },

    lowerClock() {
      if (!_level) return;
      _clockHigh = false;
      _setClockValue(0);
    },

    resetFfStates() {
      _initFfStates(_level ? _level.nodes : []);
      _stepCount = 0;
      _clockHigh = false;
      _setClockValue(0);
    },

    isSequentialLevel() {
      return _level && _level.nodes.some(n => n.type === 'CLOCK' || Engine.FF_TYPES.has(n.type));
    },
  };

})();
