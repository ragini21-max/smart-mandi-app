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
let html5QrcodeScanner = null;

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
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        elem.innerText = translations[currentLang][key];
      }
    });
  });
}

// Role Switcher Handler (Farmer vs Officer)
function setupRoleSwitcher() {
  const roleSelect = document.getElementById('roleSelector');
  roleSelect.addEventListener('change', (e) => {
    const role = e.target.value;
    if (role === 'farmer') {
      document.getElementById('farmerPortalView').classList.remove('hidden');
      document.getElementById('officerPortalView').classList.add('hidden');
    } else {
      document.getElementById('farmerPortalView').classList.add('hidden');
      document.getElementById('officerPortalView').classList.remove('hidden');
    }
  });
}

// Simulated Mobile SMS Box
function pushSmsNotification(messageText) {
  const smsList = document.getElementById('smsMessageList');
  const emptyMsg = smsList.querySelector('.empty-sms');
  if (emptyMsg) emptyMsg.remove();

  const smsItem = document.createElement('div');
  smsItem.className = 'sms-item';
  smsItem.innerHTML = `<strong>Mandi Alert:</strong> ${messageText}`;
  smsList.prepend(smsItem);
}

// Form & Dynamic Local Handlers
function setupFormEvents() {
  
  // 1. Send OTP Local Action
  document.getElementById('sendOtpBtn').addEventListener('click', () => {
    const phone = document.getElementById('phoneNumber').value;
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

    otpGroup.classList.remove('hidden');
    otpHint.innerText = `Demo OTP: ${currentDemoOtp} (Auto-filled below)`;
    otpInput.value = currentDemoOtp; // Auto-fills for quick testing

    pushSmsNotification(`Your Mandi Login OTP is ${currentDemoOtp}. Valid for 5 mins.`);
  });

  // 2. Verify OTP Local Action
  document.getElementById('verifyOtpBtn').addEventListener('click', () => {
    const otpCode = document.getElementById('otpCode').value;

    if (otpCode && otpCode === currentDemoOtp) {
      isOtpVerified = true;
      alert('OTP Verified Successfully!');
      document.getElementById('otpGroup').classList.add('hidden');
      checkDailyQuota();
    } else {
      alert('Invalid OTP Code! Please check the generated Demo OTP.');
    }
  });

  // 3. Quota Check Listeners
  document.getElementById('procurementDate').addEventListener('change', checkDailyQuota);
  document.getElementById('mandiSelect').addEventListener('change', checkDailyQuota);
  document.getElementById('commoditySelect').addEventListener('change', checkDailyQuota);

  // 4. Form Submission and Token Generation
  document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      alert('Please verify your mobile number using OTP first.');
      return;
    }

    const date = document.getElementById('procurementDate').value;
    const mandi = document.getElementById('mandiSelect').value;
    const commodity = document.getElementById('commoditySelect').value;
    const produceQty = parseFloat(document.getElementById('produceQty').value);

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
      farmerName: document.getElementById('farmerName').value,
      mandi: mandi,
      commodity: commodity,
      requestedQty: produceQty,
      verifiedQty: null,
      schedule: `${date} [${document.getElementById('slotTime').value}]`,
      vehicleType: document.getElementById('vehicleType').value,
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

// Real-time Capacity Checker (Client-Side)
function checkDailyQuota() {
  const date = document.getElementById('procurementDate').value;
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const submitBtn = document.getElementById('submitBookingBtn');
  const quotaMsg = document.getElementById('quotaMessage');
  const capacityBar = document.getElementById('capacityBar');
  const bookedCapacityText = document.getElementById('bookedCapacityText');

  if (date && mandi && commodity) {
    const quotaKey = `${date}_${mandi}_${commodity}`;
    const bookedQty = localDatabase.dailyBookings[quotaKey] || 0.0;
    const remainingQuota = Math.max(0, DAILY_LIMIT_TONS - bookedQty);
    const fillPercentage = Math.min(100, (bookedQty / DAILY_LIMIT_TONS) * 100);

    capacityBar.style.width = `${fillPercentage}%`;
    bookedCapacityText.innerText = bookedQty.toFixed(1);

    if (remainingQuota <= 0) {
      quotaMsg.innerText = "❌ Daily capacity reached! Booking is closed for selected date.";
      quotaMsg.parentElement.className = "result-box danger-result";
      submitBtn.disabled = true;
    } else {
      quotaMsg.innerText = `✅ Capacity Available: ${remainingQuota.toFixed(1)} Tons remaining for selected parameters.`;
      quotaMsg.parentElement.className = "result-box success-result";
      submitBtn.disabled = !isOtpVerified;
    }
  }
}

// Render Entry Pass Card with Dynamic QR Code
function renderPassToken(token) {
  document.getElementById('passCard').classList.remove('hidden');
  document.getElementById('passTokenId').innerText = token.tokenId;
  document.getElementById('passStageBadge').innerText = token.stage;
  document.getElementById('passFarmerName').innerText = token.farmerName;
  document.getElementById('passMandi').innerText = token.mandi;
  document.getElementById('passCommodity').innerText = token.commodity;
  document.getElementById('passSchedule').innerText = token.schedule;
  document.getElementById('passVehicle').innerText = token.vehicleType;
  document.getElementById('passRequestedQty').innerText = token.requestedQty;
  document.getElementById('passVerifiedQty').innerText = token.verifiedQty ? `${token.verifiedQty} Tons` : 'Pending Gate Weighment';
  document.getElementById('passQueuePos').innerText = token.queuePosition;
  document.getElementById('passEta').innerText = token.eta;

  if (token.paymentStatus === 'COMPLETED') {
    document.getElementById('paymentDetailsBox').classList.remove('hidden');
    document.getElementById('paymentRef').innerText = token.dbtTxnId;
    document.getElementById('paymentAmount').innerText = token.totalPayment.toLocaleString('en-IN');
  } else {
    document.getElementById('paymentDetailsBox').classList.add('hidden');
  }

  // Generate QR Code using QRCode.js
  const qrElem = document.getElementById('qrcode');
  qrElem.innerHTML = '';
  new QRCode(qrElem, {
    text: token.tokenId,
    width: 110,
    height: 110
  });

  // Pre-fill token ID into officer panel for testing convenience
  document.getElementById('manualTokenInput').value = token.tokenId;
}

// Officer Operations Handlers
function setupOfficerEvents() {
  document.getElementById('searchTokenBtn').addEventListener('click', () => {
    const tokenId = document.getElementById('manualTokenInput').value.trim();
    if (tokenId) fetchOfficerTokenDetails(tokenId);
  });

  // Approve Gate Entry Action
  document.getElementById('verifyGateBtn').addEventListener('click', () => {
    if (!currentActiveTokenId || !localDatabase.tokens[currentActiveTokenId]) return;
    
    const token = localDatabase.tokens[currentActiveTokenId];
    token.stage = "GATE_VERIFIED";
    token.queuePosition = 1;

    alert(`Gate entry approved for ${token.tokenId}!`);
    fetchOfficerTokenDetails(currentActiveTokenId);
    if (document.getElementById('passTokenId').innerText === token.tokenId) {
      renderPassToken(token);
    }
  });

  // Record Weighment Bridge Weight Action
  document.getElementById('saveWeightBtn').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('weighmentInput').value);
    if (!currentActiveTokenId || isNaN(weight) || !localDatabase.tokens[currentActiveTokenId]) {
      alert('Please enter a valid weight in tons.');
      return;
    }

    const token = localDatabase.tokens[currentActiveTokenId];
    token.verifiedQty = weight;
    token.stage = "WEIGHED";

    alert(`Weighment of ${weight} Tons recorded for ${token.tokenId}!`);
    fetchOfficerTokenDetails(currentActiveTokenId);
    if (document.getElementById('passTokenId').innerText === token.tokenId) {
      renderPassToken(token);
    }
  });

  // Release Payment (DBT) Action
  document.getElementById('approveDbtBtn').addEventListener('click', () => {
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
    if (document.getElementById('passTokenId').innerText === token.tokenId) {
      renderPassToken(token);
    }

    pushSmsNotification(`DBT Transfer Complete! ₹${token.totalPayment.toLocaleString('en-IN')} credited for Token ${token.tokenId}. Ref: ${token.dbtTxnId}`);
  });
}

// Fetch and display active token details in Officer Portal
function fetchOfficerTokenDetails(tokenId) {
  const token = localDatabase.tokens[tokenId];

  if (token) {
    currentActiveTokenId = token.tokenId;

    document.getElementById('officerNoTokenMsg').classList.add('hidden');
    document.getElementById('officerTokenDetails').classList.remove('hidden');

    document.getElementById('offTokenId').innerText = token.tokenId;
    document.getElementById('offFarmerName').innerText = token.farmerName;
    document.getElementById('offCommodity').innerText = token.commodity;
    document.getElementById('offStage').innerText = token.stage;

    if (token.verifiedQty) {
      document.getElementById('weighmentInput').value = token.verifiedQty;
    } else {
      document.getElementById('weighmentInput').value = '';
    }
  } else {
    alert('Token ID not found. Please create a booking first.');
  }
}

// Camera Scanner Setup (HTML5 QR Code)
function initQrScanner() {
  try {
    html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 200 });
    html5QrcodeScanner.render((decodedText) => {
      document.getElementById('manualTokenInput').value = decodedText;
      fetchOfficerTokenDetails(decodedText);
    }, (error) => {
      // Continuous camera scanning noise
    });
  } catch (e) {
    console.log("QR scanner initialized without camera support.");
  }
}
