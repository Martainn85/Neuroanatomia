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
    przedmioty: {},  // {id: konfiguracja przedmiotu}
    kolejnosc: [],   // kolejność przedmiotów w przełączniku
    karty: [],       // fiszki pojęciowe [{id, prz, w, a, b}]
    plany: {},       // {przedmiot: {tytul, dni:[{data, tytul, zadania:[{typ, opis, min, par}]}]}}

    /* Plan nauki przedmiotu. */
    plan: function (prz, tytul, dni) {
      NA.plany[prz] = {
        tytul: tytul,
        dni: dni.map(function (d) {
          return { data: d[0], tytul: d[1], zadania: d[2].map(function (z) { return { typ: z[0], opis: z[1], min: z[2] || 0, par: z[3] || {} }; }) };
        })
      };
    },

    /* Przedmiot: nazwa, kategorie pytań, zasady egzaminu. */
    przedmiot: function (id, cfg) {
      cfg.id = id;
      NA.przedmioty[id] = cfg;
      NA.kolejnosc.push(id);
    },

    /* Fiszki pojęciowe: [pojęcie, wyjaśnienie]. */
    pojecia: function (prz, kod, lista) {
      lista.forEach(function (k) {
        NA.karty.push({ id: 'K-' + prz + '-' + hash(k[0]), prz: prz, w: kod, a: k[0], b: k[1] });
      });
    },

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
       k: kategoria z konfiguracji przedmiotu, np. 'lok', 'fun', 'zab' w neuroanatomii.
       prz: identyfikator przedmiotu (domyślnie neuroanatomia). */
    wyklad: function (kod, tytul, lista, prz) {
      prz = prz || 'neuroanatomia';
      NA.wyklady[kod] = tytul;
      NA.wykladPrz = NA.wykladPrz || {};
      NA.wykladPrz[kod] = prz;
      lista.forEach(function (p) {
        if (!p.q || !p.ok || !p.zle || p.zle.length !== 3) {
          console.warn('Błędne pytanie w ' + kod + ':', p);
          return;
        }
        NA.pytania.push({
          id: kod + '-' + hash(p.q), k: p.k, w: kod, prz: prz,
          q: p.q, ok: p.ok, zle: p.zle, e: p.e || ''
        });
      });
    },

    /* Rycina. cele: [nazwa PL, nazwa łac., x, y, klucz elementu do podświetlenia, ramka [x, y, szer, wys]].
       Ramka zastępuje znacznik: otacza numer lub podpis na skanie. Opcja maska: true zasłania wszystkie ramki. */
    rycina: function (id, tytul, vb, svg, cele, zrodlo, opcje) {
      NA.ryciny.push({
        id: id, tytul: tytul, vb: vb, svg: svg, zrodlo: zrodlo || '', maska: !!(opcje && opcje.maska), zaslon: (opcje && opcje.zaslon) || [], bezEgzaminu: !!(opcje && opcje.bezEgzaminu),
        cele: cele.map(function (c) { return { pl: c[0], la: c[1], x: c[2], y: c[3], el: c[4] || '', box: c[5] || null, nr: c[6] || '' }; })
      });
    },

    wszystkieStruktury: function () {
      return NA.zestawy.reduce(function (a, z) { return a.concat(z.struktury); }, []);
    }
  };

  window.NA = NA;
})();
