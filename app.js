// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Registered:', reg.scope))
      .catch(err => console.error('Service Worker Error:', err));
  });
}

// Translations Data (English & Hindi)
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
    labelCommodity: "Commodity",
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
    passCommodity: "Commodity:",
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
    officerSubtitle: "Scan farmer entry passes, verify weighment bridge data, and trigger direct bank transfers (DBT).",
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
    labelCommodity: "जिंस (फसल)",
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
    passCommodity: "जिंस:",
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
    officerSubtitle: "किसान प्रवेश पास स्कैन करें, वजन की जांच करें और डीबीटी भुगतान स्वीकृत करें।",
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
let currentActiveTokenId = null;

// Local In-Memory Database for Standalone Operation
const localDatabase = {
  dailyBookings: {}, // Stores booked tonnage per "Date_Mandi_Commodity"
  tokens: {}        // Stores token objects keyed by tokenId
};

const DAILY_LIMIT_TONS = 50.0;

// Application Initializer
document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupRoleSwitcher();
  setupFormEvents();
  setupOfficerEvents();
  initQrScanner();
});

// Language Switcher Handler
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

// Role Switcher Handler (Farmer vs Officer)
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

// Simulated Mobile SMS Box
function pushSmsNotification(messageText) {
  const smsList = document.getElementById('smsMessageList');
  if (!smsList) return;
  
  const emptyMsg = smsList.querySelector('.empty-sms');
  if (emptyMsg) emptyMsg.remove();

  const smsItem = document.createElement('div');
  smsItem.className = 'sms-item';
  smsItem.style.padding = '8px';
  smsItem.style.marginBottom = '8px';
  smsItem.style.background = '#eef2ff';
  smsItem.style.borderRadius = '4px';
  smsItem.innerHTML = `<strong>Mandi Alert:</strong> ${messageText}`;
  smsList.prepend(smsItem);
}

// Form & Dynamic Local Handlers
function setupFormEvents() {
  
  // 1. Send OTP Local Action
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const phoneInput = document.getElementById('phoneNumber');
      const phone = phoneInput ? phoneInput.value : '';

      if (!phone || phone.length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      // Generate random 4-digit code locally
      currentDemoOtp = Math.floor(1000 + Math.random() * 9000).toString();

      // Reveal OTP Group & Display Demo OTP code directly on screen
      const otpGroup = document.getElementById('otpGroup');
      const otpHint = document.getElementById('otpHint');
      const otpInput = document.getElementById('otpCode');

      if (otpGroup) otpGroup.classList.remove('hidden');
      if (otpHint) otpHint.innerText = `Demo OTP: ${currentDemoOtp} (Auto-filled below)`;
      if (otpInput) otpInput.value = currentDemoOtp; // Auto-fills for quick testing

      pushSmsNotification(`Your Mandi Login OTP is ${currentDemoOtp}. Valid for 5 mins.`);
    });
  }

  // 2. Verify OTP Local Action
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  if (verifyOtpBtn) {
    verifyOtpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const otpInput = document.getElementById('otpCode');
      const otpCode = otpInput ? otpInput.value : '';

      if (otpCode && otpCode === currentDemoOtp) {
        isOtpVerified = true;
        alert('OTP Verified Successfully!');
        const otpGroup = document.getElementById('otpGroup');
        if (otpGroup) otpGroup.classList.add('hidden');
        checkDailyQuota();
      } else {
        alert('Invalid OTP Code! Please check the generated Demo OTP.');
      }
    });
  }

  // 3. Quota Check Listeners
  ['procurementDate', 'mandiSelect', 'commoditySelect'].forEach(id => {
    const elem = document.getElementById(id);
    if (elem) elem.addEventListener('change', checkDailyQuota);
  });

  // 4. Form Submission and Token Generation
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!isOtpVerified) {
        alert('Please verify your mobile number using OTP first.');
        return;
      }

      const date = document.getElementById('procurementDate').value;
      const mandi = document.getElementById('mandiSelect').value;
      const commodity = document.getElementById('commoditySelect').value;
      const produceQty = parseFloat(document.getElementById('produceQty').value) || 0;

      const quotaKey = `${date}_${mandi}_${commodity}`;
      const currentBooked = localDatabase.dailyBookings[quotaKey] || 0.0;

      if (currentBooked + produceQty > DAILY_LIMIT_TONS) {
        alert(`Booking Failed! Exceeds daily quota limit. Remaining capacity: ${(DAILY_LIMIT_TONS - currentBooked).toFixed(1)} Tons.`);
        return;
      }

      // Update Daily Bookings Quota
      localDatabase.dailyBookings[quotaKey] = currentBooked + produceQty;

      // Generate Pass Token
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
        queuePosition: 3,
        eta: "10:45 AM",
        stage: "BOOKED",
        paymentStatus: "PENDING",
        dbtTxnId: null,
        totalPayment: 0
      };

      // Store token in local state
      localDatabase.tokens[tokenId] = newToken;

      // Render Pass & Display QR Code
      renderPassToken(newToken);
      pushSmsNotification(`Booking Confirmed! Pass ID: ${tokenId}. Schedule: ${newToken.schedule}.`);
      checkDailyQuota();
    });
  }
}

// Real-time Capacity Checker (Client-Side)
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
    const remainingQuota = Math.max(0, DAILY_LIMIT_TONS - bookedQty);
    const fillPercentage = Math.min(100, (bookedQty / DAILY_LIMIT_TONS) * 100);

    if (capacityBar) capacityBar.style.width = `${fillPercentage}%`;
    if (bookedCapacityText) bookedCapacityText.innerText = bookedQty.toFixed(1);

    if (quotaMsg) {
      if (remainingQuota <= 0) {
        quotaMsg.innerText = "❌ Daily capacity reached! Booking is closed for selected date.";
        if (quotaMsg.parentElement) quotaMsg.parentElement.className = "result-box danger-result";
        if (submitBtn) submitBtn.disabled = true;
      } else {
        quotaMsg.innerText = `✅ Capacity Available: ${remainingQuota.toFixed(1)} Tons remaining for selected parameters.`;
        if (quotaMsg.parentElement) quotaMsg.parentElement.className = "result-box success-result";
        if (submitBtn) submitBtn.disabled = !isOtpVerified;
      }
    }
  }
}

// Fallback Canvas QR Code Generator (100% Client-Side, No External Server/Library needed)
function generateFallbackQr(elementId, text) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = '';

  const canvas = document.createElement('canvas');
  canvas.width = 120;
  canvas.height = 120;
  const ctx = canvas.getContext('2d');

  // Draw background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 120, 120);

  // Draw simulated QR Pattern deterministically using string hash
  ctx.fillStyle = '#000000';
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  const gridSize = 10;
  const cellSize = 120 / gridSize;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      // Corner positioning blocks
      if ((x < 3 && y < 3) || (x > gridSize - 4 && y < 3) || (x < 3 && y > gridSize - 4)) {
        if ((x === 0 || x === 2 || y === 0 || y === 2) && x < 3 && y < 3) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        else if ((x === gridSize - 1 || x === gridSize - 3 || y === 0 || y === 2) && x > gridSize - 4 && y < 3) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        else if ((x === 0 || x === 2 || y === gridSize - 1 || y === gridSize - 3) && x < 3 && y > gridSize - 4) ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else {
        const val = Math.abs((hash ^ (x * 31 + y * 17)) % 2);
        if (val === 1) {
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    }
  }
  container.appendChild(canvas);
}

// Render Entry Pass Card with Dynamic QR Code
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

  const payBox = document.getElementById('paymentDetailsBox');
  if (token.paymentStatus === 'COMPLETED') {
    if (payBox) payBox.classList.remove('hidden');
    setText('paymentRef', token.dbtTxnId);
    setText('paymentAmount', token.totalPayment.toLocaleString('en-IN'));
  } else {
    if (payBox) payBox.classList.add('hidden');
  }

  // Safely generate QR code locally
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

  // Pre-fill token ID into officer panel for testing convenience
  const manualInput = document.getElementById('manualTokenInput');
  if (manualInput) manualInput.value = token.tokenId;
}

// Officer Operations Handlers
function setupOfficerEvents() {
  const searchBtn = document.getElementById('searchTokenBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const input = document.getElementById('manualTokenInput');
      const tokenId = input ? input.value.trim() : '';
      if (tokenId) fetchOfficerTokenDetails(tokenId);
    });
  }

  // Approve Gate Entry Action
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

  // Record Weighment Bridge Weight Action
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

  // Release Payment (DBT) Action
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

// Fetch and display active token details in Officer Portal
function fetchOfficerTokenDetails(tokenId) {
  const token = localDatabase.tokens[tokenId];

  if (token) {
    currentActiveTokenId = token.tokenId;

    const noTokenMsg = document.getElementById('officerNoTokenMsg');
    const tokenDetails = document.getElementById('officerTokenDetails');

    if (noTokenMsg) noTokenMsg.classList.add('hidden');
    if (tokenDetails) tokenDetails.classList.remove('hidden');

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerText = val;
    };

    setText('offTokenId', token.tokenId);
    setText('offFarmerName', token.farmerName);
    setText('offCommodity', token.commodity);
    setText('offStage', token.stage);

    const weighInput = document.getElementById('weighmentInput');
    if (weighInput) {
      weighInput.value = token.verifiedQty ? token.verifiedQty : '';
    }
  } else {
    alert('Token ID not found. Please create a booking first.');
  }
}

// Camera Scanner Setup (Safe Fallback)
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
      console.log("QR camera initialization bypassed.");
    }
  }
}
