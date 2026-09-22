// --- 1. Multilingual i18n Translation Setup (22 Official Indian Languages) ---
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
    lblFarmerName: "Farmer Name / Farmer ID:",
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
    ttsAlert: "🔊 Bhashini Voice Output: Your booking is confirmed. Your turn is 3rd in line."
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
    lblFarmerName: "किसान का नाम / किसान आईडी:",
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
    ttsAlert: "🔊 भाषिणी वॉयस आउटपुट: आपकी बुकिंग की पुष्टि हो गई है। आपका नंबर ३रा है।"
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
    ttsAlert: "🔊 भाषिणी व्हॉईस आऊटपुट: तुमचे बुकिंग निश्चित झाले आहे. तुमचा नंबर ३रा आहे."
  },
  bn: {
    appTitle: "স্মার্ট মান্ডি ইঞ্জিন",
    tabFarmer: "১. কৃষক অ্যাপ",
    tabOfficer: "২. অফিসার ডেস্ক",
    tabEngine: "৩. কিউ ইঞ্জিন",
    tabSms: "৪. এসএমএস লগ",
    farmerPortal: "কৃষক পোর্টাল এবং ডিজিটাল পাস",
    otpHeading: "১. ওটিপি প্রমাণীকরণ",
    sendOtp: "ওটিপি পাঠান",
    verifyLogin: "যাচাই ও লগইন করুন",
    bookSlotHeading: "২. স্লট বুক করুন",
    lblFarmerName: "কৃষকের নাম / আইডি:",
    lblMandi: "মান্ডি কেন্দ্র নির্বাচন করুন:",
    lblCommodity: "ফসলের ধরন:",
    optOnion: "পেঁয়াজ",
    optPulses: "ডাল",
    optVeg: "শাকসবজি",
    lblQty: "পরিমাণ (টন):",
    lblVehicle: "যানবাহনের ধরন:",
    btnBookSlot: "QR পাস তৈরি করুন",
    passHeading: "ডিজিটাল গেট পাস",
    lblLivePos: "লাইভ অবস্থান:",
    lblETA: "আনুমানিক সময়:",
    lblGrace: "অতিরিক্ত সময়:",
    btnTTS: "🔊 ভয়েস বার্তা শুনুন",
    officerDeskTitle: "মান্ডি অফিসার কন্ট্রোল ডেস্ক",
    ttsAlert: "🔊 ভাষিণী ভয়েস আউটপুট: আপনার বুকিং নিশ্চিত হয়েছে।"
  },
  te: {
    appTitle: "స్మార్ట్ మండి ఇంజిన్",
    tabFarmer: "1. రైతు యాప్",
    tabOfficer: "2. అధికారి డెస్క్",
    tabEngine: "3. క్యూ ఇంజిన్",
    tabSms: "4. SMS లాగ్‌లు",
    farmerPortal: "రైతు పోర్టల్ & డిజిటల్ పాస్",
    otpHeading: "1. OTP ధృవీకరణ",
    sendOtp: "OTP పంపండి",
    verifyLogin: "లాగిన్ చేయండి",
    bookSlotHeading: "2. స్లాట్ బుక్ చేయండి",
    lblFarmerName: "రైతు పేరు / ID:",
    lblMandi: "మండి కేంద్రాన్ని ఎంచుకోండి:",
    lblCommodity: "పంట రకం:",
    optOnion: "ఉల్లిపాయలు",
    optPulses: "పప్పుధాన్యాలు",
    optVeg: "కూరగాయలు",
    lblQty: "పరిమాణం (టన్నులు):",
    lblVehicle: "వాహనం రకం:",
    btnBookSlot: "QR పాస్ సృష్టించండి",
    passHeading: "డిజిటల్ గేట్ పాస్",
    lblLivePos: "ప్రస్తుత స్థానం:",
    lblETA: "అంచనా సమయం:",
    lblGrace: "గ్రేస్ సమయం:",
    btnTTS: "🔊 వాయిస్ వినండి",
    officerDeskTitle: "మండి అధికారి డెస్క్",
    ttsAlert: "🔊 భాషిణి వాయిస్: మీ బుకింగ్ ఖరారైంది."
  },
  ta: {
    appTitle: "ስማርት மண்டி என்ஜின்",
    tabFarmer: "1. விவஸாயி செயலி",
    tabOfficer: "2. அதிகாரி டெஸ்க்",
    tabEngine: "3. வரிசை என்ஜின்",
    tabSms: "4. SMS பதிவுகள்",
    farmerPortal: "விவசாயி போர்ட்டல் & டிஜிட்டல் பாஸ்",
    otpHeading: "1. OTP சரிபார்ப்பு",
    sendOtp: "OTP அனுப்பு",
    verifyLogin: "உள்நுழை",
    bookSlotHeading: "2. முன்பதிவு செய்",
    lblFarmerName: "விவசாயி பெயர் / ID:",
    lblMandi: "மண்டி மையம்:",
    lblCommodity: "பயிர் வகை:",
    optOnion: "வெங்காயம்",
    optPulses: "பருப்பு வகைகள்",
    optVeg: "காய்கறிகள்",
    lblQty: "அளவு (டன்கள்):",
    lblVehicle: "வாகன வகை:",
    btnBookSlot: "QR பாஸ் உருவாக்கவும்",
    passHeading: "டிஜிட்டல் கேட் பாஸ்",
    lblLivePos: "நேரலை நிலை:",
    lblETA: "எதிர்பார்க்கப்படும் நேரம்:",
    lblGrace: "காத்திருப்பு நேரம்:",
    btnTTS: "🔊 குரல் கேட்க",
    officerDeskTitle: "மண்டி அதிகாரி மையம்",
    ttsAlert: "🔊 பாஷிணி குரல்: உங்கள் பதிவு உறுதி செய்யப்பட்டது."
  },
  gu: {
    appTitle: "સ્માર્ટ મંડી એન્જિન",
    tabFarmer: "૧. ખેડૂત એપ",
    tabOfficer: "૨. અધિકારી ડેસ્ક",
    tabEngine: "૩. ક્યુ એન્જિન",
    tabSms: "૪. એસએમએસ લોગ",
    farmerPortal: "ખેડૂત પોર્ટલ અને ડિજિટલ પાસ",
    otpHeading: "૧. ઓટીપી પ્રમાણીકરણ",
    sendOtp: "ઓટીપી મોકલો",
    verifyLogin: "ચકાસો અને લોગિન કરો",
    bookSlotHeading: "૨. સ્લોટ બુક કરો",
    lblFarmerName: "ખેડૂતનું નામ / આઈડી:",
    lblMandi: "મંડી કેન્દ્ર પસંદ કરો:",
    lblCommodity: "પાકનો પ્રકાર:",
    optOnion: "ડુંગળી",
    optPulses: "કઠોળ",
    optVeg: "શાકભાજી",
    lblQty: "જથ્થો (ટન):",
    lblVehicle: "વાહનનો પ્રકાર:",
    btnBookSlot: "QR પાસ બનાવો",
    passHeading: "ડિજિટલ ગેટ પાસ",
    lblLivePos: "લાઇવ સ્થિતિ:",
    lblETA: "અંદાજિત સમય:",
    lblGrace: "ગ્રેસ સમય:",
    btnTTS: "🔊 અવાજ સાંભળો",
    officerDeskTitle: "મંડી અધિકારી કંટ્રોલ ડેસ્ક",
    ttsAlert: "🔊 ભાષિણી વોઈસ: તમારું બુકિંગ કન્ફર્મ થયું છે."
  },
  ur: {
    appTitle: "سمارٹ منڈی انجن",
    tabFarmer: "1. کسان ایپ",
    tabOfficer: "2. آفیسر ڈیسک",
    tabEngine: "3. قطار انجن",
    tabSms: "4. ایس ایم ایس لاگز",
    farmerPortal: "کسان پورٹل اور ڈیجیٹل پاس",
    otpHeading: "1. او ٹی پی کی تصدیق",
    sendOtp: "او ٹی پی بھیجیں",
    verifyLogin: "لاگ ان کریں",
    bookSlotHeading: "2. سلاٹ بک کریں",
    lblFarmerName: "کسان کا نام / آئی ڈی:",
    lblMandi: "منڈی مرکز منتخب کریں:",
    lblCommodity: "جنس کی قسم:",
    optOnion: "پیاز",
    optPulses: "دالیں",
    optVeg: "سبزیاں",
    lblQty: "مقدار (ٹن):",
    lblVehicle: "گاڑی کی قسم:",
    btnBookSlot: "QR پاس بنائیں",
    passHeading: "ڈیجیٹل گیٹ پاس",
    lblLivePos: "لائیو پوزیشن:",
    lblETA: "تخمینی وقت:",
    lblGrace: "رعایتی وقت:",
    btnTTS: "🔊 آواز سنیں",
    officerDeskTitle: "منڈی آفیسر ڈیسک",
    ttsAlert: "🔊 بھاشنی آواز: آپ کی بکنگ کی تصدیق ہو گئی ہے۔"
  },
  kn: {
    appTitle: "ಸ್ಮಾರ್ಟ್ ಮಂಡಿ ಇಂಜಿನ್",
    tabFarmer: "1. ರೈತ ಆ್ಯಪ್",
    tabOfficer: "2. ಅಧಿಕಾರಿ ಡೆಸ್ಕ್",
    tabEngine: "3. ಕ್ಯೂ ಇಂಜಿನ್",
    tabSms: "4. SMS ಲಾಗ್ಗಳು",
    farmerPortal: "ರೈತ ಪೋರ್ಟಲ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಪಾಸ್",
    otpHeading: "1. OTP ಪರಿಶೀಲನೆ",
    sendOtp: "OTP ಕಳುಹಿಸಿ",
    verifyLogin: "ಲಾಗಿನ್ ಮಾಡಿ",
    bookSlotHeading: "2. ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    lblFarmerName: "ರೈತನ ಹೆಸರು / ID:",
    lblMandi: "ಮಂಡಿ ಕೇಂದ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
    lblCommodity: "ಬೆಳೆ ಮಾದರಿ:",
    optOnion: "ಈರುಳ್ಳಿ",
    optPulses: "ಬೇಳೆಕಾಳುಗಳು",
    optVeg: "ತರಕಾರಿಗಳು",
    lblQty: "ಪ್ರಮಾಣ (ಟನ್):",
    lblVehicle: "ವಾಹನದ ಮಾದರಿ:",
    btnBookSlot: "QR ಪಾಸ್ ರಚಿಸಿ",
    passHeading: "ಡಿಜಿಟಲ್ ಗೇಟ್ ಪಾಸ್",
    lblLivePos: "ಲೈವ್ ಸ್ಥಾನ:",
    lblETA: "ಅಂದಾಜು ಸಮಯ:",
    lblGrace: "ಸವಲತ್ತು ಸಮಯ:",
    btnTTS: "🔊 ದ್ವನಿ ಆಲಿಸಿ",
    officerDeskTitle: "ಮಂಡಿ ಅಧಿಕಾರಿ ಡೆಸ್ಕ್",
    ttsAlert: "🔊 ಭಾಷಿಣಿ ಧ್ವನಿ: ನಿಮ್ಮ ಬುಕಿಂಗ್ ಖಚಿತವಾಗಿದೆ."
  },
  or: {
    appTitle: "ସ୍ମାର୍ଟ ମଣ୍ଡି ଇଞ୍ଜିନ୍",
    tabFarmer: "୧. କୃଷକ ଆପ୍",
    tabOfficer: "୨. ଅଫିସର ଡେସ୍କ",
    tabEngine: "୩. ଧାଡ଼ି ଇଞ୍ଜିନ୍",
    tabSms: "୪. SMS ଲଗ୍",
    farmerPortal: "କୃଷକ ପୋର୍ଟାଲ୍ ଏବଂ ଡିଜିଟାଲ୍ ପାସ୍",
    otpHeading: "୧. OTP ଯାଞ୍ଚ",
    sendOtp: "OTP ପଠାନ୍ତୁ",
    verifyLogin: "ଲଗଇନ୍ କରନ୍ତୁ",
    bookSlotHeading: "୨. ସ୍ଲଟ୍ ବୁକ୍ କରନ୍ତୁ",
    lblFarmerName: "କୃଷକଙ୍କ ନାମ / ID:",
    lblMandi: "ମଣ୍ଡି କେନ୍ଦ୍ର ଚୟନ କରନ୍ତୁ:",
    lblCommodity: "ଫସଲ ପ୍ରକାର:",
    optOnion: "ପିଆଜ",
    optPulses: "ଡାଲି",
    optVeg: "ପନିପରିବା",
    lblQty: "ପରିମାଣ (ଟନ୍):",
    lblVehicle: "ଗାଡ଼ି ପ୍ରକାର:",
    btnBookSlot: "QR ପାସ୍ ତିଆରି କରନ୍ତୁ",
    passHeading: "ଡିଜିଟାଲ୍ ଗେଟ୍ ପାସ୍",
    lblLivePos: "ଲାଇଭ୍ ସ୍ଥିତି:",
    lblETA: "ଆନୁମାନିକ ସମୟ:",
    lblGrace: "ଅତିରିକ୍ତ ସମୟ:",
    btnTTS: "🔊 ସ୍ୱର ଶୁଣନ୍ତୁ",
    officerDeskTitle: "ମଣ୍ଡି ଅଫିସର ଡେସ୍କ",
    ttsAlert: "🔊 ଭାଷିଣୀ ସ୍ୱର: ଆପଣଙ୍କ ବୁକିଂ ନିଶ୍ଚିତ ହୋଇଛି।"
  },
  ml: {
    appTitle: "സ്മാർട്ട് മണ്ടി എഞ്ചിൻ",
    tabFarmer: "1. കർഷക ആപ്പ്",
    tabOfficer: "2. ഓഫീസർ ഡെസ്ക്",
    tabEngine: "3. ക്യൂ എഞ്ചിൻ",
    tabSms: "4. SMS ലോഗുകൾ",
    farmerPortal: "കർഷക പോർട്ടലും ഡിജിറ്റൽ പാസും",
    otpHeading: "1. OTP പരിശോധന",
    sendOtp: "OTP അയക്കുക",
    verifyLogin: "ലോഗിൻ ചെയ്യുക",
    bookSlotHeading: "2. സ്ലോട്ട് ബുക്ക് ചെയ്യുക",
    lblFarmerName: "കർഷകന്റെ പേര് / ID:",
    lblMandi: "മണ്ടി കേന്ദ്രം തിരഞ്ഞെടുക്കുക:",
    lblCommodity: "ഉൽപ്പന്ന തരം:",
    optOnion: "സവാള",
    optPulses: "പയർവർഗ്ഗങ്ങൾ",
    optVeg: "പച്ചക്കറികൾ",
    lblQty: "അളവ് (ടൺ):",
    lblVehicle: "വാഹന തരം:",
    btnBookSlot: "QR പാസ് ഉണ്ടാക്കുക",
    passHeading: "ഡിജിറ്റൽ ഗേറ്റ് പാസ്",
    lblLivePos: "തത്സമയ സ്ഥാനം:",
    lblETA: "പ്രതീക്ഷിക്കുന്ന സമയം:",
    lblGrace: "കൂടുതൽ സമയം:",
    btnTTS: "🔊 ശബ്ദം കേൾക്കുക",
    officerDeskTitle: "മണ്ടി ഓഫീസർ ഡെസ്ക്",
    ttsAlert: "🔊 ഭാഷിണി ശബ്ദം: നിങ്ങളുടെ ബുക്കിംഗ് സ്ഥിരീകരിച്ചു."
  },
  pa: {
    appTitle: "ਸਮਾਰਟ ਮੰਡੀ ਇੰਜਣ",
    tabFarmer: "1. ਕਿਸਾਨ ਐਪ",
    tabOfficer: "2. ਅਫ਼ਸਰ ਡੈਸਕ",
    tabEngine: "3. ਕਤਾਰ ਇੰਜਣ",
    tabSms: "4. SMS ਲੌਗ",
    farmerPortal: "ਕਿਸਾਨ ਪੋਰਟਲ ਅਤੇ ਡਿਜੀਟਲ ਪਾਸ",
    otpHeading: "1. OTP ਤਸਦੀਕ",
    sendOtp: "OTP ਭੇਜੋ",
    verifyLogin: "ਲੌਗਇਨ ਕਰੋ",
    bookSlotHeading: "2. ਸਲਾਟ ਬੁੱਕ ਕਰੋ",
    lblFarmerName: "ਕਿਸਾਨ ਦਾ ਨਾਮ / ID:",
    lblMandi: "ਮੰਡੀ ਕੇਂਦਰ ਚੁਣੋ:",
    lblCommodity: "ਫ਼ਸਲ ਦੀ ਕਿਸਮ:",
    optOnion: "ਪਿਆਜ਼",
    optPulses: "ਦਾਲਾਂ",
    optVeg: "ਸਬਜ਼ੀਆਂ",
    lblQty: "ਮਾਤਰਾ (ਟਨ):",
    lblVehicle: "ਵਾਹਨ ਦੀ ਕਿਸਮ:",
    btnBookSlot: "QR ਪਾਸ ਬਣਾਓ",
    passHeading: "ਡਿਜੀਟਲ ਗੇਟ ਪਾਸ",
    lblLivePos: "ਲਾਇਵ ਸਥਿਤੀ:",
    lblETA: "ਅਨੁਮਾਨਿਤ ਸਮਾਂ:",
    lblGrace: "ਵਾਧੂ ਸਮਾਂ:",
    btnTTS: "🔊 ਆਵਾਜ਼ ਸੁਣੋ",
    officerDeskTitle: "ਮੰਡੀ ਅਫ਼ਸਰ ਡੈਸਕ",
    ttsAlert: "🔊 ਭਾਸ਼ਿਣੀ ਆਵਾਜ਼: ਤੁਹਾਡੀ ਬੁਕਿੰਗ ਦੀ ਪੁਸ਼ਟੀ ਹੋ ਗਈ ਹੈ।"
  },
  as: {
    appTitle: "স্মাৰ্ট মাণ্ডি ইঞ্জিন",
    tabFarmer: "১. কৃষক এপ",
    tabOfficer: "২. বিষয়া ডেক্স",
    tabEngine: "৩. কিউ ইঞ্জিন",
    tabSms: "৪. SMS লগ",
    farmerPortal: "কৃষক পৰ্টেল আৰু ডিজিটেল পাছ",
    otpHeading: "১. OTP সত্যতা নিৰূপণ",
    sendOtp: "OTP প্ৰেৰণ কৰক",
    verifyLogin: "লগইন কৰক",
    bookSlotHeading: "২. স্লট বুক কৰক",
    lblFarmerName: "কৃষকৰ নাম / ID:",
    lblMandi: "মাণ্ডি কেন্দ্র বাছনি কৰক:",
    lblCommodity: "শস্যৰ প্ৰকাৰ:",
    optOnion: "পিয়াজ",
    optPulses: "ডালি",
    optVeg: "শাক-পাচলি",
    lblQty: "পৰিমাণ (টন):",
    lblVehicle: "বাহনৰ প্ৰকাৰ:",
    btnBookSlot: "QR পাছ প্ৰস্তুত কৰক",
    passHeading: "ডিজিটেল গেট পাছ",
    lblLivePos: "লাইভ অৱস্থান:",
    lblETA: "আনুমানিক সময়:",
    lblGrace: "ৰেহাই সময়:",
    btnTTS: "🔊 বাৰ্তা শুনক",
    officerDeskTitle: "মাণ্ডি বিষয়া ডেক্স",
    ttsAlert: "🔊 ভাষিণী বাণী: আপোনাৰ বুকিং নিশ্চিত হৈছে।"
  },
  ma: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "१. किसान ऐप",
    tabOfficer: "२. अधिकारी डेस्क",
    tabEngine: "३. कतार इंजन",
    tabSms: "४. एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल आ डिजिटल पास",
    otpHeading: "१. ओटीपी सत्यापन",
    sendOtp: "ओटीपी पठाउ",
    verifyLogin: "लॉगिन करू",
    bookSlotHeading: "२. स्लॉट बुक करू",
    lblFarmerName: "किसानक नाम / आईडी:",
    lblMandi: "मंडी केंद्र चुनू:",
    lblCommodity: "उपजक प्रकार:",
    optOnion: "प्याज़",
    optPulses: "दालि",
    optVeg: "तरकारी",
    lblQty: "मात्रा (टन):",
    lblVehicle: "गाड़ीक प्रकार:",
    btnBookSlot: "QR पास बनाउ",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति:",
    lblETA: "अनुमानित समय:",
    lblGrace: "अतिरिक्त समय:",
    btnTTS: "🔊 आवाज सुनू",
    officerDeskTitle: "मंडी अधिकारी डेस्क",
    ttsAlert: "🔊 भाषिणी आवाज: अहाँक बुकिंग निश्चित भ गेल।"
  },
  sat: {
    appTitle: "ᱥᱢᱟᱨᱴ ᱢᱟᱱᱰᱤ ᱤᱧᱡᱤᱱ",
    tabFarmer: "᱑. ᱪᱟᱹᱥᱤ ᱮᱯ",
    tabOfficer: "᱒. ᱟᱯᱷᱤᱥᱟᱨ ᱰᱮᱥᱠ",
    tabEngine: "᱓. ᱠᱤᱣ ᱤᱧᱡᱤᱱ",
    tabSms: "᱔. SMS ᱞᱚᱜᱽ",
    farmerPortal: "ᱪᱟᱹᱥᱤ ᱯᱚᱨᱴᱟᱞ ᱟᱨ ᱰᱤᱡᱤᱴᱟᱞ ᱯᱟᱥ",
    otpHeading: "᱑. OTP ᱧᱮᱞ ᱵᱤᱰᱟᱹᱣ",
    sendOtp: "OTP ᱠᱩᱞ ᱢᱮ",
    verifyLogin: "ᱞᱚᱜᱤᱱ ᱢᱮ",
    bookSlotHeading: "᱒. ᱥᱞᱚᱴ ᱵᱩᱠ ᱢᱮ",
    lblFarmerName: "ᱪᱟᱹᱥᱤ ᱧᱩᱛᱩᱢ / ID:",
    lblMandi: "ᱢᱟᱱᱰᱤ ᱥᱟᱞᱟᱭ ᱢᱮ:",
    lblCommodity: "ᱡᱤᱱᱤᱥ ᱨᱮᱱᱟᱜ ᱡᱟᱹᱛ:",
    optOnion: "ᱯᱮᱭᱟᱸᱡᱽ",
    optPulses: "ᱫᱟᱹᱞ",
    optVeg: "ᱟᱲᱟᱜ ᱥᱟᱠᱟᱢ",
    lblQty: "ᱡᱚᱠᱷᱟ (ᱴᱚᱱ):",
    lblVehicle: "ᱜᱟᱹᱰᱤ ᱨᱮᱱᱟᱜ ᱡᱟᱹᱛ:",
    btnBookSlot: "QR ᱯᱟᱥ ᱵᱮᱱᱟᱣ ᱢᱮ",
    passHeading: "ᱰᱤᱡᱤᱴᱟᱞ ᱜᱮᱴ ᱯᱟᱥ",
    lblLivePos: "ᱱᱤᱛᱚᱜᱟᱜ ᱴᱷᱟᱶ:",
    lblETA: "ᱟᱸᱥᱚᱜ ᱠᱟᱱ ᱥᱚᱢᱚᱭ:",
    lblGrace: "ᱵᱟᱹᱲᱛᱤ ᱥᱚᱢᱚᱭ:",
    btnTTS: "🔊 ᱟᱲᱟᱝ ᱟᱸᱡᱚᱢ ᱢᱮ",
    officerDeskTitle: "ᱢᱟᱱᱰᱤ ᱟᱯᱷᱤᱥᱟᱨ ᱰᱮᱥᱠ",
    ttsAlert: "🔊 ᱵᱷᱟᱥᱤᱬᱤ ᱟᱲᱟᱝ: ᱟᱢᱟᱜ ᱵᱩᱠᱤᱝ ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ।"
  },
  ks: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "१. ज़मींदार ऐप",
    tabOfficer: "२. अफ़सर डेस्क",
    tabEngine: "३. कतार इंजन",
    tabSms: "४. एसएमएस लॉग",
    farmerPortal: "ज़मींदार पोर्टल अते डिजिटल पास",
    otpHeading: "१. ओटीपी तसदीक",
    sendOtp: "ओटीपी सोज़िव",
    verifyLogin: "लॉगिन करिव",
    bookSlotHeading: "२. स्लॉट बुक करिव",
    lblFarmerName: "ज़मींदार नाव / आईडी:",
    lblMandi: "मंडी सेंटर चुनिव:",
    lblCommodity: "जिंसुक किस्म:",
    optOnion: "गंडि",
    optPulses: "दालि",
    optVeg: "सब्ज़ी",
    lblQty: "मात्रा (टन):",
    lblVehicle: "सवारी किस्म:",
    btnBookSlot: "QR पास बनाविव",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव पोज़ीशन:",
    lblETA: "अनुमानित समय:",
    lblGrace: "ग्रेस समय:",
    btnTTS: "🔊 आवाज़ बोज़िव",
    officerDeskTitle: "मंडी अफ़सर डेस्क",
    ttsAlert: "🔊 भाषिणी वॉयस: तुहंद बुकिंग गोव कन्फर्म।"
  },
  ne: {
    appTitle: "स्मार्ट मण्डी इन्जिन",
    tabFarmer: "१. किसान एप",
    tabOfficer: "२. अधिकारी डेस्क",
    tabEngine: "३. कतार इन्जिन",
    tabSms: "४. एसएमएस लग",
    farmerPortal: "किसान पोर्टल र डिजिटल पास",
    otpHeading: "१. ओटीपी प्रमाणीकरण",
    sendOtp: "ओटीपी पठाउनुहोस्",
    verifyLogin: "लगइन गर्नुहोस्",
    bookSlotHeading: "२. स्लट बुक गर्नुहोस्",
    lblFarmerName: "किसानको नाम / आईडी:",
    lblMandi: "मण्डी केन्द्र छान्नुहोस्:",
    lblCommodity: "बालीको प्रकार:",
    optOnion: "प्याजबुक",
    optPulses: "दाल",
    optVeg: "तरकारी",
    lblQty: "परिमाण (टन):",
    lblVehicle: "सवारीको प्रकार:",
    btnBookSlot: "QR पास बनाउनुहोस्",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइभ स्थिति:",
    lblETA: "अनुमानित समय:",
    lblGrace: "थप समय:",
    btnTTS: "🔊 आवाज सुन्नुहोस्",
    officerDeskTitle: "मण्डी अधिकारी डेस्क",
    ttsAlert: "🔊 भाषिणी आवाज: तपाईंको बुकिङ निश्चित भयो।"
  },
  sd: {
    appTitle: "اسمارٽ منڊي انجڻ",
    tabFarmer: "1. هاري ائپ",
    tabOfficer: "2. آفيسر ڏيسڪ",
    tabEngine: "3. قطار انجڻ",
    tabSms: "4. ايس ايم ايس لاگ",
    farmerPortal: "هاري پورٽل ۽ ڊجيٽل پاس",
    otpHeading: "1. او ٽي پي تصديق",
    sendOtp: "او ٽي پي موڪليو",
    verifyLogin: "لاگ ان ڪريو",
    bookSlotHeading: "2. سلاٽ بڪ ڪريو",
    lblFarmerName: "هاريءَ جو نالو / آءِ ڊي:",
    lblMandi: "منڊي سينٽر چونڊيو:",
    lblCommodity: "جنس جو قسم:",
    optOnion: "بصر",
    optPulses: "داليون",
    optVeg: "ڀاڄيون",
    lblQty: "مقدار (ٽن):",
    lblVehicle: "گاڏيءَ جو قسم:",
    btnBookSlot: "QR پاس ٺاهيو",
    passHeading: "ڊجيٽل گيٽ پاس",
    lblLivePos: "لائيو ڪوريئڙو:",
    lblETA: "تخميني وقت:",
    lblGrace: "مهلت وقت:",
    btnTTS: "🔊 آواز ٻڌو",
    officerDeskTitle: "منڊي آفيسر ڏيسڪ",
    ttsAlert: "🔊 ڀاشڻي آواز: توهان جي بڪنگ پڪي ٿي وئي."
  },
  kok: {
    appTitle: "स्मार्ट मंडी इंजिन",
    tabFarmer: "१. शेतकारी ॲप",
    tabOfficer: "२. अधिकारी डेस्क",
    tabEngine: "३. रांक इंजिन",
    tabSms: "४. एसएमएस लॉग",
    farmerPortal: "शेतकारी पोर्टल आनी डिजिटल पास",
    otpHeading: "१. ओटीपी पडताळणी",
    sendOtp: "ओटीपी धाडा",
    verifyLogin: "लॉगिन करा",
    bookSlotHeading: "२. स्लॉट बुक करा",
    lblFarmerName: "शेतकऱ्याचें नाव / आयडी:",
    lblMandi: "मंडी केंद्र निवडा:",
    lblCommodity: "मालाचो प्रकार:",
    optOnion: "कांदो",
    optPulses: "डाळ",
    optVeg: "भाजीपालो",
    lblQty: "प्रमाण (टन):",
    lblVehicle: "गाडीचो प्रकार:",
    btnBookSlot: "QR पास तयार करा",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव्ह स्थिती:",
    lblETA: "अंदाजी वेळ:",
    lblGrace: "सवलतीचो वेळ:",
    btnTTS: "🔊 आवाज आयका",
    officerDeskTitle: "मंडी अधिकारी डेस्क",
    ttsAlert: "🔊 भाषिणी आवाज: तुमचें बुकींग फायनल जालं."
  },
  doi: {
    appTitle: "स्मार्ट मंडी इंजन",
    tabFarmer: "१. किसान ऐप",
    tabOfficer: "२. अफ़सर डेस्क",
    tabEngine: "३. कतार इंजन",
    tabSms: "४. एसएमएस लॉग",
    farmerPortal: "किसान पोर्टल ते डिजिटल पास",
    otpHeading: "१. ओटीपी प्रमाणीकरण",
    sendOtp: "ओटीपी भेज्जो",
    verifyLogin: "लॉगिन करो",
    bookSlotHeading: "२. स्लॉट बुक करो",
    lblFarmerName: "किसान दा नां / आईडी:",
    lblMandi: "मंडी केंद्र चुनो:",
    lblCommodity: "फसल दी किस्म:",
    optOnion: "गंडा",
    optPulses: "दालें",
    optVeg: "सब्जियां",
    lblQty: "मात्रा (टन):",
    lblVehicle: "गडिए दी किस्म:",
    btnBookSlot: "QR पास बनाओ",
    passHeading: "डिजिटल गेट पास",
    lblLivePos: "लाइव स्थिति:",
    lblETA: "अनुमानित समां:",
    lblGrace: "वाधू समां:",
    btnTTS: "🔊 अवाज़ सुनो",
    officerDeskTitle: "मंडी अफ़सर डेस्क",
    ttsAlert: "🔊 भाषिणी अवाज़: तुंदी बुकिंग पक्की होई गेई।"
  },
  mni: {
    appTitle: "સ્માર્ટ મંડી એન્જિન",
    tabFarmer: "૧. લৌমী ઍપ",
    tabOfficer: "૨. ઓફિસર ડેસ્ક",
    tabEngine: "૩. ક્યુ એન્જિન",
    tabSms: "૪. SMS લોગ",
    farmerPortal: "લૌમી પોર્ટલ અમસુંગ ડિજિટલ પાસ",
    otpHeading: "૧. OTP ચેક તૌબા",
    sendOtp: "OTP થાબર્કો",
    verifyLogin: "લોગિન તૌબર્કો",
    bookSlotHeading: "૨. સ્લોટ બુક તૌબર્કો",
    lblFarmerName: "લૌમીગી મમિંગ / ID:",
    lblMandi: "મંડી સેન્ટર ખનબર્કો:",
    lblCommodity: "પોથમગી મખલ:",
    optOnion: "તિલહૌ",
    optPulses: "ચંગવાઈ",
    optVeg: "મના-મસિંગ",
    lblQty: "ચંગબા (ટન):",
    lblVehicle: "ગાડીગી મખલ:",
    btnBookSlot: "QR પાસ શેમ્બર્કો",
    passHeading: "ડિજિટલ ગેટ પાસ",
    lblLivePos: "લાઈવ લૈફમ:",
    lblETA: "ચૌબાગી મતમ:",
    lblGrace: "હેન્ના પીબા મતમ:",
    btnTTS: "🔊 ખોલ તારબર્કો",
    officerDeskTitle: "મંડી ઓફિસર ડેસ્ક",
    ttsAlert: "🔊 ભાષિણી ખોલ: અદોમગી બુકિંગ ચોયથ્રબ્રે।"
  },
  sa: {
    appTitle: "स्मार्ट मण्डि यन्त्रम्",
    tabFarmer: "१. कृषक अनुप्रयोगः",
    tabOfficer: "२. अधिकारी पीठम्",
    tabEngine: "३. पङ्क्ति यन्त्रम्",
    tabSms: "४. सन्देश सूच्यः",
    farmerPortal: "कृषक द्वारम् तथा अङ्कीय पत्रम्",
    otpHeading: "१. ओटीपी प्रमाणीकरणम्",
    sendOtp: "ओटीपी प्रेषयतु",
    verifyLogin: "प्रवेशं करोतु",
    bookSlotHeading: "२. स्थानं आरक्षयतु",
    lblFarmerName: "कृषकस्य नाम / परिचयः:",
    lblMandi: "मण्डि केन्द्रं चिनोतु:",
    lblCommodity: "सस्य प्रकारः:",
    optOnion: "पलाण्डुः",
    optPulses: "द्विदलाः",
    optVeg: "शाकानि",
    lblQty: "मात्रा (टन्):",
    lblVehicle: "वाहन प्रकारः:",
    btnBookSlot: "QR पत्रं रचयतु",
    passHeading: "अङ्कीय द्वार पत्रम्",
    lblLivePos: "प्रत्यक्ष स्थितिः:",
    lblETA: "अनुमानित समयः:",
    lblGrace: "अतिरिक्त समयः:",
    btnTTS: "🔊 वाणीं शृणोतु",
    officerDeskTitle: "मण्डि अधिकारी पीठम्",
    ttsAlert: "🔊 भाषिणी वाणी: भवतां आरक्षणं स्वीकृतम्।"
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

// --- 2. Dynamic OTP Authentication System ---
let generatedOTP = null;
let otpTimerInterval = null;

function sendOTP() {
  const phone = document.getElementById('farmerPhone').value;
  if(!phone || phone.trim().length < 10) {
    return alert("Please enter a valid 10-digit mobile number.");
  }
  
  // Generate a random 4-digit OTP
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  
  document.getElementById('otpSection').style.display = 'block';
  logSMS(`[SMS -> +91 ${phone}]: Your Kisan OTP for Mandi Access is ${generatedOTP}. Valid for 10s.`);
  
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
      generatedOTP = null; // Expire OTP
      timerDisplay.innerText = "OTP expired! Please click 'Send OTP' to request a new code.";
      verifyBtn.disabled = true;
    } else {
      timerDisplay.innerText = `OTP expires in: ${timeLeft}s`;
    }
  }, 1000);
}

function verifyOTP() {
  const code = document.getElementById('otpCode').value.trim();
  if(!generatedOTP) {
    return alert("OTP has expired. Please request a new OTP.");
  }
  
  if(code === generatedOTP) {
    clearInterval(otpTimerInterval);
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('bookingCard').style.display = 'block';
  } else {
    alert(`Invalid OTP entered! Please check the code sent to your SMS log (Generated: ${generatedOTP}).`);
  }
}

// --- 3. Custom Interactive Token Booking & QR Pass Generator ---
let qrcodeInstance = null;

function generateToken(e) {
  e.preventDefault();

  // Read User Entered Form Inputs
  const name = document.getElementById('farmerName').value.trim();
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const qty = document.getElementById('produceQty').value;
  const vehicle = document.getElementById('vehicleType').value;

  if (!name || !mandi || !commodity || !qty || !vehicle) {
    return alert("Please fill in all procurement details before proceeding.");
  }

  // Update Pass UI with User Data
  document.getElementById('summaryFarmerName').innerText = name;
  document.getElementById('summaryMandi').innerText = mandi;
  document.getElementById('summaryCommodity').innerText = commodity;
  document.getElementById('summaryQty').innerText = qty;
  document.getElementById('summaryVehicle').innerText = vehicle;

  document.getElementById('bookingCard').style.display = 'none';
  document.getElementById('passCard').style.display = 'block';
  
  const token = "#MND-" + Math.floor(10000 + Math.random() * 90000);
  document.getElementById('qrTokenId').innerText = "Token ID: " + token;
  
  // Render QR Code with Token Data
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = "";
  qrcodeInstance = new QRCode(qrContainer, {
    text: `${token}|${name}|${mandi}|${qty}T`,
    width: 160,
    height: 160,
    colorDark : "#1b4332",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });

  logSMS(`[SMS -> ${name}]: Token ${token} Confirmed for ${mandi}! Reserved for ${qty} Tons of ${commodity}. Target arrival: 45 mins.`);
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
  logSMS(`[SMS -> Gate Pass]: Token ${token} verified at gate! Proceed immediately to Weighbridge 2.`);
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
        // Continuous scan attempt messages ignored
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

// --- 5. Queue Engine & Utility Functions ---
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
