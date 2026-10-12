/* Przedmioty: kategorie pytań i zasady egzaminu z pierwszego wykładu lub sylabusa.
   egzamin.pkt: [za dobrą, za brak, za błędną]; skala: [próg w %, ocena] od najwyższej. */

NA.przedmiot('neuroanatomia', {
  nazwa: 'Neuroanatomia',
  prowadzacy: 'dr Kacper Łukasiewicz',
  kat: { lok: 'Lokalizacja i budowa', fun: 'Funkcje', zab: 'Zaburzenia' },
  struktury: true,
  ryciny: true,
  egzamin: {
    liczba: 35,
    sklad: { lok: 14, fun: 14, zab: 7 },
    ryciny: 4,
    nazwy: 2,
    pkt: [2, 0, -1],
    skala: [[91, '5'], [81, '4,5'], [71, '4'], [61, '3,5'], [50, '3']],
    opis: '35 pytań ABCD w proporcjach z wykładu: 14 z lokalizacji i budowy (w tym 4 z rycin), 14 z funkcji, 7 z zaburzeń. ' +
      '2 pkt za poprawną odpowiedź, 0 za brak, minus 1 za błędną.',
    opisSkali: '91-100% to 5, 81-90% to 4,5, 71-80% to 4, 61-70% to 3,5, 50-60% to 3, poniżej 50% to 2.'
  }
});

NA.przedmiot('neuropsychologia', {
  nazwa: 'Neuropsychologia kliniczna',
  prowadzacy: 'dr Ewa Sokołowska',
  kat: { met: 'Metody badania mózgu', org: 'Organizacja mózgu i sieci', kli: 'Zaburzenia i następstwa uszkodzeń' },
  struktury: false,
  ryciny: false,
  egzamin: {
    liczba: 25,
    pkt: [1, 0, 0],
    skala: [[95, '5'], [90, '4,5'], [80, '4'], [70, '3,5'], [60, '3']],
    opis: '25 pytań zamkniętych wielokrotnego wyboru, 1 pkt za poprawną odpowiedź, bez punktów ujemnych. Zaliczenie od 60%.',
    opisSkali: 'od 95% to 5, od 90% to 4,5, od 80% to 4, od 70% to 3,5, od 60% to 3, poniżej 60% to 2.'
  }
});
