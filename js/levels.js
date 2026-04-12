/* ============================================================
   levels.js — 50 Puzzle Levels Across 5 Educational Tabs
   ============================================================
   Tab 1 – "1. Fundamentals"       (IDs  1–10)  Single gates & basic combos
   Tab 2 – "2. Building Blocks"    (IDs 11–20)  Classic digital building blocks
   Tab 3 – "3. Advanced Circuits"  (IDs 21–30)  Complex multi-gate circuits
   Tab 4 – "4. Flip-Flops"         (IDs 31–40)  FF-only sequential puzzles
   Tab 5 – "5. Sequential Logic"   (IDs 41–50)  FF + combinational logic
   ============================================================ */

const LEVELS = [

  // ════════════════════════════════════════════════════════════
  // TAB 1 — 1. Fundamentals  (IDs 1–10)
  // Single gates and basic gate combinations
  // ════════════════════════════════════════════════════════════

  // L1 — NOT GATE  (2 cases: all input combos for single input)
  {
    id: 1, name: 'NOT GATE', difficulty: 'Fundamentals',
    description: 'NOT Gate — The NOT gate (inverter) flips the input value: 0 becomes 1 and 1 becomes 0. It is the only single-input gate and is used to create logical negation in any digital circuit.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'The output is always the opposite of the input. Which gate inverts?',
    truthTable: { inputs: ['A'], outputs: ['Z'], rows: [[[0],[1]],[[1],[0]]] },
    solution: {
      gatesUsed: ['NOT'],
      explanation: 'NOT Gate — The NOT gate (inverter) flips the input value: 0 becomes 1 and 1 becomes 0. It is the only single-input gate and is used to create logical negation in any digital circuit.',
      blockSvg: `<svg viewBox="0 0 320 120" width="400" height="150"><text x="12" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="62" x2="90" y2="62" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="30" width="140" height="65" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="160" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#00d4ff">NOT</text><line x1="230" y1="62" x2="285" y2="62" stroke="#c8d8f0" stroke-width="2.5"/><text x="293" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 340 120" width="420" height="150"><text x="18" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><rect x="110" y="40" width="100" height="45" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="160" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">NOT</text><text x="295" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="62" x2="110" y2="62" stroke="#39ff14" stroke-width="2"/><line x1="210" y1="62" x2="285" y2="62" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
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

  // L2 — AND GATE  (4 cases: all input combos, only AND satisfies all)
  {
    id: 2, name: 'AND GATE', difficulty: 'Fundamentals',
    description: 'AND Gate — The AND gate outputs 1 only when both inputs are 1. It is the most basic gate in digital logic, used to check whether multiple conditions are all true simultaneously.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'The output is 1 in only one row. What is special about that row?',
    truthTable: {
      inputs: ['A', 'B'], outputs: ['Z'],
      rows: [[[0,0],[0]], [[0,1],[0]], [[1,0],[0]], [[1,1],[1]]],
    },
    solution: {
      gatesUsed: ['AND'],
      explanation: 'AND Gate — The AND gate outputs 1 only when both inputs are 1. It is the most basic gate in digital logic, used to check whether multiple conditions are all true simultaneously.',
      blockSvg: `<svg viewBox="0 0 360 160" width="440" height="195">
        <!-- A input from left -->
        <text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <!-- B input from left -->
        <text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="107" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="30" width="160" height="105" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#00d4ff">AND</text>
        <!-- Z output to right -->
        <line x1="260" y1="82" x2="320" y2="82" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 380 160" width="460" height="195">
        <!-- Inputs -->
        <text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <text x="18" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <!-- AND gate -->
        <rect x="120" y="50" width="100" height="60" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">AND</text>
        <!-- Output -->
        <text x="310" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <!-- Wires -->
        <line x1="36" y1="48" x2="120" y2="68" stroke="#39ff14" stroke-width="2"/>
        <line x1="36" y1="118" x2="120" y2="92" stroke="#39ff14" stroke-width="2"/>
        <line x1="220" y1="80" x2="300" y2="80" stroke="#39ff14" stroke-width="2"/>
      </svg>`,
    },
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

  // L3 — OR GATE  (4 cases)
  {
    id: 3, name: 'OR GATE', difficulty: 'Fundamentals',
    description: 'OR Gate — The OR gate outputs 1 when at least one input is 1. Used to check whether any condition is met — a single true input is enough to produce a positive output.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'The output is 0 in only one row. What is special about that row?',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[0]],[[0,1],[1]],[[1,0],[1]],[[1,1],[1]]] },
    solution: {
      gatesUsed: ['OR'],
      explanation: 'OR Gate — The OR gate outputs 1 when at least one input is 1. Used to check whether any condition is met — a single true input is enough to produce a positive output.',
      blockSvg: `<svg viewBox="0 0 360 160" width="440" height="195"><text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="107" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/><rect x="100" y="30" width="160" height="105" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="180" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#00d4ff">OR</text><line x1="260" y1="82" x2="320" y2="82" stroke="#c8d8f0" stroke-width="2.5"/><text x="328" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 380 160" width="460" height="195"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="120" y="50" width="100" height="60" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">OR</text><text x="310" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="48" x2="120" y2="68" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="118" x2="120" y2="92" stroke="#39ff14" stroke-width="2"/><line x1="220" y1="80" x2="300" y2="80" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
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

  // L4 — NAND GATE  (4 cases)
  {
    id: 4, name: 'NAND GATE', difficulty: 'Fundamentals',
    description: 'NAND Gate — The NAND gate is an inverted AND: it outputs 0 only when both inputs are 1. NAND is a universal gate — any logic circuit can be built using NAND gates alone.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'Compare this truth table to level 2. Every output is flipped. Which gate does that?',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[1]],[[1,0],[1]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['NAND'],
      explanation: 'NAND Gate — The NAND gate is an inverted AND: it outputs 0 only when both inputs are 1. NAND is a universal gate — any logic circuit can be built using NAND gates alone.',
      blockSvg: `<svg viewBox="0 0 360 160" width="440" height="195"><text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="107" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/><rect x="100" y="30" width="160" height="105" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="180" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" font-weight="bold" fill="#00d4ff">NAND</text><line x1="260" y1="82" x2="320" y2="82" stroke="#c8d8f0" stroke-width="2.5"/><text x="328" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 380 160" width="460" height="195"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="120" y="50" width="100" height="60" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#a0c8ff">NAND</text><text x="310" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="48" x2="120" y2="68" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="118" x2="120" y2="92" stroke="#39ff14" stroke-width="2"/><line x1="220" y1="80" x2="300" y2="80" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
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
    id: 5, name: 'NOR GATE', difficulty: 'Fundamentals',
    description: 'NOR Gate — The NOR gate is an inverted OR: it outputs 1 only when both inputs are 0. Like NAND, NOR is also a universal gate — any logic circuit can be built using NOR gates alone.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'Compare this truth table to level 3. Every output is flipped. Which gate does that?',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[0]],[[1,0],[0]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['NOR'],
      explanation: 'NOR Gate — The NOR gate is an inverted OR: it outputs 1 only when both inputs are 0. Like NAND, NOR is also a universal gate — any logic circuit can be built using NOR gates alone.',
      blockSvg: `<svg viewBox="0 0 360 160" width="440" height="195"><text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="107" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/><rect x="100" y="30" width="160" height="105" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="180" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#00d4ff">NOR</text><line x1="260" y1="82" x2="320" y2="82" stroke="#c8d8f0" stroke-width="2.5"/><text x="328" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 380 160" width="460" height="195"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="120" y="50" width="100" height="60" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">NOR</text><text x="310" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="48" x2="120" y2="68" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="118" x2="120" y2="92" stroke="#39ff14" stroke-width="2"/><line x1="220" y1="80" x2="300" y2="80" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
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
    id: 6, name: 'XOR GATE', difficulty: 'Fundamentals',
    description: 'XOR Gate — The XOR (exclusive OR) gate outputs 1 only when the inputs differ from each other. Widely used in binary addition and parity checking circuits.',
    instruction: 'Choose the single gate that matches all cases',
    hint: 'The output is 1 only when the two inputs are different from each other.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[0]],[[0,1],[1]],[[1,0],[1]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['XOR'],
      explanation: 'XOR Gate — The XOR (exclusive OR) gate outputs 1 only when the inputs differ from each other. Widely used in binary addition and parity checking circuits.',
      blockSvg: `<svg viewBox="0 0 360 160" width="440" height="195"><text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="107" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/><rect x="100" y="30" width="160" height="105" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="180" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#00d4ff">XOR</text><line x1="260" y1="82" x2="320" y2="82" stroke="#c8d8f0" stroke-width="2.5"/><text x="328" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 380 160" width="460" height="195"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="120" y="50" width="100" height="60" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">XOR</text><text x="310" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="48" x2="120" y2="68" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="118" x2="120" y2="92" stroke="#39ff14" stroke-width="2"/><line x1="220" y1="80" x2="300" y2="80" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
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

  // L7 — GATE CHAIN (2 gates in series, 4 cases, vertical bottom-to-top)
  // Unique solution: G1=NAND, G2=OR
  // Case 1: A=1,B=1,C=0 → Z=0   Case 2: A=0,B=0,C=0 → Z=1
  // Case 3: A=1,B=0,C=0 → Z=1   Case 4: A=0,B=1,C=1 → Z=1
  {
    id: 7, name: 'GATE CHAIN', difficulty: 'Fundamentals',
    layout: 'vertical',
    description: 'Gate Chain — A gate chain feeds the output of the first gate as input to the second. This is the most basic two-gate series structure, demonstrating how complex logic functions can be built by combining simple gates.',
    instruction: 'Gate chain: G1 output feeds into G2 along with C\nFind the only gate pair that produces correct results in all four cases',
    hint: 'G1 gets (A,B), its output feeds G2 alongside C. Only one pair works for all cases.',
    truthTable: { inputs: ['A','B','C'], outputs: ['Z'], rows: [[[0,0,0],[1]],[[0,0,1],[1]],[[0,1,0],[1]],[[0,1,1],[1]],[[1,0,0],[1]],[[1,0,1],[1]],[[1,1,0],[0]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['NAND', 'OR'],
      explanation: 'Gate Chain — A gate chain feeds the output of the first gate as input to the second. This is the most basic two-gate series structure, demonstrating how complex logic functions can be built by combining simple gates.',
      blockSvg: `<svg viewBox="0 0 440 160" width="520" height="190"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="77" x2="90" y2="77" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="127" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="30" y1="122" x2="90" y2="122" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="25" width="240" height="115" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="210" y="92" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="20" font-weight="bold" fill="#00d4ff">GATE CHAIN</text><line x1="330" y1="82" x2="390" y2="82" stroke="#c8d8f0" stroke-width="2.5"/><text x="398" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 520 180" width="640" height="220"><text x="18" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="92" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="18" y="152" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="110" y="40" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="155" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">NAND</text><rect x="290" y="70" width="80" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="330" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">OR</text><text x="455" y="97" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="38" x2="110" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="88" x2="110" y2="74" stroke="#39ff14" stroke-width="2"/><line x1="200" y1="62" x2="290" y2="82" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="148" x2="290" y2="104" stroke="#39ff14" stroke-width="2"/><line x1="370" y1="92" x2="445" y2="92" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=1, C=0 → Z=0   (cx = -420)
      { id: 'c1_A',  type: 'INPUT',     x: -470, y: 260, fixedValue: 1, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -370, y: 260, fixedValue: 1, label: 'B' },
      { id: 'c1_g1', type: 'GATE_SLOT', x: -420, y: 100, linkedGroup: 'g1' },
      { id: 'c1_C',  type: 'INPUT',     x: -335, y: 50,  fixedValue: 0, label: 'C' },
      { id: 'c1_g2', type: 'GATE_SLOT', x: -420, y: -70, linkedGroup: 'g2' },
      { id: 'c1_Z',  type: 'OUTPUT',    x: -420, y: -240, targetValue: 0, label: 'Z' },
      // Case 2: A=0, B=0, C=0 → Z=1   (cx = -140)
      { id: 'c2_A',  type: 'INPUT',     x: -190, y: 260, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 260, fixedValue: 0, label: 'B' },
      { id: 'c2_g1', type: 'GATE_SLOT', x: -140, y: 100, linkedGroup: 'g1' },
      { id: 'c2_C',  type: 'INPUT',     x: -55,  y: 50,  fixedValue: 0, label: 'C' },
      { id: 'c2_g2', type: 'GATE_SLOT', x: -140, y: -70, linkedGroup: 'g2' },
      { id: 'c2_Z',  type: 'OUTPUT',    x: -140, y: -240, targetValue: 1, label: 'Z' },
      // Case 3: A=1, B=0, C=0 → Z=1   (cx = 140)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 260, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 190,  y: 260, fixedValue: 0, label: 'B' },
      { id: 'c3_g1', type: 'GATE_SLOT', x: 140,  y: 100, linkedGroup: 'g1' },
      { id: 'c3_C',  type: 'INPUT',     x: 225,  y: 50,  fixedValue: 0, label: 'C' },
      { id: 'c3_g2', type: 'GATE_SLOT', x: 140,  y: -70, linkedGroup: 'g2' },
      { id: 'c3_Z',  type: 'OUTPUT',    x: 140,  y: -240, targetValue: 1, label: 'Z' },
      // Case 4: A=0, B=1, C=1 → Z=1   (cx = 420)
      { id: 'c4_A',  type: 'INPUT',     x: 370,  y: 260, fixedValue: 0, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 470,  y: 260, fixedValue: 1, label: 'B' },
      { id: 'c4_g1', type: 'GATE_SLOT', x: 420,  y: 100, linkedGroup: 'g1' },
      { id: 'c4_C',  type: 'INPUT',     x: 505,  y: 50,  fixedValue: 1, label: 'C' },
      { id: 'c4_g2', type: 'GATE_SLOT', x: 420,  y: -70, linkedGroup: 'g2' },
      { id: 'c4_Z',  type: 'OUTPUT',    x: 420,  y: -240, targetValue: 1, label: 'Z' },
    ],
    wires: [
      // Case 1: A,B→g1 → g2(g1,C) → Z
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g1', targetId: 'c1_g2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_g2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_g2', targetId: 'c1_Z',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g1', targetId: 'c2_g2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_g2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_g2', targetId: 'c2_Z',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_g1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_g1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g1', targetId: 'c3_g2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_g2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_g2', targetId: 'c3_Z',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_g1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_g1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g1', targetId: 'c4_g2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_g2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_g2', targetId: 'c4_Z',  targetInputIndex: 0 },
    ],
  },

  // L8 — FANOUT (A fans to two gates, 4 cases, vertical bottom-to-top)
  // Unique solution: G1=NAND, G2=OR
  // Case 1: A=1,B=1,C=0 → X=0,Y=1  Case 2: A=0,B=1,C=1 → X=1,Y=1
  // Case 3: A=1,B=0,C=1 → X=1,Y=1  Case 4: A=0,B=0,C=0 → X=1,Y=0
  {
    id: 8, name: 'FANOUT', difficulty: 'Fundamentals',
    layout: 'vertical',
    description: 'Fanout — Signal fanout: signal A feeds two different gates simultaneously. This is a fundamental structure in circuit design — a single signal can affect multiple paths in parallel, like a data bus connected to multiple components.',
    instruction: 'Signal fanout: A feeds both gates simultaneously\nFind the only gate pair that produces correct results in all four cases',
    hint: 'G1 gets (A,B), G2 gets (A,C). Only one pair of gates works for all four input combinations.',
    truthTable: { inputs: ['A','B','C'], outputs: ['X','Y'], rows: [[[0,0,0],[1,0]],[[0,0,1],[1,1]],[[0,1,0],[1,0]],[[0,1,1],[1,1]],[[1,0,0],[1,1]],[[1,0,1],[1,1]],[[1,1,0],[0,1]],[[1,1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NAND', 'OR'],
      explanation: 'Fanout — Signal fanout: signal A feeds two different gates simultaneously. This is a fundamental structure in circuit design — a single signal can affect multiple paths in parallel, like a data bus connected to multiple components.',
      blockSvg: `<svg viewBox="0 0 440 180" width="520" height="210"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="87" x2="90" y2="87" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="137" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="30" y1="132" x2="90" y2="132" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="230" height="135" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="22" font-weight="bold" fill="#00d4ff">FANOUT</text><line x1="320" y1="62" x2="380" y2="62" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">X</text><line x1="320" y1="117" x2="380" y2="117" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="640" height="245"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="18" y="172" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="160" y="30" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="205" y="58" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NAND</text><rect x="160" y="130" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="205" y="158" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">OR</text><text x="455" y="57" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">X</text><text x="455" y="157" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text><polyline points="36,48 80,48 80,38 160,38" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="36" y1="98" x2="160" y2="62" stroke="#39ff14" stroke-width="2"/><polyline points="80,48 80,138 160,138" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="36" y1="168" x2="160" y2="164" stroke="#39ff14" stroke-width="2"/><line x1="250" y1="52" x2="445" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="250" y1="152" x2="445" y2="152" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=1, C=0 → X=0, Y=1   (cx = -435)
      { id: 'c1_B',  type: 'INPUT',     x: -505, y: 200, fixedValue: 1, label: 'B' },
      { id: 'c1_A',  type: 'INPUT',     x: -435, y: 250, fixedValue: 1, label: 'A' },
      { id: 'c1_C',  type: 'INPUT',     x: -365, y: 200, fixedValue: 0, label: 'C' },
      { id: 'c1_g1', type: 'GATE_SLOT', x: -505, y: 0,   linkedGroup: 'top' },
      { id: 'c1_g2', type: 'GATE_SLOT', x: -365, y: 0,   linkedGroup: 'bot' },
      { id: 'c1_X',  type: 'OUTPUT',    x: -505, y: -220, targetValue: 0, label: 'X' },
      { id: 'c1_Y',  type: 'OUTPUT',    x: -365, y: -220, targetValue: 1, label: 'Y' },
      // Case 2: A=0, B=1, C=1 → X=1, Y=1   (cx = -145)
      { id: 'c2_B',  type: 'INPUT',     x: -215, y: 200, fixedValue: 1, label: 'B' },
      { id: 'c2_A',  type: 'INPUT',     x: -145, y: 250, fixedValue: 0, label: 'A' },
      { id: 'c2_C',  type: 'INPUT',     x: -75,  y: 200, fixedValue: 1, label: 'C' },
      { id: 'c2_g1', type: 'GATE_SLOT', x: -215, y: 0,   linkedGroup: 'top' },
      { id: 'c2_g2', type: 'GATE_SLOT', x: -75,  y: 0,   linkedGroup: 'bot' },
      { id: 'c2_X',  type: 'OUTPUT',    x: -215, y: -220, targetValue: 1, label: 'X' },
      { id: 'c2_Y',  type: 'OUTPUT',    x: -75,  y: -220, targetValue: 1, label: 'Y' },
      // Case 3: A=1, B=0, C=1 → X=1, Y=1   (cx = 145)
      { id: 'c3_B',  type: 'INPUT',     x: 75,   y: 200, fixedValue: 0, label: 'B' },
      { id: 'c3_A',  type: 'INPUT',     x: 145,  y: 250, fixedValue: 1, label: 'A' },
      { id: 'c3_C',  type: 'INPUT',     x: 215,  y: 200, fixedValue: 1, label: 'C' },
      { id: 'c3_g1', type: 'GATE_SLOT', x: 75,   y: 0,   linkedGroup: 'top' },
      { id: 'c3_g2', type: 'GATE_SLOT', x: 215,  y: 0,   linkedGroup: 'bot' },
      { id: 'c3_X',  type: 'OUTPUT',    x: 75,   y: -220, targetValue: 1, label: 'X' },
      { id: 'c3_Y',  type: 'OUTPUT',    x: 215,  y: -220, targetValue: 1, label: 'Y' },
      // Case 4: A=0, B=0, C=0 → X=1, Y=0   (cx = 435)
      { id: 'c4_B',  type: 'INPUT',     x: 365,  y: 200, fixedValue: 0, label: 'B' },
      { id: 'c4_A',  type: 'INPUT',     x: 435,  y: 250, fixedValue: 0, label: 'A' },
      { id: 'c4_C',  type: 'INPUT',     x: 505,  y: 200, fixedValue: 0, label: 'C' },
      { id: 'c4_g1', type: 'GATE_SLOT', x: 365,  y: 0,   linkedGroup: 'top' },
      { id: 'c4_g2', type: 'GATE_SLOT', x: 505,  y: 0,   linkedGroup: 'bot' },
      { id: 'c4_X',  type: 'OUTPUT',    x: 365,  y: -220, targetValue: 1, label: 'X' },
      { id: 'c4_Y',  type: 'OUTPUT',    x: 505,  y: -220, targetValue: 0, label: 'Y' },
    ],
    wires: [
      // Case 1 — B→g1[0], A→g1[1], A→g2[0], C→g2[1]
      { id: 'c1w1', sourceId: 'c1_B',  targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_A',  targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_A',  targetId: 'c1_g2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_g2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_g1', targetId: 'c1_X',  targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_g2', targetId: 'c1_Y',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_B',  targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_A',  targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_A',  targetId: 'c2_g2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_g2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_g1', targetId: 'c2_X',  targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_g2', targetId: 'c2_Y',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_B',  targetId: 'c3_g1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_A',  targetId: 'c3_g1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_A',  targetId: 'c3_g2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_g2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_g1', targetId: 'c3_X',  targetInputIndex: 0 },
      { id: 'c3w6', sourceId: 'c3_g2', targetId: 'c3_Y',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_B',  targetId: 'c4_g1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_A',  targetId: 'c4_g1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_A',  targetId: 'c4_g2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_g2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_g1', targetId: 'c4_X',  targetInputIndex: 0 },
      { id: 'c4w6', sourceId: 'c4_g2', targetId: 'c4_Y',  targetInputIndex: 0 },
    ],
  },

  // L9 — SPLIT PATH (G1 output fans to Y directly AND chains through G2 to X)
  // Unique solution: G1=OR, G2=NAND
  // Case 1: A=1,B=0,C=1 → Y=1,X=0   Case 2: A=0,B=0,C=0 → Y=0,X=1
  // Case 3: A=1,B=1,C=0 → Y=1,X=1   Case 4: A=0,B=1,C=1 → Y=1,X=0
  {
    id: 9, name: 'SPLIT PATH', difficulty: 'Fundamentals',
    layout: 'vertical',
    description: 'Split Path — The output of G1 splits in two directions — directly to output Y and simultaneously as input to G2 leading to X. This structure combines fanout with chaining, bridging parallel and sequential circuits.',
    instruction: 'Split path: G1 output splits — directly to Y and through G2 to X\nFind the only gate pair that produces correct results in all four cases',
    hint: 'First find G1 from Y targets, then find G2 knowing G1 output.',
    truthTable: { inputs: ['A','B','C'], outputs: ['X','Y'], rows: [[[0,0,0],[1,0]],[[0,0,1],[1,0]],[[0,1,0],[1,1]],[[0,1,1],[0,1]],[[1,0,0],[1,1]],[[1,0,1],[0,1]],[[1,1,0],[1,1]],[[1,1,1],[0,1]]] },
    solution: {
      gatesUsed: ['OR', 'NAND'],
      explanation: 'Split Path — The output of G1 splits in two directions — directly to output Y and simultaneously as input to G2 leading to X. This structure combines fanout with chaining, bridging parallel and sequential circuits.',
      blockSvg: `<svg viewBox="0 0 440 180" width="520" height="210"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="50" x2="90" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="90" x2="90" y2="90" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="140" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="30" y1="135" x2="90" y2="135" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="230" height="140" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">SPLIT PATH</text><text x="205" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#4a6080">G1→Y, G1+C→G2→X</text><line x1="320" y1="62" x2="380" y2="62" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">X</text><line x1="320" y1="122" x2="380" y2="122" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="127" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 540 200" width="660" height="245"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="18" y="172" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="130" y="50" width="80" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="78" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">OR</text><rect x="310" y="80" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="355" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NAND</text><text x="478" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">X</text><text x="478" y="57" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text><line x1="36" y1="48" x2="130" y2="62" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="108" x2="130" y2="82" stroke="#39ff14" stroke-width="2"/><polyline points="210,72 250,72 250,52 468,52" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="250,72 250,90 310,90" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="36" y1="168" x2="310" y2="114" stroke="#39ff14" stroke-width="2"/><line x1="400" y1="102" x2="468" y2="102" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=0, C=1 → Y=1, X=0   (cx = -420)
      { id: 'c1_A',  type: 'INPUT',     x: -470, y: 280, fixedValue: 1, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -370, y: 280, fixedValue: 0, label: 'B' },
      { id: 'c1_g1', type: 'GATE_SLOT', x: -420, y: 100, linkedGroup: 'g1' },
      { id: 'c1_C',  type: 'INPUT',     x: -325, y: 40,  fixedValue: 1, label: 'C' },
      { id: 'c1_g2', type: 'GATE_SLOT', x: -440, y: -60, linkedGroup: 'g2' },
      { id: 'c1_X',  type: 'OUTPUT',    x: -440, y: -230, targetValue: 0, label: 'X' },
      { id: 'c1_Y',  type: 'OUTPUT',    x: -360, y: -230, targetValue: 1, label: 'Y' },
      // Case 2: A=0, B=0, C=0 → Y=0, X=1   (cx = -140)
      { id: 'c2_A',  type: 'INPUT',     x: -190, y: 280, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 280, fixedValue: 0, label: 'B' },
      { id: 'c2_g1', type: 'GATE_SLOT', x: -140, y: 100, linkedGroup: 'g1' },
      { id: 'c2_C',  type: 'INPUT',     x: -45,  y: 40,  fixedValue: 0, label: 'C' },
      { id: 'c2_g2', type: 'GATE_SLOT', x: -160, y: -60, linkedGroup: 'g2' },
      { id: 'c2_X',  type: 'OUTPUT',    x: -160, y: -230, targetValue: 1, label: 'X' },
      { id: 'c2_Y',  type: 'OUTPUT',    x: -80,  y: -230, targetValue: 0, label: 'Y' },
      // Case 3: A=1, B=1, C=0 → Y=1, X=1   (cx = 140)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 280, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 190,  y: 280, fixedValue: 1, label: 'B' },
      { id: 'c3_g1', type: 'GATE_SLOT', x: 140,  y: 100, linkedGroup: 'g1' },
      { id: 'c3_C',  type: 'INPUT',     x: 235,  y: 40,  fixedValue: 0, label: 'C' },
      { id: 'c3_g2', type: 'GATE_SLOT', x: 120,  y: -60, linkedGroup: 'g2' },
      { id: 'c3_X',  type: 'OUTPUT',    x: 120,  y: -230, targetValue: 1, label: 'X' },
      { id: 'c3_Y',  type: 'OUTPUT',    x: 200,  y: -230, targetValue: 1, label: 'Y' },
      // Case 4: A=0, B=1, C=1 → Y=1, X=0   (cx = 420)
      { id: 'c4_A',  type: 'INPUT',     x: 370,  y: 280, fixedValue: 0, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 470,  y: 280, fixedValue: 1, label: 'B' },
      { id: 'c4_g1', type: 'GATE_SLOT', x: 420,  y: 100, linkedGroup: 'g1' },
      { id: 'c4_C',  type: 'INPUT',     x: 515,  y: 40,  fixedValue: 1, label: 'C' },
      { id: 'c4_g2', type: 'GATE_SLOT', x: 400,  y: -60, linkedGroup: 'g2' },
      { id: 'c4_X',  type: 'OUTPUT',    x: 400,  y: -230, targetValue: 0, label: 'X' },
      { id: 'c4_Y',  type: 'OUTPUT',    x: 480,  y: -230, targetValue: 1, label: 'Y' },
    ],
    wires: [
      // Case 1: A,B→G1; G1→G2[0], C→G2[1]; G2→X; G1→Y
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g1', targetId: 'c1_g2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_g2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_g2', targetId: 'c1_X',  targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_g1', targetId: 'c1_Y',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g1', targetId: 'c2_g2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_g2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_g2', targetId: 'c2_X',  targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_g1', targetId: 'c2_Y',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_g1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_g1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g1', targetId: 'c3_g2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_g2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_g2', targetId: 'c3_X',  targetInputIndex: 0 },
      { id: 'c3w6', sourceId: 'c3_g1', targetId: 'c3_Y',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_g1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_g1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g1', targetId: 'c4_g2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_g2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_g2', targetId: 'c4_X',  targetInputIndex: 0 },
      { id: 'c4w6', sourceId: 'c4_g1', targetId: 'c4_Y',  targetInputIndex: 0 },
    ],
  },

  // L10 — THREE-GATE NETWORK (4 cases, vertical bottom-to-top)
  // Unique solution: G1=OR, G2=OR, G3=AND
  // Structure: A,B→G1; B,C→G2; G1,C→G3→P; G2→Q
  // Case 1: A=1,B=0,C=1 → P=1,Q=1   Case 2: A=0,B=0,C=0 → P=0,Q=0
  // Case 3: A=1,B=1,C=1 → P=1,Q=1   Case 4: A=0,B=0,C=1 → P=0,Q=1
  {
    id: 10, name: 'THREE-GATE NETWORK', difficulty: 'Fundamentals',
    layout: 'vertical',
    description: 'Three-Gate Network — B fans out to G1 and G2, C fans out to G2 and G3, and G1 output chains into G3. This structure combines signal fanout with gate chaining in a single network for the first time — the foundation of any complex combinational circuit.',
    instruction: 'Three-gate network: fanout and chaining combined for the first time\nFind the three gates that produce correct results in all four cases',
    hint: 'B fans to G1 and G2. C fans to G2 and G3. G1 chains to G3. Only one triple works.',
    truthTable: { inputs: ['A','B','C'], outputs: ['P','Q'], rows: [[[0,0,0],[0,0]],[[0,0,1],[0,1]],[[0,1,0],[0,1]],[[0,1,1],[1,1]],[[1,0,0],[0,0]],[[1,0,1],[1,1]],[[1,1,0],[0,1]],[[1,1,1],[1,1]]] },
    solution: {
      gatesUsed: ['OR', 'OR', 'AND'],
      explanation: 'Three-Gate Network — B fans out to G1 and G2, C fans out to G2 and G3, and G1 output chains into G3. This structure combines signal fanout with gate chaining in a single network for the first time — the foundation of any complex combinational circuit.',
      blockSvg: `<svg viewBox="0 0 440 180" width="520" height="210"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="50" x2="90" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="90" x2="90" y2="90" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="140" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="30" y1="135" x2="90" y2="135" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="230" height="140" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">THREE-GATE</text><text x="205" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">NETWORK</text><line x1="320" y1="62" x2="380" y2="62" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text><line x1="320" y1="122" x2="380" y2="122" stroke="#c8d8f0" stroke-width="2.5"/><text x="388" y="127" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 580 220" width="700" height="270"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="12" y="192" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="130" y="22" width="80" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="50" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">OR</text><rect x="130" y="132" width="80" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">OR</text><rect x="310" y="52" width="80" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="350" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">AND</text><text x="510" y="79" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text><text x="510" y="159" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text><line x1="30" y1="38" x2="130" y2="34" stroke="#39ff14" stroke-width="2"/><polyline points="30,108 80,108 80,54 130,54" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="80,108 80,142 130,142" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="30,188 100,188 100,164 130,164" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="210,44 260,44 260,62 310,62" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="100,188 100,86 310,86" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="390" y1="74" x2="500" y2="74" stroke="#39ff14" stroke-width="2"/><line x1="210" y1="154" x2="500" y2="154" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=0, C=1 → P=1, Q=1   (cx = -450)
      { id: 'c1_A',  type: 'INPUT',     x: -520, y: 300, fixedValue: 1, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -450, y: 340, fixedValue: 0, label: 'B' },
      { id: 'c1_C',  type: 'INPUT',     x: -380, y: 300, fixedValue: 1, label: 'C' },
      { id: 'c1_g1', type: 'GATE_SLOT', x: -505, y: 110, linkedGroup: 'g1' },
      { id: 'c1_g2', type: 'GATE_SLOT', x: -395, y: 110, linkedGroup: 'g2' },
      { id: 'c1_g3', type: 'GATE_SLOT', x: -450, y: -60, linkedGroup: 'g3' },
      { id: 'c1_P',  type: 'OUTPUT',    x: -450, y: -240, targetValue: 1, label: 'P' },
      { id: 'c1_Q',  type: 'OUTPUT',    x: -395, y: -240, targetValue: 1, label: 'Q' },
      // Case 2: A=0, B=0, C=0 → P=0, Q=0   (cx = -150)
      { id: 'c2_A',  type: 'INPUT',     x: -220, y: 300, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -150, y: 340, fixedValue: 0, label: 'B' },
      { id: 'c2_C',  type: 'INPUT',     x: -80,  y: 300, fixedValue: 0, label: 'C' },
      { id: 'c2_g1', type: 'GATE_SLOT', x: -205, y: 110, linkedGroup: 'g1' },
      { id: 'c2_g2', type: 'GATE_SLOT', x: -95,  y: 110, linkedGroup: 'g2' },
      { id: 'c2_g3', type: 'GATE_SLOT', x: -150, y: -60, linkedGroup: 'g3' },
      { id: 'c2_P',  type: 'OUTPUT',    x: -150, y: -240, targetValue: 0, label: 'P' },
      { id: 'c2_Q',  type: 'OUTPUT',    x: -95,  y: -240, targetValue: 0, label: 'Q' },
      // Case 3: A=1, B=1, C=1 → P=1, Q=1   (cx = 150)
      { id: 'c3_A',  type: 'INPUT',     x: 80,   y: 300, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 150,  y: 340, fixedValue: 1, label: 'B' },
      { id: 'c3_C',  type: 'INPUT',     x: 220,  y: 300, fixedValue: 1, label: 'C' },
      { id: 'c3_g1', type: 'GATE_SLOT', x: 95,   y: 110, linkedGroup: 'g1' },
      { id: 'c3_g2', type: 'GATE_SLOT', x: 205,  y: 110, linkedGroup: 'g2' },
      { id: 'c3_g3', type: 'GATE_SLOT', x: 150,  y: -60, linkedGroup: 'g3' },
      { id: 'c3_P',  type: 'OUTPUT',    x: 150,  y: -240, targetValue: 1, label: 'P' },
      { id: 'c3_Q',  type: 'OUTPUT',    x: 205,  y: -240, targetValue: 1, label: 'Q' },
      // Case 4: A=0, B=0, C=1 → P=0, Q=1   (cx = 450)
      { id: 'c4_A',  type: 'INPUT',     x: 380,  y: 300, fixedValue: 0, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 450,  y: 340, fixedValue: 0, label: 'B' },
      { id: 'c4_C',  type: 'INPUT',     x: 520,  y: 300, fixedValue: 1, label: 'C' },
      { id: 'c4_g1', type: 'GATE_SLOT', x: 395,  y: 110, linkedGroup: 'g1' },
      { id: 'c4_g2', type: 'GATE_SLOT', x: 505,  y: 110, linkedGroup: 'g2' },
      { id: 'c4_g3', type: 'GATE_SLOT', x: 450,  y: -60, linkedGroup: 'g3' },
      { id: 'c4_P',  type: 'OUTPUT',    x: 450,  y: -240, targetValue: 0, label: 'P' },
      { id: 'c4_Q',  type: 'OUTPUT',    x: 505,  y: -240, targetValue: 1, label: 'Q' },
    ],
    wires: [
      // Case 1: A,B→G1; B,C→G2; G1,C→G3→P; G2→Q
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_B',  targetId: 'c1_g2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_g2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_g1', targetId: 'c1_g3', targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_C',  targetId: 'c1_g3', targetInputIndex: 1 },
      { id: 'c1w7', sourceId: 'c1_g3', targetId: 'c1_P',  targetInputIndex: 0 },
      { id: 'c1w8', sourceId: 'c1_g2', targetId: 'c1_Q',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_B',  targetId: 'c2_g2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_g2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_g1', targetId: 'c2_g3', targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_C',  targetId: 'c2_g3', targetInputIndex: 1 },
      { id: 'c2w7', sourceId: 'c2_g3', targetId: 'c2_P',  targetInputIndex: 0 },
      { id: 'c2w8', sourceId: 'c2_g2', targetId: 'c2_Q',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_g1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_g1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_B',  targetId: 'c3_g2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_g2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_g1', targetId: 'c3_g3', targetInputIndex: 0 },
      { id: 'c3w6', sourceId: 'c3_C',  targetId: 'c3_g3', targetInputIndex: 1 },
      { id: 'c3w7', sourceId: 'c3_g3', targetId: 'c3_P',  targetInputIndex: 0 },
      { id: 'c3w8', sourceId: 'c3_g2', targetId: 'c3_Q',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_g1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_g1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_B',  targetId: 'c4_g2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_g2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_g1', targetId: 'c4_g3', targetInputIndex: 0 },
      { id: 'c4w6', sourceId: 'c4_C',  targetId: 'c4_g3', targetInputIndex: 1 },
      { id: 'c4w7', sourceId: 'c4_g3', targetId: 'c4_P',  targetInputIndex: 0 },
      { id: 'c4w8', sourceId: 'c4_g2', targetId: 'c4_Q',  targetInputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 2 — 2. Building Blocks  (IDs 11–20)
  // Classic digital building blocks
  // ════════════════════════════════════════════════════════════

  // L11 — XNOR GATE (4 cases, vertical bottom-to-top)
  // Solution: G1=XOR, G2=NOT (NOT ignores second input)
  // Structure: A,B → G1 → G2(G1_out, B) → Z
  // Case 1: A=0,B=0 → Z=1  Case 2: A=0,B=1 → Z=0  Case 3: A=1,B=0 → Z=0  Case 4: A=1,B=1 → Z=1
  {
    id: 11, name: 'XNOR GATE', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: 'XNOR Gate — The XNOR gate outputs 1 when both inputs are equal (both 0 or both 1). It is built by chaining XOR followed by NOT. Used in comparison circuits and bit equality checking.',
    instruction: 'XNOR: the first gate processes the inputs, the second inverts the result\nFind the two gates that produce the correct output for all four cases',
    hint: 'XNOR is just XOR followed by NOT. Two gate slots chained.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[0]],[[1,0],[0]],[[1,1],[1]]] },
    solution: {
      gatesUsed: ['XOR', 'NOT'],
      explanation: 'XNOR Gate — The XNOR gate outputs 1 when both inputs are equal (both 0 or both 1). It is built by chaining XOR followed by NOT. Used in comparison circuits and bit equality checking.',
      blockSvg: `<svg viewBox="0 0 380 160" width="460" height="195"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="50" x2="95" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="110" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="105" x2="95" y2="105" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="25" width="180" height="110" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="185" y="88" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" font-weight="bold" fill="#00d4ff">XNOR</text><line x1="275" y1="80" x2="340" y2="80" stroke="#c8d8f0" stroke-width="2.5"/><text x="348" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 480 170" width="580" height="205"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="132" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="120" y="50" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="165" y="78" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="290" y="55" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="330" y="81" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">NOT</text><text x="435" y="80" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text><line x1="36" y1="48" x2="120" y2="62" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="128" x2="120" y2="84" stroke="#39ff14" stroke-width="2"/><line x1="210" y1="72" x2="290" y2="75" stroke="#39ff14" stroke-width="2"/><line x1="370" y1="75" x2="425" y2="75" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=0, B=0 → Z=1   (cx = -420)
      { id: 'c1_A',  type: 'INPUT',     x: -470, y: 230, fixedValue: 0, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -370, y: 230, fixedValue: 0, label: 'B' },
      { id: 'c1_g1', type: 'GATE_SLOT', x: -420, y: 70,  linkedGroup: 'g1' },
      { id: 'c1_g2', type: 'GATE_SLOT', x: -420, y: -90, linkedGroup: 'g2' },
      { id: 'c1_Z',  type: 'OUTPUT',    x: -420, y: -250, targetValue: 1, label: 'Z' },
      // Case 2: A=0, B=1 → Z=0   (cx = -140)
      { id: 'c2_A',  type: 'INPUT',     x: -190, y: 230, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 230, fixedValue: 1, label: 'B' },
      { id: 'c2_g1', type: 'GATE_SLOT', x: -140, y: 70,  linkedGroup: 'g1' },
      { id: 'c2_g2', type: 'GATE_SLOT', x: -140, y: -90, linkedGroup: 'g2' },
      { id: 'c2_Z',  type: 'OUTPUT',    x: -140, y: -250, targetValue: 0, label: 'Z' },
      // Case 3: A=1, B=0 → Z=0   (cx = 140)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 230, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 190,  y: 230, fixedValue: 0, label: 'B' },
      { id: 'c3_g1', type: 'GATE_SLOT', x: 140,  y: 70,  linkedGroup: 'g1' },
      { id: 'c3_g2', type: 'GATE_SLOT', x: 140,  y: -90, linkedGroup: 'g2' },
      { id: 'c3_Z',  type: 'OUTPUT',    x: 140,  y: -250, targetValue: 0, label: 'Z' },
      // Case 4: A=1, B=1 → Z=1   (cx = 420)
      { id: 'c4_A',  type: 'INPUT',     x: 370,  y: 230, fixedValue: 1, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 470,  y: 230, fixedValue: 1, label: 'B' },
      { id: 'c4_g1', type: 'GATE_SLOT', x: 420,  y: 70,  linkedGroup: 'g1' },
      { id: 'c4_g2', type: 'GATE_SLOT', x: 420,  y: -90, linkedGroup: 'g2' },
      { id: 'c4_Z',  type: 'OUTPUT',    x: 420,  y: -250, targetValue: 1, label: 'Z' },
    ],
    wires: [
      // Case 1: A→G1[0], B→G1[1], G1→G2[0], B→G2[1], G2→Z
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_g1', targetId: 'c1_g2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_B',  targetId: 'c1_g2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_g2', targetId: 'c1_Z',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_g1', targetId: 'c2_g2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_B',  targetId: 'c2_g2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_g2', targetId: 'c2_Z',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_g1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_g1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_g1', targetId: 'c3_g2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_B',  targetId: 'c3_g2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_g2', targetId: 'c3_Z',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_g1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_g1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_g1', targetId: 'c4_g2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_B',  targetId: 'c4_g2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_g2', targetId: 'c4_Z',  targetInputIndex: 0 },
    ],
  },

  // L12 — HALF ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: G_sum=XOR, G_carry=AND
  // All 4 input combos: (0,0)→(0,0) (0,1)→(1,0) (1,0)→(1,0) (1,1)→(0,1)
  {
    id: 12, name: 'HALF ADDER', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: 'Half Adder — The half adder is the simplest addition circuit. It adds two single bits: XOR computes the SUM and AND computes the CARRY. It is the building block of the full adder.',
    instruction: 'Half adder: one gate computes the sum, the other computes the carry\nFind the two gates that produce the correct output for all four cases',
    hint: 'SUM uses XOR (adds without carry), CARRY uses AND (carry only when both are 1).',
    truthTable: { inputs: ['A','B'], outputs: ['SUM','CARRY'], rows: [[[0,0],[0,0]],[[0,1],[1,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['XOR', 'AND'],
      explanation: 'Half Adder — The half adder is the simplest addition circuit. It adds two single bits: XOR computes the SUM and AND computes the CARRY. It is the building block of the full adder.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="30" y1="50" x2="90" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="110" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="30" y1="105" x2="90" y2="105" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="25" width="200" height="110" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="190" y="88" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" font-weight="bold" fill="#00d4ff">H.A.</text><line x1="290" y1="55" x2="345" y2="55" stroke="#c8d8f0" stroke-width="2.5"/><text x="352" y="60" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">SUM</text><line x1="290" y1="105" x2="345" y2="105" stroke="#c8d8f0" stroke-width="2.5"/><text x="352" y="110" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">CARRY</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 480 190" width="580" height="230"><text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="152" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="150" y="30" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="195" y="58" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="150" y="120" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="195" y="148" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">AND</text><text x="390" y="57" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">SUM</text><text x="390" y="147" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">CARRY</text><polyline points="36,48 80,48 80,40 150,40" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="80,48 80,130 150,130" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="36,148 100,148 100,62 150,62" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="100,148 100,152 150,152" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="240" y1="52" x2="380" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="240" y1="142" x2="380" y2="142" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=0, B=0 → SUM=0, CARRY=0   (cx = -435)
      { id: 'c1_A',  type: 'INPUT',     x: -490, y: 200, fixedValue: 0, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -380, y: 200, fixedValue: 0, label: 'B' },
      { id: 'c1_gs', type: 'GATE_SLOT', x: -490, y: 0,   linkedGroup: 'sum' },
      { id: 'c1_gc', type: 'GATE_SLOT', x: -380, y: 0,   linkedGroup: 'carry' },
      { id: 'c1_S',  type: 'OUTPUT',    x: -490, y: -220, targetValue: 0, label: 'SUM' },
      { id: 'c1_C',  type: 'OUTPUT',    x: -380, y: -220, targetValue: 0, label: 'CARRY' },
      // Case 2: A=0, B=1 → SUM=1, CARRY=0   (cx = -145)
      { id: 'c2_A',  type: 'INPUT',     x: -200, y: 200, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 200, fixedValue: 1, label: 'B' },
      { id: 'c2_gs', type: 'GATE_SLOT', x: -200, y: 0,   linkedGroup: 'sum' },
      { id: 'c2_gc', type: 'GATE_SLOT', x: -90,  y: 0,   linkedGroup: 'carry' },
      { id: 'c2_S',  type: 'OUTPUT',    x: -200, y: -220, targetValue: 1, label: 'SUM' },
      { id: 'c2_C',  type: 'OUTPUT',    x: -90,  y: -220, targetValue: 0, label: 'CARRY' },
      // Case 3: A=1, B=0 → SUM=1, CARRY=0   (cx = 145)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 200, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 200,  y: 200, fixedValue: 0, label: 'B' },
      { id: 'c3_gs', type: 'GATE_SLOT', x: 90,   y: 0,   linkedGroup: 'sum' },
      { id: 'c3_gc', type: 'GATE_SLOT', x: 200,  y: 0,   linkedGroup: 'carry' },
      { id: 'c3_S',  type: 'OUTPUT',    x: 90,   y: -220, targetValue: 1, label: 'SUM' },
      { id: 'c3_C',  type: 'OUTPUT',    x: 200,  y: -220, targetValue: 0, label: 'CARRY' },
      // Case 4: A=1, B=1 → SUM=0, CARRY=1   (cx = 435)
      { id: 'c4_A',  type: 'INPUT',     x: 380,  y: 200, fixedValue: 1, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 490,  y: 200, fixedValue: 1, label: 'B' },
      { id: 'c4_gs', type: 'GATE_SLOT', x: 380,  y: 0,   linkedGroup: 'sum' },
      { id: 'c4_gc', type: 'GATE_SLOT', x: 490,  y: 0,   linkedGroup: 'carry' },
      { id: 'c4_S',  type: 'OUTPUT',    x: 380,  y: -220, targetValue: 0, label: 'SUM' },
      { id: 'c4_C',  type: 'OUTPUT',    x: 490,  y: -220, targetValue: 1, label: 'CARRY' },
    ],
    wires: [
      // Case 1: A,B → G_sum, G_carry
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_gs', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_gs', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_A',  targetId: 'c1_gc', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_B',  targetId: 'c1_gc', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_gs', targetId: 'c1_S',  targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_gc', targetId: 'c1_C',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_gs', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_gs', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_A',  targetId: 'c2_gc', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_B',  targetId: 'c2_gc', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_gs', targetId: 'c2_S',  targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_gc', targetId: 'c2_C',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_gs', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_gs', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_A',  targetId: 'c3_gc', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_B',  targetId: 'c3_gc', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_gs', targetId: 'c3_S',  targetInputIndex: 0 },
      { id: 'c3w6', sourceId: 'c3_gc', targetId: 'c3_C',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_gs', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_gs', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_A',  targetId: 'c4_gc', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_B',  targetId: 'c4_gc', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_gs', targetId: 'c4_S',  targetInputIndex: 0 },
      { id: 'c4w6', sourceId: 'c4_gc', targetId: 'c4_C',  targetInputIndex: 0 },
    ],
  },

  // L13 — 3-BIT ODD PARITY (4 cases, vertical bottom-to-top)
  // Solution: G_x1=XOR, G_x2=XOR
  // Structure: A,B → x1 → x2(x1,C) → P
  // Case 1: A=1,B=0,C=0→P=1  Case 2: A=1,B=1,C=0→P=0  Case 3: A=0,B=0,C=1→P=1  Case 4: A=1,B=1,C=1→P=1
  {
    id: 13, name: '3-BIT ODD PARITY', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: 'Odd Parity — A chain of XOR gates counts whether the number of active inputs is odd. Used for error detection in data communication and memory systems.',
    instruction: 'Odd parity: P is active when an odd number of inputs are active\nFind the two gates that produce the correct P for all four cases',
    hint: 'Parity is always a chain of XOR gates: XOR(XOR(A,B),C). Each XOR accumulates the "odd count" flag.',
    truthTable: { inputs: ['A','B','C'], outputs: ['P'], rows: [[[0,0,0],[0]],[[0,0,1],[1]],[[0,1,0],[1]],[[0,1,1],[0]],[[1,0,0],[1]],[[1,0,1],[0]],[[1,1,0],[0]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Odd Parity — A chain of XOR gates counts whether the number of active inputs is odd. Used for error detection in data communication and memory systems.',
      blockSvg: `<svg viewBox="0 0 440 180" width="520" height="215"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="87" x2="90" y2="87" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="137" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="28" y1="132" x2="90" y2="132" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="230" height="135" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="20" font-weight="bold" fill="#00d4ff">ODD PARITY</text><line x1="320" y1="90" x2="385" y2="90" stroke="#c8d8f0" stroke-width="2.5"/><text x="393" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 520 180" width="640" height="220"><text x="18" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="18" y="152" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="120" y="40" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="165" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="300" y="70" width="90" height="44" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="345" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><text x="460" y="97" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text><line x1="36" y1="38" x2="120" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="98" x2="120" y2="74" stroke="#39ff14" stroke-width="2"/><line x1="210" y1="62" x2="300" y2="82" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="148" x2="300" y2="104" stroke="#39ff14" stroke-width="2"/><line x1="390" y1="92" x2="450" y2="92" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=0, C=0 → P=1   (cx = -420)
      { id: 'c1_A',  type: 'INPUT',     x: -470, y: 280, fixedValue: 1, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -370, y: 280, fixedValue: 0, label: 'B' },
      { id: 'c1_x1', type: 'GATE_SLOT', x: -420, y: 110, linkedGroup: 'x1' },
      { id: 'c1_C',  type: 'INPUT',     x: -340, y: 50,  fixedValue: 0, label: 'C' },
      { id: 'c1_x2', type: 'GATE_SLOT', x: -420, y: -70, linkedGroup: 'x2' },
      { id: 'c1_P',  type: 'OUTPUT',    x: -420, y: -240, targetValue: 1, label: 'P' },
      // Case 2: A=1, B=1, C=0 → P=0   (cx = -140)
      { id: 'c2_A',  type: 'INPUT',     x: -190, y: 280, fixedValue: 1, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 280, fixedValue: 1, label: 'B' },
      { id: 'c2_x1', type: 'GATE_SLOT', x: -140, y: 110, linkedGroup: 'x1' },
      { id: 'c2_C',  type: 'INPUT',     x: -60,  y: 50,  fixedValue: 0, label: 'C' },
      { id: 'c2_x2', type: 'GATE_SLOT', x: -140, y: -70, linkedGroup: 'x2' },
      { id: 'c2_P',  type: 'OUTPUT',    x: -140, y: -240, targetValue: 0, label: 'P' },
      // Case 3: A=0, B=0, C=1 → P=1   (cx = 140)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 280, fixedValue: 0, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 190,  y: 280, fixedValue: 0, label: 'B' },
      { id: 'c3_x1', type: 'GATE_SLOT', x: 140,  y: 110, linkedGroup: 'x1' },
      { id: 'c3_C',  type: 'INPUT',     x: 220,  y: 50,  fixedValue: 1, label: 'C' },
      { id: 'c3_x2', type: 'GATE_SLOT', x: 140,  y: -70, linkedGroup: 'x2' },
      { id: 'c3_P',  type: 'OUTPUT',    x: 140,  y: -240, targetValue: 1, label: 'P' },
      // Case 4: A=1, B=1, C=1 → P=1   (cx = 420)
      { id: 'c4_A',  type: 'INPUT',     x: 370,  y: 280, fixedValue: 1, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 470,  y: 280, fixedValue: 1, label: 'B' },
      { id: 'c4_x1', type: 'GATE_SLOT', x: 420,  y: 110, linkedGroup: 'x1' },
      { id: 'c4_C',  type: 'INPUT',     x: 500,  y: 50,  fixedValue: 1, label: 'C' },
      { id: 'c4_x2', type: 'GATE_SLOT', x: 420,  y: -70, linkedGroup: 'x2' },
      { id: 'c4_P',  type: 'OUTPUT',    x: 420,  y: -240, targetValue: 1, label: 'P' },
    ],
    wires: [
      // Case 1: A→x1[0], B→x1[1], x1→x2[0], C→x2[1], x2→P
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_x1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_x1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_x1', targetId: 'c1_x2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_x2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_x2', targetId: 'c1_P',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_x1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_x1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_x1', targetId: 'c2_x2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_x2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_x2', targetId: 'c2_P',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_x1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_x1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_x1', targetId: 'c3_x2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_x2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_x2', targetId: 'c3_P',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_x1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_x1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_x1', targetId: 'c4_x2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_x2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_x2', targetId: 'c4_P',  targetInputIndex: 0 },
    ],
  },

  // L14 — 3-BIT BINARY TO GRAY CODE
  // B2=1,B1=1,B0=0 → G2=B2=1 (direct), G1=XOR(1,1)=0, G0=XOR(1,0)=1
  {
    id: 14, name: 'BINARY TO GRAY CODE', difficulty: 'Building Blocks',
    description: 'Binary to Gray Code — Conversion from binary to Gray code. In Gray code, two consecutive numbers differ by only one bit. G2=B2 (passed directly), G1=B2 XOR B1, G0=B1 XOR B0.',
    instruction: 'Convert binary to Gray code: G2 passes directly, G1 and G0 go through gates\nFind the two gates that produce the correct output',
    hint: 'G2=B2 directly. G1=XOR(B2,B1). G0=XOR(B1,B0). Both gates are the same type.',
    truthTable: {
      inputs: ['B2','B1','B0'], outputs: ['G2','G1','G0'],
      rows: [
        [[0,0,0],[0,0,0]], [[0,0,1],[0,0,1]], [[0,1,0],[0,1,1]], [[0,1,1],[0,1,0]],
        [[1,0,0],[1,1,0]], [[1,0,1],[1,1,1]], [[1,1,0],[1,0,1]], [[1,1,1],[1,0,0]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Binary to Gray Code — Conversion from binary to Gray code using XOR between adjacent bits. Gray code is used in communication and sensors because errors are limited to one bit. Formula: Gi = Bi+1 XOR Bi, where the MSB passes directly.',
      blockSvg: `<svg viewBox="0 0 380 180" width="460" height="220">
        <text x="12" y="47" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B2</text><line x1="38" y1="42" x2="90" y2="42" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B1</text><line x1="38" y1="87" x2="90" y2="87" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B0</text><line x1="38" y1="137" x2="90" y2="137" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="90" y="20" width="190" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="185" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">BIN→GRAY</text>
        <text x="185" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#00d4ff">CONVERTER</text>
        <line x1="280" y1="47" x2="335" y2="47" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G2</text>
        <line x1="280" y1="92" x2="335" y2="92" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="97" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G1</text>
        <line x1="280" y1="137" x2="335" y2="137" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G0</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 440 200" width="530" height="245">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B2</text>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B1</text>
        <text x="12" y="172" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B0</text>
        <rect x="160" y="50" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="198" y="74" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="160" y="130" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="198" y="154" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <text x="390" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G2</text>
        <text x="390" y="74" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G1</text>
        <text x="390" y="154" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G0</text>
        <line x1="38" y1="38" x2="380" y2="38" stroke="#39ff14" stroke-width="1.5"/>
        <polyline points="38,38 60,38 60,58 160,58" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="38,98 80,98 80,78 160,78" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="80,98 80,138 160,138" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="38,168 100,168 100,158 160,158" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="236" y1="68" x2="380" y2="68" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="236" y1="148" x2="380" y2="148" stroke="#39ff14" stroke-width="1.5"/>
        <circle cx="60" cy="38" r="3" fill="#39ff14"/>
      </svg>`,
    },
    nodes: [
      // Case 1: B2=1, B1=1, B0=0 → G2=1, G1=XOR(1,1)=0, G0=XOR(1,0)=1
      { id: 'c1_B2',  type: 'INPUT',     x: 180, y: 140, fixedValue: 1, label: 'B2' },
      { id: 'c1_B1',  type: 'INPUT',     x: 180, y: 290, fixedValue: 1, label: 'B1' },
      { id: 'c1_B0',  type: 'INPUT',     x: 180, y: 440, fixedValue: 0, label: 'B0' },
      { id: 'c1_g1',  type: 'GATE_SLOT', x: 500, y: 215, linkedGroup: 'gray' },
      { id: 'c1_g0',  type: 'GATE_SLOT', x: 500, y: 365, linkedGroup: 'gray' },
      { id: 'c1_G2',  type: 'OUTPUT',    x: 820, y: 140, targetValue: 1, label: 'G2' },
      { id: 'c1_G1',  type: 'OUTPUT',    x: 820, y: 215, targetValue: 0, label: 'G1' },
      { id: 'c1_G0',  type: 'OUTPUT',    x: 820, y: 365, targetValue: 1, label: 'G0' },

      // Case 2: B2=0, B1=0, B0=0 → G2=0, G1=XOR(0,0)=0, G0=XOR(0,0)=0
      { id: 'c2_B2',  type: 'INPUT',     x: 180, y: 590, fixedValue: 0, label: 'B2' },
      { id: 'c2_B1',  type: 'INPUT',     x: 180, y: 740, fixedValue: 0, label: 'B1' },
      { id: 'c2_B0',  type: 'INPUT',     x: 180, y: 890, fixedValue: 0, label: 'B0' },
      { id: 'c2_g1',  type: 'GATE_SLOT', x: 500, y: 665, linkedGroup: 'gray' },
      { id: 'c2_g0',  type: 'GATE_SLOT', x: 500, y: 815, linkedGroup: 'gray' },
      { id: 'c2_G2',  type: 'OUTPUT',    x: 820, y: 590, targetValue: 0, label: 'G2' },
      { id: 'c2_G1',  type: 'OUTPUT',    x: 820, y: 665, targetValue: 0, label: 'G1' },
      { id: 'c2_G0',  type: 'OUTPUT',    x: 820, y: 815, targetValue: 0, label: 'G0' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1', sourceId: 'c1_B2', targetId: 'c1_G2', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B2', targetId: 'c1_g1', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_B1', targetId: 'c1_g1', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_g1', targetId: 'c1_G1', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_B1', targetId: 'c1_g0', targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_B0', targetId: 'c1_g0', targetInputIndex: 1 },
      { id: 'c1w7', sourceId: 'c1_g0', targetId: 'c1_G0', targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_B2', targetId: 'c2_G2', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B2', targetId: 'c2_g1', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_B1', targetId: 'c2_g1', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_g1', targetId: 'c2_G1', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_B1', targetId: 'c2_g0', targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_B0', targetId: 'c2_g0', targetInputIndex: 1 },
      { id: 'c2w7', sourceId: 'c2_g0', targetId: 'c2_G0', targetInputIndex: 0 },
    ],
  },

  // L15 — GRAY CODE TO BINARY
  // G2=1,G1=0,G0=1 → B2=G2=1, B1=XOR(G2,G1)=XOR(1,0)=1, B0=XOR(B1,G0)=XOR(1,1)=0
  {
    id: 15, name: 'GRAY TO BINARY', difficulty: 'Building Blocks',
    description: 'Gray to Binary — The reverse conversion: from Gray code back to binary. B2=G2 (directly), B1=G2 XOR G1, B0=B1 XOR G0. Note: B0 depends on the computed B1, not on G1 — this is a cascade.',
    instruction: 'Convert Gray code to binary: B2 is direct, B1 and B0 go through gates\nFind the two gates — note that B0 depends on the computed B1',
    hint: 'B2=G2 directly. B1=XOR(G2,G1). B0=XOR(B1,G0) — B0 receives B1 computed by the previous gate.',
    truthTable: {
      inputs: ['G2','G1','G0'], outputs: ['B2','B1','B0'],
      rows: [
        [[0,0,0],[0,0,0]], [[0,0,1],[0,0,1]], [[0,1,0],[0,1,1]], [[0,1,1],[0,1,0]],
        [[1,0,0],[1,1,0]], [[1,0,1],[1,1,1]], [[1,1,0],[1,0,1]], [[1,1,1],[1,0,0]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Gray to Binary — The reverse conversion from Gray code to binary. Formula: Bi = Bi+1 XOR Gi (where Bn=Gn). Unlike binary-to-Gray, this has a cascade dependency — B0 depends on the computed B1. This is an example of a critical path in circuits.',
      blockSvg: `<svg viewBox="0 0 380 180" width="460" height="220">
        <text x="12" y="47" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">G2</text><line x1="38" y1="42" x2="90" y2="42" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">G1</text><line x1="38" y1="87" x2="90" y2="87" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">G0</text><line x1="38" y1="137" x2="90" y2="137" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="90" y="20" width="190" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="185" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">GRAY→BIN</text>
        <text x="185" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#00d4ff">CONVERTER</text>
        <line x1="280" y1="47" x2="335" y2="47" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B2</text>
        <line x1="280" y1="92" x2="335" y2="92" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="97" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B1</text>
        <line x1="280" y1="137" x2="335" y2="137" stroke="#c8d8f0" stroke-width="2.5"/><text x="342" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B0</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 480 200" width="580" height="245">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">G2</text>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">G1</text>
        <text x="12" y="172" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">G0</text>
        <rect x="140" y="50" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="178" y="74" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="290" y="130" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="328" y="154" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <text x="430" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B2</text>
        <text x="430" y="74" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B1</text>
        <text x="430" y="154" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">B0</text>
        <!-- G2 → B2 direct -->
        <line x1="38" y1="38" x2="420" y2="38" stroke="#39ff14" stroke-width="1.5"/>
        <!-- G2 → XOR1 -->
        <circle cx="60" cy="38" r="3" fill="#39ff14"/>
        <polyline points="60,38 60,58 140,58" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <!-- G1 → XOR1 -->
        <polyline points="38,98 80,98 80,78 140,78" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <!-- XOR1 out → B1 + XOR2 -->
        <line x1="216" y1="68" x2="420" y2="68" stroke="#39ff14" stroke-width="1.5"/>
        <circle cx="260" cy="68" r="3" fill="#39ff14"/>
        <polyline points="260,68 260,138 290,138" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <!-- G0 → XOR2 -->
        <polyline points="38,168 100,168 100,158 290,158" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <!-- XOR2 → B0 -->
        <line x1="366" y1="148" x2="420" y2="148" stroke="#39ff14" stroke-width="1.5"/>
        <!-- cascade arrow label -->
        <text x="240" y="115" fill="#4a6080" font-size="10" font-family="monospace">B1 cascade ↓</text>
      </svg>`,
    },
    nodes: [
      // Case 1: G2=1, G1=0, G0=1 → B2=1, B1=XOR(1,0)=1, B0=XOR(1,1)=0
      { id: 'c1_G2',  type: 'INPUT',     x: 180, y: 140, fixedValue: 1, label: 'G2' },
      { id: 'c1_G1',  type: 'INPUT',     x: 180, y: 290, fixedValue: 0, label: 'G1' },
      { id: 'c1_G0',  type: 'INPUT',     x: 180, y: 440, fixedValue: 1, label: 'G0' },
      { id: 'c1_b1',  type: 'GATE_SLOT', x: 480, y: 215, linkedGroup: 'grayinv' },
      { id: 'c1_b0',  type: 'GATE_SLOT', x: 700, y: 365, linkedGroup: 'grayinv' },
      { id: 'c1_B2',  type: 'OUTPUT',    x: 900, y: 140, targetValue: 1, label: 'B2' },
      { id: 'c1_B1',  type: 'OUTPUT',    x: 900, y: 215, targetValue: 1, label: 'B1' },
      { id: 'c1_B0',  type: 'OUTPUT',    x: 900, y: 365, targetValue: 0, label: 'B0' },

      // Case 2: G2=0, G1=0, G0=0 → B2=0, B1=XOR(0,0)=0, B0=XOR(0,0)=0
      { id: 'c2_G2',  type: 'INPUT',     x: 180, y: 590, fixedValue: 0, label: 'G2' },
      { id: 'c2_G1',  type: 'INPUT',     x: 180, y: 740, fixedValue: 0, label: 'G1' },
      { id: 'c2_G0',  type: 'INPUT',     x: 180, y: 890, fixedValue: 0, label: 'G0' },
      { id: 'c2_b1',  type: 'GATE_SLOT', x: 480, y: 665, linkedGroup: 'grayinv' },
      { id: 'c2_b0',  type: 'GATE_SLOT', x: 700, y: 815, linkedGroup: 'grayinv' },
      { id: 'c2_B2',  type: 'OUTPUT',    x: 900, y: 590, targetValue: 0, label: 'B2' },
      { id: 'c2_B1',  type: 'OUTPUT',    x: 900, y: 665, targetValue: 0, label: 'B1' },
      { id: 'c2_B0',  type: 'OUTPUT',    x: 900, y: 815, targetValue: 0, label: 'B0' },
    ],
    wires: [
      // Case 1: G2→B2 direct, G2+G1→b1→B1, b1+G0→b0→B0
      { id: 'c1w1', sourceId: 'c1_G2', targetId: 'c1_B2', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_G2', targetId: 'c1_b1', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_G1', targetId: 'c1_b1', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_b1', targetId: 'c1_B1', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_b1', targetId: 'c1_b0', targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_G0', targetId: 'c1_b0', targetInputIndex: 1 },
      { id: 'c1w7', sourceId: 'c1_b0', targetId: 'c1_B0', targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_G2', targetId: 'c2_B2', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_G2', targetId: 'c2_b1', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_G1', targetId: 'c2_b1', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_b1', targetId: 'c2_B1', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_b1', targetId: 'c2_b0', targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_G0', targetId: 'c2_b0', targetInputIndex: 1 },
      { id: 'c2w7', sourceId: 'c2_b0', targetId: 'c2_B0', targetInputIndex: 0 },
    ],
  },

  // L16 — 2:1 MUX (4 cases, vertical bottom-to-top)
  // Solution: G_ns=NOT, G_and0=AND, G_and1=AND, G_or=OR
  // Structure: S→ns; D0,ns→and0; D1,S→and1; and0,and1→or→Y
  // Case 1: D0=1,D1=0,S=0→Y=1  Case 2: D0=0,D1=1,S=1→Y=1  Case 3: D0=0,D1=0,S=0→Y=0  Case 4: D0=1,D1=1,S=1→Y=1
  {
    id: 16, name: '2:1 MUX', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: '2:1 MUX — A multiplexer is a data selector: the select line S determines which input (D0 or D1) is passed to output Y. Multiplexers are key components for data routing in processors and memories.',
    instruction: '2:1 MUX: S selects between D0 and D1\nFind the four gates that produce the correct Y for all four cases',
    hint: 'Standard MUX: NOT the select, AND with each data path, then OR the results. Four gate slots.',
    truthTable: {
      inputs:  ['D0', 'D1', 'S'],
      outputs: ['Y'],
      rows: [
        [[0, 0, 0], [0]],
        [[0, 1, 0], [0]],
        [[1, 0, 0], [1]],
        [[1, 1, 0], [1]],
        [[0, 0, 1], [0]],
        [[0, 1, 1], [1]],
        [[1, 0, 1], [0]],
        [[1, 1, 1], [1]],
      ],
    },
    solution: {
      gatesUsed: ['NOT', 'AND', 'AND', 'OR'],
      explanation: '2:1 MUX — A multiplexer is a data selector: the select line S determines which input (D0 or D1) is passed to output Y. Multiplexers are key components for data routing in processors and memories.',
      blockSvg: `<svg viewBox="0 0 400 190" width="480" height="230"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">D0</text><line x1="38" y1="50" x2="95" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="100" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">D1</text><line x1="38" y1="95" x2="95" y2="95" stroke="#39ff14" stroke-width="2.5"/><text x="175" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S</text><line x1="175" y1="22" x2="175" y2="45" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="25" width="195" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="192" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="24" font-weight="bold" fill="#00d4ff">MUX</text><line x1="290" y1="90" x2="350" y2="90" stroke="#c8d8f0" stroke-width="2.5"/><text x="358" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 560 220" width="680" height="270"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">D0</text><text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S</text><text x="12" y="192" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">D1</text><rect x="140" y="100" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="180" y="124" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="280" y="22" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="320" y="46" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="280" y="152" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="320" y="176" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="420" y="90" width="70" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="455" y="114" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">OR</text><text x="525" y="113" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text><line x1="40" y1="38" x2="280" y2="30" stroke="#39ff14" stroke-width="2"/><polyline points="40,118 100,118 140,118" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="220" y1="118" x2="280" y2="50" stroke="#39ff14" stroke-width="2"/><polyline points="100,118 100,162 280,162" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="40" y1="188" x2="280" y2="180" stroke="#39ff14" stroke-width="2"/><line x1="360" y1="40" x2="420" y2="100" stroke="#39ff14" stroke-width="2"/><line x1="360" y1="170" x2="420" y2="118" stroke="#39ff14" stroke-width="2"/><line x1="490" y1="108" x2="518" y2="108" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: D0=1, D1=0, S=0 → Y=1   (cx = -420)
      { id: 'c1_D0',   type: 'INPUT',     x: -480, y: 350, fixedValue: 1, label: 'D0' },
      { id: 'c1_S',    type: 'INPUT',     x: -420, y: 390, fixedValue: 0, label: 'S' },
      { id: 'c1_D1',   type: 'INPUT',     x: -360, y: 350, fixedValue: 0, label: 'D1' },
      { id: 'c1_ns',   type: 'GATE_SLOT', x: -420, y: 200, linkedGroup: 'ns' },
      { id: 'c1_and0', type: 'GATE_SLOT', x: -470, y: 40,  linkedGroup: 'and0' },
      { id: 'c1_and1', type: 'GATE_SLOT', x: -370, y: 40,  linkedGroup: 'and1' },
      { id: 'c1_or',   type: 'GATE_SLOT', x: -420, y: -120, linkedGroup: 'or1' },
      { id: 'c1_Y',    type: 'OUTPUT',    x: -420, y: -280, targetValue: 1, label: 'Y' },
      // Case 2: D0=0, D1=1, S=1 → Y=1   (cx = -140)
      { id: 'c2_D0',   type: 'INPUT',     x: -200, y: 350, fixedValue: 0, label: 'D0' },
      { id: 'c2_S',    type: 'INPUT',     x: -140, y: 390, fixedValue: 1, label: 'S' },
      { id: 'c2_D1',   type: 'INPUT',     x: -80,  y: 350, fixedValue: 1, label: 'D1' },
      { id: 'c2_ns',   type: 'GATE_SLOT', x: -140, y: 200, linkedGroup: 'ns' },
      { id: 'c2_and0', type: 'GATE_SLOT', x: -190, y: 40,  linkedGroup: 'and0' },
      { id: 'c2_and1', type: 'GATE_SLOT', x: -90,  y: 40,  linkedGroup: 'and1' },
      { id: 'c2_or',   type: 'GATE_SLOT', x: -140, y: -120, linkedGroup: 'or1' },
      { id: 'c2_Y',    type: 'OUTPUT',    x: -140, y: -280, targetValue: 1, label: 'Y' },
      // Case 3: D0=0, D1=0, S=0 → Y=0   (cx = 140)
      { id: 'c3_D0',   type: 'INPUT',     x: 80,   y: 350, fixedValue: 0, label: 'D0' },
      { id: 'c3_S',    type: 'INPUT',     x: 140,  y: 390, fixedValue: 0, label: 'S' },
      { id: 'c3_D1',   type: 'INPUT',     x: 200,  y: 350, fixedValue: 0, label: 'D1' },
      { id: 'c3_ns',   type: 'GATE_SLOT', x: 140,  y: 200, linkedGroup: 'ns' },
      { id: 'c3_and0', type: 'GATE_SLOT', x: 90,   y: 40,  linkedGroup: 'and0' },
      { id: 'c3_and1', type: 'GATE_SLOT', x: 190,  y: 40,  linkedGroup: 'and1' },
      { id: 'c3_or',   type: 'GATE_SLOT', x: 140,  y: -120, linkedGroup: 'or1' },
      { id: 'c3_Y',    type: 'OUTPUT',    x: 140,  y: -280, targetValue: 0, label: 'Y' },
      // Case 4: D0=1, D1=1, S=1 → Y=1   (cx = 420)
      { id: 'c4_D0',   type: 'INPUT',     x: 360,  y: 350, fixedValue: 1, label: 'D0' },
      { id: 'c4_S',    type: 'INPUT',     x: 420,  y: 390, fixedValue: 1, label: 'S' },
      { id: 'c4_D1',   type: 'INPUT',     x: 480,  y: 350, fixedValue: 1, label: 'D1' },
      { id: 'c4_ns',   type: 'GATE_SLOT', x: 420,  y: 200, linkedGroup: 'ns' },
      { id: 'c4_and0', type: 'GATE_SLOT', x: 370,  y: 40,  linkedGroup: 'and0' },
      { id: 'c4_and1', type: 'GATE_SLOT', x: 470,  y: 40,  linkedGroup: 'and1' },
      { id: 'c4_or',   type: 'GATE_SLOT', x: 420,  y: -120, linkedGroup: 'or1' },
      { id: 'c4_Y',    type: 'OUTPUT',    x: 420,  y: -280, targetValue: 1, label: 'Y' },
    ],
    wires: [
      // Case 1: S→ns[0], D0→and0[0], ns→and0[1], D1→and1[0], S→and1[1], and0→or[0], and1→or[1], or→Y
      { id: 'c1w1', sourceId: 'c1_S',    targetId: 'c1_ns',   targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_D0',   targetId: 'c1_and0', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_ns',   targetId: 'c1_and0', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_D1',   targetId: 'c1_and1', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_S',    targetId: 'c1_and1', targetInputIndex: 1 },
      { id: 'c1w6', sourceId: 'c1_and0', targetId: 'c1_or',   targetInputIndex: 0 },
      { id: 'c1w7', sourceId: 'c1_and1', targetId: 'c1_or',   targetInputIndex: 1 },
      { id: 'c1w8', sourceId: 'c1_or',   targetId: 'c1_Y',    targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_S',    targetId: 'c2_ns',   targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_D0',   targetId: 'c2_and0', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_ns',   targetId: 'c2_and0', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_D1',   targetId: 'c2_and1', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_S',    targetId: 'c2_and1', targetInputIndex: 1 },
      { id: 'c2w6', sourceId: 'c2_and0', targetId: 'c2_or',   targetInputIndex: 0 },
      { id: 'c2w7', sourceId: 'c2_and1', targetId: 'c2_or',   targetInputIndex: 1 },
      { id: 'c2w8', sourceId: 'c2_or',   targetId: 'c2_Y',    targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_S',    targetId: 'c3_ns',   targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_D0',   targetId: 'c3_and0', targetInputIndex: 0 },
      { id: 'c3w3', sourceId: 'c3_ns',   targetId: 'c3_and0', targetInputIndex: 1 },
      { id: 'c3w4', sourceId: 'c3_D1',   targetId: 'c3_and1', targetInputIndex: 0 },
      { id: 'c3w5', sourceId: 'c3_S',    targetId: 'c3_and1', targetInputIndex: 1 },
      { id: 'c3w6', sourceId: 'c3_and0', targetId: 'c3_or',   targetInputIndex: 0 },
      { id: 'c3w7', sourceId: 'c3_and1', targetId: 'c3_or',   targetInputIndex: 1 },
      { id: 'c3w8', sourceId: 'c3_or',   targetId: 'c3_Y',    targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_S',    targetId: 'c4_ns',   targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_D0',   targetId: 'c4_and0', targetInputIndex: 0 },
      { id: 'c4w3', sourceId: 'c4_ns',   targetId: 'c4_and0', targetInputIndex: 1 },
      { id: 'c4w4', sourceId: 'c4_D1',   targetId: 'c4_and1', targetInputIndex: 0 },
      { id: 'c4w5', sourceId: 'c4_S',    targetId: 'c4_and1', targetInputIndex: 1 },
      { id: 'c4w6', sourceId: 'c4_and0', targetId: 'c4_or',   targetInputIndex: 0 },
      { id: 'c4w7', sourceId: 'c4_and1', targetId: 'c4_or',   targetInputIndex: 1 },
      { id: 'c4w8', sourceId: 'c4_or',   targetId: 'c4_Y',    targetInputIndex: 0 },
    ],
  },

  // L17 — 1:2 DEMUX (4 cases, vertical bottom-to-top)
  // Solution: G_ns=NOT, G_y0=AND, G_y1=AND
  // Structure: S→ns; D,ns→y0→Y0; D,S→y1→Y1
  // Case 1: D=1,S=0→Y0=1,Y1=0  Case 2: D=1,S=1→Y0=0,Y1=1  Case 3: D=0,S=0→Y0=0,Y1=0  Case 4: D=0,S=1→Y0=0,Y1=0
  {
    id: 17, name: '1:2 DEMUX', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: '1:2 DEMUX — A demultiplexer is the opposite of a multiplexer: it routes a single input D to one of two outputs (Y0 or Y1) based on the select line S. Used in address decoding and signal routing in memories.',
    instruction: '1:2 DEMUX: routes D to Y0 or Y1 based on S\nFind the three gates that produce the correct output for all four cases',
    hint: 'Invert S, then AND D with !S for Y0, AND D with S for Y1. Three gate slots.',
    truthTable: { inputs: ['D','S'], outputs: ['Y0','Y1'], rows: [[[0,0],[0,0]],[[0,1],[0,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'AND', 'AND'],
      explanation: '1:2 DEMUX — A demultiplexer is the opposite of a multiplexer: it routes a single input D to one of two outputs (Y0 or Y1) based on the select line S. Used in address decoding and signal routing in memories.',
      blockSvg: `<svg viewBox="0 0 420 180" width="500" height="215"><text x="12" y="70" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text><line x1="28" y1="65" x2="95" y2="65" stroke="#39ff14" stroke-width="2.5"/><text x="180" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text><line x1="180" y1="22" x2="180" y2="40" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="25" width="195" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="192" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="22" font-weight="bold" fill="#00d4ff">DEMUX</text><line x1="290" y1="60" x2="355" y2="60" stroke="#c8d8f0" stroke-width="2.5"/><text x="362" y="65" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">Y0</text><line x1="290" y1="120" x2="355" y2="120" stroke="#c8d8f0" stroke-width="2.5"/><text x="362" y="125" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">Y1</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 480 200" width="580" height="245"><text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text><text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text><rect x="130" y="130" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="170" y="154" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="280" y="32" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="320" y="56" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="280" y="122" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="320" y="146" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><text x="420" y="55" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">Y0</text><text x="420" y="145" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">Y1</text><polyline points="30,58 70,58 70,40 280,40" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="70,58 70,130 280,130" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="30,148 130,148" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="210" y1="148" x2="280" y2="60" stroke="#39ff14" stroke-width="2"/><polyline points="100,148 100,150 280,150" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="360" y1="50" x2="410" y2="50" stroke="#39ff14" stroke-width="2"/><line x1="360" y1="140" x2="410" y2="140" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: D=1, S=0 → Y0=1, Y1=0   (cx = -420)
      { id: 'c1_D',   type: 'INPUT',     x: -460, y: 280, fixedValue: 1, label: 'D' },
      { id: 'c1_S',   type: 'INPUT',     x: -380, y: 280, fixedValue: 0, label: 'S' },
      { id: 'c1_ns',  type: 'GATE_SLOT', x: -380, y: 110, linkedGroup: 'ns' },
      { id: 'c1_y0',  type: 'GATE_SLOT', x: -460, y: -50, linkedGroup: 'y0' },
      { id: 'c1_y1',  type: 'GATE_SLOT', x: -380, y: -50, linkedGroup: 'y1' },
      { id: 'c1_Y0',  type: 'OUTPUT',    x: -460, y: -220, targetValue: 1, label: 'Y0' },
      { id: 'c1_Y1',  type: 'OUTPUT',    x: -380, y: -220, targetValue: 0, label: 'Y1' },
      // Case 2: D=1, S=1 → Y0=0, Y1=1   (cx = -140)
      { id: 'c2_D',   type: 'INPUT',     x: -180, y: 280, fixedValue: 1, label: 'D' },
      { id: 'c2_S',   type: 'INPUT',     x: -100, y: 280, fixedValue: 1, label: 'S' },
      { id: 'c2_ns',  type: 'GATE_SLOT', x: -100, y: 110, linkedGroup: 'ns' },
      { id: 'c2_y0',  type: 'GATE_SLOT', x: -180, y: -50, linkedGroup: 'y0' },
      { id: 'c2_y1',  type: 'GATE_SLOT', x: -100, y: -50, linkedGroup: 'y1' },
      { id: 'c2_Y0',  type: 'OUTPUT',    x: -180, y: -220, targetValue: 0, label: 'Y0' },
      { id: 'c2_Y1',  type: 'OUTPUT',    x: -100, y: -220, targetValue: 1, label: 'Y1' },
      // Case 3: D=0, S=0 → Y0=0, Y1=0   (cx = 140)
      { id: 'c3_D',   type: 'INPUT',     x: 100,  y: 280, fixedValue: 0, label: 'D' },
      { id: 'c3_S',   type: 'INPUT',     x: 180,  y: 280, fixedValue: 0, label: 'S' },
      { id: 'c3_ns',  type: 'GATE_SLOT', x: 180,  y: 110, linkedGroup: 'ns' },
      { id: 'c3_y0',  type: 'GATE_SLOT', x: 100,  y: -50, linkedGroup: 'y0' },
      { id: 'c3_y1',  type: 'GATE_SLOT', x: 180,  y: -50, linkedGroup: 'y1' },
      { id: 'c3_Y0',  type: 'OUTPUT',    x: 100,  y: -220, targetValue: 0, label: 'Y0' },
      { id: 'c3_Y1',  type: 'OUTPUT',    x: 180,  y: -220, targetValue: 0, label: 'Y1' },
      // Case 4: D=0, S=1 → Y0=0, Y1=0   (cx = 420)
      { id: 'c4_D',   type: 'INPUT',     x: 380,  y: 280, fixedValue: 0, label: 'D' },
      { id: 'c4_S',   type: 'INPUT',     x: 460,  y: 280, fixedValue: 1, label: 'S' },
      { id: 'c4_ns',  type: 'GATE_SLOT', x: 460,  y: 110, linkedGroup: 'ns' },
      { id: 'c4_y0',  type: 'GATE_SLOT', x: 380,  y: -50, linkedGroup: 'y0' },
      { id: 'c4_y1',  type: 'GATE_SLOT', x: 460,  y: -50, linkedGroup: 'y1' },
      { id: 'c4_Y0',  type: 'OUTPUT',    x: 380,  y: -220, targetValue: 0, label: 'Y0' },
      { id: 'c4_Y1',  type: 'OUTPUT',    x: 460,  y: -220, targetValue: 0, label: 'Y1' },
    ],
    wires: [
      // Case 1: S→ns[0], D→y0[0], ns→y0[1], D→y1[0], S→y1[1], y0→Y0, y1→Y1
      { id: 'c1w1', sourceId: 'c1_S',  targetId: 'c1_ns', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_D',  targetId: 'c1_y0', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_ns', targetId: 'c1_y0', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_D',  targetId: 'c1_y1', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_S',  targetId: 'c1_y1', targetInputIndex: 1 },
      { id: 'c1w6', sourceId: 'c1_y0', targetId: 'c1_Y0', targetInputIndex: 0 },
      { id: 'c1w7', sourceId: 'c1_y1', targetId: 'c1_Y1', targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_S',  targetId: 'c2_ns', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_D',  targetId: 'c2_y0', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_ns', targetId: 'c2_y0', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_D',  targetId: 'c2_y1', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_S',  targetId: 'c2_y1', targetInputIndex: 1 },
      { id: 'c2w6', sourceId: 'c2_y0', targetId: 'c2_Y0', targetInputIndex: 0 },
      { id: 'c2w7', sourceId: 'c2_y1', targetId: 'c2_Y1', targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_S',  targetId: 'c3_ns', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_D',  targetId: 'c3_y0', targetInputIndex: 0 },
      { id: 'c3w3', sourceId: 'c3_ns', targetId: 'c3_y0', targetInputIndex: 1 },
      { id: 'c3w4', sourceId: 'c3_D',  targetId: 'c3_y1', targetInputIndex: 0 },
      { id: 'c3w5', sourceId: 'c3_S',  targetId: 'c3_y1', targetInputIndex: 1 },
      { id: 'c3w6', sourceId: 'c3_y0', targetId: 'c3_Y0', targetInputIndex: 0 },
      { id: 'c3w7', sourceId: 'c3_y1', targetId: 'c3_Y1', targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_S',  targetId: 'c4_ns', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_D',  targetId: 'c4_y0', targetInputIndex: 0 },
      { id: 'c4w3', sourceId: 'c4_ns', targetId: 'c4_y0', targetInputIndex: 1 },
      { id: 'c4w4', sourceId: 'c4_D',  targetId: 'c4_y1', targetInputIndex: 0 },
      { id: 'c4w5', sourceId: 'c4_S',  targetId: 'c4_y1', targetInputIndex: 1 },
      { id: 'c4w6', sourceId: 'c4_y0', targetId: 'c4_Y0', targetInputIndex: 0 },
      { id: 'c4w7', sourceId: 'c4_y1', targetId: 'c4_Y1', targetInputIndex: 0 },
    ],
  },

  // L18 — CARRY GENERATE / PROPAGATE (2 cases, vertical bottom-to-top)
  // Unique solution: G=AND, P=XOR (for both bit positions)
  // Case 1: A1=1,B1=1,A0=1,B0=0 → G1=1,P1=0,G0=0,P0=1
  // Case 2: A1=0,B1=1,A0=1,B0=1 → G1=0,P1=1,G0=1,P0=0
  {
    id: 18, name: 'CARRY GEN / PROP', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: 'Carry Generate/Propagate — Carry Lookahead fundamentals: G=A AND B (carry generated) and P=A XOR B (carry propagated). Computing G and P per bit enables fast carry prediction instead of waiting for the ripple chain — this is what makes modern processors fast.',
    instruction: 'Carry generate/propagate: G=AND, P=XOR for each bit\nFind the four gates that produce the correct output for both cases',
    hint: 'G (Generate) = AND. P (Propagate) = XOR. Same gate type for both bit positions.',
    truthTable: {
      inputs: ['A','B'], outputs: ['G','P'],
      rows: [[[0,0],[0,0]], [[0,1],[0,1]], [[1,0],[0,1]], [[1,1],[1,0]]],
    },
    solution: {
      gatesUsed: ['AND', 'XOR', 'AND', 'XOR'],
      explanation: 'Carry Generate/Propagate — Carry Lookahead fundamentals: G=A AND B (carry generated) and P=A XOR B (carry propagated). Computing G and P per bit enables fast carry prediction instead of waiting for the ripple chain — this is what makes modern processors fast.',
      blockSvg: `<svg viewBox="0 0 460 200" width="540" height="235"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A1</text><line x1="38" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B1</text><line x1="38" y1="77" x2="90" y2="77" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A0</text><line x1="38" y1="117" x2="90" y2="117" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="157" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B0</text><line x1="38" y1="152" x2="90" y2="152" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="20" width="240" height="162" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="210" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">CARRY GEN</text><text x="210" y="112" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">/ PROP</text><line x1="330" y1="45" x2="390" y2="45" stroke="#c8d8f0" stroke-width="2.5"/><text x="398" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G1</text><line x1="330" y1="80" x2="390" y2="80" stroke="#c8d8f0" stroke-width="2.5"/><text x="398" y="85" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">P1</text><line x1="330" y1="120" x2="390" y2="120" stroke="#c8d8f0" stroke-width="2.5"/><text x="398" y="125" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G0</text><line x1="330" y1="155" x2="390" y2="155" stroke="#c8d8f0" stroke-width="2.5"/><text x="398" y="160" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">P0</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 520 260" width="640" height="320"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A1</text><text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B1</text><text x="12" y="172" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A0</text><text x="12" y="212" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B0</text><rect x="170" y="22" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="210" y="46" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="170" y="76" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="210" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="170" y="152" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="210" y="176" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="170" y="206" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="210" y="230" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text><text x="420" y="46" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G1</text><text x="420" y="100" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">P1</text><text x="420" y="176" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">G0</text><text x="420" y="230" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">P0</text><polyline points="38,38 80,38 80,30 170,30" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="80,38 80,84 170,84" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="38,78 100,78 100,50 170,50" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="100,78 100,104 170,104" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="38,168 80,168 80,160 170,160" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="80,168 80,214 170,214" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="38,208 100,208 100,180 170,180" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="100,208 100,234 170,234" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="250" y1="40" x2="410" y2="40" stroke="#39ff14" stroke-width="2"/><line x1="250" y1="94" x2="410" y2="94" stroke="#39ff14" stroke-width="2"/><line x1="250" y1="170" x2="410" y2="170" stroke="#39ff14" stroke-width="2"/><line x1="250" y1="224" x2="410" y2="224" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A1=1,B1=1,A0=1,B0=0 → G1=1,P1=0,G0=0,P0=1   (cx = -500)
      { id: 'c1_A1',  type: 'INPUT',     x: -680, y: 320, fixedValue: 1, label: 'A1' },
      { id: 'c1_B1',  type: 'INPUT',     x: -560, y: 380, fixedValue: 1, label: 'B1' },
      { id: 'c1_A0',  type: 'INPUT',     x: -440, y: 320, fixedValue: 1, label: 'A0' },
      { id: 'c1_B0',  type: 'INPUT',     x: -320, y: 380, fixedValue: 0, label: 'B0' },
      { id: 'c1_g1',  type: 'GATE_SLOT', x: -680, y: 100, linkedGroup: 'gen' },
      { id: 'c1_p1',  type: 'GATE_SLOT', x: -540, y: 100, linkedGroup: 'prop' },
      { id: 'c1_g0',  type: 'GATE_SLOT', x: -460, y: -100, linkedGroup: 'gen' },
      { id: 'c1_p0',  type: 'GATE_SLOT', x: -320, y: -100, linkedGroup: 'prop' },
      { id: 'c1_G1',  type: 'OUTPUT',    x: -680, y: -300, targetValue: 1, label: 'G1' },
      { id: 'c1_P1',  type: 'OUTPUT',    x: -540, y: -300, targetValue: 0, label: 'P1' },
      { id: 'c1_G0',  type: 'OUTPUT',    x: -460, y: -300, targetValue: 0, label: 'G0' },
      { id: 'c1_P0',  type: 'OUTPUT',    x: -320, y: -300, targetValue: 1, label: 'P0' },

      // Case 2: A1=0,B1=1,A0=1,B0=1 → G1=0,P1=1,G0=1,P0=0   (cx = 500)
      { id: 'c2_A1',  type: 'INPUT',     x: 320, y: 320, fixedValue: 0, label: 'A1' },
      { id: 'c2_B1',  type: 'INPUT',     x: 440, y: 380, fixedValue: 1, label: 'B1' },
      { id: 'c2_A0',  type: 'INPUT',     x: 560, y: 320, fixedValue: 1, label: 'A0' },
      { id: 'c2_B0',  type: 'INPUT',     x: 680, y: 380, fixedValue: 1, label: 'B0' },
      { id: 'c2_g1',  type: 'GATE_SLOT', x: 320, y: 100,  linkedGroup: 'gen' },
      { id: 'c2_p1',  type: 'GATE_SLOT', x: 460, y: 100,  linkedGroup: 'prop' },
      { id: 'c2_g0',  type: 'GATE_SLOT', x: 540, y: -100, linkedGroup: 'gen' },
      { id: 'c2_p0',  type: 'GATE_SLOT', x: 680, y: -100, linkedGroup: 'prop' },
      { id: 'c2_G1',  type: 'OUTPUT',    x: 320, y: -300, targetValue: 0, label: 'G1' },
      { id: 'c2_P1',  type: 'OUTPUT',    x: 460, y: -300, targetValue: 1, label: 'P1' },
      { id: 'c2_G0',  type: 'OUTPUT',    x: 540, y: -300, targetValue: 1, label: 'G0' },
      { id: 'c2_P0',  type: 'OUTPUT',    x: 680, y: -300, targetValue: 0, label: 'P0' },
    ],
    wires: [
      // Case 1: A1,B1→g1,p1; A0,B0→g0,p0
      { id: 'c1w1',  sourceId: 'c1_A1', targetId: 'c1_g1',  targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_B1', targetId: 'c1_g1',  targetInputIndex: 1 },
      { id: 'c1w3',  sourceId: 'c1_A1', targetId: 'c1_p1',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_B1', targetId: 'c1_p1',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_A0', targetId: 'c1_g0',  targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_B0', targetId: 'c1_g0',  targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_A0', targetId: 'c1_p0',  targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_B0', targetId: 'c1_p0',  targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_g1', targetId: 'c1_G1',  targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_p1', targetId: 'c1_P1',  targetInputIndex: 0 },
      { id: 'c1w11', sourceId: 'c1_g0', targetId: 'c1_G0',  targetInputIndex: 0 },
      { id: 'c1w12', sourceId: 'c1_p0', targetId: 'c1_P0',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_A1', targetId: 'c2_g1',  targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_B1', targetId: 'c2_g1',  targetInputIndex: 1 },
      { id: 'c2w3',  sourceId: 'c2_A1', targetId: 'c2_p1',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_B1', targetId: 'c2_p1',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_A0', targetId: 'c2_g0',  targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_B0', targetId: 'c2_g0',  targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_A0', targetId: 'c2_p0',  targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_B0', targetId: 'c2_p0',  targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_g1', targetId: 'c2_G1',  targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_p1', targetId: 'c2_P1',  targetInputIndex: 0 },
      { id: 'c2w11', sourceId: 'c2_g0', targetId: 'c2_G0',  targetInputIndex: 0 },
      { id: 'c2w12', sourceId: 'c2_p0', targetId: 'c2_P0',  targetInputIndex: 0 },
    ],
  },

  // L19 — 4-BIT EVEN PARITY (4 cases, vertical bottom-to-top)
  // Unique solution: XOR, XOR, XOR
  // Case 1: A=1,B=1,C=0,D=1 → P=1  Case 2: A=0,B=0,C=0,D=0 → P=0
  // Case 3: A=1,B=0,C=1,D=0 → P=0  Case 4: A=1,B=0,C=0,D=1 → P=0
  {
    id: 19, name: '4-BIT EVEN PARITY', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: '4-Bit Even Parity — A chain of 3 XOR gates counts whether the number of active bits is odd. Used for error detection in communication, RAM, and data buses.',
    instruction: '4-bit parity: P is active when an odd number of inputs are active\nFind the three gates that produce the correct output for all four cases',
    hint: 'Chain three identical gates: gate(A,B) → gate(result,C) → gate(result,D) → P.',
    truthTable: {
      inputs: ['A','B','C','D'], outputs: ['P'],
      rows: [
        [[0,0,0,0],[0]], [[0,0,0,1],[1]], [[0,0,1,0],[1]], [[0,0,1,1],[0]],
        [[0,1,0,0],[1]], [[0,1,0,1],[0]], [[0,1,1,0],[0]], [[0,1,1,1],[1]],
        [[1,0,0,0],[1]], [[1,0,0,1],[0]], [[1,0,1,0],[0]], [[1,0,1,1],[1]],
        [[1,1,0,0],[0]], [[1,1,0,1],[1]], [[1,1,1,0],[1]], [[1,1,1,1],[0]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'XOR', 'XOR'],
      explanation: '4-Bit Even Parity — A chain of 3 XOR gates counts whether the number of active bits is odd. Used for error detection in communication, RAM, and data buses.',
      blockSvg: `<svg viewBox="0 0 460 200" width="540" height="235"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="37" x2="90" y2="37" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="67" x2="90" y2="67" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="28" y1="107" x2="90" y2="107" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text><line x1="28" y1="147" x2="90" y2="147" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="15" width="240" height="160" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="210" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">EVEN PARITY</text><text x="210" y="112" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#4a6080">4-bit</text><line x1="330" y1="95" x2="395" y2="95" stroke="#c8d8f0" stroke-width="2.5"/><text x="403" y="100" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 560 200" width="680" height="245"><text x="18" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="18" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="18" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><text x="18" y="182" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text><rect x="120" y="42" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="160" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="270" y="72" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="310" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="420" y="102" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="460" y="128" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">XOR</text><text x="530" y="127" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">P</text><line x1="36" y1="38" x2="120" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="98" x2="120" y2="72" stroke="#39ff14" stroke-width="2"/><line x1="200" y1="62" x2="270" y2="82" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="138" x2="270" y2="102" stroke="#39ff14" stroke-width="2"/><line x1="350" y1="92" x2="420" y2="112" stroke="#39ff14" stroke-width="2"/><line x1="36" y1="178" x2="420" y2="132" stroke="#39ff14" stroke-width="2"/><line x1="500" y1="122" x2="522" y2="122" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1,B=1,C=0,D=1 → P=1   (cx = -435)
      { id: 'c1_A',  type: 'INPUT',     x: -490, y: 280, fixedValue: 1, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -435, y: 320, fixedValue: 1, label: 'B' },
      { id: 'c1_C',  type: 'INPUT',     x: -380, y: 280, fixedValue: 0, label: 'C' },
      { id: 'c1_D',  type: 'INPUT',     x: -380, y: 160, fixedValue: 1, label: 'D' },
      { id: 'c1_x1', type: 'GATE_SLOT', x: -465, y: 100, linkedGroup: 'x1' },
      { id: 'c1_x2', type: 'GATE_SLOT', x: -435, y: -30, linkedGroup: 'x2' },
      { id: 'c1_x3', type: 'GATE_SLOT', x: -435, y: -160, linkedGroup: 'x3' },
      { id: 'c1_P',  type: 'OUTPUT',    x: -435, y: -300, targetValue: 1, label: 'P' },
      // Case 2: A=0,B=0,C=0,D=0 → P=0   (cx = -145)
      { id: 'c2_A',  type: 'INPUT',     x: -200, y: 280, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -145, y: 320, fixedValue: 0, label: 'B' },
      { id: 'c2_C',  type: 'INPUT',     x: -90,  y: 280, fixedValue: 0, label: 'C' },
      { id: 'c2_D',  type: 'INPUT',     x: -90,  y: 160, fixedValue: 0, label: 'D' },
      { id: 'c2_x1', type: 'GATE_SLOT', x: -175, y: 100, linkedGroup: 'x1' },
      { id: 'c2_x2', type: 'GATE_SLOT', x: -145, y: -30, linkedGroup: 'x2' },
      { id: 'c2_x3', type: 'GATE_SLOT', x: -145, y: -160, linkedGroup: 'x3' },
      { id: 'c2_P',  type: 'OUTPUT',    x: -145, y: -300, targetValue: 0, label: 'P' },
      // Case 3: A=1,B=0,C=1,D=0 → P=0   (cx = 145)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 280, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 145,  y: 320, fixedValue: 0, label: 'B' },
      { id: 'c3_C',  type: 'INPUT',     x: 200,  y: 280, fixedValue: 1, label: 'C' },
      { id: 'c3_D',  type: 'INPUT',     x: 200,  y: 160, fixedValue: 0, label: 'D' },
      { id: 'c3_x1', type: 'GATE_SLOT', x: 115,  y: 100, linkedGroup: 'x1' },
      { id: 'c3_x2', type: 'GATE_SLOT', x: 145,  y: -30, linkedGroup: 'x2' },
      { id: 'c3_x3', type: 'GATE_SLOT', x: 145,  y: -160, linkedGroup: 'x3' },
      { id: 'c3_P',  type: 'OUTPUT',    x: 145,  y: -300, targetValue: 0, label: 'P' },
      // Case 4: A=1,B=0,C=0,D=1 → P=0   (cx = 435)
      { id: 'c4_A',  type: 'INPUT',     x: 380,  y: 280, fixedValue: 1, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 435,  y: 320, fixedValue: 0, label: 'B' },
      { id: 'c4_C',  type: 'INPUT',     x: 490,  y: 280, fixedValue: 0, label: 'C' },
      { id: 'c4_D',  type: 'INPUT',     x: 490,  y: 160, fixedValue: 1, label: 'D' },
      { id: 'c4_x1', type: 'GATE_SLOT', x: 405,  y: 100, linkedGroup: 'x1' },
      { id: 'c4_x2', type: 'GATE_SLOT', x: 435,  y: -30, linkedGroup: 'x2' },
      { id: 'c4_x3', type: 'GATE_SLOT', x: 435,  y: -160, linkedGroup: 'x3' },
      { id: 'c4_P',  type: 'OUTPUT',    x: 435,  y: -300, targetValue: 0, label: 'P' },
    ],
    wires: [
      // Case 1: A,B→x1; x1,C→x2; x2,D→x3; x3→P
      { id: 'c1w1', sourceId: 'c1_A',  targetId: 'c1_x1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B',  targetId: 'c1_x1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_x1', targetId: 'c1_x2', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_C',  targetId: 'c1_x2', targetInputIndex: 1 },
      { id: 'c1w5', sourceId: 'c1_x2', targetId: 'c1_x3', targetInputIndex: 0 },
      { id: 'c1w6', sourceId: 'c1_D',  targetId: 'c1_x3', targetInputIndex: 1 },
      { id: 'c1w7', sourceId: 'c1_x3', targetId: 'c1_P',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',  targetId: 'c2_x1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B',  targetId: 'c2_x1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_x1', targetId: 'c2_x2', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_C',  targetId: 'c2_x2', targetInputIndex: 1 },
      { id: 'c2w5', sourceId: 'c2_x2', targetId: 'c2_x3', targetInputIndex: 0 },
      { id: 'c2w6', sourceId: 'c2_D',  targetId: 'c2_x3', targetInputIndex: 1 },
      { id: 'c2w7', sourceId: 'c2_x3', targetId: 'c2_P',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',  targetId: 'c3_x1', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_B',  targetId: 'c3_x1', targetInputIndex: 1 },
      { id: 'c3w3', sourceId: 'c3_x1', targetId: 'c3_x2', targetInputIndex: 0 },
      { id: 'c3w4', sourceId: 'c3_C',  targetId: 'c3_x2', targetInputIndex: 1 },
      { id: 'c3w5', sourceId: 'c3_x2', targetId: 'c3_x3', targetInputIndex: 0 },
      { id: 'c3w6', sourceId: 'c3_D',  targetId: 'c3_x3', targetInputIndex: 1 },
      { id: 'c3w7', sourceId: 'c3_x3', targetId: 'c3_P',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',  targetId: 'c4_x1', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_B',  targetId: 'c4_x1', targetInputIndex: 1 },
      { id: 'c4w3', sourceId: 'c4_x1', targetId: 'c4_x2', targetInputIndex: 0 },
      { id: 'c4w4', sourceId: 'c4_C',  targetId: 'c4_x2', targetInputIndex: 1 },
      { id: 'c4w5', sourceId: 'c4_x2', targetId: 'c4_x3', targetInputIndex: 0 },
      { id: 'c4w6', sourceId: 'c4_D',  targetId: 'c4_x3', targetInputIndex: 1 },
      { id: 'c4w7', sourceId: 'c4_x3', targetId: 'c4_P',  targetInputIndex: 0 },
    ],
  },

  // L20 — 4-TO-2 PRIORITY ENCODER
  // I0=0,I1=0,I2=0,I3=1 → VALID=OR(OR(0,0),OR(0,1))=1, Y1=OR(0,1)=1, Y0=OR(0,1)=1
  // (I3=1 → highest priority → code=11 binary)
  {
    id: 20, name: '4-TO-2 PRIORITY ENCODER', difficulty: 'Building Blocks',
    description: '4-to-2 Priority Encoder — Identifies the highest-priority active input (I3=highest) and produces its binary code. VALID=1 if any input is active.',
    instruction: 'Priority encoder: all 5 gates are the same type\nFind the gate that produces the correct output for both cases',
    hint: 'VALID = OR of all inputs (two stages). Y1 = I2 OR I3. Y0 = I1 OR I3. All gates are OR.',
    truthTable: {
      inputs: ['I3','I2','I1','I0'], outputs: ['VALID','Y1','Y0'],
      rows: [
        [[0,0,0,0],[0,0,0]], [[0,0,0,1],[1,0,0]], [[0,0,1,0],[1,0,1]], [[0,0,1,1],[1,0,1]],
        [[0,1,0,0],[1,1,0]], [[0,1,0,1],[1,1,0]], [[0,1,1,0],[1,1,1]], [[0,1,1,1],[1,1,1]],
        [[1,0,0,0],[1,1,1]], [[1,0,0,1],[1,1,1]], [[1,0,1,0],[1,1,1]], [[1,0,1,1],[1,1,1]],
        [[1,1,0,0],[1,1,1]], [[1,1,0,1],[1,1,1]], [[1,1,1,0],[1,1,1]], [[1,1,1,1],[1,1,1]],
      ],
    },
    solution: {
      gatesUsed: ['OR', 'OR', 'OR', 'OR', 'OR'],
      explanation: '4-to-2 Priority Encoder — OR(I0,I1) and OR(I2,I3) feed a third OR to produce VALID. Y1=OR(I2,I3) and Y0=OR(I1,I3) produce the binary code. All 5 gates are OR — checking "is at least one input active?".',
      blockSvg: `<svg viewBox="0 0 420 200" width="500" height="245">
        <text x="12" y="37" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">I0</text><line x1="35" y1="32" x2="90" y2="32" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="67" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">I1</text><line x1="35" y1="62" x2="90" y2="62" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="117" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">I2</text><line x1="35" y1="112" x2="90" y2="112" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="157" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">I3</text><line x1="35" y1="152" x2="90" y2="152" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="90" y="15" width="220" height="165" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="200" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">4:2 PRIORITY</text>
        <text x="200" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">ENCODER</text>
        <line x1="310" y1="45" x2="365" y2="45" stroke="#c8d8f0" stroke-width="2.5"/><text x="370" y="50" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">VALID</text>
        <line x1="310" y1="100" x2="365" y2="100" stroke="#c8d8f0" stroke-width="2.5"/><text x="370" y="105" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y1</text>
        <line x1="310" y1="150" x2="365" y2="150" stroke="#c8d8f0" stroke-width="2.5"/><text x="370" y="155" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y0</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 560 260" width="680" height="320">
        <text x="8" y="32" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">I0</text>
        <text x="8" y="82" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">I1</text>
        <text x="8" y="172" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">I2</text>
        <text x="8" y="222" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">I3</text>
        <rect x="100" y="18" width="68" height="32" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="134" y="40" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="100" y="158" width="68" height="32" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="134" y="180" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="240" y="75" width="68" height="32" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="274" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="340" y="148" width="68" height="32" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="374" y="170" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="340" y="208" width="68" height="32" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="374" y="230" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text>
        <text x="490" y="97" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">VALID</text>
        <text x="500" y="170" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y1</text>
        <text x="500" y="230" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y0</text>
        <polyline points="30,28 100,26" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="30,78 100,42" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="30,168 100,166" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="30,218 100,182" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="168" y1="34" x2="240" y2="83" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="168" y1="174" x2="240" y2="99" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="308" y1="91" x2="480" y2="91" stroke="#39ff14" stroke-width="1.5"/>
        <polyline points="30,168 80,168 80,156 340,156" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="30,218 80,218 80,172 340,172" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="408" y1="164" x2="490" y2="164" stroke="#39ff14" stroke-width="1.5"/>
        <polyline points="30,78 60,78 60,216 340,216" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="30,218 80,218 80,232 340,232" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="408" y1="224" x2="490" y2="224" stroke="#39ff14" stroke-width="1.5"/>
      </svg>`,
    },
    nodes: [
      // Case 1: I0=0,I1=0,I2=0,I3=1 → VALID=1, Y1=1, Y0=1
      { id: 'c1_I0',    type: 'INPUT',     x: 150, y: 200, fixedValue: 0, label: 'I0' },
      { id: 'c1_I1',    type: 'INPUT',     x: 150, y: 340, fixedValue: 0, label: 'I1' },
      { id: 'c1_I2',    type: 'INPUT',     x: 150, y: 480, fixedValue: 0, label: 'I2' },
      { id: 'c1_I3',    type: 'INPUT',     x: 150, y: 620, fixedValue: 1, label: 'I3' },
      { id: 'c1_or01',  type: 'GATE_SLOT', x: 380, y: 270, linkedGroup: 'enc' },
      { id: 'c1_or23',  type: 'GATE_SLOT', x: 380, y: 550, linkedGroup: 'enc' },
      { id: 'c1_valid', type: 'GATE_SLOT', x: 620, y: 360, linkedGroup: 'enc' },
      { id: 'c1_y1',    type: 'GATE_SLOT', x: 620, y: 525, linkedGroup: 'enc' },
      { id: 'c1_y0',    type: 'GATE_SLOT', x: 620, y: 640, linkedGroup: 'enc' },
      { id: 'c1_V',     type: 'OUTPUT',    x: 900, y: 360, targetValue: 1, label: 'VALID' },
      { id: 'c1_Y1',    type: 'OUTPUT',    x: 900, y: 525, targetValue: 1, label: 'Y1' },
      { id: 'c1_Y0',    type: 'OUTPUT',    x: 900, y: 640, targetValue: 1, label: 'Y0' },

      // Case 2: I0=1,I1=1,I2=0,I3=0 → VALID=1, Y1=0, Y0=1
      { id: 'c2_I0',    type: 'INPUT',     x: 150, y: 820, fixedValue: 1, label: 'I0' },
      { id: 'c2_I1',    type: 'INPUT',     x: 150, y: 960, fixedValue: 1, label: 'I1' },
      { id: 'c2_I2',    type: 'INPUT',     x: 150, y: 1100, fixedValue: 0, label: 'I2' },
      { id: 'c2_I3',    type: 'INPUT',     x: 150, y: 1240, fixedValue: 0, label: 'I3' },
      { id: 'c2_or01',  type: 'GATE_SLOT', x: 380, y: 890, linkedGroup: 'enc' },
      { id: 'c2_or23',  type: 'GATE_SLOT', x: 380, y: 1170, linkedGroup: 'enc' },
      { id: 'c2_valid', type: 'GATE_SLOT', x: 620, y: 980, linkedGroup: 'enc' },
      { id: 'c2_y1',    type: 'GATE_SLOT', x: 620, y: 1145, linkedGroup: 'enc' },
      { id: 'c2_y0',    type: 'GATE_SLOT', x: 620, y: 1260, linkedGroup: 'enc' },
      { id: 'c2_V',     type: 'OUTPUT',    x: 900, y: 980, targetValue: 1, label: 'VALID' },
      { id: 'c2_Y1',    type: 'OUTPUT',    x: 900, y: 1145, targetValue: 0, label: 'Y1' },
      { id: 'c2_Y0',    type: 'OUTPUT',    x: 900, y: 1260, targetValue: 1, label: 'Y0' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1',  sourceId: 'c1_I0',    targetId: 'c1_or01',  targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_I1',    targetId: 'c1_or01',  targetInputIndex: 1 },
      { id: 'c1w3',  sourceId: 'c1_I2',    targetId: 'c1_or23',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_I3',    targetId: 'c1_or23',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_or01',  targetId: 'c1_valid', targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_or23',  targetId: 'c1_valid', targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_I2',    targetId: 'c1_y1',    targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_I3',    targetId: 'c1_y1',    targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_I1',    targetId: 'c1_y0',    targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_I3',    targetId: 'c1_y0',    targetInputIndex: 1 },
      { id: 'c1w11', sourceId: 'c1_valid', targetId: 'c1_V',     targetInputIndex: 0 },
      { id: 'c1w12', sourceId: 'c1_y1',    targetId: 'c1_Y1',    targetInputIndex: 0 },
      { id: 'c1w13', sourceId: 'c1_y0',    targetId: 'c1_Y0',    targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_I0',    targetId: 'c2_or01',  targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_I1',    targetId: 'c2_or01',  targetInputIndex: 1 },
      { id: 'c2w3',  sourceId: 'c2_I2',    targetId: 'c2_or23',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_I3',    targetId: 'c2_or23',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_or01',  targetId: 'c2_valid', targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_or23',  targetId: 'c2_valid', targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_I2',    targetId: 'c2_y1',    targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_I3',    targetId: 'c2_y1',    targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_I1',    targetId: 'c2_y0',    targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_I3',    targetId: 'c2_y0',    targetInputIndex: 1 },
      { id: 'c2w11', sourceId: 'c2_valid', targetId: 'c2_V',     targetInputIndex: 0 },
      { id: 'c2w12', sourceId: 'c2_y1',    targetId: 'c2_Y1',    targetInputIndex: 0 },
      { id: 'c2w13', sourceId: 'c2_y0',    targetId: 'c2_Y0',    targetInputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 3 — 3. Advanced Circuits  (IDs 21–30)
  // Complex multi-gate circuits
  // ════════════════════════════════════════════════════════════

  // L21 — MAJORITY-OF-3 (5 gates, 4 cases, vertical bottom-to-top)
  // Solution: G_ab=AND, G_bc=AND, G_ac=AND, G_or1=OR, G_or2=OR
  // Case 1: A=1,B=1,C=0 → M=1   Case 2: A=0,B=0,C=1 → M=0
  // Case 3: A=1,B=0,C=1 → M=1   Case 4: A=0,B=1,C=0 → M=0
  {
    id: 21, name: 'MAJORITY-OF-3', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: 'Majority-of-3 — majority circuit: output is ON when at least 2 of 3 inputs are ON. Computes AB+BC+AC using three pairwise AND gates and two OR gates to merge. Used in voting logic and fault-tolerant systems.',
    instruction: 'Majority-of-3: output is ON when at least 2 of 3 inputs are ON\nFind the five gates that produce correct M in all four cases',
    hint: 'Compute all three pairwise ANDs (AB, BC, AC), then OR them together in a two-level OR tree.',
    truthTable: { inputs: ['A','B','C'], outputs: ['M'], rows: [[[0,0,0],[0]],[[0,0,1],[0]],[[0,1,0],[0]],[[0,1,1],[1]],[[1,0,0],[0]],[[1,0,1],[1]],[[1,1,0],[1]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['AND', 'AND', 'AND', 'OR', 'OR'],
      explanation: 'Majority-of-3 — majority circuit: output is ON when at least 2 of 3 inputs are ON. Computes AB+BC+AC using three pairwise AND gates and two OR gates to merge. Used in voting logic and fault-tolerant systems.',
      blockSvg: `<svg viewBox="0 0 440 180" width="520" height="215"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="87" x2="90" y2="87" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="137" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><line x1="28" y1="132" x2="90" y2="132" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="230" height="135" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">MAJORITY</text><text x="205" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#4a6080">≥2 of 3</text><line x1="320" y1="90" x2="385" y2="90" stroke="#c8d8f0" stroke-width="2.5"/><text x="393" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">M</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 580 220" width="700" height="270"><text x="10" y="32" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="10" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><text x="10" y="202" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text><rect x="120" y="12" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="160" y="36" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text><text x="105" y="26" font-family="JetBrains Mono,monospace" font-size="9" fill="#4a6080">AB</text><rect x="120" y="92" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="160" y="116" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text><text x="105" y="106" font-family="JetBrains Mono,monospace" font-size="9" fill="#4a6080">BC</text><rect x="120" y="172" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="160" y="196" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text><text x="105" y="186" font-family="JetBrains Mono,monospace" font-size="9" fill="#4a6080">AC</text><rect x="290" y="42" width="70" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="325" y="66" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">OR</text><rect x="420" y="102" width="70" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="455" y="126" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">OR</text><text x="535" y="125" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">M</text><polyline points="28,28 60,28 60,20 120,20" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="28,108 60,108 60,40 120,40" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="60,108 60,100 120,100" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="28,198 80,198 80,120 120,120" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="60,28 60,180 120,180" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="80,198 80,200 120,200" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="200" y1="30" x2="290" y2="52" stroke="#39ff14" stroke-width="2"/><line x1="200" y1="110" x2="290" y2="70" stroke="#39ff14" stroke-width="2"/><line x1="360" y1="60" x2="420" y2="112" stroke="#39ff14" stroke-width="2"/><line x1="200" y1="190" x2="420" y2="130" stroke="#39ff14" stroke-width="2"/><line x1="490" y1="120" x2="525" y2="120" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=1, B=1, C=0 → M=1   (cx = -450)
      { id: 'c1_A',   type: 'INPUT',     x: -510, y: 340, fixedValue: 1, label: 'A' },
      { id: 'c1_B',   type: 'INPUT',     x: -450, y: 380, fixedValue: 1, label: 'B' },
      { id: 'c1_C',   type: 'INPUT',     x: -390, y: 340, fixedValue: 0, label: 'C' },
      { id: 'c1_ab',  type: 'GATE_SLOT', x: -505, y: 160, linkedGroup: 'ab' },
      { id: 'c1_bc',  type: 'GATE_SLOT', x: -440, y: 160, linkedGroup: 'bc' },
      { id: 'c1_ac',  type: 'GATE_SLOT', x: -385, y: 160, linkedGroup: 'ac' },
      { id: 'c1_or1', type: 'GATE_SLOT', x: -475, y: -10, linkedGroup: 'or1' },
      { id: 'c1_or2', type: 'GATE_SLOT', x: -450, y: -170, linkedGroup: 'or2' },
      { id: 'c1_M',   type: 'OUTPUT',    x: -450, y: -330, targetValue: 1, label: 'M' },
      // Case 2: A=0, B=0, C=1 → M=0   (cx = -150)
      { id: 'c2_A',   type: 'INPUT',     x: -210, y: 340, fixedValue: 0, label: 'A' },
      { id: 'c2_B',   type: 'INPUT',     x: -150, y: 380, fixedValue: 0, label: 'B' },
      { id: 'c2_C',   type: 'INPUT',     x: -90,  y: 340, fixedValue: 1, label: 'C' },
      { id: 'c2_ab',  type: 'GATE_SLOT', x: -205, y: 160, linkedGroup: 'ab' },
      { id: 'c2_bc',  type: 'GATE_SLOT', x: -140, y: 160, linkedGroup: 'bc' },
      { id: 'c2_ac',  type: 'GATE_SLOT', x: -85,  y: 160, linkedGroup: 'ac' },
      { id: 'c2_or1', type: 'GATE_SLOT', x: -175, y: -10, linkedGroup: 'or1' },
      { id: 'c2_or2', type: 'GATE_SLOT', x: -150, y: -170, linkedGroup: 'or2' },
      { id: 'c2_M',   type: 'OUTPUT',    x: -150, y: -330, targetValue: 0, label: 'M' },
      // Case 3: A=1, B=0, C=1 → M=1   (cx = 150)
      { id: 'c3_A',   type: 'INPUT',     x: 90,   y: 340, fixedValue: 1, label: 'A' },
      { id: 'c3_B',   type: 'INPUT',     x: 150,  y: 380, fixedValue: 0, label: 'B' },
      { id: 'c3_C',   type: 'INPUT',     x: 210,  y: 340, fixedValue: 1, label: 'C' },
      { id: 'c3_ab',  type: 'GATE_SLOT', x: 95,   y: 160, linkedGroup: 'ab' },
      { id: 'c3_bc',  type: 'GATE_SLOT', x: 160,  y: 160, linkedGroup: 'bc' },
      { id: 'c3_ac',  type: 'GATE_SLOT', x: 215,  y: 160, linkedGroup: 'ac' },
      { id: 'c3_or1', type: 'GATE_SLOT', x: 125,  y: -10, linkedGroup: 'or1' },
      { id: 'c3_or2', type: 'GATE_SLOT', x: 150,  y: -170, linkedGroup: 'or2' },
      { id: 'c3_M',   type: 'OUTPUT',    x: 150,  y: -330, targetValue: 1, label: 'M' },
      // Case 4: A=0, B=1, C=0 → M=0   (cx = 450)
      { id: 'c4_A',   type: 'INPUT',     x: 390,  y: 340, fixedValue: 0, label: 'A' },
      { id: 'c4_B',   type: 'INPUT',     x: 450,  y: 380, fixedValue: 1, label: 'B' },
      { id: 'c4_C',   type: 'INPUT',     x: 510,  y: 340, fixedValue: 0, label: 'C' },
      { id: 'c4_ab',  type: 'GATE_SLOT', x: 395,  y: 160, linkedGroup: 'ab' },
      { id: 'c4_bc',  type: 'GATE_SLOT', x: 460,  y: 160, linkedGroup: 'bc' },
      { id: 'c4_ac',  type: 'GATE_SLOT', x: 515,  y: 160, linkedGroup: 'ac' },
      { id: 'c4_or1', type: 'GATE_SLOT', x: 425,  y: -10, linkedGroup: 'or1' },
      { id: 'c4_or2', type: 'GATE_SLOT', x: 450,  y: -170, linkedGroup: 'or2' },
      { id: 'c4_M',   type: 'OUTPUT',    x: 450,  y: -330, targetValue: 0, label: 'M' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1',  sourceId: 'c1_A',   targetId: 'c1_ab',  targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_B',   targetId: 'c1_ab',  targetInputIndex: 1 },
      { id: 'c1w3',  sourceId: 'c1_B',   targetId: 'c1_bc',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_C',   targetId: 'c1_bc',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_A',   targetId: 'c1_ac',  targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_C',   targetId: 'c1_ac',  targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_ab',  targetId: 'c1_or1', targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_bc',  targetId: 'c1_or1', targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_or1', targetId: 'c1_or2', targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_ac',  targetId: 'c1_or2', targetInputIndex: 1 },
      { id: 'c1w11', sourceId: 'c1_or2', targetId: 'c1_M',   targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_A',   targetId: 'c2_ab',  targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_B',   targetId: 'c2_ab',  targetInputIndex: 1 },
      { id: 'c2w3',  sourceId: 'c2_B',   targetId: 'c2_bc',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_C',   targetId: 'c2_bc',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_A',   targetId: 'c2_ac',  targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_C',   targetId: 'c2_ac',  targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_ab',  targetId: 'c2_or1', targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_bc',  targetId: 'c2_or1', targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_or1', targetId: 'c2_or2', targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_ac',  targetId: 'c2_or2', targetInputIndex: 1 },
      { id: 'c2w11', sourceId: 'c2_or2', targetId: 'c2_M',   targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1',  sourceId: 'c3_A',   targetId: 'c3_ab',  targetInputIndex: 0 },
      { id: 'c3w2',  sourceId: 'c3_B',   targetId: 'c3_ab',  targetInputIndex: 1 },
      { id: 'c3w3',  sourceId: 'c3_B',   targetId: 'c3_bc',  targetInputIndex: 0 },
      { id: 'c3w4',  sourceId: 'c3_C',   targetId: 'c3_bc',  targetInputIndex: 1 },
      { id: 'c3w5',  sourceId: 'c3_A',   targetId: 'c3_ac',  targetInputIndex: 0 },
      { id: 'c3w6',  sourceId: 'c3_C',   targetId: 'c3_ac',  targetInputIndex: 1 },
      { id: 'c3w7',  sourceId: 'c3_ab',  targetId: 'c3_or1', targetInputIndex: 0 },
      { id: 'c3w8',  sourceId: 'c3_bc',  targetId: 'c3_or1', targetInputIndex: 1 },
      { id: 'c3w9',  sourceId: 'c3_or1', targetId: 'c3_or2', targetInputIndex: 0 },
      { id: 'c3w10', sourceId: 'c3_ac',  targetId: 'c3_or2', targetInputIndex: 1 },
      { id: 'c3w11', sourceId: 'c3_or2', targetId: 'c3_M',   targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1',  sourceId: 'c4_A',   targetId: 'c4_ab',  targetInputIndex: 0 },
      { id: 'c4w2',  sourceId: 'c4_B',   targetId: 'c4_ab',  targetInputIndex: 1 },
      { id: 'c4w3',  sourceId: 'c4_B',   targetId: 'c4_bc',  targetInputIndex: 0 },
      { id: 'c4w4',  sourceId: 'c4_C',   targetId: 'c4_bc',  targetInputIndex: 1 },
      { id: 'c4w5',  sourceId: 'c4_A',   targetId: 'c4_ac',  targetInputIndex: 0 },
      { id: 'c4w6',  sourceId: 'c4_C',   targetId: 'c4_ac',  targetInputIndex: 1 },
      { id: 'c4w7',  sourceId: 'c4_ab',  targetId: 'c4_or1', targetInputIndex: 0 },
      { id: 'c4w8',  sourceId: 'c4_bc',  targetId: 'c4_or1', targetInputIndex: 1 },
      { id: 'c4w9',  sourceId: 'c4_or1', targetId: 'c4_or2', targetInputIndex: 0 },
      { id: 'c4w10', sourceId: 'c4_ac',  targetId: 'c4_or2', targetInputIndex: 1 },
      { id: 'c4w11', sourceId: 'c4_or2', targetId: 'c4_M',   targetInputIndex: 0 },
    ],
  },

  // L22 — 2-BIT EQUALITY DETECTOR
  // A1=1,B1=1,A0=0,B0=0 → XOR1=0,NOT1=1,XOR0=0,NOT0=1,AND=1 → EQ=1
  {
    id: 22, name: '2-BIT EQUALITY', difficulty: 'Advanced Circuits',
    description: '2-Bit Equality — checks equality between two 2-bit numbers. XNOR compares each bit individually (returns 1 if equal), and AND combines the results — EQ=1 only if both bits are equal.',
    instruction: '2-bit equality checker: XNOR for each bit, AND for the result\nFind the five gates that produce the correct result',
    hint: 'XNOR = XOR then NOT. Both XNORs feed into AND: EQ=1 only if both bits are equal.',
    truthTable: {
      inputs: ['A1','B1','A0','B0'], outputs: ['EQ'],
      rows: [
        [[0,0,0,0],[1]], [[0,0,0,1],[0]], [[0,0,1,0],[0]], [[0,0,1,1],[0]],
        [[0,1,0,0],[0]], [[0,1,0,1],[0]], [[0,1,1,0],[0]], [[0,1,1,1],[0]],
        [[1,0,0,0],[0]], [[1,0,0,1],[0]], [[1,0,1,0],[0]], [[1,0,1,1],[0]],
        [[1,1,0,0],[0]], [[1,1,0,1],[0]], [[1,1,1,0],[0]], [[1,1,1,1],[1]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'NOT', 'XOR', 'NOT', 'AND'],
      explanation: '2-Bit Equality — checks equality between two 2-bit numbers. XOR detects difference in each bit, NOT inverts it to XNOR (1=equal), and AND combines: EQ=1 only if all bits are equal. This circuit is the basis for number comparison in processors.',
      blockSvg: `<svg viewBox="0 0 400 180" width="480" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A1</text><line x1="38" y1="37" x2="90" y2="37" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B1</text><line x1="38" y1="67" x2="90" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="117" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A0</text><line x1="38" y1="112" x2="90" y2="112" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B0</text><line x1="38" y1="147" x2="90" y2="147" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="90" y="18" width="210" height="150" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="82" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">2-BIT</text>
        <text x="195" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">EQUALITY</text>
        <line x1="300" y1="93" x2="355" y2="93" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="362" y="98" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">EQ</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">A1</text>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B1</text>
        <text x="12" y="132" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">A0</text>
        <text x="12" y="172" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B0</text>
        <rect x="110" y="24" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="148" y="48" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="220" y="24" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="258" y="48" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">NOT</text>
        <rect x="110" y="114" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="148" y="138" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="220" y="114" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="258" y="138" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">NOT</text>
        <rect x="370" y="64" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="408" y="88" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <text x="480" y="88" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">EQ</text>
        <polyline points="38,38 70,38 70,32 110,32" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="38,78 70,78 70,52 110,52" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="186" y1="42" x2="220" y2="42" stroke="#39ff14" stroke-width="1.5"/>
        <polyline points="38,128 70,128 70,122 110,122" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <polyline points="38,168 70,168 70,142 110,142" stroke="#39ff14" stroke-width="1.5" fill="none"/>
        <line x1="186" y1="132" x2="220" y2="132" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="296" y1="42" x2="370" y2="74" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="296" y1="132" x2="370" y2="92" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="446" y1="82" x2="470" y2="82" stroke="#39ff14" stroke-width="1.5"/>
      </svg>`,
    },
    nodes: [
      // Case 1: A1=1,B1=1,A0=0,B0=0 → EQ=1 (equal)   (cx = -350)
      { id: 'c1_A1',   type: 'INPUT',     x: -480, y: 400, fixedValue: 1, label: 'A1' },
      { id: 'c1_B1',   type: 'INPUT',     x: -400, y: 400, fixedValue: 1, label: 'B1' },
      { id: 'c1_A0',   type: 'INPUT',     x: -300, y: 400, fixedValue: 0, label: 'A0' },
      { id: 'c1_B0',   type: 'INPUT',     x: -220, y: 400, fixedValue: 0, label: 'B0' },
      { id: 'c1_xor1', type: 'GATE_SLOT', x: -440, y: 200, linkedGroup: 'eq_xor' },
      { id: 'c1_not1', type: 'GATE_SLOT', x: -440, y: 50,  linkedGroup: 'eq_not' },
      { id: 'c1_xor0', type: 'GATE_SLOT', x: -260, y: 200, linkedGroup: 'eq_xor' },
      { id: 'c1_not0', type: 'GATE_SLOT', x: -260, y: 50,  linkedGroup: 'eq_not' },
      { id: 'c1_and',  type: 'GATE_SLOT', x: -350, y: -100, linkedGroup: 'eq_and' },
      { id: 'c1_EQ',   type: 'OUTPUT',    x: -350, y: -260, targetValue: 1, label: 'EQ' },

      // Case 2: A1=1,B1=0,A0=0,B0=0 → EQ=0 (not equal)   (cx = 350)
      { id: 'c2_A1',   type: 'INPUT',     x: 220, y: 400, fixedValue: 1, label: 'A1' },
      { id: 'c2_B1',   type: 'INPUT',     x: 300, y: 400, fixedValue: 0, label: 'B1' },
      { id: 'c2_A0',   type: 'INPUT',     x: 400, y: 400, fixedValue: 0, label: 'A0' },
      { id: 'c2_B0',   type: 'INPUT',     x: 480, y: 400, fixedValue: 0, label: 'B0' },
      { id: 'c2_xor1', type: 'GATE_SLOT', x: 260, y: 200, linkedGroup: 'eq_xor' },
      { id: 'c2_not1', type: 'GATE_SLOT', x: 260, y: 50,  linkedGroup: 'eq_not' },
      { id: 'c2_xor0', type: 'GATE_SLOT', x: 440, y: 200, linkedGroup: 'eq_xor' },
      { id: 'c2_not0', type: 'GATE_SLOT', x: 440, y: 50,  linkedGroup: 'eq_not' },
      { id: 'c2_and',  type: 'GATE_SLOT', x: 350, y: -100, linkedGroup: 'eq_and' },
      { id: 'c2_EQ',   type: 'OUTPUT',    x: 350, y: -260, targetValue: 0, label: 'EQ' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1', sourceId: 'c1_A1',   targetId: 'c1_xor1', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_B1',   targetId: 'c1_xor1', targetInputIndex: 1 },
      { id: 'c1w3', sourceId: 'c1_xor1', targetId: 'c1_not1', targetInputIndex: 0 },
      { id: 'c1w4', sourceId: 'c1_A0',   targetId: 'c1_xor0', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_B0',   targetId: 'c1_xor0', targetInputIndex: 1 },
      { id: 'c1w6', sourceId: 'c1_xor0', targetId: 'c1_not0', targetInputIndex: 0 },
      { id: 'c1w7', sourceId: 'c1_not1', targetId: 'c1_and',  targetInputIndex: 0 },
      { id: 'c1w8', sourceId: 'c1_not0', targetId: 'c1_and',  targetInputIndex: 1 },
      { id: 'c1w9', sourceId: 'c1_and',  targetId: 'c1_EQ',   targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A1',   targetId: 'c2_xor1', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_B1',   targetId: 'c2_xor1', targetInputIndex: 1 },
      { id: 'c2w3', sourceId: 'c2_xor1', targetId: 'c2_not1', targetInputIndex: 0 },
      { id: 'c2w4', sourceId: 'c2_A0',   targetId: 'c2_xor0', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_B0',   targetId: 'c2_xor0', targetInputIndex: 1 },
      { id: 'c2w6', sourceId: 'c2_xor0', targetId: 'c2_not0', targetInputIndex: 0 },
      { id: 'c2w7', sourceId: 'c2_not1', targetId: 'c2_and',  targetInputIndex: 0 },
      { id: 'c2w8', sourceId: 'c2_not0', targetId: 'c2_and',  targetInputIndex: 1 },
      { id: 'c2w9', sourceId: 'c2_and',  targetId: 'c2_EQ',   targetInputIndex: 0 },
    ],
  },

  // L23 — 1-BIT COMPARATOR (4 gates, 4 cases, vertical bottom-to-top)
  // Solution: nb=NOT, gt=AND, gx=XOR, eq=NOT
  // Case 1: A=0,B=0 → GT=0,EQ=1   Case 2: A=0,B=1 → GT=0,EQ=0
  // Case 3: A=1,B=0 → GT=1,EQ=0   Case 4: A=1,B=1 → GT=0,EQ=1
  {
    id: 23, name: '1-BIT COMPARATOR', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: '1-Bit Comparator — compares bits: GT (greater than) is ON when A=1 and B=0, EQ (equal) is ON when bits are identical. GT is built from AND(A, NOT B), EQ from NOT(XOR(A,B)). Used in ALUs and sorting circuits.',
    instruction: '1-bit comparator: GT is ON when A > B, EQ is ON when they are equal\nFind the four gates that produce correct results in all four cases',
    hint: 'GT = A AND NOT(B). EQ = NOT(XOR(A,B)). Four gate slots total.',
    truthTable: { inputs: ['A','B'], outputs: ['GT','EQ'], rows: [[[0,0],[0,1]],[[0,1],[0,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'AND', 'XOR', 'NOT'],
      explanation: '1-Bit Comparator — compares bits: GT (greater than) is ON when A=1 and B=0, EQ (equal) is ON when bits are identical. GT is built from AND(A, NOT B), EQ from NOT(XOR(A,B)). Used in ALUs and sorting circuits.',
      blockSvg: `<svg viewBox="0 0 420 160" width="500" height="195"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="50" x2="95" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="115" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="110" x2="95" y2="110" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="22" width="210" height="118" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="200" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">COMPARATOR</text><text x="200" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#4a6080">1-bit</text><line x1="305" y1="52" x2="365" y2="52" stroke="#c8d8f0" stroke-width="2.5"/><text x="372" y="57" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">GT</text><line x1="305" y1="108" x2="365" y2="108" stroke="#c8d8f0" stroke-width="2.5"/><text x="372" y="113" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">EQ</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 560 200" width="680" height="245"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="12" y="162" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="110" y="140" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="150" y="164" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="260" y="22" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="300" y="46" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><rect x="260" y="102" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="300" y="126" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="410" y="102" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="450" y="126" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NOT</text><text x="520" y="46" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">GT</text><text x="520" y="126" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">EQ</text><polyline points="30,48 60,48 60,30 260,30" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="60,48 60,110 260,110" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="30,158 110,158" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="190" y1="158" x2="260" y2="50" stroke="#39ff14" stroke-width="2"/><polyline points="90,158 90,130 260,130" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="340" y1="40" x2="510" y2="40" stroke="#39ff14" stroke-width="2"/><line x1="340" y1="120" x2="410" y2="120" stroke="#39ff14" stroke-width="2"/><line x1="490" y1="120" x2="510" y2="120" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=0, B=0 → GT=0, EQ=1   (cx = -420)
      { id: 'c1_A',  type: 'INPUT',     x: -470, y: 300, fixedValue: 0, label: 'A' },
      { id: 'c1_B',  type: 'INPUT',     x: -370, y: 300, fixedValue: 0, label: 'B' },
      { id: 'c1_nb', type: 'GATE_SLOT', x: -370, y: 130, linkedGroup: 'nb' },
      { id: 'c1_gt', type: 'GATE_SLOT', x: -460, y: -20, linkedGroup: 'gt' },
      { id: 'c1_gx', type: 'GATE_SLOT', x: -380, y: -20, linkedGroup: 'gx' },
      { id: 'c1_eq', type: 'GATE_SLOT', x: -380, y: -170, linkedGroup: 'eq' },
      { id: 'c1_GT', type: 'OUTPUT',    x: -460, y: -310, targetValue: 0, label: 'GT' },
      { id: 'c1_EQ', type: 'OUTPUT',    x: -380, y: -310, targetValue: 1, label: 'EQ' },
      // Case 2: A=0, B=1 → GT=0, EQ=0   (cx = -140)
      { id: 'c2_A',  type: 'INPUT',     x: -190, y: 300, fixedValue: 0, label: 'A' },
      { id: 'c2_B',  type: 'INPUT',     x: -90,  y: 300, fixedValue: 1, label: 'B' },
      { id: 'c2_nb', type: 'GATE_SLOT', x: -90,  y: 130, linkedGroup: 'nb' },
      { id: 'c2_gt', type: 'GATE_SLOT', x: -180, y: -20, linkedGroup: 'gt' },
      { id: 'c2_gx', type: 'GATE_SLOT', x: -100, y: -20, linkedGroup: 'gx' },
      { id: 'c2_eq', type: 'GATE_SLOT', x: -100, y: -170, linkedGroup: 'eq' },
      { id: 'c2_GT', type: 'OUTPUT',    x: -180, y: -310, targetValue: 0, label: 'GT' },
      { id: 'c2_EQ', type: 'OUTPUT',    x: -100, y: -310, targetValue: 0, label: 'EQ' },
      // Case 3: A=1, B=0 → GT=1, EQ=0   (cx = 140)
      { id: 'c3_A',  type: 'INPUT',     x: 90,   y: 300, fixedValue: 1, label: 'A' },
      { id: 'c3_B',  type: 'INPUT',     x: 190,  y: 300, fixedValue: 0, label: 'B' },
      { id: 'c3_nb', type: 'GATE_SLOT', x: 190,  y: 130, linkedGroup: 'nb' },
      { id: 'c3_gt', type: 'GATE_SLOT', x: 100,  y: -20, linkedGroup: 'gt' },
      { id: 'c3_gx', type: 'GATE_SLOT', x: 180,  y: -20, linkedGroup: 'gx' },
      { id: 'c3_eq', type: 'GATE_SLOT', x: 180,  y: -170, linkedGroup: 'eq' },
      { id: 'c3_GT', type: 'OUTPUT',    x: 100,  y: -310, targetValue: 1, label: 'GT' },
      { id: 'c3_EQ', type: 'OUTPUT',    x: 180,  y: -310, targetValue: 0, label: 'EQ' },
      // Case 4: A=1, B=1 → GT=0, EQ=1   (cx = 420)
      { id: 'c4_A',  type: 'INPUT',     x: 370,  y: 300, fixedValue: 1, label: 'A' },
      { id: 'c4_B',  type: 'INPUT',     x: 470,  y: 300, fixedValue: 1, label: 'B' },
      { id: 'c4_nb', type: 'GATE_SLOT', x: 470,  y: 130, linkedGroup: 'nb' },
      { id: 'c4_gt', type: 'GATE_SLOT', x: 380,  y: -20, linkedGroup: 'gt' },
      { id: 'c4_gx', type: 'GATE_SLOT', x: 460,  y: -20, linkedGroup: 'gx' },
      { id: 'c4_eq', type: 'GATE_SLOT', x: 460,  y: -170, linkedGroup: 'eq' },
      { id: 'c4_GT', type: 'OUTPUT',    x: 380,  y: -310, targetValue: 0, label: 'GT' },
      { id: 'c4_EQ', type: 'OUTPUT',    x: 460,  y: -310, targetValue: 1, label: 'EQ' },
    ],
    wires: [
      // Case 1: B→nb, A→gt[0], nb→gt[1], A→gx[0], B→gx[1], gx→eq[0], B→eq[1], gt→GT, eq→EQ
      { id: 'c1w1', sourceId: 'c1_B',  targetId: 'c1_nb', targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_A',  targetId: 'c1_gt', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_nb', targetId: 'c1_gt', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_A',  targetId: 'c1_gx', targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_B',  targetId: 'c1_gx', targetInputIndex: 1 },
      { id: 'c1w6', sourceId: 'c1_gx', targetId: 'c1_eq', targetInputIndex: 0 },
      { id: 'c1w7', sourceId: 'c1_B',  targetId: 'c1_eq', targetInputIndex: 1 },
      { id: 'c1w8', sourceId: 'c1_gt', targetId: 'c1_GT', targetInputIndex: 0 },
      { id: 'c1w9', sourceId: 'c1_eq', targetId: 'c1_EQ', targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_B',  targetId: 'c2_nb', targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_A',  targetId: 'c2_gt', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_nb', targetId: 'c2_gt', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_A',  targetId: 'c2_gx', targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_B',  targetId: 'c2_gx', targetInputIndex: 1 },
      { id: 'c2w6', sourceId: 'c2_gx', targetId: 'c2_eq', targetInputIndex: 0 },
      { id: 'c2w7', sourceId: 'c2_B',  targetId: 'c2_eq', targetInputIndex: 1 },
      { id: 'c2w8', sourceId: 'c2_gt', targetId: 'c2_GT', targetInputIndex: 0 },
      { id: 'c2w9', sourceId: 'c2_eq', targetId: 'c2_EQ', targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_B',  targetId: 'c3_nb', targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_A',  targetId: 'c3_gt', targetInputIndex: 0 },
      { id: 'c3w3', sourceId: 'c3_nb', targetId: 'c3_gt', targetInputIndex: 1 },
      { id: 'c3w4', sourceId: 'c3_A',  targetId: 'c3_gx', targetInputIndex: 0 },
      { id: 'c3w5', sourceId: 'c3_B',  targetId: 'c3_gx', targetInputIndex: 1 },
      { id: 'c3w6', sourceId: 'c3_gx', targetId: 'c3_eq', targetInputIndex: 0 },
      { id: 'c3w7', sourceId: 'c3_B',  targetId: 'c3_eq', targetInputIndex: 1 },
      { id: 'c3w8', sourceId: 'c3_gt', targetId: 'c3_GT', targetInputIndex: 0 },
      { id: 'c3w9', sourceId: 'c3_eq', targetId: 'c3_EQ', targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_B',  targetId: 'c4_nb', targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_A',  targetId: 'c4_gt', targetInputIndex: 0 },
      { id: 'c4w3', sourceId: 'c4_nb', targetId: 'c4_gt', targetInputIndex: 1 },
      { id: 'c4w4', sourceId: 'c4_A',  targetId: 'c4_gx', targetInputIndex: 0 },
      { id: 'c4w5', sourceId: 'c4_B',  targetId: 'c4_gx', targetInputIndex: 1 },
      { id: 'c4w6', sourceId: 'c4_gx', targetId: 'c4_eq', targetInputIndex: 0 },
      { id: 'c4w7', sourceId: 'c4_B',  targetId: 'c4_eq', targetInputIndex: 1 },
      { id: 'c4w8', sourceId: 'c4_gt', targetId: 'c4_GT', targetInputIndex: 0 },
      { id: 'c4w9', sourceId: 'c4_eq', targetId: 'c4_EQ', targetInputIndex: 0 },
    ],
  },

  // L24 — PRIORITY ENCODER (3 gates, 4 cases, vertical bottom-to-top)
  // Solution: na=NOT, valid=OR, code=AND
  // Case 1: A=0,B=0 → VALID=0,CODE=0   Case 2: A=0,B=1 → VALID=1,CODE=1
  // Case 3: A=1,B=0 → VALID=1,CODE=0   Case 4: A=1,B=1 → VALID=1,CODE=0
  {
    id: 24, name: 'PRIORITY ENCODER', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: 'Priority Encoder — encodes priority: VALID is ON when at least one input is active. CODE indicates the active input with lowest priority (B is active only if A is not). Used in interrupt handling and hardware priority queues.',
    instruction: 'Priority encoder: VALID is ON if any input is active, CODE indicates which\nFind the three gates that produce correct results in all four cases',
    hint: 'VALID = A OR B. CODE = NOT(A) AND B.',
    truthTable: { inputs: ['A','B'], outputs: ['VALID','CODE'], rows: [[[0,0],[0,0]],[[0,1],[1,1]],[[1,0],[1,0]],[[1,1],[1,0]]] },
    solution: {
      gatesUsed: ['NOT', 'OR', 'AND'],
      explanation: 'Priority Encoder — encodes priority: VALID is ON when at least one input is active. CODE indicates the active input with lowest priority (B is active only if A is not). Used in interrupt handling and hardware priority queues.',
      blockSvg: `<svg viewBox="0 0 440 160" width="520" height="195"><text x="12" y="55" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="50" x2="95" y2="50" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="115" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="110" x2="95" y2="110" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="22" width="220" height="118" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="205" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">PRIORITY</text><text x="205" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">ENCODER</text><line x1="315" y1="50" x2="375" y2="50" stroke="#c8d8f0" stroke-width="2.5"/><text x="380" y="55" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">VALID</text><line x1="315" y1="110" x2="375" y2="110" stroke="#c8d8f0" stroke-width="2.5"/><text x="380" y="115" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">CODE</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 480 180" width="580" height="220"><text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text><text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text><rect x="110" y="30" width="80" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="150" y="54" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="270" y="30" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="310" y="56" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">OR</text><rect x="270" y="118" width="80" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="310" y="144" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text><text x="415" y="55" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">VALID</text><text x="415" y="143" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">CODE</text><polyline points="30,48 70,48 110,48" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="70,48 70,38 270,38" stroke="#39ff14" stroke-width="2" fill="none"/><polyline points="30,138 80,138 80,62 270,62" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="190" y1="48" x2="270" y2="126" stroke="#39ff14" stroke-width="2"/><polyline points="80,138 80,150 270,150" stroke="#39ff14" stroke-width="2" fill="none"/><line x1="350" y1="50" x2="405" y2="50" stroke="#39ff14" stroke-width="2"/><line x1="350" y1="138" x2="405" y2="138" stroke="#39ff14" stroke-width="2"/></svg>`,
    },
    nodes: [
      // Case 1: A=0, B=0 → VALID=0, CODE=0   (cx = -420)
      { id: 'c1_A',     type: 'INPUT',     x: -470, y: 260, fixedValue: 0, label: 'A' },
      { id: 'c1_B',     type: 'INPUT',     x: -370, y: 260, fixedValue: 0, label: 'B' },
      { id: 'c1_na',    type: 'GATE_SLOT', x: -470, y: 90,  linkedGroup: 'na' },
      { id: 'c1_valid', type: 'GATE_SLOT', x: -460, y: -60, linkedGroup: 'valid' },
      { id: 'c1_code',  type: 'GATE_SLOT', x: -380, y: -60, linkedGroup: 'code' },
      { id: 'c1_VALID', type: 'OUTPUT',    x: -460, y: -230, targetValue: 0, label: 'VALID' },
      { id: 'c1_CODE', type: 'OUTPUT',    x: -380, y: -230, targetValue: 0, label: 'CODE' },
      // Case 2: A=0, B=1 → VALID=1, CODE=1   (cx = -140)
      { id: 'c2_A',     type: 'INPUT',     x: -190, y: 260, fixedValue: 0, label: 'A' },
      { id: 'c2_B',     type: 'INPUT',     x: -90,  y: 260, fixedValue: 1, label: 'B' },
      { id: 'c2_na',    type: 'GATE_SLOT', x: -190, y: 90,  linkedGroup: 'na' },
      { id: 'c2_valid', type: 'GATE_SLOT', x: -180, y: -60, linkedGroup: 'valid' },
      { id: 'c2_code',  type: 'GATE_SLOT', x: -100, y: -60, linkedGroup: 'code' },
      { id: 'c2_VALID', type: 'OUTPUT',    x: -180, y: -230, targetValue: 1, label: 'VALID' },
      { id: 'c2_CODE', type: 'OUTPUT',    x: -100, y: -230, targetValue: 1, label: 'CODE' },
      // Case 3: A=1, B=0 → VALID=1, CODE=0   (cx = 140)
      { id: 'c3_A',     type: 'INPUT',     x: 90,   y: 260, fixedValue: 1, label: 'A' },
      { id: 'c3_B',     type: 'INPUT',     x: 190,  y: 260, fixedValue: 0, label: 'B' },
      { id: 'c3_na',    type: 'GATE_SLOT', x: 90,   y: 90,  linkedGroup: 'na' },
      { id: 'c3_valid', type: 'GATE_SLOT', x: 100,  y: -60, linkedGroup: 'valid' },
      { id: 'c3_code',  type: 'GATE_SLOT', x: 180,  y: -60, linkedGroup: 'code' },
      { id: 'c3_VALID', type: 'OUTPUT',    x: 100,  y: -230, targetValue: 1, label: 'VALID' },
      { id: 'c3_CODE', type: 'OUTPUT',    x: 180,  y: -230, targetValue: 0, label: 'CODE' },
      // Case 4: A=1, B=1 → VALID=1, CODE=0   (cx = 420)
      { id: 'c4_A',     type: 'INPUT',     x: 370,  y: 260, fixedValue: 1, label: 'A' },
      { id: 'c4_B',     type: 'INPUT',     x: 470,  y: 260, fixedValue: 1, label: 'B' },
      { id: 'c4_na',    type: 'GATE_SLOT', x: 370,  y: 90,  linkedGroup: 'na' },
      { id: 'c4_valid', type: 'GATE_SLOT', x: 380,  y: -60, linkedGroup: 'valid' },
      { id: 'c4_code',  type: 'GATE_SLOT', x: 460,  y: -60, linkedGroup: 'code' },
      { id: 'c4_VALID', type: 'OUTPUT',    x: 380,  y: -230, targetValue: 1, label: 'VALID' },
      { id: 'c4_CODE', type: 'OUTPUT',    x: 460,  y: -230, targetValue: 0, label: 'CODE' },
    ],
    wires: [
      // Case 1: A→na, A→valid[0], B→valid[1], na→code[0], B→code[1], valid→VALID, code→CODE
      { id: 'c1w1', sourceId: 'c1_A',     targetId: 'c1_na',    targetInputIndex: 0 },
      { id: 'c1w2', sourceId: 'c1_A',     targetId: 'c1_valid', targetInputIndex: 0 },
      { id: 'c1w3', sourceId: 'c1_B',     targetId: 'c1_valid', targetInputIndex: 1 },
      { id: 'c1w4', sourceId: 'c1_na',    targetId: 'c1_code',  targetInputIndex: 0 },
      { id: 'c1w5', sourceId: 'c1_B',     targetId: 'c1_code',  targetInputIndex: 1 },
      { id: 'c1w6', sourceId: 'c1_valid', targetId: 'c1_VALID', targetInputIndex: 0 },
      { id: 'c1w7', sourceId: 'c1_code',  targetId: 'c1_CODE',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1', sourceId: 'c2_A',     targetId: 'c2_na',    targetInputIndex: 0 },
      { id: 'c2w2', sourceId: 'c2_A',     targetId: 'c2_valid', targetInputIndex: 0 },
      { id: 'c2w3', sourceId: 'c2_B',     targetId: 'c2_valid', targetInputIndex: 1 },
      { id: 'c2w4', sourceId: 'c2_na',    targetId: 'c2_code',  targetInputIndex: 0 },
      { id: 'c2w5', sourceId: 'c2_B',     targetId: 'c2_code',  targetInputIndex: 1 },
      { id: 'c2w6', sourceId: 'c2_valid', targetId: 'c2_VALID', targetInputIndex: 0 },
      { id: 'c2w7', sourceId: 'c2_code',  targetId: 'c2_CODE',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1', sourceId: 'c3_A',     targetId: 'c3_na',    targetInputIndex: 0 },
      { id: 'c3w2', sourceId: 'c3_A',     targetId: 'c3_valid', targetInputIndex: 0 },
      { id: 'c3w3', sourceId: 'c3_B',     targetId: 'c3_valid', targetInputIndex: 1 },
      { id: 'c3w4', sourceId: 'c3_na',    targetId: 'c3_code',  targetInputIndex: 0 },
      { id: 'c3w5', sourceId: 'c3_B',     targetId: 'c3_code',  targetInputIndex: 1 },
      { id: 'c3w6', sourceId: 'c3_valid', targetId: 'c3_VALID', targetInputIndex: 0 },
      { id: 'c3w7', sourceId: 'c3_code',  targetId: 'c3_CODE',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1', sourceId: 'c4_A',     targetId: 'c4_na',    targetInputIndex: 0 },
      { id: 'c4w2', sourceId: 'c4_A',     targetId: 'c4_valid', targetInputIndex: 0 },
      { id: 'c4w3', sourceId: 'c4_B',     targetId: 'c4_valid', targetInputIndex: 1 },
      { id: 'c4w4', sourceId: 'c4_na',    targetId: 'c4_code',  targetInputIndex: 0 },
      { id: 'c4w5', sourceId: 'c4_B',     targetId: 'c4_code',  targetInputIndex: 1 },
      { id: 'c4w6', sourceId: 'c4_valid', targetId: 'c4_VALID', targetInputIndex: 0 },
      { id: 'c4w7', sourceId: 'c4_code',  targetId: 'c4_CODE',  targetInputIndex: 0 },
    ],
  },

  // L25 — 2-TO-4 DECODER (6 gates, 4 cases, vertical bottom-to-top)
  // Solution: ns0=NOT, ns1=NOT, y0=AND, y1=AND, y2=AND, y3=AND
  // Case 1: S0=0,S1=0 → Y0=1,Y1=0,Y2=0,Y3=0   Case 2: S0=1,S1=0 → Y0=0,Y1=1,Y2=0,Y3=0
  // Case 3: S0=0,S1=1 → Y0=0,Y1=0,Y2=1,Y3=0   Case 4: S0=1,S1=1 → Y0=0,Y1=0,Y2=0,Y3=1
  {
    id: 25, name: '2-TO-4 DECODER', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: '2-to-4 Decoder — converts a 2-bit binary address to one of 4 outputs. Exactly one output is ON at any time. Used in memory address decoding and component selection on motherboards.',
    instruction: '2-to-4 decoder: exactly one output is ON based on the input address\nFind the six gates that produce correct results in all four cases',
    hint: 'Invert both select lines first. Each output AND gate takes the appropriate true/complemented versions of S1,S0.',
    truthTable: { inputs: ['S0','S1'], outputs: ['Y0','Y1','Y2','Y3'], rows: [[[0,0],[1,0,0,0]],[[1,0],[0,1,0,0]],[[0,1],[0,0,1,0]],[[1,1],[0,0,0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'NOT', 'AND', 'AND', 'AND', 'AND'],
      explanation: '2-to-4 Decoder — converts a 2-bit binary address to one of 4 outputs. Exactly one output is ON at any time. Used in memory address decoding and component selection on motherboards.',
      blockSvg: `<svg viewBox="0 0 440 200" width="520" height="240"><text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S0</text><line x1="38" y1="67" x2="90" y2="67" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="127" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S1</text><line x1="38" y1="122" x2="90" y2="122" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="20" width="210" height="165" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="195" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">DECODER</text><text x="195" y="118" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#4a6080">2-to-4</text><line x1="300" y1="45" x2="370" y2="45" stroke="#c8d8f0" stroke-width="2.5"/><text x="378" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y0</text><line x1="300" y1="80" x2="370" y2="80" stroke="#c8d8f0" stroke-width="2.5"/><text x="378" y="85" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y1</text><line x1="300" y1="120" x2="370" y2="120" stroke="#c8d8f0" stroke-width="2.5"/><text x="378" y="125" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y2</text><line x1="300" y1="158" x2="370" y2="158" stroke="#c8d8f0" stroke-width="2.5"/><text x="378" y="163" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y3</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 560 230" width="680" height="280"><text x="10" y="72" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S0</text><text x="10" y="172" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">S1</text><rect x="110" y="52" width="70" height="32" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="145" y="74" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="110" y="152" width="70" height="32" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="145" y="174" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="280" y="14" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="315" y="34" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text><rect x="280" y="62" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="315" y="82" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text><rect x="280" y="114" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="315" y="134" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text><rect x="280" y="166" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="315" y="186" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text><text x="400" y="34" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y0</text><text x="400" y="82" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y1</text><text x="400" y="134" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y2</text><text x="400" y="186" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Y3</text><polyline points="36,68 80,68 110,68" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="36,168 80,168 110,168" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="180,168 220,168 220,22 280,22" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="180,68 240,68 240,36 280,36" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="220,168 220,70 280,70" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="80,68 80,84 280,84" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="80,168 80,122 280,122" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="240,68 240,136 280,136" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="80,168 80,174 280,174" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="80,68 80,188 280,188" stroke="#39ff14" stroke-width="1.5" fill="none"/><line x1="350" y1="29" x2="390" y2="29" stroke="#39ff14" stroke-width="1.5"/><line x1="350" y1="77" x2="390" y2="77" stroke="#39ff14" stroke-width="1.5"/><line x1="350" y1="129" x2="390" y2="129" stroke="#39ff14" stroke-width="1.5"/><line x1="350" y1="181" x2="390" y2="181" stroke="#39ff14" stroke-width="1.5"/></svg>`,
    },
    nodes: [
      // Case 1: S0=0, S1=0 → Y0=1,Y1=0,Y2=0,Y3=0   (cx = -480)
      { id: 'c1_S0',  type: 'INPUT',     x: -510, y: 380, fixedValue: 0, label: 'S0' },
      { id: 'c1_S1',  type: 'INPUT',     x: -450, y: 380, fixedValue: 0, label: 'S1' },
      { id: 'c1_ns0', type: 'GATE_SLOT', x: -510, y: 210, linkedGroup: 'ns0' },
      { id: 'c1_ns1', type: 'GATE_SLOT', x: -450, y: 210, linkedGroup: 'ns1' },
      { id: 'c1_y0',  type: 'GATE_SLOT', x: -555, y: 30,  linkedGroup: 'y0' },
      { id: 'c1_y1',  type: 'GATE_SLOT', x: -505, y: 30,  linkedGroup: 'y1' },
      { id: 'c1_y2',  type: 'GATE_SLOT', x: -455, y: 30,  linkedGroup: 'y2' },
      { id: 'c1_y3',  type: 'GATE_SLOT', x: -405, y: 30,  linkedGroup: 'y3' },
      { id: 'c1_Y0',  type: 'OUTPUT',    x: -555, y: -180, targetValue: 1, label: 'Y0' },
      { id: 'c1_Y1',  type: 'OUTPUT',    x: -505, y: -180, targetValue: 0, label: 'Y1' },
      { id: 'c1_Y2',  type: 'OUTPUT',    x: -455, y: -180, targetValue: 0, label: 'Y2' },
      { id: 'c1_Y3',  type: 'OUTPUT',    x: -405, y: -180, targetValue: 0, label: 'Y3' },
      // Case 2: S0=1, S1=0 → Y0=0,Y1=1,Y2=0,Y3=0   (cx = -160)
      { id: 'c2_S0',  type: 'INPUT',     x: -190, y: 380, fixedValue: 1, label: 'S0' },
      { id: 'c2_S1',  type: 'INPUT',     x: -130, y: 380, fixedValue: 0, label: 'S1' },
      { id: 'c2_ns0', type: 'GATE_SLOT', x: -190, y: 210, linkedGroup: 'ns0' },
      { id: 'c2_ns1', type: 'GATE_SLOT', x: -130, y: 210, linkedGroup: 'ns1' },
      { id: 'c2_y0',  type: 'GATE_SLOT', x: -235, y: 30,  linkedGroup: 'y0' },
      { id: 'c2_y1',  type: 'GATE_SLOT', x: -185, y: 30,  linkedGroup: 'y1' },
      { id: 'c2_y2',  type: 'GATE_SLOT', x: -135, y: 30,  linkedGroup: 'y2' },
      { id: 'c2_y3',  type: 'GATE_SLOT', x: -85,  y: 30,  linkedGroup: 'y3' },
      { id: 'c2_Y0',  type: 'OUTPUT',    x: -235, y: -180, targetValue: 0, label: 'Y0' },
      { id: 'c2_Y1',  type: 'OUTPUT',    x: -185, y: -180, targetValue: 1, label: 'Y1' },
      { id: 'c2_Y2',  type: 'OUTPUT',    x: -135, y: -180, targetValue: 0, label: 'Y2' },
      { id: 'c2_Y3',  type: 'OUTPUT',    x: -85,  y: -180, targetValue: 0, label: 'Y3' },
      // Case 3: S0=0, S1=1 → Y0=0,Y1=0,Y2=1,Y3=0   (cx = 160)
      { id: 'c3_S0',  type: 'INPUT',     x: 130,  y: 380, fixedValue: 0, label: 'S0' },
      { id: 'c3_S1',  type: 'INPUT',     x: 190,  y: 380, fixedValue: 1, label: 'S1' },
      { id: 'c3_ns0', type: 'GATE_SLOT', x: 130,  y: 210, linkedGroup: 'ns0' },
      { id: 'c3_ns1', type: 'GATE_SLOT', x: 190,  y: 210, linkedGroup: 'ns1' },
      { id: 'c3_y0',  type: 'GATE_SLOT', x: 85,   y: 30,  linkedGroup: 'y0' },
      { id: 'c3_y1',  type: 'GATE_SLOT', x: 135,  y: 30,  linkedGroup: 'y1' },
      { id: 'c3_y2',  type: 'GATE_SLOT', x: 185,  y: 30,  linkedGroup: 'y2' },
      { id: 'c3_y3',  type: 'GATE_SLOT', x: 235,  y: 30,  linkedGroup: 'y3' },
      { id: 'c3_Y0',  type: 'OUTPUT',    x: 85,   y: -180, targetValue: 0, label: 'Y0' },
      { id: 'c3_Y1',  type: 'OUTPUT',    x: 135,  y: -180, targetValue: 0, label: 'Y1' },
      { id: 'c3_Y2',  type: 'OUTPUT',    x: 185,  y: -180, targetValue: 1, label: 'Y2' },
      { id: 'c3_Y3',  type: 'OUTPUT',    x: 235,  y: -180, targetValue: 0, label: 'Y3' },
      // Case 4: S0=1, S1=1 → Y0=0,Y1=0,Y2=0,Y3=1   (cx = 480)
      { id: 'c4_S0',  type: 'INPUT',     x: 450,  y: 380, fixedValue: 1, label: 'S0' },
      { id: 'c4_S1',  type: 'INPUT',     x: 510,  y: 380, fixedValue: 1, label: 'S1' },
      { id: 'c4_ns0', type: 'GATE_SLOT', x: 450,  y: 210, linkedGroup: 'ns0' },
      { id: 'c4_ns1', type: 'GATE_SLOT', x: 510,  y: 210, linkedGroup: 'ns1' },
      { id: 'c4_y0',  type: 'GATE_SLOT', x: 405,  y: 30,  linkedGroup: 'y0' },
      { id: 'c4_y1',  type: 'GATE_SLOT', x: 455,  y: 30,  linkedGroup: 'y1' },
      { id: 'c4_y2',  type: 'GATE_SLOT', x: 505,  y: 30,  linkedGroup: 'y2' },
      { id: 'c4_y3',  type: 'GATE_SLOT', x: 555,  y: 30,  linkedGroup: 'y3' },
      { id: 'c4_Y0',  type: 'OUTPUT',    x: 405,  y: -180, targetValue: 0, label: 'Y0' },
      { id: 'c4_Y1',  type: 'OUTPUT',    x: 455,  y: -180, targetValue: 0, label: 'Y1' },
      { id: 'c4_Y2',  type: 'OUTPUT',    x: 505,  y: -180, targetValue: 0, label: 'Y2' },
      { id: 'c4_Y3',  type: 'OUTPUT',    x: 555,  y: -180, targetValue: 1, label: 'Y3' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1',  sourceId: 'c1_S0',  targetId: 'c1_ns0', targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_S1',  targetId: 'c1_ns1', targetInputIndex: 0 },
      { id: 'c1w3',  sourceId: 'c1_ns1', targetId: 'c1_y0',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_ns0', targetId: 'c1_y0',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_ns1', targetId: 'c1_y1',  targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_S0',  targetId: 'c1_y1',  targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_S1',  targetId: 'c1_y2',  targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_ns0', targetId: 'c1_y2',  targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_S1',  targetId: 'c1_y3',  targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_S0',  targetId: 'c1_y3',  targetInputIndex: 1 },
      { id: 'c1w11', sourceId: 'c1_y0',  targetId: 'c1_Y0',  targetInputIndex: 0 },
      { id: 'c1w12', sourceId: 'c1_y1',  targetId: 'c1_Y1',  targetInputIndex: 0 },
      { id: 'c1w13', sourceId: 'c1_y2',  targetId: 'c1_Y2',  targetInputIndex: 0 },
      { id: 'c1w14', sourceId: 'c1_y3',  targetId: 'c1_Y3',  targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_S0',  targetId: 'c2_ns0', targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_S1',  targetId: 'c2_ns1', targetInputIndex: 0 },
      { id: 'c2w3',  sourceId: 'c2_ns1', targetId: 'c2_y0',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_ns0', targetId: 'c2_y0',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_ns1', targetId: 'c2_y1',  targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_S0',  targetId: 'c2_y1',  targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_S1',  targetId: 'c2_y2',  targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_ns0', targetId: 'c2_y2',  targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_S1',  targetId: 'c2_y3',  targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_S0',  targetId: 'c2_y3',  targetInputIndex: 1 },
      { id: 'c2w11', sourceId: 'c2_y0',  targetId: 'c2_Y0',  targetInputIndex: 0 },
      { id: 'c2w12', sourceId: 'c2_y1',  targetId: 'c2_Y1',  targetInputIndex: 0 },
      { id: 'c2w13', sourceId: 'c2_y2',  targetId: 'c2_Y2',  targetInputIndex: 0 },
      { id: 'c2w14', sourceId: 'c2_y3',  targetId: 'c2_Y3',  targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1',  sourceId: 'c3_S0',  targetId: 'c3_ns0', targetInputIndex: 0 },
      { id: 'c3w2',  sourceId: 'c3_S1',  targetId: 'c3_ns1', targetInputIndex: 0 },
      { id: 'c3w3',  sourceId: 'c3_ns1', targetId: 'c3_y0',  targetInputIndex: 0 },
      { id: 'c3w4',  sourceId: 'c3_ns0', targetId: 'c3_y0',  targetInputIndex: 1 },
      { id: 'c3w5',  sourceId: 'c3_ns1', targetId: 'c3_y1',  targetInputIndex: 0 },
      { id: 'c3w6',  sourceId: 'c3_S0',  targetId: 'c3_y1',  targetInputIndex: 1 },
      { id: 'c3w7',  sourceId: 'c3_S1',  targetId: 'c3_y2',  targetInputIndex: 0 },
      { id: 'c3w8',  sourceId: 'c3_ns0', targetId: 'c3_y2',  targetInputIndex: 1 },
      { id: 'c3w9',  sourceId: 'c3_S1',  targetId: 'c3_y3',  targetInputIndex: 0 },
      { id: 'c3w10', sourceId: 'c3_S0',  targetId: 'c3_y3',  targetInputIndex: 1 },
      { id: 'c3w11', sourceId: 'c3_y0',  targetId: 'c3_Y0',  targetInputIndex: 0 },
      { id: 'c3w12', sourceId: 'c3_y1',  targetId: 'c3_Y1',  targetInputIndex: 0 },
      { id: 'c3w13', sourceId: 'c3_y2',  targetId: 'c3_Y2',  targetInputIndex: 0 },
      { id: 'c3w14', sourceId: 'c3_y3',  targetId: 'c3_Y3',  targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1',  sourceId: 'c4_S0',  targetId: 'c4_ns0', targetInputIndex: 0 },
      { id: 'c4w2',  sourceId: 'c4_S1',  targetId: 'c4_ns1', targetInputIndex: 0 },
      { id: 'c4w3',  sourceId: 'c4_ns1', targetId: 'c4_y0',  targetInputIndex: 0 },
      { id: 'c4w4',  sourceId: 'c4_ns0', targetId: 'c4_y0',  targetInputIndex: 1 },
      { id: 'c4w5',  sourceId: 'c4_ns1', targetId: 'c4_y1',  targetInputIndex: 0 },
      { id: 'c4w6',  sourceId: 'c4_S0',  targetId: 'c4_y1',  targetInputIndex: 1 },
      { id: 'c4w7',  sourceId: 'c4_S1',  targetId: 'c4_y2',  targetInputIndex: 0 },
      { id: 'c4w8',  sourceId: 'c4_ns0', targetId: 'c4_y2',  targetInputIndex: 1 },
      { id: 'c4w9',  sourceId: 'c4_S1',  targetId: 'c4_y3',  targetInputIndex: 0 },
      { id: 'c4w10', sourceId: 'c4_S0',  targetId: 'c4_y3',  targetInputIndex: 1 },
      { id: 'c4w11', sourceId: 'c4_y0',  targetId: 'c4_Y0',  targetInputIndex: 0 },
      { id: 'c4w12', sourceId: 'c4_y1',  targetId: 'c4_Y1',  targetInputIndex: 0 },
      { id: 'c4w13', sourceId: 'c4_y2',  targetId: 'c4_Y2',  targetInputIndex: 0 },
      { id: 'c4w14', sourceId: 'c4_y3',  targetId: 'c4_Y3',  targetInputIndex: 0 },
    ],
  },

  // L26 — FULL ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: XOR1=XOR, XOR2=XOR, AND1=AND, AND2=AND, OR=OR
  // Case 1: A=0,B=0,Cin=0 → S=0,CO=0  Case 2: A=1,B=0,Cin=1 → S=0,CO=1
  // Case 3: A=0,B=1,Cin=0 → S=1,CO=0  Case 4: A=1,B=1,Cin=1 → S=1,CO=1
  {
    id: 26, name: 'FULL ADDER', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: 'Full Adder — the building block of all addition circuits in processors. It adds two bits (A and B) together with a carry-in bit (Cin), producing a sum (SUM) and carry-out (COUT). Chaining full adders enables multi-bit number addition.',
    instruction: 'Full adder: five gates compute SUM and COUT\nFind the five gates that produce correct results in all four cases',
    hint: 'XOR1(A,B)→XOR2(…,Cin)→SUM. AND stages for carry bits, OR merges into COUT.',
    truthTable: { inputs: ['A','B','Cin'], outputs: ['SUM','COUT'], rows: [[[0,0,0],[0,0]],[[0,0,1],[1,0]],[[0,1,0],[1,0]],[[0,1,1],[0,1]],[[1,0,0],[1,0]],[[1,0,1],[0,1]],[[1,1,0],[0,1]],[[1,1,1],[1,1]]] },
    solution: {
      gatesUsed: ['XOR', 'XOR', 'AND', 'AND', 'OR'],
      explanation: 'Full Adder — the building block of all addition circuits in processors. It adds two bits (A and B) together with a carry-in bit (Cin), producing a sum (SUM) and carry-out (COUT). Chaining full adders enables multi-bit number addition.',
      blockSvg: `<svg viewBox="0 0 440 230" width="520" height="270">
        <!-- Cin from top -->
        <text x="210" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">Cin</text>
        <line x1="210" y1="22" x2="210" y2="55" stroke="#39ff14" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="55" width="220" height="120" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="210" y="124" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="30" font-weight="bold" fill="#00d4ff">F.A.</text>
        <!-- A input from left -->
        <text x="12" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="90" x2="100" y2="90" stroke="#39ff14" stroke-width="2.5"/>
        <!-- B input from left -->
        <text x="12" y="140" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="135" x2="100" y2="135" stroke="#39ff14" stroke-width="2.5"/>
        <!-- SUM output to right -->
        <line x1="320" y1="90" x2="380" y2="90" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="388" y="95" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">SUM</text>
        <!-- COUT output to right -->
        <line x1="320" y1="135" x2="380" y2="135" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="388" y="140" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">COUT</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 620 250" width="760" height="310">
        <text x="20" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <text x="20" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <text x="10" y="212" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">Cin</text>
        <rect x="145" y="32" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="183" y="56" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="145" y="142" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="183" y="166" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="310" y="22" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="348" y="46" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="310" y="132" width="76" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="348" y="156" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="455" y="142" width="70" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/><text x="490" y="166" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">OR</text>
        <text x="565" y="46" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">SUM</text>
        <text x="558" y="166" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#c8d8f0">COUT</text>
        <polyline points="44,48 85,48 85,42 145,42" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="85,48 85,152 145,152" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="44,108 105,108 105,60 145,60" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="105,108 105,170 145,170" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="221,50 265,50 265,32 310,32" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="265,50 265,142 310,142" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="44,208 125,208 125,48 310,48" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="125,208 125,160 310,160" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="221,160 280,160 455,160" stroke="#39ff14" stroke-width="2" fill="none"/>
        <polyline points="386,150 420,150 420,170 455,170" stroke="#39ff14" stroke-width="2" fill="none"/>
        <line x1="386" y1="40" x2="555" y2="40" stroke="#39ff14" stroke-width="2"/>
        <line x1="525" y1="160" x2="555" y2="160" stroke="#39ff14" stroke-width="2"/>
      </svg>`,
    },
    nodes: [
      // Case 1: A=0, B=0, Cin=0 → SUM=0, COUT=0   (cx = -420)
      { id: 'c1_A',    type: 'INPUT',     x: -480, y: 400, fixedValue: 0, label: 'A' },
      { id: 'c1_B',    type: 'INPUT',     x: -420, y: 440, fixedValue: 0, label: 'B' },
      { id: 'c1_Cin',  type: 'INPUT',     x: -360, y: 400, fixedValue: 0, label: 'Cin' },
      { id: 'c1_xor1', type: 'GATE_SLOT', x: -470, y: 200, linkedGroup: 'xor1' },
      { id: 'c1_and1', type: 'GATE_SLOT', x: -370, y: 200, linkedGroup: 'and1' },
      { id: 'c1_xor2', type: 'GATE_SLOT', x: -480, y: 10,  linkedGroup: 'xor2' },
      { id: 'c1_and2', type: 'GATE_SLOT', x: -390, y: 10,  linkedGroup: 'and2' },
      { id: 'c1_or',   type: 'GATE_SLOT', x: -370, y: -170, linkedGroup: 'or1' },
      { id: 'c1_S',    type: 'OUTPUT',    x: -480, y: -340, targetValue: 0, label: 'SUM' },
      { id: 'c1_CO',   type: 'OUTPUT',    x: -370, y: -340, targetValue: 0, label: 'COUT' },
      // Case 2: A=1, B=0, Cin=1 → SUM=0, COUT=1   (cx = -140)
      { id: 'c2_A',    type: 'INPUT',     x: -200, y: 400, fixedValue: 1, label: 'A' },
      { id: 'c2_B',    type: 'INPUT',     x: -140, y: 440, fixedValue: 0, label: 'B' },
      { id: 'c2_Cin',  type: 'INPUT',     x: -80,  y: 400, fixedValue: 1, label: 'Cin' },
      { id: 'c2_xor1', type: 'GATE_SLOT', x: -190, y: 200, linkedGroup: 'xor1' },
      { id: 'c2_and1', type: 'GATE_SLOT', x: -90,  y: 200, linkedGroup: 'and1' },
      { id: 'c2_xor2', type: 'GATE_SLOT', x: -200, y: 10,  linkedGroup: 'xor2' },
      { id: 'c2_and2', type: 'GATE_SLOT', x: -110, y: 10,  linkedGroup: 'and2' },
      { id: 'c2_or',   type: 'GATE_SLOT', x: -90,  y: -170, linkedGroup: 'or1' },
      { id: 'c2_S',    type: 'OUTPUT',    x: -200, y: -340, targetValue: 0, label: 'SUM' },
      { id: 'c2_CO',   type: 'OUTPUT',    x: -90,  y: -340, targetValue: 1, label: 'COUT' },
      // Case 3: A=0, B=1, Cin=0 → SUM=1, COUT=0   (cx = 140)
      { id: 'c3_A',    type: 'INPUT',     x: 80,   y: 400, fixedValue: 0, label: 'A' },
      { id: 'c3_B',    type: 'INPUT',     x: 140,  y: 440, fixedValue: 1, label: 'B' },
      { id: 'c3_Cin',  type: 'INPUT',     x: 200,  y: 400, fixedValue: 0, label: 'Cin' },
      { id: 'c3_xor1', type: 'GATE_SLOT', x: 90,   y: 200, linkedGroup: 'xor1' },
      { id: 'c3_and1', type: 'GATE_SLOT', x: 190,  y: 200, linkedGroup: 'and1' },
      { id: 'c3_xor2', type: 'GATE_SLOT', x: 80,   y: 10,  linkedGroup: 'xor2' },
      { id: 'c3_and2', type: 'GATE_SLOT', x: 170,  y: 10,  linkedGroup: 'and2' },
      { id: 'c3_or',   type: 'GATE_SLOT', x: 190,  y: -170, linkedGroup: 'or1' },
      { id: 'c3_S',    type: 'OUTPUT',    x: 80,   y: -340, targetValue: 1, label: 'SUM' },
      { id: 'c3_CO',   type: 'OUTPUT',    x: 190,  y: -340, targetValue: 0, label: 'COUT' },
      // Case 4: A=1, B=1, Cin=1 → SUM=1, COUT=1   (cx = 420)
      { id: 'c4_A',    type: 'INPUT',     x: 360,  y: 400, fixedValue: 1, label: 'A' },
      { id: 'c4_B',    type: 'INPUT',     x: 420,  y: 440, fixedValue: 1, label: 'B' },
      { id: 'c4_Cin',  type: 'INPUT',     x: 480,  y: 400, fixedValue: 1, label: 'Cin' },
      { id: 'c4_xor1', type: 'GATE_SLOT', x: 370,  y: 200, linkedGroup: 'xor1' },
      { id: 'c4_and1', type: 'GATE_SLOT', x: 470,  y: 200, linkedGroup: 'and1' },
      { id: 'c4_xor2', type: 'GATE_SLOT', x: 360,  y: 10,  linkedGroup: 'xor2' },
      { id: 'c4_and2', type: 'GATE_SLOT', x: 450,  y: 10,  linkedGroup: 'and2' },
      { id: 'c4_or',   type: 'GATE_SLOT', x: 470,  y: -170, linkedGroup: 'or1' },
      { id: 'c4_S',    type: 'OUTPUT',    x: 360,  y: -340, targetValue: 1, label: 'SUM' },
      { id: 'c4_CO',   type: 'OUTPUT',    x: 470,  y: -340, targetValue: 1, label: 'COUT' },
    ],
    wires: [
      // Case 1: A,B→XOR1; XOR1,Cin→XOR2→SUM; A,B→AND1; Cin,XOR1→AND2; AND1,AND2→OR→COUT
      { id: 'c1w1',  sourceId: 'c1_A',    targetId: 'c1_xor1', targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_B',    targetId: 'c1_xor1', targetInputIndex: 1 },
      { id: 'c1w3',  sourceId: 'c1_xor1', targetId: 'c1_xor2', targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_Cin',  targetId: 'c1_xor2', targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_A',    targetId: 'c1_and1', targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_B',    targetId: 'c1_and1', targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_Cin',  targetId: 'c1_and2', targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_xor1', targetId: 'c1_and2', targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_and1', targetId: 'c1_or',   targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_and2', targetId: 'c1_or',   targetInputIndex: 1 },
      { id: 'c1w11', sourceId: 'c1_xor2', targetId: 'c1_S',    targetInputIndex: 0 },
      { id: 'c1w12', sourceId: 'c1_or',   targetId: 'c1_CO',   targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_A',    targetId: 'c2_xor1', targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_B',    targetId: 'c2_xor1', targetInputIndex: 1 },
      { id: 'c2w3',  sourceId: 'c2_xor1', targetId: 'c2_xor2', targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_Cin',  targetId: 'c2_xor2', targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_A',    targetId: 'c2_and1', targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_B',    targetId: 'c2_and1', targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_Cin',  targetId: 'c2_and2', targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_xor1', targetId: 'c2_and2', targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_and1', targetId: 'c2_or',   targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_and2', targetId: 'c2_or',   targetInputIndex: 1 },
      { id: 'c2w11', sourceId: 'c2_xor2', targetId: 'c2_S',    targetInputIndex: 0 },
      { id: 'c2w12', sourceId: 'c2_or',   targetId: 'c2_CO',   targetInputIndex: 0 },
      // Case 3
      { id: 'c3w1',  sourceId: 'c3_A',    targetId: 'c3_xor1', targetInputIndex: 0 },
      { id: 'c3w2',  sourceId: 'c3_B',    targetId: 'c3_xor1', targetInputIndex: 1 },
      { id: 'c3w3',  sourceId: 'c3_xor1', targetId: 'c3_xor2', targetInputIndex: 0 },
      { id: 'c3w4',  sourceId: 'c3_Cin',  targetId: 'c3_xor2', targetInputIndex: 1 },
      { id: 'c3w5',  sourceId: 'c3_A',    targetId: 'c3_and1', targetInputIndex: 0 },
      { id: 'c3w6',  sourceId: 'c3_B',    targetId: 'c3_and1', targetInputIndex: 1 },
      { id: 'c3w7',  sourceId: 'c3_Cin',  targetId: 'c3_and2', targetInputIndex: 0 },
      { id: 'c3w8',  sourceId: 'c3_xor1', targetId: 'c3_and2', targetInputIndex: 1 },
      { id: 'c3w9',  sourceId: 'c3_and1', targetId: 'c3_or',   targetInputIndex: 0 },
      { id: 'c3w10', sourceId: 'c3_and2', targetId: 'c3_or',   targetInputIndex: 1 },
      { id: 'c3w11', sourceId: 'c3_xor2', targetId: 'c3_S',    targetInputIndex: 0 },
      { id: 'c3w12', sourceId: 'c3_or',   targetId: 'c3_CO',   targetInputIndex: 0 },
      // Case 4
      { id: 'c4w1',  sourceId: 'c4_A',    targetId: 'c4_xor1', targetInputIndex: 0 },
      { id: 'c4w2',  sourceId: 'c4_B',    targetId: 'c4_xor1', targetInputIndex: 1 },
      { id: 'c4w3',  sourceId: 'c4_xor1', targetId: 'c4_xor2', targetInputIndex: 0 },
      { id: 'c4w4',  sourceId: 'c4_Cin',  targetId: 'c4_xor2', targetInputIndex: 1 },
      { id: 'c4w5',  sourceId: 'c4_A',    targetId: 'c4_and1', targetInputIndex: 0 },
      { id: 'c4w6',  sourceId: 'c4_B',    targetId: 'c4_and1', targetInputIndex: 1 },
      { id: 'c4w7',  sourceId: 'c4_Cin',  targetId: 'c4_and2', targetInputIndex: 0 },
      { id: 'c4w8',  sourceId: 'c4_xor1', targetId: 'c4_and2', targetInputIndex: 1 },
      { id: 'c4w9',  sourceId: 'c4_and1', targetId: 'c4_or',   targetInputIndex: 0 },
      { id: 'c4w10', sourceId: 'c4_and2', targetId: 'c4_or',   targetInputIndex: 1 },
      { id: 'c4w11', sourceId: 'c4_xor2', targetId: 'c4_S',    targetInputIndex: 0 },
      { id: 'c4w12', sourceId: 'c4_or',   targetId: 'c4_CO',   targetInputIndex: 0 },
    ],
  },

  // L27 — MAJORITY & PARITY DUAL OUTPUT
  // A=1,B=1,C=0: MAJ path: AND_AB=1,AND_BC=0,AND_AC=0,OR1=1,OR2=1 → MAJ=1
  //              PAR path: XOR(1,1)=0, XOR(0,0)=0 → PAR=0
  {
    id: 27, name: 'MAJORITY & PARITY', difficulty: 'Advanced Circuits',
    description: 'Majority & Parity — two circuits from the same 3 inputs: MAJ=1 if at least 2 inputs are ON (majority vote), PAR=1 if an odd number of inputs are ON (parity).',
    instruction: 'Two parallel circuits from the same inputs:\nMAJ = majority (AND+OR), PAR = parity (XOR)\nFind the 7 gates',
    hint: 'Majority: three ANDs (AB,BC,AC) then two ORs. Parity: two XORs in a chain. Seven gates total.',
    truthTable: {
      inputs: ['A','B','C'], outputs: ['MAJ','PAR'],
      rows: [
        [[0,0,0],[0,0]], [[0,0,1],[0,1]], [[0,1,0],[0,1]], [[0,1,1],[1,0]],
        [[1,0,0],[0,1]], [[1,0,1],[1,0]], [[1,1,0],[1,0]], [[1,1,1],[1,1]],
      ],
    },
    solution: {
      gatesUsed: ['AND', 'AND', 'AND', 'OR', 'OR', 'XOR', 'XOR'],
      explanation: 'Majority & Parity — two independent computations from the same inputs. MAJ: three ANDs check each pair (AB,BC,AC), two ORs merge — if at least one pair is ON, MAJ=1. PAR: two XORs in a chain — XOR(A,B) then XOR with C, computes odd parity.',
      blockSvg: `<svg viewBox="0 0 420 200" width="500" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A</text><line x1="28" y1="47" x2="90" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B</text><line x1="28" y1="97" x2="90" y2="97" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">C</text><line x1="28" y1="147" x2="90" y2="147" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="90" y="22" width="220" height="155" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="200" y="82" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">MAJORITY</text>
        <text x="200" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">& PARITY</text>
        <line x1="310" y1="65" x2="365" y2="65" stroke="#c8d8f0" stroke-width="2.5"/><text x="370" y="70" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">MAJ</text>
        <line x1="310" y1="135" x2="365" y2="135" stroke="#c8d8f0" stroke-width="2.5"/><text x="370" y="140" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">PAR</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 560 280" width="680" height="340">
        <text x="8" y="52" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A</text>
        <text x="8" y="142" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B</text>
        <text x="8" y="232" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">C</text>
        <text x="90" y="16" fill="#4a6080" font-size="10" font-family="monospace">— MAJ path —</text>
        <rect x="100" y="28" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="133" y="48" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="100" y="78" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="133" y="98" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="100" y="128" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="133" y="148" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="220" y="50" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="253" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="330" y="80" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="363" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">OR</text>
        <text x="90" y="196" fill="#4a6080" font-size="10" font-family="monospace">— PAR path —</text>
        <rect x="100" y="208" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="133" y="228" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="240" y="218" width="66" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="273" y="238" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">XOR</text>
        <text x="480" y="100" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">MAJ</text>
        <text x="480" y="238" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">PAR</text>
        <line x1="396" y1="95" x2="470" y2="95" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="306" y1="233" x2="470" y2="233" stroke="#39ff14" stroke-width="1.5"/>
      </svg>`,
    },
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

  // L28 — 4:1 MUX TREE (2 cases, vertical bottom-to-top)
  // Solution: NOT,NOT, AND×6, OR×3 (or XOR for OR slots)
  // Case 1: D0=0,D1=1,D2=0,D3=1,S0=1,S1=0 → Y=1 (selects D1)
  // Case 2: D0=1,D1=0,D2=1,D3=0,S0=0,S1=1 → Y=1 (selects D2)
  {
    id: 28, name: '4:1 MUX TREE', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: '4:1 MUX Tree — multiplexer tree: selects one of 4 data inputs using 2 control bits (S0,S1). Built from 3 cascaded 2:1 MUXes. Large multiplexers are the basis for data routing in processors, memories, and FPGAs.',
    instruction: '4:1 MUX tree: three cascaded 2:1 MUX units\nFind the 11 gates that produce correct results in both cases',
    hint: 'NOT for inverters. AND gates select data×control. OR merges each MUX pair. Three MUX stages: lower, upper, final.',
    truthTable: {
      inputs: ['D0','D1','D2','D3','S1','S0'], outputs: ['Y'],
      rows: [
        [[0,0,0,0,0,0],[0]], [[0,0,0,0,0,1],[0]], [[0,0,0,0,1,0],[0]], [[0,0,0,0,1,1],[0]],
        [[1,0,0,0,0,0],[1]], [[0,1,0,0,0,1],[1]], [[0,0,1,0,1,0],[1]], [[0,0,0,1,1,1],[1]],
        [[1,1,0,0,0,0],[1]], [[1,1,0,0,0,1],[1]], [[0,0,1,1,1,0],[1]], [[0,0,1,1,1,1],[1]],
        [[1,1,1,1,0,0],[1]], [[1,1,1,1,0,1],[1]], [[1,1,1,1,1,0],[1]], [[1,1,1,1,1,1],[1]],
      ],
    },
    solution: {
      gatesUsed: ['NOT', 'NOT', 'AND', 'AND', 'OR', 'AND', 'AND', 'OR', 'AND', 'AND', 'OR'],
      explanation: '4:1 MUX Tree — multiplexer tree: selects one of 4 data inputs using 2 control bits (S0,S1). Built from 3 cascaded 2:1 MUXes. Large multiplexers are the basis for data routing in processors, memories, and FPGAs.',
      blockSvg: `<svg viewBox="0 0 480 220" width="560" height="260"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D0</text><line x1="38" y1="37" x2="90" y2="37" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="67" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D1</text><line x1="38" y1="62" x2="90" y2="62" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="97" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D2</text><line x1="38" y1="92" x2="90" y2="92" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="127" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D3</text><line x1="38" y1="122" x2="90" y2="122" stroke="#39ff14" stroke-width="2.5"/><text x="160" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">S0</text><line x1="160" y1="22" x2="160" y2="40" stroke="#39ff14" stroke-width="2.5"/><text x="220" y="16" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">S1</text><line x1="220" y1="22" x2="220" y2="40" stroke="#39ff14" stroke-width="2.5"/><rect x="90" y="22" width="240" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="210" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">4:1 MUX</text><text x="210" y="115" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#4a6080">3×(2:1 MUX)</text><line x1="330" y1="95" x2="400" y2="95" stroke="#c8d8f0" stroke-width="2.5"/><text x="408" y="100" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Y</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 700 400" width="760" height="435"><text x="8" y="42" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D0</text><text x="8" y="92" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D1</text><text x="8" y="182" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D2</text><text x="8" y="232" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D3</text><text x="8" y="312" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">S0</text><text x="8" y="372" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">S1</text><rect x="100" y="298" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="130" y="316" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="100" y="358" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="130" y="376" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">NOT</text><rect x="230" y="26" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="260" y="44" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="230" y="72" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="260" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="370" y="50" width="55" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="397" y="68" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">OR</text><rect x="230" y="166" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="260" y="184" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="230" y="216" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="260" y="234" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="370" y="192" width="55" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="397" y="210" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">OR</text><rect x="490" y="90" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="520" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="490" y="160" width="60" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="520" y="178" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">AND</text><rect x="610" y="126" width="55" height="26" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="637" y="144" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">OR</text><text x="680" y="144" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Y</text><line x1="35" y1="38" x2="230" y2="34" stroke="#39ff14" stroke-width="1.5"/><line x1="160" y1="311" x2="230" y2="46" stroke="#39ff14" stroke-width="1.5"/><line x1="35" y1="88" x2="230" y2="80" stroke="#39ff14" stroke-width="1.5"/><polyline points="35,308 100,308" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="75,308 75,90 230,90" stroke="#39ff14" stroke-width="1.5" fill="none"/><line x1="290" y1="39" x2="370" y2="56" stroke="#39ff14" stroke-width="1.5"/><line x1="290" y1="85" x2="370" y2="70" stroke="#39ff14" stroke-width="1.5"/><line x1="35" y1="178" x2="230" y2="174" stroke="#39ff14" stroke-width="1.5"/><line x1="160" y1="311" x2="230" y2="186" stroke="#39ff14" stroke-width="1.5"/><line x1="35" y1="228" x2="230" y2="224" stroke="#39ff14" stroke-width="1.5"/><line x1="75" y1="308" x2="230" y2="234" stroke="#39ff14" stroke-width="1.5"/><line x1="290" y1="179" x2="370" y2="198" stroke="#39ff14" stroke-width="1.5"/><line x1="290" y1="229" x2="370" y2="212" stroke="#39ff14" stroke-width="1.5"/><line x1="425" y1="63" x2="490" y2="98" stroke="#39ff14" stroke-width="1.5"/><line x1="160" y1="371" x2="490" y2="110" stroke="#39ff14" stroke-width="1.5"/><line x1="425" y1="205" x2="490" y2="168" stroke="#39ff14" stroke-width="1.5"/><polyline points="35,368 100,368" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="85,368 85,180 490,180" stroke="#39ff14" stroke-width="1.5" fill="none"/><line x1="550" y1="103" x2="610" y2="133" stroke="#39ff14" stroke-width="1.5"/><line x1="550" y1="173" x2="610" y2="146" stroke="#39ff14" stroke-width="1.5"/><line x1="665" y1="139" x2="675" y2="139" stroke="#39ff14" stroke-width="1.5"/></svg>`,
    },
    nodes: [
      // Case 1: D0=0,D1=1,D2=0,D3=1,S0=1,S1=0 → Y=1  (cx = -480)
      { id: 'c1_D0',  type: 'INPUT',     x: -610, y: 650, fixedValue: 0, label: 'D0' },
      { id: 'c1_D1',  type: 'INPUT',     x: -550, y: 690, fixedValue: 1, label: 'D1' },
      { id: 'c1_D2',  type: 'INPUT',     x: -480, y: 650, fixedValue: 0, label: 'D2' },
      { id: 'c1_D3',  type: 'INPUT',     x: -420, y: 690, fixedValue: 1, label: 'D3' },
      { id: 'c1_S0',  type: 'INPUT',     x: -350, y: 650, fixedValue: 1, label: 'S0' },
      { id: 'c1_S1',  type: 'INPUT',     x: -350, y: 730, fixedValue: 0, label: 'S1' },
      // NOT inverters
      { id: 'c1_ns0', type: 'GATE_SLOT', x: -350, y: 500, linkedGroup: 'ns0' },
      { id: 'c1_ns1', type: 'GATE_SLOT', x: -350, y: 410, linkedGroup: 'ns1' },
      // Lower MUX: D0,D1 via S0
      { id: 'c1_a0',  type: 'GATE_SLOT', x: -610, y: 400, linkedGroup: 'a0' },
      { id: 'c1_a1',  type: 'GATE_SLOT', x: -550, y: 400, linkedGroup: 'a1' },
      { id: 'c1_lo',  type: 'GATE_SLOT', x: -580, y: 260, linkedGroup: 'lo' },
      // Upper MUX: D2,D3 via S0
      { id: 'c1_a2',  type: 'GATE_SLOT', x: -480, y: 400, linkedGroup: 'a2' },
      { id: 'c1_a3',  type: 'GATE_SLOT', x: -420, y: 400, linkedGroup: 'a3' },
      { id: 'c1_hi',  type: 'GATE_SLOT', x: -450, y: 260, linkedGroup: 'hi' },
      // Final MUX: lo,hi via S1
      { id: 'c1_fl',  type: 'GATE_SLOT', x: -550, y: 120, linkedGroup: 'fl' },
      { id: 'c1_fh',  type: 'GATE_SLOT', x: -450, y: 120, linkedGroup: 'fh' },
      { id: 'c1_out', type: 'GATE_SLOT', x: -500, y: -20, linkedGroup: 'mout' },
      // Output
      { id: 'c1_Y',   type: 'OUTPUT',    x: -500, y: -180, targetValue: 1, label: 'Y' },

      // Case 2: D0=1,D1=0,D2=1,D3=0,S0=0,S1=1 → Y=1  (cx = 480)
      { id: 'c2_D0',  type: 'INPUT',     x: 350, y: 650, fixedValue: 1, label: 'D0' },
      { id: 'c2_D1',  type: 'INPUT',     x: 410, y: 690, fixedValue: 0, label: 'D1' },
      { id: 'c2_D2',  type: 'INPUT',     x: 480, y: 650, fixedValue: 1, label: 'D2' },
      { id: 'c2_D3',  type: 'INPUT',     x: 540, y: 690, fixedValue: 0, label: 'D3' },
      { id: 'c2_S0',  type: 'INPUT',     x: 610, y: 650, fixedValue: 0, label: 'S0' },
      { id: 'c2_S1',  type: 'INPUT',     x: 610, y: 730, fixedValue: 1, label: 'S1' },
      // NOT inverters
      { id: 'c2_ns0', type: 'GATE_SLOT', x: 610, y: 500, linkedGroup: 'ns0' },
      { id: 'c2_ns1', type: 'GATE_SLOT', x: 610, y: 410, linkedGroup: 'ns1' },
      // Lower MUX
      { id: 'c2_a0',  type: 'GATE_SLOT', x: 350, y: 400, linkedGroup: 'a0' },
      { id: 'c2_a1',  type: 'GATE_SLOT', x: 410, y: 400, linkedGroup: 'a1' },
      { id: 'c2_lo',  type: 'GATE_SLOT', x: 380, y: 260, linkedGroup: 'lo' },
      // Upper MUX
      { id: 'c2_a2',  type: 'GATE_SLOT', x: 480, y: 400, linkedGroup: 'a2' },
      { id: 'c2_a3',  type: 'GATE_SLOT', x: 540, y: 400, linkedGroup: 'a3' },
      { id: 'c2_hi',  type: 'GATE_SLOT', x: 510, y: 260, linkedGroup: 'hi' },
      // Final MUX
      { id: 'c2_fl',  type: 'GATE_SLOT', x: 410, y: 120, linkedGroup: 'fl' },
      { id: 'c2_fh',  type: 'GATE_SLOT', x: 510, y: 120, linkedGroup: 'fh' },
      { id: 'c2_out', type: 'GATE_SLOT', x: 460, y: -20, linkedGroup: 'mout' },
      // Output
      { id: 'c2_Y',   type: 'OUTPUT',    x: 460, y: -180, targetValue: 1, label: 'Y' },
    ],
    wires: [
      // Case 1
      { id: 'c1w1',  sourceId: 'c1_S0',  targetId: 'c1_ns0', targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_S1',  targetId: 'c1_ns1', targetInputIndex: 0 },
      { id: 'c1w3',  sourceId: 'c1_D0',  targetId: 'c1_a0',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_ns0', targetId: 'c1_a0',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_D1',  targetId: 'c1_a1',  targetInputIndex: 0 },
      { id: 'c1w6',  sourceId: 'c1_S0',  targetId: 'c1_a1',  targetInputIndex: 1 },
      { id: 'c1w7',  sourceId: 'c1_a0',  targetId: 'c1_lo',  targetInputIndex: 0 },
      { id: 'c1w8',  sourceId: 'c1_a1',  targetId: 'c1_lo',  targetInputIndex: 1 },
      { id: 'c1w9',  sourceId: 'c1_D2',  targetId: 'c1_a2',  targetInputIndex: 0 },
      { id: 'c1w10', sourceId: 'c1_ns0', targetId: 'c1_a2',  targetInputIndex: 1 },
      { id: 'c1w11', sourceId: 'c1_D3',  targetId: 'c1_a3',  targetInputIndex: 0 },
      { id: 'c1w12', sourceId: 'c1_S0',  targetId: 'c1_a3',  targetInputIndex: 1 },
      { id: 'c1w13', sourceId: 'c1_a2',  targetId: 'c1_hi',  targetInputIndex: 0 },
      { id: 'c1w14', sourceId: 'c1_a3',  targetId: 'c1_hi',  targetInputIndex: 1 },
      { id: 'c1w15', sourceId: 'c1_lo',  targetId: 'c1_fl',  targetInputIndex: 0 },
      { id: 'c1w16', sourceId: 'c1_ns1', targetId: 'c1_fl',  targetInputIndex: 1 },
      { id: 'c1w17', sourceId: 'c1_hi',  targetId: 'c1_fh',  targetInputIndex: 0 },
      { id: 'c1w18', sourceId: 'c1_S1',  targetId: 'c1_fh',  targetInputIndex: 1 },
      { id: 'c1w19', sourceId: 'c1_fl',  targetId: 'c1_out', targetInputIndex: 0 },
      { id: 'c1w20', sourceId: 'c1_fh',  targetId: 'c1_out', targetInputIndex: 1 },
      { id: 'c1w21', sourceId: 'c1_out', targetId: 'c1_Y',   targetInputIndex: 0 },
      // Case 2
      { id: 'c2w1',  sourceId: 'c2_S0',  targetId: 'c2_ns0', targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_S1',  targetId: 'c2_ns1', targetInputIndex: 0 },
      { id: 'c2w3',  sourceId: 'c2_D0',  targetId: 'c2_a0',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_ns0', targetId: 'c2_a0',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_D1',  targetId: 'c2_a1',  targetInputIndex: 0 },
      { id: 'c2w6',  sourceId: 'c2_S0',  targetId: 'c2_a1',  targetInputIndex: 1 },
      { id: 'c2w7',  sourceId: 'c2_a0',  targetId: 'c2_lo',  targetInputIndex: 0 },
      { id: 'c2w8',  sourceId: 'c2_a1',  targetId: 'c2_lo',  targetInputIndex: 1 },
      { id: 'c2w9',  sourceId: 'c2_D2',  targetId: 'c2_a2',  targetInputIndex: 0 },
      { id: 'c2w10', sourceId: 'c2_ns0', targetId: 'c2_a2',  targetInputIndex: 1 },
      { id: 'c2w11', sourceId: 'c2_D3',  targetId: 'c2_a3',  targetInputIndex: 0 },
      { id: 'c2w12', sourceId: 'c2_S0',  targetId: 'c2_a3',  targetInputIndex: 1 },
      { id: 'c2w13', sourceId: 'c2_a2',  targetId: 'c2_hi',  targetInputIndex: 0 },
      { id: 'c2w14', sourceId: 'c2_a3',  targetId: 'c2_hi',  targetInputIndex: 1 },
      { id: 'c2w15', sourceId: 'c2_lo',  targetId: 'c2_fl',  targetInputIndex: 0 },
      { id: 'c2w16', sourceId: 'c2_ns1', targetId: 'c2_fl',  targetInputIndex: 1 },
      { id: 'c2w17', sourceId: 'c2_hi',  targetId: 'c2_fh',  targetInputIndex: 0 },
      { id: 'c2w18', sourceId: 'c2_S1',  targetId: 'c2_fh',  targetInputIndex: 1 },
      { id: 'c2w19', sourceId: 'c2_fl',  targetId: 'c2_out', targetInputIndex: 0 },
      { id: 'c2w20', sourceId: 'c2_fh',  targetId: 'c2_out', targetInputIndex: 1 },
      { id: 'c2w21', sourceId: 'c2_out', targetId: 'c2_Y',   targetInputIndex: 0 },
    ],
  },

  // L29 — 2-BIT RIPPLE CARRY ADDER (2 cases, vertical bottom-to-top)
  // Unique solution: HA=XOR,AND; FA=XOR,XOR,AND,AND,OR
  // Case 1: A1=1,B1=0,A0=1,B0=1 → S1=0,S0=0,COUT=1  (11+01=100)
  // Case 2: A1=0,B1=1,A0=1,B0=0 → S1=1,S0=1,COUT=0  (01+10=011)
  {
    id: 29, name: '2-BIT RIPPLE CARRY ADDER', difficulty: 'Advanced Circuits',
    layout: 'vertical',
    description: '2-Bit Ripple Carry Adder — half adder (HA) handles bit 0, and full adder (FA) handles bit 1 with the carry from HA. This chaining is the basis for all multi-bit adders in processors.',
    instruction: '2-bit adder: HA for bit 0, FA for bit 1 with carry\nFind the seven gates that produce correct results in both cases',
    hint: 'HA: XOR for S0, AND for C0. FA: two XORs for S1, two ANDs + OR for COUT. C0 feeds into FA.',
    truthTable: {
      inputs: ['A1','B1','A0','B0'], outputs: ['S1','S0','COUT'],
      rows: [
        [[0,0,0,0],[0,0,0]], [[0,0,0,1],[0,1,0]], [[0,0,1,0],[0,1,0]], [[0,0,1,1],[1,0,0]],
        [[0,1,0,0],[0,1,0]], [[0,1,0,1],[1,0,0]], [[0,1,1,0],[1,0,0]], [[0,1,1,1],[1,1,0]],
        [[1,0,0,0],[0,1,0]], [[1,0,0,1],[1,0,0]], [[1,0,1,0],[1,0,0]], [[1,0,1,1],[1,1,0]],
        [[1,1,0,0],[1,0,0]], [[1,1,0,1],[1,1,0]], [[1,1,1,0],[1,1,0]], [[1,1,1,1],[0,0,1]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'AND', 'XOR', 'XOR', 'AND', 'AND', 'OR'],
      explanation: '2-Bit Ripple Carry Adder — half adder (HA) handles bit 0, and full adder (FA) handles bit 1 with the carry from HA. This chaining is the basis for all multi-bit adders in processors.',
      blockSvg: `<svg viewBox="0 0 480 200" width="560" height="235"><text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A1</text><line x1="38" y1="37" x2="95" y2="37" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B1</text><line x1="38" y1="67" x2="95" y2="67" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="117" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">A0</text><line x1="38" y1="112" x2="95" y2="112" stroke="#39ff14" stroke-width="2.5"/><text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">B0</text><line x1="38" y1="147" x2="95" y2="147" stroke="#39ff14" stroke-width="2.5"/><rect x="95" y="15" width="260" height="160" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/><text x="225" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">2-BIT RIPPLE</text><text x="225" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">CARRY ADDER</text><line x1="355" y1="45" x2="420" y2="45" stroke="#c8d8f0" stroke-width="2.5"/><text x="428" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">S1</text><line x1="355" y1="95" x2="420" y2="95" stroke="#c8d8f0" stroke-width="2.5"/><text x="428" y="100" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">S0</text><line x1="355" y1="145" x2="420" y2="145" stroke="#c8d8f0" stroke-width="2.5"/><text x="425" y="150" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">COUT</text></svg>`,
      circuitSvg: `<svg viewBox="0 0 700 340" width="760" height="370"><text x="8" y="32" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">A1</text><text x="8" y="72" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B1</text><text x="8" y="232" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">A0</text><text x="8" y="272" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B0</text><text x="80" y="210" font-family="JetBrains Mono,monospace" font-size="11" fill="#4a6080">— HA —</text><text x="200" y="10" font-family="JetBrains Mono,monospace" font-size="11" fill="#4a6080">— FA —</text><rect x="110" y="222" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="145" y="242" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="110" y="280" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="145" y="300" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">AND</text><rect x="220" y="18" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="255" y="38" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="220" y="80" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="255" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">AND</text><rect x="380" y="45" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="415" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">XOR</text><rect x="380" y="110" width="70" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="415" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">AND</text><rect x="520" y="90" width="60" height="30" rx="4" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1.5"/><text x="550" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">OR</text><text x="635" y="65" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">S1</text><text x="635" y="242" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">S0</text><text x="630" y="110" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">COUT</text><polyline points="35,228 70,228 70,230 110,230" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="70,228 70,288 110,288" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="35,268 90,268 90,244 110,244" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="90,268 90,302 110,302" stroke="#39ff14" stroke-width="1.5" fill="none"/><line x1="180" y1="237" x2="625" y2="237" stroke="#39ff14" stroke-width="1.5"/><polyline points="35,28 60,28 60,26 220,26" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="60,28 60,88 220,88" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="35,68 80,68 80,40 220,40" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="80,68 80,102 220,102" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="290,33 330,33 330,53 380,53" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="330,33 330,118 380,118" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="180,295 200,295 200,67 380,67" stroke="#39ff14" stroke-width="1.5" fill="none"/><polyline points="200,295 200,132 380,132" stroke="#39ff14" stroke-width="1.5" fill="none"/><line x1="290" y1="95" x2="520" y2="98" stroke="#39ff14" stroke-width="1.5"/><line x1="450" y1="125" x2="520" y2="112" stroke="#39ff14" stroke-width="1.5"/><line x1="450" y1="60" x2="625" y2="60" stroke="#39ff14" stroke-width="1.5"/><line x1="580" y1="105" x2="625" y2="105" stroke="#39ff14" stroke-width="1.5"/></svg>`,
    },
    nodes: [
      // Case 1: A1=1,B1=0,A0=1,B0=1 → S1=0,S0=0,COUT=1   (cx = -480)
      { id: 'c1_A1',    type: 'INPUT',     x: -590, y: 560, fixedValue: 1, label: 'A1' },
      { id: 'c1_B1',    type: 'INPUT',     x: -520, y: 610, fixedValue: 0, label: 'B1' },
      { id: 'c1_A0',    type: 'INPUT',     x: -440, y: 560, fixedValue: 1, label: 'A0' },
      { id: 'c1_B0',    type: 'INPUT',     x: -370, y: 610, fixedValue: 1, label: 'B0' },
      // HA
      { id: 'c1_xor0',  type: 'GATE_SLOT', x: -440, y: 370, linkedGroup: 'ha_xor' },
      { id: 'c1_and0',  type: 'GATE_SLOT', x: -370, y: 260, linkedGroup: 'ha_and' },
      // FA
      { id: 'c1_xor1a', type: 'GATE_SLOT', x: -590, y: 260, linkedGroup: 'fa_xor1' },
      { id: 'c1_and1a', type: 'GATE_SLOT', x: -520, y: 140, linkedGroup: 'fa_and1' },
      { id: 'c1_xor1b', type: 'GATE_SLOT', x: -590, y: 20,  linkedGroup: 'fa_xor2' },
      { id: 'c1_and1b', type: 'GATE_SLOT', x: -440, y: 20,  linkedGroup: 'fa_and2' },
      { id: 'c1_or1',   type: 'GATE_SLOT', x: -440, y: -100, linkedGroup: 'fa_or' },
      // Outputs
      { id: 'c1_S1',    type: 'OUTPUT',    x: -590, y: -240, targetValue: 0, label: 'S1' },
      { id: 'c1_S0',    type: 'OUTPUT',    x: -480, y: -240, targetValue: 0, label: 'S0' },
      { id: 'c1_COUT',  type: 'OUTPUT',    x: -370, y: -240, targetValue: 1, label: 'COUT' },

      // Case 2: A1=0,B1=1,A0=1,B0=0 → S1=1,S0=1,COUT=0   (cx = 480)
      { id: 'c2_A1',    type: 'INPUT',     x: 370, y: 560, fixedValue: 0, label: 'A1' },
      { id: 'c2_B1',    type: 'INPUT',     x: 440, y: 610, fixedValue: 1, label: 'B1' },
      { id: 'c2_A0',    type: 'INPUT',     x: 520, y: 560, fixedValue: 1, label: 'A0' },
      { id: 'c2_B0',    type: 'INPUT',     x: 590, y: 610, fixedValue: 0, label: 'B0' },
      // HA
      { id: 'c2_xor0',  type: 'GATE_SLOT', x: 520, y: 370, linkedGroup: 'ha_xor' },
      { id: 'c2_and0',  type: 'GATE_SLOT', x: 590, y: 260, linkedGroup: 'ha_and' },
      // FA
      { id: 'c2_xor1a', type: 'GATE_SLOT', x: 370, y: 260, linkedGroup: 'fa_xor1' },
      { id: 'c2_and1a', type: 'GATE_SLOT', x: 440, y: 140, linkedGroup: 'fa_and1' },
      { id: 'c2_xor1b', type: 'GATE_SLOT', x: 370, y: 20,  linkedGroup: 'fa_xor2' },
      { id: 'c2_and1b', type: 'GATE_SLOT', x: 520, y: 20,  linkedGroup: 'fa_and2' },
      { id: 'c2_or1',   type: 'GATE_SLOT', x: 520, y: -100, linkedGroup: 'fa_or' },
      // Outputs
      { id: 'c2_S1',    type: 'OUTPUT',    x: 370, y: -240, targetValue: 1, label: 'S1' },
      { id: 'c2_S0',    type: 'OUTPUT',    x: 480, y: -240, targetValue: 1, label: 'S0' },
      { id: 'c2_COUT',  type: 'OUTPUT',    x: 590, y: -240, targetValue: 0, label: 'COUT' },
    ],
    wires: [
      // Case 1 — HA
      { id: 'c1w1',  sourceId: 'c1_A0',    targetId: 'c1_xor0',  targetInputIndex: 0 },
      { id: 'c1w2',  sourceId: 'c1_B0',    targetId: 'c1_xor0',  targetInputIndex: 1 },
      { id: 'c1w3',  sourceId: 'c1_A0',    targetId: 'c1_and0',  targetInputIndex: 0 },
      { id: 'c1w4',  sourceId: 'c1_B0',    targetId: 'c1_and0',  targetInputIndex: 1 },
      { id: 'c1w5',  sourceId: 'c1_xor0',  targetId: 'c1_S0',    targetInputIndex: 0 },
      // Case 1 — FA
      { id: 'c1w6',  sourceId: 'c1_A1',    targetId: 'c1_xor1a', targetInputIndex: 0 },
      { id: 'c1w7',  sourceId: 'c1_B1',    targetId: 'c1_xor1a', targetInputIndex: 1 },
      { id: 'c1w8',  sourceId: 'c1_A1',    targetId: 'c1_and1a', targetInputIndex: 0 },
      { id: 'c1w9',  sourceId: 'c1_B1',    targetId: 'c1_and1a', targetInputIndex: 1 },
      { id: 'c1w10', sourceId: 'c1_xor1a', targetId: 'c1_xor1b', targetInputIndex: 0 },
      { id: 'c1w11', sourceId: 'c1_and0',  targetId: 'c1_xor1b', targetInputIndex: 1 },
      { id: 'c1w12', sourceId: 'c1_xor1a', targetId: 'c1_and1b', targetInputIndex: 0 },
      { id: 'c1w13', sourceId: 'c1_and0',  targetId: 'c1_and1b', targetInputIndex: 1 },
      { id: 'c1w14', sourceId: 'c1_and1a', targetId: 'c1_or1',   targetInputIndex: 0 },
      { id: 'c1w15', sourceId: 'c1_and1b', targetId: 'c1_or1',   targetInputIndex: 1 },
      { id: 'c1w16', sourceId: 'c1_xor1b', targetId: 'c1_S1',    targetInputIndex: 0 },
      { id: 'c1w17', sourceId: 'c1_or1',   targetId: 'c1_COUT',  targetInputIndex: 0 },
      // Case 2 — HA
      { id: 'c2w1',  sourceId: 'c2_A0',    targetId: 'c2_xor0',  targetInputIndex: 0 },
      { id: 'c2w2',  sourceId: 'c2_B0',    targetId: 'c2_xor0',  targetInputIndex: 1 },
      { id: 'c2w3',  sourceId: 'c2_A0',    targetId: 'c2_and0',  targetInputIndex: 0 },
      { id: 'c2w4',  sourceId: 'c2_B0',    targetId: 'c2_and0',  targetInputIndex: 1 },
      { id: 'c2w5',  sourceId: 'c2_xor0',  targetId: 'c2_S0',    targetInputIndex: 0 },
      // Case 2 — FA
      { id: 'c2w6',  sourceId: 'c2_A1',    targetId: 'c2_xor1a', targetInputIndex: 0 },
      { id: 'c2w7',  sourceId: 'c2_B1',    targetId: 'c2_xor1a', targetInputIndex: 1 },
      { id: 'c2w8',  sourceId: 'c2_A1',    targetId: 'c2_and1a', targetInputIndex: 0 },
      { id: 'c2w9',  sourceId: 'c2_B1',    targetId: 'c2_and1a', targetInputIndex: 1 },
      { id: 'c2w10', sourceId: 'c2_xor1a', targetId: 'c2_xor1b', targetInputIndex: 0 },
      { id: 'c2w11', sourceId: 'c2_and0',  targetId: 'c2_xor1b', targetInputIndex: 1 },
      { id: 'c2w12', sourceId: 'c2_xor1a', targetId: 'c2_and1b', targetInputIndex: 0 },
      { id: 'c2w13', sourceId: 'c2_and0',  targetId: 'c2_and1b', targetInputIndex: 1 },
      { id: 'c2w14', sourceId: 'c2_and1a', targetId: 'c2_or1',   targetInputIndex: 0 },
      { id: 'c2w15', sourceId: 'c2_and1b', targetId: 'c2_or1',   targetInputIndex: 1 },
      { id: 'c2w16', sourceId: 'c2_xor1b', targetId: 'c2_S1',    targetInputIndex: 0 },
      { id: 'c2w17', sourceId: 'c2_or1',   targetId: 'c2_COUT',  targetInputIndex: 0 },
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
    id: 30, name: 'LOGIC MATRIX', difficulty: 'Advanced Circuits',
    description: 'Logic Matrix — 5 inputs, 8 outputs, 12 gates in 3 layers. The ultimate combinational challenge — each gate can be a different type!',
    instruction: 'Logic matrix: 12 gates in 3 layers\nWork layer by layer from inputs to outputs\nEach gate can be a different type',
    hint: 'Layer 1 takes raw inputs. Layer 2 combines layer 1 outputs. Layer 3 produces final outputs. Start from outputs and trace backward.',
    truthTable: {
      inputs: ['A','B','C','D','E'], outputs: ['O1','O2','O3','O4','O5','O6','O7','O8'],
      rows: [
        [[0,0,0,0,0],[0,1,1,1,1,0,0,0]], [[0,0,0,0,1],[0,1,1,1,1,0,0,0]],
        [[0,0,0,1,0],[0,1,1,1,1,1,0,0]], [[0,0,0,1,1],[0,1,1,1,1,1,0,0]],
        [[0,0,1,0,0],[0,0,0,0,0,1,1,0]], [[0,0,1,0,1],[0,0,0,1,0,1,1,0]],
        [[0,0,1,1,0],[0,0,0,0,0,1,0,0]], [[0,0,1,1,1],[0,0,0,1,0,1,0,0]],
        [[0,1,0,0,0],[1,1,1,1,1,0,0,0]], [[0,1,0,0,1],[1,1,1,1,0,0,1,0]],
        [[0,1,0,1,0],[1,1,1,1,1,1,0,0]], [[0,1,0,1,1],[1,1,1,1,0,0,0,0]],
        [[0,1,1,0,0],[1,0,1,1,1,1,1,1]], [[0,1,1,0,1],[1,0,1,1,1,1,1,1]],
        [[0,1,1,1,0],[1,0,1,1,1,1,0,0]], [[0,1,1,1,1],[1,0,1,1,1,1,0,0]],
        [[1,0,0,0,0],[1,0,1,1,1,0,0,0]], [[1,0,0,0,1],[1,0,1,1,1,0,0,0]],
        [[1,0,0,1,0],[1,0,1,1,1,1,0,0]], [[1,0,0,1,1],[1,0,1,1,1,1,0,0]],
        [[1,0,1,0,0],[1,0,1,1,1,1,1,1]], [[1,0,1,0,1],[1,0,1,1,1,1,1,1]],
        [[1,0,1,1,0],[1,0,1,1,1,1,0,0]], [[1,0,1,1,1],[1,0,1,1,1,1,0,0]],
        [[1,1,0,0,0],[1,0,1,1,1,0,0,0]], [[1,1,0,0,1],[1,0,1,1,1,1,1,1]],
        [[1,1,0,1,0],[1,0,1,1,1,1,0,0]], [[1,1,0,1,1],[1,0,1,1,1,1,0,0]],
        [[1,1,1,0,0],[1,0,1,1,1,1,1,1]], [[1,1,1,0,1],[1,0,1,1,1,1,1,1]],
        [[1,1,1,1,0],[1,0,1,1,1,1,0,0]], [[1,1,1,1,1],[1,0,1,1,1,1,0,0]],
      ],
    },
    solution: {
      gatesUsed: ['OR', 'NOR', 'AND', 'OR', 'OR', 'NAND', 'NOR', 'OR', 'AND', 'XOR', 'NOR', 'AND'],
      explanation: 'Logic Matrix — 12 gates of 6 different types in 3 layers. Layer 1: OR,NOR,AND,OR process input pairs. Layer 2: OR,NAND,NOR combine. Layer 3: OR,AND,XOR,NOR,AND produce 8 outputs. This circuit requires systematic layer-by-layer reasoning.',
      blockSvg: `<svg viewBox="0 0 420 250" width="500" height="300">
        <text x="12" y="37" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">A</text><line x1="25" y1="32" x2="80" y2="32" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">B</text><line x1="25" y1="67" x2="80" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="107" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">C</text><line x1="25" y1="102" x2="80" y2="102" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D</text><line x1="25" y1="137" x2="80" y2="137" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="177" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">E</text><line x1="25" y1="172" x2="80" y2="172" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="80" y="12" width="230" height="180" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">LOGIC</text>
        <text x="195" y="115" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">MATRIX</text>
        <line x1="310" y1="30" x2="355" y2="30" stroke="#c8d8f0" stroke-width="2"/><text x="360" y="35" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#c8d8f0">O1..O8</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 600 300" width="720" height="360">
        <text x="8" y="38" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">A</text>
        <text x="8" y="88" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">B</text>
        <text x="8" y="138" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">C</text>
        <text x="8" y="188" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">D</text>
        <text x="8" y="238" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">E</text>
        <text x="90" y="16" fill="#4a6080" font-size="9" font-family="monospace">Layer 1</text>
        <text x="230" y="16" fill="#4a6080" font-size="9" font-family="monospace">Layer 2</text>
        <text x="380" y="16" fill="#4a6080" font-size="9" font-family="monospace">Layer 3</text>
        <rect x="90" y="24" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="118" y="40" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="90" y="64" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="118" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">NOR</text>
        <rect x="90" y="104" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="118" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="90" y="144" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="118" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="230" y="44" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="258" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="230" y="94" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="258" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" font-weight="bold" fill="#a0c8ff">NAND</text>
        <rect x="230" y="144" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="258" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">NOR</text>
        <rect x="380" y="24" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="408" y="40" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">OR</text>
        <rect x="380" y="64" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="408" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">AND</text>
        <rect x="380" y="104" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="408" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">XOR</text>
        <rect x="380" y="144" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="408" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">NOR</text>
        <rect x="380" y="184" width="56" height="24" rx="3" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="1"/><text x="408" y="200" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#a0c8ff">AND</text>
        <text x="510" y="40" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">O1..O8</text>
      </svg>`,
    },
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
  // L31–L34: Each practices a single FF type (D, T, SR, JK)
  // L35–L40: Combine multiple FFs — moderate complexity
  // ════════════════════════════════════════════════════════════

  // L31 — T FLIP-FLOP (Toggle)
  // T=1 → Q toggles from 0 to 1 on first STEP
  {
    id: 31, name: 'T FLIP-FLOP', difficulty: 'Flip-Flops',


    description: 'Input=1, Q starts at 1. Find the flip-flop that changes Q to 0 on the rising clock edge.',
    instruction: 'Select the correct flip-flop and click STEP',
    hint: 'Input=1, Q₀=1. D-FF captures 1 (Q stays 1). SR/JK do SET (Q stays 1). Only a toggle flip-flop will produce Q=0.',
    solution: {
      ffsUsed: ['T-FF'],
      explanation: 'T Flip-Flop — The T (Toggle) flip-flop inverts Q on every rising clock edge when T=1. When Q=1 and T=1, Q toggles to 0. All others (D, SR, JK) keep Q=1. Used to build counters and frequency dividers.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T</text>
        <line x1="28" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">T FLIP-FLOP</text>
        <line x1="290" y1="80" x2="350" y2="80" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 380 180" width="460" height="220">
        <text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T=1</text>
        <text x="18" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <text x="18" y="100" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">Q₀=1</text>
        <rect x="120" y="30" width="120" height="130" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="180" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <text x="310" y="100" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">Q=0</text>
        <line x1="52" y1="48" x2="120" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="50" y1="138" x2="120" y2="138" stroke="#ffcc00" stroke-width="2"/>
        <line x1="240" y1="95" x2="300" y2="95" stroke="#39ff14" stroke-width="2"/>
      </svg>`,
    },
    nodes: [
      { id: 'in_T',   type: 'INPUT',   x: 180, y: 400, fixedValue: 1, label: 'T' },
      { id: 'clk_1',  type: 'CLOCK',   x: 180, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 540, y: 460, initialQ: 1, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',  x: 900, y: 460, targetValue: 0, label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_T',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w2',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L32 — D FLIP-FLOP (Two parallel cases — only D-FF satisfies both)
  // Case 1: D=1, Q₀=0 → after STEP Q must be 1 (all FFs do this)
  // Case 2: D=0, Q₀=1 → after STEP Q must be 0 (only D-FF captures the 0)
  {
    id: 32, name: 'D FLIP-FLOP', difficulty: 'Flip-Flops',
    description: 'D Flip-Flop — The D (Data) flip-flop captures the value at input D on the rising clock edge. Two parallel cases — only one flip-flop satisfies both.',
    instruction: 'Select the flip-flop that satisfies both cases and click STEP',
    hint: 'Case 1: any flip-flop with input 1 gives Q=1. But Case 2: only a flip-flop that captures the input value (0) will reset Q from 1 to 0.',
    solution: {
      ffsUsed: ['D-FF'],
      explanation: 'D Flip-Flop — The D (Data) flip-flop captures the value at input D on the rising clock edge. D=1→Q=1, D=0→Q=0. It is the only flip-flop that always captures the input value — T toggles, SR and JK hold when input is 0.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text>
        <line x1="28" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">D FLIP-FLOP</text>
        <line x1="290" y1="80" x2="350" y2="80" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="85" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 420 310" width="510" height="380">
        <!-- Case 1 -->
        <text x="10" y="20" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">CASE 1: Q₀=0</text>
        <text x="18" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D=1</text>
        <rect x="120" y="30" width="120" height="100" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="180" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <text x="280" y="67" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">Q=1</text>
        <line x1="58" y1="58" x2="120" y2="58" stroke="#39ff14" stroke-width="2"/>
        <line x1="240" y1="62" x2="270" y2="62" stroke="#39ff14" stroke-width="2"/>
        <!-- Case 2 -->
        <text x="10" y="170" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">CASE 2: Q₀=1</text>
        <text x="18" y="212" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#ff4444">D=0</text>
        <rect x="120" y="180" width="120" height="100" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="180" y="235" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <text x="280" y="217" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#39ff14">Q=0</text>
        <line x1="58" y1="208" x2="120" y2="208" stroke="#ff4444" stroke-width="2"/>
        <line x1="240" y1="212" x2="270" y2="212" stroke="#39ff14" stroke-width="2"/>
      </svg>`,
    },
    nodes: [
      // Case 1: D=1, Q starts at 0 → target Q=1
      { id: 'c1_D',   type: 'INPUT',   x: 180, y: 300, fixedValue: 1, label: 'D' },
      { id: 'c1_clk', type: 'CLOCK',   x: 180, y: 400, value: 0,     label: null },
      { id: 'c1_ff',  type: 'FF_SLOT', ffType: null, x: 540, y: 350, linkedGroup: 'main', initialQ: 0, label: 'FF' },
      { id: 'c1_Q',   type: 'OUTPUT',  x: 900, y: 350, targetValue: 1, label: 'Q' },
      // Case 2: D=0, Q starts at 1 → target Q=0
      { id: 'c2_D',   type: 'INPUT',   x: 180, y: 530, fixedValue: 0, label: 'D' },
      { id: 'c2_clk', type: 'CLOCK',   x: 180, y: 630, value: 0,     label: null },
      { id: 'c2_ff',  type: 'FF_SLOT', ffType: null, x: 540, y: 580, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c2_Q',   type: 'OUTPUT',  x: 900, y: 580, targetValue: 0, label: 'Q' },
    ],
    wires: [
      // Case 1 wiring
      { id: 'c1_w1',   sourceId: 'c1_D',   targetId: 'c1_ff', targetInputIndex: 0 },
      { id: 'c1_wclk', sourceId: 'c1_clk', targetId: 'c1_ff', targetInputIndex: 1, isClockWire: true },
      { id: 'c1_w2',   sourceId: 'c1_ff',  targetId: 'c1_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 2 wiring
      { id: 'c2_w1',   sourceId: 'c2_D',   targetId: 'c2_ff', targetInputIndex: 0 },
      { id: 'c2_wclk', sourceId: 'c2_clk', targetId: 'c2_ff', targetInputIndex: 1, isClockWire: true },
      { id: 'c2_w2',   sourceId: 'c2_ff',  targetId: 'c2_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L33 — SR FLIP-FLOP (3 parallel cases — only SR-FF satisfies all)
  // Case 1: S=0,R=1,Q₀=1 → RESET→Q=0  (eliminates T: hold→1)
  // Case 2: S=0,R=0,Q₀=1 → HOLD→Q=1   (eliminates D: captures 0)
  // Case 3: S=1,R=1,Q₀=1 → SET→Q=1    (eliminates JK: toggle→0, T: toggle→0)
  {
    id: 33, name: 'SR FLIP-FLOP', difficulty: 'Flip-Flops',
    description: 'SR Flip-Flop — The SR (Set/Reset) flip-flop can set Q to 1 (SET), to 0 (RESET), or hold (HOLD). Three cases — only one flip-flop satisfies all of them.',
    instruction: 'Select the flip-flop that satisfies all three cases and click STEP',
    hint: 'Case 1: RESET (S=0,R=1). Case 2: HOLD (S=0,R=0). Case 3: S=1,R=1 — only a flip-flop where SET dominates will produce Q=1.',
    solution: {
      ffsUsed: ['SR-FF'],
      explanation: 'SR Flip-Flop — The most basic flip-flop. S=1,R=0 → SET (Q=1). S=0,R=1 → RESET (Q=0). S=0,R=0 → HOLD. S=1,R=1 → SET dominates (Q=1). T toggles instead of RESET, D captures S only, JK toggles when J=K=1.',
      blockSvg: `<svg viewBox="0 0 400 180" width="480" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text>
        <line x1="28" y1="37" x2="100" y2="37" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">R</text>
        <line x1="28" y1="77" x2="100" y2="77" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="147" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="142" x2="100" y2="142" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">SR FLIP-FLOP</text>
        <line x1="290" y1="90" x2="350" y2="90" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 420 420" width="510" height="510">
        <!-- Case 1: RESET -->
        <text x="10" y="20" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 1: RESET (Q₀=1)</text>
        <text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">S=0</text>
        <text x="18" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">R=1</text>
        <line x1="55" y1="48" x2="120" y2="50" stroke="#ff4444" stroke-width="2"/>
        <line x1="55" y1="78" x2="120" y2="72" stroke="#39ff14" stroke-width="2"/>
        <rect x="120" y="30" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="73" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="220" y1="67" x2="250" y2="67" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="73" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=0</text>
        <!-- Case 2: HOLD -->
        <text x="10" y="140" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 2: HOLD (Q₀=1)</text>
        <text x="18" y="172" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">S=0</text>
        <text x="18" y="202" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">R=0</text>
        <line x1="55" y1="168" x2="120" y2="170" stroke="#ff4444" stroke-width="2"/>
        <line x1="55" y1="198" x2="120" y2="192" stroke="#ff4444" stroke-width="2"/>
        <rect x="120" y="150" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="193" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="220" y1="187" x2="250" y2="187" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="193" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
        <!-- Case 3: SET dominates -->
        <text x="10" y="260" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 3: S=R=1 (Q₀=1)</text>
        <text x="18" y="292" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">S=1</text>
        <text x="18" y="322" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">R=1</text>
        <line x1="55" y1="288" x2="120" y2="290" stroke="#39ff14" stroke-width="2"/>
        <line x1="55" y1="318" x2="120" y2="312" stroke="#39ff14" stroke-width="2"/>
        <rect x="120" y="270" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="313" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="220" y1="307" x2="250" y2="307" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="313" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
      </svg>`,
    },
    nodes: [
      // Case 1: S=0, R=1, Q₀=1 → RESET → Q=0
      { id: 'c1_S',   type: 'INPUT',   x: 140, y: 260, fixedValue: 0, label: 'S' },
      { id: 'c1_R',   type: 'INPUT',   x: 140, y: 350, fixedValue: 1, label: 'R' },
      { id: 'c1_clk', type: 'CLOCK',   x: 140, y: 440, value: 0,     label: null },
      { id: 'c1_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 340, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c1_Q',   type: 'OUTPUT',  x: 860, y: 340, targetValue: 0, label: 'Q' },
      // Case 2: S=0, R=0, Q₀=1 → HOLD → Q=1
      { id: 'c2_S',   type: 'INPUT',   x: 140, y: 530, fixedValue: 0, label: 'S' },
      { id: 'c2_R',   type: 'INPUT',   x: 140, y: 620, fixedValue: 0, label: 'R' },
      { id: 'c2_clk', type: 'CLOCK',   x: 140, y: 710, value: 0,     label: null },
      { id: 'c2_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 610, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c2_Q',   type: 'OUTPUT',  x: 860, y: 610, targetValue: 1, label: 'Q' },
      // Case 3: S=1, R=1, Q₀=1 → SET dominates → Q=1
      { id: 'c3_S',   type: 'INPUT',   x: 140, y: 800, fixedValue: 1, label: 'S' },
      { id: 'c3_R',   type: 'INPUT',   x: 140, y: 890, fixedValue: 1, label: 'R' },
      { id: 'c3_clk', type: 'CLOCK',   x: 140, y: 980, value: 0,     label: null },
      { id: 'c3_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 880, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c3_Q',   type: 'OUTPUT',  x: 860, y: 880, targetValue: 1, label: 'Q' },
    ],
    wires: [
      // Case 1
      { id: 'c1_w1',   sourceId: 'c1_S',   targetId: 'c1_ff', targetInputIndex: 0 },
      { id: 'c1_w2',   sourceId: 'c1_R',   targetId: 'c1_ff', targetInputIndex: 1 },
      { id: 'c1_wclk', sourceId: 'c1_clk', targetId: 'c1_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c1_w3',   sourceId: 'c1_ff',  targetId: 'c1_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 2
      { id: 'c2_w1',   sourceId: 'c2_S',   targetId: 'c2_ff', targetInputIndex: 0 },
      { id: 'c2_w2',   sourceId: 'c2_R',   targetId: 'c2_ff', targetInputIndex: 1 },
      { id: 'c2_wclk', sourceId: 'c2_clk', targetId: 'c2_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c2_w3',   sourceId: 'c2_ff',  targetId: 'c2_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 3
      { id: 'c3_w1',   sourceId: 'c3_S',   targetId: 'c3_ff', targetInputIndex: 0 },
      { id: 'c3_w2',   sourceId: 'c3_R',   targetId: 'c3_ff', targetInputIndex: 1 },
      { id: 'c3_wclk', sourceId: 'c3_clk', targetId: 'c3_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c3_w3',   sourceId: 'c3_ff',  targetId: 'c3_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L34 — JK FLIP-FLOP (3 parallel cases — only JK-FF satisfies all)
  // Case 1: J=1,K=1,Q₀=1 → TOGGLE→Q=0  (eliminates SR: set→1, D: D=1→1)
  // Case 2: J=1,K=0,Q₀=1 → SET→Q=1     (eliminates T: toggle→0)
  // Case 3: J=0,K=0,Q₀=1 → HOLD→Q=1    (eliminates D: D=0→0)
  {
    id: 34, name: 'JK FLIP-FLOP', difficulty: 'Flip-Flops',
    description: 'JK Flip-Flop — The most versatile flip-flop. J=K=1 → TOGGLE, J=1,K=0 → SET, J=0,K=1 → RESET, J=K=0 → HOLD. Three cases — only one flip-flop satisfies all of them.',
    instruction: 'Select the flip-flop that satisfies all three cases and click STEP',
    hint: 'Case 1: J=K=1 → only TOGGLE produces Q=0. Case 2: J=1,K=0 → SET. Case 3: J=K=0 → HOLD. Only a flip-flop with all 4 modes works.',
    solution: {
      ffsUsed: ['JK-FF'],
      explanation: 'JK Flip-Flop — The most versatile flip-flop. J=K=1→TOGGLE (Q inverts), J=1,K=0→SET, J=0,K=1→RESET, J=K=0→HOLD. Unlike SR, when J=K=1 JK toggles instead of SET. Used for counters and state machines.',
      blockSvg: `<svg viewBox="0 0 400 180" width="480" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">J</text>
        <line x1="28" y1="37" x2="100" y2="37" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">K</text>
        <line x1="28" y1="77" x2="100" y2="77" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="147" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="142" x2="100" y2="142" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">JK FLIP-FLOP</text>
        <line x1="290" y1="90" x2="350" y2="90" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 420 420" width="510" height="510">
        <!-- Case 1: TOGGLE -->
        <text x="10" y="20" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 1: TOGGLE (Q₀=1)</text>
        <text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">J=1</text>
        <text x="18" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">K=1</text>
        <line x1="55" y1="48" x2="120" y2="50" stroke="#39ff14" stroke-width="2"/>
        <line x1="55" y1="78" x2="120" y2="72" stroke="#39ff14" stroke-width="2"/>
        <rect x="120" y="30" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="73" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">JK-FF</text>
        <line x1="220" y1="67" x2="250" y2="67" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="73" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=0</text>
        <!-- Case 2: SET -->
        <text x="10" y="140" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 2: SET (Q₀=1)</text>
        <text x="18" y="172" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">J=1</text>
        <text x="18" y="202" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">K=0</text>
        <line x1="55" y1="168" x2="120" y2="170" stroke="#39ff14" stroke-width="2"/>
        <line x1="55" y1="198" x2="120" y2="192" stroke="#ff4444" stroke-width="2"/>
        <rect x="120" y="150" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="193" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">JK-FF</text>
        <line x1="220" y1="187" x2="250" y2="187" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="193" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
        <!-- Case 3: HOLD -->
        <text x="10" y="260" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 3: HOLD (Q₀=1)</text>
        <text x="18" y="292" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">J=0</text>
        <text x="18" y="322" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">K=0</text>
        <line x1="55" y1="288" x2="120" y2="290" stroke="#ff4444" stroke-width="2"/>
        <line x1="55" y1="318" x2="120" y2="312" stroke="#ff4444" stroke-width="2"/>
        <rect x="120" y="270" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="313" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">JK-FF</text>
        <line x1="220" y1="307" x2="250" y2="307" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="313" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
      </svg>`,
    },
    nodes: [
      // Case 1: J=1, K=1, Q₀=1 → TOGGLE → Q=0
      { id: 'c1_J',   type: 'INPUT',   x: 140, y: 260, fixedValue: 1, label: 'J' },
      { id: 'c1_K',   type: 'INPUT',   x: 140, y: 350, fixedValue: 1, label: 'K' },
      { id: 'c1_clk', type: 'CLOCK',   x: 140, y: 440, value: 0,     label: null },
      { id: 'c1_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 340, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c1_Q',   type: 'OUTPUT',  x: 860, y: 340, targetValue: 0, label: 'Q' },
      // Case 2: J=1, K=0, Q₀=1 → SET → Q=1
      { id: 'c2_J',   type: 'INPUT',   x: 140, y: 530, fixedValue: 1, label: 'J' },
      { id: 'c2_K',   type: 'INPUT',   x: 140, y: 620, fixedValue: 0, label: 'K' },
      { id: 'c2_clk', type: 'CLOCK',   x: 140, y: 710, value: 0,     label: null },
      { id: 'c2_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 610, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c2_Q',   type: 'OUTPUT',  x: 860, y: 610, targetValue: 1, label: 'Q' },
      // Case 3: J=0, K=0, Q₀=1 → HOLD → Q=1
      { id: 'c3_J',   type: 'INPUT',   x: 140, y: 800, fixedValue: 0, label: 'J' },
      { id: 'c3_K',   type: 'INPUT',   x: 140, y: 890, fixedValue: 0, label: 'K' },
      { id: 'c3_clk', type: 'CLOCK',   x: 140, y: 980, value: 0,     label: null },
      { id: 'c3_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 880, linkedGroup: 'main', initialQ: 1, label: 'FF' },
      { id: 'c3_Q',   type: 'OUTPUT',  x: 860, y: 880, targetValue: 1, label: 'Q' },
    ],
    wires: [
      // Case 1
      { id: 'c1_w1',   sourceId: 'c1_J',   targetId: 'c1_ff', targetInputIndex: 0 },
      { id: 'c1_w2',   sourceId: 'c1_K',   targetId: 'c1_ff', targetInputIndex: 1 },
      { id: 'c1_wclk', sourceId: 'c1_clk', targetId: 'c1_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c1_w3',   sourceId: 'c1_ff',  targetId: 'c1_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 2
      { id: 'c2_w1',   sourceId: 'c2_J',   targetId: 'c2_ff', targetInputIndex: 0 },
      { id: 'c2_w2',   sourceId: 'c2_K',   targetId: 'c2_ff', targetInputIndex: 1 },
      { id: 'c2_wclk', sourceId: 'c2_clk', targetId: 'c2_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c2_w3',   sourceId: 'c2_ff',  targetId: 'c2_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 3
      { id: 'c3_w1',   sourceId: 'c3_J',   targetId: 'c3_ff', targetInputIndex: 0 },
      { id: 'c3_w2',   sourceId: 'c3_K',   targetId: 'c3_ff', targetInputIndex: 1 },
      { id: 'c3_wclk', sourceId: 'c3_clk', targetId: 'c3_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c3_w3',   sourceId: 'c3_ff',  targetId: 'c3_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L35 — RIPPLE COUNTER (2 T-FFs in series)
  // FF1: T=1. FF2: T=Q1. After 2 steps: Q1=0, Q2=1.
  {
    id: 35, name: 'RIPPLE COUNTER', difficulty: 'Flip-Flops',


    description: 'Ripple counter — two flip-flops in series. FF1 receives a constant input, Q1 feeds FF2. After 2 clock pulses, reach the target output.',
    instruction: 'Place the correct flip-flop in both slots and click STEP twice',
    hint: 'STEP 1: Q1=1, Q2=0. STEP 2: Q1 returns to 0, Q2 rises to 1. Which flip-flop toggles state when input is 1?',
    solution: {
      ffsUsed: ['T-FF', 'T-FF'],
      explanation: 'Ripple Counter — Two T flip-flops form a 2-bit binary counter. Each flip-flop divides the frequency by 2. This is the foundation of all digital counters.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T</text>
        <line x1="28" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">RIPPLE</text>
        <text x="195" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">COUNTER</text>
        <line x1="290" y1="55" x2="350" y2="55" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="60" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="290" y1="105" x2="350" y2="105" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="110" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 180" width="630" height="220">
        <text x="18" y="72" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T=1</text>
        <text x="18" y="152" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <rect x="110" y="40" width="100" height="80" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="160" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#a0c8ff">T-FF1</text>
        <rect x="290" y="40" width="100" height="80" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="340" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#a0c8ff">T-FF2</text>
        <text x="460" y="57" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1=0</text>
        <text x="460" y="107" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2=1</text>
        <line x1="50" y1="68" x2="110" y2="68" stroke="#39ff14" stroke-width="2"/>
        <line x1="210" y1="68" x2="290" y2="68" stroke="#39ff14" stroke-width="2"/>
        <line x1="50" y1="148" x2="110" y2="110" stroke="#ffcc00" stroke-width="2"/>
        <line x1="50" y1="148" x2="290" y2="110" stroke="#ffcc00" stroke-width="2"/>
        <line x1="390" y1="52" x2="450" y2="52" stroke="#39ff14" stroke-width="2"/>
        <line x1="390" y1="102" x2="450" y2="102" stroke="#39ff14" stroke-width="2"/>
      </svg>`,
    },
    nodes: [
      { id: 'in_T1',  type: 'INPUT',   x: 140, y: 400, fixedValue: 1, label: 'T=1' },
      { id: 'clk_1',  type: 'CLOCK',   x: 140, y: 520, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 420, y: 460, linkedGroup: 'main', initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 700, y: 460, linkedGroup: 'main', initialQ: 0, label: 'FF2' },
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
  // L36 — DIVIDE-BY-4 (Johnson Counter: 2 D-FFs, Q̄2 → D1 feedback)
  // State sequence: 00→10→11→01→00 (period=4). Target after 2 STEPs: Q1=1,Q2=1.
  {
    id: 36, name: 'DIVIDE BY 4', difficulty: 'Flip-Flops',
    minSteps: 2,
    description: 'Divide-by-4 (Johnson Counter) — two flip-flops in series with the last Q-bar fed back to the first. States rotate in a cycle of 4 clock pulses.',
    instruction: 'Place the correct flip-flop in both slots and click STEP twice',
    hint: 'Q-bar2 starts at 1, fed to FF1. FF2 receives Q1. Which flip-flop always captures its input?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF'],
      explanation: 'Johnson Counter (Twisted Ring) — Two D-FFs in series with Q-bar→D feedback. Produces 4 unique states (divide-by-4). Used for glitch-free timing, counters, and frequency dividers.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="77" x2="100" y2="77" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">DIVIDE</text>
        <text x="195" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">BY 4</text>
        <line x1="290" y1="55" x2="350" y2="55" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="60" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="290" y1="105" x2="350" y2="105" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="110" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 500 200" width="600" height="245">
        <text x="12" y="20" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">00 → 10 → 11 → 01 → 00 (period=4)</text>
        <rect x="100" y="35" width="100" height="70" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="150" y="77" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <line x1="200" y1="60" x2="240" y2="60" stroke="#39ff14" stroke-width="2"/>
        <rect x="240" y="35" width="100" height="70" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="290" y="77" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <text x="370" y="55" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q1=1</text>
        <text x="370" y="75" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q2=1</text>
        <line x1="340" y1="50" x2="360" y2="50" stroke="#39ff14" stroke-width="2"/>
        <line x1="340" y1="70" x2="360" y2="70" stroke="#39ff14" stroke-width="2"/>
        <polyline points="340,90 380,90 380,145 60,145 60,55 100,55" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
        <text x="220" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">Q̄2 → D1</text>
        <text x="12" y="125" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
      </svg>`,
    },
    nodes: [
      { id: 'clk_1',  type: 'CLOCK',   x: 140, y: 580, value: 0,     label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 400, y: 460, initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 650, y: 460, initialQ: 0, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 920, y: 400, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 920, y: 520, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      // Q̄2 → D1 (feedback)
      { id: 'wfb',   sourceId: 'ff_2',  targetId: 'ff_1',   targetInputIndex: 0, sourceOutputIndex: 1 },
      // Q1 → D2
      { id: 'w12',   sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      // Clock
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      // Outputs
      { id: 'wo1',   sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L37 — 4-BIT SHIFT REGISTER (4 D-FFs in series)
  // D=1 → FF1 → FF2 → FF3 → FF4. After 4 STEPs all Q=1.
  // Data "shifts" one stage per clock. Classic serial-to-parallel converter.
  {
    id: 37, name: '4-BIT SHIFT REGISTER', difficulty: 'Flip-Flops',
    description: '4-bit shift register — four flip-flops in series. Data shifts one stage forward on each clock pulse. Click STEP four times to fill the entire register.',
    instruction: 'Place the correct flip-flop in all four slots and click STEP 4 times',
    hint: 'Each STEP pushes data one stage forward. Which flip-flop always captures its input?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: '4-Bit Shift Register — Four D flip-flops in series. On each clock pulse, each FF captures the value of the previous FF. This is the basis of serial communication (UART, SPI) and serial-to-parallel conversion.',
      blockSvg: `<svg viewBox="0 0 420 200" width="500" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text>
        <line x1="28" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="162" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="157" x2="100" y2="157" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="200" height="160" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="200" y="78" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">4-BIT SHIFT</text>
        <text x="200" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">REGISTER</text>
        <line x1="300" y1="45" x2="360" y2="45" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="300" y1="80" x2="360" y2="80" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="85" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="300" y1="115" x2="360" y2="115" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="120" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q3</text>
        <line x1="300" y1="150" x2="360" y2="150" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="155" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q4</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 700 150" width="850" height="185">
        <!-- D input -->
        <text x="12" y="47" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D</text>
        <line x1="30" y1="43" x2="80" y2="43" stroke="#39ff14" stroke-width="2"/>
        <!-- 4 D-FFs in chain -->
        <rect x="80" y="22" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="120" y="52" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <line x1="160" y1="43" x2="200" y2="43" stroke="#39ff14" stroke-width="2"/>
        <rect x="200" y="22" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="240" y="52" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <line x1="280" y1="43" x2="320" y2="43" stroke="#39ff14" stroke-width="2"/>
        <rect x="320" y="22" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="360" y="52" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <line x1="400" y1="43" x2="440" y2="43" stroke="#39ff14" stroke-width="2"/>
        <rect x="440" y="22" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="480" y="52" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF4</text>
        <!-- Outputs -->
        <line x1="520" y1="33" x2="555" y2="33" stroke="#c8d8f0" stroke-width="2"/>
        <text x="560" y="37" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="520" y1="43" x2="555" y2="48" stroke="#c8d8f0" stroke-width="1.5"/>
        <text x="560" y="52" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q2</text>
        <text x="560" y="67" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q3</text>
        <text x="560" y="82" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q4</text>
        <!-- CLK line to all FFs -->
        <text x="12" y="105" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="101" x2="520" y2="101" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="120" y1="72" x2="120" y2="101" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="240" y1="72" x2="240" y2="101" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="360" y1="72" x2="360" y2="101" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="480" y1="72" x2="480" y2="101" stroke="#ffcc00" stroke-width="1.5"/>
        <!-- Label -->
        <text x="12" y="135" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Data shifts one stage per clock cycle</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_D',   type: 'INPUT',   x: 100, y: 460, fixedValue: 1, label: 'D' },
      { id: 'clk_1',  type: 'CLOCK',   x: 100, y: 580, value: 0,     label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 320, y: 460, linkedGroup: 'pair_a', initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 520, y: 460, linkedGroup: 'pair_a', initialQ: 0, label: 'FF2' },
      { id: 'ff_3',   type: 'FF_SLOT', ffType: null, x: 720, y: 460, linkedGroup: 'pair_b', initialQ: 0, label: 'FF3' },
      { id: 'ff_4',   type: 'FF_SLOT', ffType: null, x: 920, y: 460, linkedGroup: 'pair_b', initialQ: 0, label: 'FF4' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 1120, y: 340, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 1120, y: 420, targetValue: 1, label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',  x: 1120, y: 500, targetValue: 1, label: 'Q3' },
      { id: 'out_Q4', type: 'OUTPUT',  x: 1120, y: 580, targetValue: 1, label: 'Q4' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_D',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',    sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'w3',    sourceId: 'ff_2',  targetId: 'ff_3',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk3', sourceId: 'clk_1', targetId: 'ff_3',   targetInputIndex: 1, isClockWire: true },
      { id: 'w4',    sourceId: 'ff_3',  targetId: 'ff_4',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk4', sourceId: 'clk_1', targetId: 'ff_4',   targetInputIndex: 1, isClockWire: true },
      { id: 'w5',    sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w6',    sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w7',    sourceId: 'ff_3',  targetId: 'out_Q3', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w8',    sourceId: 'ff_4',  targetId: 'out_Q4', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L38 — HOLD MODE (SET→HOLD concept, 2 cases — only SR-FF satisfies both)
  // Case 1: S goes 1→0, R=0. Q₀=0, target Q=1 after 2 steps. SET then HOLD.
  //   SR: SET→Q=1, HOLD→Q=1 ✓ | JK: SET→Q=1, HOLD→Q=1 ✓ | T: toggle→1, hold→1 ✓ | D: cap 1→1, cap 0→0 ✗
  // Case 2: S=1, R=1, Q₀=1, target Q=1 after 1 step.
  //   SR: SET dominates→Q=1 ✓ | JK: TOGGLE→Q=0 ✗ | T: toggle→0 ✗ | D: cap 1→1 ✓
  // Combined: only SR passes both.
  {
    id: 38, name: 'HOLD MODE', difficulty: 'Flip-Flops',
    minSteps: 2,
    description: 'HOLD mode — a flip-flop can retain its value even when the input changes. Case 1: SET then HOLD. Case 2: when both inputs are high — which one dominates?',
    instruction: 'Select the flip-flop that satisfies both cases and click STEP twice',
    hint: 'Case 1: S=1 sets Q, then S=0 — the flip-flop must remember. Case 2: S=R=1 — only a flip-flop where SET dominates keeps Q=1.',
    solution: {
      ffsUsed: ['SR-FF'],
      explanation: 'SR Flip-Flop holds its value when S=R=0 (HOLD). D-FF cannot hold — it always captures the input. JK and T toggle when J=K=1. Only SR does SET→HOLD and retains the stored value.',
      blockSvg: `<svg viewBox="0 0 400 180" width="480" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text>
        <line x1="28" y1="37" x2="100" y2="37" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">R</text>
        <line x1="28" y1="77" x2="100" y2="77" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="147" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="142" x2="100" y2="142" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="190" height="145" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">HOLD</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">MODE</text>
        <line x1="290" y1="90" x2="350" y2="90" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="358" y="95" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 420 310" width="510" height="380">
        <!-- Case 1: SET then HOLD -->
        <text x="10" y="20" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 1: SET → HOLD (Q₀=0)</text>
        <text x="18" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">S: 1→0</text>
        <text x="18" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">R=0</text>
        <line x1="75" y1="48" x2="120" y2="50" stroke="#39ff14" stroke-width="2"/>
        <line x1="55" y1="78" x2="120" y2="72" stroke="#ff4444" stroke-width="2"/>
        <rect x="120" y="30" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="73" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="220" y1="67" x2="250" y2="67" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="73" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
        <!-- Case 2: S=R=1, SET dominates -->
        <text x="10" y="150" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">CASE 2: S=R=1 (Q₀=0)</text>
        <text x="18" y="182" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">S=1</text>
        <text x="18" y="212" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">R=1</text>
        <line x1="55" y1="178" x2="120" y2="180" stroke="#39ff14" stroke-width="2"/>
        <line x1="55" y1="208" x2="120" y2="202" stroke="#39ff14" stroke-width="2"/>
        <rect x="120" y="160" width="100" height="75" rx="6" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="203" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="220" y1="197" x2="250" y2="197" stroke="#39ff14" stroke-width="2"/>
        <text x="260" y="203" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">Q=1</text>
      </svg>`,
    },
    nodes: [
      // Case 1: S goes 1→0, R=0, Q₀=0 → SET then HOLD → target Q=1
      { id: 'c1_S',   type: 'INPUT',   x: 140, y: 280, fixedValue: 1, stepValues: [1, 0], label: 'S' },
      { id: 'c1_R',   type: 'INPUT',   x: 140, y: 370, fixedValue: 0, label: 'R' },
      { id: 'c1_clk', type: 'CLOCK',   x: 140, y: 460, value: 0,     label: null },
      { id: 'c1_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 370, linkedGroup: 'main', initialQ: 0, label: 'FF' },
      { id: 'c1_Q',   type: 'OUTPUT',  x: 860, y: 370, targetValue: 1, label: 'Q' },
      // Case 2: S=1, R=1, Q₀=0 → SET dominates → target Q=1 (after 2 steps JK/T toggle back to 0)
      { id: 'c2_S',   type: 'INPUT',   x: 140, y: 580, fixedValue: 1, label: 'S' },
      { id: 'c2_R',   type: 'INPUT',   x: 140, y: 670, fixedValue: 1, label: 'R' },
      { id: 'c2_clk', type: 'CLOCK',   x: 140, y: 760, value: 0,     label: null },
      { id: 'c2_ff',  type: 'FF_SLOT', ffType: null, x: 500, y: 660, linkedGroup: 'main', initialQ: 0, label: 'FF' },
      { id: 'c2_Q',   type: 'OUTPUT',  x: 860, y: 660, targetValue: 1, label: 'Q' },
    ],
    wires: [
      // Case 1
      { id: 'c1_w1',   sourceId: 'c1_S',   targetId: 'c1_ff', targetInputIndex: 0 },
      { id: 'c1_w2',   sourceId: 'c1_R',   targetId: 'c1_ff', targetInputIndex: 1 },
      { id: 'c1_wclk', sourceId: 'c1_clk', targetId: 'c1_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c1_w3',   sourceId: 'c1_ff',  targetId: 'c1_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
      // Case 2
      { id: 'c2_w1',   sourceId: 'c2_S',   targetId: 'c2_ff', targetInputIndex: 0 },
      { id: 'c2_w2',   sourceId: 'c2_R',   targetId: 'c2_ff', targetInputIndex: 1 },
      { id: 'c2_wclk', sourceId: 'c2_clk', targetId: 'c2_ff', targetInputIndex: 2, isClockWire: true },
      { id: 'c2_w3',   sourceId: 'c2_ff',  targetId: 'c2_Q',  targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L39 — RING COUNTER (4 D-FFs in a ring, Q4→D1 feedback)
  // Initial: Q1=1,Q2=0,Q3=0,Q4=0. The "1" circulates around the ring.
  // After 3 STEPs: Q1=0,Q2=0,Q3=0,Q4=1. After 4 STEPs: back to start.
  {
    id: 39, name: 'RING COUNTER', difficulty: 'Flip-Flops',
    description: 'Ring counter — four flip-flops in a closed loop. A single bit circulates around the ring, one stage per clock pulse. Used for sequential timing and state machine control.',
    instruction: 'Place the correct flip-flop in all slots and click STEP 3 times',
    hint: 'FF4 output feeds back to FF1 input. The bit shifts: 1000→0100→0010→0001. Which flip-flop passes data forward?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'Ring Counter — Four D-FFs in a closed loop. The 1 circulates around the ring one stage per clock pulse. Used for multi-phase timing, state machine control, and LED pattern generation.',
      blockSvg: `<svg viewBox="0 0 420 200" width="500" height="245">
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="77" x2="100" y2="77" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="200" height="160" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="200" y="78" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">RING</text>
        <text x="200" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">COUNTER</text>
        <line x1="300" y1="45" x2="360" y2="45" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="300" y1="80" x2="360" y2="80" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="85" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="300" y1="115" x2="360" y2="115" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="120" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q3</text>
        <line x1="300" y1="150" x2="360" y2="150" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="368" y="155" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q4</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 700 140" width="850" height="170">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">Q₀=1</text>
        <rect x="60" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="100" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <line x1="140" y1="48" x2="180" y2="48" stroke="#39ff14" stroke-width="2"/>
        <text x="152" y="38" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q₀=0</text>
        <rect x="180" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="220" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <line x1="260" y1="48" x2="300" y2="48" stroke="#39ff14" stroke-width="2"/>
        <text x="272" y="38" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q₀=0</text>
        <rect x="300" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="340" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <line x1="380" y1="48" x2="420" y2="48" stroke="#39ff14" stroke-width="2"/>
        <text x="392" y="38" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q₀=0</text>
        <rect x="420" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="460" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF4</text>
        <text x="520" y="52" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">Q4=1</text>
        <polyline points="500,55 540,55 540,100 30,100 30,48 60,48" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
        <text x="280" y="115" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">Q4 → D1 FEEDBACK</text>
      </svg>`,
    },
    minSteps: 3,
    nodes: [
      { id: 'clk_1',  type: 'CLOCK',   x: 100, y: 580, value: 0,     label: null },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 280, y: 460, linkedGroup: 'pair_a', initialQ: 1, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 460, y: 460, linkedGroup: 'pair_a', initialQ: 0, label: 'FF2' },
      { id: 'ff_3',   type: 'FF_SLOT', ffType: null, x: 640, y: 460, linkedGroup: 'pair_b', initialQ: 0, label: 'FF3' },
      { id: 'ff_4',   type: 'FF_SLOT', ffType: null, x: 820, y: 460, linkedGroup: 'pair_b', initialQ: 0, label: 'FF4' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 1020, y: 340, targetValue: 0, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 1020, y: 410, targetValue: 0, label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',  x: 1020, y: 480, targetValue: 0, label: 'Q3' },
      { id: 'out_Q4', type: 'OUTPUT',  x: 1020, y: 550, targetValue: 1, label: 'Q4' },
    ],
    wires: [
      // Ring: Q4→D1, Q1→D2, Q2→D3, Q3→D4
      { id: 'wfb',   sourceId: 'ff_4',  targetId: 'ff_1',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w12',   sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w23',   sourceId: 'ff_2',  targetId: 'ff_3',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w34',   sourceId: 'ff_3',  targetId: 'ff_4',   targetInputIndex: 0, sourceOutputIndex: 0 },
      // All share same clock
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1', targetId: 'ff_3',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk4', sourceId: 'clk_1', targetId: 'ff_4',   targetInputIndex: 1, isClockWire: true },
      // Outputs
      { id: 'wo1',   sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo3',   sourceId: 'ff_3',  targetId: 'out_Q3', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo4',   sourceId: 'ff_4',  targetId: 'out_Q4', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // L40 — PROGRAM COUNTER (4 D-FFs in parallel, inputs simulate binary counting via stepValues)
  // Inputs change each step: step1=0001, step2=0010, step3=0011.
  // After 3 STEPs: Q = 0011 (binary 3). D-FFs capture the current "address".
  {
    id: 40, name: 'PROGRAM COUNTER', difficulty: 'Flip-Flops',
    minSteps: 3,
    description: 'Program Counter (PC) — four flip-flops in parallel store the current instruction address. The address updates on each clock pulse. This is the most important register in a CPU.',
    instruction: 'Place the correct flip-flop in all slots and click STEP 3 times',
    hint: 'Inputs change each step like a binary counter. Which flip-flop always captures its input? After 3 steps: address 011 (=3).',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'Program Counter — Four D-FFs in parallel store a 4-bit address. On each clock pulse they capture the next address. In a real CPU, external logic computes PC+1 and the register simply stores the result.',
      blockSvg: `<svg viewBox="0 0 440 230" width="520" height="280">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D0</text>
        <line x1="38" y1="37" x2="100" y2="37" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D1</text>
        <line x1="38" y1="67" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D2</text>
        <line x1="38" y1="97" x2="100" y2="97" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="132" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D3</text>
        <line x1="38" y1="127" x2="100" y2="127" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="192" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="187" x2="100" y2="187" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="18" width="210" height="190" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">PROGRAM</text>
        <text x="205" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">COUNTER</text>
        <line x1="310" y1="45" x2="370" y2="45" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="378" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q0</text>
        <line x1="310" y1="80" x2="370" y2="80" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="378" y="85" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="310" y1="115" x2="370" y2="115" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="378" y="120" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="310" y1="150" x2="370" y2="150" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="378" y="155" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q3</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 480 220" width="580" height="270">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">4 D-FFs in parallel — each captures its own input on clock edge</text>
        <!-- D inputs -->
        <text x="8" y="48" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">D0</text>
        <line x1="35" y1="44" x2="100" y2="44" stroke="#39ff14" stroke-width="2"/>
        <text x="8" y="78" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">D1</text>
        <line x1="35" y1="74" x2="100" y2="74" stroke="#39ff14" stroke-width="2"/>
        <text x="8" y="108" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">D2</text>
        <line x1="35" y1="104" x2="100" y2="104" stroke="#39ff14" stroke-width="2"/>
        <text x="8" y="138" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">D3</text>
        <line x1="35" y1="134" x2="100" y2="134" stroke="#39ff14" stroke-width="2"/>
        <!-- 4 D-FFs stacked vertically -->
        <rect x="100" y="28" width="80" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="140" y="48" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF0</text>
        <rect x="100" y="62" width="80" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="140" y="82" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <rect x="100" y="92" width="80" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="140" y="112" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <rect x="100" y="122" width="80" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="140" y="142" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <!-- Q outputs -->
        <line x1="180" y1="44" x2="230" y2="44" stroke="#c8d8f0" stroke-width="2"/>
        <text x="238" y="48" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q0</text>
        <line x1="180" y1="77" x2="230" y2="77" stroke="#c8d8f0" stroke-width="2"/>
        <text x="238" y="81" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="180" y1="107" x2="230" y2="107" stroke="#c8d8f0" stroke-width="2"/>
        <text x="238" y="111" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="180" y1="137" x2="230" y2="137" stroke="#c8d8f0" stroke-width="2"/>
        <text x="238" y="141" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q3</text>
        <!-- CLK connected to all FFs -->
        <text x="8" y="178" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="40" y1="174" x2="80" y2="174" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="80" y1="56" x2="80" y2="174" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="80" y1="56" x2="100" y2="56" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="80" y1="86" x2="100" y2="86" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="80" y1="116" x2="100" y2="116" stroke="#ffcc00" stroke-width="1.5"/>
        <line x1="80" y1="146" x2="100" y2="146" stroke="#ffcc00" stroke-width="1.5"/>
        <!-- Label -->
        <text x="8" y="205" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Each D-FF captures its input independently on the same clock edge</text>
      </svg>`,
    },
    nodes: [
      // D0 (LSB): alternates 1,0,1 for counts 1,2,3
      { id: 'in_D0',  type: 'INPUT',   x: 100, y: 320, fixedValue: 0, stepValues: [1, 0, 1], label: 'D0' },
      // D1: 0,1,1 for counts 1,2,3
      { id: 'in_D1',  type: 'INPUT',   x: 100, y: 420, fixedValue: 0, stepValues: [0, 1, 1], label: 'D1' },
      // D2: always 0 for counts 1-3
      { id: 'in_D2',  type: 'INPUT',   x: 100, y: 520, fixedValue: 0, label: 'D2' },
      // D3: always 0 for counts 1-3
      { id: 'in_D3',  type: 'INPUT',   x: 100, y: 620, fixedValue: 0, label: 'D3' },
      { id: 'clk_1',  type: 'CLOCK',   x: 100, y: 740, value: 0,     label: null },
      { id: 'ff_0',   type: 'FF_SLOT', ffType: null, x: 380, y: 350, linkedGroup: 'main', initialQ: 0, label: 'FF0' },
      { id: 'ff_1',   type: 'FF_SLOT', ffType: null, x: 380, y: 450, linkedGroup: 'main', initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT', ffType: null, x: 380, y: 550, linkedGroup: 'main', initialQ: 0, label: 'FF2' },
      { id: 'ff_3',   type: 'FF_SLOT', ffType: null, x: 380, y: 650, linkedGroup: 'main', initialQ: 0, label: 'FF3' },
      { id: 'out_Q0', type: 'OUTPUT',  x: 660, y: 350, targetValue: 1, label: 'Q0' },
      { id: 'out_Q1', type: 'OUTPUT',  x: 660, y: 450, targetValue: 1, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',  x: 660, y: 550, targetValue: 0, label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',  x: 660, y: 650, targetValue: 0, label: 'Q3' },
    ],
    wires: [
      { id: 'w0',    sourceId: 'in_D0', targetId: 'ff_0',   targetInputIndex: 0 },
      { id: 'w1',    sourceId: 'in_D1', targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'w2',    sourceId: 'in_D2', targetId: 'ff_2',   targetInputIndex: 0 },
      { id: 'w3',    sourceId: 'in_D3', targetId: 'ff_3',   targetInputIndex: 0 },
      { id: 'wclk0', sourceId: 'clk_1', targetId: 'ff_0',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1', targetId: 'ff_3',   targetInputIndex: 1, isClockWire: true },
      { id: 'wo0',   sourceId: 'ff_0',  targetId: 'out_Q0', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo1',   sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo3',   sourceId: 'ff_3',  targetId: 'out_Q3', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },
  // ════════════════════════════════════════════════════════════
  // TAB 5 — 5. Sequential Logic  (IDs 41–50)
  // Flip-flops combined with combinational gate slots.
  // Levels 41–45 are easier; 46–50 ramp up.
  // ════════════════════════════════════════════════════════════

  // L41 — SYNCHRONIZE (easy: 1 gate + D-FF)
  // Gate computes value, D-FF latches it on clock edge.
  {
    id: 41, name: 'SYNCHRONIZE', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Synchronizer — a logic gate computes a value, a flip-flop stores it on the clock rising edge. Found in every inter-component interface: USB, SPI, I2C — whenever data crosses between different clock domains, a synchronizer is needed.',
    instruction: 'Place a gate and a flip-flop, then click STEP three times',
    hint: 'Track the gate output at each step. Z should be 0 at the end (A=1,B=0). Q should be 1 — which flip-flop toggles state when the input is 1?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['T-FF'],
      explanation: 'AND + T-FF — the gate outputs 1 only when A=B=1 (step 2). T-FF toggles once and stays Q=1. In hardware: this is how synchronizers work in USB, SPI, and I2C interfaces — the gate computes, the flip-flop stores on the clock rising edge.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="37" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="77" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="107" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">SYNCHRONIZE</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: AND(0,1)=0 → hold | STEP 2: AND(1,1)=1 → toggle! | STEP 3: AND(1,0)=0 → hold</text>
        <text x="8" y="62" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A: 0→1→1</text>
        <text x="8" y="92" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B: 1→1→0</text>
        <line x1="95" y1="58" x2="140" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="95" y1="88" x2="140" y2="78" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="45" width="70" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="175" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="210" y1="70" x2="240" y2="70" stroke="#39ff14" stroke-width="2"/>
        <line x1="240" y1="70" x2="240" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="240" y1="55" x2="280" y2="55" stroke="#39ff14" stroke-width="2"/>
        <text x="288" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Z: 0→1→0</text>
        <line x1="240" y1="70" x2="280" y2="90" stroke="#39ff14" stroke-width="2"/>
        <rect x="280" y="75" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="320" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <line x1="360" y1="97" x2="400" y2="97" stroke="#39ff14" stroke-width="2"/>
        <text x="408" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 0→1→1</text>
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">T-FF toggles only at STEP 2 (AND=1) → Q stays 1</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 380, fixedValue: 0, stepValues: [0, 1, 1], label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 500, fixedValue: 1, stepValues: [1, 1, 0], label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 440 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 600, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 500, initialQ: 0, label: 'FF' },
      { id: 'out_Z',  type: 'OUTPUT',    x: 680, y: 360, targetValue: 0, stepTargets: [0, 1, 0], label: 'Z' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 500, targetValue: 1, stepTargets: [0, 1, 1], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'g1',    targetId: 'out_Z', targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w5',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L42 — FILTER ZERO (gate + FF over 3 steps with changing inputs)
  // A:[1,1,0] B:[0,1,0]. NAND→[1,0,1]. T-FF: toggle,hold,toggle→Q=0.
  // Target: Z=1, Q=0 after 3 steps. Unique: NAND + T-FF.
  {
    id: 42, name: 'FILTER ZERO', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Zero filter — a logic gate filters noise from changing inputs, a flip-flop stores a stable result. Used in button debounce controllers and digital signal filters in sound cards and communication devices.',
    instruction: 'Place a gate and a flip-flop, then click STEP three times',
    hint: 'Track the output at each step. Z should be 1 at the end. Q should be 0 — which flip-flop toggles twice and returns to its original state?',
    solution: {
      gatesUsed: ['NAND'],
      ffsUsed: ['T-FF'],
      explanation: 'NAND + T-FF — NAND filters noise (outputs [1,0,1]), T-FF counts toggles. In hardware: this is how button debounce works — the gate filters, the flip-flop holds a stable state. Found in every button controller and sound card.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="37" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="77" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="107" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">FILTER ZERO</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: NAND(1,0)=1 → toggle! | STEP 2: NAND(1,1)=0 → hold | STEP 3: NAND(0,0)=1 → toggle!</text>
        <text x="8" y="62" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A: 1→1→0</text>
        <text x="8" y="92" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B: 0→1→0</text>
        <line x1="95" y1="58" x2="140" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="95" y1="88" x2="140" y2="78" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="45" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="180" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NAND</text>
        <line x1="220" y1="70" x2="250" y2="70" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="70" x2="250" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="55" x2="290" y2="55" stroke="#39ff14" stroke-width="2"/>
        <text x="298" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Z: 1→0→1</text>
        <line x1="250" y1="70" x2="290" y2="90" stroke="#39ff14" stroke-width="2"/>
        <rect x="290" y="75" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="330" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <line x1="370" y1="97" x2="410" y2="97" stroke="#39ff14" stroke-width="2"/>
        <text x="418" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 1→1→0</text>
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">T-FF: toggle(1)→hold(0)→toggle(1) → back to 0</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 380, fixedValue: 1, stepValues: [1, 1, 0], label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 500, fixedValue: 0, stepValues: [0, 1, 0], label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 440 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 600, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 500, initialQ: 0, label: 'FF' },
      { id: 'out_Z',  type: 'OUTPUT',    x: 680, y: 360, targetValue: 1, stepTargets: [1, 0, 1], label: 'Z' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 500, targetValue: 0, stepTargets: [1, 1, 0], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'g1',    targetId: 'out_Z', targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w5',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L43 — EDGE PULSE (NAND + T-FF over 4 steps, Q₀=0)
  // A:[0,1,1,0] B:[1,1,1,0]. NAND→[1,0,0,1]. T-FF toggles at steps 1,4→Q=0.
  // Z=NAND(0,0)=1 at step4. Target: Z=1, Q=0. Unique: NAND + T-FF.
  {
    id: 43, name: 'EDGE PULSE', difficulty: 'Sequential Logic',
    minSteps: 4,
    description: 'Edge pulse — a gate generates a pattern, a flip-flop counts events over time. Used in PWM controllers for motors, UART pulse generation, and microcontroller timers like Arduino.',
    instruction: 'Place a gate and a flip-flop, then click STEP four times',
    hint: 'At step 4: A=0,B=0. Which gate outputs 1 when both inputs are off? The flip-flop toggles twice — where does it return to?',
    solution: {
      gatesUsed: ['NAND'],
      ffsUsed: ['T-FF'],
      explanation: 'NAND + T-FF — the sequence [1,0,0,1] causes T-FF to toggle twice and return to 0. In hardware: this is how PWM generators work in Arduino and microcontrollers — the gate produces a pulse pattern, the flip-flop counts events over time.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="37" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="77" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="107" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">EDGE PULSE</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: NAND(0,1)=1→toggle | STEP 2: NAND(1,1)=0→hold | STEP 3: hold | STEP 4: NAND(0,0)=1→toggle</text>
        <text x="8" y="62" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A: 0→1→1→0</text>
        <text x="8" y="92" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B: 1→1→1→0</text>
        <line x1="95" y1="58" x2="140" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="95" y1="88" x2="140" y2="78" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="45" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="180" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">NAND</text>
        <line x1="220" y1="70" x2="250" y2="70" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="70" x2="250" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="55" x2="290" y2="55" stroke="#39ff14" stroke-width="2"/>
        <text x="298" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Z: 1→0→0→1</text>
        <line x1="250" y1="70" x2="290" y2="90" stroke="#39ff14" stroke-width="2"/>
        <rect x="290" y="75" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="330" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <line x1="370" y1="97" x2="410" y2="97" stroke="#39ff14" stroke-width="2"/>
        <text x="418" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 1→1→1→0</text>
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q₀=0 → toggle at STEP 1 (Q=1) → toggle at STEP 4 (Q=0)</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 380, fixedValue: 0, stepValues: [0, 1, 1, 0], label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 500, fixedValue: 1, stepValues: [1, 1, 1, 0], label: 'B' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 440 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 600, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 500, initialQ: 0, label: 'FF' },
      { id: 'out_Z',  type: 'OUTPUT',    x: 680, y: 360, targetValue: 1, stepTargets: [1, 0, 0, 1], label: 'Z' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 500, targetValue: 0, stepTargets: [1, 1, 1, 0], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'g1',    targetId: 'out_Z', targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w5',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L44 — CONDITIONAL SET (2 gates compute S,R for SR-FF over 2 steps)
  // Step 1: S=AND(1,1)=1, R=NOT(0)=1 → S=R=1 → SET dominates, Q stays 1
  // Step 2: S=AND(1,0)=0, R=NOT(1)=0 → S=R=0 → HOLD, Q stays 1
  // Only SR-FF holds Q=1 through SET-then-HOLD. D/T/JK all end up Q=0.
  {
    id: 44, name: 'CONDITIONAL SET', difficulty: 'Sequential Logic',
    minSteps: 2,
    description: 'Activation controller — two gates compute SET and RESET independently, the flip-flop holds the state. Used for interrupt flag management in ARM processors, power state control on motherboards, and DMA controller state machines.',
    instruction: 'Place a gate in each slot and a flip-flop, then click STEP twice',
    hint: 'Step 1: gate S should output 1, gate R also outputs 1 — which flip-flop keeps Q=1 when both S and R are active? Step 2: both are 0 — which one holds?',
    solution: {
      gatesUsed: ['AND', 'NOT'],
      ffsUsed: ['SR-FF'],
      explanation: 'AND + NOT + SR-FF — SET dominates at step 1, HOLD preserves at step 2. In hardware: this is how interrupt flags are managed in ARM processors — an OR gate sets the flag from any source, an AND gate clears it conditionally, SR-FF holds the state.',
      blockSvg: `<svg viewBox="0 0 400 180" width="480" height="220">
        <!-- Inputs -->
        <text x="12" y="37" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="32" x2="100" y2="42" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="62" x2="100" y2="62" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="97" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text>
        <line x1="30" y1="92" x2="100" y2="82" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="137" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="132" x2="100" y2="122" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">CONDITIONAL</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">SET</text>
        <!-- Output -->
        <line x1="290" y1="82" x2="345" y2="82" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: S=1,R=1 → SET wins | STEP 2: S=0,R=0 → HOLD</text>
        <text x="8" y="52" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A=1 (const)</text>
        <text x="8" y="77" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B: 1→0</text>
        <text x="8" y="112" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">C: 0→1</text>
        <line x1="100" y1="48" x2="140" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="100" y1="73" x2="140" y2="65" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="42" width="60" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="66" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="200" y1="61" x2="250" y2="80" stroke="#39ff14" stroke-width="2"/>
        <text x="215" y="57" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">S: 1→0</text>
        <line x1="100" y1="108" x2="140" y2="108" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="92" width="60" height="35" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="170" y="114" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">NOT</text>
        <line x1="200" y1="109" x2="250" y2="100" stroke="#39ff14" stroke-width="2"/>
        <text x="215" y="122" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">R: 1→0</text>
        <rect x="250" y="65" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="290" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <line x1="330" y1="90" x2="370" y2="90" stroke="#39ff14" stroke-width="2"/>
        <text x="378" y="95" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 1→1</text>
        <text x="8" y="160" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×2</text>
        <text x="8" y="180" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q₀=1 → SET wins at STEP 1 → HOLD at STEP 2 → Q stays 1</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 320, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 160, y: 420, fixedValue: 1, stepValues: [1, 0], label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 160, y: 540, fixedValue: 0, stepValues: [0, 1], label: 'C' },
      { id: 'g_s',    type: 'GATE_SLOT', x: 400, y: 370, label: 'G_S' },
      { id: 'g_r',    type: 'GATE_SLOT', x: 400, y: 540, label: 'G_R' },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 650, value: 0,      label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 480, initialQ: 1, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 480, targetValue: 1, stepTargets: [1, 1], label: 'Q' },
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

  // L45 — WRITE-ENABLE REGISTER (AND + T-FF, 3 steps)
  // AND(DATA,WE)=[0,0,1]. T-FF toggles at step 3 only → Q=1.
  // Z=AND(1,1)=1 at step 3. Target: Z=1, Q=1. Unique: AND + T-FF.
  {
    id: 45, name: 'WRITE-ENABLE', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Write-enable register — a bit is written only when the Enable signal is active. Found in every register file in x86 and ARM processors: only when WE is active, data is stored. Without WE, the CPU cannot select which register to update.',
    instruction: 'Place a gate and a flip-flop, then click STEP three times',
    hint: 'The gate should output 1 only when both DATA and WE are active. The flip-flop should hold its state when the gate outputs 0.',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['T-FF'],
      explanation: 'Write-Enable Register — AND gate passes data only when WE=1, T-FF holds state. In hardware: this is how every register file works in x86 and ARM processors — without WE, the CPU cannot select which register to update and which to preserve.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">DATA</text>
        <line x1="55" y1="37" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">WE</text>
        <line x1="40" y1="77" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="117" x2="100" y2="107" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">WRITE-ENABLE</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">REGISTER</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: AND(1,0)=0→hold | STEP 2: AND(0,1)=0→hold | STEP 3: AND(1,1)=1→toggle!</text>
        <text x="8" y="62" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">DATA: 1→0→1</text>
        <text x="8" y="92" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">WE: 0→1→1</text>
        <line x1="110" y1="58" x2="150" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="110" y1="88" x2="150" y2="78" stroke="#39ff14" stroke-width="2"/>
        <rect x="150" y="45" width="70" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="185" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="220" y1="70" x2="250" y2="70" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="70" x2="250" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="55" x2="290" y2="55" stroke="#39ff14" stroke-width="2"/>
        <text x="298" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Z: 0→0→1</text>
        <line x1="250" y1="70" x2="290" y2="90" stroke="#39ff14" stroke-width="2"/>
        <rect x="290" y="75" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="330" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <line x1="370" y1="97" x2="410" y2="97" stroke="#39ff14" stroke-width="2"/>
        <text x="418" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 0→0→1</text>
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">WE gates the data — T-FF toggles only when both are 1</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_D',   type: 'INPUT',     x: 160, y: 380, fixedValue: 1, stepValues: [1, 0, 1], label: 'DATA' },
      { id: 'in_WE',  type: 'INPUT',     x: 160, y: 500, fixedValue: 0, stepValues: [0, 1, 1], label: 'WE' },
      { id: 'g1',     type: 'GATE_SLOT', x: 420, y: 440 },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 600, value: 0, label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 680, y: 500, initialQ: 0, label: 'FF' },
      { id: 'out_Z',  type: 'OUTPUT',    x: 680, y: 360, targetValue: 1, stepTargets: [0, 0, 1], label: 'Z' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 500, targetValue: 1, stepTargets: [0, 0, 1], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_D',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_WE', targetId: 'g1',    targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'g1',    targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'g1',    targetId: 'out_Z', targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w5',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L46 — SYNCHRONOUS COUNTER (AND + 2 T-FFs, 2 steps)
  // T=1 → T-FF1. AND(Q1,T) → T-FF2. After 2 steps: Q1=0, Q2=1.
  {
    id: 46, name: 'SYNC COUNTER', difficulty: 'Sequential Logic',
    minSteps: 2,
    description: 'Synchronous counter — two flip-flops on the same clock, an AND gate computes the carry. Used in microcontroller timers, DDR memory address counters, and frequency dividers in 5G communication systems.',
    instruction: 'Place a gate and a flip-flop in every slot, then click STEP twice',
    hint: 'FF1 counts every clock pulse. FF2 counts only when FF1=1 — which gate passes only when both are 1? And which flip-flop toggles state?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['T-FF', 'T-FF'],
      explanation: 'Synchronous Counter — AND gate generates carry: FF2 toggles only when Q1=1. In hardware: this is how timers work in microcontrollers, address counters in DDR memory, and frequency dividers in 5G. Faster than ripple counters because there are no glitches.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T</text>
        <line x1="30" y1="47" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="107" x2="100" y2="97" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">SYNCHRONOUS</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">COUNTER</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q2</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: Q1 toggles 0→1, AND(0,1)=0 → Q2 holds | STEP 2: Q1 toggles 1→0, AND(1,1)=1 → Q2 toggles 0→1</text>
        <!-- T=1 input -->
        <text x="8" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">T=1</text>
        <line x1="45" y1="56" x2="80" y2="56" stroke="#39ff14" stroke-width="2"/>
        <line x1="60" y1="56" x2="60" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="60" y1="120" x2="195" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <!-- T-FF1 -->
        <rect x="80" y="38" width="75" height="42" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="117" y="64" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">T-FF1</text>
        <!-- Q1 out -->
        <line x1="155" y1="56" x2="185" y2="56" stroke="#39ff14" stroke-width="2"/>
        <line x1="185" y1="56" x2="185" y2="105" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="185" y1="105" x2="195" y2="105" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="185" y1="56" x2="400" y2="56" stroke="#39ff14" stroke-width="1.5"/>
        <text x="408" y="61" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q1: 1→0</text>
        <!-- AND -->
        <rect x="195" y="95" width="60" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="225" y="119" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <!-- AND out to T-FF2 -->
        <line x1="255" y1="114" x2="290" y2="114" stroke="#39ff14" stroke-width="2"/>
        <!-- T-FF2 -->
        <rect x="290" y="95" width="75" height="42" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="327" y="121" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">T-FF2</text>
        <!-- Q2 out -->
        <line x1="365" y1="114" x2="400" y2="114" stroke="#39ff14" stroke-width="2"/>
        <text x="408" y="119" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q2: 0→1</text>
        <!-- CLK -->
        <text x="8" y="165" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×2</text>
        <text x="8" y="185" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">AND carry: FF2 toggles only when Q1=1 — synchronous counting</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_T',   type: 'INPUT',     x: 140, y: 400, fixedValue: 1, label: 'T=1' },
      { id: 'clk_1',  type: 'CLOCK',     x: 140, y: 560, value: 0, label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 400, y: 460, linkedGroup: 'main', initialQ: 0, label: 'FF1' },
      { id: 'g1',     type: 'GATE_SLOT', x: 580, y: 460 },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 780, y: 460, linkedGroup: 'main', initialQ: 0, label: 'FF2' },
      { id: 'out_Q1', type: 'OUTPUT',    x: 980, y: 400, targetValue: 0, label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 980, y: 520, targetValue: 1, label: 'Q2' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_T',  targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',    sourceId: 'ff_1',  targetId: 'g1',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w3',    sourceId: 'in_T',  targetId: 'g1',     targetInputIndex: 1 },
      { id: 'w4',    sourceId: 'g1',    targetId: 'ff_2',   targetInputIndex: 0 },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'wo1',   sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L47 — LFSR (4 D-FFs shift register + XOR feedback from Q3,Q4 → D1)
  // Initial: Q1=1,Q2=1,Q3=0,Q4=0. After 3 STEPs: Q1=0,Q2=1,Q3=0,Q4=1.
  // XOR(Q3,Q4) creates pseudo-random sequence. Only XOR works (OR fails at step3 when Q3=Q4=1).
  {
    id: 47, name: 'LFSR', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'LFSR — a shift register with logic feedback. Used wherever pseudo-random sequences are needed: CRC in Ethernet NICs, scrambling in USB 3.0, Bluetooth encryption, and BIST (built-in self-test) in Intel chips.',
    instruction: 'Place one gate and 4 identical flip-flops, then click STEP three times',
    hint: 'The gate takes Q3 and Q4 and feeds back to FF1. The remaining FFs form a chain. At step 3, both Q3 and Q4 differ from 0 — which gate distinguishes between 1,1 and 1,0?',
    solution: {
      gatesUsed: ['XOR'],
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'LFSR — XOR(Q3,Q4) generates a pseudo-random sequence: 1100->0110->1011->0101. In hardware: CRC in Ethernet NICs, scrambling in USB 3.0, Bluetooth encryption, and BIST in Intel chips. The key: XOR(1,1)=0 but OR(1,1)=1.',
      blockSvg: `<svg viewBox="0 0 400 200" width="480" height="245">
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="97" x2="100" y2="97" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="25" width="190" height="150" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#00d4ff">LFSR</text>
        <text x="195" y="115" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#00d4ff">(4-bit)</text>
        <line x1="290" y1="52" x2="345" y2="52" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="57" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="290" y1="77" x2="345" y2="77" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="290" y1="107" x2="345" y2="107" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="112" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q3</text>
        <line x1="290" y1="137" x2="345" y2="137" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q4</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 680 170" width="820" height="210">
        <!-- Title -->
        <text x="8" y="20" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">LFSR: XOR(Q3,Q4) → D1 → D2 → D3 → D4</text>
        <!-- XOR gate -->
        <rect x="30" y="45" width="65" height="45" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="62" y="73" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">XOR</text>
        <line x1="95" y1="67" x2="130" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <!-- 4 D-FFs -->
        <rect x="130" y="45" width="80" height="50" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="170" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">D-FF1</text>
        <line x1="210" y1="67" x2="240" y2="67" stroke="#39ff14" stroke-width="2"/>
        <rect x="240" y="45" width="80" height="50" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="280" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">D-FF2</text>
        <line x1="320" y1="67" x2="350" y2="67" stroke="#39ff14" stroke-width="2"/>
        <rect x="350" y="45" width="80" height="50" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="390" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">D-FF3</text>
        <line x1="430" y1="67" x2="460" y2="67" stroke="#39ff14" stroke-width="2"/>
        <rect x="460" y="45" width="80" height="50" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="500" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">D-FF4</text>
        <!-- Outputs with timelines -->
        <line x1="540" y1="57" x2="565" y2="57" stroke="#c8d8f0" stroke-width="2"/>
        <text x="570" y="61" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q1: 0→1→0</text>
        <line x1="540" y1="72" x2="565" y2="72" stroke="#c8d8f0" stroke-width="2"/>
        <text x="570" y="76" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q2: 1→0→1</text>
        <text x="570" y="96" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q3: 1→1→0</text>
        <text x="570" y="116" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q4: 0→1→1</text>
        <!-- Feedback: Q3,Q4 → XOR -->
        <polyline points="390,95 390,130 15,130 15,57 30,57" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
        <text x="398" y="125" font-family="JetBrains Mono,monospace" font-size="10" fill="#ff6b6b">Q3</text>
        <polyline points="500,95 500,140 8,140 8,77 30,77" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
        <text x="508" y="135" font-family="JetBrains Mono,monospace" font-size="10" fill="#ff6b6b">Q4</text>
        <text x="250" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">Q3,Q4 → XOR → D1 FEEDBACK</text>
        <!-- Key insight -->
      </svg>`,
    },
    nodes: [
      { id: 'clk_1',  type: 'CLOCK',     x: 100, y: 780, value: 0, label: null },
      { id: 'g1',     type: 'GATE_SLOT', x: 200, y: 560 },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 380, y: 560, linkedGroup: 'pair_a', initialQ: 1, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 540, y: 560, linkedGroup: 'pair_a', initialQ: 1, label: 'FF2' },
      { id: 'ff_3',   type: 'FF_SLOT',   ffType: null, x: 700, y: 560, linkedGroup: 'pair_b', initialQ: 0, label: 'FF3' },
      { id: 'ff_4',   type: 'FF_SLOT',   ffType: null, x: 860, y: 560, linkedGroup: 'pair_b', initialQ: 0, label: 'FF4' },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1080, y: 400, targetValue: 0, stepTargets: [0, 1, 0], label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1080, y: 490, targetValue: 1, stepTargets: [1, 0, 1], label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',    x: 1080, y: 580, targetValue: 0, stepTargets: [1, 1, 0], label: 'Q3' },
      { id: 'out_Q4', type: 'OUTPUT',    x: 1080, y: 670, targetValue: 1, stepTargets: [0, 1, 1], label: 'Q4' },
    ],
    wires: [
      // Feedback: Q3,Q4 → XOR gate
      { id: 'wfb3', sourceId: 'ff_3',  targetId: 'g1',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wfb4', sourceId: 'ff_4',  targetId: 'g1',     targetInputIndex: 1, sourceOutputIndex: 0 },
      // XOR → D1
      { id: 'w1',   sourceId: 'g1',    targetId: 'ff_1',   targetInputIndex: 0 },
      // Shift chain: Q1→D2, Q2→D3, Q3→D4
      { id: 'w12',  sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w23',  sourceId: 'ff_2',  targetId: 'ff_3',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w34',  sourceId: 'ff_3',  targetId: 'ff_4',   targetInputIndex: 0, sourceOutputIndex: 0 },
      // All share same clock
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',  targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1', targetId: 'ff_3',  targetInputIndex: 1, isClockWire: true },
      { id: 'wclk4', sourceId: 'clk_1', targetId: 'ff_4',  targetInputIndex: 1, isClockWire: true },
      // Outputs
      { id: 'wo1',  sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',  sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo3',  sourceId: 'ff_3',  targetId: 'out_Q3', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo4',  sourceId: 'ff_4',  targetId: 'out_Q4', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L48 — PIPELINE WITH BYPASS (XOR + 3 D-FFs + AND bypass detector)
  // G1=XOR(A,B) processes input → 3-stage D-FF pipeline.
  // G2=AND(Q1,Q3) detects when data is in both first and last stage.
  // A=[1,1,0], B=[0,1,0]. XOR=[1,0,0]. After 3 steps: Q1=0,Q2=0,Q3=1, Z=AND(0,1)=0.
  // Unique: G1=XOR (NAND gives Q1=1 at step3→Z=1), G2=AND (OR gives Z=1).
  {
    id: 48, name: 'PIPELINE BYPASS', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Pipeline with bypass — a gate processes data, 3 flip-flops pass it through stages, another gate detects collisions. This is how the ARM Cortex pipeline works: Fetch->Decode->Execute, with bypass detection that prevents data hazards.',
    instruction: 'Place a gate in each slot and a flip-flop in every slot, then click STEP three times',
    hint: 'G1 processes A and B — at step 3 both are 0. Which gate outputs 0 when both inputs are 0? G2 checks if both Q1 and Q3 are active — which gate requires both to be 1?',
    solution: {
      gatesUsed: ['XOR', 'AND'],
      ffsUsed: ['D-FF', 'D-FF', 'D-FF'],
      explanation: 'Pipeline Bypass — XOR processes, 3 D-FFs shift one stage per clock, AND detects collision. In hardware: this is how the ARM Cortex pipeline works (Fetch->Decode->Execute). AND(Q1,Q3) is the bypass detector that prevents data hazards.',
      blockSvg: `<svg viewBox="0 0 420 200" width="500" height="245">
        <!-- Inputs -->
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="47" x2="110" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="92" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="87" x2="110" y2="77" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="110" y2="127" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="110" y="20" width="190" height="155" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">PIPELINE</text>
        <text x="205" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">BYPASS</text>
        <!-- Outputs -->
        <line x1="300" y1="45" x2="355" y2="45" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="50" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="300" y1="75" x2="355" y2="75" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="80" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
        <line x1="300" y1="105" x2="355" y2="105" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="110" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q3</text>
        <line x1="300" y1="145" x2="355" y2="145" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="150" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Z</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 700 180" width="850" height="220">
        <text x="8" y="20" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">Pipeline: XOR → D-FF1 → D-FF2 → D-FF3 | Bypass: AND(Q1,Q3)</text>
        <!-- Inputs -->
        <text x="8" y="55" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">A: 1→1→0</text>
        <text x="8" y="75" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">B: 0→1→0</text>
        <!-- XOR -->
        <line x1="100" y1="55" x2="130" y2="60" stroke="#39ff14" stroke-width="2"/>
        <line x1="100" y1="71" x2="130" y2="66" stroke="#39ff14" stroke-width="2"/>
        <rect x="130" y="45" width="55" height="35" rx="5" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="157" y="67" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#00d4ff">XOR</text>
        <line x1="185" y1="62" x2="215" y2="62" stroke="#39ff14" stroke-width="2"/>
        <!-- 3 D-FFs -->
        <rect x="215" y="45" width="70" height="40" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="250" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#00d4ff">D-FF1</text>
        <line x1="285" y1="62" x2="315" y2="62" stroke="#39ff14" stroke-width="2"/>
        <rect x="315" y="45" width="70" height="40" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="350" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#00d4ff">D-FF2</text>
        <line x1="385" y1="62" x2="415" y2="62" stroke="#39ff14" stroke-width="2"/>
        <rect x="415" y="45" width="70" height="40" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="450" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#00d4ff">D-FF3</text>
        <!-- Pipeline outputs -->
        <text x="500" y="55" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#c8d8f0">Q1: 1→0→0</text>
        <text x="500" y="70" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#c8d8f0">Q2: 0→1→0</text>
        <text x="500" y="85" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#c8d8f0">Q3: 0→0→1</text>
        <!-- AND bypass detector -->
        <line x1="250" y1="85" x2="250" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="250" y1="120" x2="510" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="450" y1="85" x2="450" y2="130" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="450" y1="130" x2="510" y2="130" stroke="#39ff14" stroke-width="1.5"/>
        <rect x="510" y="110" width="55" height="35" rx="5" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="537" y="132" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#00d4ff">AND</text>
        <line x1="565" y1="127" x2="600" y2="127" stroke="#c8d8f0" stroke-width="2"/>
        <text x="608" y="132" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#c8d8f0">Z: 0→0→0</text>
        <!-- CLK -->
        <text x="8" y="160" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="120" y="160" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Data propagates through pipeline: 1 enters at step 1, reaches Q3 at step 3</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 100, y: 380, fixedValue: 1, stepValues: [1, 1, 0], label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 100, y: 480, fixedValue: 0, stepValues: [0, 1, 0], label: 'B' },
      { id: 'clk_1',  type: 'CLOCK',     x: 100, y: 700, value: 0, label: null },
      { id: 'g1',     type: 'GATE_SLOT', x: 280, y: 430, label: 'G1' },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 450, y: 430, linkedGroup: 'pair_a', initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 600, y: 430, linkedGroup: 'pair_a', initialQ: 0, label: 'FF2' },
      { id: 'ff_3',   type: 'FF_SLOT',   ffType: null, x: 750, y: 430, linkedGroup: 'pair_b', initialQ: 0, label: 'FF3' },
      { id: 'g2',     type: 'GATE_SLOT', x: 900, y: 560 },
      { id: 'out_Q1', type: 'OUTPUT',    x: 1050, y: 360, targetValue: 0, stepTargets: [1, 0, 0], label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 1050, y: 430, targetValue: 0, stepTargets: [0, 1, 0], label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',    x: 1050, y: 500, targetValue: 1, stepTargets: [0, 0, 1], label: 'Q3' },
      { id: 'out_Z',  type: 'OUTPUT',    x: 1050, y: 600, targetValue: 0, stepTargets: [0, 0, 0], label: 'Z' },
    ],
    wires: [
      // G1(A,B) → FF1
      { id: 'w1',    sourceId: 'in_A',  targetId: 'g1',     targetInputIndex: 0 },
      { id: 'w2',    sourceId: 'in_B',  targetId: 'g1',     targetInputIndex: 1 },
      { id: 'w3',    sourceId: 'g1',    targetId: 'ff_1',   targetInputIndex: 0 },
      // Pipeline chain: FF1→FF2→FF3
      { id: 'w45',   sourceId: 'ff_1',  targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w56',   sourceId: 'ff_2',  targetId: 'ff_3',   targetInputIndex: 0, sourceOutputIndex: 0 },
      // Clock to all FFs
      { id: 'wclk1', sourceId: 'clk_1', targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1', targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1', targetId: 'ff_3',   targetInputIndex: 1, isClockWire: true },
      // Bypass detector: G2=AND(Q1, Q3) → Z
      { id: 'wb1',   sourceId: 'ff_1',  targetId: 'g2',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wb2',   sourceId: 'ff_3',  targetId: 'g2',     targetInputIndex: 1, sourceOutputIndex: 0 },
      { id: 'wz',    sourceId: 'g2',    targetId: 'out_Z',   targetInputIndex: 0 },
      // Outputs
      { id: 'wo1',   sourceId: 'ff_1',  targetId: 'out_Q1', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',  targetId: 'out_Q2', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo3',   sourceId: 'ff_3',  targetId: 'out_Q3', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L49 — HAZARD DETECTOR (XOR + D-FF, A→D-FF and XOR(A,Q)→Z, 3 steps)
  // A=[0,1,1]. D-FF stores prev A. XOR detects change. Z=0 at step 3 (no change).
  {
    id: 49, name: 'HAZARD DETECTOR', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Change detector — the flip-flop stores the previous value, the gate compares it to the current value and exposes changes. Found in microcontroller GPIO interfaces (edge detection), display controllers (pixel change detection), and processors for data hazard detection.',
    instruction: 'Place a gate and a flip-flop, then click STEP three times',
    hint: 'The flip-flop receives A directly and stores it for the next step. The gate compares current A to Q (previous A). Which gate outputs 1 when inputs differ?',
    solution: {
      gatesUsed: ['XOR'],
      ffsUsed: ['D-FF'],
      explanation: 'Hazard Detector — D-FF stores the previous value, XOR compares to the current one. In hardware: GPIO edge detection in microcontrollers (button press detection), pixel change detection in display controllers, and data hazard detection in processor pipelines.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="47" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="107" x2="100" y2="97" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">HAZARD</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">DETECTOR</text>
        <!-- Outputs -->
        <line x1="290" y1="62" x2="345" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Z</text>
        <line x1="290" y1="102" x2="345" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="107" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 210" width="630" height="255">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: A=0,Q=0→Z=0 | STEP 2: A=1,Q=0→Z=1 (change!) | STEP 3: A=1,Q=1→Z=0 (stable)</text>
        <!-- A input splits -->
        <text x="8" y="65" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A: 0→1→1</text>
        <line x1="95" y1="61" x2="120" y2="61" stroke="#39ff14" stroke-width="2"/>
        <!-- A splits: down to D-FF, right to XOR -->
        <line x1="120" y1="61" x2="120" y2="100" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="120" y1="100" x2="150" y2="100" stroke="#39ff14" stroke-width="2"/>
        <line x1="120" y1="61" x2="280" y2="50" stroke="#39ff14" stroke-width="2"/>
        <!-- D-FF -->
        <rect x="150" y="82" width="70" height="42" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="185" y="108" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <!-- Q output from D-FF -->
        <line x1="220" y1="100" x2="250" y2="100" stroke="#39ff14" stroke-width="2"/>
        <!-- Q branches: up to XOR, right to output -->
        <line x1="250" y1="100" x2="250" y2="65" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="250" y1="65" x2="280" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="250" y1="100" x2="420" y2="100" stroke="#39ff14" stroke-width="1.5"/>
        <text x="428" y="105" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q: 0→1→1</text>
        <!-- XOR gate -->
        <rect x="280" y="35" width="65" height="42" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="312" y="61" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">XOR</text>
        <!-- Z output from XOR -->
        <line x1="345" y1="56" x2="420" y2="56" stroke="#39ff14" stroke-width="2"/>
        <text x="428" y="61" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Z: 0→1→0</text>
        <!-- CLK -->
        <text x="8" y="145" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <line x1="55" y1="141" x2="150" y2="118" stroke="#ffcc00" stroke-width="2"/>
        <!-- Legend -->
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">D-FF stores previous A. XOR(A_current, A_prev) detects change.</text>
        <text x="8" y="195" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Z=1 only at STEP 2 when A changes from 0→1</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 160, y: 440, fixedValue: 0, stepValues: [0, 1, 1], label: 'A' },
      { id: 'clk_1',  type: 'CLOCK',     x: 160, y: 580, value: 0, label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 460, y: 520, initialQ: 0, label: 'FF' },
      { id: 'g1',     type: 'GATE_SLOT', x: 660, y: 440 },
      { id: 'out_Z',  type: 'OUTPUT',    x: 920, y: 380, targetValue: 0, stepTargets: [0, 1, 0], label: 'Z' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 920, y: 520, targetValue: 1, stepTargets: [0, 1, 1], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'ff_1',  targetInputIndex: 0 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1',  targetInputIndex: 1, isClockWire: true },
      { id: 'w2',   sourceId: 'in_A',  targetId: 'g1',    targetInputIndex: 0 },
      { id: 'w3',   sourceId: 'ff_1',  targetId: 'g1',    targetInputIndex: 1, sourceOutputIndex: 0 },
      { id: 'w4',   sourceId: 'g1',    targetId: 'out_Z', targetInputIndex: 0 },
      { id: 'w5',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L50 — DUAL-MODE REGISTER (2 AND gates linked + JK-FF, 3 steps)
  // G1=AND(A,B)=1 always→J. G2=AND(A,C)=[1,0,1]→K. JK: toggle,set,toggle→[1,1,0].
  {
    id: 50, name: 'DUAL-MODE REG', difficulty: 'Sequential Logic',
    minSteps: 3,
    description: 'Dual-mode register — two gates control J and K independently, enabling SET, RESET, and TOGGLE in the same circuit. Found in Ethernet controller state machines, PCI bus priority arbiters, and cache control circuits in processors.',
    instruction: 'Place a gate in both slots and a flip-flop, then click STEP three times',
    hint: 'Both gates must be identical. G1 receives A=1,B=1 (always). G2 receives A=1,C (changing). Which gate outputs 1 only when both are 1? And which flip-flop responds differently to J=1,K=1 vs J=1,K=0?',
    solution: {
      gatesUsed: ['AND', 'AND'],
      ffsUsed: ['JK-FF'],
      explanation: 'Dual-Mode Register — AND gates control J and K independently: TOGGLE, SET, TOGGLE. In hardware: state machines in Ethernet controllers, PCI bus priority arbiters, and cache level control in processors. Only JK-FF distinguishes between TOGGLE and SET.',
      blockSvg: `<svg viewBox="0 0 400 160" width="480" height="195">
        <!-- Inputs -->
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">A</text>
        <line x1="30" y1="37" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">B</text>
        <line x1="30" y1="77" x2="100" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="122" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">C</text>
        <line x1="30" y1="117" x2="100" y2="107" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="147" x2="100" y2="127" stroke="#ffcc00" stroke-width="2.5"/>
        <!-- Box -->
        <rect x="100" y="20" width="190" height="125" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="195" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">DUAL-MODE</text>
        <text x="195" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">REGISTER</text>
        <!-- Output -->
        <line x1="290" y1="82" x2="345" y2="82" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="87" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 220" width="630" height="270">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: J=1,K=1 → TOGGLE | STEP 2: J=1,K=0 → SET | STEP 3: J=1,K=1 → TOGGLE</text>
        <!-- Inputs -->
        <text x="8" y="50" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">A=1</text>
        <text x="8" y="72" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">B=1</text>
        <text x="8" y="130" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">C: 1→0→1</text>
        <!-- Lines to G1 -->
        <line x1="40" y1="46" x2="100" y2="46" stroke="#39ff14" stroke-width="2"/>
        <line x1="40" y1="68" x2="100" y2="56" stroke="#39ff14" stroke-width="2"/>
        <!-- G1 -->
        <rect x="100" y="32" width="60" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="130" y="55" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="160" y1="50" x2="220" y2="68" stroke="#39ff14" stroke-width="2"/>
        <text x="175" y="42" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">J=1</text>
        <!-- A branch down to G2 -->
        <line x1="55" y1="46" x2="55" y2="108" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="55" y1="108" x2="100" y2="108" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="65" y1="126" x2="100" y2="118" stroke="#39ff14" stroke-width="2"/>
        <!-- G2 -->
        <rect x="100" y="98" width="60" height="36" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="130" y="121" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="160" y1="116" x2="220" y2="92" stroke="#39ff14" stroke-width="2"/>
        <text x="175" y="130" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">K: 1→0→1</text>
        <!-- JK-FF -->
        <rect x="220" y="52" width="85" height="56" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="262" y="86" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">JK-FF</text>
        <!-- Q output -->
        <line x1="305" y1="80" x2="350" y2="80" stroke="#39ff14" stroke-width="2"/>
        <text x="358" y="85" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q: 1→1→0</text>
        <!-- CLK -->
        <text x="8" y="170" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="195" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Only JK-FF: TOGGLE when J=K=1, SET when J=1,K=0. T/D/SR all fail.</text>
        <text x="8" y="212" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Used in: Ethernet FSM, PCI bus arbiter, cache control</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_A',   type: 'INPUT',     x: 140, y: 360, fixedValue: 1, label: 'A' },
      { id: 'in_B',   type: 'INPUT',     x: 140, y: 450, fixedValue: 1, label: 'B' },
      { id: 'in_C',   type: 'INPUT',     x: 140, y: 540, fixedValue: 1, stepValues: [1, 0, 1], label: 'C' },
      { id: 'g1',     type: 'GATE_SLOT', x: 380, y: 400, linkedGroup: 'main', label: 'G1' },
      { id: 'g2',     type: 'GATE_SLOT', x: 380, y: 520, linkedGroup: 'main', label: 'G2' },
      { id: 'clk_1',  type: 'CLOCK',     x: 140, y: 640, value: 0, label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 660, y: 480, initialQ: 0, label: 'FF' },
      { id: 'out_Q',  type: 'OUTPUT',    x: 960, y: 480, targetValue: 0, stepTargets: [1, 1, 0], label: 'Q' },
    ],
    wires: [
      { id: 'w1',   sourceId: 'in_A',  targetId: 'g1',   targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_B',  targetId: 'g1',   targetInputIndex: 1 },
      { id: 'w3',   sourceId: 'in_A',  targetId: 'g2',   targetInputIndex: 0 },
      { id: 'w4',   sourceId: 'in_C',  targetId: 'g2',   targetInputIndex: 1 },
      { id: 'w5',   sourceId: 'g1',    targetId: 'ff_1', targetInputIndex: 0 },
      { id: 'w6',   sourceId: 'g2',    targetId: 'ff_1', targetInputIndex: 1 },
      { id: 'wclk', sourceId: 'clk_1', targetId: 'ff_1', targetInputIndex: 2, isClockWire: true },
      { id: 'w7',   sourceId: 'ff_1',  targetId: 'out_Q', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // TAB 6 — 6. FSM Applications  (IDs 51+)
  // State machines combining shift registers, feedback, and decode logic.
  // ════════════════════════════════════════════════════════════

  // L51 — ELEVATOR CONTROLLER (T-FF for floor + AND gate for door)
  // MOVE=[1,0,1]: elevator goes up, stops, goes down. CALL=1 constant.
  // T-FF toggles floor: 0→1→1→0. AND(FLOOR, CALL) → DOOR open only at floor 1.
  // Unique: AND (OR gives DOOR=1 at floor 0). T-FF (D-FF captures MOVE, wrong floor).
  {
    id: 51, name: 'ELEVATOR CTRL', difficulty: 'FSM Applications',
    minSteps: 3,
    description: 'Elevator Controller — a flip-flop tracks which floor the elevator is on. The door opens only when the elevator is at the requested floor. Found in every elevator PLC, building automation system, and industrial lift controller.',
    instruction: 'Control a 2-floor elevator. Open the door only at the right floor.',
    instructionHtml: '<div style="text-align:center;margin:18px 0"><svg viewBox="0 0 160 260" width="120" height="195"><rect x="10" y="10" width="140" height="240" rx="6" fill="#111" stroke="#444" stroke-width="2"/><rect x="25" y="25" width="110" height="95" rx="4" fill="#0a0f18" stroke="#333" stroke-width="1.5"/><text x="80" y="55" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">FLOOR 1</text><text x="80" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">CALL</text><rect x="25" y="135" width="110" height="95" rx="4" fill="#0a1a0a" stroke="#39ff14" stroke-width="2"/><text x="80" y="165" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">FLOOR 0</text><rect x="55" y="180" width="50" height="30" rx="3" fill="rgba(57,255,20,0.2)" stroke="#39ff14" stroke-width="1.5"/><text x="80" y="200" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#39ff14">DOOR</text><text x="80" y="248" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#888">Elevator starts at Floor 0</text></svg></div><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:8px 0">The elevator moves between floors with each MOVE signal.</p><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:4px 0">The <span style="color:#39ff14;font-weight:bold">DOOR</span> opens only when the elevator is at <span style="color:#39ff14;font-weight:bold">Floor 1</span> AND a call is active.</p><p style="text-align:center;color:#888;font-size:12px;margin:4px 0">Place a flip-flop and a gate, then STEP three times.</p>',
    hint: 'MOVE=1 makes the elevator change floors (toggle). MOVE=0 means stay. The door should open only when BOTH conditions are true: elevator at floor 1 AND call button pressed. Which flip-flop toggles? Which gate needs both inputs to be 1?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['T-FF'],
      explanation: 'Elevator Controller — T-FF toggles between floors (MOVE=1 changes floor, MOVE=0 stays). AND(FLOOR, CALL) opens the door only when at floor 1 with a call. OR would open the door at floor 0 too. D-FF would copy MOVE directly instead of toggling. Used in PLC elevator logic and building automation.',
      blockSvg: `<svg viewBox="0 0 420 180" width="510" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">MOVE</text>
        <line x1="60" y1="37" x2="110" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="82" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">CALL</text>
        <line x1="55" y1="77" x2="110" y2="77" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="110" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="110" y="20" width="190" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">ELEVATOR</text>
        <text x="205" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">CONTROLLER</text>
        <line x1="300" y1="52" x2="355" y2="52" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="57" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">FLOOR</text>
        <line x1="300" y1="112" x2="355" y2="112" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="117" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">DOOR</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: MOVE=1→up to F1, DOOR=1 | STEP 2: MOVE=0→stay F1, DOOR=1 | STEP 3: MOVE=1→down to F0, DOOR=0</text>
        <!-- Inputs -->
        <text x="8" y="55" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">MOVE: 1→0→1</text>
        <text x="8" y="80" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">CALL=1</text>
        <line x1="115" y1="51" x2="150" y2="51" stroke="#39ff14" stroke-width="2"/>
        <!-- T-FF -->
        <rect x="150" y="35" width="75" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="187" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <!-- FLOOR output -->
        <line x1="225" y1="55" x2="260" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="260" y1="55" x2="260" y2="95" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="260" y1="95" x2="300" y2="95" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="260" y1="55" x2="400" y2="55" stroke="#39ff14" stroke-width="1.5"/>
        <text x="408" y="60" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">FLOOR: 1→1→0</text>
        <!-- CALL to AND -->
        <line x1="60" y1="76" x2="300" y2="105" stroke="#39ff14" stroke-width="1.5"/>
        <!-- AND gate -->
        <rect x="300" y="85" width="60" height="35" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="330" y="107" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">AND</text>
        <!-- DOOR output -->
        <line x1="360" y1="102" x2="400" y2="102" stroke="#39ff14" stroke-width="2"/>
        <text x="408" y="107" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">DOOR: 1→1→0</text>
        <!-- CLK -->
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK x3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">T-FF toggles floor on MOVE=1, holds on MOVE=0. AND opens door only at Floor 1.</text>
        <text x="8" y="195" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Used in: elevator PLCs, building automation, industrial lift controllers</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_MOVE', type: 'INPUT',     x: 140, y: 420, fixedValue: 1, stepValues: [1, 0, 1], label: 'MOVE' },
      { id: 'in_CALL', type: 'INPUT',     x: 140, y: 530, fixedValue: 1, label: 'CALL' },
      { id: 'clk_1',   type: 'CLOCK',     x: 140, y: 650, value: 0, label: null },
      { id: 'ff_1',    type: 'FF_SLOT',   ffType: null, x: 420, y: 460, initialQ: 0, label: 'FF' },
      { id: 'g1',      type: 'GATE_SLOT', x: 650, y: 540 },
      { id: 'out_FL',  type: 'OUTPUT',    x: 880, y: 420, targetValue: 0, stepTargets: [1, 1, 0], label: 'FLOOR' },
      { id: 'out_DR',  type: 'OUTPUT',    x: 880, y: 560, targetValue: 0, stepTargets: [1, 1, 0], label: 'DOOR' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_MOVE', targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'wclk',  sourceId: 'clk_1',   targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'w2',    sourceId: 'ff_1',    targetId: 'g1',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w3',    sourceId: 'in_CALL', targetId: 'g1',     targetInputIndex: 1 },
      { id: 'woFL',  sourceId: 'ff_1',    targetId: 'out_FL', targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'woDR',  sourceId: 'g1',      targetId: 'out_DR', targetInputIndex: 0 },
    ],
  },

  // L52 — ALARM SYSTEM (OR gate + SR-FF, sensor triggers alarm that stays on)
  // SENSOR=[0,1,0], ZONE=[1,0,0]. OR=[1,1,0]→S. RESET=0→R.
  // SR-FF: SET, SET, HOLD → Q=[1,1,1]. Alarm stays on even after sensors clear.
  // Unique: OR (AND gives S=[0,0,0]→alarm never triggers). SR-FF (D captures 0 at step3).
  {
    id: 52, name: 'ALARM SYSTEM', difficulty: 'FSM Applications',
    minSteps: 3,
    description: 'Alarm System — sensors detect intruders and trigger an alarm. The alarm stays ON even after the sensors clear — only a manual RESET can turn it off. This is how every burglar alarm, fire alarm, and industrial safety system works.',
    instruction: 'Build an alarm that triggers and stays on.',
    instructionHtml: '<div style="text-align:center;margin:18px 0"><svg viewBox="0 0 200 210" width="150" height="158"><rect x="20" y="10" width="160" height="160" rx="10" fill="#111" stroke="#444" stroke-width="2"/><circle cx="100" cy="70" r="35" fill="rgba(255,68,68,0.1)" stroke="#ff4444" stroke-width="2"/><text x="100" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="20" font-weight="bold" fill="#ff4444">!</text><text x="100" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#ff4444">ALARM</text><text x="60" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#39ff14">SENSOR</text><circle cx="60" cy="140" r="8" fill="rgba(57,255,20,0.2)" stroke="#39ff14" stroke-width="1.5"/><text x="140" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#39ff14">ZONE</text><circle cx="140" cy="140" r="8" fill="rgba(57,255,20,0.2)" stroke="#39ff14" stroke-width="1.5"/><text x="100" y="195" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Alarm stays ON until RESET</text></svg></div><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:8px 0">Two sensors watch different zones. <span style="color:#ff4444;font-weight:bold">Any</span> detection triggers the alarm.</p><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:4px 0">The alarm <span style="color:#ff4444;font-weight:bold">stays ON</span> even after the intruder leaves — it remembers!</p><p style="text-align:center;color:#888;font-size:12px;margin:4px 0">Place a gate and flip-flop, then STEP three times.</p>',
    hint: 'Two sensors, either one should trigger the alarm. Which gate outputs 1 when AT LEAST ONE input is 1? The alarm must stay on after the sensors clear — which flip-flop has a HOLD mode that remembers?',
    solution: {
      gatesUsed: ['OR'],
      ffsUsed: ['SR-FF'],
      explanation: 'Alarm System — OR gate triggers on ANY sensor (either zone is enough). SR-FF latches the alarm: once SET, it stays on via HOLD (S=R=0). D-FF would turn off when sensors clear (captures S=0). AND would require BOTH sensors simultaneously. Every burglar alarm uses this exact SR latch pattern.',
      blockSvg: `<svg viewBox="0 0 420 180" width="510" height="220">
        <text x="12" y="42" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">SENSOR</text>
        <line x1="75" y1="37" x2="110" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="72" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">ZONE</text>
        <line x1="55" y1="67" x2="110" y2="67" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="112" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">RESET</text>
        <line x1="65" y1="107" x2="110" y2="97" stroke="#ff4444" stroke-width="2.5"/>
        <text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="147" x2="110" y2="127" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="110" y="20" width="190" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="72" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">ALARM</text>
        <text x="205" y="97" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">SYSTEM</text>
        <line x1="300" y1="82" x2="355" y2="82" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="87" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">ALARM</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">S1: ZONE triggers→SET | S2: SENSOR triggers→SET | S3: both clear→HOLD (alarm stays!)</text>
        <text x="8" y="50" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">SENSOR: 0→1→0</text>
        <text x="8" y="70" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">ZONE: 1→0→0</text>
        <line x1="130" y1="46" x2="170" y2="55" stroke="#39ff14" stroke-width="2"/>
        <line x1="130" y1="66" x2="170" y2="62" stroke="#39ff14" stroke-width="2"/>
        <!-- OR gate -->
        <rect x="170" y="42" width="60" height="35" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="200" y="64" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">OR</text>
        <line x1="230" y1="59" x2="270" y2="59" stroke="#39ff14" stroke-width="2"/>
        <text x="242" y="52" font-family="JetBrains Mono,monospace" font-size="9" fill="#888">S: 1→1→0</text>
        <!-- RESET -->
        <text x="8" y="105" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ff4444">RESET=0</text>
        <line x1="80" y1="101" x2="270" y2="75" stroke="#ff4444" stroke-width="1.5"/>
        <!-- SR-FF -->
        <rect x="270" y="45" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="310" y="73" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#a0c8ff">SR-FF</text>
        <!-- ALARM output -->
        <line x1="350" y1="67" x2="400" y2="67" stroke="#39ff14" stroke-width="2"/>
        <text x="408" y="72" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ff4444">ALARM: 1→1→1</text>
        <!-- CLK -->
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK x3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">OR: any sensor triggers. SR-FF: SET then HOLD — alarm remembers!</text>
        <text x="8" y="195" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Used in: burglar alarms, fire systems, industrial safety latches</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_SEN',  type: 'INPUT',     x: 140, y: 380, fixedValue: 0, stepValues: [0, 1, 0], label: 'SENSOR' },
      { id: 'in_ZONE', type: 'INPUT',     x: 140, y: 470, fixedValue: 1, stepValues: [1, 0, 0], label: 'ZONE' },
      { id: 'in_RST',  type: 'INPUT',     x: 140, y: 560, fixedValue: 0, label: 'RESET' },
      { id: 'clk_1',   type: 'CLOCK',     x: 140, y: 670, value: 0, label: null },
      { id: 'g1',      type: 'GATE_SLOT', x: 400, y: 430 },
      { id: 'ff_1',    type: 'FF_SLOT',   ffType: null, x: 650, y: 480, initialQ: 0, label: 'FF' },
      { id: 'out_ALM', type: 'OUTPUT',    x: 900, y: 480, targetValue: 1, stepTargets: [1, 1, 1], label: 'ALARM' },
    ],
    wires: [
      // SENSOR, ZONE → OR gate
      { id: 'w1',   sourceId: 'in_SEN',  targetId: 'g1',     targetInputIndex: 0 },
      { id: 'w2',   sourceId: 'in_ZONE', targetId: 'g1',     targetInputIndex: 1 },
      // OR → S (input 0 of FF)
      { id: 'w3',   sourceId: 'g1',      targetId: 'ff_1',   targetInputIndex: 0 },
      // RESET → R (input 1 of FF)
      { id: 'w4',   sourceId: 'in_RST',  targetId: 'ff_1',   targetInputIndex: 1 },
      // Clock
      { id: 'wclk', sourceId: 'clk_1',   targetId: 'ff_1',   targetInputIndex: 2, isClockWire: true },
      // Output
      { id: 'woA',  sourceId: 'ff_1',    targetId: 'out_ALM', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L53 — TRAFFIC LIGHT CONTROLLER (3 D-FFs ring + AND gate for pedestrian walk signal)
  // Ring counter: G=1,Y=0,R=0 → G=0,Y=1,R=0 → G=0,Y=0,R=1
  // AND(Q_R, BUTTON) → WALK signal. BUTTON=1 constant.
  // Step 1: WALK=AND(0,1)=0 (GREEN, no walk). Step 2: WALK=AND(1,1)=1 (RED, walk!).
  // Unique: AND (OR gives WALK=1 at step1 because OR(0,1)=1). D-FF (T-FF toggles wrong).
  {
    id: 53, name: 'TRAFFIC LIGHT', difficulty: 'FSM Applications',
    minSteps: 2,
    description: 'You are building a real traffic light controller. The light starts GREEN, then cycles to YELLOW, then RED. A pedestrian presses the WALK button — but they should only be allowed to cross when the light is RED. Build the circuit that makes this happen.',
    instruction: 'Build a traffic light: GREEN → YELLOW → RED. When RED is on and the button is pressed, WALK turns on.',
    instructionHtml: '<div style="text-align:center;margin:16px 0"><svg viewBox="0 0 200 310" width="120" height="186"><rect x="50" y="10" width="100" height="240" rx="16" fill="#181818" stroke="#555" stroke-width="3"/><circle cx="100" cy="60" r="30" fill="rgba(57,255,20,0.85)" stroke="#39ff14" stroke-width="3"/><text x="100" y="67" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#fff">GREEN</text><circle cx="100" cy="130" r="30" fill="rgba(255,204,0,0.25)" stroke="#ffcc00" stroke-width="2"/><text x="100" y="137" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#ffcc00">YELLOW</text><circle cx="100" cy="200" r="30" fill="rgba(255,68,68,0.2)" stroke="#ff4444" stroke-width="2"/><text x="100" y="207" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" fill="#ff4444">RED</text><text x="100" y="280" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" fill="#888">START → STEP → STEP</text></svg></div><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:8px 0">Build the circuit that rotates the light from <span style="color:#39ff14;font-weight:bold">GREEN</span> → <span style="color:#ffcc00;font-weight:bold">YELLOW</span> → <span style="color:#ff4444;font-weight:bold">RED</span></p><p style="text-align:center;color:#888;font-size:13px">When <span style="color:#ff4444;font-weight:bold">RED</span> is on and the button is pressed → <span style="color:#39ff14;font-weight:bold">WALK = 1</span></p>',
    hint: 'Think about a real intersection: 3 lights take turns — only one is on at a time (ring counter). The WALK signal needs BOTH conditions: the light is RED AND the button is pressed. Which gate outputs 1 only when both inputs are 1?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['D-FF', 'D-FF', 'D-FF'],
      explanation: 'Traffic Light Controller — 3 D-FFs in a ring rotate a single "1" bit: GREEN→YELLOW→RED. AND(RED, BUTTON) produces WALK=1 only during RED phase. OR would allow walking during GREEN (OR(0,1)=1). This exact FSM runs in traffic controllers at every intersection.',
      blockSvg: `<svg viewBox="0 0 420 200" width="510" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">BTN</text>
        <line x1="50" y1="47" x2="110" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="152" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="147" x2="110" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="110" y="25" width="190" height="140" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="75" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">TRAFFIC LIGHT</text>
        <text x="205" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#00d4ff">CONTROLLER</text>
        <!-- Traffic light visual -->
        <circle cx="205" cy="130" r="8" fill="none" stroke="#39ff14" stroke-width="2"/>
        <circle cx="225" cy="130" r="8" fill="none" stroke="#ffcc00" stroke-width="2"/>
        <circle cx="245" cy="130" r="8" fill="none" stroke="#ff4444" stroke-width="2"/>
        <!-- Outputs -->
        <line x1="300" y1="42" x2="355" y2="42" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="47" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">G</text>
        <line x1="300" y1="72" x2="355" y2="72" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="77" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">Y</text>
        <line x1="300" y1="102" x2="355" y2="102" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="107" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ff4444">R</text>
        <line x1="300" y1="142" x2="355" y2="142" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="147" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">WALK</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 620 250" width="750" height="305">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Ring counter: G→Y→R→G... | WALK = AND(RED, BUTTON)</text>
        <!-- Traffic light visualization -->
        <rect x="440" y="30" width="50" height="120" rx="8" fill="rgba(20,20,20,0.95)" stroke="#444" stroke-width="2"/>
        <circle cx="465" cy="55" r="14" fill="rgba(57,255,20,0.15)" stroke="#39ff14" stroke-width="2"/>
        <text x="465" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#39ff14">G</text>
        <circle cx="465" cy="90" r="14" fill="rgba(255,204,0,0.15)" stroke="#ffcc00" stroke-width="2"/>
        <text x="465" y="94" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" fill="#ffcc00">Y</text>
        <circle cx="465" cy="125" r="14" fill="rgba(255,68,68,0.8)" stroke="#ff4444" stroke-width="2.5"/>
        <text x="465" y="129" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="8" font-weight="bold" fill="#fff">R</text>
        <text x="465" y="162" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#39ff14">WALK</text>
        <!-- Ring: D-FF_G → D-FF_Y → D-FF_R → feedback to D-FF_G -->
        <rect x="30" y="40" width="70" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#39ff14" stroke-width="2"/>
        <text x="65" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#39ff14">D-FF G</text>
        <line x1="100" y1="60" x2="140" y2="60" stroke="#39ff14" stroke-width="2"/>
        <rect x="140" y="40" width="70" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#ffcc00" stroke-width="2"/>
        <text x="175" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#ffcc00">D-FF Y</text>
        <line x1="210" y1="60" x2="250" y2="60" stroke="#ffcc00" stroke-width="2"/>
        <rect x="250" y="40" width="70" height="40" rx="5" fill="rgba(14,31,51,0.96)" stroke="#ff4444" stroke-width="2"/>
        <text x="285" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#ff4444">D-FF R</text>
        <!-- Feedback R → G -->
        <polyline points="285,80 285,110 15,110 15,50 30,50" stroke="#ff6b6b" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
        <text x="150" y="125" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" font-weight="bold" fill="#ff6b6b">R → G FEEDBACK (ring)</text>
        <!-- AND gate for WALK -->
        <line x1="285" y1="80" x2="285" y2="155" stroke="#ff4444" stroke-width="1.5"/>
        <line x1="285" y1="155" x2="330" y2="155" stroke="#ff4444" stroke-width="1.5"/>
        <text x="8" y="170" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">BTN=1</text>
        <line x1="60" y1="166" x2="330" y2="166" stroke="#39ff14" stroke-width="1.5"/>
        <rect x="330" y="143" width="55" height="35" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="357" y="165" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="385" y1="160" x2="420" y2="160" stroke="#39ff14" stroke-width="2"/>
        <text x="395" y="150" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">WALK</text>
        <!-- State sequence -->
        <text x="8" y="200" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">init: G=1 Y=0 R=0 (GREEN)</text>
        <text x="8" y="218" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">S1:   G=0 Y=1 R=0 (YELLOW) WALK=0</text>
        <text x="8" y="236" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#39ff14">S2:   G=0 Y=0 R=1 (RED)    WALK=1</text>
      </svg>`,
    },
    nodes: [
      // Button input (constant 1)
      { id: 'in_BTN', type: 'INPUT',     x: 100, y: 380, fixedValue: 1, label: 'BTN' },
      // Clock
      { id: 'clk_1',  type: 'CLOCK',     x: 100, y: 680, value: 0, label: null },
      // 3 D-FFs in ring: G → Y → R → G
      { id: 'ff_G',   type: 'FF_SLOT',   ffType: null, x: 350, y: 440, initialQ: 1, label: 'G' },
      { id: 'ff_Y',   type: 'FF_SLOT',   ffType: null, x: 550, y: 440, initialQ: 0, label: 'Y' },
      { id: 'ff_R',   type: 'FF_SLOT',   ffType: null, x: 750, y: 440, initialQ: 0, label: 'R' },
      // AND gate: WALK = AND(R, BTN)
      { id: 'g1',     type: 'GATE_SLOT', x: 900, y: 560 },
      // Outputs
      { id: 'out_G',    type: 'OUTPUT',  x: 350, y: 340, targetValue: 0, stepTargets: [0, 0], label: 'G' },
      { id: 'out_Y',    type: 'OUTPUT',  x: 550, y: 340, targetValue: 0, stepTargets: [1, 0], label: 'Y' },
      { id: 'out_R',    type: 'OUTPUT',  x: 750, y: 340, targetValue: 1, stepTargets: [0, 1], label: 'R' },
      { id: 'out_WALK', type: 'OUTPUT',  x: 1050, y: 560, targetValue: 1, stepTargets: [0, 1], label: 'WALK' },
    ],
    wires: [
      // Ring: R→G, G→Y, Y→R
      { id: 'wRG',   sourceId: 'ff_R',  targetId: 'ff_G',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wGY',   sourceId: 'ff_G',  targetId: 'ff_Y',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wYR',   sourceId: 'ff_Y',  targetId: 'ff_R',     targetInputIndex: 0, sourceOutputIndex: 0 },
      // Clock to all FFs
      { id: 'wclkG', sourceId: 'clk_1', targetId: 'ff_G',     targetInputIndex: 1, isClockWire: true },
      { id: 'wclkY', sourceId: 'clk_1', targetId: 'ff_Y',     targetInputIndex: 1, isClockWire: true },
      { id: 'wclkR', sourceId: 'clk_1', targetId: 'ff_R',     targetInputIndex: 1, isClockWire: true },
      // AND(R, BTN) → WALK
      { id: 'wRA',   sourceId: 'ff_R',  targetId: 'g1',       targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wBA',   sourceId: 'in_BTN', targetId: 'g1',      targetInputIndex: 1 },
      // Outputs
      { id: 'woG',   sourceId: 'ff_G',  targetId: 'out_G',    targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'woY',   sourceId: 'ff_Y',  targetId: 'out_Y',    targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'woR',   sourceId: 'ff_R',  targetId: 'out_R',    targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'woW',   sourceId: 'g1',    targetId: 'out_WALK', targetInputIndex: 0 },
    ],
  },

  // L54 — VENDING MACHINE (3 D-FFs shift register + AND decode = coin counter)
  // COIN=1 constant. 3 D-FFs count: 5₪→10₪→15₪. AND(Q2,Q3) → VEND at 15₪.
  {
    id: 54, name: 'VENDING MACHINE', difficulty: 'FSM Applications',
    minSteps: 3,
    description: 'Vending Machine — insert three 5₪ coins to buy a drink (15₪). The shift register counts coins: each flip-flop represents 5₪ added. When all three are full, the machine vends. Found in every coin-operated machine, parking meter, and arcade system.',
    instruction: 'Insert 3 coins to get your drink!',
    instructionHtml: '<div style="text-align:center;margin:18px 0"><svg viewBox="0 0 180 280" width="135" height="210"><rect x="15" y="10" width="150" height="220" rx="12" fill="#151515" stroke="#444" stroke-width="2.5"/><rect x="30" y="25" width="120" height="60" rx="6" fill="#0a0a0a" stroke="#333" stroke-width="1.5"/><circle cx="60" cy="55" r="12" fill="rgba(255,68,68,0.6)" stroke="#ff4444" stroke-width="1.5"/><circle cx="90" cy="55" r="12" fill="rgba(57,255,20,0.15)" stroke="#39ff14" stroke-width="1"/><circle cx="120" cy="55" r="12" fill="rgba(0,180,255,0.15)" stroke="#00b4ff" stroke-width="1"/><text x="90" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#ffcc00">15₪</text><text x="90" y="130" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">3 x 5₪ coins</text><rect x="55" y="145" width="70" height="30" rx="6" fill="#0a0a0a" stroke="#ffcc00" stroke-width="1.5"/><text x="90" y="165" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#ffcc00">COIN SLOT</text><rect x="55" y="190" width="70" height="25" rx="4" fill="rgba(57,255,20,0.1)" stroke="#39ff14" stroke-width="1"/><text x="90" y="207" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" fill="#39ff14">VEND</text><text x="90" y="253" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="#888">Insert coins → STEP x3</text></svg></div><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:8px 0">A drink costs <span style="color:#ffcc00;font-weight:bold">15₪</span>. Each STEP inserts a <span style="color:#ffcc00;font-weight:bold">5₪</span> coin.</p><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:4px 0">Build a counter that tracks coins and <span style="color:#39ff14;font-weight:bold">vends when full</span>.</p><p style="text-align:center;color:#888;font-size:12px;margin:4px 0">Place flip-flops and a gate, then STEP three times.</p>',
    hint: 'Each FF stores one coin: FF1=first coin, FF2=second, FF3=third. They form a shift register — each coin shifts through. VEND should activate only when the last TWO stages are full (10₪+5₪=15₪). Which gate needs both inputs to be 1?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['D-FF', 'D-FF', 'D-FF'],
      explanation: 'Vending Machine — 3 D-FFs in a shift register count coins. Each STEP shifts a "1" one stage deeper: 5₪→10₪→15₪. AND(Q2,Q3) vends only when both deep stages are full (at least 15₪). OR would vend too early (at 10₪). Used in coin-op machines, parking meters, and arcade token systems.',
      blockSvg: `<svg viewBox="0 0 420 200" width="510" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#ffcc00">COIN</text>
        <line x1="55" y1="47" x2="110" y2="57" stroke="#ffcc00" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="110" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="110" y="25" width="190" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="65" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">VENDING</text>
        <text x="205" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">MACHINE</text>
        <text x="205" y="115" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#ffcc00">3 x 5₪ = 15₪</text>
        <line x1="300" y1="47" x2="345" y2="47" stroke="#c8d8f0" stroke-width="2"/>
        <text x="353" y="52" font-family="JetBrains Mono,monospace" font-size="12" fill="#c8d8f0">5₪</text>
        <line x1="300" y1="67" x2="345" y2="67" stroke="#c8d8f0" stroke-width="2"/>
        <text x="353" y="72" font-family="JetBrains Mono,monospace" font-size="12" fill="#c8d8f0">10₪</text>
        <line x1="300" y1="87" x2="345" y2="87" stroke="#c8d8f0" stroke-width="2"/>
        <text x="353" y="92" font-family="JetBrains Mono,monospace" font-size="12" fill="#c8d8f0">15₪</text>
        <line x1="300" y1="120" x2="345" y2="120" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="353" y="125" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">VEND</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 580 200" width="700" height="245">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">STEP 1: 5₪ inserted | STEP 2: 10₪ total | STEP 3: 15₪ → VEND!</text>
        <text x="8" y="50" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#ffcc00">COIN=1</text>
        <line x1="75" y1="46" x2="110" y2="46" stroke="#ffcc00" stroke-width="2"/>
        <!-- 3 D-FFs -->
        <rect x="110" y="30" width="70" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="145" y="54" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <text x="145" y="28" font-family="JetBrains Mono,monospace" font-size="9" fill="#ffcc00">5₪</text>
        <line x1="180" y1="46" x2="210" y2="46" stroke="#39ff14" stroke-width="2"/>
        <rect x="210" y="30" width="70" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="245" y="54" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <text x="245" y="28" font-family="JetBrains Mono,monospace" font-size="9" fill="#ffcc00">10₪</text>
        <line x1="280" y1="46" x2="310" y2="46" stroke="#39ff14" stroke-width="2"/>
        <rect x="310" y="30" width="70" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="345" y="54" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">D-FF</text>
        <text x="345" y="28" font-family="JetBrains Mono,monospace" font-size="9" fill="#ffcc00">15₪</text>
        <!-- Outputs -->
        <text x="400" y="37" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">5₪: 1→1→1</text>
        <text x="400" y="52" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">10₪: 0→1→1</text>
        <text x="400" y="67" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">15₪: 0→0→1</text>
        <!-- AND decode -->
        <line x1="245" y1="68" x2="245" y2="105" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="245" y1="105" x2="400" y2="105" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="345" y1="68" x2="345" y2="115" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="345" y1="115" x2="400" y2="115" stroke="#39ff14" stroke-width="1.5"/>
        <rect x="400" y="98" width="55" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="427" y="117" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="455" y1="113" x2="490" y2="113" stroke="#39ff14" stroke-width="2"/>
        <text x="498" y="118" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">VEND: 0→0→1</text>
        <!-- CLK -->
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK x3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Each coin shifts through the register. AND vends only when 10₪+15₪ stages are full.</text>
        <text x="8" y="195" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Used in: coin-op machines, parking meters, arcade token systems</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_COIN', type: 'INPUT',     x: 140, y: 440, fixedValue: 1, label: 'COIN' },
      { id: 'clk_1',   type: 'CLOCK',     x: 140, y: 680, value: 0, label: null },
      { id: 'ff_1',    type: 'FF_SLOT',   ffType: null, x: 370, y: 480, initialQ: 0, label: '5₪' },
      { id: 'ff_2',    type: 'FF_SLOT',   ffType: null, x: 540, y: 480, initialQ: 0, label: '10₪' },
      { id: 'ff_3',    type: 'FF_SLOT',   ffType: null, x: 710, y: 480, initialQ: 0, label: '15₪' },
      { id: 'g1',      type: 'GATE_SLOT', x: 880, y: 560 },
      { id: 'out_5',   type: 'OUTPUT',    x: 370, y: 380, targetValue: 1, stepTargets: [1, 1, 1], label: '5₪' },
      { id: 'out_10',  type: 'OUTPUT',    x: 540, y: 380, targetValue: 1, stepTargets: [0, 1, 1], label: '10₪' },
      { id: 'out_V',   type: 'OUTPUT',    x: 1050, y: 560, targetValue: 1, stepTargets: [0, 0, 1], label: '15₪' },
    ],
    wires: [
      { id: 'w1',    sourceId: 'in_COIN', targetId: 'ff_1',   targetInputIndex: 0 },
      { id: 'w12',   sourceId: 'ff_1',    targetId: 'ff_2',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w23',   sourceId: 'ff_2',    targetId: 'ff_3',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wclk1', sourceId: 'clk_1',   targetId: 'ff_1',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1',   targetId: 'ff_2',   targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1',   targetId: 'ff_3',   targetInputIndex: 1, isClockWire: true },
      { id: 'wA1',   sourceId: 'ff_2',    targetId: 'g1',     targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wA2',   sourceId: 'ff_3',    targetId: 'g1',     targetInputIndex: 1, sourceOutputIndex: 0 },
      { id: 'wV',    sourceId: 'g1',      targetId: 'out_V',  targetInputIndex: 0 },
      { id: 'wo1',   sourceId: 'ff_1',    targetId: 'out_5',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',    targetId: 'out_10', targetInputIndex: 0, sourceOutputIndex: 0 },
    ],
  },

  // L55 — PASSWORD LOCK (4 D-FFs shift register + AND decode, sequence 1-0-1-1)
  {
    id: 55, name: 'PASSWORD LOCK', difficulty: 'FSM Applications',
    minSteps: 4,
    description: 'Password Lock — the code is 1-0-1-1. A shift register captures bits, but the "0" in the code needs to be inverted before storage. You need both a gate to flip the bit AND the right flip-flops to shift data. Used in keycard readers, PIN decoders, and serial authentication.',
    instruction: 'Enter the code 1-0-1-1 to unlock the safe.',
    instructionHtml: '<div style="text-align:center;margin:18px 0"><svg viewBox="0 0 240 200" width="180" height="150"><rect x="20" y="10" width="200" height="150" rx="12" fill="#111" stroke="#444" stroke-width="3"/><rect x="30" y="20" width="180" height="50" rx="6" fill="#0a0a0a" stroke="#333" stroke-width="2"/><text x="120" y="52" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="28" font-weight="bold" fill="#39ff14" letter-spacing="12">1 0 1 1</text><circle cx="120" cy="110" r="25" fill="#1a1a1a" stroke="#555" stroke-width="2"/><text x="120" y="116" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ff4444">LOCKED</text><text x="120" y="185" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">Enter the correct sequence to unlock</text></svg></div><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:8px 0">Build a shift register that stores the last 4 inputs.</p><p style="text-align:center;color:#c8d8f0;font-size:14px;margin:4px 0">When the code <span style="color:#39ff14;font-weight:bold;letter-spacing:3px">1-0-1-1</span> is loaded, the lock opens.</p><p style="text-align:center;color:#888;font-size:12px;margin:4px 0">Place flip-flops and a gate, then press STEP four times.</p>',
    hint: 'FF1-FF2 shift normally, then a gate inverts the bit before FF3, then FF4 shifts again. The "0" in the code needs to become "1" in Q3. Which gate inverts? UNLOCK needs Q1 AND Q2 both = 1.',
    solution: {
      gatesUsed: ['NOT', 'AND'],
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'Password Lock — 4 D-FFs shift the code, NOT gate inverts the "0" bit so FF3 stores 1. Final state: Q1=1,Q2=1,Q3=1(inverted!),Q4=0. AND(Q1,Q2)=1 only at step 4 when both last bits are 1 → UNLOCK. Used in serial authentication and pattern matching with bit masking.',
      blockSvg: `<svg viewBox="0 0 420 200" width="510" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">KEY</text>
        <line x1="45" y1="47" x2="110" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="110" y2="117" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="110" y="25" width="190" height="140" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="205" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">PASSWORD</text>
        <text x="205" y="95" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">LOCK</text>
        <text x="205" y="120" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">1-0-1-1</text>
        <line x1="300" y1="42" x2="355" y2="42" stroke="#c8d8f0" stroke-width="2"/>
        <text x="363" y="47" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q1-Q4</text>
        <line x1="300" y1="130" x2="355" y2="130" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="363" y="135" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">UNLOCK</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 720 220" width="870" height="270">
        <text x="8" y="18" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">KEY = 1→0→1→1 | NOT inverts the "0" | After 4 steps: Q1=1, Q2=1, Q3=1(inv!), Q4=0 → UNLOCK!</text>
        <!-- KEY input -->
        <text x="8" y="55" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">KEY</text>
        <line x1="40" y1="51" x2="70" y2="51" stroke="#39ff14" stroke-width="2"/>
        <!-- FF1 -->
        <rect x="70" y="35" width="65" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="102" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <line x1="135" y1="51" x2="160" y2="51" stroke="#39ff14" stroke-width="2"/>
        <!-- FF2 -->
        <rect x="160" y="35" width="65" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="192" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <line x1="225" y1="51" x2="250" y2="51" stroke="#39ff14" stroke-width="2"/>
        <!-- NOT gate (inverter) -->
        <rect x="250" y="35" width="55" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#ff6b6b" stroke-width="2"/>
        <text x="277" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">NOT</text>
        <line x1="305" y1="51" x2="330" y2="51" stroke="#ff6b6b" stroke-width="2"/>
        <!-- FF3 -->
        <rect x="330" y="35" width="65" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="362" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <line x1="395" y1="51" x2="420" y2="51" stroke="#39ff14" stroke-width="2"/>
        <!-- FF4 -->
        <rect x="420" y="35" width="65" height="38" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="452" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#a0c8ff">D-FF4</text>
        <!-- Q outputs -->
        <text x="505" y="37" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">Q1: 1→0→1→1</text>
        <text x="505" y="52" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">Q2: 0→1→0→1</text>
        <text x="505" y="67" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">Q3: 1→1→0→1 (inv)</text>
        <text x="505" y="82" font-family="JetBrains Mono,monospace" font-size="10" fill="#c8d8f0">Q4: 0→1→1→0</text>
        <!-- AND(Q1, Q2) decode -->
        <line x1="102" y1="73" x2="102" y2="110" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="102" y1="110" x2="520" y2="110" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="192" y1="73" x2="192" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <line x1="192" y1="120" x2="520" y2="120" stroke="#39ff14" stroke-width="1.5"/>
        <rect x="520" y="103" width="55" height="30" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="547" y="122" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#a0c8ff">AND</text>
        <line x1="575" y1="118" x2="610" y2="118" stroke="#39ff14" stroke-width="2"/>
        <text x="618" y="123" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#39ff14">UNLOCK</text>
        <!-- Safe -->
        <rect x="620" y="30" width="70" height="60" rx="8" fill="#111" stroke="#555" stroke-width="2"/>
        <circle cx="655" cy="55" r="10" fill="none" stroke="#39ff14" stroke-width="2"/>
        <text x="655" y="59" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="7" font-weight="bold" fill="#39ff14">OPEN</text>
        <!-- CLK -->
        <text x="8" y="155" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK x4</text>
        <text x="8" y="180" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">NOT inverts the "0" in the code so FF3 stores 1. AND(Q1,Q2) unlocks only at step 4.</text>
        <text x="8" y="200" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Used in: keycard readers with bit masking, serial pattern matching</text>
      </svg>`,
    },
    nodes: [
      { id: 'in_KEY', type: 'INPUT',     x: 100, y: 480, fixedValue: 1, stepValues: [1, 0, 1, 1], label: 'KEY' },
      { id: 'clk_1',  type: 'CLOCK',     x: 100, y: 720, value: 0, label: null },
      { id: 'ff_1',   type: 'FF_SLOT',   ffType: null, x: 300, y: 520, initialQ: 0, label: 'FF1' },
      { id: 'ff_2',   type: 'FF_SLOT',   ffType: null, x: 460, y: 520, initialQ: 0, label: 'FF2' },
      { id: 'g_not',  type: 'GATE_SLOT', x: 600, y: 520, label: 'INV' },
      { id: 'ff_3',   type: 'FF_SLOT',   ffType: null, x: 740, y: 520, initialQ: 0, label: 'FF3' },
      { id: 'ff_4',   type: 'FF_SLOT',   ffType: null, x: 900, y: 520, initialQ: 0, label: 'FF4' },
      { id: 'g_and',  type: 'GATE_SLOT', x: 1050, y: 600 },
      { id: 'out_Q1', type: 'OUTPUT',    x: 300, y: 420, targetValue: 1, stepTargets: [1, 0, 1, 1], label: 'Q1' },
      { id: 'out_Q2', type: 'OUTPUT',    x: 460, y: 420, targetValue: 1, stepTargets: [0, 1, 0, 1], label: 'Q2' },
      { id: 'out_Q3', type: 'OUTPUT',    x: 740, y: 420, targetValue: 1, stepTargets: [1, 1, 0, 1], label: 'Q3' },
      { id: 'out_Q4', type: 'OUTPUT',    x: 900, y: 420, targetValue: 0, stepTargets: [0, 1, 1, 0], label: 'Q4' },
      { id: 'out_UNL', type: 'OUTPUT',   x: 1200, y: 600, targetValue: 1, stepTargets: [0, 0, 0, 1], label: 'UNLOCK' },
    ],
    wires: [
      // KEY → FF1
      { id: 'w1',    sourceId: 'in_KEY', targetId: 'ff_1',    targetInputIndex: 0 },
      // FF1 → FF2 (shift)
      { id: 'w12',   sourceId: 'ff_1',   targetId: 'ff_2',    targetInputIndex: 0, sourceOutputIndex: 0 },
      // FF2 → NOT gate (Q2 goes through inverter)
      { id: 'w2n1',  sourceId: 'ff_2',   targetId: 'g_not',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'w2n2',  sourceId: 'ff_2',   targetId: 'g_not',   targetInputIndex: 1, sourceOutputIndex: 0 },
      // NOT → FF3 (inverted bit)
      { id: 'wn3',   sourceId: 'g_not',  targetId: 'ff_3',    targetInputIndex: 0 },
      // FF3 → FF4 (shift)
      { id: 'w34',   sourceId: 'ff_3',   targetId: 'ff_4',    targetInputIndex: 0, sourceOutputIndex: 0 },
      // Clock to all FFs
      { id: 'wclk1', sourceId: 'clk_1',  targetId: 'ff_1',    targetInputIndex: 1, isClockWire: true },
      { id: 'wclk2', sourceId: 'clk_1',  targetId: 'ff_2',    targetInputIndex: 1, isClockWire: true },
      { id: 'wclk3', sourceId: 'clk_1',  targetId: 'ff_3',    targetInputIndex: 1, isClockWire: true },
      { id: 'wclk4', sourceId: 'clk_1',  targetId: 'ff_4',    targetInputIndex: 1, isClockWire: true },
      // AND(Q1, Q2) → UNLOCK (both = 1 only at step 4)
      { id: 'wA1',   sourceId: 'ff_1',   targetId: 'g_and',   targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wA2',   sourceId: 'ff_2',   targetId: 'g_and',   targetInputIndex: 1, sourceOutputIndex: 0 },
      { id: 'wU',    sourceId: 'g_and',  targetId: 'out_UNL', targetInputIndex: 0 },
      // Outputs
      { id: 'wo1',   sourceId: 'ff_1',   targetId: 'out_Q1',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo2',   sourceId: 'ff_2',   targetId: 'out_Q2',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo3',   sourceId: 'ff_3',   targetId: 'out_Q3',  targetInputIndex: 0, sourceOutputIndex: 0 },
      { id: 'wo4',   sourceId: 'ff_4',   targetId: 'out_Q4',  targetInputIndex: 0, sourceOutputIndex: 0 },
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
