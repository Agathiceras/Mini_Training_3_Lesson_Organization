/* Mini_Training_3_Lesson_Organization - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='pt';
const CONTENT = {
  flag:'🇧🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini-treinamento · Organização e disciplina da aula — Formação de tutores Kodland",
    logoSub:'Departamento de Desenvolvimento de Tutores',
    heroEyebrow:"🎯 Mini-treinamento",
    heroTitle:"Conduzindo uma aula <span class=\"h-pill\">bem organizada</span>",
    heroIntro:"Você recebeu este treinamento porque tem alunos que pediram reembolso por causa de desorganização ou de problemas de disciplina na aula. Aqui, vamos mostrar o que você pode fazer como tutor e como lidar com essas situações.",
    heroWork:"Percorra 5 módulos curtos. Cada verificação de módulo exige 70% ou mais para liberar o próximo. Cerca de 25 a 30 minutos no total.",
    startBtn:"🚀 Começar o treinamento",
    pathLabel:'Sua trilha de aprendizagem',
    devTitle:'Dev: liberar todos os módulos para revisão',
    backToPath:'Voltar à trilha',
    modulesPassed:'{done} / {total} módulos concluídos',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprovado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Começar',
    reviewBadge:'▶ Revisar',
    objective:'Objetivo',
    startCheck:'▶ Iniciar a verificação do módulo',
    finishBtn:'▶ Concluir o mini-treinamento',
    doneBack:'✓ Pronto — voltar à trilha',
    ixBadge:'📋 Verificação do módulo — 70% para liberar o próximo módulo',
    ixItemBadge:'📋 Verificação do módulo — item {i} de {n}',
    scoreSoFar:'Pontuação até agora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'Não foi bem isso — a resposta certa é “{label}”.',
    resPassed:'Módulo concluído!',
    resFailed:'Ainda não foi desta vez',
    resUnlocked:"Você liberou o próximo módulo.",
    resDone:"Você concluiu este mini-treinamento.",
    resNeed:'Você precisa de 70% para liberar o próximo módulo. Revise a seção acima e refaça a verificação.',
    resContinue:'Continuar para a trilha de aprendizagem',
    resFinish:'Continuar',
    resBack:'Voltar à trilha',
    resReview:'Revisar este módulo',
    doneEyebrow:'Mini-treinamento concluído',
    doneTitle:'🎉 Parabéns!',
    doneP1:"🎉 <strong>Parabéns! Você concluiu este mini-treinamento.</strong>",
    doneP2:"Está tudo pronto por aqui! Volte à página de treinamento do LMS pela qual você acessou este mini-treinamento para encerrar a tarefa.",
    doneP3:"👉 <strong>Se houver uma verificação ou avaliação listada logo abaixo do treinamento no LMS, não deixe de fazê-la e de alcançar a nota de aprovação</strong> — caso contrário, a tarefa pode continuar incompleta.",
    doneP4:'Boa sorte! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos os módulos estão liberados para revisão.',
    devOn:'🔓 Modo Dev ATIVADO — todos os módulos liberados',
    devOff:'🔒 Modo Dev DESATIVADO — progresso apagado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Faça',
    avoidLabel:'🚫 Evite',
    noticeLabel:'Atenção:',
    cvSee:'O que você vê:',
    cvDo:'O que você faz:',
    dtExample:'Exemplo de uma aula real',
    dtNext:'Próximo:',
    dtDone:"✅ Essas são as quatro áreas. Agora, classifique o que você vê.",
    tlVideoTitle:'{label} — exemplo de uma aula real',
    tlVideoMeta:'Veja como é essa fase em uma aula real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introdução', emoji:'🧩', color:'var(--coral)',
 title:'Por que você está aqui',
 desc:'Por que a organização e a disciplina da aula são o motivo que você consegue corrigir mais rápido — e as regras que valem a partir do momento em que um pedido de reembolso já chegou.',
 obj:'Entender por que a organização e a disciplina da aula são o motivo mais ligado à forma como você conduz a sala e saber exatamente o que fazer (e o que não fazer) quando já existe um pedido de reembolso.',
 sections:[
  {t:'🧩 Dois extremos, uma mesma causa', html:`
   <div class="card"><p>Duas salas de aula com aparências muito diferentes acabam sinalizadas por este mesmo motivo: uma sala que parece caótica e uma sala que ficou em silêncio total. As duas têm a ver com a mesma coisa — se cada criança sente que a aula é um lugar seguro e estruturado para participar.</p></div>
   ${co('co-idea','🎯',`<p><strong>Este é o motivo da lista que está mais diretamente ligado ao comportamento do tutor — e, por isso, o que você consegue corrigir mais rápido.</strong> Ao contrário de um nível ou de uma necessidade especial, esta é uma habilidade que você pode mudar já a partir da sua próxima aula, sem precisar da autorização de ninguém.</p>`)}
  `},
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   <div class="card"><p>Tudo o que vimos acima serve para identificar o problema cedo. Mas talvez você esteja fazendo este treinamento porque uma família <strong>já</strong> pediu reembolso. As regras abaixo valem independentemente do motivo — leia-as primeiro e depois use o restante do treinamento para entender o que levou a essa situação e o que ainda dá para fazer na aula.</p></div>
   ${co('co-idea','💡',`<p><strong>O pedido em si é criado pelo Client Service, não por você</strong> — essa parte não está sob o seu controle. O que continua sendo seu é tudo o que acontece na aula daqui em diante, e isso não é pouco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Não diga nada sobre o pedido em si</strong> — nem para a criança, nem para a família — a menos que o Client Service peça explicitamente que você diga algo específico. Agora o seu trabalho é a aula, não a conversa.</p>`)}
  `},
  {t:'🎯 Sua próxima aula é a tentativa de reverter a situação', html:`
   <div class="card"><p>Talvez você não tenha outra chance de mudar nada. Trate a próxima aula com essa criança como o momento que vai decidir tudo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dê a ela a vez de participar de verdade.</strong> Não uma pergunta sem sentido — um momento genuíno em que ela é vista e se sai bem.`},
     {ic:'🏆', html:`<strong>Garanta uma conquista cedo e bem visível.</strong> Ela deve sair da aula se sentindo capaz, não para trás.`},
     {ic:'👀', html:`<strong>Atenção específica</strong> — faça-a sentir que você reparou em algo concreto, em vez de elogiá-la de forma genérica.`},
     {ic:'🤐', html:`<strong>Nenhuma menção ao pedido</strong> — mesmo que a criança toque no assunto, redirecione com carinho e continue ensinando.`}
   ])}
  `},
  {t:'📮 Avise rápido e conheça a única frase segura', html:`
   <div class="card"><p>Você pode descobrir que existe um pedido pelos comentários do Client Service no perfil da criança no BO — não há nenhum sistema automático que avise você. Depois que você souber, o que você viu nas suas aulas é uma informação que o Client Service não tem de nenhuma outra forma.</p></div>
   ${numlist([
     'Deixe um comentário no BO no mesmo dia, com exatamente o que você observou — datas e detalhes, não impressões',
     'Inclua as palavras da própria família, literalmente, se você as tiver',
     'Avise seu Team Leader no mesmo dia',
     'Nunca confirme que um reembolso foi aprovado nem comente nenhum valor'
   ])}
   ${co('co-ok','✅',`<p><strong>A mensagem que é sempre segura:</strong> <em>“O Client Service vai ajudar você com isso.”</em> É aí que termina a sua parte da conversa — o Client Service assume a partir daí.</p>`)}
  `},
  {t:'🌱 Mantenha o cuidado depois', html:`
   <div class="card"><p>Seja o pedido retirado, a criança continue no seu grupo ou passe para outro tutor ou formato, continue dando atenção extra nas próximas aulas. Uma reversão que se sustenta por uma aula e depois volta discretamente ao normal muitas vezes não se sustenta de jeito nenhum.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Módulo 1', emoji:'⚖️', color:'var(--coral)',
 title:'Disciplina e flexibilidade',
 desc:'Os dois extremos que os tutores enfrentam em uma sala online, formas adequadas a cada idade de lidar com cada um e como adaptar uma atividade sem perder o objetivo de aprendizagem.',
 obj:'Reconhecer os dois padrões extremos — barulho demais ou uma sala em silêncio — e aplicar técnicas adequadas a cada idade para cada um, além de saber quando adaptar uma atividade em vez de brigar pelo controle dela.',
 sections:[
  {t:'📢 Extremo um: barulho demais', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T2/image1.png" alt="Uma criança tapando os ouvidos em uma sala barulhenta" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Alunos falando uns por cima dos outros sobre assuntos sem relação com a aula, linguagem inadequada, falta de respeito com os colegas. Se for deixado de lado, isso ensina silenciosamente à sala que tudo é permitido.</p></div>
   <div class="card"><h4>Crianças menores (6 a 8 anos)</h4><ul>
     <li>Transforme a regra em um jogo: o “volume da voz” como um botão que você pode apontar, em vez de uma bronca</li>
     <li>Redirecione com uma tarefa, não com uma ordem: “mostre sua tela e vamos construir isso juntos” funciona melhor do que “pare de falar”</li>
     <li>Elogie o comportamento que você quer ver, na hora e de forma específica, no momento em que ele acontece</li>
   </ul></div>
   <div class="card"><h4>Alunos mais velhos (12+)</h4><ul>
     <li>Nomeie o problema de forma direta e breve, individualmente se possível: “vamos manter o chat no assunto para que todos consigam acompanhar”</li>
     <li>Dê a eles um papel que canalize a energia — conduzir uma etapa, ajudar um colega</li>
     <li>Estabeleça a expectativa uma vez, com calma, e seja consistente em vez de repetir advertências</li>
   </ul></div>
  `},
  {t:'🤫 Extremo dois: a sala em silêncio', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T2/image2.png" alt="Uma criança tímida escondida atrás dos braços" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Alunos que não falam e não querem ligar a câmera. Isso é comum em pré-adolescentes e adolescentes — muitas vezes é timidez ou autoestima, mas também pode ser sinal de desinteresse, então continue observando.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Peça com gentileza que ligue a câmera'},
     {ic:'2️⃣', label:'Se não funcionar, tente outras formas de ajudar o aluno a se sentir seguro'},
     {ic:'3️⃣', label:'Conheça o aluno — os interesses dele são a sua porta de entrada'},
     {ic:'4️⃣', label:'Ainda nada? Tente a participação privada, sempre com uma frase que mostre que é um espaço seguro'}
   ])}
   ${co('co-idea','💡',`<p><strong>Uma ideia concreta:</strong> deixe o aluno manter a câmera desligada, mas definir como plano de fundo algo de que ele goste — ou, em um curso de design/arte, convide-o a desenhar algo que o represente (não literalmente ele mesmo) para usar como plano de fundo. Convide o grupo inteiro a fazer o mesmo, para que pareça algo compartilhado e ninguém se sinta apontado.</p>`)}
   <div class="card"><h4>Exemplos de frases por idade</h4>
   <p><strong>Menores (6 a 8 anos):</strong> <em>“Você não precisa mostrar o rosto se não quiser — mas eu adoraria ver o plano de fundo que você escolheu! Pode me contar sobre ele?”</em></p>
   <p><strong>Mais velhos (12+):</strong> <em>“Sem pressão com a câmera — quando você se sentir à vontade. Enquanto isso, fique à vontade para escrever no chat, se for mais fácil.”</em></p></div>
  `},
  {t:'🎨 Quando a distração significa que a própria atividade precisa ser flexível', html:`
   <div class="card"><p>Às vezes a “indisciplina” é, na verdade, um aluno desconectado porque o exercício em si não está funcionando para ele — ele não faz o que é pedido ou fica se distraindo o tempo todo.</p></div>
   ${co('co-ok','✅',`<p><strong>Adapte, sem perder o objetivo.</strong> Se o objetivo de hoje é aprender a animar e o aluno não quer seguir a história do plano de aula, deixe-o animar o personagem, objeto ou animal que o motive. Exemplo: o objetivo é aprender a técnica de animação em pixel art — o aluno pode animar qualquer objeto que escolher, desde que continue praticando a técnica.</p>`)}
  `},
  {t:'👪 Comunicação com as famílias e regras da aula', html:`
   ${co('co-idea','📮',`<p><strong>Informe os casos de indisciplina, silêncio persistente ou distração intensa</strong> para ajudar a construir um retrato mais completo do aluno — e porque os pais, quando sabem, muitas vezes podem ajudar em casa com o comportamento.</p>`)}
   ${co('co-star','📜',`<p><strong>Defina as regras da aula desde a primeira aula</strong> e confirme que os alunos as entendem e concordam com elas — não basta enunciá-las uma vez e presumir que foram compreendidas.</p>`)}
   <img class="mt-pic" src="Pictures_T2/rules.png" alt="Slide de exemplo: regras de conduta na aula">
  `}
 ],
 ix:{
  title:'Disciplina e flexibilidade — verificação do módulo',
  instr:'70% para liberar o próximo módulo.',
  items:[
   {type:'choice', prompt:'Um aluno menor (6 a 8 anos) fica falando por cima da aula sobre assuntos sem relação. Qual é a melhor primeira atitude?', opts:['Uma ordem clara para parar de falar, repetida até ele obedecer','Esperar — normalmente isso passa sozinho','Redirecioná-lo para a tarefa e elogiar o comportamento desejado assim que ele aparecer'], correct:2, fb:'Com crianças menores, redirecionar para a atividade — e valorizar o bom comportamento no momento em que acontece — funciona melhor do que uma ordem seca.'},
   {type:'choice', prompt:'Um aluno se recusa a fazer o exercício de narrativa de hoje, mas animaria com prazer outra coisa. O que você deve fazer?', opts:['Deixá-lo animar o que o motiva, desde que continue praticando a habilidade que está sendo ensinada','Insistir no exercício exatamente como está escrito, para o grupo ficar alinhado','Pular a atividade para esse aluno e seguir em frente'], correct:0, fb:'Ser flexível com o conteúdo, sem perder o objetivo de aprendizagem, mantém o aluno engajado e aprendendo.'},
   {type:'choice', prompt:'Quando as regras da aula devem ser definidas?', opts:['Somente quando surgir um problema, para que pareçam relevantes','Desde a primeira aula — e conferindo se foram entendidas e aceitas','Uma vez por mês, como lembrete para o grupo todo'], correct:1, fb:'Regras definidas e confirmadas desde a primeira aula evitam a maior parte do que este módulo aborda.'},
   {type:'choice', prompt:'Por que informar à família os casos de silêncio persistente ou distração?', opts:['Porque os tutores não têm permissão para lidar com comportamento sozinhos','Somente quando isso começa a afetar as notas do aluno','Isso ajuda a construir um retrato mais completo do aluno, e os pais muitas vezes podem ajudar em casa'], correct:2, fb:'Informar não é uma forma de culpar ninguém — é dar aos pais uma visibilidade sobre a qual eles também podem agir.'}
  ]
 }
},
{id:'selfreg', numLabel:'Módulo 2', emoji:'🧘', color:'var(--coral)',
 title:'Autorregulação e corregulação',
 desc:'Como a sua própria reação emocional, como adulto na sala, molda o comportamento de todos os alunos — e uma prática com os momentos difíceis mais comuns.',
 obj:'Entender autorregulação e corregulação, aplicá-las às suas próprias reações diante de indisciplina, agressividade, distração e silêncio, e praticar o que dizer nos quatro momentos difíceis mais comuns.',
 sections:[
  {t:'🧘 O que essas palavras significam, na prática', html:`
   <div class="card"><p><strong>Autorregulação</strong> é gerenciar o seu próprio estado emocional — perceber que você está frustrado ou desestabilizado e escolher a sua resposta em vez de reagir por impulso.</p>
   <p><strong>Corregulação</strong> é o que acontece em seguida: as crianças, especialmente as menores, “emprestam” o estado emocional do adulto calmo (ou não calmo) na sala. A sua reação não responde apenas ao comportamento delas — ela o molda ativamente.</p></div>
   ${co('co-idea','💡',`<p>Isso se aplica diretamente a todas as situações do Módulo 1: indisciplina, um aluno agressivo, um aluno distraído, um aluno em silêncio. A sua própria regulação é o primeiro passo em todas elas, antes de qualquer técnica.</p>`)}
  `},
  {t:'🎭 Aplicando em cada situação', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Indisciplina.</strong> Responda com calma e objetividade, sem ser ríspido nem irritado — um tutor irritado agrava uma sala barulhenta; um tutor firme e tranquilo a acalma.`},
     {ic:'😠', html:`<strong>Um aluno agressivo.</strong> Baixe a sua voz e o seu ritmo, sem espelhar a intensidade dele. Regule-se primeiro e depois aborde o comportamento.`},
     {ic:'📱', html:`<strong>Um aluno distraído.</strong> Redirecione com curiosidade, não com frustração — “o que está chamando a sua atenção agora?” soa muito diferente de um suspiro.`},
     {ic:'🤐', html:`<strong>Um aluno em silêncio.</strong> A paciência transmite segurança. A impaciência visível transmite pressão, e a pressão deixa uma criança quieta ainda mais quieta.`}
   ])}
  `},
  {t:'🧯 O que vale em todo momento difícil', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Volte às regras da aula.</strong> As regras combinadas na primeira aula são a sua âncora — remeta-se a elas, e não à sua própria irritação.`},
     {ic:'🧊', html:`<strong>Mantenha a calma, em voz alta.</strong> Respire o tempo que precisar antes de responder, para soar calmo mesmo que ainda não se sinta assim. As crianças percebem o tom mais rápido do que as palavras.`},
     {ic:'🛡️', html:`<strong>Proteja o restante do grupo.</strong> Se um aluno usar linguagem obscena ou atacar um colega, você pode silenciá-lo por um momento. Todas as outras crianças merecem uma aula segura.`},
     {ic:'🤝', html:`<strong>Seja firme quanto ao respeito.</strong> Calma não significa moleza: o respeito pelos outros não é negociável, e o grupo precisa ver você sustentar essa linha.`},
     {ic:'👪', html:`<strong>Peça ajuda ao responsável, se necessário</strong> — mesmo durante a aula, se a situação não puder ser resolvida e o responsável estiver por perto.`},
     {ic:'🌱', html:`<strong>Normalize os erros.</strong> Quando algo dá errado em uma tarefa, trate isso como uma oportunidade de aprender, na frente de todos.`},
     {ic:'📝', html:`<strong>Registre.</strong> Conte à família sobre o ocorrido e deixe um comentário no BO, para que fique registrado e ninguém seja pego de surpresa.`}
   ])}
  `}
 ],
 ix:{
  title:'Prática: o que você diria?',
  instr:'Agora vamos praticar alguns dos momentos difíceis mais comuns em uma aula online. Em cada caso, escolha o que você diria como tutor. Cada resposta vem acompanhada do motivo. 70% para liberar o próximo módulo.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20yells%20at%20the%20teacher.png" alt="Um aluno gritando" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Um aluno grita com você.</strong> Você pede ao Diego (11 anos) que compartilhe a tela, e ele grita: <em>“Isso é muito idiota! Não vou fazer esse seu exercício chato!”</em> O resto do grupo fica em silêncio, observando. O que você diz?`,
    opts:['“Como você se atreve a falar assim comigo! Mais uma vez e você está fora desta aula.”','“Estou vendo que você está muito frustrado, Diego, e quero ajudar. Lembre-se da nossa regra: nesta aula, nós nos tratamos com respeito. Respire um pouco — depois me conte o que não está funcionando para você.”','“Tudo bem, então você não precisa fazer. Vamos continuar com os outros.”'],
    correct:1,
    fb:'<strong>Por que funciona:</strong> a resposta calma faz três coisas ao mesmo tempo — nomeia a emoção (para o Diego se sentir ouvido), volta à regra da aula em vez de à sua própria raiva e abre um caminho de volta para a tarefa. Gritar de volta mostra exatamente o comportamento que você quer eliminar e transforma a sala em um palco; ceder ensina ao grupo inteiro que gritar livra do trabalho. Em uma aula online você não pode ir até o aluno, então o seu tom é a sua única ferramenta. Se continuar, silencie-o por um momento, chame o responsável se for preciso e, depois, informe a família e deixe um comentário no BO.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20bullies%20other%20students.png" alt="Um aluno zombando de outro" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Um aluno intimida um colega.</strong> Enquanto a Ana apresenta o projeto dela, o Tomás ativa o microfone e diz <em>“Essa é a coisa mais feia que eu já vi”</em> — e acrescenta um insulto. A Ana fica em silêncio. O que você diz?`,
    opts:['“Tomás, você está sendo um valentão e devia ter vergonha de si mesmo na frente de todo mundo.”','“Ora, foi só uma brincadeira — vamos continuar, Ana.”','“Tomás, isso não é aceitável. Nesta aula, o trabalho de todos é respeitado. Vou silenciar o seu microfone por um momento para a Ana poder terminar — conversamos depois da aula. Ana, pode continuar, adorei as cores que você escolheu.”'],
    correct:2,
    fb:'<strong>Por que funciona:</strong> a sua primeira tarefa é proteger o aluno que está sendo alvo. Silenciar o Tomás interrompe o dano imediatamente, sem uma discussão pública; a regra fica clara (o respeito pelos outros não é negociável) e você devolve à Ana o momento dela. “Foi só uma brincadeira” diz ao grupo inteiro que o bullying é tolerado; envergonhar o Tomás na frente de todos agrava a situação e humilha uma criança, o que raramente muda o comportamento. Depois da aula: converse com ele em particular, avise a família dele e deixe um comentário no BO. Se acontecer de novo durante a aula, peça ajuda ao responsável.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Um aluno chorando" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Um aluno chora porque algo não está dando certo.</strong> A Lucía (8 anos) executa o jogo dela e recebe um erro pela terceira vez. Ela começa a chorar: <em>“Não consigo, eu sou ruim nisso.”</em> O que você diz?`,
    opts:['“Está tudo bem, Lucía — os erros são o jeito como os programadores aprendem. Até os desenvolvedores profissionais recebem erros todos os dias. Vamos olhar isso juntas e descobrir o que o computador está tentando nos dizer.”','“Não chore, não é nada demais. Olha, todos os outros conseguiram — você também consegue.”','“Não se preocupe, eu corrijo para você e a gente segue em frente.”'],
    correct:0,
    fb:'<strong>Por que funciona:</strong> ela normaliza o erro e o reenquadra como parte do aprendizado — o que é a verdade na programação. Também mantém a Lucía no comando da correção, com você ao lado dela, para que ela termine o momento se sentindo capaz. “Não chore” desconsidera o sentimento, e compará-la com os colegas piora a situação. Corrigir por ela acaba com as lágrimas, mas confirma a crença de que ela não consegue. Em uma aula online, compartilhar a tela dela e resolver juntas torna o apoio visível e pessoal.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20refuses%20to%20work.png" alt="Um aluno se recusando a trabalhar" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Um aluno se recusa a trabalhar.</strong> Todos estão construindo a animação da aula. A Sofía (12 anos) está com a câmera ligada, mas não faz nada e diz <em>“Não estou com vontade.”</em> O que você diz?`,
    opts:['“Se você não fizer o exercício, vou ter que avisar os seus pais.”','“Percebi que você ainda não começou — o que está atrapalhando? Que tal animar um personagem de que você realmente goste? O objetivo é só praticar a técnica de movimento.”','“Tudo bem — então hoje só assista aos outros trabalharem.”'],
    correct:1,
    fb:'<strong>Por que funciona:</strong> a curiosidade, em vez da ameaça, descobre o que realmente está por trás da recusa (tédio, dificuldade, cansaço), e oferecer uma escolha mantém o objetivo de aprendizagem e ao mesmo tempo dá a ela a autoria da tarefa. Ameaçar chamar os pais faz de você o inimigo e transforma a recusa em uma disputa de poder; deixá-la apenas assistir ensina que recusar funciona. Se a recusa se repetir ao longo das aulas, converse com a família e deixe um comentário no BO — é um padrão que merece ser informado, não um motivo de punição.'}
  ]
 }
},
{id:'tech', numLabel:'Módulo 3', emoji:'🔧', color:'var(--coral)',
 title:'Problemas técnicos e equilíbrio da aula',
 desc:'Por que a desordem muitas vezes é um problema técnico disfarçado, o que evita a maior parte deles e como manter o grupo inteiro aprendendo enquanto você resolve o problema de um aluno.',
 obj:'Evitar a maior parte dos problemas técnicos antes de começarem, seguir um protocolo claro quando eles acontecem e manter o restante do grupo engajado enquanto você resolve o problema de um aluno.',
 sections:[
  {t:'⚖️ Por que isto está aqui', html:`
   <div class="card"><p>Os problemas técnicos muitas vezes levam à desorganização na sala de aula e, como consequência, os alunos ficam entediados.</p>
   <p>Problemas técnicos são normais e podem acontecer tanto com os instrutores quanto com os alunos. Veja o que você pode fazer para evitar que eles se agravem:</p></div>
   ${co('co-idea','💡',`<p><strong>A regra de ouro.</strong> Se você não conseguir resolver sozinho em <strong>10 minutos</strong>, pare de tentar em silêncio. <strong>Comunique → registre → escale.</strong> Um responsável que sabe o que está acontecendo confia em você. Um que não sabe, cancela.</p>`)}
  `},
  {t:'✅ Problemas técnicos dos alunos', html:`
   <div class="card"><p>Muitas vezes, os problemas técnicos que os alunos enfrentam na aula estão relacionados ao uso de um navegador diferente do Google Chrome ou de dispositivos inadequados para o curso, como tentar assistir à aula em um tablet, celular ou iPad. Por isso é importante que você conheça os requisitos mínimos para poder ajudá-los.</p></div>
   ${doavoid(
    ["Google Chrome atualizado — o único navegador totalmente compatível",
     "Pelo menos 4 GB de RAM (8 GB para Blender ou Unity)",
     "Uma conexão estável, de no mínimo 10 Mbps — sempre que possível, conexão por cabo é melhor que Wi-Fi",
     "Pelo menos 5 GB de espaço livre — Unity e Blender precisam de bem mais"],
    ["Safari — bugs conhecidos com a plataforma da Kodland desde a última atualização: botões que não respondem, telas que não carregam, erros ao entrar",
     "Tablets / iPads para cursos como Roblox Studio ou Unity — eles exigem um computador de verdade",
     "Presumir que um problema no Mac é falta de interesse antes de verificar se é simplesmente o Safari"]
   )}
   ${co('co-idea','🍎',`<p>Fique atento a Mac + Safari em especial. Se um aluno com Mac não consegue fazer os botões responderem ou a tela não carrega, a solução quase sempre é: abrir a aula no Google Chrome. Indique às famílias o endereço google.com/chrome.</p>`)}
   <div class="card"><h4>O que cada curso realmente exige</h4><div class="tbl-wrap"><table>
   <tr><th>Curso</th><th>Requisito</th><th>Nível</th></tr>
   <tr><td>Funtech, Scratch, Python 1 / Pro, Web, Drawing</td><td>Somente Chrome, sem nada para instalar — funciona em quase qualquer dispositivo</td><td>Fácil</td></tr>
   <tr><td>Digital Creativity, Graphic Design, Illustration</td><td>Chrome + uma ferramenta de navegador (Canva, Krita) — verifique os requisitos de tamanho de tela/tablet</td><td>Verificar</td></tr>
   <tr><td>Roblox Studio</td><td>Somente Windows ou Mac (sem tablet, sem Linux), 4 GB de RAM, Roblox Studio instalado antes da aula 1</td><td>Verificar</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac ou Linux, Java Edition recomendada, 4 GB de RAM, conta própria do Minecraft</td><td>Verificar</td></tr>
   <tr><td>3D Modeling</td><td>Mínimo de 8 GB de RAM, mouse com roda de rolagem obrigatório, placa de vídeo dedicada recomendada</td><td>Exigente</td></tr>
   <tr><td>Unity</td><td>8 GB de RAM obrigatórios, 10 GB de espaço livre, somente Windows ou Mac — sem Chromebook</td><td>Exigente</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Problemas técnicos dos tutores', html:`
   <div class="card"><p>O mesmo cuidado vale para a sua própria configuração — um problema técnico do tutor pode paralisar uma aula tanto quanto o de um aluno.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>Teste 30 minutos antes.</strong> Verifique a conexão de internet, a câmera e o microfone antes de cada aula. Se notar algum problema, avise o seu Team Leader.`},
    {ic:'📷', html:`<strong>Procure alternativas.</strong> Se desligar a câmera melhora a sua conexão, faça isso.`},
    {ic:'🎙️', html:`<strong>Tenha um microfone reserva.</strong> Se o seu headset não estiver funcionando, tente outra opção, como o áudio embutido do computador, e sempre ative a redução de ruído de fundo no Classroom.`},
    {ic:'📶', html:`<strong>Verifique os seus drivers e se há uma VPN ativa</strong> — as VPNs costumam deixar a conexão mais lenta.`},
    {ic:'🧊', html:`<strong>Trabalhando com uma ferramenta pesada como o Blender?</strong> O curso inclui, nas primeiras aulas, um guia de como configurá-lo para ter melhor desempenho.`},
    {ic:'💻', html:`<strong>Libere RAM antes da aula.</strong> O Google Chrome oferece a melhor experiência com o Classroom, mas também costuma usar muita RAM — feche as abas e os programas de que você não precisa agora.`},
    {ic:'👂', html:`<strong>Confirme ao vivo.</strong> Antes de a aula começar, confirme com os alunos que eles conseguem ver e ouvir você direito — assim você percebe os problemas técnicos cedo.`}
   ])}
  `},
  {t:'🚨 Reaja — o protocolo', html:`
   ${co('co-danger','🚨',`<p><strong>Primeiro problema em uma aula:</strong> tente resolver nos primeiros 10 minutos. Se ainda não funcionar, avise o seu Team Leader no mesmo dia — ele decidirá sobre uma opção de reposição. Envie uma mensagem ao responsável em até 30 minutos, com carinho, dizendo que você já avisou a sua equipe.</p>
   <p><strong>Segunda aula seguida com problema:</strong> abra um ticket no Client Service no mesmo dia. Envie uma mensagem ao responsável dizendo que você escalou o caso e que alguém entrará em contato sobre uma aula de reposição.</p>
   <p><strong>Depois de resolvido:</strong> avise o responsável e feche o ciclo — mesmo que o problema tenha parecido pequeno.</p>`)}
  `},
  {t:'⚖️ Mantendo o grupo inteiro aprendendo', html:`
   <div class="card"><p>O risco não é só o problema técnico em si — é um tutor tão concentrado no problema de um aluno que o restante do grupo perde cinco ou dez minutos de aula.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Defina um limite de tempo.</strong> Dê ao aluno afetado uma tentativa rápida de solução (trocar de navegador, reiniciar), depois siga com o grupo e retome o caso desse aluno ao final ou entre as atividades.`},
     {ic:'👥', html:`<strong>Dê ao grupo algo para fazer</strong> no instante em que você começar a investigar o problema — não deixe todos olhando para uma tela parada.`},
     {ic:'🫂', html:`<strong>Mantenha a calma, em voz alta.</strong> A sua reação é a lição, antes mesmo da solução. Um “isso acontece às vezes, vamos dar um jeito” tranquilo mantém a sala estável.`}
   ])}
  `}
 ],
 ix:{
  title:'Problemas técnicos — verificação do módulo',
  instr:'70% para liberar a lista de verificação final.',
  items:[
   {type:'choice', prompt:'Em um Mac, nenhum botão do aluno responde. Qual é a sua primeira atitude?', opts:['Pedir que ele abra a aula no Google Chrome','Presumir que ele perdeu o interesse e seguir em frente','Esperar a plataforma se resolver sozinha'], correct:0, fb:'O Safari é a causa mais comum de botões sem resposta em um Mac — trocar para o Chrome é a solução rápida.'},
   {type:'sort', prompt:'Que tipo de problema é este?', card:'A tela de um aluno fica travando e os botões não respondem.', zones:[
     {label:'⚖️ Problema de disciplina', fb:'Não foi bem isso — uma tela travada e botões sem resposta são sintomas técnicos clássicos, na maioria das vezes o Safari em um Mac.'},
     {label:'🔧 Problema técnico', fb:'Correto — isso aponta para um problema de navegador ou de dispositivo, não de desinteresse. Na maioria das vezes é o Safari em um Mac.'}
   ], correctZone:1},
   {type:'choice', prompt:'Um problema técnico acontece pela primeira vez em uma aula. Em quanto tempo você deve enviar uma mensagem ao responsável?', opts:['Somente se acontecer de novo','Até o fim da semana','Em até 30 minutos, depois de tentar resolver por 10 minutos'], correct:2, fb:'Uma mensagem rápida e carinhosa é o que mantém a confiança da família.'},
   {type:'choice', prompt:'Enquanto você resolve a conexão de um aluno, o que o restante do grupo deve estar fazendo?', opts:['Esperando em silêncio até você terminar','Trabalhando em algo que você passou, para a aula não parar','Observando você resolver o problema, caso aconteça com eles também'], correct:1, fb:'Manter o restante do grupo trabalhando é o que protege a aula inteira, e não apenas o problema de um aluno.'},
   {type:'sort', prompt:'Que tipo de problema é este?', card:'Um aluno fica ativando o microfone para falar de assuntos sem relação durante a explicação.', zones:[
     {label:'⚖️ Problema de disciplina', fb:'Correto — este é um padrão de gestão de sala de aula a ser redirecionado, não um sintoma técnico.'},
     {label:'🔧 Problema técnico', fb:'Não foi bem isso — este é um padrão de disciplina, não um problema de dispositivo ou de conexão.'}
   ], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificação final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificação final',
 desc:'Aqui não há quiz — apenas o essencial deste mini-treinamento, antes de você encerrá-lo.',
 obj:'Revise a lista de verificação abaixo. Este módulo não vale nota — leia e depois conclua o mini-treinamento.',
 sections:[
  {t:'🛟 Se já existe um pedido de reembolso', html:`
   ${numlist([
     'Deixei um comentário no BO no mesmo dia em que soube do pedido e avisei o meu Team Leader',
     'Minha próxima aula com esse aluno foi uma tentativa real de reverter a situação — a vez de participar de verdade, uma conquista visível, atenção específica, sem mencionar o pedido',
     'Nunca confirmei uma aprovação nem comentei um valor — usei a única frase segura e deixei o resto para o Client Service'
   ])}
  `},  {t:'⚖️ Mantendo a disciplina em todas as aulas', html:`
   ${numlist([
     'Defini as regras da aula na primeira aula, confirmo que os alunos as entendem e concordam com elas — e me remeto a elas, e não à minha própria irritação',
     'Com os alunos menores (6 a 8 anos), transformo as regras em jogo, redireciono com uma tarefa em vez de uma ordem e elogio o comportamento que quero no momento em que ele aparece',
     'Com os alunos mais velhos (12+), nomeio o comportamento de forma breve — individualmente, se possível —, dou a eles um papel que canalize a energia e sou consistente em vez de repetir advertências',
     'Em uma sala em silêncio, peço com gentileza as câmeras primeiro e depois ofereço outras formas seguras de participar — um plano de fundo de que gostem, o chat, a participação privada — sem pressão',
     'Quando um aluno se desconecta da tarefa, eu a adapto sem perder o objetivo de aprendizagem',
     'Eu me regulo primeiro: respiro, mantenho uma voz calma e um ritmo constante e nunca espelho a intensidade do aluno',
     'Sou firme quanto ao respeito: se um aluno usa linguagem obscena ou ataca um colega, eu o silencio por um momento para proteger o grupo, e conversamos depois da aula',
     'Quando algo dá errado em uma tarefa, normalizo o erro e o trato como uma oportunidade de aprender',
     'Se uma situação não puder ser resolvida, peço ajuda ao responsável — mesmo durante a aula — e depois informo a família e deixo um comentário no BO',
     'Testo a minha configuração 30 minutos antes da aula e mantenho o grupo trabalhando enquanto resolvo o problema técnico de um aluno'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Este é o mini-treinamento completo.</strong> Quando estiver pronto, continue — depois faça o DST no LMS para encerrar a tarefa.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
