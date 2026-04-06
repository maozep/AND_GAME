/* ============================================================
   renderer.js — Canvas Drawing Engine
   Supports INPUT, GATE_SLOT, OUTPUT, CLOCK, and FLIPFLOP nodes.
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
    wireClock:    '#00d4ff',
    wireClockGlow:'rgba(0,212,255,0.5)',

    nodeInput:       '#0a2a4a',
    nodeInputBorder: '#1e6fa0',
    nodeGate:        '#0e1f33',
    nodeGateBorder:  '#2a4060',
    nodeGateEmpty:   '#1a2a3a',
    nodeGateEmptyBorder: '#3a5a7a',
    nodeOutput:      '#0a1f0a',
    nodeOutputBorder:'#1a6a1a',

    // Clock node
    clockFill:       '#0a1a2a',
    clockBorder:     '#0080c0',
    clockBorderHigh: '#00d4ff',

    // Flip-flop node
    ffFill:          '#120d22',
    ffBorder:        '#5a2a9a',
    ffBorderActive:  '#a060ff',
    ffQhigh:         '#39ff14',
    ffQlow:          '#c62828',
    ffClkAccent:     '#00d4ff',

    textPrimary:  '#c8d8f0',
    textDim:      '#4a6080',
    textGate:     '#a0c8ff',
    textValue:    '#ffffff',
    textHigh:     '#39ff14',
    textLow:      '#ff4444',
    accentCyan:   '#00d4ff',
  };

  // ── Node geometry ──────────────────────────────────────────
  const NODE = {
    inputR:  28,
    outputR: 28,
    clockR:  28,
    gateW:   90,
    gateH:   52,
    gateR:   8,
    ffW:     110,
    ffH:     82,
    ffR:     8,
  };

  let canvas, ctx;
  let W, H;

  function init(canvasEl) {
    canvas = canvasEl;
    ctx    = canvas.getContext('2d');
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

    const ffStates = State.getFfStates ? State.getFfStates() : new Map();

    _drawWires(level, wireValues);
    _drawNodes(level, nodeValues, ffStates, hoveredNodeId, solved);

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
      const src = nodeMap.get(wire.sourceId);
      const dst = nodeMap.get(wire.targetId);
      if (!src || !dst) return;

      const val   = wireValues.get(wire.id);
      const isCLK = wire.isClockWire;

      const { color, glow, width } = _wireStyle(val, isCLK);

      const srcPt = _nodeOutputAnchor(src, wire.sourceOutputIndex || 0);
      const dstPt = _nodeInputAnchor(dst, wire.targetInputIndex, wire.isClockWire);

      ctx.save();

      // Glow layer
      if (val !== null || isCLK) {
        ctx.strokeStyle = glow;
        ctx.lineWidth   = width + 6;
        ctx.lineCap     = 'round';
        ctx.shadowColor = glow;
        ctx.shadowBlur  = isCLK ? 14 : (val === 1 ? 18 : 8);
        ctx.globalAlpha = isCLK ? 0.5 : 0.4;
        _drawWirePath(srcPt, dstPt);
        ctx.stroke();
      }

      // Dashed style for CLK wires
      if (isCLK) {
        ctx.setLineDash([8, 5]);
        ctx.lineDashOffset = (Date.now() / 60) % 13;
      }

      ctx.shadowBlur  = 0;
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth   = width;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      _drawWirePath(srcPt, dstPt);
      ctx.stroke();

      if (isCLK) ctx.setLineDash([]);

      _drawSignalDot(srcPt.x, srcPt.y, val, width, isCLK);

      ctx.restore();
    });
  }

  function _wireStyle(val, isCLK) {
    if (isCLK) return { color: C.wireClock, glow: C.wireClockGlow, width: 2 };
    if (val === 1) return { color: C.wireHigh, glow: C.wireHighGlow, width: 2.5 };
    if (val === 0) return { color: C.wireLow,  glow: C.wireLowGlow,  width: 2   };
    return               { color: C.wireNull, glow: C.wireNull,     width: 1.5 };
  }

  function _drawWirePath(src, dst) {
    const mx = src.x + (dst.x - src.x) * 0.55;
    ctx.beginPath();
    ctx.moveTo(src.x, src.y);
    ctx.lineTo(mx,    src.y);
    ctx.lineTo(mx,    dst.y);
    ctx.lineTo(dst.x, dst.y);
  }

  function _drawSignalDot(x, y, val, wireW, isCLK) {
    if (val === null && !isCLK) return;
    ctx.save();
    ctx.fillStyle   = isCLK ? C.wireClock
                            : (val === 1 ? C.wireHigh : C.wireLow);
    ctx.shadowColor = isCLK ? C.wireClockGlow
                            : (val === 1 ? C.wireHighGlow : C.wireLowGlow);
    ctx.shadowBlur  = 10;
    ctx.beginPath();
    ctx.arc(x, y, wireW + 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ── Node Anchors ──────────────────────────────────────────

  // outputIndex: 0=Q (or normal), 1=QNot (FF only)
  function _nodeOutputAnchor(node, outputIndex) {
    outputIndex = outputIndex || 0;

    if (node.type === 'INPUT' || node.type === 'CLOCK') {
      return { x: node.x + NODE.inputR, y: node.y };
    }
    if (node.type === 'GATE_SLOT') {
      return { x: node.x + NODE.gateW / 2, y: node.y };
    }
    if (Engine.FF_TYPES && Engine.FF_TYPES.has(node.type)) {
      const hw = NODE.ffW / 2;
      // Q: top-right, QNot: bottom-right
      const yOff = outputIndex === 1 ? 18 : -18;
      return { x: node.x + hw, y: node.y + yOff };
    }
    return { x: node.x + NODE.outputR, y: node.y };
  }

  function _nodeInputAnchor(node, inputIndex, isClockWire) {
    if (node.type === 'OUTPUT') {
      return { x: node.x - NODE.outputR, y: node.y };
    }
    if (node.type === 'GATE_SLOT') {
      const spread  = 18;
      const offsetY = (inputIndex - 0.5) * spread;
      return { x: node.x - NODE.gateW / 2, y: node.y + offsetY };
    }
    if (Engine.FF_TYPES && Engine.FF_TYPES.has(node.type)) {
      const hw = NODE.ffW / 2;
      if (isClockWire) {
        // CLK enters at the bottom-left with a small notch
        return { x: node.x - hw, y: node.y + 22 };
      }
      // Data inputs distributed on the left side
      const ffInputCount = _ffDataInputCount(node);
      const spread = 20;
      const totalH = (ffInputCount - 1) * spread;
      const offsetY = inputIndex * spread - totalH / 2;
      return { x: node.x - hw, y: node.y + offsetY - 10 };
    }
    return { x: node.x - NODE.inputR, y: node.y };
  }

  function _ffDataInputCount(node) {
    if (node.type === 'FF_SLOT') {
      return (node.ffType === 'SR' || node.ffType === 'JK') ? 2 : 1;
    }
    return { FLIPFLOP_D: 1, FLIPFLOP_T: 1, FLIPFLOP_SR: 2, FLIPFLOP_JK: 2 }[node.type] || 1;
  }

  // ── Nodes ─────────────────────────────────────────────────
  function _drawNodes(level, nodeValues, ffStates, hoveredNodeId, solved) {
    level.nodes.forEach(node => {
      const val     = nodeValues ? (nodeValues.get(node.id) ?? null) : null;
      const hovered = node.id === hoveredNodeId;

      if (node.type === 'INPUT')            _drawInputNode(node, val, hovered);
      else if (node.type === 'CLOCK')       _drawClockNode(node, val, hovered);
      else if (node.type === 'GATE_SLOT')   _drawGateNode(node, val, hovered);
      else if (node.type === 'OUTPUT')      _drawOutputNode(node, val, hovered, solved);
      else if (node.type === 'FF_SLOT') {
        const ffState = ffStates.get(node.id) || { q: 0, qNot: 1 };
        _drawFfSlotNode(node, ffState, hovered);
      }
      else if (Engine.FF_TYPES && Engine.FF_TYPES.has(node.type)) {
        const ffState = ffStates.get(node.id) || { q: 0, qNot: 1 };
        _drawFlipFlopNode(node, ffState, hovered);
      }
    });
  }

  // ── INPUT node ────────────────────────────────────────────
  function _drawInputNode(node, val, hovered) {
    const r = NODE.inputR;
    ctx.save();
    if (val === 1) { ctx.shadowColor = C.wireHighGlow; ctx.shadowBlur = 20; }

    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = val === 1 ? 'rgba(10,60,10,0.95)' : 'rgba(30,10,10,0.95)';
    ctx.fill();

    ctx.strokeStyle = val === 1 ? '#1a8a1a' : '#6a1a1a';
    ctx.lineWidth   = hovered ? 2.5 : 1.5;
    ctx.stroke();
    ctx.shadowBlur  = 0;

    ctx.fillStyle    = val === 1 ? C.textHigh : C.textLow;
    ctx.font         = 'bold 18px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(val !== null ? val.toString() : '?', node.x, node.y);

    ctx.fillStyle    = C.textDim;
    ctx.font         = '10px JetBrains Mono, monospace';
    ctx.fillText(node.label || '', node.x, node.y - r - 10);
    ctx.restore();
  }

  // ── CLOCK node ────────────────────────────────────────────
  function _drawClockNode(node, val, hovered) {
    const r   = NODE.clockR;
    const isH = val === 1;
    ctx.save();

    if (isH) { ctx.shadowColor = C.wireClockGlow; ctx.shadowBlur = 22; }

    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = isH ? 'rgba(0,40,60,0.96)' : 'rgba(5,15,25,0.96)';
    ctx.fill();

    ctx.strokeStyle = isH ? C.clockBorderHigh : C.clockBorder;
    ctx.lineWidth   = hovered ? 2.5 : 1.8;
    ctx.stroke();
    ctx.shadowBlur  = 0;

    // Clock wave symbol
    ctx.strokeStyle = isH ? C.wireClock : 'rgba(0,150,190,0.5)';
    ctx.lineWidth   = 2;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.beginPath();
    const bx = node.x - 14, by = node.y + 4, sw = 10, sh = 12;
    ctx.moveTo(bx,        by);
    ctx.lineTo(bx,        by - sh);
    ctx.lineTo(bx + sw,   by - sh);
    ctx.lineTo(bx + sw,   by);
    ctx.lineTo(bx + sw*2, by);
    ctx.stroke();

    // Label
    ctx.fillStyle    = C.textDim;
    ctx.font         = '10px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('CLK', node.x, node.y - r - 10);

    // Value
    ctx.fillStyle    = isH ? C.wireClock : 'rgba(0,150,190,0.5)';
    ctx.font         = 'bold 10px JetBrains Mono, monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText(val !== null ? val.toString() : '?', node.x + 10, node.y + 4);

    ctx.restore();
  }

  // ── GATE_SLOT node ────────────────────────────────────────
  function _drawGateNode(node, val, hovered) {
    const { gateW: w, gateH: h, gateR: r } = NODE;
    const x = node.x - w / 2;
    const y = node.y - h / 2;
    ctx.save();

    const isEmpty = node.gate == null;
    if (hovered) { ctx.shadowColor = 'rgba(0,212,255,0.5)'; ctx.shadowBlur = 20; }

    ctx.fillStyle = isEmpty ? 'rgba(10,20,35,0.92)' : 'rgba(14,31,51,0.96)';
    _roundRect(ctx, x, y, w, h, r);
    ctx.fill();

    ctx.strokeStyle = hovered ? '#00d4ff' : (isEmpty ? '#3a5a7a' : '#2a5a90');
    ctx.lineWidth   = hovered ? 2 : 1.5;
    _roundRect(ctx, x, y, w, h, r);
    ctx.stroke();
    ctx.shadowBlur  = 0;

    if (isEmpty) {
      ctx.strokeStyle    = 'rgba(0,212,255,0.3)';
      ctx.lineWidth      = 1;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = (Date.now() / 80) % 12;
      _roundRect(ctx, x + 3, y + 3, w - 6, h - 6, r - 2);
      ctx.stroke();
      ctx.setLineDash([]);

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

      if (val !== null) {
        ctx.fillStyle = val === 1 ? C.textHigh : C.textLow;
        ctx.font      = 'bold 11px JetBrains Mono, monospace';
        ctx.fillText(`= ${val}`, node.x, node.y + 10);
      }
    }

    if (isEmpty && hovered) {
      ctx.fillStyle    = '#00d4ff';
      ctx.font         = '8px JetBrains Mono, monospace';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('DROP GATE HERE', node.x, y + h + 6);
    }

    ctx.restore();
  }

  // ── OUTPUT node ───────────────────────────────────────────
  function _drawOutputNode(node, val, hovered, solved) {
    const r = NODE.outputR;
    ctx.save();

    const correct = val !== null && val === node.targetValue;
    if (correct) { ctx.shadowColor = C.wireHighGlow; ctx.shadowBlur = solved ? 30 : 20; }

    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = correct ? 'rgba(10,50,10,0.96)'
                            : (val === null ? 'rgba(10,14,20,0.96)' : 'rgba(40,10,10,0.96)');
    ctx.fill();

    ctx.strokeStyle = correct ? '#39ff14' : (hovered ? '#00d4ff' : '#1e3a50');
    ctx.lineWidth   = correct ? 2.5 : 1.5;
    ctx.stroke();
    ctx.shadowBlur  = 0;

    ctx.strokeStyle = node.targetValue === 1 ? 'rgba(57,255,20,0.25)' : 'rgba(198,40,40,0.25)';
    ctx.lineWidth   = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle    = val === null ? C.wireNull : (val === 1 ? C.textHigh : C.textLow);
    ctx.font         = 'bold 16px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(val !== null ? val.toString() : '?', node.x, node.y - 3);

    ctx.fillStyle    = 'rgba(100,150,170,0.7)';
    ctx.font         = 'bold 10px JetBrains Mono, monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText(`→${node.targetValue}`, node.x, node.y + 12);

    ctx.fillStyle    = C.textDim;
    ctx.font         = '10px JetBrains Mono, monospace';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(node.label || '', node.x, node.y - r - 10);
    ctx.restore();
  }

  // ── FF_SLOT node (player-placeable flip-flop slot) ────────
  function _drawFfSlotNode(node, ffState, hovered) {
    const { ffW: w, ffH: h, ffR: r } = NODE;
    const x = node.x - w / 2;
    const y = node.y - h / 2;
    const isEmpty = !node.ffType;
    ctx.save();

    if (hovered) { ctx.shadowColor = 'rgba(160,96,255,0.5)'; ctx.shadowBlur = 22; }

    // Background
    ctx.fillStyle = isEmpty ? 'rgba(14,8,28,0.94)' : 'rgba(18,13,34,0.97)';
    _roundRect(ctx, x, y, w, h, r);
    ctx.fill();

    // Border
    ctx.strokeStyle = hovered ? '#a060ff' : (isEmpty ? '#3a1a6a' : '#5a2a9a');
    ctx.lineWidth   = hovered ? 2 : 1.5;
    _roundRect(ctx, x, y, w, h, r);
    ctx.stroke();
    ctx.shadowBlur  = 0;

    if (isEmpty) {
      // Animated dashed border
      ctx.strokeStyle    = 'rgba(160,96,255,0.35)';
      ctx.lineWidth      = 1;
      ctx.setLineDash([6, 6]);
      ctx.lineDashOffset = (Date.now() / 80) % 12;
      _roundRect(ctx, x + 3, y + 3, w - 6, h - 6, r - 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // ? placeholder
      ctx.fillStyle    = 'rgba(160,96,255,0.4)';
      ctx.font         = 'bold 18px JetBrains Mono, monospace';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('FF?', node.x, node.y);

      if (hovered) {
        ctx.fillStyle    = '#a060ff';
        ctx.font         = '8px JetBrains Mono, monospace';
        ctx.textBaseline = 'top';
        ctx.fillText('DROP FF HERE', node.x, y + h + 6);
      }
    } else {
      // Placed — delegate to full FF drawing
      _drawFlipFlopNode(node, ffState, false);
    }

    ctx.restore();
  }

  // ── FLIPFLOP node ─────────────────────────────────────────
  function _drawFlipFlopNode(node, ffState, hovered) {
    const { ffW: w, ffH: h, ffR: r } = NODE;
    const x = node.x - w / 2;
    const y = node.y - h / 2;
    const { q, qNot } = ffState;
    ctx.save();

    // Glow when active
    if (q === 1) { ctx.shadowColor = 'rgba(160,96,255,0.5)'; ctx.shadowBlur = 20; }
    if (hovered) { ctx.shadowColor = 'rgba(0,212,255,0.5)';  ctx.shadowBlur = 22; }

    // Background
    ctx.fillStyle = 'rgba(18,13,34,0.97)';
    _roundRect(ctx, x, y, w, h, r);
    ctx.fill();

    // Border
    ctx.strokeStyle = hovered ? C.accentCyan : (q === 1 ? C.ffBorderActive : C.ffBorder);
    ctx.lineWidth   = hovered ? 2 : 1.8;
    _roundRect(ctx, x, y, w, h, r);
    ctx.stroke();
    ctx.shadowBlur  = 0;

    // Vertical divider line separating label area from Q outputs
    const divX = node.x + 14;
    ctx.strokeStyle = 'rgba(90,42,154,0.5)';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(divX, y + 8);
    ctx.lineTo(divX, y + h - 8);
    ctx.stroke();

    // FF type label — from explicit ffType (FF_SLOT) or from node.type
    const ffLabel = node.ffType ||
      ({ FLIPFLOP_D: 'D', FLIPFLOP_SR: 'SR', FLIPFLOP_JK: 'JK', FLIPFLOP_T: 'T' }[node.type]) || '?';
    ctx.fillStyle    = '#c080ff';
    ctx.font         = 'bold 16px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(ffLabel, node.x - 20, node.y);

    // Q output (top right of divider)
    const qColor = q === 1 ? C.ffQhigh : C.ffQlow;
    ctx.fillStyle    = 'rgba(200,200,200,0.5)';
    ctx.font         = '9px JetBrains Mono, monospace';
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('Q', divX + 5, node.y - 18);

    ctx.fillStyle    = qColor;
    ctx.font         = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(q.toString(), divX + 22, node.y - 18);

    // QNot output (bottom right of divider)
    const qnColor = qNot === 1 ? C.ffQhigh : C.ffQlow;
    ctx.fillStyle    = 'rgba(200,200,200,0.5)';
    ctx.font         = '9px JetBrains Mono, monospace';
    ctx.fillText('Q̄', divX + 5, node.y + 18);

    ctx.fillStyle    = qnColor;
    ctx.font         = 'bold 14px JetBrains Mono, monospace';
    ctx.fillText(qNot.toString(), divX + 22, node.y + 18);

    // CLK triangle symbol (bottom-left input port)
    ctx.fillStyle  = C.ffClkAccent;
    ctx.beginPath();
    const tx = x + 4, ty = node.y + 14;
    ctx.moveTo(tx,      ty - 6);
    ctx.lineTo(tx + 10, ty);
    ctx.lineTo(tx,      ty + 6);
    ctx.closePath();
    ctx.fill();

    // Node label above
    ctx.fillStyle    = C.textDim;
    ctx.font         = '10px JetBrains Mono, monospace';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(node.label || '', node.x, y - 10);

    ctx.restore();
  }

  // ── Solved Halo ───────────────────────────────────────────
  function _drawSolvedHalo() {
    const grad = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, H*0.75);
    grad.addColorStop(0, 'rgba(57,255,20,0.0)');
    grad.addColorStop(1, 'rgba(57,255,20,0.06)');
    ctx.fillStyle = grad;
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

  // ── Hit Testing ───────────────────────────────────────────
  function getNodeAtPoint(x, y, nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const n = nodes[i];
      if (n.type === 'GATE_SLOT') {
        const hw = NODE.gateW / 2 + 6;
        const hh = NODE.gateH / 2 + 6;
        if (x >= n.x - hw && x <= n.x + hw && y >= n.y - hh && y <= n.y + hh) return n;
      } else if (n.type === 'FF_SLOT' || (Engine.FF_TYPES && Engine.FF_TYPES.has(n.type))) {
        const hw = NODE.ffW / 2 + 6;
        const hh = NODE.ffH / 2 + 6;
        if (x >= n.x - hw && x <= n.x + hw && y >= n.y - hh && y <= n.y + hh) return n;
      } else {
        const r  = NODE.inputR + 6;
        const dx = x - n.x, dy = y - n.y;
        if (dx*dx + dy*dy <= r*r) return n;
      }
    }
    return null;
  }

  return { init, render, resize, getNodeAtPoint };

})();
