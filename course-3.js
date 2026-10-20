// Курс турецкого. Часть 3: уровень A2, уроки 15–26.
window.TR_LESSONS = (window.TR_LESSONS || []).concat([

{
  id: 'a2-01', unit: 'A2', title: 'Винительный падеж: конкретный предмет',
  goal: 'Отличать «читаю книгу» от «читаю эту книгу»',
  theory: `
<h3>Зачем он нужен</h3>
<p>Прямое дополнение в турецком бывает двух видов:</p>
<ul class="ex">
<li><b>Kitap okuyorum.</b> — Я читаю книгу (вообще занимаюсь чтением, какую-то книгу).</li>
<li><b>Kitabı okuyorum.</b> — Я читаю <i>ту самую</i> книгу (конкретную, о которой мы знаем).</li>
</ul>
<p>Если предмет конкретный, известный, с «этот», с «мой», с именем — ставим окончание винительного падежа.</p>
<h3>Окончание -ı / -i / -u / -ü</h3>
<p>Четверная гармония; после гласной — связующая <b>y</b>; срабатывает озвончение.</p>
<ul class="ex">
<li><b>ev</b> → <b>evi</b>, <b>okul</b> → <b>okulu</b>, <b>göz</b> → <b>gözü</b></li>
<li><b>kapı</b> → <b>kapıyı</b>, <b>araba</b> → <b>arabayı</b>, <b>kedi</b> → <b>kediyi</b></li>
<li><b>kitap</b> → <b>kitabı</b>, <b>çocuk</b> → <b>çocuğu</b></li>
<li><b>Ahmet'i</b>, <b>İstanbul'u</b>, <b>Türkiye'yi</b></li>
</ul>
<h3>Местоимения</h3>
<p><b>beni</b> — меня, <b>seni</b> — тебя, <b>onu</b> — его, её, <b>bizi</b> — нас, <b>sizi</b> — вас, <b>onları</b> — их. <b>bunu</b> — это, <b>şunu</b> — вон то.</p>
<ul class="ex">
<li><b>Seni seviyorum.</b> — Я тебя люблю.</li>
<li><b>Bunu istiyorum.</b> — Я хочу это.</li>
<li><b>Onu tanımıyorum.</b> — Я его не знаю.</li>
</ul>
<h3>После притяжательных окончаний</h3>
<p><b>arabamı</b> — мою машину, <b>evini</b> — твой дом; после окончания 3-го лица появляется <b>n</b>: <b>arabasını</b> — его машину, <b>kitabını</b> — его книгу.</p>
<h3>Когда окончание не нужно</h3>
<p>Если между дополнением и глаголом нет паузы и предмет «вообще»: <b>çay içmek</b> — пить чай, <b>kitap okumak</b> — читать книги, <b>bilet almak</b> — покупать билет, <b>yemek yemek</b> — есть, кушать. Если поставить окончание, смысл станет «этот чай», «этот билет».</p>
<h3>Глаголы, которые часто его требуют</h3>
<p><b>görmek</b> — видеть, <b>tanımak</b> — знать (человека), <b>almak</b> — брать, покупать, <b>açmak</b> — открывать, <b>kapatmak</b> — закрывать, <b>aramak</b> — искать; звонить, <b>bulmak</b> — находить, <b>unutmak</b> — забывать, <b>hatırlamak</b> — помнить, <b>beğenmek</b> — нравиться (кому — что: <b>Bu şehri beğeniyorum.</b>).</p>
<h3>Два дополнения сразу</h3>
<p><b>vermek</b> — давать, <b>göstermek</b> — показывать: кому — направительный, что — винительный. <b>Anahtarı bana verir misin?</b> — Дашь мне ключ? <b>Haritayı sana gösteriyorum.</b> — Показываю тебе карту.</p>`,
  words: [
    ['almak', 'брать, покупать'], ['açmak', 'открывать, включать'], ['kapatmak', 'закрывать, выключать'],
    ['aramak', 'искать; звонить'], ['bulmak', 'находить'], ['tanımak', 'знать (человека), узнавать'],
    ['unutmak', 'забывать'], ['hatırlamak', 'помнить, вспоминать'], ['vermek', 'давать'], ['göstermek', 'показывать'],
    ['beğenmek', 'нравиться'], ['anahtar', 'ключ'], ['çanta', 'сумка'], ['para', 'деньги'], ['bilet', 'билет'],
    ['hediye', 'подарок'], ['film', 'фильм'], ['harita', 'карта'], ['beni', 'меня'], ['seni', 'тебя'], ['onu', 'его, её'],
    ['bunu', 'это (вин. падеж)']
  ],
  dialog: [
    ['Ece', 'Anahtarı görüyor musun?', 'Ты видишь ключ?'],
    ['Sergey', 'Hangi anahtarı? Otelin anahtarını mı?', 'Какой ключ? Ключ от отеля?'],
    ['Ece', 'Evet. Bulamıyorum!', 'Да. Не могу найти!'],
    ['Sergey', 'Çantana bak. Belki orada.', 'Посмотри в сумке. Может, там.'],
    ['Ece', 'Buldum! Teşekkürler.', 'Нашла! Спасибо.']
  ],
  ex: [
    ['c', '«Я читаю книгу» (вообще, какую-то)', ['Kitap okuyorum.', 'Kitabı okuyorum.']],
    ['c', '«Я читаю эту книгу»', ['Bu kitabı okuyorum.', 'Bu kitap okuyorum.']],
    ['c', 'çocuk + винительный', ['çocuğu', 'çocuku', 'çocuğa']],
    ['c', '«мою машину»', ['arabamı', 'arabamu', 'arabam']],
    ['c', '«его сумку»', ['çantasını', 'çantası', 'çantasıyı']],
    ['c', 'Türkiye + винительный', ["Türkiye'yi", "Türkiye'i", "Türkiye'yü"]],
    ['c', '«Дашь мне ключ?»', ['Anahtarı bana verir misin?', 'Anahtara beni verir misin?', 'Anahtar bana verir misin?']],
    ['t', 'kapı + винительный', 'kapıyı'],
    ['t', 'araba + винительный', 'arabayı'],
    ['t', 'kitap + винительный', 'kitabı'],
    ['t', 'Я люблю тебя.', 'seni seviyorum'],
    ['t', 'Я жду тебя.', 'seni bekliyorum'],
    ['t', 'Я ищу ключ (конкретный).', 'anahtarı arıyorum'],
    ['t', 'Ты знаешь Ахмета?', "ahmet'i tanıyor musun"],
    ['t', 'Он открывает дверь.', 'kapıyı açıyor|o kapıyı açıyor'],
    ['t', 'Я не понимаю это.', 'bunu anlamıyorum'],
    ['t', 'Мне нравится этот город.', 'bu şehri beğeniyorum|bu şehri seviyorum'],
    ['o', 'Я смотрю этот фильм.', 'Bu filmi izliyorum.'],
    ['o', 'Я тебя не понимаю.', 'Seni anlamıyorum.'],
    ['o', 'Ты закрываешь окно?', 'Pencereyi kapatıyor musun?']
  ]
},

{
  id: 'a2-02', unit: 'A2', title: 'Прошедшее время -dı',
  goal: 'Рассказывать о том, что было вчера, в прошлом году, в детстве',
  theory: `
<h3>Как образуется</h3>
<p>Основа + <b>-dı / -di / -du / -dü</b> (четверная гармония) + краткие личные окончания. После глухих согласных (f, s, t, k, ç, ş, h, p) — <b>-tı / -ti / -tu / -tü</b>.</p>
<table>
<tr><th></th><th>Окончание</th><th>gelmek</th><th>yapmak</th><th>okumak</th><th>görmek</th></tr>
<tr><td>ben</td><td>-m</td><td><b>geldim</b></td><td><b>yaptım</b></td><td><b>okudum</b></td><td><b>gördüm</b></td></tr>
<tr><td>sen</td><td>-n</td><td><b>geldin</b></td><td><b>yaptın</b></td><td><b>okudun</b></td><td><b>gördün</b></td></tr>
<tr><td>o</td><td>—</td><td><b>geldi</b></td><td><b>yaptı</b></td><td><b>okudu</b></td><td><b>gördü</b></td></tr>
<tr><td>biz</td><td>-k</td><td><b>geldik</b></td><td><b>yaptık</b></td><td><b>okuduk</b></td><td><b>gördük</b></td></tr>
<tr><td>siz</td><td>-nız</td><td><b>geldiniz</b></td><td><b>yaptınız</b></td><td><b>okudunuz</b></td><td><b>gördünüz</b></td></tr>
<tr><td>onlar</td><td>-lar</td><td><b>geldiler</b></td><td><b>yaptılar</b></td><td><b>okudular</b></td><td><b>gördüler</b></td></tr>
</table>
<p>Окончания здесь короткие: <b>-m, -n, —, -k, -nız, -lar</b>. Это не те, что у «быть» и -iyor.</p>
<h3>Примеры с глухими согласными</h3>
<p><b>gitmek</b> → <b>gittim</b> (здесь t не озвончается: окончание начинается с согласной), <b>içmek</b> → <b>içtim</b>, <b>konuşmak</b> → <b>konuştum</b>, <b>çalışmak</b> → <b>çalıştım</b>, <b>kalkmak</b> → <b>kalktım</b>.</p>
<p>Основа на гласную — просто добавляем: <b>yemek</b> → <b>yedim</b>, <b>beklemek</b> → <b>bekledim</b>, <b>anlamak</b> → <b>anladım</b>.</p>
<h3>«Был» с существительными и прилагательными</h3>
<p>То же окончание, но после гласной со связующей <b>y</b>: <b>-(y)dı</b>.</p>
<ul class="ex">
<li><b>Evdeydim.</b> — Я был дома. <b>Okuldaydık.</b> — Мы были в школе.</li>
<li><b>Yorgundum.</b> — Я был уставшим. <b>Hastaydı.</b> — Он был болен.</li>
<li><b>Öğrenciydim.</b> — Я был студентом. <b>Çocuktum.</b> — Я был ребёнком.</li>
<li><b>vardı</b> — было, имелось; <b>yoktu</b> — не было: <b>Otelde havuz vardı.</b> — В отеле был бассейн.</li>
<li><b>Hava güzeldi.</b> — Погода была хорошей.</li>
</ul>
<h3>Слова-маркеры прошлого</h3>
<p><b>dün</b> — вчера, <b>geçen hafta</b> — на прошлой неделе, <b>geçen yıl</b> — в прошлом году, <b>iki gün önce</b> — два дня назад, <b>az önce</b> — только что, <b>o zaman</b> — тогда, <b>eskiden</b> — раньше, когда-то.</p>
<h3>Это время очевидца</h3>
<p>Окончание -dı говорит, что ты сам видел или точно знаешь, что так было. Для пересказа с чужих слов есть другое прошедшее время — -mış, его разберём на уровне B1.</p>`,
  words: [
    ['geçen', 'прошлый'], ['önce', 'назад; до, раньше'], ['az önce', 'только что'], ['eskiden', 'раньше, когда-то'],
    ['o zaman', 'тогда'], ['başlamak', 'начинать(ся)'], ['bitirmek', 'заканчивать'], ['doğmak', 'рождаться'],
    ['taşınmak', 'переезжать'], ['kalmak', 'оставаться, останавливаться'], ['kalkmak', 'вставать'],
    ['uyanmak', 'просыпаться'], ['binmek', 'садиться (в транспорт)'], ['inmek', 'выходить (из транспорта), спускаться'],
    ['ziyaret etmek', 'посещать'], ['yolculuk', 'поездка, путешествие'], ['hava', 'погода, воздух'],
    ['havuz', 'бассейн'], ['sinema', 'кино, кинотеатр'], ['çocukluk', 'детство']
  ],
  dialog: [
    ['Deniz', 'Hafta sonu ne yaptın?', 'Что ты делал на выходных?'],
    ['Sergey', 'Cumartesi sinemaya gittim. Pazar evdeydim.', 'В субботу ходил в кино. В воскресенье был дома.'],
    ['Deniz', 'Film nasıldı?', 'Как фильм?'],
    ['Sergey', 'Çok güzeldi! Sen ne yaptın?', 'Очень хороший! А ты что делал?'],
    ['Deniz', 'Annemi ziyaret ettim. Birlikte yemek yaptık.', 'Навестила маму. Вместе готовили.']
  ],
  ex: [
    ['c', 'çalışmak → я работал', ['çalıştım', 'çalışdım', 'çalıştum']],
    ['c', '«было, имелось»', ['vardı', 'vardu', 'varti']],
    ['c', 'yok + прошедшее', ['yoktu', 'yokdu', 'yokti']],
    ['c', 'gitmek → я пошёл', ['gittim', 'gidim', 'gidtim']],
    ['c', 'Какое окончание у «мы» в прошедшем на -dı?', ['-k', '-iz', '-uz']],
    ['c', 'hava + güzel + был', ['Hava güzeldi.', 'Hava güzeldı.', 'Hava güzelti.']],
    ['t', 'gelmek → я пришёл', 'geldim'],
    ['t', 'yapmak → ты сделал', 'yaptın'],
    ['t', 'gitmek → мы пошли', 'gittik'],
    ['t', 'içmek → он выпил', 'içti'],
    ['t', 'okumak → они читали', 'okudular'],
    ['t', 'görmek → вы видели', 'gördünüz'],
    ['t', 'yemek → я поел', 'yedim'],
    ['t', 'konuşmak → мы поговорили', 'konuştuk'],
    ['t', 'Я был дома.', 'evdeydim|ben evdeydim'],
    ['t', 'Вчера я устал (был уставшим).', 'dün yorgundum'],
    ['t', 'Было холодно.', 'soğuktu|hava soğuktu'],
    ['t', 'Я родился в Москве.', "moskova'da doğdum"],
    ['t', 'два года назад', 'iki yıl önce|iki sene önce'],
    ['o', 'Вчера я ходил в кино.', 'Dün sinemaya gittim.'],
    ['o', 'В прошлом году мы ездили в Турцию.', "Geçen yıl Türkiye'ye gittik."],
    ['o', 'В отеле был бассейн.', 'Otelde havuz vardı.']
  ]
},

{
  id: 'a2-03', unit: 'A2', title: 'Прошедшее время: «не» и вопрос',
  goal: 'Спрашивать «ты уже ел?», говорить «я ещё не закончил»',
  theory: `
<h3>Отрицание: -ma / -me</h3>
<p>Между основой и -dı ставится <b>-ma / -me</b> (двойная гармония). После неё всегда идёт звонкое <b>-dı/-di</b>.</p>
<table>
<tr><td>ben</td><td><b>gelmedim</b></td><td><b>yapmadım</b></td></tr>
<tr><td>sen</td><td><b>gelmedin</b></td><td><b>yapmadın</b></td></tr>
<tr><td>o</td><td><b>gelmedi</b></td><td><b>yapmadı</b></td></tr>
<tr><td>biz</td><td><b>gelmedik</b></td><td><b>yapmadık</b></td></tr>
<tr><td>siz</td><td><b>gelmediniz</b></td><td><b>yapmadınız</b></td></tr>
<tr><td>onlar</td><td><b>gelmediler</b></td><td><b>yapmadılar</b></td></tr>
</table>
<p>Ударение, как и раньше, на слог перед -ma: <b>GELmedim</b>.</p>
<h3>Вопрос: личное окончание стоит ДО частицы</h3>
<p>Это главное отличие от -iyor. В прошедшем времени окончание остаётся на глаголе, а частица <b>mi</b> идёт последней и просто задаёт вопрос:</p>
<table>
<tr><td>ben</td><td><b>geldim mi?</b></td><td><b>gördüm mü?</b></td></tr>
<tr><td>sen</td><td><b>geldin mi?</b></td><td><b>gördün mü?</b></td></tr>
<tr><td>o</td><td><b>geldi mi?</b></td><td><b>gördü mü?</b></td></tr>
<tr><td>biz</td><td><b>geldik mi?</b></td><td><b>gördük mü?</b></td></tr>
<tr><td>siz</td><td><b>geldiniz mi?</b></td><td><b>gördünüz mü?</b></td></tr>
<tr><td>onlar</td><td><b>geldiler mi?</b></td><td><b>gördüler mi?</b></td></tr>
</table>
<p>Сравни: <b>Geliyor musun?</b> (идёшь?) и <b>Geldin mi?</b> (пришёл?).</p>
<h3>«Был ли»: miydi</h3>
<p>С существительными: <b>Evde miydin?</b> — Ты был дома? <b>Hasta mıydı?</b> — Он был болен? Отрицание: <b>evde değildim</b> — я не был дома.</p>
<h3>Уже, ещё не, ни разу</h3>
<ul class="ex">
<li><b>henüz</b> / <b>daha</b> + отрицание — ещё не: <b>Henüz bitirmedim.</b> — Я ещё не закончил.</li>
<li><b>zaten</b> — и так, уже: <b>Zaten biliyorum.</b> — Я и так знаю.</li>
<li><b>hiç</b> + отрицание — ни разу: <b>Türkiye'ye hiç gitmedim.</b> — Я ни разу не был в Турции.</li>
<li><b>hiç</b> в вопросе — когда-нибудь: <b>Hiç Türk kahvesi içtin mi?</b> — Ты когда-нибудь пил турецкий кофе?</li>
<li><b>nihayet</b> — наконец, <b>hemen</b> — сразу.</li>
</ul>
<h3>Как отвечать</h3>
<p><b>Yemek yedin mi?</b> — Ты поел? — <b>Evet, yedim.</b> / <b>Hayır, yemedim.</b> / <b>Daha yemedim.</b> (ещё нет). Отвечают глаголом, не просто «да».</p>`,
  words: [
    ['henüz', 'ещё (не)'], ['zaten', 'и так, уже'], ['nihayet', 'наконец'], ['hemen', 'сразу, немедленно'],
    ['sınav', 'экзамен'], ['ödev', 'домашнее задание'], ['mesaj', 'сообщение'], ['cevap', 'ответ'], ['soru', 'вопрос'],
    ['kaybetmek', 'терять, проигрывать'], ['kazanmak', 'выигрывать, зарабатывать'], ['geç kalmak', 'опаздывать'],
    ['kahvaltı yapmak', 'завтракать'], ['duymak', 'слышать'], ['söylemek', 'сказать'], ['denemek', 'пробовать']
  ],
  dialog: [
    ['Anne', 'Ödevini yaptın mı?', 'Ты сделал домашнее задание?'],
    ['Oğul', 'Daha yapmadım. Zor!', 'Ещё нет. Трудное!'],
    ['Anne', 'Kahvaltı yaptın mı bari?', 'Ну хоть позавтракал?'],
    ['Oğul', 'Evet, yaptım. Ama sınavı unuttum!', 'Да. Но я забыл про экзамен!'],
    ['Anne', 'Ne? Sınav ne zaman?', 'Что? Когда экзамен?'],
    ['Oğul', 'Yarın. Hemen çalışıyorum!', 'Завтра. Сейчас же сажусь заниматься!']
  ],
  ex: [
    ['c', 'görmek → они не видели', ['görmediler', 'görmemişler', 'görmüyorlar']],
    ['c', 'Они пришли?', ['Geldiler mi?', 'Geldi miler?', 'Gelmediler mi?']],
    ['c', 'gitmek → ты ходил?', ['Gittin mi?', 'Gidin mi?', 'Gittin mu?']],
    ['c', 'Сравни: «пришёл?»', ['Geldin mi?', 'Geliyor musun?', 'Gel mi?']],
    ['c', '«Ты когда-нибудь был в Стамбуле?»', ["Hiç İstanbul'a gittin mi?", "Henüz İstanbul'a gittin mi?", "Zaten İstanbul'a gittin mi?"]],
    ['c', 'Ответ «ещё нет» на «Yemek yedin mi?»', ['Daha yemedim.', 'Zaten yedim.', 'Hiç yemiyorum.']],
    ['t', 'Я не пришёл.', 'gelmedim'],
    ['t', 'Ты видел?', 'gördün mü'],
    ['t', 'Он не позвонил.', 'aramadı|o aramadı'],
    ['t', 'Вы поели?', 'yediniz mi|yemek yediniz mi'],
    ['t', 'Мы не поняли.', 'anlamadık'],
    ['t', 'Ты был дома?', 'evde miydin'],
    ['t', 'Я ещё не закончил.', 'henüz bitirmedim|daha bitirmedim'],
    ['t', 'Я ни разу не был в Турции.', "türkiye'ye hiç gitmedim|hiç türkiye'ye gitmedim"],
    ['t', 'Ты получил сообщение?', 'mesajı aldın mı|mesajımı aldın mı'],
    ['t', 'Я опоздал.', 'geç kaldım'],
    ['o', 'Я не сделал домашнее задание.', 'Ödevimi yapmadım.'],
    ['o', 'Ты уже позавтракал?', 'Kahvaltı yaptın mı?'],
    ['o', 'Я и так знаю.', 'Zaten biliyorum.']
  ]
},

{
  id: 'a2-04', unit: 'A2', title: 'Родительный падеж: «машина Ахмета»',
  goal: 'Строить конструкции принадлежности и составные слова вроде «турецкий кофе»',
  theory: `
<h3>Родительный падеж: чей?</h3>
<p>Окончание <b>-ın / -in / -un / -ün</b> (четверная гармония); после гласной — <b>-nın / -nin / -nun / -nün</b>.</p>
<ul class="ex">
<li><b>Ahmet'in</b> — Ахмета, <b>evin</b> — дома, <b>okulun</b> — школы</li>
<li><b>arabanın</b> — машины, <b>kedinin</b> — кошки, <b>annemin</b> — моей мамы</li>
<li>местоимения: <b>benim</b>, <b>senin</b>, <b>onun</b>, <b>bizim</b>, <b>sizin</b>, <b>onların</b></li>
</ul>
<h3>Изафет: два окончания</h3>
<p>Принадлежность показывают дважды: владелец в родительном падеже, предмет — с притяжательным окончанием 3-го лица.</p>
<ul class="ex">
<li><b>Ahmet'in arabası</b> — машина Ахмета (дословно «Ахмета его машина»)</li>
<li><b>annemin evi</b> — дом моей мамы</li>
<li><b>kapının rengi</b> — цвет двери</li>
<li><b>Türkiye'nin başkenti</b> — столица Турции</li>
</ul>
<h3>Без родительного: «турецкий кофе»</h3>
<p>Если первое слово не конкретный владелец, а тип или название, родительный падеж не ставится, остаётся только окончание на втором слове:</p>
<ul class="ex">
<li><b>Türk kahvesi</b> — турецкий кофе</li>
<li><b>otobüs durağı</b> — автобусная остановка</li>
<li><b>doğum günü</b> — день рождения</li>
<li><b>İstanbul Üniversitesi</b> — Стамбульский университет</li>
<li><b>telefon numarası</b> — номер телефона</li>
<li><b>çay bardağı</b> — стакан для чая (а <b>bir bardak çay</b> — стакан чая)</li>
</ul>
<h3>Падежи после изафета</h3>
<p>Перед падежным окончанием после -ı / -sı появляется <b>n</b>: <b>Ahmet'in evinde</b> — в доме Ахмета, <b>otobüs durağına</b> — к остановке, <b>Türk kahvesini</b> — турецкий кофе (вин.).</p>
<h3>Чей это? Kimin?</h3>
<ul class="ex">
<li><b>Bu kimin çantası?</b> — Чья это сумка?</li>
<li><b>Bu çanta benim.</b> — Эта сумка моя.</li>
<li><b>Benimki</b> — мой (без существительного), <b>seninki</b> — твой, <b>onunki</b> — его: <b>Benim arabam eski, seninki yeni.</b> — Моя машина старая, а твоя новая.</li>
</ul>`,
  words: [
    ['kimin', 'чей'], ['renk', 'цвет'], ['isim', 'имя, название'], ['ad', 'имя'], ['soyadı', 'фамилия'],
    ['doğum günü', 'день рождения'], ['üniversite', 'университет'], ['başkent', 'столица'], ['şirket', 'компания'],
    ['ofis', 'офис'], ['müdür', 'директор, начальник'], ['bardak', 'стакан'], ['fincan', 'чашка'],
    ['adres', 'адрес'], ['komşu', 'сосед'], ['durak', 'остановка'], ['benimki', 'мой (без существительного)']
  ],
  dialog: [
    ['Görevli', 'Adınız ve soyadınız?', 'Ваше имя и фамилия?'],
    ['Sergey', 'Adım Sergey, soyadım Ivanov.', 'Меня зовут Сергей, фамилия Иванов.'],
    ['Görevli', 'Telefon numaranız?', 'Ваш номер телефона?'],
    ['Sergey', 'Sıfır beş yüz otuz iki, dört yüz on sekiz, yirmi yedi, sıfır beş.', '0532 418 27 05.'],
    ['Görevli', 'Otelinizin adresi?', 'Адрес вашего отеля?'],
    ['Sergey', 'Otelin adı Deniz. Taksim Meydanı\'nın yanında.', 'Отель называется «Дениз». Рядом с площадью Таксим.']
  ],
  ex: [
    ['c', 'araba + родительный', ['arabanın', 'arabaın', 'arabanin']],
    ['c', 'okul + родительный', ['okulun', 'okulın', 'okulnun']],
    ['c', '«дверь комнаты»', ['odanın kapısı', 'oda kapı', 'odanın kapı']],
    ['c', '«мой» (без существительного)', ['benimki', 'benim', 'bende']],
    ['c', '«турецкий кофе»', ['Türk kahvesi', "Türk'ün kahvesi", 'Türk kahve']],
    ['c', '«в доме Ахмета»', ["Ahmet'in evinde", "Ahmet'in evde", "Ahmet evinde"]],
    ['t', 'машина Ахмета', "ahmet'in arabası"],
    ['t', 'дом моей мамы', 'annemin evi'],
    ['t', 'имя кошки', 'kedinin adı|kedinin ismi'],
    ['t', 'турецкий кофе', 'türk kahvesi'],
    ['t', 'автобусная остановка', 'otobüs durağı'],
    ['t', 'день рождения', 'doğum günü'],
    ['t', 'Чья это сумка?', 'bu kimin çantası|bu çanta kimin'],
    ['t', 'Это моё.', 'bu benim'],
    ['t', 'номер телефона', 'telefon numarası'],
    ['t', 'столица Турции', "türkiye'nin başkenti"],
    ['o', 'Как зовут твою младшую сестру?', 'Kız kardeşinin adı ne?'],
    ['o', 'Офис нашей компании в Стамбуле.', "Şirketimizin ofisi İstanbul'da."],
    ['o', 'Моя машина старая, а твоя новая.', 'Benim arabam eski, seninki yeni.']
  ]
},

{
  id: 'a2-05', unit: 'A2', title: 'Город: транспорт и дорога',
  goal: 'Спрашивать дорогу, понимать объяснения и ездить на транспорте',
  theory: `
<h3>Спрашиваем дорогу</h3>
<ul class="ex">
<li><b>Affedersiniz, müze nerede?</b> — Извините, где музей?</li>
<li><b>Taksim'e nasıl gidebilirim?</b> — Как мне добраться до Таксима?</li>
<li><b>Uzak mı?</b> — Это далеко? — <b>Hayır, yakın. Beş dakika.</b> — Нет, близко. Пять минут.</li>
<li><b>Yürüyerek gidilir mi?</b> — Можно дойти пешком?</li>
</ul>
<h3>Понимаем ответ</h3>
<ul class="ex">
<li><b>Düz gidin.</b> — Идите прямо.</li>
<li><b>Sağa dönün.</b> — Поверните направо. <b>Sola dönün.</b> — Налево.</li>
<li><b>İkinci sokaktan sağa dönün.</b> — На второй улице поверните направо.</li>
<li><b>Köşede.</b> — На углу. <b>Karşıda.</b> — Напротив, через дорогу.</li>
<li><b>Yüz metre ileride.</b> — Через сто метров. <b>Trafik ışıklarından sonra.</b> — После светофора.</li>
</ul>
<h3>Где именно: слова-места</h3>
<p>Это существительные, они работают через изафет: <b>X-ın + место + -ında</b>.</p>
<table>
<tr><td><b>yanında</b></td><td>рядом с</td><td><b>bankanın yanında</b> — рядом с банком</td></tr>
<tr><td><b>karşısında</b></td><td>напротив</td><td><b>otelin karşısında</b> — напротив отеля</td></tr>
<tr><td><b>önünde</b></td><td>перед</td><td><b>evin önünde</b> — перед домом</td></tr>
<tr><td><b>arkasında</b></td><td>за, позади</td><td><b>caminin arkasında</b> — за мечетью</td></tr>
<tr><td><b>içinde</b></td><td>внутри</td><td><b>çantanın içinde</b> — в сумке</td></tr>
<tr><td><b>üstünde</b></td><td>на, над</td><td><b>masanın üstünde</b> — на столе</td></tr>
<tr><td><b>altında</b></td><td>под</td><td><b>masanın altında</b> — под столом</td></tr>
<tr><td><b>arasında</b></td><td>между</td><td><b>banka ile otel arasında</b> — между банком и отелем</td></tr>
</table>
<p>Меняя падеж, получаем «куда» и «откуда»: <b>masanın altına</b> — под стол, <b>masanın altından</b> — из-под стола. С местоимениями: <b>yanımda</b> — рядом со мной, <b>yanına</b> — к нему.</p>
<h3>Транспорт</h3>
<ul class="ex">
<li><b>binmek</b> + направительный: <b>otobüse binmek</b> — сесть в автобус, <b>metroya binmek</b></li>
<li><b>inmek</b> + исходный: <b>otobüsten inmek</b> — выйти из автобуса</li>
<li>на чём: <b>-la / -le</b>: <b>otobüsle</b>, <b>metroyla</b>, <b>taksiyle</b>, <b>vapurla</b> (на пароме)</li>
<li><b>Bu otobüs Kadıköy'e gidiyor mu?</b> — Этот автобус идёт в Кадыкёй?</li>
<li><b>Kaç durak var?</b> — Сколько остановок?</li>
<li><b>Nerede inmeliyim?</b> — Где мне выйти?</li>
<li><b>Bir bilet, lütfen.</b> — Один билет, пожалуйста.</li>
</ul>
<div class="tip">В Стамбуле в транспорте платят картой <b>İstanbulkart</b>: её покупают и пополняют в автоматах у станций.</div>`,
  words: [
    ['sağ', 'правый, право'], ['sol', 'левый, лево'], ['düz', 'прямо; ровный'], ['köşe', 'угол'], ['karşı', 'напротив'],
    ['yan', 'бок, сторона'], ['ön', 'перед'], ['arka', 'зад'], ['iç', 'внутренность'], ['üst', 'верх'],
    ['alt', 'низ'], ['ara', 'промежуток, между'], ['yakın', 'близкий, близко'], ['uzak', 'далёкий, далеко'],
    ['istasyon', 'станция'], ['köprü', 'мост'], ['cadde', 'проспект, улица'], ['meydan', 'площадь'], ['müze', 'музей'],
    ['metro', 'метро'], ['vapur', 'паром, пароход'], ['taksi', 'такси'], ['affedersiniz', 'извините (обращение)'],
    ['ileride', 'впереди, дальше']
  ],
  dialog: [
    ['Sergey', 'Affedersiniz, Ayasofya\'ya nasıl gidebilirim?', 'Извините, как мне добраться до Айя-Софии?'],
    ['Adam', 'Tramvaya binin, Sultanahmet\'te inin.', 'Садитесь на трамвай, выходите на Султанахмет.'],
    ['Sergey', 'Durak nerede?', 'А где остановка?'],
    ['Adam', 'Düz gidin, ikinci sokaktan sola dönün. Durak bankanın karşısında.', 'Идите прямо, на второй улице налево. Остановка напротив банка.'],
    ['Sergey', 'Çok teşekkür ederim!', 'Большое спасибо!']
  ],
  ex: [
    ['c', '«под столом»', ['masanın altında', 'masanın üstünde', 'masanın içinde']],
    ['c', '«между»', ['arasında', 'arkasında', 'karşısında']],
    ['c', '«Я сажусь в автобус»', ['Otobüse biniyorum.', 'Otobüsü biniyorum.', 'Otobüste biniyorum.']],
    ['c', '«Я выхожу из метро»', ['Metrodan iniyorum.', 'Metroya iniyorum.', 'Metroda iniyorum.']],
    ['c', '«на пароме»', ['vapurla', 'vapura', 'vapurda']],
    ['c', '«рядом со мной»', ['yanımda', 'benim yan', 'yanda ben']],
    ['t', 'Поверните направо.', 'sağa dönün'],
    ['t', 'Идите прямо.', 'düz gidin'],
    ['t', 'Где остановка?', 'durak nerede|otobüs durağı nerede'],
    ['t', 'рядом с банком', 'bankanın yanında'],
    ['t', 'напротив отеля', 'otelin karşısında'],
    ['t', 'Это далеко?', 'uzak mı|bu uzak mı'],
    ['t', 'Музей близко.', 'müze yakın'],
    ['t', 'Сколько остановок?', 'kaç durak|kaç durak var'],
    ['t', 'на такси', 'taksiyle|taksi ile'],
    ['t', 'на углу', 'köşede'],
    ['o', 'Этот автобус идёт на Таксим?', "Bu otobüs Taksim'e gidiyor mu?"],
    ['o', 'Аптека рядом с мечетью.', 'Eczane caminin yanında.'],
    ['o', 'Как мне добраться до музея?', 'Müzeye nasıl gidebilirim?']
  ]
},

{
  id: 'a2-06', unit: 'A2', title: 'Покупки, одежда и цвета',
  goal: 'Выбирать, мерить и покупать, торговаться на базаре',
  theory: `
<h3>В магазине</h3>
<ul class="ex">
<li><b>Yardımcı olabilir miyim?</b> — Могу я вам помочь?</li>
<li><b>Sadece bakıyorum, teşekkürler.</b> — Я просто смотрю, спасибо.</li>
<li><b>Bunu deneyebilir miyim?</b> — Можно это примерить?</li>
<li><b>Kabin nerede?</b> — Где примерочная?</li>
<li><b>Hangi beden?</b> — Какой размер? — <b>Orta.</b> / <b>Küçük.</b> / <b>Büyük.</b></li>
<li><b>Daha büyük bir beden var mı?</b> — Есть размер побольше?</li>
<li><b>Bana olmadı.</b> — Мне не подошло. <b>Tam oldu.</b> — Как раз.</li>
<li><b>Bunu alıyorum.</b> — Я беру это.</li>
</ul>
<h3>Цена и оплата</h3>
<ul class="ex">
<li><b>Bu ne kadar?</b> / <b>Kaç lira?</b> — Сколько стоит?</li>
<li><b>Çok pahalı!</b> — Очень дорого!</li>
<li><b>İndirim var mı?</b> — Есть скидка?</li>
<li><b>Daha ucuz var mı?</b> — Есть подешевле?</li>
<li><b>Kredi kartı geçiyor mu?</b> — Карты принимаете?</li>
<li><b>Nakit ödüyorum.</b> — Я плачу наличными.</li>
<li><b>Poşet ister misiniz?</b> — Пакет нужен?</li>
</ul>
<h3>Торг на базаре</h3>
<p>На базаре (<b>çarşı</b>, <b>pazar</b>) торговаться нормально: <b>Son fiyat ne?</b> — Какая последняя цена? <b>Biraz indirim yapar mısınız?</b> — Сделаете скидку? <b>İki tane alırsam?</b> — А если я возьму две?</p>
<h3>Цвета</h3>
<table>
<tr><td><b>kırmızı</b></td><td>красный</td><td><b>siyah</b></td><td>чёрный</td></tr>
<tr><td><b>mavi</b></td><td>синий, голубой</td><td><b>beyaz</b></td><td>белый</td></tr>
<tr><td><b>lacivert</b></td><td>тёмно-синий</td><td><b>gri</b></td><td>серый</td></tr>
<tr><td><b>yeşil</b></td><td>зелёный</td><td><b>kahverengi</b></td><td>коричневый</td></tr>
<tr><td><b>sarı</b></td><td>жёлтый</td><td><b>pembe</b></td><td>розовый</td></tr>
<tr><td><b>turuncu</b></td><td>оранжевый</td><td><b>mor</b></td><td>фиолетовый</td></tr>
</table>
<p><b>Ne renk?</b> — Какого цвета? <b>açık mavi</b> — светло-голубой, <b>koyu yeşil</b> — тёмно-зелёный.</p>
<h3>Какой? Hangi?</h3>
<p><b>hangi</b> — какой, который (из нескольких): <b>Hangisi?</b> — Который? <b>Hangi renk?</b> — Какой цвет? <b>tane</b> — штука: <b>iki tane</b> — две штуки.</p>`,
  words: [
    ['kırmızı', 'красный'], ['mavi', 'синий, голубой'], ['lacivert', 'тёмно-синий'], ['yeşil', 'зелёный'],
    ['sarı', 'жёлтый'], ['turuncu', 'оранжевый'], ['siyah', 'чёрный'], ['beyaz', 'белый'], ['gri', 'серый'],
    ['kahverengi', 'коричневый'], ['pembe', 'розовый'], ['mor', 'фиолетовый'], ['gömlek', 'рубашка'],
    ['tişört', 'футболка'], ['pantolon', 'брюки'], ['etek', 'юбка'], ['elbise', 'платье'], ['ceket', 'пиджак, куртка'],
    ['ayakkabı', 'обувь, туфли'], ['çorap', 'носки'], ['kazak', 'свитер'], ['indirim', 'скидка'], ['beden', 'размер (одежды)'],
    ['nakit', 'наличные'], ['denemek', 'примерять, пробовать'], ['hangi', 'какой, который'], ['tane', 'штука'],
    ['çarşı', 'рынок, торговые ряды'], ['fiyat', 'цена']
  ],
  dialog: [
    ['Satıcı', 'Hoş geldiniz! Yardımcı olabilir miyim?', 'Добро пожаловать! Могу помочь?'],
    ['Sergey', 'Bu lacivert gömleği deneyebilir miyim?', 'Можно примерить эту тёмно-синюю рубашку?'],
    ['Satıcı', 'Tabii. Hangi beden?', 'Конечно. Какой размер?'],
    ['Sergey', 'Orta. ... Biraz küçük. Daha büyük var mı?', 'Средний. … Маловата. Есть побольше?'],
    ['Satıcı', 'Buyurun, bu büyük beden.', 'Пожалуйста, это большой размер.'],
    ['Sergey', 'Tam oldu! Ne kadar?', 'Как раз! Сколько стоит?'],
    ['Satıcı', 'Dört yüz lira. Bugün yüzde yirmi indirim var.', 'Четыреста лир. Сегодня скидка двадцать процентов.']
  ],
  ex: [
    ['c', 'mavi', ['синий', 'зелёный', 'жёлтый']],
    ['c', 'lacivert', ['тёмно-синий', 'фиолетовый', 'серый']],
    ['c', 'kahverengi', ['коричневый', 'оранжевый', 'розовый']],
    ['c', '«наличные»', ['nakit', 'kart', 'indirim']],
    ['c', '«Мне не подошло»', ['Bana olmadı.', 'Tam oldu.', 'Bunu alıyorum.']],
    ['c', '«Какая последняя цена?»', ['Son fiyat ne?', 'Fiyat son mu?', 'Ne kadar son?']],
    ['t', 'Сколько это стоит?', 'bu ne kadar|ne kadar'],
    ['t', 'Есть скидка?', 'indirim var mı'],
    ['t', 'Можно это примерить?', 'bunu deneyebilir miyim|deneyebilir miyim'],
    ['t', 'Я просто смотрю.', 'sadece bakıyorum'],
    ['t', 'красное платье', 'kırmızı elbise|kırmızı bir elbise'],
    ['t', 'чёрные туфли', 'siyah ayakkabı|siyah ayakkabılar'],
    ['t', 'Я беру это.', 'bunu alıyorum'],
    ['t', 'Какой размер?', 'hangi beden|kaç beden'],
    ['t', 'Какого цвета?', 'ne renk'],
    ['t', 'две штуки', 'iki tane'],
    ['o', 'Есть подешевле?', 'Daha ucuz var mı?'],
    ['o', 'Эта рубашка мне мала.', 'Bu gömlek bana küçük.'],
    ['o', 'Карты принимаете?', 'Kredi kartı geçiyor mu?']
  ]
},

{
  id: 'a2-07', unit: 'A2', title: 'Будущее время -acak',
  goal: 'Рассказывать о планах и обещать',
  theory: `
<h3>Как образуется</h3>
<p>Основа + <b>-acak / -ecek</b> (двойная гармония) + личные окончания как у «быть». После гласной — связующая <b>y</b>: <b>-yacak / -yecek</b>.</p>
<table>
<tr><th></th><th>gelmek</th><th>yapmak</th><th>okumak</th></tr>
<tr><td>ben</td><td><b>geleceğim</b></td><td><b>yapacağım</b></td><td><b>okuyacağım</b></td></tr>
<tr><td>sen</td><td><b>geleceksin</b></td><td><b>yapacaksın</b></td><td><b>okuyacaksın</b></td></tr>
<tr><td>o</td><td><b>gelecek</b></td><td><b>yapacak</b></td><td><b>okuyacak</b></td></tr>
<tr><td>biz</td><td><b>geleceğiz</b></td><td><b>yapacağız</b></td><td><b>okuyacağız</b></td></tr>
<tr><td>siz</td><td><b>geleceksiniz</b></td><td><b>yapacaksınız</b></td><td><b>okuyacaksınız</b></td></tr>
<tr><td>onlar</td><td><b>gelecekler</b></td><td><b>yapacaklar</b></td><td><b>okuyacaklar</b></td></tr>
</table>
<p>Обрати внимание: в «я» и «мы» <b>k</b> становится <b>ğ</b>, потому что дальше идёт гласная: geleceğim, yapacağız.</p>
<h3>Особые случаи</h3>
<ul class="ex">
<li><b>gitmek</b> → <b>gideceğim</b>, <b>etmek</b> → <b>edeceğim</b> (t → d)</li>
<li><b>yemek</b> → <b>yiyeceğim</b>, <b>demek</b> → <b>diyeceğim</b></li>
<li><b>beklemek</b> → <b>bekleyeceğim</b>, <b>anlamak</b> → <b>anlayacağım</b></li>
</ul>
<h3>Отрицание и вопрос</h3>
<ul class="ex">
<li>отрицание <b>-ma / -me</b> + y: <b>gelmeyeceğim</b> — я не приду, <b>yapmayacaksın</b> — ты не сделаешь</li>
<li>вопрос (окончание на частице): <b>Gelecek misin?</b> — Придёшь? <b>Yapacak mısınız?</b> — Сделаете? <b>Gelecekler mi?</b> — Они придут?</li>
<li><b>Ne yapacaksın?</b> — Что ты будешь делать?</li>
</ul>
<h3>«Будет» с существительными: olacak</h3>
<p>Будущее у «быть» образуется через <b>olmak</b>: <b>Yarın hava soğuk olacak.</b> — Завтра будет холодно. <b>Doktor olacağım.</b> — Я стану врачом. <b>Ne olacak?</b> — Что будет?</p>
<h3>-acak и -iyor</h3>
<p>Для ближайших планов турки часто используют настоящее время: <b>Yarın geliyorum.</b> — Завтра приезжаю (точно решено). -acak звучит как намерение, обещание или прогноз: <b>Söz veriyorum, yarın geleceğim.</b> — Обещаю, завтра приду.</p>
<h3>Слова будущего</h3>
<p><b>yarın</b> — завтра, <b>gelecek hafta</b> / <b>haftaya</b> — на следующей неделе, <b>seneye</b> — в следующем году, <b>yakında</b> — скоро, <b>bir gün</b> — когда-нибудь, <b>sonra</b> — потом.</p>`,
  words: [
    ['yakında', 'скоро'], ['gelecek', 'будущее; следующий'], ['seneye', 'в следующем году'], ['haftaya', 'на следующей неделе'],
    ['bir gün', 'однажды, когда-нибудь'], ['plan', 'план'], ['olmak', 'быть, становиться'], ['mezun olmak', 'окончить (учёбу)'],
    ['hazırlanmak', 'готовиться'], ['yüzmek', 'плавать'], ['buluşmak', 'встречаться'], ['söz vermek', 'обещать'],
    ['söz', 'слово, обещание'], ['dinlenmek', 'отдыхать'], ['tatil yapmak', 'проводить отпуск'], ['iş bulmak', 'найти работу']
  ],
  dialog: [
    ['Mert', 'Yazın ne yapacaksın?', 'Что будешь делать летом?'],
    ['Sergey', 'Türkiye\'ye gideceğim. İki hafta Antalya\'da kalacağım.', 'Поеду в Турцию. Две недели пробуду в Анталье.'],
    ['Mert', 'Harika! Denizde yüzeceksin.', 'Отлично! Будешь купаться в море.'],
    ['Sergey', 'Evet, ve Türkçe konuşacağım!', 'Да, и буду говорить по-турецки!'],
    ['Mert', 'Beni de arayacak mısın?', 'Мне тоже позвонишь?'],
    ['Sergey', 'Tabii, söz veriyorum.', 'Конечно, обещаю.']
  ],
  ex: [
    ['c', 'yemek → я поем', ['yiyeceğim', 'yeyeceğim', 'yemeceğim']],
    ['c', 'yapmak → мы сделаем', ['yapacağız', 'yapacakız', 'yapaceğiz']],
    ['c', 'Они придут?', ['Gelecekler mi?', 'Gelecek miler?', 'Gelecekler mu?']],
    ['c', 'gitmek → ты пойдёшь', ['gideceksin', 'gitceksin', 'gidecekisin']],
    ['c', '«Я стану врачом»', ['Doktor olacağım.', 'Doktoracağım.', 'Doktor yapacağım.']],
    ['c', 'Почему geleceğim, а не gelecekim?', ['k между гласными становится ğ', 'это исключение', 'так звучит вопрос']],
    ['t', 'Я приду.', 'geleceğim'],
    ['t', 'Ты сделаешь.', 'yapacaksın'],
    ['t', 'Мы пойдём.', 'gideceğiz'],
    ['t', 'Он почитает.', 'okuyacak'],
    ['t', 'Я подожду.', 'bekleyeceğim'],
    ['t', 'Я не приду.', 'gelmeyeceğim'],
    ['t', 'Ты придёшь?', 'gelecek misin'],
    ['t', 'Что ты будешь делать завтра?', 'yarın ne yapacaksın'],
    ['t', 'Мы встретимся в семь.', 'saat yedide buluşacağız|yedide buluşacağız'],
    ['t', 'Будет холодно.', 'soğuk olacak|hava soğuk olacak'],
    ['t', 'В следующем году я поеду в Турцию.', "seneye türkiye'ye gideceğim|gelecek yıl türkiye'ye gideceğim"],
    ['o', 'Скоро я буду говорить по-турецки.', 'Yakında Türkçe konuşacağım.'],
    ['o', 'Вечером я тебе позвоню.', 'Akşam seni arayacağım.'],
    ['o', 'Обещаю, завтра приду.', 'Söz veriyorum, yarın geleceğim.']
  ]
},

{
  id: 'a2-08', unit: 'A2', title: 'Широкое время: привычки и вежливые просьбы',
  goal: 'Говорить о привычках, общих истинах и вежливо предлагать',
  theory: `
<h3>Зачем нужно</h3>
<p>Широкое время (geniş zaman) — это то, что бывает обычно, всегда, в принципе:</p>
<ul class="ex">
<li>привычки: <b>Her sabah kahve içerim.</b> — Каждое утро я пью кофе.</li>
<li>общие истины: <b>Kediler süt sever.</b> — Кошки любят молоко.</li>
<li>вежливые просьбы и предложения: <b>Çay içer misiniz?</b> — Выпьете чаю? <b>Yardım eder misin?</b> — Поможешь?</li>
<li>обещания и готовность: <b>Yarın ararım.</b> — Завтра позвоню.</li>
</ul>
<h3>Как образуется: три правила</h3>
<table>
<tr><th>Основа</th><th>Окончание</th><th>Примеры</th></tr>
<tr><td>на гласную</td><td>-r</td><td><b>okur</b>, <b>bekler</b>, <b>anlar</b>, <b>uyur</b></td></tr>
<tr><td>многосложная на согласную</td><td>-ır / -ir / -ur / -ür</td><td><b>çalışır</b>, <b>konuşur</b>, <b>öğrenir</b>, <b>oturur</b></td></tr>
<tr><td>односложная на согласную</td><td>-ar / -er</td><td><b>yapar</b>, <b>içer</b>, <b>gider</b>, <b>yazar</b>, <b>sever</b></td></tr>
</table>
<p>Из третьего правила есть 13 исключений, которые берут <b>-ır</b>. Самые нужные: <b>gelir</b> (приходит), <b>alır</b> (берёт), <b>bilir</b> (знает), <b>bulur</b> (находит), <b>olur</b> (бывает), <b>kalır</b> (остаётся), <b>görür</b> (видит), <b>verir</b> (даёт), <b>durur</b> (стоит). Ещё: <b>varır</b>, <b>sanır</b>, <b>ölür</b>, <b>vurur</b>.</p>
<p>Короткие: <b>yemek</b> → <b>yer</b>, <b>demek</b> → <b>der</b>, <b>gitmek</b> → <b>gider</b>, <b>etmek</b> → <b>eder</b>.</p>
<h3>Личные окончания</h3>
<p>Как у «быть»: <b>içerim, içersin, içer, içeriz, içersiniz, içerler</b>.</p>
<h3>Отрицание — особенное</h3>
<table>
<tr><td>ben</td><td><b>içmem</b></td><td>я не пью</td></tr>
<tr><td>sen</td><td><b>içmezsin</b></td><td>ты не пьёшь</td></tr>
<tr><td>o</td><td><b>içmez</b></td><td>он не пьёт</td></tr>
<tr><td>biz</td><td><b>içmeyiz</b></td><td>мы не пьём</td></tr>
<tr><td>siz</td><td><b>içmezsiniz</b></td><td>вы не пьёте</td></tr>
<tr><td>onlar</td><td><b>içmezler</b></td><td>они не пьют</td></tr>
</table>
<p>В «я» и «мы» буквы <b>z</b> нет: <b>içmem</b>, <b>içmeyiz</b>.</p>
<h3>Вопрос</h3>
<p><b>İçer misin?</b>, <b>Gelir misiniz?</b>, отрицательный: <b>İçmez misin?</b> — Не выпьешь? Такие вопросы звучат мягче и вежливее, чем с -iyor.</p>
<h3>Полезные короткие слова</h3>
<ul class="ex">
<li><b>Olur.</b> — Ладно, можно, хорошо. <b>Olmaz.</b> — Нельзя, не пойдёт.</li>
<li><b>Bilmem.</b> — Не знаю (разговорное).</li>
<li><b>Sanırım…</b> — Думаю, кажется…</li>
<li><b>Görürsün!</b> — Вот увидишь!</li>
</ul>
<h3>-iyor или широкое время?</h3>
<p><b>Sigara içiyorum.</b> — Я (сейчас, в этот период) курю. <b>Sigara içmem.</b> — Я не курю (вообще, это мой принцип). <b>Ne iş yaparsınız?</b> — Чем вы занимаетесь (по профессии)?</p>`,
  words: [
    ['genellikle', 'обычно'], ['asla', 'никогда'], ['yardım etmek', 'помогать'], ['sanmak', 'полагать, думать'],
    ['olur', 'ладно, можно'], ['olmaz', 'нельзя, не пойдёт'], ['koşmak', 'бегать'], ['spor yapmak', 'заниматься спортом'],
    ['sigara içmek', 'курить'], ['dinlemek', 'слушать'], ['müzik', 'музыка'], ['yürüyüş', 'прогулка'],
    ['erkenden', 'рано утром, заранее'], ['hafta içi', 'по будням'], ['iş', 'работа, дело']
  ],
  dialog: [
    ['Ayşe', 'Çay içer misin?', 'Чаю выпьешь?'],
    ['Sergey', 'Olur, teşekkürler. Şekersiz lütfen, şeker kullanmam.', 'Давай, спасибо. Без сахара, я не кладу сахар.'],
    ['Ayşe', 'Sabahları ne yaparsın?', 'Что ты делаешь по утрам?'],
    ['Sergey', 'Genellikle erken kalkarım, koşarım, sonra kahvaltı yaparım.', 'Обычно встаю рано, бегаю, потом завтракаю.'],
    ['Ayşe', 'Ben asla erken kalkmam!', 'А я никогда рано не встаю!']
  ],
  ex: [
    ['c', 'almak → он берёт (обычно)', ['alır', 'alar', 'alıyor']],
    ['c', 'bilmek → я знаю', ['bilirim', 'bilerim', 'bilürüm']],
    ['c', 'gitmek → он идёт (обычно)', ['gider', 'gitir', 'gidir']],
    ['c', 'yemek → он не ест (вообще)', ['yemez', 'yemiyor', 'yemaz']],
    ['c', 'Что значит «Olur»?', ['ладно, можно', 'нельзя', 'не знаю']],
    ['c', 'Biz ___ (не пьём)', ['içmeyiz', 'içmeziz', 'içmezsiniz']],
    ['c', 'Как вежливее предложить чай?', ['Çay içer misiniz?', 'Çay içiyor musunuz?', 'Çay için!']],
    ['t', 'yapmak → я делаю (обычно)', 'yaparım'],
    ['t', 'gelmek → он приходит (обычно)', 'gelir'],
    ['t', 'içmek → я пью (обычно)', 'içerim'],
    ['t', 'çalışmak → мы работаем (обычно)', 'çalışırız'],
    ['t', 'okumak → ты читаешь (обычно)', 'okursun'],
    ['t', 'Я не пью кофе (вообще).', 'kahve içmem'],
    ['t', 'Он не курит.', 'sigara içmez|o sigara içmez'],
    ['t', 'Выпьете чаю?', 'çay içer misiniz'],
    ['t', 'Поможешь мне?', 'bana yardım eder misin'],
    ['t', 'Каждое утро я бегаю.', 'her sabah koşarım'],
    ['t', 'Чем вы занимаетесь (по работе)?', 'ne iş yaparsınız'],
    ['o', 'Обычно я пью чай с сахаром.', 'Genellikle şekerli çay içerim.'],
    ['o', 'По выходным мы отдыхаем.', 'Hafta sonu dinleniriz.'],
    ['o', 'Завтра тебе позвоню.', 'Yarın seni ararım.']
  ]
},

{
  id: 'a2-09', unit: 'A2', title: 'Могу, должен, хочу',
  goal: 'Просить разрешения, говорить о возможностях и обязанностях',
  theory: `
<h3>Мочь: -abil / -ebil</h3>
<p>Основа + <b>-(y)abil / -(y)ebil</b> + любое время. Чаще всего — с широким временем:</p>
<ul class="ex">
<li><b>gelebilirim</b> — я могу прийти, <b>yapabilirsin</b> — ты можешь сделать</li>
<li><b>okuyabilirim</b> — я могу прочитать, <b>bekleyebiliriz</b> — мы можем подождать</li>
<li>прошедшее: <b>gelebildim</b> — я смог прийти</li>
</ul>
<h3>Вежливые просьбы</h3>
<ul class="ex">
<li><b>Alabilir miyim?</b> — Можно мне взять?</li>
<li><b>Girebilir miyim?</b> — Можно войти?</li>
<li><b>Yardım edebilir misiniz?</b> — Вы можете помочь?</li>
<li><b>Bir fotoğraf çekebilir misiniz?</b> — Можете сфотографировать?</li>
</ul>
<h3>Не мочь: -ama / -eme</h3>
<p>Отрицание образуется иначе: основа + <b>-(y)ama / -(y)eme</b> + время.</p>
<ul class="ex">
<li><b>gelemem</b> — я не могу прийти (вообще), <b>gelemiyorum</b> — не могу прийти (сейчас)</li>
<li><b>anlayamıyorum</b> — не могу понять, <b>bulamıyorum</b> — не могу найти</li>
<li><b>gelemedim</b> — я не смог прийти, <b>uyuyamadım</b> — я не смог уснуть</li>
</ul>
<h3>Должен: -malı / -meli</h3>
<p><b>gitmeliyim</b> — я должен идти, <b>çalışmalısın</b> — ты должен заниматься, <b>dinlenmeli</b> — ему надо отдохнуть. Отрицание: <b>gitmemelisin</b> — тебе не следует идти.</p>
<h3>Надо: lazım и gerek</h3>
<p>Разговорный вариант: инфинитив с притяжательным окончанием + <b>lazım</b> / <b>gerek</b>:</p>
<ul class="ex">
<li><b>Gitmem lazım.</b> — Мне надо идти. <b>Gitmen lazım.</b> — Тебе надо идти. <b>Gitmesi lazım.</b> — Ему надо идти.</li>
<li><b>Bana su lazım.</b> — Мне нужна вода.</li>
<li><b>Gerek yok.</b> — Не нужно. <b>Beklemene gerek yok.</b> — Тебе не нужно ждать.</li>
<li><b>-mak zorunda</b> — вынужден: <b>Çalışmak zorundayım.</b> — Я вынужден работать.</li>
</ul>
<h3>Хочу что-то сделать</h3>
<p>Инфинитив + <b>istemek</b>: <b>Türkçe öğrenmek istiyorum.</b> — Я хочу учить турецкий. <b>Ne yapmak istiyorsun?</b> — Что ты хочешь делать? <b>Gitmek istemiyorum.</b> — Не хочу идти.</p>
<h3>Люблю что-то делать</h3>
<p>Инфинитив в винительном падеже: <b>-mayı / -meyi</b> + <b>sevmek</b>: <b>Yüzmeyi seviyorum.</b> — Я люблю плавать. <b>Okumayı severim.</b> — Я люблю читать.</p>
<h3>Можно и нельзя</h3>
<p><b>yasak</b> — запрещено: <b>Sigara içmek yasak.</b> — Курить запрещено. <b>serbest</b> — разрешено, свободно. <b>mümkün</b> — возможно: <b>Mümkün mü?</b> — Это возможно?</p>`,
  words: [
    ['lazım', 'нужно'], ['gerek', 'нужно, необходимость'], ['zorunda', 'вынужден'], ['mümkün', 'возможно'],
    ['izin', 'разрешение'], ['yardım', 'помощь'], ['girmek', 'входить'], ['çıkmak', 'выходить'],
    ['fotoğraf çekmek', 'фотографировать'], ['park etmek', 'парковать'], ['yasak', 'запрещено'],
    ['serbest', 'свободно, разрешено'], ['uyumak', 'спать'], ['dinlenmek', 'отдыхать'], ['ödemek', 'платить']
  ],
  dialog: [
    ['Sergey', 'Affedersiniz, burada fotoğraf çekebilir miyim?', 'Извините, здесь можно фотографировать?'],
    ['Görevli', 'Müzenin içinde fotoğraf çekmek yasak, ama bahçede serbest.', 'В музее фотографировать нельзя, а в саду можно.'],
    ['Sergey', 'Peki, çantamı bırakmam lazım mı?', 'А сумку нужно оставить?'],
    ['Görevli', 'Hayır, gerek yok.', 'Нет, не нужно.']
  ],
  ex: [
    ['c', 'okumak → могу читать', ['okuyabilirim', 'okuabilirim', 'okuyebilirim']],
    ['c', 'gelmek → не смог прийти', ['gelemedim', 'gelmedim', 'gelebilmedim']],
    ['c', '«Фотографировать запрещено»', ['Fotoğraf çekmek yasak.', 'Fotoğraf çekmek serbest.', 'Fotoğraf çekmek lazım.']],
    ['c', '«Тебе надо идти»', ['Gitmen lazım.', 'Gitmem lazım.', 'Gitmesi lazım.']],
    ['c', '«Я люблю плавать»', ['Yüzmeyi seviyorum.', 'Yüzmek seviyorum.', 'Yüzmeye seviyorum.']],
    ['c', 'anlamak → не могу понять (сейчас)', ['anlayamıyorum', 'anlamıyorum', 'anlayabilmiyorum']],
    ['t', 'Я могу прийти.', 'gelebilirim'],
    ['t', 'Я не могу прийти.', 'gelemem|gelemiyorum'],
    ['t', 'Можешь помочь?', 'yardım edebilir misin'],
    ['t', 'Можно войти?', 'girebilir miyim'],
    ['t', 'Я должен работать.', 'çalışmalıyım'],
    ['t', 'Тебе не следует курить.', 'sigara içmemelisin'],
    ['t', 'Мне надо идти.', 'gitmem lazım|gitmem gerek|gitmeliyim'],
    ['t', 'Я хочу пить чай.', 'çay içmek istiyorum'],
    ['t', 'Что ты хочешь делать?', 'ne yapmak istiyorsun'],
    ['t', 'Я не могу найти.', 'bulamıyorum|bulamam'],
    ['t', 'Не нужно.', 'gerek yok'],
    ['o', 'Можно счёт, пожалуйста?', 'Hesabı alabilir miyim lütfen?'],
    ['o', 'Я хочу учить турецкий.', 'Türkçe öğrenmek istiyorum.'],
    ['o', 'Вчера ночью я не смог уснуть.', 'Dün gece uyuyamadım.']
  ]
},

{
  id: 'a2-10', unit: 'A2', title: 'Тело, здоровье и аптека',
  goal: 'Объяснить врачу и фармацевту, что болит',
  theory: `
<h3>Что болит: -ım ağrıyor</h3>
<p>Говорят «моя голова болит»: часть тела с притяжательным окончанием + <b>ağrıyor</b>.</p>
<ul class="ex">
<li><b>Başım ağrıyor.</b> — У меня болит голова.</li>
<li><b>Dişim ağrıyor.</b> — Болит зуб. <b>Midem ağrıyor.</b> — Болит живот (желудок).</li>
<li><b>Boğazım ağrıyor.</b> — Болит горло. <b>Sırtım ağrıyor.</b> — Болит спина.</li>
<li><b>Neren ağrıyor?</b> — Что у тебя болит? <b>Nereniz ağrıyor?</b> — Что у вас болит?</li>
</ul>
<h3>Симптомы</h3>
<ul class="ex">
<li><b>Ateşim var.</b> — У меня температура.</li>
<li><b>Öksürüyorum.</b> — Я кашляю. <b>Burnum akıyor.</b> — У меня насморк.</li>
<li><b>Midem bulanıyor.</b> — Меня тошнит.</li>
<li><b>Başım dönüyor.</b> — У меня кружится голова.</li>
<li><b>Üşüttüm.</b> — Я простыл. <b>Grip oldum.</b> — У меня грипп.</li>
<li><b>Kendimi iyi hissetmiyorum.</b> — Я плохо себя чувствую.</li>
<li><b>Alerjim var.</b> — У меня аллергия. <b>Penisiline alerjim var.</b> — Аллергия на пенициллин.</li>
</ul>
<h3>В аптеке</h3>
<ul class="ex">
<li><b>Baş ağrısı için bir ilaç istiyorum.</b> — Мне нужно лекарство от головной боли.</li>
<li><b>Reçetesiz alabilir miyim?</b> — Можно купить без рецепта?</li>
<li><b>Günde kaç kez?</b> — Сколько раз в день? — <b>Günde üç kez, yemekten sonra.</b> — Три раза в день, после еды.</li>
<li><b>Nöbetçi eczane</b> — дежурная аптека (работает ночью).</li>
</ul>
<h3>У врача</h3>
<p><b>Doktordan randevu almak istiyorum.</b> — Хочу записаться к врачу. <b>Ne zamandan beri?</b> — С какого времени? — <b>Üç günden beri.</b> — Три дня.</p>
<h3>Экстренно</h3>
<p>Телефон экстренных служб в Турции — <b>112</b>. <b>Ambulans çağırın!</b> — Вызовите скорую! <b>Acil</b> — срочно; так же называется приёмный покой в больнице.</p>
<h3>Пожелания</h3>
<p><b>Geçmiş olsun!</b> — Выздоравливай! (говорят любому, кто заболел или попал в неприятность). Ответ: <b>Teşekkür ederim.</b> или <b>Sağ ol.</b></p>`,
  words: [
    ['baş', 'голова'], ['kulak', 'ухо'], ['burun', 'нос'], ['ağız', 'рот'], ['diş', 'зуб'], ['boğaz', 'горло'],
    ['boyun', 'шея'], ['kol', 'рука (от плеча)'], ['parmak', 'палец'], ['bacak', 'нога'], ['ayak', 'ступня, нога'],
    ['sırt', 'спина'], ['mide', 'желудок'], ['kalp', 'сердце'], ['ağrımak', 'болеть'], ['ateş', 'температура, огонь'],
    ['ilaç', 'лекарство'], ['reçete', 'рецепт'], ['öksürük', 'кашель'], ['grip', 'грипп'], ['alerji', 'аллергия'],
    ['acil', 'срочный; приёмный покой'], ['randevu', 'запись, встреча'], ['geçmiş olsun', 'выздоравливай'],
    ['kez', 'раз']
  ],
  dialog: [
    ['Eczacı', 'Buyurun, nasıl yardımcı olabilirim?', 'Слушаю, чем могу помочь?'],
    ['Sergey', 'Boğazım ağrıyor ve biraz ateşim var.', 'У меня болит горло и небольшая температура.'],
    ['Eczacı', 'Ne zamandan beri?', 'С какого времени?'],
    ['Sergey', 'Dünden beri. Galiba üşüttüm.', 'Со вчерашнего дня. Кажется, простыл.'],
    ['Eczacı', 'Bu ilacı günde üç kez alın, yemekten sonra. Geçmiş olsun!', 'Принимайте это лекарство три раза в день после еды. Выздоравливайте!'],
    ['Sergey', 'Teşekkür ederim.', 'Спасибо.']
  ],
  ex: [
    ['c', 'boğaz', ['горло', 'шея', 'нос']],
    ['c', 'kulak', ['ухо', 'рот', 'зуб']],
    ['c', 'sırt', ['спина', 'грудь', 'нога']],
    ['c', '«Я хочу записаться к врачу»', ['Doktordan randevu almak istiyorum.', 'Doktora randevu veriyorum.', 'Doktor randevu istiyor.']],
    ['c', '«Меня тошнит»', ['Midem bulanıyor.', 'Başım dönüyor.', 'Burnum akıyor.']],
    ['c', 'Что сказать заболевшему другу?', ['Geçmiş olsun!', 'Afiyet olsun!', 'Kolay gelsin!']],
    ['t', 'У меня болит голова.', 'başım ağrıyor'],
    ['t', 'У меня болит зуб.', 'dişim ağrıyor'],
    ['t', 'У меня температура.', 'ateşim var'],
    ['t', 'Что у тебя болит?', 'neren ağrıyor'],
    ['t', 'Выздоравливай!', 'geçmiş olsun'],
    ['t', 'два раза в день', 'günde iki kez|günde iki defa'],
    ['t', 'после еды', 'yemekten sonra'],
    ['t', 'Я простыл.', 'üşüttüm|grip oldum'],
    ['t', 'У меня аллергия.', 'alerjim var'],
    ['t', 'Я кашляю.', 'öksürüyorum'],
    ['o', 'Я плохо себя чувствую.', 'Kendimi iyi hissetmiyorum.'],
    ['o', 'У меня болит горло.', 'Boğazım ağrıyor.'],
    ['o', 'Мне нужно лекарство от головной боли.', 'Baş ağrısı için bir ilaç istiyorum.']
  ]
},

{
  id: 'a2-11', unit: 'A2', title: 'Послелоги: с, для, как, до',
  goal: 'Связывать слова точнее: «с другом», «для тебя», «как ты», «до вечера»',
  theory: `
<h3>ile — с, вместе с; на (транспорте)</h3>
<p>Пишется отдельно или сливается со словом как <b>-(y)la / -(y)le</b>:</p>
<ul class="ex">
<li><b>arkadaşımla</b> = <b>arkadaşım ile</b> — с моим другом</li>
<li><b>otobüsle</b> — на автобусе, <b>trenle</b> — на поезде, <b>kalemle</b> — ручкой</li>
<li><b>benimle</b> — со мной, <b>seninle</b>, <b>onunla</b>, <b>bizimle</b>, <b>sizinle</b>, <b>onlarla</b></li>
<li>«и» между словами: <b>Ahmet ile Ayşe</b> — Ахмет и Айше</li>
</ul>
<h3>için — для, ради; чтобы</h3>
<ul class="ex">
<li><b>senin için</b> — для тебя, <b>bunun için</b> — для этого, поэтому, <b>Ahmet için</b> — для Ахмета</li>
<li>с инфинитивом — «чтобы»: <b>Türkçe öğrenmek için</b> — чтобы учить турецкий</li>
</ul>
<h3>gibi — как, подобно</h3>
<p><b>senin gibi</b> — как ты, <b>bir çocuk gibi</b> — как ребёнок, <b>böyle</b> — так, вот так.</p>
<h3>kadar — до; такой же, как</h3>
<ul class="ex">
<li>с направительным падежом — «до»: <b>akşama kadar</b> — до вечера, <b>eve kadar</b> — до дома</li>
<li>с родительным у местоимений — «такой же»: <b>senin kadar</b> — как ты (по степени), <b>Ahmet kadar uzun</b> — такой же высокий, как Ахмет</li>
</ul>
<div class="tip">Местоимения перед ile, için, gibi, kadar ставятся в родительный падеж: <b>benim için</b>, <b>onun gibi</b>, <b>senin kadar</b>. Существительные — нет: <b>Ahmet için</b>, <b>çocuk gibi</b>.</div>
<h3>Послелоги с падежами</h3>
<table>
<tr><td><b>-dan önce</b></td><td>до, перед</td><td><b>yemekten önce</b> — перед едой</td></tr>
<tr><td><b>-dan sonra</b></td><td>после</td><td><b>dersten sonra</b> — после урока</td></tr>
<tr><td><b>-dan beri</b></td><td>с (какого времени)</td><td><b>ocaktan beri</b> — с января, <b>iki yıldan beri</b> — уже два года</td></tr>
<tr><td><b>-a göre</b></td><td>по, согласно</td><td><b>bana göre</b> — по-моему</td></tr>
<tr><td><b>-a doğru</b></td><td>к, по направлению; около</td><td><b>denize doğru</b> — к морю, <b>akşama doğru</b> — к вечеру</td></tr>
<tr><td><b>-a karşı</b></td><td>против; по отношению к</td><td><b>bize karşı</b> — против нас</td></tr>
<tr><td><b>-a rağmen</b></td><td>несмотря на</td><td><b>yağmura rağmen</b> — несмотря на дождь</td></tr>
<tr><td><b>hakkında</b></td><td>о, про</td><td><b>Türkiye hakkında</b> — о Турции</td></tr>
</table>
<h3>Без: -sız</h3>
<p>Как в уроке про кафе: <b>sensiz</b> — без тебя, <b>parasız</b> — без денег, бесплатно, <b>sorunsuz</b> — без проблем.</p>`,
  words: [
    ['ile', 'с, вместе с'], ['için', 'для; чтобы'], ['gibi', 'как, подобно'], ['göre', 'по, согласно'],
    ['beri', 'с (какого времени)'], ['hakkında', 'о, про'], ['doğru', 'по направлению к; правильный'],
    ['karşı', 'против'], ['rağmen', 'несмотря на'], ['beraber', 'вместе'], ['ders', 'урок, занятие'],
    ['konu', 'тема'], ['fikir', 'мнение, идея'], ['böyle', 'так, такой'], ['benimle', 'со мной'], ['parasız', 'бесплатно']
  ],
  dialog: [
    ['Can', 'Bu akşam benimle sinemaya gelir misin?', 'Пойдёшь со мной сегодня вечером в кино?'],
    ['Sergey', 'Olur! Hangi film?', 'Давай! Какой фильм?'],
    ['Can', 'İstanbul hakkında bir film. Bana göre çok güzel.', 'Фильм о Стамбуле. По-моему, очень хороший.'],
    ['Sergey', 'Dersten sonra gelirim. Saat yediye kadar dersim var.', 'Приду после занятий. У меня урок до семи.'],
    ['Can', 'Tamam, metroyla gel, daha hızlı.', 'Хорошо, приезжай на метро, так быстрее.']
  ],
  ex: [
    ['c', '«с ними»', ['onlarla', 'onla', 'onunla']],
    ['c', '«Я здесь уже два года»', ['İki yıldan beri buradayım.', 'İki yıl önce buradayım.', 'İki yıla kadar buradayım.']],
    ['c', '«несмотря на погоду»', ['havaya rağmen', 'hava için', 'havadan beri']],
    ['c', '«для него»', ['onun için', 'o için', 'ona için']],
    ['c', '«к вечеру»', ['akşama doğru', 'akşamdan doğru', 'akşam doğru']],
    ['t', 'со мной', 'benimle|benim ile'],
    ['t', 'с моим другом', 'arkadaşımla|arkadaşım ile'],
    ['t', 'на автобусе', 'otobüsle|otobüs ile'],
    ['t', 'для тебя', 'senin için'],
    ['t', 'как ты', 'senin gibi'],
    ['t', 'до вечера', 'akşama kadar'],
    ['t', 'по-моему', 'bana göre'],
    ['t', 'после урока', 'dersten sonra'],
    ['t', 'перед едой', 'yemekten önce'],
    ['t', 'с января', 'ocaktan beri'],
    ['t', 'о Турции', 'türkiye hakkında'],
    ['t', 'чтобы учить турецкий', 'türkçe öğrenmek için'],
    ['o', 'Я еду в Анкару на поезде.', "Ankara'ya trenle gidiyorum."],
    ['o', 'Этот подарок для тебя.', 'Bu hediye senin için.'],
    ['o', 'Он говорит как турок.', 'Bir Türk gibi konuşuyor.']
  ]
},

{
  id: 'a2-12', unit: 'A2', title: 'Сравнение: больше, лучше, самый',
  goal: 'Сравнивать города, вещи и людей',
  theory: `
<h3>Сравнительная степень: daha</h3>
<p>Прилагательное не меняется, перед ним ставится <b>daha</b> («более»): <b>daha büyük</b> — больше, <b>daha güzel</b> — красивее, <b>daha iyi</b> — лучше.</p>
<h3>Чем: исходный падеж</h3>
<p>То, с чем сравниваем, ставится в падеж <b>-dan / -den</b>:</p>
<ul class="ex">
<li><b>İstanbul Ankara'dan daha büyük.</b> — Стамбул больше Анкары.</li>
<li><b>Çay kahveden ucuz.</b> — Чай дешевле кофе. (daha можно опустить, падеж уже показывает сравнение)</li>
<li><b>Benden daha uzun.</b> — Он выше меня.</li>
</ul>
<h3>Превосходная степень: en</h3>
<p><b>en</b> — самый: <b>en güzel şehir</b> — самый красивый город, <b>en iyi</b> — лучший, <b>en çok</b> — больше всего.</p>
<p>«Самый … из»: <b>Türkiye'nin en büyük şehri</b> — самый большой город Турции (изафет), <b>sınıfın en iyi öğrencisi</b> — лучший ученик класса.</p>
<h3>Меньше и равенство</h3>
<ul class="ex">
<li><b>daha az</b> — менее: <b>daha az pahalı</b> — менее дорогой</li>
<li><b>kadar</b> — такой же, как: <b>Ahmet senin kadar uzun.</b> — Ахмет такой же высокий, как ты.</li>
<li><b>aynı</b> — одинаковый, тот же: <b>aynı renk</b> — тот же цвет</li>
<li><b>çok daha</b> — гораздо: <b>çok daha iyi</b> — гораздо лучше</li>
<li><b>biraz daha</b> — немного больше, ещё немного: <b>Biraz daha çay?</b> — Ещё чаю?</li>
</ul>
<h3>Наречия</h3>
<p>Прилагательные используются и как наречия: <b>Hızlı konuşuyor.</b> — Он говорит быстро. <b>Benden daha hızlı koşuyor.</b> — Бегает быстрее меня. Суффикс <b>-ca / -ce</b> тоже образует наречия: <b>yavaşça</b> — медленно, потихоньку, <b>güzelce</b> — хорошенько. От него же названия языков: <b>Türkçe</b>, <b>Rusça</b>, <b>İngilizce</b>, <b>Almanca</b>.</p>
<h3>Слишком</h3>
<p><b>fazla</b> / <b>çok</b> — слишком: <b>Bu çok pahalı.</b> — Это слишком дорого. <b>Fazla şeker koyma.</b> — Не клади много сахара.</p>`,
  words: [
    ['daha', 'более, ещё'], ['en', 'самый'], ['az', 'мало, менее'], ['fazla', 'много, слишком'], ['aynı', 'тот же, одинаковый'],
    ['yüksek', 'высокий'], ['alçak', 'низкий'], ['ağır', 'тяжёлый'], ['hafif', 'лёгкий (по весу)'],
    ['ilginç', 'интересный'], ['sıkıcı', 'скучный'], ['temiz', 'чистый'], ['kirli', 'грязный'],
    ['kalabalık', 'многолюдный; толпа'], ['sessiz', 'тихий'], ['gürültülü', 'шумный'], ['eğlenceli', 'весёлый, интересный'],
    ['tehlikeli', 'опасный'], ['Almanca', 'немецкий язык']
  ],
  dialog: [
    ['Selin', 'İstanbul mu daha güzel, Moskova mı?', 'Что красивее: Стамбул или Москва?'],
    ['Sergey', 'Zor soru! İstanbul daha sıcak ve daha kalabalık.', 'Трудный вопрос! Стамбул теплее и многолюднее.'],
    ['Selin', 'Moskova İstanbul\'dan daha temiz mi?', 'Москва чище Стамбула?'],
    ['Sergey', 'Bence evet. Ama en güzel deniz İstanbul\'da!', 'По-моему, да. Но самое красивое море в Стамбуле!']
  ],
  ex: [
    ['c', '«Москва холоднее Стамбула»', ["Moskova İstanbul'dan daha soğuk.", "Moskova İstanbul'a daha soğuk.", 'Moskova İstanbul daha soğuk.']],
    ['c', 'kalabalık', ['многолюдный', 'тихий', 'грязный']],
    ['c', '«гораздо лучше»', ['çok daha iyi', 'en çok iyi', 'daha en iyi']],
    ['c', '«самый большой город Турции»', ["Türkiye'nin en büyük şehri", "Türkiye en büyük şehir", "Türkiye'nin daha büyük şehri"]],
    ['c', '«Ещё чаю?»', ['Biraz daha çay?', 'En çay?', 'Daha az çay?']],
    ['t', 'больше (крупнее)', 'daha büyük'],
    ['t', 'самый красивый', 'en güzel'],
    ['t', 'Стамбул больше Анкары.', "istanbul ankara'dan daha büyük|istanbul ankara'dan büyük"],
    ['t', 'лучший', 'en iyi'],
    ['t', 'Чай дешевле кофе.', 'çay kahveden daha ucuz|çay kahveden ucuz'],
    ['t', 'Ты говоришь быстрее меня.', 'benden daha hızlı konuşuyorsun|benden hızlı konuşuyorsun'],
    ['t', 'менее дорогой', 'daha az pahalı'],
    ['t', 'такой же высокий, как ты', 'senin kadar uzun'],
    ['t', 'тот же цвет', 'aynı renk'],
    ['t', 'Это слишком дорого.', 'bu çok pahalı|bu fazla pahalı'],
    ['o', 'Это самый интересный фильм.', 'Bu en ilginç film.'],
    ['o', 'Турецкий легче русского.', "Türkçe Rusçadan daha kolay."],
    ['o', 'Моя сумка тяжелее твоей.', 'Benim çantam seninkinden daha ağır.']
  ]
}

]);
