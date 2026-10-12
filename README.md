# Nauka do egzaminów: neuroanatomia i neuropsychologia kliniczna

Statyczna strona do nauki neuroanatomii: fiszki (nazwy polskie i łacińskie), quiz z punktacją egzaminacyjną, test na rycinach, egzamin próbny i lista 80 struktur. Czysty HTML, CSS i JavaScript, bez instalacji i bez etapu budowania.

## Uruchomienie

Lokalnie wystarczy otworzyć `index.html` w przeglądarce.

GitHub Pages:

1. Wgraj zawartość tego folderu do repozytorium (gałąź `main`).
2. W repozytorium: Settings, Pages, Source: "Deploy from a branch", gałąź `main`, folder `/ (root)`.
3. Po chwili strona będzie pod adresem `https://UŻYTKOWNIK.github.io/NAZWA-REPO/`.

## Struktura

```
index.html
css/style.css
js/core.js          rejestr danych
js/app.js           widoki i logika
data/struktury.js   80 struktur w 12 zestawach
data/pytania-w1.js  pytania z wykładu 1
data/pytania-w2.js  pytania z wykładu 2
data/ryciny.js      schematy SVG z oznaczonymi strukturami
```

## Dodawanie kolejnego wykładu

1. Skopiuj `data/pytania-w2.js` jako `data/pytania-w3.js` i podmień treść:

```js
NA.wyklad('W3', 'Jądra podstawne, opony, rdzeń kręgowy', [
  { k: 'fun', q: 'Treść pytania?', ok: 'poprawna odpowiedź',
    zle: ['błędna 1', 'błędna 2', 'błędna 3'], e: 'opcjonalny komentarz' },
]);
```

2. Dopisz w `index.html` linię `<script src="data/pytania-w3.js"></script>` pod pozostałymi plikami danych.

Pole `k` to zakres: `lok` (lokalizacja i budowa), `fun` (funkcje), `zab` (zaburzenia). Kolejność odpowiedzi jest losowana przy każdym wyświetleniu. Egzamin próbny sam losuje 14 + 14 + 7 pytań ze wszystkich wgranych wykładów.

## Postępy

Zapisują się w `localStorage` przeglądarki, osobno na każdym urządzeniu. Można je wyzerować na dole widoku "Struktury".

## Ryciny prywatne (tylko na dysku)

Folder `prywatne/` (plik `prywatne/ryciny.js` i obrazy w `prywatne/img/`) zawiera ryciny z własnych książek i slajdów. Jest w `.gitignore`, więc nie trafia do repozytorium ani na publiczną stronę. Strona ładuje go tylko wtedy, gdy istnieje obok `index.html`.

## Przedmioty

Przedmioty i zasady ich egzaminów są w `data/przedmioty.js`. Pytania nowego przedmiotu dopisuje się tak jak wykłady, z czwartym parametrem `NA.wyklad(kod, tytul, lista, 'id-przedmiotu')`, a fiszki pojęciowe przez `NA.pojecia('id-przedmiotu', kod, [[pojęcie, wyjaśnienie], ...])`. Kody wykładów muszą być unikalne między przedmiotami (np. W1 dla neuroanatomii, NP1 dla neuropsychologii).
