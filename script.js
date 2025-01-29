async function loadTranslations() {
  try {
    const response = await fetch("translations.json");
    const translations = await response.json();
    initializeApp(translations);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

function initializeApp(translations) {
  const languageSelect = document.getElementById("language-select");
  const title = document.getElementById("title");
  const warning = document.getElementById("warning");
  const risksTitle = document.getElementById("risks-title");
  const risksList = document.getElementById("risks-list");
  const tipsTitle = document.getElementById("tips-title");
  const tipsList = document.getElementById("tips-list");
  const tip = document.getElementById("tip");
  const footer = document.getElementById("footer");

  function updateContent(lang) {
    const translation = translations[lang] || translations["en"];
    title.textContent = translation.title;
    warning.textContent = translation.warning;
    risksTitle.textContent = translation.risksTitle;
    risksList.innerHTML = translation.risksList.map(item => `<li>${item}</li>`).join("");
    tipsTitle.textContent = translation.tipsTitle;
    tipsList.innerHTML = translation.tipsList.map(item => `<li>${item}</li>`).join("");
    tip.textContent = translation.tip;
    footer.innerHTML = `${translation.footer} <a href="https://savutro.dev" target="_blank">Savutro</a>`;
  }

  function detectBrowserLanguage() {
    const supportedLanguages = Object.keys(translations);
    const browserLanguage = navigator.language.split("-")[0];
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : "en";
  }

  const defaultLanguage = detectBrowserLanguage();
  languageSelect.value = defaultLanguage;
  updateContent(defaultLanguage);

  languageSelect.addEventListener("change", (e) => {
    updateContent(e.target.value);
  });
}

loadTranslations();
