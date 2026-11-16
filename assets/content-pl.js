/* Mini_Training_3_Lesson_Organization - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pl';
const CONTENT = {
  flag:'🇵🇱', dir:'ltr',
  ui:{
    heroCard1:"<b>W swoim tempie.</b> Twój postęp zapisuje się w tej przeglądarce.",
    heroCard2:"<b>Z ćwiczeniem praktycznym.</b> Każdy moduł kończy się krótkim sprawdzianem.",
    pbLabel:'ukończonych modułów',
    tapOpen:'Kliknij, aby otworzyć',
    tapFlip:'Kliknij, aby odwrócić',
    lblSee:'Co widzisz',
    lblDo:'Co robisz',
    lblSay:'Co możesz powiedzieć',
    lblReport:'Gdzie zgłosić',
    lblAvoid:'Unikaj',
    lblTip:'Wskazówka',
    stepOf:'Krok {i} z {n}',
    next:'Dalej',
    pageTitle:"Miniszkolenie · Organizacja lekcji i dyscyplina — szkolenie nauczycieli Kodland",
    logoSub:'Dział Rozwoju Nauczycieli',
    heroEyebrow:"🎯 Miniszkolenie",
    heroTitle:"Jak prowadzić <span class=\"h-pill\">dobrze zorganizowaną</span> lekcję",
    heroIntro:"Otrzymujesz to szkolenie, ponieważ masz uczniów, którzy poprosili o zwrot pieniędzy z powodu złej organizacji lub problemów z dyscypliną na zajęciach. Pokażemy ci, co możesz zrobić jako nauczyciel i jak radzić sobie w takich sytuacjach.",
    heroWork:"Ukończ 5 krótkich modułów. Aby odblokować kolejny moduł, musisz uzyskać co najmniej 70% w teście danego modułu. Łączny czas: około 30–35 minut.",
    startBtn:"🚀 Rozpocznij szkolenie",
    pathLabel:'Twoja ścieżka nauki',
    devTitle:'Dev: odblokuj wszystkie moduły do przeglądu',
    backToPath:'Powrót do ścieżki',
    modulesPassed:'Zaliczone moduły: {done} / {total}',
    moduleN:'Moduł {n}',
    of:'z',
    locked:'🔒 Zablokowany',
    passedBadge:'✅ Zaliczony · {pct}%',
    reviewedBadge:'✅ Przejrzany',
    startBadge:'▶ Rozpocznij',
    reviewBadge:'▶ Przejrzyj',
    objective:'Cel',
    startCheck:'▶ Rozpocznij sprawdzian modułu',
    finishBtn:'▶ Ukończ miniszkolenie',
    doneBack:'✓ Gotowe — powrót do ścieżki',
    ixBadge:'📋 Sprawdzian modułu — 70%, aby odblokować kolejny moduł',
    ixItemBadge:'📋 Sprawdzian modułu — pytanie {i} z {n}',
    scoreSoFar:'Dotychczasowy wynik: {c} / {t}',
    continue:'Dalej →',
    sortWrong:'Nie do końca — poprawna odpowiedź to „{label}”.',
    resPassed:'Moduł zaliczony!',
    resFailed:'Jeszcze nie tym razem',
    resUnlocked:"Udało ci się odblokować kolejny moduł.",
    resDone:"Udało ci się ukończyć to miniszkolenie.",
    resNeed:'Aby odblokować kolejny moduł, potrzebujesz 70%. Przejrzyj powyższą część i spróbuj ponownie.',
    resContinue:'Przejdź do ścieżki nauki',
    resFinish:'Dalej',
    resBack:'Powrót do ścieżki',
    resReview:'Przejrzyj ten moduł',
    doneEyebrow:'Miniszkolenie ukończone',
    doneTitle:'🎉 Gratulacje!',
    doneP1:"🎉 <strong>Gratulacje! Udało ci się ukończyć to miniszkolenie.</strong>",
    doneP2:"To już wszystko! Wróć na stronę szkolenia w LMS, która przekierowała cię do tego miniszkolenia, aby zamknąć zadanie.",
    doneP3:"👉 <strong>Jeśli bezpośrednio pod szkoleniem w LMS widnieje sprawdzian lub test, rozwiąż go i uzyskaj wynik zaliczający</strong> — w przeciwnym razie zadanie może pozostać nieukończone.",
    doneP4:'Powodzenia! ❤️',
    doneP5:'',
    devUnlockAlert:'Tryb deweloperski: wszystkie moduły zostały odblokowane do przeglądu.',
    devOn:'🔓 Tryb deweloperski WŁ. — wszystkie moduły odblokowane',
    devOff:'🔒 Tryb deweloperski WYŁ. — postęp wyczyszczony',
    devBadge:'🔓 TRYB DEWELOPERSKI',
    doLabel:'✅ Do potwierdzenia',
    avoidLabel:'🚫 Unikaj',
    noticeLabel:'Zwróć uwagę:',
    cvSee:'Co widzisz:',
    cvDo:'Co robisz:',
    dtExample:'Przykład z prawdziwych zajęć',
    dtNext:'Następnie:',
    dtDone:"✅ To już wszystkie cztery obszary. Teraz sklasyfikuj to, co widzisz.",
    tlVideoTitle:'{label} — przykład z prawdziwych zajęć',
    tlVideoMeta:'Zobacz, jak ten etap wygląda na prawdziwej lekcji'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Wprowadzenie', emoji:'🧩', color:'var(--coral)',
 title:'Dlaczego tu jesteś',
 desc:'Dlaczego zła organizacja lekcji i dyscyplina to problem, który możesz szybko naprawić, oraz jakie zasady obowiązują, gdy wniosek o zwrot już się pojawił.',
 obj:'Zrozumieć, dlaczego zła organizacja lekcji i dyscyplina to problemy bezpośrednio związane z tym, jak prowadzisz zajęcia, i co dokładnie robić (a czego nie robić), gdy wniosek o zwrot już się pojawił.',
 sections:[
  {t:'🧩 Dwie skrajności, jedna przyczyna', html:`
   <div class="card"><p>Pod ten rodzaj problemu trafiają dwie zupełnie różnie wyglądające sytuacje: taka, w której na lekcji panuje chaos, i taka, w której w grupie panuje cisza. Przyczyna obu jest bardzo podobna: czy każde dziecko czuje, że lekcja jest bezpiecznym, uporządkowanym miejscem, w którym może się rozwijać?</p></div>
   ${co('co-idea','🎯',`<p><strong>Problemy z tej listy, które bezpośrednio dotyczą zachowania nauczyciela, to takie, które możesz naprawić najszybciej.</strong> W przeciwieństwie do poziomu kursu czy specjalnych potrzeb to są rzeczy, które możesz zmienić już na swojej następnej lekcji, bez potrzeby czyjegokolwiek zatwierdzenia.</p>`)}
  `},
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   <div class="card"><p>Wszystko powyżej dotyczy wczesnego wychwytywania problemu. Możliwe jednak, że otwierasz to szkolenie, bo rodzina <strong>już</strong> poprosiła o zwrot pieniędzy. Zasady, które znajdziesz poniżej, obowiązują bez względu na okoliczności — zacznij od ich przeczytania, a potem wykorzystaj resztę szkolenia, aby zrozumieć, co do tego doprowadziło i co wciąż możesz zrobić na swoich lekcjach.</p></div>
   ${co('co-idea','💡',`<p><strong>Sam wniosek tworzy Dział Obsługi Klienta, nie ty</strong> — na tę część nie masz wpływu. Do ciebie wciąż należy wszystko, co od teraz dzieje się na lekcji, a to naprawdę sporo.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Nie mów nic o samym wniosku</strong> — ani dziecku, ani rodzinie — chyba że Dział Obsługi Klienta wyraźnie poprosi cię o przekazanie czegoś konkretnego. Twoim zadaniem jest teraz dostosowanie lekcji, a nie rozmowa z klientami.</p>`)}
  `},
  {t:'🎯 Następna lekcja to twoja szansa na pomoc dziecku', html:`
   <div class="card"><p>Możesz nie mieć okazji, by zmienić cokolwiek innego. Potraktuj najbliższą lekcję z tym dzieckiem jako moment, który o wszystkim zdecyduje.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Daj dziecku prawdziwą okazję do działania.</strong> Nie pytanie dla zasady — stwórz autentyczny moment, w którym zostaje zauważone i odnosi sukces.`},
     {ic:'🏆', html:`<strong>Zaplanuj wczesny, widoczny sukces.</strong> Dziecko powinno wyjść z lekcji z poczuciem, że daje radę, a nie że zostaje w tyle.`},
     {ic:'👀', html:`<strong>Konkretna uwaga</strong> — niech dziecko poczuje, że widzisz, w jego pracy, coś konkretnego, a nie tylko chwalisz ogólnikowo.`},
     {ic:'🤐', html:`<strong>Ani słowa o wniosku</strong> — nawet jeśli dziecko samo o nim wspomni, ciepło zmień temat i ucz dalej.`}
   ])}
  `},
  {t:'📮 Zgłaszaj szybko i znaj jedno bezpieczne zdanie', html:`
   <div class="card"><p>O tym, że wniosek istnieje, możesz dowiedzieć się z komentarzy Działu Obsługi Klienta w profilu dziecka w BO — nie ma automatycznego systemu, który by cię o tym powiadomił. Gdy dowiesz się o sytuacji, pamiętaj, że to, co widzisz na swoich lekcjach, jest dla Działu Obsługi Klienta bardzo ważną informacją, której nie mogą zdobyć w żaden inny sposób.</p></div>
   ${numlist([
     'Tego samego dnia zostaw komentarz w BO z dokładnym opisem swoich obserwacji. Umieść tam daty i konkrety, a nie wrażenia',
     'Jeśli je znasz, zacytuj dosłownie słowa rodziny',
     'Tego samego dnia poinformuj swojego lidera zespołu',
     'Nigdy nie potwierdzaj, że zwrot został zatwierdzony, i nie rozmawiaj o żadnych kwotach'
   ])}
   ${co('co-ok','✅',`<p><strong>Zdanie, które zawsze możesz powiedzieć:</strong> <em>„Dział Obsługi Klienta zajmuje się tą sprawą”.</em> Na tym kończy się twoja część rozmowy — dalej przejmuje ją Dział Obsługi Klienta.</p>`)}
  `},
  {t:'🌱 Nie odpuszczaj później', html:`
   <div class="card"><p>Niezależnie od tego, czy wniosek zostanie wycofany, dziecko zostanie w twojej grupie, czy przejdzie do innego nauczyciela lub formatu — przez kilka kolejnych lekcji poświęcaj mu szczególną uwagę. Pomoc, która jest oferowana przez jedną lekcję, a potem wszystko po cichu wraca do normy, często w ogóle nie daje skutku.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Moduł 1', emoji:'⚖️', color:'var(--coral)',
 title:'Dyscyplina i elastyczność',
 desc:'Dwie skrajności, z którymi nauczyciele mierzą się na zajęciach online, dopasowane do wieku sposoby radzenia sobie z każdą z nich i jak dostosować zadanie, nie tracąc celu nauki.',
 obj:'Nauczyć się rozpoznawania dwóch skrajnych wzorców: zbyt dużego hałasu albo milczącej klasy, nauczyć się jakich technik, zaadaptowanych do wieku i wiedzy uczniów, należy stosować wobec każdego z nich, a także dowiedzieć się kiedy dostosować zadanie, zamiast walczyć o kontrolę nad nim.',
 sections:[
  {t:'📢 Pierwsza skrajność: za dużo hałasu', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T3/image1.png" alt="Dziecko zatykające uszy w hałaśliwym pokoju" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Uczniowie przekrzykują się na niezwiązane tematy, używają niestosownego języka, nie szanują kolegów. Jeśli nic z tym nie zrobisz, uczniowie powoli uczą się, że wszystko im wolno.</p></div>
   <div class="card"><h4>Młodsze dzieci (6–8)</h4><ul>
     <li>Zamień zasadę w grę: „głośność głosu” jako pokrętło, na które możesz wskazać, a nie reprymenda</li>
     <li>Przekierowuj zadaniem, nie poleceniem: „pokaż mi swój ekran i zbudujmy to razem” działa lepiej niż „przestań gadać”</li>
     <li>Chwal zachowanie, które chcesz widzieć — od razu i konkretnie, w chwili gdy się pojawia</li>
   </ul></div>
   <div class="card"><h4>Starsi uczniowie (12+)</h4><ul>
     <li>Nazwij to bezpośrednio i krótko, najlepiej w rozmowie jeden na jeden: „trzymajmy czat na temat, żeby wszyscy mogli nadążyć”</li>
     <li>Daj im rolę, która ukierunkuje energię — prowadzenie kroku, pomoc koledze</li>
     <li>Raz, spokojnie określ oczekiwania i konsekwentnie ich pilnuj, zamiast powtarzać ostrzeżenia</li>
   </ul></div>
  `},
  {t:'🤫 Druga skrajność: milcząca klasa', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T3/image2.png" alt="Nieśmiałe dziecko chowające się za rękami" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Uczniowie, którzy nie mówią i nie chcą włączyć kamery. To częste u starszych dzieci i nastolatków — zwykle z powodu nieśmiałości lub niskiej samooceny, choć może to być też oznaka braku zainteresowania, więc obserwuj sytuację dalej.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Uprzejmie poproś o włączenie kamerki'},
     {ic:'2️⃣', label:'Jeśli to nie działa, spróbuj innych sposobów, by uczeń poczuł się bezpiecznie'},
     {ic:'3️⃣', label:'Poznaj ucznia, jego zainteresowania to twoja droga, by do niego dotrzeć'},
     {ic:'4️⃣', label:'Wciąż nic? Spróbuj prywatnego udziału, zawsze ze zdaniem, które sygnalizuje, że to bezpieczna przestrzeń'}
   ])}
   ${co('co-idea','💡',`<p><strong>Konkretny pomysł:</strong> pozwól uczniowi zostać z wyłączoną kamerą, ale ustawić w tle coś, co lubi — albo, na kursie projektowania lub plastyki, zaproś go, by narysował coś, co go reprezentuje (niekoniecznie dosłownie jego samego), i ustawił to jako tło. Zaproś całą grupę do tego samego, żeby było to wspólne, a nie wyróżniało jednej osoby.</p>`)}
   <div class="card"><h4>Przykładowe zdania według wieku</h4>
   <p><strong>Młodsi (6–8):</strong> <em>„Nie musisz pokazywać twarzy, jeśli nie chcesz — ale bardzo chętnie zobaczę, jakie tło wybierasz! Opowiesz mi o nim?”</em></p>
   <p><strong>Starsi (12+):</strong> <em>„Bez presji z kamerką, włączysz ją, kiedy zechcesz. W międzyczasie śmiało pisz na czacie, jeśli tak jest łatwiej.”</em></p></div>
  `},
  {t:'🎨 Gdy rozproszenie oznacza, że to zadanie musi się zmienić', html:`
   <div class="card"><p>Czasem „brak dyscypliny” to tak naprawdę uczeń, który się wyłącza, bo samo ćwiczenie do niego nie trafia — nie chce robić tego, o co go poproszono, albo ciągle odpływa myślami.</p></div>
   ${co('co-ok','✅',`<p><strong>Dostosuj je, nie tracąc celu.</strong> Jeśli dzisiejszym celem jest nauka animacji, a uczeń nie chce iść za historią z planu lekcji, pozwól mu animować dowolną postać, obiekt lub zwierzę, które go motywuje. Przykład: celem jest nauka techniki animacji pixel art — uczeń może animować dowolny wybrany obiekt, o ile nadal ćwiczy tę technikę.</p>`)}
  `},
  {t:'👪 Komunikacja z rodziną i zasady klasy', html:`
   ${co('co-idea','📮',`<p><strong>Zgłaszaj przypadki braku dyscypliny, uporczywego milczenia lub silnego rozproszenia</strong>, aby budować pełniejszy obraz ucznia — i dlatego, że rodzice, gdy już o tym wiedzą, często mogą pomóc z zachowaniem w domu.</p>`)}
   ${co('co-star','📜',`<p><strong>Ustal zasady klasy od pierwszej lekcji</strong> i sprawdź, czy uczniowie je rozumieją i się na nie zgadzają — zamiast raz je ogłosić i zakładać, że dotarły.</p>`)}
   <img class="mt-pic" src="Pictures_T3/rules.png" alt="Przykładowy slajd: zasady zachowania na lekcji">
  `}
 ],
 ix:{
  title:'Dyscyplina i elastyczność — sprawdzian modułu',
  instr:'70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:'Młodszy uczeń (6–8 lat) ciągle mówi podczas lekcji o rzeczach niezwiązanych z tematem. Jaka byłaby twoja pierwsza reakcja?', opts:['Jasne polecenie, by przestał mówić, powtarzane, dopóki nie posłucha','Przeczekanie — zwykle samo mija','Przekierowanie go do zadania i pochwalenie pożądanego zachowania, gdy tylko się pojawi'], correct:2, fb:'W przypadku młodszych dzieci przekierowanie do zadania — i wychwycenie dobrego zachowania w chwili, gdy się pojawia — działa lepiej niż suche polecenie.'},
   {type:'choice', prompt:'Uczeń odmawia wykonania dzisiejszego ćwiczenia fabularnego, ale chętnie animowałby coś innego. Co należy zrobić?', opts:['Pozwolić mu animować to, co go motywuje, o ile nadal ćwiczy nauczaną umiejętność','Nalegać na ćwiczenie dokładnie w tej formie, żeby grupa pracowała równo','Pominąć to zadanie w przypadku tego ucznia i iść dalej'], correct:0, fb:'Elastyczność co do treści, bez utraty celu nauki, sprawia, że uczeń pozostaje zaangażowany i nadal się uczy.'},
   {type:'choice', prompt:'Kiedy należy ustalić zasady klasy?', opts:['Dopiero gdy pojawi się problem, żeby wydawały się adekwatne','Od pierwszej lekcji — sprawdzając, czy uczniowie je rozumieją i się na nie zgadzają','Raz w miesiącu, jako przypomnienie dla całej grupy'], correct:1, fb:'Zasady ustalone i potwierdzone od pierwszej lekcji zapobiegają większości sytuacji opisanych w tym module.'},
   {type:'choice', prompt:'Dlaczego warto zgłaszać rodzinie przypadki uporczywego milczenia lub rozproszenia?', opts:['Bo nauczyciele nie mogą samodzielnie radzić sobie z zachowaniem uczniów','Tylko wtedy, gdy zaczyna to wpływać na oceny ucznia','Buduje to pełniejszy obraz ucznia, a rodzice często mogą pomóc w domu'], correct:2, fb:'Zgłaszanie nie polega na szukaniu winnych — daje rodzicom wgląd, na podstawie którego też mogą działać.'}
  ]
 }
},
{id:'selfreg', numLabel:'Moduł 2', emoji:'🧘', color:'var(--coral)',
 title:'Samoregulacja i koregulacja',
 desc:'Jak twoja własna reakcja emocjonalna, jako osoby dorosłej w klasie, kształtuje zachowanie każdego ucznia, oraz ćwiczenia z najczęstszymi trudnymi momentami.',
 obj:'Zrozumieć samoregulację i koregulację, nauczyć się ich stosowania do własnych reakcji przy braku dyscypliny, agresji, rozproszeniu i milczeniu i przećwiczenie, co mówić w czterech najczęstszych trudnych momentach.',
 sections:[
  {t:'🧘 Co te słowa oznaczają w praktyce', html:`
   <div class="card"><p><strong>Samoregulacja</strong> to zarządzanie własnym stanem emocjonalnym — zauważenie, że ogarnia cię frustracja lub coś wytrąca cię z równowagi, i świadomy wybór reakcji zamiast działania pod wpływem impulsu.</p>
   <p><strong>Koregulacja</strong> to to, co dzieje się dalej: dzieci, zwłaszcza młodsze, przejmują stan emocjonalny od spokojnego (lub niespokojnego) dorosłego w pomieszczeniu. Twoja reakcja nie jest tylko odpowiedzią na ich zachowanie — aktywnie je kształtuje.</p></div>
   ${co('co-idea','💡',`<p>Odnosi się to bezpośrednio do każdej sytuacji z modułu 1: braku dyscypliny, agresywnego ucznia, rozproszonego ucznia, milczącego ucznia. Twoja własna regulacja to pierwszy ruch w każdej z nich, przed jakąkolwiek techniką.</p>`)}
  `},
  {t:'🎭 Zastosowanie w każdej sytuacji', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Brak dyscypliny.</strong> Reaguj spokojnie i rzeczowo, a nie ostro czy z irytacją — zirytowany nauczyciel nakręca hałaśliwą klasę; opanowany ją uspokaja.`},
     {ic:'😠', html:`<strong>Agresywny uczeń.</strong> Ścisz głos i zwolnij tempo, nie odbijaj jego intensywności. Najpierw wyreguluj siebie, potem odnieś się do zachowania.`},
     {ic:'📱', html:`<strong>Rozproszony uczeń.</strong> Przekierowuj z ciekawością, a nie z frustracją — „co teraz przyciąga twoją uwagę?” działa zupełnie inaczej niż westchnienie.`},
     {ic:'🤐', html:`<strong>Milczący uczeń.</strong> Cierpliwość jest odbierana jako bezpieczeństwo. Widoczna niecierpliwość jest odbierana jako presja, a presja sprawia, że ciche dziecko staje się jeszcze cichsze.`}
   ])}
  `},
  {t:'🧯 Co obowiązuje w każdym z tych trudnych momentów', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Wróć do zasad klasy.</strong> Zasady ustalone na pierwszej lekcji to twoja kotwica — odwołuj się do nich, a nie do własnej irytacji.`},
     {ic:'🧊', html:`<strong>Zachowaj spokój — także w głosie.</strong> Daj sobie chwilę przed odpowiedzią, żeby brzmieć spokojnie, nawet jeśli jeszcze tak się nie czujesz. Dzieci odczytują ton szybciej niż słowa.`},
     {ic:'🛡️', html:`<strong>Chroń resztę grupy.</strong> Jeśli uczeń używa wulgarnego języka lub atakuje kolegę, możesz go na chwilę wyciszyć. Każde inne dziecko zasługuje na bezpieczną lekcję.`},
     {ic:'🤝', html:`<strong>Stanowczo pilnuj szacunku.</strong> Spokój nie oznacza miękkości: szacunek dla innych nie podlega negocjacjom, a grupa musi widzieć, że tego pilnujesz.`},
     {ic:'👪', html:`<strong>W razie potrzeby poproś rodzica o pomoc</strong> — nawet w trakcie lekcji, jeśli sytuacji nie da się uspokoić, a rodzic jest w pobliżu.`},
     {ic:'🌱', html:`<strong>Normalizuj błędy.</strong> Gdy coś w zadaniu pójdzie nie tak, potraktuj to przy wszystkich jako okazję do nauki.`},
     {ic:'📝', html:`<strong>Zgłoś to.</strong> Poinformuj rodzinę o zdarzeniu i zostaw komentarz w BO, żeby był ślad i nikt nie był zaskoczony.`}
   ])}
  `}
 ],
 ix:{
  title:'Ćwiczenie: co powiesz?',
  instr:'Teraz przećwiczmy kilka najczęstszych trudnych momentów na zajęciach online. W każdym przypadku wybierz, jak nauczyciel powinien zareagować. Każda odpowiedź zawiera uzasadnienie. 70%, aby odblokować kolejny moduł.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20yells%20at%20the%20teacher.png" alt="Krzyczący uczeń" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Uczeń na ciebie krzyczy.</strong> Prosisz Diega (11 lat), żeby udostępnił ekran, a on krzyczy: <em>„To jest takie głupie! Nie będę robić twojego nudnego ćwiczenia!”</em> Reszta grupy milknie i patrzy. Co mówisz?`,
    opts:['„Nie waż się tak do mnie mówić! Jeszcze raz i wylatujesz z zajęć.”','„Słyszę, że jesteś naprawdę sfrustrowany, Diego, i chcę ci pomóc. Pamiętaj o naszej zasadzie: na tych zajęciach rozmawiamy ze sobą z szacunkiem. Weź oddech — a potem powiedz mi, co ci nie pasuje.”','„No dobrze, nie musisz tego robić. Po prostu kontynuujmy z resztą.”'],
    correct:1,
    fb:'<strong>Dlaczego taka odpowiedź:</strong> spokojna odpowiedź robi trzy rzeczy naraz — nazywa emocję (dzięki czemu Diego czuje się wysłuchany), odwołuje się do zasad klasy zamiast do twojej złości i otwiera drogę powrotu do zadania. Odkrzykiwanie pokazuje dokładnie to zachowanie, które chcesz powstrzymać, i zamienia klasę w scenę; ustąpienie uczy całą grupę, że krzyk zwalnia z pracy. Na zajęciach online nie możesz podejść do ucznia, więc twój ton jest jedynym narzędziem. Jeśli to się powtarza, wycisz go na chwilę, w razie potrzeby skontaktuj się z rodzicem, a potem zgłoś sprawę rodzinie i zostaw komentarz w BO.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20bullies%20other%20students.png" alt="Uczeń wyśmiewający innego ucznia" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Uczeń nęka kogoś z grupy.</strong> Gdy Ana pokazuje swój projekt, Tomás włącza mikrofon i mówi <em>„To najbrzydsza rzecz, jaką w życiu widziałem”</em> — i dorzuca obelgę. Ana milknie. Co mówisz?`,
    opts:['„Tomás, jesteś dręczycielem i powinieneś się wstydzić przed wszystkimi.”','„Daj spokój, to był tylko żart — kontynuujmy, Ana.”','„Tomás, to nie jest w porządku. Na tych zajęciach szanujemy pracę każdego. Na chwilę wyciszam twój mikrofon, żeby Ana mogła skończyć — porozmawiamy po zajęciach. Ana, mów dalej, bardzo podobają mi się kolory, które wybrałaś.”'],
    correct:2,
    fb:'<strong>Dlaczego taka odpowiedź:</strong> twoim pierwszym zadaniem jest ochrona ucznia, który jest celem ataku. Wyciszenie Tomása natychmiast zatrzymuje krzywdę bez publicznej kłótni, zasada zostaje jasno wypowiedziana (szacunek dla innych nie podlega negocjacjom), a Ana odzyskuje swój moment. „To był tylko żart” mówi całej grupie, że nękanie jest tolerowane; zawstydzanie Tomása przy wszystkich eskaluje sytuację i upokarza dziecko, co rzadko zmienia zachowanie. Po zajęciach: porozmawiaj z nim prywatnie, poinformuj jego rodzinę i zostaw komentarz w BO. Jeśli sytuacja powtórzy się w trakcie lekcji, poproś rodzica o pomoc.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Płaczący uczeń" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Uczeń płacze, bo coś mu nie wychodzi.</strong> Lucía (8 lat) uruchamia swoją grę i po raz trzeci dostaje błąd. Zaczyna płakać: <em>„Nie umiem, jestem w tym beznadziejna.”</em> Co mówisz?`,
    opts:['„Wszystko w porządku, Lucía — programiści uczą się właśnie na błędach. Nawet zawodowi programiści codziennie dostają komunikaty o błędach. Przyjrzyjmy się temu razem i sprawdźmy, co komputer próbuje nam powiedzieć.”','„Nie płacz, to nic wielkiego. Zobacz, wszystkim innym się udało — tobie też się uda.”','„Nie martw się, po prostu to za ciebie naprawię i pójdziemy dalej.”'],
    correct:0,
    fb:'<strong>Dlaczego taka odpowiedź:</strong> takie podejście normalizuje błąd i przedstawia go jako część nauki, co z resztą w programowaniu jest prawdą. Pozostawia też poprawkę w rękach Lucíi, z tobą u boku, więc kończy ona tę chwilę z poczuciem, że daje radę. „Nie płacz” lekceważy uczucie, a porównywanie jej z kolegami tylko pogarsza sprawę. Naprawienie błędu za nią kończy łzy, ale potwierdza jej przekonanie, że sobie nie radzi. Na zajęciach online udostępnienie jej ekranu i wspólne rozwiązanie problemu sprawia, że wsparcie jest widoczne i osobiste.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20refuses%20to%20work.png" alt="Uczeń odmawiający pracy" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Uczeń odmawia pracy.</strong> Wszyscy budują animację z lekcji. Sofía (12 lat) ma włączoną kamerę, ale nic nie robi i mówi <em>„Nie chce mi się.”</em> Co mówisz?`,
    opts:['„Jeśli nie zrobisz ćwiczenia, powiem o tym twoim rodzicom.”','„Widzę, że jeszcze nie zaczęłaś — co ci przeszkadza? A może zanimujesz postać, którą naprawdę lubisz? Chodzi tylko o przećwiczenie techniki ruchu.”','„Dobrze — to dzisiaj po prostu patrz, jak pracują inni.”'],
    correct:1,
    fb:'<strong>Dlaczego taka odpowiedź:</strong> ciekawość, zamiast groźby pozwala odkryć, co naprawdę stoi za odmową (nuda, trudność, zmęczenie), a zaproponowanie wyboru zachowuje cel nauki i jednocześnie daje Sofíi poczucie, że zadanie jest dostosowane do jej potrzeb. Grożenie rodzicami robi z ciebie wroga i zamienia odmowę w walkę o władzę; pozwolenie jej na przyglądanie się uczy, że odmowa działa. Jeśli odmowa powtarza się przez kilka lekcji, porozmawiaj z rodziną i zostaw komentarz w BO — to wzorzec wart zgłoszenia, a nie kara.'}
  ]
 }
},
{id:'tech', numLabel:'Moduł 3', emoji:'🔧', color:'var(--coral)',
 title:'Problemy techniczne i równowaga w klasie',
 desc:'Dlaczego bałagan często okazuje się problemem technicznym w przebraniu, jak sprawić, by cała grupa dalej się uczyła, gdy rozwiązujesz problem jednego ucznia, plan dla szybko kończących uczniów, jak poświęcić uwagę każdemu dziecku w dużej grupie i co robić, gdy uczeń dołącza do lekcji spóźniony.',
 obj:'Zapobieganie większości problemów technicznych, zanim się pojawią, stosowanie jasnego protokołu, gdy do nich dojdzie, zajmowanie szybko kończących uczniów, gdy pomagasz innym, poświęcanie uwagi każdemu dziecku w dużej grupie oraz pomaganie uczniowi, który się spóźnił, w nadrobieniu materiału bez zatrzymywania grupy.',
 sections:[
  {t:'⚖️ Dlaczego to tyczy się tematu tego szkolenia', html:`
   <div class="card"><p>Problemy techniczne często prowadzą do dezorganizacji na zajęciach, a w efekcie uczniowie zaczynają się nudzić.</p>
   <p>Problemy techniczne są normalne i mogą przytrafić się zarówno prowadzącym, jak i uczniom. Poniżej znajdziesz informacje, co możesz zrobić, żeby nie eskalowały.</p></div>
   ${co('co-idea','💡',`<p><strong>Złota zasada.</strong> Jeśli nie możesz rozwiązać problemu samodzielnie w ciągu <strong>10 minut</strong>, przestań próbować w milczeniu. <strong>Komunikuj → dokumentuj → eskaluj.</strong> Rodzic, który wie, co się dzieje, ufa ci. Rodzic, który nie wie — rezygnuje.</p>`)}
  `},
  {t:'✅ Problemy techniczne po stronie uczniów', html:`
   <div class="card"><p>Problemy techniczne, na które uczniowie trafiają na zajęciach, często wynikają z tego, że korzystają z innej przeglądarki niż Google Chrome albo z urządzeń nieodpowiednich do danego kursu — na przykład próbują uczestniczyć w zajęciach na tablecie, telefonie lub iPadzie. Dlatego ważne jest, żeby znać minimalne wymagania i móc im pomóc.</p></div>
   ${doavoid(
    ["Google Chrome, zaktualizowany — jedyna w pełni kompatybilna przeglądarka",
     "Co najmniej 4 GB RAM (8 GB dla Blendera lub Unity)",
     "Stabilne połączenie, minimum 10 Mb/s — połączenie kablowe jest lepsze niż Wi-Fi, jeśli takie jest dostępne",
     "Co najmniej 5 GB wolnego miejsca na dysku — Unity i Blender potrzebują znacznie więcej"],
    ["Safari — znane błędy z platformą Kodland od ostatniej aktualizacji: niereagujące przyciski, niewczytujące się ekrany, błędy przy wejściu",
     "Tablety / iPady na kursach takich jak Roblox Studio czy Unity — potrzebny jest prawdziwy komputer",
     "Zakładanie, że problem na Macu to brak zaangażowania, zanim sprawdzisz, czy to po prostu Safari"]
   )}
   ${co('co-idea','🍎',`<p>Zwracaj szczególną uwagę na połączenie Mac + Safari. Jeśli u ucznia z Makiem przyciski nie reagują albo ekran się nie wczytuje, rozwiązanie prawie zawsze brzmi: otwórz zajęcia w Google Chrome. Odsyłaj rodzinę na stronę google.com/chrome.</p>`)}
   <div class="card"><h4>Czego naprawdę wymaga każdy kurs</h4><div class="tbl-wrap"><table>
   <tr><th>Kurs</th><th>Wymagania</th><th>Poziom</th></tr>
   <tr><td>Funtech, Python 1 / Pro</td><td>Tylko Chrome, nic nie trzeba instalować — działa na prawie każdym urządzeniu</td><td>Łatwy</td></tr>
   <tr><td>Digital Creativity</td><td>Chrome + narzędzie w przeglądarce (Canva, Krita) — sprawdź wymagania dotyczące rozmiaru ekranu i tabletu</td><td>Wymaga weryfikacji</td></tr>
   <tr><td>Roblox Studio</td><td>Tylko Windows lub Mac (bez tabletu, bez Linuksa), 4 GB RAM, Roblox Studio zainstalowane przed lekcją 1</td><td>Wymaga weryfikacji</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac lub Linux, zalecana Java Edition, 4 GB RAM, własne konto Minecraft</td><td>Wymaga weryfikacji</td></tr>
   <tr><td>3D Modeling</td><td>Minimum 8 GB RAM, wymagana mysz z kółkiem, zalecana dedykowana karta graficzna</td><td>Wymagający</td></tr>
   <tr><td>Unity</td><td>Obowiązkowo 8 GB RAM, 10 GB wolnego miejsca, tylko Windows lub Mac — bez Chromebooka</td><td>Wymagający</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Problemy techniczne po stronie nauczyciela', html:`
   <div class="card"><p>Ta sama staranność dotyczy twojego sprzętu — problem techniczny nauczyciela może zatrzymać lekcję tak samo jak problem ucznia.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Testuj 30 minut wcześniej.</strong> Przed każdą lekcją sprawdź połączenie internetowe, kamerę i mikrofon. Jeśli zauważysz problem, daj znać liderowi zespołu.`},
    {ic:'📷', html:`<strong>Szukaj alternatyw.</strong> Jeśli wyłączenie kamery poprawia połączenie, zrób to.`},
    {ic:'🎙️', html:`<strong>Miej zapasowy mikrofon.</strong> Jeśli słuchawki nie działają, spróbuj innej opcji, np. wbudowanego audio komputera, i zawsze włączaj redukcję szumów tła w Klasie Kodland.`},
    {ic:'📶', html:`<strong>Sprawdź sterowniki i to, czy masz włączony VPN</strong> — VPN zwykle spowalnia połączenie.`},
    {ic:'🧊', html:`<strong>Pracujesz z wymagającym narzędziem, takim jak Blender?</strong> Na pierwszych lekcjach kursu jest poradnik, jak je skonfigurować, by działało wydajniej.`},
    {ic:'💻', html:`<strong>Zwolnij RAM przed zajęciami.</strong> Google Chrome zapewnia najlepsze działanie Klasy Kodland, ale zużywa też dużo pamięci RAM — zamknij karty i programy, których w tej chwili nie potrzebujesz.`},
    {ic:'👂', html:`<strong>Potwierdź na żywo.</strong> Przed rozpoczęciem lekcji sprawdź z uczniami, czy dobrze cię widzą i słyszą — dzięki temu wcześnie wychwycisz problemy techniczne.`}
   ])}
  `},
  {t:'🚨 Reaguj — procedura', html:`
   ${co('co-danger','🚨',`<p><strong>Pierwszy problem na lekcji:</strong> spróbuj go rozwiązać w ciągu pierwszych 10 minut. Jeśli nadal nie działa, tego samego dnia powiedz o tym liderowi zespołu — to lider zespołu zdecyduje o formie odrobienia lekcji. W ciągu 30 minut napisz ciepłą wiadomość do rodzica, że zgłaszasz sprawę swojemu zespołowi.</p>
   <p><strong>Druga lekcja z rzędu z problemem:</strong> tego samego dnia otwórz zgłoszenie (ticket) w Dziale Obsługi Klienta. Napisz do rodzica, że sprawa została przekazana dalej i ktoś skontaktuje się w sprawie odrobienia lekcji.</p>
   <p><strong>Po rozwiązaniu:</strong> poinformuj rodzica i zamknij temat — nawet jeśli problem wydawał się drobny.</p>`)}
  `},
  {t:'⚖️ Jak utrzymać naukę całej grupy', html:`
   <div class="card"><p>Problemem jest nie tylko sama usterka techniczna — ale też nauczyciel tak skupiony na problemie jednego ucznia, że reszta grupy traci pięć czy dziesięć minut lekcji.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Wyznacz limit czasu.</strong> Daj uczniowi, którego to dotyczy, jedną szybką próbę naprawy (zmiana przeglądarki, restart), potem poprowadź grupę dalej i wróć do tego ucznia po zajęciach lub między zadaniami.`},
     {ic:'👥', html:`<strong>Daj grupie zadanie</strong> w chwili, gdy zaczynasz rozwiązywać problem — nie zostawiaj uczniów wpatrzonych w nieruchomy ekran.`},
     {ic:'🫂', html:`<strong>Zachowaj spokój — także w głosie.</strong> Twoja reakcja jest lekcją, zanim jeszcze nastąpi naprawa. Spokojne „czasem tak się zdarza, obejdziemy to” utrzymuje spokój w klasie.`}
   ])}
  `},
  {t:'⚡ Nikt nie czeka: plan dla szybko kończących uczniów', html:`
   <div class="card"><p>Ilekroć zatrzymujesz się, by pomóc jednemu uczniowi — z problemem technicznym lub trudnym krokiem — ktoś inny kończy i nie ma nic do roboty. Uczeń, który czeka, nudzi się, a znudzony uczeń zaczyna rozmawiać, wychodzi albo uznaje, że lekcja to strata czasu. Rodziny to zauważają: <em>«klasa większość czasu czeka, aż tutor pomoże innym»</em>. Rozwiązaniem jest przygotowanie kolejnego kroku, <strong>zanim</strong> ktokolwiek go potrzebuje.</p></div>
   ${stepFlow([
     {ic:'✅', label:'Zadanie skończone?'},
     {ic:'⭐', label:'1. Dodatkowa aktywność z lekcji'},
     {ic:'🎨', label:'2. Nadaj mu własny charakter: wariant lub osobisty akcent'},
     {ic:'🤝', label:'3. Pomóż koledze lub koleżance — gdy Cię o to poproszę'},
     {ic:'📚', label:'4. Zacznij pracę domową z wyprzedzeniem'}
   ])}
   ${iconGrid([
     {ic:'📌', html:`<strong>Wyświetl drabinkę na ekranie lub na czacie</strong> na początku ćwiczeń: <em>«Skończone? 1 → dodatkowe wyzwanie · 2 → dodaj własny akcent · 3 → zacznij pracę domową»</em>. Uczniowie przechodzą dalej, nie czekając na Ciebie.`},
     {ic:'🎯', html:`<strong>Korzystaj z tego, co już jest w podręczniku.</strong> Wiele lekcji zawiera dodatkowe aktywności — przygotuj je dzień wcześniej, aby były gotowe do użycia.`},
     {ic:'🤝', html:`<strong>Pomocnicy z grona uczniów, z zasadami.</strong> Szybki uczeń może pomóc koledze — Ty o to prosisz, on wyjaśnia, nie pisząc za kolegę, a pomagający również zostaje doceniony.`},
     {ic:'🖥️', html:`<strong>Zaglądaj krótko do uczniów między kolejnymi pomocami.</strong> <em>«Ana, pokaż mi swój ekran na dziesięć sekund — świetnie, a teraz spróbuj wyzwania 2».</em> Dzięki temu szybcy uczniowie czują się zauważeni, a nie tylko zajęci.`}
   ])}
  `},
  {t:'👀 Każde dziecko, każda lekcja — uwaga w dużej grupie', html:`
   <div class="card"><p>W dużej grupie łatwo spędzić lekcję z uczniami, którzy mówią najwięcej — a cichemu dziecku może minąć cała godzina bez ani jednego zwrotu w jego stronę. Dla tego dziecka i jego rodzica oznacza to, że <em>«nikt go nie zauważa»</em>. Uwaga nie wymaga więcej czasu; wymaga systemu.</p></div>
   ${iconGrid([
     {ic:'📛', html:`<strong>Często używaj imion.</strong> Staraj się zwrócić do każdego ucznia po imieniu co najmniej dwa razy na każdej lekcji — na rozgrzewce i ponownie podczas ćwiczeń.`},
     {ic:'🔄', html:`<strong>Rotuj tury.</strong> Udostępniajcie ekran po kolei, zbieraj odpowiedzi od różnych uczniów i korzystaj z losowania, aby było sprawiedliwie — a nie zawsze te same szybkie ręce.`},
     {ic:'👍', html:`<strong>Szybkie sprawdzenia z całą grupą.</strong> <em>«Kciuk w górę, gdy skończysz krok 2».</em> Jednym spojrzeniem widzisz, kto utknął, nie czekając, aż sam o tym powie.`},
     {ic:'💬', html:`<strong>Prywatne sprawdzenia z cichymi uczniami.</strong> Krótka prywatna wiadomość na czacie — <em>«Jak Ci idzie? Pokaż mi, na którym jesteś etapie»</em> — dociera do uczniów, którzy nigdy nie zadają pytań przy wszystkich.`},
     {ic:'📝', html:`<strong>Prowadź szybką listę, w głowie lub na papierze.</strong> Przed podsumowaniem sprawdź: czy jest ktoś, z kim dziś nie rozmawiałeś(-aś)? Zacznij od tej osoby.`},
     {ic:'🙋', html:`<strong>Reaguj na każdą podniesioną rękę,</strong> nawet jeśli tylko po to, by powiedzieć: <em>«Widzę Cię, Leo — jesteś następny».</em> Zignorowana ręka to jeden z najszybszych sposobów na utratę dziecka.`}
   ])}
  `},
  {t:'⏰ Uczeń dołącza do lekcji spóźniony', html:`
   <div class="card"><p>Uczniowie spóźniają się z wielu powodów: szkoła się przedłużyła, połączenie zawiodło, link się zgubił. Jeśli za każdym razem zaczynasz od początku, gdy ktoś dołącza, cała grupa traci czas. Jeśli nikt nie pomaga spóźnionemu, uczeń spędza resztę lekcji zagubiony, i właśnie to mówi rodzicom. Celem jest, by w kilka minut zaczął pracować, bez zatrzymywania pozostałych.</p></div>
   ${timeline([
     {ic:'👋', label:'Gdy dołącza', items:[
       '<strong>Przywitaj go krótko, po imieniu:</strong> <em>«Witaj, Leo! Jesteśmy przy kroku 3: sprawianiu, by postać skakała».</em>',
       '<strong>Nie pytaj przy grupie, dlaczego się spóźnił,</strong> i nie zaczynaj dla niego wyjaśnień od początku.'
     ]},
     {ic:'💬', label:'W pierwszych minutach', items:[
       '<strong>Wstaw na czacie jednozdaniowe podsumowanie:</strong> co zrobiliśmy, co robimy teraz i gdzie kliknąć.',
       '<strong>Najpierw zadaj grupie kolejne zadanie,</strong> a potem sprawdź prywatnie spóźnionego ucznia: <em>«Udostępnij na chwilę ekran, pokażę Ci krok, który Cię ominął».</em>',
       '<strong>Połącz go z kolegą do pomocy,</strong> jeśli krok jest długi, i sprawdź go ponownie po kilku minutach.'
     ]},
     {ic:'📚', label:'Po lekcji', items:[
       '<strong>Jeśli ominął ważną część,</strong> udostępnij materiały (i nagranie, jeśli jest) i powiedz, co powtórzyć.',
       '<strong>Jeśli zdarzy się to ponownie,</strong> napisz do rodzica tego samego dnia, uprzejmie, aby dowiedzieć się dlaczego, i zostaw komentarz w BO. Jeśli powodem jest harmonogram, powiadom swojego Team Leadera: zmiana harmonogramu nie należy do Ciebie.'
     ]}
   ])}
   ${co('co-idea','📝',`<p><strong>Przygotuj to przed lekcją.</strong> Zapisz jedno krótkie zdanie podsumowania dla każdej fazy planu lekcji. Gdy ktoś się spóźni, wystarczy je wkleić na czat.</p>`)}
   ${co('co-cute','🔧',`<p><strong>Spóźnienie z powodu problemu technicznego?</strong> Pomóż wejść na lekcję, a potem postępuj zgodnie z protokołem technicznym opisanym wyżej: 10 minut na naprawę, następnie komunikacja, dokumentacja i eskalacja.</p>`)}
  `}
 ],
 ix:{
  title:'Problemy techniczne — sprawdzian modułu',
  instr:'70%, aby odblokować końcową listę kontrolną.',
  items:[
   {type:'choice', prompt:'Na Macu ucznia żaden przycisk nie reaguje. Jaki jest twój pierwszy ruch?', opts:['Poprosić ucznia, by otworzył zajęcia w Google Chrome','Uznać, że stracił zainteresowanie, i iść dalej','Poczekać, aż platforma sama się naprawi'], correct:0, fb:'Safari to najczęstsza przyczyna niereagujących przycisków na Macu — przejście na Chrome to szybkie rozwiązanie.'},
   {type:'sort', prompt:'Jaki to rodzaj problemu?', card:'Ekran ucznia ciągle się zawiesza, a przyciski nie reagują.', zones:[
     {label:'⚖️ Problem z dyscypliną', fb:'Nie do końca — zawieszony ekran i niereagujące przyciski to typowe objawy techniczne, najczęściej Safari na Macu.'},
     {label:'🔧 Problem techniczny', fb:'Zgadza się — to wskazuje na problem z przeglądarką lub urządzeniem, a nie na brak zaangażowania. Najczęściej chodzi o Safari na Macu.'}
   ], correctZone:1},
   {type:'choice', prompt:'Problem techniczny pojawia się na lekcji po raz pierwszy. Kiedy należy poinformować o nim rodzica?', opts:['Tylko jeśli problem się powtórzy','Do końca tygodnia','W ciągu 30 minut, po 10 minutach prób naprawy'], correct:2, fb:'Szybka, ciepła wiadomość pozwala zachować zaufanie rodziny.'},
   {type:'choice', prompt:'Co powinna robić reszta grupy, gdy rozwiązujesz problem z połączeniem jednego ucznia?', opts:['Cicho czekać, aż skończysz','Pracować nad zadaniem, które im dajesz, żeby lekcja nie stanęła','Patrzeć, jak rozwiązujesz problem, na wypadek gdyby ich też to spotkało'], correct:1, fb:'Utrzymanie pracy reszty grupy chroni całą lekcję, a nie tylko rozwiązuje problem jednego ucznia.'},
   {type:'sort', prompt:'Jaki to rodzaj problemu?', card:'Uczeń ciągle włącza mikrofon, żeby podczas wyjaśnień mówić o niezwiązanych rzeczach.', zones:[
     {label:'⚖️ Problem z dyscypliną', fb:'Zgadza się — to wzorzec do przekierowania w ramach zarządzania klasą, a nie objaw techniczny.'},
     {label:'🔧 Problem techniczny', fb:'Nie do końca — to wzorzec związany z dyscypliną, a nie problem z urządzeniem lub połączeniem.'}
   ], correctZone:0},
   {type:'choice', prompt:'Pomagasz jednemu uczniowi naprawić błąd, a trzech innych już skończyło. Co powinno być już gotowe?', opts:['Drabinka «Skończone?» na ekranie lub na czacie: dodatkowe wyzwanie, osobisty akcent, a potem praca domowa z wyprzedzeniem','Nic — mogą poczekać kilka minut','Prosisz, by obserwowali, jak naprawiasz błąd'], correct:0, fb:'Gdy kolejne kroki są gotowe, zanim ktokolwiek ich potrzebuje, nikt nie czeka — a właśnie czekanie zmienia szybkiego ucznia w znudzonego.'},
   {type:'choice', prompt:'W grupie dziesięciu osób cichy uczeń nie powiedział ani słowa przez całą lekcję. Zbliża się podsumowanie. Co robisz?', opts:['Zostawiasz go w spokoju — przemówi, gdy będzie gotowy','Zwracasz się do niego po imieniu przed podsumowaniem: prywatne sprawdzenie lub tura udostępniania ekranu','Zadajesz mu trudne pytanie przy wszystkich, aby się włączył'], correct:1, fb:'Sprawdź swoją listę przed podsumowaniem: ktoś, z kim jeszcze nie rozmawiałeś(-aś), idzie pierwszy. Prywatne sprawdzenie lub łatwa tura sprawia, że uczeń czuje się zauważony, bez presji.'},
   {type:'sort', prompt:'Czy to dobre posunięcie, gdy uczeń dołącza spóźniony?', card:'Uczeń dołącza 15 minut później. Zatrzymujesz grupę i powtarzasz całe wyjaśnienie od początku.', zones:[{label:'💎 Dobre posunięcie', fb:'Niezupełnie — reszta grupy czeka, gdy powtarzasz wszystko. Przywitaj ucznia, wstaw na czacie jednozdaniowe podsumowanie i pomóż mu prywatnie, gdy grupa już pracuje.'},{label:'🗑️ Złe posunięcie', fb:'Zgadza się! Krótkie powitanie, jednozdaniowe podsumowanie na czacie i krótkie prywatne sprawdzenie pozwalają spóźnionemu zacząć pracę bez zatrzymywania pozostałych.'}], correctZone:1}
  ]
 }
},
{id:'checklist', numLabel:'Lista kontrolna', emoji:'✅', color:'var(--coral)',
 title:'Końcowa lista kontrolna',
 desc:'Tu nie ma quizu — tylko najważniejsze punkty tego miniszkolenia, zanim je zakończysz.',
 obj:'Zapoznać się z poniższą listę kontrolną. Ten moduł nie jest oceniany — należy go przeczytać, a potem ukończyć miniszkolenie.',
 sections:[
  {t:'🛟 Jeśli wniosek o zwrot już wpłynął', html:`
   ${numlist([
     'Tego samego dnia, w którym dowiaduję się o wniosku, zostawiam komentarz w BO i informuję lidera zespołu',
     'Moja następna lekcja z tym uczniem to prawdziwa próba pomocy — mogę dać uczniowi prawdziwą okazję do działania, pokazać mu jego sukcesy, przekazać konkretną uwagę, jednak ani słowa o wniosku',
     'Nigdy nie potwierdzam zatwierdzenia zwrotu i nie rozmawiam o kwotach — używam jednego bezpiecznego zdania, a resztę zostawiam Działowi Obsługi Klienta'
   ])}
  `},  {t:'⚖️ Dyscyplina na każdej lekcji', html:`
   ${numlist([
     'Ustalam zasady klasy na pierwszej lekcji, sprawdzam, czy uczniowie je rozumieją i się na nie zgadzają — i odwołuję się do nich, a nie do własnej irytacji',
     'Z młodszymi uczniami (6–8) zamieniam zasady w grę, przekierowuję zadaniem zamiast poleceniem i chwalę pożądane zachowanie, gdy tylko się pojawi',
     'Ze starszymi uczniami (12+) krótko nazywam zachowanie — w miarę możliwości w rozmowie jeden na jeden — daję im rolę, która ukierunkowuje ich energię, i konsekwentnie egzekwuję zasady zamiast powtarzać ostrzeżenia',
     'W milczącej klasie najpierw uprzejmie proszę o włączenie kamer, a potem proponuję inne bezpieczne sposoby udziału — ulubione tło, czat, prywatny udział — bez presji',
     'Gdy uczeń wyłącza się z zadania, dostosowuję je, nie tracąc celu nauki',
     'Najpierw reguluję siebie: daję sobie chwilę, mówię spokojnym głosem, utrzymuję równe tempo i nigdy nie odbijam intensywności ucznia',
     'Stanowczo pilnuję szacunku: jeśli uczeń używa wulgarnego języka lub atakuje kolegę, na chwilę go wyciszam, żeby chronić grupę, a po zajęciach rozmawiamy',
     'Gdy coś w zadaniu pójdzie nie tak, normalizuję błąd i traktuję go jako okazję do nauki',
     'Jeśli sytuacji nie da się uspokoić, proszę rodzica o pomoc — nawet w trakcie lekcji — a potem informuję rodzinę i zostawiam komentarz w BO',
     'Testuję swój sprzęt 30 minut przed zajęciami i dbam o to, żeby grupa pracowała, gdy rozwiązuję problem techniczny jednego ucznia',
     'Wyświetlam na ekranie lub na czacie drabinkę «Skończone?» — dodatkowa aktywność, osobisty akcent, pomoc koledze, praca domowa z wyprzedzeniem — aby nikt nie czekał.',
     'Zwracam się do każdego ucznia po imieniu co najmniej dwa razy na lekcji, rotuję tury i przed podsumowaniem sprawdzam, z kim jeszcze nie rozmawiałem(-am).',
     'Odpowiadam na każdą podniesioną rękę i stosuję prywatne sprawdzenia z cichymi uczniami.',
     'Gdy uczeń dołącza do lekcji spóźniony, krótko go witam, wstawiam na czacie jednozdaniowe podsumowanie i pomagam mu prywatnie, gdy grupa już pracuje — a jeśli zdarza się to nadal, piszę do rodzica i zostawiam komentarz w BO.'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>To już całe miniszkolenie.</strong> Kiedy zechcesz, przejdź dalej — a potem wykonaj DST w LMS, aby zamknąć zadanie.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
