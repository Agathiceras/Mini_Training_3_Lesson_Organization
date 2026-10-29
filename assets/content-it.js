/* Mini_Training_3_Lesson_Organization - Italian content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='it';
const CONTENT = {
  flag:'🇮🇹', dir:'ltr',
  ui:{
    pageTitle:"Mini-training · Organizzazione della lezione e disciplina — Formazione tutor Kodland",
    logoSub:'Dipartimento Sviluppo Tutor',
    heroEyebrow:"🎯 Mini-training",
    heroTitle:"Gestire una lezione <span class=\"h-pill\">ben organizzata</span>",
    heroIntro:"Hai ricevuto questa formazione perché alcuni tuoi studenti hanno chiesto un rimborso per problemi di disorganizzazione o di disciplina in classe. Qui ti mostriamo cosa puoi fare come tutor e come gestire queste situazioni.",
    heroWork:"Completa 5 brevi moduli. Per sbloccare il modulo successivo devi ottenere almeno il 70% nella verifica di ciascun modulo. Circa 25–30 minuti in totale.",
    startBtn:"🚀 Inizia la formazione",
    pathLabel:'Il tuo percorso',
    devTitle:'Dev: sblocca tutti i moduli per la revisione',
    backToPath:'Torna al percorso',
    modulesPassed:'{done} / {total} moduli superati',
    moduleN:'Modulo {n}',
    of:'di',
    locked:'🔒 Bloccato',
    passedBadge:'✅ Superato · {pct}%',
    reviewedBadge:'✅ Rivisto',
    startBadge:'▶ Inizia',
    reviewBadge:'▶ Rivedi',
    objective:'Obiettivo',
    startCheck:'▶ Inizia la verifica del modulo',
    finishBtn:'▶ Concludi il mini-training',
    doneBack:'✓ Fatto — torna al percorso',
    ixBadge:'📋 Verifica del modulo — 70% per sbloccare il modulo successivo',
    ixItemBadge:'📋 Verifica del modulo — domanda {i} di {n}',
    scoreSoFar:'Punteggio finora: {c} / {t}',
    continue:'Continua →',
    sortWrong:'Non proprio — la risposta giusta è “{label}”.',
    resPassed:'Modulo superato!',
    resFailed:'Non ci sei ancora',
    resUnlocked:"Hai sbloccato il modulo successivo.",
    resDone:"Hai completato questo mini-training.",
    resNeed:'Ti serve il 70% per sbloccare il modulo successivo. Rivedi la sezione qui sopra e riprova la verifica.',
    resContinue:'Continua al percorso',
    resFinish:'Continua',
    resBack:'Torna al percorso',
    resReview:'Rivedi questo modulo',
    doneEyebrow:'Mini-training completato',
    doneTitle:'🎉 Congratulazioni!',
    doneP1:"🎉 <strong>Congratulazioni! Hai completato questo mini-training.</strong>",
    doneP2:"Hai finito! Torna alla pagina della formazione nell’LMS da cui hai aperto questo mini-training per chiudere l’attività.",
    doneP3:"👉 <strong>Se nell’LMS, subito sotto la formazione, c’è una verifica o una valutazione, completala e raggiungi il punteggio minimo</strong>, altrimenti l’attività potrebbe risultare incompleta.",
    doneP4:'In bocca al lupo! ❤️',
    doneP5:'',
    devUnlockAlert:'Modalità dev: tutti i moduli sono ora sbloccati per la revisione.',
    devOn:'🔓 Modalità dev ATTIVA — tutti i moduli sbloccati',
    devOff:'🔒 Modalità dev DISATTIVATA — progressi azzerati',
    devBadge:'🔓 MODALITÀ DEV',
    doLabel:'✅ Da fare',
    avoidLabel:'🚫 Da evitare',
    noticeLabel:'Nota:',
    cvSee:'Cosa vedi:',
    cvDo:'Cosa fai:',
    dtExample:'Esempio da una lezione reale',
    dtNext:'Avanti:',
    dtDone:"✅ Ecco tutte e quattro le aree. Ora classifica ciò che vedi.",
    tlVideoTitle:'{label} — un esempio da una lezione reale',
    tlVideoMeta:'Guarda come si presenta questa fase in una lezione reale'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introduzione', emoji:'🧩', color:'var(--coral)',
 title:'Perché sei qui',
 desc:'Perché l’organizzazione della lezione e la disciplina sono il motivo che puoi correggere più in fretta, e le regole da seguire quando una richiesta di rimborso è già arrivata.',
 obj:'Capire perché l’organizzazione della lezione e la disciplina sono il motivo più legato al modo in cui gestisci la classe, e sapere esattamente cosa fare (e cosa non fare) quando esiste già una richiesta di rimborso.',
 sections:[
  {t:'🧩 Due estremi, un’unica causa', html:`
   <div class="card"><p>Due classi molto diverse tra loro finiscono segnalate per lo stesso motivo: una classe caotica e una classe piombata nel silenzio. In entrambi i casi il punto è lo stesso: se ogni bambino sente che la lezione è uno spazio sicuro e strutturato in cui partecipare.</p></div>
   ${co('co-idea','🎯',`<p><strong>Tra tutti i motivi dell’elenco, questo è quello che dipende più direttamente dal comportamento del tutor, e quindi quello che puoi correggere più in fretta.</strong> A differenza del livello o di un bisogno speciale, è una competenza che puoi cambiare già dalla prossima lezione, senza bisogno del permesso di nessuno.</p>`)}
  `},
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   <div class="card"><p>Tutto ciò che hai letto sopra serve a intercettare il problema in anticipo. Ma forse stai aprendo questa formazione perché una famiglia ha <strong>già</strong> chiesto un rimborso. Le regole qui sotto valgono qualunque sia il motivo: leggile per prime, poi usa il resto della formazione per capire cosa ha portato a questa situazione e cosa puoi ancora fare a lezione.</p></div>
   ${co('co-idea','💡',`<p><strong>La richiesta in sé viene creata dal Servizio Clienti, non da te</strong>: quella parte non dipende da te. Ma tutto ciò che succede a lezione da qui in avanti è ancora nelle tue mani, e non è poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Non dire nulla sulla richiesta</strong>, né al bambino né alla famiglia, a meno che il Servizio Clienti non ti chieda esplicitamente di dire qualcosa di preciso. Ora il tuo compito è la lezione, non la conversazione.</p>`)}
  `},
  {t:'🎯 La prossima lezione è il tuo tentativo di recupero', html:`
   <div class="card"><p>Potresti non avere altre occasioni per cambiare le cose. Considera la prossima lezione con questo bambino come il momento decisivo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dagli un vero turno.</strong> Non una domanda di circostanza, ma un momento autentico in cui si sente visto e ci riesce.`},
     {ic:'🏆', html:`<strong>Prevedi un successo visibile, fin da subito.</strong> Deve uscire dalla lezione sentendosi capace, non indietro.`},
     {ic:'👀', html:`<strong>Attenzione specifica</strong>: fallo sentire notato per qualcosa di concreto, non con lodi generiche.`},
     {ic:'🤐', html:`<strong>Nessun accenno alla richiesta</strong>: anche se è il bambino a parlarne, cambia argomento con gentilezza e continua la lezione.`}
   ])}
  `},
  {t:'📮 Avvisa subito e conosci l’unica frase sicura', html:`
   <div class="card"><p>Puoi scoprire che esiste una richiesta dai commenti del Servizio Clienti nel profilo del bambino nel BO: non c’è un sistema automatico che ti avvisa. Quando lo sai, ciò che hai osservato nelle tue lezioni è un’informazione che il Servizio Clienti non può avere in nessun altro modo.</p></div>
   ${numlist([
     'Lascia un commento nel BO lo stesso giorno, con esattamente ciò che hai osservato: date e fatti concreti, non impressioni',
     'Riporta le parole esatte della famiglia, se le hai',
     'Coinvolgi il tuo Team Leader lo stesso giorno',
     'Non confermare mai che un rimborso è stato approvato e non parlare mai di importi'
   ])}
   ${co('co-ok','✅',`<p><strong>La frase che puoi dire sempre senza rischi:</strong> <em>“Il Servizio Clienti vi aiuterà con questo.”</em> Lì finisce la tua parte della conversazione: da quel momento se ne occupa il Servizio Clienti.</p>`)}
  `},
  {t:'🌱 Continua anche dopo', html:`
   <div class="card"><p>Che la richiesta venga ritirata, che il bambino resti nel tuo gruppo o che passi a un altro tutor o formato, continua a dedicargli un’attenzione in più nelle lezioni successive. Un recupero che dura una sola lezione e poi torna in silenzio alla normalità spesso non regge affatto.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Modulo 1', emoji:'⚖️', color:'var(--coral)',
 title:'Disciplina e flessibilità',
 desc:'I due estremi che i tutor affrontano in una classe online, i modi adatti all’età per gestire ciascuno e come adattare un’attività senza perdere l’obiettivo di apprendimento.',
 obj:'Riconoscere i due schemi estremi (troppo rumore o una classe silenziosa) e applicare a ciascuno tecniche adatte all’età, sapendo anche quando conviene adattare un’attività invece di lottare per mantenerne il controllo.',
 sections:[
  {t:'📢 Primo estremo: troppo rumore', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T3/image1.png" alt="Un bambino che si copre le orecchie in una stanza rumorosa" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Studenti che parlano uno sopra l’altro di cose che non c’entrano, linguaggio inappropriato, mancanza di rispetto verso i compagni. Se lasci correre, la classe impara in silenzio che tutto è permesso.</p></div>
   <div class="card"><h4>Bambini più piccoli (6–8 anni)</h4><ul>
     <li>Trasforma la regola in un gioco: il “volume della voce” come una manopola da indicare, non un rimprovero</li>
     <li>Riporta l’attenzione con un’attività, non con un ordine: “condividi lo schermo e costruiamolo insieme” funziona meglio di “smettila di parlare”</li>
     <li>Loda il comportamento che vuoi vedere, subito e in modo specifico, nel momento esatto in cui si presenta</li>
   </ul></div>
   <div class="card"><h4>Studenti più grandi (12+)</h4><ul>
     <li>Nomina il comportamento in modo diretto e breve, se possibile in privato: “teniamo la chat sull’argomento, così tutti riescono a seguire”</li>
     <li>Dagli un ruolo che incanali l’energia: guidare un passaggio, aiutare un compagno</li>
     <li>Stabilisci l’aspettativa una volta, con calma, e mantienila con coerenza invece di ripetere gli avvertimenti</li>
   </ul></div>
  `},
  {t:'🤫 Secondo estremo: la classe silenziosa', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T3/image2.png" alt="Un bambino timido che si nasconde dietro le braccia" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Studenti che non parlano e non accendono la videocamera. Succede spesso con preadolescenti e adolescenti: di solito per timidezza o poca autostima, ma può anche essere un segnale di disinteresse, quindi continua a osservare.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Chiedi gentilmente di accendere la videocamera'},
     {ic:'2️⃣', label:'Se non funziona, prova altri modi per farli sentire al sicuro'},
     {ic:'3️⃣', label:'Conoscili: i loro interessi sono la tua chiave d’accesso'},
     {ic:'4️⃣', label:'Ancora niente? Prova la partecipazione in privato, sempre con una frase che faccia capire che è uno spazio sicuro'}
   ])}
   ${co('co-idea','💡',`<p><strong>Un’idea concreta:</strong> lascia che tengano la videocamera spenta, ma proponi di impostare come sfondo qualcosa che gli piace oppure, in un corso di design o di arte, invitali a disegnare qualcosa che li rappresenti (non un autoritratto) da usare come sfondo. Proponilo a tutto il gruppo, così sembra un’attività condivisa e nessuno si sente preso di mira.</p>`)}
   <div class="card"><h4>Esempi di frasi per età</h4>
   <p><strong>Più piccoli (6–8 anni):</strong> <em>“Non devi far vedere la tua faccia se non vuoi, ma mi piacerebbe tanto vedere che sfondo hai scelto! Me lo racconti?”</em></p>
   <p><strong>Più grandi (12+):</strong> <em>“Nessuna fretta con la videocamera, quando te la senti. Intanto, se ti è più comodo, scrivi pure in chat.”</em></p></div>
  `},
  {t:'🎨 Quando la distrazione significa che è l’attività a doversi adattare', html:`
   <div class="card"><p>A volte l’“indisciplina” è in realtà uno studente che si è scollegato perché l’esercizio in sé non fa per lui: non fa ciò che gli viene chiesto o continua a distrarsi.</p></div>
   ${co('co-ok','✅',`<p><strong>Adattalo, senza perdere l’obiettivo.</strong> Se l’obiettivo di oggi è imparare ad animare e lo studente non vuole seguire la storia prevista dal piano della lezione, lascialo animare il personaggio, l’oggetto o l’animale che lo motiva. Esempio: l’obiettivo è imparare la tecnica di animazione in pixel art; lo studente può animare qualsiasi oggetto scelga, purché continui a esercitarsi con la tecnica.</p>`)}
  `},
  {t:'👪 Comunicazione con la famiglia e regole della classe', html:`
   ${co('co-idea','📮',`<p><strong>Segnala i casi di indisciplina, silenzio persistente o forte distrazione</strong>: aiuta a costruire un quadro più completo dello studente e, una volta informati, spesso i genitori possono aiutare a casa con il comportamento.</p>`)}
   ${co('co-star','📜',`<p><strong>Stabilisci le regole della classe dalla prima lezione</strong> e verifica che gli studenti le capiscano e le condividano: non basta enunciarle una volta e dare per scontato che siano arrivate.</p>`)}
   <img class="mt-pic" src="Pictures_T3/rules.png" alt="Esempio di slide: regole di comportamento a lezione">
  `}
 ],
 ix:{
  title:'Disciplina e flessibilità — verifica del modulo',
  instr:'70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:'Uno studente più piccolo (6–8 anni) continua a parlare durante la lezione di cose che non c’entrano. Qual è la prima mossa migliore?', opts:['Un ordine chiaro di smettere di parlare, ripetuto finché non ascolta','Aspettare: di solito smette da solo','Riportarlo sull’attività e lodare il comportamento che vuoi appena si presenta'], correct:2, fb:'Con i bambini più piccoli, riportarli sull’attività e cogliere il comportamento positivo nel momento in cui si presenta funziona meglio di un ordine secco.'},
   {type:'choice', prompt:'Uno studente si rifiuta di seguire l’esercizio di storytelling di oggi, ma animerebbe volentieri qualcos’altro. Cosa dovresti fare?', opts:['Lasciargli animare ciò che lo motiva, purché continui a esercitare la competenza che stai insegnando','Insistere sull’esercizio esattamente com’è scritto, così il gruppo resta allineato','Saltare l’attività per quello studente e andare avanti'], correct:0, fb:'Essere flessibile sui contenuti, senza perdere l’obiettivo di apprendimento, mantiene lo studente coinvolto e gli permette di continuare a imparare.'},
   {type:'choice', prompt:'Quando vanno stabilite le regole della classe?', opts:['Solo quando nasce un problema, così sembrano pertinenti','Dalla prima lezione, verificando che siano capite e condivise','Una volta al mese, come promemoria per tutto il gruppo'], correct:1, fb:'Le regole stabilite e confermate dalla prima lezione prevengono gran parte delle situazioni trattate in questo modulo.'},
   {type:'choice', prompt:'Perché segnalare alla famiglia i casi di silenzio persistente o di distrazione?', opts:['Perché i tutor non possono gestire da soli il comportamento','Solo quando inizia a incidere sui voti dello studente','Aiuta a costruire un quadro più completo dello studente, e spesso i genitori possono aiutare a casa'], correct:2, fb:'Segnalare non significa scaricare la colpa: dà ai genitori una visibilità su cui possono agire anche loro.'}
  ]
 }
},
{id:'selfreg', numLabel:'Modulo 2', emoji:'🧘', color:'var(--coral)',
 title:'Autoregolazione e co-regolazione',
 desc:'Come la tua reazione emotiva, in quanto adulto presente, influenza il comportamento di ogni studente della classe, con una pratica sui momenti difficili più comuni.',
 obj:'Capire l’autoregolazione e la co-regolazione, applicarle alle tue reazioni in caso di indisciplina, aggressività, distrazione e silenzio, ed esercitarti su cosa dire nei quattro momenti difficili più comuni.',
 sections:[
  {t:'🧘 Cosa significano queste parole, in pratica', html:`
   <div class="card"><p><strong>L’autoregolazione</strong> è la gestione del tuo stato emotivo: accorgerti che sei frustrato o spiazzato e scegliere come rispondere, invece di reagire d’impulso.</p>
   <p><strong>La co-regolazione</strong> è ciò che succede subito dopo: i bambini, soprattutto i più piccoli, “prendono in prestito” lo stato emotivo dell’adulto presente, calmo o meno che sia. La tua reazione non si limita a rispondere al loro comportamento: lo plasma attivamente.</p></div>
   ${co('co-idea','💡',`<p>Questo vale direttamente per ogni situazione del Modulo 1: indisciplina, uno studente aggressivo, uno distratto, uno silenzioso. In ognuna, prima di qualsiasi tecnica, la prima mossa è regolare te stesso.</p>`)}
  `},
  {t:'🎭 Applicarlo a ogni situazione', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Indisciplina.</strong> Rispondi con calma e in modo pratico, non brusco o seccato: un tutor irritato fa crescere il caos, uno tranquillo lo fa rientrare.`},
     {ic:'😠', html:`<strong>Uno studente aggressivo.</strong> Abbassa la voce e rallenta il ritmo, non rispecchiare la sua intensità. Prima regola te stesso, poi affronta il comportamento.`},
     {ic:'📱', html:`<strong>Uno studente distratto.</strong> Riporta l’attenzione con curiosità, non con frustrazione: “cosa ha catturato la tua attenzione in questo momento?” arriva in modo molto diverso da un sospiro.`},
     {ic:'🤐', html:`<strong>Uno studente silenzioso.</strong> La pazienza viene percepita come sicurezza. L’impazienza visibile viene percepita come pressione, e la pressione rende un bambino silenzioso ancora più silenzioso.`}
   ])}
  `},
  {t:'🧯 Cosa vale in ogni momento difficile', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Torna alle regole della classe.</strong> Le regole concordate nella prima lezione sono il tuo punto di riferimento: richiama quelle, non il tuo fastidio.`},
     {ic:'🧊', html:`<strong>Fai sentire la tua calma.</strong> Prenditi il momento che ti serve prima di rispondere, così sembri calmo anche se ancora non lo sei. I bambini leggono il tono prima delle parole.`},
     {ic:'🛡️', html:`<strong>Proteggi il resto del gruppo.</strong> Se uno studente usa un linguaggio volgare o attacca un compagno, puoi silenziare il suo microfono per un momento. Tutti gli altri bambini meritano una lezione sicura.`},
     {ic:'🤝', html:`<strong>Sii fermo sul rispetto.</strong> Calma non significa debolezza: il rispetto per gli altri non è negoziabile e il gruppo deve vedere che su questo non cedi.`},
     {ic:'👪', html:`<strong>Chiedi aiuto al genitore, se serve</strong>, anche durante la lezione, se una situazione non si risolve e il genitore è nelle vicinanze.`},
     {ic:'🌱', html:`<strong>Normalizza gli errori.</strong> Quando qualcosa va storto in un’attività, trattalo come un’occasione per imparare, davanti a tutti.`},
     {ic:'📝', html:`<strong>Segnalalo.</strong> Informa la famiglia dell’accaduto e lascia un commento nel BO, così ne resta traccia e nessuno viene colto di sorpresa.`}
   ])}
  `}
 ],
 ix:{
  title:'Pratica: cosa diresti?',
  instr:'Ora esercitiamoci su alcuni dei momenti difficili più comuni in una lezione online. Per ogni caso, scegli cosa diresti come tutor. Ogni risposta è accompagnata dalla sua spiegazione. 70% per sbloccare il modulo successivo.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20yells%20at%20the%20teacher.png" alt="Uno studente che urla" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Uno studente ti urla contro.</strong> Chiedi a Diego (11 anni) di condividere lo schermo e lui grida: <em>“Che stupidaggine! Non lo faccio il tuo esercizio noioso!”</em> Il resto del gruppo si zittisce e guarda. Cosa dici?`,
    opts:['“Non ti permettere di parlarmi così! Ancora una volta e sei fuori dalla lezione.”','“Sento che sei davvero frustrato, Diego, e voglio aiutarti. Ricorda la nostra regola: in questa classe ci parliamo con rispetto. Fai un bel respiro, poi dimmi cosa non va.”','“Va bene, dai, non sei obbligato a farlo. Andiamo avanti con gli altri.”'],
    correct:1,
    fb:'<strong>Perché funziona:</strong> la risposta calma fa tre cose insieme: dà un nome all’emozione (così Diego si sente ascoltato), richiama la regola della classe invece della tua rabbia e gli apre una strada per tornare all’attività. Urlare a tua volta mostra proprio il comportamento che vuoi fermare e trasforma la classe in un palcoscenico; cedere insegna a tutto il gruppo che urlando si evita il lavoro. In una lezione online non puoi avvicinarti allo studente, quindi il tono è il tuo unico strumento. Se continua, silenzia il suo microfono per un momento, contatta il genitore se serve e, dopo la lezione, informa la famiglia e lascia un commento nel BO.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20bullies%20other%20students.png" alt="Uno studente che prende in giro un compagno" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Uno studente fa il bullo con un compagno.</strong> Mentre Ana condivide il suo progetto, Tomás riattiva il microfono e dice <em>“È la cosa più brutta che abbia mai visto”</em>, aggiungendo un insulto. Ana si zittisce. Cosa dici?`,
    opts:['“Tomás, ti stai comportando da bullo e dovresti vergognarti davanti a tutti.”','“Dai, era solo uno scherzo. Andiamo avanti, Ana.”','“Tomás, così non va bene. In questa classe il lavoro di tutti si rispetta. Ti silenzio il microfono per un momento, così Ana può finire: ne parliamo dopo la lezione. Ana, continua pure, adoro i colori che hai scelto.”'],
    correct:2,
    fb:'<strong>Perché funziona:</strong> il tuo primo compito è proteggere lo studente preso di mira. Silenziare Tomás ferma subito il danno senza una discussione pubblica, la regola viene detta chiaramente (il rispetto per gli altri non è negoziabile) e restituisci ad Ana il suo momento. “Era solo uno scherzo” dice a tutto il gruppo che il bullismo è tollerato; umiliare Tomás davanti a tutti fa degenerare la situazione e mortifica un bambino, cosa che raramente cambia il comportamento. Dopo la lezione: parlagli in privato, informa la sua famiglia e lascia un commento nel BO. Se succede di nuovo durante la lezione, chiedi aiuto al genitore.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Una studentessa che piange" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Uno studente piange perché qualcosa non va.</strong> Lucía (8 anni) avvia il suo gioco e compare un errore per la terza volta. Scoppia a piangere: <em>“Non ci riesco, sono negata.”</em> Cosa dici?`,
    opts:['“Va benissimo così, Lucía: è proprio con gli errori che i programmatori imparano. Anche gli sviluppatori professionisti trovano errori tutti i giorni. Guardiamolo insieme e scopriamo cosa sta cercando di dirci il computer.”','“Non piangere, non è niente di grave. Guarda, gli altri ci sono riusciti: puoi farcela anche tu.”','“Tranquilla, te lo sistemo io così andiamo avanti.”'],
    correct:0,
    fb:'<strong>Perché funziona:</strong> normalizza l’errore e lo presenta come parte dell’apprendimento, che nella programmazione è la pura verità. In più lascia a Lucía il controllo della soluzione, con te al suo fianco, così esce da quel momento sentendosi capace. “Non piangere” sminuisce l’emozione e il confronto con i compagni peggiora le cose. Sistemarlo al posto suo ferma le lacrime, ma conferma la sua convinzione di non esserne capace. In una lezione online, farle condividere lo schermo e risolvere insieme rende il supporto visibile e personale.'},
   {type:'choice', prompt:`<img src="Pictures_T3/A%20student%20refuses%20to%20work.png" alt="Una studentessa che si rifiuta di lavorare" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Uno studente si rifiuta di lavorare.</strong> Tutti stanno costruendo l’animazione della lezione. Sofía (12 anni) ha la videocamera accesa ma non fa nulla e dice <em>“Non mi va.”</em> Cosa dici?`,
    opts:['“Se non fai l’esercizio, dovrò dirlo ai tuoi genitori.”','“Ho notato che non hai ancora iniziato: cosa ti blocca? E se animassi un personaggio che ti piace davvero? L’obiettivo è solo esercitarsi con la tecnica del movimento.”','“Va bene, allora oggi guarda gli altri lavorare.”'],
    correct:1,
    fb:'<strong>Perché funziona:</strong> la curiosità al posto della minaccia ti fa scoprire cosa c’è davvero dietro il rifiuto (noia, difficoltà, stanchezza) e offrire una scelta mantiene l’obiettivo di apprendimento, dandole al tempo stesso la responsabilità dell’attività. Minacciare di chiamare i genitori ti trasforma nel nemico e fa del rifiuto una lotta di potere; lasciarla guardare le insegna che rifiutarsi funziona. Se il rifiuto si ripete in più lezioni, parla con la famiglia e lascia un commento nel BO: è uno schema da segnalare, non una punizione.'}
  ]
 }
},
{id:'tech', numLabel:'Modulo 3', emoji:'🔧', color:'var(--coral)',
 title:'Problemi tecnici ed equilibrio della classe',
 desc:'Perché il disordine è spesso un problema tecnico mascherato, cosa ne previene la maggior parte e come far continuare a imparare tutto il gruppo mentre risolvi il problema di uno studente.',
 obj:'Prevenire la maggior parte dei problemi tecnici prima che si presentino, seguire un protocollo chiaro quando succedono e mantenere coinvolto il resto del gruppo mentre risolvi il problema di uno studente.',
 sections:[
  {t:'⚖️ Perché se ne parla qui', html:`
   <div class="card"><p>I problemi tecnici spesso portano disorganizzazione in classe e, di conseguenza, gli studenti si annoiano.</p>
   <p>I problemi tecnici sono normali e possono capitare sia ai tutor sia agli studenti. Ecco cosa puoi fare per evitare che degenerino:</p></div>
   ${co('co-idea','💡',`<p><strong>La regola d’oro.</strong> Se non riesci a risolverlo da solo in <strong>10 minuti</strong>, smetti di provarci in silenzio. <strong>Comunica → documenta → segnala.</strong> Un genitore che sa cosa sta succedendo si fida di te. Uno che non lo sa, disdice.</p>`)}
  `},
  {t:'✅ Problemi tecnici degli studenti', html:`
   <div class="card"><p>Spesso i problemi tecnici che gli studenti incontrano a lezione dipendono dal fatto che usano un browser diverso da Google Chrome o dispositivi non adatti al corso, ad esempio provano a seguire la lezione da tablet, cellulare o iPad. Per questo è importante che tu conosca i requisiti minimi, così puoi aiutarli.</p></div>
   ${doavoid(
    ["Google Chrome aggiornato: l’unico browser pienamente compatibile",
     "Almeno 4 GB di RAM (8 GB per Blender o Unity)",
     "Una connessione stabile, minimo 10 Mbps: quando possibile, il cavo è meglio del Wi-Fi",
     "Almeno 5 GB di spazio libero: Unity e Blender richiedono molto di più"],
    ["Safari: dall’ultimo aggiornamento ha bug noti con la piattaforma Kodland, come pulsanti che non rispondono, schermate che non si caricano ed errori all’accesso",
     "Tablet / iPad per corsi come Roblox Studio o Unity: serve un vero computer",
     "Pensare che un problema su Mac sia disinteresse prima di verificare se è semplicemente Safari"]
   )}
   ${co('co-idea','🍎',`<p>Fai attenzione in particolare a Mac + Safari. Se uno studente con un Mac non riesce a far rispondere i pulsanti o la schermata non si carica, la soluzione è quasi sempre una: aprire la lezione in Google Chrome. Indica alle famiglie google.com/chrome.</p>`)}
   <div class="card"><h4>Di cosa ha bisogno ciascun corso</h4><div class="tbl-wrap"><table>
   <tr><th>Corso</th><th>Requisiti</th><th>Livello</th></tr>
   <tr><td>Funtech, Scratch, Python 1 / Pro, Web, Disegno</td><td>Solo Chrome, niente da installare: funziona su quasi tutti i dispositivi</td><td>Facile</td></tr>
   <tr><td>Creatività digitale, Graphic Design, Illustrazione</td><td>Chrome + uno strumento nel browser (Canva, Krita): verifica i requisiti di dimensione dello schermo e della tavoletta grafica</td><td>Da verificare</td></tr>
   <tr><td>Roblox Studio</td><td>Solo Windows o Mac (no tablet, no Linux), 4 GB di RAM, Roblox Studio installato prima della lezione 1</td><td>Da verificare</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac o Linux, consigliata la Java Edition, 4 GB di RAM, account Minecraft personale</td><td>Da verificare</td></tr>
   <tr><td>Modellazione 3D</td><td>Minimo 8 GB di RAM, mouse con rotellina obbligatorio, scheda grafica dedicata consigliata</td><td>Impegnativo</td></tr>
   <tr><td>Unity</td><td>8 GB di RAM obbligatori, 10 GB di spazio libero, solo Windows o Mac: niente Chromebook</td><td>Impegnativo</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Problemi tecnici dei tutor', html:`
   <div class="card"><p>La stessa attenzione vale per la tua postazione: un problema tecnico del tutor può bloccare una lezione tanto quanto quello di uno studente.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Fai una prova 30 minuti prima.</strong> Controlla connessione internet, videocamera e microfono prima di ogni lezione. Se noti un problema, avvisa il tuo Team Leader.`},
    {ic:'📷', html:`<strong>Cerca alternative.</strong> Se spegnere la videocamera migliora la connessione, fallo.`},
    {ic:'🎙️', html:`<strong>Tieni un microfono di riserva.</strong> Se le cuffie non funzionano, prova un’altra soluzione, come l’audio integrato del computer, e attiva sempre la riduzione del rumore di fondo in Classroom.`},
    {ic:'📶', html:`<strong>Controlla i driver e verifica se c’è una VPN attiva</strong>: le VPN tendono a rallentare la connessione.`},
    {ic:'🧊', html:`<strong>Lavori con uno strumento pesante come Blender?</strong> Nelle prime lezioni il corso include una guida su come configurarlo per ottenere prestazioni migliori.`},
    {ic:'💻', html:`<strong>Libera la RAM prima della lezione.</strong> Google Chrome offre la migliore esperienza con Classroom, ma tende anche a usare molta RAM: chiudi le schede e i programmi che non ti servono in quel momento.`},
    {ic:'👂', html:`<strong>Verifica in diretta.</strong> Prima che inizi la lezione, chiedi agli studenti se ti vedono e ti sentono bene: così intercetti subito eventuali problemi tecnici.`}
   ])}
  `},
  {t:'🚨 Come reagire: il protocollo', html:`
   ${co('co-danger','🚨',`<p><strong>Primo problema in una lezione:</strong> prova a risolverlo nei primi 10 minuti. Se ancora non funziona, avvisa il tuo Team Leader lo stesso giorno: sarà il Team Leader a decidere come recuperare la lezione. Scrivi al genitore entro 30 minuti, con un messaggio cordiale, dicendo che hai segnalato il problema al tuo team.</p>
   <p><strong>Seconda lezione di fila con un problema:</strong> apri un ticket al Servizio Clienti lo stesso giorno. Scrivi al genitore che hai segnalato il problema e che qualcuno lo ricontatterà per una lezione di recupero.</p>
   <p><strong>Una volta risolto:</strong> avvisa il genitore e chiudi il cerchio, anche se il problema sembrava piccolo.</p>`)}
  `},
  {t:'⚖️ Far continuare a imparare tutto il gruppo', html:`
   <div class="card"><p>Il vero errore non è solo il problema tecnico in sé: è un tutor così concentrato sul problema di uno studente che il resto del gruppo perde cinque o dieci minuti di lezione.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Datti un limite di tempo.</strong> Fai un rapido tentativo di soluzione con lo studente interessato (cambiare browser, riavviare), poi fai andare avanti il gruppo e torna da quello studente dopo o tra un’attività e l’altra.`},
     {ic:'👥', html:`<strong>Dai al gruppo qualcosa da fare</strong> nel momento stesso in cui inizi a risolvere il problema: non lasciarli a fissare uno schermo fermo.`},
     {ic:'🫂', html:`<strong>Fai sentire la tua calma.</strong> La tua reazione è la lezione, prima ancora della soluzione. Un tranquillo “a volte succede, troviamo un modo per andare avanti” mantiene stabile la classe.`}
   ])}
  `}
 ],
 ix:{
  title:'Problemi tecnici — verifica del modulo',
  instr:'70% per sbloccare la checklist finale.',
  items:[
   {type:'choice', prompt:'Sul Mac di uno studente nessun pulsante risponde. Qual è la tua prima mossa?', opts:['Chiedergli di aprire la lezione in Google Chrome','Pensare che abbia perso interesse e andare avanti','Aspettare che la piattaforma si sistemi da sola'], correct:0, fb:'Safari è la causa più comune dei pulsanti che non rispondono su Mac: passare a Chrome è la soluzione rapida.'},
   {type:'sort', prompt:'Che tipo di problema è?', card:'Lo schermo di uno studente continua a bloccarsi e i pulsanti non rispondono.', zones:[
     {label:'⚖️ Problema di disciplina', fb:'Non proprio: uno schermo bloccato e pulsanti che non rispondono sono sintomi tecnici tipici, il più delle volte dovuti a Safari su Mac.'},
     {label:'🔧 Problema tecnico', fb:'Esatto: indica un problema di browser o di dispositivo, non disinteresse. Il più delle volte si tratta di Safari su Mac.'}
   ], correctZone:1},
   {type:'choice', prompt:'Un problema tecnico si presenta per la prima volta durante una lezione. Entro quando devi scrivere al genitore?', opts:['Solo se si ripete','Entro la fine della settimana','Entro 30 minuti, dopo aver provato a risolverlo per 10 minuti'], correct:2, fb:'Un messaggio tempestivo e cordiale è ciò che mantiene intatta la fiducia della famiglia.'},
   {type:'choice', prompt:'Mentre risolvi il problema di connessione di uno studente, cosa dovrebbe fare il resto del gruppo?', opts:['Aspettare in silenzio che tu abbia finito','Lavorare su qualcosa che gli hai assegnato, così la lezione non si blocca','Guardarti mentre risolvi il problema, nel caso capiti anche a loro'], correct:1, fb:'Far lavorare il resto del gruppo è ciò che protegge l’intera lezione, non solo il problema di uno studente.'},
   {type:'sort', prompt:'Che tipo di problema è?', card:'Uno studente continua a riattivare il microfono per parlare di cose che non c’entrano durante la spiegazione.', zones:[
     {label:'⚖️ Problema di disciplina', fb:'Esatto: è uno schema di gestione della classe da riorientare, non un sintomo tecnico.'},
     {label:'🔧 Problema tecnico', fb:'Non proprio: è uno schema di disciplina, non un problema di dispositivo o di connessione.'}
   ], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Checklist finale', emoji:'✅', color:'var(--coral)',
 title:'Checklist finale',
 desc:'Niente quiz qui: solo l’essenziale di questo mini-training, prima di concluderlo.',
 obj:'Rivedi la checklist qui sotto. Questo modulo non prevede valutazione: leggilo, poi concludi il mini-training.',
 sections:[
  {t:'🛟 Se esiste già una richiesta di rimborso', html:`
   ${numlist([
     'Ho lasciato un commento nel BO lo stesso giorno in cui ho saputo della richiesta e ho coinvolto il mio Team Leader',
     'La mia lezione successiva con questo studente è stata un vero tentativo di recupero: un vero turno, un successo visibile, attenzione specifica, nessun accenno alla richiesta',
     'Non ho mai confermato l’approvazione né parlato di importi: ho usato l’unica frase sicura e ho lasciato il resto al Servizio Clienti'
   ])}
  `},  {t:'⚖️ Mantenere la disciplina in ogni lezione', html:`
   ${numlist([
     'Stabilisco le regole della classe nella prima lezione, verifico che gli studenti le capiscano e le condividano, e richiamo quelle, non il mio fastidio',
     'Con gli studenti più piccoli (6–8 anni) trasformo le regole in un gioco, riporto l’attenzione con un’attività invece che con un ordine e lodo il comportamento che voglio nel momento in cui si presenta',
     'Con gli studenti più grandi (12+) nomino il comportamento in modo breve, se possibile in privato, do loro un ruolo che incanali la loro energia e mantengo le aspettative con coerenza invece di ripetere gli avvertimenti',
     'In una classe silenziosa chiedo prima gentilmente di accendere la videocamera, poi offro altri modi sicuri per partecipare (uno sfondo che piace loro, la chat, la partecipazione in privato) senza mettere pressione',
     'Quando uno studente si scollega dall’attività, la adatto senza perdere l’obiettivo di apprendimento',
     'Prima regolo me stesso: mi prendo un momento, mantengo una voce calma e un ritmo tranquillo e non rispecchio mai l’intensità di uno studente',
     'Sono fermo sul rispetto: se uno studente usa un linguaggio volgare o attacca un compagno, silenzio il suo microfono per un momento per proteggere il gruppo e ne parliamo dopo la lezione',
     'Quando qualcosa va storto in un’attività, normalizzo l’errore e lo tratto come un’occasione per imparare',
     'Se una situazione non si risolve, chiedo aiuto al genitore, anche durante la lezione, e dopo informo la famiglia e lascio un commento nel BO',
     'Provo la mia postazione 30 minuti prima della lezione e faccio lavorare il gruppo mentre risolvo il problema tecnico di uno studente'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Questo è tutto il mini-training.</strong> Quando sei pronto, continua, poi completa il DST nell’LMS per chiudere l’attività.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
