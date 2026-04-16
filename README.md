# AND_GAME — Digital Logic Puzzle Engine

### [▶ Play the game](https://MaozEpsein.github.io/AND_GAME/)

> A browser-based digital logic puzzle game built on HTML5 Canvas and Vanilla JavaScript.
> Place gates and flip-flops. Trace signals through time. Think in boolean.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Core Gameplay & Mechanics](#2-core-gameplay--mechanics)
3. [Architecture & System Design](#3-architecture--system-design)
4. [Visuals & UI](#4-visuals--ui)
5. [Current Status](#5-current-status)
6. [File Structure](#6-file-structure)

---

## 1. Project Overview

**AND_GAME** is a digital logic puzzle game that challenges players to reconstruct functional circuits by placing logic gates and flip-flops into empty schematics. Each level presents a predefined circuit topology — a Directed Acyclic Graph (DAG) — with fixed inputs, wired paths, and empty slots. The player must identify which component belongs in each slot so that the circuit's outputs match the specified targets.

The game covers both **combinational logic** (gates only) and **sequential logic** (gates + flip-flops with clock-driven state), teaching real-world hardware architectures used in processors, memory controllers, and communication systems.

The aesthetic draws from professional EDA (Electronic Design Automation) tools: dark backgrounds, signal-colored traces, and clean node annotations.

**Core constraints:**
- Tech stack: HTML5 Canvas, CSS, Vanilla JavaScript — Firebase Firestore for community features.
- Platform: Any modern browser, no installation required.

---

## 2. Core Gameplay & Mechanics

### 2.1 Levels (Schematics)

Each level is defined as a **DAG** containing the following node types:

| Node Type     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `INPUT`       | Fixed or dynamic source nodes. May have `stepValues` for time-varying inputs. |
| `GATE_SLOT`   | Empty placeholder where the player places a logic gate.                     |
| `FF_SLOT`     | Empty placeholder where the player places a flip-flop.                      |
| `CLOCK`       | Clock signal source for sequential levels.                                  |
| `OUTPUT`      | Terminal node with a **target value** the player must satisfy.              |

Levels support optional features:
- **`stepValues`** — Inputs that change value at each clock step (time-varying).
- **`stepTargets`** — Outputs that show expected values at each step (timeline visualization).
- **`initialQ`** — Initial flip-flop state (Q₀) displayed before the first clock edge.
- **`minSteps`** — Minimum clock steps required before the win condition is checked.
- **`linkedGroup`** — Multiple slots that share the same component (place once, fills all).

### 2.2 Signals & Wires

- Wires carry a single boolean value: `1` (High) or `0` (Low).
- Wire value is derived at runtime by the evaluation engine.
- A single node output may **fan-out** to multiple downstream inputs.
- Sequential wires may carry `Q` or `Q̄` outputs from flip-flops via `sourceOutputIndex`.

### 2.3 Available Components

#### Logic Gates

| Gate   | Inputs | Boolean Expression | Description                |
|--------|--------|--------------------|----------------------------|
| `AND`  | 2      | `A & B`            | Output 1 only if both 1    |
| `OR`   | 2      | `A \| B`           | Output 1 if either 1       |
| `XOR`  | 2      | `A ^ B`            | Output 1 if inputs differ  |
| `NAND` | 2      | `~(A & B)`         | Inverse of AND             |
| `NOR`  | 2      | `~(A \| B)`        | Inverse of OR              |
| `NOT`  | 1      | `~A`               | Inverts single input       |

#### Flip-Flops

| FF Type | Inputs | Behavior on Rising Clock Edge                          |
|---------|--------|--------------------------------------------------------|
| `D-FF`  | D      | Captures D → Q = D                                    |
| `T-FF`  | T      | T=1: Toggle Q. T=0: Hold Q.                           |
| `SR-FF` | S, R   | S=1,R=0: SET. S=0,R=1: RESET. S=R=0: HOLD. S=R=1: SET wins. |
| `JK-FF` | J, K   | J=K=1: Toggle. J=1,K=0: SET. J=0,K=1: RESET. J=K=0: HOLD.   |

### 2.4 Player Interaction

1. **Combinational levels:** Drag gates from the palette onto empty `GATE_SLOT` nodes. The circuit evaluates immediately.
2. **Sequential levels:** Drag gates and/or flip-flops onto empty slots. Press **STEP** to deliver clock edges. The circuit evaluates on each rising edge.
3. **Auto-clock:** Toggle automatic stepping at 600ms intervals.
4. **Clear All:** Reset all placed components (also via Ctrl+Shift+R).
5. **Auto-Solve (dev):** Ctrl+Shift+S places the correct solution and runs all required steps.

### 2.5 Design Mode (Level 61)

A free-form sandbox where players build circuits from scratch:
- Place any component: INPUT, OUTPUT, GATE, FF, CLK, MUX, 7SEG.
- Draw wires between nodes.
- Edit node properties (labels, values, initial states).
- TEST mode to run and verify circuits.
- EXPORT/IMPORT circuits as JSON.
- A guided tutorial on first entry explains all tools.

### 2.6 Gallery System

Players can save and share their Design Mode creations:

- **Personal Gallery** — Saved locally (localStorage). Name, author, description. Edit, delete, load, export.
- **Community Gallery** — Shared via Firebase Firestore. Browse designs from all players worldwide. Like/unlike designs. Save a copy to your personal gallery. Delete your own uploads.
- **Search** — Filter designs by name, author, or description in both galleries.
- **Access** — Gallery is available from the Design Mode toolbar and as a dedicated tab in the STAGES menu.

### 2.7 Evaluation Engine

#### Combinational Evaluation
Every gate placement triggers a full forward-propagation pass through the DAG using topological sort (Kahn's algorithm). Each node is evaluated exactly once after all upstream dependencies resolve.

#### Sequential Evaluation (3-Phase)
For levels with flip-flops, evaluation runs in three phases per clock edge:

1. **Phase 1 — Propagate:** Evaluate all combinational nodes. FFs act as sources emitting their stored Q values.
2. **Phase 2 — Clock Edge:** Detect rising edges (0→1) on CLK wires. Update FF states using their next-state functions.
3. **Phase 3 — Re-propagate:** If any FF state changed, re-evaluate all downstream combinational nodes with the new Q values.

Dynamic inputs (`stepValues`) update their `fixedValue` before each step.

### 2.8 Win Condition

```
win = (stepCount >= minSteps) AND ∀ output o: o.computedValue === o.targetValue
```

### 2.9 Fail Detection

For levels with `minSteps` or `stepValues`, if all required steps complete without reaching the target, a fail overlay appears with a retry option.

---

## 3. Architecture & System Design

### 3.1 Core Data Structures

#### Node Object (extended)

```js
{
  id: String,
  type: "INPUT" | "GATE_SLOT" | "FF_SLOT" | "CLOCK" | "OUTPUT",
  x: Number, y: Number,

  // INPUT
  fixedValue: Number,       // 0 or 1
  stepValues: Number[],     // Optional: values per step [step1, step2, ...]
  label: String,

  // GATE_SLOT
  gate: String | null,      // "AND" | "OR" | "XOR" | "NAND" | "NOR" | "NOT" | null
  linkedGroup: String,      // Optional: slots in same group share the same gate

  // FF_SLOT
  ffType: String | null,    // "D" | "T" | "SR" | "JK" | null
  initialQ: Number,         // Optional: initial Q state (0 or 1)
  linkedGroup: String,      // Optional: slots in same group share the same FF type

  // OUTPUT
  targetValue: Number,      // 0 or 1
  stepTargets: Number[],    // Optional: expected values per step (timeline display)
}
```

#### Wire Object

```js
{
  id: String,
  sourceId: String,
  targetId: String,
  targetInputIndex: Number,
  sourceOutputIndex: Number,  // 0 = Q, 1 = Q̄ (for FF outputs)
  isClockWire: Boolean,       // true for CLK connections
}
```

#### Level Object

```js
{
  id: Number,
  name: String,
  difficulty: String,
  description: String,
  instruction: String,
  hint: String,
  minSteps: Number,           // Optional
  nodes: Node[],
  wires: Wire[],
  solution: {
    gatesUsed: String[],
    ffsUsed: String[],
    explanation: String,
    blockSvg: String,         // SVG block diagram
    circuitSvg: String,       // SVG circuit diagram
  },
  truthTable: Object,         // Optional: for combinational levels
}
```

### 3.2 Module Breakdown

| Module         | File              | Responsibility                                              |
|----------------|-------------------|-------------------------------------------------------------|
| Entry Point    | `index.html`      | Canvas, HUD, overlays, Firebase SDK initialization          |
| Styles         | `style.css`       | Dark EDA theme, overlays, gallery UI, responsive layout     |
| Game State     | `js/state.js`     | Level state, FF states, clock control, stepValues management |
| Evaluator      | `js/engine.js`    | 3-phase DAG evaluation, gate/FF functions, win condition     |
| Renderer       | `js/renderer.js`  | Canvas rendering: nodes, wires, FF states, timeline displays |
| Interaction    | `js/input.js`     | Drag-and-drop for gates and FFs, hover handling              |
| Level Data     | `js/levels.js`    | 61 level definitions with solutions and SVG diagrams         |
| Main Loop      | `js/main.js`      | Init, timers, menus, gallery, tutorials, fail detection      |
| Firestore Rules| `firestore.rules` | Security rules for community gallery                        |

### 3.3 Gate & FF Computation Functions

```js
// Gates
const GATE_FN = {
  AND:  (a, b) => a & b,
  OR:   (a, b) => a | b,
  XOR:  (a, b) => a ^ b,
  NAND: (a, b) => (a & b) ^ 1,
  NOR:  (a, b) => (a | b) ^ 1,
  NOT:  (a)    => a ^ 1,
};

// Flip-Flops (called on rising clock edge)
const FF_FN = {
  D:  (args, q) => ({ q: args[0], qNot: args[0] ^ 1 }),
  T:  (args, q) => args[0] ? { q: q^1, qNot: q } : { q, qNot: q^1 },
  SR: (args, q) => { /* S=args[0], R=args[1]; SET dominates */ },
  JK: (args, q) => { /* J=args[0], K=args[1]; Toggle when J=K=1 */ },
};
```

---

## 4. Visuals & UI

### 4.1 Aesthetic

The visual language mirrors professional EDA tools (KiCad, Logisim, Digital Works):
- **Dark background** — near-black (`#0d1117`) PCB substrate aesthetic.
- **Dot grid overlay** — subtle spatial reference.
- **Monospace typography** — JetBrains Mono throughout.
- **Neon signal colors** — green for High, red for Low, yellow for Clock.

### 4.2 Wire Color States

| Signal State | Color               | Description               |
|--------------|---------------------|---------------------------|
| High (`1`)   | Neon Green `#39ff14` | Glowing active trace      |
| Low (`0`)    | Dark Red `#c62828`   | Inactive trace            |
| Clock        | Yellow `#ffcc00`     | Clock signal              |
| Unresolved   | Grey `#555555`       | No component placed       |

### 4.3 Node Rendering

| Node Type   | Shape              | Visual Features                              |
|-------------|--------------------|--------------------------------------------- |
| `INPUT`     | Circle             | Static: value display. Dynamic: mini-circle timeline inside |
| `GATE_SLOT` | Rounded Rectangle  | Gate name or animated `?` if empty           |
| `FF_SLOT`   | Purple Rectangle   | FF type + Q/Q̄ display, or `FF?` + Q₀ if empty |
| `CLOCK`     | Circle             | Yellow pulse wave symbol                     |
| `OUTPUT`    | Circle             | Static: value + target. Dynamic: mini-circle timeline inside |

### 4.4 Timeline Visualization

For levels with `stepValues`/`stepTargets`, inputs and outputs display **mini-circles inside the node**, one per step:
- Each mini-circle shows the value for that step (green=1, red=0).
- The active step is highlighted with a white border.
- All steps are visible from the start for planning.

### 4.5 UI Panels

- **HUD:** Level name, timer, best time, gate/FF palettes, action buttons.
- **Stage Menu:** Grid of levels organized by difficulty tabs, with completion status and gallery tab.
- **Hint Overlay:** Per-level guidance without revealing the solution.
- **Truth Table Overlay:** Required truth table for combinational levels.
- **Win Overlay:** Solution diagrams (block + circuit), explanation, gates/FFs used.
- **Fail Overlay:** Retry option when all steps complete without matching targets.
- **Info Panel:** Gate truth tables and flip-flop function tables with CMOS diagrams.
- **Gallery Overlay:** Personal and community design browser with search, likes, and management.
- **Gallery Save Dialog:** Name, author, description, and community sharing option.

---

## 5. Current Status

### 61 Levels Across 7 Difficulty Tiers

| Tab | Levels | Difficulty | Topics |
|-----|--------|------------|--------|
| 1. Fundamentals | 1–10 | Easy | NOT, AND, OR, NAND, NOR, XOR, gate chains, fanout |
| 2. Building Blocks | 11–20 | Medium | XNOR, half adder, parity, Gray code, MUX, DEMUX, carry gen/prop, priority encoder |
| 3. Advanced Circuits | 21–30 | Hard | Majority, equality, comparator, decoder, full adder, MUX tree, ripple carry adder, logic matrix |
| 4. Flip-Flops | 31–40 | Sequential | D/T/SR/JK flip-flops, ripple counter, Johnson counter, shift register, hold mode, ring counter, program counter |
| 5. Sequential Logic | 41–50 | Advanced | Synchronizer, filter, edge pulse, conditional SET, write-enable register, synchronous counter, LFSR, pipeline bypass, hazard detector, dual-mode register |
| 6. FSM Applications | 51–60 | Expert | Elevator controller, alarm system, traffic light, vending machine, rocket launch, CPU pipeline FSMs |
| 7. Design Mode | 61 | Sandbox | Free-form circuit builder with gallery and community sharing |

### Real-World Architectures Covered

Levels 41–50 map to specific hardware:
- **USB/SPI/I2C synchronizers** (L41)
- **Button debounce circuits** (L42)
- **PWM generators / UART** (L43)
- **ARM interrupt flag management** (L44)
- **x86/ARM register file write-enable** (L45)
- **DDR memory counters / 5G frequency dividers** (L46)
- **CRC (Ethernet), USB 3.0 scrambling, Bluetooth encryption** (L47 — LFSR)
- **ARM Cortex pipeline bypass detection** (L48)
- **GPIO edge detection, display controllers** (L49)
- **Ethernet FSM, PCI bus arbiter, cache control** (L50)

### Features

- 61 levels with unique solutions + sandbox mode
- Drag-and-drop gate and flip-flop placement
- Real-time combinational and sequential evaluation
- Dynamic input/output timeline visualization (stepValues/stepTargets)
- Initial flip-flop state display (Q₀)
- Per-level solution diagrams (block + circuit SVGs)
- Stage timer with per-level best time tracking
- Hint system with per-level guidance
- Auto-clock for sequential levels
- Fail detection with retry for multi-step levels
- **Design Mode** — free-form circuit sandbox with full component palette
- **Personal Gallery** — save, name, describe, edit, and manage your designs locally
- **Community Gallery** — share designs to Firebase, browse others' creations, like/unlike
- **Search** — filter gallery designs by name, author, or description
- **Guided Tutorials** — interactive walkthroughs for gates (L1), flip-flops (L31), and design mode (L61)
- Dev auto-solve (Ctrl+Shift+S) and clear-all (Ctrl+Shift+R)
- Gate and FF truth tables with CMOS transistor structure diagrams
- Completion persistence via localStorage

---

## 6. File Structure

```
AND_GAME/
├── index.html          # Entry point — canvas, DOM overlays, Firebase SDK
├── style.css           # Dark EDA theme, all UI styling, gallery styles
├── firestore.rules     # Firestore security rules for community gallery
├── README.md           # This document
└── js/
    ├── main.js         # Bootstrap, game loop, menus, gallery, tutorials
    ├── state.js        # Game state, FF states, clock control, stepValues
    ├── engine.js       # 3-phase DAG evaluator, gate/FF functions, win condition
    ├── renderer.js     # Canvas rendering: nodes, wires, FFs, timeline displays
    ├── input.js        # Drag-and-drop, hover handling, hit testing
    ├── sound.js        # Audio playback
    ├── waveform.js     # Sequential mode waveform visualization
    └── levels.js       # 61 level definitions with solutions and SVG diagrams
```

---

## Engineering Notes

- The game uses `requestAnimationFrame` for continuous rendering with a lightweight animation loop.
- Sequential evaluation uses a 3-phase pipeline: propagate → clock edge → re-propagate.
- Dynamic inputs (`stepValues`) and fail detection (`minSteps`) enable multi-step puzzle design.
- Timeline visualization (mini-circles inside nodes) provides visual feedback for time-varying signals.
- All puzzle levels have mathematically proven unique solutions stored in `solution` objects.
- The architecture supports expanding beyond 61 levels with no code changes.
- Community features use Firebase Firestore (compat SDK) which works from both `file://` and `http://` protocols.
- Gallery ownership is tracked via a per-browser `authorId` — players can only delete their own community uploads.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` | Undo last action |
| `Ctrl+Y` / `Ctrl+Shift+Z` | Redo |
| `W` | Toggle waveform display |
| `Space` | STEP — deliver one clock edge (sequential levels) |
| `H` | Toggle hint overlay |
| `Escape` | Close any open overlay |
| `Ctrl+Shift+S` | Auto-solve current level (dev tool) |
| `Ctrl+Shift+R` | Clear all placed components |

### Design Mode Shortcuts

| Shortcut | Action |
|----------|--------|
| `S` | Select tool |
| `I` | Place Input |
| `O` | Place Output |
| `G` | Place Gate |
| `F` | Place Flip-Flop |
| `C` | Place Clock |
| `M` | Place MUX Switch |
| `7` | Place 7-Segment Display |
| `W` | Wire tool |
| `D` | Delete tool |
| `T` | Test circuit |
| `E` | Export JSON |
| `P` | Import JSON |
| `K` | Save to Gallery |
| `L` | Open Gallery |
| `R` | Share screenshot |
| `X` | Clear all |

---

*AND_GAME — Built in the browser. Powered by boolean algebra and sequential logic.*
