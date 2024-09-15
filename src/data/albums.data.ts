//source: https://rateyourmusic.com/wiki/RYM:Administrative%20divisions

export interface AlbumInfo {
  id: string,
  artist: string,
  album: string,
  region: string,
  year: number,
  genres: string,
  url: string,
}

export const albums: AlbumInfo[] = [
  //#region AFRICA
  // ALGERIA
  {
    id: 'DZ',
    artist: 'Khaled',
    album: 'Khaled',
    region: 'Africa',
    year: 1992,
    genres: 'Funk, Pop Raï',
    url: 'https://rateyourmusic.com/release/album/khaled/khaled/'
  },
  // ANGOLA
  {
    id: 'AO',
    artist: 'Bonga',
    album: 'Angola 74',
    region: 'Africa',
    year: 1974,
    genres: 'Morna, Semba',
    url: 'hhttps://rateyourmusic.com/release/album/bonga/angola-74/'
  },
  // BENIN
  {
    id: 'BJ',
    artist: 'Angélique Kidjo',
    album: 'Black Ivory Soul',
    region: 'Africa',
    year: 2002,
    genres: 'Fon Music',
    url: 'https://rateyourmusic.com/release/album/angelique-kidjo/black-ivory-soul/'
  },
  // BURKINA FASO
  {
    id: 'BF',
    artist: 'Cheikh Lô',
    album: 'Né La Thiass',
    region: 'Africa',
    year: 1996,
    genres: 'Mbalax, Soukous',
    url: 'https://rateyourmusic.com/release/album/cheikh-lo/ne-la-thiass-4/'
  },
  // BOTSWANA
  {
    id: 'BW',
    artist: 'Skinflint',
    album: 'IKLWA',
    region: 'Africa',
    year: 2010,
    genres: 'Heavy Metal',
    url: 'https://rateyourmusic.com/release/album/skinflint/iklwa/'
  },
  // CAMEROON
  {
    id: 'CM',
    artist: 'Francis Bebey',
    album: 'Psychedelic Sanza 1982-1984',
    region: 'Africa',
    year: 2014,
    genres: 'Bikutsi, Central African Music',
    url: 'https://rateyourmusic.com/release/comp/francis-bebey/psychedelic-sanza-1982-1984/'
  },
  // CAPE VERDE
  {
    id: 'CV',
    artist: 'Americo Brito',
    album: 'Sintado Na Pracinha',
    region: 'Africa',
    year: 1980,
    genres: 'Funanà',
    url: 'https://rateyourmusic.com/release/album/americo-brito/sintado-na-pracinha/'
  },
  // CHAD
  {
    id: 'TD',
    artist: 'Maitre Gazonga',
    album: 'Les Jaloux Saboteurs',
    region: 'Africa',
    year: 1983,
    genres: 'Highlife, Soukous',
    url: 'https://rateyourmusic.com/release/album/maitre-gazonga/les-jaloux-saboteurs/'
  },
  // CONGO
  {
    id: 'CG',
    artist: 'ZAO',
    album: 'Ancien Combattant',
    region: 'Africa',
    year: 1984,
    genres: 'Zouk',
    url: 'https://rateyourmusic.com/release/album/zao_f3/ancien_combattant/'
  },
  // DEMOCRATIC REPUBLIC OF THE CONGO
  {
    id: 'CD',
    artist: 'Franco & Le Tout Puissant OK Jazz',
    album: 'Maby… Tonton Zala Serieux',
    region: 'Africa',
    year: 1991,
    genres: 'Soukous',
    url: 'https://rateyourmusic.com/release/album/lorchestre_tout_puissant_o_k__jazz/maby____tonton_zala_serieux/'
  },
  // DJIBOUTI
  {
    id: 'DJ',
    artist: 'Groupe RTD',
    album: 'The Dancing Devils Of Djibouti',
    region: 'Africa',
    year: 2020,
    genres: 'Qaraami',
    url: 'https://rateyourmusic.com/release/album/groupe-rtd/the-dancing-devils-of-djibouti/'
  },
  // EGYPT
  {
    id: 'EG',
    artist: 'Cairokee',
    album: 'The Ugly Ducklings',
    region: 'Africa',
    year: 2019,
    genres: 'Alternative Rock, Electropop, Shaabi',
    url: 'https://rateyourmusic.com/release/album/%D9%83%D8%A7%D9%8A%D8%B1%D9%88%D9%83%D9%8A/%D8%A3%D8%A8%D9%86%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B7%D8%A9-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D8%A1-the-ugly-ducklings/'
  },
  // EQUATORIAL GUINEA
  {
    id: 'GQ',
    artist: 'Lion Sitté',
    album: 'Otros Tiempos',
    region: 'Africa',
    year: 2012,
    genres: 'Dancehall',
    url: 'https://rateyourmusic.com/release/album/lion_sitte/otros_tiempos/'
  },
  // ERITREA
  {
    id: 'ER',
    artist: 'Asmara Allstars',
    album: 'Eritrea\'s Got Soul',
    region: 'Africa',
    year: 2010,
    genres: 'Afro-Jazz, Dub, Tizita',
    url: 'https://rateyourmusic.com/release/album/asmara_allstars/eritreas_got_soul/'
  },
  // ETHIOPIA
  {
    id: 'ET',
    artist: 'Mulatu Astatke',
    album: 'Mulatu Of Ethiopia',
    region: 'Africa',
    year: 1972,
    genres: 'Ethio-Jazz',
    url: 'https://rateyourmusic.com/release/album/mulatu-astatke/mulatu-of-ethiopia-3/'
  },
  // ESWATINI
  {
    id: 'SZ',
    artist: 'Carl Crack',
    album: 'Black Ark',
    region: 'Africa',
    year: 1998,
    genres: 'Post Industrial, Sound Collage',
    url: 'https://rateyourmusic.com/release/album/carl-crack/black-ark/'
  },
  // GABON
  {
    id: 'GA',
    artist: 'Pierre Akendengué & Hughes de Courson',
    album: 'Lambarena: Bach To Africa',
    region: 'Africa',
    year: 1994,
    genres: 'African Folk Music, Classical Crossover',
    url: 'https://rateyourmusic.com/release/album/pierre-akendengue-hughes-de-courson/lambarena-bach-to-africa/'
  },
  // GAMBIA
  {
    id: 'GM',
    artist: 'Amadu Bamba',
    album: 'Drums Of The Firdu Fula',
    region: 'Africa',
    year: 1990,
    genres: 'Fula Music',
    url: 'https://rateyourmusic.com/release/album/amadu_bamba/drums_of_the_firdu_fula/'
  },
  // GHANA
  {
    id: 'GH',
    artist: 'De Frank & His Professionals',
    album: 'Psychedelic Man',
    region: 'Africa',
    year: 1976,
    genres: 'Afro-Rock, Highlife',
    url: 'https://rateyourmusic.com/release/album/de-frank-and-his-professionals/psychedelic-man/'
  },
  // GUINEA
  {
    id: 'GN',
    artist: 'Djeli Moussa Diawara',
    album: 'Yasimika',
    region: 'Africa',
    year: 1983,
    genres: 'Mande Music',
    url: 'https://rateyourmusic.com/release/album/djeli-moussa-diawara/yasimika/'
  },
  // GUINEA-BISSAU
  {
    id: 'GW',
    artist: 'N\'kassa Cobra',
    album: 'Unidade Luta Progresso',
    region: 'Africa',
    year: 1983,
    genres: 'Gumbe',
    url: 'https://rateyourmusic.com/release/album/nkassa-cobra/unidade-luta-progresso/'
  },
  // IVORY COAST
  {
    id: 'CI',
    artist: 'Magic System',
    album: '1er Gaou',
    region: 'Africa',
    year: 2000,
    genres: 'Zouglou',
    url: 'https://rateyourmusic.com/release/album/magic-system/1er-gaou/'
  },
  // KENYA
  {
    id: 'KE',
    artist: 'Extra Golden',
    album: 'Hara Ma Nono',
    region: 'Africa',
    year: 2007,
    genres: 'Benga, Boogie Rock',
    url: 'https://rateyourmusic.com/release/album/extra_golden/hera_ma_nono/'
  },
  // LESOTHO
  {
    id: 'LS',
    artist: 'Tau ea Matsekha',
    album: 'Ke Satla Bua',
    region: 'Africa',
    year: 2009,
    genres: 'Famo, Sotho-Tswana Folk Music',
    url: 'https://rateyourmusic.com/release/album/tau-ea-matsekha/ke-satla-bua/'
  },
  // LIBERIA
  {
    id: 'LR',
    artist: 'Kapingbdi',
    album: 'Born In The Night',
    region: 'Africa',
    year: 2019,
    genres: 'Afro-Jazz, Afrobeat',
    url: 'https://rateyourmusic.com/release/comp/kapingbdi/born-in-the-night/'
  },
  // LIBYA
  {
    id: 'LY',
    artist: 'Hamid El Shaeri',
    album: 'Raheel',
    region: 'Africa',
    year: 1984,
    genres: 'Al Jeel',
    url: 'https://rateyourmusic.com/release/album/%D8%AD%D9%85%D9%8A%D8%AF_%D8%A7%D9%84%D8%B4%D8%A7%D8%B9%D8%B1%D9%8A/raheel/'
  },
  // MADAGASCAR
  {
    id: 'MG',
    artist: 'D\'Gary',
    album: 'Malagasy Guitar: Music From Madagascar',
    region: 'Africa',
    year: 1992,
    genres: 'Malagasy Folk Music',
    url: 'https://rateyourmusic.com/release/album/dgary/malagasy-guitar/'
  },
  // MALAWI
  {
    id: 'MW',
    artist: 'Dick Khoza',
    album: 'Chapita',
    region: 'Africa',
    year: 1976,
    genres: 'Afro-Jazz, Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/dick_khoza/chapita/'
  },
  // MALI
  {
    id: 'ML',
    artist: 'AfroCubism',
    album: 'AfroCubism',
    region: 'Africa',
    year: 2010,
    genres: 'Guajira, Mande Music',
    url: 'https://rateyourmusic.com/release/album/afrocubism/afrocubism/'
  },
  // MAURITANIA
  {
    id: 'MR',
    artist: 'Noura Mint Seymali',
    album: 'Tzenni',
    region: 'Africa',
    year: 2014,
    genres: 'Moorish Music, Tuareg Music',
    url: 'https://rateyourmusic.com/release/album/noura_mint_seymali/tzenni/'
  },
  // MAURITIUS
  {
    id: 'MU',
    artist: 'Kaya',
    album: 'Zistwar Revoltan',
    region: 'Africa',
    year: 2010,
    genres: 'Seggae',
    url: 'https://rateyourmusic.com/release/album/kaya/zistwar-revoltan/'
  },
  // MOROCCO
  {
    id: 'MA',
    artist: 'Kasbah Rockers',
    album: 'Kasbah Rockers with Bill Laswell',
    region: 'Africa',
    year: 2008,
    genres: 'Ethnic Rock',
    url: 'https://rateyourmusic.com/release/album/kasbah-rockers/kasbah-rockers-with-bill-laswell/'
  },
  // MOZAMBIQUE
  {
    id: 'MZ',
    artist: '340ml',
    album: 'Sorry For The Delay',
    region: 'Africa',
    year: 2008,
    genres: 'Dub, Marrabente',
    url: 'https://rateyourmusic.com/release/album/340ml/sorry_for_the_delay/'
  },
  // NAMIBIA
  {
    id: 'NA',
    artist: 'Shishani & The Namibian Tales',
    album: 'Itaala',
    region: 'Africa',
    year: 2016,
    genres: 'Contemporary Folk, Soul',
    url: 'https://rateyourmusic.com/release/album/shishani-and-the-namibian-tales/itaala/'
  },
  // NIGER
  {
    id: 'NE',
    artist: 'Mdou Moctar',
    album: 'Afrique Victim',
    region: 'Africa',
    year: 2021,
    genres: 'Psychedelic Rock, Tishoumaren',
    url: 'https://rateyourmusic.com/release/album/mdou-moctar/afrique-victime/'
  },
  // NIGERIA
  {
    id: 'NG',
    artist: 'Fela Ransome-Kuti & The Africa 70',
    album: 'Confusion',
    region: 'Africa',
    year: 1974,
    genres: 'Afrobeat, Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/fela-ransome-kuti-and-the-africa-70/confusion/'
  },
  // RWANDA
  {
    id: 'RW',
    artist: 'The Good Ones',
    album: 'Rwanda, You Should Be Loved',
    region: 'Africa',
    year: 2019,
    genres: 'African Folk Music, Contemporary Folk',
    url: 'https://rateyourmusic.com/release/album/the-good-ones/rwanda-you-should-be-loved/'
  },
  // SENEGAL
  {
    id: 'SN',
    artist: 'Youssou N\'Dour',
    album: 'Set',
    region: 'Africa',
    year: 1990,
    genres: 'Mbalax',
    url: 'https://rateyourmusic.com/release/album/youssou_ndour/set/'
  },
  // SIERRA LEONE
  {
    id: 'SL',
    artist: 'Afro National',
    album: 'African Experimentals (1972-1979)',
    region: 'Africa',
    year: 2018,
    genres: 'Highlife, Soukous',
    url: 'https://rateyourmusic.com/release/comp/afro-national/african-experimentals-1972-1979/'
  },
  // SOMALIA
  {
    id: 'SO',
    artist: 'Dur-Dur Band',
    album: 'Volume 5',
    region: 'Africa',
    year: 2013,
    genres: 'Funk, Qaraami',
    url: 'https://rateyourmusic.com/release/album/dur-dur-band/volume-5/'
  },
  // SOUTH AFRICA
  {
    id: 'ZA',
    artist: 'Felix Laband',
    album: 'Dark Days Exit',
    region: 'Africa',
    year: 2005,
    genres: 'Downtempo',
    url: 'https://rateyourmusic.com/release/album/felix-laband/dark-days-exit/'
  },
  // SUDAN
  {
    id: 'SD',
    artist: 'Al Agarib',
    album: 'Jazz',
    region: 'Africa',
    year: 1980,
    genres: 'Jazz-Funk',
    url: 'https://rateyourmusic.com/release/album/%D9%81%D8%B1%D9%82%D8%A9-%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A8-%D9%88-%D8%B3%D9%8A%D9%81-%D8%A7%D8%A8%D9%88%D8%A8%D9%83%D8%B1-saif-abu-bakr-w-al-agarib/%D8%A7%D9%84%D8%AC%D8%A7%D8%B2-jazz.p/'
  },
  // TOGO
  {
    id: 'TG',
    artist: 'Akofa Akoussah',
    album: 'Akofa Akoussah',
    region: 'Africa',
    year: 1976,
    genres: 'Chanson, Ewe Music',
    url: 'https://rateyourmusic.com/release/album/akofa-akoussah/akofa-akoussah/'
  },
  // TANZANIA
  {
    id: 'TZ',
    artist: 'Siti Muharam',
    album: 'Siti of Unguja (Romance Revolution on Zanzibar)',
    region: 'Africa',
    year: 2020,
    genres: 'Taraab',
    url: 'https://rateyourmusic.com/release/album/siti-muharam/siti-of-unguja-romance-revolution-on-zanzibar/'
  },
  // TUNISIA
  {
    id: 'TN',
    artist: 'Corinne Allal',
    album: 'Antartica',
    region: 'Africa',
    year: 1989,
    genres: 'Rock',
    url: 'https://rateyourmusic.com/release/album/%D7%A7%D7%95%D7%A8%D7%99%D7%9F-%D7%90%D7%9C%D7%90%D7%9C/antarctica/'
  },
  // UGANDA
  {
    id: 'UG',
    artist: 'Ecko Bazz',
    album: 'Mmaso',
    region: 'Africa',
    year: 2022,
    genres: 'Grime',
    url: 'https://rateyourmusic.com/release/album/ecko-bazz/mmaso/'
  },
  // WESTERN SAHARA
  {
    id: 'EH',
    artist: 'Group Doueh',
    album: 'Zayna Jumma',
    region: 'Africa',
    year: 2011,
    genres: ' Sahrawi Music, Tishoumaren',
    url: 'https://rateyourmusic.com/release/album/group-doueh/zayna-jumma/'
  },
  // ZAMBIA
  {
    id: 'ZM',
    artist: 'Musi-O-Tunya',
    album: 'Give Love To Your Children',
    region: 'Africa',
    year: 1975,
    genres: 'Zamrock',
    url: 'https://rateyourmusic.com/release/album/musi-o-tunya/give-love-to-your-children/'
  },
  // ZIMBABWE
  {
    id: 'ZW',
    artist: 'Dumisani Maraire',
    album: 'The African Mbira: Music of the Shona People of Rhodesia',
    region: 'Africa',
    year: 1971,
    genres: 'Shona Mbira Music',
    url: 'https://rateyourmusic.com/release/album/dumisani-maraire/the-african-mbira-music-of-the-shona-people-of-rhodesia/'
  },
  //#endregion AFRICA

  //#region ASIA
  // AFGHANISTAN
  {
    id: 'AF',
    artist: 'Almach',
    album: 'Battle Of Tours',
    region: 'Asia',
    year: 2020,
    genres: 'Atmospheric Black Metal',
    url: 'https://rateyourmusic.com/release/album/ali-akbar-khan/morning-and-evening-ragas/'
  },
  // BANGLADESH
  {
    id: 'BD',
    artist: 'Ali Akbar Khan',
    album: 'Morning & Evening Ragas',
    region: 'Asia',
    year: 1966,
    genres: 'Hindustani Classical Music',
    url: 'https://rateyourmusic.com/release/album/ali-akbar-khan/morning-and-evening-ragas/'
  },
  // BHUTAN
  {
    id: 'BT',
    artist: 'Sonam Dorji',
    album: 'Music From the Mountains of Bhutan',
    region: 'Asia',
    year: 2014,
    genres: 'Zhabdro Gorgom',
    url: 'https://rateyourmusic.com/release/album/sonam-dorji/music-from-the-mountains-of-bhutan/'
  },
  // CAMBODIA
  {
    id: 'KH',
    artist: 'Dengue Fever',
    album: 'Escape from Dragon House',
    region: 'Asia',
    year: 2005,
    genres: 'Cambodian Pop, Psychedelic Pop',
    url: 'https://rateyourmusic.com/release/album/dengue_fever/escape_from_dragon_house/'
  },
  // CHINA
  {
    id: 'CN',
    artist: 'Enmity',
    album: 'Wuyuan',
    region: 'Asia',
    year: 2005,
    genres: 'Dark Ambient, Ritual Ambient',
    url: 'https://rateyourmusic.com/release/album/%E6%80%A8/%E5%B7%AB%E6%80%A8-wuyuan/'
  },
  // GEORGIA
  {
    id: 'GE',
    artist: 'Sinatlis Tselitsadi',
    album: 'Gza Tsisken',
    region: 'Asia',
    year: 2004,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/%E1%83%A1%E1%83%98%E1%83%9C%E1%83%90%E1%83%97%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%AC%E1%83%94%E1%83%9A%E1%83%98%E1%83%AC%E1%83%90%E1%83%93%E1%83%98/gza-tsisken-sky-way/'
  },
  // INDIA
  {
    id: 'IN',
    artist: 'Rakesh Chaurasia',
    album: 'Purity 3',
    region: 'Asia',
    year: 2004,
    genres: 'Hindustani Classical Music',
    url: 'https://rateyourmusic.com/release/single/rakesh-chaurasia/purity-3/'
  },
  // INDONESIA
  {
    id: 'ID',
    artist: 'Harry Roesli',
    album: 'Titik Api',
    region: 'Asia',
    year: 1976,
    genres: 'Gamelan, Progressive Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/harry-rusli/titik-api/'
  },
  // JAPAN
  {
    id: 'JP',
    artist: 'Koto Ensamble Of The Ikuta School',
    album: 'Japanese Koto Orchestra',
    region: 'Asia',
    year: 1989,
    genres: 'Jiuta, Sōkyoku',
    url: 'https://rateyourmusic.com/release/album/koto-ensemble-of-the-ikuta-school/japanese-koto-orchestra/'
  },
  // KAZAKHSTAN
  {
    id: 'KZ',
    artist: 'Linda',
    album: 'Vorona',
    region: 'Asia',
    year: 1996,
    genres: 'Downtempo, Pop Rock',
    url: 'https://rateyourmusic.com/release/album/%D0%BB%D0%B8%D0%BD%D0%B4%D0%B0/%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%B0/'
  },
  // MALAYSIA
  {
    id: 'MY',
    artist: 'The Strollers',
    album: 'Waiting Is...',
    region: 'Asia',
    year: 1973,
    genres: 'Psychedelic Pop, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/the_strollers_f4/waiting_is___/'
  },
  // MONGOLIA
  {
    id: 'MN',
    artist: 'Hurd',
    album: 'Evirleh Argagvi',
    region: 'Asia',
    year: 2005,
    genres: 'Heavy Metal',
    url: 'https://rateyourmusic.com/release/album/hurd/evirleh_argagvi/'
  },
  // MYANMAR
  {
    id: 'MM',
    artist: 'Kyaw Myo Naing',
    album: 'Pattalar Lat Than Myar',
    region: 'Asia',
    year: 2013,
    genres: 'Burmese Classical Music',
    url: 'https://rateyourmusic.com/release/album/%E1%80%80%E1%80%BB%E1%80%B1%E1%80%AC%E1%80%BA%E1%80%99%E1%80%BB%E1%80%AD%E1%80%AF%E1%80%B8%E1%80%94%E1%80%AD%E1%80%AF%E1%80%84%E1%80%BA/%E1%80%95%E1%80%90%E1%80%B9%E1%80%90%E1%80%9C%E1%80%AC%E1%80%B8%E1%80%9C%E1%80%80%E1%80%BA%E1%80%9E%E1%80%B6%E1%80%99%E1%80%BB%E1%80%AC%E1%80%B8__pattalar_lat_than_myar_/'
  },
  // NORTH KOREA
  {
    id: 'KP',
    artist: 'Akio Suzuki',
    album: '“ m e r i d i a n s c e n e r y “',
    region: 'Asia',
    year: 2021,
    genres: 'Experimental, Field Recordings',
    url: 'https://rateyourmusic.com/release/album/akio-suzuki/m-e-r-i-d-i-a-n-s-c-e-n-e-r-y/'
  },
  // PAKISTAN
  {
    id: 'PK',
    artist: 'Nusrat Fateh Ali Khan',
    album: 'Shahen-Shah',
    region: 'Asia',
    year: 1989,
    genres: 'Qawwali',
    url: 'https://rateyourmusic.com/release/album/nusrat-fateh-ali-khan/shahen-shah/'
  },
  // PHILIPPINES
  {
    id: 'PH',
    artist: 'Nitoy Gonzales and His Manila Rondalla',
    album: 'Tinikling!: Folk Dances of the Philippines',
    region: 'Asia',
    year: 1960,
    genres: 'Philippine Music, Southeast Asian Folk Music',
    url: 'https://rateyourmusic.com/release/album/nitoy-gonzales-and-his-manila-rondalla/tinikling-folk-dances-of-the-philippines/'
  },
  // SOUTH KOREA
  {
    id: 'KR',
    artist: 'Witches',
    album: 'Broomstick',
    region: 'Asia',
    year: 2002,
    genres: 'K-Rock, Ska',
    url: 'https://rateyourmusic.com/artist/witches-1'
  },
  // SRI LANKA
  {
    id: 'LK',
    artist: 'Mustafa Khetty & Morpheus Project',
    album: 'Mozaick',
    region: 'Asia',
    year: 2021,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/mustafa-khetty-and-the-morpheus-project/mosaick/ '
  },
  // TAIWAN
  {
    id: 'TW',
    artist: 'Elephant Gym',
    album: 'Angle',
    region: 'Asia',
    year: 2014,
    genres: 'Math Rock',
    url: 'https://rateyourmusic.com/release/album/%E5%A4%A7%E8%B1%A1%E9%AB%94%E6%93%8D/%E8%A7%92%E5%BA%A6-angle/'
  },
  // THAILAND
  {
    id: 'TH',
    artist: 'Thai Elephant Orchestra',
    album: 'Thai Elephant Orchestra',
    region: 'Asia',
    year: 2000,
    genres: 'Field Recordings, Free Improvisation',
    url: 'https://rateyourmusic.com/release/album/thai-elephant-orchestra-dave-soldier-and-richard-lair/thai-elephant-orchestra/'
  },
  // TURKEY
  {
    id: 'TR',
    artist: 'Erkin Koray',
    album: 'Elektronik Türküler',
    region: 'Asia',
    year: 1974,
    genres: 'Anatolian Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/erkin-koray/elektronik-turkuler/'
  },
  // TURKMENISTAN
  {
    id: 'TM',
    artist: 'Gunesh',
    album: 'Gunesh',
    region: 'Asia',
    year: 1980,
    genres: 'Jazz Fusion',
    url: 'https://rateyourmusic.com/release/album/%D0%B3%D1%83%D0%BD%D0%B5%D1%88/%D0%B3%D1%83%D0%BD%D0%B5%D1%88-gunesh/'
  },
  // UZBEKISTAN
  {
    id: 'UZ',
    artist: 'From.uz',
    album: 'Overlook',
    region: 'Asia',
    year: 2008,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/from_uz/overlook/'
  },
  // VIETNAM
  {
    id: 'VN',
    artist: 'Trịnh Công Sơn',
    album: 'Như Tiếng Thở Dài',
    region: 'Asia',
    year: 1994,
    genres: 'Nhạc Vàng',
    url: 'https://rateyourmusic.com/release/album/tr%E1%BB%8Bnh-cong-son/nh%C6%B0-tieng-tho-dai/'
  },
  //#endregion Asia

  //#region CARIBBEAN
  // BAHAMAS
  {
    id: 'BS',
    artist: 'Exuma',
    album: 'Exuma',
    region: 'Caribbean',
    year: 1970,
    genres: 'Freak Folk, Goombay, Junkanoo',
    url: 'https://rateyourmusic.com/release/album/exuma/exuma/'
  },
  // CUBA
  {
    id: 'CU',
    artist: 'Buena Vista Social Club',
    album: 'Buena Vista Social Club',
    region: 'Caribbean',
    year: 1977,
    genres: 'Bolero, Son Cubano',
    url: 'https://rateyourmusic.com/release/album/buena_vista_social_club/buena_vista_social_club/'
  },
  // DOMINICAN REPUBLIC
  {
    id: 'DO',
    artist: 'Billo\'s Caracas Boys',
    album: 'Comunicando',
    region: 'Caribbean',
    year: 1960,
    genres: 'Guaracha, Merengue, Porro',
    url: 'https://rateyourmusic.com/release/album/billos-caracas-boys/comunicando/'
  },
  // GRENADA
  {
    id: 'GD',
    artist: 'Mighty Sparrow',
    album: 'Hot And Sweet',
    region: 'Caribbean',
    year: 1974,
    genres: 'Calypso',
    url: 'https://rateyourmusic.com/release/album/mighty-sparrow/hot-and-sweet/'
  },
  // HAITI
  {
    id: 'HT',
    artist: 'Jephté Guillaume',
    album: 'Voyage Of Dreams',
    region: 'Caribbean',
    year: 1998,
    genres: 'Méringue, Tribal House',
    url: 'https://rateyourmusic.com/release/album/jephte-guillaume/voyage-of-dreams/'
  },
  // JAMAICA
  {
    id: 'JM',
    artist: 'Dadawah',
    album: 'Peace And Love',
    region: 'Caribbean',
    year: 1974,
    genres: 'Nyahbinghi, Reggae',
    url: 'https://rateyourmusic.com/release/album/dadawah/peace-and-love/'
  },
  // TRINIDAD AND TOBAGO
  {
    id: 'TT',
    artist: 'The Esso Trinidad Steel Band',
    album: 'The Esso Trinidad Steel Band',
    region: 'Caribbean',
    year: 1971,
    genres: 'Calypso',
    url: 'https://rateyourmusic.com/release/album/the-esso-trinidad-steel-band/the-esso-trinidad-steel-band/'
  },
  //#endregion CARIBBEAN

  //#region CENTRAL AMERICA
  // BELIZE
  {
    id: 'BZ',
    artist: 'The Garifuna Collective',
    region: 'Central America',
    album: 'Umalali',
    year: 2008,
    genres: 'Garifuna Folk Music, Punta',
    url: 'https://rateyourmusic.com/release/album/the_garifuna_collective_f1/umalali/'
  },
  // COSTA RICA 
  {
    id: 'CR',
    artist: 'Wings Of Destiny',
    region: 'Central America',
    album: 'Kings Of Terror',
    year: 2016,
    genres: 'Symphonic Power Metal',
    url: 'https://rateyourmusic.com/release/album/wings_of_destiny/kings_of_terror/'
  },
  // EL SALVADOR
  //  {
  //   id: 'SV',
  //   artist: 'Wings Of Destiny',
  //   region: 'Central America',
  //   album: 'Kings Of Terror',
  //   year: 2016,
  //   genres: 'Power Metal, Symphonic Metal',
  //   url: 'https://rateyourmusic.com/release/album/wings_of_destiny/kings_of_terror/',

  // },
  // GUATEMALA
  {
    id: 'GT',
    artist: 'Asimov',
    region: 'Central America',
    album: 'Todo Lo Que Buscamos Es Desaparecer',
    year: 2019,
    genres: 'Dream Pop, Shoegaze',
    url: 'https://rateyourmusic.com/release/album/asimov/todo-lo-que-buscamos-es-desaparecer/'
  },
  // HONDURAS
  {
    id: 'HN',
    artist: 'Guayo Cedeño',
    region: 'Central America',
    album: 'Coco Bar',
    year: 2017,
    genres: 'Caribbean Music, Surf Rock',
    url: 'https://rateyourmusic.com/release/album/guayo-cedeno/coco-bar/'
  },
  // NICARAGUA
  {
    id: 'NI',
    artist: 'Bwana',
    region: 'Central America',
    album: 'Bwana',
    year: 1972,
    genres: 'Guajira, Jazz-Rock, Latin Rock',
    url: 'https://rateyourmusic.com/release/album/bwana/bwana/'
  },
  // PANAMA
  {
    id: 'PA',
    artist: 'Willie Colón & Rubén Blades',
    region: 'Central America',
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
    artist: 'I Tpame I Tvrame',
    album: 'Ikin Vijnë',
    region: 'Europe',
    year: 2018,
    genres: 'Darkwave, Minimal Synth',
    url: 'https://rateyourmusic.com/release/album/i-tpame-i-tvrame/ikin-vijne/'
  },
  // ANDORRA
  {
    id: 'AD',
    artist: 'Persefone',
    album: 'Shin-ken',
    region: 'Central America',
    year: 2009,
    genres: 'Melodic Death Metal, Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/persefone/shin_ken/'
  },
  // ARMENIA
  {
    id: 'AM',
    artist: 'Tigran Hamasyan',
    album: 'Red Hail',
    region: 'Europe',
    year: 2009,
    genres: 'Armenian Folk Music, Avant-garde Jazz',
    url: 'https://rateyourmusic.com/release/album/tigran-hamasyan/red-hail/'
  },
  // AUSTRIA
  {
    id: 'AT',
    artist: 'Zero Kama',
    album: 'The Secret Eye of L.A.Y.L.A.H.',
    region: 'Europe',
    year: 1984,
    genres: 'Ritual Ambient, Tribal Ambient',
    url: 'https://rateyourmusic.com/release/album/zero-kama/the-secret-eye-of-l_a_y_l_a_h/'
  },
  // BELARUS
  {
    id: 'BY',
    artist: 'Molchat Doma',
    album: 'Etazhi',
    region: 'Europe',
    year: 2018,
    genres: 'Coldwave, Post-Punk',
    url: 'https://rateyourmusic.com/release/album/%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D1%82-%D0%B4%D0%BE%D0%BC%D0%B0/%D1%8D%D1%82%D0%B0%D0%B6%D0%B8-etazhi/'
  },
  // BELGIUM
  {
    id: 'BE',
    artist: 'Ghinzu',
    album: 'Blow',
    region: 'Europe',
    year: 2004,
    genres: 'Alternative Rock, Art Rock',
    url: 'https://rateyourmusic.com/release/album/ghinzu/blow/'
  },
  // BOSNIA-HERZEGOVINA
  {
    id: 'BA',
    artist: 'Goran Bregović',
    album: 'Arizona Dream',
    region: 'Europe',
    year: 1993,
    genres: 'Balkan Folk Music, Film Score',
    url: 'https://rateyourmusic.com/release/album/goran-bregovic/arizona-dream/'
  },
  // BULGARIA
  {
    id: 'BG',
    artist: 'Борис Гуджунов',
    album: 'Борис Гуджунов',
    region: 'Europe',
    year: 1978,
    genres: 'Pop, Soviet Estrada',
    url: 'https://rateyourmusic.com/release/album/%D0%B1%D0%BE%D1%80%D0%B8%D1%81-%D0%B3%D1%83%D0%B4%D0%B6%D1%83%D0%BD%D0%BE%D0%B2/%D0%B1%D0%BE%D1%80%D0%B8%D1%81-%D0%B3%D1%83%D0%B4%D0%B6%D1%83%D0%BD%D0%BE%D0%B2/'
  },
  // CZECHIA
  {
    id: 'CZ',
    artist: 'Flamengo',
    album: 'Kuře v hodinkách',
    region: 'Europe',
    year: 1972,
    genres: 'Jazz-Rock, Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/flamengo/kure-v-hodinkach/'
  },
  // CROATIA
  {
    id: 'HR',
    artist: 'KOKTELSI',
    album: 'Rsaaaj !!!',
    region: 'Europe',
    year: 2006,
    genres: 'Balkan Folk Music, Polka',
    url: 'https://rateyourmusic.com/release/album/koktelsi/rsaaaj-/'
  },
  // CYPRUS
  {
    id: 'CY',
    artist: 'Arrayan Path',
    album: 'IV: Stigmata',
    region: 'Europe',
    year: 2013,
    genres: 'Heavy Metal, Symphonic Power Metal',
    url: 'https://rateyourmusic.com/release/album/koktelsi/rsaaaj-/'
  },
  // DENMARK
  {
    id: 'DK',
    artist: 'Kongehuset',
    album: '...Klarer Ærterne',
    region: 'Europe',
    year: 1996,
    genres: 'Hip-Hop',
    url: 'https://rateyourmusic.com/release/album/kongehuset/___klarer_aerterne/'
  },
  // ESTONIA
  {
    id: 'EE',
    artist: 'Marju Kuut / Uno Loop',
    album: 'Marju Kuut / Uno Loop',
    region: 'Europe',
    year: 1971,
    genres: 'Bossanova',
    url: 'https://rateyourmusic.com/release/album/%D0%BC%D0%B0%D1%80%D1%8C%D1%8E_%D0%BA%D1%83%D1%83%D1%82___%D1%83%D0%BD%D0%BE_%D0%BB%D0%BE%D0%BE%D0%BF/%D0%BC%D0%B0%D1%80%D1%8C%D1%8E_%D0%BA%D1%83%D1%83%D1%82___%D1%83%D0%BD%D0%BE_%D0%BB%D0%BE%D0%BE%D0%BF/'
  },
  // FAROE ISLANDS
  {
    id: 'FO',
    artist: 'Heljareyga',
    album: 'Heljareyga',
    region: 'Europe',
    year: 2010,
    genres: 'Power Metal, Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/heljareyga/heljareyga/'
  },
  // FINLAND
  {
    id: 'FI',
    artist: 'Korpiklaani',
    album: 'Noita',
    region: 'Europe',
    year: 2015,
    genres: 'Folk Metal',
    url: 'https://rateyourmusic.com/release/album/korpiklaani/noita/'
  },
  // FRANCE
  {
    id: 'FR',
    artist: 'Eliane Radigue',
    album: 'Trilogie De La Mort',
    region: 'Europe',
    year: 1998,
    genres: 'Drone',
    url: 'https://rateyourmusic.com/release/album/eliane-radigue/trilogie-de-la-mort/'
  },
  // GERMANY
  {
    id: 'DE',
    artist: 'Haggard',
    album: 'Eppur Si Muove',
    region: 'Europe',
    year: 2004,
    genres: 'Renaissance Music, Symphonic Metal',
    url: 'https://rateyourmusic.com/release/album/haggard/eppur_si_muove/'
  },
  // GREECE
  {
    id: 'GR',
    artist: 'Rotting Christ',
    album: 'Triarchy Of The Lost Lovers',
    region: 'Europe',
    year: 1996,
    genres: 'Melodic Black Metal',
    url: 'https://rateyourmusic.com/release/album/rotting_christ/triarchy_of_the_lost_lovers/'
  },
  // HUNGARY
  {
    id: 'HU',
    artist: 'Tamás Kátai',
    album: 'Erika Szobája',
    region: 'Europe',
    year: 2006,
    genres: 'Dark Folk, Neoclassical Darkwave',
    url: 'https://rateyourmusic.com/release/album/tamas_katai/erika_szobaja/'
  },
  // ICELAND
  {
    id: 'IS',
    artist: 'NYIÞ',
    album: 'Til Eru Hræ Sem Hafa Aldrei Verið Menn Og Munu Aldrei Verða Þó Þau Lifi Enn',
    region: 'Europe',
    year: 2011,
    genres: 'Avant-garde Jazz, Dark Ambient',
    url: 'https://rateyourmusic.com/release/album/nyi_/til_eru_hrae_sem_hafa_aldrei_verid_menn_og_munu_aldrei_verda_do_dau_lifi_enn/'
  },
  // IRELAND
  {
    id: 'IE',
    artist: 'My Bloody Valentine',
    album: 'Loveless',
    region: 'Europe',
    year: 1991,
    genres: 'Noise pop, Shoegaze',
    url: 'https://rateyourmusic.com/release/album/my-bloody-valentine/loveless/'
  },
  // ITALY
  {
    id: 'IT',
    artist: 'Il Bacio Della Medusa',
    album: 'Discesa Agl\'Inferi D\'Un Giovane Amante',
    region: 'Europe',
    year: 2008,
    genres: 'Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/il-bacio-della-medusa/discesa-aglinferi-dun-giovane-amante/'
  },
  // KOSOVO
  {
    id: 'XK',
    artist: 'Popečitelji',
    album: 'Ko Radi?',
    region: 'Europe',
    year: 2004,
    genres: 'Funk Rock, Macedonian Folk Music, Math Rock',
    url: 'https://rateyourmusic.com/release/album/popecitelji/ko-radi/'
  },
  // LATVIA
  {
    id: 'LV',
    artist: 'Tautumeitas',
    album: 'Tautumeitas',
    region: 'Europe',
    year: 2018,
    genres: 'Latvian Folk Music',
    url: 'https://rateyourmusic.com/release/album/tautumeitas/tautumeitas/'
  },
  // LITHUANIA
  {
    id: 'LT',
    artist: 'Gyvata',
    album: 'Su Vėjužiu Kalbėjau',
    region: 'Europe',
    year: 2012,
    genres: 'Lithuanina Folk Music, Neofolk',
    url: 'https://rateyourmusic.com/release/album/gyvata/su-vejuziu-kalbejau/'
  },
  // LUXEMBOURG
  {
    id: 'LU',
    artist: 'ROME',
    album: 'Flowers From Exile',
    region: 'Europe',
    year: 2009,
    genres: 'Martial Industrial, Neofolk',
    url: 'https://rateyourmusic.com/release/album/rome/flowers-from-exile/'
  },
  // MACEDONIA
  {
    id: 'MK',
    artist: 'Aporea',
    album: 'Na Rekakh Vavilonskikh',
    region: 'Europe',
    year: 1988,
    genres: 'Christian Liturgical Music, Ritual Ambient',
    url: 'https://rateyourmusic.com/release/ep/%D0%B0%D0%BF%D0%BE%D1%80%D1%94%D0%B0/%D0%BD%D0%B0-%D1%80%D1%94%D0%BA%D0%B0%D1%85%D1%8A-%D0%B2%D0%B0%D0%B2%D0%BB%D2%83%D0%BD%D1%81%D0%BA%D1%8B%D1%85%D1%8A-na-rekakh-vavilonskikh/'
  },
  // MALTA
  {
    id: 'MT',
    artist: 'JOON',
    album: 'Dream Again',
    region: 'Europe',
    year: 2021,
    genres: 'Synth-pop, Space Disco',
    url: 'https://rateyourmusic.com/release/album/joon/dream-again/'
  },
  // MOLDOVA
  {
    id: 'MD',
    artist: 'Zdob şi Zdub',
    album: 'Tabăra Noastra',
    region: 'Europe',
    year: 1999,
    genres: 'Folk Punk, Gypsy Punk',
    url: 'https://rateyourmusic.com/release/album/zdob-si-zdub/tabara-noastra/'
  },
  // MONACO
  {
    id: 'MC',
    artist: 'Hardcore Anal Hydrogen',
    album: 'HyperCut',
    region: 'Europe',
    year: 2018,
    genres: 'Avant-Garde Metal, Digital Hardcore',
    url: 'https://rateyourmusic.com/release/album/hah/hypercut/'
  },
  // MONTENEGRO
  {
    id: 'ME',
    artist: 'Janko Nilovic (as E. Orti)',
    album: 'Soul Impressions',
    region: 'Europe',
    year: 1975,
    genres: 'Jazz-Funk, Soul Jazz',
    url: 'https://rateyourmusic.com/release/album/e-orti/soul-impressions/'
  },
  // NETHERLANDS
  {
    id: 'NL',
    artist: 'YĪN YĪN',
    album: 'The Rabbit That Hunts Tigers',
    region: 'Europe',
    year: 2019,
    genres: 'Chinese Folk Music, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/yin-yin/the-rabbit-that-hunts-tigers/'
  },
  // NORWAY
  {
    id: 'NO',
    artist: 'Wardruna',
    album: 'Runaljod - Gap Var Ginnunga',
    region: 'Europe',
    year: 2009,
    genres: 'Dark Folk, Neo-Pagan Folk',
    url: 'https://rateyourmusic.com/release/album/wardruna/runaljod-%E2%80%93-gap-var-ginnunga/'
  },
  // POLAND
  {
    id: 'PL',
    artist: 'Żywiołak',
    album: 'Nowa Ex-Tradycja',
    region: 'Europe',
    year: 2008,
    genres: 'Neo-Pagan Folk',
    url: 'https://rateyourmusic.com/release/album/zywiolak/nowa-ex-tradycja/'
  },
  // PORTUGAL
  {
    id: 'PT',
    artist: 'Fatigado',
    album: 'Sanzala',
    region: 'Europe',
    year: 2017,
    genres: 'Afro House, Batida, Kizomba, Kuduro',
    url: 'https://rateyourmusic.com/release/album/fatigado/sanzala/'
  },
  // ROMANIA
  {
    id: 'RO',
    artist: 'Sunset In The 12th House',
    album: 'Mozaic',
    region: 'Europe',
    year: 2015,
    genres: 'Post-Rock, Post-Metal',
    url: 'https://rateyourmusic.com/release/album/sunset_in_the_12th_house/mozaic/'
  },
  // RUSSIA
  {
    id: 'RU',
    artist: 'Kauan',
    album: 'Sorni Nai',
    region: 'Europe',
    year: 2015,
    genres: 'Post-Metal, Post-Rock',
    url: 'https://rateyourmusic.com/release/album/kauan/sorni-nai/'
  },
  // SAN MARINO
  {
    id: 'SM',
    artist: 'Alessandro Arzilli',
    album: 'Musa',
    region: 'Europe',
    year: 2019,
    genres: 'Progressive Metal',
    url: 'https://rateyourmusic.com/release/album/alessandro-arzilli/musa/'
  },
  // SERBIA
  {
    id: 'RS',
    artist: 'Darkwood Dub',
    album: 'Elektro Pionir',
    region: 'Europe',
    year: 1999,
    genres: 'Dub, Art Rock',
    url: 'https://rateyourmusic.com/release/album/darkwood-dub/elektro-pionir/'
  },
  // SLOVAKIA
  {
    id: 'SK',
    artist: 'Komara',
    album: 'Komara',
    region: 'Europe',
    year: 2015,
    genres: 'Avant-prog, Dark Jazz',
    url: 'https://rateyourmusic.com/release/album/komara/komara/'
  },
  // SLOVENIA
  {
    id: 'SI',
    artist: 'Gramatik',
    album: 'Coffee Shop Selection',
    region: 'Europe',
    year: 2015,
    genres: 'Instrumental Hip-Hop',
    url: 'https://rateyourmusic.com/release/comp/gramatik/coffee-shop-selection/'
  },
  // SPAIN
  {
    id: 'ES',
    artist: 'Ska-P',
    album: '99%',
    region: 'Europe',
    year: 2013,
    genres: 'Ska Punk',
    url: 'https://rateyourmusic.com/release/album/ska-p/99/'
  },
  // SWEDEN
  {
    id: 'SE',
    artist: 'Detektivbyrån',
    album: 'Wermland',
    region: 'Europe',
    year: 2008,
    genres: 'Folktronica',
    url: 'https://rateyourmusic.com/release/album/detektivbyran/wermland/'
  },
  // SWITZERLAND
  {
    id: 'CH',
    artist: 'Eluveitie',
    album: 'Evocation I - The Arcane Dominion',
    region: 'Europe',
    year: 2009,
    genres: 'Celtic Folk Music',
    url: 'https://rateyourmusic.com/release/album/eluveitie/evocation-i-the-arcane-dominion/'
  },
  // UKRAINE
  {
    id: 'UA',
    artist: 'DakhaBrakha',
    album: 'Alambari',
    region: 'Europe',
    year: 2020,
    genres: 'Cabaret, Folk Pop, Ukrainian Folk Music',
    url: 'https://rateyourmusic.com/release/album/%D0%B4%D0%B0%D1%85%D0%B0%D0%B1%D1%80%D0%B0%D1%85%D0%B0/alambari/'
  },
  // UNITED KINGDOM
  {
    id: 'GB',
    artist: 'Skream',
    album: 'Skream!',
    region: 'Europe',
    year: 2006,
    genres: 'Dubstep',
    url: 'https://rateyourmusic.com/release/album/skream/skream/'
  },
  // VATICAN CITY
  {
    id: 'VA',
    artist: 'Cappella Musicale Pontificia Sistina',
    album: 'Cantate Domino',
    region: 'Europe',
    year: 2015,
    genres: 'Christian Liturgical Music, Renaissance Music',
    url: 'https://rateyourmusic.com/release/album/cappella_musicale_pontificia_sistina_massimo_palombella/cantate_domino/'
  },
  //#endregion EUROPE

  //#region MIDDLE EAST
  // ISRAEL
  {
    id: 'IL',
    artist: 'Infected Mushroom',
    album: 'Legend Of The Black Shawarma',
    region: 'Middle East',
    year: 2009,
    genres: 'Psytrance',
    url: 'https://rateyourmusic.com/release/album/infected-mushroom/legend-of-the-black-shawarma/'
  },
  // IRAN
  {
    id: 'IR',
    artist: 'Shahram Shabpareh',
    album: 'Ey Ghashangtar Az Paria',
    region: 'Middle East',
    year: 1994,
    genres: 'Persian Pop',
    url: 'https://rateyourmusic.com/release/album/%D8%B4%D9%87%D8%B1%D8%A7%D9%85-shahram/%D8%A7%D9%89-%D9%82%D8%B4%D9%86%DA%AF-%D8%AA%D8%B1-%D8%A7%D8%B2-%D9%BE%D8%B1%D9%8A%D8%A7-ey-ghashangtar-az-paria/'
  },
  // LEBANON
  {
    id: 'LB',
    artist: 'Rabih Abou-Khalil',
    album: 'Blue Camel',
    region: 'Middle East',
    year: 1992,
    genres: 'Arabic Jazz',
    url: 'https://rateyourmusic.com/release/album/rabih-abou-khalil/blue-camel/'
  },
  // OMAN
  {
    id: 'OM',
    artist: 'Lamya',
    album: 'Learning From Falling',
    region: 'Middle East',
    year: 2002,
    genres: 'Neo-Soul, Pop',
    url: 'https://rateyourmusic.com/release/album/lamya/learning-from-falling-1/'
  },
  // SAUDI ARABIA
  {
    id: 'SA',
    artist: 'Mahmoud Awad',
    album: 'Sheikh To The F.U.T.U.R.E',
    region: 'Middle East',
    year: 2009,
    genres: 'Dabke, Experimental, Neo-Psychedelia',
    url: 'https://rateyourmusic.com/release/album/mahmoud-awad/sheikh-to-the-f_u_t_u_r_e/'
  },
  // YEMEN
  {
    id: 'YE',
    artist: 'Margalit Ankory',
    album: 'Travel With Me My Dove and Listen to Me!: Songs of the Middle East',
    region: 'Middle East',
    year: 1976,
    genres: 'Arabic Folk Music, Spoken Word',
    url: 'https://rateyourmusic.com/release/album/margalit-ankory/travel-with-me-my-dove-and-listen-to-me-songs-of-the-middle-east/'
  },
  //#endregion MIDDLE EAST

  //#region NORTH AMERICA
  // BERMUDA
  {
    id: 'BM',
    artist: 'Alan Silva and his Celestrial Communication Orchestra',
    album: 'Luna Surface',
    region: 'North America',
    year: 1969,
    genres: 'Free Jazz',
    url: 'https://rateyourmusic.com/release/album/alan-silva-and-his-celestrial-communication-orchestra/luna-surface/'
  },
  // CANADA
  {
    id: 'CA',
    artist: 'Venetian Snares',
    album: 'Rossz Csillag Alatt Született',
    region: 'North America',
    year: 2005,
    genres: 'Breakcore, Modern Classical',
    url: 'https://rateyourmusic.com/release/album/venetian-snares/rossz-csillag-alatt-szuletett/'
  },
  // GREENLAND
  {
    id: 'GL',
    artist: 'Sume',
    album: 'Sumut',
    region: 'North America',
    year: 1973,
    genres: 'Progressive Rock, Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/sume/sumut/'
  },
  // MEXICO
  {
    id: 'MX',
    artist: 'Santana',
    album: 'Abraxas',
    region: 'North America',
    year: 1970,
    genres: 'Latin Rock',
    url: 'https://rateyourmusic.com/release/album/santana/abraxas/'
  },
  // SAINT PIERRE AND MIQUELON
  {
    id: 'PM',
    artist: 'Dode',
    album: 'Dode',
    region: 'North America',
    year: 2009,
    genres: 'Alternative Rock, Chanson',
    url: 'https://rateyourmusic.com/release/album/dode/dode/'
  },
  // USA
  {
    id: 'US',
    artist: 'Mr. Bungle',
    album: 'Mr. Bungle',
    region: 'North America',
    year: 1991,
    genres: 'Avant-garde Metal, Experimental Rock',
    url: 'https://rateyourmusic.com/release/album/mr-bungle/mr-bungle/'
  },
  //#endregion NORTH AMERICA

  //#region OCEANIA
  // AUSTRALIA
  {
    id: 'AU',
    artist: 'Dead Can Dance',
    album: 'Dionysus',
    region: 'Oceania',
    year: 2018,
    genres: 'Neoclassical New Age, Tribal Ambient',
    url: 'https://rateyourmusic.com/release/album/dead-can-dance/dionysus/'
  },
  // FIJI
  {
    id: 'FJ',
    artist: 'Mantis',
    album: 'Turn Onto Music',
    region: 'Oceania',
    year: 1973,
    genres: 'Funk Rock,	Psychedelic Rock',
    url: 'https://rateyourmusic.com/release/album/mantis/turn-onto-music/'
  },
  // NEW ZEALAND
  {
    id: 'NZ',
    artist: 'David Parsons',
    album: 'Shaman',
    region: 'Oceania',
    year: 1999,
    genres: 'Ambient',
    url: 'https://rateyourmusic.com/release/album/david_parsons/shaman/'
  },
  // PAPUA NEW GUINEA
  {
    id: 'PG',
    artist: '	Papua New Guinea Stringbands with Bob Brozman',
    album: 'Songs Of The Volcano',
    region: 'Oceania',
    year: 2005,
    genres: 'Papuan Folk Music, Slack-Key Guitar',
    url: 'https://rateyourmusic.com/release/album/papua-new-guinea-stringbands-with-bob-brozman/songs-of-the-volcano/'
  },
  // SAMOA
  {
    id: 'WS',
    artist: 'The Samoan Surfriders',
    album: 'Let Me Hear You Whisper',
    region: 'Oceania',
    year: 1964,
    genres: 'Polynesian Music',
    url: 'https://rateyourmusic.com/release/album/the-samoan-surfriders/let-me-hear-you-whisper/'
  },
  //#endregion OCEANIA

  //#region SOUTH AMERICA
  // ARGENTINA
  {
    id: 'AR',
    artist: 'Bajofondo',
    album: 'Mar Dulce',
    region: 'South America',
    year: 2007,
    genres: 'Electrotango',
    url: 'https://rateyourmusic.com/release/album/bajofondo/mar-dulce/'
  },
  // BOLIVIA
  {
    id: 'BO',
    artist: 'Gato Diablo',
    album: 'La Importancia De Tener Un Cuerpo',
    region: 'South America',
    year: 2012,
    genres: 'Deathrock, Post-Punk, Synthwave',
    url: 'https://rateyourmusic.com/release/album/gato-diablo/la-importancia-de-tener-un-cuerpo/'
  },
  // BRASIL
  {
    id: 'BR',
    artist: 'Pedro Santos',
    album: 'Krishnanda',
    region: 'South America',
    year: 1968,
    genres: 'Música Popular Brasileira, Psychedelic Folk',
    url: 'https://rateyourmusic.com/release/album/pedro_santos/krishnanda/'
  },
  // CHILE
  {
    id: 'CL',
    artist: 'Los Jaivas',
    album: 'Los Jaivas',
    region: 'South America',
    year: 1975,
    genres: 'Andean Rock, Progressive Rock',
    url: 'https://rateyourmusic.com/release/album/los-jaivas/los-jaivas-el-indio/'
  },
  // COLOMBIA
  {
    id: 'CO',
    artist: 'Quantic & His Combo Bárbaro',
    album: 'Tradition in Transition',
    region: 'South America',
    year: 2009,
    genres: 'Latin Jazz, Mambo, Salsa',
    url: 'https://rateyourmusic.com/release/album/quantic-and-his-combo-barbaro/tradition-in-transition/'
  },
  // ECUADOR
  {
    id: 'EC',
    artist: 'Nicola Cruz',
    album: 'Prender El Alma',
    region: 'South America',
    year: 2015,
    genres: 'Downtempo, Latin Electronic',
    url: 'https://rateyourmusic.com/release/album/nicola-cruz/prender-el-alma/'
  },
  // FALKLAND ISLANDS
  {
    id: 'FK',
    artist: 'Bloodrust',
    album: 'A Legacy Of Vengeance',
    region: 'South America',
    year: 2021,
    genres: 'Death Metal',
    url: 'https://rateyourmusic.com/release/album/bloodrust/a-legacy-of-vengeance/'
  },
  // FRENCH GUIANA
  {
    id: 'GF',
    artist: 'Henri Salvador',
    album: 'Chambre Avec Vue',
    region: 'South America',
    year: 2000,
    genres: 'Bossa Nova, Chanson',
    url: 'https://rateyourmusic.com/release/album/henri_salvador/chambre_avec_vue/'
  },
  // GUYANA
  {
    id: 'GY',
    artist: 'Cameron',
    album: 'Cameron',
    region: 'South America',
    year: 1980,
    genres: 'Disco, Funk',
    url: 'https://rateyourmusic.com/release/album/cameron/cameron/'
  },
  // PARAGUAY
  {
    id: 'PY',
    artist: 'EEEKS',
    album: 'Pet City',
    region: 'South America',
    year: 2017,
    genres: 'Indie Pop, Psychedelic Pop',
    url: 'https://rateyourmusic.com/release/album/eeeks/pet-city/'
  },
  // PERU
  {
    id: 'PE',
    artist: 'Yma Súmac',
    album: 'Mambo!',
    region: 'South America',
    year: 1954,
    genres: 'Exotica, Mambo',
    url: 'https://rateyourmusic.com/release/album/yma-sumac/mambo/'
  },
  // SURINAME
  {
    id: 'SR',
    artist: 'Lieve Hugo',
    album: 'King of Kasèko',
    region: 'South America',
    year: 1974,
    genres: 'Kaseko, Mambo',
    url: 'https://rateyourmusic.com/release/album/lieve-hugo/king-of-kaseko/'
  },
  // URUGUAY
  {
    id: 'UY',
    artist: 'Conjunto Casino de Uruguay',
    album: 'Que Golazo',
    region: 'South America',
    year: 1976,
    genres: 'Guaracha, Plena, Salsa',
    url: 'https://rateyourmusic.com/release/album/conjunto-casino/que-golazo/'
  },
  // VENEZUELA
  {
    id: 'VE',
    artist: 'Simón Díaz',
    album: 'Sus Grandes Exitos',
    region: 'South America',
    year: 1989,
    genres: 'Joropo, Hispanic American Folk Music',
    url: 'https://rateyourmusic.com/release/comp/simon_diaz/sus_grandes_exitos/'
  }
  //#endregion SOUTH AMERICA
]
