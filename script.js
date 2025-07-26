// Global Variables
let selectedDistrict = null;
let isMenuOpen = false;
let currentLanguage = "tr";

// Tam çeviri verileri - JSON'dan alındı
const translations = {
  tr: {
    "nav-home": "Ana Sayfa",
    "nav-services": "Hizmetler",
    "nav-gallery": "Galeri",
    "nav-about": "Hakkımızda",
    "nav-contact": "İletişim",
    "call-now": "Hemen Ara",
    "hero-title": "7/24 Çekici Hizmeti",
    "hero-subtitle": "İstanbul'da güvenilir çekici hizmeti",
    "badge-24-7": "7/24 Hizmet",
    "badge-fast": "Hızlı Geliyoruz",
    "badge-safe": "Güvenli Taşıma",
    "cta-call": "HEMEN ARA",
    "cta-location": "KONUM GÖNDER",
    "cta-whatsapp": "WhatsApp ile",
    "cta-note": "Acil durumlarda 15 dakikada yanınızdayız!",
    "section-locations": "Hizmet Verdiğimiz Bölgeler",
    "section-locations-desc": "İstanbul'un her ilçesinde hızlı çekici hizmeti",
    "show-all-districts": "Tüm İlçeleri Göster",
    "show-less-districts": "Daha Az Göster",
    "section-services": "Hizmetlerimiz",
    "section-services-desc": "Her türlü araç için profesyonel çekici hizmeti",
    "service-accident-title": "Kaza Çekici",
    "service-accident-desc":
      "Kaza sonrası güvenli ve hızlı araç taşıma hizmeti",
    "service-accident-feature1": "• Sigortalı taşıma",
    "service-accident-feature2": "• 7/24 hizmet",
    "service-accident-feature3": "• Hızlı müdahale",
    "service-breakdown-title": "Arıza Çekici",
    "service-breakdown-desc": "Motor arızası ve teknik problemler için çekici",
    "service-breakdown-feature1": "• Uzman ekip",
    "service-breakdown-feature2": "• Modern araçlar",
    "service-breakdown-feature3": "• Uygun fiyat",
    "service-roadside-title": "Yol Yardım",
    "service-roadside-desc": "Lastik tamiri, marş yardımı ve acil müdahale",
    "service-roadside-feature1": "• Lastik değişimi",
    "service-roadside-feature2": "• Akü takviyesi",
    "service-roadside-feature3": "• Yakıt ikmali",
    "service-garage-title": "Garaj Taşıma",
    "service-garage-desc": "Araç garaj taşıma ve park etme hizmeti",
    "service-garage-feature1": "• Güvenli taşıma",
    "service-garage-feature2": "• Özenli hizmet",
    "service-garage-feature3": "• Kapıdan kapıya",
    "service-motorcycle-title": "Motosiklet Çekici",
    "service-motorcycle-desc": "Motosiklet ve scooter taşıma hizmeti",
    "service-motorcycle-feature1": "• Özel platform",
    "service-motorcycle-feature2": "• Güvenli bağlama",
    "service-motorcycle-feature3": "• Hasar koruması",
    "service-heavy-title": "Ağır Vasıta Çekici",
    "service-heavy-desc": "Kamyon, minibüs ve ağır araç çekici hizmeti",
    "service-heavy-feature1": "• Ağır tonajlı",
    "service-heavy-feature2": "• Profesyonel ekip",
    "service-heavy-feature3": "• Özel ekipman",
    "section-gallery": "Çekici Filomuz",
    "section-gallery-desc": "Modern ve güvenilir çekici araçlarımız",
    "gallery-city-title": "Şehir İçi Çekici",
    "gallery-city-desc": "Dar alanlarda kolay manevra",
    "gallery-heavy-title": "Ağır Tonajlı Çekici",
    "gallery-heavy-desc": "Büyük araçlar için özel çekici",
    "gallery-light-title": "Hafif Araç Çekici",
    "gallery-light-desc": "Otomobiller için ideal",
    "gallery-emergency-title": "Acil Müdahale Aracı",
    "gallery-emergency-desc": "7/24 hazır beklemede",
    "gallery-platform-title": "Platform Çekici",
    "gallery-platform-desc": "Lüks araçlar için özel",
    "gallery-hybrid-title": "Hibrit Çekici",
    "gallery-hybrid-desc": "Çevre dostu teknoloji",
    "section-about": "Hakkımızda",
    "section-about-desc": "2022'den beri İstanbul'da güvenilir çekici hizmeti",
    "about-story-p1":
      "Borcelle Çekici Servisi olarak, İstanbul genelinde 7/24 kesintisiz hizmet veren bir aile şirketiyiz. 2022 yılından bu yana binlerce müşterimizin güvenini kazandık.",
    "about-story-p2":
      "Modern çekici filosumuz ve deneyimli ekibimizle, en zor durumlarınızda yanınızdayız. İstanbul merkezli olarak faaliyet gösteriyoruz ve şehrin her köşesine hızla ulaşabilmekteyiz.",
    "value-satisfaction-title": "Müşteri Memnuniyeti",
    "value-satisfaction-desc": "Her müşterimizi aile ferdi gibi görürüz",
    "value-reliable-title": "Güvenilir Hizmet",
    "value-reliable-desc": "Sigortalı ve güvenli taşıma garantisi",
    "value-fast-title": "Hızlı Müdahale",
    "value-fast-desc": "15 dakika içinde olay yerine ulaşım",
    "section-contact": "İletişim",
    "section-contact-desc": "Acil durumlarınızda bize hemen ulaşın",
    "contact-phone1": "Telefon 1",
    "contact-phone2": "Telefon 2",
    "contact-hours": "Çalışma Saatleri",
    "contact-hours-text": "7/24 Her Gün Açık",
    "contact-office": "Ofis Adresimiz",
    "contact-office-text": "Bakırköy, İstanbul",
    "contact-map-link": "Haritada Görüntüle",
    "contact-service-area": "Hizmet Alanı",
    "contact-service-area-text": "İstanbul Geneli",
    "contact-email": "E-posta",
    "footer-company-name": "Borcelle Çekici Servisi",
    "footer-desc":
      "İstanbul'da güvenilir çekici hizmeti. 2022'den beri binlerce müşterimizin güvenini kazandık.",
    "footer-services-title": "Hizmetlerimiz",
    "footer-service-accident": "Kaza Çekici",
    "footer-service-breakdown": "Arıza Çekici",
    "footer-service-roadside": "Yol Yardım",
    "footer-service-garage": "Garaj Taşıma",
    "footer-quick-links": "Hızlı Bağlantılar",
    "footer-link-home": "Ana Sayfa",
    "footer-link-about": "Hakkımızda",
    "footer-link-gallery": "Galeri",
    "footer-link-contact": "İletişim",
    "footer-contact-title": "İletişim",
    "footer-location": "İstanbul Geneli",
    "footer-service-text": "7/24 Hizmet",
    "footer-copyright": "© 2022 Borcelle Çekici Servisi. Tüm hakları saklıdır.",
  },
  en: {
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-gallery": "Gallery",
    "nav-about": "About",
    "nav-contact": "Contact",
    "call-now": "Call Now",
    "hero-title": "24/7 Tow Service",
    "hero-subtitle": "Reliable tow service in Istanbul",
    "badge-24-7": "24/7 Service",
    "badge-fast": "Fast Response",
    "badge-safe": "Safe Transport",
    "cta-call": "CALL NOW",
    "cta-location": "SEND LOCATION",
    "cta-whatsapp": "via WhatsApp",
    "cta-note": "We'll be there in 15 minutes in emergencies!",
    "section-locations": "Service Areas",
    "section-locations-desc": "Fast tow service in all districts of Istanbul",
    "show-all-districts": "Show All Districts",
    "show-less-districts": "Show Less",
    "section-services": "Our Services",
    "section-services-desc":
      "Professional tow service for all types of vehicles",
    "service-accident-title": "Accident Towing",
    "service-accident-desc": "Safe and fast vehicle transport after accidents",
    "service-accident-feature1": "• Insured transport",
    "service-accident-feature2": "• 24/7 service",
    "service-accident-feature3": "• Quick response",
    "service-breakdown-title": "Breakdown Towing",
    "service-breakdown-desc":
      "Towing for engine failures and technical problems",
    "service-breakdown-feature1": "• Expert team",
    "service-breakdown-feature2": "• Modern vehicles",
    "service-breakdown-feature3": "• Affordable prices",
    "service-roadside-title": "Roadside Assistance",
    "service-roadside-desc": "Tire repair, jump start and emergency assistance",
    "service-roadside-feature1": "• Tire change",
    "service-roadside-feature2": "• Battery boost",
    "service-roadside-feature3": "• Fuel delivery",
    "service-garage-title": "Garage Transport",
    "service-garage-desc": "Vehicle garage transport and parking service",
    "service-garage-feature1": "• Safe transport",
    "service-garage-feature2": "• Careful service",
    "service-garage-feature3": "• Door to door",
    "service-motorcycle-title": "Motorcycle Towing",
    "service-motorcycle-desc": "Motorcycle and scooter transport service",
    "service-motorcycle-feature1": "• Special platform",
    "service-motorcycle-feature2": "• Secure fastening",
    "service-motorcycle-feature3": "• Damage protection",
    "service-heavy-title": "Heavy Vehicle Towing",
    "service-heavy-desc": "Truck, minibus and heavy vehicle towing service",
    "service-heavy-feature1": "• Heavy tonnage",
    "service-heavy-feature2": "• Professional team",
    "service-heavy-feature3": "• Special equipment",
    "section-gallery": "Our Fleet",
    "section-gallery-desc": "Modern and reliable tow vehicles",
    "gallery-city-title": "City Tow Truck",
    "gallery-city-desc": "Easy maneuvering in narrow areas",
    "gallery-heavy-title": "Heavy Duty Tow Truck",
    "gallery-heavy-desc": "Special tow truck for large vehicles",
    "gallery-light-title": "Light Vehicle Tow Truck",
    "gallery-light-desc": "Ideal for automobiles",
    "gallery-emergency-title": "Emergency Response Vehicle",
    "gallery-emergency-desc": "Ready 24/7",
    "gallery-platform-title": "Platform Tow Truck",
    "gallery-platform-desc": "Special for luxury cars",
    "gallery-hybrid-title": "Hybrid Tow Truck",
    "gallery-hybrid-desc": "Eco-friendly technology",
    "section-about": "About Us",
    "section-about-desc": "Reliable tow service in Istanbul since 2022",
    "about-story-p1":
      "As Borcelle Tow Service, we are a family company providing 24/7 continuous service throughout Istanbul. Since 2022, we have earned the trust of thousands of customers.",
    "about-story-p2":
      "With our modern tow fleet and experienced team, we are with you in your most difficult situations. We operate based in Istanbul and can quickly reach every corner of the city.",
    "value-satisfaction-title": "Customer Satisfaction",
    "value-satisfaction-desc": "We see every customer as a family member",
    "value-reliable-title": "Reliable Service",
    "value-reliable-desc": "Insured and safe transport guarantee",
    "value-fast-title": "Fast Response",
    "value-fast-desc": "Arrival at the scene within 15 minutes",
    "section-contact": "Contact",
    "section-contact-desc": "Contact us immediately in emergencies",
    "contact-phone1": "Phone 1",
    "contact-phone2": "Phone 2",
    "contact-hours": "Working Hours",
    "contact-hours-text": "24/7 Open Every Day",
    "contact-office": "Our Office Address",
    "contact-office-text": "Bakırköy, Istanbul",
    "contact-map-link": "View on Map",
    "contact-service-area": "Service Area",
    "contact-service-area-text": "Istanbul Wide",
    "contact-email": "Email",
    "footer-company-name": "Borcelle Tow Service",
    "footer-desc":
      "Reliable tow service in Istanbul. We have earned the trust of thousands of customers since 2022.",
    "footer-services-title": "Our Services",
    "footer-service-accident": "Accident Towing",
    "footer-service-breakdown": "Breakdown Towing",
    "footer-service-roadside": "Roadside Assistance",
    "footer-service-garage": "Garage Transport",
    "footer-quick-links": "Quick Links",
    "footer-link-home": "Home",
    "footer-link-about": "About",
    "footer-link-gallery": "Gallery",
    "footer-link-contact": "Contact",
    "footer-contact-title": "Contact",
    "footer-location": "Istanbul Wide",
    "footer-service-text": "24/7 Service",
    "footer-copyright": "© 2022 Borcelle Tow Service. All rights reserved.",
  },
  ru: {
    "nav-home": "Главная",
    "nav-services": "Услуги",
    "nav-gallery": "Галерея",
    "nav-about": "О нас",
    "nav-contact": "Контакты",
    "call-now": "Звонить",
    "hero-title": "Эвакуатор 24/7",
    "hero-subtitle": "Надежная служба эвакуации в Стамбуле",
    "badge-24-7": "Служба 24/7",
    "badge-fast": "Быстрый ответ",
    "badge-safe": "Безопасная перевозка",
    "cta-call": "ЗВОНИТЬ",
    "cta-location": "ОТПРАВИТЬ МЕСТОПОЛОЖЕНИЕ",
    "cta-whatsapp": "через WhatsApp",
    "cta-note": "При чрезвычайных ситуациях мы будем там через 15 минут!",
    "section-locations": "Районы обслуживания",
    "section-locations-desc":
      "Быстрая служба эвакуации во всех районах Стамбула",
    "show-all-districts": "Показать все районы",
    "show-less-districts": "Показать меньше",
    "section-services": "Наши услуги",
    "section-services-desc":
      "Профессиональная служба эвакуации для всех типов транспортных средств",
    "service-accident-title": "Эвакуация после ДТП",
    "service-accident-desc":
      "Безопасная и быстрая перевозка автомобилей после аварий",
    "service-accident-feature1": "• Застрахованная перевозка",
    "service-accident-feature2": "• Служба 24/7",
    "service-accident-feature3": "• Быстрое реагирование",
    "service-breakdown-title": "Эвакуация при поломке",
    "service-breakdown-desc":
      "Эвакуация при поломке двигателя и технических проблемах",
    "service-breakdown-feature1": "• Команда экспертов",
    "service-breakdown-feature2": "• Современные автомобили",
    "service-breakdown-feature3": "• Доступные цены",
    "service-roadside-title": "Помощь на дороге",
    "service-roadside-desc": "Ремонт шин, запуск двигателя и экстренная помощь",
    "service-roadside-feature1": "• Замена шин",
    "service-roadside-feature2": "• Подзарядка аккумулятора",
    "service-roadside-feature3": "• Доставка топлива",
    "service-garage-title": "Перевозка в гараж",
    "service-garage-desc": "Перевозка автомобилей в гараж и парковочные услуги",
    "service-garage-feature1": "• Безопасная перевозка",
    "service-garage-feature2": "• Бережное обслуживание",
    "service-garage-feature3": "• От двери до двери",
    "service-motorcycle-title": "Эвакуация мотоциклов",
    "service-motorcycle-desc": "Услуги перевозки мотоциклов и скутеров",
    "service-motorcycle-feature1": "• Специальная платформа",
    "service-motorcycle-feature2": "• Надежное крепление",
    "service-motorcycle-feature3": "• Защита от повреждений",
    "service-heavy-title": "Эвакуация грузовых автомобилей",
    "service-heavy-desc":
      "Услуги эвакуации грузовиков, микроавтобусов и тяжелых транспортных средств",
    "service-heavy-feature1": "• Большой тоннаж",
    "service-heavy-feature2": "• Профессиональная команда",
    "service-heavy-feature3": "• Специальное оборудование",
    "section-gallery": "Наш автопарк",
    "section-gallery-desc": "Современные и надежные эвакуаторы",
    "gallery-city-title": "Городской эвакуатор",
    "gallery-city-desc": "Легкое маневрирование в узких местах",
    "gallery-heavy-title": "Тяжелый эвакуатор",
    "gallery-heavy-desc": "Специальный эвакуатор для больших автомобилей",
    "gallery-light-title": "Легкий эвакуатор",
    "gallery-light-desc": "Идеально подходит для автомобилей",
    "gallery-emergency-title": "Автомобиль экстренного реагирования",
    "gallery-emergency-desc": "Готов 24/7",
    "gallery-platform-title": "Платформенный эвакуатор",
    "gallery-platform-desc": "Специально для роскошных автомобилей",
    "gallery-hybrid-title": "Гибридный эвакуатор",
    "gallery-hybrid-desc": "Экологически чистая технология",
    "section-about": "О нас",
    "section-about-desc": "Надежная служба эвакуации в Стамбуле с 2022 года",
    "about-story-p1":
      "Как служба эвакуации Borcelle, мы семейная компания, предоставляющая круглосуточную непрерывную службу по всему Стамбулу. С 2022 года мы завоевали доверие тысяч клиентов.",
    "about-story-p2":
      "С нашим современным автопарком эвакуаторов и опытной командой мы с вами в самых сложных ситуациях. Мы работаем из Стамбула и можем быстро добраться до любого уголка города.",
    "value-satisfaction-title": "Удовлетворение клиентов",
    "value-satisfaction-desc":
      "Мы рассматриваем каждого клиента как члена семьи",
    "value-reliable-title": "Надежный сервис",
    "value-reliable-desc": "Гарантия застрахованной и безопасной перевозки",
    "value-fast-title": "Быстрое реагирование",
    "value-fast-desc": "Прибытие на место в течение 15 минут",
    "section-contact": "Контакты",
    "section-contact-desc":
      "Немедленно обращайтесь к нам в чрезвычайных ситуациях",
    "contact-phone1": "Телефон 1",
    "contact-phone2": "Телефон 2",
    "contact-hours": "Часы работы",
    "contact-hours-text": "24/7 Открыто каждый день",
    "contact-office": "Адрес нашего офиса",
    "contact-office-text": "Бакыркёй, Стамбул",
    "contact-map-link": "Посмотреть на карте",
    "contact-service-area": "Область обслуживания",
    "contact-service-area-text": "По всему Стамбулу",
    "contact-email": "Электронная почта",
    "footer-company-name": "Служба эвакуации Borcelle",
    "footer-desc":
      "Надежная служба эвакуации в Стамбуле. С 2022 года мы завоевали доверие тысяч клиентов.",
    "footer-services-title": "Наши услуги",
    "footer-service-accident": "Эвакуация после ДТП",
    "footer-service-breakdown": "Эвакуация при поломке",
    "footer-service-roadside": "Помощь на дороге",
    "footer-service-garage": "Перевозка в гараж",
    "footer-quick-links": "Быстрые ссылки",
    "footer-link-home": "Главная",
    "footer-link-about": "О нас",
    "footer-link-gallery": "Галерея",
    "footer-link-contact": "Контакты",
    "footer-contact-title": "Контакты",
    "footer-location": "По всему Стамбулу",
    "footer-service-text": "Служба 24/7",
    "footer-copyright": "© 2022 Служба эвакуации Borcelle. Все права защищены.",
  },
};

// İstanbul İlçeleri Listesi
const allDistricts = [
  "Adalar",
  "Arnavutköy",
  "Ataşehir",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beykoz",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Çekmeköy",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kadıköy",
  "Kağıthane",
  "Kartal",
  "Küçükçekmece",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sarıyer",
  "Silivri",
  "Sultanbeyli",
  "Sultangazi",
  "Şile",
  "Şişli",
  "Tuzla",
  "Ümraniye",
  "Üsküdar",
  "Zeytinburnu",
];

// DOM yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Ana başlatma fonksiyonu
function initializeApp() {
  setupNavigation();
  setupScrollEffects();
  setupLocationSelection();
  setupGalleryModal();
  setupBackToTop();
  detectUserLocation();
  attachEventListeners();
  initializeTypewriter();
  setupLanguageSelector();
}

// Typewriter efekti - Global değişkenler
let typewriterInterval = null;
let typewriterTimeout = null;

// Typewriter efekti
function initializeTypewriter() {
  startTypewriterForLanguage(currentLanguage);
}

function startTypewriterForLanguage(lang) {
  // Önce mevcut typewriter'ı durdur
  stopTypewriter();

  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  const text = translations[lang]["hero-title"] || "7/24 Çekici Hizmeti";
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    if (!isDeleting && index < text.length) {
      typewriterElement.textContent = text.substring(0, index + 1);
      index++;
      typewriterTimeout = setTimeout(typeWriter, 150);
    } else if (!isDeleting && index >= text.length) {
      typewriterTimeout = setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 2000);
    } else if (isDeleting && index > 0) {
      typewriterElement.textContent = text.substring(0, index - 1);
      index--;
      typewriterTimeout = setTimeout(typeWriter, 100);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      typewriterTimeout = setTimeout(typeWriter, 500);
    }
  }

  // Yeni typewriter'ı başlat
  typeWriter();
}

// Typewriter'ı durdur
function stopTypewriter() {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout);
    typewriterTimeout = null;
  }
  if (typewriterInterval) {
    clearInterval(typewriterInterval);
    typewriterInterval = null;
  }
}

// Typewriter'ı sıfırla ve yeni dilde başlat
function resetTypewriterForLanguage(lang) {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  // Önce typewriter'ı durdur
  stopTypewriter();

  // Metni sıfırla
  typewriterElement.textContent = "";

  // Kısa bir beklemeden sonra yeni dilde başlat
  setTimeout(() => {
    startTypewriterForLanguage(lang);
  }, 100);
}

// WhatsApp konum gönderme fonksiyonu
function sendLocationToWhatsApp() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const phoneNumber = "905303993246";

        let message;
        if (currentLanguage === "en") {
          message = `Hello! I need emergency tow service. My location: https://maps.google.com/?q=${lat},${lng}`;
        } else if (currentLanguage === "ru") {
          message = `Здравствуйте! Мне нужна экстренная эвакуация. Мое местоположение: https://maps.google.com/?q=${lat},${lng}`;
        } else {
          message = `Merhaba! Acil çekici hizmetine ihtiyacım var. Konumum: https://maps.google.com/?q=${lat},${lng}`;
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");
        showWhatsAppFeedback();
      },
      function (error) {
        const phoneNumber = "905303993246";
        let message;
        if (currentLanguage === "en") {
          message = "Hello! I need emergency tow service. Please call me.";
        } else if (currentLanguage === "ru") {
          message =
            "Здравствуйте! Мне нужна экстренная эвакуация. Пожалуйста, позвоните мне.";
        } else {
          message =
            "Merhaba! Acil çekici hizmetine ihtiyacım var. Lütfen beni arayınız.";
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappUrl, "_blank");

        let feedbackMsg;
        if (currentLanguage === "en") {
          feedbackMsg = "Location could not be shared, but message sent!";
        } else if (currentLanguage === "ru") {
          feedbackMsg =
            "Местоположение не удалось отправить, но сообщение отправлено!";
        } else {
          feedbackMsg = "Konum paylaşılamadı, ancak mesaj gönderildi!";
        }
        showWhatsAppFeedback(feedbackMsg);
      }
    );
  } else {
    const phoneNumber = "905303993246";
    let message;
    if (currentLanguage === "en") {
      message = "Hello! I need emergency tow service. Please call me.";
    } else if (currentLanguage === "ru") {
      message =
        "Здравствуйте! Мне нужна экстренная эвакуация. Пожалуйста, позвоните мне.";
    } else {
      message =
        "Merhaba! Acil çekici hizmetine ihtiyacım var. Lütfen beni arayınız.";
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    let feedbackMsg;
    if (currentLanguage === "en") {
      feedbackMsg = "Redirecting to WhatsApp...";
    } else if (currentLanguage === "ru") {
      feedbackMsg = "Перенаправление в WhatsApp...";
    } else {
      feedbackMsg = "WhatsApp'a yönlendiriliyorsunuz...";
    }
    showWhatsAppFeedback(feedbackMsg);
  }
}

// WhatsApp feedback göster
function showWhatsAppFeedback(customMessage) {
  let defaultMessage;
  if (currentLanguage === "en") {
    defaultMessage = "Your location is being sent to WhatsApp...";
  } else if (currentLanguage === "ru") {
    defaultMessage = "Ваше местоположение отправляется в WhatsApp...";
  } else {
    defaultMessage = "Konumunuz WhatsApp'a gönderiliyor...";
  }

  const message = customMessage || defaultMessage;

  const feedback = document.createElement("div");
  feedback.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        animation: slideUp 0.3s ease;
        text-align: center;
        max-width: 300px;
    `;
  feedback.innerHTML = `<i class="fab fa-whatsapp" style="margin-right: 0.5rem;"></i> ${message}`;

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.opacity = "0";
    setTimeout(() => {
      if (document.body.contains(feedback)) {
        document.body.removeChild(feedback);
      }
    }, 300);
  }, 3000);
}

// Navigation setup
function setupNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      isMenuOpen = !isMenuOpen;
      document.body.style.overflow = isMenuOpen ? "hidden" : "";
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      isMenuOpen = false;
      document.body.style.overflow = "";
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Mobil hamburger menüsüne dil seçici ekle
  addLanguageSelectorToMobileMenu();

  setupSmoothScroll();
}

// Mobil hamburger menüsüne dil seçici ekleme fonksiyonu
function addLanguageSelectorToMobileMenu() {
  const navMenu = document.getElementById("navMenu");
  if (!navMenu) return;

  // Dil seçici zaten eklenmişse ekleme
  if (navMenu.querySelector(".mobile-language-selector")) return;

  // Mobil dil seçici oluştur
  const mobileLangSelector = document.createElement("div");
  mobileLangSelector.className = "mobile-language-selector";
  mobileLangSelector.innerHTML = `
    <div class="mobile-lang-title">Dil Seçin / Choose Language / Выберите язык</div>
    <div class="mobile-lang-buttons">
      <button class="mobile-lang-btn active" data-lang="tr" title="Türkçe">
        <img src="https://flagcdn.com/w40/tr.png" alt="Türkçe" class="mobile-flag-icon" />
        <span>Türkçe</span>
      </button>
      <button class="mobile-lang-btn" data-lang="en" title="English">
        <img src="https://flagcdn.com/w40/gb.png" alt="English" class="mobile-flag-icon" />
        <span>English</span>
      </button>
      <button class="mobile-lang-btn" data-lang="ru" title="Русский">
        <img src="https://flagcdn.com/w40/ru.png" alt="Русский" class="mobile-flag-icon" />
        <span>Русский</span>
      </button>
    </div>
  `;

  // Nav menüsünün sonuna ekle
  navMenu.appendChild(mobileLangSelector);

  // Event listener'ları ekle
  const mobileLangButtons =
    mobileLangSelector.querySelectorAll(".mobile-lang-btn");
  mobileLangButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedLang = this.dataset.lang;
      changeLanguage(selectedLang);

      // Aktif buton stilini güncelle (hem mobil hem desktop)
      updateLanguageButtonStates(selectedLang);

      // Menüyü kapat
      navMenu.classList.remove("active");
      document.getElementById("navToggle").classList.remove("active");
      isMenuOpen = false;
      document.body.style.overflow = "";
    });
  });

  // Başlangıç durumunu ayarla
  updateLanguageButtonStates(currentLanguage);
}

// Dil buton durumlarını güncelle (hem mobil hem desktop)
function updateLanguageButtonStates(lang) {
  // Desktop butonları
  const desktopLangButtons = document.querySelectorAll(".nav-cta .lang-btn");
  desktopLangButtons.forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Mobil butonları
  const mobileLangButtons = document.querySelectorAll(".mobile-lang-btn");
  mobileLangButtons.forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navHeight = 70;
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Scroll efektlerini ayarla
function setupScrollEffects() {
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
    updateActiveNavLink();
    handleFloatingElements();
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

function handleFloatingElements() {
  const backToTop = document.getElementById("backToTop");
  const floatingCall = document.getElementById("floatingCallBtn");

  if (window.pageYOffset > 300) {
    if (backToTop) backToTop.classList.add("show");
    if (floatingCall) floatingCall.style.display = "block";
  } else {
    if (backToTop) backToTop.classList.remove("show");
    if (floatingCall) floatingCall.style.display = "none";
  }
}

function setupBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Konum seçimi ayarla
function setupLocationSelection() {
  const showAllBtn = document.getElementById("showAllBtn");
  if (showAllBtn) {
    showAllBtn.addEventListener("click", toggleAllDistricts);
  }
}

function toggleAllDistricts() {
  const showAllBtn = document.getElementById("showAllBtn");
  const locationGrid = document.querySelector(".location-grid");

  if (!showAllBtn || !locationGrid) return;

  const isExpanded = showAllBtn.dataset.expanded === "true";

  if (!isExpanded) {
    showAllDistricts(locationGrid, showAllBtn);
  } else {
    showDefaultDistricts(locationGrid, showAllBtn);
  }
}

function showAllDistricts(locationGrid, button) {
  const currentItems = locationGrid.querySelectorAll(".location-item");
  const currentDistricts = Array.from(currentItems).map(
    (item) => item.dataset.district
  );

  allDistricts.forEach((district) => {
    if (!currentDistricts.includes(district)) {
      const item = createLocationItem(district);
      locationGrid.appendChild(item);
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 50);
    }
  });

  locationGrid.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(150px, 1fr))";

  const showAllText =
    translations[currentLanguage]["show-less-districts"] || "Daha Az Göster";
  button.innerHTML = `<i class="fas fa-chevron-up"></i> <span>${showAllText}</span>`;
  button.dataset.expanded = "true";

  setTimeout(() => {
    button.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 300);
}

function showDefaultDistricts(locationGrid, button) {
  const defaultDistricts = [
    "Kadıköy",
    "Beşiktaş",
    "Şişli",
    "Üsküdar",
    "Bakırköy",
    "Fatih",
    "Beyoğlu",
    "Sarıyer",
    "Pendik",
    "Maltepe",
  ];
  const allItems = locationGrid.querySelectorAll(".location-item");

  allItems.forEach((item) => {
    if (!defaultDistricts.includes(item.dataset.district)) {
      item.style.opacity = "0";
      item.style.transform = "translateY(-20px)";
      setTimeout(() => {
        if (item.parentNode) {
          item.remove();
        }
      }, 300);
    }
  });

  locationGrid.style.gridTemplateColumns = "repeat(5, 1fr)";

  const showAllText =
    translations[currentLanguage]["show-all-districts"] ||
    "Tüm İlçeleri Göster";
  button.innerHTML = `<i class="fas fa-chevron-down"></i> <span>${showAllText}</span>`;
  button.dataset.expanded = "false";
}

function createLocationItem(district) {
  const item = document.createElement("div");
  item.className = "location-item";
  item.dataset.district = district;
  item.innerHTML = `<i class="fas fa-location-dot"></i> <span>${district}</span>`;
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "all 0.3s ease";
  return item;
}

// Galeri modal ayarla
function setupGalleryModal() {
  const modal = document.getElementById("galleryModal");

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeGalleryModal();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeGalleryModal();
    }
  });
}

function openGalleryModal(imageSrc) {
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");

  if (modal && modalImage) {
    modalImage.src = imageSrc;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 10);
  }
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }
}

// Konum algılama
function detectUserLocation() {
  if ("geolocation" in navigator) {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000,
    };

    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationError,
      options
    );
  }
}

function handleLocationSuccess(position) {
  const { latitude, longitude } = position.coords;

  findNearestDistrict(latitude, longitude)
    .then((district) => {
      if (district) {
        highlightDistrict(district);
        selectedDistrict = district;
        updateUIForLocation(district);
        showLocationPrompt(district);
      }
    })
    .catch((error) => {
      console.log("İlçe bulunamadı:", error);
    });
}

function handleLocationError(error) {
  console.log("Konum alınamadı:", error.message);
  showGeneralLocationPrompt();
}

async function findNearestDistrict(lat, lng) {
  const districtCoords = {
    Kadıköy: { lat: 40.9833, lng: 29.0833 },
    Beşiktaş: { lat: 41.0422, lng: 29.0061 },
    Şişli: { lat: 41.0608, lng: 28.9875 },
    Üsküdar: { lat: 41.0214, lng: 29.0739 },
    Bakırköy: { lat: 40.9833, lng: 28.8667 },
    Fatih: { lat: 41.0192, lng: 28.9497 },
    Beyoğlu: { lat: 41.0369, lng: 28.9744 },
    Sarıyer: { lat: 41.1061, lng: 29.0544 },
  };

  let nearestDistrict = null;
  let minDistance = Infinity;

  Object.entries(districtCoords).forEach(([district, coords]) => {
    const distance = calculateDistance(lat, lng, coords.lat, coords.lng);
    if (distance < minDistance) {
      minDistance = distance;
      nearestDistrict = district;
    }
  });

  return minDistance < 50 ? nearestDistrict : null;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function highlightDistrict(district) {
  const districtBtn = document.querySelector(`[data-district="${district}"]`);
  if (districtBtn) {
    districtBtn.classList.add("selected");
    districtBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function updateUIForLocation(district) {
  const ctaButton = document.querySelector(".cta-button.primary");
  if (ctaButton) {
    const ctaText = ctaButton.querySelector(".cta-main");
    if (ctaText) {
      if (currentLanguage === "en") {
        ctaText.textContent = `CALL FOR ${district.toUpperCase()}`;
      } else if (currentLanguage === "ru") {
        ctaText.textContent = `ЗВОНИТЬ ДЛЯ ${district.toUpperCase()}`;
      } else {
        ctaText.textContent = `${district.toUpperCase()} İÇİN ARA`;
      }
    }
  }

  const ctaNote = document.querySelector(".cta-note");
  if (ctaNote) {
    if (currentLanguage === "en") {
      ctaNote.textContent = `We'll be there in 15 minutes in ${district} area!`;
    } else if (currentLanguage === "ru") {
      ctaNote.textContent = `Мы будем там через 15 минут в районе ${district}!`;
    } else {
      ctaNote.textContent = `${district} bölgesinde 15 dakikada yanınızdayız!`;
    }
  }
}

function showLocationPrompt(district) {
  let message;
  if (currentLanguage === "en") {
    message = `Tow service in ${district} area!`;
  } else if (currentLanguage === "ru") {
    message = `Служба эвакуации в районе ${district}!`;
  } else {
    message = `${district} bölgenizde çekici hizmeti!`;
  }

  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 90px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #2196F3, #1976D2);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(33, 150, 243, 0.3);
        text-align: center;
        max-width: 300px;
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
        transition: all 0.3s ease;
    `;
  notification.innerHTML = `
        <i class="fas fa-map-marker-alt" style="margin-right: 0.5rem;"></i>
        ${message}
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(-50%) translateY(0)";
  }, 100);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

function showGeneralLocationPrompt() {
  const locationSection = document.querySelector(
    ".location-section .section-desc"
  );
  if (locationSection) {
    let message;
    if (currentLanguage === "en") {
      message = `<span style="color: #432626; font-weight: 600;">
                  <i class="fas fa-map-marker-alt"></i>
                  Which area are you in? Let us direct our nearest tow team to you
                </span>`;
    } else if (currentLanguage === "ru") {
      message = `<span style="color: #432626; font-weight: 600;">
                  <i class="fas fa-map-marker-alt"></i>
                  В каком районе вы находитесь? Давайте направим к вам ближайшую команду эвакуаторов
                </span>`;
    } else {
      message = `<span style="color: #432626; font-weight: 600;">
                  <i class="fas fa-map-marker-alt"></i>
                  Hangi bölgedesiniz? Size en yakın çekici ekibimizi yönlendirelim
                </span>`;
    }
    locationSection.innerHTML = message;
  }
}

function attachEventListeners() {
  const callButtons = document.querySelectorAll('a[href^="tel:"]');
  callButtons.forEach((btn) => {
    btn.addEventListener("click", trackCall);
  });

  setupIntersectionObserver();
}

function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".service-card, .gallery-item, .contact-item, .value-item"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
}

function trackCall(event) {
  const phoneNumber = event.currentTarget.href.replace("tel:", "");
  console.log("Call tracked:", phoneNumber);
  showCallFeedback();
}

function showCallFeedback() {
  let message;
  if (currentLanguage === "en") {
    message =
      '<i class="fas fa-phone" style="margin-right: 0.5rem;"></i> Calling...';
  } else if (currentLanguage === "ru") {
    message =
      '<i class="fas fa-phone" style="margin-right: 0.5rem;"></i> Звоним...';
  } else {
    message =
      '<i class="fas fa-phone" style="margin-right: 0.5rem;"></i> Aranıyor...';
  }

  const feedback = document.createElement("div");
  feedback.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #FF5722, #E64A19);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 4px 20px rgba(255, 87, 34, 0.3);
        animation: slideUp 0.3s ease;
    `;
  feedback.innerHTML = message;

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.opacity = "0";
    setTimeout(() => {
      if (document.body.contains(feedback)) {
        document.body.removeChild(feedback);
      }
    }, 300);
  }, 2000);
}

// DİL SEÇİCİ KURULUMU - ANA FONKSİYON
function setupLanguageSelector() {
  const langButtons = document.querySelectorAll(".nav-cta .lang-btn");

  // Kaydedilmiş dil tercihini kontrol et
  const savedLanguage = localStorage.getItem("preferred-language") || "tr";
  currentLanguage = savedLanguage;

  // Desktop dil butonları
  langButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const selectedLang = this.dataset.lang;
      changeLanguage(selectedLang);
      updateLanguageButtonStates(selectedLang);
    });
  });

  // Kaydedilmiş dili yükle
  changeLanguage(currentLanguage);
  updateLanguageButtonStates(currentLanguage);
}

// DİL DEĞİŞTİRME FONKSİYONU - TÜM METİNLERİ DEĞİŞTİRİR
function changeLanguage(lang) {
  currentLanguage = lang;

  // HTML'deki tüm data-translate özellikli elementleri bul
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.dataset.translate;

    // Typewriter elementi için özel işlem - bu elementi atla
    if (element.id === "typewriter") {
      return;
    }

    // Çeviri metnini bul
    if (translations[lang] && translations[lang][key]) {
      const translatedText = translations[lang][key];

      // Element tipine göre metni güncelle
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translatedText;
      } else {
        element.textContent = translatedText;
      }
    }
  });

  // Özel güncellemeler
  updateShowAllButton();
  resetTypewriterForLanguage(lang); // Typewriter'ı sıfırla ve yeni dilde başlat
  updatePageTitle(lang);
  updatePageMeta(lang);

  // Local storage'a kaydet
  localStorage.setItem("preferred-language", lang);

  console.log(`Dil ${lang} olarak değiştirildi`);
}

// "Tüm İlçeleri Göster" butonunu güncelle
function updateShowAllButton() {
  const showAllBtn = document.getElementById("showAllBtn");
  if (showAllBtn) {
    const isExpanded = showAllBtn.dataset.expanded === "true";
    const key = isExpanded ? "show-less-districts" : "show-all-districts";
    const icon = isExpanded ? "fas fa-chevron-up" : "fas fa-chevron-down";
    const text =
      translations[currentLanguage][key] ||
      (isExpanded ? "Daha Az Göster" : "Tüm İlçeleri Göster");

    showAllBtn.innerHTML = `<i class="${icon}"></i> <span>${text}</span>`;
  }
}

// Sayfa başlığını güncelle
function updatePageTitle(lang) {
  const titles = {
    tr: "7/24 Çekici Servisi İstanbul - Borcelle | Hızlı & Güvenilir",
    en: "24/7 Tow Service Istanbul - Borcelle | Fast & Reliable",
    ru: "Эвакуатор 24/7 Стамбул - Borcelle | Быстро и надежно",
  };

  document.title = titles[lang] || titles.tr;
}

// Meta etiketlerini güncelle
function updatePageMeta(lang) {
  const descriptions = {
    tr: "İstanbul'da 7/24 çekici servisi. Hızlı, güvenilir ve uygun fiyatlı çekici hizmeti. Acil durumlarda yanınızdayız!",
    en: "24/7 tow service in Istanbul. Fast, reliable and affordable towing service. We are with you in emergencies!",
    ru: "Служба эвакуации 24/7 в Стамбуле. Быстрая, надежная и доступная служба эвакуации. Мы с вами в чрезвычайных ситуациях!",
  };

  const keywords = {
    tr: "çekici servisi, istanbul çekici, 7/24 çekici, araç çekici, acil çekici",
    en: "tow service, istanbul towing, 24/7 tow, vehicle towing, emergency towing",
    ru: "служба эвакуации, стамбул эвакуатор, эвакуатор 24/7, эвакуация автомобиля, экстренная эвакуация",
  };

  // Description meta güncelle
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute("content", descriptions[lang] || descriptions.tr);
  }

  // Keywords meta güncelle
  const keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta) {
    keywordsMeta.setAttribute("content", keywords[lang] || keywords.tr);
  }

  // OpenGraph meta güncelle
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');

  if (ogTitle) {
    const ogTitles = {
      tr: "7/24 Çekici Servisi İstanbul - Borcelle",
      en: "24/7 Tow Service Istanbul - Borcelle",
      ru: "Эвакуатор 24/7 Стамбул - Borcelle",
    };
    ogTitle.setAttribute("content", ogTitles[lang] || ogTitles.tr);
  }

  if (ogDesc) {
    const ogDescs = {
      tr: "İstanbul'da güvenilir çekici servisi. Acil durumlarda hemen arayın!",
      en: "Reliable tow service in Istanbul. Call immediately in emergencies!",
      ru: "Надежная служба эвакуации в Стамбуле. Звоните немедленно в чрезвычайных ситуациях!",
    };
    ogDesc.setAttribute("content", ogDescs[lang] || ogDescs.tr);
  }

  // HTML lang özelliğini güncelle
  document.documentElement.lang = lang;
}

// Error handling
window.addEventListener("error", function (event) {
  console.error("JavaScript error:", event.error);
});

// Keyboard shortcuts
document.addEventListener("keydown", function (event) {
  if (
    event.code === "Space" &&
    !event.target.matches("input, textarea, button")
  ) {
    event.preventDefault();
    const callBtn = document.querySelector(".cta-button.primary");
    if (callBtn) callBtn.click();
  }

  if (event.code === "Escape") {
    closeGalleryModal();
    const navMenu = document.getElementById("navMenu");
    const navToggle = document.getElementById("navToggle");
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      isMenuOpen = false;
      document.body.style.overflow = "";
    }
  }
});

// Global functions - window'a ekle ki HTML'den çağrılabilsin
window.openGalleryModal = openGalleryModal;
window.closeGalleryModal = closeGalleryModal;
window.sendLocationToWhatsApp = sendLocationToWhatsApp;
