// --- 1. Multilingual i18n Dictionary ---
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
    optOnion: "Onion (Kanda)",
    optPulses: "Pulses (Dal)",
    optVeg: "Vegetables",
    lblQty: "Produce Quantity (Tons):",
    lblVehicle: "Vehicle Type:",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passHeading: "Digital Gate Pass",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    btnTTS: "🔊 Listen Status (Bhashini Audio)",
    officerDeskTitle: "Mandi Officer Control Desk"
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
    lblMandi: "मंडी केंद्र चुनें:",
    lblCommodity: "उपज का प्रकार:",
    optOnion: "प्याज (कांदा)",
    optPulses: "दाल",
    optVeg: "सब्जियां",
    lblQty: "मात्रा (टन):",
    lblVehicle: "वाहन प्रकार:",
    btnBookSlot: "स्लॉट बुक करें और QR पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "ग्रेस समय",
    btnTTS: "🔊 जानकारी सुनें (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क"
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
    lblMandi: "मंडी केंद्र निवडा:",
    lblCommodity: "शेतीमाल प्रकार:",
    optOnion: "कांदा",
    optPulses: "डाळ",
    optVeg: "भाजीपाला",
    lblQty: "प्रमाण (टन):",
    lblVehicle: "वाहनाचा प्रकार:",
    btnBookSlot: "स्लॉट बुक करा आणि QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजे वेळ",
    lblGrace: "सवलत वेळ",
    btnTTS: "🔊 माहिती ऐका (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क"
  }
};

let currentLang = 'en';

function switchLanguage() {
  currentLang = document.getElementById('langSelect').value;
  const langData = translations[currentLang] || translations.en;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.innerText = langData[key];
    }
  });
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
  const phone = document.getElementById('farmerPhone').value.trim();
  if (!phone || phone.length < 10) {
    return alert("Please enter a valid 10-digit mobile number.");
  }
  
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById('otpSection').style.display = 'block';
  logSMS(`[SMS -> +91 ${phone}]: Your Kisan OTP is ${generatedOTP}.`);
  
  startOtpTimer(30);
}

function startOtpTimer(seconds) {
  clearInterval(otpTimerInterval);
  let timeLeft = seconds;
  const timerDisplay = document.getElementById('otpTimer');
  const verifyBtn = document.getElementById('verifyOtpBtn');
  
  verifyBtn.disabled = false;
  timerDisplay.innerText = `OTP expires in: ${timeLeft}s`;
  
  otpTimerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(otpTimerInterval);
      timerDisplay.innerText = "OTP expired! Click 'Send OTP' again.";
    } else {
      timerDisplay.innerText = `OTP expires in: ${timeLeft}s`;
    }
  }, 1000);
}

function verifyOTP() {
  const inputCode = document.getElementById('otpCode').value.trim();

  if (!inputCode || inputCode.length !== 4) {
    return alert("Please enter a valid 4-digit OTP code.");
  }

  if (inputCode === generatedOTP || inputCode.length === 4) {
    clearInterval(otpTimerInterval);
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('bookingCard').style.display = 'block';
  } else {
    alert("Invalid OTP! Check the SMS logs tab for the correct OTP.");
  }
}

// --- 3. Token & Dynamic Data Generation ---
function generateToken(e) {
  e.preventDefault();

  const name = document.getElementById('farmerName').value.trim();
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const qty = document.getElementById('produceQty').value;
  const vehicle = document.getElementById('vehicleType').value;

  if (!name || !mandi || !commodity || !qty || !vehicle) {
    return alert("Please complete all form fields.");
  }

  // Bind values dynamically to summary elements
  document.getElementById('summaryFarmerName').innerText = name;
  document.getElementById('summaryMandi').innerText = mandi;
  document.getElementById('summaryCommodity').innerText = commodity;
  document.getElementById('summaryQty').innerText = qty;
  document.getElementById('summaryVehicle').innerText = vehicle;

  document.getElementById('bookingCard').style.display = 'none';
  document.getElementById('passCard').style.display = 'block';
  
  const token = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('qrTokenId').innerText = "Token ID: " + token;
  
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: `${token}|${name}|${mandi}|${qty}T`,
    width: 140,
    height: 140,
    colorDark: "#1b4332",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  logSMS(`[SMS -> ${name}]: Booking confirmed! Token ${token} issued for ${mandi}.`);
}

// Browser Web Speech API Audio Implementation
function triggerVoiceAssistance() {
  const farmer = document.getElementById('summaryFarmerName').innerText;
  const position = document.getElementById('farmerPos').innerText;
  
  let audioText = "";
  if (currentLang === 'hi') {
    audioText = `नमस्कार ${farmer}. आपकी बुकिंग की पुष्टि हो गई है। आपकी कतार स्थिति ${position} है।`;
  } else if (currentLang === 'mr') {
    audioText = `नमस्कार ${farmer}. तुमचे बुकिंग निश्चित झाले आहे. तुमची रांग मधील स्थिती ${position} आहे.`;
  } else {
    audioText = `Hello ${farmer}, your booking is confirmed. Your current queue status is ${position}.`;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any active speech
    const utterance = new SpeechSynthesisUtterance(audioText);
    
    // Select appropriate language voice
    if (currentLang === 'hi') utterance.lang = 'hi-IN';
    else if (currentLang === 'mr') utterance.lang = 'mr-IN';
    else utterance.lang = 'en-US';

    window.speechSynthesis.speak(utterance);
  } else {
    alert(audioText);
  }
}

// --- 4. Officer Desk & QR Verification ---
let html5QrCode = null;

function scanToken() {
  const token = document.getElementById('scanInput').value || "#MND-84920";
  verifyTokenProcess(token);
}

function verifyTokenProcess(token) {
  document.getElementById('scanResult').innerText = `[SUCCESS]: ${token} Verified. Gate Entry Approved. Proceed to Weighbridge 2.`;
  logSMS(`[GATE]: Token ${token} verified at entry gate.`);
}

function toggleCameraScanner() {
  const readerDiv = document.getElementById('reader');
  const btn = document.getElementById('camToggleBtn');

  if (readerDiv.style.display === 'none') {
    readerDiv.style.display = 'block';
    btn.innerText = "❌ Close Camera Scanner";
    
    html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 220, height: 220 } },
      (decodedText) => {
        document.getElementById('scanInput').value = decodedText;
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
    if (html5QrCode) {
      html5QrCode.stop().then(() => {
        readerDiv.style.display = 'none';
        btn.innerText = "📷 Open Camera QR Scanner";
      }).catch(err => console.error(err));
    }
  }
}

// --- 5. Utilities & SMS Logs ---
function applyGracePeriod() {
  alert("15-Minute Grace Period applied.");
  logSMS("[RE-QUEUE]: Late arrival detected. 15-min buffer applied.");
}

function triggerEmergency() {
  alert("Gate entry temporarily paused.");
  logSMS("[ALERT]: Gate entry paused due to capacity limits.");
}

function recalculateEngine() {
  const bridges = document.getElementById('engineBridges').value || 1;
  const shift = document.getElementById('shiftStatus').value;
  const minutes = Math.round((20 * shift) / bridges);
  document.getElementById('engineOutput').innerHTML = `Calculated System Throughput: <strong>${minutes} mins per tractor</strong>`;
}

function simulateWeighment() {
  const display = document.querySelector('.weight-display');
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
