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

  // ── Helpers ───────────────────────────────────────────────
  function _initFfStates(nodes) {
    _ffStates = new Map();
    (nodes || []).forEach(n => {
      if (Engine.FF_TYPES.has(n.type)) {
        _ffStates.set(n.id, { q: 0, qNot: 1, prevClkValue: null });
      }
    });
  }

  // Also re-init a single FF_SLOT when a type is placed (so state starts fresh)
  function _ensureFfState(nodeId) {
    if (!_ffStates.has(nodeId)) {
      _ffStates.set(nodeId, { q: 0, qNot: 1, prevClkValue: null });
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
      const idx  = GATE_PALETTE.indexOf(node.gate);
      node.gate  = GATE_PALETTE[(idx + 1) % GATE_PALETTE.length];
      return true;
    },

    setGate(nodeId, gate) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (node && node.type === 'GATE_SLOT') node.gate = gate;
    },

    // Place a flip-flop type into an FF_SLOT node.
    setFfType(nodeId, ffType) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (!node || node.type !== 'FF_SLOT') return;
      node.ffType = ffType || null;
      if (ffType) _ensureFfState(nodeId);
      else _ffStates.delete(nodeId);
    },

    advanceLevel() {
      _currentLevelIndex++;
    },

    resetLevel() {
      if (!_level) return;
      _level.nodes.forEach(n => {
        if (n.type === 'GATE_SLOT') n.gate = null;
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
      // Rising edge
      _clockHigh = true;
      _setClockValue(1);
      // The engine will detect the rising edge on the next evaluate() call.
      // After evaluation, bring clock back low.
      _stepCount++;
      _clockHigh = false;
      _setClockValue(0);
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
