// 1. Full Multi-Lingual Translation Dictionary for 8 Languages
const translations = {
  en: {
    appTitle: "Smart Mandi Engine",
    subTitle: "APMC Dynamic Queue & Pass",
    tabFarmer: "Farmer App",
    tabOfficer: "Officer Desk",
    tabEngine: "Queue Engine",
    tabSms: "SMS Logs",
    farmerPortal: "Farmer Portal & Digital Pass",
    otpHeading: "Kisan OTP Authentication",
    lblPhone: "Mobile Number:",
    phPhone: "Enter 10-digit mobile number",
    sendOtp: "Send OTP",
    otpTimerText: "OTP expires in 30 seconds",
    lblOtpCode: "Verification Code:",
    phOtp: "Enter 4-Digit OTP",
    verifyLogin: "Verify & Login",
    bookSlotHeading: "Book Procurement Slot",
    lblFarmerName: "Farmer Name / ID:",
    phFarmerName: "e.g. Ramesh Patil",
    lblMandi: "Select Mandi Center:",
    optSelectMandi: "-- Select APMC Mandi --",
    lblCommodity: "Commodity Type:",
    optSelectCommodity: "-- Select Commodity --",
    optOnion: "Onion (Kanda)",
    optPulses: "Pulses (Dal)",
    optVeg: "Vegetables",
    optWheat: "Wheat (Gehun)",
    optCotton: "Cotton (Kapas)",
    lblQty: "Produce Quantity (Tons):",
    phQty: "e.g. 5.5",
    lblVehicle: "Vehicle Type:",
    optSelectVehicle: "-- Select Vehicle --",
    optTractor: "Tractor Trolley",
    optMiniTruck: "Mini Truck",
    optHeavyTruck: "Heavy Commercial Truck",
    btnBookSlot: "Book Slot & Generate QR Pass",
    passHeading: "Digital Gate Pass",
    slotConfirmed: "SLOT CONFIRMED",
    lblLivePos: "Live Position",
    lblETA: "Dynamic ETA",
    lblGrace: "Grace Period",
    btnTTS: "🔊 Listen Status (Bhashini Audio)",
    officerDeskTitle: "Mandi Officer Control Desk",
    gatePassHeading: "Gate Pass Verification",
    gatePassDesc: "Scan or enter token ID at Mandi entry gate.",
    phTokenInput: "Enter Token ID (e.g. #MND-84920)",
    btnVerifyEntry: "Verify Entry",
    btnCamScanner: "📷 Open Camera QR Scanner",
    awaitingGate: "Awaiting gate entry verification...",
    weighbridgeHeading: "Automated Weighbridge Station",
    weighbridgeDesc: "Simulate live weight scale input from IoT sensor.",
    btnCaptureWeight: "Capture Weight from Scale",
    exceptionsHeading: "Queue Exceptions & Controls",
    btnGrantGrace: "Grant 15-min Buffer",
    btnPauseGate: "Pause Gate Entry",
    engineTitle: "Queue Processing Engine",
    engineHeading: "Capacity & Speed Adjuster",
    lblActiveBridges: "Active Weighbridges:",
    lblShiftFactor: "Shift Efficiency Factor:",
    optNormalSpeed: "Normal Speed (100%)",
    optPeakSpeed: "Peak Rush (150%)",
    optSlowSpeed: "Lunch Break / Slow (70%)",
    lblThroughput: "Calculated System Throughput:",
    activeStatusHeading: "Active Mandi Status",
    lblInQueue: "In Queue",
    lblAvgWait: "Avg Wait",
    lblClearedToday: "Cleared Today",
    smsTitle: "SMS Gateway & Broadcast Logs",
    smsHeading: "Live Telephony Logs",
    smsInitialLog: "[SYSTEM]: Mandi Queue Engine Initialized...",
    unitTons: "Tons",
    unitMins: "mins",
    unitVehicles: "Vehicles",
    "Nashik Main APMC": "Nashik Main APMC",
    "Lasalgaon Mandi": "Lasalgaon Mandi",
    "Pune Market Yard": "Pune Market Yard",
    "Nagpur APMC Hub": "Nagpur APMC Hub",
    "Onion (Kanda)": "Onion (Kanda)",
    "Pulses (Dal)": "Pulses (Dal)",
    "Vegetables": "Vegetables",
    "Wheat (Gehun)": "Wheat (Gehun)",
    "Cotton (Kapas)": "Cotton (Kapas)",
    "Tractor Trolley": "Tractor Trolley",
    "Mini Truck": "Mini Truck",
    "Heavy Commercial Truck": "Heavy Commercial Truck",
    posInLine: "#3 in line"
  },
  hi: {
    appTitle: "स्मार्ट मंडी इंजन",
    subTitle: "एपीएमसी डायनामिक कतार एवं पास",
    tabFarmer: "किसान ऐप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "कतार इंजन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल एवं डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    lblPhone: "मोबाइल नंबर:",
    phPhone: "10 अंकों का मोबाइल नंबर दर्ज करें",
    sendOtp: "ओटीपी भेजें",
    otpTimerText: "ओटीपी 30 सेकंड में समाप्त होगा",
    lblOtpCode: "सत्यापन कोड:",
    phOtp: "4 अंकों का ओटीपी दर्ज करें",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    bookSlotHeading: "खरीद स्लॉट बुक करें",
    lblFarmerName: "किसान का नाम / आईडी:",
    phFarmerName: "जैसे रमेश पाटिल",
    lblMandi: "मंडी केंद्र चुनें:",
    optSelectMandi: "-- एपीएमसी मंडी चुनें --",
    lblCommodity: "फसल का प्रकार:",
    optSelectCommodity: "-- फसल चुनें --",
    optOnion: "प्याज",
    optPulses: "दालें",
    optVeg: "सब्जियां",
    optWheat: "गेहूं",
    optCotton: "कपास",
    lblQty: "मात्रा (टन):",
    phQty: "जैसे 5.5",
    lblVehicle: "वाहन का प्रकार:",
    optSelectVehicle: "-- वाहन चुनें --",
    optTractor: "ट्रैक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "भारी व्यावसायिक ट्रक",
    btnBookSlot: "स्लॉट बुक करें और क्यूआर पास बनाएं",
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट पुष्ट हो गया",
    lblLivePos: "लाइव स्थिति",
    lblETA: "अनुमानित समय",
    lblGrace: "छूट समय",
    btnTTS: "🔊 स्थिति सुनें (भाषिणी ऑडियो)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    gatePassHeading: "गेट पास सत्यापन",
    gatePassDesc: "मंडी प्रवेश द्वार पर टोकन आईडी स्कैन या दर्ज करें।",
    phTokenInput: "टोकन आईडी दर्ज करें (जैसे #MND-84920)",
    btnVerifyEntry: "प्रवेश सत्यापित करें",
    btnCamScanner: "📷 कैमरा क्यूआर स्कैनर खोलें",
    awaitingGate: "गेट प्रवेश सत्यापन की प्रतीक्षा है...",
    weighbridgeHeading: "स्वचालित धर्मकांटा (वेब्रिज) स्टेशन",
    weighbridgeDesc: "IoT सेंसर से लाइव वजन इनपुट का अनुकरण करें।",
    btnCaptureWeight: "कांटे से वजन दर्ज करें",
    exceptionsHeading: "कतार अपवाद एवं नियंत्रण",
    btnGrantGrace: "15 मिनट की छूट दें",
    btnPauseGate: "गेट प्रवेश रोकें",
    engineTitle: "कतार प्रसंस्करण इंजन",
    engineHeading: "क्षमता एवं गति समायोजक",
    lblActiveBridges: "सक्रिय धर्मकांटे:",
    lblShiftFactor: "शिफ्ट दक्षता कारक:",
    optNormalSpeed: "सामान्य गति (100%)",
    optPeakSpeed: "अत्यधिक भीड़ (150%)",
    optSlowSpeed: "लंच ब्रेक / धीमी गति (70%)",
    lblThroughput: "गणना की गई प्रणाली क्षमता:",
    activeStatusHeading: "सक्रिय मंडी स्थिति",
    lblInQueue: "कतार में",
    lblAvgWait: "औसत प्रतीक्षा",
    lblClearedToday: "आज क्लियर किया गया",
    smsTitle: "एसएमएस गेटवे और प्रसारण लॉग",
    smsHeading: "लाइव टेलीफोनी लॉग",
    smsInitialLog: "[सिस्टम]: मंडी कतार इंजन प्रारंभ हुआ...",
    unitTons: "टन",
    unitMins: "मिनट",
    unitVehicles: "वाहन",
    "Nashik Main APMC": "नासिक मुख्य एपीएमसी",
    "Lasalgaon Mandi": "लासलगांव मंडी",
    "Pune Market Yard": "पुणे मार्केट यार्ड",
    "Nagpur APMC Hub": "नागपुर एपीएमसी हब",
    "Onion (Kanda)": "प्याज",
    "Pulses (Dal)": "दालें",
    "Vegetables": "सब्जियां",
    "Wheat (Gehun)": "गेहूं",
    "Cotton (Kapas)": "कपास",
    "Tractor Trolley": "ट्रैक्टर ट्रॉली",
    "Mini Truck": "मिनी ट्रक",
    "Heavy Commercial Truck": "भारी व्यावसायिक ट्रक",
    posInLine: "कतार में #3"
  },
  mr: {
    appTitle: "स्मार्ट मंडी इंजिन",
    subTitle: "एपीएमसी डायनामिक रांग आणि पास",
    tabFarmer: "शेतकरी ॲप",
    tabOfficer: "अधिकारी डेस्क",
    tabEngine: "रांग इंजिन",
    tabSms: "एसएमएस लॉग",
    farmerPortal: "शेतकरी पोर्टल आणि डिजिटल पास",
    otpHeading: "किसान ओटीपी प्रमाणीकरण",
    lblPhone: "मोबाईल नंबर:",
    phPhone: "१० अंकी मोबाईल नंबर टाका",
    sendOtp: "ओटीपी पाठवा",
    otpTimerText: "ओटीपी ३० सेकंदात कालबाह्य होईल",
    lblOtpCode: "सत्यापन कोड:",
    phOtp: "४ अंकी ओटीपी टाका",
    verifyLogin: "सत्यापित करा आणि लॉग इन करा",
    bookSlotHeading: "खरेदी स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचे नाव / ओळख:",
    phFarmerName: "उदा. रमेश पाटील",
    lblMandi: "मंडी केंद्र निवडा:",
    optSelectMandi: "-- एपीएमसी मंडी निवडा --",
    lblCommodity: "शेतीमाल प्रकार:",
    optSelectCommodity: "-- शेतीमाल निवडा --",
    optOnion: "कांदा",
    optPulses: "डाळी",
    optVeg: "भाज्या",
    optWheat: "गहू",
    optCotton: "कापूस",
    lblQty: "प्रमाण (टन):",
    phQty: "उदा. ५.५",
    lblVehicle: "वाहनाचा प्रकार:",
    optSelectVehicle: "-- वाहन निवडा --",
    optTractor: "ट्रॅक्टर ट्रॉली",
    optMiniTruck: "मिनी ट्रक",
    optHeavyTruck: "जड व्यावसायिक ट्रक",
    btnBookSlot: "स्लॉट बुक करा आणि QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    slotConfirmed: "स्लॉट निश्चित झाला",
    lblLivePos: "थेट स्थान",
    lblETA: "अंदाजे वेळ",
    lblGrace: "सवलत वेळ",
    btnTTS: "🔊 स्थिती ऐका (भाषिणी ऑडिओ)",
    officerDeskTitle: "मंडी अधिकारी नियंत्रण डेस्क",
    gatePassHeading: "गेट पास पडताळणी",
    gatePassDesc: "मंडी प्रवेश द्वारावर टोकन आयडी स्कॅन किंवा प्रविष्ट करा.",
    phTokenInput: "टोकन आयडी टाका (उदा. #MND-84920)",
    btnVerifyEntry: "प्रवेश सत्यापित करा",
    btnCamScanner: "📷 कॅमेरा QR स्कॅनर उघडा",
    awaitingGate: "गेट प्रवेश पडताळणीची प्रतीक्षा करत आहे...",
    weighbridgeHeading: "स्वयंचलित वजनकाटा स्टेशन",
    weighbridgeDesc: "IoT सेन्सरवरून थेट वजन मोजण्याचे अनुकरण करा.",
    btnCaptureWeight: "काट्यावरून वजन नोंदवा",
    exceptionsHeading: "रांग अपवाद आणि नियंत्रणे",
    btnGrantGrace: "१५ मिनिटांची मुदत वाढवा",
    btnPauseGate: "गेट प्रवेश थांबवा",
    engineTitle: "रांग प्रक्रिया इंजिन",
    engineHeading: "क्षमता आणि वेग समायोजक",
    lblActiveBridges: "सक्रिय वजनकाटे:",
    lblShiftFactor: "शिफ्ट कार्यक्षमता घटक:",
    optNormalSpeed: "सामान्य वेग (१००%)",
    optPeakSpeed: "अति गर्दी (१५०%)",
    optSlowSpeed: "लंच ब्रेक / मंद (७०%)",
    lblThroughput: "गणना केलेली प्रणाली क्षमता:",
    activeStatusHeading: "सक्रिय मंडी स्थिती",
    lblInQueue: "रांगेत",
    lblAvgWait: "सरासरी वाट पाहण्याची वेळ",
    lblClearedToday: "आज मंजूर केलेले",
    smsTitle: "एसएमएस गेटवे आणि ब्रॉडकास्ट लॉग",
    smsHeading: "थेट टेलिफोनी लॉग",
    smsInitialLog: "[सिस्टम]: मंडी रांग इंजिन सुरू झाले...",
    unitTons: "टन",
    unitMins: "मिस",
    unitVehicles: "वाहने",
    "Nashik Main APMC": "नाशिक मुख्य एपीएमसी",
    "Lasalgaon Mandi": "लासलगाव मंडी",
    "Pune Market Yard": "पुणे मार्केट यार्ड",
    "Nagpur APMC Hub": "नागपूर एपीएमसी हब",
    "Onion (Kanda)": "कांदा",
    "Pulses (Dal)": "डाळी",
    "Vegetables": "भाज्या",
    "Wheat (Gehun)": "गहू",
    "Cotton (Kapas)": "कापूस",
    "Tractor Trolley": "ट्रॅक्टर ट्रॉली",
    "Mini Truck": "मिनी ट्रक",
    "Heavy Commercial Truck": "जड व्यावसायिक ट्रक",
    posInLine: "रांगेत #३"
  },
  te: {
    appTitle: "స్మార్ట్ మండి ఇంజిన్",
    subTitle: "APMC డైనమిక్ క్యూ & పాస్",
    tabFarmer: "రైతు యాప్",
    tabOfficer: "అధికారి డెస్క్",
    tabEngine: "క్యూ ఇంజిన్",
    tabSms: "SMS లాగ్‌లు",
    farmerPortal: "రైతు పోర్టల్ & డిజిటల్ పాస్",
    otpHeading: "కిసాన్ OTP ప్రామాణీకరణ",
    lblPhone: "మొబైల్ నంబర్:",
    phPhone: "10 అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి",
    sendOtp: "OTP పంపండి",
    otpTimerText: "OTP 30 సెకన్లలో ముగుస్తుంది",
    lblOtpCode: "ధృవీకరణ కోడ్:",
    phOtp: "4 అంకెల OTP ని నమోదు చేయండి",
    verifyLogin: "ధృవీకరించి లాగిన్ చేయండి",
    bookSlotHeading: "కొనుగోలు స్లాట్‌ను బుక్ చేయండి",
    lblFarmerName: "రైతు పేరు / ID:",
    phFarmerName: "ఉదా. రమేష్ పాటిల్",
    lblMandi: "మండి కేంద్రాన్ని ఎంచుకోండి:",
    optSelectMandi: "-- APMC మండిని ఎంచుకోండి --",
    lblCommodity: "సరుకు రకం:",
    optSelectCommodity: "-- సరుకును ఎంచుకోండి --",
    optOnion: "ఉల్లిపాయలు",
    optPulses: "పప్పుధాన్యాలు",
    optVeg: "కూరగాయలు",
    optWheat: "గోధుమలు",
    optCotton: "పత్తి",
    lblQty: "పరిమాణం (టన్నులు):",
    phQty: "ఉదా. 5.5",
    lblVehicle: "వాహనం రకం:",
    optSelectVehicle: "-- వాహనాన్ని ఎంచుకోండి --",
    optTractor: "ట్రాక్టర్ ట్రాలీ",
    optMiniTruck: "మిని ట్రక్",
    optHeavyTruck: "హెవీ కమర్షియల్ ట్రక్",
    btnBookSlot: "స్లాట్ బుక్ చేయండి & QR పాస్ జనరేట్ చేయండి",
    passHeading: "డిజిటల్ గేట్ పాస్",
    slotConfirmed: "స్లాట్ నిర్ధారించబడింది",
    lblLivePos: "లైవ్ స్థానం",
    lblETA: "అంచనా సమయం",
    lblGrace: "మినహాయింపు సమయం",
    btnTTS: "🔊 స్థితిని వినండి (భాషిణి ఆడియో)",
    officerDeskTitle: "మండి అధికారి నియంత్రణ డెస్క్",
    gatePassHeading: "గేట్ పాస్ ధృవీకరణ",
    gatePassDesc: "ఎంట్రీ గేట్ వద్ద టోకెన్ ID ని స్కాన్ చేయండి.",
    phTokenInput: "టోకెన్ ID ని నమోదు చేయండి (ఉదా. #MND-84920)",
    btnVerifyEntry: "ఎంట్రీని ధృవీకరించండి",
    btnCamScanner: "📷 కెమెరా QR స్కానర్ తెరవండి",
    awaitingGate: "గేట్ ఎంట్రీ ధృవీకరణ కోసం వేచి ఉంది...",
    weighbridgeHeading: "ఆటోమేటెడ్ వేబ్రిడ్జ్ స్టేషన్",
    weighbridgeDesc: "IoT సెన్సార్ నుండి లైవ్ వెయిట్ మానిటరింగ్.",
    btnCaptureWeight: "బరువును నమోదు చేయండి",
    exceptionsHeading: "క్యూ మినహాయింపులు & నియంత్రణలు",
    btnGrantGrace: "15 నిమిషాల సమయం ఇవ్వండి",
    btnPauseGate: "గేట్ ఎంట్రీని ఆపండి",
    engineTitle: "క్యూ ప్రాసెసింగ్ ఇంజిన్",
    engineHeading: "సామర్థ్య నియంత్రణ",
    lblActiveBridges: "యాక్టివ్ వేబ్రిడ్జ్‌లు:",
    lblShiftFactor: "షిఫ్ట్ పనితీరు:",
    optNormalSpeed: "సాధారణ వేగం (100%)",
    optPeakSpeed: "ఎక్కువ రద్దీ (150%)",
    optSlowSpeed: "లంచ్ బ్రేక్ / నెమ్మదిగా (70%)",
    lblThroughput: "లెక్కించబడిన సిస్టమ్ సామర్థ్యం:",
    activeStatusHeading: "యాక్టివ్ మండి స్థితి",
    lblInQueue: "క్యూలో ఉంది",
    lblAvgWait: "సగటు వేచి ఉండే సమయం",
    lblClearedToday: "ఈరోజు పూర్తయినవి",
    smsTitle: "SMS గేట్‌వే లాగ్‌లు",
    smsHeading: "లైవ్ టెలిఫోనీ లాగ్‌లు",
    smsInitialLog: "[సిస్టమ్]: మండి క్యూ ఇంజిన్ ప్రారంభించబడింది...",
    unitTons: "టన్నులు",
    unitMins: "నిమిషాలు",
    unitVehicles: "వాహనాలు",
    "Nashik Main APMC": "నాసిక్ మెయిన్ APMC",
    "Lasalgaon Mandi": "లాసల్‌గావ్ మండి",
    "Pune Market Yard": "పూణే మార్కెట్ యార్డ్",
    "Nagpur APMC Hub": "నాగ్‌పూర్ APMC హబ్",
    "Onion (Kanda)": "ఉల్లిపాయలు",
    "Pulses (Dal)": "పప్పుధాన్యాలు",
    "Vegetables": "కూరగాయలు",
    "Wheat (Gehun)": "గోధుమలు",
    "Cotton (Kapas)": "పత్తి",
    "Tractor Trolley": "ట్రాక్టర్ ట్రాలీ",
    "Mini Truck": "మిని ట్రక్",
    "Heavy Commercial Truck": "హెవీ కమర్షియల్ ట్రక్",
    posInLine: "క్యూలో #3"
  },
  ta: {
    appTitle: "స్మార్ట్ మండీ ఇంజిన్",
    subTitle: "APMC డైనమిక్ క్యూ & పాస్",
    tabFarmer: "விவசாயி செயலி",
    tabOfficer: "அதிகாரி డెస్క్",
    tabEngine: "வரிசை ఇంజిన్",
    tabSms: "SMS பதிவுகள்",
    farmerPortal: "விவசாயி ಪೋರ್ಟಲ್ & డిజిటల్ పాస్",
    otpHeading: "கிசான் OTP சரிபார்ப்பு",
    lblPhone: "மொபைல் எண்:",
    phPhone: "10 இலக்க மொபைல் எண்ணை உள்ளிடவும்",
    sendOtp: "OTP அனுப்பு",
    otpTimerText: "OTP 30 வினாடிகளில் காலாவதியாகும்",
    lblOtpCode: "சரிபார்ப்புக் குறியீடு:",
    phOtp: "4 இலக்க OTP ஐ உள்ளிடவும்",
    verifyLogin: "சரிபார்த்து உள்நுழைக",
    bookSlotHeading: "கொள்முதல் நேரத்தை முன்பதிவு செய்க",
    lblFarmerName: "விவசாயி பெயர் / ஐடி:",
    phFarmerName: "எ.கா. ரமேஷ் பாட்டீல்",
    lblMandi: "மண்டி மையத்தைத் தேர்ந்தெடுக்கவும்:",
    optSelectMandi: "-- APMC மண்டியைத் தேர்ந்தெடுக்கவும் --",
    lblCommodity: "பொருள் வகை:",
    optSelectCommodity: "-- பொருளைத் தேர்ந்தெடுக்கவும் --",
    optOnion: "வெங்காயம்",
    optPulses: "பருப்பு வகைகள்",
    optVeg: "காய்கறிகள்",
    optWheat: "கோதுமை",
    optCotton: "பருத்தி",
    lblQty: "அளவு (டன்கள்):",
    phQty: "எ.கா. 5.5",
    lblVehicle: "வாகன வகை:",
    optSelectVehicle: "-- வாகனத்தைத் தேர்ந்தெடுக்கவும் --",
    optTractor: "டிராக்டர் டிராலி",
    optMiniTruck: "மினி டிரக்",
    optHeavyTruck: "கனரக வர்த்தக டிரக்",
    btnBookSlot: "முன்பதிவு செய்து QR பாஸ் பெறுக",
    passHeading: "டிஜிட்டல் கேட் பாஸ்",
    slotConfirmed: "முன்பதிவு உறுதிசெய்யப்பட்டது",
    lblLivePos: "நேரலை நிலை",
    lblETA: "எதிர்பார்க்கப்படும் நேரம்",
    lblGrace: "சலுகை நேரம்",
    btnTTS: "🔊 நிலையைக் கேட்கவும் (பாஷிணி ஆடியோ)",
    officerDeskTitle: "மண்டி அதிகாரி கட்டுப்பாட்டு மையம்",
    gatePassHeading: "கேட் பாஸ் சரிபார்ப்பு",
    gatePassDesc: "நுழைவு வாயிலில் டோக்கன் ஐடியை ஸ்கேன் செய்யவும்.",
    phTokenInput: "டோக்கன் ஐடியை உள்ளிடவும் (எ.கா. #MND-84920)",
    btnVerifyEntry: "நுழைவைச் சரிபார்",
    btnCamScanner: "📷 கேமரா QR ஸ்கேனரைத் திறக்கவும்",
    awaitingGate: "நுழைவுச் சரிபார்ப்பிற்காகக் காத்திருக்கிறது...",
    weighbridgeHeading: "தானியங்கி எடைமேடை நிலையம்",
    weighbridgeDesc: "IoT சென்சாரிலிருந்து நேரலை எடையைப் பெறுக.",
    btnCaptureWeight: "எடையைப் பதிவுசெய்",
    exceptionsHeading: "வரிசைக் கட்டுப்பாடுகள்",
    btnGrantGrace: "15 நிமிட கூடுதல் நேரம் வழங்கு",
    btnPauseGate: "நுழைவை நிறுத்து",
    engineTitle: "வரிசை செயலாக்க எஞ்சின்",
    engineHeading: "வேகக் கட்டுப்பாடு",
    lblActiveBridges: "செயலில் உள்ள எடைமேடைகள்:",
    lblShiftFactor: "வேகக் காரணி:",
    optNormalSpeed: "சாதாரண வேகம் (100%)",
    optPeakSpeed: "அதிக கூட்டம் (150%)",
    optSlowSpeed: "உணவு இடைவேளை / மெதுவாக (70%)",
    lblThroughput: "கணக்கிடப்பட்ட கணினி வேகம்:",
    activeStatusHeading: "செயலில் உள்ள மண்டி நிலை",
    lblInQueue: "வரிசையில்",
    lblAvgWait: "சராசரி காத்திருப்பு",
    lblClearedToday: "இன்று முடிக்கப்பட்டது",
    smsTitle: "SMS பதிவுகள்",
    smsHeading: "நேரலை தொலைபேசி பதிவுகள்",
    smsInitialLog: "[கணினி]: மண்டி வரிசை எஞ்சின் தொடங்கியது...",
    unitTons: "டன்கள்",
    unitMins: "நிமிடங்கள்",
    unitVehicles: "வாகனங்கள்",
    "Nashik Main APMC": "நாசிக் மெயின் APMC",
    "Lasalgaon Mandi": "லாசல்கான் மண்டி",
    "Pune Market Yard": "புனே மார்க்கெட் யார்டு",
    "Nagpur APMC Hub": "நாக்பூர் APMC ஹப்",
    "Onion (Kanda)": "வெங்காயம்",
    "Pulses (Dal)": "பருப்பு வகைகள்",
    "Vegetables": "காய்கறிகள்",
    "Wheat (Gehun)": "கோதுமை",
    "Cotton (Kapas)": "பருத்தி",
    "Tractor Trolley": "டிராக்டர் டிராலி",
    "Mini Truck": "மினி டிரக்",
    "Heavy Commercial Truck": "கனரக வர்த்தக டிரக்",
    posInLine: "வரிசையில் #3"
  },
  bn: {
    appTitle: "স্মার্ট মান্ডি ইঞ্জিন",
    subTitle: "APMC ডায়নামিক ক্যু এবং পাস",
    tabFarmer: "কৃষক অ্যাপ",
    tabOfficer: "অফিসার ডেস্ক",
    tabEngine: "কিউ ইঞ্জিন",
    tabSms: "এসএমএস লগ",
    farmerPortal: "কৃষক পোর্টাল এবং ডিজিটাল পাস",
    otpHeading: "কিসান ওটিপি প্রমাণীকরণ",
    lblPhone: "মোবাইল নম্বর:",
    phPhone: "১০ সংখ্যার মোবাইল নম্বর লিখুন",
    sendOtp: "ওটিপি পাঠান",
    otpTimerText: "ওটিপির মেয়াদ ৩০ সেকেন্ডে শেষ হবে",
    lblOtpCode: "যাচাইকরণ কোড:",
    phOtp: "৪ সংখ্যার ওটিপি লিখুন",
    verifyLogin: "যাচাই করুন এবং লগইন করুন",
    bookSlotHeading: "সংগ্রহের স্লট বুক করুন",
    lblFarmerName: "কৃষকের নাম / আইডি:",
    phFarmerName: "যেমন রমেশ পাতিল",
    lblMandi: "মান্ডি কেন্দ্র নির্বাচন করুন:",
    optSelectMandi: "-- APMC মান্ডি নির্বাচন করুন --",
    lblCommodity: "ফসলের ধরন:",
    optSelectCommodity: "-- ফসল নির্বাচন করুন --",
    optOnion: "পিঁয়াজ",
    optPulses: "ডাল",
    optVeg: "শাকসবজি",
    optWheat: "গম",
    optCotton: "তুলা",
    lblQty: "পরিমাণ (টন):",
    phQty: "যেমন ৫.৫",
    lblVehicle: "গাড়ির ধরন:",
    optSelectVehicle: "-- গাড়ি নির্বাচন করুন --",
    optTractor: "ট্রাক্টর ট্রলি",
    optMiniTruck: "মিনি ট্রাক",
    optHeavyTruck: "ভারী কমার্শিয়াল ট্রাক",
    btnBookSlot: "স্লট বুক করুন এবং QR পাস তৈরি করুন",
    passHeading: "ডিজিটাল গেট পাস",
    slotConfirmed: "স্লট নিশ্চিত হয়েছে",
    lblLivePos: "লাইভ অবস্থান",
    lblETA: "আনুমানিক সময়",
    lblGrace: "ছাড়ের সময়",
    btnTTS: "🔊 অবস্থা শুনুন (ভাষিণী অডিও)",
    officerDeskTitle: "মান্ডি অফিসার কন্ট্রোল ডেস্ক",
    gatePassHeading: "গেট পাস যাচাইকরণ",
    gatePassDesc: "প্রবেশদ্বারে টোকেন আইডি স্ক্যান করুন।",
    phTokenInput: "টোকেন আইডি লিখুন (যেমন #MND-84920)",
    btnVerifyEntry: "প্রবেশ যাচাই করুন",
    btnCamScanner: "📷 ক্যামেরা কিউআর স্ক্যানার খুলুন",
    awaitingGate: "গেটে প্রবেশের যাচাইকরণের জন্য অপেক্ষমান...",
    weighbridgeHeading: "স্বয়ংক্রিয় ওয়েব্রিজ স্টেশন",
    weighbridgeDesc: "IoT সেন্সর থেকে লাইভ ওজন সেন্সিং।",
    btnCaptureWeight: "স্কেল থেকে ওজন সংগ্রহ করুন",
    exceptionsHeading: "কিউ ব্যতিক্রম এবং নিয়ন্ত্রণ",
    btnGrantGrace: "১৫ মিনিটের অতিরিক্ত সময় দিন",
    btnPauseGate: "গেট প্রবেশ বন্ধ করুন",
    engineTitle: "কিউ প্রসেসিং ইঞ্জিন",
    engineHeading: "ক্ষমতা এবং গতি সামঞ্জস্যকারী",
    lblActiveBridges: "সক্রিয় ওয়েব্রিজ:",
    lblShiftFactor: "শিফট দক্ষতা গুণক:",
    optNormalSpeed: "স্বাভাবিক গতি (১০০%)",
    optPeakSpeed: "অতিরিক্ত ভিড় (১৫০%)",
    optSlowSpeed: "লাঞ্চ ব্রেক / ধীর গতি (৭০%)",
    lblThroughput: "গণনাকৃত সিস্টেমের গতি:",
    activeStatusHeading: "সক্রিয় মান্ডির অবস্থা",
    lblInQueue: "লাইনে আছে",
    lblAvgWait: "গড় অপেক্ষার সময়",
    lblClearedToday: "আজ সম্পন্ন হয়েছে",
    smsTitle: "এসএমএস লগ",
    smsHeading: "লাইভ টেলিফোনি লগ",
    smsInitialLog: "[সিস্টেম]: মান্ডি কিউ ইঞ্জিন চালু হয়েছে...",
    unitTons: "টন",
    unitMins: "মিনিট",
    unitVehicles: "যানবাহন",
    "Nashik Main APMC": "নাসিক মেইন APMC",
    "Lasalgaon Mandi": "লাসালগাঁও মান্ডি",
    "Pune Market Yard": "পুনে মার্কেট ইয়ার্ড",
    "Nagpur APMC Hub": "নাগপুর APMC হাব",
    "Onion (Kanda)": "পিঁয়াজ",
    "Pulses (Dal)": "ডাল",
    "Vegetables": "শাকসবজি",
    "Wheat (Gehun)": "গম",
    "Cotton (Kapas)": "তুলা",
    "Tractor Trolley": "ট্রাক্টর ট্রলি",
    "Mini Truck": "মিনি ট্রাক",
    "Heavy Commercial Truck": "ভারী কমার্শিয়াল ট্রাক",
    posInLine: "লাইনে #৩"
  },
  gu: {
    appTitle: "સ્માર્ટ મંડી એન્જિન",
    subTitle: "APMC ડાયનેમિક ક્યૂ અને પાસ",
    tabFarmer: "ખેડૂત એપ",
    tabOfficer: "અધિકારી ડેસ્ક",
    tabEngine: "ક્યૂ એન્જિન",
    tabSms: "SMS લોગ",
    farmerPortal: "ખેડૂત પોર્ટલ અને ડિજિટલ પાસ",
    otpHeading: "કિસાાન OTP પ્રમાણીકરણ",
    lblPhone: "મોબાઈલ નંબર:",
    phPhone: "10 અંકનો મોબાઈલ નંબર દાખલ કરો",
    sendOtp: "OTP મોકલો",
    otpTimerText: "OTP 30 સેકન્ડમાં સમાપ્ત થશે",
    lblOtpCode: "ચકાસણી કોડ:",
    phOtp: "4 અંકનો OTP દાખલ કરો",
    verifyLogin: "ચકાસો અને લોગિન કરો",
    bookSlotHeading: "ખરીદી સ્લોટ બુક કરો",
    lblFarmerName: "ખેડૂતનું નામ / ID:",
    phFarmerName: "જેમ કે રમેશ પાટીલ",
    lblMandi: "મંડી કેન્દ્ર પસંદ કરો:",
    optSelectMandi: "-- APMC મંડી પસંદ કરો --",
    lblCommodity: "પાકનો પ્રકાર:",
    optSelectCommodity: "-- પાક પસંદ કરો --",
    optOnion: "ડુંગળી",
    optPulses: "કઠોળ",
    optVeg: "શાકભાજી",
    optWheat: "ઘઉં",
    optCotton: "કપાસ",
    lblQty: "જથ્થો (ટન):",
    phQty: "જેમ કે 5.5",
    lblVehicle: "વાહનનો પ્રકાર:",
    optSelectVehicle: "-- વાહન પસંદ કરો --",
    optTractor: "ટ્રેક્ટર ટ્રોલી",
    optMiniTruck: "મિની ટ્રક",
    optHeavyTruck: "ભારે કોમર્શિયલ ટ્રક",
    btnBookSlot: "સ્લોટ બુક કરો અને QR પાસ બનાવો",
    passHeading: "ડિજિટલ ગેટ પાસ",
    slotConfirmed: "સ્લોટ કન્ફર્મ થયો",
    lblLivePos: "લાઇવ સ્થિતિ",
    lblETA: "અંદાજિત સમય",
    lblGrace: "છૂટછાટનો સમય",
    btnTTS: "🔊 સ્થિતિ સાંભળો (ભાષિણી ઓડિયો)",
    officerDeskTitle: "મંડી અધિકારી નિયંત્રણ ડેસ્ક",
    gatePassHeading: "ગેટ પાસ ચકાસણી",
    gatePassDesc: "પ્રવેશદ્વાર પર ટોકન ID સ્કેન કરો.",
    phTokenInput: "ટોકન ID દાખલ કરો (જેમ કે #MND-84920)",
    btnVerifyEntry: "પ્રવેશ ચકાસો",
    btnCamScanner: "📷 કેમેરા QR સ્કેનર ખોલો",
    awaitingGate: "ગેટ પ્રવેશ ચકાસણીની રાહ જોઈ રહ્યું છે...",
    weighbridgeHeading: "ઓટોમેટેડ વેબ્રિજ સ્ટેશન",
    weighbridgeDesc: "IoT સેન્સરથી લાઈવ વજન ઇનપુટ મેળવો.",
    btnCaptureWeight: "કાંટા પરથી વજન નોંધો",
    exceptionsHeading: "ક્યૂ અપવાદો અને નિયંત્રણો",
    btnGrantGrace: "15 મિનિટનો વધારાનો સમય આપો",
    btnPauseGate: "ગેટ પ્રવેશ રોકો",
    engineTitle: "ક્યૂ પ્રોસેસિંગ એન્જિન",
    engineHeading: "ક્ષમતા અને સ્પીડ એડજસ્ટર",
    lblActiveBridges: "સક્રિય વેબ્રિજ:",
    lblShiftFactor: "શિફ્ટ કાર્યક્ષમતા અવર અવરોધ:",
    optNormalSpeed: "સામાન્ય ઝડપ (100%)",
    optPeakSpeed: "વધારે પડતી ભીડ (150%)",
    optSlowSpeed: "લંચ બ્રેક / ધીમી ઝડપ (70%)",
    lblThroughput: "ગણતરી કરેલ સિસ્ટમ ઝડપ:",
    activeStatusHeading: "સક્રિય મંડી સ્થિતિ",
    lblInQueue: "લાઇનમાં છે",
    lblAvgWait: "સરેરાશ રાહ જોવાનો સમય",
    lblClearedToday: "આજે પૂર્ણ થયેલ",
    smsTitle: "SMS લોગ",
    smsHeading: "લાઇવ ટેલિફોની લોગ",
    smsInitialLog: "[સિસ્ટમ]: મંડી ક્યૂ એન્જિન શરૂ થયું...",
    unitTons: "ટન",
    unitMins: "મિનિટ",
    unitVehicles: "વાહનો",
    "Nashik Main APMC": "નાસિક મેઈન APMC",
    "Lasalgaon Mandi": "લાસલગામ મંડી",
    "Pune Market Yard": "પુણે માર્કેટ યાર્ડ",
    "Nagpur APMC Hub": "નાગપુર APMC હબ",
    "Onion (Kanda)": "ડુંગળી",
    "Pulses (Dal)": "કઠોળ",
    "Vegetables": "શાકભાજી",
    "Wheat (Gehun)": "ઘઉં",
    "Cotton (Kapas)": "કપાસ",
    "Tractor Trolley": "ટ્રેક્ટર ટ્રોલી",
    "Mini Truck": "મિની ટ્રક",
    "Heavy Commercial Truck": "ભારે કોમર્શિયલ ટ્રક",
    posInLine: "લાઇનમાં #3"
  },
  kn: {
    appTitle: "ಸ್ಮಾರ್ಟ್ ಮಂಡಿ ಎಂಜಿನ್",
    subTitle: "APMC ಡೈನಾಮಿಕ್ ಕ್ಯೂ & ಪಾಸ್",
    tabFarmer: "ರೈತ ಆಪ್",
    tabOfficer: "ಅಧಿಕಾರಿ ಡೆಸ್ಕ್",
    tabEngine: "ಕ್ಯೂ ಎಂಜಿನ್",
    tabSms: "SMS ಲಾಗ್‌ಗಳು",
    farmerPortal: "ರೈತ ಪೋರ್ಟಲ್ & ಡಿಜಿಟಲ್ ಪಾಸ್",
    otpHeading: "ಕಿಸಾನ್ OTP ದೃಢೀಕರಣ",
    lblPhone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:",
    phPhone: "10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    sendOtp: "OTP ಕಳುಹಿಸಿ",
    otpTimerText: "OTP 30 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ",
    lblOtpCode: "ದೃಢೀಕರಣ ಕೋಡ್:",
    phOtp: "4 ಅಂಕಿಗಳ OTP ನಮೂದಿಸಿ",
    verifyLogin: "ದೃಢೀಕರಿಸಿ & ಲಾಗಿನ್ ಆಗಿ",
    bookSlotHeading: "ಖರೀದಿ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    lblFarmerName: "ರೈತನ ಹೆಸರು / ID:",
    phFarmerName: "ಉದಾ. ರಮೇಶ್ ಪಾಟೀಲ್",
    lblMandi: "ಮಂಡಿ ಕೇಂದ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    optSelectMandi: "-- APMC ಮಂಡಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
    lblCommodity: "ಬೆಳೆಯ ಪ್ರಕಾರ:",
    optSelectCommodity: "-- ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
    optOnion: "ಈರುಳ್ಳಿ",
    optPulses: "ಬೇಳೆಕಾಳುಗಳು",
    optVeg: "ತರಕಾರಿಗಳು",
    optWheat: "ಗೋಧಿ",
    optCotton: "ಹತ್ತಿ",
    lblQty: "ಪ್ರಮಾಣ (ಟನ್‌ಗಳು):",
    phQty: "ಉದಾ. 5.5",
    lblVehicle: "ವಾಹನದ ಪ್ರಕಾರ:",
    optSelectVehicle: "-- ವಾಹನವನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
    optTractor: "ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿ",
    optMiniTruck: "ಮಿನಿ ಟ್ರಕ್",
    optHeavyTruck: "ಭಾರಿ ವಾಣಿಜ್ಯ ಟ್ರಕ್",
    btnBookSlot: "ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ & QR ಪಾಸ್ ಜನರೇಟ್ ಮಾಡಿ",
    passHeading: "ಡಿಜಿಟಲ್ ಗೇಟ್ ಪಾಸ್",
    slotConfirmed: "ಸ್ಲಾಟ್ ಖಚಿತವಾಗಿದೆ",
    lblLivePos: "ಲೈವ್ ಸ್ಥಾನ",
    lblETA: "ಅಂದಾಜು ಸಮಯ",
    lblGrace: "ರಿಯಾಯಿತಿ ಸಮಯ",
    btnTTS: "🔊 ಸ್ಥಿತಿಯನ್ನು ಆಲಿಸಿ (ಭಾಷಿಣಿ ಆಡಿಯೋ)",
    officerDeskTitle: "ಮಂಡಿ ಅಧಿಕಾರಿ ನಿಯಂತ್ರಣ ಡೆಸ್ಕ್",
    gatePassHeading: "ಗೇಟ್ ಪಾಸ್ ದೃಢೀಕರಣ",
    gatePassDesc: "ಎಂಟ್ರಿ ಗೇಟ್‌ನಲ್ಲಿ ಟೋಕನ್ ಐಡಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
    phTokenInput: "ಟೋಕನ್ ಐಡಿ ನಮೂದಿಸಿ (ಉದಾ. #MND-84920)",
    btnVerifyEntry: "ಪ್ರವೇಶವನ್ನು ದೃಢೀಕರಿಸಿ",
    btnCamScanner: "📷 ಕ್ಯಾಮೆರಾ QR ಸ್ಕ್ಯಾನರ್ ತೆರೆಯಿರಿ",
    awaitingGate: "ಗೇಟ್ ಪ್ರವೇಶ ದೃಢೀಕರಣಕ್ಕಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...",
    weighbridgeHeading: "ಸ್ವಯಂಚಾಲಿತ ವೇಬ್ರಿಡ್ಜ್ ಸ್ಟೇಷನ್",
    weighbridgeDesc: "IoT ಸೆನ್ಸರ್‌ನಿಂದ ಲೈವ್ ತೂಕದ ಇನ್‌ಪುಟ್ ಪಡೆಯಿರಿ.",
    btnCaptureWeight: "ತೂಕವನ್ನು ನಮೂದಿಸಿ",
    exceptionsHeading: "ಕ್ಯೂ ವಿನಾಯಿತಿಗಳು & ನಿಯಂತ್ರಣಗಳು",
    btnGrantGrace: "15 ನಿಮಿಷಗಳ ಹೆಚ್ಚುವರಿ ಸಮಯ ನೀಡಿ",
    btnPauseGate: "ಗೇಟ್ ಪ್ರವೇಶವನ್ನು ನಿಲ್ಲಿಸಿ",
    engineTitle: "ಕ್ಯೂ ಪ್ರೊಸೆಸಿಂಗ್ ಎಂಜಿನ್",
    engineHeading: "ವೇಗ ನಿಯಂತ್ರಕ",
    lblActiveBridges: "ಸಕ್ರಿಯ ವೇಬ್ರಿಡ್ಜ್‌ಗಳು:",
    lblShiftFactor: "ಶಿಫ್ಟ್ ದಕ್ಷತೆ ಗೇಜ್:",
    optNormalSpeed: "ಸಾಮಾನ್ಯ ವೇಗ (100%)",
    optPeakSpeed: "ಹೆಚ್ಚಿನ ರಶ್ (150%)",
    optSlowSpeed: "ಊಟದ ವಿರಾಮ / ನಿಧಾನ (70%)",
    lblThroughput: "ಲೆಕ್ಕಹಾಕಿದ ಸಿಸ್ಟಮ್ ಸಾಮರ್ಥ್ಯ:",
    activeStatusHeading: "ಸಕ್ರಿಯ ಮಂಡಿ ಸ್ಥಿತಿ",
    lblInQueue: "ಕ್ಯೂನಲ್ಲಿದೆ",
    lblAvgWait: "ಸರಾಸರಿ ಕಾಯುವ ಸಮಯ",
    lblClearedToday: "ಇಂದು ಪೂರ್ಣಗೊಂಡಿದೆ",
    smsTitle: "SMS ಲಾಗ್‌ಗಳು",
    smsHeading: "ಲೈವ್ ಟೆಲಿಫೋನಿ ಲಾಗ್‌ಗಳು",
    smsInitialLog: "[ಸಿಸ್ಟಮ್]: ಮಂಡಿ ಕ್ಯೂ ಎಂಜಿನ್ ಪ್ರಾರಂಭವಾಗಿದೆ...",
    unitTons: "ಟನ್‌ಗಳು",
    unitMins: "ನಿಮಿಷಗಳು",
    unitVehicles: "ವಾಹನಗಳು",
    "Nashik Main APMC": "ನಾಸಿಕ್ ಮೇನ್ APMC",
    "Lasalgaon Mandi": "ಲಾಸಲ್‌ಗಾಂವ್ ಮಂಡಿ",
    "Pune Market Yard": "ಪುಣೆ ಮಾರ್ಕೆಟ್ ಯಾರ್ಡ್",
    "Nagpur APMC Hub": "ನಾಗ್‌ಪುರ APMC ಹಬ್",
    "Onion (Kanda)": "ಈರುಳ್ಳಿ",
    "Pulses (Dal)": "ಬೇಳೆಕಾಳುಗಳು",
    "Vegetables": "ತರಕಾರಿಗಳು",
    "Wheat (Gehun)": "ಗೋಧಿ",
    "Cotton (Kapas)": "ಹತ್ತಿ",
    "Tractor Trolley": "ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರಾಲಿ",
    "Mini Truck": "ಮಿನಿ ಟ್ರಕ್",
    "Heavy Commercial Truck": "ಭಾರಿ ವಾಣಿಜ್ಯ ಟ್ರಕ್",
    posInLine: "ಕ್ಯೂನಲ್ಲಿ #3"
  }
};

let currentPassRawData = null;

// 2. Navigation Tabs Switcher
function showModule(moduleId, btnElement) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(moduleId).classList.add('active');
  if (btnElement) btnElement.classList.add('active');
}

// 3. OTP Flow
function sendOTP() {
  const phone = document.getElementById("farmerPhone").value;
  if (!phone || phone.length < 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }
  document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
  const otp = document.getElementById("otpCode").value;
  if (otp.length < 4) {
    alert("Please enter a valid 4-digit OTP.");
    return;
  }
  document.getElementById("loginCard").style.display = "none";
  document.getElementById("bookingCard").style.display = "block";
}

// 4. Global Language Translation Engine
function switchLanguage() {
  const selectedLang = document.getElementById("langSelect").value;
  const langDict = translations[selectedLang] || translations["en"];

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langDict[key]) el.innerText = langDict[key];
  });

  // Update input placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (langDict[key]) el.placeholder = langDict[key];
  });

  // Re-translate Pass Card values
  if (currentPassRawData) {
    document.getElementById("summaryFarmerName").innerText = currentPassRawData.name;
    document.getElementById("summaryMandi").innerText = langDict[currentPassRawData.mandi] || currentPassRawData.mandi;
    document.getElementById("summaryCommodity").innerText = langDict[currentPassRawData.commodity] || currentPassRawData.commodity;
    document.getElementById("summaryQty").innerText = `${currentPassRawData.qty} ${langDict["unitTons"] || "Tons"}`;
    document.getElementById("summaryVehicle").innerText = langDict[currentPassRawData.vehicle] || currentPassRawData.vehicle;
    document.getElementById("farmerPos").innerText = langDict["posInLine"] || currentPassRawData.pos;
  }
}

// 5. Booking Slot & QR Generator
function generateToken(event) {
  event.preventDefault();

  currentPassRawData = {
    name: document.getElementById("farmerName").value,
    mandi: document.getElementById("mandiSelect").value,
    commodity: document.getElementById("commoditySelect").value,
    qty: document.getElementById("produceQty").value,
    vehicle: document.getElementById("vehicleType").value,
    pos: "#3 in line"
  };

  const tokenId = "MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById("qrTokenId").innerText = "#" + tokenId;

  // Reliable QR code API rendering
  const qrContainer = document.getElementById("qrcode");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(tokenId)}`;
  qrContainer.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="width:130px; height:130px; display:block; margin:0 auto;" />`;

  document.getElementById("bookingCard").style.display = "none";
  document.getElementById("passCard").style.display = "block";

  switchLanguage();
}

// 6. Clean Multi-Lingual Speech Synthesis (Bhashini Engine Integration)
function triggerVoiceAssistance() {
  const currentLang = document.getElementById("langSelect").value;

  const farmerName = document.getElementById("summaryFarmerName").innerText;
  const mandi = document.getElementById("summaryMandi").innerText;
  const commodity = document.getElementById("summaryCommodity").innerText;
  const eta = document.getElementById("farmerETA").innerText;
  
  // Clean position string by removing symbols like '#'
  const posRaw = document.getElementById("farmerPos").innerText;
  const cleanPos = posRaw.replace("#", "");

  let speechMessage = "";

  if (currentLang === "mr") {
    speechMessage = `नमस्कार ${farmerName}. तुमचे मंडी केंद्र ${mandi} आहे. शेतीमाल ${commodity}. तुमची रांग स्थिती ${cleanPos} असून अंदाजे वेळ ${eta} आहे.`;
  } else if (currentLang === "hi") {
    speechMessage = `नमस्कार ${farmerName}. आपका मंडी केंद्र ${mandi} है. फसल ${commodity}. आपकी कतार स्थिति ${cleanPos} है और अनुमानित समय ${eta} है.`;
  } else if (currentLang === "te") {
    speechMessage = `నమస్కారం ${farmerName}. మీ మండి కేంద్రం ${mandi}. సరుకు ${commodity}. మీ క్యూ స్థానం ${cleanPos} మరియు అంచనా సమయం ${eta}.`;
  } else if (currentLang === "ta") {
    speechMessage = `வணக்கம் ${farmerName}. உங்கள் மண்டி மையம் ${mandi}. பொருள் ${commodity}. உங்கள் வரிசை நிலை ${cleanPos} மற்றும் எதிர்பார்க்கப்படும் நேரம் ${eta}.`;
  } else if (currentLang === "bn") {
    speechMessage = `নমস্কার ${farmerName}। আপনার মান্ডি কেন্দ্র ${mandi}। ফসল ${commodity}। আপনার লাইনের অবস্থান ${cleanPos} এবং আনুমানিক সময় ${eta}।`;
  } else if (currentLang === "gu") {
    speechMessage = `નમસ્તે ${farmerName}. તમારું મંડી કેન્દ્ર ${mandi} છે. પાક ${commodity}. તમારી લાઇન સ્થિતિ ${cleanPos} છે અને અંદાજિત સમય ${eta} છે.`;
  } else if (currentLang === "kn") {
    speechMessage = `ನಮಸ್ಕಾರ ${farmerName}. ನಿಮ್ಮ ಮಂಡಿ ಕೇಂದ್ರ ${mandi}. ಬೆಳೆ ${commodity}. ನಿಮ್ಮ ಕ್ಯೂ ಸ್ಥಾನ ${cleanPos} ಮತ್ತು ಅಂದಾಜು ಸಮಯ ${eta}.`;
  } else {
    speechMessage = `Hello ${farmerName}. Your mandi center is ${mandi}. Commodity ${commodity}. Your position is ${cleanPos} and estimated time is ${eta}.`;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speechMessage);

    const langCodeMap = {
      en: "en-IN",
      hi: "hi-IN",
      mr: "mr-IN",
      te: "te-IN",
      ta: "ta-IN",
      bn: "bn-IN",
      gu: "gu-IN",
      kn: "kn-IN"
    };

    utterance.lang = langCodeMap[currentLang] || "en-IN";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  } else {
    alert(speechMessage);
  }
}

// 7. Control Desk Logic
function scanToken() {
  const val = document.getElementById("scanInput").value;
  if (!val) {
    alert("Please enter a token ID to verify.");
    return;
  }
  document.getElementById("scanResult").innerHTML = `✅ Token <strong>${val}</strong> Verified Successfully. Entry Authorized!`;
}

function simulateWeighment() {
  const weight = (Math.random() * (12.0 - 2.0) + 2.0).toFixed(2);
  document.getElementById("weighValue").innerText = `${weight} TONS`;
}

function applyGracePeriod() {
  document.getElementById("farmerETA").innerText = "11:00 AM (+15m)";
  alert("15-Minute Grace Period granted to active queue!");
}

function triggerEmergency() {
  alert("Gate Entry Paused by Mandi Officer.");
}

function recalculateEngine() {
  const bridges = parseInt(document.getElementById("engineBridges").value) || 1;
  const factor = parseFloat(document.getElementById("shiftStatus").value) || 1.0;
  const mins = Math.max(2, Math.round((15 / bridges) / factor));
  
  const selectedLang = document.getElementById("langSelect").value;
  const langDict = translations[selectedLang] || translations["en"];
  
  document.getElementById("engineOutput").innerHTML = `<span data-i18n="lblThroughput">${langDict["lblThroughput"]}</span> <strong>${mins} ${langDict["unitMins"]} per tractor</strong>`;
}
