const translations = {
  en: {
    title: "QR Code Safety Training",
    warning: "⚠️ Warning: This QR code could have led you to a malicious website!",
    risksTitle: "What Are the Risks?",
    risksList: [
      "Malicious QR codes can redirect you to phishing websites designed to steal your personal information.",
      "They can trigger unwanted downloads of malware or spyware onto your device.",
      "Some QR codes may lead to fraudulent payment pages or scam offers."
    ],
    tipsTitle: "How to Stay Safe",
    tipsList: [
      "Always verify the source of a QR code before scanning it.",
      "Use a QR scanner app that previews the URL before opening it.",
      "Avoid scanning QR codes in public places unless you trust the provider.",
      "Keep your device's software and security apps up to date."
    ],
    tip: "💡 Tip: If you're unsure about a QR code, don't scan it!"
  },
  de: {
    title: "QR-Code-Sicherheitstraining",
    warning: "⚠️ Warnung: Dieser QR-Code hätte Sie zu einer bösartigen Website führen können!",
    risksTitle: "Was sind die Risiken?",
    risksList: [
      "Bösartige QR-Codes können Sie auf Phishing-Websites umleiten, die darauf abzielen, Ihre persönlichen Daten zu stehlen.",
      "Sie können unerwünschte Downloads von Malware oder Spyware auf Ihr Gerät auslösen.",
      "Einige QR-Codes können zu betrügerischen Zahlungsseiten oder Betrugsangeboten führen."
    ],
    tipsTitle: "Wie Sie sicher bleiben",
    tipsList: [
      "Überprüfen Sie immer die Quelle eines QR-Codes, bevor Sie ihn scannen.",
      "Verwenden Sie eine QR-Scanner-App, die die URL vor dem Öffnen anzeigt.",
      "Vermeiden Sie das Scannen von QR-Codes an öffentlichen Orten, es sei denn, Sie vertrauen dem Anbieter.",
      "Halten Sie die Software und Sicherheits-Apps Ihres Geräts auf dem neuesten Stand."
    ],
    tip: "💡 Tipp: Wenn Sie sich bei einem QR-Code unsicher sind, scannen Sie ihn nicht!"
  },
  it: {
    title: "Formazione sulla Sicurezza dei Codici QR",
    warning: "⚠️ Attenzione: Questo codice QR avrebbe potuto portarti a un sito web dannoso!",
    risksTitle: "Quali sono i rischi?",
    risksList: [
      "I codici QR dannosi possono reindirizzarti a siti di phishing progettati per rubare le tue informazioni personali.",
      "Possono attivare download indesiderati di malware o spyware sul tuo dispositivo.",
      "Alcuni codici QR possono portare a pagine di pagamento fraudolente o offerte truffa."
    ],
    tipsTitle: "Come Rimanere al Sicuro",
    tipsList: [
      "Verifica sempre la fonte di un codice QR prima di scansionarlo.",
      "Usa un'app di scansione QR che visualizza l'URL prima di aprirlo.",
      "Evita di scansionare codici QR in luoghi pubblici a meno che non ti fidi del fornitore.",
      "Mantieni il software e le app di sicurezza del tuo dispositivo aggiornati."
    ],
    tip: "💡 Suggerimento: Se non sei sicuro di un codice QR, non scansionarlo!"
  },
  fr: {
    title: "Formation à la Sécurité des Codes QR",
    warning: "⚠️ Attention : Ce code QR aurait pu vous rediriger vers un site web malveillant !",
    risksTitle: "Quels sont les risques ?",
    risksList: [
      "Les codes QR malveillants peuvent vous rediriger vers des sites de phishing conçus pour voler vos informations personnelles.",
      "Ils peuvent déclencher des téléchargements indésirables de logiciels malveillants ou d'espions sur votre appareil.",
      "Certains codes QR peuvent mener à des pages de paiement frauduleuses ou à des offres frauduleuses."
    ],
    tipsTitle: "Comment Rester en Sécurité",
    tipsList: [
      "Vérifiez toujours la source d'un code QR avant de le scanner.",
      "Utilisez une application de scan QR qui affiche l'URL avant de l'ouvrir.",
      "Évitez de scanner des codes QR dans des lieux publics à moins de faire confiance au fournisseur.",
      "Maintenez à jour le logiciel et les applications de sécurité de votre appareil."
    ],
    tip: "💡 Astuce : Si vous n'êtes pas sûr d'un code QR, ne le scannez pas !"
  }
};

const languageSelect = document.getElementById("language-select");
const title = document.getElementById("title");
const warning = document.getElementById("warning");
const risksTitle = document.getElementById("risks-title");
const risksList = document.getElementById("risks-list");
const tipsTitle = document.getElementById("tips-title");
const tipsList = document.getElementById("tips-list");
const tip = document.getElementById("tip");

function updateContent(lang) {
  const translation = translations[lang];
  title.textContent = translation.title;
  warning.textContent = translation.warning;
  risksTitle.textContent = translation.risksTitle;
  risksList.innerHTML = translation.risksList.map(item => `<li>${item}</li>`).join("");
  tipsTitle.textContent = translation.tipsTitle;
  tipsList.innerHTML = translation.tipsList.map(item => `<li>${item}</li>`).join("");
  tip.textContent = translation.tip;
}

languageSelect.addEventListener("change", (e) => {
  updateContent(e.target.value);
});

// Initialize with English
updateContent("en");