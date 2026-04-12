/* ============================================================
   main.js — Bootstrap & Game Loop
   ============================================================ */

(function () {

  // ── DOM References ────────────────────────────────────────
  const canvas      = document.getElementById('game-canvas');
  const levelName   = document.getElementById('level-name');
  const btnLevels   = document.getElementById('btn-levels');
  const btnHint     = document.getElementById('btn-hint');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuBox     = document.getElementById('menu-box');
  const difficultyTabs = document.getElementById('difficulty-tabs');
  const levelGrid   = document.getElementById('level-grid');
  const btnMenuClose = document.getElementById('btn-menu-close');
  const levelTimeEl = document.getElementById('level-time');
  const levelBestEl = document.getElementById('level-best');
  const winOverlay  = document.getElementById('win-overlay');
  const winLevelEl  = document.getElementById('win-level');
  const winTimeEl   = document.getElementById('win-time');
  const winBestEl   = document.getElementById('win-best');
  const finalOverlay = document.getElementById('final-overlay');
  const hintOverlay = document.getElementById('hint-overlay');
  const hintLevelEl = document.getElementById('hint-level');
  const hintBodyEl = document.getElementById('hint-body');
  const btnHintClose = document.getElementById('btn-hint-close');
  const infoOverlay = document.getElementById('info-overlay');
  const btnInfo     = document.getElementById('btn-info');
  const btnInfoClose = document.getElementById('btn-info-close');
  const instructionOverlay = document.getElementById('instruction-overlay');
  const instructionLevelName = document.getElementById('instruction-level-name');
  const instructionText = document.getElementById('instruction-text');
  const btnStart = document.getElementById('btn-start');
  const btnTruth      = document.getElementById('btn-truth');
  const truthOverlay  = document.getElementById('truth-overlay');
  const truthContainer = document.getElementById('truth-table-container');
  const btnTruthClose = document.getElementById('btn-truth-close');
  const winSolution     = document.getElementById('win-solution');
  const solutionBlock   = document.getElementById('solution-block');
  const solutionCircuit = document.getElementById('solution-circuit');
  const solutionGates   = document.getElementById('solution-gates');
  const diagramOverlay = document.getElementById('diagram-overlay');
  const diagramTitle = document.getElementById('diagram-title');
  const diagramSubtitle = document.getElementById('diagram-subtitle');
  const diagramContent = document.getElementById('diagram-content');
  const btnDiagramClose = document.getElementById('btn-diagram-close');
  const btnNext       = document.getElementById('btn-next');
  const btnRestart    = document.getElementById('btn-restart');
  const btnWinStages  = document.getElementById('btn-win-stages');
  const btnPlayAgain  = document.getElementById('btn-play-again');

  // ── Clock UI References ───────────────────────────────────
  const clockControls = document.getElementById('clock-controls');
  const btnStep       = document.getElementById('btn-step');
  const btnAutoClk    = document.getElementById('btn-auto-clk');
  const stepCountEl   = document.getElementById('step-count');

  const COMPLETED_LEVELS_KEY = 'and_game_completed_levels';
  const BEST_TIMES_KEY = 'and_game_best_times';
  const completedLevelIds = new Set(loadCompletedLevelIds());
  const bestTimes = loadBestTimes();
  const DIFFICULTY_ORDER = ['Fundamentals', 'Building Blocks', 'Advanced Circuits', 'Flip-Flops', 'Sequential Logic', 'FSM Applications', 'Design', 'Design Mode'];
  const TRUTH_OBJECTIVES = {
    1: 'Goal: Understand that an AND gate outputs 1 only when both inputs are 1.',
    2: 'Goal: Understand that an OR gate outputs 1 when at least one input is 1.',
    3: 'Goal: Understand that a NOT gate inverts the input value (0 to 1, 1 to 0).',
    4: 'Goal: Understand that NAND is an inverted AND, so only for input 11 the output is 0.',
    5: 'Goal: Understand that NOR is an inverted OR, so only for input 00 the output is 1.',
    6: 'Goal: Understand that an XOR gate outputs 1 only when the inputs are different.',
    7: 'Goal: Understand how chaining gates changes the final logic of the system.',
    8: 'Goal: Understand signal fanout and feeding the same input to multiple paths.',
    9: 'Goal: Understand branching paths and how each branch affects the outputs.',
    10: 'Goal: Understand a network of three gates and their cumulative effect on the output.',
    11: 'Goal: Understand that a Half Adder produces Sum and Carry for two bits.',
    12: 'Goal: Understand that a Full Adder adds A, B, and Carry-in and returns Sum and Carry-out.',
    13: 'Goal: Understand that XNOR returns 1 when inputs are equal and 0 when they differ.',
    14: 'Goal: Understand that a 2-to-1 MUX selects which input passes to the output based on select bit S.',
    15: 'Goal: Understand that a 1-to-2 DEMUX routes a single input to one of two outputs based on S.',
    16: 'Goal: Understand odd parity for 3 bits: the output is 1 when the number of 1s is odd.',
    17: 'Goal: Understand the Majority function: the output is 1 when at least two inputs are 1.',
    18: 'Goal: Understand a 2-to-4 decoder that activates exactly one output based on S1,S0.',
    19: 'Goal: Understand a 1-bit comparator that indicates greater/equal/less between two inputs.',
    20: 'Goal: Understand a priority encoder that returns the index of the highest-priority active input.',
  };
  let currentMenuDifficulty = LEVELS[0] ? LEVELS[0].difficulty : 'Fundamentals';

  function _escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function _getTruthObjective(levelDef) {
    if (!levelDef) return '';
    // Hide objective for levels 1-6 (it reveals the solution)
    if (levelDef.id >= 1 && levelDef.id <= 6) return '';
    if (TRUTH_OBJECTIVES[levelDef.id]) return TRUTH_OBJECTIVES[levelDef.id];
    if (levelDef.description) return levelDef.description;
    return `Goal: Understand the operation of ${levelDef.name}.`;
  }

  function colorizeTruthTableBits() {
    const cells = document.querySelectorAll('#truth-grid td');
    cells.forEach((cell) => {
      const value = cell.textContent.trim();
      cell.classList.remove('bit-0', 'bit-1');
      if (value === '0') cell.classList.add('bit-0');
      if (value === '1') cell.classList.add('bit-1');
    });
  }

  function renderComponentDiagram(componentKey) {
    // ── Color palette ──────────────────────────────────────────
    const BG='#0d1320', NC='#39ff14', PC='#ffd700';
    const WC='#8ab4cc', VC='#4a8fff', GC='#ff5050';
    const AC='#ff9933', OC='#00d4ff', TC='#c8d8f0', DC='#4a6080';

    // ── MOSFET transistor symbol ───────────────────────────────
    // cx,cy = center; type='N'|'P'; gx = gate wire left x
    // ty = top terminal y; by = bottom terminal y; lbl = label
    //   NMOS: drain at top, source at bottom (GND side), arrow ▲ at source
    //   PMOS: source at top (VDD side), drain at bottom, bubble ○ on gate, arrow ▼ at source
    function T(cx,cy,type,gx,ty,by,lbl){
      const isN=type==='N', c=isN?NC:PC, px=cx-10, bR=5;
      const gEnd=isN?px:px-bR*2-2;
      const bub=isN?'':`<circle cx="${px-bR}" cy="${cy}" r="${bR}" fill="${BG}" stroke="${c}" stroke-width="2"/>`;
      const aY=isN?cy+12:cy-12;
      const arr=isN
        ?`<polygon points="${cx-4},${aY+9} ${cx+4},${aY+9} ${cx},${aY+1}" fill="${c}" opacity="0.88"/>`
        :`<polygon points="${cx-4},${aY-9} ${cx+4},${aY-9} ${cx},${aY-1}" fill="${c}" opacity="0.88"/>`;
      return `
        <line x1="${px}" y1="${cy-22}" x2="${px}" y2="${cy+22}" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
        <line x1="${px+1}" y1="${cy-12}" x2="${cx}" y2="${cy-12}" stroke="${c}" stroke-width="2.5"/>
        <line x1="${px+1}" y1="${cy+12}" x2="${cx}" y2="${cy+12}" stroke="${c}" stroke-width="2.5"/>
        <line x1="${cx}" y1="${cy-12}" x2="${cx}" y2="${cy+12}" stroke="${c}" stroke-width="2.5"/>
        ${bub}
        <line x1="${gx}" y1="${cy}" x2="${gEnd}" y2="${cy}" stroke="${AC}" stroke-width="2.5"/>
        <line x1="${cx}" y1="${cy-12}" x2="${cx}" y2="${ty}" stroke="${WC}" stroke-width="2"/>
        <line x1="${cx}" y1="${cy+12}" x2="${cx}" y2="${by}" stroke="${WC}" stroke-width="2"/>
        ${arr}
        <text x="${cx+16}" y="${cy+5}" fill="${c}" font-size="11" font-family="monospace" font-weight="bold">${lbl}</text>`;
    }

    // ── Circuit element helpers ────────────────────────────────
    function VDD(x,y){return `<line x1="${x-24}" y1="${y}" x2="${x+24}" y2="${y}" stroke="${VC}" stroke-width="3.5"/><text x="${x}" y="${y-8}" text-anchor="middle" fill="${VC}" font-size="10" font-family="monospace" font-weight="bold">VDD</text>`;}
    function VDDBAR(x1,x2,y){return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${VC}" stroke-width="3.5"/><text x="${(x1+x2)/2}" y="${y-8}" text-anchor="middle" fill="${VC}" font-size="10" font-family="monospace" font-weight="bold">VDD</text>`;}
    function GND(x,y){return `<line x1="${x-22}" y1="${y}" x2="${x+22}" y2="${y}" stroke="${GC}" stroke-width="3.5"/><line x1="${x-14}" y1="${y+7}" x2="${x+14}" y2="${y+7}" stroke="${GC}" stroke-width="2.5"/><line x1="${x-6}" y1="${y+14}" x2="${x+6}" y2="${y+14}" stroke="${GC}" stroke-width="2"/>`;}
    function IN(x,y,n){return `<circle cx="${x}" cy="${y}" r="17" fill="${BG}" stroke="#1e6fa0" stroke-width="2"/><text x="${x}" y="${y+5}" text-anchor="middle" fill="${TC}" font-size="14" font-family="monospace" font-weight="bold">${n}</text>`;}
    function OUTNODE(x,y){return `<circle cx="${x}" cy="${y}" r="6" fill="${OC}"/><line x1="${x+6}" y1="${y}" x2="${x+54}" y2="${y}" stroke="${OC}" stroke-width="2.5"/><text x="${x+60}" y="${y+5}" fill="${OC}" font-size="13" font-family="monospace" font-weight="bold">OUT</text>`;}
    function DOT(x,y,c){return `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}"/>`;}
    function L(x1,y1,x2,y2,c,w){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c||WC}" stroke-width="${w||2}"/>`;}
    function BLK(x,y,w,h,l1,l2,bc){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#111a2a" stroke="${bc||'#2a5080'}" stroke-width="2"/><text x="${x+w/2}" y="${y+h/2-5}" text-anchor="middle" fill="${bc||TC}" font-size="13" font-family="monospace" font-weight="bold">${l1}</text><text x="${x+w/2}" y="${y+h/2+13}" text-anchor="middle" fill="${DC}" font-size="10" font-family="monospace">${l2||''}</text>`;}
    function NOTE(t){return `<text x="22" y="444" fill="${DC}" font-size="11" font-family="monospace">${t}</text>`;}
    function DIVIDER(x){return `<line x1="${x}" y1="68" x2="${x}" y2="438" stroke="#1a3060" stroke-width="1" stroke-dasharray="4,4"/>`;}
    function SHELL(title,sub,body){return `<svg viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg"><rect width="720" height="460" rx="14" fill="${BG}" stroke="#1a3060" stroke-width="1.5"/><text x="22" y="36" fill="${OC}" font-size="18" font-weight="700" font-family="monospace" letter-spacing="2">${title}</text><text x="22" y="56" fill="${DC}" font-size="11" font-family="monospace" letter-spacing="1">${sub}</text><line x1="22" y1="63" x2="698" y2="63" stroke="#1a3060" stroke-width="1"/>${body}</svg>`;}

    switch(componentKey){

    // ── NOT (INVERTER) ─────────────────────────────────────────
    // 1 PMOS pull-up + 1 NMOS pull-down
    case 'NOT':{
      const cx=340, vY=82, gY=418, pY=185, nY=318, mid=251, gx=118;
      return SHELL('NOT GATE','CMOS INVERTER  ·  1 PMOS (gold) + 1 NMOS (green)',`
        ${VDD(cx,vY)}
        ${T(cx,pY,'P',gx,vY,mid,'P1')}
        ${DOT(cx,mid,OC)}${L(cx,mid,554,mid,OC,2.5)}${OUTNODE(554,mid)}
        ${T(cx,nY,'N',gx,mid,gY,'N1')}
        ${GND(cx,gY)}
        ${IN(56,mid,'A')}
        ${L(73,mid,gx,mid,AC,2.5)}
        ${L(gx,pY,gx,nY,AC,1.5)}
        ${DOT(gx,mid,AC)}
        <text x="380" y="${pY-20}" fill="${PC}" font-size="10" font-family="monospace">source → VDD</text>
        <text x="380" y="${nY+36}" fill="${NC}" font-size="10" font-family="monospace">source → GND</text>
        ${NOTE('A=0: PMOS ON (gate low), NMOS OFF → OUT pulled to VDD=1   |   A=1: NMOS ON, PMOS OFF → OUT to GND=0')}
      `);}

    // ── NAND ──────────────────────────────────────────────────
    // 2 PMOS in parallel (pull-up) + 2 NMOS in series (pull-down)
    case 'NAND':{
      const p1=233, p2=448, nx=340, pY=178, oY=256, n1Y=318, n2Y=400, gY=446;
      const gxA=98, gxB=620;
      return SHELL('NAND GATE','2 PMOS parallel pull-up  +  2 NMOS series pull-down',`
        ${VDDBAR(188,494,82)}
        ${T(p1,pY,'P',gxA,82,oY,'P1')}
        ${T(p2,pY,'P',gxB,82,oY,'P2')}
        ${L(p1,oY,p2,oY,WC,2)}
        ${DOT(nx,oY,OC)}${L(nx,oY,566,oY,OC,2.5)}${OUTNODE(566,oY)}
        ${T(nx,n1Y,'N',gxA,oY,n2Y-12,'N1')}
        ${T(nx,n2Y,'N',gxB,n1Y+12,gY,'N2')}
        ${GND(nx,gY)}
        ${IN(50,224,'A')}
        ${L(67,224,gxA,224,AC,2.5)}${L(gxA,pY,gxA,n1Y,AC,1.5)}${DOT(gxA,224,AC)}
        ${IN(662,342,'B')}
        ${L(645,342,gxB,342,AC,2.5)}${L(gxB,pY,gxB,n2Y,AC,1.5)}${DOT(gxB,342,AC)}
        <text x="${p1-18}" y="${pY-22}" fill="${PC}" font-size="10" font-family="monospace">‖ parallel</text>
        <text x="${nx+18}" y="${(n1Y+n2Y)/2}" fill="${NC}" font-size="10" font-family="monospace">series ≡</text>
        ${NOTE('OUT=0 only when A=1 AND B=1 (both series NMOS conduct). Otherwise OUT=1.')}
      `);}

    // ── NOR ───────────────────────────────────────────────────
    // 2 PMOS in series (pull-up) + 2 NMOS in parallel (pull-down)
    case 'NOR':{
      const nx1=248, nx2=450, px=350, vY=82, p1Y=168, p2Y=262, oY=344, nY=394, gY=446;
      const gxA=98, gxB=620;
      return SHELL('NOR GATE','2 PMOS series pull-up  +  2 NMOS parallel pull-down',`
        ${VDD(px,vY)}
        ${T(px,p1Y,'P',gxA,vY,p2Y-12,'P1')}
        ${T(px,p2Y,'P',gxB,p1Y+12,oY,'P2')}
        ${DOT(px,oY,OC)}${L(px,oY,576,oY,OC,2.5)}${OUTNODE(576,oY)}
        ${L(nx1,oY,nx2,oY,WC,2)}
        ${DOT(nx1,oY,WC)}${DOT(nx2,oY,WC)}
        ${T(nx1,nY,'N',gxA,oY,gY,'N1')}
        ${T(nx2,nY,'N',gxB,oY,gY,'N2')}
        ${GND(nx1,gY)}${GND(nx2,gY)}
        ${IN(50,216,'A')}
        ${L(67,216,gxA,216,AC,2.5)}${L(gxA,p1Y,gxA,nY,AC,1.5)}${DOT(gxA,216,AC)}
        ${IN(662,330,'B')}
        ${L(645,330,gxB,330,AC,2.5)}${L(gxB,p2Y,gxB,nY,AC,1.5)}${DOT(gxB,330,AC)}
        <text x="${px+18}" y="${(p1Y+p2Y)/2}" fill="${PC}" font-size="10" font-family="monospace">series ≡</text>
        <text x="${nx1-40}" y="${nY-22}" fill="${NC}" font-size="10" font-family="monospace">‖ parallel</text>
        ${NOTE('OUT=1 only when A=0 AND B=0 (both series PMOS conduct). Otherwise OUT=0.')}
      `);}

    // ── AND ───────────────────────────────────────────────────
    // NAND(3T) stage + NOT(2T) stage = 3 PMOS + 3 NMOS
    case 'AND':{
      const p1=158, p2=294, nnx=226, vY=82, pYn=166, oYn=232, n1=294, n2=372, gY=428;
      const ix=528, pYi=180, nYi=316, midI=248;
      const gxA=74, gxB=576, gxI=398;
      return SHELL('AND GATE','NAND stage + Inverter  ·  3 PMOS (gold) + 3 NMOS (green)',`
        ${VDDBAR(114,322,vY)}${VDD(ix,vY)}
        ${T(p1,pYn,'P',gxA,vY,oYn,'P1')}
        ${T(p2,pYn,'P',gxB,vY,oYn,'P2')}
        ${L(p1,oYn,p2,oYn,WC,2)}${DOT(nnx,oYn,WC)}
        ${T(nnx,n1,'N',gxA,oYn,n2-12,'N1')}
        ${T(nnx,n2,'N',gxB,n1+12,gY,'N2')}
        ${GND(nnx,gY)}
        ${L(nnx,oYn,gxI,oYn,WC,1.5)}
        ${L(gxI,pYi,gxI,nYi,WC,1.5)}${DOT(gxI,oYn,WC)}
        ${T(ix,pYi,'P',gxI,vY,midI,'P3')}
        ${DOT(ix,midI,OC)}${L(ix,midI,606,midI,OC,2.5)}${OUTNODE(606,midI)}
        ${T(ix,nYi,'N',gxI,midI,gY,'N3')}
        ${GND(ix,gY)}
        ${IN(36,197,'A')}
        ${L(53,197,gxA,197,AC,2.5)}${L(gxA,pYn,gxA,n1,AC,1.5)}${DOT(gxA,197,AC)}
        ${IN(634,294,'B')}
        ${L(617,294,gxB,294,AC,2.5)}${L(gxB,pYn,gxB,n2,AC,1.5)}${DOT(gxB,294,AC)}
        ${DIVIDER(356)}
        <text x="136" y="${oYn-8}" fill="${DC}" font-size="10" font-family="monospace">NAND(A,B)</text>
        <text x="362" y="${oYn-8}" fill="${DC}" font-size="10" font-family="monospace">NOT →</text>
        ${NOTE('AND = NAND followed by NOT. Left: 2P‖ + 2N≡  |  Right: 1P + 1N inverter.')}
      `);}

    // ── OR ────────────────────────────────────────────────────
    // NOR(3T) stage + NOT(2T) stage = 3 PMOS + 3 NMOS
    case 'OR':{
      const nx1=148, nx2=284, norX=216, vY=82, p1Y=164, p2Y=258, oYnor=334, nY=386, gY=428;
      const ix=528, pYi=180, nYi=316, midI=248;
      const gxA=74, gxB=576, gxI=398;
      return SHELL('OR GATE','NOR stage + Inverter  ·  3 PMOS (gold) + 3 NMOS (green)',`
        ${VDD(norX,vY)}${VDD(ix,vY)}
        ${T(norX,p1Y,'P',gxA,vY,p2Y-12,'P1')}
        ${T(norX,p2Y,'P',gxB,p1Y+12,oYnor,'P2')}
        ${DOT(norX,oYnor,WC)}
        ${L(nx1,oYnor,nx2,oYnor,WC,2)}
        ${DOT(nx1,oYnor,WC)}${DOT(nx2,oYnor,WC)}
        ${T(nx1,nY,'N',gxA,oYnor,gY,'N1')}
        ${T(nx2,nY,'N',gxB,oYnor,gY,'N2')}
        ${GND(nx1,gY)}${GND(nx2,gY)}
        ${L(norX,oYnor,gxI,oYnor,WC,1.5)}
        ${L(gxI,pYi,gxI,nYi,WC,1.5)}${DOT(gxI,oYnor,WC)}
        ${T(ix,pYi,'P',gxI,vY,midI,'P3')}
        ${DOT(ix,midI,OC)}${L(ix,midI,606,midI,OC,2.5)}${OUTNODE(606,midI)}
        ${T(ix,nYi,'N',gxI,midI,gY,'N3')}
        ${GND(ix,gY)}
        ${IN(36,197,'A')}
        ${L(53,197,gxA,197,AC,2.5)}${L(gxA,p1Y,gxA,nY,AC,1.5)}${DOT(gxA,197,AC)}
        ${IN(634,294,'B')}
        ${L(617,294,gxB,294,AC,2.5)}${L(gxB,p2Y,gxB,nY,AC,1.5)}${DOT(gxB,294,AC)}
        ${DIVIDER(356)}
        <text x="128" y="${oYnor-8}" fill="${DC}" font-size="10" font-family="monospace">NOR(A,B)</text>
        <text x="362" y="${oYnor-8}" fill="${DC}" font-size="10" font-family="monospace">NOT →</text>
        ${NOTE('OR = NOR followed by NOT. Left: 2P≡ + 2N‖  |  Right: 1P + 1N inverter.')}
      `);}

    // ── XOR ───────────────────────────────────────────────────
    // Gate-level XOR: NOT(A)=Ā, AND1(A,B̄)=AB̄, AND2(Ā,B)=ĀB, OR(AB̄, ĀB)=A⊕B
    case 'XOR':{
      // SVG gate helper — draws a standard gate shape inline
      function GSVG(x,y,type,inputs,outLbl){
        const W=78,H=52,cy=y+H/2;
        let body='';
        if(type==='NOT'){
          body=`<polygon points="${x+8},${y+4} ${x+8},${y+H-4} ${x+W-18},${cy}" fill="rgba(0,212,255,0.09)" stroke="${OC}" stroke-width="2" stroke-linejoin="round"/>
                <circle cx="${x+W-6}" cy="${cy}" r="7" fill="${BG}" stroke="${OC}" stroke-width="2"/>`;
          return body+`<line x1="${x}" y1="${cy}" x2="${x+8}" y2="${cy}" stroke="${OC}" stroke-width="1.8"/>
                       <line x1="${x+W+1}" y1="${cy}" x2="${x+W+18}" y2="${cy}" stroke="${OC}" stroke-width="1.8"/>
                       <text x="${x+W+20}" y="${cy+4}" fill="${TC}" font-size="11" font-family="monospace">${outLbl}</text>
                       <text x="${x-14}" y="${cy+4}" fill="${AC}" font-size="11" font-family="monospace">${inputs[0]}</text>`;
        }
        if(type==='AND'){
          body=`<path d="M${x+8},${y+5} L${x+8},${y+H-5} Q${x+W-8},${y+H-5} ${x+W-8},${cy} Q${x+W-8},${y+5} ${x+8},${y+5} Z" fill="rgba(0,212,255,0.09)" stroke="${OC}" stroke-width="2" stroke-linejoin="round"/>`;
          return body+`<line x1="${x}" y1="${y+16}" x2="${x+8}" y2="${y+16}" stroke="${OC}" stroke-width="1.8"/>
                       <line x1="${x}" y1="${y+H-16}" x2="${x+8}" y2="${y+H-16}" stroke="${OC}" stroke-width="1.8"/>
                       <line x1="${x+W-8}" y1="${cy}" x2="${x+W+18}" y2="${cy}" stroke="${OC}" stroke-width="1.8"/>
                       <text x="${x-14}" y="${y+20}" fill="${AC}" font-size="11" font-family="monospace">${inputs[0]}</text>
                       <text x="${x-14}" y="${y+H-12}" fill="${AC}" font-size="11" font-family="monospace">${inputs[1]}</text>
                       <text x="${x+W+20}" y="${cy+4}" fill="${TC}" font-size="11" font-family="monospace">${outLbl}</text>`;
        }
        if(type==='OR'){
          body=`<path d="M${x+8},${y+5} Q${x+28},${y+5} ${x+W-8},${cy} Q${x+28},${y+H-5} ${x+8},${y+H-5} Q${x+20},${cy} ${x+8},${y+5} Z" fill="rgba(0,212,255,0.09)" stroke="${OC}" stroke-width="2" stroke-linejoin="round"/>`;
          return body+`<line x1="${x}" y1="${y+16}" x2="${x+13}" y2="${y+16}" stroke="${OC}" stroke-width="1.8"/>
                       <line x1="${x}" y1="${y+H-16}" x2="${x+13}" y2="${y+H-16}" stroke="${OC}" stroke-width="1.8"/>
                       <line x1="${x+W-8}" y1="${cy}" x2="${x+W+18}" y2="${cy}" stroke="${OC}" stroke-width="1.8"/>
                       <text x="${x-14}" y="${y+20}" fill="${AC}" font-size="11" font-family="monospace">${inputs[0]}</text>
                       <text x="${x-14}" y="${y+H-12}" fill="${AC}" font-size="11" font-family="monospace">${inputs[1]}</text>
                       <text x="${x+W+20}" y="${cy+4}" fill="${TC}" font-size="11" font-family="monospace">${outLbl}</text>`;
        }
        return '';
      }

      // Layout: NOT at left, two ANDs in middle, OR at right
      // NOT(A): col 100, row 200  → Ā
      // AND1(A, B): col 280, row 130  → A·B̄ (note: A AND !B actually — see formula below)
      // AND2(Ā, B): col 280, row 310  → Ā·B
      // OR(AND1, AND2): col 490, row 220 → A⊕B
      return SHELL('XOR GATE','Gate-Level XOR  ·  NOT + AND + AND + OR',`
        ${IN(42,220,'A')}
        ${IN(42,340,'B')}
        ${L(59,220,90,220,AC,2)}
        ${L(59,340,480,340,AC,2)}
        ${DOT(90,220,AC)}

        ${GSVG(90,194,'NOT',['A'],'Ā')}
        ${L(90,220,90,194,AC,1.5)}

        ${DOT(192,220,WC)}${L(192,220,264,160,WC,1.8)}
        ${DOT(192,220,WC)}${L(192,220,264,300,WC,1.8)}
        <text x="196" y="216" fill="${NC}" font-size="12" font-family="monospace" font-weight="bold">Ā</text>
        ${L(168,220,264,220,NC,1.8)}

        ${GSVG(264,130,'AND',['A','Ā'],'A·Ā')}
        ${GSVG(264,270,'AND',['Ā','B'],'Ā·B')}

        ${L(360,156,460,240,OC,1.8)}
        ${L(360,296,460,260,OC,1.8)}

        ${GSVG(460,216,'OR',['',''],'OUT')}
        ${L(556,242,614,242,OC,2.5)}${OUTNODE(614,242)}

        <text x="22" y="444" fill="${DC}" font-size="11" font-family="monospace">XOR = (A·B̄) + (Ā·B)  — output is 1 when exactly one input is 1</text>
      `);}

    // ── FLIP-FLOPS (structural block diagrams) ────────────────
    case 'D':
      return SHELL('D FLIP-FLOP','8 NAND gates + 2 NOT gates  ·  Master-Slave',`
        <!-- ── MASTER LATCH (left) ── -->
        <rect x="56" y="78" width="240" height="210" rx="10" fill="none" stroke="${NC}" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.5"/>
        <text x="176" y="96" text-anchor="middle" fill="${NC}" font-size="11" font-family="monospace" font-weight="bold">MASTER</text>

        <!-- ── SLAVE LATCH (right) ── -->
        <rect x="390" y="78" width="240" height="210" rx="10" fill="none" stroke="${PC}" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.5"/>
        <text x="510" y="96" text-anchor="middle" fill="${PC}" font-size="11" font-family="monospace" font-weight="bold">SLAVE</text>

        <!-- Gate blocks - Master -->
        ${BLK(80,110,70,42,'NAND','',NC)}
        ${BLK(80,210,70,42,'NAND','',NC)}
        ${BLK(210,110,70,42,'NAND','',NC)}
        ${BLK(210,210,70,42,'NAND','',NC)}

        <!-- Gate blocks - Slave -->
        ${BLK(410,110,70,42,'NAND','',PC)}
        ${BLK(410,210,70,42,'NAND','',PC)}
        ${BLK(540,110,70,42,'NAND','',PC)}
        ${BLK(540,210,70,42,'NAND','',PC)}

        <!-- D input -->
        ${IN(20,131,'D')}
        ${L(37,131,80,131,AC,2.5)}
        <!-- D branch down to NOT -->
        ${DOT(58,131,AC)}
        ${BLK(58,163,42,28,'NOT','',AC)}
        <!-- D̄ → NAND2 -->
        ${L(58,191,58,221,AC,1.5)}${L(58,221,80,221,AC,1.5)}
        <text x="62" y="218" fill="${DC}" font-size="8" font-family="monospace">D̄</text>

        <!-- CLK input -->
        ${IN(20,370,'CLK')}
        <!-- CLK → up to NAND1 + NAND2 -->
        ${L(37,370,50,370,AC,2)}
        ${L(50,370,50,241,AC,1.5)}${L(50,241,80,241,AC,1.5)}
        ${DOT(50,320,AC)}
        ${L(50,320,50,141,AC,1.5)}${L(50,141,80,141,AC,1.5)}

        <!-- CLK → NOT → CLK̄ -->
        ${L(50,370,330,370,AC,1.5)}
        ${BLK(330,354,50,32,'NOT','',AC)}
        ${L(380,370,398,370,AC,1.5)}
        <text x="384" y="365" fill="${DC}" font-size="8" font-family="monospace">CLK̄</text>
        <!-- CLK̄ → up to NAND5 + NAND6 -->
        ${L(398,370,398,241,AC,1.5)}${L(398,241,410,241,AC,1.5)}
        ${DOT(398,320,AC)}
        ${L(398,320,398,141,AC,1.5)}${L(398,141,410,141,AC,1.5)}

        <!-- NAND1 → NAND3 -->
        ${L(150,131,210,131,OC,1.5)}
        <!-- NAND2 → NAND4 -->
        ${L(150,231,210,231,OC,1.5)}

        <!-- Master cross-coupling: NAND3 ⇄ NAND4 -->
        ${L(280,131,296,131,OC,1.5)}${DOT(296,131,OC)}
        ${L(296,131,296,156,OC,1.5)}${L(296,156,195,156,OC,1.5)}${L(195,156,195,231,OC,1.5)}${L(195,231,210,231,OC,1.5)}
        ${L(280,231,296,231,WC,1.5)}${DOT(296,231,WC)}
        ${L(296,231,296,188,WC,1.5)}${L(296,188,195,188,WC,1.5)}${L(195,188,195,141,WC,1.5)}${L(195,141,210,141,WC,1.5)}

        <!-- X, X̄ labels + wires to slave -->
        <text x="310" y="127" fill="${OC}" font-size="10" font-family="monospace" font-weight="bold">X</text>
        <text x="310" y="243" fill="${WC}" font-size="10" font-family="monospace" font-weight="bold">X̄</text>
        ${L(296,131,410,121,OC,1.8)}
        ${L(296,231,410,221,WC,1.8)}

        <!-- Slave cross-coupling: NAND7 ⇄ NAND8 -->
        ${L(610,131,626,131,OC,1.5)}${DOT(626,131,OC)}
        ${L(626,131,626,156,OC,1.5)}${L(626,156,525,156,OC,1.5)}${L(525,156,525,231,OC,1.5)}${L(525,231,540,231,OC,1.5)}
        ${L(610,231,626,231,WC,1.5)}${DOT(626,231,WC)}
        ${L(626,231,626,188,WC,1.5)}${L(626,188,525,188,WC,1.5)}${L(525,188,525,141,WC,1.5)}${L(525,141,540,141,WC,1.5)}

        <!-- Q output -->
        ${L(626,131,680,131,OC,2.5)}<circle cx="680" cy="131" r="7" fill="${OC}"/>
        <text x="696" y="136" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        <!-- Q̄ output -->
        ${L(626,231,680,231,WC,2.5)}<circle cx="680" cy="231" r="7" fill="${WC}"/>
        <text x="696" y="236" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>

        ${NOTE('CLK=1: Master follows D, Slave holds. CLK↓: Master locks, Slave captures X → Q. Edge-triggered.')}
      `);

    case 'T':
      return SHELL('T FLIP-FLOP','D-FF with XOR feedback  ·  ~22 transistors total',`
        <!-- XOR gate -->
        ${BLK(160,100,160,110,'XOR','T ⊕ Q_prev',WC)}
        <!-- D Flip-Flop -->
        ${BLK(420,90,200,140,'D  FF','captures on CLK ↑',NC)}

        <!-- T input → XOR -->
        ${IN(50,135,'T')}${L(67,135,160,135,AC,2.5)}

        <!-- XOR out → D FF in -->
        ${L(320,155,420,155,OC,2.5)}
        <text x="350" y="148" fill="${DC}" font-size="10" font-family="monospace">D</text>

        <!-- Q output -->
        ${L(620,135,670,135,OC,2.5)}<circle cx="670" cy="135" r="7" fill="${OC}"/>
        <text x="686" y="140" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        <!-- Q̄ output -->
        ${L(620,195,670,195,WC,2.5)}<circle cx="670" cy="195" r="7" fill="${WC}"/>
        <text x="686" y="200" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>

        <!-- CLK → D FF -->
        ${IN(520,370,'CLK')}
        ${L(520,353,520,280,AC,2)}${L(520,280,520,230,AC,2.5)}
        <polygon points="514,234 526,234 520,224" fill="${AC}"/>
        <text x="530" y="270" fill="${DC}" font-size="10" font-family="monospace">CLK</text>

        <!-- Feedback: Q → XOR -->
        ${DOT(670,135,OC)}
        <path d="M 670,135 L 700,135 L 700,390 L 130,390 L 130,185 L 160,185"
              fill="none" stroke="${OC}" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="320" y="404" fill="${OC}" font-size="10" font-family="monospace" font-weight="bold">Q feedback → XOR</text>

        ${NOTE('T=0 → XOR(0,Q)=Q → D=Q → Q holds. T=1 → XOR(1,Q)=Q̄ → D=Q̄ → Q toggles.')}
      `);

    case 'SR':
      return SHELL('SR FLIP-FLOP','Cross-coupled NAND latch  ·  8 transistors',`
        <!-- NAND 1: S + Q̄ feedback → Q -->
        ${BLK(250,100,180,100,'NAND 1','S + Q̄ → Q',PC)}
        <!-- NAND 2: R + Q feedback → Q̄ -->
        ${BLK(250,290,180,100,'NAND 2','R + Q → Q̄',NC)}

        <!-- S input → NAND1 -->
        ${IN(50,130,'S')}${L(67,130,250,130,AC,2.5)}
        <!-- R input → NAND2 -->
        ${IN(50,340,'R')}${L(67,340,250,340,AC,2.5)}

        <!-- Q output -->
        ${L(430,150,590,150,OC,2.5)}<circle cx="590" cy="150" r="7" fill="${OC}"/>
        <text x="606" y="155" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        <!-- Q̄ output -->
        ${L(430,340,590,340,WC,2.5)}<circle cx="590" cy="340" r="7" fill="${WC}"/>
        <text x="606" y="345" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>

        <!-- Feedback: Q → NAND2 (bottom) -->
        ${DOT(540,150,OC)}
        <path d="M 540,150 L 540,410 L 220,410 L 220,360 L 250,360"
              fill="none" stroke="${OC}" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="320" y="424" fill="${OC}" font-size="10" font-family="monospace" font-weight="bold">Q feedback → NAND2</text>

        <!-- Feedback: Q̄ → NAND1 (top) -->
        ${DOT(540,340,WC)}
        <path d="M 540,340 L 560,340 L 560,78 L 220,78 L 220,170 L 250,170"
              fill="none" stroke="${WC}" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="300" y="74" fill="${WC}" font-size="10" font-family="monospace" font-weight="bold">Q̄ feedback → NAND1</text>

        ${NOTE('S=1,R=0 → Q=1. S=0,R=1 → Q=0. S=R=1 → Q=1 (S priority). Latches state via cross-coupling.')}
      `);

    case 'JK':
      return SHELL('JK FLIP-FLOP','AND gates + SR latch + output feedback  ·  ~24 transistors',`
        <!-- AND 1: J · Q̄ → S -->
        ${BLK(140,90,160,80,'AND 1','J · Q̄ → S',PC)}
        <!-- AND 2: K · Q → R -->
        ${BLK(140,310,160,80,'AND 2','K · Q → R',NC)}
        <!-- SR LATCH -->
        ${BLK(410,140,200,200,'SR LATCH','NAND-based',WC)}

        <!-- J input → AND1 -->
        ${IN(42,110,'J')}${L(59,110,140,110,AC,2.5)}
        <!-- K input → AND2 -->
        ${IN(42,350,'K')}${L(59,350,140,350,AC,2.5)}
        <!-- CLK → SR LATCH -->
        ${IN(410,410,'CLK')}${L(410,393,410,340,AC,2.5)}
        <polygon points="404,344 416,344 410,334" fill="${AC}"/>

        <!-- AND1 out → SR LATCH S input -->
        ${L(300,130,410,190,OC,2.5)}
        <text x="330" y="148" fill="${DC}" font-size="10" font-family="monospace">S</text>
        <!-- AND2 out → SR LATCH R input -->
        ${L(300,350,410,290,WC,2.5)}
        <text x="330" y="338" fill="${DC}" font-size="10" font-family="monospace">R</text>

        <!-- Q output -->
        ${L(610,200,670,200,OC,2.5)}<circle cx="670" cy="200" r="7" fill="${OC}"/>
        <text x="686" y="205" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        <!-- Q̄ output -->
        ${L(610,280,670,280,WC,2.5)}<circle cx="670" cy="280" r="7" fill="${WC}"/>
        <text x="686" y="285" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>

        <!-- Feedback: Q̄ → AND1 (top) -->
        ${DOT(670,280,WC)}
        <path d="M 670,280 L 700,280 L 700,78 L 120,78 L 120,150 L 140,150"
              fill="none" stroke="${WC}" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="380" y="74" fill="${WC}" font-size="10" font-family="monospace" font-weight="bold">Q̄ feedback</text>

        <!-- Feedback: Q → AND2 (bottom) -->
        ${DOT(670,200,OC)}
        <path d="M 670,200 L 710,200 L 710,402 L 120,402 L 120,330 L 140,330"
              fill="none" stroke="${OC}" stroke-width="2" stroke-dasharray="6,3"/>
        <text x="380" y="416" fill="${OC}" font-size="10" font-family="monospace" font-weight="bold">Q feedback</text>

        ${NOTE('J=K=1 → toggle. J=1,K=0 → set Q=1. J=0,K=1 → reset Q=0. J=K=0 → hold.')}
      `);

    default:
      return SHELL('UNKNOWN','No diagram available','');
    }
  }

  // FF truth table HTML for the info popup
  const FF_TRUTH_TABLES = {
    D: `<div class="ff-popup-truth">
      <h4>Truth Table — D Flip-Flop</h4>
      <p class="ff-popup-desc">D (Data) Flip-Flop captures the value at input D on the rising clock edge. Q always equals D after a clock pulse.</p>
      <table class="ff-popup-table"><thead><tr><th>D</th><th>CLK</th><th>Q<sub>next</sub></th><th>Q̄<sub>next</sub></th></tr></thead>
      <tbody>
        <tr><td>0</td><td>↑</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>↑</td><td>1</td><td>0</td></tr>
        <tr><td>X</td><td>—</td><td>Q (hold)</td><td>Q̄ (hold)</td></tr>
      </tbody></table>
    </div>`,
    T: `<div class="ff-popup-truth">
      <h4>Truth Table — T Flip-Flop</h4>
      <p class="ff-popup-desc">T (Toggle) Flip-Flop toggles Q on every rising clock edge when T=1. When T=0, Q remains unchanged.</p>
      <table class="ff-popup-table"><thead><tr><th>T</th><th>CLK</th><th>Q<sub>next</sub></th></tr></thead>
      <tbody>
        <tr><td>0</td><td>↑</td><td>Q (hold)</td></tr>
        <tr><td>1</td><td>↑</td><td>Q̄ (toggle)</td></tr>
      </tbody></table>
    </div>`,
    SR: `<div class="ff-popup-truth">
      <h4>Truth Table — SR Flip-Flop</h4>
      <p class="ff-popup-desc">SR (Set/Reset) Flip-Flop allows setting (SET) or resetting (RESET) Q independently. S=R=1 is a special case (here SET takes priority).</p>
      <table class="ff-popup-table"><thead><tr><th>S</th><th>R</th><th>CLK</th><th>Q<sub>next</sub></th></tr></thead>
      <tbody>
        <tr><td>0</td><td>0</td><td>↑</td><td>Q (hold)</td></tr>
        <tr><td>0</td><td>1</td><td>↑</td><td>0 (reset)</td></tr>
        <tr><td>1</td><td>0</td><td>↑</td><td>1 (set)</td></tr>
        <tr><td>1</td><td>1</td><td>↑</td><td>1 (S priority)</td></tr>
      </tbody></table>
    </div>`,
    JK: `<div class="ff-popup-truth">
      <h4>Truth Table — JK Flip-Flop</h4>
      <p class="ff-popup-desc">JK Flip-Flop is the most versatile. J=Set, K=Reset, J=K=1 is Toggle mode (Q inverts). It has no forbidden state like SR.</p>
      <table class="ff-popup-table"><thead><tr><th>J</th><th>K</th><th>CLK</th><th>Q<sub>next</sub></th></tr></thead>
      <tbody>
        <tr><td>0</td><td>0</td><td>↑</td><td>Q (hold)</td></tr>
        <tr><td>0</td><td>1</td><td>↑</td><td>0 (reset)</td></tr>
        <tr><td>1</td><td>0</td><td>↑</td><td>1 (set)</td></tr>
        <tr><td>1</td><td>1</td><td>↑</td><td>Q̄ (toggle)</td></tr>
      </tbody></table>
    </div>`,
  };

  function openComponentDiagram(componentKey, title) {
    diagramTitle.textContent = title;
    const isFF = ['D','T','SR','JK'].includes(componentKey);
    diagramSubtitle.textContent = isFF
      ? 'Truth table and gate-level structure'
      : 'Simplified transistor schematic';
    const truthHtml = isFF ? (FF_TRUTH_TABLES[componentKey] || '') : '';
    const structureLabel = isFF
      ? '<div class="ff-popup-structure-label">Gate-level structure:</div>'
      : '';
    diagramContent.innerHTML = truthHtml + structureLabel + renderComponentDiagram(componentKey);
    diagramOverlay.classList.remove('hidden');
    diagramOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeComponentDiagram() {
    diagramOverlay.classList.add('hidden');
    diagramOverlay.setAttribute('aria-hidden', 'true');
  }

  function setupComponentInfoButtons() {
    const titleMap = new Map([
      ['AND', { key: 'AND', label: 'AND' }],
      ['OR', { key: 'OR', label: 'OR' }],
      ['XOR', { key: 'XOR', label: 'XOR' }],
      ['NAND', { key: 'NAND', label: 'NAND' }],
      ['NOR', { key: 'NOR', label: 'NOR' }],
      ['NOT', { key: 'NOT', label: 'NOT' }],
      ['D', { key: 'D', label: 'D FLIP-FLOP' }],
      ['T', { key: 'T', label: 'T FLIP-FLOP' }],
      ['SR', { key: 'SR', label: 'SR FLIP-FLOP' }],
      ['JK', { key: 'JK', label: 'JK FLIP-FLOP' }],
    ]);

    document.querySelectorAll('.truth-card h3').forEach((h3) => {
      if (h3.querySelector('.component-info-btn')) return;

      const componentKey = h3.dataset.component;
      const rawTitle = h3.textContent.trim().replace(/\s+/g, ' ');
      const info = componentKey ? titleMap.get(componentKey) : titleMap.get(rawTitle);
      if (!info) return;

      const titleSpan = h3.querySelector('.component-title') || document.createElement('span');
      titleSpan.className = 'component-title';
      titleSpan.textContent = info.label;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'component-info-btn';
      btn.textContent = 'i';
      btn.setAttribute('aria-label', `Show ${info.label} structure diagram`);
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        openComponentDiagram(info.key, info.label);
      });

      if (!h3.querySelector('.component-title')) {
        h3.textContent = '';
        h3.append(titleSpan, btn);
      } else {
        h3.append(btn);
      }
    });
  }

  // ── Animation loop (for dashed border pulse) ─────────────
  let _rafId = null;
  let _lastSolved = false;
  let _winTimeout = null;
  let _menuVisible = false;
  let _levelStartedAt = null;
  let _elapsedMs = 0;
  let _levelFinished = false;
  let _timeRafId = null;
  let _currentLevelId = null;

  function loadCompletedLevelIds() {
    try {
      const raw = localStorage.getItem(COMPLETED_LEVELS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_error) {
      return [];
    }
  }

  function saveCompletedLevelIds() {
    try {
      localStorage.setItem(COMPLETED_LEVELS_KEY, JSON.stringify(Array.from(completedLevelIds)));
    } catch (_error) {
      // Ignore storage failures.
    }
  }

  function loadBestTimes() {
    try {
      const raw = localStorage.getItem(BEST_TIMES_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (_error) {
      return {};
    }
  }

  function saveBestTimes() {
    try {
      localStorage.setItem(BEST_TIMES_KEY, JSON.stringify(bestTimes));
    } catch (_error) {
      // Ignore storage failures.
    }
  }

  function formatTime(ms) {
    if (ms === null || ms === undefined || Number.isNaN(ms)) return '--:--.--';
    const totalCentiseconds = Math.max(0, Math.floor(ms / 10));
    const minutes = Math.floor(totalCentiseconds / 6000);
    const seconds = Math.floor((totalCentiseconds % 6000) / 100);
    const centiseconds = totalCentiseconds % 100;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
  }

  function getBestTime(levelId) {
    const value = bestTimes[String(levelId)];
    return typeof value === 'number' ? value : null;
  }

  function setBestTime(levelId, ms) {
    const currentBest = getBestTime(levelId);
    if (currentBest === null || ms < currentBest) {
      bestTimes[String(levelId)] = ms;
      saveBestTimes();
    }
  }

  function updateTimerDisplay() {
    const levelId = _currentLevelId;
    if (levelId === null || _levelStartedAt === null) return;

    const elapsed = _levelFinished ? _elapsedMs : (performance.now() - _levelStartedAt);
    const best = getBestTime(levelId);

    levelTimeEl.textContent = `TIME ${formatTime(elapsed)}`;
    levelBestEl.textContent = `BEST ${best !== null ? formatTime(best) : '--:--.--'}`;

    const levelIndex = State.currentLevelIndex;
    if (LEVELS[levelIndex]) {
      const menuCard = levelGrid.querySelector(`.level-card[data-level-index="${levelIndex}"]`);
      if (menuCard) {
        const existing = menuCard.querySelector('.level-card-best');
        const bestLabel = best !== null ? `Best: ${formatTime(best)}` : 'Best: --:--.--';
        if (existing) {
          existing.textContent = bestLabel;
        }
      }
    }
  }

  function startTimer() {
    _levelStartedAt = performance.now();
    _elapsedMs = 0;
    _levelFinished = false;

    if (_timeRafId) cancelAnimationFrame(_timeRafId);

    const step = () => {
      if (_levelStartedAt === null) return;
      if (!_levelFinished) {
        _elapsedMs = performance.now() - _levelStartedAt;
        updateTimerDisplay();
        _timeRafId = requestAnimationFrame(step);
      }
    };

    updateTimerDisplay();
    _timeRafId = requestAnimationFrame(step);
  }

  function stopTimer() {
    _levelFinished = true;
    if (_timeRafId) cancelAnimationFrame(_timeRafId);
    _timeRafId = null;
    _elapsedMs = Math.max(0, performance.now() - _levelStartedAt);
    updateTimerDisplay();
  }

  function markLevelCompleted(levelId) {
    if (!completedLevelIds.has(levelId)) {
      completedLevelIds.add(levelId);
      saveCompletedLevelIds();
      renderLevelMenu();
    }
  }

  function isLevelCompleted(levelId) {
    return completedLevelIds.has(levelId);
  }

  // Hide solution names until completed
  function getDisplayName(level) {
    if (level.id >= 1 && level.id <= 6 && !isLevelCompleted(level.id)) {
      return `GATE ${level.id}`;
    }
    if (level.id >= 31 && level.id <= 34 && !isLevelCompleted(level.id)) {
      return `FLIP-FLOP ${level.id - 30}`;
    }
    return level.name;
  }

  function setMenuDifficulty(difficulty) {
    currentMenuDifficulty = difficulty;
    renderLevelMenu();
  }

  function renderDifficultyTabs() {
    difficultyTabs.innerHTML = '';

    DIFFICULTY_ORDER.forEach((difficulty) => {
      const count = LEVELS.filter((level) => level.difficulty === difficulty).length;
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `difficulty-tab${currentMenuDifficulty === difficulty ? ' active' : ''}`;
      tab.textContent = `${difficulty} (${count})`;
      tab.setAttribute('aria-pressed', currentMenuDifficulty === difficulty ? 'true' : 'false');
      tab.addEventListener('click', () => setMenuDifficulty(difficulty));
      difficultyTabs.appendChild(tab);
    });
  }

  function renderLevelMenu() {
    levelGrid.innerHTML = '';
    renderDifficultyTabs();

    const filteredLevels = LEVELS
      .map((level, index) => ({ level, index }))
      .filter(({ level }) => (level.difficulty || 'Medium') === currentMenuDifficulty);

    if (filteredLevels.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'difficulty-empty';
      empty.textContent = 'No stages in this category yet.';
      levelGrid.appendChild(empty);
      return;
    }

    filteredLevels.forEach(({ level, index }) => {
      const completed = isLevelCompleted(level.id);
      const best = getBestTime(level.id);
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `level-card${completed ? ' completed' : ''}`;
      card.dataset.levelIndex = String(index);

      card.innerHTML = `
        <div class="level-card-head">
          <div class="level-card-name">LEVEL ${index + 1}</div>
          <div class="level-card-status">${completed ? 'COMPLETED' : 'NEW'}</div>
        </div>
        <div class="level-card-title">${getDisplayName(level)}</div>
        <div class="level-card-best">Best: ${best !== null ? formatTime(best) : '--:--.--'}</div>
      `;

      card.addEventListener('click', () => {
        closeMenuOverlay();
        loadLevel(index);
      });

      levelGrid.appendChild(card);
    });
  }

  function openMenuOverlay() {
    renderLevelMenu();
    menuOverlay.classList.remove('hidden');
    menuOverlay.setAttribute('aria-hidden', 'false');
    _menuVisible = true;
  }

  function closeMenuOverlay() {
    menuOverlay.classList.add('hidden');
    menuOverlay.setAttribute('aria-hidden', 'true');
    _menuVisible = false;
  }

  function openHintOverlay() {
    if (!State.level) return;

    const level = LEVELS[State.currentLevelIndex];
    hintLevelEl.textContent = `LEVEL ${State.currentLevelIndex + 1} — ${getDisplayName(level)}`;
    hintBodyEl.textContent = level.hint || 'Try matching the target by combining the gate outputs and input values carefully.';
    hintOverlay.classList.remove('hidden');
    hintOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeHintOverlay() {
    hintOverlay.classList.add('hidden');
    hintOverlay.setAttribute('aria-hidden', 'true');
  }

  function updateHintButtonState() {
    btnHint.disabled = !State.level;
  }

  // ── Auto-clock state ─────────────────────────────────────
  let _autoClkRunning  = false;
  let _autoClkInterval = null;

  function _updateStepCount() {
    stepCountEl.textContent = `STEP: ${State.stepCount}`;
  }

  function _setClockControlsVisible(visible) {
    clockControls.classList.toggle('hidden', !visible);
  }

  function _setFfPaletteVisible(visible) {
    const ffPalette = document.getElementById('ff-palette');
    const gatePalette = document.getElementById('gate-palette');
    ffPalette.classList.toggle('hidden', !visible);
    gatePalette.classList.toggle('hidden', visible);
    // Filter FF chips based on level's allowedFFs
    if (visible) {
      const level = LEVELS[State.currentLevelIndex];
      const allowed = level && level.allowedFFs;
      document.querySelectorAll('.ff-chip').forEach(chip => {
        if (allowed) {
          chip.classList.toggle('hidden', !allowed.includes(chip.dataset.ff));
        } else {
          chip.classList.remove('hidden');
        }
      });
    }
  }

  function _stopAutoClock() {
    if (_autoClkInterval) { clearInterval(_autoClkInterval); _autoClkInterval = null; }
    _autoClkRunning = false;
    btnAutoClk.classList.remove('running');
    btnAutoClk.textContent = 'AUTO CLK';
  }

  function _startAutoClock() {
    _autoClkRunning = true;
    btnAutoClk.classList.add('running');
    btnAutoClk.textContent = '■ STOP';
    _autoClkInterval = setInterval(() => {
      if (State.solved) { _stopAutoClock(); return; }
      State.stepClock();
      _updateStepCount();
      setTimeout(_checkFail, 200);
    }, 600);
  }

  // ── Fail detection ─────────────────────────────────────────
  const failOverlay   = document.getElementById('fail-overlay');
  const btnFailRetry  = document.getElementById('btn-fail-retry');

  function _checkFail() {
    const levelDef = LEVELS[State.currentLevelIndex];
    if (!levelDef || State.solved) return;
    if (State.stepCount <= 0) return; // no steps taken yet
    // Determine how many steps are required
    const minSteps = levelDef.minSteps || 0;
    const maxStepVals = (levelDef.nodes || []).reduce((max, n) =>
      n.stepValues ? Math.max(max, n.stepValues.length) : max, 0);
    const required = Math.max(minSteps, maxStepVals);
    if (required <= 0) return; // non-sequential or no step limit
    if (State.stepCount >= required && !State.solved) {
      _stopAutoClock();
      failOverlay.classList.remove('hidden');
    }
  }

  function _closeFailOverlay() {
    failOverlay.classList.add('hidden');
    State.resetLevel();
    _stopAutoClock();
    _updateStepCount();
  }

  btnFailRetry.addEventListener('click', _closeFailOverlay);
  failOverlay.addEventListener('click', (e) => {
    if (e.target === failOverlay) _closeFailOverlay();
  });

  btnStep.addEventListener('click', () => {
    if (!State.isSequentialLevel() || State.solved) return;
    State.stepClock();
    _updateStepCount();
    // Check fail after a short delay (let tick evaluate first)
    setTimeout(_checkFail, 200);
  });

  btnAutoClk.addEventListener('click', () => {
    if (_autoClkRunning) _stopAutoClock();
    else _startAutoClock();
  });

  // ── Core: Evaluate + Render ───────────────────────────────
  function tick() {
    const level  = State.level;
    if (!level) return;

    const result = Engine.evaluate(level, State.getFfStates(), State.stepCount);
    State.setEvalResult(result);

    // Lower the clock after evaluation so the rising edge is detected exactly once.
    if (State.clockHigh) {
      State.lowerClock();
    }

    Renderer.render(level, result, State.hoveredNodeId, result.solved, State.stepCount);

    // Record waveform data (always record, render only when visible)
    if (result.nodeValues) {
      Waveform.record(State.stepCount, result.nodeValues);
      if (Waveform.isVisible()) {
        Waveform.render();
      }
    }

    // Trigger win sequence if newly solved
    if (result.solved && !_lastSolved) {
      _lastSolved = true;
      _stopAutoClock();
      _onSolve();
    }
    if (!result.solved) {
      _lastSolved = false;
    }

    // Auto-save design
    if (State.designMode) _scheduleDesignSave();

    _rafId = requestAnimationFrame(tick);
  }

  // Auto-save design mode every 2 seconds
  let _designSaveTimer = null;
  function _scheduleDesignSave() {
    if (_designSaveTimer) return;
    _designSaveTimer = setTimeout(() => {
      _designSaveTimer = null;
      if (State.designMode && State.level) {
        localStorage.setItem('andgame_design', JSON.stringify({
          nodes: State.level.nodes,
          wires: State.level.wires,
        }));
      }
    }, 2000);
  }

  function startLoop() {
    if (_rafId) cancelAnimationFrame(_rafId);
    _rafId = requestAnimationFrame(tick);
  }

  // ── Load a Level ─────────────────────────────────────────
  function loadLevel(index) {
    if (index >= LEVELS.length) {
      _showFinalScreen();
      return;
    }

    const levelDef = LEVELS[index];
    State.setLevelIndex(index);
    State.setLevel(levelDef);
    _currentLevelId = levelDef.id;
    _lastSolved = false;
    _levelFinished = false;
    _elapsedMs = 0;

    // Reset waveform for new level
    Waveform.reset();
    Waveform.setSignals(State.level);
    // Record initial state (step 0)
    const initResult = Engine.evaluate(State.level, State.getFfStates(), 0);
    if (initResult.nodeValues) {
      Waveform.record(0, initResult.nodeValues);
    }

    // Update HUD
    levelName.textContent = `${index + 1}. ${getDisplayName(levelDef)}`;
    updateHintButtonState();
    currentMenuDifficulty = levelDef.difficulty || 'Medium';

    // Show / hide truth table button
    if (levelDef.truthTable) {
      btnTruth.classList.remove('hidden');
      _buildTruthTable(levelDef.truthTable, _getTruthObjective(levelDef));
    } else {
      btnTruth.classList.add('hidden');
    }

    // Show instruction overlay if level has one (timer starts on START click)
    const hasInstruction = !!levelDef.instruction;
    if (hasInstruction) {
      instructionLevelName.textContent = getDisplayName(levelDef);
      // Support HTML in instruction (for special visuals like traffic light)
      if (levelDef.instructionHtml) {
        instructionText.innerHTML = levelDef.instructionHtml;
      } else {
        instructionText.textContent = levelDef.instruction;
      }
      // Full-screen mode for large diagrams (CPU etc.)
      const box = document.getElementById('instruction-box');
      if (levelDef.fullscreenInstruction) {
        box.classList.add('fullscreen-diagram');
      } else {
        box.classList.remove('fullscreen-diagram');
      }
      instructionOverlay.classList.remove('hidden');
    }

    // Design mode: activate for Design difficulty levels
    const isDesignLevel = levelDef.difficulty === 'Design Mode';
    State.designMode = isDesignLevel;
    _setDesignMode(isDesignLevel);

    // Show clock controls and FF palette only for sequential levels (and not design mode)
    _stopAutoClock();
    const isSequential = State.isSequentialLevel();
    if (!isDesignLevel) {
      _setClockControlsVisible(isSequential);
      _updateStepCount();
      _setFfPaletteVisible(isSequential);
      if (isSequential) Input.refreshChips();
    }

    // Hide overlays
    closeMenuOverlay();
    closeHintOverlay();
    winOverlay.classList.add('hidden');
    finalOverlay.classList.add('hidden');

    renderLevelMenu();
    startLoop();

    // Delay timer start until instruction overlay is dismissed
    if (!hasInstruction) {
      startTimer();
    }
  }

  // ── Win Sequence ─────────────────────────────────────────
  function _onSolve() {
    clearTimeout(_winTimeout);
    _winTimeout = setTimeout(() => {
      const idx = State.currentLevelIndex;
      const levelDef = LEVELS[idx];
      stopTimer();
      setBestTime(levelDef.id, _elapsedMs);
      markLevelCompleted(levelDef.id);
      // Update HUD to reveal real name now that level is completed
      levelName.textContent = `${idx + 1}. ${getDisplayName(levelDef)}`;
      winLevelEl.textContent = `LEVEL ${idx + 1} — ${LEVELS[idx].name}`;
      winTimeEl.textContent = `TIME: ${formatTime(_elapsedMs)}`;
      const best = getBestTime(levelDef.id);
      winBestEl.textContent = `BEST: ${formatTime(best)}`;
      // Show solution inside win overlay if available
      if (levelDef.solution) {
        const sol = levelDef.solution;
        if (sol.blockSvg) {
          solutionBlock.innerHTML = sol.blockSvg;
          solutionBlock.style.display = '';
          solutionBlock.style.justifyContent = '';
          solutionBlock.parentElement.querySelector('.solution-diagram-label').style.display = '';
          solutionBlock.parentElement.classList.remove('hidden');
          solutionCircuit.innerHTML = sol.circuitSvg;
          solutionCircuit.parentElement.classList.remove('hidden');
        } else {
          // Single diagram — hide both labels, center the diagram
          solutionBlock.innerHTML = sol.circuitSvg;
          solutionBlock.parentElement.querySelector('.solution-diagram-label').style.display = 'none';
          solutionBlock.style.display = 'flex';
          solutionBlock.style.justifyContent = 'center';
          solutionBlock.parentElement.classList.remove('hidden');
          solutionCircuit.innerHTML = '';
          solutionCircuit.parentElement.classList.add('hidden');
        }
        solutionExplanation.textContent = sol.explanation || '';
        const gateList = sol.gatesUsed ? sol.gatesUsed.join(', ') : '';
        const ffList = sol.ffsUsed ? sol.ffsUsed.join(', ') : '';
        if (gateList && ffList) {
          solutionGates.innerHTML = `Gates: <span>${gateList}</span> | Flip-Flops: <span>${ffList}</span>`;
        } else if (ffList) {
          solutionGates.innerHTML = `Flip-Flops used: <span>${ffList}</span>`;
        } else {
          solutionGates.innerHTML = `Logic gates used: <span>${gateList}</span>`;
        }
        winSolution.classList.remove('hidden');
      } else {
        winSolution.classList.add('hidden');
      }
      winOverlay.classList.remove('hidden');
      renderLevelMenu();
    }, 900);   // short delay so player sees the green flash first
  }

  function _showFinalScreen() {
    if (_rafId) cancelAnimationFrame(_rafId);
    finalOverlay.classList.remove('hidden');
  }

  // ── Truth Table ─────────────────────────────────────────────
  function _buildTruthTable(tt, objectiveText = '') {
    const { inputs, outputs, rows } = tt;
    let html = '<table><thead><tr>';
    inputs.forEach(name => { html += `<th>${name}</th>`; });
    html += '<th class="tt-sep"></th>';
    outputs.forEach(name => { html += `<th>${name}</th>`; });
    html += '</tr></thead><tbody>';
    rows.forEach(([ins, outs]) => {
      html += '<tr>';
      ins.forEach(v => {
        html += `<td class="tt-input tt-val-${v}">${v}</td>`;
      });
      html += '<td class="tt-sep"></td>';
      outs.forEach(v => {
        html += `<td class="tt-output tt-val-${v}">${v}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    if (objectiveText) {
      html += `<p class="truth-objective">${_escapeHtml(objectiveText)}</p>`;
    }
    truthContainer.innerHTML = html;
  }

  btnTruth.addEventListener('click', () => {
    truthOverlay.classList.remove('hidden');
  });

  btnTruthClose.addEventListener('click', () => {
    truthOverlay.classList.add('hidden');
  });

  truthOverlay.addEventListener('click', (e) => {
    if (e.target === truthOverlay) truthOverlay.classList.add('hidden');
  });

  // ── Button Handlers ───────────────────────────────────────
  btnStart.addEventListener('click', () => {
    instructionOverlay.classList.add('hidden');
    startTimer();
  });

  const solutionExplanation = document.getElementById('solution-explanation');

  btnNext.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    State.advanceLevel();
    loadLevel(State.currentLevelIndex);
  });

  btnRestart.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    loadLevel(State.currentLevelIndex);
  });

  document.getElementById('btn-undo').addEventListener('click', () => {
    if (State.undo()) _updateStepCount();
  });

  document.getElementById('btn-clear-gates').addEventListener('click', () => {
    State.resetLevel();
  });

  // ── Share Screenshot ──────────────────────────────────────
  document.getElementById('btn-screenshot').addEventListener('click', () => {
    const levelDef = LEVELS[State.currentLevelIndex];
    if (!levelDef) return;

    // Create a composite image: game canvas + level info banner
    const gameCanvas = document.getElementById('game-canvas');
    const w = gameCanvas.width;
    const h = gameCanvas.height;
    const bannerH = 80;

    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h + bannerH;
    const octx = offscreen.getContext('2d');

    // Dark banner at top
    octx.fillStyle = '#0d1117';
    octx.fillRect(0, 0, w, bannerH);

    // Banner border
    octx.strokeStyle = '#39ff14';
    octx.lineWidth = 2;
    octx.beginPath();
    octx.moveTo(0, bannerH);
    octx.lineTo(w, bannerH);
    octx.stroke();

    // Level name
    octx.fillStyle = '#39ff14';
    octx.font = 'bold 22px JetBrains Mono, monospace';
    octx.textAlign = 'left';
    octx.textBaseline = 'middle';
    octx.fillText(`LEVEL ${State.currentLevelIndex + 1} — ${levelDef.name}`, 20, 28);

    // Time + game title
    octx.fillStyle = '#00d4ff';
    octx.font = '14px JetBrains Mono, monospace';
    octx.fillText(`TIME: ${formatTime(_elapsedMs)}`, 20, 58);

    octx.fillStyle = '#555';
    octx.font = '12px JetBrains Mono, monospace';
    octx.textAlign = 'right';
    octx.fillText('AND_GAME — maozep.github.io/AND_GAME', w - 20, 28);
    octx.fillText('CIRCUIT SOLVED', w - 20, 50);

    // Copy game canvas below banner
    octx.drawImage(gameCanvas, 0, bannerH);

    // Add waveform if it has data
    const waveCanvas = document.getElementById('waveform-canvas');
    if (Waveform && waveCanvas && waveCanvas.width > 0 && waveCanvas.height > 0) {
      // Force render waveform to make sure it's up to date
      const wasVisible = Waveform.isVisible();
      if (!wasVisible) {
        waveformPanel.classList.remove('hidden');
        Waveform.show();
      }
      // Wait a frame for render, then capture
      requestAnimationFrame(() => {
        const wfH = waveCanvas.height / (window.devicePixelRatio || 1);
        const totalH = h + bannerH + wfH;
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = w;
        finalCanvas.height = totalH;
        const fctx = finalCanvas.getContext('2d');
        // Copy existing banner + game
        fctx.drawImage(offscreen, 0, 0);
        // Waveform separator
        fctx.strokeStyle = '#00d4ff';
        fctx.lineWidth = 2;
        fctx.beginPath();
        fctx.moveTo(0, h + bannerH);
        fctx.lineTo(w, h + bannerH);
        fctx.stroke();
        // Copy waveform canvas
        fctx.drawImage(waveCanvas, 0, 0, waveCanvas.width, waveCanvas.height, 0, h + bannerH, w, wfH);
        // Restore waveform visibility
        if (!wasVisible) {
          Waveform.hide();
          waveformPanel.classList.add('hidden');
        }
        // Share/download the final image
        _shareBlob(finalCanvas, levelDef);
      });
      return; // async path
    }

    // No waveform — share directly
    _shareBlob(offscreen, levelDef);
  });

  function _shareBlob(canvas, levelDef) {
    canvas.toBlob(blob => {
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'solve.png', { type: 'image/png' })] })) {
        const file = new File([blob], `AND_GAME_L${levelDef.id}_${levelDef.name.replace(/\s+/g,'_')}.png`, { type: 'image/png' });
        navigator.share({
          title: `AND_GAME — Level ${levelDef.id} Solved!`,
          text: `I solved "${levelDef.name}" in ${formatTime(_elapsedMs)}!`,
          files: [file],
        }).catch(() => {});
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `AND_GAME_L${levelDef.id}_${levelDef.name.replace(/\s+/g,'_')}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  }

  btnWinStages.addEventListener('click', () => {
    winOverlay.classList.add('hidden');
    openMenuOverlay();
  });

  btnPlayAgain.addEventListener('click', () => {
    finalOverlay.classList.add('hidden');
    loadLevel(0);
  });

  btnHint.addEventListener('click', openHintOverlay);

  btnHintClose.addEventListener('click', closeHintOverlay);

  hintOverlay.addEventListener('click', (e) => {
    if (e.target === hintOverlay) closeHintOverlay();
  });


  btnLevels.addEventListener('click', () => {
    openMenuOverlay();
  });

  btnMenuClose.addEventListener('click', () => {
    closeMenuOverlay();
  });

  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) closeMenuOverlay();
  });

  // ── Info Overlay Handlers ───────────────────────────────
  function openInfoOverlay() {
    closeComponentDiagram();
    infoOverlay.classList.remove('hidden');
    infoOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeInfoOverlay() {
    closeComponentDiagram();
    infoOverlay.classList.add('hidden');
    infoOverlay.setAttribute('aria-hidden', 'true');
  }

  btnInfo.addEventListener('click', openInfoOverlay);
  btnInfoClose.addEventListener('click', closeInfoOverlay);
  btnDiagramClose.addEventListener('click', closeComponentDiagram);

  // Close when clicking the dark backdrop
  infoOverlay.addEventListener('click', (e) => {
    if (e.target === infoOverlay) closeInfoOverlay();
  });

  diagramOverlay.addEventListener('click', (e) => {
    if (e.target === diagramOverlay) closeComponentDiagram();
  });

  // ── Dev Auto-Solve (Ctrl+Shift+S) ────────────────────────
  function _devAutoSolve() {
    const level = State.level;
    if (!level) return;
    const levelDef = LEVELS[State.currentLevelIndex];
    if (!levelDef || !levelDef.solution) return;
    const sol = levelDef.solution;

    // Reset first
    State.resetLevel();
    _stopAutoClock();
    _updateStepCount();

    // Place gates
    if (sol.gatesUsed) {
      const gateSlots = level.nodes.filter(n => n.type === 'GATE_SLOT');
      // For linked groups, track which groups already got a gate
      const linkedDone = new Set();
      let gi = 0;
      for (const slot of gateSlots) {
        if (slot.linkedGroup && linkedDone.has(slot.linkedGroup)) continue;
        if (gi < sol.gatesUsed.length) {
          State.setGate(slot.id, sol.gatesUsed[gi]);
          if (slot.linkedGroup) linkedDone.add(slot.linkedGroup);
          gi++;
        }
      }
    }

    // Place flip-flops
    if (sol.ffsUsed) {
      const ffMap = { 'D-FF': 'D', 'T-FF': 'T', 'SR-FF': 'SR', 'JK-FF': 'JK' };
      const ffSlots = level.nodes.filter(n => n.type === 'FF_SLOT');
      const linkedDone = new Set();
      let fi = 0;
      for (const slot of ffSlots) {
        if (slot.linkedGroup && linkedDone.has(slot.linkedGroup)) continue;
        if (fi < sol.ffsUsed.length) {
          State.setFfType(slot.id, ffMap[sol.ffsUsed[fi]] || sol.ffsUsed[fi]);
          if (slot.linkedGroup) linkedDone.add(slot.linkedGroup);
          fi++;
        }
      }
    }

    // Run required STEPs (use minSteps or detect from stepValues)
    const minSteps = levelDef.minSteps || 0;
    const maxStepValues = level.nodes.reduce((max, n) => {
      return n.stepValues ? Math.max(max, n.stepValues.length) : max;
    }, 0);
    const stepsNeeded = Math.max(minSteps, maxStepValues, State.isSequentialLevel() ? 1 : 0);

    let stepsDone = 0;
    function doStep() {
      if (stepsDone >= stepsNeeded || State.solved) return;
      State.stepClock();
      _updateStepCount();
      stepsDone++;
      setTimeout(doStep, 150);
    }
    setTimeout(doStep, 100);
  }

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    // When user is typing in a text input, let the browser handle keys
    // (except Escape which should still close overlays)
    const _isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA';
    if (_isTyping && e.key !== 'Escape') return;

    // Dev auto-solve: Ctrl+Shift+S
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      _devAutoSolve();
      return;
    }
    // Undo: Ctrl+Z
    if (e.ctrlKey && !e.shiftKey && (e.key === 'z' || e.key === 'Z' || e.code === 'KeyZ')) {
      e.preventDefault();
      if (State.undo()) _updateStepCount();
      return;
    }
    // ── Design Mode shortcuts ──
    if (State.designMode && !e.ctrlKey && !e.altKey && !e.metaKey) {
      const code = e.code;
      const shortcut = {
        'KeyS': 'select', 'KeyI': 'place-input', 'KeyO': 'place-output',
        'KeyG': 'place-gate', 'KeyF': 'place-ff', 'KeyC': 'place-clock',
        'KeyM': 'place-mux', 'Digit7': 'place-7seg', 'KeyW': 'wire', 'KeyD': 'delete',
      }[code];
      if (shortcut) {
        e.preventDefault();
        State.designTool = shortcut;
        _updateDesignToolActive(shortcut);
        return;
      }
      if (code === 'KeyT') {
        e.preventDefault();
        document.getElementById('btn-design-test').click();
        return;
      }
      if (code === 'KeyE') {
        e.preventDefault();
        document.getElementById('btn-design-export').click();
        return;
      }
      if (code === 'KeyR') {
        e.preventDefault();
        document.getElementById('btn-design-share').click();
        return;
      }
      if (code === 'KeyP') {
        e.preventDefault();
        document.getElementById('btn-design-import').click();
        return;
      }
      if (code === 'KeyX') {
        e.preventDefault();
        document.getElementById('btn-design-clear').click();
        return;
      }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (State.selectedNodeId) {
          e.preventDefault();
          State.deleteNode(State.selectedNodeId);
        }
        return;
      }
    }
    // Redo: Ctrl+Y or Ctrl+Shift+Z
    if ((e.ctrlKey && (e.key === 'y' || e.key === 'Y' || e.code === 'KeyY')) || (e.ctrlKey && e.shiftKey && e.code === 'KeyZ')) {
      e.preventDefault();
      if (State.redo()) _updateStepCount();
      return;
    }
    // Clear all (reset level): Ctrl+Shift+R
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
      e.preventDefault();
      State.resetLevel();
      _stopAutoClock();
      _updateStepCount();
      return;
    }
    // Toggle hint: H
    if (e.key === 'h' || e.key === 'H') {
      if (!e.ctrlKey && !e.altKey && !e.metaKey) {
        if (!hintOverlay.classList.contains('hidden')) {
          closeHintOverlay();
        } else {
          openHintOverlay();
        }
        return;
      }
    }
    // Toggle waveform: W
    if ((e.key === 'w' || e.key === 'W') && !e.ctrlKey && !e.altKey && !e.metaKey) {
      toggleWaveform();
      return;
    }
    // STEP: Space (sequential levels only)
    if (e.key === ' ') {
      e.preventDefault();
      if (State.isSequentialLevel() && !State.solved) {
        State.stepClock();
        _updateStepCount();
        setTimeout(_checkFail, 200);
      }
      return;
    }
    if (e.key === 'Escape' && !diagramOverlay.classList.contains('hidden')) {
      closeComponentDiagram();
      return;
    }

    if (e.key === 'Escape' && !infoOverlay.classList.contains('hidden')) {
      closeInfoOverlay();
      return;
    }

    if (e.key === 'Escape' && !menuOverlay.classList.contains('hidden')) {
      closeMenuOverlay();
      return;
    }

    if (e.key === 'Escape' && !hintOverlay.classList.contains('hidden')) {
      closeHintOverlay();
    }
  });

  colorizeTruthTableBits();
  setupComponentInfoButtons();

  // ── Input Callbacks ───────────────────────────────────────
  Input.init(canvas, {
    onGatePlaced:  () => { /* tick loop handles re-render */ },
    onHoverChange: () => { /* hover state already in State, tick renders it */ },
  });

  // ── Renderer Init & Resize ────────────────────────────────
  Renderer.init(canvas);
  window.addEventListener('resize', () => { Renderer.resize(); if (Waveform.isVisible()) Waveform.render(); });

  // ── Waveform Init ────────────────────────────────────────
  const waveformPanel = document.getElementById('waveform-panel');
  const btnWaveform = document.getElementById('btn-waveform');
  Waveform.init(document.getElementById('waveform-canvas'));

  function toggleWaveform() {
    if (Waveform.isVisible()) {
      Waveform.hide();
      waveformPanel.classList.add('hidden');
      btnWaveform.classList.remove('active');
    } else {
      waveformPanel.classList.remove('hidden'); // un-hide FIRST so it has dimensions
      Waveform.show(); // then show (which does requestAnimationFrame resize+render)
      btnWaveform.classList.add('active');
    }
  }

  btnWaveform.addEventListener('click', toggleWaveform);
  document.getElementById('btn-waveform-close').addEventListener('click', toggleWaveform);

  // ── Gate Palette Highlight (hover sync) ───────────────────
  function updatePaletteHighlight(gate) {
    document.querySelectorAll('.gate-chip').forEach(el => {
      el.classList.toggle('active', el.dataset.gate === gate);
    });
  }

  // Sync palette with hovered gate slot
  setInterval(() => {
    const h = State.hoveredNodeId;
    if (h && State.level) {
      const node = State.level.nodes.find(n => n.id === h);
      updatePaletteHighlight(node ? node.gate : null);
    } else {
      updatePaletteHighlight(null);
    }
  }, 100);

  // ── Design Mode ──────────────────────────────────────────
  const designToolbar = document.getElementById('design-toolbar');
  const designTools = document.querySelectorAll('.design-tool');

  function _setDesignMode(active) {
    designToolbar.classList.toggle('hidden', !active);
    // Hide normal HUD elements in design mode
    document.getElementById('hud-right').style.display = active ? 'none' : '';
    document.getElementById('hud-center').style.display = active ? 'none' : '';
    if (active) {
      State.designTool = 'select';
      _updateDesignToolActive('select');
      // Load saved design or start empty
      if (State.level) {
        const saved = localStorage.getItem('andgame_design');
        if (saved) {
          try {
            const data = JSON.parse(saved);
            State.level.nodes = data.nodes || [];
            State.level.wires = data.wires || [];
            // Restore node counter
            let maxNum = 0;
            State.level.nodes.forEach(n => {
              const m = String(n.id).match(/(\d+)$/);
              if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
            });
            State.level.wires.forEach(w => {
              const m = String(w.id).match(/(\d+)$/);
              if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
            });
            State.nodeCounter = maxNum + 1;
          } catch (_) {
            State.level.nodes = [];
            State.level.wires = [];
          }
        } else {
          State.level.nodes = [];
          State.level.wires = [];
        }
      }
      // Initialize camera for design mode
      Renderer.panBy(0, 0); // ensure offset is set

    }
  }

  function _updateDesignToolActive(tool) {
    designTools.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tool === tool);
    });
  }

  // ── Property Editor ──────────────────────────────────────
  const designProps = document.getElementById('design-props');
  const propsType = document.getElementById('design-props-type');
  const propLabel = document.getElementById('prop-label');
  const propValueToggle = document.getElementById('prop-value-toggle');
  const propStepsRow = document.getElementById('prop-steps-row');
  const propSteps = document.getElementById('prop-steps');
  const propTargetToggle = document.getElementById('prop-target-toggle');
  const propStepTargetsRow = document.getElementById('prop-step-targets-row');
  const propStepTargets = document.getElementById('prop-step-targets');
  const propInitQToggle = document.getElementById('prop-initq-toggle');
  const propLabelRow = document.getElementById('prop-label-row');
  const propValueRow = document.getElementById('prop-value-row');
  const propTargetRow = document.getElementById('prop-target-row');
  const propInitQRow = document.getElementById('prop-initq-row');

  function _getSelectedNode() {
    if (!State.level || !State.selectedNodeId) return null;
    return State.level.nodes.find(n => n.id === State.selectedNodeId) || null;
  }

  function _updatePropsPanel() {
    const node = _getSelectedNode();
    if (!node || !State.designMode) {
      designProps.classList.add('hidden');
      return;
    }
    designProps.classList.remove('hidden');
    propsType.textContent = node.type;

    // Show/hide rows based on type
    propLabelRow.style.display = '';
    propValueRow.style.display = (node.type === 'INPUT' || node.type === 'MUX_SELECT') ? '' : 'none';
    propStepsRow.style.display = node.type === 'INPUT' ? '' : 'none';
    propTargetRow.style.display = node.type === 'OUTPUT' ? '' : 'none';
    propStepTargetsRow.style.display = node.type === 'OUTPUT' ? '' : 'none';
    propInitQRow.style.display = node.type === 'FF_SLOT' ? '' : 'none';

    // Fill values
    propLabel.value = node.label || '';
    if (node.type === 'INPUT') {
      propValueToggle.textContent = node.fixedValue ?? 0;
      propSteps.value = (node.stepValues || []).join(',');
    }
    if (node.type === 'MUX_SELECT') propValueToggle.textContent = node.value ?? 0;
    if (node.type === 'OUTPUT') {
      propTargetToggle.textContent = node.targetValue ?? 0;
      propStepTargets.value = (node.stepTargets || []).join(',');
    }
    if (node.type === 'FF_SLOT') propInitQToggle.textContent = node.initialQ ?? 0;
  }

  // Update props panel on each tick (checks if selection changed)
  let _lastPropsNodeId = null;
  setInterval(() => {
    if (State.selectedNodeId !== _lastPropsNodeId) {
      _lastPropsNodeId = State.selectedNodeId;
      _updatePropsPanel();
    }
  }, 100);

  propLabel.addEventListener('input', () => {
    const node = _getSelectedNode();
    if (node) node.label = propLabel.value;
  });

  propValueToggle.addEventListener('click', () => {
    const node = _getSelectedNode();
    if (!node) return;
    if (node.type === 'INPUT') {
      node.fixedValue = (node.fixedValue ?? 0) ^ 1;
      propValueToggle.textContent = node.fixedValue;
    } else if (node.type === 'MUX_SELECT') {
      node.value = (node.value ?? 0) ^ 1;
      propValueToggle.textContent = node.value;
    }
  });

  propSteps.addEventListener('input', () => {
    const node = _getSelectedNode();
    if (!node || node.type !== 'INPUT') return;
    const vals = propSteps.value.split(',').map(s => parseInt(s.trim())).filter(v => v === 0 || v === 1);
    node.stepValues = vals.length > 0 ? vals : undefined;
  });

  propTargetToggle.addEventListener('click', () => {
    const node = _getSelectedNode();
    if (!node || node.type !== 'OUTPUT') return;
    node.targetValue = (node.targetValue ?? 0) ^ 1;
    propTargetToggle.textContent = node.targetValue;
  });

  propStepTargets.addEventListener('input', () => {
    const node = _getSelectedNode();
    if (!node || node.type !== 'OUTPUT') return;
    const vals = propStepTargets.value.split(',').map(s => parseInt(s.trim())).filter(v => v === 0 || v === 1);
    node.stepTargets = vals.length > 0 ? vals : undefined;
  });

  propInitQToggle.addEventListener('click', () => {
    const node = _getSelectedNode();
    if (!node || node.type !== 'FF_SLOT') return;
    node.initialQ = (node.initialQ ?? 0) ^ 1;
    propInitQToggle.textContent = node.initialQ;
  });



  // Tool selection
  designTools.forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      State.designTool = tool;
      _updateDesignToolActive(tool);
    });
  });

  // Design actions
  // Prevent clicks on toolbar from reaching canvas
  document.getElementById('design-toolbar').addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  document.getElementById('design-toolbar').addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.getElementById('btn-design-clear').addEventListener('click', () => {
    if (!State.level) return;
    State.level.nodes = [];
    State.level.wires = [];
    State.selectedNodeId = null;
    localStorage.removeItem('andgame_design');
  });

  document.getElementById('btn-design-undo').addEventListener('click', () => {
    if (State.undo()) _updateStepCount();
  });
  document.getElementById('btn-design-redo').addEventListener('click', () => {
    if (State.redo()) _updateStepCount();
  });

  document.getElementById('btn-design-export').addEventListener('click', () => {
    const exported = State.exportLevel();
    if (!exported) return;
    const json = JSON.stringify(exported, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      alert('Level JSON copied to clipboard! (' + json.length + ' chars)');
    }).catch(() => {
      prompt('Copy this JSON:', json);
    });
  });

  document.getElementById('btn-design-import').addEventListener('click', () => {
    if (!State.level) return;
    const json = prompt('Paste level JSON:');
    if (!json) return;
    try {
      const data = JSON.parse(json);
      if (!data.nodes || !data.wires) throw new Error('Invalid level: missing nodes or wires');
      State.level.nodes = data.nodes;
      State.level.wires = data.wires;
      State.selectedNodeId = null;
      // Update node counter to avoid ID collisions
      let maxNum = 0;
      data.nodes.forEach(n => {
        const m = String(n.id).match(/(\d+)$/);
        if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
      });
      data.wires.forEach(w => {
        const m = String(w.id).match(/(\d+)$/);
        if (m) maxNum = Math.max(maxNum, parseInt(m[1]));
      });
      State.nodeCounter = maxNum + 1;
    } catch (err) {
      alert('Import failed: ' + err.message);
    }
  });

  document.getElementById('btn-design-share').addEventListener('click', () => {
    if (!State.level) return;
    const gameCanvas = document.getElementById('game-canvas');
    const w = gameCanvas.width;
    const h = gameCanvas.height;
    const bannerH = 80;
    const nodeCount = State.level.nodes.length;
    const wireCount = State.level.wires.length;

    const offscreen = document.createElement('canvas');
    offscreen.width = w;
    offscreen.height = h + bannerH;
    const octx = offscreen.getContext('2d');

    // Dark banner
    octx.fillStyle = '#0d1117';
    octx.fillRect(0, 0, w, bannerH);
    octx.strokeStyle = '#a060ff';
    octx.lineWidth = 2;
    octx.beginPath();
    octx.moveTo(0, bannerH);
    octx.lineTo(w, bannerH);
    octx.stroke();

    // Title
    octx.fillStyle = '#a060ff';
    octx.font = 'bold 22px JetBrains Mono, monospace';
    octx.textAlign = 'left';
    octx.textBaseline = 'middle';
    octx.fillText('DESIGN MODE — Custom Circuit', 20, 28);

    // Stats
    octx.fillStyle = '#00d4ff';
    octx.font = '14px JetBrains Mono, monospace';
    octx.fillText(`${nodeCount} nodes · ${wireCount} wires`, 20, 58);

    octx.fillStyle = '#555';
    octx.font = '12px JetBrains Mono, monospace';
    octx.textAlign = 'right';
    octx.fillText('AND_GAME — maozep.github.io/AND_GAME', w - 20, 28);
    octx.fillText('DESIGNED WITH LOVE', w - 20, 50);

    // Game canvas
    octx.drawImage(gameCanvas, 0, bannerH);

    // Share or download
    offscreen.toBlob(blob => {
      const fileName = `AND_GAME_Design_${nodeCount}n_${wireCount}w.png`;
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([blob], 'design.png', { type: 'image/png' })] })) {
        navigator.share({
          title: 'AND_GAME — Custom Circuit',
          text: `Check out my circuit design! ${nodeCount} nodes, ${wireCount} wires.`,
          files: [new File([blob], fileName, { type: 'image/png' })],
        }).catch(() => {});
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  });

  const btnDesignTest = document.getElementById('btn-design-test');
  const btnDesignBack = document.getElementById('btn-design-back');

  btnDesignTest.addEventListener('click', () => {
    if (!State.level) return;
    // Switch to play/test mode
    State.designMode = false;
    // Hide design tools, show test controls
    document.getElementById('design-tools').classList.add('hidden');
    btnDesignTest.classList.add('hidden');
    btnDesignBack.classList.remove('hidden');
    // Show normal game controls
    document.getElementById('hud-right').style.display = '';
    document.getElementById('hud-center').style.display = '';
    const isSequential = State.isSequentialLevel();
    _setClockControlsVisible(isSequential);
    _updateStepCount();
    _setFfPaletteVisible(isSequential);
    if (isSequential) Input.refreshChips();
  });

  btnDesignBack.addEventListener('click', () => {
    if (!State.level) return;
    // Switch back to design mode
    State.designMode = true;
    State.designTool = 'select';
    _updateDesignToolActive('select');
    // Show design tools, hide test controls
    document.getElementById('design-tools').classList.remove('hidden');
    btnDesignTest.classList.remove('hidden');
    btnDesignBack.classList.add('hidden');
    // Hide normal game controls
    document.getElementById('hud-right').style.display = 'none';
    document.getElementById('hud-center').style.display = 'none';
    _setClockControlsVisible(false);
    _setFfPaletteVisible(false);
    // Reset placed gates/FFs for re-testing
    State.level.nodes.forEach(n => {
      if (n.type === 'GATE_SLOT') n.gate = null;
      if (n.type === 'FF_SLOT') n.ffType = null;
    });
  });

  // ── Start ─────────────────────────────────────────────────
  currentMenuDifficulty = LEVELS[0].difficulty || 'Easy';
  renderLevelMenu();
  updateHintButtonState();
  openMenuOverlay();

})();
