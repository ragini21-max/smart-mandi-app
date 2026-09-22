package com.smartmandi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@SpringBootApplication
public class MandiApplication {
    public static void main(String[] args) {
        SpringApplication.run(MandiApplication.class, args);
    }
}

// ==========================================
// DATA TRANSFER OBJECTS (DTOs)
// ==========================================

class OtpRequest {
    private String phoneNumber;

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
}

class OtpVerifyRequest {
    private String phoneNumber;
    private String otpCode;

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    public String getOtpCode() { return otpCode; }
    public void setOtpCode(String otpCode) { this.otpCode = otpCode; }
}

class BookingRequest {
    private String farmerName;
    private String mandi;
    private LocalDate procurementDate;
    private String slotTime;
    private String commodity;
    private double produceQty;
    private String vehicleType;

    public String getFarmerName() { return farmerName; }
    public void setFarmerName(String farmerName) { this.farmerName = farmerName; }
    public String getMandi() { return mandi; }
    public void setMandi(String mandi) { this.mandi = mandi; }
    public LocalDate getProcurementDate() { return procurementDate; }
    public void setProcurementDate(LocalDate procurementDate) { this.procurementDate = procurementDate; }
    public String getSlotTime() { return slotTime; }
    public void setSlotTime(String slotTime) { this.slotTime = slotTime; }
    public String getCommodity() { return commodity; }
    public void setCommodity(String commodity) { this.commodity = commodity; }
    public double getProduceQty() { return produceQty; }
    public void setProduceQty(double produceQty) { this.produceQty = produceQty; }
    public String getVehicleType() { return vehicleType; }
    public void setVehicleType(String vehicleType) { this.vehicleType = vehicleType; }
}

class WeighmentRequest {
    private String tokenId;
    private double weight;

    public String getTokenId() { return tokenId; }
    public void setTokenId(String tokenId) { this.tokenId = tokenId; }
    public double getWeight() { return weight; }
    public void setWeight(double weight) { this.weight = weight; }
}

// ==========================================
// DOMAIN MODEL ENTITY
// ==========================================

class PassToken {
    private String tokenId;
    private String farmerName;
    private String mandi;
    private String commodity;
    private double requestedQty;
    private double verifiedQty;
    private String schedule;
    private String vehicleType;
    private int queuePosition;
    private String eta;
    private String stage; // BOOKED, GATE_VERIFIED, WEIGHED, APPROVED, PAID
    private String dbtTxnId;
    private double totalPayment;

    public PassToken() {}

    public PassToken(String tokenId, String farmerName, String mandi, String commodity, 
                     double requestedQty, String schedule, String vehicleType) {
        this.tokenId = tokenId;
        this.farmerName = farmerName;
        this.mandi = mandi;
        this.commodity = commodity;
        this.requestedQty = requestedQty;
        this.schedule = schedule;
        this.vehicleType = vehicleType;
        this.queuePosition = 3;
        this.eta = "10:45 AM";
        this.stage = "BOOKED";
    }

    public String getTokenId() { return tokenId; }
    public void setTokenId(String tokenId) { this.tokenId = tokenId; }
    public String getFarmerName() { return farmerName; }
    public void setFarmerName(String farmerName) { this.farmerName = farmerName; }
    public String getMandi() { return mandi; }
    public void setMandi(String mandi) { this.mandi = mandi; }
    public String getCommodity() { return commodity; }
    public void setCommodity(String commodity) { this.commodity = commodity; }
    public double getRequestedQty() { return requestedQty; }
    public void setRequestedQty(double requestedQty) { this.requestedQty = requestedQty; }
    public double getVerifiedQty() { return verifiedQty; }
    public void setVerifiedQty(double verifiedQty) { this.verifiedQty = verifiedQty; }
    public String getSchedule() { return schedule; }
    public void setSchedule(String schedule) { this.schedule = schedule; }
    public String getVehicleType() { return vehicleType; }
    public void setVehicleType(String vehicleType) { this.vehicleType = vehicleType; }
    public int getQueuePosition() { return queuePosition; }
    public void setQueuePosition(int queuePosition) { this.queuePosition = queuePosition; }
    public String getEta() { return eta; }
    public void setEta(String eta) { this.eta = eta; }
    public String getStage() { return stage; }
    public void setStage(String stage) { this.stage = stage; }
    public String getDbtTxnId() { return dbtTxnId; }
    public void setDbtTxnId(String dbtTxnId) { this.dbtTxnId = dbtTxnId; }
    public double getTotalPayment() { return totalPayment; }
    public void setTotalPayment(double totalPayment) { this.totalPayment = totalPayment; }
}

// ==========================================
// SERVICE LAYER
// ==========================================

@Service
class MandiService {

    private final Map<String, String> otpStore = new ConcurrentHashMap<>();
    private final Map<String, PassToken> tokenDatabase = new ConcurrentHashMap<>();
    private final Random random = new Random();

    public String generateOtp(String phoneNumber) {
        String otp = String.format("%04d", random.nextInt(10000));
        otpStore.put(phoneNumber, otp);
        return otp;
    }

    public boolean verifyOtp(String phoneNumber, String code) {
        String storedOtp = otpStore.get(phoneNumber);
        if (storedOtp != null && storedOtp.equals(code)) {
            otpStore.remove(phoneNumber);
            return true;
        }
        return false;
    }

    public PassToken createBooking(BookingRequest req) {
        String tokenId = String.format("#MND-%05d", random.nextInt(100000));
        String schedule = req.getProcurementDate() + " [" + req.getSlotTime() + "]";

        PassToken token = new PassToken(
            tokenId,
            req.getFarmerName(),
            req.getMandi(),
            req.getCommodity(),
            req.getProduceQty(),
            schedule,
            req.getVehicleType()
        );

        tokenDatabase.put(tokenId, token);
        return token;
    }

    public PassToken verifyGateEntry(String tokenId) {
        PassToken token = tokenDatabase.get(tokenId);
        if (token != null) {
            token.setStage("GATE_VERIFIED");
            token.setQueuePosition(1);
        }
        return token;
    }

    public PassToken recordWeight(String tokenId, double weight) {
        PassToken token = tokenDatabase.get(tokenId);
        if (token != null) {
            token.setVerifiedQty(weight);
            token.setStage("WEIGHED");
        }
        return token;
    }

    public PassToken approveAndPay(String tokenId) {
        PassToken token = tokenDatabase.get(tokenId);
        if (token != null) {
            double ratePerTon = 28000.0;
            double qty = token.getVerifiedQty() > 0 ? token.getVerifiedQty() : token.getRequestedQty();
            double total = qty * ratePerTon;

            token.setTotalPayment(total);
            token.setDbtTxnId(String.format("DBT-2026-%06d", random.nextInt(1000000)));
            token.setStage("PAID");
        }
        return token;
    }

    public PassToken getTokenDetails(String tokenId) {
        return tokenDatabase.get(tokenId);
    }
}

// ==========================================
// REST CONTROLLER
// ==========================================

@RestController
@RequestMapping("/api/mandi")
@CrossOrigin(origins = "*")
class MandiController {

    private final MandiService mandiService;

    public MandiController(MandiService mandiService) {
        this.mandiService = mandiService;
    }

    @PostMapping("/otp/send")
    public ResponseEntity<Map<String, String>> sendOtp(@RequestBody OtpRequest request) {
        String otp = mandiService.generateOtp(request.getPhoneNumber());
        return ResponseEntity.ok(Collections.singletonMap("demoOtp", otp));
    }

    @PostMapping("/otp/verify")
    public ResponseEntity<Map<String, Boolean>> verifyOtp(@RequestBody OtpVerifyRequest request) {
        boolean isValid = mandiService.verifyOtp(request.getPhoneNumber(), request.getOtpCode());
        if (isValid) {
            return ResponseEntity.ok(Collections.singletonMap("success", true));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("success", false));
    }

    @PostMapping("/booking")
    public ResponseEntity<PassToken> createBooking(@RequestBody BookingRequest request) {
        PassToken token = mandiService.createBooking(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(token);
    }

    @PostMapping("/gate/verify")
    public ResponseEntity<?> verifyGate(@RequestParam String tokenId) {
        PassToken token = mandiService.verifyGateEntry(tokenId);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Token ID not found");
        }
        return ResponseEntity.ok(token);
    }

    @PostMapping("/weighment")
    public ResponseEntity<?> recordWeighment(@RequestBody WeighmentRequest request) {
        PassToken token = mandiService.recordWeight(request.getTokenId(), request.getWeight());
        if (token == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Token ID not found");
        }
        return ResponseEntity.ok(token);
    }

    @PostMapping("/payment/approve")
    public ResponseEntity<?> approvePayment(@RequestParam String tokenId) {
        PassToken token = mandiService.approveAndPay(tokenId);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Token ID not found");
        }
        return ResponseEntity.ok(token);
    }

    @GetMapping("/pass/{tokenId}")
    public ResponseEntity<?> getPassInfo(@PathVariable String tokenId) {
        PassToken token = mandiService.getTokenDetails(tokenId);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pass not found");
        }
        return ResponseEntity.ok(token);
    }
}
