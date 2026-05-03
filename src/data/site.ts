export type Lang = "tr" | "en";

export type LocalizedText = Record<Lang, string>;

export interface PracticeArea {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText[];
  bullets: LocalizedText[];
  image: string;
  icon: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: LocalizedText;
  image: string;
  bio: LocalizedText[];
  specialties: LocalizedText[];
}

export interface Article {
  slug: string;
  title: LocalizedText;
  date: string;
  category: LocalizedText;
  summary: LocalizedText;
  author: string;
  image: string;
  body: string[];
  sourceUrl: string;
}

export const languages: Lang[] = ["tr", "en"];

export const labels = {
  tr: {
    home: "Anasayfa",
    about: "Kurumsal",
    aboutUs: "Hakkımızda",
    lawyers: "Takım Arkadaşlarımız",
    services: "Çalışma Alanlarımız",
    sectors: "Müvekkiller",
    publications: "Blog",
    contact: "İletişim",
    contactUs: "İletişim Formu",
    search: "Arama",
    readMore: "Detay",
    learnMore: "Daha Fazla",
    fullArticles: "Tüm Yazılar",
    practiceIntro: "Hukuk ofisimizde başlıca hizmet verdiğimiz alanlar",
    servicesHeading: "Çalışma Alanlarımız",
    lawyersHeading: "Çalışma Arkadaşlarımız",
    publicationsHeading: "Yayınlar",
    usefulLinks: "Faydalı Linkler",
    address: "Adres",
    phone: "Telefon",
    fax: "Faks",
    email: "Eposta",
    message: "Mesaj",
    name: "Ad Soyad",
    send: "Gönder",
    cookie: "Bu site, tercihlerinizi hatırlamak ve deneyimi iyileştirmek için çerez kullanır.",
    accept: "Kabul Et",
    settings: "Çerez Ayarları",
    legalNotice: "Bu sayfa Aksaç'a özel metinle güncellenmelidir.",
    notLegalAdvice: "Bu web sitesindeki bilgiler genel niteliktedir ve hukuki danışmanlık yerine geçmez."
  },
  en: {
    home: "Home",
    about: "About",
    aboutUs: "About Us",
    lawyers: "Our Lawyers",
    services: "Services",
    sectors: "Clients",
    publications: "Publications",
    contact: "Contact",
    contactUs: "Contact Us",
    search: "Search",
    readMore: "Detail",
    learnMore: "Learn More",
    fullArticles: "Full Articles",
    practiceIntro: "Main legal services provided by our office",
    servicesHeading: "Practice Areas",
    lawyersHeading: "Our Team",
    publicationsHeading: "Publications",
    usefulLinks: "Useful Links",
    address: "Address",
    phone: "Phone",
    fax: "Fax",
    email: "Email",
    message: "Message",
    name: "Full Name",
    send: "Send",
    cookie: "This website uses cookies to remember preferences and improve the experience.",
    accept: "Accept",
    settings: "Cookie Settings",
    legalNotice: "This page should be updated with Aksaç-specific legal text.",
    notLegalAdvice: "The information on this website is general and does not replace legal advice."
  }
} as const;

export const firm = {
  name: {
    tr: "Aksaç Hukuk & Arabuluculuk",
    en: "Aksaç Law & Mediation"
  },
  shortName: {
    tr: "Aksaç Hukuk",
    en: "Aksaç Law"
  },
  motto: {
    tr: "Adaletin kuvvetli, kuvvetlerin de adaletli olmaları gerekir.",
    en: "Justice must be strong, and power must be just."
  },
  phone: "+90 (216) 478 1099 Pbx",
  fax: "+90 (216) 478 1484",
  email: "hukuk@aksac.av.tr",
  footerEmail: "aksac@aksac.av.tr",
  address: {
    tr: "Şemsettin Günaltay Caddesi, Konyalılar Apt. No:244/5 Sahrayıcedid / Erenköy, Kadıköy - İstanbul / TR",
    en: "Şemsettin Günaltay Street, Konyalılar Apt. No:244/5, Sahrayıcedid / Erenköy, Kadıköy - Istanbul / TR"
  },
  founded: "2007",
  sourceUrl: "https://aksac.av.tr/"
};

export const assets = {
  logo: "/assets/aksac/logo.png",
  logoSmall: "/assets/aksac/logo-small.png",
  logoWhite: "/assets/aksac/logobeyaz.png",
  hero1: "/assets/aksac/main-slider-1.jpg",
  hero2: "/assets/aksac/main-slider-2.jpg",
  hero3: "/assets/aksac/main-slider-3.jpg",
  about: "/assets/aksac/featured-image-101.jpg",
  service: "/assets/aksac/featured-image-102.jpg",
  realEstate: "/assets/aksac/featured-image-17.jpg",
  servicesBg: "/assets/aksac/background-image-2.jpg",
  footerBg: "/assets/aksac/background-image-5.jpg"
};

export const about = {
  eyebrow: {
    tr: "Aksaç Hukuk & Arabuluculuk",
    en: "Aksaç Law & Mediation"
  },
  heading: {
    tr: "Güven, deneyim ve sonuç odaklı hukuk hizmeti",
    en: "Trusted, experienced and results-focused legal service"
  },
  intro: {
    tr: "Aksaç Hukuk Bürosu, 2007 yılında Aykut Tolga AKSAÇ tarafından, 1998 yılından bu yana kazanılan hukuki birikim ve deneyimin kendi çatısı altında sürdürülmesi amacıyla İstanbul'da kurulmuştur.",
    en: "Aksaç Law Office was founded in Istanbul in 2007 by Aykut Tolga AKSAÇ to continue the legal knowledge and experience developed since 1998 under its own firm structure."
  },
  paragraphs: [
    {
      tr: "Büro; Ticaret Hukuku, Şirketler Hukuku, Gayrimenkul Hukuku, Bankacılık Hukuku, Uluslararası Hukuk, Ticari Ceza Hukuku ve Aile Hukuku alanlarında geniş deneyime sahiptir.",
      en: "The firm has extensive experience in commercial law, corporate law, real estate law, banking law, international law, commercial criminal law and family law."
    },
    {
      tr: "Merkezi İstanbul'da bulunan büro, yurt içi ve yurt dışı özel hukuk alanında müvekkillerin beklenti ve ihtiyaçlarına cevap verecek şekilde kaliteli hizmet sunmayı hedefler.",
      en: "Based in Istanbul, the office aims to provide high-quality private law services for domestic and international clients in line with their expectations and needs."
    },
    {
      tr: "Çalışma prensibi güven ve saygı üzerine kurulur; her dosyada daha kararlı, daha deneyimli ve daha etkin bir hizmet anlayışı benimsenir.",
      en: "Its working principle is built on trust and respect, with a determined, experienced and effective service approach for every matter."
    }
  ],
  founderMessage: {
    tr: "Dürüst, ilkeli bir misyon ile, kaliteden ödün vermeden geldiğimiz noktada en önemli kuralımız güven ve saygı olmuştur.",
    en: "With an honest and principled mission, our most important rule has been trust and respect without compromising quality."
  }
};

export const heroSlides = [
  {
    image: assets.hero2,
    title: {
      tr: "Aksaç Hukuk",
      en: "Aksaç Law"
    },
    text: {
      tr: "Ticaret Hukuku, İş Hukuku, Aile Hukuku, Gayrimenkul Hukuku, İcra İflas Hukuku ve Borçlar Hukuku alanlarında deneyimli hizmet.",
      en: "Experienced service in commercial, labour, family, real estate, enforcement-bankruptcy and obligations law."
    },
    href: "practice-areas",
    cta: {
      tr: "Hizmetlerimiz",
      en: "Our Services"
    }
  },
  {
    image: assets.hero3,
    title: {
      tr: "Yurtiçi ve yurtdışı özel hukuk desteği",
      en: "Domestic and international private law support"
    },
    text: {
      tr: "Müvekkillerimizin beklenti ve ihtiyaçlarına cevap verecek şekilde kaliteli, güncel ve uygulanabilir çözümler sunuyoruz.",
      en: "We provide high-quality, current and practical solutions that respond to our clients' expectations and needs."
    },
    href: "contact",
    cta: {
      tr: "İletişim Formu",
      en: "Contact Form"
    }
  },
  {
    image: assets.hero1,
    title: {
      tr: "Geniş deneyime sahip hukuk ekibi",
      en: "A legal team with broad experience"
    },
    text: {
      tr: "Ticaret, şirketler, gayrimenkul, bankacılık, uluslararası hukuk, ticari ceza ve aile hukuku odaklı çalışma.",
      en: "Focused practice in commercial, corporate, real estate, banking, international, commercial criminal and family law."
    },
    href: "about",
    cta: {
      tr: "Daha Fazla Bilgi",
      en: "Read More"
    }
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "ticaret-hukuku",
    title: { tr: "Ticaret Hukuku", en: "Commercial Law" },
    summary: {
      tr: "Ticari işletmeler, şirketler, kıymetli evrak, sigorta ve sözleşmesel ilişkilerde teknik ve kapsamlı hukuki destek.",
      en: "Technical legal support for commercial enterprises, companies, negotiable instruments, insurance and contractual relationships."
    },
    body: [
      {
        tr: "Ticaret hukuku; ticari işletmeyi ilgilendiren ilişkileri, şirketlerin kuruluş ve sona erme süreçlerini, kıymetli evrakı, sigortayı ve ticari borç ilişkilerini düzenleyen kapsamlı bir hukuk alanıdır.",
        en: "Commercial law governs relationships concerning commercial enterprises, company formation and dissolution, negotiable instruments, insurance and commercial obligations."
      },
      {
        tr: "Aksaç Hukuk, ticari ilişkilerde risklerin önceden değerlendirilmesi, sözleşmelerin yapılandırılması, uyuşmazlıkların takibi ve şirketler arası ihtilafların çözümü için danışmanlık ve dava desteği sağlar.",
        en: "Aksaç Law supports clients with risk assessment, contract structuring, dispute follow-up and resolution of conflicts between companies."
      }
    ],
    bullets: [
      { tr: "Ticari sözleşme hazırlanması ve incelenmesi", en: "Commercial contract drafting and review" },
      { tr: "Şirketler arası ihtilaf yönetimi", en: "Inter-company dispute management" },
      { tr: "Kıymetli evrak ve ticari alacak takibi", en: "Negotiable instruments and commercial receivables" }
    ],
    image: assets.about,
    icon: "building-2"
  },
  {
    slug: "is-hukuku",
    title: { tr: "İş Hukuku", en: "Labour Law" },
    summary: {
      tr: "İşçi-işveren ilişkileri, çalışma koşulları, ücret, fesih, sendikal süreçler ve iş uyuşmazlıkları için hukuki destek.",
      en: "Legal support for employment relations, working conditions, wages, termination, unions and employment disputes."
    },
    body: [
      {
        tr: "İş hukuku, işçi ve işveren arasındaki hizmet sözleşmesinden doğan hak ve yükümlülükleri, toplu iş ilişkilerini ve çalışma yaşamına ilişkin düzenlemeleri kapsar.",
        en: "Labour law covers rights and obligations arising from employment contracts, collective labour relations and workplace regulations."
      },
      {
        tr: "Büro, iş uyuşmazlıklarının önleyici yaklaşımla yönetilmesi, dava ve arabuluculuk süreçlerinin takibi ve insan kaynakları uygulamalarının hukuka uygun yapılandırılması konularında hizmet verir.",
        en: "The firm helps manage employment disputes preventively, follows litigation and mediation, and structures HR practices in compliance with law."
      }
    ],
    bullets: [
      { tr: "İş sözleşmeleri ve fesih süreçleri", en: "Employment contracts and terminations" },
      { tr: "İşçilik alacakları ve tazminat talepleri", en: "Employee receivables and compensation claims" },
      { tr: "Arabuluculuk ve dava takibi", en: "Mediation and litigation follow-up" }
    ],
    image: assets.service,
    icon: "briefcase"
  },
  {
    slug: "gayrimenkul-hukuku",
    title: { tr: "Gayrimenkul Hukuku", en: "Real Estate Law" },
    summary: {
      tr: "Tapu, kira, ipotek, ortaklığın giderilmesi, kamulaştırma, alım-satım ve proje süreçlerinde sonuç odaklı destek.",
      en: "Results-focused support for title deed, lease, mortgage, partition, expropriation, sale and project matters."
    },
    body: [
      {
        tr: "Gayrimenkul hukuku, eşya hukukunun önemli bir parçasıdır ve birçok istisna ile teknik detay içerir. Hukuki danışmanlık olmadan atılan adımlar ciddi riskler doğurabilir.",
        en: "Real estate law is a key part of property law and includes many technical details and exceptions. Acting without legal advice can create significant risks."
      },
      {
        tr: "Aksaç Hukuk, dava vekilliği ve danışmanlık hizmetlerini tapu işlemleri, kira ilişkileri, ipotek, kat mülkiyeti, inşaat sözleşmeleri ve yabancıların gayrimenkul edinimi başlıklarında yürütür.",
        en: "Aksaç Law provides litigation and advisory services for title deed transactions, leases, mortgages, condominium matters, construction contracts and real estate acquisition by foreigners."
      }
    ],
    bullets: [
      { tr: "Tapu iptal ve tescil davaları", en: "Title cancellation and registration cases" },
      { tr: "Kira ve tahliye uyuşmazlıkları", en: "Lease and eviction disputes" },
      { tr: "Gayrimenkul alım-satım öncesi risk analizi", en: "Pre-transaction real estate risk analysis" }
    ],
    image: assets.realEstate,
    icon: "landmark"
  },
  {
    slug: "bankacilik-hukuku",
    title: { tr: "Bankacılık Hukuku", en: "Banking Law" },
    summary: {
      tr: "Bankalar, kredi ilişkileri, teminatlar, finansal sözleşmeler ve tahsilat süreçlerinde deneyimli hukuki hizmet.",
      en: "Experienced legal service for banks, credit relationships, securities, financial contracts and collection processes."
    },
    body: [
      {
        tr: "Bankacılık hukuku, kredi ilişkileri, teminat yapıları, banka-müşteri uyuşmazlıkları ve finansal işlemlerin hukuki altyapısını kapsar.",
        en: "Banking law covers credit relationships, security structures, bank-customer disputes and the legal infrastructure of financial transactions."
      },
      {
        tr: "Büro, bankacılık ve kredi alanındaki deneyimini sözleşme incelemeleri, ihtilaf yönetimi, icra takibi ve dava süreçlerinde kullanır.",
        en: "The firm applies its banking and credit experience to contract review, dispute management, enforcement proceedings and litigation."
      }
    ],
    bullets: [
      { tr: "Kredi ve teminat sözleşmeleri", en: "Credit and security agreements" },
      { tr: "Banka-müşteri uyuşmazlıkları", en: "Bank-customer disputes" },
      { tr: "Finansal alacakların tahsili", en: "Collection of financial receivables" }
    ],
    image: assets.service,
    icon: "scale"
  },
  {
    slug: "uluslararasi-hukuk",
    title: { tr: "Uluslararası Hukuk", en: "International Law" },
    summary: {
      tr: "Yurtdışı bağlantılı işlemler, yabancı müvekkiller, uluslararası sözleşmeler ve sınır ötesi uyuşmazlıklar için destek.",
      en: "Support for cross-border transactions, foreign clients, international contracts and disputes."
    },
    body: [
      {
        tr: "Uluslararası bağlantılı hukuki ilişkiler, farklı hukuk sistemleri, yetki, uygulanacak hukuk ve belge süreçleri nedeniyle dikkatli planlama gerektirir.",
        en: "International legal relationships require careful planning due to different legal systems, jurisdiction, applicable law and documentation."
      },
      {
        tr: "Aksaç Hukuk, yurt içi ve yurt dışı özel hukuk hizmetlerinde müvekkillerin ihtiyaçlarına göre çözüm üretir.",
        en: "Aksaç Law provides solutions tailored to clients' needs in domestic and international private law matters."
      }
    ],
    bullets: [
      { tr: "Yabancı unsurlu sözleşmeler", en: "Contracts with foreign elements" },
      { tr: "Uluslararası ticari uyuşmazlıklar", en: "International commercial disputes" },
      { tr: "Yurtdışı temsilcilik ve işbirliği süreçleri", en: "Foreign representation and cooperation matters" }
    ],
    image: assets.hero3,
    icon: "globe-2"
  },
  {
    slug: "aile-hukuku",
    title: { tr: "Aile Hukuku", en: "Family Law" },
    summary: {
      tr: "Boşanma, nafaka, mal rejimi, velayet ve aile içi hukuki ilişkilerde hassas ve dikkatli destek.",
      en: "Sensitive and careful support for divorce, alimony, property regimes, custody and family relations."
    },
    body: [
      {
        tr: "Aile hukuku, aile bireylerinin hak ve sorumluluklarını düzenleyen medeni hukuk alanıdır. Eşler, çocuklar, mal rejimleri, nafaka ve vesayet gibi başlıkları kapsar.",
        en: "Family law is the civil law field governing rights and responsibilities within the family, including spouses, children, property regimes, alimony and guardianship."
      },
      {
        tr: "Büro, aile hukuku süreçlerinde kişisel hassasiyetleri gözeterek hukuki güvenliği ve uygulanabilir çözümü önceleyen bir yaklaşım benimser.",
        en: "The firm approaches family law matters with attention to personal sensitivities, legal certainty and practical solutions."
      }
    ],
    bullets: [
      { tr: "Boşanma ve mal rejimi uyuşmazlıkları", en: "Divorce and property regime disputes" },
      { tr: "Velayet ve nafaka talepleri", en: "Custody and alimony claims" },
      { tr: "Aile hukukunda danışmanlık", en: "Family law advisory services" }
    ],
    image: assets.hero1,
    icon: "users"
  },
  {
    slug: "ticari-ceza-hukuku",
    title: { tr: "Ticari Ceza Hukuku", en: "Commercial Criminal Law" },
    summary: {
      tr: "Ticari faaliyetlerden kaynaklanan ceza sorumluluğu, şirket yöneticileri ve mali süreçlerle bağlantılı risk yönetimi.",
      en: "Risk management for criminal liability arising from commercial activity, company management and financial processes."
    },
    body: [
      {
        tr: "Ticari ceza hukuku, şirket faaliyetleri, finansal işlemler ve ticari kararlar ile bağlantılı ceza hukuku risklerini kapsar.",
        en: "Commercial criminal law covers criminal law risks linked to company activity, financial transactions and commercial decisions."
      },
      {
        tr: "Aksaç Hukuk, önleyici danışmanlık, soruşturma süreçleri, delil değerlendirmesi ve ceza yargılamasında temsil hizmeti sunar.",
        en: "Aksaç Law provides preventive advice, investigation support, evidence assessment and representation in criminal proceedings."
      }
    ],
    bullets: [
      { tr: "Şirket yöneticilerinin sorumluluğu", en: "Liability of company executives" },
      { tr: "Ticari işlem kaynaklı soruşturmalar", en: "Investigations arising from commercial transactions" },
      { tr: "Ceza yargılamasında temsil", en: "Representation in criminal proceedings" }
    ],
    image: assets.hero2,
    icon: "shield"
  },
  {
    slug: "borclar-hukuku",
    title: { tr: "Borçlar Hukuku", en: "Law of Obligations" },
    summary: {
      tr: "Sözleşmeler, tazminat, borç ilişkileri ve özel hukuk uyuşmazlıklarında sistemli danışmanlık ve dava takibi.",
      en: "Systematic advisory and litigation support for contracts, damages, obligations and private law disputes."
    },
    body: [
      {
        tr: "Borçlar hukuku, kişiler arasındaki borç ilişkilerinin kurulması, ifası, ihlali ve sona ermesine ilişkin genel kuralları kapsar.",
        en: "The law of obligations covers the general rules for formation, performance, breach and termination of obligations between persons."
      },
      {
        tr: "Büro; sözleşmelerin hazırlanması, risklerin tespiti, tazminat talepleri ve uyuşmazlıkların çözümü konularında destek verir.",
        en: "The firm supports contract drafting, risk identification, compensation claims and dispute resolution."
      }
    ],
    bullets: [
      { tr: "Sözleşme hazırlanması ve revizyonu", en: "Contract drafting and revision" },
      { tr: "Tazminat ve sorumluluk talepleri", en: "Damages and liability claims" },
      { tr: "Borç ilişkilerinin sona ermesi", en: "Termination of obligations" }
    ],
    image: assets.realEstate,
    icon: "file-text"
  },
  {
    slug: "alacaklarin-tahsili",
    title: { tr: "Alacakların Tahsili", en: "Collection of Receivables" },
    summary: {
      tr: "Ticari ve bireysel alacakların icra, dava, müzakere ve uzlaşma yolları ile etkin takibi.",
      en: "Effective follow-up of commercial and individual receivables through enforcement, litigation, negotiation and settlement."
    },
    body: [
      {
        tr: "Alacakların tahsili, doğru strateji, zamanında işlem ve borçlunun mali-hukuki durumunun dikkatli değerlendirilmesini gerektirir.",
        en: "Collection of receivables requires the right strategy, timely action and careful assessment of the debtor's legal and financial position."
      },
      {
        tr: "Aksaç Hukuk, ihtar, icra takibi, dava, haciz ve uzlaşma süreçlerinde müvekkil menfaatini koruyacak şekilde takip yürütür.",
        en: "Aksaç Law follows notice, enforcement, litigation, attachment and settlement processes while protecting client interests."
      }
    ],
    bullets: [
      { tr: "İcra ve iflas takibi", en: "Enforcement and bankruptcy proceedings" },
      { tr: "Ticari alacakların tahsili", en: "Collection of commercial receivables" },
      { tr: "Uzlaşma ve ödeme protokolleri", en: "Settlement and payment protocols" }
    ],
    image: assets.about,
    icon: "receipt"
  }
];

export const teamMembers: TeamMember[] = [
  {
    slug: "aykut-tolga-aksac",
    name: "Aykut Tolga AKSAÇ",
    role: { tr: "Kurucu - Avukat, Arabulucu", en: "Founder - Attorney, Mediator" },
    image: "/assets/aksac/tolga.jpg",
    bio: [
      {
        tr: "Av.Arb. Aykut Tolga AKSAÇ 1972 doğumludur. Bursa Işıklar Askeri Lisesi'nin ardından Ankara Üniversitesi Hukuk Fakültesi'ni 1996 yılında tamamlamıştır.",
        en: "Attorney and Mediator Aykut Tolga AKSAÇ was born in 1972. After Bursa Işıklar Military High School, he graduated from Ankara University Faculty of Law in 1996."
      },
      {
        tr: "1997 yılında avukat olarak uluslararası hukuk bürolarında çalışmaya başlamış, yönetici avukat olarak faaliyetlerine devam etmiş ve kendi hukuk bürosunu kurmuştur.",
        en: "He began practicing in international law offices in 1997, continued as a managing attorney and later founded his own law office."
      },
      {
        tr: "Bankacılık, ticaret, ihracat ve kambiyo mevzuatı, icra ve iflas, sigorta, krediler, iş, gayrimenkul, marka ve patent hukuku alanlarında deneyim sahibidir.",
        en: "He has experience in banking, commercial law, export and foreign exchange legislation, enforcement and bankruptcy, insurance, credit, labour, real estate, trademark and patent law."
      }
    ],
    specialties: [
      { tr: "Bankacılık Hukuku", en: "Banking Law" },
      { tr: "Ticaret Hukuku", en: "Commercial Law" },
      { tr: "İcra ve İflas Hukuku", en: "Enforcement and Bankruptcy Law" }
    ]
  },
  {
    slug: "avsar-yalcin-altun",
    name: "Avşar Yalçın ALTUN",
    role: { tr: "Avukat", en: "Attorney" },
    image: "/assets/aksac/avsar.jpg",
    bio: [
      {
        tr: "Avşar Yalçın ALTUN, Aksaç Hukuk ekibinde avukat olarak görev yapmaktadır.",
        en: "Avşar Yalçın ALTUN serves as an attorney in the Aksaç Law team."
      },
      {
        tr: "Büro çalışma alanları kapsamında özel hukuk uyuşmazlıkları, dava takibi ve danışmanlık süreçlerinde müvekkillere destek verir.",
        en: "He supports clients in private law disputes, litigation follow-up and advisory processes within the firm's practice areas."
      }
    ],
    specialties: [
      { tr: "Özel Hukuk", en: "Private Law" },
      { tr: "Dava Takibi", en: "Litigation Follow-up" },
      { tr: "Danışmanlık", en: "Advisory" }
    ]
  },
  {
    slug: "faruk-yetgin",
    name: "Faruk YETGİN",
    role: { tr: "Avukat", en: "Attorney" },
    image: "/assets/aksac/faruk.jpg",
    bio: [
      {
        tr: "Faruk YETGİN, Aksaç Hukuk ekibinde avukat olarak görev yapmaktadır.",
        en: "Faruk YETGİN serves as an attorney in the Aksaç Law team."
      },
      {
        tr: "Büro faaliyetleri kapsamında dava, icra ve danışmanlık süreçlerinde rol alır.",
        en: "He takes part in litigation, enforcement and advisory work within the firm's activities."
      }
    ],
    specialties: [
      { tr: "Dava Süreçleri", en: "Litigation" },
      { tr: "İcra Takibi", en: "Enforcement Proceedings" },
      { tr: "Ticari Uyuşmazlıklar", en: "Commercial Disputes" }
    ]
  },
  {
    slug: "dilek-tosun",
    name: "Dilek TOSUN",
    role: { tr: "Yönetici Asistanı", en: "Executive Assistant" },
    image: "/assets/aksac/dilektosun.jpg",
    bio: [
      {
        tr: "Dilek TOSUN, Aksaç Hukuk'ta yönetici asistanı olarak idari süreçlerin koordinasyonuna katkı sağlar.",
        en: "Dilek TOSUN contributes to administrative coordination at Aksaç Law as executive assistant."
      }
    ],
    specialties: [
      { tr: "Ofis Koordinasyonu", en: "Office Coordination" },
      { tr: "Müvekkil İletişimi", en: "Client Communication" },
      { tr: "İdari Süreçler", en: "Administrative Processes" }
    ]
  },
  {
    slug: "faruk-meyvaci",
    name: "Faruk MEYVACI",
    role: { tr: "Hukuk Katibi", en: "Legal Clerk" },
    image: "/assets/aksac/ayaz.jpg",
    bio: [
      {
        tr: "Faruk MEYVACI, Aksaç Hukuk'ta hukuk katibi olarak dosya ve takip süreçlerinde görev yapar.",
        en: "Faruk MEYVACI serves as legal clerk at Aksaç Law, supporting file and follow-up processes."
      }
    ],
    specialties: [
      { tr: "Dosya Takibi", en: "File Follow-up" },
      { tr: "İcra Süreçleri", en: "Enforcement Processes" },
      { tr: "Adliye İşlemleri", en: "Court Administration" }
    ]
  }
];

export const audiences = [
  {
    title: { tr: "Yurtiçi ve Yurtdışı", en: "Domestic and International" },
    text: {
      tr: "Özel hukuk alanında, Türkiye'de ve yurtdışı bağlantılı işlemlerde müvekkil beklentilerine uygun destek.",
      en: "Private law support tailored to client expectations in Turkey and cross-border matters."
    },
    image: assets.hero3
  },
  {
    title: { tr: "Şirketler", en: "Companies" },
    text: {
      tr: "Ticaret, şirketler, bankacılık, alacak ve sözleşme süreçleri için kurumsal çözüm ortaklığı.",
      en: "Corporate legal partnership for commercial, company, banking, receivables and contract matters."
    },
    image: assets.service
  },
  {
    title: { tr: "Bireysel Müvekkiller", en: "Individual Clients" },
    text: {
      tr: "Gayrimenkul, aile, borçlar ve özel hukuk uyuşmazlıklarında dikkatli ve doğrudan destek.",
      en: "Careful and direct support for real estate, family, obligations and private law disputes."
    },
    image: assets.about
  }
];

export const articles: Article[] = [
  {
    slug: "veri-sorumlularinin-kvkk-kapsamindaki-hukuki-durumu",
    title: {
      tr: "Veri Sorumlularının KVKK Kapsamındaki Hukuki Durumu",
      en: "Legal Status of Data Controllers Under the KVKK"
    },
    date: "2021-12-28",
    category: { tr: "Kişisel Verilerin Korunması", en: "Data Protection" },
    summary: {
      tr: "6698 sayılı Kanun kapsamında veri sorumlusunun konumu, yükümlülükleri ve sorumluluk alanı.",
      en: "The role, obligations and liability scope of data controllers under Turkish data protection law."
    },
    author: "Av. Aslı Lalezar",
    image: "/assets/aksac/blog-verisorumlu.jpg",
    body: [
      "6698 sayılı Kişisel Verilerin Korunması Kanunu, kişisel verilerin işlenmesinde gerçek kişilerin temel hak ve özgürlüklerini korumayı ve kişisel veri işleyen gerçek ve tüzel kişilerin yükümlülüklerini düzenlemeyi amaçlar.",
      "Kanun sistematiğinde veri sorumlusu, kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan kişidir. Bu nedenle veri sorumlusunun hukuki durumu yalnızca teknik bir kayıt yükümlülüğüyle sınırlı değildir; aydınlatma, veri güvenliği, başvuru cevaplama ve hukuka uygun işleme süreçlerini de kapsar.",
      "Veri sorumlusu, kişisel verileri işlerken hukuka ve dürüstlük kurallarına uygun hareket etmeli, verilerin doğru ve gerektiğinde güncel olmasını sağlamalı, belirli, açık ve meşru amaçlar doğrultusunda işlem yapmalı ve işlenen verileri amaçla bağlantılı, sınırlı ve ölçülü tutmalıdır.",
      "Kişisel verilerin açık rıza olmaksızın işlenebildiği haller Kanun'da sınırlı olarak sayılmıştır. Bu istisnaların dışında kalan veri işleme faaliyetlerinde ilgili kişinin özgür iradesine dayanan, belirli konuya ilişkin ve bilgilendirmeye dayalı açık rızası aranır.",
      "Veri sorumluları, ilgili kişilerden gelen başvuruları kanuni süre içinde sonuçlandırmalı; veri güvenliğine ilişkin teknik ve idari tedbirleri almalı; ihlal halinde Kurul ve ilgili kişilere bildirim süreçlerini doğru şekilde işletmelidir.",
      "KVKK'ya aykırı hareket edilmesi, idari para cezaları yanında özel hukuk ve ceza hukuku bakımından da sonuç doğurabilir. Bu nedenle veri sorumlularının faaliyetlerini düzenli olarak denetlemesi, veri envanteri ve aydınlatma metinlerini güncel tutması önem taşır."
    ],
    sourceUrl: "https://aksac.av.tr/VeriSorumlulari.aspx"
  },
  {
    slug: "is-yerinde-mobbing",
    title: {
      tr: "İş Yerinde Mobbing",
      en: "Mobbing in the Workplace"
    },
    date: "2021-10-20",
    category: { tr: "İş Hukuku", en: "Labour Law" },
    summary: {
      tr: "İş yerinde psikolojik tacizin unsurları, ispatı ve işçi-işveren ilişkisine etkileri.",
      en: "Elements, proof and employment-law consequences of psychological harassment at work."
    },
    author: "Av. Avşar Yalçın ALTUN",
    image: "/assets/aksac/blog-mobbing.jpg",
    body: [
      "Mobbing, iş yerinde bir kişiye karşı sistematik biçimde uygulanan, kişiyi yıldırmaya, dışlamaya veya çalışma ortamından uzaklaştırmaya yönelen psikolojik baskı davranışlarını ifade eder.",
      "Her olumsuz davranış mobbing olarak nitelendirilemez. Mobbingden söz edebilmek için davranışların süreklilik göstermesi, hedef alınan kişi üzerinde baskı oluşturması ve iş ilişkisinin olağan yönetim hakkı sınırlarını aşması gerekir.",
      "Yargısal değerlendirmelerde mobbing iddiası; tanık anlatımları, yazışmalar, görev değişiklikleri, performans baskısı, disiplin süreçleri, sağlık kayıtları ve iş yerindeki somut olay örgüsü birlikte dikkate alınarak incelenir.",
      "İşveren, çalışanların kişilik haklarını korumak ve sağlıklı bir çalışma ortamı sağlamakla yükümlüdür. İş yerinde psikolojik tacize göz yumulması veya gerekli önlemlerin alınmaması, işverenin hukuki sorumluluğunu gündeme getirebilir.",
      "Mobbinge maruz kalan işçi, şartları oluştuğunda iş sözleşmesini haklı nedenle feshedebilir; manevi tazminat, maddi zararların giderilmesi ve diğer işçilik alacakları bakımından hukuki yollara başvurabilir.",
      "Uyuşmazlıklarda olayların kronolojik biçimde belgelenmesi, yazılı delillerin korunması ve dava ya da arabuluculuk sürecine hazırlığın dikkatle yapılması önemlidir."
    ],
    sourceUrl: "https://aksac.av.tr/Mobbing.aspx"
  },
  {
    slug: "konkordato-davalarinda-cekismeli-alacaklar",
    title: {
      tr: "Konkordato Davalarında Çekişmeli Alacaklar",
      en: "Disputed Receivables in Concordat Proceedings"
    },
    date: "2021-09-17",
    category: { tr: "Konkordato", en: "Concordat" },
    summary: {
      tr: "Konkordato sürecinde borçlu tarafından kabul edilmeyen veya miktarı tartışmalı alacakların durumu.",
      en: "The treatment of receivables disputed by the debtor or contested in amount during concordat proceedings."
    },
    author: "Av. Büşra KAYILI",
    image: "/assets/aksac/blog-konkordato.jpg",
    body: [
      "Konkordato, borçlarını vadesinde ödeyemeyen veya ödeyememe tehlikesi altında bulunan borçlunun, alacaklılarıyla belirli şartlar altında yeniden yapılandırma zemini kurmasını sağlayan hukuki bir kurumdur.",
      "Konkordato yargılamasında alacaklıların bildirimi, borçlunun alacaklara ilişkin beyanı ve komiserin değerlendirmesi önemlidir. Borçlu tarafından kabul edilmeyen veya miktarı tartışmalı olan alacaklar çekişmeli alacak niteliği kazanır.",
      "Çekişmeli alacakların konkordato nisabına dahil edilip edilmeyeceği mahkemenin değerlendirmesine tabidir. Mahkeme, alacağın varlığına ilişkin ilk görünüş incelemesi yaparak geçici kabul veya ret yönünde karar verebilir.",
      "Alacağı çekişmeli hale gelen alacaklı bakımından, konkordato projesinden yararlanma, teminat ve oy hakkı gibi konular ayrı ayrı değerlendirilmelidir. Mahkemenin konkordato sürecindeki kabul kararı, alacağın maddi hukuk anlamında kesin olarak varlığını ispatlamaz.",
      "Alacağın esasına ilişkin uyuşmazlık, genel hükümlere göre açılacak dava veya devam eden yargılama içinde çözümlenir. Bu nedenle alacaklıların bildirim, itiraz ve dava sürelerini yakından takip etmesi gerekir.",
      "Konkordato dosyalarında çekişmeli alacakların doğru konumlandırılması, hem borçlu şirketin yeniden yapılandırma planı hem de alacaklıların tahsil stratejisi bakımından belirleyici sonuçlar doğurur."
    ],
    sourceUrl: "https://aksac.av.tr/KonkordatoAlacaklar.aspx"
  },
  {
    slug: "icra-takibi-asamalari",
    title: {
      tr: "İcra Takibi Aşamaları",
      en: "Stages of Enforcement Proceedings"
    },
    date: "2021-08-27",
    category: { tr: "İcra ve İflas Hukuku", en: "Enforcement and Bankruptcy Law" },
    summary: {
      tr: "Alacağın tahsili için başlatılan icra takibinin ödeme emrinden haciz ve tahsile uzanan temel aşamaları.",
      en: "The basic stages of enforcement proceedings from payment order to attachment and collection."
    },
    author: "Av. Faruk YETGİN",
    image: "/assets/aksac/blog-genelhaciz.jpg",
    body: [
      "İcra takibi, alacaklının alacağını devlet eliyle tahsil edebilmesi için İcra ve İflas Kanunu çerçevesinde başvurduğu hukuki takip yoludur. Takibin türü, alacağın dayanağına ve eldeki belgeye göre belirlenir.",
      "İlamsız takipte alacaklı, takip talebiyle icra dairesine başvurur. İcra dairesi borçluya ödeme emri gönderir ve borçluya borca, faize, yetkiye veya imzaya itiraz edebilmesi için kanuni süre tanınır.",
      "Borçlu süresinde itiraz etmezse takip kesinleşir. Borçlu itiraz ederse takip durur; alacaklı, alacağın niteliğine göre itirazın kaldırılması veya itirazın iptali yoluna başvurabilir.",
      "Takibin kesinleşmesiyle birlikte alacaklı haciz talep edebilir. Haciz aşamasında borçlunun taşınır ve taşınmaz malları, banka hesapları, üçüncü kişilerdeki hak ve alacakları ile maaş haczi gibi değerler takip konusu yapılabilir.",
      "Haczedilen malların satışı ve satış bedelinin dosyaya alınması, tahsil sürecinin devamıdır. Satış ve paraların paylaştırılması aşamalarında sıra cetveli, rehinli alacaklar ve diğer alacaklıların konumu dikkate alınır.",
      "İcra takiplerinde süreler kısa ve sonuçları ağırdır. Bu nedenle ödeme emri tebliği, itiraz, haciz, satış ve tahsil aşamalarının her birinde dosya stratejisinin belgelerle birlikte planlanması gerekir."
    ],
    sourceUrl: "https://aksac.av.tr/IcraTakibiAsamalari.aspx"
  },
  {
    slug: "uluslararasi-alanda-marka-tescili-ve-korumasi",
    title: {
      tr: "Uluslararası Alanda Marka Tescili ve Koruması",
      en: "International Trademark Registration and Protection"
    },
    date: "2021-07-28",
    category: { tr: "Marka Hukuku", en: "Trademark Law" },
    summary: {
      tr: "Markaların yurt dışında tescili, Madrid sistemi ve uluslararası koruma stratejisinin önemi.",
      en: "Trademark registration abroad, the Madrid system and the importance of an international protection strategy."
    },
    author: "Stj. Av. Aslı LALEZAR",
    image: "/assets/aksac/blog-markatescil.png",
    body: [
      "Marka, bir işletmenin mal veya hizmetlerini diğer işletmelerinkinden ayırt etmeye yarayan işarettir. Markanın tescili, hak sahibine marka üzerinde münhasır kullanım ve koruma imkanı sağlar.",
      "Marka koruması kural olarak ülkeseldir. Türkiye'de tescil edilen bir markanın kendiliğinden başka ülkelerde korunması beklenemez. Bu nedenle ticari faaliyetlerin hedeflendiği ülkelerde ayrıca tescil stratejisi kurulmalıdır.",
      "Uluslararası marka tescilinde Madrid Protokolü, tek başvuru ile birden fazla ülkede koruma talep edilmesine imkan tanıyan pratik bir sistem sunar. Başvuru, ulusal marka veya marka başvurusuna dayanılarak yapılır.",
      "Başvurunun hangi ülkeleri kapsayacağı, markanın kullanım alanı, sektörel hedefler, olası itiraz riskleri ve ticari büyüme planı dikkate alınarak belirlenmelidir.",
      "Tescil sonrası markanın aktif kullanımı, yenileme sürelerinin takibi, benzer marka başvurularına itiraz edilmesi ve ihlal halinde hukuki yolların işletilmesi korumanın devamı için önemlidir.",
      "Uluslararası marka koruması, yalnızca başvuru yapılmasından ibaret değildir; marka portföyünün düzenli izlenmesi ve her ülkenin mevzuatına uygun şekilde yönetilmesi gerekir."
    ],
    sourceUrl: "https://aksac.av.tr/MarkaTescilKorumasi.aspx"
  },
  {
    slug: "faiz-kavrami-ve-ticari-islerde-faiz",
    title: {
      tr: "Faiz Kavramı ve Ticari İşlerde Faiz",
      en: "Interest and Interest in Commercial Transactions"
    },
    date: "2021-08-10",
    category: { tr: "Ticaret Hukuku", en: "Commercial Law" },
    summary: {
      tr: "Faiz kavramı, kanuni faiz, temerrüt faizi ve ticari işlerde faiz uygulamasının temel esasları.",
      en: "The concept of interest, statutory interest, default interest and interest rules in commercial transactions."
    },
    author: "Av. Arife ERTEN",
    image: "/assets/aksac/blog-faiz.jpg",
    body: [
      "Faiz, alacaklının para alacağından belirli bir süre yoksun kalmasının karşılığı olarak borçludan talep edebildiği feri nitelikte bir edimdir. Hukuki niteliği itibarıyla asıl alacağa bağlıdır.",
      "Faiz; kaynağına göre kanuni faiz ve akdi faiz, işlevine göre anapara faizi ve temerrüt faizi olarak ayrılabilir. Tarafların sözleşmede faiz oranı belirleyip belirlemediği, uygulanacak oran bakımından önemlidir.",
      "Ticari işlerde faiz, Türk Ticaret Kanunu ve ilgili özel düzenlemeler çerçevesinde değerlendirilir. Ticari iş niteliği taşıyan ilişkilerde tarafların tacir olup olmaması, borcun türü ve sözleşme hükümleri birlikte incelenmelidir.",
      "Temerrüt faizi, borçlunun muaccel bir para borcunu süresinde ifa etmemesi halinde gündeme gelir. Alacaklının temerrüt faizi talep edebilmesi için borcun muaccel olması ve borçlunun temerrüde düşmüş bulunması gerekir.",
      "Ticari uyuşmazlıklarda faiz başlangıç tarihi, oranı ve türü dava ve icra dosyalarının sonucunu doğrudan etkiler. Bu nedenle ihtar, fatura, sözleşme, vade ve ödeme kayıtlarının doğru değerlendirilmesi gerekir.",
      "Faize ilişkin hatalı hesaplama veya yanlış nitelendirme, alacak takibi ve dava süreçlerinde hak kaybına neden olabilir. Somut olayda uygulanacak faiz türü ve oranı, ilgili mevzuat ve sözleşme hükümleri birlikte ele alınarak belirlenmelidir."
    ],
    sourceUrl: "https://aksac.av.tr/FaizKavrami.aspx"
  }
];

export const usefulLinks = [
  { title: "HSK Yargı Sınırları (Makale)", href: "https://aksac.av.tr/Hsk-Yargi-Sinirlari.pdf" },
  { title: "Adalet Bakanlığı", href: "https://www.adalet.gov.tr/" },
  { title: "Türkiye Barolar Birliği", href: "https://www.barobirlik.org.tr/" },
  { title: "İstanbul Barosu", href: "https://www.istanbulbarosu.org.tr/" },
  { title: "Yargıtay", href: "https://www.yargitay.gov.tr/" },
  { title: "Danıştay", href: "https://www.danistay.gov.tr/" },
  { title: "Sayıştay", href: "https://www.sayistay.gov.tr/" },
  { title: "İnsan Hakları Mahkemesi", href: "https://www.echr.coe.int/" },
  { title: "T.C. Mevzuat", href: "https://www.mevzuat.gov.tr/" }
];

export const legalPages = [
  {
    slug: "terms-and-conditions",
    title: { tr: "Kullanım Koşulları", en: "Terms and Conditions" }
  },
  {
    slug: "privacy-notice",
    title: { tr: "Gizlilik Bildirimi", en: "Privacy Notice" }
  },
  {
    slug: "cookie-policy",
    title: { tr: "Çerez Politikası", en: "Cookie Policy" }
  },
  {
    slug: "disclaimers",
    title: { tr: "Yasal Uyarılar", en: "Disclaimers" }
  }
];

export function t(text: LocalizedText, lang: Lang): string {
  return text[lang];
}

export function localizedPath(lang: Lang, path = ""): string {
  const clean = path.replace(/^\/|\/$/g, "");
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "tr" ? "en" : "tr";
}
