// Global State Storage
let currentLang = 'en';
let generatedTokenData = null;

// Translation Dictionary with Native Names for Crops, Vehicles, and Mandis
const translations = {
  en: {
    appTitle: "Smart Mandi Engine",
    subTitle: "APMC Dynamic Queue & Pass",
    tabFarmer: "Farmer App",
    tabOfficer: "Officer Desk",
    tabEngine: "Queue Engine",
    tabSms: "SMS Logs",
    farmerPortal: "Farmer Portal & Digital Pass",
    otpHeading: "Kisan OTP Authentication",
    lblPhone: "Mobile Number:",
    phPhone: "Enter 10-digit mobile number",
    sendOtp: "Send OTP",
    otpTimerText: "OTP expires in 30 seconds",
    lblOtpCode: "Verification Code:",
    phOtp: "Enter 4-Digit OTP",
    verifyLogin: "Verify & Login",
    bookSlotHeading: "Book Procurement Slot",
    lblFarmerName: "Farmer Name / ID:",
    phFarmerName: "e.g. Ramesh Patil",
    lblMandi: "Select Mandi Center:",
    optSelectMandi: "-- Select APMC Mandi --",
    lblCommodity: "Commodity Type:",
    optSelectCommodity: "-- Select Commodity --",
    lblQty: "Produce Quantity (Tons):",
    phQty: "e.g. 5.5",
    lblVehicle: "Vehicle Type:",
    optSelectVehicle: "-- Select Vehicle --",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passHeading: "Digital Gate Pass",
    slotConfirmed: "SLOT CONFIRMED",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    btnTTS: "🔊 Listen Status (Bhashini Audio)",
    mandis: {
      "Nashik Main APMC": "Nashik Main APMC",
      "Lasalgaon Mandi": "Lasalgaon Mandi",
      "Pune Market Yard": "Pune Market Yard",
      "Nagpur APMC Hub": "Nagpur APMC Hub"
    },
    crops: {
      "Onion (Kanda)": "Onion",
      "Pulses (Dal)": "Pulses",
      "Vegetables": "Vegetables",
      "Wheat (Gehun)": "Wheat",
      "Cotton (Kapas)": "Cotton"
    },
    vehicles: {
      "Tractor Trolley": "Tractor Trolley",
      "Mini Truck": "Mini Truck",
      "Heavy Commercial Truck": "Heavy Commercial Truck"
    },
    ttsSpeech: (name, mandi, crop, qty, pos, eta) => 
      `Hello ${name}. Your booking at ${mandi} for ${qty} tons of ${crop} is confirmed. Your queue position is ${pos}, and your estimated arrival time is ${eta}.`
  },

  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    subTitle: "एपीएमसी डायनामिक कतार एवं पास",
    tabFarmer: "किसान ऐप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "क्यू इंजन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल एवं डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    lblPhone: "मोबाइल नंबर:",
    phPhone: "10 अंकों का मोबाइल नंबर दर्ज करें",
    sendOtp: "ओटीपी भेजें",
    otpTimerText: "ओटीपी 30 सेकंड में समाप्त हो जाएगा",
    lblOtpCode: "सत्यापन कोड:",
    phOtp: "4-अंको का ओटीपी दर्ज करें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    bookSlotHeading: "खरीद स्लॉट बुक करें",
    lblFarmerName: "किसान का नाम / आईडी:",
    phFarmerName: "जैसे रमेश पाटिल",
    lblMandi: "मंडी केंद्र चुनें:",
    optSelectMandi: "-- एपीएमसी मंडी चुनें --",
    lblCommodity: "जिंस का प्रकार:",
    optSelectCommodity: "-- फसल/जिंस चुनें --",
    lblQty: "उपज की मात्रा (टन):",
    phQty: "जैसे 5.5",
    lblVehicle: "वाहन का प्रकार:",
    optSelectVehicle: "-- वाहन चुनें --",
    btnBookSlot: "स्लॉट बुक करें और क्यूआर पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट की पुष्टि हुई",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय (ETA)",
    lblGrace: "अतिरिक्त समय",
    btnTTS: "🔊 स्थिति सुनें (भाषिणी ऑडियो)",
    mandis: {
      "Nashik Main APMC": "नासिक मुख्य एपीएमसी",
      "Lasalgaon Mandi": "लासलगांव मंडी",
      "Pune Market Yard": "पुणे मार्केट यार्ड",
      "Nagpur APMC Hub": "नागपुर एपीएमसी हब"
    },
    crops: {
      "Onion (Kanda)": "प्याज",
      "Pulses (Dal)": "दालें",
      "Vegetables": "सब्जियां",
      "Wheat (Gehun)": "गेहूं",
      "Cotton (Kapas)": "कपास"
    },
    vehicles: {
      "Tractor Trolley": "ट्रैक्टर ट्रॉली",
      "Mini Truck": "मिनी ट्रक",
      "Heavy Commercial Truck": "भारी वाणिज्यिक ट्रक"
    },
    ttsSpeech: (name, mandi, crop, qty, pos, eta) => 
      `नमस्ते ${name}। ${mandi} में ${qty} टन ${crop} के लिए आपकी बुकिंग की पुष्टि हो गई है। कतार में आपका नंबर ${pos} है, और आपका अनुमानित समय ${eta} है।`
  },

  mr: {
    appTitle: "स्मार्ट मंदी इंजिन",
    subTitle: "एपीएमसी डायनामिक रांग आणि पास",
    tabFarmer: "शेतकरी ॲप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "क्यू इंजिन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    lblPhone: "मोबाईल नंबर:",
    phPhone: "10 अंकी मोबाईल नंबर टाका",
    sendOtp: "ओटीपी पाठवा",
    otpTimerText: "ओटीपी 30 सेकंदात कालबाह्य होईल",
    lblOtpCode: "पडताळणी कोड:",
    phOtp: "4-अंकी ओटीपी टाका",
    verifyLogin: "पडताळणी करा आणि लॉगिन करा",
    bookSlotHeading: "खरेदी स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचे नाव / आयडी:",
    phFarmerName: "उदा. रमेश पाटील",
    lblMandi: "मंडी केंद्र निवडा:",
    optSelectMandi: "-- एपीएमसी मंडी निवडा --",
    lblCommodity: "शेतमालाचा प्रकार:",
    optSelectCommodity: "-- शेतमाल निवडा --",
    lblQty: "उत्पादन प्रमाण (टन):",
    phQty: "उदा. 5.5",
    lblVehicle: "वाहनाचा प्रकार:",
    optSelectVehicle: "-- वाहन निवडा --",
    btnBookSlot: "स्लॉट बुक करा आणि क्यूआर पास मिळवा",
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट निश्चित झाला",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजित वेळ (ETA)",
    lblGrace: "सवलतीचा वेळ",
    btnTTS: "🔊 स्थिती ऐका (भाषिणी ऑडिओ)",
    mandis: {
      "Nashik Main APMC": "नाशिक मुख्य एपीएमसी",
      "Lasalgaon Mandi": "लासलगाव मंडी",
      "Pune Market Yard": "पुणे मार्केट यार्ड",
      "Nagpur APMC Hub": "नागपूर एपीएमसी हब"
    },
    crops: {
      "Onion (Kanda)": "कांदा",
      "Pulses (Dal)": "डाळी",
      "Vegetables": "भाज्या",
      "Wheat (Gehun)": "गहू",
      "Cotton (Kapas)": "कापूस"
    },
    vehicles: {
      "Tractor Trolley": "ट्रॅक्टर ट्रॉली",
      "Mini Truck": "मिनी ट्रक",
      "Heavy Commercial Truck": "मोठे व्यावसायिक ट्रक"
    },
    ttsSpeech: (name, mandi, crop, qty, pos, eta) => 
      `नमस्कार ${name}. ${mandi} येथे ${qty} टन ${crop} साठी तुमची बुकिंग निश्चित झाली आहे. रांगेतील तुमचा क्रमांक ${pos} आहे, आणि तुमची अंदाजित वेळ ${eta} आहे.`
  }
};

// Language Switcher Function
function switchLanguage() {
  const langSelect = document.getElementById('langSelect');
  currentLang = langSelect.value || 'en';
  const dict = translations[currentLang] || translations['en'];

  // Update text labels with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render summary cards if pass is generated
  if (generatedTokenData) {
    updatePassDisplayUI();
  }
}

// Module Navigation Tab Logic
function showModule(moduleId, btnElement) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(moduleId).classList.add('active');
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// Kisan OTP Logic
function sendOTP() {
  const phone = document.getElementById('farmerPhone').value;
  if (!phone || phone.length < 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }
  document.getElementById('otpSection').style.display = 'block';
  logSMS(`[OTP SENT]: Verification code sent to +91-${phone}`);
}

function verifyOTP() {
  const code = document.getElementById('otpCode').value;
  if (code.length === 4) {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('bookingCard').style.display = 'block';
    logSMS(`[AUTH SUCCESS]: Farmer authenticated successfully.`);
  } else {
    alert("Please enter a valid 4-digit OTP.");
  }
}

// Generate Gate Pass Token
function generateToken(event) {
  event.preventDefault();

  const name = document.getElementById('farmerName').value;
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const qty = document.getElementById('produceQty').value;
  const vehicle = document.getElementById('vehicleType').value;

  generatedTokenData = {
    tokenId: '#MND-' + Math.floor(10000 + Math.random() * 90000),
    farmerName: name,
    mandiRaw: mandi,
    commodityRaw: commodity,
    qty: qty,
    vehicleRaw: vehicle,
    pos: "#3",
    eta: "10:45 AM"
  };

  document.getElementById('bookingCard').style.display = 'none';
  document.getElementById('passCard').style.display = 'block';

  updatePassDisplayUI();
  generateQRCode(generatedTokenData.tokenId);
  logSMS(`[BOOKING CONFIRMED]: Pass ${generatedTokenData.tokenId} created for ${name}`);
}

// Update Pass UI with Localized Names
function updatePassDisplayUI() {
  if (!generatedTokenData) return;

  const dict = translations[currentLang] || translations['en'];

  const localizedMandi = dict.mandis?.[generatedTokenData.mandiRaw] || generatedTokenData.mandiRaw;
  const localizedCrop = dict.crops?.[generatedTokenData.commodityRaw] || generatedTokenData.commodityRaw;
  const localizedVehicle = dict.vehicles?.[generatedTokenData.vehicleRaw] || generatedTokenData.vehicleRaw;

  document.getElementById('qrTokenId').textContent = generatedTokenData.tokenId;
  document.getElementById('summaryFarmerName').textContent = generatedTokenData.farmerName;
  document.getElementById('summaryMandi').textContent = localizedMandi;
  document.getElementById('summaryCommodity').textContent = localizedCrop;
  document.getElementById('summaryQty').textContent = generatedTokenData.qty + " Tons";
  document.getElementById('summaryVehicle').textContent = localizedVehicle;
}

// Render QR Code using qrcodejs Library
function generateQRCode(text) {
  const container = document.getElementById('qrcode');
  container.innerHTML = "";
  if (typeof QRCode !== 'undefined') {
    new QRCode(container, {
      text: text,
      width: 128,
      height: 128
    });
  } else {
    container.textContent = text;
  }
}

// Corrected Bhashini Audio Text-To-Speech Generator
function triggerVoiceAssistance() {
  if (!generatedTokenData) {
    alert("No active booking pass found.");
    return;
  }

  const dict = translations[currentLang] || translations['en'];

  // Fetch translated crop, mandi, and vehicle values according to selected language
  const mandiName = dict.mandis?.[generatedTokenData.mandiRaw] || generatedTokenData.mandiRaw;
  const cropName = dict.crops?.[generatedTokenData.commodityRaw] || generatedTokenData.commodityRaw;
  
  // Format localized time and numbers for voice output
  let formattedEta = generatedTokenData.eta;
  let formattedPos = generatedTokenData.pos.replace('#', '');

  if (currentLang === 'hi') {
    formattedEta = "10:45 सुबह";
  } else if (currentLang === 'mr') {
    formattedEta = "सकाळी 10:45";
  }

  // Build complete speech narrative string
  const speechText = dict.ttsSpeech(
    generatedTokenData.farmerName,
    mandiName,
    cropName,
    generatedTokenData.qty,
    formattedPos,
    formattedEta
  );

  // Trigger Web Speech API with Bhashini/Browser fallback voice settings
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any pending audio

    const utterance = new SpeechSynthesisUtterance(speechText);
    
    // Map application language codes to Web Speech BCP 47 codes
    const langMap = {
      en: 'en-IN',
      hi: 'hi-IN',
      mr: 'mr-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      bn: 'bn-IN',
      gu: 'gu-IN',
      kn: 'kn-IN'
    };

    utterance.lang = langMap[currentLang] || 'en-IN';
    utterance.rate = 0.9; // Slightly slower for clear speech delivery

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Text-to-speech is not supported on this browser.");
  }
}

// Officer Verification & Gate Controls
function scanToken() {
  const token = document.getElementById('scanInput').value;
  const resultBox = document.getElementById('scanResult');
  
  if (token) {
    resultBox.innerHTML = `<strong>Status:</strong> PASS VALID (${token}) - Gate Entry Permitted.`;
    resultBox.style.background = "#dcfce7";
    resultBox.style.color = "#15803d";
  } else {
    alert("Please enter a valid Token ID.");
  }
}

function toggleCameraScanner() {
  alert("Camera scanner initialized. Point lens at QR code.");
}

function simulateWeighment() {
  const randomWeight = (Math.random() * (8 - 2) + 2).toFixed(3);
  document.getElementById('weighValue').textContent = `${randomWeight} TONS`;
}

function applyGracePeriod() {
  alert("15-minute grace period granted to active token.");
}

function triggerEmergency() {
  alert("Gate entry temporarily paused.");
}

// Queue Engine Calculations
function recalculateEngine() {
  const bridges = parseInt(document.getElementById('engineBridges').value) || 1;
  const factor = parseFloat(document.getElementById('shiftStatus').value) || 1.0;

  const baseMinutes = 20;
  const calculatedMinutes = Math.round((baseMinutes / bridges) / factor);

  document.getElementById('engineOutput').innerHTML = 
    `<span>Calculated System Throughput:</span> <strong>${calculatedMinutes} mins per vehicle</strong>`;
}

// Telephony Logging Helper
function logSMS(message) {
  const logBox = document.getElementById('smsLogBox');
  const timestamp = new Date().toLocaleTimeString();
  const logEntry = document.createElement('div');
  logEntry.className = 'sms-item';
  logEntry.textContent = `[${timestamp}] ${message}`;
  logBox.prepend(logEntry);
}
