# AND_GAME — Combinational Logic Puzzle Engine

> A browser-based logic gate puzzle game built on HTML5 Canvas and Vanilla JavaScript.
> Place gates. Satisfy targets. Think in boolean.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Core Gameplay & Mechanics](#2-core-gameplay--mechanics)
3. [Architecture & System Design](#3-architecture--system-design)
4. [Visuals & UI](#4-visuals--ui)
5. [Step-by-Step Development Plan](#5-step-by-step-development-plan)
6. [File Structure](#6-file-structure)

---

## 1. Project Overview

**AND_GAME** is a combinational logic puzzle game that challenges players to reconstruct functional digital circuits by placing logic gates into an empty schematic. Each level presents a predefined circuit topology — a Directed Acyclic Graph (DAG) — with fixed inputs, wired paths, and empty gate slots. The player must identify which gate belongs in each slot so that the circuit's outputs match the specified target boolean values.

The aesthetic draws directly from professional EDA (Electronic Design Automation) tools and PCB layout software: dark backgrounds, signal-colored traces, and clean node annotations. This is a game for people who think in `1`s and `0`s.

**Core constraints:**
- Tech stack: HTML5 Canvas, CSS, Vanilla JavaScript — no external libraries or frameworks.
- Target build time: under 4 hours.
- Platform: Any modern browser, no installation required.

---

## 2. Core Gameplay & Mechanics

### 2.1 Levels (Schematics)

Each level is defined as a **Directed Acyclic Graph (DAG)** containing three categories of nodes:

| Node Type     | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `INPUT`       | Fixed source nodes. Value is hardcoded (`0` or `1`). Not interactive.       |
| `GATE_SLOT`   | Empty placeholders where the player must place a logic gate.                |
| `OUTPUT`      | Terminal nodes. Each carries a **Target Value** the player must satisfy.    |

Levels are hardcoded as plain JavaScript objects — a list of nodes with positions and a list of directed wire connections. No external data files are required.

### 2.2 Signals & Wires

- Wires carry a single boolean value: `1` (High / True) or `0` (Low / False).
- Wire value is determined at runtime by the evaluation engine — it is **derived**, never set manually.
- A single node output may **fan-out**: its signal can feed into multiple downstream gate inputs simultaneously. This is standard combinational logic behavior.
- Wires are rendered as straight or L-shaped paths between nodes on the canvas. Their color reflects the live signal state.

### 2.3 Available Logic Gates

The player may place any of the following gates into an empty `GATE_SLOT`:

| Gate   | Inputs | Boolean Expression         | Truth Table Summary              |
|--------|--------|----------------------------|----------------------------------|
| `AND`  | 2      | `A & B`                    | Output `1` only if both `1`      |
| `OR`   | 2      | `A \| B`                   | Output `1` if either `1`         |
| `XOR`  | 2      | `A ^ B`                    | Output `1` if inputs differ      |
| `NAND` | 2      | `~(A & B)`                 | Inverse of AND                   |
| `NOR`  | 2      | `~(A \| B)`                | Inverse of OR                    |
| `NOT`  | 1      | `~A`                       | Inverts single input             |

Each gate type is cycled through in order on repeated clicks of the same slot.

### 2.4 Player Interaction

1. The player **clicks** on any `GATE_SLOT` node rendered on the canvas.
2. The slot **cycles** to the next gate type in the palette (`EMPTY → AND → OR → XOR → NAND → NOR → NOT → EMPTY → ...`).
3. Immediately upon placement, the entire circuit **re-evaluates** (see §3.1).
4. The canvas re-renders with updated wire states and output node values.

The player receives no "submit" button — the game detects the win condition automatically after every gate change.

### 2.5 Real-Time Simulation

Every gate placement triggers a full forward-propagation pass through the DAG. This is not debounced or deferred — it runs synchronously on every interaction and completes in microseconds for puzzle-scale circuits.

### 2.6 Win Condition

After each evaluation pass, the engine checks all `OUTPUT` nodes:

```
win = ∀ output node o: o.computedValue === o.targetValue
```

If this predicate is satisfied, the level is marked as **SOLVED**. The game then:
- Highlights all wires and nodes in a "solved" visual state.
- Displays a win overlay with the level number and a prompt to advance.

---

## 3. Architecture & System Design

### 3.1 Graph Evaluation Engine

The evaluation engine implements a **topological propagation algorithm** over the node DAG. The algorithm guarantees each node is evaluated exactly once, after all its upstream dependencies have been resolved.

**Algorithm — Forward Propagation via Topological Sort (Kahn's Algorithm):**

```
1. Compute in-degree for every node.
2. Initialize a queue with all nodes where in-degree == 0 (INPUT nodes).
3. While queue is not empty:
   a. Dequeue node N.
   b. Evaluate N:
      - If INPUT:  value = N.fixedValue
      - If GATE_SLOT with gate placed: value = gate_fn(input_values[])
      - If GATE_SLOT with no gate:    value = undefined (signal is broken)
      - If OUTPUT: value = upstream wire value (pass-through)
   c. For each successor S of N:
      - Record wire value from N → S.
      - Decrement in-degree of S.
      - If S.in-degree == 0, enqueue S.
4. All node values and wire values are now resolved.
5. Check win condition against OUTPUT targets.
```

This approach handles fan-out naturally: the same computed value is written to all outgoing wires from a node simultaneously.

### 3.2 Core Data Structures

#### `Node` Object

```js
{
  id: String,           // Unique identifier, e.g. "in_A", "gate_1", "out_X"
  type: String,         // "INPUT" | "GATE_SLOT" | "OUTPUT"
  x: Number,            // Canvas X position (center)
  y: Number,            // Canvas Y position (center)

  // INPUT only
  fixedValue: Number,   // 0 or 1

  // GATE_SLOT only
  gate: String | null,  // "AND" | "OR" | "XOR" | "NAND" | "NOR" | "NOT" | null

  // OUTPUT only
  targetValue: Number,  // 0 or 1

  // Runtime (set by evaluator, reset each pass)
  computedValue: Number | null,
}
```

#### `Wire` Object

```js
{
  id: String,           // e.g. "wire_inA_gate1"
  sourceId: String,     // ID of the source node
  targetId: String,     // ID of the destination node
  targetInputIndex: Number, // Which input slot of the target (0 or 1 for 2-input gates)

  // Runtime
  value: Number | null, // 0 | 1 | null (null = unresolved / broken)
}
```

#### `Level` Object

```js
{
  id: Number,
  name: String,
  nodes: Node[],
  wires: Wire[],
}
```

### 3.3 Module Breakdown

| Module         | File              | Responsibility                                              |
|----------------|-------------------|-------------------------------------------------------------|
| Entry Point    | `index.html`      | Canvas element, script imports, minimal DOM structure       |
| Styles         | `style.css`       | Dark theme, overlay, UI panel styling                       |
| Game State     | `js/state.js`     | Holds active level, node list, wire list, solved flag       |
| Evaluator      | `js/engine.js`    | Topological sort, gate computation, win condition check     |
| Renderer       | `js/renderer.js`  | Canvas draw calls: wires, nodes, labels, overlays           |
| Interaction    | `js/input.js`     | Canvas click handler, hit-testing, gate cycling             |
| Level Data     | `js/levels.js`    | Hardcoded level definitions (nodes + wires)                 |
| Main Loop      | `js/main.js`      | Initialization, wires state → renderer → input setup        |

### 3.4 Gate Computation Functions

```js
const GATE_FN = {
  AND:  (a, b) => a & b,
  OR:   (a, b) => a | b,
  XOR:  (a, b) => a ^ b,
  NAND: (a, b) => (a & b) ^ 1,
  NOR:  (a, b) => (a | b) ^ 1,
  NOT:  (a)    => a ^ 1,
};
```

Gates with unresolved inputs (upstream slot is empty) output `null`, propagating a "broken signal" state downstream. The renderer distinguishes this from a valid `0`.

---

## 4. Visuals & UI

### 4.1 Aesthetic Reference

The visual language mirrors professional EDA tools (e.g., KiCad, Logisim, Digital Works):
- **Dark background** — near-black (`#0d1117`) suggesting a PCB substrate or schematic canvas.
- **Grid overlay** — subtle dot grid (`rgba(255,255,255,0.04)`) for spatial reference.
- **Node outlines** — clean rounded rectangles or circles with thin borders.
- **Typography** — monospace font (`JetBrains Mono`, `Courier New` fallback) for all labels.

### 4.2 Wire Color States

| Signal State | Color               | Hex / CSS                  | Description               |
|--------------|---------------------|----------------------------|---------------------------|
| High (`1`)   | Neon Green          | `#39ff14` / `#00e676`      | Glowing active trace      |
| Low (`0`)    | Dark Red / Charcoal | `#c62828` / `#424242`      | Inactive trace            |
| Unresolved   | Dim Grey            | `#555555`                  | Broken / no gate placed   |

Wires in the High state render with a `shadowBlur` glow effect to simulate the neon-on-dark PCB aesthetic.

### 4.3 Node Rendering

| Node Type   | Shape              | Label                              |
|-------------|--------------------|------------------------------------|
| `INPUT`     | Circle             | Fixed value (`0` or `1`)           |
| `GATE_SLOT` | Rounded Rectangle  | Gate name or `?` if empty          |
| `OUTPUT`    | Circle             | Computed value + `→ target` label  |

- **Empty slots** pulse with a subtle animated border to draw player attention.
- **Solved output** nodes flash briefly green before settling into the win state.

### 4.4 UI Panel

A fixed HUD panel rendered in DOM (not canvas) displays:
- Current level name and number.
- Available gate palette (visual reference only).
- "Next Level" button (visible only on win).

---

## 5. Step-by-Step Development Plan

### Phase 1 — Data Structures & Logic Engine
**Goal:** A working headless evaluator. No rendering yet.

- [ ] Scaffold project: `index.html`, `style.css`, `js/` directory.
- [ ] Define `Node`, `Wire`, `Level` data structures in `js/state.js`.
- [ ] Implement `evaluate(level)` in `js/engine.js`:
  - Build adjacency map and in-degree table from wire list.
  - Implement Kahn's topological sort loop.
  - Apply `GATE_FN` for each gate slot.
  - Propagate wire values.
  - Return `{ nodeValues, wireValues, solved }`.
- [ ] Write one hardcoded test level and `console.log` the evaluation result to validate correctness.

**Exit criterion:** `evaluate()` returns correct wire and node values for a manually assembled test case.

---

### Phase 2 — Canvas Renderer
**Goal:** The schematic is visible and correctly reflects simulation state.

- [ ] Set up canvas in `index.html`, size it to `window.innerWidth × window.innerHeight`.
- [ ] Implement `render(level, evalResult)` in `js/renderer.js`:
  - Clear canvas with dark background.
  - Draw dot grid.
  - Draw all wires using `wireValues` from eval result (color by state, glow on High).
  - Draw all nodes (INPUT circles, GATE_SLOT rectangles, OUTPUT circles).
  - Render labels: gate name / `?` / input value / `value → target`.
- [ ] Call `evaluate()` then `render()` on page load.

**Exit criterion:** A static schematic renders correctly with appropriate wire colors.

---

### Phase 3 — User Interaction
**Goal:** Clicking a gate slot cycles its gate type and triggers live re-evaluation.

- [ ] Implement `getClickedNode(x, y, nodes)` hit-test in `js/input.js`.
  - For each `GATE_SLOT`, check if click point is within node bounds.
- [ ] Attach `canvas.addEventListener('click', handler)`.
  - On click: resolve clicked node → cycle its gate → call `evaluate()` → call `render()`.
- [ ] Implement gate cycling:
  ```
  GATE_PALETTE = [null, "AND", "OR", "XOR", "NAND", "NOR", "NOT"]
  nextGate = GATE_PALETTE[(currentIndex + 1) % GATE_PALETTE.length]
  ```
- [ ] Add cursor style change (`cursor: pointer`) when hovering over a `GATE_SLOT`.

**Exit criterion:** Clicking any slot visibly changes its gate and immediately updates all wire colors on the canvas.

---

### Phase 4 — Level Design & Win State
**Goal:** Two complete, solvable puzzle levels with proper win detection and progression.

- [ ] Design **Level 1** (Tutorial — 3 nodes):
  - Inputs: `A=1, B=0`
  - One `GATE_SLOT` (solution: `OR`)
  - Output target: `1`
  - Tests: player must discover that `OR(1,0) = 1`.

- [ ] Design **Level 2** (Intermediate — 5 nodes):
  - Inputs: `A=1, B=1, C=0`
  - Two `GATE_SLOT`s with fan-out wiring (solution: e.g., `AND` then `XOR`)
  - Two output targets demonstrating different signal paths.

- [ ] Encode both levels as JS objects in `js/levels.js`.
- [ ] Implement win detection in `evaluate()` — set `solved = true` when all output targets match.
- [ ] Implement win overlay in `renderer.js`:
  - Semi-transparent overlay with "CIRCUIT SOLVED" text.
  - Brief wire glow animation.
- [ ] Wire "Next Level" button in the DOM to load and render the next level.
- [ ] Add level select / restart logic in `js/main.js`.

**Exit criterion:** Both levels are playable end-to-end. Solving level 1 unlocks level 2. Solving level 2 shows a final completion screen.

---

## 6. File Structure

```
AND_GAME/
├── index.html          # Entry point — canvas + DOM shell
├── style.css           # Dark theme, HUD, overlay styles
├── README.md           # This document (PRD + Architecture)
└── js/
    ├── main.js         # Bootstrap: init level, bind events, first render
    ├── state.js        # Active game state (current level, nodes, wires)
    ├── engine.js       # DAG evaluator: topological sort + gate functions
    ├── renderer.js     # Canvas draw calls: grid, wires, nodes, overlays
    ├── input.js        # Click handler, hit-testing, gate cycling
    └── levels.js       # Hardcoded level definitions
```

---

## Engineering Notes

- **No requestAnimationFrame loop is needed.** This is an event-driven simulation, not a real-time animation. Re-render is triggered only on user input or level load.
- **Cycle detection:** Because levels are designed as DAGs, cycles are impossible by construction. No runtime cycle detection is required.
- **NOT gate inputs:** A `NOT` gate occupies one input slot. The wire list must reflect this — only one wire should target a `NOT` slot. The evaluator reads `inputs[0]` only.
- **Fan-out:** Implemented naturally — multiple wires share the same `sourceId`. The evaluator writes the source node's `computedValue` to all outgoing wires in a single pass.
- **Scalability:** The architecture supports adding more levels by appending to `levels.js`. No structural changes to the engine or renderer are required.

---

*AND_GAME — Built in 4 hours. Powered by boolean algebra.*
