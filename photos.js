// Обложки уроков: фотографии с Wikimedia Commons (свободные лицензии, автор и лицензия указаны под фото).
// Картинки загружаются с серверов Wikimedia и после первого просмотра хранятся в кэше для офлайна.
// Формат: id урока: [ссылка на картинку, подпись, автор, лицензия, страница файла]
const PHOTO_BASE = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
window.TR_PHOTOS = {
  'a1-01': [PHOTO_BASE + '9/99/Turken_maken_kennis_met_Latijnse_alfabet_-_Introduction_of_the_Latin_alphabet_in_Turkey_%286941437163%29.jpg/960px-Turken_maken_kennis_met_Latijnse_alfabet_-_Introduction_of_the_Latin_alphabet_in_Turkey_%286941437163%29.jpg', '1928 год: турки знакомятся с новым латинским алфавитом', 'Nationaal Archief', 'без ограничений', 'https://commons.wikimedia.org/wiki/File:Turken_maken_kennis_met_Latijnse_alfabet_-_Introduction_of_the_Latin_alphabet_in_Turkey_(6941437163).jpg'],
  'a1-02': [PHOTO_BASE + 'b/ba/Istiklal_busy_afternoon.JPG/960px-Istiklal_busy_afternoon.JPG', 'Улица Истикляль в Стамбуле', 'Zumrasha', 'Public domain', 'https://commons.wikimedia.org/w/index.php?curid=12339846'],
  'a1-03': [PHOTO_BASE + '4/49/Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg/960px-Colourful_houses_in_Fethiye-Balat_district%2C_Istanbul_2.jpg', 'Разноцветные дома в районе Балат', 'Jwslubbock', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Colourful_houses_in_Fethiye-Balat_district,_Istanbul_2.jpg'],
  'a1-04': [PHOTO_BASE + '4/43/Main_entrance_gate_of_Istanbul_University.jpg/960px-Main_entrance_gate_of_Istanbul_University.jpg', 'Главные ворота Стамбульского университета', 'T88288', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Main_entrance_gate_of_Istanbul_University.jpg'],
  'a1-05': [PHOTO_BASE + '2/21/20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg/960px-20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg', 'Галатская башня', 'Ggia', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=12025381'],
  'a1-06': [PHOTO_BASE + 'a/ab/Grand_Bazaar%2C_Istanbul_2.jpg/960px-Grand_Bazaar%2C_Istanbul_2.jpg', 'Гранд-базар (Kapalıçarşı)', 'Slyronit', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Grand_Bazaar,_Istanbul_2.jpg'],
  'a1-07': [PHOTO_BASE + '2/22/50_T%C3%BCrk_Liras%C4%B1_front.jpg/960px-50_T%C3%BCrk_Liras%C4%B1_front.jpg', 'Банкнота 50 лир', 'Центральный банк Турции', 'Public domain', 'https://commons.wikimedia.org/w/index.php?curid=4917618'],
  'a1-08': [PHOTO_BASE + '6/6e/Kaputas_Beach.JPG/960px-Kaputas_Beach.JPG', 'Пляж Капуташ на Средиземном море', 'Wusel007', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Kaputas_Beach.JPG'],
  'a1-09': [PHOTO_BASE + '7/78/Sultanahmet_ferry_on_the_Bosphorus_in_Istanbul%2C_Turkey_001.jpg/960px-Sultanahmet_ferry_on_the_Bosphorus_in_Istanbul%2C_Turkey_001.jpg', 'Паром на Босфоре', 'Moonik', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=23174064'],
  'a1-10': [PHOTO_BASE + '2/2a/Turkish_tea%2C_in_good_company.jpg/960px-Turkish_tea%2C_in_good_company.jpg', 'Турецкий чай в стаканчиках-тюльпанах', 'E4024', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Turkish_tea,_in_good_company.jpg'],
  'a1-11': [PHOTO_BASE + '1/1c/Tarihi_%C3%87%C4%B1naralt%C4%B1_Tea_Garden_interior%2C_Istanbul%2C_2026_%281%29.jpg/960px-Tarihi_%C3%87%C4%B1naralt%C4%B1_Tea_Garden_interior%2C_Istanbul%2C_2026_%281%29.jpg', 'Чайный сад в Стамбуле: лучшее место для разговоров', 'Kutlusafa', 'CC BY 4.0', 'https://commons.wikimedia.org/w/index.php?curid=201784431'],
  'a1-12': [PHOTO_BASE + 'b/b6/Turkish_breakfast_in_Rumelihisar%C4%B1.jpg/960px-Turkish_breakfast_in_Rumelihisar%C4%B1.jpg', 'Турецкий завтрак (kahvaltı)', 'Jwslubbock', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=84820174'],
  'a1-13': [PHOTO_BASE + '6/63/Sofra_in_Ankara_with_shrimp_filled_avocado.jpg/960px-Sofra_in_Ankara_with_shrimp_filled_avocado.jpg', 'Домашнее застолье (sofra) в Анкаре', 'E4024', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Sofra_in_Ankara_with_shrimp_filled_avocado.jpg'],
  'a1-14': [PHOTO_BASE + 'b/bc/Clock_Of_Sirkeci_Terminus.jpg/960px-Clock_Of_Sirkeci_Terminus.jpg', 'Часы на вокзале Сиркеджи', 'Ail Subway', 'CC BY 3.0', 'https://commons.wikimedia.org/w/index.php?curid=16935851'],
  'a2-01': [PHOTO_BASE + '7/70/Orhan_bookstore_in_Sahaflar_%C3%87ar%C5%9F%C4%B1s%C4%B1_20250507.jpg/960px-Orhan_bookstore_in_Sahaflar_%C3%87ar%C5%9F%C4%B1s%C4%B1_20250507.jpg', 'Книжный рынок Сахафлар', 'Janabaevazizbek', 'CC BY 4.0', 'https://commons.wikimedia.org/w/index.php?curid=164896400'],
  'a2-02': [PHOTO_BASE + '8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/960px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg', 'Библиотека Цельса в Эфесе', 'Benh LIEU SONG', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=15578063'],
  'a2-03': [PHOTO_BASE + 'a/a4/Hot_air_balloon_in_Cappadocia_02.jpg/960px-Hot_air_balloon_in_Cappadocia_02.jpg', 'Воздушный шар над Каппадокией', 'Bernard Gagnon', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=38073200'],
  'a2-04': [PHOTO_BASE + '5/51/Turkish_Coffee_with_Crema.jpg/960px-Turkish_Coffee_with_Crema.jpg', 'Турецкий кофе (Türk kahvesi)', 'Garrett Ziegler', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=92327329'],
  'a2-05': [PHOTO_BASE + '9/93/Nostalgic_tram_on_Istiklal_Avenue_in_Istanbul.jpg/960px-Nostalgic_tram_on_Istiklal_Avenue_in_Istanbul.jpg', 'Старый трамвай на улице Истикляль', 'Janderk1968', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=22439441'],
  'a2-06': [PHOTO_BASE + 'e/e1/Spices_on_Spice_Bazaar_in_Istanbul_02.jpg/960px-Spices_on_Spice_Bazaar_in_Istanbul_02.jpg', 'Пряности на Египетском базаре', 'Miomir Magdevski', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=87486125'],
  'a2-07': [PHOTO_BASE + '3/3d/Bodrum_Harbour%2C_T%C3%BCrkiye.jpg/960px-Bodrum_Harbour%2C_T%C3%BCrkiye.jpg', 'Гавань Бодрума', 'Mustang Joe', 'CC0', 'https://commons.wikimedia.org/w/index.php?curid=163037057'],
  'a2-08': [PHOTO_BASE + 'b/b4/Tavla_Oynayan_Amcalar.jpg/960px-Tavla_Oynayan_Amcalar.jpg', 'Игра в нарды (tavla) — турецкая привычка', 'Theigumus', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=86890089'],
  'a2-09': [PHOTO_BASE + '0/03/Hagia_Sophia_Interior_Panorama.jpg/960px-Hagia_Sophia_Interior_Panorama.jpg', 'Айя-София изнутри', 'Ronan Reinart', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=22532005'],
  'a2-10': [PHOTO_BASE + 'e/e7/Eczane_2023.jpg/960px-Eczane_2023.jpg', 'Аптека (eczane)', 'Eczane 2023', 'Public domain', 'https://commons.wikimedia.org/w/index.php?curid=115688498'],
  'a2-11': [PHOTO_BASE + 'e/e1/Bosphorus_Bridge_at_night_20241030.jpg/960px-Bosphorus_Bridge_at_night_20241030.jpg', 'Босфорский мост ночью', 'DvTor8303', 'CC0', 'https://commons.wikimedia.org/w/index.php?curid=155675367'],
  'a2-12': [PHOTO_BASE + '8/83/Kocatepe_Camii_Ankara.JPG/960px-Kocatepe_Camii_Ankara.JPG', 'Мечеть Коджатепе в Анкаре', 'Bjørn Christian Tørrissen', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=8308890'],
  'b1-01': [PHOTO_BASE + '2/22/Carpet_dealers_at_Grand_Bazaar_Istanbul_-_panoramio.jpg/960px-Carpet_dealers_at_Grand_Bazaar_Istanbul_-_panoramio.jpg', 'Продавцы ковров на Гранд-базаре: «Buyurun, buyurun!»', 'Laima Gūtmane', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/w/index.php?curid=53811567'],
  'b1-02': [PHOTO_BASE + '4/46/TR_Pamukkale_White_Terraces_asv2020-02_img16.jpg/960px-TR_Pamukkale_White_Terraces_asv2020-02_img16.jpg', 'Травертины Памуккале', 'A.Savin', 'FAL', 'https://commons.wikimedia.org/w/index.php?curid=94207479'],
  'b1-03': [PHOTO_BASE + '4/4d/Ba%C4%9Flama_20210921_%288%29.jpg/960px-Ba%C4%9Flama_20210921_%288%29.jpg', 'Баглама — турецкий струнный инструмент', 'Sakhalinio', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Ba%C4%9Flama_20210921_(8).jpg'],
  'b1-04': [PHOTO_BASE + '0/03/A_regular_street_in_Kad%C4%B1k%C3%B6y%2C_%C4%B0stanbul.jpg/960px-A_regular_street_in_Kad%C4%B1k%C3%B6y%2C_%C4%B0stanbul.jpg', 'Обычная улица в Кадыкёе', 'Raicem', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:A_regular_street_in_Kad%C4%B1k%C3%B6y,_%C4%B0stanbul.jpg'],
  'b1-05': [PHOTO_BASE + '8/83/Nasreddin_Hodja_01.jpg/960px-Nasreddin_Hodja_01.jpg', 'Ходжа Насреддин — герой турецких анекдотов', 'Zeynel Cebeci', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=38456919'],
  'b1-06': [PHOTO_BASE + '8/8c/%C4%B0stanbul_Havaliman%C4%B1_Airport_2019_16.jpg/960px-%C4%B0stanbul_Havaliman%C4%B1_Airport_2019_16.jpg', 'Аэропорт Стамбула', 'Arne Müseler', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/w/index.php?curid=84544271']
};

// Картинки к словам: по ним строится задание «Что на картинке?»
window.TR_PICS = {
  'çay': '🍵', 'su': '💧', 'ev': '🏠', 'kedi': '🐱', 'köpek': '🐶', 'göz': '👁️', 'gül': '🌹', 'dağ': '⛰️', 'şeker': '🍬',
  'cami': '🕌', 'yol': '🛣️', 'kız': '👧', 'ışık': '💡', 'deniz': '🌊', 'güneş': '☀️', 'ay': '🌙', 'yağmur': '🌧️', 'çiçek': '🌸',
  'kitap': '📖', 'araba': '🚗', 'okul': '🏫', 'kalem': '✏️', 'çocuk': '🧒', 'el': '✋', 'kapı': '🚪', 'pencere': '🪟',
  'telefon': '📱', 'şehir': '🏙️', 'ağaç': '🌳', 'saat': '⏰', 'adam': '👨', 'kadın': '👩', 'öğretmen': '🧑‍🏫',
  'öğrenci': '🧑‍🎓', 'doktor': '🧑‍⚕️', 'aşçı': '🧑‍🍳', 'avukat': '⚖️', 'yorgun': '😩', 'mutlu': '😊', 'hasta': '🤒',
  'soğuk': '🥶', 'sıcak': '🥵', 'para': '💰', 'market': '🛒', 'otel': '🏨', 'plaj': '🏖️', 'hastane': '🏥', 'eczane': '⚕️',
  'banka': '🏦', 'restoran': '🍴', 'havalimanı': '🛫', 'banyo': '🛁', 'tuvalet': '🚻', 'bahçe': '🏡', 'uçak': '✈️',
  'otobüs': '🚌', 'tren': '🚆', 'tatil': '🏝️', 'kahve': '☕', 'süt': '🥛', 'ekmek': '🍞', 'peynir': '🧀', 'yumurta': '🥚',
  'et': '🥩', 'tavuk': '🍗', 'balık': '🐟', 'sebze': '🥦', 'meyve': '🍇', 'elma': '🍎', 'salata': '🥗', 'çorba': '🍲',
  'pilav': '🍚', 'tatlı': '🍰', 'tuz': '🧂', 'zeytin': '🫒', 'bal': '🍯', 'menü': '📋', 'garson': '🤵', 'kahvaltı': '🍳',
  'anne': '🤱', 'baba': '👨‍👧', 'aile': '👨‍👩‍👧', 'dede': '👴', 'arkadaş': '🤝', 'sevgili': '💑', 'anahtar': '🔑',
  'çanta': '👜', 'bilet': '🎫', 'hediye': '🎁', 'film': '🎬', 'harita': '🗺️', 'sinema': '🎦', 'sınav': '📝', 'mesaj': '💬',
  'metro': '🚇', 'vapur': '⛴️', 'taksi': '🚕', 'köprü': '🌉', 'müze': '🏛️', 'kırmızı': '🟥', 'mavi': '🟦', 'yeşil': '🟩',
  'sarı': '🟨', 'turuncu': '🟧', 'siyah': '⬛', 'beyaz': '⬜', 'kahverengi': '🟫', 'mor': '🟪', 'gömlek': '👔',
  'tişört': '👕', 'pantolon': '👖', 'elbise': '👗', 'ceket': '🧥', 'ayakkabı': '👞', 'çorap': '🧦', 'kulak': '👂',
  'burun': '👃', 'ağız': '👄', 'diş': '🦷', 'kol': '💪', 'parmak': '☝️', 'bacak': '🦵', 'ayak': '🦶', 'kalp': '❤️',
  'ilaç': '💊', 'ateş': '🌡️', 'öksürük': '😷', 'pasaport': '🛂', 'bavul': '🧳', 'polis': '👮', 'kar': '❄️', 'şarkı': '🎤',
  'ressam': '🎨', 'televizyon': '📺', 'uyumak': '😴', 'koşmak': '🏃', 'yüzmek': '🏊', 'yürümek': '🚶', 'gülmek': '😂',
  'ağlamak': '😢', 'yazmak': '✍️', 'içmek': '🥤', 'yemek': '🍽️', 'dinlemek': '🎧', 'müzik': '🎵', 'uçuş': '🛬',
  'havlu': '🧺', 'durak': '🚏', 'istasyon': '🚉', 'meydan': '⛲', 'köy': '🛖', 'fincan': '🫖', 'bardak': '🥃',
  'doğum günü': '🎂', 'hava': '🌤️', 'oda': '🛏️'
};
