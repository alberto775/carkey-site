
const translations = {
  en: {
    title: "Mobile Key Service",
    description: "Professional car key repair and programming"
  },
  ru: {
    title: "Мобильный сервис ключей",
    description: "Профессиональный ремонт и программирование ключей"
  },
  lt: {
    title: "Mobilus raktų aptarnavimas",
    description: "Profesionalus automobilių raktų remontas ir programavimas"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  translatePage(lang);
}

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  translatePage(savedLang);
});
