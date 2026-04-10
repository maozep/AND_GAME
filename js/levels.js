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

  // L2 — AND GATE  (4 cases: all input combos, only AND satisfies all)
  {
    id: 2, name: 'AND GATE', difficulty: 'Fundamentals',
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

  // L3 — OR GATE  (4 cases)
  {
    id: 3, name: 'OR GATE', difficulty: 'Fundamentals',
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

  // L4 — NAND GATE  (4 cases)
  {
    id: 4, name: 'NAND GATE', difficulty: 'Fundamentals',
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
    id: 5, name: 'NOR GATE', difficulty: 'Fundamentals',
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
    id: 6, name: 'XOR GATE', difficulty: 'Fundamentals',
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
    id: 7, name: 'GATE CHAIN', difficulty: 'Fundamentals',
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
    id: 8, name: 'FANOUT', difficulty: 'Fundamentals',
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
    id: 9, name: 'SPLIT PATH', difficulty: 'Fundamentals',
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
    id: 10, name: 'THREE-GATE NETWORK', difficulty: 'Fundamentals',
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

  // L12 — HALF ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: G_sum=XOR, G_carry=AND
  // All 4 input combos: (0,0)→(0,0) (0,1)→(1,0) (1,0)→(1,0) (1,1)→(0,1)
  {
    id: 12, name: 'HALF ADDER', difficulty: 'Building Blocks',
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

  // L13 — 3-BIT ODD PARITY (4 cases, vertical bottom-to-top)
  // Solution: G_x1=XOR, G_x2=XOR
  // Structure: A,B → x1 → x2(x1,C) → P
  // Case 1: A=1,B=0,C=0→P=1  Case 2: A=1,B=1,C=0→P=0  Case 3: A=0,B=0,C=1→P=1  Case 4: A=1,B=1,C=1→P=1
  {
    id: 13, name: '3-BIT ODD PARITY', difficulty: 'Building Blocks',
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

  // L14 — 3-BIT BINARY TO GRAY CODE
  // B2=1,B1=1,B0=0 → G2=B2=1 (direct), G1=XOR(1,1)=0, G0=XOR(1,0)=1
  {
    id: 14, name: 'BINARY TO GRAY CODE', difficulty: 'Building Blocks',
    description: 'Binary to Gray Code — המרה מבינארי לקוד גריי. בקוד גריי, שני מספרים עוקבים שונים רק בביט אחד. G2=B2 (עובר ישירות), G1=B2⊕B1, G0=B1⊕B0.',
    instruction: 'המר בינארי לקוד גריי: G2 עובר ישיר, G1 ו-G0 דרך שערים\nמצא את שני השערים שנותנים תוצאה נכונה',
    hint: 'G2=B2 ישירות. G1=XOR(B2,B1). G0=XOR(B1,B0). שני שערים מאותו סוג.',
    truthTable: {
      inputs: ['B2','B1','B0'], outputs: ['G2','G1','G0'],
      rows: [
        [[0,0,0],[0,0,0]], [[0,0,1],[0,0,1]], [[0,1,0],[0,1,1]], [[0,1,1],[0,1,0]],
        [[1,0,0],[1,1,0]], [[1,0,1],[1,1,1]], [[1,1,0],[1,0,1]], [[1,1,1],[1,0,0]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Binary to Gray Code — המרה מבינארי לקוד גריי באמצעות XOR בין ביטים סמוכים. קוד גריי משמש בתקשורת ובחיישנים כי שגיאות מוגבלות לביט אחד. הנוסחה: Gi = Bi+1 ⊕ Bi, כאשר הביט העליון עובר ישירות.',
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
    description: 'Gray to Binary — ההמרה ההפוכה: מקוד גריי חזרה לבינארי. B2=G2 (ישירות), B1=G2⊕G1, B0=B1⊕G0. שים לב: B0 תלוי ב-B1 המחושב, לא ב-G1 — זו שרשרת (cascade).',
    instruction: 'המר קוד גריי לבינארי: B2 ישיר, B1 ו-B0 דרך שערים\nמצא את שני השערים — שים לב ש-B0 תלוי ב-B1 המחושב',
    hint: 'B2=G2 ישירות. B1=XOR(G2,G1). B0=XOR(B1,G0) — B0 מקבל את B1 שחושב בשער הקודם.',
    truthTable: {
      inputs: ['G2','G1','G0'], outputs: ['B2','B1','B0'],
      rows: [
        [[0,0,0],[0,0,0]], [[0,0,1],[0,0,1]], [[0,1,0],[0,1,1]], [[0,1,1],[0,1,0]],
        [[1,0,0],[1,1,0]], [[1,0,1],[1,1,1]], [[1,1,0],[1,0,1]], [[1,1,1],[1,0,0]],
      ],
    },
    solution: {
      gatesUsed: ['XOR', 'XOR'],
      explanation: 'Gray to Binary — ההמרה ההפוכה מקוד גריי לבינארי. הנוסחה: Bi = Bi+1 ⊕ Gi (כאשר Bn=Gn). בשונה מההמרה לגריי, כאן יש תלות שרשרתית — B0 תלוי ב-B1 המחושב. זו דוגמה לנתיב קריטי במעגלים.',
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

  // L17 — 1:2 DEMUX (4 cases, vertical bottom-to-top)
  // Solution: G_ns=NOT, G_y0=AND, G_y1=AND
  // Structure: S→ns; D,ns→y0→Y0; D,S→y1→Y1
  // Case 1: D=1,S=0→Y0=1,Y1=0  Case 2: D=1,S=1→Y0=0,Y1=1  Case 3: D=0,S=0→Y0=0,Y1=0  Case 4: D=0,S=1→Y0=0,Y1=0
  {
    id: 17, name: '1:2 DEMUX', difficulty: 'Building Blocks',
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

  // L18 — CARRY GENERATE / PROPAGATE (2 cases, vertical bottom-to-top)
  // Unique solution: G=AND, P=XOR (for both bit positions)
  // Case 1: A1=1,B1=1,A0=1,B0=0 → G1=1,P1=0,G0=0,P0=1
  // Case 2: A1=0,B1=1,A0=1,B0=1 → G1=0,P1=1,G0=1,P0=0
  {
    id: 18, name: 'CARRY GEN / PROP', difficulty: 'Building Blocks',
    layout: 'vertical',
    description: 'Carry Generate/Propagate — יסודות Carry Lookahead: G=A·B (נשא נוצר) ו-P=A⊕B (נשא מתפשט). חישוב G ו-P לכל ביט מאפשר חיזוי מהיר של הנשא במקום לחכות לשרשרת — זה מה שהופך מעבדים מודרניים למהירים.',
    instruction: 'נשא נוצר/מתפשט: G=AND, P=XOR לכל ביט\nמצא את ארבעת השערים שנותנים תוצאה נכונה בשני המקרים',
    hint: 'G (Generate) = AND. P (Propagate) = XOR. Same gate type for both bit positions.',
    truthTable: {
      inputs: ['A','B'], outputs: ['G','P'],
      rows: [[[0,0],[0,0]], [[0,1],[0,1]], [[1,0],[0,1]], [[1,1],[1,0]]],
    },
    solution: {
      gatesUsed: ['AND', 'XOR', 'AND', 'XOR'],
      explanation: 'Carry Generate/Propagate — יסודות Carry Lookahead: G=A·B (נשא נוצר) ו-P=A⊕B (נשא מתפשט). חישוב G ו-P לכל ביט מאפשר חיזוי מהיר של הנשא במקום לחכות לשרשרת — זה מה שהופך מעבדים מודרניים למהירים.',
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
    description: '4-Bit Even Parity — בדיקת זוגיות ל-4 ביטים: שרשרת של 3 שערי XOR סופרת האם מספר הביטים הדולקים הוא אי-זוגי. משמש בגילוי שגיאות בתקשורת, בזיכרונות RAM ובאפיקי נתונים.',
    instruction: 'זוגיות 4-ביט: P דולק כשמספר אי-זוגי של כניסות דולק\nמצא את שלושת השערים שנותנים תוצאה נכונה בכל ארבעת המקרים',
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
      explanation: '4-Bit Even Parity — בדיקת זוגיות ל-4 ביטים: שרשרת של 3 שערי XOR סופרת האם מספר הביטים הדולקים הוא אי-זוגי. משמש בגילוי שגיאות בתקשורת, בזיכרונות RAM ובאפיקי נתונים.',
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
    description: '4-to-2 Priority Encoder — מקודד עדיפויות: מזהה את הכניסה הפעילה בעלת העדיפות הגבוהה ביותר (I3=גבוהה) ומפיק את הקוד הבינארי שלה. VALID=1 אם יש כניסה פעילה כלשהי.',
    instruction: 'מקודד עדיפויות: כל 5 השערים מאותו סוג\nמצא את השער שנותן תוצאה נכונה בשני המקרים',
    hint: 'VALID = OR על כל הכניסות (שני שלבים). Y1 = I2 OR I3. Y0 = I1 OR I3. כל השערים OR.',
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
      explanation: '4-to-2 Priority Encoder — מקודד עדיפויות: OR(I0,I1) ו-OR(I2,I3) מוזנים ל-OR שלישי ליצירת VALID. Y1=OR(I2,I3) ו-Y0=OR(I1,I3) מפיקים את הקוד הבינארי. כל 5 השערים הם OR — בודקים "האם לפחות אחת מהכניסות פעילה?".',
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

  // L22 — 2-BIT EQUALITY DETECTOR
  // A1=1,B1=1,A0=0,B0=0 → XOR1=0,NOT1=1,XOR0=0,NOT0=1,AND=1 → EQ=1
  {
    id: 22, name: '2-BIT EQUALITY', difficulty: 'Advanced Circuits',
    description: '2-Bit Equality — בודק שוויון בין שני מספרים בני 2 ביטים. XNOR משווה כל ביט בנפרד (מחזיר 1 אם שווים), ו-AND מחבר את התוצאות — EQ=1 רק אם שני הביטים שווים.',
    instruction: 'בודק שוויון 2-ביט: XNOR לכל ביט, AND לתוצאה\nמצא את חמשת השערים שנותנים תוצאה נכונה',
    hint: 'XNOR = XOR ואז NOT. שני ה-XNOR נכנסים ל-AND: EQ=1 רק אם שני הביטים שווים.',
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
      explanation: '2-Bit Equality — בודק שוויון בין שני מספרים בני 2 ביטים. XOR מזהה שוני בכל ביט, NOT הופך אותו ל-XNOR (1=שווים), ו-AND מחבר: EQ=1 רק אם כל הביטים שווים. מעגל זה הוא הבסיס להשוואת מספרים במעבדים.',
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

  // L24 — PRIORITY ENCODER (3 gates, 4 cases, vertical bottom-to-top)
  // Solution: na=NOT, valid=OR, code=AND
  // Case 1: A=0,B=0 → VALID=0,CODE=0   Case 2: A=0,B=1 → VALID=1,CODE=1
  // Case 3: A=1,B=0 → VALID=1,CODE=0   Case 4: A=1,B=1 → VALID=1,CODE=0
  {
    id: 24, name: 'PRIORITY ENCODER', difficulty: 'Advanced Circuits',
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

  // L25 — 2-TO-4 DECODER (6 gates, 4 cases, vertical bottom-to-top)
  // Solution: ns0=NOT, ns1=NOT, y0=AND, y1=AND, y2=AND, y3=AND
  // Case 1: S0=0,S1=0 → Y0=1,Y1=0,Y2=0,Y3=0   Case 2: S0=1,S1=0 → Y0=0,Y1=1,Y2=0,Y3=0
  // Case 3: S0=0,S1=1 → Y0=0,Y1=0,Y2=1,Y3=0   Case 4: S0=1,S1=1 → Y0=0,Y1=0,Y2=0,Y3=1
  {
    id: 25, name: '2-TO-4 DECODER', difficulty: 'Advanced Circuits',
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

  // L26 — FULL ADDER (4 cases, vertical bottom-to-top)
  // Unique solution: XOR1=XOR, XOR2=XOR, AND1=AND, AND2=AND, OR=OR
  // Case 1: A=0,B=0,Cin=0 → S=0,CO=0  Case 2: A=1,B=0,Cin=1 → S=0,CO=1
  // Case 3: A=0,B=1,Cin=0 → S=1,CO=0  Case 4: A=1,B=1,Cin=1 → S=1,CO=1
  {
    id: 26, name: 'FULL ADDER', difficulty: 'Advanced Circuits',
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

  // L27 — MAJORITY & PARITY DUAL OUTPUT
  // A=1,B=1,C=0: MAJ path: AND_AB=1,AND_BC=0,AND_AC=0,OR1=1,OR2=1 → MAJ=1
  //              PAR path: XOR(1,1)=0, XOR(0,0)=0 → PAR=0
  {
    id: 27, name: 'MAJORITY & PARITY', difficulty: 'Advanced Circuits',
    description: 'Majority & Parity — שני מעגלים מאותם 3 כניסות: MAJ=1 אם לפחות 2 כניסות דלוקות (הצבעת רוב), PAR=1 אם מספר אי-זוגי של כניסות דלוקות (זוגיות).',
    instruction: 'שני מעגלים במקביל מאותם כניסות:\nMAJ = רוב (AND+OR), PAR = זוגיות (XOR)\nמצא את 7 השערים',
    hint: 'Majority: שלושה AND (AB,BC,AC) ואז שני OR. Parity: שני XOR בשרשרת. שבעה שערים סה"כ.',
    truthTable: {
      inputs: ['A','B','C'], outputs: ['MAJ','PAR'],
      rows: [
        [[0,0,0],[0,0]], [[0,0,1],[0,1]], [[0,1,0],[0,1]], [[0,1,1],[1,0]],
        [[1,0,0],[0,1]], [[1,0,1],[1,0]], [[1,1,0],[1,0]], [[1,1,1],[1,1]],
      ],
    },
    solution: {
      gatesUsed: ['AND', 'AND', 'AND', 'OR', 'OR', 'XOR', 'XOR'],
      explanation: 'Majority & Parity — שני חישובים עצמאיים מאותם כניסות. MAJ: שלושה AND בודקים כל זוג (AB,BC,AC), שני OR מאחדים — אם לפחות זוג אחד דלוק, MAJ=1. PAR: שני XOR בשרשרת — XOR(A,B) ואז XOR עם C, מחשב זוגיות אי-זוגית.',
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
    description: '4:1 MUX Tree — עץ מרבבים: בוחר אחת מ-4 כניסות נתונים באמצעות 2 ביטי בקרה (S0,S1). בנוי מ-3 מרבבי 2:1 מדורגים. מרבבים גדולים הם הבסיס לניתוב נתונים במעבדים, זיכרונות ו-FPGA.',
    instruction: 'עץ מרבבים 4:1: שלוש יחידות MUX 2:1 מדורגות\nמצא את 11 השערים שנותנים תוצאה נכונה בשני המקרים',
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
      explanation: '4:1 MUX Tree — עץ מרבבים: בוחר אחת מ-4 כניסות נתונים באמצעות 2 ביטי בקרה (S0,S1). בנוי מ-3 מרבבי 2:1 מדורגים. מרבבים גדולים הם הבסיס לניתוב נתונים במעבדים, זיכרונות ו-FPGA.',
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
    description: '2-Bit Ripple Carry Adder — מחבר 2-ביט: חצי-מחבר (HA) מטפל בביט 0, ומחבר מלא (FA) מטפל בביט 1 עם הנשא מה-HA. שרשור זה הוא הבסיס לכל מחברים רב-ביטיים במעבדים.',
    instruction: 'מחבר 2-ביט: HA לביט 0, FA לביט 1 עם הנשא\nמצא את שבעת השערים שנותנים תוצאה נכונה בשני המקרים',
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
      explanation: '2-Bit Ripple Carry Adder — מחבר 2-ביט: חצי-מחבר (HA) מטפל בביט 0, ומחבר מלא (FA) מטפל בביט 1 עם הנשא מה-HA. שרשור זה הוא הבסיס לכל מחברים רב-ביטיים במעבדים.',
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
    description: 'Logic Matrix — מטריצת לוגיקה: 5 כניסות, 8 פלטים, 12 שערים ב-3 שכבות. האתגר הקומבינטורי האולטימטיבי — כל שער יכול להיות סוג אחר!',
    instruction: 'מטריצת לוגיקה: 12 שערים ב-3 שכבות\nעבוד שכבה-שכבה מהכניסות לפלטים\nכל שער יכול להיות סוג שונה',
    hint: 'שכבה 1 מקבלת כניסות גולמיות. שכבה 2 משלבת פלטי שכבה 1. שכבה 3 מפיקה פלטים סופיים. התחל מהפלטים ועקוב אחורה.',
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
      explanation: 'Logic Matrix — מטריצת לוגיקה עם 12 שערים מ-6 סוגים שונים ב-3 שכבות. שכבה 1: OR,NOR,AND,OR מעבדים זוגות כניסות. שכבה 2: OR,NAND,NOR משלבים. שכבה 3: OR,AND,XOR,NOR,AND מפיקים 8 פלטים. זהו מעגל שדורש חשיבה שיטתית שכבה אחר שכבה.',
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


    description: 'כניסה=1, Q מתחיל ב-1. מצא את הפליפלופ שמשנה את Q ל-0 בעליית השעון.',
    instruction: 'בחר את הפליפלופ הנכון ולחץ STEP',
    hint: 'כניסה=1, Q₀=1. D-FF ילכוד 1 (Q נשאר 1). SR/JK עושים SET (Q נשאר 1). רק פליפלופ שמחליף (toggle) ייתן Q=0.',
    solution: {
      ffsUsed: ['T-FF'],
      explanation: 'T Flip-Flop — פליפלופ T (Toggle) הופך את Q בכל עליית שעון כאשר T=1. כש-Q=1 ו-T=1, Q מתהפך ל-0. כל השאר (D, SR, JK) משאירים Q=1. משמש לבניית מונים ומחלקי תדר.',
      blockSvg: `<svg viewBox="0 0 360 180" width="440" height="220">
        <text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T</text>
        <line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="100" y2="137" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="30" width="160" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" font-weight="bold" fill="#00d4ff">T-FF</text>
        <line x1="260" y1="95" x2="320" y2="95" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="100" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
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
    description: 'D Flip-Flop — פליפלופ D (Data) לוכד את הערך שנמצא בכניסת D ברגע עליית השעון. שני מקרים במקביל — רק פליפלופ אחד מתאים לשניהם.',
    instruction: 'בחר את הפליפלופ שמתאים לשני המקרים ולחץ STEP',
    hint: 'מקרה 1: כל פליפלופ עם כניסה 1 ייתן Q=1. אבל מקרה 2: רק פליפלופ שלוכד את ערך הכניסה (0) יאפס את Q מ-1 ל-0.',
    solution: {
      ffsUsed: ['D-FF'],
      explanation: 'D Flip-Flop — פליפלופ D (Data) לוכד את הערך שנמצא בכניסת D ברגע עליית השעון. D=1→Q=1, D=0→Q=0. זהו הפליפלופ היחיד שתמיד לוכד את ערך הכניסה — T מחליף, SR ו-JK עושים hold כשהכניסה 0.',
      blockSvg: `<svg viewBox="0 0 360 180" width="440" height="220">
        <text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">D</text>
        <line x1="30" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="142" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="137" x2="100" y2="137" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="30" width="160" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="26" font-weight="bold" fill="#00d4ff">D-FF</text>
        <line x1="260" y1="62" x2="320" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
        <line x1="260" y1="132" x2="320" y2="132" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="137" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q̄</text>
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
    description: 'SR Flip-Flop — פליפלופ SR (Set/Reset) מאפשר לקבוע את Q ל-1 (SET), ל-0 (RESET), או לשמור (HOLD). שלושה מקרים — רק פליפלופ אחד מתאים לכולם.',
    instruction: 'בחר את הפליפלופ שמתאים לשלושת המקרים ולחץ STEP',
    hint: 'מקרה 1: RESET (S=0,R=1). מקרה 2: HOLD (S=0,R=0). מקרה 3: S=1,R=1 — רק פליפלופ שבו SET גובר ייתן Q=1.',
    solution: {
      ffsUsed: ['SR-FF'],
      explanation: 'SR Flip-Flop — פליפלופ SR (Set/Reset) הוא הפליפלופ הבסיסי ביותר. S=1,R=0 → SET (Q=1). S=0,R=1 → RESET (Q=0). S=0,R=0 → HOLD. S=1,R=1 → SET גובר (Q=1). T מחליף במקום RESET, D לוכד S בלבד, JK מחליף כש-J=K=1.',
      blockSvg: `<svg viewBox="0 0 360 200" width="440" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text>
        <line x1="30" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">R</text>
        <line x1="30" y1="97" x2="100" y2="97" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="162" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="157" x2="100" y2="157" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="25" width="160" height="150" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="24" font-weight="bold" fill="#00d4ff">SR-FF</text>
        <line x1="260" y1="62" x2="320" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
        <line x1="260" y1="137" x2="320" y2="137" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q̄</text>
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
    description: 'JK Flip-Flop — הפליפלופ הגמיש ביותר. J=K=1 → TOGGLE, J=1,K=0 → SET, J=0,K=1 → RESET, J=K=0 → HOLD. שלושה מקרים — רק פליפלופ אחד מתאים לכולם.',
    instruction: 'בחר את הפליפלופ שמתאים לשלושת המקרים ולחץ STEP',
    hint: 'מקרה 1: J=K=1 → רק TOGGLE ייתן Q=0. מקרה 2: J=1,K=0 → SET. מקרה 3: J=K=0 → HOLD. רק פליפלופ עם כל 4 המצבים מתאים.',
    solution: {
      ffsUsed: ['JK-FF'],
      explanation: 'JK Flip-Flop — הפליפלופ הגמיש ביותר. J=K=1→TOGGLE (Q מתהפך), J=1,K=0→SET, J=0,K=1→RESET, J=K=0→HOLD. בשונה מ-SR, כש-J=K=1 JK מחליף במקום SET. משמש למונים ומכונות מצב.',
      blockSvg: `<svg viewBox="0 0 360 200" width="440" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">J</text>
        <line x1="30" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">K</text>
        <line x1="30" y1="97" x2="100" y2="97" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="162" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="157" x2="100" y2="157" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="25" width="160" height="150" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="24" font-weight="bold" fill="#00d4ff">JK-FF</text>
        <line x1="260" y1="62" x2="320" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
        <line x1="260" y1="137" x2="320" y2="137" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q̄</text>
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


    description: 'מונה אדווה — שני פליפלופים בטור. FF1 מקבל כניסה קבועה, Q1 מזין את FF2. אחרי 2 פעימות צריך להגיע ליעד.',
    instruction: 'שים את הפליפלופ הנכון בשני המקומות ולחץ STEP פעמיים',
    hint: 'STEP 1: Q1=1, Q2=0. STEP 2: Q1 חוזר ל-0, Q2 עולה ל-1. איזה פליפלופ מחליף מצב כשהכניסה 1?',
    solution: {
      ffsUsed: ['T-FF', 'T-FF'],
      explanation: 'מונה אדווה (Ripple Counter) — שני פליפלופי T יוצרים מונה בינארי 2-ביט. כל פליפלופ מחלק את התדר ב-2. זהו הבסיס לכל המונים הדיגיטליים.',
      blockSvg: `<svg viewBox="0 0 500 160" width="600" height="195">
        <text x="12" y="62" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">T=1</text>
        <line x1="55" y1="57" x2="100" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="100" y="30" width="120" height="100" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="160" y="88" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="20" font-weight="bold" fill="#00d4ff">T-FF1</text>
        <line x1="220" y1="57" x2="270" y2="57" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="270" y="30" width="120" height="100" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="330" y="88" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="20" font-weight="bold" fill="#00d4ff">T-FF2</text>
        <line x1="390" y1="42" x2="440" y2="42" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="448" y="47" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q1</text>
        <line x1="390" y1="100" x2="440" y2="100" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="448" y="105" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#c8d8f0">Q2</text>
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
    description: 'מחלק תדר ב-4 (Johnson Counter) — שני פליפלופים בטור עם Q̄ של האחרון מוזן חזרה לראשון. המצבים מסתובבים במחזור של 4 פעימות.',
    instruction: 'שים את הפליפלופ הנכון בשני המקומות ולחץ STEP פעמיים',
    hint: 'Q̄2 מתחיל ב-1, מוזן ל-FF1. FF2 מקבל את Q1. איזה פליפלופ תמיד לוכד את מה שבכניסה?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF'],
      explanation: 'Johnson Counter (Twisted Ring) — שני D-FF בטור עם Q̄→D feedback. יוצר 4 מצבים ייחודיים (חילוק ב-4). משמש ליצירת תזמון מדויק, מונים ללא glitch, ומחלקי תדר.',
      blockSvg: `<svg viewBox="0 0 500 180" width="600" height="220">
        <rect x="100" y="30" width="110" height="80" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="155" y="77" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">D-FF1</text>
        <line x1="210" y1="60" x2="250" y2="60" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="250" y="30" width="110" height="80" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="305" y="77" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">D-FF2</text>
        <line x1="360" y1="60" x2="400" y2="60" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="408" y="50" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q1</text>
        <text x="408" y="70" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q2</text>
        <polyline points="360,90 390,90 390,145 60,145 60,50 100,50" stroke="#ff6b6b" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/>
        <text x="220" y="160" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11" font-weight="bold" fill="#ff6b6b">Q̄2 → D1 FEEDBACK</text>
        <text x="12" y="125" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
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
    description: 'רגיסטר הזזה 4-ביט — ארבעה פליפלופים בטור. הנתון "זז" שלב אחד קדימה בכל פעימת שעון. לחץ STEP ארבע פעמים כדי למלא את כל הרגיסטר.',
    instruction: 'שים את הפליפלופ הנכון בכל ארבעת המקומות ולחץ STEP 4 פעמים',
    hint: 'כל STEP דוחף את הנתון שלב אחד קדימה. איזה פליפלופ תמיד לוכד את הכניסה שלו?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: '4-Bit Shift Register — ארבעה פליפלופי D בטור. בכל פעימת שעון, כל FF לוכד את הערך של ה-FF שלפניו. זהו הבסיס של תקשורת סריאלית (UART, SPI) ושל ממיר סריאלי→מקבילי.',
      blockSvg: `<svg viewBox="0 0 700 120" width="850" height="150">
        <text x="8" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D=1</text>
        <line x1="50" y1="47" x2="80" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="80" y="25" width="90" height="60" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="125" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF1</text>
        <line x1="170" y1="47" x2="210" y2="47" stroke="#39ff14" stroke-width="2"/>
        <rect x="210" y="25" width="90" height="60" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="255" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF2</text>
        <line x1="300" y1="47" x2="340" y2="47" stroke="#39ff14" stroke-width="2"/>
        <rect x="340" y="25" width="90" height="60" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="385" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF3</text>
        <line x1="430" y1="47" x2="470" y2="47" stroke="#39ff14" stroke-width="2"/>
        <rect x="470" y="25" width="90" height="60" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2"/>
        <text x="515" y="60" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF4</text>
        <line x1="560" y1="47" x2="590" y2="47" stroke="#c8d8f0" stroke-width="2"/>
        <text x="598" y="52" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Q4</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 700 140" width="850" height="170">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#39ff14">D=1</text>
        <text x="12" y="120" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="50" y1="48" x2="80" y2="48" stroke="#39ff14" stroke-width="2"/>
        <rect x="80" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="120" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <line x1="160" y1="48" x2="200" y2="48" stroke="#39ff14" stroke-width="2"/>
        <rect x="200" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="240" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <line x1="280" y1="48" x2="320" y2="48" stroke="#39ff14" stroke-width="2"/>
        <rect x="320" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="360" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <line x1="400" y1="48" x2="440" y2="48" stroke="#39ff14" stroke-width="2"/>
        <rect x="440" y="25" width="80" height="55" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="480" y="57" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#a0c8ff">D-FF4</text>
        <line x1="520" y1="48" x2="550" y2="48" stroke="#39ff14" stroke-width="2"/>
        <text x="555" y="35" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">Q1=1</text>
        <text x="555" y="50" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">Q2=1</text>
        <text x="555" y="65" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">Q3=1</text>
        <text x="555" y="80" font-family="JetBrains Mono,monospace" font-size="11" fill="#39ff14">Q4=1</text>
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
    description: 'מצב HOLD — פליפלופ יכול לשמור ערך גם כשהכניסה משתנה. מקרה 1: SET ואז HOLD. מקרה 2: כשהשניים דולקים — מי גובר?',
    instruction: 'בחר את הפליפלופ שמתאים לשני המקרים ולחץ STEP פעמיים',
    hint: 'מקרה 1: S=1 מדליק, ואז S=0 — הפליפלופ צריך לזכור. מקרה 2: S=R=1 — רק פליפלופ שבו SET גובר שומר Q=1.',
    solution: {
      ffsUsed: ['SR-FF'],
      explanation: 'SR Flip-Flop שומר ערך כש-S=R=0 (HOLD). D-FF לא יכול לשמור — הוא תמיד לוכד את הכניסה. JK ו-T מחליפים כש-J=K=1. רק SR עושה SET→HOLD ומחזיק את הזיכרון.',
      blockSvg: `<svg viewBox="0 0 360 200" width="440" height="245">
        <text x="12" y="52" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">S</text>
        <line x1="30" y1="47" x2="100" y2="47" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="102" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#39ff14">R</text>
        <line x1="30" y1="97" x2="100" y2="97" stroke="#39ff14" stroke-width="2.5"/>
        <text x="12" y="162" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">CLK</text>
        <line x1="45" y1="157" x2="100" y2="157" stroke="#ffcc00" stroke-width="2.5"/>
        <rect x="100" y="25" width="160" height="150" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="180" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="24" font-weight="bold" fill="#00d4ff">SR-FF</text>
        <line x1="260" y1="62" x2="320" y2="62" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="67" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q</text>
        <line x1="260" y1="137" x2="320" y2="137" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="328" y="142" font-family="JetBrains Mono,monospace" font-size="16" font-weight="bold" fill="#c8d8f0">Q̄</text>
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
    description: 'מונה טבעת — ארבעה פליפלופים במעגל סגור. ביט אחד "רץ" סביב הטבעת, שלב אחד בכל פעימת שעון. משמש ליצירת תזמון סדרתי ולבקרת מכונות מצב.',
    instruction: 'שים את הפליפלופ הנכון בכל המקומות ולחץ STEP 3 פעמים',
    hint: 'הפלט של FF4 מוזן חזרה לכניסת FF1. הביט זז: 1000→0100→0010→0001. איזה פליפלופ מעביר נתון הלאה?',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'Ring Counter — ארבעה D-FF במעגל סגור. ה-1 מסתובב בטבעת שלב אחד בכל פעימת שעון. משמש לתזמון רב-פאזי, בקרת מכונות מצב, ויצירת דפוסי LED.',
      blockSvg: `<svg viewBox="0 0 400 280" width="480" height="340">
        <rect x="100" y="20" width="80" height="50" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="140" y="50" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF1</text>
        <rect x="260" y="80" width="80" height="50" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="300" y="110" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF2</text>
        <rect x="200" y="180" width="80" height="50" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="240" y="210" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF3</text>
        <rect x="60" y="120" width="80" height="50" rx="6" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="100" y="150" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#00d4ff">D-FF4</text>
        <line x1="180" y1="40" x2="260" y2="95" stroke="#39ff14" stroke-width="2"/>
        <line x1="300" y1="130" x2="270" y2="180" stroke="#39ff14" stroke-width="2"/>
        <line x1="200" y1="205" x2="140" y2="160" stroke="#39ff14" stroke-width="2"/>
        <polyline points="60,140 30,140 30,30 100,30" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
        <text x="20" y="85" font-family="JetBrains Mono,monospace" font-size="10" font-weight="bold" fill="#ff6b6b">Q4→D1</text>
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
    description: 'מונה פקודות (PC) — ארבעה פליפלופים במקביל מאחסנים את כתובת הפקודה הנוכחית. הכתובת מתעדכנת בכל פעימת שעון. זהו הרגיסטר החשוב ביותר במעבד.',
    instruction: 'שים את הפליפלופ הנכון בכל המקומות ולחץ STEP 3 פעמים',
    hint: 'הכניסות משתנות כל צעד כמו מונה בינארי. איזה פליפלופ תמיד לוכד את מה שבכניסה? אחרי 3 צעדים: כתובת 011 (=3).',
    solution: {
      ffsUsed: ['D-FF', 'D-FF', 'D-FF', 'D-FF'],
      explanation: 'Program Counter — ארבעה D-FF במקביל שומרים כתובת 4-ביט. בכל פעימת שעון הם לוכדים את הכתובת הבאה. במעבד אמיתי, מעגל חיצוני מחשב PC+1 והרגיסטר רק שומר את התוצאה.',
      blockSvg: `<svg viewBox="0 0 500 220" width="600" height="270">
        <text x="8" y="22" font-family="JetBrains Mono,monospace" font-size="12" fill="#888">ADDRESS BUS</text>
        <text x="8" y="52" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D0: 1→0→1</text>
        <text x="8" y="82" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">D1: 0→1→1</text>
        <text x="8" y="112" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#ff4444">D2: 0</text>
        <text x="8" y="142" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#ff4444">D3: 0</text>
        <rect x="140" y="30" width="200" height="130" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="240" y="85" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">4×D-FF</text>
        <text x="240" y="105" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" fill="#00d4ff">PROGRAM COUNTER</text>
        <text x="370" y="52" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q0=1</text>
        <text x="370" y="82" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q1=1</text>
        <text x="370" y="112" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q2=0</text>
        <text x="370" y="142" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q3=0</text>
        <text x="370" y="175" font-family="JetBrains Mono,monospace" font-size="14" font-weight="bold" fill="#ffcc00">= ADDRESS 3</text>
      </svg>`,
      circuitSvg: `<svg viewBox="0 0 600 200" width="720" height="245">
        <text x="12" y="22" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">STEP 1: 0001 | STEP 2: 0010 | STEP 3: 0011</text>
        <rect x="60" y="40" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="100" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">D-FF0</text>
        <rect x="170" y="40" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="210" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">D-FF1</text>
        <rect x="280" y="40" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="320" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">D-FF2</text>
        <rect x="390" y="40" width="80" height="50" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="430" y="70" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#a0c8ff">D-FF3</text>
        <text x="500" y="55" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">Q=0011</text>
        <text x="500" y="75" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#ffcc00">ADDR=3</text>
        <text x="12" y="120" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK</text>
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
    description: 'סנכרון — שער לוגי מחשב ערך שמשתנה לאורך זמן, פליפלופ מגיב בכל פעימת שעון. הכניסות משתנות ב-3 צעדים — מצא את השער והפליפלופ שנותנים Z=0 ו-Q=1 בסוף.',
    instruction: 'שים שער ופליפלופ ולחץ STEP שלוש פעמים',
    hint: 'עקוב אחרי פלט השער בכל צעד. Z צריך להיות 0 בסוף (A=1,B=0). Q צריך להיות 1 — איזה פליפלופ מחליף מצב כשהכניסה 1?',
    solution: {
      gatesUsed: ['AND'],
      ffsUsed: ['T-FF'],
      explanation: 'AND + T-FF — השער מוציא 1 רק כש-A=B=1 (צעד 2). T-FF מחליף מצב פעם אחת ונשאר Q=1. בצעד 3 השער חוזר ל-0 (Z=0) אבל T-FF שומר על Q=1. זהו הבסיס של מעגל שמגיב לאירוע חד-פעמי.',
      blockSvg: `<svg viewBox="0 0 520 200" width="630" height="245">
        <text x="8" y="25" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">STEP 1: A=0,B=1 | STEP 2: A=1,B=1 | STEP 3: A=1,B=0</text>
        <text x="8" y="72" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">A</text>
        <text x="8" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">B</text>
        <line x1="25" y1="68" x2="80" y2="68" stroke="#39ff14" stroke-width="2.5"/>
        <line x1="25" y1="98" x2="80" y2="98" stroke="#39ff14" stroke-width="2.5"/>
        <rect x="80" y="50" width="80" height="65" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="120" y="90" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">AND</text>
        <line x1="160" y1="82" x2="200" y2="82" stroke="#39ff14" stroke-width="2"/>
        <line x1="200" y1="82" x2="200" y2="62" stroke="#39ff14" stroke-width="2"/>
        <line x1="200" y1="62" x2="250" y2="62" stroke="#c8d8f0" stroke-width="2"/>
        <text x="258" y="67" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#c8d8f0">Z=0</text>
        <line x1="200" y1="82" x2="240" y2="100" stroke="#39ff14" stroke-width="2"/>
        <rect x="240" y="80" width="90" height="55" rx="8" fill="rgba(10,30,50,0.9)" stroke="#00d4ff" stroke-width="2.5"/>
        <text x="285" y="113" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="18" font-weight="bold" fill="#00d4ff">T-FF</text>
        <line x1="330" y1="107" x2="380" y2="107" stroke="#c8d8f0" stroke-width="2.5"/>
        <text x="388" y="112" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#c8d8f0">Q=1</text>
        <text x="8" y="160" font-family="JetBrains Mono,monospace" font-size="11" fill="#888">AND: 0→1→0 | T-FF toggles at STEP 2 → Q stays 1</text>
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
        <text x="288" y="60" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">Z=0</text>
        <line x1="240" y1="70" x2="280" y2="90" stroke="#39ff14" stroke-width="2"/>
        <rect x="280" y="75" width="80" height="45" rx="5" fill="rgba(14,31,51,0.96)" stroke="#2a5a90" stroke-width="2"/>
        <text x="320" y="103" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="15" font-weight="bold" fill="#a0c8ff">T-FF</text>
        <line x1="360" y1="97" x2="400" y2="97" stroke="#39ff14" stroke-width="2"/>
        <text x="408" y="102" font-family="JetBrains Mono,monospace" font-size="13" font-weight="bold" fill="#39ff14">Q=1</text>
        <text x="8" y="150" font-family="JetBrains Mono,monospace" font-size="12" font-weight="bold" fill="#ffcc00">CLK ×3</text>
        <text x="8" y="175" font-family="JetBrains Mono,monospace" font-size="10" fill="#888">Q: 0 → 0 → 1 → 1 (toggle only when AND=1)</text>
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

  // L42 — FILTER ZERO (easy: 1 gate captures 0)
  // NAND(A=1,B=1)=0 → D-FF → Q=0 after 1 STEP
  {
    id: 42, name: 'FILTER ZERO', difficulty: 'Sequential Logic',
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
    id: 43, name: 'TOGGLE DETECTOR', difficulty: 'Sequential Logic',
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
    id: 44, name: 'CONDITIONAL SET', difficulty: 'Sequential Logic',
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
    id: 45, name: 'PIPELINE FILTER', difficulty: 'Sequential Logic',
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
    id: 46, name: 'DUAL GATE CHAIN', difficulty: 'Sequential Logic',
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
    id: 47, name: 'GATE-CONTROLLED JK', difficulty: 'Sequential Logic',
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
    id: 48, name: 'INVERTED SHIFT', difficulty: 'Sequential Logic',
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
    id: 49, name: 'PIPELINE STAGE', difficulty: 'Sequential Logic',
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
    id: 50, name: 'DUAL REGISTER', difficulty: 'Sequential Logic',
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
