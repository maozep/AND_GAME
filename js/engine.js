/* ============================================================
   engine.js — DAG Evaluation Engine (Kahn's Topological Sort)
   ============================================================ */

const Engine = (() => {

  // ── Gate Truth Tables ──────────────────────────────────────
  const GATE_FN = {
    AND:  (a, b) => (a & b),
    OR:   (a, b) => (a | b),
    XOR:  (a, b) => (a ^ b),
    NAND: (a, b) => ((a & b) ^ 1),
    NOR:  (a, b) => ((a | b) ^ 1),
    NOT:  (a)    => (a ^ 1),
  };

  // ── Evaluate a complete level ──────────────────────────────
  // Returns:
  //   nodeValues : Map<nodeId, 0|1|null>
  //   wireValues : Map<wireId, 0|1|null>
  //   solved     : boolean
  function evaluate(level) {
    const { nodes, wires } = level;

    // Index nodes by id for O(1) lookup
    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    // nodeValues holds the computed output value for each node
    const nodeValues = new Map();

    // wireValues holds the signal on each wire
    const wireValues = new Map();

    // ── Build adjacency structures ─────────────────────────

    // successors[id] = [{ wire, targetNode }]
    const successors = new Map(nodes.map(n => [n.id, []]));

    // inputs[id] = [{ wire, sourceId }]  — ordered by targetInputIndex
    const inputs = new Map(nodes.map(n => [n.id, []]));

    wires.forEach(wire => {
      successors.get(wire.sourceId).push({ wire, targetId: wire.targetId });
      const arr = inputs.get(wire.targetId);
      arr.push({ wire, sourceId: wire.sourceId, inputIndex: wire.targetInputIndex });
    });

    // Sort each node's input list by inputIndex so gate fn receives args in order
    inputs.forEach(arr => arr.sort((a, b) => a.inputIndex - b.inputIndex));

    // ── Kahn's Algorithm ──────────────────────────────────

    // In-degree = number of incoming wires for each node
    const inDegree = new Map(nodes.map(n => [n.id, 0]));
    wires.forEach(w => inDegree.set(w.targetId, (inDegree.get(w.targetId) || 0) + 1));

    const queue = [];
    inDegree.forEach((deg, id) => {
      if (deg === 0) queue.push(id);
    });

    const order = [];
    while (queue.length > 0) {
      const id = queue.shift();
      order.push(id);
      successors.get(id).forEach(({ targetId }) => {
        const newDeg = inDegree.get(targetId) - 1;
        inDegree.set(targetId, newDeg);
        if (newDeg === 0) queue.push(targetId);
      });
    }

    // ── Propagate Values ─────────────────────────────────

    order.forEach(id => {
      const node = nodeMap.get(id);
      let value = null;

      if (node.type === 'INPUT') {
        value = node.fixedValue;

      } else if (node.type === 'GATE_SLOT') {
        if (node.gate === null) {
          // No gate placed — broken signal
          value = null;
        } else {
          const inputSlots = inputs.get(id);
          const args = inputSlots.map(slot => nodeValues.get(slot.sourceId));

          // If any upstream input is null (broken), output is null
          if (args.some(a => a === null || a === undefined)) {
            value = null;
          } else {
            const fn = GATE_FN[node.gate];
            value = fn(...args);
          }
        }

      } else if (node.type === 'OUTPUT') {
        // OUTPUT is a pass-through — it takes its single upstream value
        const inputSlots = inputs.get(id);
        if (inputSlots.length > 0) {
          value = nodeValues.get(inputSlots[0].sourceId);
          if (value === undefined) value = null;
        }
      }

      nodeValues.set(id, value);

      // Write computed value to all outgoing wires
      successors.get(id).forEach(({ wire }) => {
        wireValues.set(wire.id, value);
      });
    });

    // ── Win Condition ─────────────────────────────────────

    const outputNodes = nodes.filter(n => n.type === 'OUTPUT');
    const solved = outputNodes.length > 0 && outputNodes.every(n => {
      const computed = nodeValues.get(n.id);
      return computed !== null && computed === n.targetValue;
    });

    return { nodeValues, wireValues, solved };
  }

  return { evaluate, GATE_FN };

})();
