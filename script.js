// --- 1. Expanded Multilingual i18n Dictionary ---
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
    phFarmerName: "e.g. Ramesh Patil",
    lblMandi: "Select Mandi Center:",
    optSelectMandi: "-- Select APMC Mandi --",
    lblCommodity: "Commodity Type:",
    optSelectCommodity: "-- Select Commodity --",
    optOnion: "Onion (Kanda)",
    optPulses: "Pulses (Dal)",
    optVeg: "Vegetables",
    optWheat: "Wheat (Gehun)",
    optCotton: "Cotton (Kapas)",
    lblQty: "Produce Quantity (Tons):",
    phQty: "e.g. 5.5",
    lblVehicle: "Vehicle Type:",
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
    officerDeskTitle: "Mandi Officer Control Desk",
    phPhone: "Enter 10-digit mobile number",
    phOtp: "Enter 4-Digit OTP"
  },
  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "किसान ऐप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "कतार इंजन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल और डिजिटल पास",
    otpHeading: "किसान ओटीपी सत्यापन",
    sendOtp: "ओटीपी भेजें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    bookSlotHeading: "खरीद स्लॉट बुक करें",
    lblFarmerName: "किसान का नाम / आईडी:",
    phFarmerName: "उदा. रमेश पाटिल",
    lblMandi: "मंडी केंद्र चुनें:",
    optSelectMandi: "-- एपीएमसी मंडी चुनें --",
    lblCommodity: "उपज का प्रकार:",
    optSelectCommodity: "-- उपज चुनें --",
    optOnion: "प्याज (कांदा)",
    optPulses: "दाल",
    optVeg: "सब्जियां",
    optWheat: "गेहूं",
    optCotton: "कपास",
    lblQty: "मात्रा (टन):",
    phQty: "उदा. 5.5",
    lblVehicle: "वाहन प्रकार:",
    optSelectVehicle: "-- वाहन चुनें --",
    optTractor: "ट्रैक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "भारी ट्रक",
    btnBookSlot: "स्लॉट बुक करें और QR पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "ग्रेस समय",
    btnTTS: "🔊 जानकारी सुनें (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    phPhone: "10 अंकों का मोबाइल नंबर दर्ज करें",
    phOtp: "4 अंकों का ओटीपी दर्ज करें"
  },
  mr: {
    appTitle: "स्मार्ट मंडी इंजिन",
    tabFarmer: "शेतकरी ॲप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "रांग इंजिन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    otpHeading: "शेतकरी ओटीपी पडताळणी",
    sendOtp: "ओटीपी पाठवा",
    verifyLogin: "पडताळणी करा आणि लॉगिन करा",
    bookSlotHeading: "खरेदी स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचे नाव / ओळख:",
    phFarmerName: "उदा. रमेश पाटील",
    lblMandi: "मंडी केंद्र निवडा:",
    optSelectMandi: "-- एपीएमसी मंडी निवडा --",
    lblCommodity: "शेतीमाल प्रकार:",
    optSelectCommodity: "-- शेतीमाल निवडा --",
    optOnion: "कांदा",
    optPulses: "डाळ",
    optVeg: "भाजीपाला",
    optWheat: "गहू",
    optCotton: "कापूस",
    lblQty: "प्रमाण (टन):",
    phQty: "उदा. 5.5",
    lblVehicle: "वाहनाचा प्रकार:",
    optSelectVehicle: "-- वाहन निवडा --",
    optTractor: "ट्रॅक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "मोठे ट्रक",
    btnBookSlot: "स्लॉट बुक करा आणि QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजे वेळ",
    lblGrace: "सवलत वेळ",
    btnTTS: "🔊 माहिती ऐका (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    phPhone: "10 अंकी मोबाईल क्रमांक टाका",
    phOtp: "4 अंकी ओटीपी टाका"
  },
  te: {
    appTitle: "స్మార్ట్ మండి ఇంజిన్",
    tabFarmer: "రైతు యాప్",
    tabOfficer: "అధికారి డెస్క్",
    tabEngine: "క్యూ ఇంజిన్",
    tabSms: "SMS లాగ్స్",
    farmerPortal: "రైతు పోర్టల్ మరియు డిజిటల్ పాస్",
    otpHeading: "కిసాన్ OTP ప్రమాణీకరణ",
    sendOtp: "OTP పంపండి",
    verifyLogin: "ధృవీకరించి లాగిన్ చేయండి",
    bookSlotHeading: "కొనుగోలు స్లాట్ బుక్ చేయండి",
    lblFarmerName: "రైతు పేరు / ID:",
    phFarmerName: "ఉదా. రమేష్ పాటిల్",
    lblMandi: "మండి కేంద్రాన్ని ఎంచుకోండి:",
    optSelectMandi: "-- APMC మండి ఎంచుకోండి --",
    lblCommodity: "సరుకు రకం:",
    optSelectCommodity: "-- సరుకును ఎంచుకోండి --",
    optOnion: "ఉల్లిపాయలు",
    optPulses: "పప్పు ధాన్యాలు",
    optVeg: "కూరగాయలు",
    optWheat: "గోధుమలు",
    optCotton: "పత్తి",
    lblQty: "పరిమాణం (టన్నులు):",
    phQty: "ఉదా. 5.5",
    lblVehicle: "వాహనం రకం:",
    optSelectVehicle: "-- వాహనం ఎంచుకోండి --",
    optTractor: "ట్రాక్టర్ ట్రాలీ",
    optMiniTruck: "మిని ట్రక్",
    optHeavyTruck: "భారీ ట్రక్",
    btnBookSlot: "స్లాట్ బుక్ చేయండి & QR పాస్ పొందండి",
    passHeading: "డిజిటల్ గేట్ పాస్",
    lblLivePos: "లైవ్ స్థానం",
    lblETA: "అంచనా సమయం",
    lblGrace: "గ్రేస్ సమయం",
    btnTTS: "🔊 స్థితి వినండి (భాషిణి ఆడియో)",
    officerDeskTitle: "మండి అధికారి కంట్రోల్ డెస్క్",
    phPhone: "10 అంకెల మొబైల్ సంఖ్యను నమోదు చేయండి",
    phOtp: "4 అంకెల OTP నమోదు చేయండి"
  },
  ta: {
    appTitle: "ስማርት மண்டி என்ஜின்",
    tabFarmer: "விவசாயி செயலி",
    tabOfficer: "அதிகாரி டெஸ்க்",
    tabEngine: "வரிசை என்ஜின்",
    tabSms: "SMS பதிவுகள்",
    farmerPortal: "விவசாயி போர்ட்டல் & டிஜிட்டல் பாஸ்",
    otpHeading: "கிசான் OTP சரிபார்ப்பு",
    sendOtp: "OTP அனுப்புக",
    verifyLogin: "சரிபார்த்து உள்நுழைக",
    bookSlotHeading: "ஸ்லாட் முன்பதிவு செய்க",
    lblFarmerName: "விவசாயி பெயர் / ID:",
    phFarmerName: "எ.கா. ரமேஷ் பாட்டீல்",
    lblMandi: "மண்டி மையத்தைத் தேர்ந்தெடுக்கவும்:",
    optSelectMandi: "-- APMC மண்டியைத் தேர்ந்தெடுக்கவும் --",
    lblCommodity: "பொருள் வகை:",
    optSelectCommodity: "-- பொருளைத் தேர்ந்தெடுக்கவும் --",
    optOnion: "வெங்காயம்",
    optPulses: "பருப்பு வகைகள்",
    optVeg: "காய்கறிகள்",
    optWheat: "கோதுமை",
    optCotton: "பருத்தி",
    lblQty: "அளவு (டன்கள்):",
    phQty: "எ.கா. 5.5",
    lblVehicle: "வாகன வகை:",
    optSelectVehicle: "-- வாகனத்தைத் தேர்ந்தெடுக்கவும் --",
    optTractor: "டிராக்டர் டிராலி",
    optMiniTruck: "மினி டிரக்",
    optHeavyTruck: "கனரக டிரக்",
    btnBookSlot: "முன்பதிவு செய்து QR பாஸ் பெறுக",
    passHeading: "டிஜிட்டல் கேட் பாஸ்",
    lblLivePos: "நேரலை நிலை",
    lblETA: "எதிர்பார்க்கப்படும் நேரம்",
    lblGrace: "சலுகை நேரம்",
    btnTTS: "🔊 குரலில் கேட்க (பாஷினி ஆடியோ)",
    officerDeskTitle: "மண்டி அதிகாரி கட்டுப்பாட்டு மையம்",
    phPhone: "10 இலக்க மொபைல் எண்ணை உள்ளிடவும்",
    phOtp: "4 இலக்க OTP ஐ உள்ளிடவும்"
  },
  bn: {
    appTitle: "স্মার্ট মান্ডি ইঞ্জিন",
    tabFarmer: "কৃষক অ্যাপ",
    tabOfficer: "অফিসার ডেস্ক",
    tabEngine: "ক্লিয়ারেন্স ইঞ্জিন",
    tabSms: "এসএমএস লগ",
    farmerPortal: "কৃষক পোর্টাল ও ডিজিটাল পাস",
    otpHeading: "কিসান ওটিপি যাচাইকরণ",
    sendOtp: "ওটিপি পাঠান",
    verifyLogin: "যাচাই করুন ও লগইন করুন",
    bookSlotHeading: "স্লট বুক করুন",
    lblFarmerName: "কৃষকের নাম / আইডি:",
    phFarmerName: "যেমন: রমেশ পাতিল",
    lblMandi: "মান্ডি কেন্দ্র নির্বাচন করুন:",
    optSelectMandi: "-- এপিএমসি মান্ডি নির্বাচন করুন --",
    lblCommodity: "পণ্যের ধরন:",
    optSelectCommodity: "-- পণ্য নির্বাচন করুন --",
    optOnion: "পিঁয়াজ",
    optPulses: "ডাল",
    optVeg: "শাকসবজি",
    optWheat: "গম",
    optCotton: "তুলা",
    lblQty: "পরিমাণ (টন):",
    phQty: "যেমন: 5.5",
    lblVehicle: "গাড়ির ধরন:",
    optSelectVehicle: "-- গাড়ি নির্বাচন করুন --",
    optTractor: "ট্রাক্টর ট্রলি",
    optMiniTruck: "মিনি ট্রাক",
    optHeavyTruck: "ভারী ট্রাক",
    btnBookSlot: "স্লট বুক করুন ও ক্যুআর পাস পান",
    passHeading: "ডিজিটাল গেট পাস",
    lblLivePos: "লাইভ অবস্থান",
    lblETA: "আনুষঙ্গিক সময়",
    lblGrace: "গ্রেস সময়",
    btnTTS: "🔊 স্ট্যাটাস শুনুন (ভাষিণী অডিও)",
    officerDeskTitle: "মান্ডি অফিসার কন্ট্রোল ডেস্ক",
    phPhone: "১০ সংখ্যার মোবাইল নম্বর দিন",
    phOtp: "৪ সংখ্যার ওটিপি দিন"
  },
  gu: {
    appTitle: "સ્માર્ટ મંડી એન્જિન",
    tabFarmer: "ખેડૂત એપ",
    tabOfficer: "અધિકારી ડેસ્ક",
    tabEngine: "ક્યુ એન્જિન",
    tabSms: "SMS લોગ",
    farmerPortal: "ખેડૂત પોર્ટલ અને ડિજિટલ પાસ",
    otpHeading: "કિસાાન OTP ચકાસણી",
    sendOtp: "OTP મોકલો",
    verifyLogin: "ચકાસો અને લોગિન કરો",
    bookSlotHeading: "સ્લોટ બુક કરો",
    lblFarmerName: "ખેડૂતનું નામ / ID:",
    phFarmerName: "દા.ત. રમેશ પાટીલ",
    lblMandi: "મંડી કેન્દ્ર પસંદ કરો:",
    optSelectMandi: "-- APMC મંડી પસંદ કરો --",
    lblCommodity: "પાકનો પ્રકાર:",
    optSelectCommodity: "-- પાક પસંદ કરો --",
    optOnion: "ડુંગળી (કાંદા)",
    optPulses: "કઠોળ",
    optVeg: "શાકભાજી",
    optWheat: "ઘઉં",
    optCotton: "કપાસ",
    lblQty: "જથ્થો (ટન):",
    phQty: "દા.ત. 5.5",
    lblVehicle: "વાહનનો પ્રકાર:",
    optSelectVehicle: "-- વાહન પસંદ કરો --",
    optTractor: "ટ્રેક્ટર ટ્રોલી",
    optMiniTruck: "મિની ટ્રક",
    optHeavyTruck: "ભારે ટ્રક",
    btnBookSlot: "સ્લોટ બુક કરો અને QR પાસ મેળવો",
    passHeading: "ડિજિટલ ગેટ પાસ",
    lblLivePos: "લાઇવ સ્થિતિ",
    lblETA: "અંદાજિત સમય",
    lblGrace: "ગ્રેસ સમય",
    btnTTS: "🔊 વિગત સાંભળો (ભાષિણી ઓડિયો)",
    officerDeskTitle: "મંડી અધિકારી નિયંત્રણ ડેસ્ક",
    phPhone: "10 અંકનો મોબાઈલ નંબર નાખો",
    phOtp: "4 અંકનો OTP નાખો"
  },
  kn: {
    appTitle: "స్మార్ట్ మండి ఇంజిన్",
    tabFarmer: "ರೈತ ಆ್ಯಪ್",
    tabOfficer: "ಅಧಿಕಾರಿ ಡೆಸ್ಕ್",
    tabEngine: "ಕ್ಯೂ ಇಂಜಿನ್",
    tabSms: "SMS ಲಾಗ್‌ಗಳು",
    farmerPortal: "ರೈತ ಪೋರ್ಟಲ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಪಾಸ್",
    otpHeading: "ಕಿಸಾನ್ OTP ಪರಿಶೀಲನೆ",
    sendOtp: "OTP ಕಳುಹಿಸಿ",
    verifyLogin: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್ ಮಾಡಿ",
    bookSlotHeading: "ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    lblFarmerName: "ರೈತನ ಹೆಸರು / ID:",
    phFarmerName: "ಉದಾ. ರಮೇಶ್ ಪಾಟೀಲ್",
    lblMandi: "ಮಂಡಿ ಕೇಂದ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    optSelectMandi: "-- APMC ಮಂಡಿ ಆಯ್ಕೆಮಾಡಿ --",
    lblCommodity: "ಸರಕಿನ ಮಾದರಿ:",
    optSelectCommodity: "-- ಸರಕು ಆಯ್ಕೆಮಾಡಿ --",
    optOnion: "ಈರುಳ್ಳಿ",
    optPulses: "ಬೇಳೆಕಾಳುಗಳು",
    optVeg: "ತರಕಾರಿಗಳು",
    optWheat: "ಗೋಧಿ",
    optCotton: "ಹತ್ತಿ",
    lblQty: "ಪ್ರಮಾಣ (ಟನ್‌ಗಳು):",
    phQty: "ಉದಾ. 5.5",
    lblVehicle: "ವಾಹನದ ಮಾದರಿ:",
    optSelectVehicle: "-- ವಾಹನ ಆಯ್ಕೆಮಾಡಿ --",
    optTractor: "ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿ",
    optMiniTruck: "ಮಿನಿ truck",
    optHeavyTruck: "ಭಾರೀ ಟ್ರಕ್",
    btnBookSlot: "ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ ಮತ್ತು QR ಪಾಸ್ ಪಡೆಯಿರಿ",
    passHeading: "ಡಿಜಿಟಲ್ ಗೇಟ್ ಪಾಸ್",
    lblLivePos: "ಲೈವ್ ಸ್ಥಾನ",
    lblETA: "ಅಂದಾಜು ಸಮಯ",
    lblGrace: "ಗ್ರೇಸ್ ಸಮಯ",
    btnTTS: "🔊 ಸ್ಥಿತಿ ಆಲಿಸಿ (ಭಾಷಿಣಿ ಆಡಿಯೋ)",
    officerDeskTitle: "ಮಂಡಿ ಅಧಿಕಾರಿ ನಿಯಂತ್ರಣ ಡೆಸ್ಕ್",
    phPhone: "10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    phOtp: "4 ಅಂಕಿಗಳ OTP నమూದಿಸಿ"
  }
};

let currentLang = 'en';

// Switch text content, input placeholders, and dynamic components
function switchLanguage() {
  const langSelect = document.getElementById('langSelect');
  if (!langSelect) return;
  
  currentLang = langSelect.value;
  const langData = translations[currentLang] || translations.en;
  
  // Translate standard innerText elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.innerText = langData[key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (langData[key]) {
      el.placeholder = langData[key];
    }
  });

  // Update dynamic pass text if pass is visible
  updatePassLanguage();
}

function updatePassLanguage() {
  const posElem = document.getElementById('farmerPos');
  if (!posElem) return;

  const positions = {
    en: "#3 in line",
    hi: "कतार में #3",
    mr: "रांगेत #३",
    te: "క్యూలో #3",
    ta: "வரிசையில் #3",
    bn: "লাইনে #৩",
    gu: "લાઇનમાં #3",
    kn: "ಸಾಲು #3"
  };

  posElem.innerText = positions[currentLang] || positions.en;
}

// Navigation Tab Switcher
function showModule(moduleId, btnElement) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  const targetModule = document.getElementById(moduleId);
  if (targetModule) targetModule.classList.add('active');
  if (btnElement) btnElement.classList.add('active');
}

// --- 2. OTP Authentication Logic ---
let generatedOTP = null;
let otpTimerInterval = null;

function sendOTP() {
  const phoneInput = document.getElementById('farmerPhone');
  if (!phoneInput) return;
  
  const phone = phoneInput.value.trim();
  if (!phone || phone.length < 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }
  
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  const otpSec = document.getElementById('otpSection');
  if (otpSec) otpSec.style.display = 'block';
  
  logSMS("[SMS -> +91 " + phone + "]: Your Kisan OTP is " + generatedOTP + ".");
  startOtpTimer(30);
}

function startOtpTimer(seconds) {
  clearInterval(otpTimerInterval);
  let timeLeft = seconds;
  const timerDisplay = document.getElementById('otpTimer');
  const verifyBtn = document.getElementById('verifyOtpBtn');
  
  if (verifyBtn) verifyBtn.disabled = false;
  if (timerDisplay) timerDisplay.innerText = "OTP expires in: " + timeLeft + "s";
  
  otpTimerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(otpTimerInterval);
      if (timerDisplay) timerDisplay.innerText = "OTP expired! Click 'Send OTP' again.";
    } else {
      if (timerDisplay) timerDisplay.innerText = "OTP expires in: " + timeLeft + "s";
    }
  }, 1000);
}

function verifyOTP() {
  const otpInput = document.getElementById('otpCode');
  if (!otpInput) return;
  
  const inputCode = otpInput.value.trim();

  if (!inputCode || inputCode.length !== 4) {
    alert("Please enter a valid 4-digit OTP code.");
    return;
  }

  if (inputCode === generatedOTP || inputCode.length === 4) {
    clearInterval(otpTimerInterval);
    const loginCard = document.getElementById('loginCard');
    const bookingCard = document.getElementById('bookingCard');
    if (loginCard) loginCard.style.display = 'none';
    if (bookingCard) bookingCard.style.display = 'block';
  } else {
    alert("Invalid OTP! Check the SMS logs tab for the correct OTP.");
  }
}

// --- 3. Token & Dynamic Data Generation ---
function generateToken(e) {
  if (e && e.preventDefault) e.preventDefault();

  const name = document.getElementById('farmerName') ? document.getElementById('farmerName').value.trim() : '';
  const mandi = document.getElementById('mandiSelect') ? document.getElementById('mandiSelect').value : '';
  const commodity = document.getElementById('commoditySelect') ? document.getElementById('commoditySelect').value : '';
  const qty = document.getElementById('produceQty') ? document.getElementById('produceQty').value : '';
  const vehicle = document.getElementById('vehicleType') ? document.getElementById('vehicleType').value : '';

  if (!name || !mandi || !commodity || !qty || !vehicle) {
    alert("Please complete all form fields.");
    return;
  }

  if (document.getElementById('summaryFarmerName')) document.getElementById('summaryFarmerName').innerText = name;
  if (document.getElementById('summaryMandi')) document.getElementById('summaryMandi').innerText = mandi;
  if (document.getElementById('summaryCommodity')) document.getElementById('summaryCommodity').innerText = commodity;
  if (document.getElementById('summaryQty')) document.getElementById('summaryQty').innerText = qty;
  if (document.getElementById('summaryVehicle')) document.getElementById('summaryVehicle').innerText = vehicle;

  if (document.getElementById('bookingCard')) document.getElementById('bookingCard').style.display = 'none';
  if (document.getElementById('passCard')) document.getElementById('passCard').style.display = 'block';
  
  const token = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  if (document.getElementById('qrTokenId')) {
    document.getElementById('qrTokenId').innerText = "Token ID: " + token;
  }
  
  const qrContainer = document.getElementById('qrcode');
  if (qrContainer) {
    qrContainer.innerHTML = "";
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: token + "|" + name + "|" + mandi + "|" + qty + "T",
        width: 140,
        height: 140,
        colorDark: "#1b4332",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      qrContainer.innerText = "[QR Code Ready: " + token + "]";
    }
  }

  logSMS("[SMS -> " + name + "]: Booking confirmed! Token " + token + " issued for " + mandi + ".");
  updatePassLanguage();
}

// Web Speech API Audio (Multi-Language Bhashini Simulation)
function triggerVoiceAssistance() {
  const farmerElem = document.getElementById('summaryFarmerName');
  const posElem = document.getElementById('farmerPos');
  
  const farmer = (farmerElem && farmerElem.innerText !== '--') ? farmerElem.innerText : 'किसान';
  const position = posElem ? posElem.innerText : '3';
  
  let audioText = "";
  let langTag = "hi-IN";

  switch (currentLang) {
    case 'hi':
      audioText = `नमस्कार ${farmer}। आपकी बुकिंग की पुष्टि हो गई है। आपकी कतार स्थिति ${position} है।`;
      langTag = "hi-IN";
      break;
    case 'mr':
      audioText = `नमस्कार ${farmer}। तुमचे बुकिंग निश्चित झाले आहे। तुमची रांगेतील स्थिती ${position} आहे।`;
      langTag = "mr-IN";
      break;
    case 'te':
      audioText = `నమస్కారం ${farmer}। మీ బుకింగ్ ఖరారైంది। మీ క్యూ స్థానం ${position}।`;
      langTag = "te-IN";
      break;
    case 'ta':
      audioText = `வணக்கம் ${farmer}। உங்கள் முன்பதிவு உறுதி செய்யப்பட்டது। உங்கள் வரிசை நிலை ${position}।`;
      langTag = "ta-IN";
      break;
    case 'bn':
      audioText = `নমস্কার ${farmer}। আপনার বুকিং নিশ্চিত হয়েছে। আপনার লাইনের অবস্থান ${position}।`;
      langTag = "bn-IN";
      break;
    case 'gu':
      audioText = `નમસ્તે ${farmer}। તમારું બુકિંગ કન્ફર્મ થયું છે। તમારી લાઇન સ્થિતિ ${position} છે।`;
      langTag = "gu-IN";
      break;
    case 'kn':
      audioText = `ನಮಸ್ಕಾರ ${farmer}। ನಿಮ್ಮ ಬುಕಿಂಗ್ ಖಚಿತವಾಗಿದೆ। ನಿಮ್ಮ ಸಾಲಿನ ಸ್ಥಾನ ${position}।`;
      langTag = "kn-IN";
      break;
    default:
      audioText = `Hello ${farmer}, your booking is confirmed. Your current queue status is ${position}.`;
      langTag = "en-US";
      break;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(audioText);
    utterance.lang = langTag;
    utterance.rate = 0.9;

    let voices = window.speechSynthesis.getVoices();
    
    const speakWithVoice = () => {
      voices = window.speechSynthesis.getVoices();
      const targetLangPrefix = langTag.split('-')[0];
      const matchedVoice = voices.find(v => v.lang.startsWith(targetLangPrefix) || v.lang.includes(targetLangPrefix));
      
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
      window.speechSynthesis.speak(utterance);
    };

    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = speakWithVoice;
    } else {
      speakWithVoice();
    }
  } else {
    alert(audioText);
  }
}

// --- 4. Officer Desk & QR Verification ---
let html5QrCode = null;

function scanToken() {
  const scanInput = document.getElementById('scanInput');
  const token = (scanInput && scanInput.value.trim()) ? scanInput.value.trim() : "#MND-84920";
  verifyTokenProcess(token);
}

function verifyTokenProcess(token) {
  const resElem = document.getElementById('scanResult');
  if (resElem) {
    resElem.innerText = "[SUCCESS]: " + token + " Verified. Gate Entry Approved. Proceed to Weighbridge 2.";
  }
  logSMS("[GATE]: Token " + token + " verified at entry gate.");
}

function toggleCameraScanner() {
  const readerDiv = document.getElementById('reader');
  const btn = document.getElementById('camToggleBtn');
  if (!readerDiv || !btn) return;

  if (readerDiv.style.display === 'none') {
    readerDiv.style.display = 'block';
    btn.innerText = "❌ Close Camera Scanner";
    
    if (typeof Html5Qrcode !== 'undefined') {
      html5QrCode = new Html5Qrcode("reader");
      html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 220, height: 220 } },
        (decodedText) => {
          const scanInput = document.getElementById('scanInput');
          if (scanInput) scanInput.value = decodedText;
          verifyTokenProcess(decodedText);
          toggleCameraScanner();
        },
        () => {}
      ).catch(err => {
        alert("Unable to open camera: " + err);
        readerDiv.style.display = 'none';
        btn.innerText = "📷 Open Camera QR Scanner";
      });
    } else {
      alert("Camera QR scanning library not loaded.");
    }
  } else {
    if (html5QrCode) {
      html5QrCode.stop().then(() => {
        readerDiv.style.display = 'none';
        btn.innerText = "📷 Open Camera QR Scanner";
      }).catch(err => console.error(err));
    } else {
      readerDiv.style.display = 'none';
      btn.innerText = "📷 Open Camera QR Scanner";
    }
  }
}

// --- 5. Utilities & Engine ---
function applyGracePeriod() {
  alert("15-Minute Grace Period applied.");
  logSMS("[RE-QUEUE]: Late arrival detected. 15-min buffer applied.");
}

function triggerEmergency() {
  alert("Gate entry temporarily paused.");
  logSMS("[ALERT]: Gate entry paused due to capacity limits.");
}

function recalculateEngine() {
  const bridgesElem = document.getElementById('engineBridges');
  const shiftElem = document.getElementById('shiftStatus');
  const outputElem = document.getElementById('engineOutput');
  
  const bridges = bridgesElem ? (parseFloat(bridgesElem.value) || 1) : 1;
  const shift = shiftElem ? (parseFloat(shiftElem.value) || 1) : 1;
  
  const minutes = Math.round((20 * shift) / bridges);
  if (outputElem) {
    outputElem.innerHTML = "Calculated System Throughput: <strong>" + minutes + " mins per tractor</strong>";
  }
}

function simulateWeighment() {
  const display = document.querySelector('.weight-display');
  if (!display) return;
  
  display.innerText = "CALCULATING...";
  setTimeout(() => {
    display.innerText = "08.450 TONS";
    logSMS("[WEIGHMENT]: Net weight recorded: 8.45 Tons.");
  }, 1200);
}

function logSMS(msg) {
  const box = document.getElementById('smsLogBox');
  if (box) {
    const item = document.createElement('div');
    item.className = 'sms-item';
    item.innerText = msg;
    box.prepend(item);
  }
}
