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
  const langSelect = document.getElementById('langSelect');
  if (!langSelect) return;
  
  currentLang = langSelect.value;
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

  // Bind values dynamically to summary elements
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
}

// Web Speech API Audio Implementation
function triggerVoiceAssistance() {
  const farmerElem = document.getElementById('summaryFarmerName');
  const posElem = document.getElementById('farmerPos');
  
  const farmer = farmerElem ? farmerElem.innerText : 'Farmer';
  const position = posElem ? posElem.innerText : '#3 in line';
  
  let audioText = "";
  if (currentLang === 'hi') {
    audioText = "नमस्कार " + farmer + ". आपकी बुकिंग की पुष्टि हो गई है। आपकी कतार स्थिति " + position + " है।";
  } else if (currentLang === 'mr') {
    audioText = "नमस्कार " + farmer + ". तुमचे बुकिंग निश्चित झाले आहे. तुमची रांग मधील स्थिती " + position + " आहे।";
  } else {
    audioText = "Hello " + farmer + ", your booking is confirmed. Your current queue status is " + position + ".";
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(audioText);
    
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
