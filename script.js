// --- 1. Multilingual i18n Translation Setup ---
const translations = {
  en: {
    appTitle: "Smart Mandi Engine",
    tabFarmer: "1. Farmer App",
    tabOfficer: "2. Officer Desk",
    tabEngine: "3. Queue Engine",
    tabSms: "4. SMS/IVR Logs",
    farmerPortal: "Farmer Portal & Digital Pass",
    otpHeading: "1. Kisan OTP Authentication",
    sendOtp: "Send OTP",
    verifyLogin: "Verify & Login",
    bookSlotHeading: "2. Book Procurement Slot",
    lblFarmerName: "Farmer Name / Identity:",
    lblMandi: "Select Mandi Center:",
    lblCommodity: "Commodity Type:",
    optOnion: "Onion (Kanda)",
    optPulses: "Pulses (Dal)",
    optVeg: "Vegetables",
    lblQty: "Produce Quantity (Tons):",
    lblVehicle: "Vehicle Type:",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passHeading: "Digital Gate Pass",
    lblLivePos: "Live Position:",
    lblETA: "Dynamic ETA:",
    lblGrace: "Grace Period:",
    btnTTS: "🔊 Listen Status (Bhashini TTS)",
    officerDeskTitle: "Mandi Officer Control Desk",
    ttsAlert: "🔊 Bhashini Voice Output: 'Your turn is 3rd in line. Estimated wait time: 25 minutes'"
  },
  mr: {
    appTitle: "स्मार्ट मंडी इंजिन",
    tabFarmer: "१. शेतकरी ॲप",
    tabOfficer: "२. अधिकारी डेस्क",
    tabEngine: "३. रांग इंजिन",
    tabSms: "४. एसएमएस/आयव्हिआर लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    otpHeading: "१. शेतकरी ओटीपी पडताळणी",
    sendOtp: "ओटीपी पाठवा",
    verifyLogin: "पडताळणी करा आणि लॉगिन करा",
    bookSlotHeading: "२. खरेदी स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचे नाव / ओळख:",
    lblMandi: "मंडी केंद्र निवडा:",
    lblCommodity: "शेतीमाल प्रकार:",
    optOnion: "कांदा",
    optPulses: "डाळ",
    optVeg: "भाजीपाला",
    lblQty: "उत्पादन प्रमाण (टन):",
    lblVehicle: "वाहनाचा प्रकार:",
    btnBookSlot: "स्लॉट बुक करा आणि QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "थेट स्थान:",
    lblETA: "अंदाजे वेळ (ETA):",
    lblGrace: "सवलतीचा कालावधी:",
    btnTTS: "🔊 अद्यावत माहिती ऐका (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    ttsAlert: "🔊 भाषिणी व्हॉईस आऊटपुट: 'तुमचा नंबर ३रा आहे. अंदाजे वेळ २५ मिनिटे बाकी आहे.'"
  },
  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "१. किसान ऐप",
    tabOfficer: "२. अधिकारी डेस्क",
    tabEngine: "३. कतार इंजन",
    tabSms: "४. एसएमएस/आईवीआर लॉग",
    farmerPortal: "किसान पोर्टल और डिजिटल पास",
    otpHeading: "१. किसान ओटीपी सत्यापन",
    sendOtp: "ओटीपी भेजें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    bookSlotHeading: "२. खरीद स्लॉट बुक करें",
    lblFarmerName: "किसान का नाम / पहचान:",
    lblMandi: "मंडी केंद्र चुनें:",
    lblCommodity: "कृषि उपज का प्रकार:",
    optOnion: "प्याज (कांदा)",
    optPulses: "दाल",
    optVeg: "सब्जियां",
    lblQty: "उपज मात्रा (टन):",
    lblVehicle: "वाहन का प्रकार:",
    btnBookSlot: "स्लॉट बुक करें और QR पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति:",
    lblETA: "अनुमानित समय:",
    lblGrace: "ग्रेस समय:",
    btnTTS: "🔊 जानकारी सुनें (भाषिणी आवाज)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    ttsAlert: "🔊 भाषिणी वॉयस आउटपुट: 'आपका नंबर ३रा है। अनुमानित समय २५ मिनट शेष है।'"
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

// Module Switcher Logic
function showModule(moduleId, btnElement) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(moduleId).classList.add('active');
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

// --- 2. OTP Authentication & 10-Second Expiration Timer ---
let otpTimerInterval = null;

function sendOTP() {
  const phone = document.getElementById('farmerPhone').value;
  if(!phone) return alert("Please enter mobile number.");
  
  document.getElementById('otpSection').style.display = 'block';
  logSMS(`OTP sent to +91 ${phone}: 1234 is your login code.`);
  
  startOtpTimer(10);
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
      timerDisplay.innerText = "OTP expired! Please click 'Send OTP' again.";
      verifyBtn.disabled = true;
    } else {
      timerDisplay.innerText = `OTP expires in: ${timeLeft}s`;
    }
  }, 1000);
}

function verifyOTP() {
  const code = document.getElementById('otpCode').value;
  if(code === '1234') {
    clearInterval(otpTimerInterval);
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('bookingCard').style.display = 'block';
  } else {
    alert("Invalid OTP! Try entering 1234.");
  }
}

// --- 3. Dynamic QR Pass Generation ---
let qrcodeInstance = null;

function generateToken(e) {
  e.preventDefault();
  document.getElementById('bookingCard').style.display = 'none';
  document.getElementById('passCard').style.display = 'block';
  
  const token = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('qrTokenId').innerText = "Token ID: " + token;
  
  // Render QR Code using qrcode.js
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = "";
  qrcodeInstance = new QRCode(qrContainer, {
    text: token,
    width: 160,
    height: 160,
    colorDark : "#1b4332",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  logSMS(`[SMS -> Farmer]: Token ${token} Confirmed! Target arrival: 45 mins. Slot reserved.`);
}

function triggerVoiceAssistance() {
  const msg = translations[currentLang]?.ttsAlert || translations.en.ttsAlert;
  alert(msg);
}

// --- 4. Officer Desk & Live Camera QR Scanner ---
let html5QrCode = null;

function scanToken() {
  const token = document.getElementById('scanInput').value || "#MND-84920";
  verifyTokenProcess(token);
}

function verifyTokenProcess(token) {
  document.getElementById('scanResult').innerText = `[SUCCESS]: ${token} Verified. Gate Entry Approved. Proceed to Weighbridge 2.`;
  logSMS(`[SMS -> Farmer]: Gate pass verified (${token})! Proceed immediately to Weighbridge 2.`);
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
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        document.getElementById('scanInput').value = decodedText;
        verifyTokenProcess(decodedText);
        toggleCameraScanner();
      },
      (errorMessage) => {
        // Scanning errors are expected when frame is empty
      }
    ).catch(err => {
      alert("Unable to access camera: " + err);
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

// --- 5. Queue Engine & Helpers ---
function applyGracePeriod() {
  alert("15-Minute Grace Period applied to overdue tokens.");
  logSMS("[SMS -> Re-Queue]: Late arrival detected. 15-min buffer applied; token re-queued safely.");
}

function triggerEmergency() {
  alert("Emergency pause applied to Mandi gate entry.");
  logSMS("[ALERT -> All Drivers]: Gate entry paused due to yard capacity limit. Please wait in holding lane.");
}

function recalculateEngine() {
  const bridges = document.getElementById('engineBridges').value;
  const shift = document.getElementById('shiftStatus').value;
  const minutes = Math.round((20 * shift) / bridges);
  document.getElementById('engineOutput').innerHTML = `Calculated System Throughput: <strong>${minutes} mins per tractor</strong>`;
}

function simulateWeighment() {
  const display = document.querySelector('.weight-display');
  display.innerText = "CALCULATING...";
  setTimeout(() => {
    display.innerText = "08.450 TONS";
    logSMS("[SMS -> Farmer]: Net weight recorded: 8.45 Tons. Payment processing initiated.");
  }, 1500);
}

function logSMS(msg) {
  const box = document.getElementById('smsLogBox');
  const item = document.createElement('div');
  item.className = 'sms-item';
  item.innerText = msg;
  box.prepend(item);
}
