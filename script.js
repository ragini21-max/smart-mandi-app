"use strict";

let currentLang = "en";
let generatedTokenData = null;
let otpTimerId = null;
let otpValue = "";
let toastTimer = null;

const langMap = {
  en: "en-IN",
  hi: "hi-IN",
  mr: "mr-IN",
  te: "te-IN",
  ta: "ta-IN",
  bn: "bn-IN",
  gu: "gu-IN",
  kn: "kn-IN"
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
    bookSlotHeading: "Book Procurement Slot",
    bookingDescription: "Add your produce and vehicle details.",
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
    passHeading: "Digital Gate Pass",
    slotConfirmed: "SLOT CONFIRMED",
    scanAtGate: "Show this QR code at the entry gate.",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    btnTTS: "Listen to Status",
    officerDeskTitle: "Mandi Officer Control Desk",
    officerDescription: "Verify passes and manage gate operations.",
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
    btnCaptureWeight: "Capture Weight from Scale",
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
    bookSlotHeading: "खरीद स्लॉट बुक करें",
    bookingDescription: "अपनी फसल और वाहन की जानकारी दर्ज करें।",
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
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट की पुष्टि हुई",
    scanAtGate: "प्रवेश द्वार पर यह क्यूआर कोड दिखाएं।",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "अतिरिक्त समय",
    btnTTS: "स्थिति सुनें",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    officerDescription: "पास सत्यापित करें और गेट संचालन प्रबंधित करें।",
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
    btnCaptureWeight: "स्केल से वजन लें",
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
    ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
      `नमस्ते ${name}। ${mandi} में ${qty} टन ${crop} के लिए, ${vehicle} वाहन से की गई आपकी बुकिंग की पुष्टि हो गई है। कतार में आपका स्थान ${position} है। आपका अनुमानित आगमन समय ${eta} है।`
  },

  mr: {
    appTitle: "स्मार्ट मंडी इंजिन",
    subTitle: "एपीएमसी डायनॅमिक रांग आणि पास",
    tabFarmer: "शेतकरी ॲप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "क्यू इंजिन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    farmerDescription: "मोबाईल क्रमांक तपासा आणि खरेदी स्लॉट बुक करा.",
    otpHeading: "शेतकरी ओटीपी प्रमाणीकरण",
    otpDescription: "तुमचा नोंदणीकृत मोबाईल क्रमांक वापरा.",
    lblPhone: "मोबाईल क्रमांक",
    phPhone: "10 अंकी मोबाईल क्रमांक टाका",
    sendOtp: "ओटीपी पाठवा",
    otpTimerText: "ओटीपी {seconds} सेकंदांत कालबाह्य होईल",
    lblOtpCode: "पडताळणी कोड",
    phOtp: "4 अंकी ओटीपी टाका",
    verifyLogin: "पडताळणी करा आणि लॉगिन करा",
    demoOtp: "डेमो ओटीपी: {otp}",
    bookSlotHeading: "खरेदी स्लॉट बुक करा",
    bookingDescription: "तुमच्या शेतमालाची आणि वाहनाची माहिती भरा.",
    lblFarmerName: "शेतकऱ्याचे नाव / आयडी",
    phFarmerName: "उदा. रमेश पाटील",
    lblMandi: "मंडी केंद्र",
    optSelectMandi: "-- एपीएमसी मंडी निवडा --",
    mandiNashik: "नाशिक मुख्य एपीएमसी",
    mandiLasalgaon: "लासलगाव मंडी",
    mandiPune: "पुणे मार्केट यार्ड",
    mandiNagpur: "नागपूर एपीएमसी हब",
    lblCommodity: "शेतमालाचा प्रकार",
    optSelectCommodity: "-- शेतमाल निवडा --",
    cropOnion: "कांदा",
    cropPulses: "डाळी",
    cropVegetables: "भाज्या",
    cropWheat: "गहू",
    cropCotton: "कापूस",
    lblQty: "शेतमालाचे प्रमाण (टन)",
    phQty: "उदा. 5.5",
    lblVehicle: "वाहनाचा प्रकार",
    optSelectVehicle: "-- वाहन निवडा --",
    vehicleTractor: "ट्रॅक्टर ट्रॉली",
    vehicleMiniTruck: "मिनी ट्रक",
    vehicleHeavyTruck: "मोठा व्यावसायिक ट्रक",
    btnBookSlot: "स्लॉट बुक करा आणि क्यूआर पास तयार करा",
    passEyebrow: "सुरक्षित पास",
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट निश्चित",
    scanAtGate: "प्रवेशद्वारावर हा क्यूआर कोड दाखवा.",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजे वेळ",
    lblGrace: "सवलतीचा वेळ",
    btnTTS: "स्थिती ऐका",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    officerDescription: "पास तपासा आणि गेटचे व्यवस्थापन करा.",
    gatePassHeading: "गेट पास पडताळणी",
    gatePassDesc: "मंडीच्या प्रवेशद्वारावर टोकन आयडी टाका.",
    lblToken: "टोकन आयडी",
    phTokenInput: "टोकन आयडी टाका",
    btnVerifyEntry: "प्रवेश तपासा",
    btnCamScanner: "कॅमेरा स्कॅनर उघडा",
    awaitingGate: "गेट प्रवेश पडताळणीची प्रतीक्षा आहे...",
    passValid: "पास वैध ({token}) — गेट प्रवेशास परवानगी आहे.",
    cameraMessage: "कॅमेरा स्कॅनर सुरू झाला. क्यूआर कोडकडे कॅमेरा करा.",
    weighbridgeHeading: "स्वयंचलित वजन केंद्र",
    weighbridgeDesc: "आयओटी सेन्सरवरील वजनाचे अनुकरण करा.",
    btnCaptureWeight: "स्केलवरून वजन घ्या",
    exceptionsHeading: "रांग नियंत्रण",
    btnGrantGrace: "15 मिनिटांची सवलत द्या",
    btnPauseGate: "गेट प्रवेश थांबवा",
    graceMessage: "सक्रिय टोकनला 15 मिनिटांची सवलत देण्यात आली.",
    emergencyMessage: "गेट प्रवेश तात्पुरता थांबवण्यात आला आहे.",
    engineTitle: "रांग प्रक्रिया इंजिन",
    engineDescription: "क्षमता समायोजित करा आणि मंडीची स्थिती पहा.",
    engineHeading: "क्षमता आणि वेग समायोजन",
    lblActiveBridges: "सक्रिय वजन काटे",
    lblShiftFactor: "शिफ्ट कार्यक्षमता घटक",
    optNormalSpeed: "सामान्य वेग (100%)",
    optPeakSpeed: "जास्त गर्दी (150%)",
    optSlowSpeed: "दुपारची विश्रांती / कमी वेग (70%)",
    calculatedThroughput: "अंदाजे क्षमता: प्रत्येक वाहनासाठी {minutes} मिनिटे",
    activeStatusHeading: "सक्रिय मंडी स्थिती",
    lblInQueue: "रांगेत",
    lblAvgWait: "सरासरी प्रतीक्षा",
    lblClearedToday: "आज साफ केले",
    vehicles: "वाहने",
    minutes: "मिनिटे",
    tons: "टन",
    smsTitle: "एसएमएस गेटवे आणि प्रसारण लॉग",
    smsDescription: "सिस्टम आणि शेतकरी संदेश पहा.",
    smsHeading: "थेट टेलिफोनी लॉग",
    smsInitialLog: "सिस्टम: मंडी क्यू इंजिन सुरू झाले.",
    invalidPhone: "कृपया योग्य 10 अंकी मोबाईल क्रमांक टाका.",
    invalidOtp: "कृपया डेमो संदेशातील 4 अंकी ओटीपी टाका.",
    noPass: "सक्रिय बुकिंग पास सापडला नाही.",
    speechUnavailable: "या ब्राउझरमध्ये टेक्स्ट-टू-स्पीच उपलब्ध नाही.",
    bookingConfirmed: "बुकिंग निश्चित झाली. तुमचा डिजिटल पास तयार आहे.",
    otpSent: "डेमो ओटीपी यशस्वीपणे पाठवला.",
    authSuccess: "शेतकऱ्याचे प्रमाणीकरण यशस्वी झाले.",
    alertValidToken: "कृपया टोकन आयडी टाका.",
    ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
      `नमस्कार ${name}. ${mandi} येथे ${qty} टन ${crop} साठी ${vehicle} वाहनाने केलेली तुमची बुकिंग निश्चित झाली आहे. रांगेतील तुमचे स्थान ${position} आहे. तुमची अंदाजे आगमन वेळ ${eta} आहे.`
  }
};

/*
 * The remaining languages use complete, independent translated content
 * for the values that appear in the pass and speech. The interface labels
 * can be expanded in exactly the same format without changing the logic.
 */
translations.te = createLanguagePack({
  appTitle: "స్మార్ట్ మండి ఇంజిన్",
  subTitle: "ఏపీఎంసీ డైనమిక్ క్యూ మరియు పాస్",
  tabFarmer: "రైతు యాప్",
  tabOfficer: "అధికారి డెస్క్",
  tabEngine: "క్యూ ఇంజిన్",
  tabSms: "ఎస్ఎంఎస్ లాగ్స్",
  farmerPortal: "రైతు పోర్టల్ మరియు డిజిటల్ పాస్",
  farmerDescription: "మొబైల్ నంబర్‌ను ధృవీకరించి కొనుగోలు స్లాట్ బుక్ చేయండి.",
  otpHeading: "రైతు ఓటీపీ ధృవీకరణ",
  lblPhone: "మొబైల్ నంబర్",
  phPhone: "10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి",
  sendOtp: "ఓటీపీ పంపండి",
  lblOtpCode: "ధృవీకరణ కోడ్",
  phOtp: "4 అంకెల ఓటీపీ నమోదు చేయండి",
  verifyLogin: "ధృవీకరించి లాగిన్ చేయండి",
  bookSlotHeading: "కొనుగోలు స్లాట్ బుక్ చేయండి",
  bookingDescription: "మీ పంట మరియు వాహన వివరాలు నమోదు చేయండి.",
  lblFarmerName: "రైతు పేరు / ఐడీ",
  phFarmerName: "ఉదా. రమేష్ పాటిల్",
  lblMandi: "మండి కేంద్రం",
  optSelectMandi: "-- ఏపీఎంసీ మండి ఎంచుకోండి --",
  mandiNashik: "నాసిక్ ప్రధాన ఏపీఎంసీ",
  mandiLasalgaon: "లాసల్గావ్ మండి",
  mandiPune: "పూణే మార్కెట్ యార్డ్",
  mandiNagpur: "నాగ్‌పూర్ ఏపీఎంసీ హబ్",
  lblCommodity: "పంట రకం",
  optSelectCommodity: "-- పంట ఎంచుకోండి --",
  cropOnion: "ఉల్లిపాయ",
  cropPulses: "పప్పులు",
  cropVegetables: "కూరగాయలు",
  cropWheat: "గోధుమ",
  cropCotton: "పత్తి",
  lblQty: "పంట పరిమాణం (టన్నులు)",
  phQty: "ఉదా. 5.5",
  lblVehicle: "వాహనం రకం",
  optSelectVehicle: "-- వాహనం ఎంచుకోండి --",
  vehicleTractor: "ట్రాక్టర్ ట్రాలీ",
  vehicleMiniTruck: "మినీ ట్రక్",
  vehicleHeavyTruck: "భారీ వాణిజ్య ట్రక్",
  btnBookSlot: "స్లాట్ బుక్ చేసి క్యూఆర్ పాస్ రూపొందించండి",
  passEyebrow: "సురక్షిత పాస్",
  passHeading: "డిజిటల్ గేట్ పాస్",
  slotConfirmed: "స్లాట్ నిర్ధారించబడింది",
  scanAtGate: "ప్రవేశ ద్వారం వద్ద ఈ క్యూఆర్ కోడ్ చూపించండి.",
  lblLivePos: "ప్రస్తుత స్థానం",
  lblETA: "అంచనా సమయం",
  lblGrace: "అదనపు సమయం",
  btnTTS: "స్థితిని వినండి",
  ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
    `నమస్కారం ${name}. ${vehicle} వాహనంతో ${mandi}లో ${qty} టన్నుల ${crop} కోసం మీ బుకింగ్ నిర్ధారించబడింది. క్యూలో మీ స్థానం ${position}. మీ అంచనా రాక సమయం ${eta}.`
});

translations.ta = createLanguagePack({
  appTitle: "ஸ்மார்ட் மண்டி இன்ஜின்",
  subTitle: "ஏபிஎம்சி டைனமிக் வரிசை மற்றும் பாஸ்",
  tabFarmer: "விவசாயி செயலி",
  tabOfficer: "அதிகாரி மேசை",
  tabEngine: "வரிசை இன்ஜின்",
  tabSms: "எஸ்எம்எஸ் பதிவுகள்",
  farmerPortal: "விவசாயி போர்டல் மற்றும் டிஜிட்டல் பாஸ்",
  farmerDescription: "மொபைல் எண்ணைச் சரிபார்த்து கொள்முதல் நேரத்தை முன்பதிவு செய்யுங்கள்.",
  otpHeading: "விவசாயி ஓடிபி சரிபார்ப்பு",
  lblPhone: "மொபைல் எண்",
  phPhone: "10 இலக்க மொபைல் எண்ணை உள்ளிடவும்",
  sendOtp: "ஓடிபி அனுப்பவும்",
  lblOtpCode: "சரிபார்ப்பு குறியீடு",
  phOtp: "4 இலக்க ஓடிபியை உள்ளிடவும்",
  verifyLogin: "சரிபார்த்து உள்நுழையவும்",
  bookSlotHeading: "கொள்முதல் நேரத்தை முன்பதிவு செய்யவும்",
  bookingDescription: "உங்கள் பயிர் மற்றும் வாகன விவரங்களை உள்ளிடவும்.",
  lblFarmerName: "விவசாயி பெயர் / அடையாளம்",
  phFarmerName: "எ.கா. ரமேஷ் பாட்டீல்",
  lblMandi: "மண்டி மையம்",
  optSelectMandi: "-- ஏபிஎம்சி மண்டியைத் தேர்ந்தெடுக்கவும் --",
  mandiNashik: "நாசிக் பிரதான ஏபிஎம்சி",
  mandiLasalgaon: "லாசல்காவ் மண்டி",
  mandiPune: "புனே சந்தை வளாகம்",
  mandiNagpur: "நாக்பூர் ஏபிஎம்சி மையம்",
  lblCommodity: "பயிர் வகை",
  optSelectCommodity: "-- பயிரைத் தேர்ந்தெடுக்கவும் --",
  cropOnion: "வெங்காயம்",
  cropPulses: "பருப்பு வகைகள்",
  cropVegetables: "காய்கறிகள்",
  cropWheat: "கோதுமை",
  cropCotton: "பருத்தி",
  lblQty: "பயிர் அளவு (டன்)",
  phQty: "எ.கா. 5.5",
  lblVehicle: "வாகன வகை",
  optSelectVehicle: "-- வாகனத்தைத் தேர்ந்தெடுக்கவும் --",
  vehicleTractor: "டிராக்டர் டிரெய்லர்",
  vehicleMiniTruck: "மினி டிரக்",
  vehicleHeavyTruck: "கனரக வர்த்தக லாரி",
  btnBookSlot: "நேரத்தை முன்பதிவு செய்து க்யூஆர் பாஸ் உருவாக்கவும்",
  passEyebrow: "பாதுகாப்பான பாஸ்",
  passHeading: "டிஜிட்டல் கேட் பாஸ்",
  slotConfirmed: "நேரம் உறுதி செய்யப்பட்டது",
  scanAtGate: "நுழைவாயிலில் இந்த க்யூஆர் குறியீட்டைக் காட்டவும்.",
  lblLivePos: "வரிசை நிலை",
  lblETA: "மதிப்பிடப்பட்ட நேரம்",
  lblGrace: "கூடுதல் நேரம்",
  btnTTS: "நிலையை கேட்கவும்",
  ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
    `வணக்கம் ${name}. ${vehicle} வாகனத்தில் ${mandi} மண்டியில் ${qty} டன் ${crop}க்கான உங்கள் முன்பதிவு உறுதி செய்யப்பட்டது. வரிசையில் உங்கள் நிலை ${position}. உங்கள் வருகை நேரம் ${eta}.`
});

translations.bn = createLanguagePack({
  appTitle: "স্মার্ট মান্ডি ইঞ্জিন",
  subTitle: "এপিএমসি ডায়নামিক কিউ এবং পাস",
  tabFarmer: "কৃষক অ্যাপ",
  tabOfficer: "অফিসার ডেস্ক",
  tabEngine: "কিউ ইঞ্জিন",
  tabSms: "এসএমএস লগ",
  farmerPortal: "কৃষক পোর্টাল এবং ডিজিটাল পাস",
  farmerDescription: "মোবাইল নম্বর যাচাই করে সংগ্রহের স্লট বুক করুন।",
  otpHeading: "কৃষক ওটিপি যাচাইকরণ",
  lblPhone: "মোবাইল নম্বর",
  phPhone: "10 সংখ্যার মোবাইল নম্বর লিখুন",
  sendOtp: "ওটিপি পাঠান",
  lblOtpCode: "যাচাইকরণ কোড",
  phOtp: "4 সংখ্যার ওটিপি লিখুন",
  verifyLogin: "যাচাই করে লগইন করুন",
  bookSlotHeading: "সংগ্রহের স্লট বুক করুন",
  bookingDescription: "আপনার ফসল এবং গাড়ির তথ্য লিখুন।",
  lblFarmerName: "কৃষকের নাম / আইডি",
  phFarmerName: "যেমন রমেশ পাটিল",
  lblMandi: "মান্ডি কেন্দ্র",
  optSelectMandi: "-- এপিএমসি মান্ডি নির্বাচন করুন --",
  mandiNashik: "নাসিক প্রধান এপিএমসি",
  mandiLasalgaon: "লাসালগাঁও মান্ডি",
  mandiPune: "পুনে মার্কেট ইয়ার্ড",
  mandiNagpur: "নাগপুর এপিএমসি হাব",
  lblCommodity: "ফসলের ধরন",
  optSelectCommodity: "-- ফসল নির্বাচন করুন --",
  cropOnion: "পেঁয়াজ",
  cropPulses: "ডাল",
  cropVegetables: "সবজি",
  cropWheat: "গম",
  cropCotton: "তুলা",
  lblQty: "ফসলের পরিমাণ (টন)",
  phQty: "যেমন 5.5",
  lblVehicle: "গাড়ির ধরন",
  optSelectVehicle: "-- গাড়ি নির্বাচন করুন --",
  vehicleTractor: "ট্র্যাক্টর ট্রলি",
  vehicleMiniTruck: "মিনি ট্রাক",
  vehicleHeavyTruck: "ভারী বাণিজ্যিক ট্রাক",
  btnBookSlot: "স্লট বুক করে কিউআর পাস তৈরি করুন",
  passEyebrow: "নিরাপদ পাস",
  passHeading: "ডিজিটাল গেট পাস",
  slotConfirmed: "স্লট নিশ্চিত",
  scanAtGate: "প্রবেশদ্বারে এই কিউআর কোড দেখান।",
  lblLivePos: "সারির অবস্থান",
  lblETA: "আনুমানিক সময়",
  lblGrace: "অতিরিক্ত সময়",
  btnTTS: "অবস্থা শুনুন",
  ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
    `নমস্কার ${name}। ${vehicle} গাড়িতে ${mandi} মান্ডিতে ${qty} টন ${crop} এর জন্য আপনার বুকিং নিশ্চিত হয়েছে। সারিতে আপনার অবস্থান ${position}। আপনার আনুমানিক আগমনের সময় ${eta}।`
});

translations.gu = createLanguagePack({
  appTitle: "સ્માર્ટ મંડી એન્જિન",
  subTitle: "એપીએમસી ડાયનેમિક કતાર અને પાસ",
  tabFarmer: "ખેડૂત એપ",
  tabOfficer: "અધિકારી ડેસ્ક",
  tabEngine: "કતાર એન્જિન",
  tabSms: "એસએમએસ લોગ",
  farmerPortal: "ખેડૂત પોર્ટલ અને ડિજિટલ પાસ",
  farmerDescription: "મોબાઇલ નંબર ચકાસી ખરીદી સ્લોટ બુક કરો.",
  otpHeading: "ખેડૂત ઓટીપી ચકાસણી",
  lblPhone: "મોબાઇલ નંબર",
  phPhone: "10 અંકનો મોબાઇલ નંબર દાખલ કરો",
  sendOtp: "ઓટીપી મોકલો",
  lblOtpCode: "ચકાસણી કોડ",
  phOtp: "4 અંકનો ઓટીપી દાખલ કરો",
  verifyLogin: "ચકાસી લોગિન કરો",
  bookSlotHeading: "ખરીદી સ્લોટ બુક કરો",
  bookingDescription: "તમારા પાક અને વાહનની વિગતો દાખલ કરો.",
  lblFarmerName: "ખેડૂતનું નામ / આઈડી",
  phFarmerName: "દા.ત. રમેશ પાટીલ",
  lblMandi: "મંડી કેન્દ્ર",
  optSelectMandi: "-- એપીએમસી મંડી પસંદ કરો --",
  mandiNashik: "નાસિક મુખ્ય એપીએમસી",
  mandiLasalgaon: "લાસલગાંવ મંડી",
  mandiPune: "પુણે માર્કેટ યાર્ડ",
  mandiNagpur: "નાગપુર એપીએમસી હબ",
  lblCommodity: "પાકનો પ્રકાર",
  optSelectCommodity: "-- પાક પસંદ કરો --",
  cropOnion: "ડુંગળી",
  cropPulses: "કઠોળ",
  cropVegetables: "શાકભાજી",
  cropWheat: "ઘઉં",
  cropCotton: "કપાસ",
  lblQty: "પાકનું પ્રમાણ (ટન)",
  phQty: "દા.ત. 5.5",
  lblVehicle: "વાહનનો પ્રકાર",
  optSelectVehicle: "-- વાહન પસંદ કરો --",
  vehicleTractor: "ટ્રેક્ટર ટ્રોલી",
  vehicleMiniTruck: "મિની ટ્રક",
  vehicleHeavyTruck: "ભારે વ્યાવસાયિક ટ્રક",
  btnBookSlot: "સ્લોટ બુક કરી ક્યુઆર પાસ બનાવો",
  passEyebrow: "સુરક્ષિત પાસ",
  passHeading: "ડિજિટલ ગેટ પાસ",
  slotConfirmed: "સ્લોટની પુષ્ટિ થઈ",
  scanAtGate: "પ્રવેશદ્વાર પર આ ક્યુઆર કોડ બતાવો.",
  lblLivePos: "લાઈવ સ્થાન",
  lblETA: "અંદાજિત સમય",
  lblGrace: "વધારાનો સમય",
  btnTTS: "સ્થિતિ સાંભળો",
  ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
    `નમસ્તે ${name}. ${vehicle} વાહનથી ${mandi} મંડીમાં ${qty} ટન ${crop} માટે તમારું બુકિંગ નક્કી થયું છે. કતારમાં તમારું સ્થાન ${position} છે. તમારો અંદાજિત આગમન સમય ${eta} છે.`
});

translations.kn = createLanguagePack({
  appTitle: "ಸ್ಮಾರ್ಟ್ ಮಂಡಿ ಎಂಜಿನ್",
  subTitle: "ಎಪಿಎಂಸಿ ಡೈನಾಮಿಕ್ ಸರತಿ ಮತ್ತು ಪಾಸ್",
  tabFarmer: "ರೈತ ಆಪ್",
  tabOfficer: "ಅಧಿಕಾರಿ ಡೆಸ್ಕ್",
  tabEngine: "ಸರತಿ ಎಂಜಿನ್",
  tabSms: "ಎಸ್‌ಎಂಎಸ್ ಲಾಗ್",
  farmerPortal: "ರೈತ ಪೋರ್ಟಲ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಪಾಸ್",
  farmerDescription: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಖರೀದಿ ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ.",
  otpHeading: "ರೈತ ಒಟಿಪಿ ದೃಢೀಕರಣ",
  lblPhone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
  phPhone: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
  sendOtp: "ಒಟಿಪಿ ಕಳುಹಿಸಿ",
  lblOtpCode: "ದೃಢೀಕರಣ ಕೋಡ್",
  phOtp: "4 ಅಂಕಿಯ ಒಟಿಪಿ ನಮೂದಿಸಿ",
  verifyLogin: "ದೃಢೀಕರಿಸಿ ಲಾಗಿನ್ ಮಾಡಿ",
  bookSlotHeading: "ಖರೀದಿ ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ",
  bookingDescription: "ನಿಮ್ಮ ಬೆಳೆ ಮತ್ತು ವಾಹನದ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ.",
  lblFarmerName: "ರೈತನ ಹೆಸರು / ಐಡಿ",
  phFarmerName: "ಉದಾ. ರಮೇಶ್ ಪಾಟೀಲ್",
  lblMandi: "ಮಂಡಿ ಕೇಂದ್ರ",
  optSelectMandi: "-- ಎಪಿಎಂಸಿ ಮಂಡಿ ಆಯ್ಕೆಮಾಡಿ --",
  mandiNashik: "ನಾಸಿಕ್ ಮುಖ್ಯ ಎಪಿಎಂಸಿ",
  mandiLasalgaon: "ಲಾಸಲ್ಗಾಂವ್ ಮಂಡಿ",
  mandiPune: "ಪುಣೆ ಮಾರುಕಟ್ಟೆ ಯಾರ್ಡ್",
  mandiNagpur: "ನಾಗ್ಪುರ ಎಪಿಎಂಸಿ ಹಬ್",
  lblCommodity: "ಬೆಳೆ ಪ್ರಕಾರ",
  optSelectCommodity: "-- ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ --",
  cropOnion: "ಈರುಳ್ಳಿ",
  cropPulses: "ಬೇಳೆಕಾಳುಗಳು",
  cropVegetables: "ತರಕಾರಿಗಳು",
  cropWheat: "ಗೋಧಿ",
  cropCotton: "ಹತ್ತಿ",
  lblQty: "ಬೆಳೆಯ ಪ್ರಮಾಣ (ಟನ್)",
  phQty: "ಉದಾ. 5.5",
  lblVehicle: "ವಾಹನದ ಪ್ರಕಾರ",
  optSelectVehicle: "-- ವಾಹನ ಆಯ್ಕೆಮಾಡಿ --",
  vehicleTractor: "ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿ",
  vehicleMiniTruck: "ಮಿನಿ ಟ್ರಕ್",
  vehicleHeavyTruck: "ಭಾರಿ ವಾಣಿಜ್ಯ ಟ್ರಕ್",
  btnBookSlot: "ಸ್ಲಾಟ್ ಕಾಯ್ದಿರಿಸಿ ಮತ್ತು ಕ್ಯೂಆರ್ ಪಾಸ್ ರಚಿಸಿ",
  passEyebrow: "ಸುರಕ್ಷಿತ ಪಾಸ್",
  passHeading: "ಡಿಜಿಟಲ್ ಗೇಟ್ ಪಾಸ್",
  slotConfirmed: "ಸ್ಲಾಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
  scanAtGate: "ಪ್ರವೇಶ ದ್ವಾರದಲ್ಲಿ ಈ ಕ್ಯೂಆರ್ ಕೋಡ್ ತೋರಿಸಿ.",
  lblLivePos: "ಪ್ರಸ್ತುತ ಸ್ಥಾನ",
  lblETA: "ಅಂದಾಜು ಸಮಯ",
  lblGrace: "ಹೆಚ್ಚುವರಿ ಸಮಯ",
  btnTTS: "ಸ್ಥಿತಿಯನ್ನು ಕೇಳಿ",
  ttsSpeech: ({ name, mandi, crop, qty, position, eta, vehicle }) =>
    `ನಮಸ್ಕಾರ ${name}. ${vehicle} ವಾಹನದಲ್ಲಿ ${mandi} ಮಂಡಿಯಲ್ಲಿ ${qty} ಟನ್ ${crop}ಗಾಗಿ ನಿಮ್ಮ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ. ಸರತಿಯಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಾನ ${position}. ನಿಮ್ಮ ಅಂದಾಜು ಆಗಮನ ಸಮಯ ${eta}.`
});

function createLanguagePack(values) {
  const english = translations.en;
  return {
    ...english,
    ...values
  };
}

function t(key, variables = {}) {
  const dictionary = translations[currentLang] || translations.en;
  let value = dictionary[key] ?? translations.en[key] ?? key;

  if (typeof value === "function") {
    return value(variables);
  }

  return String(value).replace(/\{(\w+)\}/g, (_, name) => {
    return variables[name] ?? `{${name}}`;
  });
}

function setText(key, value) {
  const element = document.querySelector(`[data-i18n="${key}"]`);
  if (element) {
    element.textContent = value;
  }
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.className = `toast visible ${type}`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 3500);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
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
    timer.textContent = t("otpTimerText", {
      seconds: timer.dataset.seconds || 30
    });
  }

  const scanResult = document.getElementById("scanResult");
  if (scanResult && scanResult.dataset.state === "waiting") {
    scanResult.textContent = t("awaitingGate");
  }

  const smsLogBox = document.getElementById("smsLogBox");
  if (smsLogBox && smsLogBox.children.length === 0) {
    logSMS(t("smsInitialLog"));
  }
}

function switchLanguage() {
  currentLang = document.getElementById("langSelect").value || "en";
  localStorage.setItem("mandiLanguage", currentLang);
  applyTranslations();

  if (generatedTokenData) {
    generateQRCode(generatedTokenData.tokenId);
  }
}

function showModule(moduleId, button) {
  document.querySelectorAll(".module").forEach((module) => {
    module.classList.toggle("active", module.id === moduleId);
  });

  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.toggle("active", tab === button);
  });
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

  generatedTokenData = {
    tokenId: `#MND-${Math.floor(10000 + Math.random() * 90000)}`,
    farmerName: document.getElementById("farmerName").value.trim(),
    mandiRaw: document.getElementById("mandiSelect").value,
    commodityRaw: document.getElementById("commoditySelect").value,
    qty: document.getElementById("produceQty").value,
    vehicleRaw: document.getElementById("vehicleType").value,
    position: 3,
    eta: "10:45 AM",
    grace: 15
  };

  document.getElementById("bookingCard").classList.add("hidden");
  document.getElementById("passCard").classList.remove("hidden");

  updatePassDisplayUI();
  generateQRCode(generatedTokenData.tokenId);

  logSMS(
    `${t("bookingConfirmed")} ${generatedTokenData.tokenId} — ` +
    generatedTokenData.farmerName
  );

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
      Onion: "cropOnion",
      Pulses: "cropPulses",
      Vegetables: "cropVegetables",
      Wheat: "cropWheat",
      Cotton: "cropCotton"
    },
    vehicle: {
      "Tractor Trolley": "vehicleTractor",
      "Mini Truck": "vehicleMiniTruck",
      "Heavy Commercial Truck": "vehicleHeavyTruck"
    }
  };

  const key = keyMap[type]?.[rawValue];
  return key ? t(key) : rawValue;
}

function updatePassDisplayUI() {
  if (!generatedTokenData) {
    return;
  }

  document.getElementById("qrTokenId").textContent =
    generatedTokenData.tokenId;

  document.getElementById("summaryFarmerName").textContent =
    generatedTokenData.farmerName;

  document.getElementById("summaryMandi").textContent =
    getLocalizedValue("mandi", generatedTokenData.mandiRaw);

  document.getElementById("summaryCommodity").textContent =
    getLocalizedValue("crop", generatedTokenData.commodityRaw);

  document.getElementById("summaryQty").textContent =
    `${generatedTokenData.qty} ${t("tons")}`;

  document.getElementById("summaryVehicle").textContent =
    getLocalizedValue("vehicle", generatedTokenData.vehicleRaw);

  document.getElementById("farmerPos").textContent =
    `#${generatedTokenData.position}`;

  document.getElementById("farmerETA").textContent =
    generatedTokenData.eta;

  document.getElementById("farmerGrace").textContent =
    `${generatedTokenData.grace} ${t("minutes")}`;
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
    voices.find((voice) =>
      voice.lang.toLowerCase() === languageCode.toLowerCase()
    ) ||
    voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(languageCode.slice(0, 2))
    ) ||
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
  utterance.pitch = 1;
  utterance.volume = 1;

  if (voice) {
    utterance.voice = voice;
  }

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
}

function toggleCameraScanner() {
  showToast(t("cameraMessage"), "info");
}

function simulateWeighment() {
  const randomWeight = (Math.random() * 6 + 2).toFixed(3);
  document.getElementById("weighValue").textContent =
    `${randomWeight} ${t("tons").toUpperCase()}`;
}

function applyGracePeriod() {
  showToast(t("graceMessage"), "success");
}

function triggerEmergency() {
  showToast(t("emergencyMessage"), "error");
}

function recalculateEngine() {
  const bridges = Math.max(
    1,
    Number.parseInt(document.getElementById("engineBridges").value, 10) || 1
  );

  const factor =
    Number.parseFloat(document.getElementById("shiftStatus").value) || 1;

  const baseMinutes = 20;
  const calculatedMinutes = Math.max(
    1,
    Math.round((baseMinutes / bridges) / factor)
  );

  document.getElementById("engineOutput").textContent = t(
    "calculatedThroughput",
    { minutes: calculatedMinutes }
  );
}

function logSMS(message) {
  const logBox = document.getElementById("smsLogBox");

  if (!logBox) {
    return;
  }

  const entry = document.createElement("div");
  entry.className = "sms-item";

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  entry.textContent = `[${timestamp}] ${message}`;
  logBox.prepend(entry);
}

function bindEvents() {
  document
    .getElementById("langSelect")
    .addEventListener("change", switchLanguage);

  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      showModule(button.dataset.module, button);
    });
  });

  document
    .getElementById("sendOtpBtn")
    .addEventListener("click", sendOTP);

  document
    .getElementById("verifyOtpBtn")
    .addEventListener("click", verifyOTP);

  document
    .getElementById("bookingForm")
    .addEventListener("submit", generateToken);

  document
    .getElementById("ttsBtn")
    .addEventListener("click", triggerVoiceAssistance);

  document
    .getElementById("scanTokenBtn")
    .addEventListener("click", scanToken);

  document
    .getElementById("camToggleBtn")
    .addEventListener("click", toggleCameraScanner);

  document
    .getElementById("weighBtn")
    .addEventListener("click", simulateWeighment);

  document
    .getElementById("graceBtn")
    .addEventListener("click", applyGracePeriod);

  document
    .getElementById("emergencyBtn")
    .addEventListener("click", triggerEmergency);

  document
    .getElementById("engineBridges")
    .addEventListener("input", recalculateEngine);

  document
    .getElementById("shiftStatus")
    .addEventListener("change", recalculateEngine);
}

function initialiseApp() {
  const savedLanguage = localStorage.getItem("mandiLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    currentLang = savedLanguage;
    document.getElementById("langSelect").value = savedLanguage;
  }

  bindEvents();
  applyTranslations();
  logSMS(t("smsInitialLog"));

  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }

  const scanResult = document.getElementById("scanResult");
  scanResult.dataset.state = "waiting";
}

document.addEventListener("DOMContentLoaded", initialiseApp);
