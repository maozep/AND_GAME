/* ============================================================
   levels.js — Hardcoded Puzzle Level Definitions (30 Stages)
   ============================================================ */

// The menu in main.js reads LEVELS dynamically, so increasing this array
// automatically increases the number of selectable stages.

function buildTwoInputSingleSlotLevel({ id, name, description, a, b, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 200, y: 320, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 200, y: 480, fixedValue: b, label: 'B' },
      { id: 'gate_1', type: 'GATE_SLOT', x: 550, y: 400, gate: null, label: null },
      { id: 'out_X', type: 'OUTPUT', x: 900, y: 400, targetValue: target, label: 'X' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_1', targetId: 'out_X', targetInputIndex: 0 },
    ],
  };
}

function buildSingleInputNotLevel({ id, name, description, a, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 220, y: 400, fixedValue: a, label: 'A' },
      { id: 'gate_1', type: 'GATE_SLOT', x: 560, y: 400, gate: null, label: null },
      { id: 'out_X', type: 'OUTPUT', x: 900, y: 400, targetValue: target, label: 'X' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'gate_1', targetId: 'out_X', targetInputIndex: 0 },
    ],
  };
}

function buildChainLevel({ id, name, description, a, b, c, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 180, y: 300, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 180, y: 480, fixedValue: b, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 180, y: 600, fixedValue: c, label: 'C' },
      { id: 'gate_1', type: 'GATE_SLOT', x: 480, y: 300, gate: null, label: null },
      { id: 'gate_2', type: 'GATE_SLOT', x: 720, y: 460, gate: null, label: null },
      { id: 'out_Z', type: 'OUTPUT', x: 980, y: 460, targetValue: target, label: 'Z' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_1', targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_2', targetId: 'out_Z', targetInputIndex: 0 },
    ],
  };
}

function buildDualOutputFanoutLevel({ id, name, description, a, b, c, targetX, targetY }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 200, y: 280, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 200, y: 480, fixedValue: b, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 200, y: 580, fixedValue: c, label: 'C' },
      { id: 'gate_1', type: 'GATE_SLOT', x: 520, y: 280, gate: null, label: null },
      { id: 'gate_2', type: 'GATE_SLOT', x: 520, y: 520, gate: null, label: null },
      { id: 'out_X', type: 'OUTPUT', x: 900, y: 280, targetValue: targetX, label: 'X' },
      { id: 'out_Y', type: 'OUTPUT', x: 900, y: 520, targetValue: targetY, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_A', targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'in_B', targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_C', targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_1', targetId: 'out_X', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'gate_2', targetId: 'out_Y', targetInputIndex: 0 },
    ],
  };
}

function buildThreeGateJunctionLevel({ id, name, description, a, b, c, targetP, targetQ }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 160, y: 240, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 160, y: 400, fixedValue: b, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 160, y: 560, fixedValue: c, label: 'C' },
      { id: 'gate_1', type: 'GATE_SLOT', x: 440, y: 320, gate: null },
      { id: 'gate_2', type: 'GATE_SLOT', x: 440, y: 500, gate: null },
      { id: 'gate_3', type: 'GATE_SLOT', x: 720, y: 320, gate: null },
      { id: 'out_P', type: 'OUTPUT', x: 980, y: 320, targetValue: targetP, label: 'P' },
      { id: 'out_Q', type: 'OUTPUT', x: 980, y: 500, targetValue: targetQ, label: 'Q' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_B', targetId: 'gate_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'gate_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_1', targetId: 'gate_3', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_C', targetId: 'gate_3', targetInputIndex: 1 },
      { id: 'w7', sourceId: 'gate_3', targetId: 'out_P', targetInputIndex: 0 },
      { id: 'w8', sourceId: 'gate_2', targetId: 'out_Q', targetInputIndex: 0 },
    ],
  };
}

function buildMuxCoreLevel({ id, name, description, d0, d1, s, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_D0', type: 'INPUT', x: 120, y: 250, fixedValue: d0, label: 'D0' },
      { id: 'in_D1', type: 'INPUT', x: 120, y: 550, fixedValue: d1, label: 'D1' },
      { id: 'in_S', type: 'INPUT', x: 120, y: 400, fixedValue: s, label: 'S' },
      { id: 'gate_not_s', type: 'GATE_SLOT', x: 350, y: 400, gate: null, label: null },
      { id: 'gate_and_0', type: 'GATE_SLOT', x: 560, y: 280, gate: null, label: null },
      { id: 'gate_and_1', type: 'GATE_SLOT', x: 560, y: 520, gate: null, label: null },
      { id: 'gate_or', type: 'GATE_SLOT', x: 780, y: 400, gate: null, label: null },
      { id: 'out_Y', type: 'OUTPUT', x: 1010, y: 400, targetValue: target, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_S', targetId: 'gate_not_s', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_D0', targetId: 'gate_and_0', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'gate_not_s', targetId: 'gate_and_0', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_D1', targetId: 'gate_and_1', targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_S', targetId: 'gate_and_1', targetInputIndex: 1 },
      { id: 'w6', sourceId: 'gate_and_0', targetId: 'gate_or', targetInputIndex: 0 },
      { id: 'w7', sourceId: 'gate_and_1', targetId: 'gate_or', targetInputIndex: 1 },
      { id: 'w8', sourceId: 'gate_or', targetId: 'out_Y', targetInputIndex: 0 },
    ],
  };
}

function buildDemuxLevel({ id, name, description, inputValue, s, targetY0, targetY1 }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_D', type: 'INPUT', x: 130, y: 400, fixedValue: inputValue, label: 'D' },
      { id: 'in_S', type: 'INPUT', x: 130, y: 560, fixedValue: s, label: 'S' },
      { id: 'gate_not_s', type: 'GATE_SLOT', x: 360, y: 560, gate: null, label: null },
      { id: 'gate_and_0', type: 'GATE_SLOT', x: 580, y: 320, gate: null, label: null },
      { id: 'gate_and_1', type: 'GATE_SLOT', x: 580, y: 500, gate: null, label: null },
      { id: 'out_Y0', type: 'OUTPUT', x: 930, y: 320, targetValue: targetY0, label: 'Y0' },
      { id: 'out_Y1', type: 'OUTPUT', x: 930, y: 500, targetValue: targetY1, label: 'Y1' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_S', targetId: 'gate_not_s', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_D', targetId: 'gate_and_0', targetInputIndex: 0 },
      { id: 'w3', sourceId: 'gate_not_s', targetId: 'gate_and_0', targetInputIndex: 1 },
      { id: 'w4', sourceId: 'in_D', targetId: 'gate_and_1', targetInputIndex: 0 },
      { id: 'w5', sourceId: 'in_S', targetId: 'gate_and_1', targetInputIndex: 1 },
      { id: 'w6', sourceId: 'gate_and_0', targetId: 'out_Y0', targetInputIndex: 0 },
      { id: 'w7', sourceId: 'gate_and_1', targetId: 'out_Y1', targetInputIndex: 0 },
    ],
  };
}

function buildXnorLevel({ id, name, description, a, b, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 180, y: 320, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 180, y: 500, fixedValue: b, label: 'B' },
      { id: 'gate_xor', type: 'GATE_SLOT', x: 500, y: 400, gate: null, label: null },
      { id: 'gate_not', type: 'GATE_SLOT', x: 760, y: 400, gate: null, label: null },
      { id: 'out_X', type: 'OUTPUT', x: 980, y: 400, targetValue: target, label: 'XNOR' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_xor', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_xor', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_xor', targetId: 'gate_not', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'gate_not', targetId: 'out_X', targetInputIndex: 0 },
    ],
  };
}

function buildParity3Level({ id, name, description, a, b, c, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 150, y: 260, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 150, y: 420, fixedValue: b, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 150, y: 580, fixedValue: c, label: 'C' },
      { id: 'gate_xor_1', type: 'GATE_SLOT', x: 460, y: 340, gate: null, label: null },
      { id: 'gate_xor_2', type: 'GATE_SLOT', x: 720, y: 460, gate: null, label: null },
      { id: 'out_P', type: 'OUTPUT', x: 980, y: 460, targetValue: target, label: 'P' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_xor_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_xor_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_xor_1', targetId: 'gate_xor_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_C', targetId: 'gate_xor_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'gate_xor_2', targetId: 'out_P', targetInputIndex: 0 },
    ],
  };
}

function buildFullAdderLevel({ id, name, description, a, b, cin, sumTarget, coutTarget }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 120, y: 250, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 120, y: 400, fixedValue: b, label: 'B' },
      { id: 'in_CIN', type: 'INPUT', x: 120, y: 550, fixedValue: cin, label: 'Cin' },

      { id: 'gate_xor_1', type: 'GATE_SLOT', x: 360, y: 320, gate: null, label: null },
      { id: 'gate_xor_2', type: 'GATE_SLOT', x: 600, y: 320, gate: null, label: null },
      { id: 'gate_and_1', type: 'GATE_SLOT', x: 360, y: 500, gate: null, label: null },
      { id: 'gate_and_2', type: 'GATE_SLOT', x: 600, y: 500, gate: null, label: null },
      { id: 'gate_or', type: 'GATE_SLOT', x: 820, y: 500, gate: null, label: null },

      { id: 'out_SUM', type: 'OUTPUT', x: 980, y: 320, targetValue: sumTarget, label: 'SUM' },
      { id: 'out_COUT', type: 'OUTPUT', x: 980, y: 500, targetValue: coutTarget, label: 'COUT' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'gate_xor_1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'gate_xor_1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'gate_xor_1', targetId: 'gate_xor_2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_CIN', targetId: 'gate_xor_2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'in_A', targetId: 'gate_and_1', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_B', targetId: 'gate_and_1', targetInputIndex: 1 },
      { id: 'w7', sourceId: 'in_CIN', targetId: 'gate_and_2', targetInputIndex: 0 },
      { id: 'w8', sourceId: 'gate_xor_1', targetId: 'gate_and_2', targetInputIndex: 1 },
      { id: 'w9', sourceId: 'gate_and_1', targetId: 'gate_or', targetInputIndex: 0 },
      { id: 'w10', sourceId: 'gate_and_2', targetId: 'gate_or', targetInputIndex: 1 },
      { id: 'w11', sourceId: 'gate_xor_2', targetId: 'out_SUM', targetInputIndex: 0 },
      { id: 'w12', sourceId: 'gate_or', targetId: 'out_COUT', targetInputIndex: 0 },
    ],
  };
}

function buildMux4TreeLevel({ id, name, description, d0, d1, d2, d3, s0, s1, target }) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_D0', type: 'INPUT', x: 90, y: 150, fixedValue: d0, label: 'D0' },
      { id: 'in_D1', type: 'INPUT', x: 90, y: 260, fixedValue: d1, label: 'D1' },
      { id: 'in_D2', type: 'INPUT', x: 90, y: 410, fixedValue: d2, label: 'D2' },
      { id: 'in_D3', type: 'INPUT', x: 90, y: 520, fixedValue: d3, label: 'D3' },
      { id: 'in_S0', type: 'INPUT', x: 90, y: 620, fixedValue: s0, label: 'S0' },
      { id: 'in_S1', type: 'INPUT', x: 90, y: 700, fixedValue: s1, label: 'S1' },

      { id: 'not_s0', type: 'GATE_SLOT', x: 280, y: 620, gate: null, label: null },
      { id: 'not_s1', type: 'GATE_SLOT', x: 280, y: 700, gate: null, label: null },

      { id: 'and_0', type: 'GATE_SLOT', x: 470, y: 170, gate: null, label: null },
      { id: 'and_1', type: 'GATE_SLOT', x: 470, y: 290, gate: null, label: null },
      { id: 'and_2', type: 'GATE_SLOT', x: 470, y: 430, gate: null, label: null },
      { id: 'and_3', type: 'GATE_SLOT', x: 470, y: 550, gate: null, label: null },

      { id: 'sel_0', type: 'GATE_SLOT', x: 670, y: 230, gate: null, label: null },
      { id: 'sel_1', type: 'GATE_SLOT', x: 670, y: 490, gate: null, label: null },
      { id: 'out_or', type: 'GATE_SLOT', x: 850, y: 360, gate: null, label: null },

      { id: 'out_Y', type: 'OUTPUT', x: 1030, y: 360, targetValue: target, label: 'Y' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_S0', targetId: 'not_s0', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_S1', targetId: 'not_s1', targetInputIndex: 0 },

      { id: 'w3', sourceId: 'in_D0', targetId: 'and_0', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'not_s0', targetId: 'and_0', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'in_D1', targetId: 'and_1', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_S0', targetId: 'and_1', targetInputIndex: 1 },
      { id: 'w7', sourceId: 'in_D2', targetId: 'and_2', targetInputIndex: 0 },
      { id: 'w8', sourceId: 'not_s0', targetId: 'and_2', targetInputIndex: 1 },
      { id: 'w9', sourceId: 'in_D3', targetId: 'and_3', targetInputIndex: 0 },
      { id: 'w10', sourceId: 'in_S0', targetId: 'and_3', targetInputIndex: 1 },

      { id: 'w11', sourceId: 'and_0', targetId: 'sel_0', targetInputIndex: 0 },
      { id: 'w12', sourceId: 'not_s1', targetId: 'sel_0', targetInputIndex: 1 },
      { id: 'w13', sourceId: 'and_1', targetId: 'sel_1', targetInputIndex: 0 },
      { id: 'w14', sourceId: 'in_S1', targetId: 'sel_1', targetInputIndex: 1 },

      { id: 'w15', sourceId: 'sel_0', targetId: 'out_or', targetInputIndex: 0 },
      { id: 'w16', sourceId: 'sel_1', targetId: 'out_or', targetInputIndex: 1 },
      { id: 'w17', sourceId: 'out_or', targetId: 'out_Y', targetInputIndex: 0 },
    ],
  };
}

function buildFiveInputEightOutputMatrixLevel({
  id,
  name,
  description,
  a,
  b,
  c,
  d,
  e,
  targets,
}) {
  return {
    id,
    name,
    description,
    nodes: [
      { id: 'in_A', type: 'INPUT', x: 90, y: 140, fixedValue: a, label: 'A' },
      { id: 'in_B', type: 'INPUT', x: 90, y: 250, fixedValue: b, label: 'B' },
      { id: 'in_C', type: 'INPUT', x: 90, y: 360, fixedValue: c, label: 'C' },
      { id: 'in_D', type: 'INPUT', x: 90, y: 470, fixedValue: d, label: 'D' },
      { id: 'in_E', type: 'INPUT', x: 90, y: 580, fixedValue: e, label: 'E' },

      { id: 'g1', type: 'GATE_SLOT', x: 300, y: 150, gate: null },
      { id: 'g2', type: 'GATE_SLOT', x: 300, y: 300, gate: null },
      { id: 'g3', type: 'GATE_SLOT', x: 300, y: 450, gate: null },
      { id: 'g4', type: 'GATE_SLOT', x: 300, y: 600, gate: null },

      { id: 'g5', type: 'GATE_SLOT', x: 550, y: 210, gate: null },
      { id: 'g6', type: 'GATE_SLOT', x: 550, y: 380, gate: null },
      { id: 'g7', type: 'GATE_SLOT', x: 550, y: 550, gate: null },

      { id: 'g8', type: 'GATE_SLOT', x: 780, y: 140, gate: null },
      { id: 'g9', type: 'GATE_SLOT', x: 780, y: 260, gate: null },
      { id: 'g10', type: 'GATE_SLOT', x: 780, y: 380, gate: null },
      { id: 'g11', type: 'GATE_SLOT', x: 780, y: 500, gate: null },
      { id: 'g12', type: 'GATE_SLOT', x: 780, y: 620, gate: null },

      { id: 'out_O1', type: 'OUTPUT', x: 1020, y: 120, targetValue: targets[0], label: 'O1' },
      { id: 'out_O2', type: 'OUTPUT', x: 1020, y: 190, targetValue: targets[1], label: 'O2' },
      { id: 'out_O3', type: 'OUTPUT', x: 1020, y: 260, targetValue: targets[2], label: 'O3' },
      { id: 'out_O4', type: 'OUTPUT', x: 1020, y: 330, targetValue: targets[3], label: 'O4' },
      { id: 'out_O5', type: 'OUTPUT', x: 1020, y: 400, targetValue: targets[4], label: 'O5' },
      { id: 'out_O6', type: 'OUTPUT', x: 1020, y: 470, targetValue: targets[5], label: 'O6' },
      { id: 'out_O7', type: 'OUTPUT', x: 1020, y: 540, targetValue: targets[6], label: 'O7' },
      { id: 'out_O8', type: 'OUTPUT', x: 1020, y: 610, targetValue: targets[7], label: 'O8' },
    ],
    wires: [
      { id: 'w1', sourceId: 'in_A', targetId: 'g1', targetInputIndex: 0 },
      { id: 'w2', sourceId: 'in_B', targetId: 'g1', targetInputIndex: 1 },
      { id: 'w3', sourceId: 'in_C', targetId: 'g2', targetInputIndex: 0 },
      { id: 'w4', sourceId: 'in_D', targetId: 'g2', targetInputIndex: 1 },
      { id: 'w5', sourceId: 'in_B', targetId: 'g3', targetInputIndex: 0 },
      { id: 'w6', sourceId: 'in_E', targetId: 'g3', targetInputIndex: 1 },
      { id: 'w7', sourceId: 'in_A', targetId: 'g4', targetInputIndex: 0 },
      { id: 'w8', sourceId: 'in_C', targetId: 'g4', targetInputIndex: 1 },

      { id: 'w9', sourceId: 'g1', targetId: 'g5', targetInputIndex: 0 },
      { id: 'w10', sourceId: 'g2', targetId: 'g5', targetInputIndex: 1 },
      { id: 'w11', sourceId: 'g2', targetId: 'g6', targetInputIndex: 0 },
      { id: 'w12', sourceId: 'g3', targetId: 'g6', targetInputIndex: 1 },
      { id: 'w13', sourceId: 'g3', targetId: 'g7', targetInputIndex: 0 },
      { id: 'w14', sourceId: 'g4', targetId: 'g7', targetInputIndex: 1 },

      { id: 'w15', sourceId: 'g5', targetId: 'g8', targetInputIndex: 0 },
      { id: 'w16', sourceId: 'in_E', targetId: 'g8', targetInputIndex: 1 },
      { id: 'w17', sourceId: 'g5', targetId: 'g9', targetInputIndex: 0 },
      { id: 'w18', sourceId: 'g6', targetId: 'g9', targetInputIndex: 1 },
      { id: 'w19', sourceId: 'g6', targetId: 'g10', targetInputIndex: 0 },
      { id: 'w20', sourceId: 'g7', targetId: 'g10', targetInputIndex: 1 },
      { id: 'w21', sourceId: 'g7', targetId: 'g11', targetInputIndex: 0 },
      { id: 'w22', sourceId: 'in_D', targetId: 'g11', targetInputIndex: 1 },
      { id: 'w23', sourceId: 'g9', targetId: 'g12', targetInputIndex: 0 },
      { id: 'w24', sourceId: 'g11', targetId: 'g12', targetInputIndex: 1 },

      { id: 'w25', sourceId: 'g1', targetId: 'out_O1', targetInputIndex: 0 },
      { id: 'w26', sourceId: 'g2', targetId: 'out_O2', targetInputIndex: 0 },
      { id: 'w27', sourceId: 'g5', targetId: 'out_O3', targetInputIndex: 0 },
      { id: 'w28', sourceId: 'g8', targetId: 'out_O4', targetInputIndex: 0 },
      { id: 'w29', sourceId: 'g9', targetId: 'out_O5', targetInputIndex: 0 },
      { id: 'w30', sourceId: 'g10', targetId: 'out_O6', targetInputIndex: 0 },
      { id: 'w31', sourceId: 'g11', targetId: 'out_O7', targetInputIndex: 0 },
      { id: 'w32', sourceId: 'g12', targetId: 'out_O8', targetInputIndex: 0 },
    ],
  };
}

const LEVELS = [
  buildTwoInputSingleSlotLevel({
    id: 1,
    name: 'FIRST CONTACT',
    description: 'Route two fixed inputs through one gate and satisfy the target.',
    a: 1,
    b: 0,
    target: 1,
  }),
  buildDualOutputFanoutLevel({
    id: 2,
    name: 'DUAL PATH',
    description: 'A fans out to two gates. Match both output targets.',
    a: 1,
    b: 0,
    c: 1,
    targetX: 1,
    targetY: 0,
  }),
  buildChainLevel({
    id: 3,
    name: 'CHAIN REACTION',
    description: 'Output of gate 1 feeds gate 2. Solve the chain.',
    a: 1,
    b: 1,
    c: 0,
    target: 1,
  }),
  buildThreeGateJunctionLevel({
    id: 4,
    name: 'THREE-WAY JUNCTION',
    description: 'Fan-out through a three-gate tree and satisfy two outputs.',
    a: 0,
    b: 1,
    c: 1,
    targetP: 0,
    targetQ: 1,
  }),

  buildTwoInputSingleSlotLevel({
    id: 5,
    name: 'BASIC AND',
    description: 'A one-slot warmup with a strict low target.',
    a: 1,
    b: 0,
    target: 0,
  }),
  buildSingleInputNotLevel({
    id: 6,
    name: 'INVERTER (NOT)',
    description: 'Classic inverter stage with one input and one output.',
    a: 1,
    target: 0,
  }),
  buildTwoInputSingleSlotLevel({
    id: 7,
    name: 'NAND BASICS',
    description: 'Tune a single gate to produce a guaranteed high.',
    a: 1,
    b: 1,
    target: 0,
  }),
  buildTwoInputSingleSlotLevel({
    id: 8,
    name: 'NOR BASICS',
    description: 'Single-slot logic inversion exercise.',
    a: 0,
    b: 0,
    target: 1,
  }),
  buildTwoInputSingleSlotLevel({
    id: 9,
    name: 'XOR BASICS',
    description: 'Different inputs, one-stage mismatch detector.',
    a: 1,
    b: 0,
    target: 1,
  }),

  buildMuxCoreLevel({
    id: 10,
    name: '2:1 MUX CORE',
    description: 'Build a 2-to-1 multiplexer path from primitive gates.',
    d0: 0,
    d1: 1,
    s: 1,
    target: 1,
  }),
  buildDemuxLevel({
    id: 11,
    name: '1:2 DEMUX SPLIT',
    description: 'Route one input to one of two outputs via select S.',
    inputValue: 1,
    s: 0,
    targetY0: 1,
    targetY1: 0,
  }),
  buildTwoInputSingleSlotLevel({
    id: 12,
    name: 'HALF ADDER SUM',
    description: 'Half-adder SUM node behavior for one fixed vector.',
    a: 1,
    b: 0,
    target: 1,
  }),
  buildTwoInputSingleSlotLevel({
    id: 13,
    name: 'HALF ADDER CARRY',
    description: 'Half-adder CARRY node behavior for one fixed vector.',
    a: 1,
    b: 1,
    target: 1,
  }),
  buildXnorLevel({
    id: 14,
    name: 'XNOR CELL',
    description: 'Compose XNOR from XOR followed by NOT.',
    a: 1,
    b: 1,
    target: 1,
  }),
  buildParity3Level({
    id: 15,
    name: 'PARITY CHECK (3-BIT)',
    description: 'Odd parity detector pipeline.',
    a: 1,
    b: 0,
    c: 1,
    target: 0,
  }),

  buildChainLevel({
    id: 16,
    name: 'SERIES A',
    description: 'Two-slot chain with mixed constants.',
    a: 0,
    b: 1,
    c: 1,
    target: 0,
  }),
  buildChainLevel({
    id: 17,
    name: 'SERIES B',
    description: 'Another chain forcing a high output.',
    a: 1,
    b: 0,
    c: 0,
    target: 1,
  }),
  buildChainLevel({
    id: 18,
    name: 'SERIES C',
    description: 'Chain level with all lows entering the graph.',
    a: 0,
    b: 0,
    c: 0,
    target: 1,
  }),
  buildDualOutputFanoutLevel({
    id: 19,
    name: 'FANOUT LOCK A',
    description: 'Shared source feeds two objectives simultaneously.',
    a: 1,
    b: 1,
    c: 0,
    targetX: 0,
    targetY: 1,
  }),
  buildDualOutputFanoutLevel({
    id: 20,
    name: 'FANOUT LOCK B',
    description: 'Dual-output fan-out with flipped constants.',
    a: 0,
    b: 1,
    c: 0,
    targetX: 1,
    targetY: 0,
  }),

  buildThreeGateJunctionLevel({
    id: 21,
    name: 'TREE NETWORK A',
    description: 'Three gate slots and two required outputs.',
    a: 1,
    b: 0,
    c: 1,
    targetP: 1,
    targetQ: 0,
  }),
  buildThreeGateJunctionLevel({
    id: 22,
    name: 'TREE NETWORK B',
    description: 'Alternate junction constraints.',
    a: 1,
    b: 1,
    c: 0,
    targetP: 0,
    targetQ: 1,
  }),
  buildMuxCoreLevel({
    id: 23,
    name: '2:1 MUX CORE B',
    description: 'Multiplexer reconstruction with opposite select path.',
    d0: 1,
    d1: 0,
    s: 0,
    target: 1,
  }),
  buildDemuxLevel({
    id: 24,
    name: '1:2 DEMUX SPLIT B',
    description: 'Demultiplexer stage where S routes to Y1.',
    inputValue: 1,
    s: 1,
    targetY0: 0,
    targetY1: 1,
  }),
  buildTwoInputSingleSlotLevel({
    id: 25,
    name: 'HALF ADDER SUM B',
    description: 'SUM behavior with equal inputs.',
    a: 1,
    b: 1,
    target: 0,
  }),

  buildTwoInputSingleSlotLevel({
    id: 26,
    name: 'HALF ADDER CARRY B',
    description: 'CARRY behavior with dissimilar inputs.',
    a: 0,
    b: 1,
    target: 0,
  }),
  buildParity3Level({
    id: 27,
    name: 'PARITY CHECK (3-BIT) B',
    description: 'Parity stage with odd-result target.',
    a: 1,
    b: 1,
    c: 1,
    target: 1,
  }),
  buildXnorLevel({
    id: 28,
    name: 'XNOR CELL B',
    description: 'XNOR reconstruction with unequal inputs.',
    a: 1,
    b: 0,
    target: 0,
  }),
  buildChainLevel({
    id: 29,
    name: 'OR-AND PATH',
    description: 'Late-game chain with low final target.',
    a: 1,
    b: 0,
    c: 1,
    target: 0,
  }),
  buildThreeGateJunctionLevel({
    id: 30,
    name: 'FINAL LOGIC MIX',
    description: 'Final stage combining fan-out and chained behavior.',
    a: 0,
    b: 0,
    c: 1,
    targetP: 1,
    targetQ: 1,
  }),

  buildFullAdderLevel({
    id: 31,
    name: 'FULL ADDER (1-BIT)',
    description: 'Very hard: reconstruct SUM and COUT simultaneously.',
    a: 1,
    b: 0,
    cin: 1,
    sumTarget: 0,
    coutTarget: 1,
  }),
  buildFullAdderLevel({
    id: 32,
    name: 'FULL ADDER (1-BIT) B',
    description: 'Alternate vector for full adder with different targets.',
    a: 1,
    b: 1,
    cin: 1,
    sumTarget: 1,
    coutTarget: 1,
  }),
  buildMux4TreeLevel({
    id: 33,
    name: '4:1 MUX TREE',
    description: 'Hard multiplexer tree with two select lines.',
    d0: 0,
    d1: 1,
    d2: 1,
    d3: 0,
    s0: 1,
    s1: 0,
    target: 1,
  }),
  buildMux4TreeLevel({
    id: 34,
    name: '4:1 MUX TREE B',
    description: 'Same topology, different inputs and selected path.',
    d0: 1,
    d1: 0,
    d2: 0,
    d3: 1,
    s0: 0,
    s1: 1,
    target: 0,
  }),

  buildFiveInputEightOutputMatrixLevel({
    id: 35,
    name: '5-INPUT 8-OUTPUT MATRIX',
    description: 'Very hard multi-output matrix with deep dependencies.',
    a: 1,
    b: 0,
    c: 1,
    d: 0,
    e: 1,
    targets: [1, 1, 1, 1, 1, 1, 1, 0],
  }),
  buildFiveInputEightOutputMatrixLevel({
    id: 36,
    name: '5-INPUT 8-OUTPUT MATRIX B',
    description: 'Matrix variant with mixed high/low targets.',
    a: 0,
    b: 1,
    c: 1,
    d: 1,
    e: 0,
    targets: [0, 1, 0, 1, 1, 0, 1, 0],
  }),
  buildFiveInputEightOutputMatrixLevel({
    id: 37,
    name: '5-INPUT 8-OUTPUT MATRIX C',
    description: 'Dense output constraints across all eight outputs.',
    a: 1,
    b: 1,
    c: 0,
    d: 1,
    e: 1,
    targets: [1, 0, 1, 0, 1, 1, 0, 1],
  }),
  buildFiveInputEightOutputMatrixLevel({
    id: 38,
    name: '5-INPUT 8-OUTPUT MATRIX D',
    description: 'Low-heavy target vector for maximum ambiguity.',
    a: 0,
    b: 0,
    c: 1,
    d: 0,
    e: 1,
    targets: [0, 1, 0, 0, 1, 0, 0, 1],
  }),
  buildFiveInputEightOutputMatrixLevel({
    id: 39,
    name: '5-INPUT 8-OUTPUT MATRIX E',
    description: 'High-pressure matrix with alternating targets.',
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 1,
    targets: [1, 0, 1, 1, 0, 1, 0, 0],
  }),
  buildFiveInputEightOutputMatrixLevel({
    id: 40,
    name: '5-INPUT 8-OUTPUT MATRIX OMEGA',
    description: 'Final boss: full matrix with tight output coupling.',
    a: 1,
    b: 1,
    c: 1,
    d: 0,
    e: 0,
    targets: [0, 0, 1, 1, 0, 1, 1, 1],
  }),
];

function deriveHint(level) {
  const name = level.name.toUpperCase();

  if (name.includes('MUX')) {
    return 'Use the select lines to choose exactly one data path. A standard solution is built from NOT gates on the select inputs, several AND paths, then one OR gate at the end.';
  }

  if (name.includes('DEMUX')) {
    return 'Split the input into two paths with S and NOT S. Only one output path should stay active at a time.';
  }

  if (name.includes('HALF ADDER SUM')) {
    return 'The SUM output of a half adder is XOR. Try the XOR gate first.';
  }

  if (name.includes('HALF ADDER CARRY')) {
    return 'The CARRY output of a half adder is AND. Both inputs must be high.';
  }

  if (name.includes('FULL ADDER')) {
    return 'A full adder can be built from two XOR gates for SUM, plus AND/OR logic for COUT. Think in two stages: first A xor B, then combine with Cin.';
  }

  if (name.includes('XNOR')) {
    return 'XNOR is just XOR followed by NOT.';
  }

  if (name.includes('PARITY')) {
    return 'Parity puzzles usually reduce to chained XOR gates. XOR all bits together step by step.';
  }

  if (name.includes('TREE NETWORK') || name.includes('FINAL LOGIC MIX') || name.includes('THREE-WAY JUNCTION')) {
    return 'Work from the inputs to the outputs one stage at a time. Fan-out is allowed, and some paths need inversion before they combine.';
  }

  if (name.includes('SERIES')) {
    return 'This is a chained puzzle: solve the first gate, then feed its output into the next one.';
  }

  if (name.includes('FANOUT')) {
    return 'One input feeds multiple branches. Check where the same signal must be reused in both outputs.';
  }

  if (name.includes('MATRIX')) {
    return 'This is a dense multi-output puzzle. Start from the outputs and trace the dependencies backward. Build the shared intermediate signals first.';
  }

  if (name.includes('INVERTER') || name.includes('NOT')) {
    return 'The solution is the NOT gate. Invert the single input to match the target.';
  }

  if (name.includes('NAND')) {
    return 'NAND is the inverse of AND. The output goes low only when both inputs are high.';
  }

  if (name.includes('NOR')) {
    return 'NOR is the inverse of OR. The output stays high only when both inputs are low.';
  }

  if (name.includes('XOR')) {
    return 'XOR is high when the inputs differ. Use it when you need a mismatch detector.';
  }

  if (name.includes('AND')) {
    return 'AND becomes high only when both inputs are high.';
  }

  if (name.includes('OR')) {
    return 'OR becomes high when at least one input is high.';
  }

  return 'Look at the target values and choose the gate behavior that matches the required output.';
}

LEVELS.forEach((level) => {
  level.hint = deriveHint(level);
});

function getDifficultyLabel(levelId) {
  if (levelId <= 10) return 'Easy';
  if (levelId <= 20) return 'Medium';
  if (levelId <= 30) return 'Hard';
  return 'Very Hard';
}

LEVELS.forEach((level) => {
  level.difficulty = getDifficultyLabel(level.id);
});
