/* Mini_Training_3_Lesson_Organization - English content (all text of the page).
   To add a language: copy this file to content-xx.js, translate the strings (keep the code, keys, HTML tags, helper calls and image/video/simulation paths), set PAGE_LANG, flag and dir. */
const PAGE_LANG='tr';
const CONTENT = {
  flag:'🇹🇷', dir:'ltr',
  ui:{
    pageTitle:"Mini Eğitim · Ders Düzeni ve Disiplin — Kodland Eğitmen Eğitimi",
    logoSub:'Eğitmen Gelişim Departmanı',
    heroEyebrow:"🎯 Mini Eğitim",
    heroTitle:"<span class=\"h-pill\">İyi Organize Edilmiş</span> Bir Ders Yürütmek",
    heroIntro:"Bu eğitimi, derste düzensizlik veya disiplin sorunları nedeniyle iade talep eden öğrencileriniz olduğu için alıyorsunuz. Burada, bir eğitmen olarak neler yapabileceğinizi ve bu tür durumları nasıl yöneteceğinizi göstereceğiz.",
    heroWork:"5 kısa modülü tamamlayın. Bir sonraki modülün kilidini açmak için her modül kontrolünde en az %70 almanız gerekir. Toplam süre yaklaşık 25–30 dakikadır.",
    startBtn:"🚀 Eğitimi Başlat",
    pathLabel:'Öğrenme yolunuz',
    devTitle:'Geliştirici: inceleme için tüm modüllerin kilidini aç',
    backToPath:'Öğrenme yoluna dön',
    modulesPassed:'{done} / {total} modül tamamlandı',
    moduleN:'Modül {n}',
    of:'/',
    locked:'🔒 Kilitli',
    passedBadge:'✅ Geçildi · %{pct}',
    reviewedBadge:'✅ İncelendi',
    startBadge:'▶ Başla',
    reviewBadge:'▶ İncele',
    objective:'Hedef',
    startCheck:'▶ Modül kontrolüne başla',
    finishBtn:'▶ Mini eğitimi bitir',
    doneBack:'✓ Tamamlandı — öğrenme yoluna dön',
    ixBadge:'📋 Modül kontrolü — sonraki modülün kilidini açmak için %70',
    ixItemBadge:'📋 Modül kontrolü — soru {i} / {n}',
    scoreSoFar:'Şu ana kadarki puan: {c} / {t}',
    continue:'Devam →',
    sortWrong:'Tam değil — doğru cevap “{label}”.',
    resPassed:'Modülü geçtiniz!',
    resFailed:'Henüz tam olmadı',
    resUnlocked:"Sonraki modülün kilidini açtınız.",
    resDone:"Bu mini eğitimi tamamladınız.",
    resNeed:'Sonraki modülün kilidini açmak için %70 almanız gerekiyor. Yukarıdaki bölümü yeniden gözden geçirin ve kontrolü tekrar deneyin.',
    resContinue:'Öğrenme yoluna devam et',
    resFinish:'Devam et',
    resBack:'Öğrenme yoluna dön',
    resReview:'Bu modülü incele',
    doneEyebrow:'Mini Eğitim Tamamlandı',
    doneTitle:'🎉 Tebrikler!',
    doneP1:"🎉 <strong>Tebrikler! Bu mini eğitimi tamamladınız.</strong>",
    doneP2:"Burada işiniz bitti! Ödevi kapatmak için lütfen bu mini eğitime eriştiğiniz LMS eğitim sayfasına geri dönün.",
    doneP3:"👉 <strong>LMS’de eğitimin hemen altında bir kontrol veya değerlendirme varsa, onu da tamamladığınızdan ve geçer puan aldığınızdan emin olun</strong> — aksi hâlde ödev tamamlanmamış olarak kalabilir.",
    doneP4:'Bol şans! ❤️',
    doneP5:'',
    devUnlockAlert:'Geliştirici modu: tüm modüllerin kilidi inceleme için açıldı.',
    devOn:'🔓 Geliştirici modu AÇIK — tüm modüllerin kilidi açık',
    devOff:'🔒 Geliştirici modu KAPALI — ilerleme sıfırlandı',
    devBadge:'🔓 GELİŞTİRİCİ MODU',
    doLabel:'✅ Yapın',
    avoidLabel:'🚫 Kaçının',
    noticeLabel:'Dikkat:',
    cvSee:'Gördüğünüz:',
    cvDo:'Yapmanız gereken:',
    dtExample:'Gerçek bir dersten örnek',
    dtNext:'Sonraki:',
    dtDone:"✅ Dört alanın hepsini gördünüz. Şimdi gördüklerinizi sınıflandırın.",
    tlVideoTitle:'{label} — gerçek bir ders örneği',
    tlVideoMeta:'Bu aşamanın gerçek bir derste nasıl göründüğünü izleyin'
  },

  buildModules(){
    return [
{id:'intro', numLabel:'Giriş', emoji:'🧩', color:'var(--coral)',
 title:'Neden Buradasınız',
 desc:'Ders düzeni ve disiplin neden en hızlı düzeltebileceğiniz neden — ve bir iade talebi zaten oluşturulduysa hangi kurallar geçerli.',
 obj:'Ders düzeni ve disiplinin neden doğrudan sınıfı nasıl yönettiğinizle ilgili olan neden olduğunu ve bir iade talebi zaten varsa tam olarak ne yapmanız (ve ne yapmamanız) gerektiğini anlamak.',
 sections:[
  {t:'🧩 İki uç, tek bir temel neden', html:`
   <div class="card"><p>Birbirinden çok farklı görünen iki sınıf da bu nedenle işaretlenebilir: kaotik hissettiren bir sınıf ve tamamen sessizleşmiş bir sınıf. İkisi de aynı şeyle ilgilidir — her çocuğun dersi, katılabileceği güvenli ve düzenli bir ortam olarak hissedip hissetmediğiyle.</p></div>
   ${co('co-idea','🎯',`<p><strong>Bu listede doğrudan eğitmen davranışıyla en çok ilgili olan neden budur — dolayısıyla en hızlı düzeltebileceğiniz neden de budur.</strong> Seviye ya da özel bir gereksinimden farklı olarak bu, başka kimsenin iznine ihtiyaç duymadan bir sonraki dersinizden itibaren değiştirebileceğiniz bir beceridir.</p>`)}
  `},
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   <div class="card"><p>Yukarıdakilerin hepsi bu durumu erkenden yakalamakla ilgili. Ancak bu eğitimi, bir aile <strong>zaten</strong> iade talep ettiği için açıyor olabilirsiniz. Aşağıdaki kurallar, sebep ne olursa olsun geçerlidir — önce bunları okuyun, ardından bu noktaya nasıl gelindiğini ve derste hâlâ neler yapabileceğinizi anlamak için eğitimin geri kalanından yararlanın.</p></div>
   ${co('co-idea','💡',`<p><strong>Talebin kendisini siz değil, Müşteri Hizmetleri oluşturur</strong> — o kısım sizin kontrolünüzde değil. Sizin elinizde olan, bundan sonra derste yaşanacak her şeydir ve bu hiç de az değildir.</p>`)}
   ${co('co-danger','🤐',`<p><strong>Talebin kendisi hakkında hiçbir şey söylemeyin</strong> — ne çocuğa ne de aileye — Müşteri Hizmetleri sizden açıkça belirli bir şey söylemenizi istemedikçe. Şu anki göreviniz bu konuşma değil, derstir.</p>`)}
  `},
  {t:'🎯 Bir sonraki dersiniz, öğrenciyi kazanma fırsatınızdır', html:`
   <div class="card"><p>Başka hiçbir şeyi değiştirme şansınız olmayabilir. Bu çocukla yapacağınız bir sonraki dersi, sonucu belirleyecek an olarak görün.</p></div>
   ${iconGrid([
     {ic:'🙋', html:`<strong>Ona gerçek bir söz hakkı verin.</strong> Anlamsız bir soru değil — görüldüğü ve başardığı gerçek bir an.`},
     {ic:'🏆', html:`<strong>Erken ve görünür bir başarı planlayın.</strong> Dersten geride kalmış hissederek değil, başarabildiğini hissederek ayrılmalı.`},
     {ic:'👀', html:`<strong>Ona özel ilgi gösterin</strong> — genel geçer bir övgü yerine, somut bir şey için fark edildiğini hissettirin.`},
     {ic:'🤐', html:`<strong>Talepten hiç bahsetmeyin</strong> — çocuk konuyu kendisi açsa bile sıcak bir şekilde konuyu değiştirin ve derse devam edin.`}
   ])}
  `},
  {t:'📮 Hızlıca bildirin ve güvenli tek cümleyi bilin', html:`
   <div class="card"><p>Bir talep olduğunu, BO’da çocuğun profilindeki Müşteri Hizmetleri yorumlarından öğrenebilirsiniz — sizi bilgilendiren otomatik bir sistem yoktur. Bunu öğrendiğiniz andan itibaren, derslerinizde gördükleriniz Müşteri Hizmetleri’nin başka hiçbir yoldan edinemeyeceği bilgilerdir.</p></div>
   ${numlist([
     'Aynı gün BO’da tam olarak ne gördüğünüzü anlatan bir yorum bırakın — izlenimler değil, tarihler ve somut ayrıntılar',
     'Varsa, ailenin kendi sözlerini kelimesi kelimesine ekleyin',
     'Aynı gün Takım Liderinizi de bilgilendirin',
     'Bir iadenin onaylandığını asla teyit etmeyin ve herhangi bir tutar konuşmayın'
   ])}
   ${co('co-ok','✅',`<p><strong>Her zaman güvenle söyleyebileceğiniz cümle:</strong> <em>“Müşteri Hizmetleri bu konuda size yardımcı olacak.”</em> Konuşmadaki rolünüz burada biter — gerisini Müşteri Hizmetleri devralır.</p>`)}
  `},
  {t:'🌱 Sonrasında da özen göstermeye devam edin', html:`
   <div class="card"><p>Talep geri çekilse de, çocuk grubunuzda kalsa da ya da başka bir eğitmene veya formata geçse de, sonraki birkaç derste ona ekstra özen göstermeye devam edin. Bir ders boyunca işe yarayıp sonra sessizce eski hâline dönen bir kurtarma girişimi, çoğu zaman hiç işe yaramamış demektir.</p></div>
  `}
 ]
},
{id:'discipline', numLabel:'Modül 1', emoji:'⚖️', color:'var(--coral)',
 title:'Disiplin ve Esneklik',
 desc:'Eğitmenlerin çevrim içi bir sınıfta karşılaştığı iki uç durum, her biriyle yaşa uygun şekilde başa çıkma yolları ve öğrenme hedefini kaybetmeden bir görevi nasıl uyarlayacağınız.',
 obj:'İki uç örüntüyü — aşırı gürültü ya da sessiz bir sınıf — tanımak, her biri için yaşa uygun teknikler uygulamak ve bir görevin kontrolü için mücadele etmek yerine onu ne zaman uyarlamanız gerektiğini bilmek.',
 sections:[
  {t:'📢 Birinci uç: aşırı gürültü', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1760/860"><img src="Pictures_T2/image1.png" alt="Gürültülü bir odada kulaklarını kapatan bir çocuk" style="width:109.09%;left:-4.545%;top:-12.56%"></div>
   <div class="card"><p>Öğrenciler ilgisiz konular hakkında birbirlerinin sözünü kesiyor, uygunsuz bir dil kullanıyor, sınıf arkadaşlarına saygı göstermiyor. Buna müdahale edilmezse, sınıf sessiz sedasız her şeyin serbest olduğunu öğrenir.</p></div>
   <div class="card"><h4>Küçük çocuklar (6–8)</h4><ul>
     <li>Kuralı bir oyuna dönüştürün: “ses seviyesi”ni azarlama yerine gösterebileceğiniz bir düğme gibi kullanın</li>
     <li>Emir yerine bir görevle yönlendirin: “ekranını göster, bunu birlikte yapalım” demek “konuşmayı kes” demekten çok daha etkilidir</li>
     <li>Görmek istediğiniz davranışı, gerçekleştiği anda, hemen ve somut bir şekilde övün</li>
   </ul></div>
   <div class="card"><h4>Daha büyük öğrenciler (12+)</h4><ul>
     <li>Durumu doğrudan ve kısaca dile getirin, mümkünse birebir: “herkes takip edebilsin diye sohbeti konuyla ilgili tutalım”</li>
     <li>Enerjisini yönlendirecek bir rol verin — bir adımı yönetmek, bir arkadaşına yardım etmek</li>
     <li>Beklentiyi bir kez, sakince belirleyin ve uyarıları tekrarlamak yerine tutarlı bir şekilde takip edin</li>
   </ul></div>
  `},
  {t:'🤫 İkinci uç: sessiz sınıf', html:`
   <div class="mt-pic-crop" style="aspect-ratio:1744/860"><img src="Pictures_T2/image2.png" alt="Kollarının arkasına saklanan utangaç bir çocuk" style="width:110.09%;left:-5.046%;top:-12.56%"></div>
   <div class="card"><p>Konuşmayan ve kamerasını açmayan öğrenciler. Bu, ergenlik öncesi ve ergenlik çağındaki çocuklarda yaygındır — çoğu zaman utangaçlık veya özgüvenle ilgilidir, ancak ilgisizliğin bir işareti de olabilir; bu yüzden gözlemlemeye devam edin.</p></div>
   ${stepFlow([
     {ic:'1️⃣', label:'Kamerasını açmasını nazikçe isteyin'},
     {ic:'2️⃣', label:'İşe yaramazsa, kendini güvende hissetmesine yardımcı olacak başka yollar deneyin'},
     {ic:'3️⃣', label:'Onu tanıyın — ilgi alanları, ona ulaşmanın yoludur'},
     {ic:'4️⃣', label:'Hâlâ sonuç yok mu? Her zaman burasının güvenli bir alan olduğunu hissettiren bir cümleyle, özel katılım yollarını deneyin'}
   ])}
   ${co('co-idea','💡',`<p><strong>Somut bir fikir:</strong> kamerası kapalı kalabilir ama sevdiği bir şeyi arka plan olarak ayarlayabilir — ya da bir tasarım/sanat kursundaysa, onu temsil eden bir şey (kelimenin tam anlamıyla kendisini değil) çizip arka plan yapmaya davet edin. Bunu tüm gruba önerin ki tek başına hedef alınmış gibi değil, ortak bir etkinlik gibi hissettirsin.</p>`)}
   <div class="card"><h4>Yaşa göre örnek cümleler</h4>
   <p><strong>Küçükler (6–8):</strong> <em>“İstemiyorsan yüzünü göstermek zorunda değilsin — ama arka plan olarak ne seçtiğini çok merak ediyorum! Bana biraz anlatır mısın?”</em></p>
   <p><strong>Büyükler (12+):</strong> <em>“Kamera için hiç acele yok — ne zaman hazır hissedersen. Bu arada, daha kolaysa sohbete yazabilirsin.”</em></p></div>
  `},
  {t:'🎨 Dikkat dağınıklığı, görevin esnetilmesi gerektiğini gösteriyorsa', html:`
   <div class="card"><p>Bazen “disiplinsizlik” aslında alıştırmanın kendisine bağlanamadığı için kopmuş bir öğrencidir — isteneni yapmaz ya da sürekli dikkati dağılır.</p></div>
   ${co('co-ok','✅',`<p><strong>Hedefi kaybetmeden uyarlayın.</strong> Bugünün hedefi animasyon yapmayı öğrenmekse ve öğrenci ders planındaki hikâyeyi takip etmek istemiyorsa, onu motive eden herhangi bir karakteri, nesneyi veya hayvanı canlandırmasına izin verin. Örnek: hedef piksel sanatı animasyon tekniğini öğrenmek — öğrenci, tekniği uyguladığı sürece kendi seçtiği herhangi bir nesneyi canlandırabilir.</p>`)}
  `},
  {t:'👪 Aileyle iletişim ve sınıf kuralları', html:`
   ${co('co-idea','📮',`<p><strong>Disiplinsizlik, süregelen sessizlik veya yoğun dikkat dağınıklığı durumlarını bildirin</strong> — hem öğrencinin daha bütünlüklü bir resmini oluşturmak için hem de veliler, durumu öğrendiklerinde bu davranış konusunda evde sıklıkla yardımcı olabildikleri için.</p>`)}
   ${co('co-star','📜',`<p><strong>Sınıf kurallarını ilk dersten itibaren belirleyin</strong> ve öğrencilerin bunları anladığından ve kabul ettiğinden emin olun — kuralları bir kez söyleyip yerine oturduğunu varsaymayın.</p>`)}
   <img class="mt-pic" src="Pictures_T2/rules.png" alt="Örnek slayt: Derste davranış kuralları">
  `}
 ],
 ix:{
  title:'Disiplin ve Esneklik — modül kontrolü',
  instr:'Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Küçük bir öğrenci (6–8) ilgisiz konular hakkında konuşarak dersi sürekli bölüyor. Daha iyi ilk hamle hangisidir?', opts:['Dinleyene kadar tekrarlanan net bir “konuşmayı kes” emri','Beklemek — genellikle kendiliğinden geçer','Onu görevle yeniden derse yönlendirmek ve istediğiniz davranış ortaya çıkar çıkmaz övmek'], correct:2, fb:'Küçük çocuklarda onları etkinliğe yönlendirmek — ve iyi davranışı gerçekleştiği anda yakalamak — kuru bir emirden daha iyi sonuç verir.'},
   {type:'choice', prompt:'Bir öğrenci bugünkü hikâye alıştırmasını yapmayı reddediyor ama başka bir şeyi seve seve canlandıracak. Ne yapmalısınız?', opts:['Öğretilen beceriyi uyguladığı sürece onu motive eden şeyi canlandırmasına izin vermek','Grup aynı çizgide kalsın diye alıştırmanın tam olarak yazıldığı gibi yapılmasında ısrar etmek','O öğrenci için etkinliği atlayıp devam etmek'], correct:0, fb:'Öğrenme hedefini kaybetmeden içerikte esnek olmak, öğrencinin hem derse bağlı kalmasını hem de öğrenmeye devam etmesini sağlar.'},
   {type:'choice', prompt:'Sınıf kuralları ne zaman belirlenmelidir?', opts:['Yalnızca bir sorun ortaya çıktığında, böylece anlamlı gelirler','İlk dersten itibaren — anlaşıldıkları ve kabul edildikleri de kontrol edilerek','Ayda bir, tüm gruba hatırlatma olarak'], correct:1, fb:'İlk dersten itibaren belirlenen ve teyit edilen kurallar, bu modülde ele alınan durumların çoğunu önler.'},
   {type:'choice', prompt:'Süregelen sessizlik veya dikkat dağınıklığı durumlarını neden aileye bildirmelisiniz?', opts:['Çünkü eğitmenlerin davranış sorunlarını kendi başlarına ele almasına izin verilmez','Yalnızca öğrencinin notlarını etkilemeye başladığında','Öğrencinin daha bütünlüklü bir resmini oluşturur ve veliler çoğu zaman evde yardımcı olabilir'], correct:2, fb:'Bildirim yapmak suçu büyütmekle ilgili değildir — velilere, kendilerinin de harekete geçebileceği bir görünürlük sağlar.'}
  ]
 }
},
{id:'selfreg', numLabel:'Modül 2', emoji:'🧘', color:'var(--coral)',
 title:'Öz Düzenleme ve Birlikte Düzenleme',
 desc:'Sınıftaki yetişkin olarak kendi duygusal tepkinizin, oradaki her öğrencinin davranışını nasıl şekillendirdiği — ve en sık yaşanan zor anlarla ilgili bir alıştırma.',
 obj:'Öz düzenleme ve birlikte düzenlemeyi anlamak, disiplinsizlik, saldırganlık, dikkat dağınıklığı ve sessizlik anlarında bunları kendi tepkilerinize uygulamak ve en sık yaşanan dört zor anda ne söyleyeceğinizi pratik etmek.',
 sections:[
  {t:'🧘 Bu kavramlar pratikte ne anlama geliyor', html:`
   <div class="card"><p><strong>Öz düzenleme</strong>, kendi duygusal durumunuzu yönetmektir — hayal kırıklığına uğradığınızı ya da dengenizin bozulduğunu fark edip dürtüyle tepki vermek yerine cevabınızı bilinçli olarak seçmek.</p>
   <p><strong>Birlikte düzenleme</strong> ise bunun ardından gelir: çocuklar, özellikle de küçükler, duygusal durumlarını odadaki sakin (ya da sakin olmayan) yetişkinden alır. Tepkiniz yalnızca onların davranışına cevap vermez — o davranışı aktif olarak şekillendirir.</p></div>
   ${co('co-idea','💡',`<p>Bu, Modül 1’deki her duruma doğrudan uygulanır: disiplinsizlik, saldırgan bir öğrenci, dikkati dağınık bir öğrenci, sessiz bir öğrenci. Herhangi bir teknikten önce, hepsinde ilk hamle sizin kendi öz düzenlemenizdir.</p>`)}
  `},
  {t:'🎭 Her duruma uygulamak', html:`
   ${iconGrid([
     {ic:'📢', html:`<strong>Disiplinsizlik.</strong> Sert veya sinirli değil, sakin ve soğukkanlı bir şekilde cevap verin — sinirli bir eğitmen gürültülü bir sınıfı daha da kızıştırır; sakin bir eğitmen ise yatıştırır.`},
     {ic:'😠', html:`<strong>Saldırgan bir öğrenci.</strong> Sesinizi alçaltın ve temponuzu yavaşlatın, onun yoğunluğunu yansıtmayın. Önce kendinizi düzenleyin, sonra davranışı ele alın.`},
     {ic:'📱', html:`<strong>Dikkati dağınık bir öğrenci.</strong> Onu hayal kırıklığıyla değil, merakla yönlendirin — “şu an dikkatini ne çekiyor?” sorusu, bir iç çekişten çok farklı bir etki yaratır.`},
     {ic:'🤐', html:`<strong>Sessiz bir öğrenci.</strong> Sabır, güven olarak algılanır. Belli olan bir sabırsızlık ise baskı olarak algılanır ve baskı, sessiz bir çocuğu daha da sessizleştirir.`}
   ])}
  `},
  {t:'🧯 Her zor anda geçerli olanlar', html:`
   ${iconGrid([
     {ic:'📜', html:`<strong>Sınıf kurallarına geri dönün.</strong> İlk derste üzerinde anlaştığınız kurallar sizin dayanağınızdır — kendi sinirinize değil, onlara başvurun.`},
     {ic:'🧊', html:`<strong>Sesinizle sakin kalın.</strong> Cevap vermeden önce ihtiyaç duyduğunuz kısa molayı verin; böylece henüz öyle hissetmeseniz bile sakin duyulursunuz. Çocuklar ses tonunu kelimelerden daha hızlı okur.`},
     {ic:'🛡️', html:`<strong>Grubun geri kalanını koruyun.</strong> Bir öğrenci müstehcen bir dil kullanır veya bir sınıf arkadaşına saldırırsa, onun mikrofonunu bir süreliğine kapatabilirsiniz. Diğer her çocuk güvenli bir dersi hak eder.`},
     {ic:'🤝', html:`<strong>Saygı konusunda kararlı olun.</strong> Sakin olmak yumuşak olmak demek değildir: başkalarına saygı tartışmaya açık değildir ve grubun sizin bu çizgiyi koruduğunuzu görmesi gerekir.`},
     {ic:'👪', html:`<strong>Gerekirse veliden yardım isteyin</strong> — bir durum yatıştırılamıyorsa ve veli yakındaysa, ders sırasında bile.`},
     {ic:'🌱', html:`<strong>Hataları olağan karşılayın.</strong> Bir görevde bir şeyler ters gittiğinde, bunu herkesin önünde bir öğrenme fırsatı olarak ele alın.`},
     {ic:'📝', html:`<strong>Durumu bildirin.</strong> Yaşananı aileye anlatın ve BO’da bir yorum bırakın; böylece bir kayıt oluşur ve kimse hazırlıksız yakalanmaz.`}
   ])}
  `}
 ],
 ix:{
  title:'Alıştırma: siz ne söylerdiniz?',
  instr:'Şimdi çevrim içi bir derste en sık yaşanan zor anlardan bazılarını pratik edelim. Her durum için eğitmen olarak ne söyleyeceğinizi seçin. Her cevabın arkasındaki gerekçe de açıklanıyor. Sonraki modülün kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20yells%20at%20the%20teacher.png" alt="Bağıran bir öğrenci" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😠 Bir öğrenci size bağırıyor.</strong> Diego’dan (11) ekranını paylaşmasını istiyorsunuz ve o bağırıyor: <em>“Bu çok saçma! Senin sıkıcı alıştırmanı yapmayacağım!”</em> Grubun geri kalanı susup izliyor. Ne söylersiniz?`,
    opts:['“Benimle böyle konuşmaya nasıl cüret edersin! Bir daha olursa bu dersten çıkarsın.”','“Diego, gerçekten çok bunaldığını duyabiliyorum ve sana yardım etmek istiyorum. Kuralımızı hatırla: bu sınıfta birbirimizle saygıyla konuşuruz. Derin bir nefes al — sonra bana neyin işe yaramadığını anlat.”','“Peki, tamam, yapmak zorunda değilsin. Diğerleriyle devam edelim.”'],
    correct:1,
    fb:'<strong>Bu neden işe yarar:</strong> sakin cevap aynı anda üç şey yapar — duyguyu adlandırır (böylece Diego dinlendiğini hisseder), kendi öfkeniz yerine sınıf kuralına geri döner ve göreve geri dönüş için bir yol açar. Karşılık olarak bağırmak, durdurmak istediğiniz davranışın ta kendisini örnek gösterir ve sınıfı bir sahneye dönüştürür; geri adım atmak ise tüm gruba bağırmanın işten kurtardığını öğretir. Çevrim içi bir derste öğrencinin yanına gidemezsiniz; bu yüzden ses tonunuz tek aracınızdır. Devam ederse, mikrofonunu bir süreliğine kapatın, gerekirse veliyle iletişime geçin ve sonrasında durumu aileye bildirip BO’da bir yorum bırakın.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20bullies%20other%20students.png" alt="Başka bir öğrenciyle alay eden bir öğrenci" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😈 Bir öğrenci sınıf arkadaşına zorbalık yapıyor.</strong> Ana projesini paylaşırken Tomás mikrofonunu açıp <em>“Bu gördüğüm en çirkin şey”</em> diyor — ve bir de hakaret ekliyor. Ana susuyor. Ne söylersiniz?`,
    opts:['“Tomás, zorbalık yapıyorsun ve herkesin önünde kendinden utanmalısın.”','“Hadi ama, sadece bir şakaydı — devam edelim, Ana.”','“Tomás, bu doğru değil. Bu sınıfta herkesin çalışmasına saygı duyulur. Ana bitirebilsin diye mikrofonunu bir süreliğine kapatıyorum — dersten sonra konuşacağız. Ana, lütfen devam et, seçtiğin renklere bayıldım.”'],
    correct:2,
    fb:'<strong>Bu neden işe yarar:</strong> ilk göreviniz hedef alınan öğrenciyi korumaktır. Tomás’ın mikrofonunu kapatmak, herkesin önünde bir tartışmaya girmeden zararı hemen durdurur; kural açıkça ifade edilir (başkalarına saygı tartışmaya açık değildir) ve Ana’ya anını geri verirsiniz. “Sadece bir şakaydı” demek tüm gruba zorbalığa göz yumulduğunu söyler; Tomás’ı herkesin önünde utandırmak ise durumu kızıştırır ve bir çocuğu küçük düşürür, bu da davranışı nadiren değiştirir. Dersten sonra: onunla özel olarak konuşun, ailesine haber verin ve BO’da bir yorum bırakın. Ders sırasında tekrar olursa veliden yardım isteyin.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20cries%20because%20something%20isn%27t%20going%20well.png" alt="Ağlayan bir öğrenci" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😢 Bir öğrenci, bir şeyler yolunda gitmediği için ağlıyor.</strong> Lucía (8) oyununu çalıştırıyor ve üçüncü kez hata alıyor. Ağlamaya başlıyor: <em>“Yapamıyorum, bu konuda kötüyüm.”</em> Ne söylersiniz?`,
    opts:['“Bu tamamen normal, Lucía — programcılar hatalarla öğrenir. Profesyonel yazılımcılar bile her gün hata alır. Gel birlikte bakalım ve bilgisayarın bize ne söylemeye çalıştığını bulalım.”','“Ağlama, büyütülecek bir şey değil. Bak, herkes başardı — sen de yapabilirsin.”','“Merak etme, devam edebilmemiz için ben senin yerine düzeltiveririm.”'],
    correct:0,
    fb:'<strong>Bu neden işe yarar:</strong> hatayı olağan karşılar ve onu öğrenmenin bir parçası olarak yeniden çerçeveler — ki programlamada gerçek de budur. Ayrıca düzeltmeyi Lucía’nın elinde tutar, siz de yanında olursunuz; böylece bu anı, başarabildiğini hissederek kapatır. “Ağlama” demek duyguyu küçümser; onu sınıf arkadaşlarıyla karşılaştırmak ise durumu daha da kötüleştirir. Onun yerine düzeltmek gözyaşlarını durdurur ama yapamayacağına dair inancını pekiştirir. Çevrim içi bir derste ekranını paylaşıp sorunu birlikte çözmek, desteği görünür ve kişisel kılar.'},
   {type:'choice', prompt:`<img src="Pictures_T2/A%20student%20refuses%20to%20work.png" alt="Çalışmayı reddeden bir öğrenci" style="display:block;width:100%;max-height:210px;object-fit:contain;background:var(--surface2);border-radius:14px;margin:0 0 14px"><strong>😒 Bir öğrenci çalışmayı reddediyor.</strong> Herkes dersin animasyonunu yapıyor. Sofía’nın (12) kamerası açık ama hiçbir şey yapmıyor ve <em>“Canım istemiyor”</em> diyor. Ne söylersiniz?`,
    opts:['“Alıştırmayı yapmazsan ailene söylemek zorunda kalacağım.”','“Henüz başlamadığını fark ettim — sana engel olan ne? Gerçekten sevdiğin bir karakteri canlandırmaya ne dersin? Amaç sadece hareket tekniğini pratik etmek.”','“Peki — o zaman bugün sadece diğerlerinin çalışmasını izle.”'],
    correct:1,
    fb:'<strong>Bu neden işe yarar:</strong> tehdit yerine merak, reddin arkasında gerçekte ne olduğunu (sıkılma, zorluk, yorgunluk) ortaya çıkarır; bir seçenek sunmak da öğrenme hedefini korurken görevi sahiplenmesini sağlar. Veliyi aramakla tehdit etmek sizi düşman konumuna sokar ve reddi bir güç mücadelesine dönüştürür; izlemesine izin vermek ise ona reddetmenin işe yaradığını öğretir. Ret dersler boyunca tekrarlanırsa, aileyle konuşun ve BO’da bir yorum bırakın — bu bir ceza değil, bildirilmeye değer bir örüntüdür.'}
  ]
 }
},
{id:'tech', numLabel:'Modül 3', emoji:'🔧', color:'var(--coral)',
 title:'Teknik Sorunlar ve Sınıf Dengesi',
 desc:'Düzensizliğin neden çoğu zaman kılık değiştirmiş bir teknik sorun olduğu, bunun büyük kısmını neyin önlediği ve bir öğrencinin sorununu çözerken tüm grubun öğrenmeye devam etmesini nasıl sağlayacağınız.',
 obj:'Teknik sorunların çoğunu daha başlamadan önlemek, ortaya çıktıklarında net bir protokol izlemek ve bir öğrencinin sorununu çözerken grubun geri kalanını derse dahil tutmak.',
 sections:[
  {t:'⚖️ Bu konu neden burada', html:`
   <div class="card"><p>Teknik sorunlar çoğu zaman sınıfta düzensizliğe yol açar ve bunun sonucunda öğrenciler sıkılır.</p>
   <p>Teknik sorunlar normaldir ve hem eğitmenlerin hem de öğrencilerin başına gelebilir. Büyümelerini önlemek için yapabilecekleriniz şunlardır:</p></div>
   ${co('co-idea','💡',`<p><strong>Altın kural.</strong> Sorunu <strong>10 dakika</strong> içinde kendiniz çözemiyorsanız, sessizce uğraşmayı bırakın. <strong>İletişim kurun → kayıt altına alın → üst kademeye iletin.</strong> Neler olduğunu bilen bir veli size güvenir. Bilmeyen bir veli ise iptal eder.</p>`)}
  `},
  {t:'✅ Öğrencilerin yaşadığı teknik sorunlar', html:`
   <div class="card"><p>Öğrencilerin derste karşılaştığı teknik sorunlar çoğu zaman Google Chrome dışında bir tarayıcı kullanmalarından ya da kurs için uygun olmayan cihazlar kullanmalarından kaynaklanır — örneğin dersi tablet, cep telefonu veya iPad üzerinden izlemeye çalışmak gibi. Bu yüzden onlara yardımcı olabilmeniz için minimum gereksinimleri bilmeniz önemlidir.</p></div>
   ${doavoid(
    ["Güncel Google Chrome — tam uyumlu tek tarayıcı",
     "En az 4 GB RAM (Blender veya Unity için 8 GB)",
     "En az 10 Mbps hızında stabil bir bağlantı — mümkünse kablolu bağlantı Wi-Fi’dan daha iyidir",
     "En az 5 GB boş depolama alanı — Unity ve Blender çok daha fazlasına ihtiyaç duyar"],
    ["Safari — son güncellemeden bu yana Kodland platformunda bilinen hatalar var: yanıt vermeyen düğmeler, yüklenmeyen ekranlar, girişte hatalar",
     "Roblox Studio veya Unity gibi kurslar için tablet / iPad — bu kurslar gerçek bir bilgisayar gerektirir",
     "Sadece Safari’den kaynaklanıp kaynaklanmadığını kontrol etmeden bir Mac sorununu ilgi kaybı sanmak"]
   )}
   ${co('co-idea','🍎',`<p>Özellikle Mac + Safari kombinasyonuna dikkat edin. Mac kullanan bir öğrencinin düğmeleri yanıt vermiyorsa veya ekranı yüklenmiyorsa, çözüm neredeyse her zaman aynıdır: dersi Google Chrome’da açmak. Aileleri google.com/chrome adresine yönlendirin.</p>`)}
   <div class="card"><h4>Her kursun gerçekte neye ihtiyacı var</h4><div class="tbl-wrap"><table>
   <tr><th>Kurs</th><th>Gereksinim</th><th>Seviye</th></tr>
   <tr><td>Funtech, Scratch, Python 1 / Pro, Web, Çizim</td><td>Yalnızca Chrome, kurulacak bir şey yok — neredeyse her cihazda çalışır</td><td>Kolay</td></tr>
   <tr><td>Dijital Yaratıcılık, Grafik Tasarım, İllüstrasyon</td><td>Chrome + bir tarayıcı aracı (Canva, Krita) — ekran boyutu/tablet gereksinimlerini kontrol edin</td><td>Kontrol edin</td></tr>
   <tr><td>Roblox Studio</td><td>Yalnızca Windows veya Mac (tablet yok, Linux yok), 4 GB RAM, 1. dersten önce kurulmuş Roblox Studio</td><td>Kontrol edin</td></tr>
   <tr><td>Minecraft</td><td>Windows, Mac veya Linux, Java Edition önerilir, 4 GB RAM, kendi Minecraft hesabı</td><td>Kontrol edin</td></tr>
   <tr><td>3D Modelleme</td><td>En az 8 GB RAM, tekerlekli fare zorunlu, harici ekran kartı önerilir</td><td>Yüksek gereksinim</td></tr>
   <tr><td>Unity</td><td>8 GB RAM zorunlu, 10 GB boş alan, yalnızca Windows veya Mac — Chromebook olmaz</td><td>Yüksek gereksinim</td></tr>
   </table></div></div>
  `},
  {t:'🧑‍💻 Eğitmenlerin yaşadığı teknik sorunlar', html:`
   <div class="card"><p>Aynı özen sizin kendi düzeneğiniz için de geçerlidir — bir eğitmenin teknik sorunu, bir öğrencininki kadar dersi aksatabilir.</p></div>
   ${iconGrid([
    {ic:'🔌', html:`<strong>30 dakika önceden test edin.</strong> Her dersten önce internet bağlantınızı, kameranızı ve mikrofonunuzu kontrol edin. Bir sorun fark ederseniz Takım Liderinize haber verin.`},
    {ic:'📷', html:`<strong>Alternatif arayın.</strong> Kameranızı kapatmak bağlantınızı iyileştiriyorsa, bunu yapın.`},
    {ic:'🎙️', html:`<strong>Yedek bir mikrofonunuz olsun.</strong> Kulaklığınız çalışmıyorsa bilgisayarınızın dahili sesi gibi başka bir seçeneği deneyin ve Classroom’da arka plan gürültüsü azaltmayı her zaman açın.`},
    {ic:'📶', html:`<strong>Sürücülerinizi ve VPN’in açık olup olmadığını kontrol edin</strong> — VPN’ler bağlantınızı yavaşlatma eğilimindedir.`},
    {ic:'🧊', html:`<strong>Blender gibi çok kaynak tüketen bir araçla mı çalışıyorsunuz?</strong> Kurs, ilk derslerde daha iyi performans için nasıl yapılandırılacağını anlatan bir kılavuz içerir.`},
    {ic:'💻', html:`<strong>Dersten önce RAM’i boşaltın.</strong> Google Chrome, Classroom ile en iyi deneyimi sunar ama çok fazla RAM kullanma eğilimindedir de — şu an ihtiyacınız olmayan sekmeleri ve programları kapatın.`},
    {ic:'👂', html:`<strong>Canlı olarak teyit edin.</strong> Ders başlamadan önce öğrencilerinizle sizi düzgün görüp duyup duymadıklarını kontrol edin — böylece teknik sorunları erkenden yakalarsınız.`}
   ])}
  `},
  {t:'🚨 Harekete geçin — protokol', html:`
   ${co('co-danger','🚨',`<p><strong>Bir derste ilk sorun:</strong> ilk 10 dakika içinde çözmeye çalışın. Hâlâ çalışmıyorsa, aynı gün Takım Liderinize haber verin — telafi seçeneğine o karar verecektir. 30 dakika içinde veliye sıcak bir dille mesaj gönderin ve durumu ekibinize bildirdiğinizi söyleyin.</p>
   <p><strong>Üst üste ikinci derste sorun:</strong> aynı gün Müşteri Hizmetleri’nde bir destek talebi (ticket) açın. Veliye konuyu üst kademeye ilettiğinizi ve telafi dersi için birinin kendisiyle iletişime geçeceğini yazın.</p>
   <p><strong>Sorun çözüldüğünde:</strong> veliye haber verin ve süreci kapatın — sorun küçük görünse bile.</p>`)}
  `},
  {t:'⚖️ Tüm grubun öğrenmeye devam etmesini sağlamak', html:`
   <div class="card"><p>Asıl hata yalnızca teknik sorunun kendisi değildir — eğitmenin bir öğrencinin sorununa o kadar odaklanması ki grubun geri kalanının beş ya da on dakikalık dersi kaybetmesidir.</p></div>
   ${iconGrid([
     {ic:'⏱️', html:`<strong>Bir süre sınırı belirleyin.</strong> Sorun yaşayan öğrenci için hızlı bir çözüm deneyin (tarayıcı değiştirmek, yeniden başlatmak), ardından grupla devam edin ve o öğrenciyle sonrasında ya da etkinlik aralarında ilgilenin.`},
     {ic:'👥', html:`<strong>Gruba yapacak bir şey verin</strong> — sorunu çözmeye başladığınız anda; onları donuk bir ekrana bakar hâlde bırakmayın.`},
     {ic:'🫂', html:`<strong>Sesinizle sakin kalın.</strong> Çözümden önce sizin tepkiniz derstir. Sakin bir “bu bazen olur, bir yolunu bulalım” sınıfı dengede tutar.`}
   ])}
  `}
 ],
 ix:{
  title:'Teknik Sorunlar — modül kontrolü',
  instr:'Son kontrol listesinin kilidini açmak için %70 gerekir.',
  items:[
   {type:'choice', prompt:'Bir öğrencinin Mac’inde hiçbir düğme yanıt vermiyor. İlk hamleniz nedir?', opts:['Dersi Google Chrome’da açmasını istemek','İlgisini kaybettiğini varsayıp devam etmek','Platformun kendiliğinden düzelmesini beklemek'], correct:0, fb:'Mac’te yanıt vermeyen düğmelerin en yaygın nedeni Safari’dir — Chrome’a geçmek hızlı çözümdür.'},
   {type:'sort', prompt:'Bu ne tür bir sorun?', card:'Bir öğrencinin ekranı sürekli donuyor ve düğmeler yanıt vermiyor.', zones:[
     {label:'⚖️ Disiplin sorunu', fb:'Tam değil — donan bir ekran ve yanıt vermeyen düğmeler tipik teknik belirtilerdir; çoğu zaman Mac’teki Safari’den kaynaklanır.'},
     {label:'🔧 Teknik sorun', fb:'Doğru — bu, ilgi kaybına değil, bir tarayıcı veya cihaz sorununa işaret ediyor. Çoğu zaman Mac’teki Safari’den kaynaklanır.'}
   ], correctZone:1},
   {type:'choice', prompt:'Bir derste ilk kez teknik bir sorun yaşanıyor. Veliye ne zamana kadar mesaj göndermelisiniz?', opts:['Yalnızca tekrar olursa','Hafta sonuna kadar','10 dakika boyunca çözmeye çalıştıktan sonra, 30 dakika içinde'], correct:2, fb:'Ailenin güvenini koruyan şey, hızlı ve sıcak bir mesajdır.'},
   {type:'choice', prompt:'Bir öğrencinin bağlantı sorununu çözerken grubun geri kalanı ne yapıyor olmalı?', opts:['Siz bitirene kadar sessizce beklemek','Ders aksamasın diye onlara verdiğiniz bir şey üzerinde çalışmak','Kendi başlarına da gelebilir diye sorunu nasıl çözdüğünüzü izlemek'], correct:1, fb:'Grubun geri kalanının çalışmaya devam etmesi, yalnızca bir öğrencinin sorununu değil, tüm dersi korur.'},
   {type:'sort', prompt:'Bu ne tür bir sorun?', card:'Bir öğrenci açıklama sırasında ilgisiz konulardan bahsetmek için sürekli mikrofonunu açıyor.', zones:[
     {label:'⚖️ Disiplin sorunu', fb:'Doğru — bu, teknik bir belirti değil, yönlendirilmesi gereken bir sınıf yönetimi örüntüsüdür.'},
     {label:'🔧 Teknik sorun', fb:'Tam değil — bu bir cihaz veya bağlantı sorunu değil, bir disiplin örüntüsüdür.'}
   ], correctZone:0}
  ]
 }
},
{id:'checklist', numLabel:'Son Kontrol Listesi', emoji:'✅', color:'var(--coral)',
 title:'Son Kontrol Listesi',
 desc:'Burada test yok — mini eğitimi kapatmadan önce temel noktaların bir özeti.',
 obj:'Aşağıdaki kontrol listesini gözden geçirin. Bu modül notlandırılmaz — okuyun, ardından mini eğitimi bitirin.',
 sections:[
  {t:'🛟 Bir iade talebi zaten varsa', html:`
   ${numlist([
     'Talebi öğrendiğim gün BO’da bir yorum bıraktım ve Takım Liderimi bilgilendirdim',
     'Bu öğrenciyle yaptığım bir sonraki ders gerçek bir kazanma girişimiydi — gerçek bir söz hakkı, görünür bir başarı, özel ilgi ve talepten hiç bahsetmeden',
     'Onayı asla teyit etmedim ve herhangi bir tutar konuşmadım — güvenli tek cümleyi kullandım ve gerisini Müşteri Hizmetleri’ne bıraktım'
   ])}
  `},  {t:'⚖️ Her derste disiplini korumak', html:`
   ${numlist([
     'Sınıf kurallarını ilk derste belirliyor, öğrencilerin bunları anlayıp kabul ettiğinden emin oluyorum — ve kendi sinirime değil, bu kurallara başvuruyorum',
     'Küçük öğrencilerle (6–8) kuralları bir oyuna dönüştürüyor, emir yerine bir görevle yönlendiriyor ve istediğim davranışı ortaya çıktığı anda övüyorum',
     'Daha büyük öğrencilerle (12+) davranışı kısaca — mümkünse birebir — dile getiriyor, enerjisini yönlendirecek bir rol veriyor ve uyarıları tekrarlamak yerine tutarlı bir şekilde takip ediyorum',
     'Sessiz bir sınıfta önce kameraları nazikçe istiyor, ardından baskı yapmadan başka güvenli yollar sunuyorum — sevdiği bir arka plan, sohbet, özel katılım',
     'Bir öğrenci görevden koptuğunda, öğrenme hedefini kaybetmeden görevi uyarlıyorum',
     'Önce kendimi düzenliyorum: kısa bir mola veriyor, sesimi sakin ve tempomu dengeli tutuyor, bir öğrencinin yoğunluğunu asla yansıtmıyorum',
     'Saygı konusunda kararlıyım: bir öğrenci müstehcen bir dil kullanır veya bir sınıf arkadaşına saldırırsa, grubu korumak için mikrofonunu bir süreliğine kapatıyorum ve dersten sonra konuşuyoruz',
     'Bir görevde bir şeyler ters gittiğinde hatayı olağan karşılıyor ve bir öğrenme fırsatı olarak ele alıyorum',
     'Bir durum yatıştırılamıyorsa — ders sırasında bile — veliden yardım istiyorum; sonrasında da durumu aileye bildiriyor ve BO’da bir yorum bırakıyorum',
     'Düzeneğimi dersten 30 dakika önce test ediyor ve bir öğrencinin teknik sorununu çözerken grubun çalışmaya devam etmesini sağlıyorum'
   ])}
  `},
  {t:'', html:`
   ${co('co-star','⭐',`<p><strong>Mini eğitimin tamamı bu kadar.</strong> Hazır olduğunuzda devam edin — ardından ödevi kapatmak için LMS’deki DST’yi tamamlayın.</p>`)}
  `}
 ],
 gateExam:true
}
];
  }
};
