/* Plan nauki: neuroanatomia, przerwa między zjazdami (13.10-8.11.2026), wykłady 1 i 2.
   Dzień: [data RRRR-MM-DD, tytuł, zadania]. Zadanie: [typ, opis, minuty, parametry].
   Typy: slajdy, rysunek, quiz {w, kat, n}, egzamin, nauka / wskaz / test / przegladaj {f: [id rycin, pierwsza dostępna] lub 'all'}.
   Ryciny prywatne (p-...) są tylko w wersji na dysku; gdy ich brak, używany jest kolejny id z listy. */

NA.plan('neuroanatomia', 'Przerwa między zjazdami: wykłady 1 i 2', [
  /* ---------- tydzień 1: wykład 1 ---------- */
  ['2026-10-13', 'Topografia i podział układu nerwowego', [
    ['slajdy', 'Wykład 1, slajdy 9-19: pojęcia topograficzne, przekroje, podział układu nerwowego, podział ontogenetyczny i kliniczny, płaty, zakręty i bruzdy', 10],
    ['quiz', 'Quiz: wykład 1, lokalizacja i budowa', 10, { w: 'W1', kat: ['lok'], n: 10 }]
  ]],
  ['2026-10-14', 'Płaty, bieguny, bruzdy', [
    ['nauka', 'Nauka na rycinie: płaty i bieguny', 10, { f: ['p-w2-polkula-bok', 'boczna-platy'] }],
    ['wskaz', 'Wskaż: płaty, bruzda środkowa i boczna', 5, { f: ['boczna-platy'] }],
    ['quiz', 'Quiz: wykład 1, lokalizacja i budowa (najpierw nieumiane)', 10, { w: 'W1', kat: ['lok'], n: 10 }]
  ]],
  ['2026-10-15', 'Rozwój OUN i pęcherzyki mózgowe', [
    ['slajdy', 'Wykład 1, slajdy 20-26: neurulacja, pęcherzyki pierwotne i wtórne, kwas foliowy, wady', 10],
    ['quiz', 'Quiz: wykład 1, funkcje', 10, { w: 'W1', kat: ['fun'], n: 11 }]
  ]],
  ['2026-10-16', 'Wady rozwojowe', [
    ['quiz', 'Quiz: wykład 1, zaburzenia', 15, { w: 'W1', kat: ['zab'], n: 15 }],
    ['wskaz', 'Rozgrzewka: wskaż płaty i bieguny', 5, { f: ['boczna-platy'] }]
  ]],
  ['2026-10-17', 'Utrwalenie wykładu 1', [
    ['rysunek', 'Narysuj z pamięci pęcherzyki pierwotne i wtórne oraz co z nich powstaje (kresomózgowie, międzymózgowie, śródmózgowie, tyłomózgowie wtórne, rdzeniomózgowie)', 10],
    ['quiz', 'Quiz: wykład 1, zaburzenia (najpierw nieumiane)', 10, { w: 'W1', kat: ['zab'], n: 10 }]
  ]],
  ['2026-10-18', 'Sprawdzian z wykładu 1', [
    ['quiz', 'Quiz: cały wykład 1', 20, { w: 'W1', kat: ['lok', 'fun', 'zab'], n: 20 }]
  ]],

  /* ---------- tydzień 2: wykład 2, kora ---------- */
  ['2026-10-19', 'Kora: płaty, bruzdy, zakręty', [
    ['slajdy', 'Wykład 2, slajdy 3-21: podział kresomózgowia, kora nowa i stara, płaty, zakręty, pola Brodmanna, wyspa, funkcje kory, bloki Łurii, zaburzenia płatów', 10],
    ['nauka', 'Nauka na rycinie: zakręty i bruzdy powierzchni bocznej', 15, { f: ['p-w2-polkula-bok2', 'boczna-zakrety'] }]
  ]],
  ['2026-10-20', 'Powierzchnia boczna', [
    ['wskaz', 'Wskaż: zakręty i bruzdy powierzchni bocznej', 10, { f: ['p-w2-polkula-bok2', 'boczna-zakrety'] }],
    ['quiz', 'Quiz: wykład 2, lokalizacja i budowa', 10, { w: 'W2', kat: ['lok'], n: 10 }]
  ]],
  ['2026-10-21', 'Powierzchnia przyśrodkowa i funkcje kory', [
    ['nauka', 'Nauka na rycinie: powierzchnia przyśrodkowa półkuli', 10, { f: ['p-w2-przysrodkowa', 'posrodkowy'] }],
    ['quiz', 'Quiz: wykład 2, funkcje (płaty, Brodmann, Łuria)', 10, { w: 'W2', kat: ['fun'], n: 10 }]
  ]],
  ['2026-10-22', 'Schematy prowadzącego', [
    ['nauka', 'Nauka: schemat powierzchni bocznej', 7, { f: ['p-w2-schemat-boczny', 'boczna-zakrety'] }],
    ['nauka', 'Nauka: schemat powierzchni przyśrodkowej', 7, { f: ['p-w2-schemat-przysrodkowy', 'posrodkowy'] }],
    ['nauka', 'Nauka: schemat powierzchni podstawnej', 6, { f: ['p-w2-schemat-podstawa', 'podstawa'] }]
  ]],
  ['2026-10-23', 'Zaburzenia związane z płatami', [
    ['quiz', 'Quiz: wykład 2, zaburzenia', 10, { w: 'W2', kat: ['zab'], n: 10 }],
    ['wskaz', 'Rozgrzewka: wskaż na wszystkich rycinach', 10, { f: 'all' }]
  ]],
  ['2026-10-24', 'Utrwalenie kory', [
    ['rysunek', 'Narysuj z pamięci powierzchnię boczną półkuli: płaty, bruzda środkowa i boczna, zakręty przed- i zaśrodkowy, czołowe, skroniowe', 10, { f: ['p-w2-schemat-boczny', 'boczna-zakrety'] }],
    ['test', 'Test: schemat powierzchni bocznej', 10, { f: ['p-w2-schemat-boczny', 'boczna-zakrety'] }]
  ]],
  ['2026-10-25', 'Dzień lżejszy', [
    ['wskaz', 'Wskaż na wszystkich rycinach', 15, { f: 'all' }]
  ]],

  /* ---------- tydzień 3: wykład 2, dalej ---------- */
  ['2026-10-26', 'Hipokamp, węchomózgowie, podstawa mózgu', [
    ['slajdy', 'Wykład 2, slajdy 22-33: hipokamp, węchomózgowie, płat i układ limbiczny', 10],
    ['nauka', 'Nauka na rycinie: podstawa mózgu', 15, { f: ['p-w2-podstawa', 'podstawa'] }]
  ]],
  ['2026-10-27', 'Wyspa i podstawa', [
    ['nauka', 'Nauka na rycinie: płat wyspowy', 5, { f: ['p-w2-wyspa'] }],
    ['wskaz', 'Wskaż: podstawa mózgu', 10, { f: ['p-w2-podstawa', 'podstawa'] }],
    ['quiz', 'Quiz: wykład 2, lokalizacja i budowa', 10, { w: 'W2', kat: ['lok'], n: 10 }]
  ]],
  ['2026-10-28', 'Kresomózgowie środkowe', [
    ['slajdy', 'Wykład 2, slajdy 34-50: pole przedwzrokowe, blaszka krańcowa, spoidło przednie, ciało modzelowate, sklepienie, przegroda przezroczysta', 10],
    ['nauka', 'Nauka na rycinie: sklepienie i międzymózgowie', 10, { f: ['p-w2-sklepienie', 'posrodkowy-zblizenie'] }]
  ]],
  ['2026-10-29', 'Funkcje i zaburzenia: hipokamp, układ limbiczny, ciało modzelowate', [
    ['quiz', 'Quiz: wykład 2, funkcje', 10, { w: 'W2', kat: ['fun'], n: 10 }],
    ['quiz', 'Quiz: wykład 2, zaburzenia', 10, { w: 'W2', kat: ['zab'], n: 10 }]
  ]],
  ['2026-10-30', 'Przekrój pośrodkowy', [
    ['wskaz', 'Wskaż: przekrój pośrodkowy w zbliżeniu', 10, { f: ['p-w2-sklepienie', 'posrodkowy-zblizenie'] }],
    ['quiz', 'Quiz: wykład 2, lokalizacja i budowa (najpierw nieumiane)', 15, { w: 'W2', kat: ['lok'], n: 15 }]
  ]],
  ['2026-10-31', 'Utrwalenie', [
    ['rysunek', 'Narysuj z pamięci przekrój pośrodkowy: ciało modzelowate (dziób, kolano, pień, płat), sklepienie, przegroda przezroczysta, spoidło przednie, blaszka krańcowa', 10, { f: ['p-w2-przysrodkowa', 'posrodkowy'] }],
    ['test', 'Test: powierzchnia przyśrodkowa', 10, { f: ['p-w2-przysrodkowa', 'posrodkowy'] }]
  ]],
  ['2026-11-01', 'Dzień lżejszy', [
    ['wskaz', 'Wskaż na wszystkich rycinach', 10, { f: 'all' }]
  ]],

  /* ---------- tydzień 4: mieszanie i egzaminy próbne ---------- */
  ['2026-11-02', 'Egzamin próbny 1', [
    ['egzamin', 'Egzamin próbny (35 pytań); po nim przejrzyj listę „Do powtórki”', 30]
  ]],
  ['2026-11-03', 'Powtórka błędów', [
    ['quiz', 'Quiz: wykłady 1 i 2, najpierw nieumiane', 20, { w: 'all', kat: ['lok', 'fun', 'zab'], n: 20 }]
  ]],
  ['2026-11-04', 'Ryciny mieszane', [
    ['nauka', 'Nauka na wszystkich rycinach', 15, { f: 'all' }],
    ['wskaz', 'Wskaż na wszystkich rycinach', 10, { f: 'all' }]
  ]],
  ['2026-11-05', 'Wyprzedzenie: położenie dalszych struktur (opcjonalnie)', [
    ['przegladaj', 'Przeglądaj: przekrój czołowy z jądrami podstawnymi (tylko położenie)', 10, { f: ['czolowy'] }],
    ['przegladaj', 'Przeglądaj: koło tętnicze mózgu (tylko położenie)', 5, { f: ['tetnice'] }]
  ]],
  ['2026-11-06', 'Funkcje i zaburzenia, mieszane', [
    ['quiz', 'Quiz: funkcje i zaburzenia z obu wykładów', 20, { w: 'all', kat: ['fun', 'zab'], n: 20 }]
  ]],
  ['2026-11-07', 'Egzamin próbny 2', [
    ['egzamin', 'Egzamin próbny (35 pytań); porównaj wynik z pierwszym', 30]
  ]],
  ['2026-11-08', 'Ostatnia powtórka przed zjazdem', [
    ['quiz', 'Quiz: najpierw nieumiane, wszystkie zakresy', 15, { w: 'all', kat: ['lok', 'fun', 'zab'], n: 15 }]
  ]]
]);
