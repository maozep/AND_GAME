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
    description: 'AND Gate — שער AND מוציא 1 רק כאשר שני הכניסות הן 1. זהו השער הבסיסי ביותר בלוגיקה דיגיטלית, ומשמש בין היתר לבדיקת תנאים מרובים — האם כל התנאים מתקיימים בו-זמנית.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'AND outputs 1 ONLY when both inputs are 1. Check all four rows.',
    truthTable: {
      inputs: ['A', 'B'], outputs: ['Z'],
      rows: [[[0,0],[0]], [[0,1],[0]], [[1,0],[0]], [[1,1],[1]]],
    },
    solution: {
      gatesUsed: ['AND'],
      explanation: 'AND Gate — שער AND מוציא 1 רק כאשר שני הכניסות הן 1. זהו השער הבסיסי ביותר בלוגיקה דיגיטלית, ומשמש בין היתר לבדיקת תנאים מרובים — האם כל התנאים מתקיימים בו-זמנית.',
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

  // L2 — OR GATE  (4 cases)
  {
    id: 2, name: 'OR GATE', difficulty: '1. Basics',
    description: 'OR Gate — שער OR מוציא 1 כאשר לפחות אחת מהכניסות היא 1. משמש לבדיקה האם תנאי כלשהו מתקיים — מספיק שאחד מהם נכון כדי לקבל פלט חיובי.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'OR outputs 1 when at least one input is 1. Only OR matches all four rows.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[0]],[[0,1],[1]],[[1,0],[1]],[[1,1],[1]]] },
    solution: {
      gatesUsed: ['OR'],
      explanation: 'OR Gate — שער OR מוציא 1 כאשר לפחות אחת מהכניסות היא 1. משמש לבדיקה האם תנאי כלשהו מתקיים — מספיק שאחד מהם נכון כדי לקבל פלט חיובי.',
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

  // L3 — NOT GATE  (2 cases: all input combos for single input)
  {
    id: 3, name: 'NOT GATE', difficulty: '1. Basics',
    description: 'NOT Gate — שער NOT (מהפך) הופך את ערך הכניסה: 0 הופך ל-1 ו-1 הופך ל-0. זהו השער היחיד עם כניסה אחת בלבד, ומשמש ליצירת השלילה הלוגית בכל מעגל דיגיטלי.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NOT inverts the input: 0→1, 1→0. It is the only single-input gate.',
    truthTable: { inputs: ['A'], outputs: ['Z'], rows: [[[0],[1]],[[1],[0]]] },
    solution: {
      gatesUsed: ['NOT'],
      explanation: 'NOT Gate — שער NOT (מהפך) הופך את ערך הכניסה: 0 הופך ל-1 ו-1 הופך ל-0. זהו השער היחיד עם כניסה אחת בלבד, ומשמש ליצירת השלילה הלוגית בכל מעגל דיגיטלי.',
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

  // L4 — NAND GATE  (4 cases)
  {
    id: 4, name: 'NAND GATE', difficulty: '1. Basics',
    description: 'NAND Gate — שער NAND הוא AND הפוך: מוציא 0 רק כששתי הכניסות הן 1. NAND הוא שער אוניברסלי — ניתן לבנות כל מעגל לוגי באמצעות שערי NAND בלבד.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NAND is inverted AND: output is 0 ONLY when both inputs are 1.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[1]],[[1,0],[1]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['NAND'],
      explanation: 'NAND Gate — שער NAND הוא AND הפוך: מוציא 0 רק כששתי הכניסות הן 1. NAND הוא שער אוניברסלי — ניתן לבנות כל מעגל לוגי באמצעות שערי NAND בלבד.',
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
    id: 5, name: 'NOR GATE', difficulty: '1. Basics',
    description: 'NOR Gate — שער NOR הוא OR הפוך: מוציא 1 רק כששתי הכניסות הן 0. כמו NAND, גם NOR הוא שער אוניברסלי — ניתן לבנות כל מעגל לוגי באמצעות שערי NOR בלבד.',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'NOR is inverted OR: output is 1 ONLY when both inputs are 0.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[0]],[[1,0],[0]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['NOR'],
      explanation: 'NOR Gate — שער NOR הוא OR הפוך: מוציא 1 רק כששתי הכניסות הן 0. כמו NAND, גם NOR הוא שער אוניברסלי — ניתן לבנות כל מעגל לוגי באמצעות שערי NOR בלבד.',
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
    id: 6, name: 'XOR GATE', difficulty: '1. Basics',
    description: 'XOR Gate — שער XOR (או בלעדי) מוציא 1 רק כאשר הכניסות שונות זו מזו. משמש רבות בחישובי חיבור בינארי ובמעגלי בדיקת זוגיות (parity).',
    instruction: 'בחר את השער היחיד שמתאים לכל המקרים',
    hint: 'XOR outputs 1 when inputs differ. Only XOR matches all four rows.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[0]],[[0,1],[1]],[[1,0],[1]],[[1,1],[0]]] },
    solution: {
      gatesUsed: ['XOR'],
      explanation: 'XOR Gate — שער XOR (או בלעדי) מוציא 1 רק כאשר הכניסות שונות זו מזו. משמש רבות בחישובי חיבור בינארי ובמעגלי בדיקת זוגיות (parity).',
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
    id: 7, name: 'GATE CHAIN', difficulty: '1. Basics',
    layout: 'vertical',
    description: 'Gate Chain — שרשרת שערים: פלט השער הראשון מוזן כקלט לשער השני. זהו המבנה הבסיסי ביותר של שני שערים ברצף, ומדגים כיצד ניתן לבנות פונקציות לוגיות מורכבות משילוב שערים פשוטים.',
    instruction: 'שרשרת שערים: פלט G1 מוזן ל-G2 יחד עם C\nמצא את זוג השערים היחיד שנותן תוצאה נכונה בכל ארבעת המקרים',
    hint: 'G1 gets (A,B), its output feeds G2 alongside C. Only one pair works for all cases.',
    truthTable: { inputs: ['A','B','C'], outputs: ['Z'], rows: [[[0,0,0],[1]],[[0,0,1],[1]],[[0,1,0],[1]],[[0,1,1],[1]],[[1,0,0],[1]],[[1,0,1],[1]],[[1,1,0],[0]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['NAND', 'OR'],
      explanation: 'Gate Chain — שרשרת שערים: פלט השער הראשון מוזן כקלט לשער השני. זהו המבנה הבסיסי ביותר של שני שערים ברצף, ומדגים כיצד ניתן לבנות פונקציות לוגיות מורכבות משילוב שערים פשוטים.',
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
    id: 8, name: 'FANOUT', difficulty: '1. Basics',
    layout: 'vertical',
    description: 'Fanout — פיצול אות: אות A מוזן לשני שערים שונים בו-זמנית. זהו מבנה יסודי בעיצוב מעגלים — אות יחיד יכול להשפיע על מספר נתיבים במקביל, כמו אפיק נתונים שמחובר למספר רכיבים.',
    instruction: 'פיצול אות: A מוזן לשני השערים בו-זמנית\nמצא את זוג השערים היחיד שנותן תוצאה נכונה בכל ארבעת המקרים',
    hint: 'G1 gets (A,B), G2 gets (A,C). Only one pair of gates works for all four input combinations.',
    truthTable: { inputs: ['A','B','C'], outputs: ['X','Y'], rows: [[[0,0,0],[1,0]],[[0,0,1],[1,1]],[[0,1,0],[1,0]],[[0,1,1],[1,1]],[[1,0,0],[1,1]],[[1,0,1],[1,1]],[[1,1,0],[0,1]],[[1,1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NAND', 'OR'],
      explanation: 'Fanout — פיצול אות: אות A מוזן לשני שערים שונים בו-זמנית. זהו מבנה יסודי בעיצוב מעגלים — אות יחיד יכול להשפיע על מספר נתיבים במקביל, כמו אפיק נתונים שמחובר למספר רכיבים.',
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
    id: 9, name: 'SPLIT PATH', difficulty: '1. Basics',
    layout: 'vertical',
    description: 'Split Path — נתיב מפוצל: פלט G1 מתפצל לשני כיוונים — ישירות ליציאה Y ובמקביל כקלט ל-G2 שמוביל ל-X. מבנה זה משלב פיצול (fanout) עם שרשור (chaining) ומהווה גשר בין מעגלים מקביליים לרציפים.',
    instruction: 'נתיב מפוצל: פלט G1 מתפצל — ישירות ל-Y ודרך G2 ל-X\nמצא את זוג השערים היחיד שנותן תוצאה נכונה בכל ארבעת המקרים',
    hint: 'First find G1 from Y targets, then find G2 knowing G1 output.',
    truthTable: { inputs: ['A','B','C'], outputs: ['X','Y'], rows: [[[0,0,0],[1,0]],[[0,0,1],[1,0]],[[0,1,0],[1,1]],[[0,1,1],[0,1]],[[1,0,0],[1,1]],[[1,0,1],[0,1]],[[1,1,0],[1,1]],[[1,1,1],[0,1]]] },
    solution: {
      gatesUsed: ['OR', 'NAND'],
      explanation: 'Split Path — נתיב מפוצל: פלט G1 מתפצל לשני כיוונים — ישירות ליציאה Y ובמקביל כקלט ל-G2 שמוביל ל-X. מבנה זה משלב פיצול (fanout) עם שרשור (chaining) ומהווה גשר בין מעגלים מקביליים לרציפים.',
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
    id: 10, name: 'THREE-GATE NETWORK', difficulty: '1. Basics',
    layout: 'vertical',
    description: 'Three-Gate Network — רשת שלושה שערים: B מתפצל ל-G1 ול-G2, C מתפצל ל-G2 ול-G3, ופלט G1 משורשר ל-G3. מבנה זה משלב לראשונה פיצול אותות עם שרשור שערים ברשת אחת — היסוד לכל מעגל משולב מורכב.',
    instruction: 'רשת שלושה שערים: פיצול ושרשור משולבים לראשונה\nמצא את שלושת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'B fans to G1 and G2. C fans to G2 and G3. G1 chains to G3. Only one triple works.',
    truthTable: { inputs: ['A','B','C'], outputs: ['P','Q'], rows: [[[0,0,0],[0,0]],[[0,0,1],[0,1]],[[0,1,0],[0,1]],[[0,1,1],[1,1]],[[1,0,0],[0,0]],[[1,0,1],[1,1]],[[1,1,0],[0,1]],[[1,1,1],[1,1]]] },
    solution: {
      gatesUsed: ['OR', 'OR', 'AND'],
      explanation: 'Three-Gate Network — רשת שלושה שערים: B מתפצל ל-G1 ול-G2, C מתפצל ל-G2 ול-G3, ופלט G1 משורשר ל-G3. מבנה זה משלב לראשונה פיצול אותות עם שרשור שערים ברשת אחת — היסוד לכל מעגל משולב מורכב.',
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
  // TAB 2 — 2. Classic Circuits  (IDs 11–20)
  // Famous combinational building blocks used in real hardware.
  // ════════════════════════════════════════════════════════════

  // L11 — HALF ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: G_sum=XOR, G_carry=AND
  // All 4 input combos: (0,0)→(0,0) (0,1)→(1,0) (1,0)→(1,0) (1,1)→(0,1)
  {
    id: 11, name: 'HALF ADDER', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'Half Adder — חצי-מחבר הוא מעגל החיבור הפשוט ביותר. הוא מחבר שני ביטים בודדים: XOR מחשב את הסכום (SUM) ו-AND מחשב את הנשא (CARRY). זהו אבן הבניין של המחבר המלא.',
    instruction: 'חצי-מחבר: אחד מחשב סכום ואחד מחשב נשא\nמצא את שני השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'SUM uses XOR (adds without carry), CARRY uses AND (carry only when both are 1).',
    truthTable: { inputs: ['A','B'], outputs: ['SUM','CARRY'], rows: [[[0,0],[0,0]],[[0,1],[1,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['XOR', 'AND'],
      explanation: 'Half Adder — חצי-מחבר הוא מעגל החיבור הפשוט ביותר. הוא מחבר שני ביטים בודדים: XOR מחשב את הסכום (SUM) ו-AND מחשב את הנשא (CARRY). זהו אבן הבניין של המחבר המלא.',
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

  // L12 — FULL ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: XOR1=XOR, XOR2=XOR, AND1=AND, AND2=AND, OR=OR
  // Case 1: A=0,B=0,Cin=0 → S=0,CO=0  Case 2: A=1,B=0,Cin=1 → S=0,CO=1
  // Case 3: A=0,B=1,Cin=0 → S=1,CO=0  Case 4: A=1,B=1,Cin=1 → S=1,CO=1
  {
    id: 12, name: 'FULL ADDER', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'Full Adder — מחבר מלא הוא אבן הבניין של כל מעגלי החיבור במעבדים. הוא מחבר שני ביטים (A ו-B) יחד עם ביט נשא נכנס (Cin), ומפיק סכום (SUM) ונשא יוצא (COUT). שרשור של מחברים מלאים מאפשר חיבור מספרים בני מספר ביטים.',
    instruction: 'מחבר מלא: חמישה שערים מחשבים SUM ו-COUT\nמצא את חמשת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'XOR1(A,B)→XOR2(…,Cin)→SUM. AND stages for carry bits, OR merges into COUT.',
    truthTable: { inputs: ['A','B','Cin'], outputs: ['SUM','COUT'], rows: [[[0,0,0],[0,0]],[[0,0,1],[1,0]],[[0,1,0],[1,0]],[[0,1,1],[0,1]],[[1,0,0],[1,0]],[[1,0,1],[0,1]],[[1,1,0],[0,1]],[[1,1,1],[1,1]]] },
    solution: {
      gatesUsed: ['XOR', 'XOR', 'AND', 'AND', 'OR'],
      explanation: 'Full Adder — מחבר מלא הוא אבן הבניין של כל מעגלי החיבור במעבדים. הוא מחבר שני ביטים (A ו-B) יחד עם ביט נשא נכנס (Cin), ומפיק סכום (SUM) ונשא יוצא (COUT). שרשור של מחברים מלאים מאפשר חיבור מספרים בני מספר ביטים.',
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

  // L13 — XNOR GATE (4 cases, vertical bottom-to-top)
  // Solution: G1=XOR, G2=NOT (NOT ignores second input)
  // Structure: A,B → G1 → G2(G1_out, B) → Z
  // Case 1: A=0,B=0 → Z=1  Case 2: A=0,B=1 → Z=0  Case 3: A=1,B=0 → Z=0  Case 4: A=1,B=1 → Z=1
  {
    id: 13, name: 'XNOR GATE', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'XNOR Gate — שער XNOR מוציא 1 כאשר שתי הכניסות שוות (שתיהן 0 או שתיהן 1). הוא בנוי משרשרת XOR ואחריו NOT. משמש במעגלי השוואה ובדיקת שוויון ביטים.',
    instruction: 'XNOR: הראשון מעבד את הקלטים והשני הופך את התוצאה\nמצא את שני השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'XNOR is just XOR followed by NOT. Two gate slots chained.',
    truthTable: { inputs: ['A','B'], outputs: ['Z'], rows: [[[0,0],[1]],[[0,1],[0]],[[1,0],[0]],[[1,1],[1]]] },
    solution: {
      gatesUsed: ['XOR', 'NOT'],
      explanation: 'XNOR Gate — שער XNOR מוציא 1 כאשר שתי הכניסות שוות (שתיהן 0 או שתיהן 1). הוא בנוי משרשרת XOR ואחריו NOT. משמש במעגלי השוואה ובדיקת שוויון ביטים.',
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

  // L14 — 2:1 MUX (4 cases, vertical bottom-to-top)
  // Solution: G_ns=NOT, G_and0=AND, G_and1=AND, G_or=OR
  // Structure: S→ns; D0,ns→and0; D1,S→and1; and0,and1→or→Y
  // Case 1: D0=1,D1=0,S=0→Y=1  Case 2: D0=0,D1=1,S=1→Y=1  Case 3: D0=0,D1=0,S=0→Y=0  Case 4: D0=1,D1=1,S=1→Y=1
  {
    id: 14, name: '2:1 MUX', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: '2:1 MUX — מרבב (Multiplexer) הוא בורר נתונים: קו הבחירה S קובע איזו כניסה (D0 או D1) תועבר ליציאה Y. מרבבים הם רכיבים מרכזיים בניתוב נתונים במעבדים ובזיכרונות.',
    instruction: 'מרבב 2:1: S בוחר בין D0 ל-D1\nמצא את ארבעת השערים שנותנים Y נכון בכל ארבעת המקרים',
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
      explanation: '2:1 MUX — מרבב (Multiplexer) הוא בורר נתונים: קו הבחירה S קובע איזו כניסה (D0 או D1) תועבר ליציאה Y. מרבבים הם רכיבים מרכזיים בניתוב נתונים במעבדים ובזיכרונות.',
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

  // L15 — 1:2 DEMUX (4 cases, vertical bottom-to-top)
  // Solution: G_ns=NOT, G_y0=AND, G_y1=AND
  // Structure: S→ns; D,ns→y0→Y0; D,S→y1→Y1
  // Case 1: D=1,S=0→Y0=1,Y1=0  Case 2: D=1,S=1→Y0=0,Y1=1  Case 3: D=0,S=0→Y0=0,Y1=0  Case 4: D=0,S=1→Y0=0,Y1=0
  {
    id: 15, name: '1:2 DEMUX', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: '1:2 DEMUX — דה-מרבב הוא ההפך ממרבב: הוא מנתב כניסה יחידה D לאחת משתי יציאות (Y0 או Y1) לפי קו הבחירה S. משמש בפיענוח כתובות ובניתוב אותות בזיכרונות.',
    instruction: 'דה-מרבב 1:2: מנתב את D ל-Y0 או ל-Y1 לפי S\nמצא את שלושת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'Invert S, then AND D with !S for Y0, AND D with S for Y1. Three gate slots.',
    truthTable: { inputs: ['D','S'], outputs: ['Y0','Y1'], rows: [[[0,0],[0,0]],[[0,1],[0,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'AND', 'AND'],
      explanation: '1:2 DEMUX — דה-מרבב הוא ההפך ממרבב: הוא מנתב כניסה יחידה D לאחת משתי יציאות (Y0 או Y1) לפי קו הבחירה S. משמש בפיענוח כתובות ובניתוב אותות בזיכרונות.',
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

  // L16 — 3-BIT ODD PARITY (4 cases, vertical bottom-to-top)
  // Solution: G_x1=XOR, G_x2=XOR
  // Structure: A,B → x1 → x2(x1,C) → P
  // Case 1: A=1,B=0,C=0→P=1  Case 2: A=1,B=1,C=0→P=0  Case 3: A=0,B=0,C=1→P=1  Case 4: A=1,B=1,C=1→P=1
  {
    id: 16, name: '3-BIT ODD PARITY', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'Odd Parity — בדיקת זוגיות אי-זוגית: שרשרת שערי XOR סופרת האם מספר הכניסות הדולקות הוא אי-זוגי. משמש בגילוי שגיאות בתקשורת נתונים ובזיכרונות.',
    instruction: 'זוגיות אי-זוגית: P דולק כשמספר אי-זוגי של כניסות דולק\nמצא את שני השערים שנותנים P נכון בכל ארבעת המקרים',
    hint: 'Parity is always a chain of XOR gates: XOR(XOR(A,B),C). Each XOR accumulates the "odd count" flag.',
    truthTable: { inputs: ['A','B','C'], outputs: ['P'], rows: [[[0,0,0],[0]],[[0,0,1],[1]],[[0,1,0],[1]],[[0,1,1],[0]],[[1,0,0],[1]],[[1,0,1],[0]],[[1,1,0],[0]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Odd Parity — בדיקת זוגיות אי-זוגית: שרשרת שערי XOR סופרת האם מספר הכניסות הדולקות הוא אי-זוגי. משמש בגילוי שגיאות בתקשורת נתונים ובזיכרונות.',
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

  // L17 — MAJORITY-OF-3 (5 gates, 4 cases, vertical bottom-to-top)
  // Solution: G_ab=AND, G_bc=AND, G_ac=AND, G_or1=OR, G_or2=OR
  // Case 1: A=1,B=1,C=0 → M=1   Case 2: A=0,B=0,C=1 → M=0
  // Case 3: A=1,B=0,C=1 → M=1   Case 4: A=0,B=1,C=0 → M=0
  {
    id: 17, name: 'MAJORITY-OF-3', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'Majority-of-3 — מעגל רוב: הפלט דולק כשלפחות 2 מתוך 3 כניסות דולקות. מחשב AB+BC+AC באמצעות שלושה שערי AND לזוגות ושני שערי OR למיזוג. משמש בלוגיקת הצבעה ובמערכות עמידות לתקלות.',
    instruction: 'רוב מ-3: הפלט דולק כשלפחות 2 מתוך 3 כניסות דולקות\nמצא את חמשת השערים שנותנים M נכון בכל ארבעת המקרים',
    hint: 'Compute all three pairwise ANDs (AB, BC, AC), then OR them together in a two-level OR tree.',
    truthTable: { inputs: ['A','B','C'], outputs: ['M'], rows: [[[0,0,0],[0]],[[0,0,1],[0]],[[0,1,0],[0]],[[0,1,1],[1]],[[1,0,0],[0]],[[1,0,1],[1]],[[1,1,0],[1]],[[1,1,1],[1]]] },
    solution: {
      gatesUsed: ['AND', 'AND', 'AND', 'OR', 'OR'],
      explanation: 'Majority-of-3 — מעגל רוב: הפלט דולק כשלפחות 2 מתוך 3 כניסות דולקות. מחשב AB+BC+AC באמצעות שלושה שערי AND לזוגות ושני שערי OR למיזוג. משמש בלוגיקת הצבעה ובמערכות עמידות לתקלות.',
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

  // L18 — 2-TO-4 DECODER (6 gates, 4 cases, vertical bottom-to-top)
  // Solution: ns0=NOT, ns1=NOT, y0=AND, y1=AND, y2=AND, y3=AND
  // Case 1: S0=0,S1=0 → Y0=1,Y1=0,Y2=0,Y3=0   Case 2: S0=1,S1=0 → Y0=0,Y1=1,Y2=0,Y3=0
  // Case 3: S0=0,S1=1 → Y0=0,Y1=0,Y2=1,Y3=0   Case 4: S0=1,S1=1 → Y0=0,Y1=0,Y2=0,Y3=1
  {
    id: 18, name: '2-TO-4 DECODER', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: '2-to-4 Decoder — מפענח: ממיר כתובת בינארית של 2 ביטים לאחת מ-4 יציאות. בדיוק יציאה אחת דולקת בכל רגע. משמש בפיענוח כתובות זיכרון ובבחירת רכיבים על לוח אם.',
    instruction: 'מפענח 2-ל-4: בדיוק פלט אחד דולק לפי כתובת הכניסה\nמצא את ששת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'Invert both select lines first. Each output AND gate takes the appropriate true/complemented versions of S1,S0.',
    truthTable: { inputs: ['S0','S1'], outputs: ['Y0','Y1','Y2','Y3'], rows: [[[0,0],[1,0,0,0]],[[1,0],[0,1,0,0]],[[0,1],[0,0,1,0]],[[1,1],[0,0,0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'NOT', 'AND', 'AND', 'AND', 'AND'],
      explanation: '2-to-4 Decoder — מפענח: ממיר כתובת בינארית של 2 ביטים לאחת מ-4 יציאות. בדיוק יציאה אחת דולקת בכל רגע. משמש בפיענוח כתובות זיכרון ובבחירת רכיבים על לוח אם.',
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

  // L19 — 1-BIT COMPARATOR (4 gates, 4 cases, vertical bottom-to-top)
  // Solution: nb=NOT, gt=AND, gx=XOR, eq=NOT
  // Case 1: A=0,B=0 → GT=0,EQ=1   Case 2: A=0,B=1 → GT=0,EQ=0
  // Case 3: A=1,B=0 → GT=1,EQ=0   Case 4: A=1,B=1 → GT=0,EQ=1
  {
    id: 19, name: '1-BIT COMPARATOR', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: '1-Bit Comparator — משווה ביטים: GT (גדול מ) דולק כש-A=1 ו-B=0, ו-EQ (שווה) דולק כשהביטים זהים. GT נבנה מ-AND(A, NOT B), ו-EQ מ-NOT(XOR(A,B)). משמש ב-ALU ובמעגלי מיון.',
    instruction: 'משווה 1-ביט: GT דולק כש-A גדול מ-B, EQ דולק כשהם שווים\nמצא את ארבעת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'GT = A AND NOT(B). EQ = NOT(XOR(A,B)). Four gate slots total.',
    truthTable: { inputs: ['A','B'], outputs: ['GT','EQ'], rows: [[[0,0],[0,1]],[[0,1],[0,0]],[[1,0],[1,0]],[[1,1],[0,1]]] },
    solution: {
      gatesUsed: ['NOT', 'AND', 'XOR', 'NOT'],
      explanation: '1-Bit Comparator — משווה ביטים: GT (גדול מ) דולק כש-A=1 ו-B=0, ו-EQ (שווה) דולק כשהביטים זהים. GT נבנה מ-AND(A, NOT B), ו-EQ מ-NOT(XOR(A,B)). משמש ב-ALU ובמעגלי מיון.',
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

  // L20 — PRIORITY ENCODER (3 gates, 4 cases, vertical bottom-to-top)
  // Solution: na=NOT, valid=OR, code=AND
  // Case 1: A=0,B=0 → VALID=0,CODE=0   Case 2: A=0,B=1 → VALID=1,CODE=1
  // Case 3: A=1,B=0 → VALID=1,CODE=0   Case 4: A=1,B=1 → VALID=1,CODE=0
  {
    id: 20, name: 'PRIORITY ENCODER', difficulty: '2. Classic Circuits',
    layout: 'vertical',
    description: 'Priority Encoder — מקודד עדיפות: VALID דולק כשיש לפחות כניסה פעילה אחת. CODE מציין את הכניסה הפעילה בעלת העדיפות הנמוכה (B פעיל רק אם A לא פעיל). משמש בטיפול בפסיקות (interrupts) ובתורי עדיפויות בחומרה.',
    instruction: 'מקודד עדיפות: VALID דולק אם יש כניסה פעילה, CODE מציין איזו\nמצא את שלושת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
    hint: 'VALID = A OR B. CODE = NOT(A) AND B.',
    truthTable: { inputs: ['A','B'], outputs: ['VALID','CODE'], rows: [[[0,0],[0,0]],[[0,1],[1,1]],[[1,0],[1,0]],[[1,1],[1,0]]] },
    solution: {
      gatesUsed: ['NOT', 'OR', 'AND'],
      explanation: 'Priority Encoder — מקודד עדיפות: VALID דולק כשיש לפחות כניסה פעילה אחת. CODE מציין את הכניסה הפעילה בעלת העדיפות הנמוכה (B פעיל רק אם A לא פעיל). משמש בטיפול בפסיקות (interrupts) ובתורי עדיפויות בחומרה.',
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
