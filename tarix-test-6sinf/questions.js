/**
 * 6-SINF QADIMGI DUNYO TARIXI - TEST SAVOLLARI BAZASI
 * O'zbekiston Respublikasi Xalq ta'limi vazirligi (hozirgi Maktabgacha va maktab ta'limi vazirligi)
 * tomonidan tasdiqlangan 2022-yilgi darslik (Mualliflar: A.S. Sagdullayev, V.A. Kostetskiy va b.)
 * standartlari va mundarijasi asosida tuzilgan.
 * 
 * Barcha savollar 5 ta asosiy bo'lim bo'yicha taqsimlangan va tekshirilgan (isVerified: true).
 */

const HISTORY_SECTIONS = [
  {
    id: 1,
    name: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    shortName: "Ibtidoiy jamoa va sivilizatsiya",
    description: "Tosh, eneolit, bronza va temir davrlari. O'zbekiston hududidagi ilk odamlar manzilgohlari (Selung'ur, Teshiktosh, Zamonbobo, Sopollitepa, Jarqo'ton).",
    icon: "🏺"
  },
  {
    id: 2,
    name: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    shortName: "Qadimgi Sharq davlatlari",
    description: "Qadimgi Misr, Mesopotamiya, Bobil (Hammurapi qonunlari), Hindiston, Xitoy va Zardushtiylik ta'limoti ('Avesto').",
    icon: "🏛️"
  },
  {
    id: 3,
    name: "III Bo'lim. Qadimgi Yunoniston",
    shortName: "Qadimgi Yunoniston",
    description: "Krit-Miken madaniyati, Afina va Sparta, Yunon-fors urushlari, Yunon madaniyati, fani va Olimpiada o'yinlari.",
    icon: "⚡"
  },
  {
    id: 4,
    name: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    shortName: "Qadimgi O'rta Osiyo davlatlari",
    description: "Kir II va To'maris, Shiroq jasorati, Aleksandr Makedonskiy yurishlari, Spitamen, Salavkiylar, Yunon-Baqtriya, Qang', Davan va Kushon davlati.",
    icon: "⚔️"
  },
  {
    id: 5,
    name: "V Bo'lim. Qadimgi Rim",
    shortName: "Qadimgi Rim",
    description: "Rim shahrining tashkil topishi, Rim Respublikasi, Puni urushlari, Spartak qo'zg'oloni, Yuliy Sezar, Imperiya davri va G'arbiy Rimning qulashi.",
    icon: "🛡️"
  }
];

const QUESTIONS_DATABASE = [
  // ==========================================
  // I BO'LIM: ENG QADIMGI TUZUMDAN SIVILIZATSIYA SARI
  // ==========================================
  {
    id: 101,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Eng qadimgi odamlarning rivojlanish bosqichlari",
    question: "O'zbekiston hududidan topilgan eng qadimgi odam qoldiqlari - neandertal bolaning bosh suyagi qaysi g'ordan topilgan?",
    options: [
      "Teshiktosh g'oridan (Surxondaryo)",
      "Selung'ur g'oridan (Farg'ona)",
      "Obirahmat g'oridan (Toshkent)",
      "Machay g'oridan (Boysun)"
    ],
    correct: 0,
    explanation: "Surxondaryo viloyatining Boysun tog'laridagi Teshiktosh g'oridan 1938-yilda arxeolog A.P. Okladnikov tomonidan 8-9 yoshli neandertal bolaning bosh suyagi va suyak qoldiqlari topilgan.",
    isVerified: true
  },
  {
    id: 102,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Paleolit davri",
    question: "Farg'ona vodiysida joylashgan va O'rta Osiyodagi eng qadimgi odamlar yashagan manzilgohlardan biri qaysi?",
    options: [
      "Selung'ur g'ori",
      "Zarautsoy",
      "Kaltaminor",
      "Zamonbobo"
    ],
    correct: 0,
    explanation: "Farg'ona vodiysining So'x daryosi yaqinidagi Selung'ur g'oridan ilk paleolit davriga oid tosh qurollar va qadimgi odam tishlari topilgan bo'lib, ular 'fergantrop' deb atalgan.",
    isVerified: true
  },
  {
    id: 103,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Mezolit davri",
    question: "Mezolit (o'rta tosh davri) davrining eng muhim texnik kashfiyoti nima edi?",
    options: [
      "Kamon va o'qning ixtiro qilinishi",
      "Kulolchilik charxining yaratilishi",
      "Dastlabki temir qurollarning yasalishi",
      "G'ildirakli aravalarning paydo bo'lishi"
    ],
    correct: 0,
    explanation: "Mezolit davrida (miloddan avvalgi XII-VII ming yilliklar) kamon va o'q ixtiro qilindi. Bu insonlarga yovvoyi hayvonlarni uzoq masofadan ovlash imkoniyatini berdi.",
    isVerified: true
  },
  {
    id: 104,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Qadimgi san'at",
    question: "Surxondaryo viloyatidagi Zarautsoy qoyatosh rasmlarida asosan nimalar tasvirlangan?",
    options: [
      "Yovvoyi buqalar va itlar yordamida ov qilish sahnalari",
      "Daryoda kema haydash manzaralari",
      "Qadimgi jangchilarning qal'a qamali",
      "Ibtidoiy odamlarning kulolchilik bilan shug'ullanishi"
    ],
    correct: 0,
    explanation: "Zarautsoy qoyatosh rasmlari (mezolit va neolit davrlari) O'rta Osiyo ibtidoiy tasviriy san'atining nodir yodgorligi bo'lib, unda qizil oxra bilan ovchilar, o'q-yoy, itlar va yovvoyi buqalar aks ettirilgan.",
    isVerified: true
  },
  {
    id: 105,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Neolit davri",
    question: "'Neolit inqilobi' iborasi tarixdagi qanday tub burilishni anglatadi?",
    options: [
      "O'zlashtiruvchi xo'jalikdan ishlab chiqaruvchi xo'jalikka (dehqonchilik va chorvachilikka) o'tishni",
      "Birinchi yozuv tizimining kashf etilishini",
      "Odamlarning temir qurollardan foydalana boshlashini",
      "Yirik quldorlik davlatlarining vujudga kelishini"
    ],
    correct: 0,
    explanation: "Neolit davrida insoniyat tabiat bergan tayyor ne'matlarni shunchaki terib-yeyishdan (o'zlashtiruvchi) yer haydash va chorva boqish orqali noz-ne'mat yaratishga (ishlab chiqaruvchi) o'tdi. Bu tarixda 'Neolit inqilobi' deb ataladi.",
    isVerified: true
  },
  {
    id: 106,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Bronza davri yodgorliklari",
    question: "O'zbekiston hududidagi eng qadimiy shahar alomatlariga ega bo'lgan ilk shahar-manzilgoh va olov ibodatxonasi qaysi yodgorlikdan topilgan?",
    options: [
      "Jarqo'ton (Surxondaryo)",
      "Zamonbobo (Buxoro)",
      "Joytun (Turkmaniston)",
      "Qo'yqirilganqal'a (Xorazm)"
    ],
    correct: 0,
    explanation: "Surxondaryo viloyatining Sherobod tumanida joylashgan Jarqo'ton manzilgohi bronza davriga oid bo'lib, u yerda O'zbekiston hududidagi eng qadimgi olov ibodatxonasi, hukmdor saroyi va shaharsozlik belgilari aniqlangan.",
    isVerified: true
  },
  {
    id: 107,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Bronza davri madaniyati",
    question: "Bronza qanday metallarning qotishmasidan hosil qilingan?",
    options: [
      "Mis va qalay",
      "Temir va kumush",
      "Oltin va qo'rg'oshin",
      "Mis va rux"
    ],
    correct: 0,
    explanation: "Bronza - mis bilan qalayning (ba'zan qo'rg'oshin yoki margimush bilan) qotishmasidir. Bronza sof misga qaraganda ancha qattiq va erish harorati past bo'lgani sababli qurol-yarog' va asboblar uchun qulay bo'lgan.",
    isVerified: true
  },
  {
    id: 108,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Eneolit davri",
    question: "Buxoro viloyatidagi Zamonbobo yodgorligi qaysi davr madaniyatiga mansub?",
    options: [
      "Eneolit va ilk bronza davriga",
      "Ilk temir davriga",
      "Paleolit davriga",
      "Yunon-Baqtriya davriga"
    ],
    correct: 0,
    explanation: "Zamonbobo ko'li yaqinidagi manzilgoh va qabriston eneolit (mis-tosh davri) hamda ilk bronza davriga oid bo'lib, bu yerdagi aholi dehqonchilik va chorvachilik bilan shug'ullangan.",
    isVerified: true
  },
  {
    id: 109,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Urug'chilik jamiyati",
    question: "Onaxonlik (matriarxat) davridan otaxonlik (patriarxat) davriga o'tish qaysi omil bilan bevosita bog'liq?",
    options: [
      "Og'ir mehnat talab qiladigan metall eritish, omochli dehqonchilik va chorvachilikda erkaklar rolining ortishi bilan",
      "Yozuv paydo bo'lishi bilan",
      "Odamlarning g'orlardan qamish kulbalarga ko'chishi bilan",
      "Diniy e'tiqodlarning butunlay yo'qolishi bilan"
    ],
    correct: 0,
    explanation: "Eneolit va bronza davrida og'ir metall qurollar, omoch yordamida yer haydash va chorvachilik erkaklar jismoniy kuchini talab qildi. Natijada erkak kishining oila va jamiyatdagi yetakchilik mavqeyi yuksaldi (patriarxat).",
    isVerified: true
  },
  {
    id: 110,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Temir davriga o'tish",
    question: "O'rta Osiyoda temir asriga o'tish qaysi davrdan boshlangan?",
    options: [
      "Miloddan avvalgi I ming yillik boshlaridan",
      "Miloddan avvalgi III ming yillikdan",
      "Milodiy V asrdan",
      "Miloddan avvalgi X ming yillikdan"
    ],
    correct: 0,
    explanation: "O'rta Osiyoda miloddan avvalgi I ming yillik boshlarida temirdan qurol-yarog' va mehnat qurollari yasash ommalashdi. Temir qurollar mehnat unumdorligini keskin oshirdi.",
    isVerified: true
  },

  // ==========================================
  // II BO'LIM: QADIMGI SHARQ VA O'RTA OSIYO
  // ==========================================
  {
    id: 201,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Misr",
    question: "Qadimgi yunon tarixchisi Gerodot nima sababdan Misrni 'Nil tuhfasi' deb atagan?",
    options: [
      "Har yili Nil daryosi toshib, o'z loyqasi bilan yerlarni nihoyatda unumdor qilgani uchun",
      "Nil daryosidan oltin qumlar oqib kelgani sababli",
      "Fir'avnlar faqat Nil daryosida sayr qilgani uchun",
      "Nil suvi barcha kasalliklarni davolovchi muqaddas suv deb bilingani uchun"
    ],
    correct: 0,
    explanation: "Nil daryosi har yozda toshib, sohillarni unumdor qora loyqa bilan qoplagan. Sahro o'rtasida hayot va dehqonchilik faqat Nil daryosi tufayli mavjud bo'lgan, shu sababli Gerodot uni 'Nil tuhfasi' deb ta'riflagan.",
    isVerified: true
  },
  {
    id: 202,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Misr",
    question: "Qadimgi Misrda qurilgan eng ulkan piramida qaysi fir'avnga tegishli?",
    options: [
      "Xufu (Xeops)",
      "Tutankhamon",
      "Ramses II",
      "Exnaton"
    ],
    correct: 0,
    explanation: "Qadimgi Misrning Giza vodiysida miloddan avvalgi XXVI asrda fir'avn Xufu (yunoncha Xeops) uchun qad ko'targan piramida eng yirik hisoblanadi (balandligi qariyb 147 metr bo'lgan).",
    isVerified: true
  },
  {
    id: 203,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Misr madaniyati",
    question: "Qadimgi Misr iyeroglif yozuvini XIX asr boshida birinchi bo'lib kim o'qishga muvaffaq bo'lgan?",
    options: [
      "Jan-Fransua Shampolyon",
      "Hovard Karter",
      "Genrix Shliman",
      "Artur Evans"
    ],
    correct: 0,
    explanation: "1822-yilda fransuz olimi Jan-Fransua Shampolyon Rozetta toshidagi uch xil tildagi matnni qiyoslab o'rganish orqali qadimgi Misr iyerogliflarini o'qish sirini ochgan.",
    isVerified: true
  },
  {
    id: 204,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Mesopotamiya sivilizatsiyalari",
    question: "Mesopotamiya (Ikki daryo oralig'i) qaysi ikki yirik daryo oralig'ida joylashgan hudud?",
    options: [
      "Dajla va Frot",
      "Hind va Gang",
      "Nil va Qizilqum",
      "Amudaryo va Sirdaryo"
    ],
    correct: 0,
    explanation: "Mesopotamiya so'zi yunoncha 'Ikki daryo oralig'i' degan ma'noni anglatadi va Dajla (Tigr) hamda Frot (Yevfrat) daryolari havzasidagi hududni ifodalaydi.",
    isVerified: true
  },
  {
    id: 205,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Mesopotamiya madaniyati",
    question: "Shumerlar tomonidan loy lavhalarga maxsus tayoqchalar yordamida yozilgan yozuv turi qanday atalgan?",
    options: [
      "Mixxat (ponasimon yozuv)",
      "Iyeroglif yozuvi",
      "Finikiya alifbosi",
      "Arab yozuvi"
    ],
    correct: 0,
    explanation: "Shumerlar qadimgi dunyoda birinchilardan bo'lib yozuv ixtiro qildilar. Nam loy taxtachalarga ponasimon o'tkir qalam bilan bosib yozilgani uchun u 'mixxat' deb atalgan.",
    isVerified: true
  },
  {
    id: 206,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Bobil podsholigi",
    question: "Qora bazalt toshga o'yib yozilgan, 282 ta moddadan iborat qadimgi mashhur qonunlar to'plami qaysi Bobil podshosiga tegishli?",
    options: [
      "Hammurapi",
      "Navuxodonosor II",
      "Sargon",
      "Kir II"
    ],
    correct: 0,
    explanation: "Bobil podshosi Hammurapi (miloddan avvalgi 1792-1750-yillar) qadimgi dunyoning eng mukammal qonunlar to'plamini yaratdi. Unda 'Ko'zga ko'z, tishga tish' adolat tamoyili aks ettirilgan.",
    isVerified: true
  },
  {
    id: 207,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Old Osiyo davlatlari",
    question: "Tarixda birinchi bo'lib 22 ta undosh tovushdan iborat alifbo tizimini yaratgan xalq qaysi?",
    options: [
      "Finikiyaliklar",
      "Misrliklar",
      "Shumerlar",
      "Forslar"
    ],
    correct: 0,
    explanation: "O'rta Yer dengizining sharqiy sohilida yashovchi finikiyaliklar savdo va dengizchilik ehtiyojlari uchun o'rganish oson bo'lgan 22 ta harfdan iborat ilk alifboni ixtiro qildilar.",
    isVerified: true
  },
  {
    id: 208,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Ahamoniylar davlati",
    question: "Ahamoniylar davlatida pul islohoti o'tkazib, sof oltindan 'darik' tangalarini zarb ettirgan va mamlakatni satraplliklarga bo'lgan shoh kim?",
    options: [
      "Doro I",
      "Kir II",
      "Kambiz II",
      "Kserks"
    ],
    correct: 0,
    explanation: "Doro I (miloddan avvalgi 522-486-yillar) davlatni 20 ta satraplikka (viloyatga) bo'ldi, 'Shoh yo'li' pochta aloqasini yo'lga qo'ydi va 'darik' deb nomlangan sof oltin tanga joriy etdi.",
    isVerified: true
  },
  {
    id: 209,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Hindiston",
    question: "Qadimgi Hindistonda varna (kasta) tizimi bo'yicha eng oliy tabaqa vakillari kimlar hisoblangan?",
    options: [
      "Braxmanlar (kohiylar)",
      "Kshatriylar (jangchilar va hukmdorlar)",
      "Vayshiylar (dehqon va hunarmandlar)",
      "Shudralar (xizmatkorlar)"
    ],
    correct: 0,
    explanation: "Qadimgi hind jamiyati 4 ta asosiy varnaga bo'lingan. Braxmanlar (ruhoniylar, kohinlar) ilohiy qonunlarni biluvchi eng oliy tabaqa sanalgan.",
    isVerified: true
  },
  {
    id: 210,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Hindiston",
    question: "Miloddan avvalgi VI-V asrlarda Hindistonda yuzaga kelgan jahon dinlaridan biri bo'lgan Buddizm ta'limotining asoschisi kim?",
    options: [
      "Siddhartha Gautama (Budda)",
      "Ashoka",
      "Konfutsiy",
      "Zardusht"
    ],
    correct: 0,
    explanation: "Shahzoda Siddhartha Gautama saroy dabdabasidan voz kechib, haqiqat izlashga otlangan va ma'rifatga erishib 'Budda' ('Haqiqatni anglagan') nomini olgan hamda buddizm diniga asos solgan.",
    isVerified: true
  },
  {
    id: 211,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Xitoy",
    question: "Miloddan avvalgi 221-yilda tarqoq podsholiklarni yagona qudratli markazlashgan davlatga birlashtirgan Xitoy imperatori kim?",
    options: [
      "Sin Shixuandi",
      "U-di",
      "Konfutsiy",
      "Sun Szi"
    ],
    correct: 0,
    explanation: "Sin sulolasi vakili Sin Shixuandi miloddan avvalgi 221-yilda butun Xitoyni birlashtirdi, yagona pul, o'lchov va yozuv birligini kiritdi hamda ko'chmanchilar xavfidan saqlanish uchun Buyuk Xitoy devorini qurishni boshladi.",
    isVerified: true
  },
  {
    id: 212,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Zardushtiylik va Avesto",
    question: "Zardushtiylik ta'limotining muqaddas kitobi 'Avesto'dagi uch asosiy axloqiy tamoyil qaysi qatorda to'g'ri berilgan?",
    options: [
      "Ezgu fikr, ezgu so'z, ezgu amal ('Gumata, Guxta, Xvarshta')",
      "Tinchlik, adolat, boylik",
      "Sabr, qanoat, itoat",
      "Qurilish, mehnat, savdo"
    ],
    correct: 0,
    explanation: "'Avesto'ning asosi bo'lgan zardushtiylik dinining bosh axloqiy shiori: 'Ezgu fikr (Gumata), ezgu so'z (Guxta) va ezgu amal (Xvarshta)' bo'lib, insoniyatni poklik va ezgulik sari undaydi.",
    isVerified: true
  },
  {
    id: 213,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Zardushtiylik va Avesto",
    question: "Zardushtiylik dinida ezgulik va nur xudosi qanday nomlangan?",
    options: [
      "Ahuramazda (Hormuzd)",
      "Anxramaynu (Ahriman)",
      "Mitra",
      "Anaxita"
    ],
    correct: 0,
    explanation: "Zardushtiylikda koinot ezgulik tangrisi Ahuramazda (donolik va yorug'lik egasi) hamda yovuzlik va zulmat timsoli Anxramaynu o'rtasidagi doimiy kurashdan iborat deb qaralgan.",
    isVerified: true
  },
  {
    id: 214,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "O'rta Osiyo hududidagi qadimiy davlatlar",
    question: "Miloddan avvalgi I ming yillik boshlarida O'rta Osiyo hududida vujudga kelgan dastlabki yirik davlat uyushmalari qaysilar edi?",
    options: [
      "Qadimgi Baqtriya, Katta Xorazm va So'g'diyona",
      "Kushon va Eftaliylar davlati",
      "Somoniylar va Qoraxoniylar",
      "Yunon-Baqtriya va Salavkiylar"
    ],
    correct: 0,
    explanation: "Darslik ma'lumotlariga ko'ra, miloddan avvalgi IX-VII asrlarda Amudaryo havzasi va Zarafshon vodiysida Qadimgi Baqtriya, Katta Xorazm va So'g'd ilk davlat birlashmalari shakllangan.",
    isVerified: true
  },

  // ==========================================
  // III BO'LIM: QADIMGI YUNONISTON
  // ==========================================
  {
    id: 301,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Antik tarixning boshlanishi",
    question: "Gomerning mashhur 'Iliada' va 'Odisseya' dostonlarida qaysi tarixiy urush voqealari kuylangan?",
    options: [
      "Troya urushi",
      "Yunon-fors urushlari",
      "Peloponnes urushi",
      "Puni urushlari"
    ],
    correct: 0,
    explanation: "Ko'zi ojiz shoir Gomerning 'Iliada' dostoni axeyaliklarning Ilion (Troya) shahrini qamal qilishi haqida, 'Odisseya' esa Itaka shohi Odisseyning Troya urushidan keyin o'z yurtiga qaytishdagi sarguzashtlari haqida hikoya qiladi.",
    isVerified: true
  },
  {
    id: 302,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Qadimgi Yunoniston polislari",
    question: "Qadimgi Yunonistonda mustaqil shahar-davlatlar nima deb atalgan?",
    options: [
      "Polis",
      "Satraplik",
      "Nomiya",
      "Provinsiya"
    ],
    correct: 0,
    explanation: "Qadimgi Yunoniston yagona markazlashgan davlat emas, balki shahar va uning atrofidagi yerlarni o'z ichiga olgan mustaqil jamoa - 'polis'lardan (shahar-davlatlardan) iborat bo'lgan.",
    isVerified: true
  },
  {
    id: 303,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Afinada demokratiya",
    question: "Miloddan avvalgi 594-yilda Afinada qarz qulligini bekor qilgan va fuqarolarga siyosiy huquqlar bergan islohotchi donishmand kim?",
    options: [
      "Solon",
      "Drakont",
      "Perikl",
      "Pifagor"
    ],
    correct: 0,
    explanation: "Solon Afinada qarz qulligini bekor qildi, qarz tufayli sotilgan afinaliklarni ozod qildi va barcha erkin fuqarolarga Xalq yig'inida qatnashish huquqini berdi.",
    isVerified: true
  },
  {
    id: 304,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Afinada demokratiya",
    question: "Afinada demokratiyaning eng yuksak 'oltin davri' qaysi davlat arbobining boshqaruvi bilan bog'liq?",
    options: [
      "Perikl",
      "Solon",
      "Miltiad",
      "Filipp II"
    ],
    correct: 0,
    explanation: "Perikl miloddan avvalgi V asrda 15 yil ketma-ket birinchi strateg etib saylandi. Uning davrida Afinada demokratiya eng yuqori cho'qqisiga chiqdi va Afina Akropolida mashhur Parfenon ibodatxonasi qad ko'tardi.",
    isVerified: true
  },
  {
    id: 305,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunon-fors urushlari",
    question: "Miloddan avvalgi 490-yilda yunonlar forslarni mag'lub etgan va afsonaviy chopar xushxabar olib kelgan jang qaysi?",
    options: [
      "Marafon jangi",
      "Fermopil jangi",
      "Salamin dengiz jangi",
      "Gavgamela jangi"
    ],
    correct: 0,
    explanation: "Marafon tekisligida sarkarda Miltiad boshchiligidagi afinaliklar forslarni yengdi. Jang tugagach, yuguruvchi chopar 42 kilometrdan ortiq masofani to'xtamasdan Afinagacha yugurib borib: 'Quvoning, biz g'alaba qozondik!' deb xabar bergan.",
    isVerified: true
  },
  {
    id: 306,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunon-fors urushlari",
    question: "Miloddan avvalgi 480-yilda tor tog' darasida forslarning behisob qo'shiniga qarshi mardonavor jang qilib, sharaf bilan halok bo'lgan Sparta shohi va uning 300 jangchisi voqeasi qayerda yuz bergan?",
    options: [
      "Fermopil darasida (Shoh Leonid boshchiligida)",
      "Marafon maydonida",
      "Salamin bo'g'ozida",
      "Olimpiya vodiysida"
    ],
    correct: 0,
    explanation: "Fermopil darasidagi jangda Sparta shohi Leonid boshchiligidagi 300 spartalik va ularning ittifoqchilari forslarning Kserks boshchiligidagi ulkan qo'shiniga qarshi oxirgi tomchi qonlarigacha qahramonlarcha kurashdilar.",
    isVerified: true
  },
  {
    id: 307,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunon madaniyati",
    question: "Qadimgi Yunonistonda birinchi Olimpiada o'yinlari qachon o'tkazilgan?",
    options: [
      "Miloddan avvalgi 776-yilda",
      "Miloddan avvalgi 500-yilda",
      "Miloddan avvalgi 336-yilda",
      "Milodiy 476-yilda"
    ],
    correct: 0,
    explanation: "Birinchi umumyunon Olimpiada o'yinlari miloddan avvalgi 776-yilda bosh xudo Zevs sharafiga Olimpiya shahrida o'tkazilgan va yunonlar shu yildan o'zlarining yil hisobini (taqvimini) boshlaganlar.",
    isVerified: true
  },
  {
    id: 308,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunoniston olimlari va mutafakkirlari",
    question: "'Tarixning otasi' deb e'tirof etilgan qadimgi yunon mutafakkiri kim?",
    options: [
      "Gerodot",
      "Gippokrat",
      "Suqrot (Sokrat)",
      "Arastu (Aristotel)"
    ],
    correct: 0,
    explanation: "Gerodot (miloddan avvalgi V asr) ko'plab mamlakatlarga sayohat qilib, 'Tarix' asarini yozgan va keyingi avlodlar tomonidan haqli ravishda 'Tarixning otasi' deb e'tirof etilgan.",
    isVerified: true
  },
  {
    id: 309,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunoniston olimlari va mutafakkirlari",
    question: "Tibbiyot fanining otasi sanalgan va shifokorlik qasamyodi bugungi kungacha uning nomi bilan ataladigan yunon tabibi kim?",
    options: [
      "Gippokrat",
      "Arximed",
      "Aflotun (Platon)",
      "Demokrit"
    ],
    correct: 0,
    explanation: "Gippokrat kasalliklar xudolarning jazosi emas, balki tabiiy sabablar oqibati ekanligini isbotlagan va zamonaviy tibbiyot axloqining asosi bo'lgan 'Gippokrat qasamyodi'ni ishlab chiqqan.",
    isVerified: true
  },
  {
    id: 310,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Qadimgi Yunoniston afsonalari",
    question: "Yunon mifologiyasida Olimp tog'ining hukmdori, chaqmoq va momaqaldiroq xudosi kim bo'lgan?",
    options: [
      "Zevs",
      "Poseydon",
      "Apollon",
      "Ares"
    ],
    correct: 0,
    explanation: "Qadimgi yunonlar Zevsni bosh xudo, osmon, momaqaldiroq va chaqmoqlar egasi hamda barcha xudolar va insonlar otasi deb bilishgan.",
    isVerified: true
  },

  // ==========================================
  // IV BO'LIM: MILODDAN AVVALGI VI – MILODIY III ASRLARDA OʻRTA OSIYO
  // ==========================================
  {
    id: 401,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Ahamoniylarning O'rta Osiyoga bosqini",
    question: "Miloddan avvalgi 530-yilda O'rta Osiyoga bostirib kirgan fors shohi Kir II ni tor-mor keltirgan massagetlar malikasi kim edi?",
    options: [
      "To'maris",
      "Zarina",
      "Roxshana (Roxana)",
      "Klepatora"
    ],
    correct: 0,
    explanation: "Miloddan avvalgi 530-yilda jasur malika To'maris boshchiligidagi massaget jangchilari bosqinchi fors shohi Kir II qo'shinini qaqshatqich mag'lubiyatga uchratdilar va jangda Kir II halok bo'ldi.",
    isVerified: true
  },
  {
    id: 402,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Ahamoniylarga qarshi kurash",
    question: "Miloddan avvalgi 519-yilda Doro I qo'shinini dasht ichkarisiga adashtirib olib kirib, o'z vatanparvarligi bilan mangu shon-sharaf qozongan sak cho'poni kim?",
    options: [
      "Shiroq",
      "Spitamen",
      "Oksiat",
      "Frada"
    ],
    correct: 0,
    explanation: "Cho'pon Shiroq o'z qulog'i va burnini kesib, forslarni go'yo o'z qabilasidan o'ch olmoqchiligiga ishontirdi va Doro I ning ulkan qo'shinini suvsiz, jazirama sahroga boshlab borib, halokat yoqasiga qo'ydi.",
    isVerified: true
  },
  {
    id: 403,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Aleksandr Makedonskiy yurishlari",
    question: "Miloddan avvalgi 329-327-yillarda Aleksandr Makedonskiy qo'shinlariga qarshi So'g'diyonada uch yil davomida tengsiz xalq ozodlik harakatiga rahbarlik qilgan qahramon kim?",
    options: [
      "Spitamen",
      "Bess",
      "Artaksers",
      "Diodot"
    ],
    correct: 0,
    explanation: "So'g'd zodagoni Spitamen Aleksandr Makedonskiyga qarshi partizanlik usulida jasoratli kurash olib bordi, hatto Marokandani qisqa vaqtga ozod qildi va makedoniyaliklarning yengilmaslik afsonasini yo'qqa chiqardi.",
    isVerified: true
  },
  {
    id: 404,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Yunon-Baqtriya podsholigi",
    question: "Miloddan avvalgi III asr o'rtalarida (taxminan m.avv. 250-yil) Salavkiylar davlatidan ajralib chiqib, mustaqil Yunon-Baqtriya davlatiga asos solgan hukmdor kim?",
    options: [
      "Diodot I",
      "Yevtidem",
      "Kanishka",
      "Selevk I"
    ],
    correct: 0,
    explanation: "Baqtriya satrapi Diodot miloddan avvalgi taxminan 250-yilda Salavkiylarga qarshi mustaqillik e'lon qildi va o'z nomidan oltin tangalar zarb qildirib, Yunon-Baqtriya davlatiga asos soldi.",
    isVerified: true
  },
  {
    id: 405,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Yunon-Baqtriya podsholigi",
    question: "Qadimgi manbalarda qaysi davlat shaharsozlik va madaniyatining yuksakligi uchun 'Mingta shahar mamlakati' deb ta'riflangan?",
    options: [
      "Yunon-Baqtriya podsholigi",
      "Qang' davlati",
      "Ahamoniylar davlati",
      "Karfagen"
    ],
    correct: 0,
    explanation: "Yunon-Baqtriya hududida savdo, hunarmandchilik va qal'a-shaharlar nihoyatda rivojlangani sababli antik tarixchilar (masalan, Yustin) uni 'Mingta shahar mamlakati' deb atashgan.",
    isVerified: true
  },
  {
    id: 406,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Qang' davlati",
    question: "Sirdaryoning o'rta oqimi va Toshkent vohasida joylashgan Qang' davlatining poytaxti qaysi shahar bo'lgan?",
    options: [
      "Bityan",
      "Marokanda",
      "Ershi",
      "Baqtra"
    ],
    correct: 0,
    explanation: "Qadimgi Xitoy solnomalarida qayd etilishicha, Qang' (Kangar) davlatining poytaxti Bityan shahri bo'lgan. Ular Buyuk Ipak yo'lining shimoliy tarmog'ini nazorat qilganlar.",
    isVerified: true
  },
  {
    id: 407,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Davan davlati",
    question: "Farg'ona vodiysida joylashgan qaysi qadimgi davlat o'zining tezkor 'samoviy tulporlari' va bog'dorchiligi bilan Xitoy imperatorlarining e'tiborini tortgan?",
    options: [
      "Davan (Parkana) davlati",
      "Qadimgi Xorazm",
      "Baqtriya",
      "So'g'diyona"
    ],
    correct: 0,
    explanation: "Xitoy manbalarida Davan (Parkana, hozirgi Farg'ona) poytaxti Ershi shahri bo'lib, uning zotdor arg'umoqlari ('samoviy arg'umoqlar') uchun Xitoy sulolasi hatto urush ham ochgan.",
    isVerified: true
  },
  {
    id: 408,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Kushon davlati",
    question: "Milodiy I asrda O'rta Osiyo va Shimoliy Hindiston hududlarini birlashtirgan Kushon imperiyasiga kim asos solgan?",
    options: [
      "Kudzul Kadfiz",
      "Kanishka",
      "Vima Kadfiz",
      "Spitamen"
    ],
    correct: 0,
    explanation: "Kushon davlatining asoschisi beshta yuechji qabilasini birlashtirgan yo'lboshchi Kudzul Kadfiz I hisoblanadi. U Baqtriya yerlarini o'ziga bo'ysundirgan.",
    isVerified: true
  },
  {
    id: 409,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Kushon davlati",
    question: "Kushon davlati qudratining cho'qqisi qaysi podshoh hukmronligi davriga to'g'ri keladi va u qaysi din homiysi bo'lgan?",
    options: [
      "Kanishka - Buddizm homiysi",
      "Doro - Zardushtiylik",
      "Menandr - Islom",
      "Selevk - Xristianlik"
    ],
    correct: 0,
    explanation: "Shoh Kanishka (milodiy II asr) davrida Kushon davlati Rim, Parfiya va Xitoy bilan tenglashuvchi jahon imperiyasiga aylandi. Kanishka buddizmga keng homiylik qildi va IV Budda soborini chaqirdi.",
    isVerified: true
  },
  {
    id: 410,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Buyuk Ipak yo'li",
    question: "Buyuk Ipak yo'lining rasmiy shakllanishi miloddan avvalgi II asrda qaysi Xitoy elchisining O'rta Osiyoga qilgan sayohati bilan bog'liq?",
    options: [
      "Chjan Syan",
      "Sun Szi",
      "Sin Shixuandi",
      "Syuan Szan"
    ],
    correct: 0,
    explanation: "Miloddan avvalgi 138-126-yillarda Xitoy elchisi Chjan Syan O'rta Osiyo xalqlari (Davan, Qang', Baqtriya) yerlariga sayohat qilib, Xitoy bilan G'arb o'rtasidagi savdo va madaniy yo'lga - Buyuk Ipak yo'liga poydevor qo'ydi.",
    isVerified: true
  },

  // ==========================================
  // V BO'LIM: QADIMGI RIM
  // ==========================================
  {
    id: 501,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim shahrining tashkil topishi",
    question: "Afsonaga ko'ra, Tiber daryosi bo'yida Rim shahriga qachon va kim tomonidan asos solingan?",
    options: [
      "Miloddan avvalgi 753-yilda Romul tomonidan",
      "Miloddan avvalgi 509-yilda Rem tomonidan",
      "Milodiy 476-yilda Sezar tomonidan",
      "Miloddan avvalgi 27-yilda Avgust tomonidan"
    ],
    correct: 0,
    explanation: "Rim afsonalariga ko'ra, bo'ri bolasi emizib katta qilgan egizak aka-uka Romul va Remdan biri - Romul miloddan avvalgi 753-yil 21-aprelda Palatin tepaligida Rim shahriga asos solgan va uning ilk podshosi bo'lgan.",
    isVerified: true
  },
  {
    id: 502,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim Respublikasi",
    question: "Qadimgi Rimda miloddan avvalgi 509-yilda qanday boshqaruv tizimi o'rnatildi?",
    options: [
      "Respublika",
      "Absolyut monarxiya",
      "Tiraniya",
      "Teokratiya"
    ],
    correct: 0,
    explanation: "Miloddan avvalgi 509-yilda zolim shoh Tarkviniy Mag'rur haydab yuborilgach, Rimda podsholik tugatilib, Respublika (lotincha 'Res publica' - 'umumxalq ishi') boshqaruvi qaror topdi.",
    isVerified: true
  },
  {
    id: 503,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim ijtimoiy tabaqalari",
    question: "Qadimgi Rim jamiyatida to'la huquqli tubjoy aslzodalar va huquqlari cheklangan oddiy aholi qanday atalgan?",
    options: [
      "Patrisiylar va plebeylar",
      "Kshatriylar va vayshiylar",
      "Spartiatlar va ilotlar",
      "Aristokratlar va meteklar"
    ],
    correct: 0,
    explanation: "Patrisiylar - Rimning qadimgi boy urug' vakillari va aslzodalari bo'lgan. Plebeylar esa Rimga keyin ko'chib kelgan, dastlab siyosiy huquqlari bo'lmagan erkin xalq tabaqasi edi.",
    isVerified: true
  },
  {
    id: 504,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Puni urushlari",
    question: "Rimning O'rta Yer dengizida yakkahokimlik o'rnatish uchun Karfagen davlatiga qarshi olib borgan urushlari nima deb atalgan?",
    options: [
      "Puni urushlari",
      "Peloponnes urushlari",
      "Fors urushlari",
      "Galli urushlari"
    ],
    correct: 0,
    explanation: "Rimliklar karfagenliklarni 'punlar' (finikiyaliklar so'zidan) deb atashgan. Rim va Karfagen o'rtasidagi 3 ta yirik urush (m.avv. 264-146) 'Puni urushlari' deb nomlanadi va Rimning to'liq g'alabasi bilan tugagan.",
    isVerified: true
  },
  {
    id: 505,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Puni urushlari",
    question: "Puni urushlarida fillar bilan Alp tog'laridan oshib o'tib, Rim qo'shinini dahshatga solgan Karfagenning afsonaviy sarkardasi kim edi?",
    options: [
      "Gannibal Barka",
      "Ssipion",
      "Pirey",
      "Amilkar"
    ],
    correct: 0,
    explanation: "Karfagenlik iste'dodli sarkarda Gannibal misli ko'rilmagan jasorat bilan qish chog'ida fillar va qo'shin bilan Alp tog'larini kesib o'tib, Italiyaga kirdi va Kanna jangida (m.avv. 216-yil) rimliklarni yanchib tashladi.",
    isVerified: true
  },
  {
    id: 506,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Spartak qo'zg'oloni",
    question: "Miloddan avvalgi 74-71-yillarda Rimda Kapuya shahridagi gladiatorlar maktabidan boshlangan eng yirik qullar qo'zg'olonining rahbari kim bo'lgan?",
    options: [
      "Spartak",
      "Kriks",
      "Yenomay",
      "Sezar"
    ],
    correct: 0,
    explanation: "Frakiyalik gladiator Spartak boshchiligida miloddan avvalgi 74-yilda boshlangan qullar qo'zg'oloni tez orada 100 mingdan ortiq kishini qamrab olgan va Rim tarixidagi eng ulkan qullar harakatiga aylangan.",
    isVerified: true
  },
  {
    id: 507,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim imperiyasining vujudga kelishi",
    question: "'Rubikon daryosidan o'tish' va 'Qur'a tashlandi!' iboralari qaysi sarkarda va davlat arbobining hokimiyat uchun kurashi bilan bog'liq?",
    options: [
      "Yuliy Sezar",
      "Gney Pompey",
      "Mark Antoniya",
      "Sulla"
    ],
    correct: 0,
    explanation: "Yuliy Sezar miloddan avvalgi 49-yilda Italiya chegarasi bo'lgan Rubikon daryosidan qo'shini bilan o'tib, Senatga qarshi yurish boshladi va 'Qur'a tashlandi!' (Alea iacta est) degan mashhur so'zlarni aytgan.",
    isVerified: true
  },
  {
    id: 508,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim imperiyasining vujudga kelishi",
    question: "Rimning birinchi imperatori bo'lgan va o'ziga 'Avgust' ('Ulug'langan') faxriy unvonini olgan shaxs kim?",
    options: [
      "Oktavian Avgust",
      "Yuliy Sezar",
      "Trayan",
      "Konstantin"
    ],
    correct: 0,
    explanation: "Sezarning asrab olgan o'g'li Oktavian miloddan avvalgi 27-yilda Rimda respublikaning so'nggi ko'rinishlarini tugatib, yakka hokimlikka asos soldi va unga Senat tomonidan 'Avgust' unvoni berildi.",
    isVerified: true
  },
  {
    id: 509,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim madaniyati va me'morchiligi",
    question: "50 mingdan ortiq tomoshabinga mo'ljallangan, gladiatorlar va yovvoyi hayvonlar janglari o'tkaziladigan Rimdagi eng yirik amfiteatr nima deb atalgan?",
    options: [
      "Kolizey (Flaviylar amfiteatri)",
      "Panteon",
      "Kapitoliy",
      "Forum"
    ],
    correct: 0,
    explanation: "Milodiy I asrda Flaviylar sulolasi davrida barpo etilgan Kolizey qadimgi dunyoning eng buyuk me'moriy mo''jizalaridan biri bo'lib, uning arenasida gladiatorlar janglari va suvli tomoshalar namoyish etilgan.",
    isVerified: true
  },
  {
    id: 510,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Qadimgi dunyo tarixining yakuni",
    question: "Qadimgi dunyo tarixining intihosi va O'rta asrlar davrining boshlanishi sifatida qaysi muhim tarixiy voqea qabul qilingan?",
    options: [
      "Milodiy 476-yilda G'arbiy Rim imperiyasining qulashi",
      "Milodiy 395-yilda imperiyaning ikkiga bo'linishi",
      "Miloddan avvalgi 44-yilda Sezarning o'ldirilishi",
      "Milodiy 313-yilda xristianlikning qabul qilinishi"
    ],
    correct: 0,
    explanation: "Milodiy 476-yilda sarkarda Odoakr Rimning oxirgi imperatori yosh Romul Avgustulni taxtdan ag'dardi va imperatorlik belgilarini Konstantinopolga jo'natdi. Shu voqea bilan G'arbiy Rim imperiyasi quladi va qadimgi dunyo davri yakunlandi.",
    isVerified: true
  },

  // ==========================================
  // QO'SHIMCHA CHUQURLASHTIRILGAN TEST SAVOLLARI
  // (2022-YILGI DARSLIK ASOSIDA 50 TA TEST TALABINI TO'LIQ QONDIRISH UCHUN)
  // ==========================================
  {
    id: 111,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Qadimgi odamlar manzilgohlari",
    question: "Toshkent viloyatining Bo'stonliq tumanidagi Chotqol tog' tizmasidan topilgan mustye davriga oid mashhur g'or qaysi?",
    options: [
      "Obirahmat g'ori",
      "Selung'ur g'ori",
      "Machay g'ori",
      "Joytun"
    ],
    correct: 0,
    explanation: "Obirahmat g'or-manzilgohi Toshkent viloyatida joylashgan bo'lib, u yerdan so'nggi neandertal va ilk kromanon odamining o'tish davriga oid noyob suyak qoldiqlari va tosh qurollar topilgan.",
    isVerified: true
  },
  {
    id: 112,
    sectionId: 1,
    sectionName: "I Bo'lim. Eng qadimgi tuzumdan sivilizatsiya sari",
    topic: "Neolit madaniyati",
    question: "Amudaryoning quyi oqimi, Qadimgi Xorazm hududida neolit davrida baliqchilik va ovchilik bilan kun kechirgan aholi madaniyati qanday ataladi?",
    options: [
      "Kaltaminor madaniyati",
      "Zamonbobo madaniyati",
      "Sopollitepa madaniyati",
      "Tozabog'yob madaniyati"
    ],
    correct: 0,
    explanation: "Xorazmdagi Kaltaminor madaniyati (miloddan avvalgi IV-III ming yilliklar) ovchilar va baliqchilar madaniyati bo'lib, ular qamishdan yasalgan ulkan doirasimon jamoa uylarida yashaganlar.",
    isVerified: true
  },
  {
    id: 215,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Misr me'morchiligi",
    question: "1922-yilda ingliz arxeologi Hovard Karter tomonidan qabri deyarli butun holatda, son-sanoqsiz oltin xazinalari bilan topilgan Misr fir'avni kim?",
    options: [
      "Tutankhamon",
      "Exnaton",
      "Xufu",
      "Yoxmos I"
    ],
    correct: 0,
    explanation: "Shohlar vodiysida yosh fir'avn Tutankhamonning dahmasi talon-toroj qilinmasdan, 3000 yildan ortiq vaqt daxlsiz saqlanib topilgan va jahon arxeologiyasining eng buyuk kashfiyotlaridan biriga aylangan.",
    isVerified: true
  },
  {
    id: 216,
    sectionId: 2,
    sectionName: "II Bo'lim. Qadimgi Sharq va O'rta Osiyo",
    topic: "Qadimgi Xitoy ixtirolari",
    question: "Quyidagilardan qaysi biri Qadimgi Xitoyda ixtiro qilingan kashfiyotlar qatoriga kirmaydi?",
    options: [
      "Mixxat yozuvi",
      "Ipak mato (shoyi)",
      "Qog'oz va kompas",
      "Porox"
    ],
    correct: 0,
    explanation: "Mixxat yozuvi Mesopotamiyada shumerlar tomonidan kashf qilingan. Ipak, qog'oz, kompas va porox esa qadimgi Xitoy madaniyatining mashhur ixtirolaridir.",
    isVerified: true
  },
  {
    id: 311,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunon teatri",
    question: "Qadimgi Yunonistonda teatr san'atining rivojlanishi qaysi xudo sharafiga o'tkaziladigan bayramlar bilan boshlangan?",
    options: [
      "Dionis (uzumchilik va sharob xudosi)",
      "Zevs (momaqaldiroq xudosi)",
      "Afrodita (go'zallik ma'budasi)",
      "Germes (savdo homiysi)"
    ],
    correct: 0,
    explanation: "Yunon teatri Dionis sharafiga o'tkaziladigan 'Buyuk Dionisiyalar' bayramidagi qo'shiqlar va sahna ko'rinishlaridan vujudga kelgan. 'Tragediya' so'zi ham 'echki qo'shig'i' degan ma'noni anglatadi.",
    isVerified: true
  },
  {
    id: 312,
    sectionId: 3,
    sectionName: "III Bo'lim. Qadimgi Yunoniston",
    topic: "Yunoniston olimlari",
    question: "Aleksandr Makedonskiyning ustozi bo'lgan va deyarli barcha fanlarning asoschisi sifatida tanilgan buyuk yunon qomusiy olimi kim?",
    options: [
      "Arastu (Aristotel)",
      "Suqrot",
      "Gerodot",
      "Demokrit"
    ],
    correct: 0,
    explanation: "Arastu (Aristotel) o'z davrining barcha bilimlarini tizimlashtirgan ensiklopedik olim bo'lib, mantiq, fizika, biologiya, etika va siyosat fanlariga asos solgan hamda Aleksandr Makedonskiyga ustozlik qilgan.",
    isVerified: true
  },
  {
    id: 411,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Salavkiylar davlati",
    question: "Aleksandr Makedonskiy vafotidan so'ng uning ulkan imperiyasining sharqiy qismida va O'rta Osiyoda hukmronlik qilgan sulola qaysi?",
    options: [
      "Salavkiylar sulolasi",
      "Ptolemeylar sulolasi",
      "Antigonidlar sulolasi",
      "Arshakiylar sulolasi"
    ],
    correct: 0,
    explanation: "Aleksandr sarkardalaridan biri Selevk I Nikator Suriya, Mesopotamiya va O'rta Osiyoni o'z ichiga olgan qudratli Salavkiylar davlatiga asos soldi.",
    isVerified: true
  },
  {
    id: 412,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Qadimgi Xorazm madaniyati",
    question: "Qadimgi Xorazm hududidan topilgan, doirasimon shaklda qurilgan mashhur osmono'par rasadxona-maqbara yodgorligi qaysi?",
    options: [
      "Qo'yqirilganqal'a",
      "Jonbosqal'a",
      "Tuproqqal'a",
      "Varaxsha"
    ],
    correct: 0,
    explanation: "Miloddan avvalgi IV-III asrlarga oid Qo'yqirilganqal'a yodgorligi aylana shaklida qurilgan bo'lib, unda qadimgi xorazmliklar osmon jismlarini kuzatishgan (rasadxona) va diniy marosimlarni o'tkazishgan.",
    isVerified: true
  },
  {
    id: 413,
    sectionId: 4,
    sectionName: "IV Bo'lim. Miloddan avvalgi VI – milodiy III asrlarda Oʻrta Osiyo",
    topic: "Kushon san'ati",
    question: "Surxondaryo viloyati Termiz yaqinidagi qaysi arxeologik yodgorlikdan mashhur 'Fayoztepa' va 'Qoratepa' Budda ibodatxonalari majmuasi topilgan?",
    options: [
      "Eski Termiz hududidan",
      "Xolchayon saroyidan",
      "Afrosiyob tepaligidan",
      "Qanqa qal'asidan"
    ],
    correct: 0,
    explanation: "Eski Termiz yaqinidagi Qoratepa va Fayoztepa Kushonlar davriga oid yirik budda monastirlari bo'lib, ulardan Budda haykallari, devoriy suratlar va qadimiy yozuvlar topilgan.",
    isVerified: true
  },
  {
    id: 511,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim me'morchiligi",
    question: "Rimdagi barcha xudolarga bag'ishlangan va o'rtasida 'Oculus' (ko'z) deb ataluvchi tuynugi bo'lgan ulkan gumbazli ibodatxona nima deb ataladi?",
    options: [
      "Panteon",
      "Parfenon",
      "Kolizey",
      "Termalar"
    ],
    correct: 0,
    explanation: "Panteon (yunoncha 'barcha xudolar ibodatxonasi') milodiy II asrda imperator Adrian davrida qayta qurilgan bo'lib, uning beton gumbazi qadimgi dunyo me'morchiligining tengsiz durdonasidir.",
    isVerified: true
  },
  {
    id: 512,
    sectionId: 5,
    sectionName: "V Bo'lim. Qadimgi Rim",
    topic: "Rim imperiyasining ikkiga bo'linishi",
    question: "Milodiy 395-yilda imperator Feodosiy vafotidan so'ng Rim imperiyasi qaysi ikki mustaqil davlatga ajraldi?",
    options: [
      "G'arbiy Rim va Sharqiy Rim (Vizantiya) imperiyasiga",
      "Rim va Karfagen davlatiga",
      "Franklar va Galliya davlatiga",
      "Yunoniston va Misr podsholigiga"
    ],
    correct: 0,
    explanation: "395-yilda Rim imperiyasi Feodosiyning ikki o'g'li o'rtasida G'arbiy Rim (poytaxti avval Rim, keyin Ravenna) va Sharqiy Rim (Vizantiya, poytaxti Konstantinopol) ga bo'linib ketdi.",
    isVerified: true
  }
];

// Helper functions for question bank
window.HistoryApp = window.HistoryApp || {};
window.HistoryApp.SECTIONS = HISTORY_SECTIONS;
window.HistoryApp.QUESTIONS = QUESTIONS_DATABASE;
