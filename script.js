// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker Registered:', reg.scope))
      .catch(err => console.error('Service Worker Registration Failed:', err));
  });
}

// Network Status Monitoring
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
  const statusElem = document.getElementById('connectionStatus');
  if (navigator.onLine) {
    statusElem.innerText = 'Online';
    statusElem.className = 'status-online';
  } else {
    statusElem.innerText = 'Offline';
    statusElem.className = 'status-offline';
  }
}

let isOtpVerified = false;

// OTP Handlers
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
    document.getElementById('otpHint').innerText = `Demo OTP generated: ${data.demoOtp}`;
  } catch (err) {
    alert('Failed to send OTP. Please check connection.');
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
      alert('Invalid OTP. Please try again.');
    }
  } catch (err) {
    alert('Verification error.');
  }
});

// Check Daily Quota Function
async function checkDailyQuota() {
  const date = document.getElementById('procurementDate').value;
  const mandi = document.getElementById('mandiSelect').value;
  const commodity = document.getElementById('commoditySelect').value;
  const submitBtn = document.getElementById('submitBookingBtn');
  const quotaMsg = document.getElementById('quotaMessage');

  if (date && mandi && commodity) {
    try {
      const res = await fetch(`/api/mandi/quota?date=${date}&mandi=${encodeURIComponent(mandi)}&commodity=${encodeURIComponent(commodity)}`);
      const data = await res.json();
      
      if (data.remainingQuotaTons <= 0) {
        quotaMsg.innerText = "❌ Daily quota reached for this date. Registrations closed!";
        quotaMsg.parentElement.className = "result-box danger-result";
        submitBtn.disabled = true;
      } else {
        quotaMsg.innerText = `✅ Available Capacity: ${data.remainingQuotaTons} Tons remaining for selected date.`;
        quotaMsg.parentElement.className = "result-box success-result";
        submitBtn.disabled = !isOtpVerified;
      }
    } catch (err) {
      console.error("Quota fetch failed:", err);
    }
  }
}

document.getElementById('procurementDate').addEventListener('change', checkDailyQuota);
document.getElementById('mandiSelect').addEventListener('change', checkDailyQuota);
document.getElementById('commoditySelect').addEventListener('change', checkDailyQuota);

// Form Submission
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
    } else {
      const errorData = await res.json();
      alert(`Booking Failed: ${errorData.error}`);
    }
  } catch (err) {
    alert('Error submitting booking.');
  }
});

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
}
