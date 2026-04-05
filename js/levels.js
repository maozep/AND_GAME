/* ============================================================
   levels.js — Hardcoded Puzzle Level Definitions
   ============================================================ */

// Node positions use a logical coordinate space.
// The renderer maps these to actual canvas pixels via a viewport transform.
// Design grid: 1 unit = ~90px on a 1280px-wide canvas.

const LEVELS = [

  // ── Level 1: "First Contact" ─────────────────────────────
  // Tutorial. Two inputs feed a single gate. One output.
  // Solution: OR gate  →  OR(1, 0) = 1
  // Secondary path: what happens with AND(1,0)=0, XOR(1,0)=1, etc.
  {
    id: 1,
    name: 'FIRST CONTACT',
    description: 'Route the signals through a single gate to light the output.',
    nodes: [
      {
        id: 'in_A', type: 'INPUT',
        x: 200, y: 320,
        fixedValue: 1,
        label: 'A',
      },
      {
        id: 'in_B', type: 'INPUT',
        x: 200, y: 480,
        fixedValue: 0,
        label: 'B',
      },
      {
        id: 'gate_1', type: 'GATE_SLOT',
        x: 550, y: 400,
        gate: null,
        label: null,
      },
      {
        id: 'out_X', type: 'OUTPUT',
        x: 900, y: 400,
        targetValue: 1,
        label: 'X',
      },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',   targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',   targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_1', targetId: 'out_X',  targetInputIndex: 0 },
    ],
  },

  // ── Level 2: "Dual Path" ─────────────────────────────────
  // Fan-out: in_A feeds BOTH gate_1 and gate_2.
  // gate_1(A=1, B=0): solution OR  → OR(1,0)=1   (out_X target = 1)
  // gate_2(A=1, C=1): solution NOR → NOR(1,1)=0  (out_Y target = 0)
  {
    id: 2,
    name: 'DUAL PATH',
    description: 'Signal A fans out to both gates — both outputs must match.',
    nodes: [
      {
        id: 'in_A', type: 'INPUT',
        x: 200, y: 280,
        fixedValue: 1,
        label: 'A',
      },
      {
        id: 'in_B', type: 'INPUT',
        x: 200, y: 480,
        fixedValue: 0,
        label: 'B',
      },
      {
        id: 'in_C', type: 'INPUT',
        x: 200, y: 580,
        fixedValue: 1,
        label: 'C',
      },
      {
        id: 'gate_1', type: 'GATE_SLOT',
        x: 520, y: 280,
        gate: null,
        label: null,
      },
      {
        id: 'gate_2', type: 'GATE_SLOT',
        x: 520, y: 520,
        gate: null,
        label: null,
      },
      {
        id: 'out_X', type: 'OUTPUT',
        x: 900, y: 280,
        targetValue: 1,
        label: 'X',
      },
      {
        id: 'out_Y', type: 'OUTPUT',
        x: 900, y: 520,
        targetValue: 0,
        label: 'Y',
      },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',   targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_A',   targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'in_B',   targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_C',   targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_1', targetId: 'out_X',  targetInputIndex: 0 },
      { id: 'w6', sourceId: 'gate_2', targetId: 'out_Y',  targetInputIndex: 0 },
    ],
  },

  // ── Level 3: "Chain Reaction" ─────────────────────────────
  // Two inputs → gate_1 → gate_2 (chained) → output.
  // Fan-out: in_B also connects directly to gate_2.
  // Solution: gate_1 = AND → AND(1,1)=1
  //           gate_2 = XOR → XOR(1,0)=1  (out_Z target = 1)
  {
    id: 3,
    name: 'CHAIN REACTION',
    description: 'Gates in series. The output of one feeds the next.',
    nodes: [
      {
        id: 'in_A', type: 'INPUT',
        x: 180, y: 300,
        fixedValue: 1,
        label: 'A',
      },
      {
        id: 'in_B', type: 'INPUT',
        x: 180, y: 480,
        fixedValue: 1,
        label: 'B',
      },
      {
        id: 'in_C', type: 'INPUT',
        x: 180, y: 600,
        fixedValue: 0,
        label: 'C',
      },
      {
        id: 'gate_1', type: 'GATE_SLOT',
        x: 480, y: 300,
        gate: null,
        label: null,
      },
      {
        id: 'gate_2', type: 'GATE_SLOT',
        x: 720, y: 460,
        gate: null,
        label: null,
      },
      {
        id: 'out_Z', type: 'OUTPUT',
        x: 980, y: 460,
        targetValue: 1,
        label: 'Z',
      },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',   targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',   targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_1', targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C',   targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_2', targetId: 'out_Z',  targetInputIndex: 0 },
    ],
  },

  // ── Level 4: "Three-Way Junction" ────────────────────────
  // Three inputs. Three gates. Fan-out on in_A. Two outputs.
  // Solution: gate_1 = NAND → NAND(0,1)=1
  //           gate_2 = AND  → AND(1,1)=1
  //           gate_3 = NOR  → NOR(1,1)=0
  //           out_P target=0, out_Q target=1 ... wait let's be precise:
  // gate_1: NAND(0,1)=1  → gate_3 input_0
  // gate_2: AND(1,1)=1   → out_Q=1  ✓
  // gate_3: NOR(1,1)=0   → out_P=0  ✓
  {
    id: 4,
    name: 'THREE-WAY JUNCTION',
    description: 'Fan-out signals through a tree of gates. Three slots to fill.',
    nodes: [
      {
        id: 'in_A', type: 'INPUT',
        x: 160, y: 240,
        fixedValue: 0,
        label: 'A',
      },
      {
        id: 'in_B', type: 'INPUT',
        x: 160, y: 400,
        fixedValue: 1,
        label: 'B',
      },
      {
        id: 'in_C', type: 'INPUT',
        x: 160, y: 560,
        fixedValue: 1,
        label: 'C',
      },
      {
        id: 'gate_1', type: 'GATE_SLOT',
        x: 440, y: 320,
        gate: null,
      },
      {
        id: 'gate_2', type: 'GATE_SLOT',
        x: 440, y: 500,
        gate: null,
      },
      {
        id: 'gate_3', type: 'GATE_SLOT',
        x: 720, y: 320,
        gate: null,
      },
      {
        id: 'out_P', type: 'OUTPUT',
        x: 980, y: 320,
        targetValue: 0,
        label: 'P',
      },
      {
        id: 'out_Q', type: 'OUTPUT',
        x: 980, y: 500,
        targetValue: 1,
        label: 'Q',
      },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',   targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',   targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_B',   targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C',   targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_1', targetId: 'gate_3', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_C',   targetId: 'gate_3', targetInputIndex: 1 },
      { id: 'w7', sourceId: 'gate_3', targetId: 'out_P',  targetInputIndex: 0 },
      { id: 'w8', sourceId: 'gate_2', targetId: 'out_Q',  targetInputIndex: 0 },
    ],
  },

];
