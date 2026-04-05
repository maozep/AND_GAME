/* ============================================================
   renderer.js — Canvas Drawing Engine
   ============================================================ */

const Renderer = (() => {

  // ── Color Palette ─────────────────────────────────────────
  const C = {
    bg:           '#0a0e14',
    grid:         'rgba(30, 60, 100, 0.18)',
    gridAccent:   'rgba(30, 90, 160, 0.28)',

    wireHigh:     '#39ff14',
    wireHighGlow: 'rgba(57,255,20,0.55)',
    wireLow:      '#c62828',
    wireLowGlow:  'rgba(198,40,40,0.35)',
    wireNull:     '#2a3a50',

    nodeInput:    '#0a2a4a',
    nodeInputBorder: '#1e6fa0',
    nodeGate:     '#0e1f33',
    nodeGateBorder:  '#2a4060',
    nodeGateEmpty:   '#1a2a3a',
    nodeGateEmptyBorder: '#3a5a7a',
    nodeOutput:   '#0a1f0a',
    nodeOutputBorder: '#1a6a1a',
    nodeOutputSolved: '#0a3a0a',
    nodeOutputSolvedBorder: '#39ff14',

    textPrimary:  '#c8d8f0',
    textDim:      '#4a6080',
    textGate:     '#a0c8ff',
    textValue:    '#ffffff',
    textTarget:   '#5a8080',
    textHigh:     '#39ff14',
    textLow:      '#ff4444',
    accent:       '#1e90ff',
    accentCyan:   '#00d4ff',
  };

  // ── Node geometry constants ────────────────────────────────
  const NODE = {
    inputR:  28,      // radius for INPUT circles
    outputR: 28,      // radius for OUTPUT circles
    gateW:   90,      // width  of GATE_SLOT rectangles
    gateH:   52,      // height of GATE_SLOT rectangles
    gateR:   8,       // border-radius for GATE_SLOT
  };

  let canvas, ctx;
  let W, H;           // canvas dimensions
  let _winFlash = 0;  // animation tick for win state

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Main Render ───────────────────────────────────────────
  function render(level, evalResult, hoveredNodeId, solved) {
    if (!ctx || !level) return;

    ctx.clearRect(0, 0, W, H);
    _drawBackground();
    _drawGrid();

    const { wireValues, nodeValues } = evalResult || {
      wireValues: new Map(),
      nodeValues:  new Map(),
    };

    _drawWires(level, wireValues);
    _drawNodes(level, nodeValues, hoveredNodeId, solved);

    if (solved) _drawSolvedHalo();
  }

  // ── Background ────────────────────────────────────────────
  function _drawBackground() {
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, W, H);
  }

  // ── Dot Grid ──────────────────────────────────────────────
  function _drawGrid() {
    const spacing = 40;
    const offsetX = (W % spacing) / 2;
    const offsetY = (H % spacing) / 2;

    ctx.save();
    for (let x = offsetX; x < W; x += spacing) {
      for (let y = offsetY; y < H; y += spacing) {
        const isMajor = (Math.round((x - offsetX) / spacing) % 4 === 0) &&
                        (Math.round((y - offsetY) / spacing) % 4 === 0);
        ctx.fillStyle = isMajor ? C.gridAccent : C.grid;
        ctx.beginPath();
        ctx.arc(x, y, isMajor ? 1.5 : 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  // ── Wires ─────────────────────────────────────────────────
  function _drawWires(level, wireValues) {
    const nodeMap = new Map(level.nodes.map(n => [n.id, n]));

    level.wires.forEach(wire => {
      const src  = nodeMap.get(wire.sourceId);
      const dst  = nodeMap.get(wire.targetId);
      if (!src || !dst) return;

      const val  = wireValues.get(wire.id);
      const { color, glow, width } = _wireStyle(val);

      // Compute source and destination anchor points
      const srcPt = _nodeOutputAnchor(src);
      const dstPt = _nodeInputAnchor(dst, wire.targetInputIndex);

      ctx.save();

      // Glow layer
      if (val !== null) {
        ctx.strokeStyle = glow;
        ctx.lineWidth   = width + 6;
        ctx.lineCap     = 'round';
        ctx.shadowColor = glow;
        ctx.shadowBlur  = val === 1 ? 18 : 8;
        ctx.globalAlpha = 0.4;
        _drawWirePath(srcPt, dstPt);
        ctx.stroke();
      }

      // Main wire
      ctx.shadowBlur  = 0;
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth   = width;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      _drawWirePath(srcPt, dstPt);
      ctx.stroke();

      // Signal dot at source end
      _drawSignalDot(srcPt.x, srcPt.y, val, width);

      ctx.restore();
    });
  }

  function _wireStyle(val) {
    if (val === 1)    return { color: C.wireHigh, glow: C.wireHighGlow, width: 2.5 };
    if (val === 0)    return { color: C.wireLow,  glow: C.wireLowGlow,  width: 2   };
    return                   { color: C.wireNull, glow: C.wireNull,     width: 1.5 };
  }

  function _drawWirePath(src, dst) {
    // L-shaped routing: horizontal first, then vertical
    const mx = src.x + (dst.x - src.x) * 0.55;
    ctx.beginPath();
    ctx.moveTo(src.x, src.y);
    ctx.lineTo(mx,    src.y);
    ctx.lineTo(mx,    dst.y);
    ctx.lineTo(dst.x, dst.y);
  }

  function _drawSignalDot(x, y, val, wireW) {
    if (val === null) return;
    ctx.save();
    ctx.fillStyle   = val === 1 ? C.wireHigh : C.wireLow;
    ctx.shadowColor = val === 1 ? C.wireHighGlow : C.wireLowGlow;
    ctx.shadowBlur  = val === 1 ? 10 : 5;
    ctx.beginPath();
    ctx.arc(x, y, wireW + 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ── Node Anchors ──────────────────────────────────────────
  function _nodeOutputAnchor(node) {
    if (node.type === 'INPUT') {
      return { x: node.x + NODE.inputR,  y: node.y };
    }
    if (node.type === 'GATE_SLOT') {
      return { x: node.x + NODE.gateW / 2, y: node.y };
    }
    // OUTPUT (should never be a source but guard anyway)
    return { x: node.x + NODE.outputR, y: node.y };
  }

  function _nodeInputAnchor(node, inputIndex) {
    if (node.type === 'OUTPUT') {
      return { x: node.x - NODE.outputR, y: node.y };
    }
    if (node.type === 'GATE_SLOT') {
      const totalInputs = 2; // most gates have 2 inputs; NOT has 1 but still centered
      const spread = 18;
      const offsetY = (inputIndex - (totalInputs - 1) / 2) * spread;
      return { x: node.x - NODE.gateW / 2, y: node.y + offsetY };
    }
    return { x: node.x - NODE.inputR, y: node.y };
  }

  // ── Nodes ─────────────────────────────────────────────────
  function _drawNodes(level, nodeValues, hoveredNodeId, solved) {
    level.nodes.forEach(node => {
      const val     = nodeValues ? nodeValues.get(node.id) : null;
      const hovered = node.id === hoveredNodeId;

      switch (node.type) {
        case 'INPUT':     _drawInputNode(node, val, hovered);            break;
        case 'GATE_SLOT': _drawGateNode(node, val, hovered);             break;
        case 'OUTPUT':    _drawOutputNode(node, val, hovered, solved);   break;
      }
    });
  }

  // INPUT node — circle
  function _drawInputNode(node, val, hovered) {
    const r = NODE.inputR;
    ctx.save();

    // Outer glow if signal is high
    if (val === 1) {
      ctx.shadowColor = C.wireHighGlow;
      ctx.shadowBlur  = 20;
    }

    // Fill
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = val === 1
      ? 'rgba(10,60,10,0.95)'
      : 'rgba(30,10,10,0.95)';
    ctx.fill();

    // Border
    ctx.strokeStyle = val === 1 ? '#1a8a1a' : '#6a1a1a';
    ctx.lineWidth   = hovered ? 2.5 : 1.5;
    ctx.stroke();
    ctx.shadowBlur  = 0;

    // Value label — large, centered
    ctx.fillStyle   = val === 1 ? C.textHigh : C.textLow;
    ctx.font        = 'bold 18px JetBrains Mono, monospace';
    ctx.textAlign   = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(val !== null ? val.toString() : '?', node.x, node.y);

    // Pin label (A, B, C...) above the node
    ctx.fillStyle   = C.textDim;
    ctx.font        = '10px JetBrains Mono, monospace';
    ctx.fillText(node.label || '', node.x, node.y - r - 10);

    ctx.restore();
  }

  // GATE_SLOT node — rounded rectangle
  function _drawGateNode(node, val, hovered) {
    const { gateW: w, gateH: h, gateR: r } = NODE;
    const x = node.x - w / 2;
    const y = node.y - h / 2;

    ctx.save();

    const isEmpty = node.gate === null;

    if (hovered) {
      ctx.shadowColor = 'rgba(0,212,255,0.5)';
      ctx.shadowBlur  = 20;
    }

    // Background
    ctx.fillStyle = isEmpty
      ? 'rgba(10,20,35,0.92)'
      : 'rgba(14,31,51,0.96)';
    _roundRect(ctx, x, y, w, h, r);
    ctx.fill();

    // Border
    ctx.strokeStyle = hovered
      ? '#00d4ff'
      : (isEmpty ? '#3a5a7a' : '#2a5a90');
    ctx.lineWidth = hovered ? 2 : 1.5;
    _roundRect(ctx, x, y, w, h, r);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Animated dashed border for empty slots
    if (isEmpty) {
      ctx.strokeStyle = 'rgba(0,212,255,0.3)';
      ctx.lineWidth   = 1;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = (Date.now() / 80) % 12;
      _roundRect(ctx, x + 3, y + 3, w - 6, h - 6, r - 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Gate label or placeholder
    if (isEmpty) {
      ctx.fillStyle    = 'rgba(0,212,255,0.35)';
      ctx.font         = 'bold 20px JetBrains Mono, monospace';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('?', node.x, node.y);
    } else {
      ctx.fillStyle    = C.textGate;
      ctx.font         = 'bold 13px JetBrains Mono, monospace';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.gate, node.x, node.y - 7);

      // Output value badge
      if (val !== null) {
        ctx.fillStyle = val === 1 ? C.textHigh : C.textLow;
        ctx.font      = 'bold 11px JetBrains Mono, monospace';
        ctx.fillText(`= ${val}`, node.x, node.y + 10);
      }
    }

    // "CLICK" hint for empty + hovered
    if (isEmpty && hovered) {
      ctx.fillStyle    = '#00d4ff';
      ctx.font         = '8px JetBrains Mono, monospace';
      ctx.letterSpacing = '2px';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('CLICK TO PLACE', node.x, y + h + 6);
    }

    ctx.restore();
  }

  // OUTPUT node — circle with target ring
  function _drawOutputNode(node, val, hovered, solved) {
    const r = NODE.outputR;
    ctx.save();

    const correct = (val !== null) && (val === node.targetValue);

    // Outer glow on correct match
    if (correct) {
      ctx.shadowColor = C.wireHighGlow;
      ctx.shadowBlur  = solved ? 30 : 20;
    }

    // Fill
    const fillColor = correct
      ? 'rgba(10,50,10,0.96)'
      : (val === null ? 'rgba(10,14,20,0.96)' : 'rgba(40,10,10,0.96)');
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Border
    ctx.strokeStyle = correct ? '#39ff14' : (hovered ? '#00d4ff' : '#1e3a50');
    ctx.lineWidth   = correct ? 2.5 : 1.5;
    ctx.stroke();
    ctx.shadowBlur  = 0;

    // Target ring (outer dashed)
    ctx.strokeStyle = node.targetValue === 1 ? 'rgba(57,255,20,0.25)' : 'rgba(198,40,40,0.25)';
    ctx.lineWidth   = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Computed value
    ctx.fillStyle    = val === null
      ? C.wireNull
      : (val === 1 ? C.textHigh : C.textLow);
    ctx.font         = 'bold 16px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(val !== null ? val.toString() : '?', node.x, node.y - 3);

    // Target annotation
    ctx.fillStyle    = 'rgba(100,150,170,0.7)';
    ctx.font         = '8px JetBrains Mono, monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText(`→${node.targetValue}`, node.x, node.y + 12);

    // Pin label
    ctx.fillStyle    = C.textDim;
    ctx.font         = '10px JetBrains Mono, monospace';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(node.label || '', node.x, node.y - r - 10);

    ctx.restore();
  }

  // ── Solved Halo ───────────────────────────────────────────
  function _drawSolvedHalo() {
    const gradient = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, H*0.75);
    gradient.addColorStop(0, 'rgba(57,255,20,0.0)');
    gradient.addColorStop(1, 'rgba(57,255,20,0.06)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);
  }

  // ── Helpers ───────────────────────────────────────────────
  function _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // ── Hit Testing (used by input.js) ────────────────────────
  function getNodeAtPoint(x, y, nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      if (n.type === 'GATE_SLOT') {
        const hw = NODE.gateW / 2 + 6;  // slight padding
        const hh = NODE.gateH / 2 + 6;
        if (x >= n.x - hw && x <= n.x + hw && y >= n.y - hh && y <= n.y + hh) {
          return n;
        }
      } else {
        const r = NODE.inputR + 6;
        const dx = x - n.x, dy = y - n.y;
        if (dx*dx + dy*dy <= r*r) return n;
      }
    }
    return null;
  }

  return { init, render, resize, getNodeAtPoint };

})();
