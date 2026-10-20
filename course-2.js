// Курс турецкого. Часть 2: уровень A1, уроки 9–14.
window.TR_LESSONS = (window.TR_LESSONS || []).concat([

{
  id: 'a1-09', unit: 'A1', title: 'Куда? Откуда? Падежи -a и -dan',
  goal: 'Говорить, куда идёшь и откуда ты приехал',
  theory: `
<h3>Направительный падеж: -a / -e (куда? кому?)</h3>
<p>Окончание <b>-a / -e</b> по двойной гармонии отвечает на вопрос «куда?». Если слово кончается на гласную, появляется связующая <b>y</b>.</p>
<ul class="ex">
<li><b>ev</b> → <b>eve</b> — домой</li>
<li><b>okul</b> → <b>okula</b> — в школу</li>
<li><b>iş</b> → <b>işe</b> — на работу</li>
<li><b>plaj</b> → <b>plaja</b> — на пляж</li>
<li><b>hastane</b> → <b>hastaneye</b> — в больницу</li>
<li><b>Moskova</b> → <b>Moskova'ya</b>, <b>Türkiye</b> → <b>Türkiye'ye</b>, <b>İstanbul</b> → <b>İstanbul'a</b></li>
</ul>
<p>Тот же падеж отвечает на вопрос «кому?»: <b>Ahmet'e</b> — Ахмету, <b>anneme</b> — моей маме.</p>
<h3>Местоимения в направительном падеже</h3>
<p><b>bana</b> — мне, <b>sana</b> — тебе, <b>ona</b> — ему, ей, <b>bize</b> — нам, <b>size</b> — вам, <b>onlara</b> — им. Формы <b>bana</b> и <b>sana</b> неправильные, их просто запоминаем.</p>
<h3>Озвончение согласных</h3>
<p>Если многосложное слово кончается на <b>k, p, t, ç</b>, а окончание начинается с гласной, согласная становится звонкой:</p>
<table>
<tr><td>k → ğ</td><td><b>sokak</b> → <b>sokağa</b> (на улицу), <b>çocuk</b> → <b>çocuğa</b> (ребёнку)</td></tr>
<tr><td>p → b</td><td><b>kitap</b> → <b>kitaba</b> (к книге)</td></tr>
<tr><td>t → d</td><td><b>Mehmet</b> → <b>Mehmed'e</b> (в именах часто не меняется: Ahmet'e)</td></tr>
<tr><td>ç → c</td><td><b>ağaç</b> → <b>ağaca</b> (к дереву)</td></tr>
</table>
<p>Односложные слова обычно не меняются: <b>top</b> → <b>topa</b>, <b>at</b> → <b>ata</b>. Перед окончаниями на согласную (-da, -dan) озвончения нет: <b>sokakta</b>.</p>
<h3>Исходный падеж: -dan / -den (откуда?)</h3>
<p>Работает как местный падеж, только с <b>n</b> на конце; после глухих согласных — <b>-tan / -ten</b>.</p>
<ul class="ex">
<li><b>evden</b> — из дома, <b>okuldan</b> — из школы</li>
<li><b>işten</b> — с работы, <b>marketten</b> — из магазина</li>
<li><b>Rusya'dan</b> — из России, <b>Türkiye'den</b> — из Турции</li>
<li>местоимения: <b>benden</b> — от меня, <b>senden</b>, <b>ondan</b>, <b>bizden</b>, <b>sizden</b>, <b>onlardan</b></li>
</ul>
<h3>От… до…</h3>
<p><b>-dan … -a kadar</b>: <b>Moskova'dan İstanbul'a kadar</b> — от Москвы до Стамбула, <b>sabahtan akşama kadar</b> — с утра до вечера.</p>
<h3>Два полезных глагола-фразы</h3>
<p>Настоящее время подробно будет в следующем уроке, а эти формы уже пригодятся:</p>
<ul class="ex">
<li><b>Eve gidiyorum.</b> — Я иду домой. <b>Nereye gidiyorsun?</b> — Куда ты идёшь?</li>
<li><b>Rusya'dan geliyorum.</b> — Я из России (приехал из России). <b>Nereden geliyorsun?</b> — Откуда ты?</li>
</ul>
<h3>Откуда родом: -lı / -li</h3>
<p>Суффикс <b>-lı / -li / -lu / -lü</b> означает «родом из»: <b>Nerelisin?</b> — Откуда ты родом? <b>Moskovalıyım.</b> — Я из Москвы. <b>İstanbulluyum.</b> — Я из Стамбула. <b>Rusyalıyım.</b> — Я из России.</p>`,
  words: [
    ['nereye', 'куда'], ['nereden', 'откуда'], ['nereli', 'откуда родом'], ['gitmek', 'идти, ехать'],
    ['gelmek', 'приходить, приезжать'], ['dönmek', 'возвращаться, поворачивать'], ['bana', 'мне'], ['sana', 'тебе'],
    ['ona', 'ему, ей'], ['kadar', 'до'], ['ülke', 'страна'], ['köy', 'деревня'], ['tatil', 'отпуск, каникулы'],
    ['uçak', 'самолёт'], ['otobüs', 'автобус'], ['tren', 'поезд'], ['sabah', 'утро, утром'], ['akşam', 'вечер, вечером'],
    ['Ankara', 'Анкара'], ['Antalya', 'Анталья']
  ],
  dialog: [
    ['Garson', 'Nerelisiniz?', 'Откуда вы?'],
    ['Sergey', 'Rusyalıyım, Moskova\'dan geliyorum.', 'Я из России, из Москвы.'],
    ['Garson', 'Hoş geldiniz! İstanbul\'da tatil mi?', 'Добро пожаловать! В Стамбуле в отпуске?'],
    ['Sergey', 'Evet. Yarın Antalya\'ya gidiyorum.', 'Да. Завтра еду в Анталью.'],
    ['Garson', 'Uçakla mı?', 'На самолёте?'],
    ['Sergey', 'Hayır, otobüsle.', 'Нет, на автобусе.']
  ],
  ex: [
    ['c', 'okul + «куда?»', ['okula', 'okule', 'okulya']],
    ['c', 'Türkiye + «куда?»', ["Türkiye'ye", "Türkiye'e", "Türkiye'ya"]],
    ['c', 'iş + «откуда?»', ['işten', 'işden', 'işdan']],
    ['c', 'ben + -a (мне)', ['bana', 'bene', 'beni']],
    ['c', 'sokak + -a', ['sokağa', 'sokaka', 'sokakta'], 'k между гласными становится ğ.'],
    ['c', 'Что значит «Nerelisin?»', ['Откуда ты родом?', 'Куда ты идёшь?', 'Где ты?']],
    ['c', 'kitap + -a', ['kitaba', 'kitapa', 'kitabe']],
    ['c', '«с утра до вечера»', ['sabahtan akşama kadar', 'sabaha akşamdan kadar', 'sabahta akşamda kadar']],
    ['t', 'домой (куда?)', 'eve'],
    ['t', 'из России', "rusya'dan"],
    ['t', 'в Турцию', "türkiye'ye"],
    ['t', 'из школы', 'okuldan'],
    ['t', 'в больницу', 'hastaneye'],
    ['t', 'Я из Москвы (родом).', 'moskovalıyım|ben moskovalıyım'],
    ['t', 'Откуда ты? (откуда приехал)', 'nereden geliyorsun|nerelisin'],
    ['t', 'Куда ты идёшь?', 'nereye gidiyorsun'],
    ['t', 'тебе', 'sana'],
    ['o', 'Я иду домой.', 'Eve gidiyorum.'],
    ['o', 'Из Москвы в Стамбул', "Moskova'dan İstanbul'a"],
    ['o', 'Я из России.', "Rusya'dan geliyorum."]
  ]
},

{
  id: 'a1-10', unit: 'A1', title: 'Настоящее время -iyor',
  goal: 'Рассказывать, что ты делаешь сейчас и чем занимаешься',
  theory: `
<h3>Инфинитив: -mak / -mek</h3>
<p>В словаре глаголы стоят с окончанием <b>-mak</b> или <b>-mek</b>: <b>gelmek</b> — приходить, <b>yapmak</b> — делать. Убираем его и получаем основу: <b>gel-</b>, <b>yap-</b>.</p>
<h3>Как образуется настоящее время</h3>
<p>Основа + <b>-ıyor / -iyor / -uyor / -üyor</b> (четверная гармония) + личное окончание.</p>
<table>
<tr><th></th><th>gelmek</th><th>yapmak</th><th>okumak</th><th>görmek</th></tr>
<tr><td>ben</td><td><b>geliyorum</b></td><td><b>yapıyorum</b></td><td><b>okuyorum</b></td><td><b>görüyorum</b></td></tr>
<tr><td>sen</td><td><b>geliyorsun</b></td><td><b>yapıyorsun</b></td><td><b>okuyorsun</b></td><td><b>görüyorsun</b></td></tr>
<tr><td>o</td><td><b>geliyor</b></td><td><b>yapıyor</b></td><td><b>okuyor</b></td><td><b>görüyor</b></td></tr>
<tr><td>biz</td><td><b>geliyoruz</b></td><td><b>yapıyoruz</b></td><td><b>okuyoruz</b></td><td><b>görüyoruz</b></td></tr>
<tr><td>siz</td><td><b>geliyorsunuz</b></td><td><b>yapıyorsunuz</b></td><td><b>okuyorsunuz</b></td><td><b>görüyorsunuz</b></td></tr>
<tr><td>onlar</td><td><b>geliyorlar</b></td><td><b>yapıyorlar</b></td><td><b>okuyorlar</b></td><td><b>görüyorlar</b></td></tr>
</table>
<p>Личные окончания после <b>-yor</b> всегда одни и те же: <b>-um, -sun, —, -uz, -sunuz, -lar</b>, потому что в «yor» гласная o.</p>
<h3>Основа на гласную</h3>
<p>Если основа кончается на <b>a</b> или <b>e</b>, эта гласная выпадает и заменяется гласной из -iyor:</p>
<ul class="ex">
<li><b>beklemek</b> (ждать) → bekle- → <b>bekliyorum</b></li>
<li><b>anlamak</b> (понимать) → anla- → <b>anlıyorum</b></li>
<li><b>izlemek</b> (смотреть) → izle- → <b>izliyorum</b></li>
<li><b>istemek</b> (хотеть) → iste- → <b>istiyorum</b></li>
</ul>
<p>Если основа кончается на <b>ı, i, u, ü</b>, добавляется только <b>-yor</b>: <b>okumak</b> → <b>okuyorum</b>, <b>uyumak</b> (спать) → <b>uyuyorum</b>.</p>
<p>Два коротких глагола меняются сильнее: <b>yemek</b> (есть) → <b>yiyorum</b>, <b>demek</b> (сказать) → <b>diyorum</b>.</p>
<h3>t → d</h3>
<p>У нескольких глаголов конечная <b>t</b> перед гласной звонкая: <b>gitmek</b> → <b>gidiyorum</b>, <b>etmek</b> → <b>ediyorum</b>. Запомни именно эти два, они самые частые.</p>
<h3>Когда употребляется</h3>
<ul class="ex">
<li>то, что происходит прямо сейчас: <b>Şimdi çay içiyorum.</b> — Сейчас я пью чай.</li>
<li>то, что происходит в этот период жизни: <b>Türkçe öğreniyorum.</b> — Я учу турецкий.</li>
<li>ближайшие планы: <b>Yarın Ankara'ya gidiyorum.</b> — Завтра я еду в Анкару.</li>
</ul>
<h3>Порядок слов: глагол в конце</h3>
<p>Турецкое предложение строится так: кто — когда — где — что — глагол. <b>Ben her gün evde Türkçe öğreniyorum.</b> — Я каждый день дома учу турецкий.</p>
<h3>Глаголы с etmek и yapmak</h3>
<p>Много глаголов состоят из существительного и <b>etmek</b> / <b>yapmak</b>: <b>yardım etmek</b> — помогать, <b>telefon etmek</b> — звонить, <b>spor yapmak</b> — заниматься спортом, <b>alışveriş yapmak</b> — делать покупки.</p>`,
  words: [
    ['yapmak', 'делать'], ['okumak', 'читать'], ['yazmak', 'писать'], ['içmek', 'пить'], ['yemek', 'есть (кушать); еда'],
    ['konuşmak', 'говорить, разговаривать'], ['anlamak', 'понимать'], ['bilmek', 'знать'], ['öğrenmek', 'учить, узнавать'],
    ['çalışmak', 'работать, заниматься'], ['oturmak', 'сидеть, жить (где-то)'], ['yaşamak', 'жить'],
    ['beklemek', 'ждать'], ['sevmek', 'любить'], ['istemek', 'хотеть'], ['izlemek', 'смотреть (ТВ, фильм)'],
    ['görmek', 'видеть'], ['uyumak', 'спать'], ['etmek', 'делать (в составных глаголах)'],
    ['Türkçe', 'турецкий язык'], ['Rusça', 'русский язык'], ['her gün', 'каждый день']
  ],
  dialog: [
    ['Elif', 'Ne yapıyorsun?', 'Что делаешь?'],
    ['Sergey', 'Türkçe öğreniyorum. Kitap okuyorum.', 'Учу турецкий. Читаю книгу.'],
    ['Elif', 'Harika! Anlıyor musun?', 'Отлично! Понимаешь?'],
    ['Sergey', 'Biraz anlıyorum.', 'Немного понимаю.'],
    ['Elif', 'Ben de Rusça öğreniyorum.', 'А я учу русский.']
  ],
  ex: [
    ['c', 'gitmek → я иду', ['gidiyorum', 'gitiyorum', 'gidyorum'], 't → d перед гласной.'],
    ['c', 'izlemek → я смотрю', ['izliyorum', 'izleyorum', 'izlüyorum']],
    ['c', 'yemek → я ем', ['yiyorum', 'yemiyorum', 'yeyorum']],
    ['c', 'Где стоит глагол в турецком предложении?', ['в конце', 'в начале', 'после подлежащего']],
    ['c', 'görmek → они видят', ['görüyorlar', 'göriyorlar', 'görüyorlar mı']],
    ['t', 'gelmek → я прихожу', 'geliyorum'],
    ['t', 'yapmak → ты делаешь', 'yapıyorsun'],
    ['t', 'okumak → он читает', 'okuyor'],
    ['t', 'gitmek → мы идём', 'gidiyoruz'],
    ['t', 'beklemek → я жду', 'bekliyorum'],
    ['t', 'anlamak → я понимаю', 'anlıyorum'],
    ['t', 'yemek → они едят', 'yiyorlar'],
    ['t', 'içmek → вы пьёте', 'içiyorsunuz'],
    ['t', 'görmek → я вижу', 'görüyorum'],
    ['t', 'konuşmak → она говорит', 'konuşuyor'],
    ['t', 'Я учу турецкий.', 'türkçe öğreniyorum'],
    ['t', 'Я живу в Москве.', "moskova'da oturuyorum|moskova'da yaşıyorum|ben moskova'da yaşıyorum|ben moskova'da oturuyorum"],
    ['t', 'Я тебя жду.', 'seni bekliyorum'],
    ['o', 'Я пью чай.', 'Çay içiyorum.'],
    ['o', 'Ахмет читает книгу.', 'Ahmet kitap okuyor.'],
    ['o', 'Мы работаем дома.', 'Evde çalışıyoruz.'],
    ['o', 'Каждый день я учу турецкий.', 'Her gün Türkçe öğreniyorum.']
  ]
},

{
  id: 'a1-11', unit: 'A1', title: 'Настоящее время: «не» и вопрос',
  goal: 'Говорить «я не понимаю» и спрашивать «ты говоришь по-турецки?»',
  theory: `
<h3>Отрицание: -m-</h3>
<p>Между основой и -iyor вставляется <b>-m-</b>, а гласная после неё берётся по четверной гармонии от основы:</p>
<table>
<tr><th></th><th>gelmek</th><th>yapmak</th><th>okumak</th><th>görmek</th></tr>
<tr><td>ben</td><td><b>gelmiyorum</b></td><td><b>yapmıyorum</b></td><td><b>okumuyorum</b></td><td><b>görmüyorum</b></td></tr>
<tr><td>sen</td><td><b>gelmiyorsun</b></td><td><b>yapmıyorsun</b></td><td><b>okumuyorsun</b></td><td><b>görmüyorsun</b></td></tr>
<tr><td>o</td><td><b>gelmiyor</b></td><td><b>yapmıyor</b></td><td><b>okumuyor</b></td><td><b>görmüyor</b></td></tr>
<tr><td>biz</td><td><b>gelmiyoruz</b></td><td><b>yapmıyoruz</b></td><td><b>okumuyoruz</b></td><td><b>görmüyoruz</b></td></tr>
<tr><td>siz</td><td><b>gelmiyorsunuz</b></td><td><b>yapmıyorsunuz</b></td><td><b>okumuyorsunuz</b></td><td><b>görmüyorsunuz</b></td></tr>
<tr><td>onlar</td><td><b>gelmiyorlar</b></td><td><b>yapmıyorlar</b></td><td><b>okumuyorlar</b></td><td><b>görmüyorlar</b></td></tr>
</table>
<p>Ударение падает на слог <b>перед</b> -m-: <b>GELmiyorum</b>, <b>anLAmıyorum</b>.</p>
<p>Две фразы, которые нужны в первый же день: <b>Anlamıyorum.</b> — Я не понимаю. <b>Bilmiyorum.</b> — Я не знаю.</p>
<h3>Вопрос: частица mu</h3>
<p>После -iyor вопросительная частица всегда <b>mu</b> (в «yor» гласная o), а личное окончание переходит на неё:</p>
<table>
<tr><td>ben</td><td><b>geliyor muyum?</b></td><td>biz</td><td><b>geliyor muyuz?</b></td></tr>
<tr><td>sen</td><td><b>geliyor musun?</b></td><td>siz</td><td><b>geliyor musunuz?</b></td></tr>
<tr><td>o</td><td><b>geliyor mu?</b></td><td>onlar</td><td><b>geliyorlar mı?</b></td></tr>
</table>
<p>Обрати внимание на «они»: окончание <b>-lar</b> остаётся на глаголе, частица становится <b>mı</b>.</p>
<h3>Отрицательный вопрос</h3>
<p><b>Gelmiyor musun?</b> — Ты не идёшь? / Разве ты не придёшь? <b>Anlamıyor musun?</b> — Ты не понимаешь?</p>
<h3>Наречия частоты и времени</h3>
<ul class="ex">
<li><b>her gün</b> — каждый день, <b>hep</b> — всегда, <b>sık sık</b> — часто, <b>bazen</b> — иногда</li>
<li><b>hiç</b> — совсем, ни разу (с отрицанием): <b>Hiç anlamıyorum.</b> — Совсем не понимаю.</li>
<li><b>hâlâ</b> — всё ещё, <b>artık</b> — уже, больше (не): <b>Artık sigara içmiyorum.</b> — Я больше не курю.</li>
</ul>
<h3>Фразы для разговора с турками</h3>
<ul class="ex">
<li><b>Türkçe konuşuyor musunuz?</b> — Вы говорите по-турецки?</li>
<li><b>Biraz Türkçe konuşuyorum.</b> — Я немного говорю по-турецки.</li>
<li><b>İngilizce biliyor musunuz?</b> — Вы знаете английский?</li>
<li><b>Lütfen yavaş konuşun.</b> — Говорите медленно, пожалуйста.</li>
<li><b>Tekrar eder misiniz?</b> — Повторите, пожалуйста?</li>
<li><b>Ne demek?</b> — Что это значит?</li>
</ul>`,
  words: [
    ['yavaş', 'медленно, медленный'], ['hızlı', 'быстро, быстрый'], ['tekrar', 'снова, ещё раз'],
    ['bugün', 'сегодня'], ['sık sık', 'часто'], ['bazen', 'иногда'], ['hiç', 'совсем, ни разу'],
    ['hep', 'всегда'], ['hâlâ', 'всё ещё'], ['artık', 'уже, больше (не)'], ['birlikte', 'вместе'],
    ['yalnız', 'один, в одиночку'], ['İngilizce', 'английский язык'], ['sigara', 'сигарета'],
    ['ne demek', 'что значит'], ['anlamıyorum', 'я не понимаю'], ['bilmiyorum', 'я не знаю']
  ],
  dialog: [
    ['Satıcı', 'Buyurun, ne istiyorsunuz?', 'Слушаю вас, что желаете?'],
    ['Sergey', 'Pardon, anlamıyorum. İngilizce biliyor musunuz?', 'Простите, не понимаю. Вы знаете английский?'],
    ['Satıcı', 'Hayır, bilmiyorum. Türkçe konuşuyor musunuz?', 'Нет, не знаю. Вы говорите по-турецки?'],
    ['Sergey', 'Biraz konuşuyorum. Lütfen yavaş konuşun.', 'Немного говорю. Говорите медленно, пожалуйста.'],
    ['Satıcı', 'Tamam. Ne... is... ti... yor... su... nuz?', 'Хорошо. Что… же… ла… е… те?']
  ],
  ex: [
    ['c', 'okumak → я не читаю', ['okumuyorum', 'okumıyorum', 'okumiyorum']],
    ['c', 'görmek → ты не видишь', ['görmüyorsun', 'görmiyorsun', 'görmuyorsun']],
    ['c', 'Они идут?', ['Gidiyorlar mı?', 'Gidiyor mular?', 'Gidiyorlar mu?']],
    ['c', 'Ты придёшь? (ты приходишь?)', ['Geliyor musun?', 'Geliyorsun mu?', 'Gelmiyor musun?']],
    ['c', 'Куда падает ударение в gelmiyorum?', ['на gel', 'на mi', 'на rum']],
    ['c', '«Я больше не курю»', ['Artık sigara içmiyorum.', 'Hâlâ sigara içmiyorum.', 'Hep sigara içmiyorum.']],
    ['t', 'Я не понимаю.', 'anlamıyorum'],
    ['t', 'Я не знаю.', 'bilmiyorum'],
    ['t', 'Что ты делаешь?', 'ne yapıyorsun'],
    ['t', 'Вы говорите по-турецки?', 'türkçe konuşuyor musunuz'],
    ['t', 'Он сегодня не работает.', 'bugün çalışmıyor|o bugün çalışmıyor'],
    ['t', 'Мы не пьём кофе.', 'kahve içmiyoruz|biz kahve içmiyoruz'],
    ['t', 'Ты понимаешь?', 'anlıyor musun'],
    ['t', 'Они не приходят.', 'gelmiyorlar|onlar gelmiyor|onlar gelmiyorlar'],
    ['t', 'Что это значит?', 'ne demek|bu ne demek'],
    ['t', 'Совсем не понимаю.', 'hiç anlamıyorum'],
    ['o', 'Говорите медленно, пожалуйста.', 'Lütfen yavaş konuşun.'],
    ['o', 'Я немного говорю по-турецки.', 'Biraz Türkçe konuşuyorum.'],
    ['o', 'Я всё ещё не понимаю.', 'Hâlâ anlamıyorum.']
  ]
},

{
  id: 'a1-12', unit: 'A1', title: 'Еда и кафе',
  goal: 'Заказать еду, попросить счёт и поблагодарить за ужин',
  theory: `
<h3>В кафе</h3>
<ul class="ex">
<li><b>Buyurun, ne alırsınız?</b> — Слушаю вас, что будете заказывать?</li>
<li><b>Menü alabilir miyim?</b> — Можно меню?</li>
<li><b>Bir çay, lütfen.</b> — Один чай, пожалуйста.</li>
<li><b>İki kahve alabilir miyim?</b> — Можно два кофе?</li>
<li><b>Su istiyorum.</b> — Я хочу воды.</li>
<li><b>Bakar mısınız?</b> — Будьте добры! (так подзывают официанта)</li>
<li><b>Hesap, lütfen.</b> — Счёт, пожалуйста.</li>
<li><b>Kartla ödeyebilir miyim?</b> — Можно оплатить картой?</li>
</ul>
<h3>С чем-то и без чего-то: -lı и -sız</h3>
<p>Два очень полезных суффикса по четверной гармонии:</p>
<ul class="ex">
<li><b>-lı / -li / -lu / -lü</b> — «с»: <b>sütlü kahve</b> — кофе с молоком, <b>şekerli çay</b> — сладкий чай, <b>acılı</b> — острый (с перцем), <b>limonlu</b> — с лимоном</li>
<li><b>-sız / -siz / -suz / -süz</b> — «без»: <b>şekersiz</b> — без сахара, <b>tuzsuz</b> — без соли, <b>etsiz</b> — без мяса, <b>acısız</b> — неострый</li>
</ul>
<h3>Турецкий кофе и чай</h3>
<p><b>Türk kahvesi</b> заказывают, сразу говоря про сахар: <b>sade</b> — без сахара, <b>az şekerli</b> — чуть сладкий, <b>orta</b> — средний, <b>şekerli</b> — сладкий. Чай подают в стаканчике-тюльпане, <b>açık</b> — светлый (слабый), <b>demli</b> — крепкий.</p>
<h3>Застольные фразы</h3>
<ul class="ex">
<li><b>Afiyet olsun!</b> — Приятного аппетита! (говорят и до, и после еды)</li>
<li><b>Çok lezzetli!</b> — Очень вкусно!</li>
<li><b>Elinize sağlık!</b> — «Здоровья вашим рукам» — благодарность тому, кто готовил. Ответ: <b>Afiyet olsun!</b></li>
<li><b>Doydum.</b> — Я наелся.</li>
<li><b>Şerefe!</b> — За здоровье! (тост)</li>
</ul>
<h3>Приёмы пищи</h3>
<p><b>kahvaltı</b> — завтрак (<b>kahvaltı yapmak</b> — завтракать), <b>öğle yemeği</b> — обед, <b>akşam yemeği</b> — ужин. Турецкий завтрак — отдельное удовольствие: сыр, оливки, помидоры, яйца, мёд и много чая.</p>
<h3>Я не ем…</h3>
<p><b>Et yemiyorum.</b> — Я не ем мясо. <b>Vejetaryenim.</b> — Я вегетарианец. <b>Alerjim var.</b> — У меня аллергия.</p>`,
  words: [
    ['kahve', 'кофе'], ['süt', 'молоко'], ['ekmek', 'хлеб'], ['peynir', 'сыр'], ['yumurta', 'яйцо'],
    ['et', 'мясо'], ['tavuk', 'курица'], ['balık', 'рыба'], ['sebze', 'овощи'], ['meyve', 'фрукты'],
    ['elma', 'яблоко'], ['salata', 'салат'], ['çorba', 'суп'], ['pilav', 'плов, рис'], ['tatlı', 'десерт; сладкий'],
    ['tuz', 'соль'], ['zeytin', 'оливки'], ['bal', 'мёд'], ['hesap', 'счёт'], ['menü', 'меню'], ['garson', 'официант'],
    ['lezzetli', 'вкусный'], ['kahvaltı', 'завтрак'], ['akşam yemeği', 'ужин'], ['öğle yemeği', 'обед'],
    ['afiyet olsun', 'приятного аппетита'], ['elinize sağlık', 'спасибо тому, кто готовил'], ['şekersiz', 'без сахара'],
    ['sütlü', 'с молоком'], ['acılı', 'острый']
  ],
  dialog: [
    ['Garson', 'Hoş geldiniz! Buyurun, ne alırsınız?', 'Добро пожаловать! Что будете заказывать?'],
    ['Sergey', 'Bir mercimek çorbası ve tavuklu pilav, lütfen.', 'Чечевичный суп и плов с курицей, пожалуйста.'],
    ['Garson', 'İçecek ne alırsınız?', 'Что будете пить?'],
    ['Sergey', 'Bir çay. Şekersiz, lütfen.', 'Один чай. Без сахара, пожалуйста.'],
    ['Garson', 'Afiyet olsun!', 'Приятного аппетита!'],
    ['Sergey', 'Çok lezzetli! Hesap, lütfen.', 'Очень вкусно! Счёт, пожалуйста.']
  ],
  ex: [
    ['c', 'Что сказать хозяйке после вкусного обеда?', ['Elinize sağlık!', 'Afiyet olsun!', 'Hoş bulduk!']],
    ['c', '«без соли»', ['tuzsuz', 'tuzsız', 'tuzlu']],
    ['c', '«острый» (с перцем)', ['acılı', 'acısız', 'acılı değil']],
    ['c', 'Официант спрашивает «Ne alırsınız?» Это значит…', ['Что будете заказывать?', 'Сколько стоит?', 'Где счёт?']],
    ['c', 'Как подозвать официанта?', ['Bakar mısınız?', 'Bak!', 'Hoşça kal!']],
    ['c', 'Турецкий кофе без сахара', ['sade', 'orta', 'şekerli']],
    ['c', '«Я наелся»', ['Doydum.', 'Açım.', 'Şerefe.']],
    ['t', 'Счёт, пожалуйста.', 'hesap, lütfen|hesap lütfen'],
    ['t', 'Приятного аппетита!', 'afiyet olsun'],
    ['t', 'кофе с молоком', 'sütlü kahve'],
    ['t', 'чай без сахара', 'şekersiz çay'],
    ['t', 'Два чая, пожалуйста.', 'iki çay, lütfen|iki çay lütfen'],
    ['t', 'Очень вкусно!', 'çok lezzetli'],
    ['t', 'Можно меню?', 'menü alabilir miyim'],
    ['t', 'Я хочу воды.', 'su istiyorum'],
    ['t', 'Я не ем мясо.', 'et yemiyorum'],
    ['o', 'На завтрак я ем сыр и хлеб.', 'Kahvaltıda peynir ve ekmek yiyorum.'],
    ['o', 'Один турецкий кофе, средней сладости, пожалуйста.', 'Bir Türk kahvesi, orta, lütfen.'],
    ['o', 'Можно оплатить картой?', 'Kartla ödeyebilir miyim?']
  ]
},

{
  id: 'a1-13', unit: 'A1', title: 'Мой, твой: притяжательные окончания и семья',
  goal: 'Рассказывать о семье и говорить «у меня есть»',
  theory: `
<h3>Притяжательные окончания</h3>
<p>«Мой дом» по-турецки — одно слово: <b>evim</b>. Принадлежность показывает окончание (четверная гармония):</p>
<table>
<tr><th></th><th>После согласной</th><th>ev</th><th>okul</th><th>После гласной</th><th>araba</th></tr>
<tr><td>мой</td><td>-ım / -im / -um / -üm</td><td><b>evim</b></td><td><b>okulum</b></td><td>-m</td><td><b>arabam</b></td></tr>
<tr><td>твой</td><td>-ın / -in / -un / -ün</td><td><b>evin</b></td><td><b>okulun</b></td><td>-n</td><td><b>araban</b></td></tr>
<tr><td>его, её</td><td>-ı / -i / -u / -ü</td><td><b>evi</b></td><td><b>okulu</b></td><td>-sı / -si</td><td><b>arabası</b></td></tr>
<tr><td>наш</td><td>-ımız / -imiz…</td><td><b>evimiz</b></td><td><b>okulumuz</b></td><td>-mız</td><td><b>arabamız</b></td></tr>
<tr><td>ваш</td><td>-ınız / -iniz…</td><td><b>eviniz</b></td><td><b>okulunuz</b></td><td>-nız</td><td><b>arabanız</b></td></tr>
<tr><td>их</td><td>-ları / -leri</td><td><b>evleri</b></td><td><b>okulları</b></td><td>-ları</td><td><b>arabaları</b></td></tr>
</table>
<p>Для усиления можно добавить местоимение в родительном падеже: <b>benim evim</b> — <i>мой</i> дом, <b>senin araban</b>, <b>onun kitabı</b>, <b>bizim okulumuz</b>, <b>sizin eviniz</b>, <b>onların evi</b>.</p>
<h3>Озвончение</h3>
<p>Окончание начинается с гласной, поэтому срабатывает правило из урока 9: <b>kitap</b> → <b>kitabım</b>, <b>çocuk</b> → <b>çocuğum</b>, <b>ağaç</b> → <b>ağacı</b>.</p>
<h3>«У меня есть»</h3>
<p>Глагола «иметь» нет. Говорят «мой брат есть»:</p>
<ul class="ex">
<li><b>Arabam var.</b> — У меня есть машина.</li>
<li><b>Kardeşin var mı?</b> — У тебя есть брат или сестра?</li>
<li><b>İki çocuğum var.</b> — У меня двое детей.</li>
<li><b>Vaktim yok.</b> — У меня нет времени.</li>
<li><b>Sorunum yok.</b> — У меня нет проблем.</li>
</ul>
<h3>Падежи после притяжательного окончания</h3>
<p>После окончания 3-го лица (-ı, -sı) перед падежом появляется <b>n</b>: <b>evinde</b> — в его доме, <b>arabasına</b> — в его машину. После «мой, твой» — как обычно: <b>evimde</b> — в моём доме, <b>evime</b> — в мой дом.</p>
<h3>Семья по-турецки</h3>
<p>Родственников в турецком называют точнее, чем в русском: старшие брат и сестра — отдельные слова, а дяди и тёти зависят от того, с чьей они стороны.</p>
<table>
<tr><td><b>anne</b></td><td>мама</td><td><b>baba</b></td><td>папа</td></tr>
<tr><td><b>abla</b></td><td>старшая сестра</td><td><b>ağabey</b> (<b>abi</b>)</td><td>старший брат</td></tr>
<tr><td><b>kız kardeş</b></td><td>младшая сестра</td><td><b>erkek kardeş</b></td><td>младший брат</td></tr>
<tr><td><b>anneanne</b></td><td>бабушка по маме</td><td><b>babaanne</b></td><td>бабушка по папе</td></tr>
<tr><td><b>dede</b></td><td>дедушка</td><td><b>torun</b></td><td>внук, внучка</td></tr>
<tr><td><b>teyze</b></td><td>тётя (сестра мамы)</td><td><b>hala</b></td><td>тётя (сестра папы)</td></tr>
<tr><td><b>dayı</b></td><td>дядя (брат мамы)</td><td><b>amca</b></td><td>дядя (брат папы)</td></tr>
</table>
<p><b>oğul</b> — сын (с окончанием теряет u: <b>oğlum</b> — мой сын), <b>kız</b> — дочь, <b>eş</b> — супруг(а), <b>koca</b> — муж, <b>karı</b> — жена (разг.).</p>
<div class="tip">Незнакомых людей на улице турки тоже зовут родственниками: пожилого мужчину — <b>amca</b>, женщину — <b>teyze</b>, парня — <b>abi</b>, девушку — <b>abla</b>.</div>`,
  words: [
    ['aile', 'семья'], ['anne', 'мама'], ['baba', 'папа'], ['kardeş', 'брат или сестра'], ['abla', 'старшая сестра'],
    ['ağabey', 'старший брат (разг. abi)'], ['kız kardeş', 'младшая сестра'], ['erkek kardeş', 'младший брат'],
    ['eş', 'супруг, супруга'], ['koca', 'муж'], ['oğul', 'сын'], ['anneanne', 'бабушка по маме'],
    ['babaanne', 'бабушка по папе'], ['dede', 'дедушка'], ['torun', 'внук, внучка'], ['teyze', 'тётя по маме'],
    ['hala', 'тётя по папе'], ['dayı', 'дядя по маме'], ['amca', 'дядя по папе'], ['arkadaş', 'друг, подруга'],
    ['sevgili', 'любимый, девушка, парень'], ['vakit', 'время'], ['evlenmek', 'жениться, выходить замуж']
  ],
  dialog: [
    ['Zeynep', 'Kardeşin var mı?', 'У тебя есть брат или сестра?'],
    ['Sergey', 'Evet, bir ablam var. Adı Natalya.', 'Да, у меня есть старшая сестра. Её зовут Наталья.'],
    ['Zeynep', 'O da Moskova\'da mı?', 'Она тоже в Москве?'],
    ['Sergey', 'Hayır, ablam ve kocası Kazan\'da oturuyor. Senin kardeşin var mı?', 'Нет, сестра с мужем живут в Казани. А у тебя есть?'],
    ['Zeynep', 'İki erkek kardeşim var. Çok gürültülüler!', 'У меня два младших брата. Они очень шумные!']
  ],
  ex: [
    ['c', 'kitap + «мой»', ['kitabım', 'kitapım', 'kitapim']],
    ['c', 'çocuk + «его»', ['çocuğu', 'çocuku', 'çocuğı']],
    ['c', 'Дядя по маме', ['dayı', 'amca', 'dede']],
    ['c', 'araba + «его»', ['arabası', 'arabai', 'arabası değil']],
    ['c', 'oğul + «мой»', ['oğlum', 'oğulum', 'oğulım']],
    ['c', 'Как обратиться к незнакомой пожилой женщине?', ['teyze', 'abla', 'kız']],
    ['c', '«в его доме»', ['evinde', 'evide', 'evde']],
    ['t', 'мой дом', 'evim|benim evim'],
    ['t', 'твоя машина', 'araban|senin araban'],
    ['t', 'его книга', 'kitabı|onun kitabı'],
    ['t', 'наша школа', 'okulumuz|bizim okulumuz'],
    ['t', 'ваш друг', 'arkadaşınız|sizin arkadaşınız'],
    ['t', 'мой сын', 'oğlum|benim oğlum'],
    ['t', 'У меня есть старшая сестра.', 'ablam var|bir ablam var'],
    ['t', 'У тебя есть машина?', 'araban var mı|senin araban var mı'],
    ['t', 'Моя мама дома.', 'annem evde'],
    ['t', 'У меня нет времени.', 'vaktim yok|zamanım yok'],
    ['o', 'Мой старший брат живёт в Анкаре.', "Ağabeyim Ankara'da oturuyor."],
    ['o', 'У меня нет машины.', 'Arabam yok.'],
    ['o', 'У меня двое детей.', 'İki çocuğum var.']
  ]
},

{
  id: 'a1-14', unit: 'A1', title: 'Время, дни недели и месяцы',
  goal: 'Называть время, договариваться о встрече на конкретный день',
  theory: `
<h3>Который час?</h3>
<ul class="ex">
<li><b>Saat kaç?</b> — Который час?</li>
<li><b>Saat üç.</b> — Три часа.</li>
<li><b>Saat üç buçuk.</b> — Половина четвёртого (3:30). <b>buçuk</b> — «с половиной».</li>
<li><b>Saat yarım.</b> — Половина первого (12:30).</li>
</ul>
<h3>Минуты: «проходит» и «осталось»</h3>
<p>Первая половина часа — <b>geçiyor</b> («проходит»), час ставится в винительный падеж (-ı/-i/-u/-ü):</p>
<ul class="ex">
<li><b>Saat ikiyi on geçiyor.</b> — 2:10 (десять минут третьего)</li>
<li><b>Saat dördü çeyrek geçiyor.</b> — 4:15 (<b>çeyrek</b> — четверть)</li>
</ul>
<p>Вторая половина — <b>var</b> («есть, осталось»), час в направительном падеже (-a/-e):</p>
<ul class="ex">
<li><b>Saat üçe yirmi var.</b> — 2:40 (без двадцати три)</li>
<li><b>Saat beşe çeyrek var.</b> — 4:45 (без четверти пять)</li>
</ul>
<p>В расписаниях и на вокзалах говорят проще, как в цифрах: <b>on dört otuz</b> — 14:30.</p>
<h3>В котором часу? Saat kaçta?</h3>
<p>Местный падеж: <b>Saat üçte.</b> — В три часа. <b>Saat dokuzda.</b> — В девять. <b>Saat yedi buçukta.</b> — В половине восьмого.</p>
<h3>Части дня</h3>
<p><b>sabah</b> — утро, утром; <b>öğle</b> — полдень; <b>öğleden sonra</b> — после обеда; <b>akşam</b> — вечер, вечером; <b>gece</b> — ночь, ночью. Можно сочетать: <b>yarın sabah</b> — завтра утром, <b>dün akşam</b> — вчера вечером, <b>bu akşam</b> — сегодня вечером.</p>
<h3>Дни недели</h3>
<table>
<tr><td><b>pazartesi</b></td><td>понедельник</td><td><b>cuma</b></td><td>пятница</td></tr>
<tr><td><b>salı</b></td><td>вторник</td><td><b>cumartesi</b></td><td>суббота</td></tr>
<tr><td><b>çarşamba</b></td><td>среда</td><td><b>pazar</b></td><td>воскресенье</td></tr>
<tr><td><b>perşembe</b></td><td>четверг</td><td></td><td></td></tr>
</table>
<p>«В понедельник» — <b>pazartesi</b> или <b>pazartesi günü</b>. <b>hafta sonu</b> — выходные, <b>hafta içi</b> — будни.</p>
<h3>Месяцы</h3>
<table>
<tr><td><b>ocak</b></td><td>январь</td><td><b>temmuz</b></td><td>июль</td></tr>
<tr><td><b>şubat</b></td><td>февраль</td><td><b>ağustos</b></td><td>август</td></tr>
<tr><td><b>mart</b></td><td>март</td><td><b>eylül</b></td><td>сентябрь</td></tr>
<tr><td><b>nisan</b></td><td>апрель</td><td><b>ekim</b></td><td>октябрь</td></tr>
<tr><td><b>mayıs</b></td><td>май</td><td><b>kasım</b></td><td>ноябрь</td></tr>
<tr><td><b>haziran</b></td><td>июнь</td><td><b>aralık</b></td><td>декабрь</td></tr>
</table>
<p>«В мае» — <b>mayısta</b> или <b>mayıs ayında</b>. Дата: <b>20 Ekim</b> — <b>yirmi ekim</b>. Месяцы и дни пишутся со строчной, если не стоят в дате.</p>
<h3>Сегодня, завтра, вчера</h3>
<p><b>bugün</b> — сегодня, <b>yarın</b> — завтра, <b>dün</b> — вчера, <b>öbür gün</b> — послезавтра, <b>bu hafta</b> — на этой неделе, <b>gelecek hafta</b> — на следующей неделе. <b>Ne zaman?</b> — Когда?</p>`,
  words: [
    ['saat', 'час, часы'], ['dakika', 'минута'], ['buçuk', 'с половиной'], ['çeyrek', 'четверть'],
    ['gün', 'день'], ['hafta', 'неделя'], ['ay', 'месяц'], ['yıl', 'год'], ['yarın', 'завтра'], ['dün', 'вчера'],
    ['gece', 'ночь, ночью'], ['öğleden sonra', 'после обеда'], ['ne zaman', 'когда'], ['hafta sonu', 'выходные'],
    ['pazartesi', 'понедельник'], ['salı', 'вторник'], ['çarşamba', 'среда'], ['perşembe', 'четверг'],
    ['cuma', 'пятница'], ['cumartesi', 'суббота'], ['pazar', 'воскресенье'], ['erken', 'рано'], ['geç', 'поздно']
  ],
  dialog: [
    ['Emre', 'Yarın buluşalım mı?', 'Встретимся завтра?'],
    ['Sergey', 'Yarın cuma, değil mi? İşteyim.', 'Завтра пятница, да? Я на работе.'],
    ['Emre', 'Akşam saat kaçta bitiyor?', 'Во сколько вечером заканчиваешь?'],
    ['Sergey', 'Saat altıda.', 'В шесть.'],
    ['Emre', 'Tamam, saat yedi buçukta kafede buluşalım.', 'Хорошо, встретимся в кафе в половине восьмого.']
  ],
  ex: [
    ['c', 'çarşamba', ['среда', 'четверг', 'вторник']],
    ['c', 'perşembe', ['четверг', 'среда', 'пятница']],
    ['c', 'cumartesi', ['суббота', 'пятница', 'воскресенье']],
    ['c', 'ekim', ['октябрь', 'сентябрь', 'ноябрь']],
    ['c', 'haziran', ['июнь', 'июль', 'январь']],
    ['c', 'Saat beşe çeyrek var.', ['4:45', '5:15', '5:45']],
    ['c', 'Saat ikiyi on geçiyor.', ['2:10', '1:50', '10:02']],
    ['c', 'Saat yarım.', ['12:30', '1:30', '6:30']],
    ['t', 'Который час?', 'saat kaç'],
    ['t', 'Три часа.', 'saat üç'],
    ['t', 'Половина пятого (4:30)', 'saat dört buçuk|dört buçuk'],
    ['t', 'В восемь часов', 'saat sekizde|sekizde'],
    ['t', 'в пятницу', 'cuma günü|cuma'],
    ['t', 'завтра утром', 'yarın sabah'],
    ['t', 'в мае', 'mayısta|mayıs ayında'],
    ['t', 'Когда?', 'ne zaman'],
    ['t', 'на следующей неделе', 'gelecek hafta|haftaya'],
    ['o', 'Завтра в девять часов я на работе.', 'Yarın saat dokuzda işteyim.'],
    ['o', 'В выходные я дома.', 'Hafta sonu evdeyim.'],
    ['o', 'Встретимся в кафе в половине восьмого.', 'Saat yedi buçukta kafede buluşalım.']
  ]
}

]);
