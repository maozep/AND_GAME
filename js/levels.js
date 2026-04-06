/* ============================================================
   levels.js — 50 Puzzle Levels Across 5 Educational Tabs
   ============================================================
   Tab 1 – "1. Basics"             (IDs  1–10)  One to three gate slots
   Tab 2 – "2. Classic Circuits"   (IDs 11–20)  Famous building blocks
   Tab 3 – "3. Advanced Circuits"  (IDs 21–30)  Multi-input/output circuits
   Tab 4 – "4. Flip-Flops"         (IDs 31–40)  FF-only sequential puzzles
   Tab 5 – "5. Sequential Logic"   (IDs 41–50)  FF + combinational logic
   ============================================================ */

const LEVELS = [

  // ════════════════════════════════════════════════════════════
  // TAB 1 — 1. Basics  (IDs 1–10)
  // One to three gate slots. Introduces each gate type.
  // ════════════════════════════════════════════════════════════

  // L1 — AND GATE  (4 cases: all input combos, only AND satisfies all)
  {
    id: 1, name: 'AND GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL four input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'AND outputs 1 ONLY when both inputs are 1. Check all four rows.',
    nodes: [
      // Case 1: A=0, B=0 → 0
      { id: 'c1_A', type: 'INPUT',     x: 200, y: 140, fixedValue: 0, label: 'A' },
      { id: 'c1_B', type: 'INPUT',     x: 200, y: 240, fixedValue: 0, label: 'B' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 550, y: 190, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 190, targetValue: 0, label: 'Z' },
      // Case 2: A=0, B=1 → 0
      { id: 'c2_A', type: 'INPUT',     x: 200, y: 310, fixedValue: 0, label: 'A' },
      { id: 'c2_B', type: 'INPUT',     x: 200, y: 410, fixedValue: 1, label: 'B' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 550, y: 360, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 360, targetValue: 0, label: 'Z' },
      // Case 3: A=1, B=0 → 0
      { id: 'c3_A', type: 'INPUT',     x: 200, y: 480, fixedValue: 1, label: 'A' },
      { id: 'c3_B', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'B' },
      { id: 'c3_g', type: 'GATE_SLOT', x: 550, y: 530, linkedGroup: 'main' },
      { id: 'c3_Z', type: 'OUTPUT',    x: 900, y: 530, targetValue: 0, label: 'Z' },
      // Case 4: A=1, B=1 → 1
      { id: 'c4_A', type: 'INPUT',     x: 200, y: 650, fixedValue: 1, label: 'A' },
      { id: 'c4_B', type: 'INPUT',     x: 200, y: 750, fixedValue: 1, label: 'B' },
      { id: 'c4_g', type: 'GATE_SLOT', x: 550, y: 700, linkedGroup: 'main' },
      { id: 'c4_Z', type: 'OUTPUT',    x: 900, y: 700, targetValue: 1, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B', targetId: 'c1_g', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B', targetId: 'c2_g', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
      { id: 'c3w1', sourceId: 'c3_A', targetId: 'c3_g', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B', targetId: 'c3_g', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g', targetId: 'c3_Z', targetInputIndex: 0 },
      { id: 'c4w1', sourceId: 'c4_A', targetId: 'c4_g', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B', targetId: 'c4_g', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g', targetId: 'c4_Z', targetInputIndex: 0 },
    ],
  },

  // L2 — OR GATE  (4 cases)
  {
    id: 2, name: 'OR GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL four input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'OR outputs 1 when at least one input is 1. Only OR matches all four rows.',
    nodes: [
      // Case 1: A=0, B=0 → 0
      { id: 'c1_A', type: 'INPUT',     x: 200, y: 140, fixedValue: 0, label: 'A' },
      { id: 'c1_B', type: 'INPUT',     x: 200, y: 240, fixedValue: 0, label: 'B' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 550, y: 190, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 190, targetValue: 0, label: 'Z' },
      // Case 2: A=0, B=1 → 1
      { id: 'c2_A', type: 'INPUT',     x: 200, y: 310, fixedValue: 0, label: 'A' },
      { id: 'c2_B', type: 'INPUT',     x: 200, y: 410, fixedValue: 1, label: 'B' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 550, y: 360, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 360, targetValue: 1, label: 'Z' },
      // Case 3: A=1, B=0 → 1
      { id: 'c3_A', type: 'INPUT',     x: 200, y: 480, fixedValue: 1, label: 'A' },
      { id: 'c3_B', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'B' },
      { id: 'c3_g', type: 'GATE_SLOT', x: 550, y: 530, linkedGroup: 'main' },
      { id: 'c3_Z', type: 'OUTPUT',    x: 900, y: 530, targetValue: 1, label: 'Z' },
      // Case 4: A=1, B=1 → 1
      { id: 'c4_A', type: 'INPUT',     x: 200, y: 650, fixedValue: 1, label: 'A' },
      { id: 'c4_B', type: 'INPUT',     x: 200, y: 750, fixedValue: 1, label: 'B' },
      { id: 'c4_g', type: 'GATE_SLOT', x: 550, y: 700, linkedGroup: 'main' },
      { id: 'c4_Z', type: 'OUTPUT',    x: 900, y: 700, targetValue: 1, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B', targetId: 'c1_g', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B', targetId: 'c2_g', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
      { id: 'c3w1', sourceId: 'c3_A', targetId: 'c3_g', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B', targetId: 'c3_g', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g', targetId: 'c3_Z', targetInputIndex: 0 },
      { id: 'c4w1', sourceId: 'c4_A', targetId: 'c4_g', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B', targetId: 'c4_g', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g', targetId: 'c4_Z', targetInputIndex: 0 },
    ],
  },

  // L3 — NOT GATE  (2 cases: all input combos for single input)
  {
    id: 3, name: 'NOT GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NOT inverts the input: 0→1, 1→0. It is the only single-input gate.',
    nodes: [
      // Case 1: A=0 → 1
      { id: 'c1_A', type: 'INPUT',     x: 220, y: 300, fixedValue: 0, label: 'A' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 560, y: 300, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 300, targetValue: 1, label: 'Z' },
      // Case 2: A=1 → 0
      { id: 'c2_A', type: 'INPUT',     x: 220, y: 500, fixedValue: 1, label: 'A' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 560, y: 500, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 500, targetValue: 0, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
    ],
  },

  // L4 — NAND GATE  (4 cases)
  {
    id: 4, name: 'NAND GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL four input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NAND is inverted AND: output is 0 ONLY when both inputs are 1.',
    nodes: [
      // Case 1: A=0, B=0 → 1
      { id: 'c1_A', type: 'INPUT',     x: 200, y: 140, fixedValue: 0, label: 'A' },
      { id: 'c1_B', type: 'INPUT',     x: 200, y: 240, fixedValue: 0, label: 'B' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 550, y: 190, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 190, targetValue: 1, label: 'Z' },
      // Case 2: A=0, B=1 → 1
      { id: 'c2_A', type: 'INPUT',     x: 200, y: 310, fixedValue: 0, label: 'A' },
      { id: 'c2_B', type: 'INPUT',     x: 200, y: 410, fixedValue: 1, label: 'B' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 550, y: 360, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 360, targetValue: 1, label: 'Z' },
      // Case 3: A=1, B=0 → 1
      { id: 'c3_A', type: 'INPUT',     x: 200, y: 480, fixedValue: 1, label: 'A' },
      { id: 'c3_B', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'B' },
      { id: 'c3_g', type: 'GATE_SLOT', x: 550, y: 530, linkedGroup: 'main' },
      { id: 'c3_Z', type: 'OUTPUT',    x: 900, y: 530, targetValue: 1, label: 'Z' },
      // Case 4: A=1, B=1 → 0
      { id: 'c4_A', type: 'INPUT',     x: 200, y: 650, fixedValue: 1, label: 'A' },
      { id: 'c4_B', type: 'INPUT',     x: 200, y: 750, fixedValue: 1, label: 'B' },
      { id: 'c4_g', type: 'GATE_SLOT', x: 550, y: 700, linkedGroup: 'main' },
      { id: 'c4_Z', type: 'OUTPUT',    x: 900, y: 700, targetValue: 0, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B', targetId: 'c1_g', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B', targetId: 'c2_g', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
      { id: 'c3w1', sourceId: 'c3_A', targetId: 'c3_g', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B', targetId: 'c3_g', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g', targetId: 'c3_Z', targetInputIndex: 0 },
      { id: 'c4w1', sourceId: 'c4_A', targetId: 'c4_g', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B', targetId: 'c4_g', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g', targetId: 'c4_Z', targetInputIndex: 0 },
    ],
  },

  // L5 — NOR GATE  (4 cases)
  {
    id: 5, name: 'NOR GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL four input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NOR is inverted OR: output is 1 ONLY when both inputs are 0.',
    nodes: [
      // Case 1: A=0, B=0 → 1
      { id: 'c1_A', type: 'INPUT',     x: 200, y: 140, fixedValue: 0, label: 'A' },
      { id: 'c1_B', type: 'INPUT',     x: 200, y: 240, fixedValue: 0, label: 'B' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 550, y: 190, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 190, targetValue: 1, label: 'Z' },
      // Case 2: A=0, B=1 → 0
      { id: 'c2_A', type: 'INPUT',     x: 200, y: 310, fixedValue: 0, label: 'A' },
      { id: 'c2_B', type: 'INPUT',     x: 200, y: 410, fixedValue: 1, label: 'B' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 550, y: 360, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 360, targetValue: 0, label: 'Z' },
      // Case 3: A=1, B=0 → 0
      { id: 'c3_A', type: 'INPUT',     x: 200, y: 480, fixedValue: 1, label: 'A' },
      { id: 'c3_B', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'B' },
      { id: 'c3_g', type: 'GATE_SLOT', x: 550, y: 530, linkedGroup: 'main' },
      { id: 'c3_Z', type: 'OUTPUT',    x: 900, y: 530, targetValue: 0, label: 'Z' },
      // Case 4: A=1, B=1 → 0
      { id: 'c4_A', type: 'INPUT',     x: 200, y: 650, fixedValue: 1, label: 'A' },
      { id: 'c4_B', type: 'INPUT',     x: 200, y: 750, fixedValue: 1, label: 'B' },
      { id: 'c4_g', type: 'GATE_SLOT', x: 550, y: 700, linkedGroup: 'main' },
      { id: 'c4_Z', type: 'OUTPUT',    x: 900, y: 700, targetValue: 0, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B', targetId: 'c1_g', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B', targetId: 'c2_g', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
      { id: 'c3w1', sourceId: 'c3_A', targetId: 'c3_g', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B', targetId: 'c3_g', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g', targetId: 'c3_Z', targetInputIndex: 0 },
      { id: 'c4w1', sourceId: 'c4_A', targetId: 'c4_g', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B', targetId: 'c4_g', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g', targetId: 'c4_Z', targetInputIndex: 0 },
    ],
  },

  // L6 — XOR GATE  (4 cases)
  {
    id: 6, name: 'XOR GATE', difficulty: '1. Basics',
    description: 'Find the single gate that produces the correct output for ALL four input combinations.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'XOR outputs 1 when inputs differ. Only XOR matches all four rows.',
    nodes: [
      // Case 1: A=0, B=0 → 0
      { id: 'c1_A', type: 'INPUT',     x: 200, y: 140, fixedValue: 0, label: 'A' },
      { id: 'c1_B', type: 'INPUT',     x: 200, y: 240, fixedValue: 0, label: 'B' },
      { id: 'c1_g', type: 'GATE_SLOT', x: 550, y: 190, linkedGroup: 'main' },
      { id: 'c1_Z', type: 'OUTPUT',    x: 900, y: 190, targetValue: 0, label: 'Z' },
      // Case 2: A=0, B=1 → 1
      { id: 'c2_A', type: 'INPUT',     x: 200, y: 310, fixedValue: 0, label: 'A' },
      { id: 'c2_B', type: 'INPUT',     x: 200, y: 410, fixedValue: 1, label: 'B' },
      { id: 'c2_g', type: 'GATE_SLOT', x: 550, y: 360, linkedGroup: 'main' },
      { id: 'c2_Z', type: 'OUTPUT',    x: 900, y: 360, targetValue: 1, label: 'Z' },
      // Case 3: A=1, B=0 → 1
      { id: 'c3_A', type: 'INPUT',     x: 200, y: 480, fixedValue: 1, label: 'A' },
      { id: 'c3_B', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'B' },
      { id: 'c3_g', type: 'GATE_SLOT', x: 550, y: 530, linkedGroup: 'main' },
      { id: 'c3_Z', type: 'OUTPUT',    x: 900, y: 530, targetValue: 1, label: 'Z' },
      // Case 4: A=1, B=1 → 0
      { id: 'c4_A', type: 'INPUT',     x: 200, y: 650, fixedValue: 1, label: 'A' },
      { id: 'c4_B', type: 'INPUT',     x: 200, y: 750, fixedValue: 1, label: 'B' },
      { id: 'c4_g', type: 'GATE_SLOT', x: 550, y: 700, linkedGroup: 'main' },
      { id: 'c4_Z', type: 'OUTPUT',    x: 900, y: 700, targetValue: 0, label: 'Z' },
    ],
    wires: [
      { id: 'c1w1', sourceId: 'c1_A', targetId: 'c1_g', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B', targetId: 'c1_g', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g', targetId: 'c1_Z', targetInputIndex: 0 },
      { id: 'c2w1', sourceId: 'c2_A', targetId: 'c2_g', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B', targetId: 'c2_g', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g', targetId: 'c2_Z', targetInputIndex: 0 },
      { id: 'c3w1', sourceId: 'c3_A', targetId: 'c3_g', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B', targetId: 'c3_g', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g', targetId: 'c3_Z', targetInputIndex: 0 },
      { id: 'c4w1', sourceId: 'c4_A', targetId: 'c4_g', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B', targetId: 'c4_g', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g', targetId: 'c4_Z', targetInputIndex: 0 },
    ],
  },

  // L7 — GATE CHAIN (2 gates in series)
  // A=1,B=1,C=0 → g1(A,B) → g2(g1,C) → Z=1
  // Solution: g1=AND(1,1)=1, g2=OR(1,0)=1  or  g1=OR(1,1)=1, g2=OR(1,0)=1
  {
    id: 7, name: 'GATE CHAIN', difficulty: '1. Basics',
    description: 'Two gates in series. The output of G1 becomes the first input of G2. Trace left to right.',
    hint: 'Work left to right: choose G1 so its output is 1, then choose G2 so OR/AND of that 1 with C=0 gives 1.',
    nodes: [
      { id: 'in_A', type: 'INPUT',     x: 180, y: 280, fixedValue: 1, label: 'A' },
      { id: 'in_B', type: 'INPUT',     x: 180, y: 460, fixedValue: 1, label: 'B' },
      { id: 'in_C', type: 'INPUT',     x: 180, y: 590, fixedValue: 0, label: 'C' },
      { id: 'g1',   type: 'GATE_SLOT', x: 480, y: 360 },
      { id: 'g2',   type: 'GATE_SLOT', x: 720, y: 460 },
      { id: 'out_Z',type: 'OUTPUT',    x: 980, y: 460, targetValue: 1, label: 'Z' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3', sourceId: 'g1',   targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g2',   targetId: 'out_Z', targetInputIndex: 0 },
    ],
  },

  // L8 — FANOUT (A fans to two gates)
  // A=1,B=1,C=0 → G1(A,B)→X=0, G2(A,C)→Y=1
  // Solution: G1=NAND or XOR (gives 0 from 1,1), G2=OR or NAND (gives 1 from 1,0)
  {
    id: 8, name: 'FANOUT', difficulty: '1. Basics',
    description: 'Signal A feeds BOTH gates simultaneously. Two different targets from the same source.',
    hint: 'A=1 fans out to both. G1 needs to output 0 from (A=1,B=1). G2 needs to output 1 from (A=1,C=0).',
    nodes: [
      { id: 'in_A', type: 'INPUT',     x: 200, y: 300, fixedValue: 1, label: 'A' },
      { id: 'in_B', type: 'INPUT',     x: 200, y: 430, fixedValue: 1, label: 'B' },
      { id: 'in_C', type: 'INPUT',     x: 200, y: 580, fixedValue: 0, label: 'C' },
      { id: 'g1',   type: 'GATE_SLOT', x: 540, y: 360 },
      { id: 'g2',   type: 'GATE_SLOT', x: 540, y: 530 },
      { id: 'out_X',type: 'OUTPUT',    x: 900, y: 360, targetValue: 0, label: 'X' },
      { id: 'out_Y',type: 'OUTPUT',    x: 900, y: 530, targetValue: 1, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_A', targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g1',   targetId: 'out_X', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'g2',   targetId: 'out_Y', targetInputIndex: 0 },
    ],
  },

  // L9 — PARALLEL PATHS (2 independent gate paths)
  // A=1,B=0 → G1 → X=1;  C=1,D=1 → G2 → Y=0
  {
    id: 9, name: 'PARALLEL PATHS', difficulty: '1. Basics',
    description: 'Two completely independent gate paths. Both must hit their targets at the same time.',
    hint: 'Top path: G1(A=1,B=0) must output 1. Bottom path: G2(C=1,D=1) must output 0. Solve each independently.',
    nodes: [
      { id: 'in_A', type: 'INPUT',     x: 200, y: 270, fixedValue: 1, label: 'A' },
      { id: 'in_B', type: 'INPUT',     x: 200, y: 390, fixedValue: 0, label: 'B' },
      { id: 'in_C', type: 'INPUT',     x: 200, y: 520, fixedValue: 1, label: 'C' },
      { id: 'in_D', type: 'INPUT',     x: 200, y: 640, fixedValue: 1, label: 'D' },
      { id: 'g1',   type: 'GATE_SLOT', x: 530, y: 330 },
      { id: 'g2',   type: 'GATE_SLOT', x: 530, y: 580 },
      { id: 'out_X',type: 'OUTPUT',    x: 900, y: 330, targetValue: 1, label: 'X' },
      { id: 'out_Y',type: 'OUTPUT',    x: 900, y: 580, targetValue: 0, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_C', targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_D', targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g1',   targetId: 'out_X', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'g2',   targetId: 'out_Y', targetInputIndex: 0 },
    ],
  },

  // L10 — THREE-GATE NETWORK
  // A=1,B=0,C=1: A,B→G1; B,C→G2; G1,C→G3→P; G2→Q
  // Target P=1,Q=1.  Solution: G1=OR(1,0)=1, G2=OR(0,1)=1, G3=AND(1,1)=1
  {
    id: 10, name: 'THREE-GATE NETWORK', difficulty: '1. Basics',
    description: 'Three gate slots, two outputs. Fan-out and chained logic combined for the first time.',
    hint: 'G2(B=0,C=1) must give Q=1. G1(A=1,B=0) feeds G3 alongside C=1 to give P=1. Work backwards from the targets.',
    nodes: [
      { id: 'in_A', type: 'INPUT',     x: 160, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B', type: 'INPUT',     x: 160, y: 400, fixedValue: 0, label: 'B' },
      { id: 'in_C', type: 'INPUT',     x: 160, y: 560, fixedValue: 1, label: 'C' },
      { id: 'g1',   type: 'GATE_SLOT', x: 440, y: 320 },
      { id: 'g2',   type: 'GATE_SLOT', x: 440, y: 500 },
      { id: 'g3',   type: 'GATE_SLOT', x: 720, y: 320 },
      { id: 'out_P',type: 'OUTPUT',    x: 980, y: 320, targetValue: 1, label: 'P' },
      { id: 'out_Q',type: 'OUTPUT',    x: 980, y: 500, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_B', targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g1',   targetId: 'g3',    targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_C', targetId: 'g3',    targetInputIndex: 1 },
      { id: 'w7', sourceId: 'g3',   targetId: 'out_P', targetInputIndex: 0 },
      { id: 'w8', sourceId: 'g2',   targetId: 'out_Q', targetInputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 2 — 2. Classic Circuits  (IDs 11–20)
  // Famous combinational building blocks used in real hardware.
  // ════════════════════════════════════════════════════════════

  // L11 — HALF ADDER
  // A=1,B=1 → SUM=XOR(1,1)=0, CARRY=AND(1,1)=1
  {
    id: 11, name: 'HALF ADDER', difficulty: '2. Classic Circuits',
    description: 'The most fundamental arithmetic circuit. SUM = A XOR B, CARRY = A AND B. Two outputs from two gate slots.',
    hint: 'SUM uses XOR (adds without carry), CARRY uses AND (carry only when both inputs are 1). Both read A and B directly.',
    nodes: [
      { id: 'in_A',    type: 'INPUT',     x: 220, y: 310, fixedValue: 1, label: 'A' },
      { id: 'in_B',    type: 'INPUT',     x: 220, y: 490, fixedValue: 1, label: 'B' },
      { id: 'g_sum',   type: 'GATE_SLOT', x: 560, y: 310, label: 'SUM' },
      { id: 'g_carry', type: 'GATE_SLOT', x: 560, y: 490, label: 'CARRY' },
      { id: 'out_S',   type: 'OUTPUT',    x: 900, y: 310, targetValue: 0, label: 'SUM' },
      { id: 'out_C',   type: 'OUTPUT',    x: 900, y: 490, targetValue: 1, label: 'CARRY' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',    targetId: 'g_sum',   targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',    targetId: 'g_sum',   targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_A',    targetId: 'g_carry', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_B',    targetId: 'g_carry', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g_sum',   targetId: 'out_S',   targetInputIndex: 0 },
      { id: 'w6', sourceId: 'g_carry', targetId: 'out_C',   targetInputIndex: 0 },
    ],
  },

  // L12 — FULL ADDER
  // A=1,B=1,Cin=0 → SUM=0, COUT=1
  // XOR1=XOR(1,1)=0, XOR2=XOR(0,0)=0, AND1=AND(1,1)=1, AND2=AND(0,0)=0, OR=OR(1,0)=1
  {
    id: 12, name: 'FULL ADDER', difficulty: '2. Classic Circuits',
    description: 'Extends the half adder with a carry-in input. The building block of all multi-bit adders. Five gate slots.',
    hint: 'Two stages: first XOR(A,B) for partial sum, then XOR with Cin for final SUM. AND both stages for carry bits, OR to merge into COUT.',
    nodes: [
      { id: 'in_A',    type: 'INPUT',     x: 120, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B',    type: 'INPUT',     x: 120, y: 380, fixedValue: 1, label: 'B' },
      { id: 'in_CIN',  type: 'INPUT',     x: 120, y: 520, fixedValue: 0, label: 'Cin' },
      { id: 'g_xor1',  type: 'GATE_SLOT', x: 360, y: 300 },
      { id: 'g_xor2',  type: 'GATE_SLOT', x: 600, y: 300 },
      { id: 'g_and1',  type: 'GATE_SLOT', x: 360, y: 490 },
      { id: 'g_and2',  type: 'GATE_SLOT', x: 600, y: 490 },
      { id: 'g_or',    type: 'GATE_SLOT', x: 820, y: 490 },
      { id: 'out_SUM', type: 'OUTPUT',    x: 990, y: 300, targetValue: 0, label: 'SUM' },
      { id: 'out_CO',  type: 'OUTPUT',    x: 990, y: 490, targetValue: 1, label: 'COUT' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_A',   targetId: 'g_xor1', targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B',   targetId: 'g_xor1', targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'g_xor1', targetId: 'g_xor2', targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_CIN', targetId: 'g_xor2', targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_A',   targetId: 'g_and1', targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_B',   targetId: 'g_and1', targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'in_CIN', targetId: 'g_and2', targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'g_xor1', targetId: 'g_and2', targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'g_and1', targetId: 'g_or',   targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g_and2', targetId: 'g_or',   targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g_xor2', targetId: 'out_SUM',targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g_or',   targetId: 'out_CO', targetInputIndex: 0 },
    ],
  },

  // L13 — XNOR GATE
  // A=1,B=1 → XOR(1,1)=0 → NOT(0)=1
  {
    id: 13, name: 'XNOR GATE', difficulty: '2. Classic Circuits',
    description: 'XNOR = XOR then NOT. Output is 1 when inputs are EQUAL. Core of equality detectors.',
    hint: 'XNOR is just XOR followed by NOT. Two gate slots chained.',
    nodes: [
      { id: 'in_A',  type: 'INPUT',     x: 180, y: 320, fixedValue: 1, label: 'A' },
      { id: 'in_B',  type: 'INPUT',     x: 180, y: 480, fixedValue: 1, label: 'B' },
      { id: 'g_xor', type: 'GATE_SLOT', x: 500, y: 400 },
      { id: 'g_not', type: 'GATE_SLOT', x: 760, y: 400 },
      { id: 'out_X', type: 'OUTPUT',    x: 980, y: 400, targetValue: 1, label: 'XNOR' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',  targetId: 'g_xor', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',  targetId: 'g_xor', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'g_xor', targetId: 'g_not', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'g_not', targetId: 'out_X', targetInputIndex: 0 },
    ],
  },

  // L14 — 2:1 MUX
  // D0=1,D1=0,S=0 → !S=1 → AND(D0,!S)=1, AND(D1,S)=0 → OR=1
  {
    id: 14, name: '2:1 MUX', difficulty: '2. Classic Circuits',
    description: 'Multiplexer: S=0 routes D0 to output, S=1 routes D1. Foundation of all data selectors.',
    hint: 'Standard MUX: NOT the select, AND with each data path, then OR the results. Four gate slots.',
    nodes: [
      { id: 'in_D0',  type: 'INPUT',     x: 120, y: 240, fixedValue: 1, label: 'D0' },
      { id: 'in_D1',  type: 'INPUT',     x: 120, y: 560, fixedValue: 0, label: 'D1' },
      { id: 'in_S',   type: 'INPUT',     x: 120, y: 400, fixedValue: 0, label: 'S' },
      { id: 'g_ns',   type: 'GATE_SLOT', x: 350, y: 400, label: '!S' },
      { id: 'g_and0', type: 'GATE_SLOT', x: 570, y: 280 },
      { id: 'g_and1', type: 'GATE_SLOT', x: 570, y: 520 },
      { id: 'g_or',   type: 'GATE_SLOT', x: 790, y: 400 },
      { id: 'out_Y',  type: 'OUTPUT',    x: 1010, y: 400, targetValue: 1, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_S',   targetId: 'g_ns',   targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_D0',  targetId: 'g_and0', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'g_ns',   targetId: 'g_and0', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_D1',  targetId: 'g_and1', targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_S',   targetId: 'g_and1', targetInputIndex: 1 },
      { id: 'w6', sourceId: 'g_and0', targetId: 'g_or',   targetInputIndex: 0 },
      { id: 'w7', sourceId: 'g_and1', targetId: 'g_or',   targetInputIndex: 1 },
      { id: 'w8', sourceId: 'g_or',   targetId: 'out_Y',  targetInputIndex: 0 },
    ],
  },

  // L15 — 1:2 DEMUX
  // D=1,S=1 → !S=0 → Y0=AND(D,!S)=0, Y1=AND(D,S)=1
  {
    id: 15, name: '1:2 DEMUX', difficulty: '2. Classic Circuits',
    description: 'Demultiplexer: routes single input D to either Y0 (S=0) or Y1 (S=1). Opposite of MUX.',
    hint: 'Invert S, then AND D with !S for Y0, AND D with S for Y1. Three gate slots.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',     x: 130, y: 400, fixedValue: 1, label: 'D' },
      { id: 'in_S',   type: 'INPUT',     x: 130, y: 560, fixedValue: 1, label: 'S' },
      { id: 'g_ns',   type: 'GATE_SLOT', x: 380, y: 560, label: '!S' },
      { id: 'g_y0',   type: 'GATE_SLOT', x: 620, y: 320 },
      { id: 'g_y1',   type: 'GATE_SLOT', x: 620, y: 500 },
      { id: 'out_Y0', type: 'OUTPUT',    x: 940, y: 320, targetValue: 0, label: 'Y0' },
      { id: 'out_Y1', type: 'OUTPUT',    x: 940, y: 500, targetValue: 1, label: 'Y1' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_S',  targetId: 'g_ns',   targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_D',  targetId: 'g_y0',   targetInputIndex: 0 },
      { id: 'w3', sourceId: 'g_ns',  targetId: 'g_y0',   targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_D',  targetId: 'g_y1',   targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_S',  targetId: 'g_y1',   targetInputIndex: 1 },
      { id: 'w6', sourceId: 'g_y0',  targetId: 'out_Y0', targetInputIndex: 0 },
      { id: 'w7', sourceId: 'g_y1',  targetId: 'out_Y1', targetInputIndex: 0 },
    ],
  },

  // L16 — 3-BIT ODD PARITY
  // A=1,B=0,C=0 → XOR(1,0)=1 → XOR(1,0)=1 → P=1 (one 1 = odd)
  {
    id: 16, name: '3-BIT ODD PARITY', difficulty: '2. Classic Circuits',
    description: 'Odd parity: P=1 when an ODD number of inputs are HIGH. Used in error detection. Chain two XOR gates.',
    hint: 'Parity is always a chain of XOR gates: XOR(XOR(A,B),C). Each XOR accumulates the "odd count" flag.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 150, y: 280, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 150, y: 420, fixedValue: 0, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 150, y: 560, fixedValue: 0, label: 'C' },
      { id: 'g_x1',   type: 'GATE_SLOT', x: 460, y: 350 },
      { id: 'g_x2',   type: 'GATE_SLOT', x: 720, y: 460 },
      { id: 'out_P',  type: 'OUTPUT',    x: 980, y: 460, targetValue: 1, label: 'P' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',  targetId: 'g_x1',  targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',  targetId: 'g_x1',  targetInputIndex: 1 },
      { id: 'w3', sourceId: 'g_x1',  targetId: 'g_x2',  targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C',  targetId: 'g_x2',  targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g_x2',  targetId: 'out_P', targetInputIndex: 0 },
    ],
  },

  // L17 — MAJORITY-OF-3
  // A=1,B=1,C=0: AND_AB=1,AND_BC=0,AND_AC=0 → OR(OR(1,0),0)=1
  {
    id: 17, name: 'MAJORITY-OF-3', difficulty: '2. Classic Circuits',
    description: 'Output is 1 when at least 2 of 3 inputs are HIGH. F = AB+BC+AC. Used in fault-tolerant voting logic.',
    hint: 'Compute all three pairwise ANDs (AB, BC, AC), then OR them together in a two-level OR tree.',
    nodes: [
      { id: 'in_A',  type: 'INPUT',     x: 140, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B',  type: 'INPUT',     x: 140, y: 420, fixedValue: 1, label: 'B' },
      { id: 'in_C',  type: 'INPUT',     x: 140, y: 600, fixedValue: 0, label: 'C' },
      { id: 'g_ab',  type: 'GATE_SLOT', x: 360, y: 200 },
      { id: 'g_bc',  type: 'GATE_SLOT', x: 360, y: 420 },
      { id: 'g_ac',  type: 'GATE_SLOT', x: 360, y: 620 },
      { id: 'g_or1', type: 'GATE_SLOT', x: 580, y: 310 },
      { id: 'g_or2', type: 'GATE_SLOT', x: 780, y: 420 },
      { id: 'out_M', type: 'OUTPUT',    x: 980, y: 420, targetValue: 1, label: 'M' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_A',  targetId: 'g_ab',  targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B',  targetId: 'g_ab',  targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_B',  targetId: 'g_bc',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_C',  targetId: 'g_bc',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_A',  targetId: 'g_ac',  targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_C',  targetId: 'g_ac',  targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'g_ab',  targetId: 'g_or1', targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'g_bc',  targetId: 'g_or1', targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'g_or1', targetId: 'g_or2', targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g_ac',  targetId: 'g_or2', targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g_or2', targetId: 'out_M', targetInputIndex: 0 },
    ],
  },

  // L18 — 2-TO-4 DECODER
  // S1=1,S0=0 → !S1=0,!S0=1 → Y0=AND(0,1)=0, Y1=AND(0,0)=0, Y2=AND(1,1)=1, Y3=AND(1,0)=0
  {
    id: 18, name: '2-TO-4 DECODER', difficulty: '2. Classic Circuits',
    description: 'Decodes a 2-bit address: exactly ONE of four outputs is HIGH. Core building block for memory addressing.',
    hint: 'Invert both select lines first. Each output AND gate takes the appropriate true/complemented versions of S1,S0.',
    nodes: [
      { id: 'in_S0',  type: 'INPUT',     x: 160, y: 360, fixedValue: 0, label: 'S0' },
      { id: 'in_S1',  type: 'INPUT',     x: 160, y: 500, fixedValue: 1, label: 'S1' },
      { id: 'g_ns0',  type: 'GATE_SLOT', x: 360, y: 360, label: '!S0' },
      { id: 'g_ns1',  type: 'GATE_SLOT', x: 360, y: 500, label: '!S1' },
      { id: 'g_y0',   type: 'GATE_SLOT', x: 600, y: 200 },
      { id: 'g_y1',   type: 'GATE_SLOT', x: 600, y: 340 },
      { id: 'g_y2',   type: 'GATE_SLOT', x: 600, y: 480 },
      { id: 'g_y3',   type: 'GATE_SLOT', x: 600, y: 620 },
      { id: 'out_Y0', type: 'OUTPUT',    x: 900, y: 200, targetValue: 0, label: 'Y0' },
      { id: 'out_Y1', type: 'OUTPUT',    x: 900, y: 340, targetValue: 0, label: 'Y1' },
      { id: 'out_Y2', type: 'OUTPUT',    x: 900, y: 480, targetValue: 1, label: 'Y2' },
      { id: 'out_Y3', type: 'OUTPUT',    x: 900, y: 620, targetValue: 0, label: 'Y3' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_S0', targetId: 'g_ns0', targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_S1', targetId: 'g_ns1', targetInputIndex: 0 },
      // Y0 = !S1 AND !S0
      { id: 'w3',  sourceId: 'g_ns1', targetId: 'g_y0',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'g_ns0', targetId: 'g_y0',  targetInputIndex: 1 },
      // Y1 = !S1 AND S0
      { id: 'w5',  sourceId: 'g_ns1', targetId: 'g_y1',  targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_S0', targetId: 'g_y1',  targetInputIndex: 1 },
      // Y2 = S1 AND !S0
      { id: 'w7',  sourceId: 'in_S1', targetId: 'g_y2',  targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'g_ns0', targetId: 'g_y2',  targetInputIndex: 1 },
      // Y3 = S1 AND S0
      { id: 'w9',  sourceId: 'in_S1', targetId: 'g_y3',  targetInputIndex: 0 },
      { id: 'w10', sourceId: 'in_S0', targetId: 'g_y3',  targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g_y0',  targetId: 'out_Y0',targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g_y1',  targetId: 'out_Y1',targetInputIndex: 0 },
      { id: 'w13', sourceId: 'g_y2',  targetId: 'out_Y2',targetInputIndex: 0 },
      { id: 'w14', sourceId: 'g_y3',  targetId: 'out_Y3',targetInputIndex: 0 },
    ],
  },

  // L19 — 1-BIT MAGNITUDE COMPARATOR
  // A=1,B=0 → !B=1 → GT=AND(A,!B)=1; XOR(A,B)=1 → EQ=NOT(1)=0
  {
    id: 19, name: '1-BIT COMPARATOR', difficulty: '2. Classic Circuits',
    description: 'Compares single bits A and B. GT=1 when A>B (A=1,B=0), EQ=1 when A=B. Used in ALUs and sorting.',
    hint: 'GT = A AND NOT(B). EQ = NOT(XOR(A,B)). Four gate slots total.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 150, y: 310, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 150, y: 490, fixedValue: 0, label: 'B' },
      { id: 'g_nb',   type: 'GATE_SLOT', x: 360, y: 490, label: '!B' },
      { id: 'g_gt',   type: 'GATE_SLOT', x: 580, y: 270 },
      { id: 'g_xor',  type: 'GATE_SLOT', x: 580, y: 430 },
      { id: 'g_eq',   type: 'GATE_SLOT', x: 800, y: 430 },
      { id: 'out_GT', type: 'OUTPUT',    x: 980, y: 270, targetValue: 1, label: 'GT' },
      { id: 'out_EQ', type: 'OUTPUT',    x: 980, y: 430, targetValue: 0, label: 'EQ' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_B',  targetId: 'g_nb',  targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_A',  targetId: 'g_gt',  targetInputIndex: 0 },
      { id: 'w3', sourceId: 'g_nb',  targetId: 'g_gt',  targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_A',  targetId: 'g_xor', targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_B',  targetId: 'g_xor', targetInputIndex: 1 },
      { id: 'w6', sourceId: 'g_xor', targetId: 'g_eq',  targetInputIndex: 0 },
      { id: 'w7', sourceId: 'g_gt',  targetId: 'out_GT',targetInputIndex: 0 },
      { id: 'w8', sourceId: 'g_eq',  targetId: 'out_EQ',targetInputIndex: 0 },
    ],
  },

  // L20 — PRIORITY ENCODER (2-to-1)
  // A=0,B=1 → VALID=OR(0,1)=1; !A=1 → CODE=AND(1,1)=1 (B is active, A has priority so CODE=1 means "B")
  {
    id: 20, name: 'PRIORITY ENCODER', difficulty: '2. Classic Circuits',
    description: 'A has priority over B. VALID=1 if any input is active. CODE=0 if A is active, CODE=1 if only B is active.',
    hint: 'VALID = A OR B. CODE = NOT(A) AND B — only HIGH when B is active but A is not.',
    nodes: [
      { id: 'in_A',    type: 'INPUT',     x: 180, y: 320, fixedValue: 0, label: 'A' },
      { id: 'in_B',    type: 'INPUT',     x: 180, y: 480, fixedValue: 1, label: 'B' },
      { id: 'g_na',    type: 'GATE_SLOT', x: 400, y: 290, label: '!A' },
      { id: 'g_valid', type: 'GATE_SLOT', x: 600, y: 390 },
      { id: 'g_code',  type: 'GATE_SLOT', x: 600, y: 520 },
      { id: 'out_V',   type: 'OUTPUT',    x: 900, y: 390, targetValue: 1, label: 'VALID' },
      { id: 'out_C',   type: 'OUTPUT',    x: 900, y: 520, targetValue: 1, label: 'CODE' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',    targetId: 'g_na',    targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_A',    targetId: 'g_valid', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'in_B',    targetId: 'g_valid', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'g_na',    targetId: 'g_code',  targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_B',    targetId: 'g_code',  targetInputIndex: 1 },
      { id: 'w6', sourceId: 'g_valid', targetId: 'out_V',   targetInputIndex: 0 },
      { id: 'w7', sourceId: 'g_code',  targetId: 'out_C',   targetInputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 3 — 3. Advanced Circuits  (IDs 21–30)
  // Multi-input / multi-output industrial circuits.
  // ════════════════════════════════════════════════════════════

  // L21 — 2-BIT RIPPLE CARRY ADDER
  // A1=1,B1=0,A0=1,B0=1 → 11+01 = 100 → S1=0,S0=0,COUT=1
  // HA(A0,B0): S0=XOR(1,1)=0, C0=AND(1,1)=1
  // FA(A1,B1,C0): XOR1=XOR(1,0)=1, S1=XOR(1,1)=0, AND1=AND(1,0)=0, AND2=AND(1,1)=1, COUT=OR(0,1)=1
  {
    id: 21, name: '2-BIT RIPPLE CARRY ADDER', difficulty: '3. Advanced Circuits',
    description: 'Add two 2-bit numbers. A half adder handles bit-0; a full adder handles bit-1 with carry-in. Seven gate slots.',
    hint: 'Bottom: HA(A0,B0) — XOR for S0, AND for C0. Top: FA(A1,B1,C0) — same as the full adder you built earlier, using C0 as carry-in.',
    nodes: [
      { id: 'in_A1',    type: 'INPUT',     x: 110, y: 195, fixedValue: 1, label: 'A1' },
      { id: 'in_B1',    type: 'INPUT',     x: 110, y: 330, fixedValue: 0, label: 'B1' },
      { id: 'in_A0',    type: 'INPUT',     x: 110, y: 490, fixedValue: 1, label: 'A0' },
      { id: 'in_B0',    type: 'INPUT',     x: 110, y: 625, fixedValue: 1, label: 'B0' },
      // HA for bit 0
      { id: 'g_xor0',   type: 'GATE_SLOT', x: 330, y: 558, label: 'S0' },
      { id: 'g_and0',   type: 'GATE_SLOT', x: 330, y: 668, label: 'C0' },
      // FA for bit 1
      { id: 'g_xor1a',  type: 'GATE_SLOT', x: 530, y: 245 },
      { id: 'g_xor1b',  type: 'GATE_SLOT', x: 740, y: 345 },
      { id: 'g_and1a',  type: 'GATE_SLOT', x: 530, y: 385 },
      { id: 'g_and1b',  type: 'GATE_SLOT', x: 740, y: 490 },
      { id: 'g_or1',    type: 'GATE_SLOT', x: 900, y: 430 },
      { id: 'out_S1',   type: 'OUTPUT',    x: 990, y: 285, targetValue: 0, label: 'S1' },
      { id: 'out_S0',   type: 'OUTPUT',    x: 600, y: 558, targetValue: 0, label: 'S0' },
      { id: 'out_COUT', type: 'OUTPUT',    x: 1060, y: 430, targetValue: 1, label: 'COUT' },
    ],
    wires: [
      // HA
      { id: 'w1',  sourceId: 'in_A0',   targetId: 'g_xor0',  targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B0',   targetId: 'g_xor0',  targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_A0',   targetId: 'g_and0',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_B0',   targetId: 'g_and0',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'g_xor0',  targetId: 'out_S0',  targetInputIndex: 0 },
      // FA
      { id: 'w6',  sourceId: 'in_A1',   targetId: 'g_xor1a', targetInputIndex: 0 },
      { id: 'w7',  sourceId: 'in_B1',   targetId: 'g_xor1a', targetInputIndex: 1 },
      { id: 'w8',  sourceId: 'g_xor1a', targetId: 'g_xor1b', targetInputIndex: 0 },
      { id: 'w9',  sourceId: 'g_and0',  targetId: 'g_xor1b', targetInputIndex: 1 },
      { id: 'w10', sourceId: 'in_A1',   targetId: 'g_and1a', targetInputIndex: 0 },
      { id: 'w11', sourceId: 'in_B1',   targetId: 'g_and1a', targetInputIndex: 1 },
      { id: 'w12', sourceId: 'g_and0',  targetId: 'g_and1b', targetInputIndex: 0 },
      { id: 'w13', sourceId: 'g_xor1a', targetId: 'g_and1b', targetInputIndex: 1 },
      { id: 'w14', sourceId: 'g_and1a', targetId: 'g_or1',   targetInputIndex: 0 },
      { id: 'w15', sourceId: 'g_and1b', targetId: 'g_or1',   targetInputIndex: 1 },
      { id: 'w16', sourceId: 'g_xor1b', targetId: 'out_S1',  targetInputIndex: 0 },
      { id: 'w17', sourceId: 'g_or1',   targetId: 'out_COUT',targetInputIndex: 0 },
    ],
  },

  // L22 — 4:1 MUX TREE (3 cascaded 2:1 MUX stages)
  // D0=0,D1=1,D2=0,D3=1,S0=1,S1=0 → selects D1 → Y=1
  // Lower: AND(D0,!S0)=0, AND(D1,S0)=1, OR_lo=1
  // Upper: AND(D2,!S0)=0, AND(D3,S0)=1, OR_up=1
  // Final: AND(OR_lo,!S1)=1, AND(OR_up,S1)=0, OR_out=1
  {
    id: 22, name: '4:1 MUX TREE', difficulty: '3. Advanced Circuits',
    description: 'Select one of four data inputs using two control bits S1,S0. Built from three cascaded 2:1 MUX stages. Eleven gate slots.',
    hint: 'Build three 2:1 MUXes: lower selects D0/D1, upper selects D2/D3, final selects between lower and upper using S1.',
    nodes: [
      { id: 'in_D0',  type: 'INPUT',     x: 80,  y: 140, fixedValue: 0, label: 'D0' },
      { id: 'in_D1',  type: 'INPUT',     x: 80,  y: 260, fixedValue: 1, label: 'D1' },
      { id: 'in_D2',  type: 'INPUT',     x: 80,  y: 410, fixedValue: 0, label: 'D2' },
      { id: 'in_D3',  type: 'INPUT',     x: 80,  y: 530, fixedValue: 1, label: 'D3' },
      { id: 'in_S0',  type: 'INPUT',     x: 80,  y: 640, fixedValue: 1, label: 'S0' },
      { id: 'in_S1',  type: 'INPUT',     x: 80,  y: 730, fixedValue: 0, label: 'S1' },
      { id: 'g_ns0',  type: 'GATE_SLOT', x: 260, y: 640, label: '!S0' },
      { id: 'g_ns1',  type: 'GATE_SLOT', x: 260, y: 730, label: '!S1' },
      // Lower 2:1 MUX
      { id: 'g_a0',   type: 'GATE_SLOT', x: 440, y: 165 },
      { id: 'g_a1',   type: 'GATE_SLOT', x: 440, y: 285 },
      { id: 'g_lo',   type: 'GATE_SLOT', x: 630, y: 225 },
      // Upper 2:1 MUX
      { id: 'g_a2',   type: 'GATE_SLOT', x: 440, y: 420 },
      { id: 'g_a3',   type: 'GATE_SLOT', x: 440, y: 545 },
      { id: 'g_hi',   type: 'GATE_SLOT', x: 630, y: 483 },
      // Final 2:1 MUX
      { id: 'g_fl',   type: 'GATE_SLOT', x: 800, y: 300 },
      { id: 'g_fh',   type: 'GATE_SLOT', x: 800, y: 450 },
      { id: 'g_out',  type: 'GATE_SLOT', x: 960, y: 375 },
      { id: 'out_Y',  type: 'OUTPUT',    x: 1080, y: 375, targetValue: 1, label: 'Y' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_S0',  targetId: 'g_ns0', targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_S1',  targetId: 'g_ns1', targetInputIndex: 0 },
      { id: 'w3',  sourceId: 'in_D0',  targetId: 'g_a0',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'g_ns0',  targetId: 'g_a0',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_D1',  targetId: 'g_a1',  targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_S0',  targetId: 'g_a1',  targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'g_a0',   targetId: 'g_lo',  targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'g_a1',   targetId: 'g_lo',  targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'in_D2',  targetId: 'g_a2',  targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g_ns0',  targetId: 'g_a2',  targetInputIndex: 1 },
      { id: 'w11', sourceId: 'in_D3',  targetId: 'g_a3',  targetInputIndex: 0 },
      { id: 'w12', sourceId: 'in_S0',  targetId: 'g_a3',  targetInputIndex: 1 },
      { id: 'w13', sourceId: 'g_a2',   targetId: 'g_hi',  targetInputIndex: 0 },
      { id: 'w14', sourceId: 'g_a3',   targetId: 'g_hi',  targetInputIndex: 1 },
      { id: 'w15', sourceId: 'g_lo',   targetId: 'g_fl',  targetInputIndex: 0 },
      { id: 'w16', sourceId: 'g_ns1',  targetId: 'g_fl',  targetInputIndex: 1 },
      { id: 'w17', sourceId: 'g_hi',   targetId: 'g_fh',  targetInputIndex: 0 },
      { id: 'w18', sourceId: 'in_S1',  targetId: 'g_fh',  targetInputIndex: 1 },
      { id: 'w19', sourceId: 'g_fl',   targetId: 'g_out', targetInputIndex: 0 },
      { id: 'w20', sourceId: 'g_fh',   targetId: 'g_out', targetInputIndex: 1 },
      { id: 'w21', sourceId: 'g_out',  targetId: 'out_Y', targetInputIndex: 0 },
    ],
  },

  // L23 — 4-BIT EVEN PARITY GENERATOR
  // A=1,B=1,C=0,D=1 → XOR(1,1)=0, XOR(0,1)=1, XOR(0,1)=1 → P=1
  // (three 1s = odd count, parity bit P=1 makes total even)
  {
    id: 23, name: '4-BIT EVEN PARITY', difficulty: '3. Advanced Circuits',
    description: 'Generate even parity for 4 data bits. P=1 when the number of 1s in A,B,C,D is ODD, making the total even. Three XOR gates.',
    hint: 'Chain three XOR gates: XOR(A,B) then XOR with C, then XOR with D.',
    nodes: [
      { id: 'in_A',  type: 'INPUT',     x: 150, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B',  type: 'INPUT',     x: 150, y: 360, fixedValue: 1, label: 'B' },
      { id: 'in_C',  type: 'INPUT',     x: 150, y: 480, fixedValue: 0, label: 'C' },
      { id: 'in_D',  type: 'INPUT',     x: 150, y: 600, fixedValue: 1, label: 'D' },
      { id: 'g_x1',  type: 'GATE_SLOT', x: 400, y: 300 },
      { id: 'g_x2',  type: 'GATE_SLOT', x: 600, y: 390 },
      { id: 'g_x3',  type: 'GATE_SLOT', x: 800, y: 470 },
      { id: 'out_P', type: 'OUTPUT',    x: 1020, y: 470, targetValue: 1, label: 'P' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A',  targetId: 'g_x1',  targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B',  targetId: 'g_x1',  targetInputIndex: 1 },
      { id: 'w3', sourceId: 'g_x1',  targetId: 'g_x2',  targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C',  targetId: 'g_x2',  targetInputIndex: 1 },
      { id: 'w5', sourceId: 'g_x2',  targetId: 'g_x3',  targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_D',  targetId: 'g_x3',  targetInputIndex: 1 },
      { id: 'w7', sourceId: 'g_x3',  targetId: 'out_P', targetInputIndex: 0 },
    ],
  },

  // L24 — CARRY GENERATE / PROPAGATE
  // A1=1,B1=1,A0=1,B0=0 → G1=AND(1,1)=1, P1=XOR(1,1)=0, G0=AND(1,0)=0, P0=XOR(1,0)=1
  {
    id: 24, name: 'CARRY GEN / PROP', difficulty: '3. Advanced Circuits',
    description: 'Carry Lookahead fundamentals: G=A·B (carry Generated), P=A⊕B (carry Propagated). Four gate slots, four outputs.',
    hint: 'G=AND(A,B), P=XOR(A,B). Compute both for each bit position independently.',
    nodes: [
      { id: 'in_A1',  type: 'INPUT',     x: 160, y: 250, fixedValue: 1, label: 'A1' },
      { id: 'in_B1',  type: 'INPUT',     x: 160, y: 370, fixedValue: 1, label: 'B1' },
      { id: 'in_A0',  type: 'INPUT',     x: 160, y: 510, fixedValue: 1, label: 'A0' },
      { id: 'in_B0',  type: 'INPUT',     x: 160, y: 630, fixedValue: 0, label: 'B0' },
      { id: 'g_g1',   type: 'GATE_SLOT', x: 500, y: 275, label: 'G1' },
      { id: 'g_p1',   type: 'GATE_SLOT', x: 500, y: 395, label: 'P1' },
      { id: 'g_g0',   type: 'GATE_SLOT', x: 500, y: 535, label: 'G0' },
      { id: 'g_p0',   type: 'GATE_SLOT', x: 500, y: 655, label: 'P0' },
      { id: 'out_G1', type: 'OUTPUT',    x: 860, y: 275, targetValue: 1, label: 'G1' },
      { id: 'out_P1', type: 'OUTPUT',    x: 860, y: 395, targetValue: 0, label: 'P1' },
      { id: 'out_G0', type: 'OUTPUT',    x: 860, y: 535, targetValue: 0, label: 'G0' },
      { id: 'out_P0', type: 'OUTPUT',    x: 860, y: 655, targetValue: 1, label: 'P0' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_A1', targetId: 'g_g1',  targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B1', targetId: 'g_g1',  targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_A1', targetId: 'g_p1',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_B1', targetId: 'g_p1',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_A0', targetId: 'g_g0',  targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_B0', targetId: 'g_g0',  targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'in_A0', targetId: 'g_p0',  targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'in_B0', targetId: 'g_p0',  targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'g_g1',  targetId: 'out_G1',targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g_p1',  targetId: 'out_P1',targetInputIndex: 0 },
      { id: 'w11', sourceId: 'g_g0',  targetId: 'out_G0',targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g_p0',  targetId: 'out_P0',targetInputIndex: 0 },
    ],
  },

  // L25 — 2-BIT EQUALITY DETECTOR
  // A1=1,B1=1,A0=0,B0=0 → XOR1=0,NOT1=1,XOR0=0,NOT0=1,AND=1 → EQ=1
  {
    id: 25, name: '2-BIT EQUALITY', difficulty: '3. Advanced Circuits',
    description: 'Check if two 2-bit numbers A and B are equal. Uses XNOR per bit, then AND to combine. Five gate slots.',
    hint: 'XNOR each bit pair: NOT(XOR(A1,B1)) and NOT(XOR(A0,B0)), then AND both XNOR results.',
    nodes: [
      { id: 'in_A1',  type: 'INPUT',     x: 150, y: 255, fixedValue: 1, label: 'A1' },
      { id: 'in_B1',  type: 'INPUT',     x: 150, y: 375, fixedValue: 1, label: 'B1' },
      { id: 'in_A0',  type: 'INPUT',     x: 150, y: 510, fixedValue: 0, label: 'A0' },
      { id: 'in_B0',  type: 'INPUT',     x: 150, y: 630, fixedValue: 0, label: 'B0' },
      { id: 'g_xor1', type: 'GATE_SLOT', x: 400, y: 315 },
      { id: 'g_not1', type: 'GATE_SLOT', x: 600, y: 315 },
      { id: 'g_xor0', type: 'GATE_SLOT', x: 400, y: 570 },
      { id: 'g_not0', type: 'GATE_SLOT', x: 600, y: 570 },
      { id: 'g_and',  type: 'GATE_SLOT', x: 790, y: 443 },
      { id: 'out_EQ', type: 'OUTPUT',    x: 990, y: 443, targetValue: 1, label: 'EQ' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A1', targetId: 'g_xor1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B1', targetId: 'g_xor1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'g_xor1',targetId: 'g_not1', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_A0', targetId: 'g_xor0', targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_B0', targetId: 'g_xor0', targetInputIndex: 1 },
      { id: 'w6', sourceId: 'g_xor0',targetId: 'g_not0', targetInputIndex: 0 },
      { id: 'w7', sourceId: 'g_not1',targetId: 'g_and',  targetInputIndex: 0 },
      { id: 'w8', sourceId: 'g_not0',targetId: 'g_and',  targetInputIndex: 1 },
      { id: 'w9', sourceId: 'g_and', targetId: 'out_EQ', targetInputIndex: 0 },
    ],
  },

  // L26 — 3-BIT BINARY TO GRAY CODE
  // B2=1,B1=1,B0=0 → G2=B2=1 (direct), G1=XOR(1,1)=0, G0=XOR(1,0)=1
  {
    id: 26, name: 'BINARY TO GRAY CODE', difficulty: '3. Advanced Circuits',
    description: 'Convert 3-bit binary to Gray code where adjacent values differ by exactly one bit. G2=B2, G1=B2⊕B1, G0=B1⊕B0.',
    hint: 'G2 passes B2 through directly. G1=XOR(B2,B1), G0=XOR(B1,B0). Two gate slots.',
    nodes: [
      { id: 'in_B2',     type: 'INPUT',     x: 180, y: 280, fixedValue: 1, label: 'B2' },
      { id: 'in_B1',     type: 'INPUT',     x: 180, y: 430, fixedValue: 1, label: 'B1' },
      { id: 'in_B0',     type: 'INPUT',     x: 180, y: 580, fixedValue: 0, label: 'B0' },
      { id: 'g_g1',      type: 'GATE_SLOT', x: 500, y: 355, label: 'G1' },
      { id: 'g_g0',      type: 'GATE_SLOT', x: 500, y: 505, label: 'G0' },
      { id: 'out_G2',    type: 'OUTPUT',    x: 860, y: 280, targetValue: 1, label: 'G2' },
      { id: 'out_G1',    type: 'OUTPUT',    x: 860, y: 355, targetValue: 0, label: 'G1' },
      { id: 'out_G0',    type: 'OUTPUT',    x: 860, y: 505, targetValue: 1, label: 'G0' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_B2', targetId: 'out_G2',  targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B2', targetId: 'g_g1',    targetInputIndex: 0 },
      { id: 'w3', sourceId: 'in_B1', targetId: 'g_g1',    targetInputIndex: 1 },
      { id: 'w4', sourceId: 'g_g1',  targetId: 'out_G1',  targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_B1', targetId: 'g_g0',    targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_B0', targetId: 'g_g0',    targetInputIndex: 1 },
      { id: 'w7', sourceId: 'g_g0',  targetId: 'out_G0',  targetInputIndex: 0 },
    ],
  },

  // L27 — GRAY CODE TO BINARY
  // G2=1,G1=0,G0=1 → B2=G2=1, B1=XOR(G2,G1)=XOR(1,0)=1, B0=XOR(B1,G0)=XOR(1,1)=0
  {
    id: 27, name: 'GRAY TO BINARY', difficulty: '3. Advanced Circuits',
    description: 'Inverse: convert Gray code back to binary. B2=G2, B1=G2⊕G1, B0=B1⊕G0. The cascade dependency makes this trickier.',
    hint: 'B2=G2 direct. B1=XOR(G2,G1). B0=XOR(B1,G0) — note B0 depends on the COMPUTED B1, not G1 directly.',
    nodes: [
      { id: 'in_G2',   type: 'INPUT',     x: 180, y: 280, fixedValue: 1, label: 'G2' },
      { id: 'in_G1',   type: 'INPUT',     x: 180, y: 430, fixedValue: 0, label: 'G1' },
      { id: 'in_G0',   type: 'INPUT',     x: 180, y: 580, fixedValue: 1, label: 'G0' },
      { id: 'g_b1',    type: 'GATE_SLOT', x: 480, y: 355, label: 'B1' },
      { id: 'g_b0',    type: 'GATE_SLOT', x: 700, y: 505, label: 'B0' },
      { id: 'out_B2',  type: 'OUTPUT',    x: 900, y: 280, targetValue: 1, label: 'B2' },
      { id: 'out_B1',  type: 'OUTPUT',    x: 900, y: 355, targetValue: 1, label: 'B1' },
      { id: 'out_B0',  type: 'OUTPUT',    x: 900, y: 505, targetValue: 0, label: 'B0' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_G2', targetId: 'out_B2',  targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_G2', targetId: 'g_b1',    targetInputIndex: 0 },
      { id: 'w3', sourceId: 'in_G1', targetId: 'g_b1',    targetInputIndex: 1 },
      { id: 'w4', sourceId: 'g_b1',  targetId: 'out_B1',  targetInputIndex: 0 },
      { id: 'w5', sourceId: 'g_b1',  targetId: 'g_b0',    targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_G0', targetId: 'g_b0',    targetInputIndex: 1 },
      { id: 'w7', sourceId: 'g_b0',  targetId: 'out_B0',  targetInputIndex: 0 },
    ],
  },

  // L28 — 4-TO-2 PRIORITY ENCODER
  // I0=0,I1=0,I2=0,I3=1 → VALID=OR(OR(0,0),OR(0,1))=1, Y1=OR(0,1)=1, Y0=OR(0,1)=1
  // (I3=1 → highest priority → code=11 binary)
  {
    id: 28, name: '4-TO-2 PRIORITY ENCODER', difficulty: '3. Advanced Circuits',
    description: 'Encode the highest-priority active input (I3=highest). VALID=any active, Y1Y0=binary code of that input.',
    hint: 'VALID=OR all inputs (two levels). Y1=I2 OR I3. Y0=I1 OR I3 (simplified encoder).',
    nodes: [
      { id: 'in_I0',   type: 'INPUT',     x: 150, y: 200, fixedValue: 0, label: 'I0' },
      { id: 'in_I1',   type: 'INPUT',     x: 150, y: 340, fixedValue: 0, label: 'I1' },
      { id: 'in_I2',   type: 'INPUT',     x: 150, y: 480, fixedValue: 0, label: 'I2' },
      { id: 'in_I3',   type: 'INPUT',     x: 150, y: 620, fixedValue: 1, label: 'I3' },
      { id: 'g_or01',  type: 'GATE_SLOT', x: 380, y: 270 },
      { id: 'g_or23',  type: 'GATE_SLOT', x: 380, y: 550 },
      { id: 'g_valid', type: 'GATE_SLOT', x: 620, y: 360 },
      { id: 'g_y1',    type: 'GATE_SLOT', x: 620, y: 525 },
      { id: 'g_y0',    type: 'GATE_SLOT', x: 620, y: 640 },
      { id: 'out_V',   type: 'OUTPUT',    x: 900, y: 360, targetValue: 1, label: 'VALID' },
      { id: 'out_Y1',  type: 'OUTPUT',    x: 900, y: 525, targetValue: 1, label: 'Y1' },
      { id: 'out_Y0',  type: 'OUTPUT',    x: 900, y: 640, targetValue: 1, label: 'Y0' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_I0',  targetId: 'g_or01',  targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_I1',  targetId: 'g_or01',  targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_I2',  targetId: 'g_or23',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_I3',  targetId: 'g_or23',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'g_or01', targetId: 'g_valid', targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'g_or23', targetId: 'g_valid', targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'in_I2',  targetId: 'g_y1',    targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'in_I3',  targetId: 'g_y1',    targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'in_I1',  targetId: 'g_y0',    targetInputIndex: 0 },
      { id: 'w10', sourceId: 'in_I3',  targetId: 'g_y0',    targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g_valid',targetId: 'out_V',   targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g_y1',   targetId: 'out_Y1',  targetInputIndex: 0 },
      { id: 'w13', sourceId: 'g_y0',   targetId: 'out_Y0',  targetInputIndex: 0 },
    ],
  },

  // L29 — MAJORITY & PARITY DUAL OUTPUT
  // A=1,B=1,C=0: MAJ path: AND_AB=1,AND_BC=0,AND_AC=0,OR1=1,OR2=1 → MAJ=1
  //              PAR path: XOR(1,1)=0, XOR(0,0)=0 → PAR=0
  {
    id: 29, name: 'MAJORITY & PARITY', difficulty: '3. Advanced Circuits',
    description: 'Compute BOTH majority vote (≥2 HIGH) AND odd parity from the same 3 inputs simultaneously. Seven gate slots, two outputs.',
    hint: 'Majority: three AND gates (AB,BC,AC) then OR tree. Parity: two XOR gates chained. Both read A,B,C independently.',
    nodes: [
      { id: 'in_A',    type: 'INPUT',     x: 140, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B',    type: 'INPUT',     x: 140, y: 400, fixedValue: 1, label: 'B' },
      { id: 'in_C',    type: 'INPUT',     x: 140, y: 560, fixedValue: 0, label: 'C' },
      // Majority path
      { id: 'g_ab',    type: 'GATE_SLOT', x: 370, y: 195 },
      { id: 'g_bc',    type: 'GATE_SLOT', x: 370, y: 400 },
      { id: 'g_ac',    type: 'GATE_SLOT', x: 370, y: 580 },
      { id: 'g_or1',   type: 'GATE_SLOT', x: 590, y: 300 },
      { id: 'g_or2',   type: 'GATE_SLOT', x: 780, y: 390 },
      // Parity path
      { id: 'g_px1',   type: 'GATE_SLOT', x: 590, y: 530 },
      { id: 'g_px2',   type: 'GATE_SLOT', x: 780, y: 590 },
      { id: 'out_MAJ', type: 'OUTPUT',    x: 980, y: 390, targetValue: 1, label: 'MAJ' },
      { id: 'out_PAR', type: 'OUTPUT',    x: 980, y: 590, targetValue: 0, label: 'PAR' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_A',  targetId: 'g_ab',   targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B',  targetId: 'g_ab',   targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_B',  targetId: 'g_bc',   targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_C',  targetId: 'g_bc',   targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_A',  targetId: 'g_ac',   targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_C',  targetId: 'g_ac',   targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'g_ab',  targetId: 'g_or1',  targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'g_bc',  targetId: 'g_or1',  targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'g_or1', targetId: 'g_or2',  targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g_ac',  targetId: 'g_or2',  targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g_or2', targetId: 'out_MAJ',targetInputIndex: 0 },
      { id: 'w12', sourceId: 'in_A',  targetId: 'g_px1',  targetInputIndex: 0 },
      { id: 'w13', sourceId: 'in_B',  targetId: 'g_px1',  targetInputIndex: 1 },
      { id: 'w14', sourceId: 'g_px1', targetId: 'g_px2',  targetInputIndex: 0 },
      { id: 'w15', sourceId: 'in_C',  targetId: 'g_px2',  targetInputIndex: 1 },
      { id: 'w16', sourceId: 'g_px2', targetId: 'out_PAR',targetInputIndex: 0 },
    ],
  },

  // L30 — LOGIC MATRIX (5 in, 8 out, 12 gate slots — boss level)
  // A=1,B=0,C=1,D=0,E=1
  // Intended solution: g1=OR,g2=NOR,g3=AND,g4=OR,g5=OR,g6=NAND,g7=NOR,g8=OR,g9=AND,g10=XOR,g11=NOR,g12=AND
  // g1=OR(1,0)=1,g2=NOR(1,0)=0,g3=AND(0,1)=0,g4=OR(1,1)=1
  // g5=OR(1,0)=1,g6=NAND(0,0)=1,g7=NOR(0,1)=0
  // g8=OR(1,1)=1,g9=AND(1,1)=1,g10=XOR(1,0)=1,g11=NOR(0,0)=1,g12=AND(1,1)=1
  // Outputs: O1=g1=1,O2=g2=0,O3=g5=1,O4=g8=1,O5=g9=1,O6=g10=1,O7=g11=1,O8=g12=1
  {
    id: 30, name: 'LOGIC MATRIX', difficulty: '3. Advanced Circuits',
    description: 'Five inputs, eight outputs, twelve gate slots across three layers. The ultimate combinational challenge.',
    hint: 'Work layer by layer. Layer 1 gates take raw inputs. Layer 2 combines layer-1 outputs. Layer 3 produces the final outputs. Start from outputs and trace dependencies backward.',
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 90, y: 130, fixedValue: 1, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 90, y: 245, fixedValue: 0, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 90, y: 360, fixedValue: 1, label: 'C' },
      { id: 'in_D', type: 'INPUT', x: 90, y: 475, fixedValue: 0, label: 'D' },
      { id: 'in_E', type: 'INPUT', x: 90, y: 590, fixedValue: 1, label: 'E' },
      { id: 'g1',   type: 'GATE_SLOT', x: 290, y: 165 },
      { id: 'g2',   type: 'GATE_SLOT', x: 290, y: 310 },
      { id: 'g3',   type: 'GATE_SLOT', x: 290, y: 455 },
      { id: 'g4',   type: 'GATE_SLOT', x: 290, y: 590 },
      { id: 'g5',   type: 'GATE_SLOT', x: 520, y: 220 },
      { id: 'g6',   type: 'GATE_SLOT', x: 520, y: 390 },
      { id: 'g7',   type: 'GATE_SLOT', x: 520, y: 555 },
      { id: 'g8',   type: 'GATE_SLOT', x: 750, y: 130 },
      { id: 'g9',   type: 'GATE_SLOT', x: 750, y: 250 },
      { id: 'g10',  type: 'GATE_SLOT', x: 750, y: 375 },
      { id: 'g11',  type: 'GATE_SLOT', x: 750, y: 500 },
      { id: 'g12',  type: 'GATE_SLOT', x: 750, y: 620 },
      { id: 'out_O1', type: 'OUTPUT', x: 1010, y: 115, targetValue: 1, label: 'O1' },
      { id: 'out_O2', type: 'OUTPUT', x: 1010, y: 185, targetValue: 0, label: 'O2' },
      { id: 'out_O3', type: 'OUTPUT', x: 1010, y: 255, targetValue: 1, label: 'O3' },
      { id: 'out_O4', type: 'OUTPUT', x: 1010, y: 325, targetValue: 1, label: 'O4' },
      { id: 'out_O5', type: 'OUTPUT', x: 1010, y: 395, targetValue: 1, label: 'O5' },
      { id: 'out_O6', type: 'OUTPUT', x: 1010, y: 465, targetValue: 1, label: 'O6' },
      { id: 'out_O7', type: 'OUTPUT', x: 1010, y: 535, targetValue: 1, label: 'O7' },
      { id: 'out_O8', type: 'OUTPUT', x: 1010, y: 605, targetValue: 1, label: 'O8' },
    ],
    wires: [
      { id: 'w1',  sourceId: 'in_A', targetId: 'g1',  targetInputIndex: 0 },
      { id: 'w2',  sourceId: 'in_B', targetId: 'g1',  targetInputIndex: 1 },
      { id: 'w3',  sourceId: 'in_A', targetId: 'g2',  targetInputIndex: 0 },
      { id: 'w4',  sourceId: 'in_C', targetId: 'g2',  targetInputIndex: 1 },
      { id: 'w5',  sourceId: 'in_B', targetId: 'g3',  targetInputIndex: 0 },
      { id: 'w6',  sourceId: 'in_E', targetId: 'g3',  targetInputIndex: 1 },
      { id: 'w7',  sourceId: 'in_C', targetId: 'g4',  targetInputIndex: 0 },
      { id: 'w8',  sourceId: 'in_D', targetId: 'g4',  targetInputIndex: 1 },
      { id: 'w9',  sourceId: 'g1',   targetId: 'g5',  targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g2',   targetId: 'g5',  targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g2',   targetId: 'g6',  targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g3',   targetId: 'g6',  targetInputIndex: 1 },
      { id: 'w13', sourceId: 'g3',   targetId: 'g7',  targetInputIndex: 0 },
      { id: 'w14', sourceId: 'g4',   targetId: 'g7',  targetInputIndex: 1 },
      { id: 'w15', sourceId: 'g5',   targetId: 'g8',  targetInputIndex: 0 },
      { id: 'w16', sourceId: 'in_E', targetId: 'g8',  targetInputIndex: 1 },
      { id: 'w17', sourceId: 'g5',   targetId: 'g9',  targetInputIndex: 0 },
      { id: 'w18', sourceId: 'g6',   targetId: 'g9',  targetInputIndex: 1 },
      { id: 'w19', sourceId: 'g6',   targetId: 'g10', targetInputIndex: 0 },
      { id: 'w20', sourceId: 'g7',   targetId: 'g10', targetInputIndex: 1 },
      { id: 'w21', sourceId: 'g7',   targetId: 'g11', targetInputIndex: 0 },
      { id: 'w22', sourceId: 'in_D', targetId: 'g11', targetInputIndex: 1 },
      { id: 'w23', sourceId: 'g9',   targetId: 'g12', targetInputIndex: 0 },
      { id: 'w24', sourceId: 'g11',  targetId: 'g12', targetInputIndex: 1 },
      { id: 'w25', sourceId: 'g1',   targetId: 'out_O1', targetInputIndex: 0 },
      { id: 'w26', sourceId: 'g2',   targetId: 'out_O2', targetInputIndex: 0 },
      { id: 'w27', sourceId: 'g5',   targetId: 'out_O3', targetInputIndex: 0 },
      { id: 'w28', sourceId: 'g8',   targetId: 'out_O4', targetInputIndex: 0 },
      { id: 'w29', sourceId: 'g9',   targetId: 'out_O5', targetInputIndex: 0 },
      { id: 'w30', sourceId: 'g10',  targetId: 'out_O6', targetInputIndex: 0 },
      { id: 'w31', sourceId: 'g11',  targetId: 'out_O7', targetInputIndex: 0 },
      { id: 'w32', sourceId: 'g12',  targetId: 'out_O8', targetInputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 4 — 4. Flip-Flops  (IDs 31–40)
  // Sequential FF-only puzzles. No logic gate slots.
  // ════════════════════════════════════════════════════════════

  // L31 — D FLIP-FLOP BASICS
  {
    id: 31, name: 'D FLIP-FLOP', difficulty: '4. Flip-Flops',
    description: 'The D flip-flop captures whatever is on its D input on every rising clock edge. D=1 is wired — press STEP.',
    hint: 'Place a D flip-flop. It captures D=1 on the rising clock edge. Press STEP once.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',   x: 180, y: 400, fixedValue: 1, label: 'D' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 540, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 900, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_D',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w2',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L32 — D FLIP-FLOP WITH Q̄
  // D=0 → Q=0, Q̄=1 after 1 step
  {
    id: 32, name: 'D FF WITH Q̄', difficulty: '4. Flip-Flops',
    description: 'The D flip-flop also provides the complementary output Q̄. D=0 is wired — capture it and check both outputs.',
    hint: 'Place a D flip-flop. D=0 so Q captures 0 and Q̄ becomes 1. Press STEP once.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',   x: 180, y: 380, fixedValue: 0, label: 'D' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 540, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 900, y: 420, targetValue: 0, label: 'Q' },
      { id: 'out_Qn', type: 'OUTPUT',  x: 900, y: 510, targetValue: 1, label: 'Q̄' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_D',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',   sourceId: 'ff_1',  targetId: 'out_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'out_Qn', targetInputIndex: 0, sourceOutputIndex: 1 },
    ],
  },

  // L33 — T FLIP-FLOP (TOGGLE)
  // T=1, place T-FF → Q toggles from 0 to 1 on first STEP
  {
    id: 33, name: 'T FLIP-FLOP', difficulty: '4. Flip-Flops',
    description: 'The T flip-flop toggles Q on every rising edge when T=1. Q starts at 0 — one STEP brings it to 1.',
    hint: 'Place a T flip-flop. T=1 toggles Q on each rising edge. Q starts 0, press STEP once → Q=1.',
    nodes: [
      { id: 'in_T',   type: 'INPUT',   x: 180, y: 400, fixedValue: 1, label: 'T' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 540, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 900, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_T',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w2',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L34 — RIPPLE COUNTER (2 T-FFs in series)
  // FF1: T=1 always. FF2: T=FF1.Q (cascaded).
  // Step 1: FF1.Q=1, FF2.Q=0 (T2=0 before step)
  // Step 2: FF1.Q=0, FF2.Q=1 (T2=1 before step, toggles from 0)
  // Target: Q1=0, Q2=1 → requires exactly 2 STEPs
  {
    id: 34, name: 'RIPPLE COUNTER', difficulty: '4. Flip-Flops',
    description: 'Two T flip-flops in series form a 2-bit ripple counter. Q1 of the first drives T of the second. Press STEP twice.',
    hint: 'Both FFs are T type. After step 1: Q1=1,Q2=0. After step 2: Q1=0,Q2=1 (FF2 just saw T=1 from Q1). Target: Q1=0,Q2=1.',
    nodes: [
      { id: 'in_T1',  type: 'INPUT',   x: 140, y: 400, fixedValue: 1, label: 'T=1' },
      { id: 'clk_1',  type: 'CLOCK',   x: 140, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 420, y: 460, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 700, y: 460, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 970, y: 380, targetValue: 0, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 970, y: 540, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_T1', targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',    sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'w3',    sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w4',    sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L35 — SR FLIP-FLOP (SET)
  // S=1,R=0 → Q=1,Q̄=0 after 1 STEP
  {
    id: 35, name: 'SR FLIP-FLOP — SET', difficulty: '4. Flip-Flops',
    description: 'The SR flip-flop has separate Set and Reset inputs. S=1,R=0 forces Q to 1 on the rising edge.',
    hint: 'Place an SR flip-flop. S=1,R=0 is SET mode. Q goes to 1, Q̄ goes to 0. Press STEP once.',
    nodes: [
      { id: 'in_S',   type: 'INPUT',   x: 180, y: 360, fixedValue: 1, label: 'S' },
      { id: 'in_R',   type: 'INPUT',   x: 180, y: 480, fixedValue: 0, label: 'R' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 580, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 560, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 920, y: 420, targetValue: 1, label: 'Q' },
      { id: 'out_Qn', type: 'OUTPUT',  x: 920, y: 510, targetValue: 0, label: 'Q̄' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_S',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_R',  targetId: 'ff_1',   targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 2, isClockWire: true },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'out_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w4',   sourceId: 'ff_1',  targetId: 'out_Qn', targetInputIndex: 0, sourceOutputIndex: 1 },
    ],
  },

  // L36 — SR FLIP-FLOP (RESET)
  // S=0,R=1 → Q=0,Q̄=1 after 1 STEP
  {
    id: 36, name: 'SR FLIP-FLOP — RESET', difficulty: '4. Flip-Flops',
    description: 'S=0,R=1 forces Q to 0 — the RESET operation of the SR flip-flop. Both Q̄ outputs must be verified.',
    hint: 'Place an SR flip-flop. S=0,R=1 is RESET mode. Q goes to 0, Q̄ goes to 1. Press STEP once.',
    nodes: [
      { id: 'in_S',   type: 'INPUT',   x: 180, y: 360, fixedValue: 0, label: 'S' },
      { id: 'in_R',   type: 'INPUT',   x: 180, y: 480, fixedValue: 1, label: 'R' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 580, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 560, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 920, y: 420, targetValue: 0, label: 'Q' },
      { id: 'out_Qn', type: 'OUTPUT',  x: 920, y: 510, targetValue: 1, label: 'Q̄' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_S',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_R',  targetId: 'ff_1',   targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 2, isClockWire: true },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'out_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w4',   sourceId: 'ff_1',  targetId: 'out_Qn', targetInputIndex: 0, sourceOutputIndex: 1 },
    ],
  },

  // L37 — JK FLIP-FLOP (TOGGLE MODE)
  // J=1,K=1 → toggle → Q=1 after 1 STEP (from Q=0)
  {
    id: 37, name: 'JK FLIP-FLOP — TOGGLE', difficulty: '4. Flip-Flops',
    description: 'The JK flip-flop in toggle mode (J=K=1) flips Q on every rising edge. No forbidden state unlike SR.',
    hint: 'Place a JK flip-flop. J=K=1 is toggle mode. Q starts 0, press STEP once → Q=1.',
    nodes: [
      { id: 'in_J',   type: 'INPUT',   x: 180, y: 360, fixedValue: 1, label: 'J' },
      { id: 'in_K',   type: 'INPUT',   x: 180, y: 480, fixedValue: 1, label: 'K' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 580, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 560, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 920, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_J',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_K',  targetId: 'ff_1',  targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 2, isClockWire: true },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L38 — JK FLIP-FLOP (SET MODE)
  // J=1,K=0 → SET → Q=1 after 1 STEP
  {
    id: 38, name: 'JK FLIP-FLOP — SET', difficulty: '4. Flip-Flops',
    description: 'JK with J=1,K=0 acts as a SET operation — Q goes to 1 and stays there. Compare with the SR SET from the previous level.',
    hint: 'Place a JK flip-flop. J=1,K=0 is SET mode. Q→1. Pressing STEP again keeps Q=1 (unlike toggle mode).',
    nodes: [
      { id: 'in_J',   type: 'INPUT',   x: 180, y: 360, fixedValue: 1, label: 'J' },
      { id: 'in_K',   type: 'INPUT',   x: 180, y: 480, fixedValue: 0, label: 'K' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 580, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 560, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 920, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_J',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_K',  targetId: 'ff_1',  targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 2, isClockWire: true },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L39 — SHIFT REGISTER (2 D-FFs in series)
  // D=1 → FF1 → FF2. Step 1: Q1=1,Q2=0. Step 2: Q1=1,Q2=1.
  {
    id: 39, name: 'SHIFT REGISTER', difficulty: '4. Flip-Flops',
    description: 'Two D flip-flops in series. Data shifts one stage per clock. Press STEP twice to propagate the 1 through both.',
    hint: 'After step 1: Q1=1, Q2=0 (Q2 just captured old Q1=0). After step 2: Q1=1, Q2=1. Both target 1.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',   x: 140, y: 400, fixedValue: 1, label: 'D' },
      { id: 'clk_1',  type: 'CLOCK',   x: 140, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 420, y: 460, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 700, y: 460, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 970, y: 380, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 970, y: 540, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_D',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',    sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'w3',    sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w4',    sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L40 — DIVIDE-BY-2 (Q̄ feedback to D)
  // Q̄ initially=1 → feeds D → on rising edge Q captures 1 → Q=1
  {
    id: 40, name: 'DIVIDE-BY-2', difficulty: '4. Flip-Flops',
    description: 'Q̄ is wired back to D. The flip-flop self-toggles every clock: each STEP inverts Q. A classic frequency divider.',
    hint: 'Place a D flip-flop. Q̄ feeds D, so D=1 initially (Q̄ starts at 1). One STEP: Q captures 1 → Q=1.',
    nodes: [
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 560, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 900, y: 420, targetValue: 1, label: 'Q' },
      { id: 'out_Qn', type: 'OUTPUT',  x: 900, y: 510, targetValue: 0, label: 'Q̄' },
    ],
    wires: [
      { id: 'wfb',  sourceId: 'ff_1',  targetId: 'ff_1',   targetInputIndex: 0, sourceOutputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w1',   sourceId: 'ff_1',  targetId: 'out_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w2',   sourceId: 'ff_1',  targetId: 'out_Qn', targetInputIndex: 0, sourceOutputIndex: 1 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 5 — 5. Sequential Logic  (IDs 41–50)
  // Flip-flops combined with combinational gate slots.
  // Levels 41–45 are easier; 46–50 ramp up.
  // ════════════════════════════════════════════════════════════

  // L41 — SYNCHRONIZE (easy: 1 gate + D-FF)
  // AND(A=1,B=1)=1 → D-FF → Q=1 after 1 STEP
  {
    id: 41, name: 'SYNCHRONIZE', difficulty: '5. Sequential Logic',
    description: 'A logic gate computes the value to store. Choose the gate that produces D=1, then STEP to latch it.',
    hint: 'AND(1,1)=1 feeds D. Place AND in the gate slot, then place D-FF and press STEP.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 340, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 460, fixedValue: 1, label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 400 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 560, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L42 — FILTER ZERO (easy: 1 gate captures 0)
  // NAND(A=1,B=1)=0 → D-FF → Q=0 after 1 STEP
  {
    id: 42, name: 'FILTER ZERO', difficulty: '5. Sequential Logic',
    description: 'This time the target is Q=0. Choose a gate that produces D=0 from A=1,B=1, then latch it.',
    hint: 'NAND(1,1)=0. Place NAND in the gate slot, D-FF in the FF slot, press STEP.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 340, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 460, fixedValue: 1, label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 400 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 560, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 460, targetValue: 0, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L43 — TOGGLE DETECTOR (easy: XOR + T-FF)
  // XOR(A=1,B=0)=1 → T=1 → T-FF toggles Q from 0 to 1
  {
    id: 43, name: 'TOGGLE DETECTOR', difficulty: '5. Sequential Logic',
    description: 'A gate detects inequality and feeds T of a T flip-flop. XOR(1,0)=1 causes the T-FF to toggle Q.',
    hint: 'XOR(A=1,B=0)=1 → T=1 → T-FF toggles. Place XOR then T-FF, press STEP once.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 340, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 460, fixedValue: 0, label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 400 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 560, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L44 — CONDITIONAL SET (easy: 2 gates compute S and R for SR-FF)
  // A=1,B=1,C=1: g_S=AND(A,B)=1, g_R=NOT(C)=0 → SR-FF SET → Q=1
  {
    id: 44, name: 'CONDITIONAL SET', difficulty: '5. Sequential Logic',
    description: 'Two gates compute S and R for an SR flip-flop. The gate driving R must output 0. Choose to SET Q=1.',
    hint: 'AND(A=1,B=1)=1 for S. NOT(C=1)=0 for R. SR with S=1,R=0 sets Q=1. Press STEP.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 280, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 400, fixedValue: 1, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 160, y: 520, fixedValue: 1, label: 'C' },
      { id: 'g_s',    type: 'GATE_SLOT', x: 400, y: 340, label: 'S' },
      { id: 'g_r',    type: 'GATE_SLOT', x: 400, y: 520, label: 'R' },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 620, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 460, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 460, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g_s',   targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g_s',   targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'in_C',  targetId: 'g_r',   targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'g_s',   targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w5',   sourceId: 'g_r',   targetId: 'ff_1',  targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 2, isClockWire: true },
      { id: 'w6',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L45 — PIPELINE FILTER (easy: 1 gate feeds 2 D-FFs in series)
  // NOT(D=0)=1 → FF1 captures 1 after step 1 → FF2 captures 1 after step 2
  // Target: Q1=1, Q2=1 after 2 STEPs. Initial: Q1=0,Q2=0 (not immediately solved)
  {
    id: 45, name: 'PIPELINE FILTER', difficulty: '5. Sequential Logic',
    description: 'A NOT gate inverts the input before a 2-stage shift register. The inverted value propagates through both FFs in two clock cycles.',
    hint: 'NOT(D=0)=1. After step 1: Q1=1,Q2=0. After step 2: Q1=1,Q2=1. Place NOT and two D-FFs.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',     x: 140, y: 380, fixedValue: 0, label: 'D' },
      { id: 'g1',     type: 'GATE_SLOT', x: 340, y: 380 },
      { id: 'clk_1',  type: 'CLOCK',     x: 140, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 560, y: 460, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 800, y: 460, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1060, y: 380, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1060, y: 540, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_D',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',    sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w3',    sourceId: 'ff_1',  targetId: 'ff_2',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',    sourceId: 'ff_1',  targetId: 'out_Q1',targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w5',    sourceId: 'ff_2',  targetId: 'out_Q2',targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L46 — DUAL GATE CHAIN + D-FF
  // A=1,B=1,C=0: g1(A,B)→g2(g1,C)→D-FF. Target Q=1
  // g1=AND(1,1)=1, g2=OR(1,0)=1 → Q=1 after 1 STEP
  {
    id: 46, name: 'DUAL GATE CHAIN', difficulty: '5. Sequential Logic',
    description: 'Two combinational gates in series compute D before the flip-flop. Find the gate pair that produces D=1.',
    hint: 'g1(A=1,B=1) then g2(g1,C=0) must ultimately give 1. AND→OR is one solution. Work backwards from Q=1.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 140, y: 280, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 140, y: 400, fixedValue: 1, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 140, y: 520, fixedValue: 0, label: 'C' },
      { id: 'g1',     type: 'GATE_SLOT', x: 360, y: 340 },
      { id: 'g2',     type: 'GATE_SLOT', x: 560, y: 430 },
      { id: 'clk_1',  type: 'CLOCK',     x: 140, y: 620, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 780, y: 490, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 1020, y: 490, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'in_C',  targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w5',   sourceId: 'g2',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w6',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L47 — GATE-CONTROLLED JK
  // g_J=AND(A=1,B=1)=1, g_K=AND(C=0,D=1)=0 → JK(J=1,K=0): SET → Q=1 after 1 STEP
  {
    id: 47, name: 'GATE-CONTROLLED JK', difficulty: '5. Sequential Logic',
    description: 'Two gates compute J and K inputs for a JK flip-flop. Find the gates that put it into SET mode.',
    hint: 'Need J=1, K=0. AND(A=1,B=1)=1 for J. AND(C=0,D=1)=0 for K. Place JK-FF in SET mode.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 150, y: 260, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 150, y: 380, fixedValue: 1, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 150, y: 510, fixedValue: 0, label: 'C' },
      { id: 'in_D',   type: 'INPUT',     x: 150, y: 630, fixedValue: 1, label: 'D' },
      { id: 'g_j',    type: 'GATE_SLOT', x: 390, y: 320, label: 'J' },
      { id: 'g_k',    type: 'GATE_SLOT', x: 390, y: 570, label: 'K' },
      { id: 'clk_1',  type: 'CLOCK',     x: 150, y: 720, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 490, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 490, targetValue: 1, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g_j',   targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g_j',   targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'in_C',  targetId: 'g_k',   targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'in_D',  targetId: 'g_k',   targetInputIndex: 1 },
      { id: 'w5',   sourceId: 'g_j',   targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w6',   sourceId: 'g_k',   targetId: 'ff_1',  targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 2, isClockWire: true },
      { id: 'w7',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L48 — INVERTED SHIFT REGISTER
  // NOT gate → FF1 → FF2. D=0, NOT(0)=1
  // Step 1: FF1.Q=1, FF2.Q=0. Step 2: FF1.Q=1, FF2.Q=1.
  // Target: Q1=1, Q2=1 (requires 2 STEPs)
  {
    id: 48, name: 'INVERTED SHIFT', difficulty: '5. Sequential Logic',
    description: 'A NOT gate inverts D=0 to 1 before a 2-stage shift register. You need two STEPs to fill both registers.',
    hint: 'NOT(0)=1. After step 1: Q1=1,Q2=0. After step 2: Q1=1,Q2=1. Place NOT + 2 D-FFs.',
    nodes: [
      { id: 'in_D',   type: 'INPUT',     x: 140, y: 400, fixedValue: 0, label: 'D' },
      { id: 'g1',     type: 'GATE_SLOT', x: 330, y: 400 },
      { id: 'clk_1',  type: 'CLOCK',     x: 140, y: 530, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 560, y: 460, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 800, y: 460, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1060, y: 390, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1060, y: 540, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_D',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',    sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w3',    sourceId: 'ff_1',  targetId: 'ff_2',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',    sourceId: 'ff_1',  targetId: 'out_Q1',targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w5',    sourceId: 'ff_2',  targetId: 'out_Q2',targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L49 — PIPELINE STAGE (2 gate slots, 2 D-FFs in pipeline)
  // A=1,B=0,C=1: g1(A,B) → FF1;  g2(FF1.Q, C) → FF2
  // After step 1: FF1.Q=g1(1,0), FF2.Q=g2(FF1_prev=0, C=1)
  // After step 2: FF1.Q=g1(1,0), FF2.Q=g2(g1(1,0), C=1)
  // With g1=OR(1,0)=1, g2=AND(1,1)=1 → both Q=1 after step 2 (or step 1 for FF1)
  // After step 1: FF1.Q=1, FF2.Q=AND(0,1)=0 → not solved
  // After step 2: FF1.Q=1, FF2.Q=AND(1,1)=1 → SOLVED
  {
    id: 49, name: 'PIPELINE STAGE', difficulty: '5. Sequential Logic',
    description: 'A 2-stage pipeline: gate G1 feeds FF1, gate G2 uses FF1\'s output to feed FF2. Takes two clock cycles to fully propagate.',
    hint: 'G1(A=1,B=0) must give FF1.Q=1. Then G2(Q1=1,C=1) must give FF2.Q=1. Needs 2 STEPs since FF1 must update first.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 130, y: 280, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 130, y: 400, fixedValue: 0, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 130, y: 560, fixedValue: 1, label: 'C' },
      { id: 'g1',     type: 'GATE_SLOT', x: 340, y: 340 },
      { id: 'clk_1',  type: 'CLOCK',     x: 130, y: 660, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 560, y: 400, label: 'FF1' },
      { id: 'g2',     type: 'GATE_SLOT', x: 720, y: 490 },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 900, y: 490, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1080, y: 340, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1080, y: 560, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',    sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',    sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',    sourceId: 'ff_1',  targetId: 'g2',    targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w5',    sourceId: 'in_C',  targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w6',    sourceId: 'g2',    targetId: 'ff_2',  targetInputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',  targetInputIndex: 1, isClockWire: true },
      { id: 'w7',    sourceId: 'ff_1',  targetId: 'out_Q1',targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w8',    sourceId: 'ff_2',  targetId: 'out_Q2',targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L50 — DUAL REGISTER (3 gate slots, 2 independent FFs + combinational output)
  // A=1,B=0,C=1,D=0
  // g1(A,B) → FF1 (D-FF); g2(C,D) → FF2 (D-FF); g3(FF1.Q, FF2.Q) → out_F (combinational from prior state, initially 0)
  // After step 1: FF1.Q=g1(1,0), FF2.Q=g2(1,0), out_F=g3(0,0) [from prev state before step]
  // The combinational out_F updates immediately based on current FF states.
  // Actually engine evaluates all in one pass.
  // Target: FF1.Q=1, FF2.Q=1, out_F=1 after step 1.
  // g1(1,0)=1: OR(1,0)=1 ✓; g2(1,0)=1: OR(1,0)=1 ✓; g3(1,1)=1: AND(1,1)=1 ✓
  // But initially: FF1.Q=0,FF2.Q=0 → g3=AND(0,0)=0 → out_F=0 ≠ 1 ✓ (not immediately solved)
  // After step 1: FF1.Q=1,FF2.Q=1 → g3=AND(1,1)=1 → out_F=1 ✓ SOLVED
  {
    id: 50, name: 'DUAL REGISTER', difficulty: '5. Sequential Logic',
    description: 'Two independent registers and a combinational output that combines their states. All three outputs must be satisfied simultaneously.',
    hint: 'g1(A=1,B=0) → FF1.Q=1, g2(C=1,D=0) → FF2.Q=1. Then g3(Q1,Q2) must output 1. Try OR for g1,g2 and AND for g3.',
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 130, y: 240, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 130, y: 360, fixedValue: 0, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 130, y: 510, fixedValue: 1, label: 'C' },
      { id: 'in_D',   type: 'INPUT',     x: 130, y: 630, fixedValue: 0, label: 'D' },
      { id: 'g1',     type: 'GATE_SLOT', x: 360, y: 300 },
      { id: 'g2',     type: 'GATE_SLOT', x: 360, y: 570 },
      { id: 'clk_1',  type: 'CLOCK',     x: 130, y: 730, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 610, y: 360, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 610, y: 570, label: 'FF2' },
      { id: 'g3',     type: 'GATE_SLOT', x: 860, y: 465 },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1060, y: 280, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1060, y: 540, targetValue: 1, label: 'Q2' },
      { id: 'out_F',  type: 'OUTPUT',    x: 1060, y: 465, targetValue: 1, label: 'F' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk1',sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w4',   sourceId: 'in_C',  targetId: 'g2',    targetInputIndex: 0 },
      { id: 'w5',   sourceId: 'in_D',  targetId: 'g2',    targetInputIndex: 1 },
      { id: 'w6',   sourceId: 'g2',    targetId: 'ff_2',  targetInputIndex: 0 },
      { id: 'wclk2',sourceId: 'clk_1', targetId: 'ff_2',  targetInputIndex: 1, isClockWire: true },
      { id: 'w7',   sourceId: 'ff_1',  targetId: 'g3',    targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w8',   sourceId: 'ff_2',  targetId: 'g3',    targetInputIndex: 1, sourceOutputIndex: 0 },
      { id: 'w9',   sourceId: 'ff_1',  targetId: 'out_Q1',targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w10',  sourceId: 'ff_2',  targetId: 'out_Q2',targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w11',  sourceId: 'g3',    targetId: 'out_F', targetInputIndex: 0 },
    ],
  },

];

// ── Hint derivation ──────────────────────────────────────────
// Levels carry their own `hint` field; fall back to name-based detection.
function deriveHint(level) {
  if (level.hint) return level.hint;

  const name = level.name.toUpperCase();

  if (name.includes('MUX'))          return 'Use NOT on each select line, then AND each data line with the appropriate select combination, and OR the results together.';
  if (name.includes('DEMUX'))        return 'Invert S, then AND the data input D with !S for the Y0 path and with S for the Y1 path.';
  if (name.includes('FULL ADDER'))   return 'Two XOR stages for SUM (A⊕B then ⊕Cin), AND stages for partial carries, OR to merge into COUT.';
  if (name.includes('HALF ADDER'))   return 'SUM = XOR(A,B). CARRY = AND(A,B). Two separate gate slots reading the same two inputs.';
  if (name.includes('XNOR'))         return 'XNOR is XOR followed by NOT. Two gate slots chained.';
  if (name.includes('PARITY'))       return 'Chain XOR gates: XOR accumulates the odd-count flag step by step.';
  if (name.includes('MAJORITY'))     return 'Compute all pairwise ANDs (AB, BC, AC), then OR them together in a tree.';
  if (name.includes('DECODER'))      return 'Invert each select bit first. Each output AND gate picks the right true/complement combination.';
  if (name.includes('GRAY'))         return 'Binary→Gray: G(n) = B(n) XOR B(n-1). Gray→Binary: B(n) = B(n+1) XOR G(n), cascaded.';
  if (name.includes('ENCODER'))      return 'VALID = OR all inputs. Each output bit ORs the inputs that contribute a 1 to that bit position.';
  if (name.includes('ADDER'))        return 'Build a half adder for the lowest bit, then chain full adders for higher bits using carry-out as carry-in.';
  if (name.includes('SHIFT'))        return 'D flip-flops in series: each clock cycle the data shifts one stage to the right. Press STEP for each stage.';
  if (name.includes('DIVIDE'))       return 'Q̄ feeds back to D. The flip-flop self-toggles. Q starts at 0, so after one STEP it becomes 1.';
  if (name.includes('RIPPLE'))       return 'Place T flip-flops. After step 1: Q1=1, Q2=0. After step 2: Q1=0, Q2=1.';
  if (name.includes('PIPELINE'))     return 'The pipeline takes one extra cycle: G1 feeds FF1 first, then FF1\'s output feeds G2→FF2 on the next cycle.';
  if (name.includes('D FLIP-FLOP'))  return 'Place a D flip-flop. It captures D on each rising clock edge. Press STEP.';
  if (name.includes('T FLIP-FLOP'))  return 'Place a T flip-flop. T=1 toggles Q on every rising edge.';
  if (name.includes('SR FLIP-FLOP')) return 'S=1,R=0 sets Q=1. S=0,R=1 resets Q=0. Place an SR flip-flop and press STEP.';
  if (name.includes('JK FLIP-FLOP')) return 'J=K=1 toggles. J=1,K=0 sets Q=1. J=0,K=1 resets Q=0. Place a JK flip-flop and press STEP.';

  return 'Look at the target values and choose gate types whose truth tables match the required output for the given inputs.';
}
