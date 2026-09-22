"use strict";

let currentLang = "en";
let generatedTokenData = null;
let otpTimerId = null;
let otpValue = "";
let toastTimer = null;

const langMap = {
  en: "en-IN",
  hi: "hi-IN"
};

const translations = {
  en: {
    appTitle: "Smart Mandi Engine",
    subTitle: "APMC Dynamic Queue & Pass",
    tabFarmer: "Farmer App",
    tabOfficer: "Officer Desk",
    tabEngine: "Queue Engine",
    tabSms: "SMS Logs",
    farmerPortal: "Farmer Portal & Digital Pass",
    farmerDescription: "Verify your mobile number and reserve a procurement slot.",
    otpHeading: "Kisan OTP Authentication",
    otpDescription: "Use your registered mobile number.",
    lblPhone: "Mobile Number",
    phPhone: "Enter 10-digit mobile number",
    sendOtp: "Send OTP",
    otpTimerText: "OTP expires in {seconds} seconds",
    lblOtpCode: "Verification Code",
    phOtp: "Enter 4-digit OTP",
    verifyLogin: "Verify & Login",
    demoOtp: "Demo OTP: {otp}",
    bookSlotHeading: "Book Procurement Schedule",
    bookingDescription: "Select schedule date, time slot, produce, and vehicle details.",
    lblFarmerName: "Farmer Name / ID",
    phFarmerName: "e.g. Ramesh Patil",
    lblMandi: "Mandi Center",
    optSelectMandi: "-- Select APMC Mandi --",
    mandiNashik: "Nashik Main APMC",
    mandiLasalgaon: "Lasalgaon Mandi",
    mandiPune: "Pune Market Yard",
    mandiNagpur: "Nagpur APMC Hub",
    lblCommodity: "Commodity Type",
    optSelectCommodity: "-- Select Commodity --",
    cropOnion: "Onion",
    cropPulses: "Pulses",
    cropVegetables: "Vegetables",
    cropWheat: "Wheat",
    cropCotton: "Cotton",
    lblQty: "Produce Quantity (Tons)",
    phQty: "e.g. 5.5",
    lblVehicle: "Vehicle Type",
    optSelectVehicle: "-- Select Vehicle --",
    vehicleTractor: "Tractor Trolley",
    vehicleMiniTruck: "Mini Truck",
    vehicleHeavyTruck: "Heavy Commercial Truck",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passEyebrow: "SECURE PASS",
    passHeading: "Digital Gate Pass & Status",
    slotConfirmed: "SLOT CONFIRMED",
    scanAtGate: "Show this QR code at entry gate.",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    lblSchedule: "Schedule Window",
    lblDate: "Procurement Date",
    lblSlotTime: "Preferred Time Window",
    optSelectSlot: "-- Select Time Window --",
    btnTTS: "Listen to Status",
    officerDeskTitle: "Mandi Officer Control Desk",
    officerDescription: "Verify passes, approve quality, and process payments.",
    gatePassHeading: "Gate Pass Verification",
    gatePassDesc: "Scan or enter token ID at the mandi entry gate.",
    lblToken: "Token ID",
    phTokenInput: "Enter token ID, e.g. #MND-84920",
    btnVerifyEntry: "Verify Entry",
    btnCamScanner: "Open Camera Scanner",
    awaitingGate: "Awaiting gate entry verification...",
    passValid: "PASS VALID ({token}) — Gate entry permitted.",
    cameraMessage: "Camera scanner initialized. Point the camera at the QR code.",
    weighbridgeHeading: "Automated Weighbridge Station",
    weighbridgeDesc: "Simulate live weight scale input from the IoT sensor.",
    btnCaptureWeight: "Capture Weight & Confirm Procurement",
    exceptionsHeading: "Queue Exceptions & Controls",
    btnGrantGrace: "Grant 15-min Buffer",
    btnPauseGate: "Pause Gate Entry",
    graceMessage: "15-minute grace period granted to the active token.",
    emergencyMessage: "Gate entry has been temporarily paused.",
    engineTitle: "Queue Processing Engine",
    engineDescription: "Adjust capacity and monitor the current mandi workload.",
    engineHeading: "Capacity & Speed Adjuster",
    lblActiveBridges: "Active Weighbridges",
    lblShiftFactor: "Shift Efficiency Factor",
    optNormalSpeed: "Normal Speed (100%)",
    optPeakSpeed: "Peak Rush (150%)",
    optSlowSpeed: "Lunch Break / Slow (70%)",
    calculatedThroughput: "Calculated system throughput: {minutes} minutes per vehicle",
    activeStatusHeading: "Active Mandi Status",
    lblInQueue: "In Queue",
    lblAvgWait: "Average Wait",
    lblClearedToday: "Cleared Today",
    vehicles: "Vehicles",
    minutes: "Minutes",
    tons: "Tons",
    smsTitle: "SMS Gateway & Broadcast Logs",
    smsDescription: "View system and farmer communication events.",
    smsHeading: "Live Telephony Logs",
    smsInitialLog: "System: Mandi Queue Engine initialized.",
    invalidPhone: "Please enter a valid 10-digit mobile number.",
    invalidOtp: "Please enter the 4-digit OTP shown in the demo message.",
    noPass: "No active booking pass found.",
    speechUnavailable: "Text-to-speech is not supported in this browser.",
    bookingConfirmed: "Booking confirmed. Your digital pass is ready.",
    otpSent: "Demo OTP sent successfully.",
    authSuccess: "Farmer authenticated successfully.",
    alertValidToken: "Please enter a token ID.",
    procurementStatusTitle: "Procurement & Payment Status",
    stepBooked: "Slot Reserved",
    stepGate: "Gate Entry",
    stepWeighed: "Weighbridge",
    stepApproved: "Procured",
    stepPaid: "DBT Paid",
    ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
      `Hello ${name}. Your booking at ${mandi} for ${qty} tons of ${crop}, using a ${vehicle}, is confirmed. Your queue position is ${position}. Your estimated arrival time is ${eta}.`
  },

  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    subTitle: "एपीएमसी डायनामिक कतार और पास",
    tabFarmer: "किसान ऐप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "क्यू इंजन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल और डिजिटल पास",
    farmerDescription: "मोबाइल नंबर सत्यापित करके खरीद स्लॉट बुक करें।",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    otpDescription: "अपना पंजीकृत मोबाइल नंबर दर्ज करें।",
    lblPhone: "मोबाइल नंबर",
    phPhone: "10 अंकों का मोबाइल नंबर दर्ज करें",
    sendOtp: "ओटीपी भेजें",
    otpTimerText: "ओटीपी {seconds} सेकंड में समाप्त होगा",
    lblOtpCode: "सत्यापन कोड",
    phOtp: "4 अंकों का ओटीपी दर्ज करें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    demoOtp: "डेमो ओटीपी: {otp}",
    bookSlotHeading: "खरीद अनुसूची बुक करें",
    bookingDescription: "अपनी फसल, तिथि और समय स्लॉट दर्ज करें।",
    lblFarmerName: "किसान का नाम / आईडी",
    phFarmerName: "जैसे रमेश पाटील",
    lblMandi: "मंडी केंद्र",
    optSelectMandi: "-- एपीएमसी मंडी चुनें --",
    mandiNashik: "नासिक मुख्य एपीएमसी",
    mandiLasalgaon: "लासलगांव मंडी",
    mandiPune: "पुणे मार्केट यार्ड",
    mandiNagpur: "नागपुर एपीएमसी हब",
    lblCommodity: "फसल का प्रकार",
    optSelectCommodity: "-- फसल चुनें --",
    cropOnion: "प्याज",
    cropPulses: "दालें",
    cropVegetables: "सब्जियां",
    cropWheat: "गेहूं",
    cropCotton: "कपास",
    lblQty: "फसल की मात्रा (टन)",
    phQty: "जैसे 5.5",
    lblVehicle: "वाहन का प्रकार",
    optSelectVehicle: "-- वाहन चुनें --",
    vehicleTractor: "ट्रैक्टर ट्रॉली",
    vehicleMiniTruck: "मिनी ट्रक",
    vehicleHeavyTruck: "भारी वाणिज्यिक ट्रक",
    btnBookSlot: "स्लॉट बुक करें और क्यूआर पास बनाएं",
    passEyebrow: "सुरक्षित पास",
    passHeading: "डिजिटल गेट पास एवं स्थिति",
    slotConfirmed: "स्लॉट की पुष्टि हुई",
    scanAtGate: "प्रवेश द्वार पर यह क्यूआर कोड दिखाएं।",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "अतिरिक्त समय",
    lblSchedule: "समय अनुसूची",
    lblDate: "खरीद तिथि",
    lblSlotTime: "समय विंडो",
    optSelectSlot: "-- समय विंडो चुनें --",
    btnTTS: "स्थिति सुनें",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    officerDescription: "पास सत्यापित करें, गुणवत्ता स्वीकृत करें और भुगतान जारी करें।",
    gatePassHeading: "गेट पास सत्यापन",
    gatePassDesc: "मंडी प्रवेश द्वार पर टोकन आईडी डालें।",
    lblToken: "टोकन आईडी",
    phTokenInput: "टोकन आईडी दर्ज करें",
    btnVerifyEntry: "प्रवेश सत्यापित करें",
    btnCamScanner: "कैमरा स्कैनर खोलें",
    awaitingGate: "गेट प्रवेश सत्यापन की प्रतीक्षा है...",
    passValid: "पास मान्य ({token}) — गेट प्रवेश की अनुमति है।",
    cameraMessage: "कैमरा स्कैनर शुरू हो गया है। क्यूआर कोड की ओर कैमरा करें।",
    weighbridgeHeading: "स्वचालित वजन केंद्र",
    weighbridgeDesc: "आईओटी सेंसर से वजन मापने का अनुकरण करें।",
    btnCaptureWeight: "वजन दर्ज करें और खरीद की पुष्टि करें",
    exceptionsHeading: "कतार नियंत्रण",
    btnGrantGrace: "15 मिनट की अतिरिक्त छूट दें",
    btnPauseGate: "गेट प्रवेश रोकें",
    graceMessage: "सक्रिय टोकन को 15 मिनट की अतिरिक्त छूट दी गई।",
    emergencyMessage: "गेट प्रवेश अस्थायी रूप से रोक दिया गया है।",
    engineTitle: "कतार प्रसंस्करण इंजन",
    engineDescription: "क्षमता समायोजित करें और मंडी की स्थिति देखें।",
    engineHeading: "क्षमता और गति समायोजन",
    lblActiveBridges: "सक्रिय वजन केंद्र",
    lblShiftFactor: "शिफ्ट दक्षता कारक",
    optNormalSpeed: "सामान्य गति (100%)",
    optPeakSpeed: "अधिक भीड़ (150%)",
    optSlowSpeed: "दोपहर का समय / धीमी गति (70%)",
    calculatedThroughput: "अनुमानित क्षमता: प्रति वाहन {minutes} मिनट",
    activeStatusHeading: "सक्रिय मंडी स्थिति",
    lblInQueue: "कतार में",
    lblAvgWait: "औसत प्रतीक्षा",
    lblClearedToday: "आज साफ किया गया",
    vehicles: "वाहन",
    minutes: "मिनट",
    tons: "टन",
    smsTitle: "एसएमएस गेटवे और प्रसारण लॉग",
    smsDescription: "सिस्टम और किसान संदेश देखें।",
    smsHeading: "लाइव टेलीफोनी लॉग",
    smsInitialLog: "सिस्टम: मंडी क्यू इंजन शुरू हो गया।",
    invalidPhone: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।",
    invalidOtp: "कृपया डेमो संदेश में दिखाया गया 4 अंकों का ओटीपी दर्ज करें।",
    noPass: "कोई सक्रिय बुकिंग पास नहीं मिला।",
    speechUnavailable: "इस ब्राउज़र में टेक्स्ट-टू-स्पीच उपलब्ध नहीं है।",
    bookingConfirmed: "बुकिंग की पुष्टि हो गई। आपका डिजिटल पास तैयार है।",
    otpSent: "डेमो ओटीपी सफलतापूर्वक भेजा गया।",
    authSuccess: "किसान का प्रमाणीकरण सफल रहा।",
    alertValidToken: "कृपया टोकन आईडी दर्ज करें।",
    procurementStatusTitle: "खरीद और भुगतान की स्थिति",
    stepBooked: "स्लॉट आरक्षित",
    stepGate: "गेट प्रवेश",
    stepWeighed: "वजन केंद्र",
    stepApproved: "खरीद पूर्ण",
    stepPaid: "डीबीटी भुगतान",
    ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
      `नमस्ते ${name}। ${mandi} में ${qty} टन ${crop} के लिए आपकी बुकिंग की पुष्टि हो गई है।`
  }
};

function t(key, variables = {}) {
  const dictionary = translations[currentLang] || translations.en;
  let value = dictionary[key] ?? translations.en[key] ?? key;
  if (typeof value === "function") return value(variables);
  return String(value).replace(/\{(\w+)\}/g, (_, name) => variables[name] ?? `{${name}}`);
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast visible ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3500);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPh);
  });
  updateDynamicMessages();
  updatePassDisplayUI();
  recalculateEngine();
}

function updateDynamicMessages() {
  const timer = document.getElementById("otpTimer");
  if (timer && !document.getElementById("otpSection").classList.contains("hidden")) {
    timer.textContent = t("otpTimerText", { seconds: timer.dataset.seconds || 30 });
  }
  const scanResult = document.getElementById("scanResult");
  if (scanResult && scanResult.dataset.state === "waiting") {
    scanResult.textContent = t("awaitingGate");
  }
}

function switchLanguage() {
  currentLang = document.getElementById("langSelect").value || "en";
  localStorage.setItem("mandiLanguage", currentLang);
  applyTranslations();
  if (generatedTokenData) generateQRCode(generatedTokenData.tokenId);
}

function showModule(moduleId, button) {
  document.querySelectorAll(".module").forEach((m) => m.classList.toggle("active", m.id === moduleId));
  document.querySelectorAll(".tab-btn").forEach((tab) => tab.classList.toggle("active", tab === button));
}

function startOtpTimer() {
  let seconds = 30;
  const timer = document.getElementById("otpTimer");
  clearInterval(otpTimerId);
  timer.dataset.seconds = seconds;
  timer.textContent = t("otpTimerText", { seconds });

  otpTimerId = setInterval(() => {
    seconds -= 1;
    timer.dataset.seconds = seconds;
    timer.textContent = t("otpTimerText", { seconds });
    if (seconds <= 0) {
      clearInterval(otpTimerId);
      timer.textContent = t("otpTimerText", { seconds: 0 });
    }
  }, 1000);
}

function sendOTP() {
  const phone = document.getElementById("farmerPhone").value.replace(/\D/g, "");
  if (!/^\d{10}$/.test(phone)) {
    showToast(t("invalidPhone"), "error");
    return;
  }
  otpValue = String(Math.floor(1000 + Math.random() * 9000));
  document.getElementById("otpSection").classList.remove("hidden");
  const demoOtp = document.getElementById("demoOtp");
  demoOtp.textContent = t("demoOtp", { otp: otpValue });
  demoOtp.classList.remove("hidden");
  startOtpTimer();
  logSMS(`${t("otpSent")} +91-${phone}`);
  showToast(t("otpSent"), "success");
}

function verifyOTP() {
  const code = document.getElementById("otpCode").value.trim();
  if (code !== otpValue) {
    showToast(t("invalidOtp"), "error");
    return;
  }
  clearInterval(otpTimerId);
  document.getElementById("loginCard").classList.add("hidden");
  document.getElementById("bookingCard").classList.remove("hidden");
  logSMS(t("authSuccess"));
  showToast(t("authSuccess"), "success");
}

function generateToken(event) {
  event.preventDefault();
  const form = document.getElementById("bookingForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const pDate = document.getElementById("procurementDate").value;
  const pSlot = document.getElementById("slotTime").value;

  generatedTokenData = {
    tokenId: `#MND-${Math.floor(10000 + Math.random() * 90000)}`,
    farmerName: document.getElementById("farmerName").value.trim(),
    mandiRaw: document.getElementById("mandiSelect").value,
    commodityRaw: document.getElementById("commoditySelect").value,
    qty: document.getElementById("produceQty").value,
    vehicleRaw: document.getElementById("vehicleType").value,
    schedule: `${pDate} [${pSlot}]`,
    position: 3,
    eta: "10:45 AM",
    grace: 15,
    stage: "BOOKED"
  };

  document.getElementById("bookingCard").classList.add("hidden");
  document.getElementById("passCard").classList.remove("hidden");

  updatePassDisplayUI();
  generateQRCode(generatedTokenData.tokenId);

  logSMS(`[SMS SENT to Farmer]: Pass generated: ${generatedTokenData.tokenId} for schedule: ${generatedTokenData.schedule}`);
  showToast(t("bookingConfirmed"), "success");
}

function getLocalizedValue(type, rawValue) {
  const keyMap = {
    mandi: {
      "Nashik Main APMC": "mandiNashik",
      "Lasalgaon Mandi": "mandiLasalgaon",
      "Pune Market Yard": "mandiPune",
      "Nagpur APMC Hub": "mandiNagpur"
    },
    crop: {
      Onion: "cropOnion", Pulses: "cropPulses", Vegetables: "cropVegetables", Wheat: "cropWheat", Cotton: "cropCotton"
    },
    vehicle: {
      "Tractor Trolley": "vehicleTractor", "Mini Truck": "vehicleMiniTruck", "Heavy Commercial Truck": "vehicleHeavyTruck"
    }
  };
  const key = keyMap[type]?.[rawValue];
  return key ? t(key) : rawValue;
}

function updatePassDisplayUI() {
  if (!generatedTokenData) return;

  document.getElementById("qrTokenId").textContent = generatedTokenData.tokenId;
  document.getElementById("summaryFarmerName").textContent = generatedTokenData.farmerName;
  document.getElementById("summaryMandi").textContent = getLocalizedValue("mandi", generatedTokenData.mandiRaw);
  document.getElementById("summarySchedule").textContent = generatedTokenData.schedule || "--";
  document.getElementById("summaryCommodity").textContent = getLocalizedValue("crop", generatedTokenData.commodityRaw);
  document.getElementById("summaryQty").textContent = `${generatedTokenData.qty} ${t("tons")}`;
  document.getElementById("farmerPos").textContent = `#${generatedTokenData.position}`;
  document.getElementById("farmerETA").textContent = generatedTokenData.eta;
  document.getElementById("farmerGrace").textContent = `${generatedTokenData.grace} ${t("minutes")}`;
}

function generateQRCode(text) {
  const container = document.getElementById("qrcode");
  container.innerHTML = "";
  if (typeof QRCode === "undefined") {
    container.textContent = text;
    return;
  }
  new QRCode(container, {
    text,
    width: 150,
    height: 150,
    colorDark: "#123b26",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

function findBestVoice(languageCode) {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang.toLowerCase() === languageCode.toLowerCase()) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(languageCode.slice(0, 2))) ||
    null
  );
}

function triggerVoiceAssistance() {
  if (!generatedTokenData) {
    showToast(t("noPass"), "error");
    return;
  }
  if (!("speechSynthesis" in window)) {
    showToast(t("speechUnavailable"), "error");
    return;
  }

  const speechText = t("ttsSpeech", {
    name: generatedTokenData.farmerName,
    mandi: getLocalizedValue("mandi", generatedTokenData.mandiRaw),
    crop: getLocalizedValue("crop", generatedTokenData.commodityRaw),
    qty: generatedTokenData.qty,
    position: generatedTokenData.position,
    eta: generatedTokenData.eta,
    vehicle: getLocalizedValue("vehicle", generatedTokenData.vehicleRaw)
  });

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(speechText);
  const selectedLanguage = langMap[currentLang] || langMap.en;
  const voice = findBestVoice(selectedLanguage);

  utterance.lang = selectedLanguage;
  utterance.rate = 0.82;
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function scanToken() {
  const input = document.getElementById("scanInput");
  const resultBox = document.getElementById("scanResult");
  const token = input.value.trim();

  if (!token) {
    showToast(t("alertValidToken"), "error");
    return;
  }

  resultBox.dataset.state = "valid";
  resultBox.className = "result-box success-result";
  resultBox.textContent = t("passValid", { token });

  // Update pipeline state to GATE_ENTRY
  if (generatedTokenData) {
    generatedTokenData.stage = "GATE_VERIFIED";
    document.getElementById("stepGate").className = "pipe-step completed";
    document.getElementById("farmerPos").textContent = "#1 (At Gate)";
    logSMS(`[SMS SENT to Farmer]: Gate Entry Verified for ${token}. Please move to Weighbridge.`);
  }
}

function toggleCameraScanner() {
  showToast(t("cameraMessage"), "info");
}

function simulateWeighment() {
  const randomWeight = (Math.random() * 6 + 2).toFixed(3);
  document.getElementById("weighValue").textContent = `${randomWeight} TONS`;

  if (generatedTokenData) {
    generatedTokenData.stage = "WEIGHED";
    generatedTokenData.verifiedQty = randomWeight;
    document.getElementById("stepWeighed").className = "pipe-step completed";
    logSMS(`[SMS SENT to Farmer]: Weight recorded: ${randomWeight} Tons. Awaiting officer procurement approval.`);
    showToast("Weighment captured and linked to active pass.", "success");
  }
}

function approveProcurement() {
  if (!generatedTokenData) {
    showToast("No active procurement booking to approve.", "error");
    return;
  }

  document.getElementById("stepApproved").className = "pipe-step completed";
  document.getElementById("stepPaid").className = "pipe-step completed";

  const ratePerTon = 28000;
  const qty = parseFloat(generatedTokenData.verifiedQty || generatedTokenData.qty);
  const totalPayout = (qty * ratePerTon).toLocaleString("en-IN");
  const dbtTxnId = `DBT-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  document.getElementById("paymentRef").textContent = dbtTxnId;
  document.getElementById("paymentAmount").textContent = totalPayout;
  document.getElementById("paymentDetailsBox").classList.remove("hidden");

  logSMS(`[SMS SENT to Farmer]: Procurement Approved! Direct Payment of ₹${totalPayout} disbursed via DBT (Ref: ${dbtTxnId}).`);
  showToast(`Procurement approved! ₹${totalPayout} transferred via DBT.`, "success");
}

function applyGracePeriod() {
  showToast(t("graceMessage"), "success");
}

function triggerEmergency() {
  showToast(t("emergencyMessage"), "error");
}

function recalculateEngine() {
  const bridges = Math.max(1, Number.parseInt(document.getElementById("engineBridges").value, 10) || 1);
  const factor = Number.parseFloat(document.getElementById("shiftStatus").value) || 1;

  const baseMinutes = 20;
  const calculatedMinutes = Math.max(1, Math.round((baseMinutes / bridges) / factor));

  document.getElementById("engineOutput").textContent = t("calculatedThroughput", { minutes: calculatedMinutes });

  const dynamicWait = Math.round(calculatedMinutes * 1.5);
  const avgWaitEl = document.getElementById("metricAvgWait");
  if (avgWaitEl) avgWaitEl.textContent = dynamicWait;
}

function logSMS(message) {
  const logBox = document.getElementById("smsLogBox");
  if (!logBox) return;

  const entry = document.createElement("div");
  entry.className = "sms-item";
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  entry.textContent = `[${timestamp}] ${message}`;
  logBox.prepend(entry);
}

function setupNetworkListeners() {
  window.addEventListener("offline", () => {
    showToast(currentLang === "hi" ? "आप ऑफलाइन हैं। स्थानीय डेटा चालू है।" : "You are offline. Running in offline mode.", "info");
  });
  window.addEventListener("online", () => {
    showToast(currentLang === "hi" ? "आप वापस ऑनलाइन हैं।" : "Connection restored.", "success");
  });
}

function bindEvents() {
  document.getElementById("langSelect").addEventListener("change", switchLanguage);
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => showModule(button.dataset.module, button));
  });

  document.getElementById("sendOtpBtn").addEventListener("click", sendOTP);
  document.getElementById("verifyOtpBtn").addEventListener("click", verifyOTP);
  document.getElementById("bookingForm").addEventListener("submit", generateToken);
  document.getElementById("ttsBtn").addEventListener("click", triggerVoiceAssistance);
  document.getElementById("scanTokenBtn").addEventListener("click", scanToken);
  document.getElementById("camToggleBtn").addEventListener("click", toggleCameraScanner);
  document.getElementById("weighBtn").addEventListener("click", simulateWeighment);
  document.getElementById("approveProcurementBtn").addEventListener("click", approveProcurement);
  document.getElementById("graceBtn").addEventListener("click", applyGracePeriod);
  document.getElementById("emergencyBtn").addEventListener("click", triggerEmergency);
  document.getElementById("engineBridges").addEventListener("input", recalculateEngine);
  document.getElementById("shiftStatus").addEventListener("change", recalculateEngine);
}

function initialiseApp() {
  const savedLanguage = localStorage.getItem("mandiLanguage");
  if (savedLanguage && translations[savedLanguage]) {
    currentLang = savedLanguage;
    document.getElementById("langSelect").value = savedLanguage;
  }

  // Set default procurement date to today
  const today = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("procurementDate");
  if (dateInput) dateInput.value = today;

  bindEvents();
  setupNetworkListeners();
  applyTranslations();
  logSMS(t("smsInitialLog"));

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  const scanResult = document.getElementById("scanResult");
  if (scanResult) scanResult.dataset.state = "waiting";
}

document.addEventListener("DOMContentLoaded", initialiseApp);
