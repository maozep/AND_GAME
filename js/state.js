/* ============================================================
   state.js — Global Game State
   ============================================================ */

const State = (() => {

  let _currentLevelIndex = 0;
  let _level             = null;   // Active Level object (cloned from levels.js)
  let _evalResult        = null;   // Last result from engine.evaluate()
  let _solved            = false;
  let _hoveredNodeId     = null;

  // Gate cycling order (null = empty slot)
  const GATE_PALETTE = [null, 'AND', 'OR', 'XOR', 'NAND', 'NOR', 'NOT'];

  return {

    get currentLevelIndex() { return _currentLevelIndex; },
    get level()             { return _level; },
    get evalResult()        { return _evalResult; },
    get solved()            { return _solved; },
    get hoveredNodeId()     { return _hoveredNodeId; },
    get GATE_PALETTE()      { return GATE_PALETTE; },

    setLevel(levelObj) {
      // Deep-clone so original level definition is never mutated
      _level   = JSON.parse(JSON.stringify(levelObj));
      _solved  = false;
      _evalResult = null;
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

    // Cycle the gate on a GATE_SLOT node.
    // Returns true if the gate actually changed.
    cycleGate(nodeId) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (!node || node.type !== 'GATE_SLOT') return false;

      const idx  = GATE_PALETTE.indexOf(node.gate);
      const next = GATE_PALETTE[(idx + 1) % GATE_PALETTE.length];
      node.gate  = next;
      return true;
    },

    // Set a specific gate (used by reset / undo if extended later)
    setGate(nodeId, gate) {
      const node = _level.nodes.find(n => n.id === nodeId);
      if (node && node.type === 'GATE_SLOT') node.gate = gate;
    },

    advanceLevel() {
      _currentLevelIndex++;
    },

    resetLevel() {
      // Re-clear all gate slots without re-cloning from source
      if (!_level) return;
      _level.nodes.forEach(n => {
        if (n.type === 'GATE_SLOT') n.gate = null;
      });
      _solved = false;
      _evalResult = null;
    },
  };

})();
