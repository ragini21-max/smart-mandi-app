// Module Switcher Logic
function showModule(moduleId) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(moduleId).classList.add('active');
  event.target.classList.add('active');
}

// Bhashini Language Switcher Simulation
function switchLanguage() {
  const lang = document.getElementById('langSelect').value;
  if (lang === 'mr') {
    alert("Bhashini AI: भाषा बदलून मराठी करण्यात आली आहे.");
  } else if (lang === 'hi') {
    alert("Bhashini AI: भाषा बदलकर हिंदी कर दी गई है।");
  } else {
    alert("Bhashini AI: Switched to English.");
  }
}

// Module 1: Farmer Flow Functions
function sendOTP() {
  const phone = document.getElementById('farmerPhone').value;
  if(!phone) return alert("Please enter mobile number.");
  document.getElementById('otpSection').style.display = 'block';
  logSMS(`OTP sent to +91 ${phone}: 1234 is your login code.`);
}

function verifyOTP() {
  const code = document.getElementById('otpCode').value;
  if(code === '1234') {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('bookingCard').style.display = 'block';
  } else {
    alert("Invalid OTP! Try entering 1234.");
  }
}

function generateToken(e) {
  e.preventDefault();
  document.getElementById('bookingCard').style.display = 'none';
  document.getElementById('passCard').style.display = 'block';
  
  const token = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('qrTokenId').innerText = "Token ID: " + token;
  logSMS(`[SMS -> Farmer]: Token ${token} Confirmed! Target arrival: 45 mins. Slot reserved.`);
}

function triggerVoiceAssistance() {
  alert("🔊 Bhashini Voice Output: 'तुमचा नंबर ३रा आहे. अंदाजे वेळ २५ मिनिटे बाकी आहे.' (Your turn is 3rd in line. Estimated wait time: 25 minutes)");
}

// Module 2: Officer Dashboard Functions
function scanToken() {
  const token = document.getElementById('scanInput').value || "#MND-84920";
  document.getElementById('scanResult').innerText = `[SUCCESS]: ${token} Verified. Aadhaar Linked. Gate Entry Approved. Proceed to Weighbridge 2.`;
  logSMS(`[SMS -> Farmer]: Gate pass verified! Proceed immediately to Weighbridge 2.`);
}

function applyGracePeriod() {
  alert("15-Minute Grace Period applied to overdue tokens.");
  logSMS("[SMS -> Re-Queue]: Late arrival detected. 15-min buffer applied; token re-queued safely.");
}

function triggerEmergency() {
  alert("Emergency pause applied to Mandi gate entry.");
  logSMS("[ALERT -> All Drivers]: Gate entry paused due to yard capacity limit. Please wait in holding lane.");
}

// Module 3: Queue Engine Calculations
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

// Helper: Append SMS to Module 4 Log Box
function logSMS(msg) {
  const box = document.getElementById('smsLogBox');
  const item = document.createElement('div');
  item.className = 'sms-item';
  item.innerText = msg;
  box.prepend(item);
}
