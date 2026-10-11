/* Ryciny schematyczne (rysunki własne, uproszczone).
   Element z atrybutem data-k można podświetlić, grupa z data-mirror="600"
   jest automatycznie odbijana względem linii pośrodkowej x = 300.
   Cele: [nazwa polska, nazwa łacińska, x, y, klucz data-k]. */
(function () {

  /* ================= ryciny na wolnych licencjach (obrazy w img/) ================= */
  NA.rycina('boczny-lynch', 'Mózgowie z boku (rycina anatomiczna)', '0 0 960 1144',
    '<image href="img/mozg-boczny.png" x="0" y="0" width="960" height="1144"/>',
    [
      ['Płat czołowy', 'lobus frontalis', 250, 230],
      ['Płat ciemieniowy', 'lobus parietalis', 680, 150],
      ['Płat skroniowy', 'lobus temporalis', 430, 520],
      ['Płat potyliczny', 'lobus occipitalis', 880, 420],
      ['Bruzda środkowa', 'sulcus centralis', 497, 205],
      ['Bruzda boczna', 'sulcus lateralis', 398, 380],
      ['Zakręt przedśrodkowy', 'gyrus precentralis', 452, 170],
      ['Zakręt zaśrodkowy', 'gyrus postcentralis', 512, 238],
      ['Zakręt skroniowy górny', 'gyrus temporalis superior', 450, 412],
      ['Biegun czołowy', 'polus frontalis', 14, 300],
      ['Biegun skroniowy', 'polus temporalis', 245, 548],
      ['Biegun potyliczny', 'polus occipitalis', 944, 405],
      ['Móżdżek', 'cerebellum', 720, 640],
      ['Pień mózgu', 'truncus encephali', 505, 665],
      ['Rdzeń kręgowy', 'medulla spinalis', 520, 1000]
    ],
    'Ryc.: Patrick J. Lynch, „Brain human lateral view”, Wikimedia Commons, CC BY 2.5 (dodano znaczniki)');

  /* ================= widok boczny: wspólna podstawa ================= */
  var OUT = 'M62 255 C55 170 130 80 260 62 C380 45 500 80 560 165 C590 210 598 262 578 292 C560 318 520 322 480 318 C430 340 360 362 290 365 C235 367 190 350 185 318 C183 300 195 285 215 275 C180 282 110 285 62 255 Z';
  var SC = 'M350 55 C340 110 345 150 325 190 C315 215 310 228 306 240';
  var SL = 'M215 275 C280 262 350 235 420 205';
  var TYL =
    '<path class="w" data-k="med" d="M368 345 C362 372 378 392 392 398 L398 468 L432 468 L428 392 C434 380 436 360 430 345 Z"/>' +
    '<path class="g2" data-k="cb" d="M405 335 C430 318 510 318 540 345 C562 372 540 402 490 405 C445 408 405 395 398 365 C396 352 398 342 405 335 Z"/>' +
    '<path class="ln dec" d="M410 350 C450 338 505 340 540 358 M404 366 C450 356 510 358 546 374 M412 384 C455 376 505 378 532 390"/>';
  var CLIP = '<defs><clipPath id="clipL"><path d="' + OUT + '"/></clipPath></defs>';

  NA.rycina('boczna-platy', 'Półkula mózgu z boku: płaty, bruzdy graniczne, bieguny', '30 30 590 450',
    CLIP + TYL +
    '<g clip-path="url(#clipL)">' +
    '<rect class="b nb" data-k="p" x="0" y="0" width="640" height="480"/>' +
    '<path class="b nb" data-k="o" d="M520 20 L482 318 L470 480 L640 480 L640 0 Z"/>' +
    '<path class="b nb" data-k="f" d="M350 0 L350 55 C340 110 345 150 325 190 C315 215 310 228 306 240 L299 252 L299 300 L0 300 L0 0 Z"/>' +
    '<path class="b nb" data-k="t" d="M215 275 C280 262 350 235 420 205 L496 208 L482 318 L470 480 L150 480 L150 300 Z"/>' +
    '</g>' +
    '<path class="ln dash" d="M508 113 L482 318 M420 205 L496 208"/>' +
    '<path class="ln" data-k="sc" d="' + SC + '"/>' +
    '<path class="ln" data-k="sl" d="' + SL + '"/>' +
    '<path class="ln" d="' + OUT + '"/>',
    [
      ['Płat czołowy', 'lobus frontalis', 180, 170, 'f'],
      ['Płat ciemieniowy', 'lobus parietalis', 430, 135, 'p'],
      ['Płat skroniowy', 'lobus temporalis', 340, 305, 't'],
      ['Płat potyliczny', 'lobus occipitalis', 540, 232, 'o'],
      ['Bruzda środkowa', 'sulcus centralis', 337, 150, 'sc'],
      ['Bruzda boczna', 'sulcus lateralis', 330, 243, 'sl'],
      ['Biegun czołowy', 'polus frontalis', 68, 248],
      ['Biegun skroniowy', 'polus temporalis', 192, 322],
      ['Biegun potyliczny', 'polus occipitalis', 584, 268],
      ['Móżdżek', 'cerebellum', 470, 368, 'cb']
    ]);

  NA.rycina('boczna-zakrety', 'Półkula mózgu z boku: zakręty', '30 30 590 450',
    CLIP + TYL +
    '<g clip-path="url(#clipL)">' +
    '<rect class="b nb" x="0" y="0" width="640" height="480"/>' +
    '<path class="b nb" data-k="pre" d="M312 30 L312 62 C302 112 307 150 288 190 C280 212 276 228 272 246 L299 252 L306 240 C310 228 315 215 325 190 C345 150 340 110 350 55 L350 30 Z"/>' +
    '<path class="b nb" data-k="post" d="M350 30 L350 55 C340 110 345 150 325 190 C315 215 310 228 306 240 L345 232 C348 222 353 214 363 192 C383 152 378 110 388 58 L388 30 Z"/>' +
    '</g>' +
    '<path class="ln" d="M312 62 C302 112 307 150 288 190 C280 212 276 228 272 244"/>' +
    '<path class="ln" d="M388 58 C378 110 383 152 363 192 C353 214 348 222 345 232"/>' +
    '<path class="ln" d="M300 120 C240 110 170 130 120 175 M285 195 C240 185 180 200 130 230"/>' +
    '<path class="ln" d="M225 305 C300 290 370 262 440 235 M250 340 C320 330 390 305 460 280"/>' +
    '<path class="ln" d="M372 150 C410 135 460 140 500 165"/>' +
    '<path class="ln dash" d="M508 113 L482 318"/>' +
    '<path class="ln" data-k="sc" d="' + SC + '"/>' +
    '<path class="ln" data-k="sl" d="' + SL + '"/>' +
    '<path class="ln" d="' + OUT + '"/>',
    [
      ['Bruzda środkowa', 'sulcus centralis', 337, 150, 'sc'],
      ['Zakręt przedśrodkowy', 'gyrus precentralis', 318, 150, 'pre'],
      ['Zakręt zaśrodkowy', 'gyrus postcentralis', 357, 150, 'post'],
      ['Bruzda boczna', 'sulcus lateralis', 330, 243, 'sl'],
      ['Zakręt czołowy górny', 'gyrus frontalis superior', 200, 100],
      ['Zakręt czołowy środkowy', 'gyrus frontalis medius', 200, 165],
      ['Zakręt czołowy dolny', 'gyrus frontalis inferior', 215, 236],
      ['Zakręt skroniowy górny', 'gyrus temporalis superior', 330, 263],
      ['Zakręt skroniowy środkowy', 'gyrus temporalis medius', 340, 303],
      ['Zakręt skroniowy dolny', 'gyrus temporalis inferior', 350, 343],
      ['Płacik ciemieniowy górny', 'lobulus parietalis superior', 440, 105],
      ['Zakręt nadbrzeżny', 'gyrus supramarginalis', 425, 185],
      ['Zakręt kątowy', 'gyrus angularis', 470, 220],
      ['Móżdżek', 'cerebellum', 470, 368, 'cb'],
      ['Rdzeń przedłużony', 'medulla oblongata', 414, 435, 'med']
    ]);

  /* ================= przekrój pośrodkowy ================= */
  var MED =
    '<path class="b" d="M60 250 C55 160 140 70 270 58 C400 46 520 85 568 175 C592 225 590 275 570 300 C545 322 500 318 462 300 C440 318 400 338 350 342 C310 345 280 335 268 318 C262 305 250 296 235 296 C170 300 100 292 60 250 Z"/>' +
    /* bruzdy powierzchni przyśrodkowej */
    '<path class="ln" d="M215 285 C150 270 130 215 150 170 C175 115 250 108 300 108 C360 108 410 120 440 150 L452 80"/>' +
    '<path class="ln" d="M348 108 L346 58 M410 66 L404 92"/>' +
    '<path class="ln" data-k="pos" d="M516 116 C500 160 472 205 440 236"/>' +
    '<path class="ln" data-k="cal" d="M575 268 C540 262 490 250 440 236 L416 246"/>' +
    /* międzymózgowie */
    '<path class="w" d="M370 224 C352 198 325 186 300 190 C275 194 258 212 256 240 L250 266 L240 318 C256 334 280 328 297 318 C315 292 345 266 372 258 Z"/>' +
    '<path class="w" data-k="sp" d="M325 181 L290 178 C245 178 205 186 198 208 C195 225 210 242 228 250 L250 266 L256 240 C258 212 275 194 300 190 L325 186 Z"/>' +
    '<path class="w" data-k="cc" d="M228 258 C200 258 168 240 168 205 C170 165 230 148 290 148 C345 148 392 160 408 192 C420 215 412 236 394 238 C378 240 370 226 368 212 C360 190 330 178 290 178 C245 178 205 186 198 208 C195 225 210 242 228 250 Z"/>' +
    '<path class="ln fx" data-k="fx" d="M370 224 C352 198 325 186 300 190 C275 194 258 212 256 240 C255 262 270 290 288 305"/>' +
    '<ellipse class="g" data-k="th" cx="320" cy="235" rx="48" ry="30"/>' +
    '<circle class="g2" data-k="ad" cx="318" cy="237" r="7"/>' +
    '<circle class="w" data-k="ac" cx="250" cy="272" r="5.5"/>' +
    '<path class="ln" data-k="lt" d="M249 278 L240 316"/>' +
    '<path class="ln" data-k="tc" d="M247 325 C258 333 276 329 284 319"/>' +
    '<ellipse class="w" data-k="ch" cx="238" cy="322" rx="9" ry="5.5"/>' +
    '<path class="ln" data-k="inf" d="M264 328 L255 348"/>' +
    '<ellipse class="g" data-k="hy" cx="250" cy="358" rx="13" ry="9"/>' +
    '<circle class="w" data-k="mb" cx="290" cy="312" r="7"/>' +
    '<ellipse class="g" data-k="pi" cx="386" cy="256" rx="9" ry="5.5" transform="rotate(20 386 256)"/>' +
    /* móżdżek i pień mózgu */
    '<path class="g2" data-k="cb" d="M415 325 C440 300 520 305 545 345 C565 385 530 430 480 432 C440 434 405 415 395 395 C410 380 428 360 425 350 C420 340 415 332 415 325 Z"/>' +
    '<path class="ln dec" d="M428 362 C450 365 470 368 500 372 M455 366 L470 335 M465 368 L502 346 M470 369 L520 396 M460 368 L470 410 M445 365 L440 402"/>' +
    '<path class="w" data-k="mid" d="M297 318 C300 326 302 332 305 337 L392 318 C404 312 408 300 402 293 C404 282 398 270 388 270 C380 262 370 262 362 262 C340 268 315 290 297 318 Z"/>' +
    '<path class="w" data-k="pons" d="M305 337 C284 348 282 396 316 403 L378 398 C374 375 378 345 392 318 Z"/>' +
    '<path class="w" data-k="med" d="M316 403 C328 418 336 440 340 480 L388 480 C384 440 378 415 378 398 Z"/>' +
    '<ellipse class="g" data-k="cs" cx="396" cy="277" rx="9" ry="10"/>' +
    '<ellipse class="g" data-k="ci" cx="402" cy="298" rx="8" ry="9"/>' +
    '<path class="ln aq" data-k="aq" d="M356 266 C372 282 384 300 391 318"/>' +
    '<path class="v" data-k="v4" d="M392 318 L425 350 L395 396 L378 398 C374 375 378 345 392 318 Z"/>';

  NA.rycina('posrodkowy', 'Przekrój pośrodkowy: powierzchnia przyśrodkowa półkuli', '35 35 580 455', MED,
    [
      ['Zakręt obręczy', 'gyrus cinguli', 290, 128],
      ['Kolano ciała modzelowatego', 'genu corporis callosi', 183, 205, 'cc'],
      ['Pień ciała modzelowatego', 'truncus corporis callosi', 290, 163, 'cc'],
      ['Płat ciała modzelowatego', 'splenium corporis callosi', 392, 214, 'cc'],
      ['Dziób ciała modzelowatego', 'rostrum corporis callosi', 212, 249, 'cc'],
      ['Przegroda przezroczysta', 'septum pellucidum', 225, 212, 'sp'],
      ['Sklepienie', 'fornix', 262, 215, 'fx'],
      ['Wzgórze', 'thalamus', 345, 238, 'th'],
      ['Zakręt czołowy przyśrodkowy', 'gyrus frontalis medialis', 112, 180],
      ['Płacik okołośrodkowy', 'lobulus paracentralis', 378, 90],
      ['Przedklinek', 'precuneus', 470, 140],
      ['Klinek', 'cuneus', 530, 215],
      ['Bruzda ciemieniowo-potyliczna', 'sulcus parietooccipitalis', 484, 181, 'pos'],
      ['Bruzda ostrogowa', 'sulcus calcarinus', 513, 255, 'cal'],
      ['Zakręt językowaty', 'gyrus lingualis', 505, 286],
      ['Most', 'pons', 322, 370, 'pons'],
      ['Rdzeń przedłużony', 'medulla oblongata', 358, 445, 'med'],
      ['Robak móżdżku', 'vermis cerebelli', 485, 385, 'cb']
    ]);

  NA.rycina('posrodkowy-zblizenie', 'Przekrój pośrodkowy w zbliżeniu: międzymózgowie i pień mózgu', '160 135 300 350', MED,
    [
      ['Sklepienie', 'fornix', 262, 215, 'fx'],
      ['Przegroda przezroczysta', 'septum pellucidum', 228, 215, 'sp'],
      ['Wzgórze', 'thalamus', 348, 236, 'th'],
      ['Zrost międzywzgórzowy', 'adhaesio interthalamica', 318, 237, 'ad'],
      ['Spoidło przednie', 'commisura anterior', 250, 272, 'ac'],
      ['Blaszka krańcowa', 'lamina terminalis', 245, 297, 'lt'],
      ['Skrzyżowanie wzrokowe', 'chiasma opticum', 238, 322, 'ch'],
      ['Guz popielaty', 'tuber cinereum', 267, 329, 'tc'],
      ['Lejek', 'infundibulum', 259, 339, 'inf'],
      ['Przysadka', 'hypophysis', 250, 358, 'hy'],
      ['Ciało suteczkowate', 'corpus mamillare', 290, 312, 'mb'],
      ['Szyszynka', 'corpus pineale', 386, 256, 'pi'],
      ['Wzgórki górne', 'colliculi superiores', 396, 277, 'cs'],
      ['Wzgórki dolne', 'colliculi inferiores', 402, 298, 'ci'],
      ['Wodociąg mózgu', 'aqueductus cerebri', 373, 284, 'aq'],
      ['Konary mózgu', 'pedunculi cerebri', 328, 310, 'mid'],
      ['Komora czwarta', 'ventriculus quartus', 398, 356, 'v4'],
      ['Most', 'pons', 322, 370, 'pons'],
      ['Rdzeń przedłużony', 'medulla oblongata', 358, 445, 'med'],
      ['Płat ciała modzelowatego', 'splenium corporis callosi', 392, 214, 'cc'],
      ['Robak móżdżku', 'vermis cerebelli', 438, 392, 'cb']
    ]);

  /* ================= powierzchnia podstawna ================= */
  NA.rycina('podstawa', 'Podstawa mózgowia (biegun czołowy u góry)', '55 25 490 595',
    '<g data-mirror="600">' +
    '<path class="b" d="M300 40 C230 35 150 70 122 150 C105 205 110 250 135 272 C95 290 72 360 85 440 C98 520 180 600 300 605 Z"/>' +
    '<path class="ln" d="M135 272 C170 268 200 268 228 276"/>' +
    '<path class="ln dec" d="M180 130 L185 225 M225 125 L222 232 M183 178 L223 178 M150 330 C140 380 145 420 165 450"/>' +
    '<path class="ln" d="M222 305 C204 350 205 400 222 435"/>' +
    '<path class="g2" data-k="cb" d="M245 432 C185 420 130 458 135 520 C140 578 222 602 288 588 C292 560 284 490 266 452 Z"/>' +
    '<path class="ln dec" d="M150 500 C190 470 235 465 262 478 M145 535 C190 505 245 500 275 512 M165 565 C205 545 250 540 282 548"/>' +
    '<ellipse class="w" data-k="ob" cx="275" cy="118" rx="8" ry="22"/>' +
    '<path class="w" data-k="to" d="M271 138 L279 138 C278 185 274 230 268 258 L256 262 C262 235 268 185 271 138 Z"/>' +
    '<ellipse class="g aps" data-k="aps" cx="247" cy="290" rx="14" ry="9"/>' +
    '</g>' +
    '<path class="ln" data-k="fl" d="M300 40 L300 264"/>' +
    '<path class="w" data-k="med" d="M268 450 C272 500 282 540 286 568 L314 568 C318 540 328 500 332 450 Z"/>' +
    '<path class="ln dec" d="M300 455 L300 568"/>' +
    '<g data-mirror="600">' +
    '<path class="w" data-k="pc" d="M296 366 L268 366 L248 340 L262 328 L296 348 Z"/>' +
    '</g>' +
    '<ellipse class="w" data-k="pons" cx="300" cy="410" rx="62" ry="45"/>' +
    '<path class="ln" data-k="sb" d="M300 368 L300 452"/>' +
    '<g data-mirror="600">' +
    '<ellipse class="g" data-k="ol" cx="279" cy="492" rx="6" ry="17"/>' +
    '<path class="w" data-k="n5" d="M242 398 L222 388 L218 398 L240 410 Z"/>' +
    '<path class="w" data-k="on" d="M272 258 L284 254 L303 286 L297 296 Z"/>' +
    '<path class="w" data-k="ot" d="M290 294 L297 300 C285 318 270 332 252 340 L246 332 C264 324 280 310 290 294 Z"/>' +
    '<circle class="w" data-k="mb" cx="291" cy="330" r="7"/>' +
    '</g>' +
    '<ellipse class="w" data-k="ch" cx="300" cy="292" rx="12" ry="7"/>' +
    '<circle class="g" data-k="inf" cx="300" cy="310" r="5"/>',
    [
      ['Szczelina podłużna mózgu', 'fissura longitudinalis cerebri', 300, 85, 'fl'],
      ['Opuszka węchowa', 'bulbus olfactorius', 275, 118, 'ob'],
      ['Pasmo węchowe', 'tractus olfactorius', 269, 222, 'to'],
      ['Zakręt prosty', 'gyrus rectus', 290, 170],
      ['Zakręty oczodołowe', 'gyri orbitales', 203, 200],
      ['Nerw wzrokowy', 'nervus opticus', 284, 268, 'on'],
      ['Skrzyżowanie wzrokowe', 'chiasma opticum', 300, 292, 'ch'],
      ['Pasmo wzrokowe', 'tractus opticus', 268, 322, 'ot'],
      ['Istota dziurkowana przednia', 'substantia perforata anterior', 247, 290, 'aps'],
      ['Lejek', 'infundibulum', 300, 310, 'inf'],
      ['Ciała suteczkowate', 'corpora mammilaria', 291, 330, 'mb'],
      ['Konary mózgu', 'pedunculi cerebri', 270, 351, 'pc'],
      ['Most', 'pons', 268, 418, 'pons'],
      ['Bruzda podstawna', 'sulcus basilaris', 300, 405, 'sb'],
      ['Nerw trójdzielny', 'nervus trigeminalis', 229, 398, 'n5'],
      ['Oliwka', 'oliva', 279, 492, 'ol'],
      ['Rdzeń przedłużony', 'medulla oblongata', 300, 540, 'med'],
      ['Móżdżek', 'cerebellum', 195, 525, 'cb'],
      ['Zakręt przyhipokampowy', 'gyrus parahippocampalis', 228, 356],
      ['Biegun skroniowy', 'polus temporalis', 140, 300]
    ]);

  /* ================= przekrój czołowy ================= */
  NA.rycina('czolowy', 'Przekrój czołowy przez wzgórze i jądra podstawne (schemat)', '60 30 480 490',
    '<g data-mirror="600">' +
    '<path class="b" d="M300 50 C235 42 135 70 98 165 C80 215 82 300 100 350 C120 425 185 472 235 462 C258 456 266 430 262 400 C260 385 252 372 256 360 L266 350 L300 350 Z"/>' +
    '<path class="w nb" d="M286 150 L286 92 C240 76 160 98 126 176 C110 222 112 300 128 342 C146 402 190 442 230 438 C244 434 248 416 244 396 C242 380 240 368 246 352 L300 345 L300 150 Z"/>' +
    '<path class="w nb" d="M300 296 L270 300 L264 350 L272 505 L300 505 Z"/>' +
    '<rect class="b nb" x="100" y="246" width="52" height="10"/><rect class="b nb" x="100" y="270" width="52" height="10"/>' +
    '<rect class="b nb" data-k="ins" x="156" y="214" width="9" height="98"/>' +
    '<path class="v nb" data-k="sl" d="M78 258 L150 256 L150 214 L156 214 L156 312 L150 312 L150 268 L80 270 Z"/>' +
    '<path class="ln cla" data-k="cl" d="M172 218 C167 248 167 280 173 308"/>' +
    '<path class="g" data-k="pu" d="M182 214 C173 240 173 284 184 310 L202 296 L202 226 Z"/>' +
    '<path class="g2" data-k="gp" d="M205 228 L205 294 L226 268 L226 252 Z"/>' +
    '<path class="w" data-k="cc" d="M300 148 C262 148 222 152 190 166 L194 180 C226 166 264 164 300 164 Z"/>' +
    '<path class="v" data-k="lv" d="M296 167 C262 166 230 170 207 183 L238 207 C255 214 280 212 296 205 Z"/>' +
    '<ellipse class="g" data-k="cn" cx="222" cy="196" rx="15" ry="11"/>' +
    '<ellipse class="g" data-k="th" cx="266" cy="258" rx="29" ry="38"/>' +
    '<ellipse class="g" data-k="stn" cx="254" cy="306" rx="12" ry="5" transform="rotate(-20 254 306)"/>' +
    '<ellipse class="dk" data-k="sn" cx="266" cy="328" rx="17" ry="5.5" transform="rotate(-25 266 328)"/>' +
    '<ellipse class="w" data-k="fx" cx="290" cy="210" rx="9" ry="5.5"/>' +
    '<path class="ln vln" d="M226 392 C232 384 246 384 252 390"/>' +
    '<ellipse class="g" data-k="hip" cx="240" cy="404" rx="15" ry="10"/>' +
    '</g>' +
    '<path class="ln" data-k="fl" d="M300 50 L300 148"/>' +
    '<path class="ln sep" data-k="sp" d="M300 164 L300 205"/>' +
    '<rect class="v" data-k="v3" x="296.5" y="216" width="7" height="104" rx="3"/>' +
    '<rect class="g2" data-k="ad" x="294" y="250" width="12" height="12" rx="2"/>',
    [
      ['Szczelina podłużna mózgu', 'fissura longitudinalis cerebri', 300, 100, 'fl'],
      ['Ciało modzelowate', 'corpus callosum', 250, 158, 'cc'],
      ['Przegroda przezroczysta', 'septum pellucidum', 300, 184, 'sp'],
      ['Komora boczna', 'ventriculus lateralis', 266, 188, 'lv'],
      ['Sklepienie', 'fornix', 290, 210, 'fx'],
      ['Jądro ogoniaste', 'nucleus caudatus', 222, 196, 'cn'],
      ['Wzgórze', 'thalamus', 266, 262, 'th'],
      ['Zrost międzywzgórzowy', 'adhaesio interthalamica', 300, 256, 'ad'],
      ['Komora trzecia', 'ventriculus tertius', 300, 300, 'v3'],
      ['Torebka wewnętrzna', 'capsula interna', 229, 236],
      ['Skorupa', 'putamen', 190, 262, 'pu'],
      ['Gałka blada', 'globus pallidus', 214, 262, 'gp'],
      ['Przedmurze', 'claustrum', 168, 250, 'cl'],
      ['Wyspa', 'insula', 160, 292, 'ins'],
      ['Bruzda boczna', 'sulcus lateralis', 118, 263, 'sl'],
      ['Jądro niskowzgórzowe', 'nucleus subthalamicus', 254, 306, 'stn'],
      ['Istota czarna', 'substantia nigra', 266, 328, 'sn'],
      ['Hipokamp', 'hippocampus', 240, 404, 'hip']
    ]);

  /* ================= koło tętnicze ================= */
  NA.rycina('tetnice', 'Koło tętnicze mózgu (schemat, przód u góry)', '55 30 490 540',
    '<g data-mirror="600">' +
    '<path class="ves" data-k="vert" d="M272 548 C275 505 290 468 300 440"/>' +
    '<path class="ves" data-k="pca" d="M300 300 C260 292 215 285 190 300 C165 315 140 335 118 345"/>' +
    '<path class="ves thin" data-k="pcom" d="M232 290 L226 224"/>' +
    '<path class="ves" data-k="mca" d="M225 215 C180 205 130 205 85 195"/>' +
    '<path class="ves" data-k="aca" d="M225 215 C250 195 275 180 286 160 L286 62"/>' +
    '<circle class="ici" data-k="ica" cx="225" cy="215" r="12"/>' +
    '</g>' +
    '<path class="ves" data-k="bas" d="M300 440 L300 300"/>' +
    '<path class="ves thin" data-k="acom" d="M286 160 L314 160"/>',
    [
      ['Tętnica szyjna wewnętrzna', 'arteria carotis interna', 225, 215, 'ica'],
      ['Tętnica kręgowa', 'arteria vertebralis', 281, 500, 'vert'],
      ['Tętnica podstawna', 'arteria basilaris', 300, 370, 'bas'],
      ['Tętnica przednia mózgu', 'arteria cerebri anterior', 286, 100, 'aca'],
      ['Tętnica środkowa mózgu', 'arteria cerebri media', 150, 205, 'mca'],
      ['Tętnica tylna mózgu', 'arteria cerebri posterior', 165, 316, 'pca'],
      ['Tętnica łącząca przednia', 'arteria communicans anterior', 300, 160, 'acom'],
      ['Tętnica łącząca tylna', 'arteria communicans posterior', 229, 256, 'pcom']
    ]);
})();
