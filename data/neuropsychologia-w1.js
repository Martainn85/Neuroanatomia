/* Neuropsychologia kliniczna, wykład 1 (dr Ewa Sokołowska).
   k: met = metody badania mózgu, org = organizacja mózgu i sieci, kli = zaburzenia i następstwa uszkodzeń. */

NA.wyklad('NP1', 'Wprowadzenie, metody badania mózgu, funkcje i ich zaburzenia', [

  /* ---------- metody badania mózgu ---------- */
  { k: 'met', q: 'Według definicji przytoczonej na wykładzie (Pąchalska i in., 2020) neuropsychologia kliniczna jest subdyscypliną:', ok: 'psychologii klinicznej', zle: ['neurologii', 'psychiatrii', 'neurobiologii'] },
  { k: 'met', q: 'Neuropsychologia kliniczna bada związek mózgowia z procesami poznawczymi, emocjonalnymi, adaptacyjnymi i społecznym zachowaniem w relacji:', ok: 'JA-Świat', zle: ['ciało-umysł', 'pacjent-terapeuta', 'bodziec-reakcja'] },
  { k: 'met', q: 'Dwie główne grupy metod badania mózgu omówione na wykładzie to:', ok: 'badania neuroobrazowe i badania neurofizjologiczne', zle: ['badania testowe i badania kwestionariuszowe', 'badania biochemiczne i badania genetyczne', 'wywiad i obserwacja'] },
  { k: 'met', q: 'Metody neuroobrazowe dzieli się na:', ok: 'strukturalne i funkcjonalne', zle: ['inwazyjne i nieinwazyjne', 'ilościowe i jakościowe', 'statyczne i rozwojowe'] },
  { k: 'met', q: 'Badanie EEG jest miarą:', ok: 'aktywności bioelektrycznej mózgu rejestrowanej z elektrod na skórze głowy', zle: ['przepływu krwi mierzonego środkiem radioaktywnym', 'składu chemicznego tkanki mózgowej', 'gęstości tkanek mierzonej promieniowaniem rentgenowskim'] },
  { k: 'met', q: 'Metody wykorzystujące zjawiska elektryczne (np. EEG) wskazuje się jako:', ok: 'tanie, nieinwazyjne i funkcjonalne', zle: ['kosztowne i strukturalne', 'inwazyjne, wymagające kontrastu', 'wykorzystujące promieniowanie jonizujące'] },
  { k: 'met', q: 'Do procedur aktywacyjnych w badaniu EEG NIE należy:', ok: 'dożylne podanie środka kontrastowego', zle: ['hiperwentylacja', 'fotostymulacja', 'deprywacja snu'] },
  { k: 'met', q: 'PET (emisyjna tomografia pozytronowa) zalicza się do metod:', ok: 'radioizotopowych (medycyna nuklearna)', zle: ['wykorzystujących zjawiska magnetyczne', 'wykorzystujących zjawiska elektryczne', 'ultrasonograficznych'] },
  { k: 'met', q: 'W badaniu PET rejestrowane są:', ok: 'zmiany metabolizmu tkanki mózgowej, więc jest to metoda funkcjonalna', zle: ['wyłącznie struktury kostne czaszki', 'potencjały elektryczne z powierzchni skóry głowy', 'fale ultradźwiękowe odbite od tkanek'] },
  { k: 'met', q: 'Która cecha PET jest wymieniona na wykładzie?', ok: 'jest metodą kosztowną', zle: ['jest najtańszą metodą obrazowania', 'nie wymaga podania żadnej substancji', 'wykorzystuje silne pole magnetyczne'] },
  { k: 'met', q: 'W badaniu SPECT stosuje się:', ok: 'kamerę gamma i środek radioaktywny', zle: ['elektrody na skórze głowy', 'głowicę ultradźwiękową', 'silne pole elektromagnetyczne bez kontrastu'] },
  { k: 'met', q: 'Tomografia komputerowa (TK) wykorzystuje:', ok: 'promieniowanie rentgenowskie i jest metodą strukturalną', zle: ['pole magnetyczne i jest metodą funkcjonalną', 'izotopy promieniotwórcze i jest metodą funkcjonalną', 'ultradźwięki i jest metodą funkcjonalną'] },
  { k: 'met', q: 'Ryzyko zdrowotne tomografii komputerowej, na które zwraca uwagę wykład, to u dzieci:', ok: 'choroby nowotworowe', zle: ['uszkodzenie słuchu', 'napady padaczkowe', 'zaburzenia rytmu serca'] },
  { k: 'met', q: 'Czułość tomografii komputerowej można zwiększyć przez:', ok: 'dożylne podanie środka kontrastowego', zle: ['hiperwentylację', 'fotostymulację', 'deprywację snu'] },
  { k: 'met', q: 'Która z metod NIE jest metodą hybrydową wymienioną na wykładzie?', ok: 'EEG/USG', zle: ['PET/TK', 'PET/MR', 'angio-TK'] },
  { k: 'met', q: 'Rezonans magnetyczny (MRI) w podstawowej postaci:', ok: 'nie wymaga podania środków kontrastujących i bada strukturę mózgu', zle: ['wymaga podania izotopu i bada metabolizm', 'wykorzystuje promieniowanie rentgenowskie', 'rejestruje aktywność elektryczną z elektrod'] },
  { k: 'met', q: 'Funkcjonalny rezonans magnetyczny (fMRI) opiera się na ocenie zjawiska:', ok: 'BOLD', zle: ['EPSP', 'SPECT', 'MRS'] },
  { k: 'met', q: 'Skrót BOLD oznacza:', ok: 'blood oxygenation level-dependent', zle: ['brain organization of local dynamics', 'basal oscillation of low delta', 'brain overall level of discharge'] },
  { k: 'met', q: 'Spektroskopia rezonansu magnetycznego (MRS) pozwala ocenić:', ok: 'skład chemiczny tkanki mózgowej („okno na metabolizm tkanek”)', zle: ['przepływ prądu między elektrodami', 'gęstość kości czaszki', 'układ komorowy u noworodków'] },
  { k: 'met', q: 'USG przezciemiączkowe jest podstawowym badaniem mózgu u:', ok: 'noworodków i niemowląt z niezamkniętym ciemiączkiem', zle: ['osób starszych z otępieniem', 'pacjentów po udarze', 'dorosłych z padaczką'] },
  { k: 'met', q: 'USG przezciemiączkowe służy między innymi do oceny:', ok: 'układu komorowego (np. rozpoznania wodogłowia)', zle: ['aktywności bioelektrycznej kory', 'metabolizmu glukozy', 'składu chemicznego tkanki'] },
  { k: 'met', q: 'Biopsja cienkoigłowa i gruboigłowa pozwala na:', ok: 'analizę cytologiczną lub histopatologiczną pobranych próbek', zle: ['ocenę zjawiska BOLD', 'rejestrację potencjałów wywołanych', 'pomiar przepływu krwi w tętnicach'] },
  { k: 'met', q: 'Która z metod jest strukturalna?', ok: 'tomografia komputerowa', zle: ['fMRI', 'PET', 'EEG'] },
  { k: 'met', q: 'Która z metod wykorzystuje promieniowanie jonizujące (X)?', ok: 'tomografia komputerowa', zle: ['rezonans magnetyczny', 'EEG', 'USG'] },

  /* ---------- organizacja mózgu ---------- */
  { k: 'org', q: 'Ostatnim ogniwem w modelu podstawowych systemów funkcjonalnych mózgu (Pąchalska i in., 2020) jest:', ok: 'wyjście motoryczne (celowa aktywność ruchowa)', zle: ['wejście sensoryczne', 'system emocjonalny', 'system pamięci'] },
  { k: 'org', q: 'Które zestawienie odpowiada podstawowym systemom funkcjonalnym mózgu z wykładu?', ok: 'wejście sensoryczne, systemy sensoryczne i sieci uwagowe z pamięcią, system emocjonalny, system wykonawczy, wyjście motoryczne', zle: ['pień mózgu, móżdżek, kora, układ limbiczny', 'blok energetyczny, informacyjny, planowania', 'półkula lewa, półkula prawa, ciało modzelowate'] },
  { k: 'org', q: 'Funkcje adaptacyjne w podziale funkcji neuropsychologicznych to:', ok: 'funkcje organizacyjne i wykonawcze', zle: ['funkcje sensoryczno-percepcyjne', 'kontrola emocji', 'rozumienie i ekspresja mowy'] },
  { k: 'org', q: 'Do funkcji poznawczych w podziale z wykładu zalicza się:', ok: 'funkcje sensoryczno-percepcyjne, czujność i selektywną uwagę oraz pamięć', zle: ['kontrolę emocji i funkcje społeczne', 'funkcje organizacyjne i wykonawcze', 'koordynację motoryki małej i dużej'] },
  { k: 'org', q: 'Dualizm, który według wykładu „nie istnieje”, oznacza:', ok: 'pełne rozgraniczenie ciała i psychiki jako dwóch rzeczywistości', zle: ['przypisanie każdej funkcji jednej strukturze', 'współpracę obu półkul mózgu', 'podział kory na płaty'] },
  { k: 'org', q: 'Psychomorfologizm, który według wykładu „nie istnieje”, oznacza:', ok: 'pełne przyporządkowanie pojedynczych funkcji psychicznych do pojedynczych struktur mózgowych', zle: ['rozgraniczenie ciała i psychiki', 'zależność psychiki od kształtu czaszki', 'rozwój mózgu w ontogenezie'] },
  { k: 'org', q: 'Ośrodek Wernickego według tradycyjnej taksonomii reguluje:', ok: 'analizę akustyczną dźwięków mowy', zle: ['ekspresję werbalną', 'ruchy dowolne kończyn', 'analizę bodźców wzrokowych'] },
  { k: 'org', q: 'Ośrodek Broki według tradycyjnej taksonomii odpowiada za:', ok: 'ekspresję werbalną', zle: ['analizę akustyczną dźwięków mowy', 'rozpoznawanie twarzy', 'orientację przestrzenną'] },
  { k: 'org', q: 'Zastrzeżenie dotyczące lokalizacji funkcji (Cierpiałkowska i Sęk, 2016) mówi, że:', ok: 'nawet przy zniszczeniu ośrodka może nastąpić samoistne wycofywanie się zaburzeń', zle: ['zniszczenie ośrodka zawsze oznacza trwałą utratę funkcji', 'funkcje są rozłożone równomiernie w całym mózgu', 'kora nie ma znaczenia dla funkcji psychicznych'] },
  { k: 'org', q: 'Podejście systemowe w neuropsychologii koncentruje się na:', ok: 'całokształcie aktywności umysłowej (systemie), a nie na wyizolowanych jej aspektach', zle: ['pojedynczych ośrodkach odpowiedzialnych za całe funkcje', 'wyłącznie budowie anatomicznej mózgu', 'wyłącznie zachowaniu obserwowalnym'] },
  { k: 'org', q: 'W przypadku funkcji złożonych, według wniosku z wykładu:', ok: 'działa wiele wyspecjalizowanych obszarów odpowiedzialnych za funkcje składowe', zle: ['istnieje jeden ośrodek w korze przedczołowej', 'całą funkcję realizuje jedna półkula', 'nie da się wskazać żadnych struktur zaangażowanych'] },

  /* ---------- zaburzenia ---------- */
  { k: 'kli', q: 'Agnozje to zaburzenia:', ok: 'spostrzegania', zle: ['pamięci', 'dowolnych czynności ruchowych', 'mowy'] },
  { k: 'kli', q: 'Agnozje są według wykładu między innymi efektem uszkodzenia:', ok: 'bocznych i tylnych obszarów mózgu, odpowiadających za odbiór, przetwarzanie i magazynowanie informacji', zle: ['wyłącznie móżdżku', 'okolicy przedczołowej (pola 9-12)', 'pola 44 i 45'] },
  { k: 'kli', q: 'Pomijanie stronne zaliczane jest do zaburzeń:', ok: 'uwagi', zle: ['pamięci', 'mowy', 'motoryki'] },
  { k: 'kli', q: 'Z zaburzeniami pamięci (amnezjami, zespołem amnestycznym) wykład wiąże:', ok: 'jądro środkowo-boczne wzgórza, hipokamp i ciała suteczkowate', zle: ['pola Brodmanna 44 i 45', 'pola 4 i 6', 'wstępującą część układu siatkowatego'] },
  { k: 'kli', q: 'Zespół czołowy to zaburzenia emocjonalne i osobowości przy uszkodzeniu obszaru przedczołowego, czyli pól:', ok: '9, 10, 11, 12, 46, 47', zle: ['4 i 6', '44 i 45', '22'] },
  { k: 'kli', q: 'Apraksje to zaburzenia:', ok: 'dowolnych czynności ruchowych', zle: ['spostrzegania', 'pamięci', 'rozumienia mowy'] },
  { k: 'kli', q: 'Z apraksjami wykład wiąże uszkodzenie między innymi:', ok: 'okolic ruchowych (pola 4 i 6), ciemieniowych, ciemieniowo-potylicznych i styku skroniowo-ciemieniowo-potylicznego', zle: ['hipokampa i ciał suteczkowatych', 'wyłącznie pola 22', 'wstępującej części układu siatkowatego'] },
  { k: 'kli', q: 'Korowy ośrodek ruchowy mowy Broki obejmuje pola Brodmanna:', ok: '44 i 45', zle: ['22', '4 i 6', '9 i 10'] },
  { k: 'kli', q: 'Ośrodek Wernickego leży w płacie skroniowym w polu Brodmanna:', ok: '22', zle: ['44', '17', '4'] },
  { k: 'kli', q: 'Afazje zaliczane są do zaburzeń:', ok: 'komunikacji i pragmatyki języka', zle: ['funkcji wykonawczych', 'spostrzegania', 'koordynacji motorycznej'] },
  { k: 'kli', q: 'FTD (frontotemporal dementia) to przykład:', ok: 'zaburzenia neuropoznawczego (otępienia czołowo-skroniowego)', zle: ['zaburzenia neurorozwojowego', 'afazji Broki', 'agnozji wzrokowej'] },
  { k: 'kli', q: 'Zaburzenia ogólnomózgowe wykład opisuje w kontekście:', ok: 'globalnych a wybiórczych zaburzeń świadomości w deficytach neuropsychologicznych', zle: ['wyłącznie zaburzeń mowy', 'wyłącznie zaburzeń ruchowych', 'zaburzeń jednego płata'] },
  { k: 'kli', q: 'Zaburzenia funkcji grafomotorycznych i koordynacji motoryki małej i dużej należą do zaburzeń:', ok: 'funkcji motorycznych', zle: ['funkcji wykonawczych', 'spostrzegania', 'pamięci'] }
], 'neuropsychologia');

NA.pojecia('neuropsychologia', 'NP1', [
  ['EEG', 'Elektroencefalografia: pomiar aktywności bioelektrycznej mózgu z elektrod na skórze głowy. Tania, nieinwazyjna, funkcjonalna.'],
  ['PET', 'Emisyjna tomografia pozytronowa: metoda radioizotopowa (medycyna nuklearna), rejestruje zmiany metabolizmu tkanki mózgowej; funkcjonalna, kosztowna.'],
  ['SPECT', 'Metoda radioizotopowa z użyciem kamery gamma i środka radioaktywnego.'],
  ['TK (CT)', 'Tomografia komputerowa: promieniowanie rentgenowskie, metoda strukturalna, ryzyko zdrowotne (u dzieci nowotwory); czułość zwiększa kontrast dożylny.'],
  ['MRI', 'Rezonans magnetyczny: nieinwazyjne badanie struktury mózgu w silnym polu elektromagnetycznym, bez kontrastu.'],
  ['fMRI', 'Funkcjonalny rezonans magnetyczny oparty na zjawisku BOLD.'],
  ['BOLD', 'Blood oxygenation level-dependent: sygnał zależny od poziomu utlenowania krwi, podstawa fMRI.'],
  ['MRS', 'Spektroskopia rezonansu magnetycznego: ocena składu chemicznego tkanki mózgowej, „okno na metabolizm tkanek”.'],
  ['USG przezciemiączkowe', 'Badanie strukturalne u noworodków i niemowląt z niezamkniętym ciemiączkiem, m.in. ocena układu komorowego (wodogłowie) i kory.'],
  ['Dualizm', 'Pełne rozgraniczenie ciała i psychiki jako dwóch rzeczywistości. Według wykładu nie istnieje.'],
  ['Psychomorfologizm', 'Pełne przyporządkowanie pojedynczych funkcji psychicznych pojedynczym strukturom mózgowym. Według wykładu nie istnieje.'],
  ['Podejście systemowe', 'Koncentracja na całokształcie aktywności umysłowej; funkcje złożone realizuje wiele wyspecjalizowanych obszarów.'],
  ['Agnozja', 'Zaburzenie spostrzegania (wzrokowego, słuchowego, dotykowego), m.in. po uszkodzeniu bocznych i tylnych obszarów mózgu.'],
  ['Apraksja', 'Zaburzenie dowolnych czynności ruchowych; m.in. pola 4 i 6, okolice ciemieniowe i styk skroniowo-ciemieniowo-potyliczny.'],
  ['Afazja', 'Zaburzenie mowy i komunikacji; ośrodek Broki (pola 44, 45), ośrodek Wernickego (pole 22).'],
  ['Zespół czołowy', 'Zaburzenia emocjonalne i osobowości po uszkodzeniu okolicy przedczołowej (pola 9, 10, 11, 12, 46, 47).'],
  ['FTD', 'Otępienie czołowo-skroniowe: zaburzenie neuropoznawcze.']
]);
