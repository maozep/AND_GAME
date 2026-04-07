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
  const DIFFICULTY_ORDER = ['1. Basics', '2. Classic Circuits', '3. Advanced Circuits', '4. Flip-Flops', '5. Sequential Logic'];
  const TRUTH_OBJECTIVES = {
    1: 'מטרת השלב: להבין ששער AND מוציא 1 רק כששתי הכניסות הן 1.',
    2: 'מטרת השלב: להבין ששער OR מוציא 1 כשלפחות אחת מהכניסות היא 1.',
    3: 'מטרת השלב: להבין ששער NOT הופך את הערך בכניסה (0 ל-1, 1 ל-0).',
    4: 'מטרת השלב: להבין ש-NAND הוא AND הפוך, ולכן רק במקרה 11 הפלט הוא 0.',
    5: 'מטרת השלב: להבין ש-NOR הוא OR הפוך, ולכן רק במקרה 00 הפלט הוא 1.',
    6: 'מטרת השלב: להבין ששער XOR מוציא 1 רק כשהכניסות שונות.',
    7: 'מטרת השלב: להבין איך שרשור שערים משנה את הלוגיקה הסופית של המערכת.',
    8: 'מטרת השלב: להבין פיצול אות (Fanout) והזנה של אותה כניסה למספר מסלולים.',
    9: 'מטרת השלב: להבין מסלולים מתפצלים ואיך כל ענף משפיע על הפלטים.',
    10: 'מטרת השלב: להבין רשת של שלושה שערים ואת ההשפעה המצטברת שלהם על הפלט.',
    11: 'מטרת השלב: להבין שחצי-מחבר (Half Adder) מפיק Sum ו-Carry עבור שני ביטים.',
    12: 'מטרת השלב: להבין שפול אאדר (Full Adder) מחבר A,B ו-Carry-in ומחזיר Sum ו-Carry-out.',
    13: 'מטרת השלב: להבין ש-XNOR מחזיר 1 כשהכניסות שוות ו-0 כשהן שונות.',
    14: 'מטרת השלב: להבין שמוקס 2 על 1 בוחר איזה קלט עובר לפלט לפי ביט הבחירה S.',
    15: 'מטרת השלב: להבין שדמולטיפלקסר 1 על 2 מנתב קלט יחיד לאחד משני פלטים לפי S.',
    16: 'מטרת השלב: להבין פריות אי-זוגית ל-3 ביטים: הפלט 1 כשמספר ה-1-ים אי-זוגי.',
    17: 'מטרת השלב: להבין פונקציית Majority: הפלט 1 כשיש לפחות שני 1 בכניסות.',
    18: 'מטרת השלב: להבין דקודר 2 ל-4 שמדליק בדיוק פלט אחד לפי ערך S1,S0.',
    19: 'מטרת השלב: להבין משווה 1-ביט שמסמן גדול/שווה/קטן בין שני קלטים.',
    20: 'מטרת השלב: להבין מקודד עדיפויות שמחזיר את האינדקס של הקלט הפעיל בעדיפות הגבוהה.',
  };
  let currentMenuDifficulty = LEVELS[0] ? LEVELS[0].difficulty : '1. Basics';

  function _escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function _getTruthObjective(levelDef) {
    if (!levelDef || levelDef.id > 20) return '';
    return TRUTH_OBJECTIVES[levelDef.id] || `מטרת השלב: להבין את הפעולה של ${levelDef.name}.`;
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
      return SHELL('D FLIP-FLOP','Master-slave latch pair  ·  ~20 transistors total',`
        ${BLK(80,130,240,180,'MASTER','samples D on CLK=1',NC)}
        ${BLK(400,130,240,180,'SLAVE','transfers to Q on CLK=0',PC)}
        ${IN(40,220,'D')}${L(57,220,80,220,AC,2.5)}
        ${L(320,220,400,220,OC,2.5)}
        <text x="330" y="212" fill="${OC}" font-size="11" font-family="monospace">X</text>
        ${L(640,220,690,220,OC,2.5)}<circle cx="690" cy="220" r="7" fill="${OC}"/>
        <text x="706" y="225" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        ${IN(240,390,'CLK')}
        ${L(240,373,240,310,AC,2)}${L(240,310,280,310,AC,2)}
        <polygon points="280,304 280,316 292,310" fill="${AC}"/>
        ${L(292,310,520,310,AC,2)}${L(520,310,520,310,AC,2)}
        <polygon points="520,304 520,316 532,310" fill="${AC}"/>
        <text x="296" y="306" fill="${DC}" font-size="9" font-family="monospace">CLK  →  MASTER</text>
        <text x="364" y="332" fill="${DC}" font-size="9" font-family="monospace">CLK̄  →  SLAVE</text>
        ${NOTE('Master latch samples D while CLK=1. Slave transfers to Q on falling edge.')}
      `);

    case 'T':
      return SHELL('T FLIP-FLOP','D-FF with XOR feedback  ·  ~22 transistors total',`
        ${BLK(110,145,180,170,'XOR','T ⊕ Q_prev',WC)}
        ${BLK(390,125,240,190,'D  FF','captures on CLK ↑',NC)}
        ${IN(55,230,'T')}${L(72,230,110,230,AC,2.5)}
        ${L(290,230,390,230,OC,2.5)}
        ${L(630,230,690,230,OC,2.5)}<circle cx="690" cy="230" r="7" fill="${OC}"/>
        <text x="706" y="235" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        <path d="M 690 230 C 760 230 760 380 200 380 C 160 380 145 325 145 315" fill="none" stroke="${WC}" stroke-width="2" stroke-dasharray="6,4"/>
        ${DOT(145,315,WC)}
        <text x="680" y="350" fill="${DC}" font-size="11" font-family="monospace">Q feedback →</text>
        ${IN(240,390,'CLK')}${L(240,373,240,315,AC,2)}${L(240,315,510,315,AC,2)}
        <polygon points="510,309 510,321 522,315" fill="${AC}"/>
        ${NOTE('T=0 → Q holds. T=1 → Q toggles. The XOR computes D = T ⊕ Q_prev each cycle.')}
      `);

    case 'SR':
      return SHELL('SR FLIP-FLOP','Cross-coupled NAND latch  ·  8 transistors',`
        ${BLK(268,108,192,148,'NAND 1','S input + Q̄ feedback',PC)}
        ${BLK(268,284,192,148,'NAND 2','R input + Q feedback',NC)}
        ${IN(55,182,'S')}${L(72,182,268,182,AC,2.5)}
        ${IN(55,358,'R')}${L(72,358,268,358,AC,2.5)}
        ${L(460,182,590,182,OC,2.5)}<circle cx="590" cy="182" r="7" fill="${OC}"/>
        <text x="604" y="187" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        ${L(460,358,590,358,WC,2.5)}<circle cx="590" cy="358" r="7" fill="${WC}"/>
        <text x="604" y="363" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>
        <path d="M 590 182 C 660 182 660 440 240 440 C 218 440 210 415 210 405" fill="none" stroke="${OC}" stroke-width="2" stroke-dasharray="5,4"/>
        ${DOT(210,405,OC)}
        <path d="M 590 358 C 670 358 670 70 240 70 C 218 70 210 95 210 108" fill="none" stroke="${WC}" stroke-width="2" stroke-dasharray="5,4"/>
        ${DOT(210,108,WC)}
        <text x="282" y="274" fill="${DC}" font-size="11" font-family="monospace">← Q̄ feeds back to NAND1</text>
        <text x="282" y="102" fill="${DC}" font-size="11" font-family="monospace">← Q feeds back to NAND2</text>
        ${NOTE('S=1,R=0 → Q=1. S=0,R=1 → Q=0. S=R=1 → Q=1 (S priority). Latches state via cross-coupling.')}
      `);

    case 'JK':
      return SHELL('JK FLIP-FLOP','SR latch with output feedback gating  ·  ~24 transistors',`
        ${BLK(110,116,192,155,'AND 1','J · Q̄  (Set gate)',PC)}
        ${BLK(110,299,192,155,'AND 2','K · Q  (Reset gate)',NC)}
        ${BLK(406,136,220,192,'SR LATCH','(NAND-based)',WC)}
        ${IN(50,194,'J')}${L(67,194,110,194,AC,2.5)}
        ${IN(50,377,'K')}${L(67,377,110,377,AC,2.5)}
        ${L(302,194,406,210,OC,2.5)}
        ${L(302,377,406,262,WC,2.5)}
        ${L(626,236,690,236,OC,2.5)}<circle cx="690" cy="236" r="7" fill="${OC}"/>
        <text x="706" y="241" fill="${OC}" font-size="14" font-family="monospace" font-weight="bold">Q</text>
        ${L(626,296,690,296,WC,2.5)}<circle cx="690" cy="296" r="7" fill="${WC}"/>
        <text x="706" y="301" fill="${WC}" font-size="13" font-family="monospace" font-weight="bold">Q̄</text>
        <path d="M 690 296 C 780 296 780 450 50 450 C 28 450 22 415 22 400" fill="none" stroke="${WC}" stroke-width="1.5" stroke-dasharray="5,4"/>
        <path d="M 690 236 C 790 236 790 462 45 462 C 22 462 16 428 16 412" fill="none" stroke="${OC}" stroke-width="1.5" stroke-dasharray="5,4"/>
        ${IN(248,285,'CLK')}${L(248,268,248,194,AC,2)}${L(248,194,302,194,AC,1.5)}
        ${NOTE('J=K=1 → toggle. J=1,K=0 → set Q=1. J=0,K=1 → reset Q=0. J=K=0 → hold.')}
      `);

    default:
      return SHELL('UNKNOWN','No diagram available','');
    }
  }

  function openComponentDiagram(componentKey, title) {
    diagramTitle.textContent = title;
    diagramSubtitle.textContent = 'Simplified transistor schematic';
    diagramContent.innerHTML = renderComponentDiagram(componentKey);
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
      ['D FLIP-FLOP', { key: 'D', label: 'D FLIP-FLOP' }],
      ['T FLIP-FLOP (TOGGLE)', { key: 'T', label: 'T FLIP-FLOP' }],
      ['SR FLIP-FLOP (SET-RESET)', { key: 'SR', label: 'SR FLIP-FLOP' }],
      ['JK FLIP-FLOP', { key: 'JK', label: 'JK FLIP-FLOP' }],
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
        <div class="level-card-title">${level.name}</div>
        <div class="level-card-meta">
          <span>Difficulty: ${level.difficulty || 'Medium'}</span>
          <span>${completed ? 'REPLAY' : 'PLAY'}</span>
        </div>
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
    hintLevelEl.textContent = `LEVEL ${State.currentLevelIndex + 1} — ${level.name}`;
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
    }, 600);
  }

  btnStep.addEventListener('click', () => {
    if (!State.isSequentialLevel() || State.solved) return;
    State.stepClock();
    _updateStepCount();
  });

  btnAutoClk.addEventListener('click', () => {
    if (_autoClkRunning) _stopAutoClock();
    else _startAutoClock();
  });

  // ── Core: Evaluate + Render ───────────────────────────────
  function tick() {
    const level  = State.level;
    if (!level) return;

    const result = Engine.evaluate(level, State.getFfStates());
    State.setEvalResult(result);

    // Lower the clock after evaluation so the rising edge is detected exactly once.
    if (State.clockHigh) {
      State.lowerClock();
    }

    Renderer.render(level, result, State.hoveredNodeId, result.solved);

    // Trigger win sequence if newly solved
    if (result.solved && !_lastSolved) {
      _lastSolved = true;
      _stopAutoClock();
      _onSolve();
    }
    if (!result.solved) {
      _lastSolved = false;
    }

    _rafId = requestAnimationFrame(tick);
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

    // Update HUD
    levelName.textContent = `${index + 1}. ${levelDef.name}`;
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
      instructionLevelName.textContent = levelDef.name;
      instructionText.textContent = levelDef.instruction;
      instructionOverlay.classList.remove('hidden');
    }

    // Show clock controls and FF palette only for sequential levels
    _stopAutoClock();
    const isSequential = State.isSequentialLevel();
    _setClockControlsVisible(isSequential);
    _updateStepCount();
    _setFfPaletteVisible(isSequential);
    if (isSequential) Input.refreshChips();

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
      winLevelEl.textContent = `LEVEL ${idx + 1} — ${LEVELS[idx].name}`;
      winTimeEl.textContent = `TIME: ${formatTime(_elapsedMs)}`;
      const best = getBestTime(levelDef.id);
      winBestEl.textContent = `BEST: ${formatTime(best)}`;
      // Show solution inside win overlay if available
      if (levelDef.solution) {
        const sol = levelDef.solution;
        solutionBlock.innerHTML = sol.blockSvg;
        solutionCircuit.innerHTML = sol.circuitSvg;
        solutionExplanation.textContent = sol.explanation || '';
        const gateList = sol.gatesUsed.join(', ');
        solutionGates.innerHTML = `השערים הלוגיים שנעשה בהם שימוש: <span>${gateList}</span>`;
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

  document.getElementById('btn-clear-gates').addEventListener('click', () => {
    State.resetLevel();
  });

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

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
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
  window.addEventListener('resize', () => Renderer.resize());

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

  // ── Start ─────────────────────────────────────────────────
  currentMenuDifficulty = LEVELS[0].difficulty || 'Easy';
  renderLevelMenu();
  updateHintButtonState();
  openMenuOverlay();

})();
