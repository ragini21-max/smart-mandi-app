// 1. Language Translation Dictionary
const translations = {
  en: {
    appTitle: "Smart Mandi Engine",
    tabFarmer: "Farmer App",
    tabOfficer: "Officer Desk",
    tabEngine: "Queue Engine",
    tabSms: "SMS Logs",
    farmerPortal: "Farmer Portal & Digital Pass",
    otpHeading: "Kisan OTP Authentication",
    sendOtp: "Send OTP",
    verifyLogin: "Verify & Login",
    bookSlotHeading: "Book Procurement Slot",
    lblFarmerName: "Farmer Name / ID:",
    lblMandi: "Select Mandi Center:",
    lblCommodity: "Commodity Type:",
    lblQty: "Produce Quantity (Tons):",
    lblVehicle: "Vehicle Type:",
    optSelectMandi: "-- Select APMC Mandi --",
    optSelectCommodity: "-- Select Commodity --",
    optOnion: "Onion (Kanda)",
    optPulses: "Pulses (Dal)",
    optVeg: "Vegetables",
    optWheat: "Wheat (Gehun)",
    optCotton: "Cotton (Kapas)",
    optSelectVehicle: "-- Select Vehicle --",
    optTractor: "Tractor Trolley",
    optMiniTruck: "Mini Truck",
    optHeavyTruck: "Heavy Commercial Truck",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passHeading: "Digital Gate Pass",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    btnTTS: "🔊 Listen Status (Bhashini Audio)",
    phPhone: "Enter 10-digit mobile number",
    phOtp: "Enter 4-Digit OTP",
    phFarmerName: "e.g. Ramesh Patil",
    phQty: "e.g. 5.5",
    // Value translations for the pass summary card
    "Nashik Main APMC": "Nashik Main APMC",
    "Lasalgaon Mandi": "Lasalgaon Mandi",
    "Pune Market Yard": "Pune Market Yard",
    "Nagpur APMC Hub": "Nagpur APMC Hub",
    "Onion (Kanda)": "Onion (Kanda)",
    "Pulses (Dal)": "Pulses (Dal)",
    "Vegetables": "Vegetables",
    "Wheat (Gehun)": "Wheat (Gehun)",
    "Cotton (Kapas)": "Cotton (Kapas)",
    "Tractor Trolley": "Tractor Trolley",
    "Mini Truck": "Mini Truck",
    "Heavy Commercial Truck": "Heavy Commercial Truck",
    posInLine: "#3 in line"
  },
  mr: {
    appTitle: "स्मार्ट मंडी इंजिन",
    tabFarmer: "शेतकरी ॲप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "रांग इंजिन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    sendOtp: "ओटीपी पाठवा",
    verifyLogin: "सत्यापित करा आणि लॉग इन करा",
    bookSlotHeading: "खरेदी स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचे नाव / ओळख:",
    lblMandi: "मंडी केंद्र निवडा:",
    lblCommodity: "शेतीमाल प्रकार:",
    lblQty: "प्रमाण (टन):",
    lblVehicle: "वाहनाचा प्रकार:",
    optSelectMandi: "-- एपीएमसी मंडी निवडा --",
    optSelectCommodity: "-- शेतीमाल निवडा --",
    optOnion: "कांदा",
    optPulses: "डाळी",
    optVeg: "भाज्या",
    optWheat: "गहू",
    optCotton: "कापूस",
    optSelectVehicle: "-- वाहन निवडा --",
    optTractor: "ट्रॅक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "जड व्यावसायिक ट्रक",
    btnBookSlot: "स्लॉट बुक करा आणि QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजे वेळ",
    lblGrace: "सवलत वेळ",
    btnTTS: "🔊 स्थिती ऐका (भाषिणी ऑडिओ)",
    phPhone: "१० अंकी मोबाईल नंबर टाका",
    phOtp: "४ अंकी ओटीपी टाका",
    phFarmerName: "उदा. रमेश पाटील",
    phQty: "उदा. ५.५",
    // Marathi translations for card values
    "Nashik Main APMC": "नाशिक मुख्य एपीएमसी",
    "Lasalgaon Mandi": "लासलगाव मंडी",
    "Pune Market Yard": "पुणे मार्केट यार्ड",
    "Nagpur APMC Hub": "नागपूर एपीएमसी हब",
    "Onion (Kanda)": "कांदा",
    "Pulses (Dal)": "डाळी",
    "Vegetables": "भाज्या",
    "Wheat (Gehun)": "गहू",
    "Cotton (Kapas)": "कापूस",
    "Tractor Trolley": "ट्रॅक्टर ट्रॉली",
    "Mini Truck": "मिनी ट्रक",
    "Heavy Commercial Truck": "जड व्यावसायिक ट्रक",
    posInLine: "रांगेत #३"
  },
  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "किसान ऐप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "कतार इंजन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल एवं डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    sendOtp: "ओटीपी भेजें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    bookSlotHeading: "खरीद स्लॉट बुक करें",
    lblFarmerName: "किसान का नाम / आईडी:",
    lblMandi: "मंडी केंद्र चुनें:",
    lblCommodity: "फसल का प्रकार:",
    lblQty: "मात्रा (टन):",
    lblVehicle: "वाहन का प्रकार:",
    optSelectMandi: "-- एपीएमसी मंडी चुनें --",
    optSelectCommodity: "-- फसल चुनें --",
    optOnion: "प्याज",
    optPulses: "दालें",
    optVeg: "सब्‍जियां",
    optWheat: "गेहूं",
    optCotton: "कपास",
    optSelectVehicle: "-- वाहन चुनें --",
    optTractor: "ट्रैक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "भारी व्यावसायिक ट्रक",
    btnBookSlot: "स्लॉट बुक करें और क्यूआर पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "छूट समय",
    btnTTS: "🔊 स्थिति सुनें (भाषिणी ऑडियो)",
    phPhone: "10 अंकों का मोबाइल नंबर दर्ज करें",
    phOtp: "4 अंकों का ओटीपी दर्ज करें",
    phFarmerName: "जैसे रमेश पाटिल",
    phQty: "जैसे 5.5",
    // Hindi translations for card values
    "Nashik Main APMC": "नासिक मुख्य एपीएमसी",
    "Lasalgaon Mandi": "लासलगांव मंडी",
    "Pune Market Yard": "पुणे मार्केट यार्ड",
    "Nagpur APMC Hub": "नागपुर एपीएमसी हब",
    "Onion (Kanda)": "प्याज",
    "Pulses (Dal)": "दालें",
    "Vegetables": "सब्‍जियां",
    "Wheat (Gehun)": "गेहूं",
    "Cotton (Kapas)": "कपास",
    "Tractor Trolley": "ट्रैक्टर ट्रॉली",
    "Mini Truck": "मिनी ट्रक",
    "Heavy Commercial Truck": "भारी व्यावसायिक ट्रक",
    posInLine: "कतार में #3"
  }
};

// Store current pass details in raw state
let rawPassData = null;

// 2. Language Switching Function
function switchLanguage() {
  const currentLang = document.getElementById("langSelect").value;
  const langDict = translations[currentLang] || translations["en"];

  // Update text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (langDict[key]) {
      element.innerText = langDict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((element) => {
    const key = element.getAttribute("data-i18n-ph");
    if (langDict[key]) {
      element.placeholder = langDict[key];
    }
  });

  // Re-render summary values in selected language
  if (rawPassData) {
    document.getElementById("summaryFarmerName").innerText = rawPassData.name;
    document.getElementById("summaryMandi").innerText = langDict[rawPassData.mandi] || rawPassData.mandi;
    document.getElementById("summaryCommodity").innerText = langDict[rawPassData.commodity] || rawPassData.commodity;
    document.getElementById("summaryQty").innerText = rawPassData.qty;
    document.getElementById("summaryVehicle").innerText = langDict[rawPassData.vehicle] || rawPassData.vehicle;
    document.getElementById("farmerPos").innerText = langDict["posInLine"] || rawPassData.pos;
  }
}

// 3. Slot Booking & Pass Generation
function generateToken(event) {
  event.preventDefault();

  // Save raw data
  rawPassData = {
    name: document.getElementById("farmerName").value,
    mandi: document.getElementById("mandiSelect").value,
    commodity: document.getElementById("commoditySelect").value,
    qty: document.getElementById("produceQty").value,
    vehicle: document.getElementById("vehicleType").value,
    pos: "#3 in line"
  };

  // Display pass card
  document.getElementById("bookingCard").style.display = "none";
  document.getElementById("passCard").style.display = "block";

  // Generate QR
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  const tokenId = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById("qrTokenId").innerText = tokenId;

  new QRCode(qrContainer, {
    text: tokenId,
    width: 128,
    height: 128
  });

  // Apply translations to new card
  switchLanguage();
}

// 4. Corrected Bhashini TTS Execution
async function triggerVoiceAssistance() {
  const currentLang = document.getElementById("langSelect").value;

  // Build spoken text in selected language
  const farmerName = document.getElementById("summaryFarmerName").innerText;
  const mandi = document.getElementById("summaryMandi").innerText;
  const commodity = document.getElementById("summaryCommodity").innerText;
  const pos = document.getElementById("farmerPos").innerText;
  const eta = document.getElementById("farmerETA").innerText;

  let spokenText = "";

  if (currentLang === "mr") {
    spokenText = `नमस्कार ${farmerName}. तुमची मंडी ${mandi} आहे. शेतीमाल ${commodity}. तुमचे स्थान ${pos} असून अंदाजे वेळ ${eta} आहे.`;
  } else if (currentLang === "hi") {
    spokenText = `नमस्कार ${farmerName}. आपकी मंडी ${mandi} है. फसल ${commodity}. आपकी कतार स्थिति ${pos} है और अनुमानित समय ${eta} है.`;
  } else {
    spokenText = `Hello ${farmerName}. Your Mandi is ${mandi}. Commodity ${commodity}. Your position is ${pos} and estimated time is ${eta}.`;
  }

  // Speak using Web Speech API fallback / Bhashini API
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel(); // Stop any existing speech
    const utterance = new SpeechSynthesisUtterance(spokenText);
    
    // Map language code to TTS locale
    const langMap = {
      en: "en-IN",
      hi: "hi-IN",
      mr: "mr-IN",
      ta: "ta-IN",
      te: "te-IN",
      bn: "bn-IN",
      gu: "gu-IN",
      kn: "kn-IN"
    };

    utterance.lang = langMap[currentLang] || "en-IN";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // Bhashini Pipeline API Call format (If using Bhashini backend):
  /*
  const bhashiniPayload = {
    "pipelineTasks": [
      {
        "taskType": "tts",
        "config": {
          "language": { "sourceLanguage": currentLang }, // e.g. 'mr', 'hi'
          "gender": "female"
        }
      }
    ],
    "inputData": {
      "input": [{ "source": spokenText }]
    }
  };
  */
}
