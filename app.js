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
let currentActiveTokenId = null;
let html5QrcodeScanner = null;

// Application State Initializer
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

// Role Switching Handler (Farmer vs Officer)
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

// Simulated SMS Dispatcher
function pushSmsNotification(messageText) {
  const smsList = document.getElementById('smsMessageList');
  const emptyMsg = smsList.querySelector('.empty-sms');
  if (emptyMsg) emptyMsg.remove();

  const smsItem = document.createElement('div');
  smsItem.className = 'sms-item';
  smsItem.innerHTML = `<strong>Mandi Alert:</strong> ${messageText}`;
  smsList.prepend(smsItem);
}

// Form & Capacity Events
function setupFormEvents() {
  // OTP Requests
  document.getElementById('sendOtpBtn').addEventListener('click', async () => {
    const phone = document.getElementById('phoneNumber').value;
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      const res = await fetch('/api/mandi/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone })
      });
      const data = await res.json();

      document.getElementById('otpGroup').classList.remove('hidden');
      document.getElementById('otpHint').innerText = `Demo OTP Code: ${data.demoOtp}`;
      pushSmsNotification(`Your Mandi Login OTP is ${data.demoOtp}. Valid for 5 mins.`);
    } catch (err) {
      alert('Failed to send OTP. Server unreachable.');
    }
  });

  document.getElementById('verifyOtpBtn').addEventListener('click', async () => {
    const phone = document.getElementById('phoneNumber').value;
    const otpCode = document.getElementById('otpCode').value;

    try {
      const res = await fetch('/api/mandi/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone, otpCode: otpCode })
      });
      const data = await res.json();

      if (data.success) {
        isOtpVerified = true;
        alert('OTP Verified Successfully!');
        document.getElementById('otpGroup').classList.add('hidden');
        checkDailyQuota();
      } else {
        alert('Invalid OTP Code!');
      }
    } catch (err) {
      alert('Error verifying OTP.');
    }
  });

  // Check Quota Events
  document.getElementById('procurementDate').addEventListener('change', checkDailyQuota);
  document.getElementById('mandiSelect').addEventListener('change', checkDailyQuota);
  document.getElementById('commoditySelect').addEventListener('change', checkDailyQuota);

  // Booking Submit Event
  document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      alert('Please verify your phone number via OTP first.');
      return;
    }

    const payload = {
      farmerName: document.getElementById('farmerName').value,
      mandi: document.getElementById('mandiSelect').value,
      procurementDate: document.getElementById('procurementDate').value,
      slotTime: document.getElementById('slotTime').value,
      commodity: document.getElementById('commoditySelect').value,
      produceQty: parseFloat(document.getElementById('produceQty').value),
      vehicleType: document.getElementById('vehicleType').value
    };

    try {
      const res = await fetch('/api/mandi/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const token = await res.json();
        renderPassToken(token);
        pushSmsNotification(`Booking Confirmed! Pass ID: ${token.tokenId}. Slot: ${token.schedule}.`);
        checkDailyQuota();
      } else {
        const errorData = await res.json();
        alert(`Booking Failed: ${errorData.error}`);
      }
    } catch (err) {
      alert('Error processing booking.');
    }
  });
}

// Capacity Meter & Availability Checker
async function checkDailyQuota() {
  const date = document.getElementById('procurementDate').value;
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const submitBtn = document.getElementById('submitBookingBtn');
  const quotaMsg = document.getElementById('quotaMessage');
  const capacityBar = document.getElementById('capacityBar');
  const bookedCapacityText = document.getElementById('bookedCapacityText');

  if (date && mandi && commodity) {
    try {
      const res = await fetch(`/api/mandi/quota?date=${date}&mandi=${encodeURIComponent(mandi)}&commodity=${encodeURIComponent(commodity)}`);
      const data = await res.json();
      
      const maxLimit = 50.0;
      const bookedQty = maxLimit - data.remainingQuotaTons;
      const fillPercentage = Math.min(100, (bookedQty / maxLimit) * 100);

      capacityBar.style.width = `${fillPercentage}%`;
      bookedCapacityText.innerText = bookedQty.toFixed(1);

      if (data.remainingQuotaTons <= 0) {
        quotaMsg.innerText = "❌ Daily capacity reached! Slot booking closed for selected date.";
        quotaMsg.parentElement.className = "result-box danger-result";
        submitBtn.disabled = true;
      } else {
        quotaMsg.innerText = `✅ Capacity Available: ${data.remainingQuotaTons.toFixed(1)} Tons remaining for selected date.`;
        quotaMsg.parentElement.className = "result-box success-result";
        submitBtn.disabled = !isOtpVerified;
      }
    } catch (err) {
      console.error("Quota fetch error:", err);
    }
  }
}

// Render Pass Token & QR Code Generator
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
  }

  // Generate QR Code
  const qrElem = document.getElementById('qrcode');
  qrElem.innerHTML = '';
  new QRCode(qrElem, {
    text: token.tokenId,
    width: 110,
    height: 110
  });
}

// Officer Dashboard Logic
function setupOfficerEvents() {
  document.getElementById('searchTokenBtn').addEventListener('click', () => {
    const tokenId = document.getElementById('manualTokenInput').value.trim();
    if (tokenId) fetchOfficerTokenDetails(tokenId);
  });

  document.getElementById('verifyGateBtn').addEventListener('click', async () => {
    if (!currentActiveTokenId) return;
    const res = await fetch(`/api/mandi/gate/verify?tokenId=${encodeURIComponent(currentActiveTokenId)}`, { method: 'POST' });
    if (res.ok) {
      alert('Gate entry approved!');
      fetchOfficerTokenDetails(currentActiveTokenId);
    }
  });

  document.getElementById('saveWeightBtn').addEventListener('click', async () => {
    const weight = parseFloat(document.getElementById('weighmentInput').value);
    if (!currentActiveTokenId || isNaN(weight)) return;

    const res = await fetch('/api/mandi/weighment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokenId: currentActiveTokenId, weight: weight })
    });

    if (res.ok) {
      alert('Weighment recorded!');
      fetchOfficerTokenDetails(currentActiveTokenId);
    }
  });

  document.getElementById('approveDbtBtn').addEventListener('click', async () => {
    if (!currentActiveTokenId) return;
    const res = await fetch(`/api/mandi/payment/approve?tokenId=${encodeURIComponent(currentActiveTokenId)}`, { method: 'POST' });
    if (res.ok) {
      const token = await res.json();
      alert(`Payment Approved! DBT Ref: ${token.dbtTxnId}`);
      fetchOfficerTokenDetails(currentActiveTokenId);
      pushSmsNotification(`DBT Transfer Complete! ₹${token.totalPayment} credited for Token ${token.tokenId}. Ref: ${token.dbtTxnId}`);
    }
  });
}

// Fetch Token Details for Officer Dashboard
async function fetchOfficerTokenDetails(tokenId) {
  try {
    const res = await fetch(`/api/mandi/pass/${encodeURIComponent(tokenId)}`);
    if (res.ok) {
      const token = await res.json();
      currentActiveTokenId = token.tokenId;

      document.getElementById('officerNoTokenMsg').classList.add('hidden');
      document.getElementById('officerTokenDetails').classList.remove('hidden');

      document.getElementById('offTokenId').innerText = token.tokenId;
      document.getElementById('offFarmerName').innerText = token.farmerName;
      document.getElementById('offCommodity').innerText = token.commodity;
      document.getElementById('offStage').innerText = token.stage;
      
      if (token.verifiedQty) {
        document.getElementById('weighmentInput').value = token.verifiedQty;
      }
    } else {
      alert('Token ID not found in database.');
    }
  } catch (err) {
    alert('Error fetching token details.');
  }
}

// QR Code Camera Scanner Setup
function initQrScanner() {
  html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 200 });
  html5QrcodeScanner.render((decodedText) => {
    document.getElementById('manualTokenInput').value = decodedText;
    fetchOfficerTokenDetails(decodedText);
  }, (error) => {
    // Continuous scanning logs ignored
  });
}
