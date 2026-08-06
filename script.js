/* =========================================================
   PROJECT: Interactive Phishing Email Trainer & Detector
   DEVELOPER: Vignesh Kumar Verma
   BRANCH: B.Tech CSE (AI) - 1st Year
   COURSE: Web Development / Cyber Security Project
   ========================================================= */
// 40+ Examples Array (Fake & Real Emails)
const emails = [
    // --- PHISHING SCAMS (1-20) ---
    {
        sender: "support@my-bank-secure-verify.com",
        subject: "URGENT: Your Account Has Been Locked!",
        content: "Dear customer, we noticed suspicious activity on your account. Click the link immediately to verify your identity or your account will be suspended in 2 hours: http://bit.ly/fake-bank-login",
        isScam: true,
        reason: "🚩 Red Flags: Fake domain name, extreme urgency threat, and shortened link (bit.ly)."
    },
    {
        sender: "prize-winner@freelottery2026.net",
        subject: "Congratulations! You won $10,000!",
        content: "You have been selected as our grand winner. Reply to this email with your Bank Account details and OTP to claim your cash reward instantly!",
        isScam: true,
        reason: "🚩 Red Flags: Unofficial sender email, asking for private financial details and OTPs."
    },
    {
        sender: "security@amazon-login-update.info",
        subject: "Suspicious Activity Detected on Amazon Account",
        content: "Your order #98234 has been placed for $899. If you did not make this purchase, click here immediately to cancel: http://amazon-cancel-order.net",
        isScam: true,
        reason: "🚩 Red Flags: Fake domain (@amazon-login-update.info) and panic-inducing order scam."
    },
    {
        sender: "hr-department@gmail.com",
        subject: "Part-Time Job Offer: Earn ₹5000/day",
        content: "Dear Candidate, Your resume has been shortlisted for Work From Home job. Pay ₹500 registration fee to activate your account via UPI.",
        isScam: true,
        reason: "🚩 Red Flags: Official HR using free @gmail.com account and demanding upfront payment."
    },
    {
        sender: "admin@netflix-billing-alert.com",
        subject: "Payment Declined - Update Membership",
        content: "We were unable to process your monthly payment. Update your credit card details within 24 hours to avoid account termination.",
        isScam: true,
        reason: "🚩 Red Flags: Third-party domain asking for immediate credit card payment."
    },
    {
        sender: "income-tax-refund@tax-gov-india.org",
        subject: "Tax Refund Approved: ₹15,400",
        content: "Income Tax Department has approved your refund. Click the link to submit your bank account details and CVV to claim: http://bit.ly/itr-claim",
        isScam: true,
        reason: "🚩 Red Flags: Income Tax dept never uses .org domains or asks for CVVs via link."
    },
    {
        sender: "support@instagram-blue-tick.xyz",
        subject: "Verify Your Profile for Blue Badge",
        content: "Your account is eligible for Instagram Verification. Log in with your password at http://instabadge-verify.com within 12 hours.",
        isScam: true,
        reason: "🚩 Red Flags: Fake domain (.xyz) and credential harvesting trap."
    },
    {
        sender: "it-helpdesk@company-support-reset.com",
        subject: "Password Expires Today - Action Required",
        content: "Your corporate email password will expire in 1 hour. Keep your current password by verifying here: http://tinyurl.com/pass-reset-firm",
        isScam: true,
        reason: "🚩 Red Flags: External domain impersonating internal IT helpdesk."
    },
    {
        sender: "crypto-reward@free-bitcoin2026.com",
        subject: "0.25 BTC Transfer Pending",
        content: "You received 0.25 Bitcoin from an anonymous user. Pay 0.001 BTC gas fee to release funds to your wallet.",
        isScam: true,
        reason: "🚩 Red Flags: Fee advance scam involving cryptocurrency."
    },
    {
        sender: "delivery@fast-courier-update.com",
        subject: "Package Delivery Failed - Address Missing",
        content: "Your parcel couldn't be delivered. Update your address and pay ₹25 redelivery charge here: http://courier-track-redelivery.com",
        isScam: true,
        reason: "🚩 Red Flags: Phishing link demanding micro-payment to steal card details."
    },
    {
        sender: "apple-support@id-cloud-verify.net",
        subject: "Your Apple ID has been Locked",
        content: "For security reasons, your Apple ID was locked. Confirm your identity immediately at http://appleid-security-unlock.net",
        isScam: true,
        reason: "🚩 Red Flags: Apple uses apple.com, not .net domain."
    },
    {
        sender: "rewards@paytm-cashback-offer.com",
        subject: "You Received ₹2,000 Cashback!",
        content: "Scratch card won! Click to transfer ₹2,000 directly to your bank account via UPI PIN entry.",
        isScam: true,
        reason: "🚩 Red Flags: Receiving money NEVER requires entering your UPI PIN."
    },
    {
        sender: "admin@facebook-copyright-violation.org",
        subject: "Warning: Page Deletion in 24 Hours",
        content: "Your Facebook page violated copyright guidelines. Appeal now or your page will be permanently deleted: http://fb-appeal-centre.com",
        isScam: true,
        reason: "🚩 Red Flags: Social media threat scam to hijack page credentials."
    },
    {
        sender: "scholarship-dept@govt-free-laptop.in",
        subject: "Free Laptop Scheme 2026 Selection",
        content: "Congrats! You are selected for Govt Free Laptop Scheme. Fill details and share OTP sent to your phone.",
        isScam: true,
        reason: "🚩 Red Flags: Asking for OTP and unofficial fake govt domain."
    },
    {
        sender: "security@whatsapp-web-verify.biz",
        subject: "WhatsApp Web Security Alert",
        content: "Your WhatsApp account was logged in on a new device in Moscow. If this was not you, block immediately: http://wa-block-device.com",
        isScam: true,
        reason: "🚩 Red Flags: WhatsApp never sends email alerts with external login links."
    },
    {
        sender: "offers@flipkart-big-billion-sale.info",
        subject: "Claim iPhone 15 for ₹999 Only!",
        content: "Flash Sale Alert! Only 5 units left. Pay ₹999 now to book your smartphone before timer ends.",
        isScam: true,
        reason: "🚩 Red Flags: Too-good-to-be-true price and fake shopping domain."
    },
    {
        sender: "customer-care@sbi-kyc-update-portal.com",
        subject: "YONO SBI Account Suspension Alert",
        content: "Dear SBI User, your YONO account is suspended due to pending PAN update. Update PAN immediately: http://bit.ly/sbi-pan-update",
        isScam: true,
        reason: "🚩 Red Flags: SBI official site is sbi.co.in, not a bit.ly link."
    },
    {
        sender: "admin@zoom-meeting-invitation.online",
        subject: "Urgent Staff Meeting - CEO Joining",
        content: "Please join the emergency meeting right now using this meeting link: http://zoom-login-corporate.online",
        isScam: true,
        reason: "🚩 Red Flags: Fake Zoom domain designed to steal corporate credentials."
    },
    {
        sender: "verify@google-account-recovery.top",
        subject: "Google Drive Storage Exceeded - Files Deleting",
        content: "Your storage is 100% full. Upgrade storage for free within 2 hours or files will be permanently deleted.",
        isScam: true,
        reason: "🚩 Red Flags: Fake domain extension (.top) and false panic creation."
    },
    {
        sender: "lottery@kbc-crorepati-winner.net",
        subject: "KBC Sim Card Lucky Draw Winner: ₹25 Lakhs",
        content: "Your mobile number won ₹25,000,000 in KBC draw. Contact WhatsApp manager +91-9999999999 to claim.",
        isScam: true,
        reason: "🚩 Red Flags: Famous KBC lottery WhatsApp scam."
    },

    // --- SAFE / REAL EMAILS (21-40) ---
    {
        sender: "no-reply@collegeportal.edu.in",
        subject: "Mid-Term Exam Schedule Released",
        content: "Dear Students, The mid-term examination timetable for 1st Year B.Tech CSE has been uploaded to the official college portal. Please login to your official dashboard to view it.",
        isScam: false,
        reason: "✅ Safe Email: Official university domain (.edu.in), no personal data requested."
    },
    {
        sender: "no-reply@uidai.gov.in",
        subject: "Aadhaar Authentication Successful",
        content: "Dear Citizen, Your Aadhaar was used successfully for OTP e-KYC authentication at National Informatics Centre. If not done by you, contact 1947.",
        isScam: false,
        reason: "✅ Safe Email: Official government domain (@uidai.gov.in) informing about security activity without asking for sensitive inputs."
    },
    {
        sender: "alerts@hdfcbank.net",
        subject: "Transaction Alert: ₹500 Debited",
        content: "₹500.00 debited from your account xx1234 on 05-AUG-26 toward UPI/Store. Clear balance: ₹12,450. Do not share OTP/PIN with anyone.",
        isScam: false,
        reason: "✅ Safe Email: Standard official debit notification, explicitly warning NOT to share PIN/OTP."
    },
    {
        sender: "auto-confirm@amazon.in",
        subject: "Ordered: Data Structures & Algorithms Book",
        content: "Thank you for shopping with Amazon. Your order #408-1234567-8901234 has been confirmed and will arrive by Friday.",
        isScam: false,
        reason: "✅ Safe Email: Official amazon.in order confirmation with real order tracking."
    },
    {
        sender: "no-reply@swiggy.in",
        subject: "Order Delivered: Enjoy your meal!",
        content: "Your Swiggy order from Pizza Hut has been delivered by delivery partner Rahul. Check receipt attached in your app.",
        isScam: false,
        reason: "✅ Safe Email: Standard delivery receipt from official domain."
    },
    {
        sender: "no-reply@irctc.co.in",
        subject: "E-Ticket Booking Confirmation (PNR: 2415678901)",
        content: "Your train ticket for NDLS to BCT is confirmed. Coach S4, Birth 32. Wish you a safe journey.",
        isScam: false,
        reason: "✅ Safe Email: Official IRCTC domain and standard booking info."
    },
    {
        sender: "info@github.com",
        subject: "[GitHub] Security advisory detected in your repository",
        content: "We found a potential security vulnerability in your dependency. Review the advisory on github.com/dashboard.",
        isScam: false,
        reason: "✅ Safe Email: Official GitHub developer security alert."
    },
    {
        sender: "no-reply@linkedin.com",
        subject: "Vignesh, 5 people viewed your profile this week",
        content: "See who is looking at your profile and connect with recruiters in your network.",
        isScam: false,
        reason: "✅ Safe Email: Standard personalized social network digest."
    },
    {
        sender: "donotreply@google.com",
        subject: "Security Alert: New sign-in on Windows PC",
        content: "Your Google Account was signed in to from a new Windows device. If this was you, no action is needed.",
        isScam: false,
        reason: "✅ Safe Email: Official google.com security notification."
    },
    {
        sender: "accounts@coursera.org",
        subject: "Course Certificate Available: Python Basics",
        content: "Congratulations! You completed 'Python Basics'. Download your verified certificate from your student account dashboard.",
        isScam: false,
        reason: "✅ Safe Email: Official learning portal domain and clean announcement."
    },
    {
        sender: "newsletter@geeksforgeeks.org",
        subject: "Weekly Coding Challenge: Dynamic Programming",
        content: "Improve your DSA problem solving! Practice this week's 3 new problems on GeeksforGeeks practice portal.",
        isScam: false,
        reason: "✅ Safe Email: Standard educational platform newsletter."
    },
    {
        sender: "no-reply@uber.com",
        subject: "Your Wednesday evening trip with Uber",
        content: "Thanks for riding with us. Total fare: ₹180.00 paid via Uber Wallet. Trip details are available in your app.",
        isScam: false,
        reason: "✅ Safe Email: Official uber.com ride receipt."
    },
    {
        sender: "no-reply@bookmyshow.com",
        subject: "Movie Tickets Confirmed: Avengers",
        content: "Showtime: Tomorrow 6:00 PM. Screen 2, Seats H10-H11. Show M-ticket QR code at the entrance.",
        isScam: false,
        reason: "✅ Safe Email: Official booking receipt with no external links needed."
    },
    {
        sender: "updates@zomato.com",
        subject: "Your Zomato Gold Membership is Active",
        content: "Welcome to Zomato Gold! Enjoy up to 40% off on dining out and free delivery on food orders.",
        isScam: false,
        reason: "✅ Safe Email: Standard marketing email from official domain."
    },
    {
        sender: "billing@airtel.in",
        subject: "E-Bill for your Wi-Fi Fiber Connection",
        content: "Your broadband bill for July 2026 is ₹943. Due date: 15-AUG-2026. Auto-pay is enabled on your account.",
        isScam: false,
        reason: "✅ Safe Email: Official telecom operator bill notice."
    },
    {
        sender: "no-reply@incometax.gov.in",
        subject: "ITR Filing Confirmation AY 2026-27",
        content: "Your Income Tax Return has been successfully e-verified. Acknowledgement Number: 9812374102.",
        isScam: false,
        reason: "✅ Safe Email: Official .gov.in domain with filing receipt."
    },
    {
        sender: "support@duolingo.com",
        subject: "Keep your 10-day streak alive!",
        content: "It takes just 3 minutes to complete today's lesson. Don't lose your streak status!",
        isScam: false,
        reason: "✅ Safe Email: Educational app reminder."
    },
    {
        sender: "no-reply@paytm.com",
        subject: "Monthly Wallet Statement Attached",
        content: "Your Paytm wallet statement for the previous month is generated and attached for your records.",
        isScam: false,
        reason: "✅ Safe Email: Official fintech statement notification."
    },
    {
        sender: "career@tcs.com",
        subject: "NQT Registration Confirmation",
        content: "Dear Candidate, Registration for National Qualifier Test 2026 is complete. Hall ticket will be issued soon.",
        isScam: false,
        reason: "✅ Safe Email: Official corporate recruitment drive mail."
    },
    {
        sender: "notifications@leetcode.com",
        subject: "Weekly Contest #340 Starting Soon",
        content: "The weekly coding contest starts in 2 hours. Register now on LeetCode to boost your rating.",
        isScam: false,
        reason: "✅ Safe Email: Official competitive programming platform announcement."
    }
];

// Array ko random mix karne ke liye
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Array mix kar do
shuffleArray(emails);

let currentIndex = 0;

function loadEmail() {
    const current = emails[currentIndex];
    document.getElementById('email-sender').innerText = current.sender;
    document.getElementById('email-subject').innerText = current.subject;
    document.getElementById('email-content').innerText = current.content;
    document.getElementById('result-box').classList.add('hidden');
}

function checkAnswer(userSaysScam) {
    const current = emails[currentIndex];
    const resultBox = document.getElementById('result-box');
    const resultTitle = document.getElementById('result-title');
    const resultReason = document.getElementById('result-reason');

    if (userSaysScam === current.isScam) {
        resultTitle.innerText = "🎯 Correct Answer!";
        resultTitle.style.color = "#22c55e";
    } else {
        resultTitle.innerText = "❌ Incorrect!";
        resultTitle.style.color = "#ef4444";
    }

    resultReason.innerText = current.reason;
    resultBox.classList.remove('hidden');
}

function nextEmail() {
    currentIndex = (currentIndex + 1) % emails.length;
    loadEmail();
}

// Live Analyzer Logic (Smart Multi-Layer Detection)
function analyzeCustomEmail() {
    const rawText = document.getElementById('customEmailInput').value;
    const text = rawText.toLowerCase();
    const analysisResultBox = document.getElementById('customResult');
    
    if(!text.trim()) {
        alert("Pehle koi email text paste karein!");
        return;
    }

    // 1. Whitelist Domain Check
    const trustedDomains = [".gov.in", ".edu.in", ".nic.in", ".ac.in", "uidai.gov.in", "sbi.co.in", "incometax.gov.in"];
    const isWhitelisted = trustedDomains.some(domain => text.includes(domain));

    if(isWhitelisted) {
        analysisResultBox.innerHTML = `
            <h3 style="color:#22c55e;">✅ Verified Safe Email</h3>
            <p style="margin-top:5px; font-size:0.95rem;"><b>Security Score: 100/100</b> (Low Risk)</p>
            <p style="margin-top:8px; color:#cbd5e1; font-size:0.88rem;">🛡️ Official government or institutional source detected.</p>
        `;
        analysisResultBox.classList.remove('hidden');
        return;
    }

    // 2. Risk Scoring Engine
    let riskScore = 0;
    let detectedFlags = [];

    if(/(urgent|immediately|suspended|24 hours|2 hours|action required|account locked|unauthorized login)/i.test(text)) {
        riskScore += 25;
        detectedFlags.push("⚠️ High Urgency / Social Engineering Language (+25 Risk)");
    }
    if(/(otp|password|pin|cvv|bank account|credit card|ssn|aadhaar number)/i.test(text)) {
        riskScore += 35;
        detectedFlags.push("🚨 Sensitive Info Request (OTP / Password / Bank Details) (+35 Risk)");
    }
    if(/(bit\.ly|tinyurl|is\.gd|cutt\.ly|http:\/\/|click here|verify-account|login-now)/i.test(text)) {
        riskScore += 30;
        detectedFlags.push("🔗 Unsecure or Shortened / Hidden Link Detected (+30 Risk)");
    }
    if(/(\$|dollar|lottery|winner|free gift|cash prize|claim now|reward)/i.test(text)) {
        riskScore += 20;
        detectedFlags.push("💰 Financial Bait / Unrealistic Reward Offer (+20 Risk)");
    }
    if(/(dear customer|dear user|dear client|dear account holder)/i.test(text)) {
        riskScore += 10;
        detectedFlags.push("👤 Generic Non-Personalized Greeting (+10 Risk)");
    }

    if(riskScore >= 40) {
        analysisResultBox.innerHTML = `
            <h3 style="color:#ef4444;">🚨 High Risk: Suspicious Email Detected!</h3>
            <p style="margin-top:5px; font-weight:bold; color:#f87171;">Calculated Risk Score: ${riskScore}% (Phishing Alert)</p>
            <p style="margin-top:8px; text-align:left; font-size:0.9rem; font-weight:bold;">Detected Risk Indicators:</p>
            <ul style="text-align:left; margin-top:5px; padding-left:20px; font-size:0.88rem; color:#fca5a5;">
                ${detectedFlags.map(f => `<li style="margin-bottom:4px;">${f}</li>`).join('')}
            </ul>
        `;
    } else if(riskScore > 0 && riskScore < 40) {
        analysisResultBox.innerHTML = `
            <h3 style="color:#eab308;">⚠️ Medium Risk: Exercise Caution</h3>
            <p style="margin-top:5px; font-weight:bold; color:#fde047;">Calculated Risk Score: ${riskScore}% (Low Threat)</p>
            <ul style="text-align:left; margin-top:8px; padding-left:20px; font-size:0.88rem; color:#fef08a;">
                ${detectedFlags.map(f => `<li style="margin-bottom:4px;">${f}</li>`).join('')}
            </ul>
        `;
    } else {
        analysisResultBox.innerHTML = `
            <h3 style="color:#22c55e;">✅ Low Risk Email</h3>
            <p style="margin-top:5px; font-weight:bold; color:#86efac;">Calculated Risk Score: 0% (Clean)</p>
            <p style="margin-top:8px; color:#cbd5e1; font-size:0.88rem;">No common phishing keywords or threat patterns detected.</p>
        `;
    }

    analysisResultBox.classList.remove('hidden');
}

// Naya Sahi Tarika:
let currentIndex = 0;

// Emails Shuffle Function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
