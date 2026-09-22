// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered:', reg.scope))
      .catch(err => console.error('Service Worker Error:', err));
  });
}

// Translations Data
const translations = {
  en: {
    appTitle: "Smart Mandi Management",
    roleFarmer: "Farmer Portal",
    roleOfficer: "Officer Dashboard",
    farmerRegTitle: "Farmer Registration & Slot Booking",
    labelFarmerName: "Farmer Full Name",
    labelMobile: "Mobile Number",
    btnSendOtp: "Send OTP",
    labelOtp: "Enter OTP",
    btnVerify: "Verify OTP",
    labelDate: "Procurement Date",
    labelMandi: "Select Mandi",
    labelCommodity: "Vegetable / Commodity",
    labelQty: "Quantity (Tons)",
    labelSlot: "Preferred Slot",
    labelVehicle: "Vehicle Type",
    btnBook: "Generate Token Pass",
    capacityTitle: "Check Mandi Capacity",
    capacitySubtitle: "Real-time daily limits and availability status",
    capacityHeader: "Capacity Status:",
    capacityDefault: "Select Date, Mandi & Commodity to check availability.",
    meterLabel: "Daily Quota Utilization",
    smsTitle: "📲 Mobile SMS Inbox (Simulation)",
    noSms: "No SMS alerts received yet.",
    tokenTitle: "Digital Entry Token Pass",
    passFarmer: "Farmer:",
    passMandi: "Mandi:",
    passCommodity: "Vegetable/Commodity:",
    passSchedule: "Schedule:",
    passVehicle: "Vehicle:",
    passReqQty: "Requested Qty:",
    passVerQty: "Verified Weight:",
    qrHelp: "Scan at Mandi Gate",
    queuePos: "Queue Position:",
    queueEta: "Estimated Entry ETA:",
    payStatus: "Payment Status:",
    payRef: "DBT Ref Number:",
    payAmt: "Total Paid Amount:",
    officerTitle: "Mandi Officer Operations Dashboard",
    officerSubtitle: "Scan farmer entry passes, adjust intake rate, verify weighment bridge data, and trigger direct bank transfers (DBT).",
    scanHeader: "1. Gate Verification (QR Scanner)",
    labelManualToken: "Or Enter Token ID Manually:",
    btnFetch: "Fetch Token",
    actionHeader: "2. Entry & Process Action",
    btnGateApprove: "Approve Gate Entry",
    labelWeighment: "Weighment Bridge Quantity (Tons)",
    btnSaveWeight: "Record Weight",
    btnApproveDbt: "Approve & Release Payment (DBT)",
    officerPrompt: "Scan QR or enter token ID to process weighment and payments."
  },
  hi: {
    appTitle: "स्मार्ट मंडी प्रबंधन प्रणाली",
    roleFarmer: "किसान पोर्टल",
    roleOfficer: "अधिकारी डैशबोर्ड",
    farmerRegTitle: "किसान पंजीकरण एवं स्लॉट बुकिंग",
    labelFarmerName: "किसान का पूरा नाम",
    labelMobile: "मोबाइल नंबर",
    btnSendOtp: "ओटीपी भेजें",
    labelOtp: "ओटीपी दर्ज करें",
    btnVerify: "सत्यापित करें",
    labelDate: "खरीद की तारीख",
    labelMandi: "मंडी चुनें",
    labelCommodity: "सब्जी / जिंस",
    labelQty: "मात्रा (टन में)",
    labelSlot: "पसंदीदा स्लॉट",
    labelVehicle: "वाहन का प्रकार",
    btnBook: "टोकन पास जारी करें",
    capacityTitle: "मंडी क्षमता जांचें",
    capacitySubtitle: "वास्तविक समय दैनिक सीमा और उपलब्धता की स्थिति",
    capacityHeader: "क्षमता स्थिति:",
    capacityDefault: "उपलब्धता की जांच के लिए तिथि, मंडी और जिंस चुनें।",
    meterLabel: "दैनिक कोटा उपयोग",
    smsTitle: "📲 मोबाइल एसएमएस इनबॉक्स (सिमुलेशन)",
    noSms: "अभी तक कोई एसएमएस अलर्ट प्राप्त नहीं हुआ है।",
    tokenTitle: "डिजिटल प्रवेश टोकन पास",
    passFarmer: "किसान:",
    passMandi: "मंडी:",
    passCommodity: "सब्जी/जिंस:",
    passSchedule: "समय सारणी:",
    passVehicle: "वाहन:",
    passReqQty: "अनुरोधित मात्रा:",
    passVerQty: "सत्यापित वजन:",
    qrHelp: "मंडी गेट पर स्कैन करें",
    queuePos: "कतार की स्थिति:",
    queueEta: "अनुमानित प्रवेश समय:",
    payStatus: "भुगतान स्थिति:",
    payRef: "डीबीटी संदर्भ संख्या:",
    payAmt: "कुल भुगतान राशि:",
    officerTitle: "मंडी अधिकारी संचालन डैशबोर्ड",
    officerSubtitle: "किसान प्रवेश पास स्कैन करें, कतार गति बदलें, वजन जांचें और भुगतान स्वीकृत करें।",
    scanHeader: "1. गेट सत्यापन (क्यूआर स्कैनर)",
    labelManualToken: "या मैन्युअल रूप से टोकन आईडी दर्ज करें:",
    btnFetch: "टोकन खोजें",
    actionHeader: "2. प्रवेश और प्रक्रिया कार्रवाई",
    btnGateApprove: "गेट प्रवेश स्वीकार करें",
    labelWeighment: "वेब्रिज वजन (टन)",
    btnSaveWeight: "वजन दर्ज करें",
    btnApproveDbt: "स्वीकृत करें और भुगतान (DBT) जारी करें",
    officerPrompt: "वजन और भुगतान संसाधित करने के लिए क्यूआर स्कैन करें या टोकन आईडी दर्ज करें।"
  }
};

let currentLang = 'en';
let isOtpVerified = false;
let currentDemoOtp = null;
let otpTimerInterval = null;
let currentActiveTokenId = null;
let lastBookedToken = null;

// Machine Intake Slowdown state
let isMachineSlowedDown = false;
const NORMAL_DAILY_LIMIT = 50.0;
const SLOW_DAILY_LIMIT = 20.0;
let currentDailyLimit = NORMAL_DAILY_LIMIT;

// In-Memory Database
const localDatabase = {
  dailyBookings: {},
  tokens: {}
};

// Bhashini TTS Engine with Web Speech Fallback
async function speakWithBhashini(text, languageCode) {
  const bhashiniLangMap = { 'hi': 'Hindi', 'en': 'English' };
  const targetLanguage = bhashiniLangMap[languageCode] || 'English';

  try {
    const response = await fetch('https://tts.bhashini.ai/v1/synthesize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg'
      },
      body: JSON.stringify({
        text: text,
        language: targetLanguage,
        voiceName: 'Female1'
      })
    });

    if (response.ok) {
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
      return;
    }
  } catch (e) {
    console.warn('Bhashini TTS API unreachable, falling back to browser voice speech synthesis:', e);
  }

  // Fallback to Browser Native Web Speech API
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode === 'hi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(utterance);
  }
}

// Bhashini Speech Details Generator (Includes Name, Vehicle, Vegetable, Quantity, Queue position)
function speakBookingConfirmation(token) {
  let speechText = "";
  if (currentLang === 'hi') {
    speechText = `बुकिंग विवरण: किसान का नाम ${token.farmerName}, वाहन का प्रकार ${token.vehicleType}, सब्जी या फसल ${token.commodity}, मात्रा ${token.requestedQty} टन, और आपकी कतार स्थिति संख्या ${token.queuePosition} है।`;
  } else {
    speechText = `Booking Details: Farmer Name ${token.farmerName}, Vehicle Type ${token.vehicleType}, Vegetable or Commodity ${token.commodity}, Quantity ${token.requestedQty} Tons, and your queue position is number ${token.queuePosition}.`;
  }
  speakWithBhashini(speechText, currentLang);
}

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupRoleSwitcher();
  setupFormEvents();
  setupOfficerEvents();
  setupSlowdownControls();
  initQrScanner();

  const readAudioBtn = document.getElementById('readAudioBtn');
  if (readAudioBtn) {
    readAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (lastBookedToken) {
        speakBookingConfirmation(lastBookedToken);
      } else {
        const msg = currentLang === 'hi' ? "कोई बुकिंग टोकन नहीं मिला।" : "No booking pass found.";
        speakWithBhashini(msg, currentLang);
      }
    });
  }
});

// Setup Language Selector
function setupLanguage() {
  const langSelect = document.getElementById('langSelector');
  if (!langSelect) return;
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        elem.innerText = translations[currentLang][key];
      }
    });
  });
}

// Setup Role Switcher
function setupRoleSwitcher() {
  const roleSelect = document.getElementById('roleSelector');
  if (!roleSelect) return;
  roleSelect.addEventListener('change', (e) => {
    const role = e.target.value;
    const farmerView = document.getElementById('farmerPortalView');
    const officerView = document.getElementById('officerPortalView');
    
    if (role === 'farmer') {
      if (farmerView) farmerView.classList.remove('hidden');
      if (officerView) officerView.classList.add('hidden');
    } else {
      if (farmerView) farmerView.classList.add('hidden');
      if (officerView) officerView.classList.remove('hidden');
    }
  });
}

// Push Simulated Mobile SMS
function pushSmsNotification(messageText) {
  const smsList = document.getElementById('smsMessageList');
  if (!smsList) return;
  
  const emptyMsg = smsList.querySelector('.empty-sms');
  if (emptyMsg) emptyMsg.remove();

  const smsItem = document.createElement('div');
  smsItem.className = 'sms-item';
  smsItem.innerHTML = `<strong>Mandi Alert:</strong> ${messageText}`;
  smsList.prepend(smsItem);
}

// Setup Machine Slowdown / Restore Controls
function setupSlowdownControls() {
  const btnSlowdown = document.getElementById('btnSlowdownLunch');
  const btnRestore = document.getElementById('btnRestoreSpeed');

  if (btnSlowdown) {
    btnSlowdown.addEventListener('click', () => {
      isMachineSlowedDown = true;
      currentDailyLimit = SLOW_DAILY_LIMIT;
      updateSlowdownUI();
      alert(currentLang === 'hi' ? 'मशीन धीमी कर दी गई है! दोपहर के भोजन / आपातकालीन ब्रेक के कारण सेवन दर कम हो गई है।' : 'Machine slowed down for Lunch / Emergency break! Intake per hour reduced.');
      checkDailyQuota();
    });
  }

  if (btnRestore) {
    btnRestore.addEventListener('click', () => {
      isMachineSlowedDown = false;
      currentDailyLimit = NORMAL_DAILY_LIMIT;
      updateSlowdownUI();
      alert(currentLang === 'hi' ? 'मूल सेवन दर पुनर्स्थापित हो गई है!' : 'Original intake rate restored successfully!');
      checkDailyQuota();
    });
  }
}

function updateSlowdownUI() {
  const card = document.getElementById('slowdownStatusCard');
  const text = document.getElementById('slowdownModeText');
  const icon = document.getElementById('slowdownModeIcon');
  const maxCap = document.getElementById('maxCapacityText');

  if (maxCap) maxCap.innerText = currentDailyLimit.toFixed(0);

  if (card && text && icon) {
    if (isMachineSlowedDown) {
      card.className = 'slowdown-status-card status-slowed';
      icon.innerText = '⚠️';
      text.innerText = currentLang === 'hi' ? 'गति: मशीन धीमी (लंच/आपातकालीन ब्रेक - क्षमता 20 टन)' : 'Speed: SLOWED DOWN for Lunch/Emergency (Quota reduced to 20 Tons)';
    } else {
      card.className = 'slowdown-status-card status-normal';
      icon.innerText = '⚡';
      text.innerText = currentLang === 'hi' ? 'गति: सामान्य प्रसंस्करण दर (क्षमता 50 टन)' : 'Speed: Normal Processing Rate (Capacity 50 Tons)';
    }
  }
}

// OTP with 20-Second Expiry Countdown Timer
function startOtpCountdownTimer() {
  let timeLeft = 20;
  const countdownElem = document.getElementById('otpCountdown');
  const verifyBtn = document.getElementById('verifyOtpBtn');
  
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  if (verifyBtn) verifyBtn.disabled = false;

  otpTimerInterval = setInterval(() => {
    timeLeft--;
    if (countdownElem) {
      countdownElem.innerText = `Expires in ${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(otpTimerInterval);
      currentDemoOtp = null; // Expire current OTP
      if (countdownElem) countdownElem.innerText = "❌ OTP Expired! Click 'Send OTP' again.";
      if (verifyBtn) verifyBtn.disabled = true;
      pushSmsNotification("Demo OTP expired after 20 seconds. Please request a new OTP.");
    }
  }, 1000);
}

// Form Handlers & Slot Booking
function setupFormEvents() {
  
  // 1. Send OTP Action
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const phoneInput = document.getElementById('phoneNumber');
      const phone = phoneInput ? phoneInput.value : '';

      if (!phone || phone.length < 10) {
        alert(currentLang === 'hi' ? 'कृपया मान्य 10-अंकीय मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit mobile number.');
        return;
      }

      currentDemoOtp = Math.floor(1000 + Math.random() * 9000).toString();

      const otpGroup = document.getElementById('otpGroup');
      const otpHint = document.getElementById('otpHint');
      const otpInput = document.getElementById('otpCode');

      if (otpGroup) otpGroup.classList.remove('hidden');
      if (otpHint) otpHint.innerText = currentLang === 'hi' ? `डेमो ओटीपी: ${currentDemoOtp}` : `Demo OTP: ${currentDemoOtp}`;
      if (otpInput) otpInput.value = currentDemoOtp; // Auto-fill for convenience

      startOtpCountdownTimer();
      pushSmsNotification(`Your Mandi OTP is ${currentDemoOtp}. Valid for 20 seconds.`);
    });
  }

  // 2. Verify OTP Action
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  if (verifyOtpBtn) {
    verifyOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const otpInput = document.getElementById('otpCode');
      const otpCode = otpInput ? otpInput.value : '';

      if (!currentDemoOtp) {
        alert(currentLang === 'hi' ? 'ओटीपी की समयावधि समाप्त हो गई है! कृपया फिर से ओटीपी भेजें।' : 'OTP has expired! Please request a new OTP.');
        return;
      }

      if (otpCode && otpCode === currentDemoOtp) {
        isOtpVerified = true;
        if (otpTimerInterval) clearInterval(otpTimerInterval);
        alert(currentLang === 'hi' ? 'ओटीपी सफलतापूर्वक सत्यापित हो गया!' : 'OTP Verified Successfully!');
        const otpGroup = document.getElementById('otpGroup');
        if (otpGroup) otpGroup.classList.add('hidden');
        checkDailyQuota();
      } else {
        alert(currentLang === 'hi' ? 'अमान्य ओटीपी कोड!' : 'Invalid OTP Code!');
      }
    });
  }

  // 3. Quota Listeners
  ['procurementDate', 'mandiSelect', 'commoditySelect'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) elem.addEventListener('change', checkDailyQuota);
  });

  // 4. Form Submission and Pass Generation
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!isOtpVerified) {
        alert(currentLang === 'hi' ? 'कृपया पहले ओटीपी का उपयोग करके अपना मोबाइल नंबर सत्यापित करें।' : 'Please verify your mobile number using OTP first.');
        return;
      }

      const date = document.getElementById('procurementDate').value;
      const mandi = document.getElementById('mandiSelect').value;
      const commodity = document.getElementById('commoditySelect').value;
      const produceQty = parseFloat(document.getElementById('produceQty').value) || 0;

      const quotaKey = `${date}_${mandi}_${commodity}`;
      const currentBooked = localDatabase.dailyBookings[quotaKey] || 0.0;

      if (currentBooked + produceQty > currentDailyLimit) {
        alert(`Booking Failed! Exceeds current quota limit. Remaining capacity: ${(currentDailyLimit - currentBooked).toFixed(1)} Tons.`);
        return;
      }

      // Update Database Quota
      localDatabase.dailyBookings[quotaKey] = currentBooked + produceQty;

      const randomId = Math.floor(10000 + Math.random() * 90000);
      const tokenId = `#MND-${randomId}`;

      const newToken = {
        tokenId: tokenId,
        farmerName: document.getElementById('farmerName').value || "Farmer",
        mandi: mandi,
        commodity: commodity,
        requestedQty: produceQty,
        verifiedQty: null,
        schedule: `${date} [${document.getElementById('slotTime') ? document.getElementById('slotTime').value : 'Morning'}]`,
        vehicleType: document.getElementById('vehicleType') ? document.getElementById('vehicleType').value : 'Tractor',
        queuePosition: Math.floor(Math.random() * 5) + 1,
        eta: "10:30 AM",
        stage: "BOOKED",
        paymentStatus: "PENDING",
        dbtTxnId: null,
        totalPayment: 0
      };

      localDatabase.tokens[tokenId] = newToken;
      lastBookedToken = newToken;

      renderPassToken(newToken);
      pushSmsNotification(`Booking Confirmed! Pass ID: ${tokenId}. Schedule: ${newToken.schedule}.`);
      checkDailyQuota();

      // Trigger Bhashini Audio Announcement
      speakBookingConfirmation(newToken);
    });
  }
}

// Capacity & Quota Checker with Fulfillment Lock
function checkDailyQuota() {
  const dateElem = document.getElementById('procurementDate');
  const mandiElem = document.getElementById('mandiSelect');
  const commodityElem = document.getElementById('commoditySelect');
  const submitBtn = document.getElementById('submitBookingBtn');
  const quotaMsg = document.getElementById('quotaMessage');
  const capacityBar = document.getElementById('capacityBar');
  const bookedCapacityText = document.getElementById('bookedCapacityText');

  if (!dateElem || !mandiElem || !commodityElem) return;

  const date = dateElem.value;
  const mandi = mandiElem.value;
  const commodity = commodityElem.value;

  if (date && mandi && commodity) {
    const quotaKey = `${date}_${mandi}_${commodity}`;
    const bookedQty = localDatabase.dailyBookings[quotaKey] || 0.0;
    const remainingQuota = Math.max(0, currentDailyLimit - bookedQty);
    const fillPercentage = Math.min(100, (bookedQty / currentDailyLimit) * 100);

    if (capacityBar) capacityBar.style.width = `${fillPercentage}%`;
    if (bookedCapacityText) bookedCapacityText.innerText = bookedQty.toFixed(1);

    if (quotaMsg) {
      if (remainingQuota <= 0) {
        quotaMsg.innerText = currentLang === 'hi' 
          ? "❌ आवश्यक मात्रा पूरी हो गई है! चुनी गई स्थिति के लिए बुकिंग बंद कर दी गई है।" 
          : "❌ Required quantity fulfilled! Slot booking stopped for selected date.";
        if (quotaMsg.parentElement) quotaMsg.parentElement.className = "result-box danger-result";
        if (submitBtn) submitBtn.disabled = true; // Stop booking upon fulfillment
      } else {
        quotaMsg.innerText = currentLang === 'hi' 
          ? `✅ क्षमता उपलब्ध है: ${remainingQuota.toFixed(1)} टन शेष है।` 
          : `✅ Capacity Available: ${remainingQuota.toFixed(1)} Tons remaining for selected date.`;
        if (quotaMsg.parentElement) quotaMsg.parentElement.className = "result-box success-result";
        if (submitBtn) submitBtn.disabled = !isOtpVerified;
      }
    }
  }
}

// Canvas Fallback QR Generator
function generateFallbackQr(elementId, text) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = 120;
  canvas.height = 120;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 120, 120);

  ctx.fillStyle = '#000000';
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = text.charCodeAt(i) + ((hash << 5) - hash);

  const gridSize = 10;
  const cellSize = 120 / gridSize;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      if ((x < 3 && y < 3) || (x > gridSize - 4 && y < 3) || (x < 3 && y > gridSize - 4)) {
        if ((x === 0 || x === 2 || y === 0 || y === 2) && x < 3 && y < 3) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        else if ((x === gridSize - 1 || x === gridSize - 3 || y === 0 || y === 2) && x > gridSize - 4 && y < 3) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        else if ((x === 0 || x === 2 || y === gridSize - 1 || y === gridSize - 3) && x < 3 && y > gridSize - 4) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else {
        const val = Math.abs((hash ^ (x * 31 + y * 17)) % 2);
        if (val === 1) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
  container.appendChild(canvas);
}

// Render Entry Token Pass & QR Code
function renderPassToken(token) {
  const passCard = document.getElementById('passCard');
  if (passCard) passCard.classList.remove('hidden');

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setText('passTokenId', token.tokenId);
  setText('passStageBadge', token.stage);
  setText('passFarmerName', token.farmerName);
  setText('passMandi', token.mandi);
  setText('passCommodity', token.commodity);
  setText('passSchedule', token.schedule);
  setText('passVehicle', token.vehicleType);
  setText('passRequestedQty', token.requestedQty);
  setText('passVerifiedQty', token.verifiedQty ? `${token.verifiedQty} Tons` : 'Pending Gate Weighment');
  setText('passQueuePos', token.queuePosition);
  setText('passEta', token.eta);

  // Generate QR code
  if (typeof QRCode !== 'undefined') {
    try {
      const qrElem = document.getElementById('qrcode');
      if (qrElem) {
        qrElem.innerHTML = '';
        new QRCode(qrElem, { text: token.tokenId, width: 110, height: 110 });
      }
    } catch (e) {
      generateFallbackQr('qrcode', token.tokenId);
    }
  } else {
    generateFallbackQr('qrcode', token.tokenId);
  }

  const manualInput = document.getElementById('manualTokenInput');
  if (manualInput) manualInput.value = token.tokenId;
}

// Officer Dashboard Events
function setupOfficerEvents() {
  const searchBtn = document.getElementById('searchTokenBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const input = document.getElementById('manualTokenInput');
      const tokenId = input ? input.value.trim() : '';
      if (tokenId) fetchOfficerTokenDetails(tokenId);
    });
  }

  const gateBtn = document.getElementById('verifyGateBtn');
  if (gateBtn) {
    gateBtn.addEventListener('click', () => {
      if (!currentActiveTokenId || !localDatabase.tokens[currentActiveTokenId]) return;
      const token = localDatabase.tokens[currentActiveTokenId];
      token.stage = "GATE_VERIFIED";
      token.queuePosition = 1;
      alert(`Gate entry approved for ${token.tokenId}!`);
      fetchOfficerTokenDetails(currentActiveTokenId);
      renderPassToken(token);
    });
  }

  const saveWeightBtn = document.getElementById('saveWeightBtn');
  if (saveWeightBtn) {
    saveWeightBtn.addEventListener('click', () => {
      const weightInput = document.getElementById('weighmentInput');
      const weight = weightInput ? parseFloat(weightInput.value) : NaN;

      if (!currentActiveTokenId || isNaN(weight) || !localDatabase.tokens[currentActiveTokenId]) {
        alert('Please enter a valid weight in tons.');
        return;
      }

      const token = localDatabase.tokens[currentActiveTokenId];
      token.verifiedQty = weight;
      token.stage = "WEIGHED";
      alert(`Weighment of ${weight} Tons recorded for ${token.tokenId}!`);
      fetchOfficerTokenDetails(currentActiveTokenId);
      renderPassToken(token);
    });
  }

  const approveDbtBtn = document.getElementById('approveDbtBtn');
  if (approveDbtBtn) {
    approveDbtBtn.addEventListener('click', () => {
      if (!currentActiveTokenId || !localDatabase.tokens[currentActiveTokenId]) return;

      const token = localDatabase.tokens[currentActiveTokenId];
      const ratePerTon = 28000.0;
      const qty = token.verifiedQty ? token.verifiedQty : token.requestedQty;
      
      token.totalPayment = qty * ratePerTon;
      token.dbtTxnId = `DBT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      token.stage = "PAID";
      token.paymentStatus = "COMPLETED";

      alert(`Payment Approved! DBT Ref: ${token.dbtTxnId} Amount: ₹${token.totalPayment.toLocaleString('en-IN')}`);
      fetchOfficerTokenDetails(currentActiveTokenId);
      renderPassToken(token);
      pushSmsNotification(`DBT Transfer Complete! ₹${token.totalPayment.toLocaleString('en-IN')} credited for Token ${token.tokenId}. Ref: ${token.dbtTxnId}`);
    });
  }
}

function fetchOfficerTokenDetails(tokenId) {
  const token = localDatabase.tokens[tokenId];
  if (token) {
    currentActiveTokenId = token.tokenId;
    document.getElementById('officerNoTokenMsg').classList.add('hidden');
    document.getElementById('officerTokenDetails').classList.remove('hidden');

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerText = val;
    };

    setText('offTokenId', token.tokenId);
    setText('offFarmerName', token.farmerName);
    setText('offCommodity', token.commodity);
    setText('offStage', token.stage);
  } else {
    alert('Token ID not found. Please create a booking first.');
  }
}

// Camera Scanner
function initQrScanner() {
  if (typeof Html5QrcodeScanner !== 'undefined') {
    try {
      const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 200 });
      scanner.render((decodedText) => {
        const manualInput = document.getElementById('manualTokenInput');
        if (manualInput) manualInput.value = decodedText;
        fetchOfficerTokenDetails(decodedText);
      }, () => {});
    } catch (e) {
      console.log("QR Scanner bypass initialized.");
    }
  }
}
