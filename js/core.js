/* Rdzeń: rejestr danych. Pliki z folderu data/ dopisują tu swoje treści. */
(function () {
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }

  var NA = {
    zestawy: [],   // [{nr, tytul, struktury:[{id, pl, la}]}]
    pytania: [],   // [{id, k, w, q, ok, zle, e}]
    wyklady: {},   // {W1: 'tytuł'}
    ryciny: [],    // [{id, tytul, vb, svg, cele:[{pl, la, x, y, el}]}]

    /* Zestaw struktur z listy prowadzącego. */
    zestaw: function (nr, tytul, lista) {
      NA.zestawy.push({
        nr: nr,
        tytul: tytul,
        struktury: lista.map(function (s, i) {
          return { id: nr + '.' + (i + 1), zestaw: nr, pl: s[0], la: s[1] };
        })
      });
    },

    /* Pytania z jednego wykładu.
       k: 'lok' (lokalizacja i budowa), 'fun' (funkcje), 'zab' (zaburzenia) */
    wyklad: function (kod, tytul, lista) {
      NA.wyklady[kod] = tytul;
      lista.forEach(function (p) {
        if (!p.q || !p.ok || !p.zle || p.zle.length !== 3) {
          console.warn('Błędne pytanie w ' + kod + ':', p);
          return;
        }
        NA.pytania.push({
          id: kod + '-' + hash(p.q), k: p.k, w: kod,
          q: p.q, ok: p.ok, zle: p.zle, e: p.e || ''
        });
      });
    },

    /* Rycina schematyczna. cele: [nazwa PL, nazwa łac., x, y, klucz elementu do podświetlenia] */
    rycina: function (id, tytul, vb, svg, cele, zrodlo) {
      NA.ryciny.push({
        id: id, tytul: tytul, vb: vb, svg: svg, zrodlo: zrodlo || '',
        cele: cele.map(function (c) { return { pl: c[0], la: c[1], x: c[2], y: c[3], el: c[4] || '' }; })
      });
    },

    wszystkieStruktury: function () {
      return NA.zestawy.reduce(function (a, z) { return a.concat(z.struktury); }, []);
    }
  };

  window.NA = NA;
})();
