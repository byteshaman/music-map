//source: https://rateyourmusic.com/wiki/RYM:Administrative%20divisions

export interface AlbumInfo {
  id: string,
  artist: string,
  album: string,
  group: string,
  country?: string,
  year: number,
  genres: string,
  url: string,
}

export const albums: AlbumInfo[] = [
  //#region AFRICA
  // ALGERIA
  {
    id: 'DZ',
    country: 'Algeria',
    artist: 'Khaled',
    album: 'Khaled',
    group: 'Africa',
    year: 1992,
    genres: 'Funk, Pop Raï',
    url: 'https://rateyourmusic.com/release/album/khaled/khaled/'
  },
  // ANGOLA
  {
    id: 'AO',
    country: 'Angola',
    artist: 'Bonga',
    album: 'Angola 74',
    group: 'Africa',
    year: 1974,
    genres: 'Morna, Semba',
    url: 'https://rateyourmusic.com/release/album/bonga/angola-74/'
  },
  // BENIN
  {
    id: 'BJ',
    country: 'Benin',
    artist: 'Angélique Kidjo',
    album: 'Black Ivory Soul',
    group: 'Africa',
    year: 2002,
    genres: 'Fon Music',
    url: 'https://rateyourmusic.com/release/album/angelique-kidjo/black-ivory-soul/'
  },
  // BURKINA FASO
  {
    id: 'BF',
    country: 'Burkina Faso',
    artist: 'Cheikh Lô',
    album: 'Né La Thiass',
    group: 'Africa',
    year: 1996,
    genres: 'Mbalax, Soukous',
    url: 'https://rateyourmusic.com/release/album/cheikh-lo/ne-la-thiass-4/'
  },
  // BOTSWANA
  {
    id: 'BW',
    country: 'Botswana',
    artist: 'Skinflint',
    album: 'IKLWA',
    group: 'Africa',
    year: 2010,
    genres: 'Heavy Metal',
    url: 'https://rateyourmusic.com/release/album/skinflint/iklwa/'
  },
  // CAMEROON
  {
    id: 'CM',
    country: 'Cameroon',
    artist: 'Francis Bebey',
    album: 'Psychedelic Sanza 1982-1984',
    group: 'Africa',
    year: 2014,
    genres: 'Bikutsi, Central African Music',
    url: 'https://rateyourmusic.com/release/comp/francis-bebey/psychedelic-sanza-1982-1984/'
  },
  // CAPE VERDE
  {
    id: 'CV',
    country: 'Cape Verde',
    artist: 'Americo Brito',
    album: 'Sintado Na Pracinha',
    group: 'Africa',
    year: 1980,
    genres: 'Funanà',
    url: 'https://rateyourmusic.com/release/album/americo-brito/sintado-na-pracinha/'
  },
  // CHAD
  {
    id: 'TD',
    country: 'Chad',
    artist: 'Maitre Gazonga',
    album: 'Les Jaloux Saboteurs',
    group: 'Africa',
    year: 1983,
    genres: 'Highlife, Soukous',
    url: 'https://rateyourmusic.com/release/album/maitre-gazonga/les-jaloux-saboteurs/'
  },
  // CONGO
  {
    id: 'CG',
    country: 'Congo',
    artist: 'ZAO',
    album: 'Ancien Combattant',
    group: 'Africa',
    year: 1984,
    genres: 'Zouk',
    url: 'https://rateyourmusic.com/release/album/zao_f3/ancien_combattant/'
  },
  // DEMOCRATIC REPUBLIC OF THE CONGO
  {
    id: 'CD',
    country: 'Democratic Republic Of The Congo',
    artist: 'Franco & Le Tout Puissant OK Jazz',
    album: 'Maby… Tonton Zala Serieux',
    group: 'Africa',
    year: 1991,
    genres: 'Soukous',
    url: 'https://rateyourmusic.com/release/album/lorchestre_tout_puissant_o_k__jazz/maby____tonton_zala_serieux/'
  },
  // DJIBOUTI
  {
    id: 'DJ',
    country: 'Djibouti',
    artist: 'Groupe RTD',
    album: 'The Dancing Devils Of Djibouti',
    group: 'Africa',
    year: 2020,
    genres: 'Qaraami',
    url: 'https://rateyourmusic.com/release/album/groupe-rtd/the-dancing-devils-of-djibouti/'
  },
  // EGYPT
  {
    id: 'EG',
    country: 'Egypt',
    artist: 'Cairokee',
    album: 'The Ugly Ducklings',
    group: 'Africa',
    year: 2019,
    genres: 'Alternative Rock, Electropop, Shaabi',
    url: 'https://rateyourmusic.com/release/album/%D9%83%D8%A7%D9%8A%D8%B1%D9%88%D9%83%D9%8A/%D8%A3%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B7%D8%A9-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1-the-ugly-ducklings/'
  },
  // EQUATORIAL GUINEA
  {
    id: 'GQ',
    country: 'Equatorial Guinea',
    artist: 'Lion Sitté',
    album: 'Otros Tiempos',
    group: 'Africa',
    year: 2012,
    genres: 'Dancehall',
    url: 'https://rateyourmusic.com/release/album/lion_sitte/otros_tiempos/'
  },
  // ERITREA
  {
    id: 'ER',
    country: 'Eritrea',
    artist: 'Asmara Allstars',
    album: 'Eritrea\'s Got Soul',
    group: 'Africa',
    year: 2010,
    genres: 'Afro-Jazz, Dub, Tizita',
    url: 'https://rateyourmusic.com/release/album/asmara_allstars/eritreas_got_soul/'
  },
  // ETHIOPIA
  {
    id: 'ET',
    country: 'Ethiopia',
    artist: 'Mulatu Astatke',
    album: 'Mulatu Of Ethiopia',
    group: 'Africa',
    year: 1972,
    genres: 'Ethio-Jazz',
    url: 'https://rateyourmusic.com/release/album/mulatu-astatke/mulatu-of-ethiopia-3/'
  },
  // ESWATINI
  {
    id: 'SZ',
    country: 'Eswatini',
    artist: 'Carl Crack',
    album: 'Black Ark',
    group: 'Africa',
    year: 1998,
    genres: 'Post Industrial, Sound Collage',
    url: 'https://rateyourmusic.com/release/album/carl-crack/black-ark/'
  },
  // GABON
  {
    id: 'GA',
    country: 'Gabon',
    artist: 'Pierre Akendengué & Hughes de Courson',
    album: 'Lambarena: Bach To Africa',
    group: 'Africa',
    year: 1994,
    genres: 'African Folk Music, Classical Crossover',
    url: 'https://rateyourmusic.com/release/album/pierre-akendengue-hughes-de-courson/lambarena-bach-to-africa/'
  },
  // GAMBIA
  {
    id: 'GM',
    country: 'Gambia',
    artist: 'Amadu Bamba',
    album: 'Drums Of The Firdu Fula',
    group: 'Africa',
    year: 1990,
    genres: 'Fula Music',
    url: 'https://rateyourmusic.com/release/album/amadu_bamba/drums_of_the_firdu_fula/'
  },
  // GHANA
  {
    id: 'GH',
    country: 'Ghana',
    artist: 'De Frank & His Professionals',
    album: 'Psychedelic Man',
    group: 'Africa',
    year: 1976,
    genres: 'Afro-Rock, Highlife',
    url: 'https://rateyourmusic.com/release/album/de-frank-and-his-professionals/psychedelic-man/'
  },
  // GUINEA
  {
    id: 'GN',
    country: 'Guinea',
    artist: 'Djeli Moussa Diawara',
    album: 'Yasimika',
    group: 'Africa',
    year: 1983,
    genres: 'Mande Music',
    url: 'https://rateyourmusic.com/release/album/djeli-moussa-diawara/yasimika/'
  },
  // GUINEA-BISSAU
  {
    id: 'GW',
    country: 'Guinea-Bissau',
    artist: 'N\'kassa Cobra',
    album: 'Unidade Luta Progresso',
    group: 'Africa',
    year: 1983,
    genres: 'Gumbe',
    url: 'https://rateyourmusic.com/release/album/nkassa-cobra/unidade-luta-progresso/'
  },
  // IVORY COAST
  {
    id: 'CI',
    country: 'Ivory Coast',
    artist: 'Magic System',
    album: '1er Gaou',
    group: 'Africa',
    year: 2000,
    genres: 'Zouglou',
    url: 'https://rateyourmusic.com/release/album/magic-system/1er-gaou/'
  },
  // KENYA
  {
    id: 'KE',
    country: 'Kenya',
    artist: 'Extra Golden',
    album: 'Hara Ma Nono',
    group: 'Africa',
    year: 2007,
    genres: 'Benga, Boogie Rock',
    url: 'https://rateyourmusic.com/release/album/extra_golden/hera_ma_nono/'
  },
  // LESOTHO
  {
    id: 'LS',
    country: 'Lesotho',
    artist: 'Tau ea Matsekha',
    album: 'Ke Satla Bua',
    group: 'Africa',
    year: 2009,
    genres: 'Famo, Sotho-Tswana Folk Music',
    url: 'https://rateyourmusic.com/release/album/tau-ea-matsekha/ke-satla-bua/'
  },
  // LIBERIA
  {
    id: 'LR',
    country: 'Liberia',
    artist: 'Kapingbdi',
    album: 'Born In The Night',
    group: 'Africa',
    year: 2019,
    genres: 'Afro-Jazz, Afrobeat',
    url: 'https://rateyourmusic.com/release/comp/kapingbdi/born-in-the-night/'
  },
  // LIBYA
  {
    id: 'LY',
    country: 'Libya',
    artist: 'Hamid El Shaeri',
    album: 'Raheel',
    group: 'Africa',
    year: 1984,
    genres: 'Al Jeel',
    url: 'https://rateyourmusic.com/release/album/%D8%AD%D9%85%D9%8A%D8%AF_%D8%A7%D9%84%D8%B4%D8%A7%D8%B9%D8%B1%D9%8A/raheel/'
  },
  // MADAGASCAR
  {
    id: 'MG',
    country: 'Madagascar',
    artist: 'D\'Gary',
    album: 'Malagasy Guitar: Music From Madagascar',
    group: 'Africa',
    year: 1992,
    genres: 'Malagasy Folk Music',
    url: 'https://rateyourmusic.com/release/album/dgary/malagasy-guitar/'
  },
  // MALAWI
  {
    id: 'MW',
    country: 'Malawi',
    artist: 'Dick Khoza',
    album: 'Chapita',
    group: 'Africa',
    year: 1976,
    genres: 'Afro-Jazz, Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/dick_khoza/chapita/'
  },
  // MALI
  {
    id: 'ML',
    country: 'Mali',
    artist: 'AfroCubism',
    album: 'AfroCubism',
    group: 'Africa',
    year: 2010,
    genres: 'Guajira, Mande Music',
    url: 'https://rateyourmusic.com/release/album/afrocubism/afrocubism/'
  },
  // MAURITANIA
  {
    id: 'MR',
    country: 'Mauritania',
    artist: 'Noura Mint Seymali',
    album: 'Tzenni',
    group: 'Africa',
    year: 2014,
    genres: 'Moorish Music, Tuareg Music',
    url: 'https://rateyourmusic.com/release/album/noura_mint_seymali/tzenni/'
  },
  // MAURITIUS
  {
    id: 'MU',
    country: 'Mauritius',
    artist: 'Kaya',
    album: 'Zistwar Revoltan',
    group: 'Africa',
    year: 2010,
    genres: 'Seggae',
    url: 'https://rateyourmusic.com/release/album/kaya/zistwar-revoltan/'
  },
  // MOROCCO
  {
    id: 'MA',
    country: 'Morocco',
    artist: 'Kasbah Rockers',
    album: 'Kasbah Rockers with Bill Laswell',
    group: 'Africa',
    year: 2008,
    genres: 'Ethnic Rock',
    url: 'https://rateyourmusic.com/release/album/kasbah-rockers/kasbah-rockers-with-bill-laswell/'
  },
  // MOZAMBIQUE
  {
    id: 'MZ',
    country: 'Mozambique',
    artist: '340ml',
    album: 'Sorry For The Delay',
    group: 'Africa',
    year: 2008,
    genres: 'Dub, Marrabente',
    url: 'https://rateyourmusic.com/release/album/340ml/sorry_for_the_delay/'
  },
  // NAMIBIA
  {
    id: 'NA',
    country: 'Namibia',
    artist: 'Shishani & The Namibian Tales',
    album: 'Itaala',
    group: 'Africa',
    year: 2016,
    genres: 'Contemporary Folk, Soul',
    url: 'https://rateyourmusic.com/release/album/shishani-and-the-namibian-tales/itaala/'
  },
  // NIGER
  {
    id: 'NE',
    country: 'Niger',
    artist: 'Mdou Moctar',
    album: 'Afrique Victim',
    group: 'Africa',
    year: 2021,
    genres: 'Psychedelic Rock, Tishoumaren',
    url: 'https://rateyourmusic.com/release/album/mdou-moctar/afrique-victime/'
  },
  // NIGERIA
  {
    id: 'NG',
    country: 'Nigeria',
    artist: 'Fela Ransome-Kuti & The Africa 70',
    album: 'Confusion',
    group: 'Africa',
    year: 1974,
    genres: 'Afrobeat, Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/fela-ransome-kuti-and-the-africa-70/confusion/'
  },
  // RWANDA
  {
    id: 'RW',
    country: 'Rwanda',
    artist: 'The Good Ones',
    album: 'Rwanda, You Should Be Loved',
    group: 'Africa',
    year: 2019,
    genres: 'African Folk Music, Contemporary Folk',
    url: 'https://rateyourmusic.com/release/album/the-good-ones/rwanda-you-should-be-loved/'
  },
  // SENEGAL
  {
    id: 'SN',
    country: 'Senegal',
    artist: 'Youssou N\'Dour',
    album: 'Set',
    group: 'Africa',
    year: 1990,
    genres: 'Mbalax',
    url: 'https://rateyourmusic.com/release/album/youssou_ndour/set/'
  },
  // SIERRA LEONE
  {
    id: 'SL',
    country: 'Sierra Leone',
    artist: 'Afro National',
    album: 'African Experimentals (1972-1979)',
    group: 'Africa',
    year: 2018,
    genres: 'Highlife, Soukous',
    url: 'https://rateyourmusic.com/release/comp/afro-national/african-experimentals-1972-1979/'
  },
  // SOMALIA
  {
    id: 'SO',
    country: 'Somalia',
    artist: 'Dur-Dur Band',
    album: 'Volume 5',
    group: 'Africa',
    year: 2013,
    genres: 'Funk, Qaraami',
    url: 'https://rateyourmusic.com/release/album/dur-dur-band/volume-5/'
  },
  // SOUTH AFRICA
  {
    id: 'ZA',
    country: 'South Africa',
    artist: 'Felix Laband',
    album: 'Dark Days Exit',
    group: 'Africa',
    year: 2005,
    genres: 'Downtempo',
    url: 'https://rateyourmusic.com/release/album/felix-laband/dark-days-exit/'
  },
  // SUDAN
  {
    id: 'SD',
    country: 'Sudan',
    artist: 'Al Agarib',
    album: 'Jazz',
    group: 'Africa',
    year: 1980,
    genres: 'Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/%D9%81%D8%B1%D9%82%D8%A9-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A8-%D9%88-%D8%B3%D9%8A%D9%81-%D8%A7%D8%A8%D9%88%D8%A8%D9%83%D8%B1-saif-abu-bakr-w-al-agarib/%D8%A7%D9%84%D8%AC%D8%A7%D8%B2-jazz.p/'
  },
  // TOGO
  {
    id: 'TG',
    country: 'Togo',
    artist: 'Akofa Akoussah',
    album: 'Akofa Akoussah',
    group: 'Africa',
    year: 1976,
    genres: 'Chanson, Ewe Music',
    url: 'https://rateyourmusic.com/release/album/akofa-akoussah/akofa-akoussah/'
  },
  // TANZANIA
  {
    id: 'TZ',
    country: 'Tanzania',
    artist: 'Siti Muharam',
    album: 'Siti of Unguja (Romance Revolution on Zanzibar)',
    group: 'Africa',
    year: 2020,
    genres: 'Taraab',
    url: 'https://rateyourmusic.com/release/album/siti-muharam/siti-of-unguja-romance-revolution-on-zanzibar/'
  },
  // TUNISIA
  {
    id: 'TN',
    country: 'Tunisia',
    artist: 'Corinne Allal',
    album: 'Antartica',
    group: 'Africa',
    year: 1989,
    genres: 'Rock',
    url: 'https://rateyourmusic.com/release/album/%D7%A7%D7%95%D7%A8%D7%99%D7%9F-%D7%90%D7%9C%D7%90%D7%9C/antarctica/'
  },
  // UGANDA
  {
    id: 'UG',
    country: 'Uganda',
    artist: 'Ecko Bazz',
    album: 'Mmaso',
    group: 'Africa',
    year: 2022,
    genres: 'Grime',
    url: 'https://rateyourmusic.com/release/album/ecko-bazz/mmaso/'
  },
  // WESTERN SAHARA
  {
    id: 'EH',
    country: 'Western Sahara',
    artist: 'Group Doueh',
    album: 'Zayna Jumma',
    group: 'Africa',
    year: 2011,
    genres: ' Sahrawi Music, Tishoumaren',
    url: 'https://rateyourmusic.com/release/album/group-doueh/zayna-jumma/'
  },
  // ZAMBIA
  {
    id: 'ZM',
    country: 'Zambia',
    artist: 'Musi-O-Tunya',
    album: 'Give Love To Your Children',
    group: 'Africa',
    year: 1975,
    genres: 'Zamrock',
    url: 'https://rateyourmusic.com/release/album/musi-o-tunya/give-love-to-your-children/'
  },
  // ZIMBABWE
  {
    id: 'ZW',
    country: 'Zimbabwe',
    artist: 'Dumisani Maraire',
    album: 'The African Mbira: Music of the Shona People of Rhodesia',
    group: 'Africa',
    year: 1971,
    genres: 'Shona Mbira Music',
    url: 'https://rateyourmusic.com/release/album/dumisani-maraire/the-african-mbira-music-of-the-shona-people-of-rhodesia/'
  },
  //#endregion AFRICA
  
  //#region ASIA
  // AFGHANISTAN
  {
    id: 'AF',
    country: 'Afghanistan',
    artist: 'Almach',
    album: 'Battle Of Tours',
    group: 'Asia',
    year: 2020,
    genres: 'Atmospheric Black Metal',
    url: 'https://rateyourmusic.com/release/album/ali-akbar-khan/morning-and-evening-ragas/'
  },
  // BANGLADESH
  {
    id: 'BD',
    country: 'Bangladesh',
    artist: 'Ali Akbar Khan',
    album: 'Morning & Evening Ragas',
    group: 'Asia',
    year: 1966,
    genres: 'Hindustani Classical Music',
    url: 'https://rateyourmusic.com/release/album/ali-akbar-khan/morning-and-evening-ragas/'
  },
  // BHUTAN
  {
    id: 'BT',
    country: 'Bhutan',
    artist: 'Sonam Dorji',
    album: 'Music From the Mountains of Bhutan',
    group: 'Asia',
    year: 2014,
    genres: 'Zhabdro Gorgom',
    url: 'https://rateyourmusic.com/release/album/sonam-dorji/music-from-the-mountains-of-bhutan/'
  },
  // CAMBODIA
  {
    id: 'KH',
    country: 'Cambodia',
    artist: 'Dengue Fever',
    album: 'Escape from Dragon House',
    group: 'Asia',
    year: 2005,
    genres: 'Cambodian Pop, Psychedelic Pop',
    url: 'https://rateyourmusic.com/release/album/dengue_fever/escape_from_dragon_house/'
  },
  // CHINA
  {
    id: 'CN',
    country: 'China',
    artist: 'Enmity',
    album: 'Wuyuan',
    group: 'Asia',
    year: 2005,
    genres: 'Dark Ambient, Ritual Ambient',
    url: 'https://rateyourmusic.com/release/album/%E6%80%A8/%E5%B7%AB%E6%80%A8-wuyuan/'
  },
  // GEORGIA
  {
    id: 'GE',
    country: 'Georgia',
    artist: 'Sinatlis Tselitsadi',
    album: 'Gza Tsisken',
    group: 'Asia',
    year: 2004,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/%E1%83%A1%E1%83%98%E1%83%9C%E1%83%90%E1%83%97%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%AC%E1%83%94%E1%83%9A%E1%83%98%E1%83%AC%E1%83%90%E1%83%93%E1%83%98/gza-tsisken-sky-way/'
  },
  // INDIA
  {
    id: 'IN',
    country: 'India',
    artist: 'Rakesh Chaurasia',
    album: 'Purity 3',
    group: 'Asia',
    year: 2004,
    genres: 'Hindustani Classical Music',
    url: 'https://rateyourmusic.com/release/single/rakesh-chaurasia/purity-3/'
  },
  // INDONESIA
  {
    id: 'ID',
    country: 'Indonesia',
    artist: 'Harry Roesli',
    album: 'Titik Api',
    group: 'Asia',
    year: 1976,
    genres: 'Gamelan, Progressive Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/harry-rusli/titik-api/'
  },
  // JAPAN
  {
    id: 'JP',
    country: 'Japan',
    artist: 'Koto Ensamble Of The Ikuta School',
    album: 'Japanese Koto Orchestra',
    group: 'Asia',
    year: 1989,
    genres: 'Jiuta, Sōkyoku',
    url: 'https://rateyourmusic.com/release/album/koto-ensemble-of-the-ikuta-school/japanese-koto-orchestra/'
  },
  // KAZAKHSTAN
  {
    id: 'KZ',
    country: 'Kazakhstan',
    artist: 'Linda',
    album: 'Vorona',
    group: 'Asia',
    year: 1996,
    genres: 'Downtempo, Pop Rock',
    url: 'https://rateyourmusic.com/release/album/%D0%BB%D0%B8%D0%BD%D0%B4%D0%B0/%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%B0/'
  },
  // MALAYSIA
  {
    id: 'MY',
    country: 'Malaysia',
    artist: 'The Strollers',
    album: 'Waiting Is...',
    group: 'Asia',
    year: 1973,
    genres: 'Psychedelic Pop, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/the_strollers_f4/waiting_is___/'
  },
  // MONGOLIA
  {
    id: 'MN',
    country: 'Mongolia',
    artist: 'Hurd',
    album: 'Evirleh Argagvi',
    group: 'Asia',
    year: 2005,
    genres: 'Heavy Metal',
    url: 'https://rateyourmusic.com/release/album/hurd/evirleh_argagvi/'
  },
  // MYANMAR
  {
    id: 'MM',
    country: 'Myanmar',
    artist: 'Kyaw Myo Naing',
    album: 'Pattalar Lat Than Myar',
    group: 'Asia',
    year: 2013,
    genres: 'Burmese Classical Music',
    url: 'https://rateyourmusic.com/release/album/%E1%80%80%E1%80%BB%E1%80%B1%E1%80%AC%E1%80%BA%E1%80%99%E1%80%BB%E1%80%AD%E1%80%AF%E1%80%B8%E1%80%94%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA/%E1%80%95%E1%80%90%E1%80%B9%E1%80%90%E1%80%9C%E1%80%AC%E1%80%B8%E1%80%9C%E1%80%80%E1%80%BA%E1%80%9E%E1%80%B6%E1%80%99%E1%80%BB%E1%80%AC%E1%80%B8__pattalar_lat_than_myar_/'
  },
  // NORTH KOREA
  {
    id: 'KP',
    country: 'North Korea',
    artist: 'Akio Suzuki',
    album: '“ m e r i d i a n s c e n e r y “',
    group: 'Asia',
    year: 2021,
    genres: 'Experimental, Field Recordings',
    url: 'https://rateyourmusic.com/release/album/akio-suzuki/m-e-r-i-d-i-a-n-s-c-e-n-e-r-y/'
  },
  // PAKISTAN
  {
    id: 'PK',
    country: 'Pakistan',
    artist: 'Nusrat Fateh Ali Khan',
    album: 'Shahen-Shah',
    group: 'Asia',
    year: 1989,
    genres: 'Qawwali',
    url: 'https://rateyourmusic.com/release/album/nusrat-fateh-ali-khan/shahen-shah/'
  },
  // PHILIPPINES
  {
    id: 'PH',
    country: 'Philippines',
    artist: 'Nitoy Gonzales and His Manila Rondalla',
    album: 'Tinikling!: Folk Dances of the Philippines',
    group: 'Asia',
    year: 1960,
    genres: 'Philippine Music, Southeast Asian Folk Music',
    url: 'https://rateyourmusic.com/release/album/nitoy-gonzales-and-his-manila-rondalla/tinikling-folk-dances-of-the-philippines/'
  },
  // SOUTH KOREA
  {
    id: 'KR',
    country: 'South Korea',
    artist: 'Witches',
    album: 'Broomstick',
    group: 'Asia',
    year: 2002,
    genres: 'K-Rock, Ska',
    url: 'https://rateyourmusic.com/artist/witches-1'
  },
  // SRI LANKA
  {
    id: 'LK',
    country: 'Sri Lanka',
    artist: 'Mustafa Khetty & Morpheus Project',
    album: 'Mozaick',
    group: 'Asia',
    year: 2021,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/mustafa-khetty-and-the-morpheus-project/mosaick/ '
  },
  // TAIWAN
  {
    id: 'TW',
    country: 'Taiwan',
    artist: 'Elephant Gym',
    album: 'Angle',
    group: 'Asia',
    year: 2014,
    genres: 'Math Rock',
    url: 'https://rateyourmusic.com/release/album/%E5%A4%A7%E8%B1%A1%E9%AB%94%E6%93%8D/%E8%A7%92%E5%BA%A6-angle/'
  },
  // THAILAND
  {
    id: 'TH',
    country: 'Thailand',
    artist: 'Thai Elephant Orchestra',
    album: 'Thai Elephant Orchestra',
    group: 'Asia',
    year: 2000,
    genres: 'Field Recordings, Free Improvisation',
    url: 'https://rateyourmusic.com/release/album/thai-elephant-orchestra-dave-soldier-and-richard-lair/thai-elephant-orchestra/'
  },
  // TURKEY
  {
    id: 'TR',
    country: 'Turkey',
    artist: 'Erkin Koray',
    album: 'Elektronik Türküler',
    group: 'Asia',
    year: 1974,
    genres: 'Anatolian Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/erkin-koray/elektronik-turkuler/'
  },
  // TURKMENISTAN
  {
    id: 'TM',
    country: 'Turkmenistan',
    artist: 'Gunesh',
    album: 'Gunesh',
    group: 'Asia',
    year: 1980,
    genres: 'Jazz Fusion',
    url: 'https://rateyourmusic.com/release/album/%D0%B3%D1%83%D0%BD%D0%B5%D1%88/%D0%B3%D1%83%D0%BD%D0%B5%D1%88-gunesh/'
  },
  // UZBEKISTAN
  {
    id: 'UZ',
    country: 'Uzbekistan',
    artist: 'From.uz',
    album: 'Overlook',
    group: 'Asia',
    year: 2008,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/from_uz/overlook/'
  },
  // VIETNAM
  {
    id: 'VN',
    country: 'Vietnam',
    artist: 'Trịnh Công Sơn',
    album: 'Như Tiếng Thở Dài',
    group: 'Asia',
    year: 1994,
    genres: 'Nhạc Vàng',
    url: 'https://rateyourmusic.com/release/album/tr%E1%BB%8Bnh-cong-son/nh%C6%B0-tieng-tho-dai/'
  },
  //#endregion Asia

  //#region CARIBBEAN
  // BAHAMAS
  {
    id: 'BS',
    country: 'Bahamas',
    artist: 'Exuma',
    album: 'Exuma',
    group: 'Caribbean',
    year: 1970,
    genres: 'Freak Folk, Goombay, Junkanoo',
    url: 'https://rateyourmusic.com/release/album/exuma/exuma/'
  },
  // CUBA
  {
    id: 'CU',
    country: 'Cuba',
    artist: 'Buena Vista Social Club',
    album: 'Buena Vista Social Club',
    group: 'Caribbean',
    year: 1977,
    genres: 'Bolero, Son Cubano',
    url: 'https://rateyourmusic.com/release/album/buena_vista_social_club/buena_vista_social_club/'
  },
  // DOMINICAN REPUBLIC
  {
    id: 'DO',
    country: 'Dominican Republic',
    artist: 'Billo\'s Caracas Boys',
    album: 'Comunicando',
    group: 'Caribbean',
    year: 1960,
    genres: 'Guaracha, Merengue, Porro',
    url: 'https://rateyourmusic.com/release/album/billos-caracas-boys/comunicando/'
  },
  // GRENADA
  {
    id: 'GD',
    country: 'Grenada',
    artist: 'Mighty Sparrow',
    album: 'Hot And Sweet',
    group: 'Caribbean',
    year: 1974,
    genres: 'Calypso',
    url: 'https://rateyourmusic.com/release/album/mighty-sparrow/hot-and-sweet/'
  },
  // HAITI
  {
    id: 'HT',
    country: 'Haiti',
    artist: 'Jephté Guillaume',
    album: 'Voyage Of Dreams',
    group: 'Caribbean',
    year: 1998,
    genres: 'Méringue, Tribal House',
    url: 'https://rateyourmusic.com/release/album/jephte-guillaume/voyage-of-dreams/'
  },
  // JAMAICA
  {
    id: 'JM',
    country: 'Jamaica',
    artist: 'Dadawah',
    album: 'Peace And Love',
    group: 'Caribbean',
    year: 1974,
    genres: 'Nyahbinghi, Reggae',
    url: 'https://rateyourmusic.com/release/album/dadawah/peace-and-love/'
  },
  // TRINIDAD AND TOBAGO
  {
    id: 'TT',
    country: 'Trinidad and Tobago',
    artist: 'The Esso Trinidad Steel Band',
    album: 'The Esso Trinidad Steel Band',
    group: 'Caribbean',
    year: 1971,
    genres: 'Calypso',
    url: 'https://rateyourmusic.com/release/album/the-esso-trinidad-steel-band/the-esso-trinidad-steel-band/'
  },
  //#endregion CARIBBEAN

  //#region CENTRAL AMERICA
  // BELIZE
  {
    id: 'BZ',
    country: 'Belize',
    artist: 'The Garifuna Collective',
    group: 'Central America',
    album: 'Umalali',
    year: 2008,
    genres: 'Garifuna Folk Music, Punta',
    url: 'https://rateyourmusic.com/release/album/the_garifuna_collective_f1/umalali/'
  },
  // COSTA RICA 
  {
    id: 'CR',
    country: 'Costa Rica',
    artist: 'Wings Of Destiny',
    group: 'Central America',
    album: 'Kings Of Terror',
    year: 2016,
    genres: 'Symphonic Power Metal',
    url: 'https://rateyourmusic.com/release/album/wings_of_destiny/kings_of_terror/'
  },
  // EL SALVADOR
  //  {
  //   id: 'SV',
  //   country: 'El Salvador',
  //   artist: 'Wings Of Destiny',
  //   group: 'Central America',
  //   album: 'Kings Of Terror',
  //   year: 2016,
  //   genres: 'Power Metal, Symphonic Metal',
  //   url: 'https://rateyourmusic.com/release/album/wings_of_destiny/kings_of_terror/',
  // },
  // GUATEMALA
  {
    id: 'GT',
    country: 'Guatemala',
    artist: 'Asimov',
    group: 'Central America',
    album: 'Todo Lo Que Buscamos Es Desaparecer',
    year: 2019,
    genres: 'Dream Pop, Shoegaze',
    url: 'https://rateyourmusic.com/release/album/asimov/todo-lo-que-buscamos-es-desaparecer/'
  },
  // HONDURAS
  {
    id: 'HN',
    country: 'Honduras',
    artist: 'Guayo Cedeño',
    group: 'Central America',
    album: 'Coco Bar',
    year: 2017,
    genres: 'Caribbean Music, Surf Rock',
    url: 'https://rateyourmusic.com/release/album/guayo-cedeno/coco-bar/'
  },
  // NICARAGUA
  {
    id: 'NI',
    country: 'Nicaragua',
    artist: 'Bwana',
    group: 'Central America',
    album: 'Bwana',
    year: 1972,
    genres: 'Guajira, Jazz-Rock, Latin Rock',
    url: 'https://rateyourmusic.com/release/album/bwana/bwana/'
  },
  // PANAMA
  {
    id: 'PA',
    country: 'Panama',
    artist: 'Willie Colón & Rubén Blades',
    group: 'Central America',
    album: 'Siembra',
    year: 1978,
    genres: 'Latin Jazz, Salsa Dura',
    url: 'https://rateyourmusic.com/artist/willie_colon_and_ruben_blades/'
  },
  //#endregion CENTRAL AMERICA

  //#region EUROPE
  // ALBANIA
  {
    id: 'AL',
    country: 'Albania',
    artist: 'I Tpame I Tvrame',
    album: 'Ikin Vijnë',
    group: 'Europe',
    year: 2018,
    genres: 'Darkwave, Minimal Synth',
    url: 'https://rateyourmusic.com/release/album/i-tpame-i-tvrame/ikin-vijne/'
  },
  // ANDORRA
  {
    id: 'AD',
    country: 'Andorra',
    artist: 'Persefone',
    album: 'Shin-ken',
    group: 'Central America',
    year: 2009,
    genres: 'Melodic Death Metal, Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/persefone/shin_ken/'
  },
  // ARMENIA
  {
    id: 'AM',
    country: 'Armenia',
    artist: 'Tigran Hamasyan',
    album: 'Red Hail',
    group: 'Europe',
    year: 2009,
    genres: 'Armenian Folk Music, Avant-garde Jazz',
    url: 'https://rateyourmusic.com/release/album/tigran-hamasyan/red-hail/'
  },
  // AUSTRIA
  {
    id: 'AT',
    country: 'Austria',
    artist: 'Zero Kama',
    album: 'The Secret Eye of L.A.Y.L.A.H.',
    group: 'Europe',
    year: 1984,
    genres: 'Ritual Ambient, Tribal Ambient',
    url: 'https://rateyourmusic.com/release/album/zero-kama/the-secret-eye-of-l_a_y_l_a_h/'
  },
  // BELARUS
  {
    id: 'BY',
    country: 'Belarus',
    artist: 'Molchat Doma',
    album: 'Etazhi',
    group: 'Europe',
    year: 2018,
    genres: 'Coldwave, Post-Punk',
    url: 'https://rateyourmusic.com/release/album/%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0/%D1%8D%D1%82%D0%B0%D0%B6%D0%B8-etazhi/'
  },
  // BELGIUM
  {
    id: 'BE',
    country: 'Belgium',
    artist: 'Ghinzu',
    album: 'Blow',
    group: 'Europe',
    year: 2004,
    genres: 'Alternative Rock, Art Rock',
    url: 'https://rateyourmusic.com/release/album/ghinzu/blow/'
  },
  // BOSNIA-HERZEGOVINA
  {
    id: 'BA',
    country: 'Bosnia-Herzegovina',
    artist: 'Goran Bregović',
    album: 'Arizona Dream',
    group: 'Europe',
    year: 1993,
    genres: 'Balkan Folk Music, Film Score',
    url: 'https://rateyourmusic.com/release/album/goran-bregovic/arizona-dream/'
  },
  // BULGARIA
  {
    id: 'BG',
    country: 'Bulgaria',
    artist: 'Boris Gudzhunov',
    album: 'Boris Gudzhunov',
    group: 'Europe',
    year: 1978,
    genres: 'Pop, Soviet Estrada',
    url: 'https://rateyourmusic.com/release/album/%D0%B1%D0%BE%D1%80%D0%B8%D1%81-%D0%B3%D1%83%D0%B4%D0%B6%D1%83%D0%BD%D0%BE%D0%B2/%D0%B1%D0%BE%D1%80%D0%B8%D1%81-%D0%B3%D1%83%D0%B4%D0%B6%D1%83%D0%BD%D0%BE%D0%B2/'
  },
  // CZECHIA
  {
    id: 'CZ',
    country: 'Czechia',
    artist: 'Flamengo',
    album: 'Kuře v hodinkách',
    group: 'Europe',
    year: 1972,
    genres: 'Jazz-Rock, Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/flamengo/kure-v-hodinkach/'
  },
  // CROATIA
  {
    id: 'HR',
    country: 'Croatia',
    artist: 'KOKTELSI',
    album: 'Rsaaaj !!!',
    group: 'Europe',
    year: 2006,
    genres: 'Balkan Folk Music, Polka',
    url: 'https://rateyourmusic.com/release/album/koktelsi/rsaaaj-/'
  },
  // CYPRUS
  {
    id: 'CY',
    country: 'Cyprus',
    artist: 'Arrayan Path',
    album: 'IV: Stigmata',
    group: 'Europe',
    year: 2013,
    genres: 'Heavy Metal, Symphonic Power Metal',
    url: 'https://rateyourmusic.com/release/album/koktelsi/rsaaaj-/'
  },
  // DENMARK
  {
    id: 'DK',
    country: 'Denmark',
    artist: 'Kongehuset',
    album: '...Klarer Ærterne',
    group: 'Europe',
    year: 1996,
    genres: 'Hip-Hop',
    url: 'https://rateyourmusic.com/release/album/kongehuset/___klarer_aerterne/'
  },
  // ESTONIA
  {
    id: 'EE',
    country: 'Estonia',
    artist: 'Marju Kuut / Uno Loop',
    album: 'Marju Kuut / Uno Loop',
    group: 'Europe',
    year: 1971,
    genres: 'Bossanova',
    url: 'https://rateyourmusic.com/release/album/%D0%BC%D0%B0%D1%80%D1%8C%D1%8E_%D0%BA%D1%83%D1%83%D1%82___%D1%83%D0%BD%D0%BE_%D0%BB%D0%BE%D0%BE%D0%BF/%D0%BC%D0%B0%D1%80%D1%8C%D1%8E_%D0%BA%D1%83%D1%83%D1%82___%D1%83%D0%BD%D0%BE_%D0%BB%D0%BE%D0%BE%D0%BF/'
  },
  // FAROE ISLANDS
  {
    id: 'FO',
    country: 'Faroe Islands',
    artist: 'Heljareyga',
    album: 'Heljareyga',
    group: 'Europe',
    year: 2010,
    genres: 'Power Metal, Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/heljareyga/heljareyga/'
  },
  // FINLAND
  {
    id: 'FI',
    country: 'Finland',
    artist: 'Korpiklaani',
    album: 'Noita',
    group: 'Europe',
    year: 2015,
    genres: 'Folk Metal',
    url: 'https://rateyourmusic.com/release/album/korpiklaani/noita/'
  },
  // FRANCE
  {
    id: 'FR',
    country: 'France',
    artist: 'Eliane Radigue',
    album: 'Trilogie De La Mort',
    group: 'Europe',
    year: 1998,
    genres: 'Drone',
    url: 'https://rateyourmusic.com/release/album/eliane-radigue/trilogie-de-la-mort/'
  },
  // GERMANY
  {
    id: 'DE',
    country: 'Germany',
    artist: 'Haggard',
    album: 'Eppur Si Muove',
    group: 'Europe',
    year: 2004,
    genres: 'Renaissance Music, Symphonic Metal',
    url: 'https://rateyourmusic.com/release/album/haggard/eppur_si_muove/'
  },
  // GREECE
  {
    id: 'GR',
    country: 'Greece',
    artist: 'Rotting Christ',
    album: 'Triarchy Of The Lost Lovers',
    group: 'Europe',
    year: 1996,
    genres: 'Melodic Black Metal',
    url: 'https://rateyourmusic.com/release/album/rotting_christ/triarchy_of_the_lost_lovers/'
  },
  // HUNGARY
  {
    id: 'HU',
    country: 'Hungary',
    artist: 'Tamás Kátai',
    album: 'Erika Szobája',
    group: 'Europe',
    year: 2006,
    genres: 'Dark Folk, Neoclassical Darkwave',
    url: 'https://rateyourmusic.com/release/album/tamas_katai/erika_szobaja/'
  },
  // ICELAND
  {
    id: 'IS',
    country: 'Iceland',
    artist: 'NYIÞ',
    album: 'Til Eru Hræ Sem Hafa Aldrei Verið Menn Og Munu Aldrei Verða Þó Þau Lifi Enn',
    group: 'Europe',
    year: 2011,
    genres: 'Avant-garde Jazz, Dark Ambient',
    url: 'https://rateyourmusic.com/release/album/nyi_/til_eru_hrae_sem_hafa_aldrei_verid_menn_og_munu_aldrei_verda_do_dau_lifi_enn/'
  },
  // IRELAND
  {
    id: 'IE',
    country: 'Ireland',
    artist: 'My Bloody Valentine',
    album: 'Loveless',
    group: 'Europe',
    year: 1991,
    genres: 'Noise pop, Shoegaze',
    url: 'https://rateyourmusic.com/release/album/my-bloody-valentine/loveless/'
  },
  // ITALY
  {
    id: 'IT',
    country: 'Italy',
    artist: 'Il Bacio Della Medusa',
    album: 'Discesa Agl\'Inferi D\'Un Giovane Amante',
    group: 'Europe',
    year: 2008,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/il-bacio-della-medusa/discesa-aglinferi-dun-giovane-amante/'
  },
  // KOSOVO
  {
    id: 'XK',
    country: 'Kosovo',
    artist: 'Popečitelji',
    album: 'Ko Radi?',
    group: 'Europe',
    year: 2004,
    genres: 'Funk Rock, Macedonian Folk Music, Math Rock',
    url: 'https://rateyourmusic.com/release/album/popecitelji/ko-radi/'
  },
  // LATVIA
  {
    id: 'LV',
    country: 'Latvia',
    artist: 'Tautumeitas',
    album: 'Tautumeitas',
    group: 'Europe',
    year: 2018,
    genres: 'Latvian Folk Music',
    url: 'https://rateyourmusic.com/release/album/tautumeitas/tautumeitas/'
  },
  // LITHUANIA
  {
    id: 'LT',
    country: 'Lithuania',
    artist: 'Gyvata',
    album: 'Su Vėjužiu Kalbėjau',
    group: 'Europe',
    year: 2012,
    genres: 'Lithuanina Folk Music, Neofolk',
    url: 'https://rateyourmusic.com/release/album/gyvata/su-vejuziu-kalbejau/'
  },
  // LUXEMBOURG
  {
    id: 'LU',
    country: 'Luxembourg',
    artist: 'ROME',
    album: 'Flowers From Exile',
    group: 'Europe',
    year: 2009,
    genres: 'Martial Industrial, Neofolk',
    url: 'https://rateyourmusic.com/release/album/rome/flowers-from-exile/'
  },
  // MACEDONIA
  {
    id: 'MK',
    country: 'Macedonia',
    artist: 'Aporea',
    album: 'Na Rekakh Vavilonskikh',
    group: 'Europe',
    year: 1988,
    genres: 'Christian Liturgical Music, Ritual Ambient',
    url: 'https://rateyourmusic.com/release/ep/%D0%B0%D0%BF%D0%BE%D1%80%D1%94%D0%B0/%D0%BD%D0%B0-%D1%80%D1%94%D0%BA%D0%B0%D1%85%D1%8A-%D0%B2%D0%B0%D0%B2%D0%BB%D2%83%D0%BD%D1%81%D0%BA%D1%8B%D1%85%D1%8A-na-rekakh-vavilonskikh/'
  },
  // MALTA
  {
    id: 'MT',
    country: 'Malta',
    artist: 'JOON',
    album: 'Dream Again',
    group: 'Europe',
    year: 2021,
    genres: 'Synth-pop, Space Disco',
    url: 'https://rateyourmusic.com/release/album/joon/dream-again/'
  },
  // MOLDOVA
  {
    id: 'MD',
    country: 'Moldova',
    artist: 'Zdob şi Zdub',
    album: 'Tabăra Noastra',
    group: 'Europe',
    year: 1999,
    genres: 'Folk Punk, Gypsy Punk',
    url: 'https://rateyourmusic.com/release/album/zdob-si-zdub/tabara-noastra/'
  },
  // MONACO
  {
    id: 'MC',
    country: 'Monaco',
    artist: 'Hardcore Anal Hydrogen',
    album: 'HyperCut',
    group: 'Europe',
    year: 2018,
    genres: 'Avant-Garde Metal, Digital Hardcore',
    url: 'https://rateyourmusic.com/release/album/hah/hypercut/'
  },
  // MONTENEGRO
  {
    id: 'ME',
    country: 'Montenegro',
    artist: 'Janko Nilovic (as E. Orti)',
    album: 'Soul Impressions',
    group: 'Europe',
    year: 1975,
    genres: 'Jazz-Funk, Soul Jazz',
    url: 'https://rateyourmusic.com/release/album/e-orti/soul-impressions/'
  },
  // NETHERLANDS
  {
    id: 'NL',
    country: 'Netherlands',
    artist: 'YĪN YĪN',
    album: 'The Rabbit That Hunts Tigers',
    group: 'Europe',
    year: 2019,
    genres: 'Chinese Folk Music, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/yin-yin/the-rabbit-that-hunts-tigers/'
  },
  // NORWAY
  {
    id: 'NO',
    country: 'Norway',
    artist: 'Wardruna',
    album: 'Runaljod - Gap Var Ginnunga',
    group: 'Europe',
    year: 2009,
    genres: 'Dark Folk, Neo-Pagan Folk',
    url: 'https://rateyourmusic.com/release/album/wardruna/runaljod-%E2%80%93-gap-var-ginnunga/'
  },
  // POLAND
  {
    id: 'PL',
    country: 'Poland',
    artist: 'Żywiołak',
    album: 'Nowa Ex-Tradycja',
    group: 'Europe',
    year: 2008,
    genres: 'Neo-Pagan Folk',
    url: 'https://rateyourmusic.com/release/album/zywiolak/nowa-ex-tradycja/'
  },
  // PORTUGAL
  {
    id: 'PT',
    country: 'Portugal',
    artist: 'Fatigado',
    album: 'Sanzala',
    group: 'Europe',
    year: 2017,
    genres: 'Afro House, Batida, Kizomba, Kuduro',
    url: 'https://rateyourmusic.com/release/album/fatigado/sanzala/'
  },
  // ROMANIA
  {
    id: 'RO',
    country: 'Romania',
    artist: 'Sunset In The 12th House',
    album: 'Mozaic',
    group: 'Europe',
    year: 2015,
    genres: 'Post-Rock, Post-Metal',
    url: 'https://rateyourmusic.com/release/album/sunset_in_the_12th_house/mozaic/'
  },
  // RUSSIA
  {
    id: 'RU',
    country: 'Russia',
    artist: 'Kauan',
    album: 'Sorni Nai',
    group: 'Europe',
    year: 2015,
    genres: 'Post-Metal, Post-Rock',
    url: 'https://rateyourmusic.com/release/album/kauan/sorni-nai/'
  },
  // SAN MARINO
  {
    id: 'SM',
    country: 'San Marino',
    artist: 'Alessandro Arzilli',
    album: 'Musa',
    group: 'Europe',
    year: 2019,
    genres: 'Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/alessandro-arzilli/musa/'
  },
  // SERBIA
  {
    id: 'RS',
    country: 'Serbia',
    artist: 'Darkwood Dub',
    album: 'Elektro Pionir',
    group: 'Europe',
    year: 1999,
    genres: 'Dub, Art Rock',
    url: 'https://rateyourmusic.com/release/album/darkwood-dub/elektro-pionir/'
  },
  // SLOVAKIA
  {
    id: 'SK',
    country: 'Slovakia',
    artist: 'Komara',
    album: 'Komara',
    group: 'Europe',
    year: 2015,
    genres: 'Avant-prog, Dark Jazz',
    url: 'https://rateyourmusic.com/release/album/komara/komara/'
  },
  // SLOVENIA
  {
    id: 'SI',
    country: 'Slovenia',
    artist: 'Gramatik',
    album: 'Coffee Shop Selection',
    group: 'Europe',
    year: 2015,
    genres: 'Instrumental Hip-Hop',
    url: 'https://rateyourmusic.com/release/comp/gramatik/coffee-shop-selection/'
  },
  // SPAIN
  {
    id: 'ES',
    country: 'Spain',
    artist: 'Ska-P',
    album: '99%',
    group: 'Europe',
    year: 2013,
    genres: 'Ska Punk',
    url: 'https://rateyourmusic.com/release/album/ska-p/99/'
  },
  // SWEDEN
  {
    id: 'SE',
    country: 'Sweden',
    artist: 'Detektivbyrån',
    album: 'Wermland',
    group: 'Europe',
    year: 2008,
    genres: 'Folktronica',
    url: 'https://rateyourmusic.com/release/album/detektivbyran/wermland/'
  },
  // SWITZERLAND
  {
    id: 'CH',
    country: 'Switzerland',
    artist: 'Eluveitie',
    album: 'Evocation I - The Arcane Dominion',
    group: 'Europe',
    year: 2009,
    genres: 'Celtic Folk Music',
    url: 'https://rateyourmusic.com/release/album/eluveitie/evocation-i-the-arcane-dominion/'
  },
  // UKRAINE
  {
    id: 'UA',
    country: 'Ukraine',
    artist: 'DakhaBrakha',
    album: 'Alambari',
    group: 'Europe',
    year: 2020,
    genres: 'Cabaret, Folk Pop, Ukrainian Folk Music',
    url: 'https://rateyourmusic.com/release/album/%D0%B4%D0%B0%D1%85%D0%B0%D0%B1%D1%80%D0%B0%D1%85%D0%B0/alambari/'
  },
  // UNITED KINGDOM
  {
    id: 'GB',
    country: 'United Kingdom',
    artist: 'Skream',
    album: 'Skream!',
    group: 'Europe',
    year: 2006,
    genres: 'Dubstep',
    url: 'https://rateyourmusic.com/release/album/skream/skream/'
  },
  // VATICAN CITY
  {
    id: 'VA',
    country: 'Vatican City',
    artist: 'Cappella Musicale Pontificia Sistina',
    album: 'Cantate Domino',
    group: 'Europe',
    year: 2015,
    genres: 'Christian Liturgical Music, Renaissance Music',
    url: 'https://rateyourmusic.com/release/album/cappella_musicale_pontificia_sistina_massimo_palombella/cantate_domino/'
  },
  //#endregion EUROPE

  //#region MIDDLE EAST
  // ISRAEL
  {
    id: 'IL',
    country: 'Israel',
    artist: 'Infected Mushroom',
    album: 'Legend Of The Black Shawarma',
    group: 'Middle East',
    year: 2009,
    genres: 'Psytrance',
    url: 'https://rateyourmusic.com/release/album/infected-mushroom/legend-of-the-black-shawarma/'
  },
  // IRAN
  {
    id: 'IR',
    country: 'Iran',
    artist: 'Shahram Shabpareh',
    album: 'Ey Ghashangtar Az Paria',
    group: 'Middle East',
    year: 1994,
    genres: 'Persian Pop',
    url: 'https://rateyourmusic.com/release/album/%D8%B4%D9%87%D8%B1%D8%A7%D9%85-shahram/%D8%A7%D9%89-%D9%82%D8%B4%D9%86%DA%AF-%D8%AA%D8%B1-%D8%A7%D8%B2-%D9%BE%D8%B1%D9%8A%D8%A7-ey-ghashangtar-az-paria/'
  },
  // LEBANON
  {
    id: 'LB',
    country: 'Lebanon',
    artist: 'Rabih Abou-Khalil',
    album: 'Blue Camel',
    group: 'Middle East',
    year: 1992,
    genres: 'Arabic Jazz',
    url: 'https://rateyourmusic.com/release/album/rabih-abou-khalil/blue-camel/'
  },
  // OMAN
  {
    id: 'OM',
    country: 'Oman',
    artist: 'Lamya',
    album: 'Learning From Falling',
    group: 'Middle East',
    year: 2002,
    genres: 'Neo-Soul, Pop',
    url: 'https://rateyourmusic.com/release/album/lamya/learning-from-falling-1/'
  },
  // SAUDI ARABIA
  {
    id: 'SA',
    country: 'Saudi Arabia',
    artist: 'Mahmoud Awad',
    album: 'Sheikh To The F.U.T.U.R.E',
    group: 'Middle East',
    year: 2009,
    genres: 'Dabke, Experimental, Neo-Psychedelia',
    url: 'https://rateyourmusic.com/release/album/mahmoud-awad/sheikh-to-the-f_u_t_u_r_e/'
  },
  // YEMEN
  {
    id: 'YE',
    country: 'Yemen',
    artist: 'Margalit Ankory',
    album: 'Travel With Me My Dove and Listen to Me!: Songs of the Middle East',
    group: 'Middle East',
    year: 1976,
    genres: 'Arabic Folk Music, Spoken Word',
    url: 'https://rateyourmusic.com/release/album/margalit-ankory/travel-with-me-my-dove-and-listen-to-me-songs-of-the-middle-east/'
  },
  //#endregion MIDDLE EAST

  //#region NORTH AMERICA
  // BERMUDA
  {
    id: 'BM',
    country: 'Bermuda',
    artist: 'Alan Silva and his Celestrial Communication Orchestra',
    album: 'Luna Surface',
    group: 'North America',
    year: 1969,
    genres: 'Free Jazz',
    url: 'https://rateyourmusic.com/release/album/alan-silva-and-his-celestrial-communication-orchestra/luna-surface/'
  },
  // CANADA
  {
    id: 'CA',
    country: 'Canada',
    artist: 'Venetian Snares',
    album: 'Rossz Csillag Alatt Született',
    group: 'North America',
    year: 2005,
    genres: 'Breakcore, Modern Classical',
    url: 'https://rateyourmusic.com/release/album/venetian-snares/rossz-csillag-alatt-szuletett/'
  },
  // GREENLAND
  {
    id: 'GL',
    country: 'Greenland',
    artist: 'Sume',
    album: 'Sumut',
    group: 'North America',
    year: 1973,
    genres: 'Progressive Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/sume/sumut/'
  },
  // MEXICO
  {
    id: 'MX',
    country: 'Mexico',
    artist: 'Santana',
    album: 'Abraxas',
    group: 'North America',
    year: 1970,
    genres: 'Latin Rock',
    url: 'https://rateyourmusic.com/release/album/santana/abraxas/'
  },
  // SAINT PIERRE AND MIQUELON
  {
    id: 'PM',
    country: 'Saint Pierre and Miquelon',
    artist: 'Dode',
    album: 'Dode',
    group: 'North America',
    year: 2009,
    genres: 'Alternative Rock, Chanson',
    url: 'https://rateyourmusic.com/release/album/dode/dode/'
  },
  // USA
  {
    id: 'US',
    country: 'USA',
    artist: 'Mr. Bungle',
    album: 'Mr. Bungle',
    group: 'North America',
    year: 1991,
    genres: 'Avant-garde Metal, Experimental Rock',
    url: 'https://rateyourmusic.com/release/album/mr-bungle/mr-bungle/'
  },
  //#endregion NORTH AMERICA

  //#region OCEANIA
  // AUSTRALIA
  {
    id: 'AU',
    country: 'Australia',
    artist: 'Dead Can Dance',
    album: 'Dionysus',
    group: 'Oceania',
    year: 2018,
    genres: 'Neoclassical New Age, Tribal Ambient',
    url: 'https://rateyourmusic.com/release/album/dead-can-dance/dionysus/'
  },
  // FIJI
  {
    id: 'FJ',
    country: 'Fiji',
    artist: 'Mantis',
    album: 'Turn Onto Music',
    group: 'Oceania',
    year: 1973,
    genres: 'Funk Rock,	Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/mantis/turn-onto-music/'
  },
  // NEW ZEALAND
  {
    id: 'NZ',
    country: 'New Zealand',
    artist: 'David Parsons',
    album: 'Shaman',
    group: 'Oceania',
    year: 1999,
    genres: 'Ambient',
    url: 'https://rateyourmusic.com/release/album/david_parsons/shaman/'
  },
  // PAPUA NEW GUINEA
  {
    id: 'PG',
    country: 'Papua New Guinea',
    artist: 'Papua New Guinea Stringbands with Bob Brozman',
    album: 'Songs Of The Volcano',
    group: 'Oceania',
    year: 2005,
    genres: 'Papuan Folk Music, Slack-Key Guitar',
    url: 'https://rateyourmusic.com/release/album/papua-new-guinea-stringbands-with-bob-brozman/songs-of-the-volcano/'
  },
  // SAMOA
  {
    id: 'WS',
    country: 'Samoa',
    artist: 'The Samoan Surfriders',
    album: 'Let Me Hear You Whisper',
    group: 'Oceania',
    year: 1964,
    genres: 'Polynesian Music',
    url: 'https://rateyourmusic.com/release/album/the-samoan-surfriders/let-me-hear-you-whisper/'
  },
  //#endregion OCEANIA

  //#region SOUTH AMERICA
  // ARGENTINA
  {
    id: 'AR',
    country: 'Argentina',
    artist: 'Bajofondo',
    album: 'Mar Dulce',
    group: 'South America',
    year: 2007,
    genres: 'Electrotango',
    url: 'https://rateyourmusic.com/release/album/bajofondo/mar-dulce/'
  },
  // BOLIVIA
  {
    id: 'BO',
    country: 'Bolivia',
    artist: 'Gato Diablo',
    album: 'La Importancia De Tener Un Cuerpo',
    group: 'South America',
    year: 2012,
    genres: 'Deathrock, Post-Punk, Synthwave',
    url: 'https://rateyourmusic.com/release/album/gato-diablo/la-importancia-de-tener-un-cuerpo/'
  },
  // BRASIL
  {
    id: 'BR',
    country: 'Brasil',
    artist: 'Pedro Santos',
    album: 'Krishnanda',
    group: 'South America',
    year: 1968,
    genres: 'Música Popular Brasileira, Psychedelic Folk',
    url: 'https://rateyourmusic.com/release/album/pedro_santos/krishnanda/'
  },
  // CHILE
  {
    id: 'CL',
    country: 'Chile',
    artist: 'Los Jaivas',
    album: 'Los Jaivas',
    group: 'South America',
    year: 1975,
    genres: 'Andean Rock, Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/los-jaivas/los-jaivas-el-indio/'
  },
  // COLOMBIA
  {
    id: 'CO',
    country: 'Colombia',
    artist: 'Quantic & His Combo Bárbaro',
    album: 'Tradition in Transition',
    group: 'South America',
    year: 2009,
    genres: 'Latin Jazz, Mambo, Salsa',
    url: 'https://rateyourmusic.com/release/album/quantic-and-his-combo-barbaro/tradition-in-transition/'
  },
  // ECUADOR
  {
    id: 'EC',
    country: 'Ecuador',
    artist: 'Nicola Cruz',
    album: 'Prender El Alma',
    group: 'South America',
    year: 2015,
    genres: 'Downtempo, Latin Electronic',
    url: 'https://rateyourmusic.com/release/album/nicola-cruz/prender-el-alma/'
  },
  // FALKLAND ISLANDS
  {
    id: 'FK',
    country: 'Falkland Islands',
    artist: 'Bloodrust',
    album: 'A Legacy Of Vengeance',
    group: 'South America',
    year: 2021,
    genres: 'Death Metal',
    url: 'https://rateyourmusic.com/release/album/bloodrust/a-legacy-of-vengeance/'
  },
  // FRENCH GUIANA
  {
    id: 'GF',
    country: 'French Guiana',
    artist: 'Henri Salvador',
    album: 'Chambre Avec Vue',
    group: 'South America',
    year: 2000,
    genres: 'Bossa Nova, Chanson',
    url: 'https://rateyourmusic.com/release/album/henri_salvador/chambre_avec_vue/'
  },
  // GUYANA
  {
    id: 'GY',
    country: 'Guyana',
    artist: 'Cameron',
    album: 'Cameron',
    group: 'South America',
    year: 1980,
    genres: 'Disco, Funk',
    url: 'https://rateyourmusic.com/release/album/cameron/cameron/'
  },
  // PARAGUAY
  {
    id: 'PY',
    country: 'Paraguay',
    artist: 'EEEKS',
    album: 'Pet City',
    group: 'South America',
    year: 2017,
    genres: 'Indie Pop, Psychedelic Pop',
    url: 'https://rateyourmusic.com/release/album/eeeks/pet-city/'
  },
  // PERU
  {
    id: 'PE',
    country: 'Peru',
    artist: 'Yma Súmac',
    album: 'Mambo!',
    group: 'South America',
    year: 1954,
    genres: 'Exotica, Mambo',
    url: 'https://rateyourmusic.com/release/album/yma-sumac/mambo/'
  },
  // SURINAME
  {
    id: 'SR',
    country: 'Suriname',
    artist: 'Lieve Hugo',
    album: 'King of Kasèko',
    group: 'South America',
    year: 1974,
    genres: 'Kaseko, Mambo',
    url: 'https://rateyourmusic.com/release/album/lieve-hugo/king-of-kaseko/'
  },
  // URUGUAY
  {
    id: 'UY',
    country: 'Uruguay',
    artist: 'Conjunto Casino de Uruguay',
    album: 'Que Golazo',
    group: 'South America',
    year: 1976,
    genres: 'Guaracha, Plena, Salsa',
    url: 'https://rateyourmusic.com/release/album/conjunto-casino/que-golazo/'
  },
  // VENEZUELA
  {
    id: 'VE',
    country: 'Venezuela',
    artist: 'Simón Díaz',
    album: 'Sus Grandes Exitos',
    group: 'South America',
    year: 1989,
    genres: 'Joropo, Hispanic American Folk Music',
    url: 'https://rateyourmusic.com/release/comp/simon_diaz/sus_grandes_exitos/'
  },
  //#endregion SOUTH AMERICA

  //#region USA
  // ARKANSAS
  {
    id: 'US-AR',
    country: "Arkansas",
    artist: 'The Body',
    album: 'I Have Fought Against It, But I Can\'t Any Longer',
    group: 'USA',
    year: 2018,
    genres: 'Death Industrial',
    url: 'https://rateyourmusic.com/release/album/the-body/i-have-fought-against-it-but-i-cant-any-longer/'
  },
  // ARIZONA
  {
    id: 'US-AZ',
    country: "Arizona",
    artist: 'Michael Stearns',
    album: 'Encounter: A Journey In The Key Of Space',
    group: 'USA',
    year: 1988,
    genres: 'Space Ambient',
    url: 'https://rateyourmusic.com/release/album/michael-stearns/encounter-a-journey-in-the-key-of-space/'
  },
  // CALIFORNIA
  {
    id: 'US-CA',
    country: "California",
    artist: 'Mr. Bungle',
    album: 'Mr. Bungle',
    group: 'USA',
    year: 1991,
    genres: 'Avant-garde Metal, Experimental Rock',
    url: 'https://rateyourmusic.com/release/album/mr-bungle/mr-bungle/'
  },
  // COLORADO
  {
    id: 'US-CO',
    country: "Colorado",
    artist: 'Itchy-O',
    album: 'Burn The Navigator',
    group: 'USA',
    year: 2014,
    genres: 'Industrial',
    url: 'https://rateyourmusic.com/release/album/itchy-o/burn-the-navigator/'
  },
  // FLORIDA
  {
    id: 'US-FL',
    country: "Florida",
    artist: 'Crimson Glory',
    album: 'Crimson Glory',
    group: 'USA',
    year: 1986,
    genres: 'Heavy Metal, US Power Metal',
    url: 'https://rateyourmusic.com/release/album/crimson-glory/crimson-glory/'
  },
  // GEORGIA
  {
    id: 'US-GA',
    country: "Georgia",
    artist: 'Alan Jackson',
    album: 'Good Time',
    group: 'USA',
    year: 2008,
    genres: 'Contemporary Folk',
    url: 'https://rateyourmusic.com/release/album/alan_jackson/good_time/'
  },
  // IOWA
  {
    id: 'US-IA',
    country: "Iowa",
    artist: 'Slipknot',
    album: 'Slipknot',
    group: 'USA',
    year: 1999,
    genres: 'Nu Metal',
    url: 'https://rateyourmusic.com/release/album/slipknot/slipknot/'
  },
  // ILLINOIS
  {
    id: 'US-IL',
    country: "Illinois",
    artist: 'Herbie Hancock',
    album: 'Head Hunters',
    group: 'USA',
    year: 1973,
    genres: 'Jazz-Funk, Jazz Fusion',
    url: 'https://rateyourmusic.com/release/album/herbie-hancock/head-hunters/'
  },
  // LOUISIANA
  {
    id: 'US-LA',
    country: "Louisiana",
    artist: 'Neutral Milk Hotel',
    album: 'In The Aeroplane Over The Sea',
    group: 'USA',
    year: 1998,
    genres: 'Indie Folk, Indie Rock',
    url: 'https://rateyourmusic.com/release/album/neutral-milk-hotel/in-the-aeroplane-over-the-sea/'
  },
  // MASSACHUSETTS
  {
    id: 'US-MA',
    country: "Massachusetts",
    artist: 'Bella\'s Bartok',
    album: 'Change Yer Life',
    group: 'USA',
    year: 2016,
    genres: 'Dark Cabaret, Gypsy Punk',
    url: 'https://rateyourmusic.com/release/album/bellas_bartok/change_yer_life/'
  },
  // MARYLAND
  {
    id: 'US-MD',
    country: "Maryland",
    artist: 'Polkadot Cadaver',
    album: 'Purgatory Dance Party',
    group: 'USA',
    year: 2007,
    genres: 'Avant-garde Metal, Experimental Rock',
    url: 'https://rateyourmusic.com/release/album/polkadot-cadaver/purgatory-dance-party/'
  },
  // MICHIGAN
  {
    id: 'US-MI',
    country: "Michigan",
    artist: 'Power Of Zeus',
    album: 'The Gospel According to Zeus',
    group: 'USA',
    year: 1970,
    genres: 'Hard Rock, Heavy Psych',
    url: 'https://rateyourmusic.com/release/album/power-of-zeus/the-gospel-according-to-zeus/'
  },
  // MINNESOTA
  {
    id: 'US-MN',
    country: "Minnesota",
    artist: 'Prince',
    album: 'N·E·W·S',
    group: 'USA',
    year: 2003,
    genres: 'Jazz-Funk, Jazz Fusion',
    url: 'https://rateyourmusic.com/release/album/prince/n_e_w_s/'
  },
  // MISSOURI
  {
    id: 'US-MO',
    country: "Missouri",
    artist: 'Pavlov\'s Dog',
    album: 'Pampered Menial',
    group: 'USA',
    year: 1975,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/pavlovs-dog/pampered-menial/'
  },
  // MISSISSIPPI
  {
    id: 'US-MS',
    country: "Mississippi",
    artist: 'Elvis Presley',
    album: 'ELV1S (Elvis: 30 #1 Hits)',
    group: 'USA',
    year: 2002,
    genres: 'Rock & Roll, Rockabilly',
    url: 'https://rateyourmusic.com/release/comp/elvis-presley/elv1s-30-1-hits/'
  },
  // NEBRASKA
  {
    id: 'US-NE',
    country: "Nebraska",
    artist: 'A Ferocious Jungle Cat',
    album: 'A Ferocious Jungle Cat',
    group: 'USA',
    year: 2015,
    genres: 'Funk Rock',
    url: 'https://aferociousjunglecat.bandcamp.com/' //todo: add on rym
  },
  // NEVADA
  {
    id: 'US-NV',
    country: "Nevada",
    artist: 'The Crystal Method',
    album: 'Vegas',
    group: 'USA',
    year: 1997,
    genres: 'Big Beat',
    url: 'https://rateyourmusic.com/release/album/the-crystal-method/vegas/'
  },
  // NEW HAMPSHIRE
  {
    id: 'US-NH',
    country: "New Hampshire",
    artist: 'Alvin Lucier',
    album: 'I Am Sitting In A Room',
    group: 'USA',
    year: 1981,
    genres: 'Tape Music, Spoken Word',
    url: 'https://rateyourmusic.com/release/album/alvin-lucier/i-am-sitting-in-a-room/'
  },
  // NEW JERSEY
  {
    id: 'US-NJ',
    country: "New Jersey",
    artist: 'Alterior',
    album: 'No Reason To Be Ashamed',
    group: 'USA',
    year: 2008,
    genres: 'IDM, Glitch',
    url: 'https://rateyourmusic.com/release/album/alterior/no_reason_to_be_ashamed/'
  },
  // NEW YORK
  {
    id: 'US-NY',
    country: "New York",
    artist: 'Mindless Self Indulgence',
    album: 'If',
    group: 'USA',
    year: 2008,
    genres: 'Industrial Rock, Synth Punk',
    url: 'https://rateyourmusic.com/release/album/mindless-self-indulgence/if/'
  },
  // NORTH CAROLINA
  {
    id: 'US-NC',
    country: "North Carolina",
    artist: 'George Clinton',
    album: 'Computer Games',
    group: 'USA',
    year: 1982,
    genres: 'Synth Funk',
    url: 'https://rateyourmusic.com/release/album/george-clinton/computer-games/'
  },
  // OHIO
  {
    id: 'US-OH',
    country: "Ohio",
    artist: 'The Sacred Mushroom',
    album: 'The Sacred Mushroom',
    group: 'USA',
    year: 1969,
    genres: 'Blues Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/the-sacred-mushroom/the-sacred-mushroom/'
  },
  // PENNSYLVANIA
  {
    id: 'US-PA',
    country: "Pennsylvania",
    artist: 'Kabayun And Friends',
    album: 'Noctis Labyrinthus',
    group: 'USA',
    year: 2018,
    genres: 'Darkpsy',
    url: 'https://rateyourmusic.com/release/album/kabayun-and-friends/noctis-labyrinthus/'
  },
  // TENNESSEE
  {
    id: 'US-TN',
    country: "Tennessee",
    artist: 'Hammock',
    album: 'Columbus',
    group: 'USA',
    year: 2017,
    genres: 'Film Score, Ambient',
    url: 'https://rateyourmusic.com/release/album/hammock/columbus/'
  },
  // TEXAS
  {
    id: 'US-TX',
    country: "Texas",
    artist: 'Snarky Puppy',
    album: 'We Like It Here',
    group: 'USA',
    year: 2014,
    genres: 'Jazz Fusion',
    url: 'https://rateyourmusic.com/release/album/snarky-puppy/we-like-it-here/'
  },
  // VIRGINIA
  {
    id: 'US-VA',
    country: "Virginia",
    artist: 'Car Seat Headrest',
    album: 'Teens Of Denial',
    group: 'USA',
    year: 2016,
    genres: 'Indie Rock, Power Pop',
    url: 'https://rateyourmusic.com/release/album/car-seat-headrest/teens-of-denial/'
  },
  // WASHINGTON
  {
    id: 'US-WA',
    country: "Washington",
    artist: 'Nirvana',
    album: 'Nevermind',
    group: 'USA',
    year: 1991,
    genres: 'Grunge',
    url: 'https://rateyourmusic.com/release/album/nirvana/nevermind/'
  },

  //#endregion USA

  //#region IT
  // ABRUZZO
  // {
  //   id: 'IT-65',
  //   country: 'Abruzzo (IT)',
  //   artist: 'foo',
  //   album: 'foo',
  //   group: 'Italy',
  //   year: 2000,
  //   genres: 'foo',
  //   url: 'foo'
  // },

  // BASILICATA
  {
    id: 'IT-77',
    country: 'Basilicata (IT)',
    artist: 'Hautville',
    album: 'Mater Dolorosa',
    group: 'Italy',
    year: 2016,
    genres: 'Neofolk, Darkwave',
    url: 'https://rateyourmusic.com/release/album/hautville/mater_dolorosa/'
  },

  // CALABRIA
  {
    id: 'IT-78',
    country: 'Calabria (IT)',
    artist: 'Rino Gaetano',
    album: 'Sotto I Cieli Di Rino',
    group: 'Italy',
    year: 2003,
    genres: 'Pop, Rock',
    url: 'https://rateyourmusic.com/release/comp/rino-gaetano/sotto-i-cieli-di-rino/'
  },

  // CAMPANIA
  {
    id: 'IT-72',
    country: 'Campania (IT)',
    artist: 'When The Clouds',
    album: 'The Longed For Season',
    group: 'Italy',
    year: 2010,
    genres: 'Ambient, Post-Rock',
    url: 'https://rateyourmusic.com/release/ep/when-the-clouds/the-longed-for-season/'
  },

  // EMILIA-ROMAGNA
  {
    id: 'IT-45',
    country: 'Emilia-Romagna (IT)',
    artist: 'Dark Lunacy',
    album: 'Devoid',
    group: 'Italy',
    year: 2000,
    genres: 'Melodic Death Metal, Symphonic Metal',
    url: 'https://rateyourmusic.com/release/album/dark-lunacy/devoid/'
  },

  // FRIULI-VENEZIA GIULIA
  {
    id: 'IT-36',
    country: 'Friuli-Venezia Giulia (IT)',
    artist: 'Rhapsody',
    album: 'Symphony Of Enchanted Lands',
    group: 'Italy',
    year: 1998,
    genres: '	Power Metal, Symphonic Metal',
    url: 'https://rateyourmusic.com/release/album/rhapsody/symphony-of-enchanted-lands/'
  },

  // LAZIO
  {
    id: 'IT-62',
    country: 'Lazio (IT)',
    artist: 'Metamorfosi',
    album: 'Inferno',
    group: 'Italy',
    year: 1973,
    genres: 'Progressive Rock, 	Symphonic Prog',
    url: 'https://rateyourmusic.com/release/album/metamorfosi/inferno/'
  },

  // LIGURIA
  {
    id: 'IT-42',
    country: 'Liguria (IT)',
    artist: 'New Trolls',
    album: 'Concerto Grosso Per I New Trolls',
    group: 'Italy',
    year: 1971,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/new-trolls/concerto-grosso-per-i-new-trolls/'
  },

  // LOMBARDIA
  {
    id: 'IT-25',
    country: 'Lombardia (IT)',
    artist: 'Pholas Dactylus',
    album: 'Concerto Delle Menti',
    group: 'Italy',
    year: 1973,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/pholas-dactylus/concerto-delle-menti/'
  },

  // MARCHE
  {
    id: 'IT-57',
    country: 'Marche (IT)',
    artist: 'Fabri Fibra',
    album: 'Mr. Simpatia',
    group: 'Italy',
    year: 2004,
    genres: 'Horrorcore, Hardcore Hip-Hop',
    url: 'https://rateyourmusic.com/release/album/fabri-fibra/mr-simpatia/'
  },

  // MOLISE
  {
    id: 'IT-67',
    country: 'Molise (IT)',
    artist: 'Riserva Moac',
    album: 'Babilonia',
    group: 'Italy',
    year: 2015,
    genres: 'Folk Rock, Ska',
    url: 'https://rateyourmusic.com/artist/riserva_moac/babilonia'
  },

  // PIEMONTE
  {
    id: 'IT-21',
    country: 'Piemonte (IT)',
    artist: 'Uochi Toki',
    album: 'Cuore Amore Errore Disintegrazione',
    group: 'Italy',
    year: 2010,
    genres: 'Industrial Hip-Hop, Abstract Hip-Hop',
    url: 'https://rateyourmusic.com/release/album/uochi-toki/cuore-amore-errore-disintegrazione/'
  },

  // PUGLIA
  {
    id: 'IT-75',
    country: 'Puglia (IT)',
    artist: 'Caparezza',
    album: '?!',
    group: 'Italy',
    year: 2000,
    genres: 'Conscious Hip-Hop, Alternative Rock',
    url: 'https://rateyourmusic.com/release/album/caparezza/_/'
  },

  // SARDEGNA
  {
    id: 'IT-88',
    country: 'Sardegna (IT)',
    artist: 'Sa Razza',
    album: 'Wessisla',
    group: 'Italy',
    year: 1996,
    genres: 'Hip-Hop',
    url: 'https://rateyourmusic.com/release/album/sa_razza/wessisla/'
  },

  // SICILIA
  {
    id: 'IT-82',
    country: 'Sicilia (IT)',
    artist: 'Franco Battiato',
    album: 'Sulle Corde Di Aries',
    group: 'Italy',
    year: 1973,
    genres: 'Progressive Rock, Progressive Electronic',
    url: 'https://rateyourmusic.com/release/album/battiato/sulle-corde-di-aries/'
  },

  // TOSCANA
  {
    id: 'IT-52',
    country: 'Toscana (IT)',
    artist: 'Negrita',
    album: 'L\'Uomo Sogna Di Volare',
    group: 'Italy',
    year: 2005,
    genres: 'Pop Rock',
    url: 'https://rateyourmusic.com/release/album/negrita/luomo-sogna-di-volare/'
  },

  // TRENTINO-ALTO ADIGE
  {
    id: 'IT-32',
    country: 'Trentino-Alto Adige (IT)',
    artist: 'Pop-X',
    album: 'I Belong To You (Canti Albanesi Di Trento E Bolzano)',
    group: 'Italy',
    year: 2015,
    genres: 'Hyperpop',
    url: 'https://rateyourmusic.com/release/album/pop-x/i-belong-to-you-canti-albanesi-di-trento-e-bolzano/'
  },

  // UMBRIA
  {
    id: 'IT-55',
    country: 'Umbria (IT)',
    artist: 'Il Bacio della Medusa',
    album: 'Discesa Agl\'Inferi D\'Un Giovane Amante',
    group: 'Italy',
    year: 2008,
    genres: 'Progressive Rock, Symphonic Prog',
    url: 'https://rateyourmusic.com/release/album/il-bacio-della-medusa/discesa-aglinferi-dun-giovane-amante/'
  },

  // VALLE D'AOSTA
  // {
  //   id: 'IT-23',
  //   country: 'Valle D\'Aosta (IT)',
  //   artist: 'foo',
  //   album: 'foo',
  //   group: 'Italy',
  //   year: 2000,
  //   genres: 'foo',
  //   url: 'foo'
  // },

  // VENETO
  {
    id: 'IT-34',
    country: 'Veneto (IT)',
    artist: 'Teatro Satanico',
    album: 'Chidakasha',
    group: 'Italy',
    year: 2008,
    genres: 'Dark Ambient, Industrial',
    url: 'https://rateyourmusic.com/release/album/teatro-satanico/chidakasha/'
  }

  //#endregion IT
]
