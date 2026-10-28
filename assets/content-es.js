/* Mini_Training_3_Lesson_Organization - Spanish content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='es';
const CONTENT = {
  flag:'🇪🇸', dir:'ltr',
  ui:{
    pageTitle:"Mini-entrenamiento · Organización y disciplina en clase — Capacitación de tutores de Kodland",
    logoSub:'Departamento de Desarrollo de Tutores',
    heroEyebrow:"🎯 Mini-entrenamiento",
    heroTitle:"Dirigir una clase <span class=\"h-pill\">bien organizada</span>",
    heroIntro:"Has recibido este entrenamiento porque tienes estudiantes que han solicitado un reembolso por desorganización o problemas de disciplina en clase. Aquí te mostraremos qué puedes hacer como tutor y cómo manejar estas situaciones.",
    heroWork:"Completa 5 módulos cortos. Cada comprobación de módulo requiere un 70 % o más para desbloquear el siguiente. En total, unos 25–30 minutos.",
    startBtn:"🚀 Comenzar el entrenamiento",
    pathLabel:'Tu ruta de aprendizaje',
    devTitle:'Dev: desbloquear todos los módulos para revisión',
    backToPath:'Volver a la ruta',
    modulesPassed:'{done} / {total} módulos aprobados',
    moduleN:'Módulo {n}',
    of:'de',
    locked:'🔒 Bloqueado',
    passedBadge:'✅ Aprobado · {pct}%',
    reviewedBadge:'✅ Revisado',
    startBadge:'▶ Comenzar',
    reviewBadge:'▶ Repasar',
    objective:'Objetivo',
    startCheck:'▶ Comenzar la comprobación del módulo',
    finishBtn:'▶ Finalizar el mini-entrenamiento',
    doneBack:'✓ Listo — volver a la ruta',
    ixBadge:'📋 Comprobación del módulo — 70 % para desbloquear el siguiente módulo',
    ixItemBadge:'📋 Comprobación del módulo — pregunta {i} de {n}',
    scoreSoFar:'Puntuación hasta ahora: {c} / {t}',
    continue:'Continuar →',
    sortWrong:'No exactamente — la respuesta correcta es «{label}».',
    resPassed:'¡Módulo aprobado!',
    resFailed:'Todavía no lo logras',
    resUnlocked:"Has desbloqueado el siguiente módulo.",
    resDone:"Has completado este mini-entrenamiento.",
    resNeed:'Necesitas un 70 % para desbloquear el siguiente módulo. Repasa la sección anterior y vuelve a intentar la comprobación.',
    resContinue:'Continuar a la ruta de aprendizaje',
    resFinish:'Continuar',
    resBack:'Volver a la ruta',
    resReview:'Repasar este módulo',
    doneEyebrow:'Mini-entrenamiento completado',
    doneTitle:'🎉 ¡Felicidades!',
    doneP1:"🎉 <strong>¡Felicidades! Has completado este mini-entrenamiento.</strong>",
    doneP2:"¡Ya terminaste aquí! Por favor, vuelve a la página de capacitación del LMS desde la que accediste a este mini-entrenamiento para cerrar la tarea.",
    doneP3:"👉 <strong>Si debajo de la capacitación en el LMS aparece una comprobación o evaluación, asegúrate de completarla y obtener una puntuación aprobatoria</strong> — de lo contrario, la tarea podría quedar incompleta.",
    doneP4:'¡Mucho éxito! ❤️',
    doneP5:'',
    devUnlockAlert:'Modo Dev: todos los módulos están ahora desbloqueados para revisión.',
    devOn:'🔓 Modo Dev activado — todos los módulos desbloqueados',
    devOff:'🔒 Modo Dev desactivado — progreso borrado',
    devBadge:'🔓 MODO DEV',
    doLabel:'✅ Haz',
    avoidLabel:'🚫 Evita',
    noticeLabel:'Ten en cuenta:',
    cvSee:'Lo que ves:',
    cvDo:'Lo que haces:',
    dtExample:'Ejemplo de una clase real',
    dtNext:'Siguiente:',
    dtDone:"✅ Eso es todo sobre las cuatro áreas. Ahora, clasifica lo que ves.",
    tlVideoTitle:'{label} — un ejemplo de una clase real',
    tlVideoMeta:'Mira cómo se ve esta fase en una clase real'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Introducción', emoji:'🧩', color:'var(--coral)',
 title:'Por qué estás aquí',
 desc:'Por qué la organización y la disciplina en clase son el motivo que puedes corregir más rápido — y las reglas que se aplican cuando ya ha llegado una solicitud de reembolso.',
 obj:'Entender por qué la organización y la disciplina en clase son el motivo que depende más directamente de cómo diriges el aula, y qué hacer (y qué no hacer) exactamente cuando ya existe una solicitud de reembolso.',
 sections:[
  {t:'🧩 Dos extremos, una misma causa', html:`
   <div class="card"><p>Dos aulas que parecen muy distintas terminan señaladas por este mismo motivo: un aula que se siente caótica y un aula que se ha quedado en silencio. Ambas tienen que ver con lo mismo — si cada niño siente que la clase es un lugar seguro y estructurado en el que participar.</p></div>
   ${co('co-idea','🎯',`<p><strong>De todos los motivos de esta lista, este es el que depende más directamente del comportamiento del tutor — y, por tanto, el que puedes corregir más rápido.</strong> A diferencia de un nivel o de una necesidad especial, es una habilidad que puedes cambiar desde tu próxima clase, sin necesitar el permiso de nadie.</p>`)}
  `},
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   <div class="card"><p>Todo lo anterior trata de detectarlo pronto. Pero puede que estés abriendo este entrenamiento porque una familia <strong>ya</strong> ha pedido un reembolso. Las reglas de abajo se aplican sea cual sea el motivo — léelas primero y usa el resto del entrenamiento para entender qué llevó hasta aquí y qué puedes seguir haciendo en la clase.</p></div>
   ${co('co-idea','💡',`<p><strong>La solicitud la crea Servicio al Cliente, no tú</strong> — esa parte no está en tus manos. Lo que sigue siendo tuyo es todo lo que sucede en la clase a partir de ahora, y no es poco.</p>`)}
   ${co('co-danger','🤐',`<p><strong>No digas nada sobre la solicitud en sí</strong> — ni al niño ni a la familia — a menos que Servicio al Cliente te pida expresamente decir algo concreto. Tu trabajo ahora es la clase, no la conversación.</p>`)}
  `},
  {t:'🎯 Tu próxima clase es el intento de recuperación', html:`
   <div class="card"><p>Puede que no tengas la oportunidad de cambiar nada más. Trata la próxima clase con este niño como el momento que lo decide todo.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Dale un turno de verdad.</strong> No una pregunta sin sentido, sino un momento genuino en el que se sienta visto y tenga éxito.`},
     {ic:'🏆', html:`<strong>Prepara un logro temprano y visible.</strong> Debe salir de la clase sintiéndose capaz, no rezagado.`},
     {ic:'👀', html:`<strong>Atención específica</strong> — haz que se sienta notado por algo concreto, no elogiado de forma genérica.`},
     {ic:'🤐', html:`<strong>Ni una palabra sobre la solicitud</strong> — incluso si el niño la menciona, redirige con calidez y sigue enseñando.`}
   ])}
  `},
  {t:'📮 Avisa rápido y conoce la única frase segura', html:`
   <div class="card"><p>Puedes enterarte de que existe una solicitud por los comentarios de Servicio al Cliente en el perfil del niño en BO — no hay ningún sistema automático que te avise. Una vez que lo sepas, lo que has visto en tus clases es información que Servicio al Cliente no tiene de ninguna otra forma.</p></div>
   ${numlist([
     'Deja un comentario en BO ese mismo día con exactamente lo que has visto — fechas y datos concretos, no impresiones',
     'Incluye las palabras exactas de la familia, textualmente, si las tienes',
     'Avisa a tu Team Leader ese mismo día',
     'Nunca confirmes que un reembolso ha sido aprobado ni hables de ninguna cantidad'
   ])}
   ${co('co-ok','✅',`<p><strong>El mensaje que siempre es seguro decir:</strong> <em>«Servicio al Cliente le ayudará con esto.»</em> Ahí termina tu parte de la conversación — Servicio al Cliente se encarga a partir de ese punto.</p>`)}
  `},
  {t:'🌱 Mantén el esfuerzo después', html:`
   <div class="card"><p>Tanto si la solicitud se retira, como si el niño sigue en tu grupo o pasa a otro tutor o a otro formato, sigue dándole un cuidado extra durante las siguientes clases. Una recuperación que se sostiene una clase y luego vuelve en silencio a la normalidad, muchas veces no se sostiene en absoluto.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Módulo 1', emoji:'⚖️', color:'var(--coral)',
 title:'Disciplina y flexibilidad',
 desc:'Los dos extremos a los que se enfrentan los tutores en un aula en línea, formas de manejar cada uno según la edad y cómo adaptar una tarea sin perder el objetivo de aprendizaje.',
 obj:'Reconocer los dos patrones extremos — demasiado ruido o un aula en silencio — y aplicar técnicas adecuadas a la edad para cada uno, además de saber cuándo adaptar una tarea en lugar de pelear por el control.',
 sections:[
  {t:'📢 Primer extremo: demasiado ruido', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T2/image1.png" alt="Un niño tapándose los oídos en un lugar ruidoso" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Estudiantes que hablan unos encima de otros sobre cosas que no tienen que ver con la clase, lenguaje inapropiado, falta de respeto a los compañeros. Si lo dejas pasar, el aula aprende en silencio que todo vale.</p></div>
   <div class="card"><h4>Niños pequeños (6–8)</h4><ul>
    <li>Convierte la norma en un juego: el «volumen de voz» como una perilla que puedes señalar, no como un regaño</li>
    <li>Redirige con una tarea, no con una orden: «enséñame tu pantalla y construyamos esto juntos» funciona mejor que «deja de hablar»</li>
    <li>Elogia el comportamiento que quieres ver, de inmediato y de forma concreta, en el momento en que ocurre</li>
   </ul></div>
   <div class="card"><h4>Estudiantes mayores (12+)</h4><ul>
    <li>Nómbralo directamente y en pocas palabras, en privado si es posible: «mantengamos el chat en el tema para que todos puedan seguir la clase»</li>
    <li>Dales un rol que canalice esa energía — dirigir un paso, ayudar a un compañero</li>
    <li>Establece la expectativa una vez, con calma, y sé constante en cumplirla en lugar de repetir advertencias</li>
   </ul></div>
  `},
  {t:'🤫 Segundo extremo: el aula en silencio', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T2/image2.png" alt="Un niño tímido escondiéndose detrás de sus brazos" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Estudiantes que no hablan y no quieren encender la cámara. Es habitual en preadolescentes y adolescentes — a menudo por timidez o autoestima, aunque también puede ser una señal de desinterés, así que sigue observando.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Pide con amabilidad que encienda la cámara'},
     {ic:'2️⃣', label:'Si no funciona, prueba otras formas de que se sienta seguro'},
     {ic:'3️⃣', label:'Conócelo — sus intereses son tu puerta de entrada'},
     {ic:'4️⃣', label:'¿Sigue sin funcionar? Prueba la participación en privado, siempre con una frase que deje claro que es un espacio seguro'}
   ])}
   ${co('co-idea','💡',`<p><strong>Una idea concreta:</strong> deja que mantenga la cámara apagada pero que ponga de fondo algo que le guste — o, en un curso de diseño o arte, invítalo a dibujar algo que lo represente (no literalmente a sí mismo) para usarlo de fondo. Invita a todo el grupo a hacer lo mismo, para que se sienta como algo compartido y no como que lo señalas.</p>`)}
   <div class="card"><h4>Ejemplos de frases según la edad</h4>
   <p><strong>Pequeños (6–8):</strong> <em>«No tienes que mostrar tu cara si no quieres — ¡pero me encantaría ver qué fondo elegiste! ¿Me cuentas qué es?»</em></p>
   <p><strong>Mayores (12+):</strong> <em>«Sin presión con la cámara — cuando te sientas listo. Mientras tanto, si te resulta más fácil, puedes escribir en el chat.»</em></p></div>
  `},
  {t:'🎨 Cuando la distracción significa que la propia tarea debe adaptarse', html:`
   <div class="card"><p>A veces la «indisciplina» es en realidad un estudiante que se ha desconectado porque el ejercicio en sí no le está funcionando — no hace lo que se le pide, o se distrae una y otra vez.</p></div>
   ${co('co-ok','✅',`<p><strong>Adáptalo, sin perder el objetivo.</strong> Si el objetivo de hoy es aprender a animar, y el estudiante no quiere seguir la historia del plan de clase, deja que anime el personaje, objeto o animal que le motive. Ejemplo: el objetivo es aprender la técnica de animación en pixel art — el estudiante puede animar cualquier objeto que elija, siempre que siga practicando la técnica.</p>`)}
  `},
  {t:'👪 Comunicación con la familia y normas de la clase', html:`
   ${co('co-idea','📮',`<p><strong>Reporta los casos de indisciplina, silencio persistente o mucha distracción</strong> para ayudar a construir una imagen más completa del estudiante — y porque los padres, cuando lo saben, muchas veces pueden ayudar con el comportamiento desde casa.</p>`)}
   ${co('co-star','📜',`<p><strong>Establece las normas de la clase desde la primera clase</strong>, y comprueba que los estudiantes las entienden y están de acuerdo — no te limites a decirlas una vez dando por hecho que quedaron claras.</p>`)}
   <img class="mt-pic" src="Pictures_T2/rules.png" alt="Diapositiva de ejemplo: normas de conducta en clase">
  `}
 ],
 ix:{
  title:'Disciplina y flexibilidad — comprobación del módulo',
  instr:'70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:'Un estudiante pequeño (6–8) sigue hablando durante la clase de cosas que no tienen nada que ver. ¿Cuál es la mejor primera acción?', opts:['Una orden clara para que deje de hablar, repetida hasta que haga caso','Esperar — normalmente se le pasa solo','Redirigirlo hacia la tarea y elogiar el comportamiento que quieres en cuanto aparezca'], correct:2, fb:'Con los más pequeños, redirigir hacia la actividad — y reconocer el buen comportamiento en el momento en que ocurre — funciona mejor que una orden seca.'},
   {type:'choice', prompt:'Un estudiante se niega a hacer el ejercicio narrativo de hoy, pero con gusto animaría otra cosa. ¿Qué deberías hacer?', opts:['Dejar que anime lo que le motive, siempre que siga practicando la habilidad que se está enseñando','Insistir en el ejercicio tal como está escrito, para que el grupo vaya parejo','Saltarse la actividad con ese estudiante y seguir adelante'], correct:0, fb:'Ser flexible con el contenido, sin perder el objetivo de aprendizaje, mantiene al estudiante involucrado y aprendiendo.'},
   {type:'choice', prompt:'¿Cuándo hay que establecer las normas de la clase?', opts:['Solo cuando surge un problema, para que tengan sentido','Desde la primera clase — comprobando que se entienden y se aceptan','Una vez al mes, como recordatorio para todo el grupo'], correct:1, fb:'Las normas establecidas y confirmadas desde la primera clase previenen la mayor parte de lo que cubre este módulo.'},
   {type:'choice', prompt:'¿Por qué reportar a la familia los casos de silencio persistente o distracción?', opts:['Porque los tutores no pueden manejar el comportamiento por su cuenta','Solo cuando empieza a afectar a las calificaciones del estudiante','Ayuda a construir una imagen más completa del estudiante, y los padres muchas veces pueden ayudar desde casa'], correct:2, fb:'Reportar no consiste en buscar culpables — da a los padres una visibilidad con la que ellos también pueden actuar.'}
  ]
 }
},
{id:'selfreg', numLabel:'Módulo 2', emoji:'🧘', color:'var(--coral)',
 title:'Autorregulación y corregulación',
 desc:'Cómo tu propia reacción emocional, como adulto en el aula, influye en el comportamiento de cada estudiante — y una práctica con los momentos difíciles más comunes.',
 obj:'Entender la autorregulación y la corregulación, aplicarlas a tus propias reacciones ante la indisciplina, la agresividad, la distracción y el silencio, y practicar qué decir en los cuatro momentos difíciles más comunes.',
 sections:[
  {t:'🧘 Qué significan estas palabras en la práctica', html:`
   <div class="card"><p>La <strong>autorregulación</strong> es gestionar tu propio estado emocional — darte cuenta de que estás frustrado o descolocado, y elegir tu respuesta en lugar de reaccionar por impulso.</p>
   <p>La <strong>corregulación</strong> es lo que viene después: los niños, sobre todo los más pequeños, toman prestado su estado emocional del adulto tranquilo (o no tan tranquilo) que tienen delante. Tu reacción no solo responde a su comportamiento — lo moldea activamente.</p></div>
   ${co('co-idea','💡',`<p>Esto se aplica directamente a cada situación del Módulo 1: la indisciplina, un estudiante agresivo, uno distraído, uno en silencio. Tu propia regulación es el primer paso en todas ellas, antes que cualquier técnica.</p>`)}
  `},
  {t:'🎭 Cómo aplicarlo a cada situación', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Indisciplina.</strong> Responde con calma y naturalidad, sin brusquedad ni fastidio — un tutor irritado hace que un aula ruidosa se descontrole más; uno sereno la calma.`},
     {ic:'😠', html:`<strong>Un estudiante agresivo.</strong> Baja tu propio tono y ritmo, no imites su intensidad. Primero regúlate tú, y después aborda el comportamiento.`},
     {ic:'📱', html:`<strong>Un estudiante distraído.</strong> Redirige con curiosidad, no con frustración — «¿qué te está llamando la atención ahora mismo?» se recibe de una forma muy distinta a un suspiro.`},
     {ic:'🤐', html:`<strong>Un estudiante en silencio.</strong> La paciencia transmite seguridad. La impaciencia visible transmite presión, y la presión hace que un niño callado se cierre todavía más.`}
   ])}
  `},
  {t:'🧯 Lo que vale en cualquier momento difícil', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Vuelve a las normas de la clase.</strong> Las normas que acordaron en la primera clase son tu ancla — remítete a ellas, no a tu propio enfado.`},
     {ic:'🧊', html:`<strong>Mantén la calma, en voz alta.</strong> Tómate el momento que necesites antes de responder, para sonar tranquilo aunque todavía no lo estés. Los niños leen el tono más rápido que las palabras.`},
     {ic:'🛡️', html:`<strong>Protege al resto del grupo.</strong> Si un estudiante usa lenguaje obsceno o ataca a un compañero, puedes silenciarlo un momento. Todos los demás niños merecen una clase segura.`},
     {ic:'🤝', html:`<strong>Sé firme con el respeto.</strong> Calma no significa blandura: el respeto a los demás no se negocia, y el grupo necesita ver que mantienes ese límite.`},
     {ic:'👪', html:`<strong>Pide ayuda a los padres si hace falta</strong> — incluso durante la clase, si una situación no se calma y el padre o la madre está cerca.`},
     {ic:'🌱', html:`<strong>Normaliza los errores.</strong> Cuando algo sale mal en una tarea, trátalo como una oportunidad para aprender, delante de todos.`},
     {ic:'📝', html:`<strong>Repórtalo.</strong> Cuéntale el incidente a la familia y deja un comentario en BO, para que quede registro y nadie se lleve una sorpresa.`}
   ])}
  `}
 ],
 ix:{
  title:'Práctica: ¿qué dirías?',
  instr:'Ahora practiquemos algunos de los momentos difíciles más comunes en una clase en línea. En cada caso, elige lo que dirías como tutor. Cada respuesta viene con el motivo que la respalda. 70 % para desbloquear el siguiente módulo.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20yells%20at%20the%20teacher.png" alt="Un estudiante gritando" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Un estudiante te grita.</strong> Le pides a Diego (11) que comparta su pantalla, y grita: <em>«¡Esto es una tontería! ¡No voy a hacer tu ejercicio aburrido!»</em> El resto del grupo se queda callado mirando. ¿Qué dices?`,
    opts:['«¡Ni se te ocurra hablarme así! Una vez más y te sales de la clase.»','«Noto que estás muy frustrado, Diego, y quiero ayudarte. Recuerda nuestra norma: en esta clase nos hablamos con respeto. Respira — y luego cuéntame qué es lo que no te está funcionando.»','«Bueno, está bien, no tienes que hacerlo. Sigamos con los demás.»'],
    correct:1,
    fb:'<strong>Por qué funciona:</strong> la respuesta tranquila hace tres cosas a la vez — pone nombre a la emoción (para que Diego se sienta escuchado), vuelve a la norma de la clase en lugar de a tu propio enfado y abre un camino de vuelta a la tarea. Gritarle de vuelta es justo el comportamiento que quieres frenar y convierte el aula en un escenario; ceder le enseña a todo el grupo que gritar sirve para librarse del trabajo. En una clase en línea no puedes acercarte al estudiante, así que tu tono es tu única herramienta. Si continúa, silencia su micrófono un momento, contacta a los padres si hace falta y, después, repórtalo a la familia y deja un comentario en BO.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20bullies%20other%20students.png" alt="Un estudiante burlándose de otro" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Un estudiante se burla de un compañero.</strong> Mientras Ana comparte su proyecto, Tomás activa su micrófono y dice <em>«Es lo más feo que he visto en mi vida»</em> — y añade un insulto. Ana se queda callada. ¿Qué dices?`,
    opts:['«Tomás, estás siendo un abusón y deberías avergonzarte delante de todos.»','«Venga, solo era una broma — sigamos, Ana.»','«Tomás, eso no está bien. En esta clase se respeta el trabajo de todos. Voy a silenciar tu micrófono un momento para que Ana pueda terminar — hablamos después de clase. Ana, sigue por favor, me encantan los colores que elegiste.»'],
    correct:2,
    fb:'<strong>Por qué funciona:</strong> tu primer trabajo es proteger al estudiante atacado. Silenciar a Tomás detiene el daño de inmediato sin una discusión en público, la norma queda clara (el respeto a los demás no se negocia) y le devuelves a Ana su momento. «Solo era una broma» le dice a todo el grupo que las burlas se toleran; avergonzar a Tomás delante de todos lo agrava y humilla a un niño, lo que rara vez cambia el comportamiento. Después de la clase: habla con él en privado, cuéntaselo a su familia y deja un comentario en BO. Si vuelve a pasar durante la clase, pide ayuda a los padres.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Un estudiante llorando" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Un estudiante llora porque algo no le sale.</strong> Lucía (8) ejecuta su juego y le sale un error por tercera vez. Empieza a llorar: <em>«No puedo, soy mala para esto.»</em> ¿Qué dices?`,
    opts:['«Está totalmente bien, Lucía — los errores son la forma en que aprenden los programadores. Incluso los desarrolladores profesionales tienen errores todos los días. Mirémoslo juntas y descubramos qué nos está intentando decir la computadora.»','«No llores, no es para tanto. Mira, todos los demás lo lograron — tú también puedes.»','«No te preocupes, yo te lo arreglo y así seguimos.»'],
    correct:0,
    fb:'<strong>Por qué funciona:</strong> normaliza el error y lo presenta como parte del aprendizaje — que es la verdad en programación. Además, deja que Lucía siga a cargo de arreglarlo, contigo a su lado, así que termina el momento sintiéndose capaz. «No llores» resta importancia a lo que siente, y compararla con sus compañeros lo empeora. Arreglarlo tú detiene el llanto, pero confirma su creencia de que no puede hacerlo. En una clase en línea, compartir su pantalla y resolverlo juntas hace que el apoyo sea visible y personal.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20refuses%20to%20work.png" alt="Un estudiante que se niega a trabajar" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Un estudiante se niega a trabajar.</strong> Todos están creando la animación de la clase. Sofía (12) tiene la cámara encendida pero no hace nada y dice <em>«No tengo ganas.»</em> ¿Qué dices?`,
    opts:['«Si no haces el ejercicio, voy a tener que decírselo a tus padres.»','«He notado que no has empezado — ¿qué te lo está impidiendo? ¿Y si animas un personaje que te guste de verdad? El objetivo es solo practicar la técnica de movimiento.»','«Bueno — entonces hoy solo mira cómo trabajan los demás.»'],
    correct:1,
    fb:'<strong>Por qué funciona:</strong> la curiosidad, en lugar de una amenaza, descubre qué hay realmente detrás de la negativa (aburrimiento, dificultad, cansancio), y ofrecerle una elección mantiene el objetivo de aprendizaje mientras le da a ella el control de la tarea. Amenazar con llamar a sus padres te convierte en el enemigo y hace de la negativa una lucha de poder; dejar que solo mire le enseña que negarse funciona. Si la negativa se repite durante varias clases, habla con la familia y deja un comentario en BO — es un patrón que vale la pena reportar, no un castigo.'}
  ]
 }
},
{id:'tech', numLabel:'Módulo 3', emoji:'🔧', color:'var(--coral)',
 title:'Problemas técnicos y equilibrio en el aula',
 desc:'Por qué el desorden muchas veces es un problema técnico disfrazado, qué evita la mayoría de ellos y cómo mantener a todo el grupo aprendiendo mientras resuelves el problema de un estudiante.',
 obj:'Prevenir la mayoría de los problemas técnicos antes de que aparezcan, seguir un protocolo claro cuando ocurren y mantener al resto del grupo involucrado mientras resuelves el problema de un estudiante.',
 sections:[
  {t:'⚖️ Por qué esto va aquí', html:`
   <div class="card"><p>Los problemas técnicos suelen provocar desorganización en el aula y, como consecuencia, los estudiantes se aburren.</p>
   <p>Los problemas técnicos son normales y les pueden pasar tanto a los tutores como a los estudiantes. Esto es lo que puedes hacer para evitar que se agraven:</p></div>
   ${co('co-idea','💡',`<p><strong>La regla de oro.</strong> Si no puedes resolverlo tú mismo en <strong>10 minutos</strong>, deja de intentarlo en silencio. <strong>Comunica → documenta → escala.</strong> Un padre que sabe lo que está pasando confía en ti. Uno que no lo sabe, cancela.</p>`)}
  `},
  {t:'✅ Problemas técnicos de los estudiantes', html:`
   <div class="card"><p>Muchas veces, los problemas técnicos que tienen los estudiantes en clase se deben a que usan un navegador distinto de Google Chrome o un dispositivo inadecuado para el curso, como intentar seguir la clase en una tableta, un celular o un iPad. Por eso es importante que conozcas los requisitos mínimos para poder ayudarlos.</p></div>
   ${doavoid(
     ["Google Chrome, actualizado — el único navegador totalmente compatible",
      "Al menos 4 GB de RAM (8 GB para Blender o Unity)",
      "Una conexión estable, mínimo 10 Mbps — siempre que se pueda, una conexión por cable es mejor que el wifi",
      "Al menos 5 GB de almacenamiento libre — Unity y Blender necesitan bastante más"],
     ["Safari — tiene errores conocidos con la plataforma de Kodland desde la última actualización: botones que no responden, pantallas que no cargan, errores al entrar",
      "Tabletas / iPads para cursos como Roblox Studio o Unity — necesitan una computadora de verdad",
      "Dar por hecho que un problema en una Mac es desinterés antes de comprobar si simplemente es Safari"]
   )}
   ${co('co-idea','🍎',`<p>Presta especial atención a la combinación Mac + Safari. Si a un estudiante con Mac no le responden los botones o la pantalla no carga, la solución casi siempre es: abrir la clase en Google Chrome. Indica a las familias google.com/chrome.</p>`)}
   <div class="card"><h4>Lo que necesita realmente cada curso</h4><div class="tbl-wrap"><table>
    <tr><th>Curso</th><th>Requisito</th><th>Nivel</th></tr>
    <tr><td>Funtech, Scratch, Python 1 / Pro, Web, Dibujo</td><td>Solo Chrome, nada que instalar — funciona en casi cualquier dispositivo</td><td>Fácil</td></tr>
    <tr><td>Creatividad Digital, Diseño Gráfico, Ilustración</td><td>Chrome + una herramienta en el navegador (Canva, Krita) — revisa el tamaño de pantalla y si hace falta tableta</td><td>Revisar</td></tr>
    <tr><td>Roblox Studio</td><td>Solo Windows o Mac (ni tableta ni Linux), 4 GB de RAM, Roblox Studio instalado antes de la clase 1</td><td>Revisar</td></tr>
    <tr><td>Minecraft</td><td>Windows, Mac o Linux, se recomienda Java Edition, 4 GB de RAM, cuenta propia de Minecraft</td><td>Revisar</td></tr>
    <tr><td>Modelado 3D</td><td>Mínimo 8 GB de RAM, ratón con rueda obligatorio, se recomienda tarjeta gráfica dedicada</td><td>Exigente</td></tr>
    <tr><td>Unity</td><td>8 GB de RAM obligatorios, 10 GB de espacio libre, solo Windows o Mac — no Chromebook</td><td>Exigente</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Problemas técnicos de los tutores', html:`
   <div class="card"><p>El mismo cuidado se aplica a tu propio equipo — un problema técnico del tutor puede frenar una clase igual que el de un estudiante.</p></div>
   ${iconGrid([
     {ic:'🔌', html:`<strong>Haz pruebas 30 minutos antes.</strong> Revisa tu conexión a internet, tu cámara y tu micrófono antes de cada clase. Si notas un problema, avisa a tu Team Leader.`},
     {ic:'📷', html:`<strong>Busca alternativas.</strong> Si apagar la cámara mejora tu conexión, hazlo.`},
     {ic:'🎙️', html:`<strong>Ten un micrófono de respaldo.</strong> Si tus auriculares no funcionan, prueba otra opción, como el audio integrado de tu computadora, y activa siempre la reducción de ruido de fondo en Classroom.`},
     {ic:'📶', html:`<strong>Revisa tus controladores, y si tienes una VPN activa</strong> — las VPN suelen ralentizar la conexión.`},
     {ic:'🧊', html:`<strong>¿Trabajas con una herramienta pesada como Blender?</strong> El curso incluye en las primeras clases una guía para configurarla y que rinda mejor.`},
     {ic:'💻', html:`<strong>Libera memoria RAM antes de clase.</strong> Google Chrome ofrece la mejor experiencia con Classroom, pero también suele consumir mucha RAM — cierra las pestañas y los programas que no necesites en ese momento.`},
     {ic:'👂', html:`<strong>Compruébalo en directo.</strong> Antes de empezar la clase, confirma con tus estudiantes que te ven y te oyen bien — así detectas los problemas técnicos a tiempo.`}
   ])}
  `},
  {t:'🚨 Cómo reaccionar — el protocolo', html:`
   ${co('co-danger','🚨',`<p><strong>Primer problema en una clase:</strong> intenta resolverlo en los primeros 10 minutos. Si sigue sin funcionar, avisa a tu Team Leader ese mismo día — decidirá una opción para recuperar la clase. Escribe a los padres en menos de 30 minutos, con calidez, diciéndoles que ya lo has comunicado a tu equipo.</p>
   <p><strong>Segunda clase seguida con un problema:</strong> abre un ticket con Servicio al Cliente ese mismo día. Escribe a los padres para decirles que lo has escalado y que alguien se pondrá en contacto con ellos sobre una clase de recuperación.</p>
   <p><strong>Cuando se resuelva:</strong> avísales a los padres y cierra el tema — aunque el problema pareciera pequeño.</p>`)}
  `},
  {t:'⚖️ Mantener a todo el grupo aprendiendo', html:`
   <div class="card"><p>El fallo no es solo el problema técnico en sí — es un tutor tan concentrado en el problema de un estudiante que el resto del grupo pierde cinco o diez minutos de clase.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Ponle un límite de tiempo.</strong> Haz un intento rápido de solución con el estudiante afectado (cambiar de navegador, reiniciar), luego avanza con el grupo y retoma el caso con ese estudiante después o entre actividades.`},
     {ic:'👥', html:`<strong>Dale al grupo algo que hacer</strong> en cuanto empieces a resolver el problema — no los dejes mirando una pantalla quieta.`},
     {ic:'🫂', html:`<strong>Mantén la calma, en voz alta.</strong> Tu reacción es la lección, antes que la solución. Un tranquilo «esto pasa a veces, vamos a buscarle la vuelta» mantiene el aula en calma.`}
   ])}
  `}
 ],
 ix:{
  title:'Problemas técnicos — comprobación del módulo',
  instr:'70 % para desbloquear la lista de verificación final.',
  items:[
   {type:'choice', prompt:'En la Mac de un estudiante no responde ningún botón. ¿Cuál es tu primera acción?', opts:['Pedirle que abra la clase en Google Chrome','Dar por hecho que perdió el interés y seguir adelante','Esperar a que la plataforma se arregle sola'], correct:0, fb:'Safari es la causa más común de que los botones no respondan en una Mac — cambiar a Chrome es la solución rápida.'},
   {type:'sort', prompt:'¿Qué tipo de problema es este?', card:'La pantalla de un estudiante se congela una y otra vez y los botones no responden.', zones:[
     {label:'⚖️ Problema de disciplina', fb:'No exactamente — una pantalla congelada y botones que no responden son síntomas técnicos típicos, casi siempre Safari en una Mac.'},
     {label:'🔧 Problema técnico', fb:'Correcto — esto apunta a un problema del navegador o del dispositivo, no a desinterés. Casi siempre es Safari en una Mac.'}
   ], correctZone:1},
   {type:'choice', prompt:'Ocurre un problema técnico por primera vez en una clase. ¿Antes de cuándo deberías escribir a los padres?', opts:['Solo si vuelve a pasar','Antes de que termine la semana','En menos de 30 minutos, después de intentar resolverlo durante 10 minutos'], correct:2, fb:'Un mensaje rápido y cálido es lo que mantiene intacta la confianza de la familia.'},
   {type:'choice', prompt:'Mientras resuelves la conexión de un estudiante, ¿qué debería estar haciendo el resto del grupo?', opts:['Esperar en silencio hasta que termines','Trabajar en algo que les hayas dado, para que la clase no se detenga','Mirar cómo lo resuelves, por si les pasa a ellos también'], correct:1, fb:'Mantener al resto del grupo trabajando es lo que protege toda la clase, no solo el problema de un estudiante.'},
   {type:'sort', prompt:'¿Qué tipo de problema es este?', card:'Un estudiante activa una y otra vez su micrófono para hablar de cosas que no tienen que ver durante la explicación.', zones:[
     {label:'⚖️ Problema de disciplina', fb:'Correcto — es un patrón de manejo del aula que hay que redirigir, no un síntoma técnico.'},
     {label:'🔧 Problema técnico', fb:'No exactamente — es un patrón de disciplina, no un problema del dispositivo ni de la conexión.'}
   ], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Lista de verificación final', emoji:'✅', color:'var(--coral)',
 title:'Lista de verificación final',
 desc:'Aquí no hay examen — solo lo esencial de este mini-entrenamiento, antes de cerrarlo.',
 obj:'Repasa la lista de verificación de abajo. Este módulo no se califica — léela y luego finaliza el mini-entrenamiento.',
 sections:[
  {t:'🛟 Si ya existe una solicitud de reembolso', html:`
   ${numlist([
     'Dejé un comentario en BO el mismo día en que supe de la solicitud y avisé a mi Team Leader',
     'Mi siguiente clase con este estudiante fue un intento real de recuperación — un turno de verdad, un logro visible, atención específica, ni una palabra sobre la solicitud',
     'Nunca confirmé una aprobación ni hablé de ninguna cantidad — usé la única frase segura y dejé el resto a Servicio al Cliente'
   ])}
  `}, {t:'⚖️ Mantener la disciplina en cada clase', html:`
   ${numlist([
     'Establezco las normas de la clase en la primera clase, compruebo que los estudiantes las entienden y las aceptan — y me remito a ellas, no a mi propio enfado',
     'Con los más pequeños (6–8), convierto las normas en un juego, redirijo con una tarea en lugar de una orden y elogio el comportamiento que quiero en cuanto aparece',
     'Con los mayores (12+), nombro el comportamiento en pocas palabras — en privado si es posible —, les doy un rol que canalice su energía y soy constante en lugar de repetir advertencias',
     'En un aula en silencio, primero pido con amabilidad que enciendan la cámara, y luego ofrezco otras formas seguras de participar — un fondo que les guste, el chat, la participación en privado — sin presionar',
     'Cuando un estudiante se desconecta de la tarea, la adapto sin perder el objetivo de aprendizaje',
     'Primero me regulo yo: me tomo un momento, mantengo una voz tranquila y un ritmo sereno, y nunca imito la intensidad de un estudiante',
     'Soy firme con el respeto: si un estudiante usa lenguaje obsceno o ataca a un compañero, lo silencio un momento para proteger al grupo, y hablamos después de clase',
     'Cuando algo sale mal en una tarea, normalizo el error y lo trato como una oportunidad para aprender',
     'Si una situación no se calma, pido ayuda a los padres — incluso durante la clase — y después lo reporto a la familia y dejo un comentario en BO',
     'Pruebo mi equipo 30 minutos antes de la clase, y mantengo al grupo trabajando mientras resuelvo el problema técnico de un estudiante'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Eso es todo el mini-entrenamiento.</strong> Cuando estés listo, continúa — y luego completa el DST en el LMS para cerrar la tarea.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
