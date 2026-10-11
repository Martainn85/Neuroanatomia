/* Aplikacja: fiszki, quiz, egzamin próbny, lista struktur. Bez zależności. */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var KEY = 'neuroanatomia_v1';
  var KAT = { lok: 'Lokalizacja i budowa', fun: 'Funkcje', zab: 'Zaburzenia', naz: 'Nazwy łacińskie', ryc: 'Ryciny' };
  var EGZ = { lok: 14, fun: 14, zab: 7 };     // skład egzaminu wg wykładu 1
  var EGZ_RYCINY = 4;                         // ile z 14 pytań "lok" to pytania z rycin
  var EGZ_NAZWY = 2;                          // ile z 14 pytań "lok" to pytania o nazwy
  var LITERY = ['A', 'B', 'C', 'D'];

  /* ---------- pamięć ---------- */
  var S = { box: {}, q: {}, exams: [] };
  try {
    var raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw) { S.box = raw.box || {}; S.q = raw.q || {}; S.exams = raw.exams || []; }
  } catch (e) { /* brak dostępu do pamięci: działamy bez zapisu */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- pomocnicze ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sample(a, n) { return shuffle(a).slice(0, n); }
  function box(id) { return S.box[id] || 0; }
  function mastered(id) { return box(id) >= 2; }
  function ocena(pct) {
    if (pct >= 91) return '5';
    if (pct >= 81) return '4,5';
    if (pct >= 71) return '4';
    if (pct >= 61) return '3,5';
    if (pct >= 50) return '3';
    return '2';
  }
  var ALL = NA.wszystkieStruktury();

  /* ---------- pytania o nazwy (generowane z listy struktur) ---------- */
  function nazwaPytanie(s, naLacine) {
    var pole = naLacine ? 'la' : 'pl';
    var bliskie = ALL.filter(function (x) { return x.id !== s.id && Math.abs(x.zestaw - s.zestaw) <= 1; });
    var zle = [];
    shuffle(bliskie).concat(shuffle(ALL)).forEach(function (x) {
      if (zle.length < 3 && x.id !== s.id && x[pole] !== s[pole] && zle.indexOf(x[pole]) < 0) zle.push(x[pole]);
    });
    return {
      id: 'N-' + s.id, k: 'naz', w: 'lista', sid: s.id,
      q: naLacine ? 'Łacińska nazwa struktury „' + s.pl + '” to:' : 'Polska nazwa struktury „' + s.la + '” to:',
      ok: s[pole], zle: zle, e: s.pl + ' = ' + s.la, optLa: naLacine
    };
  }
  function przygotuj(p) {
    var opts = shuffle([p.ok].concat(p.zle));
    return { p: p, opts: opts, ci: opts.indexOf(p.ok), chosen: null };
  }

  /* ---------- wynik ---------- */
  var egzTryb = false;
  function policz(items) {
    var r = { ok: 0, bad: 0, skip: 0, kat: {} };
    items.forEach(function (it) {
      var k = it.p.k === 'naz' || (egzTryb && it.p.k === 'ryc') ? 'lok' : it.p.k;
      var c = r.kat[k] || (r.kat[k] = { ok: 0, bad: 0, skip: 0 });
      if (it.chosen === null || it.chosen === 'skip') { r.skip++; c.skip++; }
      else if (it.chosen === it.ci) { r.ok++; c.ok++; }
      else { r.bad++; c.bad++; }
    });
    r.pts = 2 * r.ok - r.bad;
    r.max = 2 * items.length;
    r.pct = r.max ? Math.max(0, Math.round(r.pts / r.max * 100)) : 0;
    return r;
  }
  function zapiszStatystyki(items) {
    items.forEach(function (it) {
      if (it.chosen === null || it.chosen === 'skip') return;
      var dobrze = it.chosen === it.ci;
      if (it.p.k === 'naz') {
        S.box[it.p.sid] = dobrze ? Math.min(3, box(it.p.sid) + 1) : 0;
      } else {
        var st = S.q[it.p.id] || (S.q[it.p.id] = { ok: 0, bad: 0 });
        if (dobrze) st.ok++; else st.bad++;
      }
    });
    save();
  }

  /* ---------- widok: start ---------- */
  function vStart() {
    var opan = ALL.filter(function (s) { return mastered(s.id); }).length;
    var zal = NA.pytania.filter(function (p) { return S.q[p.id] && S.q[p.id].ok > 0; }).length;
    var ost = S.exams[S.exams.length - 1];
    var wyk = Object.keys(NA.wyklady);
    var licz = { lok: 0, fun: 0, zab: 0 };
    NA.pytania.forEach(function (p) { licz[p.k]++; });

    var h = '<h1>Neuroanatomia</h1>' +
      '<p class="muted">80 struktur w 12 zestawach oraz pytania w formacie egzaminu: 2 pkt za dobrą odpowiedź, 0 za brak, minus 1 za błędną.</p>' +
      '<div class="tiles">' +
      '<div class="tile"><b>' + opan + ' / ' + ALL.length + '</b><span>struktur opanowanych</span></div>' +
      '<div class="tile"><b>' + zal + ' / ' + NA.pytania.length + '</b><span>pytań zaliczonych</span></div>' +
      '<div class="tile"><b>' + (ost ? ost.pct + '%' : 'brak') + '</b><span>' + (ost ? 'ostatni egzamin, ocena ' + ost.ocena : 'egzaminu próbnego') + '</span></div>' +
      '</div>' +
      '<div class="row" style="margin:14px 0 6px">' +
      '<a class="btn primary" href="#egzamin">Egzamin próbny</a>' +
      '<a class="btn" href="#quiz">Quiz</a>' +
      '<a class="btn" href="#ryciny">Ryciny</a>' +
      '<a class="btn" href="#fiszki">Fiszki</a></div>' +
      '<p class="small muted">Pytania pisane obejmują wykłady: ' + esc(wyk.join(', ')) +
      ' (budowa ' + licz.lok + ', funkcje ' + licz.fun + ', zaburzenia ' + licz.zab +
      '). Nazwy łacińskie są dostępne dla wszystkich zestawów.</p>' +
      '<h2>Zestawy struktur</h2><div class="sets">';

    NA.zestawy.forEach(function (z) {
      var m = z.struktury.filter(function (s) { return mastered(s.id); }).length;
      h += '<div class="card set"><h3><span class="num">' + z.nr + '.</span>' + esc(z.tytul) +
        ' <span class="muted small">' + m + ' / ' + z.struktury.length + '</span></h3>' +
        '<div class="row"><button data-act="fiszki-z" data-z="' + z.nr + '">Fiszki</button>' +
        '<button data-act="nazwy-z" data-z="' + z.nr + '">Quiz nazw</button></div>' +
        '<div class="bar"><i style="width:' + Math.round(m / z.struktury.length * 100) + '%"></i></div></div>';
    });
    h += '</div>';
    app.innerHTML = h;
  }

  /* ---------- widok: fiszki ---------- */
  var F = null;
  var fUst = { z: 'all', dir: 'pl', tylko: false };

  function fStart() {
    var lista = ALL.filter(function (s) {
      return (fUst.z === 'all' || s.zestaw === +fUst.z) && (!fUst.tylko || !mastered(s.id));
    });
    F = {
      q: shuffle(lista).map(function (s) {
        var d = fUst.dir === 'mix' ? (Math.random() < 0.5 ? 'pl' : 'la') : fUst.dir;
        return { s: s, dir: d };
      }),
      i: 0, flip: false, umiem: 0, nie: 0, n: lista.length
    };
    vFiszki();
  }

  function vFiszki() {
    if (!F) {
      var o = '<option value="all">Wszystkie zestawy (80)</option>';
      NA.zestawy.forEach(function (z) {
        o += '<option value="' + z.nr + '"' + (String(fUst.z) === String(z.nr) ? ' selected' : '') + '>' +
          z.nr + '. ' + esc(z.tytul) + ' (' + z.struktury.length + ')</option>';
      });
      app.innerHTML = '<h1>Fiszki</h1><p class="muted">Nazwa polska i łacińska. Karta oznaczona „nie umiem” wraca na koniec kolejki. Struktura liczy się jako opanowana po dwóch trafieniach z rzędu.</p>' +
        '<div class="card"><div class="fields">' +
        '<label class="field">Zestaw<select id="f-z">' + o + '</select></label>' +
        '<label class="field">Kierunek<select id="f-dir">' +
        '<option value="pl">polska → łacińska</option><option value="la">łacińska → polska</option><option value="mix">mieszany</option>' +
        '</select></label></div>' +
        '<div class="chips"><label class="chip"><input type="checkbox" id="f-tylko"' + (fUst.tylko ? ' checked' : '') + '> tylko nieopanowane</label></div>' +
        '<button class="primary" data-act="f-start">Zacznij</button></div>';
      document.getElementById('f-dir').value = fUst.dir;
      return;
    }
    if (F.i >= F.q.length) {
      app.innerHTML = '<h1>Fiszki</h1><div class="card score">' +
        (F.n ? '<div class="big">' + F.n + '</div><div class="grade">kart przerobionych</div>' +
          '<p class="muted" style="margin-top:10px">Powtórek po błędzie: ' + F.nie + '</p>'
          : '<p>W tym wyborze nie ma kart. Wszystko opanowane albo zestaw jest pusty.</p>') +
        '<div class="row" style="justify-content:center;margin-top:12px">' +
        '<button class="primary" data-act="f-again">Jeszcze raz</button><button data-act="f-reset">Zmień ustawienia</button></div></div>';
      return;
    }
    var c = F.q[F.i];
    var przod = c.dir === 'pl' ? c.s.pl : c.s.la;
    var tyl = c.dir === 'pl' ? c.s.la : c.s.pl;
    var zrobione = F.n ? Math.round(F.umiem / F.n * 100) : 0;
    app.innerHTML = '<div class="qmeta"><span>Zestaw ' + c.s.zestaw + '</span><span>opanowane w tej sesji: ' + F.umiem + ' / ' + F.n + '</span></div>' +
      '<div class="progressline"><i style="width:' + zrobione + '%"></i></div>' +
      '<div class="card flash" data-act="f-flip" role="button" tabindex="0" aria-label="Odwróć kartę">' +
      '<div><div class="side">' + (c.dir === 'pl' ? 'po polsku' : 'po łacinie') + '</div>' +
      '<div class="term' + (c.dir === 'la' ? ' la' : '') + '">' + esc(przod) + '</div>' +
      (F.flip ? '<div class="answer' + (c.dir === 'pl' ? ' la' : '') + '">' + esc(tyl) + '</div>'
        : '<div class="muted small" style="margin-top:18px">kliknij albo naciśnij spację</div>') +
      '</div></div>' +
      (F.flip
        ? '<div class="row"><button data-act="f-nie">Nie umiem (1)</button><button class="primary" data-act="f-tak">Umiem (2)</button></div>'
        : '<div class="row"><button class="primary" data-act="f-flip">Pokaż odpowiedź</button></div>') +
      '<p style="margin-top:18px"><button class="ghost small" data-act="f-reset">Zakończ</button></p>';
  }

  function fOdp(umiem) {
    var c = F.q[F.i];
    if (umiem) { S.box[c.s.id] = Math.min(3, box(c.s.id) + 1); F.umiem++; }
    else { S.box[c.s.id] = 0; F.nie++; F.q.push(c); }
    save();
    F.i++; F.flip = false;
    vFiszki();
  }

  /* ---------- ryciny ---------- */
  function figSVG(fig, pins, hl, maski) {
    var r = +fig.vb.split(' ')[2] / 46, h = '';
    function rect(b, cls) {
      return '<rect class="' + cls + '" x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + b[3] + '" rx="' + (r * 0.35).toFixed(1) + '"/>';
    }
    if (maski) fig.cele.forEach(function (c, i) { if (c.box && maski !== i + 1) h += rect(c.box, 'maska'); });
    (pins || []).forEach(function (p) {
      var num = p.n != null;
      if (p.box) {
        h += '<g class="pin' + (p.sel || !num ? ' sel' : '') + '"' + (num ? ' data-act="r-sel" data-n="' + p.n + '"' : '') + '>' + rect(p.box, 'ramka') + '</g>';
        return;
      }
      h += '<g class="pin' + (p.sel ? ' sel' : '') + '"' + (num ? ' data-act="r-sel" data-n="' + p.n + '"' : '') + '>' +
        (p.sel || !num ? '<circle class="ring" cx="' + p.x + '" cy="' + p.y + '" r="' + (r * 1.9).toFixed(1) + '"/>' : '') +
        '<circle class="dot" cx="' + p.x + '" cy="' + p.y + '" r="' + (num ? r : r * 0.8).toFixed(1) + '"/>' +
        (num ? '<text x="' + p.x + '" y="' + p.y + '" font-size="' + (r * 1.15).toFixed(1) + '">' + (p.n + 1) + '</text>' : '') + '</g>';
    });
    return '<div class="ryc"><svg viewBox="' + fig.vb + '" role="img" aria-label="' + esc(fig.tytul) + '" data-hl="' + (hl || '') + '">' +
      fig.svg + h + '</svg>' + (fig.zrodlo && pins ? '<div class="zrodlo">' + esc(fig.zrodlo) + '</div>' : '') + '</div>';
  }
  /* odbicia lustrzane i podświetlenie: po wstawieniu SVG do dokumentu */
  function dekoruj() {
    app.querySelectorAll('.ryc svg').forEach(function (svg) {
      svg.querySelectorAll('g[data-mirror]').forEach(function (g) {
        var c = g.cloneNode(true);
        c.removeAttribute('data-mirror');
        c.setAttribute('transform', 'translate(' + g.getAttribute('data-mirror') + ',0) scale(-1,1)');
        g.parentNode.insertBefore(c, g.nextSibling);
        g.removeAttribute('data-mirror');
      });
      var k = svg.getAttribute('data-hl');
      if (k) svg.querySelectorAll('[data-k="' + k + '"]').forEach(function (e) { e.classList.add('hl'); });
    });
  }
  function rycPytanie(fig, i) {
    var t = fig.cele[i], zle = [];
    shuffle(fig.cele).forEach(function (c) {
      if (zle.length < 3 && c.pl !== t.pl && zle.indexOf(c.pl) < 0) zle.push(c.pl);
    });
    return {
      id: 'R-' + fig.id + '-' + i, k: 'ryc', w: 'ryciny', fig: fig, t: t,
      q: 'Która struktura jest zaznaczona na rycinie?', ok: t.pl, zle: zle,
      e: t.pl + (t.la ? ' = ' + t.la : '')
    };
  }
  function rycStart(fid) {
    var figs = NA.ryciny.filter(function (f) { return fid === 'all' || f.id === fid; });
    var pula = [];
    figs.forEach(function (f) { f.cele.forEach(function (c, i) { pula.push(rycPytanie(f, i)); }); });
    pula = shuffle(pula);
    // najpierw struktury jeszcze nierozpoznane
    pula.sort(function (a, b) {
      var w = function (p) { var st = S.q[p.id]; return !st || !st.ok ? 0 : (st.bad >= st.ok ? 1 : 2); };
      return w(a) - w(b);
    });
    if (fid === 'all') pula = shuffle(pula.slice(0, 20));
    Q = { tryb: 'quiz', widok: 'ryciny', fid: fid, items: pula.map(przygotuj), i: 0, pokaz: false, koniec: false };
    vQuiz();
  }

  var R = { f: null, sel: -1, ukryj: false };
  function vRyciny() {
    var h;
    if (!R.f) {
      var ile = NA.ryciny.reduce(function (a, f) { return a + f.cele.length; }, 0);
      h = '<h1>Ryciny</h1><p class="muted">Schematy własne, uproszczone: pokazują położenie struktur względem siebie, a nie dokładny kształt. ' +
        'W trybie nauki dotknij numeru, w teście rozpoznaj zaznaczoną strukturę.</p>' +
        '<p><button class="primary" data-act="r-test" data-f="all">Test ze wszystkich rycin (20 pytań)</button></p><div class="figs">';
      NA.ryciny.forEach(function (f) {
        var um = f.cele.filter(function (c, i) { var st = S.q['R-' + f.id + '-' + i]; return st && st.ok > 0; }).length;
        h += '<div class="card fig">' + figSVG(f) + '<h3>' + esc(f.tytul) + '</h3>' +
          '<p class="small muted">rozpoznane ' + um + ' / ' + f.cele.length + '</p>' +
          '<div class="row"><button data-act="r-open" data-f="' + f.id + '">Ucz się</button>' +
          '<button data-act="r-test" data-f="' + f.id + '">Test</button></div></div>';
      });
      h += '</div><p class="small muted">Razem ' + ile + ' oznaczeń na ' + NA.ryciny.length + ' rycinach.</p>';
      app.innerHTML = h; dekoruj(); return;
    }
    var f = R.f, sel = f.cele[R.sel];
    h = '<p><button class="ghost small" data-act="r-back">← Wszystkie ryciny</button></p><h1>' + esc(f.tytul) + '</h1>' +
      '<div class="card">' + figSVG(f, f.cele.map(function (c, i) { return { x: c.x, y: c.y, n: i, sel: i === R.sel, box: c.box }; }), sel ? sel.el : '', f.maska && R.ukryj ? R.sel + 1 || true : false) +
      '<div class="figinfo">' + (sel ? '<b>' + esc(sel.nr || (f.maska ? '' : R.sel + 1)) + (sel.nr || !f.maska ? '. ' : '') + esc(sel.pl) + '</b>' + (sel.la ? ' <span class="la muted">' + esc(sel.la) + '</span>' : '')
        : '<span class="muted">Dotknij numeru na rycinie albo na liście.</span>') + '</div></div>' +
      '<div class="row end"><label class="chip"><input type="checkbox" data-act="r-ukryj"' + (R.ukryj ? ' checked' : '') + '> ukryj nazwy na liście</label>' +
      '<button class="primary" data-act="r-test" data-f="' + f.id + '">Test z tej ryciny</button></div><div class="legend">';
    f.cele.forEach(function (c, i) {
      var pokaz = !R.ukryj || i === R.sel;
      h += '<button data-act="r-sel" data-n="' + i + '" class="' + (i === R.sel ? 'cur' : '') + '"><span class="ltr">' + esc(c.nr || i + 1) + '</span>' +
        '<span>' + (pokaz ? esc(c.pl) + (c.la ? ' <span class="la muted small">' + esc(c.la) + '</span>' : '') : '<span class="muted">pokaż</span>') + '</span></button>';
    });
    app.innerHTML = h + '</div>';
    dekoruj();
  }

  /* ---------- widok: quiz i egzamin ---------- */
  var Q = null;   // {tryb:'quiz'|'egzamin', items, i, pokaz, koniec}
  var qUst = { kat: { lok: true, fun: true, zab: true, naz: false }, w: 'all', n: '10', slabe: true, z: 'all' };

  function pulaNazw(z) {
    return ALL.filter(function (s) { return z === 'all' || s.zestaw === +z; })
      .map(function (s) { return nazwaPytanie(s, Math.random() < 0.6); });
  }

  function quizStart() {
    var pula = NA.pytania.filter(function (p) { return qUst.kat[p.k] && (qUst.w === 'all' || p.w === qUst.w); });
    if (qUst.kat.naz) pula = pula.concat(pulaNazw(qUst.z));
    if (!pula.length) { alert('Brak pytań dla tego wyboru.'); return; }
    pula = shuffle(pula);
    if (qUst.slabe) {
      // najpierw pytania nigdy niezaliczone, potem te z przewagą błędów
      var waga = function (p) {
        if (p.k === 'naz') return mastered(p.sid) ? 2 : 0;
        var st = S.q[p.id];
        return !st || !st.ok ? 0 : (st.bad >= st.ok ? 1 : 2);
      };
      pula.sort(function (a, b) { return waga(a) - waga(b); });
    }
    var n = qUst.n === 'all' ? pula.length : Math.min(+qUst.n, pula.length);
    Q = { tryb: 'quiz', widok: 'quiz', items: shuffle(pula.slice(0, n)).map(przygotuj), i: 0, pokaz: false, koniec: false };
    vQuiz();
  }

  function egzaminStart() {
    var wez = function (k, n) { return sample(NA.pytania.filter(function (p) { return p.k === k; }), n); };
    // w puli "lokalizacja i budowa": nazwy łacińskie oraz ryciny (najpierw skany z ramkami, jeśli są na dysku)
    var skany = NA.ryciny.filter(function (f) { return f.cele.some(function (c) { return c.box; }); });
    var rpula = [];
    (skany.length ? skany : NA.ryciny).forEach(function (f) { f.cele.forEach(function (c, i) { rpula.push(rycPytanie(f, i)); }); });
    var ryc = sample(rpula, EGZ_RYCINY);
    var nazwy = sample(pulaNazw('all'), EGZ_NAZWY);
    var lok = wez('lok', EGZ.lok - nazwy.length - ryc.length).concat(nazwy, ryc);
    var all = lok.concat(wez('fun', EGZ.fun), wez('zab', EGZ.zab));
    Q = { tryb: 'egzamin', widok: 'egzamin', items: shuffle(all).map(przygotuj), i: 0, pokaz: false, koniec: false };
    vQuiz();
  }

  function vQuizUstawienia() {
    var w = '<option value="all">wszystkie wykłady</option>';
    Object.keys(NA.wyklady).forEach(function (k) { w += '<option value="' + k + '">' + k + ': ' + esc(NA.wyklady[k]) + '</option>'; });
    var z = '<option value="all">wszystkie zestawy</option>';
    NA.zestawy.forEach(function (x) { z += '<option value="' + x.nr + '">' + x.nr + '. ' + esc(x.tytul) + '</option>'; });
    var chips = '';
    Object.keys(KAT).forEach(function (k) {
      chips += '<label class="chip"><input type="checkbox" data-kat="' + k + '"' + (qUst.kat[k] ? ' checked' : '') + '> ' + KAT[k] + '</label>';
    });
    app.innerHTML = '<h1>Quiz</h1><p class="muted">Odpowiedź sprawdzana od razu, z komentarzem. Punktacja jak na egzaminie, więc możesz też pominąć pytanie.</p>' +
      '<div class="card"><div class="chips">' + chips + '</div><div class="fields">' +
      '<label class="field">Wykład (pytania pisane)<select id="q-w">' + w + '</select></label>' +
      '<label class="field">Zestaw (nazwy łacińskie)<select id="q-z">' + z + '</select></label>' +
      '<label class="field">Liczba pytań<select id="q-n"><option value="10">10</option><option value="20">20</option><option value="35">35</option><option value="all">wszystkie</option></select></label>' +
      '</div><div class="chips"><label class="chip"><input type="checkbox" id="q-slabe"' + (qUst.slabe ? ' checked' : '') + '> najpierw to, czego jeszcze nie umiem</label></div>' +
      '<button class="primary" data-act="q-start">Zacznij</button></div>';
    document.getElementById('q-w').value = qUst.w;
    document.getElementById('q-z').value = qUst.z;
    document.getElementById('q-n').value = qUst.n;
  }

  function vEgzaminStart() {
    var hist = '';
    if (S.exams.length) {
      hist = '<h2>Poprzednie podejścia</h2><div class="card tablewrap"><table><tr><th>Data</th><th>Punkty</th><th>Wynik</th><th>Ocena</th></tr>';
      S.exams.slice(-8).reverse().forEach(function (e) {
        hist += '<tr><td>' + esc(e.data) + '</td><td class="n">' + e.pts + ' / ' + e.max + '</td><td class="n">' + e.pct + '%</td><td class="n">' + e.ocena + '</td></tr>';
      });
      hist += '</table></div>';
    }
    app.innerHTML = '<h1>Egzamin próbny</h1>' +
      '<div class="card"><p>35 pytań ABCD w proporcjach z wykładu: 14 z lokalizacji i budowy (w tym 4 z rycin), 14 z funkcji, 7 z zaburzeń.</p>' +
      '<p>2 pkt za poprawną odpowiedź, 0 za brak, minus 1 za błędną. Wynik i poprawne odpowiedzi zobaczysz dopiero na końcu.</p>' +
      '<p class="small muted">Skala: 91-100% to 5, 81-90% to 4,5, 71-80% to 4, 61-70% to 3,5, 50-60% to 3, poniżej 50% to 2. ' +
      'Pytania pochodzą na razie z wykładów: ' + esc(Object.keys(NA.wyklady).join(', ')) + '.</p>' +
      '<button class="primary" data-act="e-start">Rozpocznij egzamin</button></div>' + hist;
  }

  function vQuiz() {
    if (!Q) { var w0 = widok(); return w0 === 'egzamin' ? vEgzaminStart() : w0 === 'ryciny' ? vRyciny() : vQuizUstawienia(); }
    if (Q.koniec) return vWynik();
    var it = Q.items[Q.i], p = it.p, egz = Q.tryb === 'egzamin';
    var odsl = !egz && Q.pokaz;
    var r = policz(Q.items.slice(0, odsl ? Q.i + 1 : Q.i));

    var h = '<div class="qmeta"><span>Pytanie ' + (Q.i + 1) + ' z ' + Q.items.length +
      ' <span class="tag">' + KAT[p.k] + '</span></span>' +
      (egz ? '<span>odpowiedzi: ' + Q.items.filter(function (x) { return x.chosen !== null; }).length + ' / ' + Q.items.length + '</span>'
        : '<span>punkty: ' + r.pts + '</span>') + '</div>' +
      '<div class="progressline"><i style="width:' + Math.round(Q.i / Q.items.length * 100) + '%"></i></div>' +
      '<div class="card">' + (p.fig ? figSVG(p.fig, [{ x: p.t.x, y: p.t.y, box: p.t.box }], p.t.el, p.fig.maska) : '') +
      '<div class="qtext">' + esc(p.q) + '</div><div class="opts">';

    it.opts.forEach(function (o, n) {
      var cls = 'opt';
      if (odsl) {
        if (n === it.ci) cls += ' good';
        else if (n === it.chosen) cls += ' wrong';
      } else if (it.chosen === n) cls += ' sel';
      h += '<button class="' + cls + '" data-act="q-odp" data-n="' + n + '"' + (odsl ? ' disabled' : '') + '>' +
        '<span class="ltr">' + LITERY[n] + '</span><span' + (p.optLa ? ' class="la"' : '') + '>' + esc(o) + '</span></button>';
    });
    h += '</div>';

    if (odsl) {
      var dobrze = it.chosen === it.ci;
      h += '<div class="verdict ' + (dobrze ? 'ok' : 'bad') + '">' +
        (it.chosen === 'skip' ? 'Pominięte: 0 pkt' : dobrze ? 'Dobrze: +2 pkt' : 'Błąd: -1 pkt') + '</div>';
      if (p.e) h += '<div class="expl">' + esc(p.e) + '</div>';
    }
    h += '</div>';

    if (egz) {
      h += '<div class="row end"><div class="row">' +
        '<button data-act="e-prev"' + (Q.i === 0 ? ' disabled' : '') + '>Wstecz</button>' +
        '<button data-act="e-next"' + (Q.i === Q.items.length - 1 ? ' disabled' : '') + '>Dalej</button>' +
        (it.chosen !== null ? '<button class="ghost" data-act="e-clear">Wyczyść odpowiedź</button>' : '') +
        '</div><button class="primary" data-act="e-koniec">Zakończ egzamin</button></div><div class="grid-nav">';
      Q.items.forEach(function (x, n) {
        h += '<button data-act="e-go" data-n="' + n + '" class="' + (x.chosen !== null ? 'done' : '') + (n === Q.i ? ' cur' : '') +
          '" aria-label="Pytanie ' + (n + 1) + '">' + (n + 1) + '</button>';
      });
      h += '</div>';
    } else if (odsl) {
      h += '<div class="row end"><button class="ghost" data-act="q-przerwij">Zakończ teraz</button>' +
        '<button class="primary" data-act="q-dalej">' + (Q.i === Q.items.length - 1 ? 'Zobacz wynik' : 'Dalej') + '</button></div>';
    } else {
      h += '<div class="row end"><button class="ghost" data-act="q-przerwij">Zakończ teraz</button>' +
        '<button data-act="q-skip">Pomijam (0 pkt)</button></div>';
    }
    app.innerHTML = h;
    if (p.fig) dekoruj();
  }

  function zakoncz() {
    if (Q.tryb === 'quiz') Q.items = Q.items.slice(0, Q.pokaz ? Q.i + 1 : Q.i);
    Q.koniec = true;
    zapiszStatystyki(Q.items);
    if (Q.tryb === 'egzamin') {
      var r = policz(Q.items);
      S.exams.push({ data: new Date().toLocaleDateString('pl-PL'), pts: r.pts, max: r.max, pct: r.pct, ocena: ocena(r.pct) });
      save();
    }
    vWynik();
  }

  function vWynik() {
    egzTryb = Q.tryb === 'egzamin';
    var r = policz(Q.items), egz = egzTryb;
    egzTryb = false;
    if (!Q.items.length) { Q = null; return render(); }
    var h = '<h1>' + (egz ? 'Wynik egzaminu próbnego' : 'Wynik quizu') + '</h1>' +
      '<div class="card score"><div class="big">' + r.pct + '%</div>' +
      '<div class="grade">' + r.pts + ' / ' + r.max + ' pkt, ocena wg skali egzaminu: <b>' + ocena(r.pct) + '</b></div>' +
      '<p class="muted" style="margin-top:8px">poprawne ' + r.ok + ', błędne ' + r.bad + ', pominięte ' + r.skip + '</p></div>' +
      '<div class="card tablewrap"><table><tr><th>Zakres</th><th>Dobrze</th><th>Źle</th><th>Brak</th><th>Punkty</th></tr>';
    ['lok', 'fun', 'zab', 'ryc'].forEach(function (k) {
      var c = r.kat[k]; if (!c) return;
      var n = c.ok + c.bad + c.skip;
      h += '<tr><td>' + KAT[k] + '</td><td class="n">' + c.ok + '</td><td class="n">' + c.bad + '</td><td class="n">' + c.skip +
        '</td><td class="n">' + (2 * c.ok - c.bad) + ' / ' + 2 * n + '</td></tr>';
    });
    h += '</table></div>';

    var zle = Q.items.filter(function (it) { return it.chosen !== it.ci; });
    if (zle.length) {
      h += '<h2>Do powtórki</h2><div class="card"><ol class="review">';
      zle.forEach(function (it) {
        var brak = it.chosen === null || it.chosen === 'skip';
        h += '<li><div><b>' + esc(it.p.fig ? 'Rycina: ' + it.p.fig.tytul : it.p.q) + '</b></div>' +
          (brak ? '<div class="muted">bez odpowiedzi</div>' : '<div class="r-bad">' + esc(it.opts[it.chosen]) + '</div>') +
          '<div class="r-ok">' + esc(it.p.ok) + '</div>' +
          (it.p.e ? '<div class="small muted">' + esc(it.p.e) + '</div>' : '') + '</li>';
      });
      h += '</ol></div>';
    }
    var ryc = Q.widok === 'ryciny';
    h += '<div class="row"><button class="primary" data-act="' + (egz ? 'e-start' : ryc ? 'r-test' : 'q-start') + '"' +
      (ryc ? ' data-f="' + Q.fid + '"' : '') + '>Jeszcze raz</button>' +
      '<button data-act="q-reset">' + (egz || ryc ? 'Wróć' : 'Zmień ustawienia') + '</button></div>';
    app.innerHTML = h;
    window.scrollTo(0, 0);
  }

  /* ---------- widok: lista struktur ---------- */
  var szukaj = '';
  function vStruktury() {
    var t = szukaj.trim().toLowerCase();
    var h = '<h1>Lista struktur</h1><p><input type="search" id="s-q" placeholder="Szukaj po polsku lub po łacinie" value="' + esc(szukaj) + '" aria-label="Szukaj struktury" style="width:100%"></p>';
    NA.zestawy.forEach(function (z) {
      var w = z.struktury.filter(function (s) { return !t || s.pl.toLowerCase().indexOf(t) >= 0 || s.la.toLowerCase().indexOf(t) >= 0; });
      if (!w.length) return;
      h += '<h2>' + z.nr + '. ' + esc(z.tytul) + '</h2><div class="card tablewrap"><table>';
      w.forEach(function (s) {
        h += '<tr><td style="width:18px"><span class="dot b' + box(s.id) + '" title="' + (mastered(s.id) ? 'opanowane' : 'do nauki') + '"></span></td>' +
          '<td>' + esc(s.pl) + '</td><td class="la">' + esc(s.la) + '</td></tr>';
      });
      h += '</table></div>';
    });
    h += '<p style="margin-top:24px"><button class="ghost small" data-act="wyczysc">Wyzeruj wszystkie postępy</button></p>';
    app.innerHTML = h;
    var inp = document.getElementById('s-q');
    inp.addEventListener('input', function () {
      szukaj = inp.value; vStruktury();
      var n = document.getElementById('s-q'); n.focus(); n.setSelectionRange(n.value.length, n.value.length);
    });
  }

  /* ---------- nawigacja ---------- */
  function widok() { return (location.hash || '#start').slice(1); }
  function render() {
    var v = widok();
    if (Q && ['quiz', 'egzamin', 'ryciny'].indexOf(v) >= 0 && Q.widok !== v) Q = null;
    if (v !== 'ryciny') { R.f = null; R.sel = -1; }
    document.querySelectorAll('#nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.view === v); });
    if (v === 'fiszki') vFiszki();
    else if (v === 'quiz' || v === 'egzamin' || v === 'ryciny') vQuiz();
    else if (v === 'struktury') vStruktury();
    else vStart();
  }
  function idz(v) { if (widok() === v) render(); else location.hash = v; }
  window.addEventListener('hashchange', function () { render(); window.scrollTo(0, 0); });

  app.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-act]');
    if (!el) return;
    var a = el.dataset.act;
    switch (a) {
      case 'fiszki-z': fUst.z = el.dataset.z; fUst.tylko = false; fStart(); idz('fiszki'); break;
      case 'nazwy-z':
        qUst.kat = { lok: false, fun: false, zab: false, naz: true }; qUst.z = el.dataset.z; qUst.n = 'all';
        quizStart(); idz('quiz'); break;
      case 'f-start':
        fUst.z = document.getElementById('f-z').value; fUst.dir = document.getElementById('f-dir').value;
        fUst.tylko = document.getElementById('f-tylko').checked; fStart(); break;
      case 'f-flip': F.flip = !F.flip; vFiszki(); break;
      case 'f-tak': fOdp(true); break;
      case 'f-nie': fOdp(false); break;
      case 'f-again': fStart(); break;
      case 'f-reset': F = null; vFiszki(); break;
      case 'q-start':
        if (document.getElementById('q-w')) {
          app.querySelectorAll('[data-kat]').forEach(function (c) { qUst.kat[c.dataset.kat] = c.checked; });
          qUst.w = document.getElementById('q-w').value; qUst.z = document.getElementById('q-z').value;
          qUst.n = document.getElementById('q-n').value; qUst.slabe = document.getElementById('q-slabe').checked;
        }
        quizStart(); break;
      case 'q-odp':
        Q.items[Q.i].chosen = +el.dataset.n;
        if (Q.tryb === 'quiz') Q.pokaz = true;
        vQuiz(); break;
      case 'q-skip': Q.items[Q.i].chosen = 'skip'; Q.pokaz = true; vQuiz(); break;
      case 'q-dalej':
        if (Q.i === Q.items.length - 1) zakoncz(); else { Q.i++; Q.pokaz = false; vQuiz(); }
        break;
      case 'q-przerwij': zakoncz(); break;
      case 'q-reset': Q = null; render(); break;
      case 'r-test': rycStart(el.dataset.f); window.scrollTo(0, 0); break;
      case 'r-open': R.f = NA.ryciny.filter(function (f) { return f.id === el.dataset.f; })[0]; R.sel = -1; vRyciny(); window.scrollTo(0, 0); break;
      case 'r-back': R.f = null; vRyciny(); break;
      case 'r-sel': R.sel = +el.dataset.n; vRyciny(); break;
      case 'r-ukryj': R.ukryj = el.checked; vRyciny(); break;
      case 'e-start': egzaminStart(); window.scrollTo(0, 0); break;
      case 'e-prev': Q.i--; vQuiz(); break;
      case 'e-next': Q.i++; vQuiz(); break;
      case 'e-go': Q.i = +el.dataset.n; vQuiz(); break;
      case 'e-clear': Q.items[Q.i].chosen = null; vQuiz(); break;
      case 'e-koniec':
        var brak = Q.items.filter(function (x) { return x.chosen === null; }).length;
        if (confirm(brak ? 'Bez odpowiedzi: ' + brak + ' (po 0 pkt). Zakończyć egzamin?' : 'Zakończyć egzamin?')) zakoncz();
        break;
      case 'wyczysc':
        if (confirm('Usunąć wszystkie zapisane postępy w tej przeglądarce?')) { S = { box: {}, q: {}, exams: [] }; save(); render(); }
        break;
    }
  });

  document.addEventListener('keydown', function (ev) {
    if (ev.target.matches('input, select, textarea') || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    var v = widok(), k = ev.key.toLowerCase();
    // Enter i spacja na przycisku lub linku działają natywnie, nie dublujemy ich
    if ((k === ' ' || k === 'enter') && ev.target.closest('button, a')) return;
    if (v === 'fiszki' && F && F.i < F.q.length) {
      if (k === ' ' || k === 'enter') { ev.preventDefault(); F.flip = !F.flip; vFiszki(); }
      else if (F.flip && k === '1') fOdp(false);
      else if (F.flip && k === '2') fOdp(true);
    } else if ((v === 'quiz' || v === 'egzamin' || v === 'ryciny') && Q && !Q.koniec) {
      var n = 'abcd'.indexOf(k); if (n < 0) n = '1234'.indexOf(k);
      var odsl = Q.tryb === 'quiz' && Q.pokaz;
      if (n >= 0 && k.length === 1 && !odsl) { Q.items[Q.i].chosen = n; if (Q.tryb === 'quiz') Q.pokaz = true; vQuiz(); }
      else if (k === 'enter' && odsl) { ev.preventDefault(); if (Q.i === Q.items.length - 1) zakoncz(); else { Q.i++; Q.pokaz = false; vQuiz(); } }
      else if (Q.tryb === 'egzamin' && k === 'arrowright' && Q.i < Q.items.length - 1) { Q.i++; vQuiz(); }
      else if (Q.tryb === 'egzamin' && k === 'arrowleft' && Q.i > 0) { Q.i--; vQuiz(); }
    }
  });

  render();
})();
