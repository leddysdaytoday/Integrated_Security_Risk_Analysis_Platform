const EMPLOYEES_BASE = [
  {
    id: "EMP001",
    username: "lina.sihman",
    department: "الإدارة",
    name: "لينا ال سحمان"
  },
  {
    id: "EMP002",
    username: "ohoud.zahrani",
    department: "المبيعات",
    name: "عهود الزهراني"
  },
  {
    id: "EMP003",
    username: "lujain.qarni",
    department: "الموارد البشرية",
    name: "لجين القرني"
  },
  {
    id: "EMP004",
    username: "shayma.juaid",
    department: "المالية",
    name: "شيماء الجعيد"
  },
  {
    id: "EMP005",
    username: "jood.harbi",
    department: "تقنية المعلومات",
    name: "جود الحربي"
  },

  {
    id: "EMP006",
    username: "dana.shihri",
    department: "الإدارة",
    name: "دانة الشهري"
  },
  {
    id: "EMP007",
    username: "rowan.zahrani",
    department: "المبيعات",
    name: "روان الزهراني"
  },
  {
    id: "EMP008",
    username: "hadeel.mutairi",
    department: "الموارد البشرية",
    name: "هديل المطيري"
  },
  {
    id: "EMP009",
    username: "maryam.malki",
    department: "المالية",
    name: "مريم المالكي"
  },
  {
    id: "EMP010",
    username: "aisha.qarni",
    department: "تقنية المعلومات",
    name: "عائشة القرني"
  },

  {
    id: "EMP011",
    username: "iman.subai",
    department: "الإدارة",
    name: "إيمان السبيعي"
  },
  {
    id: "EMP012",
    username: "kholood.shamrani",
    department: "المبيعات",
    name: "خلود الشمراني"
  },
  {
    id: "EMP013",
    username: "esraa.balawi",
    department: "الموارد البشرية",
    name: "إسراء البلوي"
  },
  {
    id: "EMP014",
    username: "mona.alhasan",
    department: "المالية",
    name: "منى الحسن"
  },
  {
    id: "EMP015",
    username: "maha.yami",
    department: "تقنية المعلومات",
    name: "مها اليامي"
  },

  {
    id: "EMP016",
    username: "hajar.shahrani",
    department: "الإدارة",
    name: "هاجر الشهراني"
  },
  {
    id: "EMP017",
    username: "basma.harthi",
    department: "المبيعات",
    name: "بسمة الحارثي"
  },
  {
    id: "EMP018",
    username: "asma.dosari",
    department: "الموارد البشرية",
    name: "أسماء الدوسري"
  },
  {
    id: "EMP019",
    username: "najla.abdallah",
    department: "المالية",
    name: "نجلاء العبد الله"
  },
  {
    id: "EMP020",
    username: "shrouq.tamimi",
    department: "تقنية المعلومات",
    name: "شروق التميمي"
  },

  {
    id: "EMP021",
    username: "abeer.rashid",
    department: "الإدارة",
    name: "عبير الرشيد"
  },
  {
    id: "EMP022",
    username: "may.salem",
    department: "المبيعات",
    name: "مي السالم"
  },
  {
    id: "EMP023",
    username: "arwa.suwailem",
    department: "الموارد البشرية",
    name: "أروى السويلم"
  },
  {
    id: "EMP024",
    username: "shatha.mutliq",
    department: "المالية",
    name: "شذى المطلق"
  },
  {
    id: "EMP025",
    username: "fatimah.zaid",
    department: "تقنية المعلومات",
    name: "فاطمة الزيد"
  },

  {
    id: "EMP026",
    username: "nada.suliman",
    department: "الإدارة",
    name: "ندى السلمان"
  },
  {
    id: "EMP027",
    username: "tahani.bassam",
    department: "المبيعات",
    name: "تهاني البسام"
  },
  {
    id: "EMP028",
    username: "rana.omar",
    department: "الموارد البشرية",
    name: "رنا العمر"
  },
  {
    id: "EMP029",
    username: "layan.sahemi",
    department: "المالية",
    name: "ليان السحيمي"
  },
  {
    id: "EMP030",
    username: "njood.issa",
    department: "تقنية المعلومات",
    name: "نجود العيسى"
  },

  {
    id: "EMP031",
    username: "hanadi.abdk",
    department: "الإدارة",
    name: "هنادي العبد الكريم"
  },
  {
    id: "EMP032",
    username: "hanan.fawzan",
    department: "المبيعات",
    name: "حنان الفوزان"
  },
  {
    id: "EMP033",
    username: "anood.jaber",
    department: "الموارد البشرية",
    name: "عنود الجابر"
  },
  {
    id: "EMP034",
    username: "athir.subai",
    department: "المالية",
    name: "أثير السبيعي"
  },
  {
    id: "EMP035",
    username: "ghada.abdm",
    department: "تقنية المعلومات",
    name: "غادة العبد المحسن"
  },

  {
    id: "EMP036",
    username: "rua.bakr",
    department: "الإدارة",
    name: "رؤى البكر"
  },
  {
    id: "EMP037",
    username: "saja.kilani",
    department: "المبيعات",
    name: "سجى الكيلاني"
  },
  {
    id: "EMP038",
    username: "najwa.humaid",
    department: "الموارد البشرية",
    name: "نجوى الحميد"
  },
  {
    id: "EMP039",
    username: "butheina.turki",
    department: "المالية",
    name: "بثينة التركي"
  },
  {
    id: "EMP040",
    username: "dalal.anazi",
    department: "تقنية المعلومات",
    name: "دلال العنزي"
  }
];

const IP_LOCATIONS = [
  "Saudi Arabia",
  "US",
  "Germany",
  "India",
  "China",
  "Brazil"
];
const AUTH_METHODS = ["PASSWORD", "TOKEN", "BIOMETRIC"];
const OS_LIST = [
  "Windows 10",
  "Windows 11",
  "Linux Ubuntu 22",
  "Android 14",
  "iOS 17"
];
const VPN_IPS = Array.from({ length: 48 }, (_, i) => `10.8.0.${i + 2}`);
const MFA_METHODS = ["SMS", "APP", "EMAIL"];
const EVENT_TYPES = [
  "FILE_ACCESS",
  "USB_INSERT",
  "EMAIL_SENT",
  "EMAIL_RECEIVED",
  "PRINTER_USE",
  "CONFIG_CHANGE",
  "privilege_escalation"
];
const SEVERITY_MAP = {
  FILE_ACCESS: "Low",
  USB_INSERT: "Medium",
  EMAIL_SENT: "Low",
  EMAIL_RECEIVED: "Low",
  PRINTER_USE: "Low",
  CONFIG_CHANGE: "High",
  privilege_escalation: "Critical"
};

const DATE_START = new Date(2025, 0, 1);
const DATE_END = new Date(2025, 0, 30);

const RISK_WEIGHTS = {
  failed_login_burst: 10,
  impossible_travel: 15,
  new_device: 5,
  bad_ip_reputation: 20,
  unusual_hours: 8,
  privilege_escalation: 25,
  concurrent_sessions: 12,
  mfa_failures: 15,
  auth_method_change: 10
};

const RISK_LEVELS = [
  {
    min: 0,
    max: 20,
    level: "Low",
    action: "مواصلة المراقبة ولا يتطلب إجراء فوري"
  },
  {
    min: 20,
    max: 40,
    level: "Medium",
    action: "إشعار الموظف والمدير، وفرض إعادة تعيين كلمة المرور خلال 72 ساعة"
  },
  {
    min: 40,
    max: 70,
    level: "High",
    action: "إنهاء الجلسات النشطة، حجب الـ IP مؤقتًا، وبدء استجابة حادثة أمنية"
  },
  {
    min: 70,
    max: 9999,
    level: "Critical",
    action: "تعطيل الحساب فورًا، عزل الجهاز، وفتح تحقيق شامل"
  }
];

const EMAIL_WEIGHTS = {
  phishing_click: 25,
  credential_submission: 30,
  malware_attachment: 25,
  repeated_suspicious_emails: 12,
  spam_risky_email_activity: 8
};

const WEB_WEIGHTS = {
  high_risk_url: 28,
  shortened_url_clicked: 10,
  malware_download: 35,
  unsafe_browsing: 18
};

const MAIL_WEB_ACTIONS = {
  email: {
    Critical:
      "إيقاف البريد فورًا، عزل الروابط والمرفقات، فتح تحقيق شامل على صندوق البريد والمرسلين.",
    High:
      "تعطيل روابط البريد تلقائيًا، تفعيل العزل للمرفقات، إشعار فريق الأمن لبدء استجابة حادث.",
    Medium:
      "تفعيل فلتر تشديدي على الرسائل الواردة 7 أيام + فرض معاينة روابط آمنة قبل الفتح.",
    Low: "استمرار المراقبة وتحسين عوامل التوعية للمستخدم."
  },
  web: {
    Critical:
      "حظر الاتصال بالإنترنت مؤقتًا للجهاز، عزل النظام، مراجعة سجلات التحميل والتنفيذ.",
    High:
      "منع الوصول للنطاقات عالية الخطورة، إغلاق الجلسات المفتوحة، مراجعة الوكيل/البروكسي.",
    Medium:
      "تفعيل تحذير التصفح الآمن + تقييد تنزيل الملفات التنفيذية لمدة 72 ساعة.",
    Low: "مراقبة مستمرة وتحديث قوائم الحظر."
  }
};

function normalizeMailWebScores(listOfIndicatorTotals) {
  if (!listOfIndicatorTotals.length) return [];
  const max = Math.max(...listOfIndicatorTotals.map((x) => x.total));
  const minBase = 3;

  return listOfIndicatorTotals.map((x) => {
    let score = max > 0 ? Math.round((x.total / max) * 100) : 0;
    if (score === 0 && x.total > 0) score = minBase;
    return {
      id: x.id,
      name: x.name,
      department: x.department,
      total: x.total,
      score
    };
  });
}

function getMailWebLevel(score) {
  if (score >= 85) return "Critical";
  if (score >= 70) return "High";
  if (score >= 40) return "Medium";
  return "Low";
}

function computeTotalsForEmail(ind) {
  return (
    (ind.phishing_click || 0) * EMAIL_WEIGHTS.phishing_click +
    (ind.credential_submission || 0) * EMAIL_WEIGHTS.credential_submission +
    (ind.malware_attachment || 0) * EMAIL_WEIGHTS.malware_attachment +
    (ind.repeated_suspicious_emails || 0) *
      EMAIL_WEIGHTS.repeated_suspicious_emails +
    (ind.spam_risky_email_activity || 0) *
      EMAIL_WEIGHTS.spam_risky_email_activity
  );
}

function computeTotalsForWeb(ind) {
  return (
    (ind.high_risk_url || 0) * WEB_WEIGHTS.high_risk_url +
    (ind.shortened_url_clicked || 0) * WEB_WEIGHTS.shortened_url_clicked +
    (ind.malware_download || 0) * WEB_WEIGHTS.malware_download +
    (ind.unsafe_browsing || 0) * WEB_WEIGHTS.unsafe_browsing
  );
}

function getMailWebAction(context, level) {
  return MAIL_WEB_ACTIONS[context]?.[level] || "استمرار المراقبة فقط";
}

function translateRiskLevel(level) {
  switch (level) {
    case "Critical":
      return "حرج";
    case "High":
      return "عالي";
    case "Medium":
      return "متوسط";
    case "Low":
      return "منخفض";
    default:
      return level;
  }
}

function translateIndicator(key) {
  const t = {
    failed_login_burst: "محاولات تسجيل دخول فاشلة متكررة",
    impossible_travel: "سفر مستحيل (تغير موقع غير منطقي)",
    new_device: "تسجيل دخول من جهاز جديد",
    bad_ip_reputation: "تسجيل دخول من IP مشبوه",
    unusual_hours: "تسجيل دخول في غير أوقات العمل المعتادة",
    privilege_escalation: "محاولة رفع الصلاحيات",
    concurrent_sessions: "جلسات متزامنة من دول مختلفة",
    mfa_failures: "فشل متكرر في المصادقة متعددة العوامل (MFA)",
    auth_method_change: "تغيير طريقة المصادقة",
    phishing_click: "نقر على رابط تصيد احتيالي",
    malware_attachment: "فتح مرفق ضار محتمل",
    suspicious_url_visit: "زيارة موقع إلكتروني مشبوه",
    dark_web_access: "محاولة الوصول للويب المظلم",
    unauthorized_usb: "توصيل جهاز USB غير مصرح به"
  };
  return t[key] || key;
}

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomChoice = (arr) => arr[randomInt(0, arr.length - 1)];

function randomTime(start = DATE_START, end = DATE_END) {
  const diff = end.getTime() - start.getTime();
  const newT = start.getTime() + Math.random() * diff;
  const date = new Date(newT);
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

function arrayToCsv(data) {
  if (!data.length) return "";
  const headers = Object.keys(data[0]);
  const rows = [headers.join(",")];
  for (const row of data) {
    const vals = headers.map((h) => {
      let v = row[h];
      if (v === null || v === undefined) v = "";
      v = String(v);
      if (v.includes(",") || v.includes('"') || v.includes("\n")) {
        v = `"${v.replace(/"/g, '""')}"`;
      }
      return v;
    });
    rows.push(vals.join(","));
  }
  return rows.join("\n");
}

function downloadFile(filename, text) {
  const a = document.createElement("a");
  a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(text);
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function showAlert(message, type = "success") {
  const ok = document.getElementById("alertSuccess");
  const err = document.getElementById("alertError");
  if (!ok || !err) return;

  ok.classList.remove("active");
  err.classList.remove("active");

  const target = type === "success" ? ok : type === "error" ? err : ok;
  target.textContent = message;
  target.classList.add("active");

  setTimeout(() => target.classList.remove("active"), 5000);
}

function showAlertMailWeb(message, type = "success") {
  const ok = document.getElementById("alertSuccessMailWeb");
  const err = document.getElementById("alertErrorMailWeb");
  if (!ok || !err) return;

  ok.classList.remove("active");
  err.classList.remove("active");

  const target = type === "success" ? ok : type === "error" ? err : ok;
  target.textContent = message;
  target.classList.add("active");

  setTimeout(() => target.classList.remove("active"), 5000);
}

let employees = [];
let filteredEmployees = [];
let pieChart = null;
let barChart = null;
let uploadedFilesData = {};
let generatedFiles = [];
let emailActivityLogs = [];
let webActivityLogs = [];

function generateLoginActivity(count) {
  const records = [];
  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);
    const ts = randomTime();
    records.push({
      timestamp: ts,
      employee_id: emp.id,
      username: emp.username,
      employee_name: emp.name,
      department: emp.department,
      device_id: `DEVICE-${randomInt(1, 100)}`,
      ip_address: `192.168.${randomInt(0, 255)}.${randomInt(1, 254)}`,
      status: randomChoice([
        "SUCCESS",
        "SUCCESS",
        "SUCCESS",
        "FAILED",
        "FAILED"
      ]),
      ip_location: randomChoice(IP_LOCATIONS),
      auth_method: randomChoice(AUTH_METHODS),
      ip_reputation: Math.random() < 0.05 ? "BAD" : "GOOD",
      hour: new Date(ts).getHours()
    });
  }
  return records;
}

function generateDeviceInventory(count) {
  const records = [];
  const patchStart = new Date(2025, 5, 1);
  const patchEnd = new Date(2025, 10, 1);

  EMPLOYEES_BASE.forEach((emp) => {
    const deviceId = `${emp.username}-DEV1`;
    records.push({
      employee_id: emp.id,
      username: emp.username,
      device_id: deviceId,
      os_version: randomChoice(OS_LIST),
      ip_address: `10.0.${randomInt(0, 255)}.${randomInt(1, 254)}`,
      last_patch_date: randomTime(patchStart, patchEnd).split(" ")[0],
      security_status: randomChoice([
        "Healthy",
        "Vulnerable",
        "Outdated Patch"
      ]),
      status: randomChoice(["New", "Old"])
    });
  });
  return records;
}

function generateVpnConnections(count) {
  const records = [];
  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);
    records.push({
      timestamp: randomTime(),
      employee_id: emp.id,
      username: emp.username,
      vpn_gateway: "VPN-GATEWAY-01",
      ip_address: randomChoice(VPN_IPS),
      connection_result: randomChoice(["SUCCESS", "SUCCESS", "FAILED"]),
      duration_seconds: randomInt(300, 3600),
      country: randomChoice(IP_LOCATIONS)
    });
  }
  return records;
}

function generateMfaLogs(count) {
  const records = [];
  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);
    records.push({
      timestamp: randomTime(),
      employee_id: emp.id,
      username: emp.username,
      method: randomChoice(MFA_METHODS),
      status: randomChoice([
        "SUCCESS",
        "SUCCESS",
        "SUCCESS",
        "FAILED",
        "FAILED"
      ])
    });
  }
  return records;
}

function generateSecurityEvents(count) {
  const records = [];
  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);
    const evType = randomChoice(EVENT_TYPES);
    records.push({
      timestamp: randomTime(),
      employee_id: emp.id,
      username: emp.username,
      event_type: evType,
      severity: SEVERITY_MAP[evType],
      outcome: randomChoice(["OK", "OK", "VIOLATION"])
    });
  }
  return records;
}

function generateEmailActivityLogs(count = 50) {
  const rows = [];

  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);

    const threat = randomChoice(["None", "None", "Spam", "Phish", "Malware"]);
    const clicked = threat === "Phish" ? randomInt(0, 1) : 0;
    const opened = threat === "Malware" ? randomInt(0, 1) : 0;

    rows.push({
      EmployeeID: emp.id,
      ReceivedTimestamp: randomTime(),
      SenderAddress: randomChoice([
        "security@company.com",
        "info@bank-alert.com",
        "update@hr-benefits.net",
        "important@company.com",
        "newsletter@randomnews.net"
      ]),
      RecipientAddress: emp.username + "@company.com",
      Subject: randomChoice([
        "Important Update",
        "Verify Your Account",
        "Payroll Notice",
        "Suspicious Login",
        "Monthly Newsletter"
      ]),
      MessageID: "MSG-" + randomInt(10000, 99999),
      Status: randomChoice(["Delivered", "Delivered", "Quarantined"]),
      ThreatTypes: threat,
      Directionality: "Inbound",
      AttachmentType: randomChoice(["none", "pdf", "zip", "exe"]),
      ClickedURL: clicked,
      OpenedAttachment: opened,
      ReportedAsPhish: randomInt(0, 1)
    });
  }

  return rows;
}

function generateWebActivityLogs(count = 60) {
  const rows = [];

  const safeSites = [
    "https://www.google.com",
    "https://www.microsoft.com",
    "https://www.kau.edu.sa",
    "https://www.wikipedia.org"
  ];

  const highRiskSites = [
    "http://random-shop.net/sale",
    "http://suspicious-offers.xyz",
    "http://unknown-downloads.net"
  ];

  const shortenedSites = [
    "https://bit.ly/3a2FHG2",
    "https://tinyurl.com/ycx-login",
    "https://t.co/a8LLogin"
  ];

  const maliciousSites = [
    "http://dark-site.xyz/malware.exe",
    "http://malicious-downloads.ru/payload",
    "http://phishy-bank-login.com"
  ];

  for (let i = 0; i < count; i++) {
    const emp = randomChoice(EMPLOYEES_BASE);

    const r = randomInt(1, 100);
    let url;
    if (r <= 50) {
      url = safeSites[Math.floor(Math.random() * safeSites.length)];
    } else if (r <= 70) {
      url = highRiskSites[Math.floor(Math.random() * highRiskSites.length)];
    } else if (r <= 85) {
      url = shortenedSites[Math.floor(Math.random() * shortenedSites.length)];
    } else {
      url = maliciousSites[Math.floor(Math.random() * maliciousSites.length)];
    }

    let risk = "Low";
    if (maliciousSites.includes(url)) risk = "Malicious";
    else if (highRiskSites.includes(url)) risk = "High";
    else if (shortenedSites.includes(url))
      risk = randomChoice(["Medium", "High"]);
    else risk = randomChoice(["Low", "Medium"]);

    let action;
    if (risk === "Malicious") {
      action = Math.random() < 0.5 ? "Blocked" : "Downloaded";
    } else {
      action = randomChoice(["Visited", "Downloaded"]);
    }

    let domain = url.replace("http://", "").replace("https://", "");
    const slashIdx = domain.indexOf("/");
    if (slashIdx !== -1) domain = domain.slice(0, slashIdx);

    let category = "Social";
    if (maliciousSites.includes(url)) category = "Malware";
    else if (highRiskSites.includes(url)) category = "Suspicious";
    else if (shortenedSites.includes(url)) category = "Unknown";
    else category = randomChoice(["Social", "Shopping", "Banking"]);

    rows.push({
      EmployeeID: emp.id,
      Timestamp: randomTime(),
      URL: url,
      Domain: domain,
      Category: category,
      RiskLevel: risk,
      HTTP_Status:
        action === "Blocked" ? 403 : randomChoice([200, 200, 302, 404, 500]),
      Referrer: randomChoice(["", "google.com", "linkedin.com"]),
      UserAction: action
    });
  }

  return rows;
}

class CSVAnalyzer {
  constructor() {
    this.loginData = null;
    this.deviceData = null;
    this.vpnData = null;
    this.mfaData = null;
    this.securityData = null;
  }

  loadData(type, data) {
    if (type === "loginActivity") this.loginData = data;
    if (type === "deviceInventory") this.deviceData = data;
    if (type === "vpnConnections") this.vpnData = data;
    if (type === "mfaLogs") this.mfaData = data;
    if (type === "securityEvents") this.securityData = data;
  }

  analyzeEmployee(empId) {
    return {
      failed_login_burst: this.checkFailedLoginBurst(empId),
      impossible_travel: this.checkImpossibleTravel(empId),
      new_device: this.checkNewDevice(empId),
      bad_ip_reputation: this.checkBadIP(empId),
      unusual_hours: this.checkUnusualHours(empId),
      privilege_escalation: this.checkPrivilegeEscalation(empId),
      concurrent_sessions: this.checkConcurrentSessions(empId),
      mfa_failures: this.checkMFAFailures(empId),
      auth_method_change: this.checkAuthMethodChange(empId)
    };
  }

  extractEmployeeIds() {
    const ids = new Set();
    [
      this.loginData,
      this.deviceData,
      this.vpnData,
      this.mfaData,
      this.securityData
    ].forEach((arr) => {
      if (!arr) return;
      arr.forEach((r) => {
        if (r.employee_id) ids.add(String(r.employee_id).trim());
      });
    });
    return Array.from(ids);
  }

  checkFailedLoginBurst(empId) {
    if (!this.loginData) return 0;
    const failed = this.loginData
      .filter(
        (r) =>
          r.employee_id === empId && String(r.status).toUpperCase() === "FAILED"
      )
      .map((r) => new Date(r.timestamp))
      .sort((a, b) => a - b);

    const timeWindow = 10 * 60 * 1000;
    const needed = 5;
    let bursts = 0;

    for (let i = 0; i <= failed.length - needed; i++) {
      const start = failed[i].getTime();
      const end = failed[i + needed - 1].getTime();
      if (end - start <= timeWindow) {
        bursts++;
        i += needed - 1;
      }
    }
    return bursts;
  }

  checkImpossibleTravel(empId) {
    if (!this.loginData) return 0;
    const succ = this.loginData
      .filter(
        (r) =>
          r.employee_id === empId &&
          String(r.status).toUpperCase() === "SUCCESS"
      )
      .map((r) => ({
        timestamp: new Date(r.timestamp),
        location: r.ip_location
      }))
      .sort((a, b) => a.timestamp - b.timestamp);

    const limitHours = 1;
    for (let i = 0; i < succ.length - 1; i++) {
      const cur = succ[i];
      const next = succ[i + 1];
      if (cur.location !== next.location) {
        const diffHrs = (next.timestamp - cur.timestamp) / (1000 * 60 * 60);
        if (diffHrs < limitHours) return 1;
      }
    }
    return 0;
  }

  checkNewDevice(empId) {
    if (!this.loginData || !this.deviceData) return 0;

    const known = new Set(
      this.deviceData
        .filter((r) => r.employee_id === empId)
        .map((r) => r.device_id)
    );

    const used = this.loginData
      .filter(
        (r) =>
          r.employee_id === empId &&
          String(r.status).toUpperCase() === "SUCCESS" &&
          r.device_id
      )
      .map((r) => r.device_id);

    const newDevices = new Set();
    used.forEach((d) => {
      if (!known.has(d)) newDevices.add(d);
    });
    return newDevices.size;
  }

  checkBadIP(empId) {
    if (!this.loginData) return 0;
    return this.loginData.filter(
      (r) =>
        r.employee_id === empId &&
        String(r.status).toUpperCase() === "SUCCESS" &&
        String(r.ip_reputation || "").toUpperCase() === "BAD"
    ).length;
  }

  checkUnusualHours(empId) {
    if (!this.loginData) return 0;
    return this.loginData.filter((r) => {
      if (
        r.employee_id !== empId ||
        String(r.status).toUpperCase() !== "SUCCESS"
      )
        return false;
      const hour = new Date(r.timestamp).getHours();
      return hour < 7 || hour >= 19;
    }).length;
  }

  checkPrivilegeEscalation(empId) {
    if (!this.securityData) return 0;
    return this.securityData.filter(
      (r) =>
        r.employee_id === empId &&
        String(r.event_type).toLowerCase() === "privilege_escalation"
    ).length;
  }

  checkConcurrentSessions(empId) {
    if (!this.vpnData) return 0;

    const succ = this.vpnData
      .filter(
        (r) =>
          r.employee_id === empId &&
          String(r.connection_result).toUpperCase() === "SUCCESS"
      )
      .map((r) => ({ timestamp: new Date(r.timestamp), ip: r.ip_address }))
      .sort((a, b) => a.timestamp - b.timestamp);

    const win = 2 * 60 * 1000;
    for (let i = 0; i < succ.length - 1; i++) {
      const cur = succ[i];
      for (let j = i + 1; j < succ.length; j++) {
        const next = succ[j];
        if (next.timestamp - cur.timestamp > win) break;
        if (cur.ip !== next.ip) return 1;
      }
    }
    return 0;
  }

  checkMFAFailures(empId) {
    if (!this.mfaData) return 0;
    return this.mfaData.filter(
      (r) =>
        r.employee_id === empId && String(r.status).toUpperCase() === "FAILED"
    ).length;
  }

  checkAuthMethodChange(empId) {
    if (!this.loginData) return 0;
    const logins = this.loginData.filter(
      (r) =>
        r.employee_id === empId && String(r.status).toUpperCase() === "SUCCESS"
    );
    const methods = new Set(logins.map((r) => r.auth_method));
    return methods.size > 1 ? 1 : 0;
  }
}

const analyzer = new CSVAnalyzer();

function calculateRiskScore(indicators) {
  let score = 0;
  for (const k in indicators) {
    const count = indicators[k] || 0;
    const weight = RISK_WEIGHTS[k] || 0;
    score += count * weight;
  }
  return Math.min(score, 100);
}

function analyzeEmailWebActivity(emailLogs, webLogs) {
  const emailMap = {};
  const webMap = {};

  EMPLOYEES_BASE.forEach((emp) => {
    emailMap[emp.id] = {
      phishing_click: 0,
      credential_submission: 0,
      malware_attachment: 0,
      repeated_suspicious_emails: 0,
      spam_risky_email_activity: 0
    };
    webMap[emp.id] = {
      high_risk_url: 0,
      shortened_url_clicked: 0,
      malware_download: 0,
      unsafe_browsing: 0
    };
  });

  emailLogs.forEach((row) => {
    const id = row.EmployeeID;
    const e = emailMap[id];
    if (!e) return;

    const threat = row.ThreatTypes || "None";
    const clicked = Number(row.ClickedURL) || 0;
    const opened = Number(row.OpenedAttachment) || 0;
    const subject = (row.Subject || "").toLowerCase();

    if (threat === "Phish" && clicked === 1) {
      e.phishing_click += 1;
    }

    const looksLikeCredential =
      threat === "Phish" &&
      clicked === 1 &&
      (subject.includes("verify") ||
        subject.includes("account") ||
        subject.includes("login") ||
        subject.includes("تحقق") ||
        subject.includes("كلمة المرور"));

    if (looksLikeCredential) {
      e.credential_submission += 1;
    }

    if (threat === "Malware" && opened === 1) {
      e.malware_attachment += 1;
    }

    if (threat !== "None") {
      e.repeated_suspicious_emails += 1;
    }

    if (threat === "Spam") {
      e.spam_risky_email_activity += 1;
    }
  });

  webLogs.forEach((row) => {
    const id = row.EmployeeID;
    const w = webMap[id];
    if (!w) return;

    const risk = row.RiskLevel || "Low";
    const url = row.URL || "";
    const action = row.UserAction || "Visited";

    if (risk === "High") {
      w.high_risk_url += 1;
    }

    if (
      url.includes("bit.ly") ||
      url.includes("tinyurl") ||
      url.includes("t.co")
    ) {
      w.shortened_url_clicked += 1;
    }

    if (risk === "Malicious" && action === "Downloaded") {
      w.malware_download += 1;
    }

    if (risk === "Malicious" || action === "Blocked") {
      w.unsafe_browsing += 1;
    }
  });

  return { email: emailMap, web: webMap };
}

function getRiskLevel(score) {
  for (const lvl of RISK_LEVELS) {
    if (score >= lvl.min && score < lvl.max)
      return { level: lvl.level, action: lvl.action };
  }
  return { level: "Low", action: "Continue monitoring" };
}

function generateSampleData() {
  const loading = document.getElementById("loadingIndicator");
  loading && loading.classList.add("active");
  uploadedFilesData = {};
  generatedFiles = [];

  const defs = [
    {
      filename: "login_activity.csv",
      count: 200,
      generator: generateLoginActivity,
      type: "loginActivity"
    },
    {
      filename: "device_inventory.csv",
      count: 40,
      generator: generateDeviceInventory,
      type: "deviceInventory"
    },
    {
      filename: "vpn_connections.csv",
      count: 150,
      generator: generateVpnConnections,
      type: "vpnConnections"
    },
    {
      filename: "mfa_logs.csv",
      count: 170,
      generator: generateMfaLogs,
      type: "mfaLogs"
    },
    {
      filename: "security_events.csv",
      count: 125,
      generator: generateSecurityEvents,
      type: "securityEvents"
    }
  ];

  setTimeout(() => {
    try {
      defs.forEach((def) => {
        const records = def.generator(def.count);
        uploadedFilesData[def.type] = records;
        const csvText = arrayToCsv(records);
        generatedFiles.push({
          filename: def.filename,
          csvData: csvText,
          size: new TextEncoder().encode(csvText).length
        });
      });

      analyzeGeneratedData();

      const exportBtn = document.getElementById("exportBtn");
      const showBtn = document.getElementById("showFilesBtn");
      if (exportBtn) exportBtn.disabled = false;
      if (showBtn) showBtn.disabled = false;

      showAlert("✅ تم توليد وتحليل البيانات التجريبية بنجاح!", "success");
    } catch (e) {
      console.error(e);
      showAlert(
        "❌ حدث خطأ أثناء توليد وتحليل البيانات: " + e.message,
        "error"
      );
    } finally {
      loading && loading.classList.remove("active");
    }
  }, 800);
}

function analyzeGeneratedData() {
  for (const t in uploadedFilesData) {
    analyzer.loadData(t, uploadedFilesData[t]);
  }

  const ids = analyzer.extractEmployeeIds();
  if (!ids.length) {
    showAlert("لم يتم العثور على بيانات موظفين في الملفات", "error");
    return;
  }

  employees = [];
  ids.forEach((empId) => {
    const indicators = analyzer.analyzeEmployee(empId);
    const score = calculateRiskScore(indicators);
    const riskInfo = getRiskLevel(score);
    const empInfo = EMPLOYEES_BASE.find((e) => e.id === empId) || {
      name: `Employee ${empId}`,
      department: randomChoice(["Engineering", "Sales", "HR", "Finance", "IT"])
    };

    const daysAgo = randomInt(0, 7);
    const lastActivity = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    employees.push({
      id: empId,
      name: empInfo.name,
      department: empInfo.department,
      score,
      riskLevel: riskInfo.level,
      action: riskInfo.action,
      indicators,
      lastActivity
    });
  });

  filteredEmployees = employees.slice();
  updateUI();
}

function updateUI() {
  const totalScore = employees.reduce((s, e) => s + e.score, 0);
  const avgScore = employees.length
    ? Math.round(totalScore / employees.length)
    : 0;

  const elTotal = document.getElementById("totalEmployees");
  const elAvg = document.getElementById("avgScore");
  if (elTotal) elTotal.textContent = employees.length;
  if (elAvg) elAvg.textContent = avgScore;

  const counts = employees.reduce((acc, e) => {
    acc[e.riskLevel] = (acc[e.riskLevel] || 0) + 1;
    return acc;
  }, {});

  const cCrit = document.getElementById("criticalCount");
  const cHigh = document.getElementById("highCount");
  const cMed = document.getElementById("mediumCount");
  const cLow = document.getElementById("lowCount");

  if (cCrit) cCrit.textContent = counts["Critical"] || 0;
  if (cHigh) cHigh.textContent = counts["High"] || 0;
  if (cMed) cMed.textContent = counts["Medium"] || 0;
  if (cLow) cLow.textContent = counts["Low"] || 0;

  renderEmployeeTable(filteredEmployees);
  renderCharts(counts);

  const chartsContainer = document.getElementById("chartsContainer");
  if (chartsContainer) chartsContainer.style.display = "grid";
}

function renderEmployeeTable(data) {
  const tbody = document.getElementById("employeeTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:40px; color:#94a3b8;">لا توجد نتائج مطابقة لفلتر البحث.</td></tr>`;
    return;
  }

  data.forEach((emp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.name}<br><small style="color:#94a3b8;">(${emp.id})</small></td>
      <td>${emp.department}</td>
      <td>${emp.score}</td>
      <td><span class="risk-badge ${emp.riskLevel}">${translateRiskLevel(
      emp.riskLevel
    )}</span></td>
      <td>${emp.lastActivity}</td>
      <td><button class="btn-link" onclick="showDetails('${
        emp.id
      }')">التفاصيل</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function filterEmployees() {
  const search = (
    document.getElementById("searchInput")?.value || ""
  ).toLowerCase();
  const filter = document.getElementById("filterSelect")?.value || "all";

  filteredEmployees = employees.filter((emp) => {
    const sMatch =
      emp.id.toLowerCase().includes(search) ||
      emp.name.toLowerCase().includes(search) ||
      emp.department.toLowerCase().includes(search);

    const fMatch = filter === "all" || emp.riskLevel === filter;
    return sMatch && fMatch;
  });

  renderEmployeeTable(filteredEmployees);
}

function renderCharts(counts) {
  const labels = ["Critical", "High", "Medium", "Low"];
  const data = labels.map((l) => counts[l] || 0);
  const colors = ["#ef4444", "#f97316", "#eab308", "#10b981"];

  const pieCtx = document.getElementById("riskPieChart")?.getContext("2d");
  const barCtx = document.getElementById("deptBarChart")?.getContext("2d");

  if (!pieCtx || !barCtx) return;

  if (pieChart) pieChart.destroy();
  pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["حرج", "عالي", "متوسط", "منخفض"],
      datasets: [{ data, backgroundColor: colors, hoverOffset: 4 }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: "white" } } }
    }
  });

  const deptScores = employees.reduce((acc, e) => {
    acc[e.department] = acc[e.department] || { sum: 0, count: 0 };
    acc[e.department].sum += e.score;
    acc[e.department].count += 1;
    return acc;
  }, {});

  const deptLabels = Object.keys(deptScores);
  const deptData = deptLabels.map((d) =>
    Math.round(deptScores[d].sum / deptScores[d].count)
  );

  if (barChart) barChart.destroy();
  barChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: deptLabels,
      datasets: [
        {
          label: "متوسط درجة المخاطر",
          data: deptData,
          backgroundColor: "#3b82f6",
          borderColor: "#2563eb",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { color: "white" },
          grid: { color: "#334155" }
        },
        x: {
          ticks: { color: "white" },
          grid: { color: "#334155" }
        }
      },
      plugins: { legend: { labels: { color: "white" } } }
    }
  });
}

function showDetails(empId) {
  const emp = employees.find((e) => e.id === empId);
  if (!emp) return;

  const nameEl = document.getElementById("modalEmployeeName");
  const infoEl = document.getElementById("modalEmployeeInfo");
  const bodyEl = document.getElementById("modalBody");

  if (nameEl) nameEl.textContent = emp.name;
  if (infoEl)
    infoEl.textContent = `${emp.id} | ${emp.department} | المخاطر: ${emp.riskLevel} (${emp.score})`;

  let html = `
    <h3 style="color:#f59e0b; margin-bottom:15px;">مؤشرات المخاطر المكتشفة</h3>
    <ul style="list-style:none; padding-right:0;">
  `;

  for (const k in emp.indicators) {
    const count = emp.indicators[k];
    const weight = RISK_WEIGHTS[k] || 0;
    if (count > 0) {
      const readable = k.replace(/_/g, " ");
      html += `
      <li style="margin-bottom:10px; padding:10px; border-bottom:1px dashed #334155;">
        <strong>${translateIndicator(k)}:</strong> ${count} مرة
      </li>`;
    }
  }

  html += `
    </ul>
    <h3 style="color:#10b981; margin-top:20px; margin-bottom:15px;">الإجراء الموصى به</h3>
    <p style="background:rgba(16,185,129,0.1); padding:15px; border-radius:8px;">
      ${emp.action}
    </p>
  `;

  if (bodyEl) bodyEl.innerHTML = html;
  openModal("detailModal");
}

function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("active");
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("active");
}
function closeModalOnOutside(event, modalId) {
  const modal = document.getElementById(modalId);
  const content = modal?.querySelector(".modal-content");
  if (
    modal &&
    event.target === modal &&
    content &&
    !content.contains(event.target)
  ) {
    closeModal(modalId);
  }
}

function openFilesModal() {
  const container = document.getElementById("fileListContainer");
  if (!container) {
    openModal("filesModal");
    return;
  }

  container.innerHTML = "";
  if (!generatedFiles.length) {
    container.innerHTML = `<p style="text-align:center; color:#94a3b8;">لم يتم توليد أي ملفات بعد.</p>`;
    openModal("filesModal");
    return;
  }

  generatedFiles.forEach((file, i) => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const row = document.createElement("div");
    row.className = "file-row";
    row.innerHTML = `
      <div class="file-info">
        <div class="file-name">${file.filename}</div>
        <div class="file-size">${sizeKB} KB</div>
      </div>
      <div class="file-actions">
        <button class="btn btn-primary" onclick="previewFile(${i})">معاينة</button>
        <button class="btn btn-success" onclick="downloadGeneratedFile(${i})">تنزيل</button>
      </div>
    `;
    container.appendChild(row);
  });

  openModal("filesModal");
}

function downloadGeneratedFile(i) {
  const file = generatedFiles[i];
  if (file && file.csvData) {
    downloadFile(file.filename, file.csvData);
  }
}

function previewFile(i) {
  const file = generatedFiles[i];
  if (!file || !file.csvData) return;
  const titleEl = document.getElementById("previewModalTitle");
  const contentEl = document.getElementById("previewModalContent");
  if (titleEl) titleEl.textContent = file.filename;
  if (contentEl) {
    const lines = file.csvData.split("\n").slice(0, 20).join("\n");
    contentEl.textContent = lines;
  }
  openModal("previewModal");
}

function exportData() {
  if (!employees.length) {
    showAlert("لا توجد بيانات للتقرير.", "error");
    return;
  }

  const report = employees.map((emp) => ({
    Employee_ID: emp.id,
    Employee_Name: emp.name,
    Department: emp.department,
    Risk_Score: emp.score,
    Risk_Level: emp.riskLevel,
    Last_Activity: emp.lastActivity,
    Recommended_Action: emp.action,
    Indicator_Failed_Login_Burst: emp.indicators.failed_login_burst,
    Indicator_Impossible_Travel: emp.indicators.impossible_travel,
    Indicator_New_Device: emp.indicators.new_device,
    Indicator_Bad_IP: emp.indicators.bad_ip_reputation,
    Indicator_Unusual_Hours: emp.indicators.unusual_hours,
    Indicator_Privilege_Escalation: emp.indicators.privilege_escalation,
    Indicator_Concurrent_Sessions: emp.indicators.concurrent_sessions,
    Indicator_MFA_Failures: emp.indicators.mfa_failures,
    Indicator_Auth_Method_Change: emp.indicators.auth_method_change
  }));

  const csv = arrayToCsv(report);
  downloadFile("employee_risk_report.csv", csv);
  showAlert("📥 تم تصدير تقرير المخاطر بنجاح!", "success");
}

let awarenessContent = {};

const RISK_CATEGORIES = {
  "المصادقة والوصول": [
    "failed_login_burst",
    "impossible_travel",
    "new_device",
    "bad_ip_reputation",
    "unusual_hours",
    "concurrent_sessions",
    "mfa_failures",
    "auth_method_change"
  ],
  " البريد الإلكتروني": ["phishing_click", "malware_attachment"],
  "نشاط الويب": ["suspicious_url_visit", "dark_web_access"]
};

const DEFAULT_AWARENESS_CONTENT = {
  failed_login_burst: {
    id: "video01",
    title: "🛡️ أمان كلمة المرور",
    text: "فيديو توعوي عن أهمية اختيار كلمة مرور قوية وتجنب التخمين المتكرر.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  impossible_travel: {
    id: "video02",
    title: "🌐 استخدام VPN الآمن",
    text:
      "شرح إجراءات تسجيل الدخول من مواقع جغرافية مختلفة وتجنب استخدام أدوات الـ VPN غير المصرح بها.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  new_device: {
    id: "video03",
    title: "💻 تأمين الأجهزة الشخصية",
    text: "إرشادات لضمان تأمين الأجهزة الجديدة التي يتم استخدامها للعمل.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  bad_ip_reputation: {
    id: "video04",
    title: "📍 خطورة الشبكات العامة",
    text: "تنبيه حول المخاطر الأمنية لاستخدام شبكات الإنترنت المشبوهة.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  unusual_hours: {
    id: "video05",
    title: "🕒 سياسة ساعات العمل",
    text: "تذكير بسياسات العمل عن بُعد وأهمية الإبلاغ عن أي دخول غير اعتيادي.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  privilege_escalation: {
    id: "video06",
    title: "⏫ إدارة الصلاحيات",
    text:
      "توعية للمطورين حول المسؤولية في إدارة الصلاحيات وتجنب محاولات التصعيد.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  concurrent_sessions: {
    id: "video07",
    title: "👤 الجلسات المتعددة",
    text: "شرح لمخاطر فتح جلسات عمل متزامنة وكيفية إغلاق الجلسات عند الانتهاء.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  mfa_failures: {
    id: "video08",
    title: "🔐 قوة MFA",
    text:
      "تأكيد على أهمية المصادقة متعددة العوامل وكيفية التعامل مع فشل المحاولات المتكررة.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  auth_method_change: {
    id: "video09",
    title: "🔄 تحديث طرق المصادقة",
    text: "إرشادات حول كيفية تغيير طرق المصادقة المعتمدة بشكل آمن.",
    link: "https://lujainalqarni.github.io/Awareness-and-Security-Platform/"
  },
  phishing_click: {
    id: "video10",
    title: "📧 التصيد الاحتيالي",
    text: "فيديو عن كيفية التعرف على رسائل التصيد وتجنب النقر.",
    link:
      "https://lujainalqarni.github.io/Awareness-and-Email-Security-Platform/"
  },
  malware_attachment: {
    id: "video11",
    title: "🦠 التعامل مع المرفقات",
    text: "دليل فحص وتأمين المرفقات في البريد.",
    link:
      "https://lujainalqarni.github.io/Awareness-and-Email-Security-Platform/"
  },
  suspicious_url_visit: {
    id: "video12",
    title: "⚠️ التصفح الآمن",
    text: "إرشادات حول تصفح الويب وتجنب المواقع المشبوهة.",
    link: "https://lujainalqarni.github.io/Secure-Browsing-Awareness-Platform/"
  },
  dark_web_access: {
    id: "video13",
    title: "⚫ مخاطر الويب المظلم",
    text: "تنبيه حول خطورة محاولة الوصول للويب المظلم.",
    link: "https://lujainalqarni.github.io/Secure-Browsing-Awareness-Platform/"
  },
  unauthorized_usb: {
    id: "video14",
    title: "💾 أمان USB",
    text: "سياسة الشركة حول أجهزة USB غير المصرح بها.",
    link: "https://security-link/usb-policy"
  }
};

const AWARENESS_MAPPING = {
  publish_failed_login_burst: "failed_login_burst",
  publish_impossible_travel: "impossible_travel",
  publish_new_device: "new_device",
  publish_bad_ip_reputation: "bad_ip_reputation",
  publish_unusual_hours: "unusual_hours",
  publish_privilege_escalation: "privilege_escalation",
  publish_concurrent_sessions: "concurrent_sessions",
  publish_mfa_failures: "mfa_failures",
  publish_auth_method_change: "auth_method_change"
};

Object.assign(awarenessContent, DEFAULT_AWARENESS_CONTENT);

function getTargetedEmployees(publishButtonId, employeesData) {
  const indicatorKey = AWARENESS_MAPPING[publishButtonId];
  if (!indicatorKey) return [];

  return employeesData
    .filter((emp) => {
      const c = emp.indicators?.[indicatorKey] || 0;
      return c > 0;
    })
    .map((emp) => ({
      id: emp.id,
      name: emp.name,
      department: emp.department,
      risk_score: emp.score,
      indicator_count: emp.indicators[indicatorKey]
    }));
}

function handlePublish(publishButtonId, indicatorKey) {
  if (typeof employees === "undefined") {
    showAlert("خطأ: لا توجد بيانات موظفين لتحليل التوعية.", "error");
    return;
  }

  const targeted = getTargetedEmployees(publishButtonId, employees);
  const modal = document.getElementById("publishModal");
  const listDiv = document.getElementById("modalTargetList");
  const titleEl = document.getElementById("modalTitle");
  const subEl = document.getElementById("modalSubtitle");

  const indName = translateIndicator(indicatorKey);

  if (!targeted.length) {
    showAlert(`لا يوجد موظفون حاليًا وقعوا في مؤشر "${indName}".`, "success");
    return;
  }

  if (titleEl) titleEl.textContent = `قائمة المستهدفين لتوعية: ${indName}`;
  if (subEl)
    subEl.textContent = `تم العثور على ${targeted.length} موظفاً وقعوا في هذا المؤشر.`;

  let html = `<table dir="rtl"><thead><tr>
      <th>الاسم</th><th>القسم</th><th>نقاط الخطر</th><th>مرات الوقوع</th>
    </tr></thead><tbody>`;
  targeted.forEach((emp) => {
    const riskColor =
      emp.risk_score >= 80 ? 'style="color:#c0392b; font-weight:bold;"' : "";
    html += `<tr>
      <td>${emp.name}</td>
      <td>${emp.department}</td>
      <td ${riskColor}>${emp.risk_score}</td>
      <td>${emp.indicator_count}</td>
    </tr>`;
  });
  html += "</tbody></table>";

  if (listDiv) listDiv.innerHTML = html;
  if (modal) modal.style.display = "block";
}

function closeModal2() {
  const modal = document.getElementById("publishModal");
  if (modal) modal.style.display = "none";
  const allResultDivs = document.querySelectorAll(
    '[id^="target_list_results_"]'
  );
  allResultDivs.forEach((d) => (d.innerHTML = ""));
}

function renderAwarenessCenter() {
  const saved = localStorage.getItem("awarenessContent");
  if (saved) Object.assign(awarenessContent, JSON.parse(saved));

  const container = document.getElementById("awarenessContent");
  if (!container) return;

  container.innerHTML = "";

  for (const category in RISK_CATEGORIES) {
    const indicators = RISK_CATEGORIES[category];
    let html = `<div class="category-group">
      <h3 class="category-title">${category}</h3>
      <div class="category-indicators">`;

    indicators.forEach((key) => {
      const translation = translateIndicator(key);
      const content = awarenessContent[key] || {
        title: translation,
        text: "",
        link: ""
      };

      html += `
        <div class="awareness-item">
          <h4>${translation}</h4>
          <button class="btn btn-edit" onclick="toggleEditMode('${key}', true)">✏️ تعديل</button>
          <div id="aware_display_${key}" class="display-mode">
            <div style="font-weight:600;margin-bottom:5px;">عنوان التوعية:</div>
            <p class="display-field" id="display_title_${key}">${
        content.title
      }</p>
            <div style="font-weight:600;margin-bottom:5px;">رابط المادة:</div>
            <p class="display-field" id="display_link_${key}">
              ${
                content.link
                  ? `<a href="${content.link}" target="_blank">${content.link}</a>`
                  : "لا يوجد رابط"
              }
            </p>
          </div>

          <div style="margin-top:15px; text-align:center;">
            <button
              id="publish_${key}"
              onclick="handlePublish('publish_${key}', '${key}')"
              style="background-color:#007bff; color:white; padding:10px 20px; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">
              نشر للموظفين المستهدفين 🎯
            </button>
            <div id="target_list_results_${key}" style="margin-top:15px; border-top:1px solid #ccc; padding-top:10px;"></div>
          </div>

          <div id="aware_edit_${key}" class="edit-mode">
            <input type="text" id="input_title_${key}" value="${content.title.replace(
        /"/g,
        "&quot;"
      )}" />
            <textarea id="input_text_${key}">${content.text}</textarea>
            <input type="text" id="input_link_${key}" value="${content.link.replace(
        /"/g,
        "&quot;"
      )}" />
            <div style="text-align:left;margin-top:15px;">
              <button class="btn btn-save" onclick="saveContent('${key}')">💾 حفظ التغييرات</button>
              <button class="btn btn-cancel" onclick="toggleEditMode('${key}', false)">إلغاء</button>
            </div>
          </div>
        </div>`;
    });

    html += "</div></div>";
    container.innerHTML += html;
  }
}

function toggleEditMode(key, enable) {
  const displayDiv = document.getElementById(`aware_display_${key}`);
  const editDiv = document.getElementById(`aware_edit_${key}`);
  const editBtn = displayDiv?.previousElementSibling;

  if (!displayDiv || !editDiv || !editBtn) return;

  if (enable) {
    displayDiv.style.display = "none";
    editDiv.style.display = "block";
    editBtn.style.display = "none";

    const content = awarenessContent[key] || DEFAULT_AWARENESS_CONTENT[key];
    const t = document.getElementById(`input_title_${key}`);
    const x = document.getElementById(`input_text_${key}`);
    const l = document.getElementById(`input_link_${key}`);
    if (t) t.value = content.title;
    if (x) x.value = content.text;
    if (l) l.value = content.link;

    const res = document.getElementById(`target_list_results_${key}`);
    if (res) res.innerHTML = "";
  } else {
    displayDiv.style.display = "block";
    editDiv.style.display = "none";
    editBtn.style.display = "block";
  }
}

function saveContent(key) {
  const t = document.getElementById(`input_title_${key}`)?.value.trim() || "";
  const x = document.getElementById(`input_text_${key}`)?.value.trim() || "";
  const l = document.getElementById(`input_link_${key}`)?.value.trim() || "";

  if (!awarenessContent[key]) awarenessContent[key] = {};
  awarenessContent[key].title = t;
  awarenessContent[key].text = x;
  awarenessContent[key].link = l;

  localStorage.setItem("awarenessContent", JSON.stringify(awarenessContent));

  const dt = document.getElementById(`display_title_${key}`);
  const dx = document.getElementById(`display_text_${key}`);
  const dl = document.getElementById(`display_link_${key}`);

  if (dt) dt.textContent = t;
  if (dx) dx.textContent = x;
  if (dl)
    dl.innerHTML = l
      ? `<a href="${l}" target="_blank">${l}</a>`
      : "لا يوجد رابط";

  toggleEditMode(key, false);
  showAlert(
    `✅ تم حفظ محتوى التوعية لـ: ${translateIndicator(key)} بنجاح!`,
    "success"
  );
}

let currentMailWebBoard = "email";
let employeesEmail = [];
let employeesWeb = [];
let pieChartMailWeb = null;
let barChartMailWeb = null;
let generatedFilesMailWeb = [];

function setMailWebBoard(board) {
  currentMailWebBoard = board;

  const tabs = document.querySelectorAll(".tabs .tab-btn");
  tabs.forEach((btn) => btn.classList.remove("active"));

  const emailSec = document.getElementById("emailSectionMailWeb");
  const webSec = document.getElementById("webSectionMailWeb");

  if (board === "email") {
    tabs.forEach((btn) => {
      if (btn.dataset.target === "emailSectionMailWeb")
        btn.classList.add("active");
    });
    if (emailSec) emailSec.classList.add("active");
    if (webSec) webSec.classList.remove("active");
  } else {
    tabs.forEach((btn) => {
      if (btn.dataset.target === "webSectionMailWeb")
        btn.classList.add("active");
    });
    if (webSec) webSec.classList.add("active");
    if (emailSec) emailSec.classList.remove("active");
  }

  const pageTitle = document.getElementById("currentViewTitle");
  const innerTitle = document.querySelector(
    "#emailWebAnalysisView .header-title h2"
  );

  if (board === "email") {
    if (pageTitle) pageTitle.textContent = "مركز تحليل البريد الإلكتروني";
    if (innerTitle) innerTitle.textContent = "📧 مركز تحليل البريد الإلكتروني";
  } else {
    if (pageTitle) pageTitle.textContent = "مركز تحليل نشاط الويب";
    if (innerTitle) innerTitle.textContent = "🌐 مركز تحليل نشاط الويب";
  }

  updateMailWebUI();
}

function openEmailBoard() {
  setMailWebBoard("email");
  switchView("emailWebAnalysisView", "لوحة تحليلات البريد والمواقع");
}

function openWebBoard() {
  setMailWebBoard("web");
  switchView("emailWebAnalysisView", "لوحة تحليلات البريد والمواقع");
}

function generateMailWebData() {
  const loading = document.getElementById("loadingIndicatorMailWeb");
  if (loading) loading.classList.add("active");

  setTimeout(() => {
    const isEmailBoard = currentMailWebBoard === "email";
    const targetArray = isEmailBoard ? employeesEmail : employeesWeb;

    targetArray.length = 0;
    generatedFilesMailWeb = [];

    emailActivityLogs = generateEmailActivityLogs(50);
    webActivityLogs = generateWebActivityLogs(60);

    const {
      email: emailIndicators,
      web: webIndicators
    } = analyzeEmailWebActivity(emailActivityLogs, webActivityLogs);

    const indicatorsMap = isEmailBoard ? emailIndicators : webIndicators;

    const totalsPerEmp = EMPLOYEES_BASE.map((emp) => {
      const baseInd =
        indicatorsMap[emp.id] ||
        (isEmailBoard
          ? {
              phishing_click: 0,
              credential_submission: 0,
              malware_attachment: 0,
              repeated_suspicious_emails: 0,
              spam_risky_email_activity: 0
            }
          : {
              high_risk_url: 0,
              shortened_url_clicked: 0,
              malware_download: 0,
              unsafe_browsing: 0
            });

      const total = isEmailBoard
        ? computeTotalsForEmail(baseInd)
        : computeTotalsForWeb(baseInd);

      return { emp, indicators: baseInd, total };
    });

    const normalizedInput = totalsPerEmp.map((t) => ({
      id: t.emp.id,
      name: t.emp.name,
      department: t.emp.department,
      total: t.total
    }));

    const normalized = normalizeMailWebScores(normalizedInput);

    const scoreById = {};
    normalized.forEach((n) => {
      scoreById[n.id] = n;
    });

    totalsPerEmp.forEach(({ emp, indicators }) => {
      const norm = scoreById[emp.id] || {
        score: 0,
        total: 0,
        name: emp.name,
        department: emp.department
      };

      const score = norm.score || 0;
      const level = getMailWebLevel(score);
      const action = getMailWebAction(isEmailBoard ? "email" : "web", level);

      const daysAgo = randomInt(0, 10);
      const lastActivity = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

      const record = {
        id: emp.id,
        name: emp.name,
        department: emp.department,
        score,
        riskLevel: level,
        action,
        indicators,
        lastActivity
      };

      if (isEmailBoard) {
        employeesEmail.push(record);
      } else {
        employeesWeb.push(record);
      }
    });

    const logCsv = isEmailBoard
      ? arrayToCsv(emailActivityLogs)
      : arrayToCsv(webActivityLogs);

    generatedFilesMailWeb.push({
      filename: isEmailBoard
        ? "email_activity_log.csv"
        : "web_activity_log.csv",
      csvData: logCsv,
      size: new TextEncoder().encode(logCsv).length
    });

    const exportBtn = document.getElementById("btnExportMailWeb");
    const showBtn = document.getElementById("btnShowFilesMailWeb");
    if (exportBtn) exportBtn.disabled = false;
    if (showBtn) showBtn.disabled = false;

    updateMailWebUI();
    showAlertMailWeb("✅ تم توليد وتحليل البيانات التجريبية بنجاح!", "success");

    if (loading) loading.classList.remove("active");
  }, 700);
}

function updateMailWebUI() {
  const arr = currentMailWebBoard === "email" ? employeesEmail : employeesWeb;
  if (!arr.length) {
    const ids = [
      "totalEmployeesMailWeb",
      "criticalCountMailWeb",
      "highCountMailWeb",
      "mediumCountMailWeb",
      "lowCountMailWeb",
      "avgScoreMailWeb"
    ];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = "0";
    });
    return;
  }

  const total = arr.reduce((s, e) => s + e.score, 0);
  const avg = arr.length ? Math.round(total / arr.length) : 0;

  const totalEl = document.getElementById("totalEmployeesMailWeb");
  const avgEl = document.getElementById("avgScoreMailWeb");
  if (totalEl) totalEl.textContent = arr.length;
  if (avgEl) avgEl.textContent = avg;

  const counts = arr.reduce((acc, e) => {
    acc[e.riskLevel] = (acc[e.riskLevel] || 0) + 1;
    return acc;
  }, {});

  const cCrit = document.getElementById("criticalCountMailWeb");
  const cHigh = document.getElementById("highCountMailWeb");
  const cMed = document.getElementById("mediumCountMailWeb");
  const cLow = document.getElementById("lowCountMailWeb");

  if (cCrit) cCrit.textContent = counts["Critical"] || 0;
  if (cHigh) cHigh.textContent = counts["High"] || 0;
  if (cMed) cMed.textContent = counts["Medium"] || 0;
  if (cLow) cLow.textContent = counts["Low"] || 0;

  renderMailWebTables();
  renderMailWebCharts(arr, counts);
}

function renderMailWebTables() {
  const arr = currentMailWebBoard === "email" ? employeesEmail : employeesWeb;

  const tbodyEmail = document.getElementById("employeeTableBodyMailWeb");
  const tbodyWeb = document.getElementById("employeeTableBodyWebMailWeb");

  if (tbodyEmail) tbodyEmail.innerHTML = "";
  if (tbodyWeb) tbodyWeb.innerHTML = "";

  if (!arr.length) {
    const emptyRow = `
      <tr>
        <td colspan="6" style="text-align:center; padding:40px; color:#94a3b8;">
          لا توجد بيانات. انقر "توليد بيانات اللوحة الحالية"
        </td>
      </tr>`;
    if (tbodyEmail) tbodyEmail.innerHTML = emptyRow;
    if (tbodyWeb) tbodyWeb.innerHTML = emptyRow;
    return;
  }

  arr.forEach((emp) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.name}<br><small style="color:#94a3b8;">(${emp.id})</small></td>
      <td>${emp.department}</td>
      <td>${emp.score}</td>
      <td><span class="risk-badge ${emp.riskLevel}">${translateRiskLevel(
      emp.riskLevel
    )}</span></td>
      <td>${emp.lastActivity}</td>
      <td>
        <button class="btn-link" onclick="showDetailsMailWeb('${currentMailWebBoard}','${
      emp.id
    }')">
          التفاصيل
        </button>
      </td>
    `;

    if (currentMailWebBoard === "email" && tbodyEmail) {
      tbodyEmail.appendChild(tr);
    } else if (currentMailWebBoard === "web" && tbodyWeb) {
      tbodyWeb.appendChild(tr);
    }
  });
}

function renderMailWebCharts(arr, counts) {
  const pieCtx = document
    .getElementById("riskPieChartMailWeb")
    ?.getContext("2d");
  const barCtx = document
    .getElementById("deptBarChartMailWeb")
    ?.getContext("2d");
  const container = document.getElementById("chartsContainerMailWeb");
  if (!pieCtx || !barCtx || !container) return;

  container.style.display = "grid";

  const labels = ["Critical", "High", "Medium", "Low"];
  const data = labels.map((l) => counts[l] || 0);
  const colors = ["#ef4444", "#f97316", "#eab308", "#10b981"];

  if (pieChartMailWeb) pieChartMailWeb.destroy();
  pieChartMailWeb = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["حرج", "عالي", "متوسط", "منخفض"],
      datasets: [{ data, backgroundColor: colors }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: "white" } } }
    }
  });

  const deptScores = arr.reduce((acc, e) => {
    acc[e.department] = acc[e.department] || { sum: 0, count: 0 };
    acc[e.department].sum += e.score;
    acc[e.department].count += 1;
    return acc;
  }, {});
  const deptLabels = Object.keys(deptScores);
  const deptData = deptLabels.map((d) =>
    Math.round(deptScores[d].sum / deptScores[d].count)
  );

  if (barChartMailWeb) barChartMailWeb.destroy();
  barChartMailWeb = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: deptLabels,
      datasets: [
        {
          label: "متوسط درجة المخاطر",
          data: deptData,
          backgroundColor: "#3b82f6",
          borderColor: "#2563eb",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: { color: "white" },
          grid: { color: "#334155" }
        },
        x: {
          ticks: { color: "white" },
          grid: { color: "#334155" }
        }
      },
      plugins: { legend: { labels: { color: "white" } } }
    }
  });
}

const MAIL_WEB_INDICATOR_LABELS = {
  phishing_click: "النقر على رابط تصيدي",
  credential_submission: "إدخال بيانات الاعتماد في صفحة مشبوهة",
  malware_attachment: "فتح مرفق يحتوي على برمجية خبيثة",
  repeated_suspicious_emails: "استقبال رسائل بريد مشبوهة متكررة",
  spam_risky_email_activity: "التفاعل مع رسائل سبام عالية الخطورة",

  high_risk_url: "زيارة موقع إلكتروني عالي الخطورة",
  shortened_url_clicked: "النقر على رابط قصير مشبوه",
  malware_download: "تنزيل ملف يحتمل أن يكون برمجية خبيثة",
  unsafe_browsing: "تصفح غير آمن لمواقع محظورة أو ضارة"
};

function showDetailsMailWeb(board, empId) {
  const arr = board === "email" ? employeesEmail : employeesWeb;
  const emp = arr.find((e) => e.id === empId);
  if (!emp) return;

  const nameEl = document.getElementById("modalEmployeeNameMailWeb");
  const infoEl = document.getElementById("modalEmployeeInfoMailWeb");
  const bodyEl = document.getElementById("modalBodyMailWeb");

  if (nameEl) {
    nameEl.textContent = emp.name;
  }

  if (infoEl) {
    infoEl.textContent = `${emp.id} | ${emp.department} | المخاطر: ${emp.riskLevel} (${emp.score})`;
  }

  const ind = emp.indicators || {};

  const keys =
    board === "email"
      ? [
          "phishing_click",
          "credential_submission",
          "malware_attachment",
          "repeated_suspicious_emails",
          "spam_risky_email_activity"
        ]
      : [
          "high_risk_url",
          "shortened_url_clicked",
          "malware_download",
          "unsafe_browsing"
        ];

  let indicatorsHtml = "";

  keys.forEach((k) => {
    const c = ind[k] || 0;
    if (c > 0) {
      const label =
        (typeof MAIL_WEB_INDICATOR_LABELS !== "undefined" &&
          MAIL_WEB_INDICATOR_LABELS[k]) ||
        k.replace(/_/g, " ");
      indicatorsHtml += `
        <li style="margin-bottom:10px; padding:10px; border-bottom:1px dashed #334155;">
          <strong>${label}:</strong> ${c} مرة
        </li>`;
    }
  });

  if (!indicatorsHtml) {
    indicatorsHtml = `
      <li style="margin-bottom:10px; padding:10px; border-bottom:1px dashed #334155;">
        لا توجد مؤشرات خطورة مرتفعة لهذا الموظف في هذه اللوحة.
      </li>`;
  }

  const html = `
    <h3 style="color:#f59e0b; margin-bottom:15px;">مؤشرات المخاطر المكتشفة</h3>
    <ul style="list-style:none; padding-right:0;">
      ${indicatorsHtml}
    </ul>
    <h3 style="color:#10b981; margin-top:20px; margin-bottom:15px;">الإجراء الموصى به</h3>
    <p style="background:rgba(16,185,129,0.1); padding:15px; border-radius:8px;">
      ${emp.action}
    </p>
  `;

  if (bodyEl) {
    bodyEl.innerHTML = html;
  }

  openModal("detailModalMailWeb");
}

function openFilesModalMailWeb() {
  const container = document.getElementById("fileListContainerMailWeb");
  if (!container) {
    openModal("filesModalMailWeb");
    return;
  }

  container.innerHTML = "";
  if (!generatedFilesMailWeb.length) {
    container.innerHTML = `<p style="text-align:center; color:#94a3b8;">لم يتم توليد أي ملفات بعد.</p>`;
    openModal("filesModalMailWeb");
    return;
  }

  generatedFilesMailWeb.forEach((file, i) => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const row = document.createElement("div");
    row.className = "file-row";
    row.innerHTML = `
      <div class="file-info">
        <div class="file-name">${file.filename}</div>
        <div class="file-size">${sizeKB} KB</div>
      </div>
      <div class="file-actions">
        <button class="btn btn-primary" onclick="previewFileMailWeb(${i})">معاينة</button>
        <button class="btn btn-success" onclick="downloadGeneratedFileMailWeb(${i})">تنزيل</button>
      </div>
    `;
    container.appendChild(row);
  });

  openModal("filesModalMailWeb");
}

function downloadGeneratedFileMailWeb(i) {
  const file = generatedFilesMailWeb[i];
  if (file && file.csvData) {
    downloadFile(file.filename, file.csvData);
  }
}

function previewFileMailWeb(i) {
  const file = generatedFilesMailWeb[i];
  if (!file || !file.csvData) return;

  const titleEl = document.getElementById("previewModalTitleMailWeb");
  const contentEl = document.getElementById("previewModalContentMailWeb");
  if (titleEl) titleEl.textContent = file.filename;
  if (contentEl) {
    const lines = file.csvData.split("\n").slice(0, 20).join("\n");
    contentEl.textContent = lines;
  }
  openModal("previewModalMailWeb");
}

function exportDataMailWeb() {
  const arr = currentMailWebBoard === "email" ? employeesEmail : employeesWeb;
  if (!arr.length) {
    showAlertMailWeb("لا توجد بيانات للتقرير.", "error");
    return;
  }

  const report = arr.map((emp) => ({
    Employee_ID: emp.id,
    Employee_Name: emp.name,
    Department: emp.department,
    Risk_Score: emp.score,
    Risk_Level: emp.riskLevel,
    Last_Activity: emp.lastActivity
  }));

  const csv = arrayToCsv(report);
  downloadFile(
    currentMailWebBoard === "email"
      ? "email_risk_report.csv"
      : "web_risk_report.csv",
    csv
  );
  showAlertMailWeb("📥 تم تصدير تقرير المخاطر بنجاح!", "success");
}

function switchView(viewId, title) {
  const views = document.querySelectorAll(".view");
  views.forEach((v) => (v.style.display = "none"));

  const target = document.getElementById(viewId);
  if (target) target.style.display = "block";

  const titleEl = document.getElementById("currentViewTitle");
  if (titleEl) titleEl.textContent = title;

  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach((btn) => btn.classList.remove("active"));

  const viewOnClickEmail = "openEmailBoard";
  const viewOnClickWeb = "openWebBoard";

  if (viewId !== "emailWebAnalysisView") {
    navBtns.forEach((btn) => {
      const onclick = btn.getAttribute("onclick") || "";
      if (onclick.includes(viewId)) {
        btn.classList.add("active");
      }
    });
  } else {
    navBtns.forEach((btn) => {
      const onclick = btn.getAttribute("onclick") || "";
      if (
        (currentMailWebBoard === "email" &&
          onclick.includes(viewOnClickEmail)) ||
        (currentMailWebBoard === "web" && onclick.includes(viewOnClickWeb))
      ) {
        btn.classList.add("active");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  switchView("dashboardView", "لوحة القيادة");

  renderAwarenessCenter();

  const tabButtons = document.querySelectorAll(".tabs .tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target === "emailSectionMailWeb") setMailWebBoard("email");
      else if (target === "webSectionMailWeb") setMailWebBoard("web");
    });
  });

  const btnGen = document.getElementById("btnGenerateMailWeb");
  const btnFiles = document.getElementById("btnShowFilesMailWeb");
  const btnExport = document.getElementById("btnExportMailWeb");

  if (btnGen) btnGen.addEventListener("click", generateMailWebData);
  if (btnFiles) btnFiles.addEventListener("click", openFilesModalMailWeb);
  if (btnExport) btnExport.addEventListener("click", exportDataMailWeb);

  const searchMW = document.getElementById("searchInputMailWeb");
  const filterMW = document.getElementById("filterSelectMailWeb");
  if (searchMW || filterMW) {
    const doFilter = () => {
      const arr =
        currentMailWebBoard === "email" ? employeesEmail : employeesWeb;
      const txt = (searchMW?.value || "").toLowerCase();
      const flt = filterMW?.value || "all";

      const filtered = arr.filter((emp) => {
        const sMatch =
          emp.id.toLowerCase().includes(txt) ||
          emp.name.toLowerCase().includes(txt) ||
          emp.department.toLowerCase().includes(txt);
        const fMatch = flt === "all" || emp.riskLevel === flt;
        return sMatch && fMatch;
      });

      const tbodyEmail = document.getElementById("employeeTableBodyMailWeb");
      const tbodyWeb = document.getElementById("employeeTableBodyWebMailWeb");
      if (tbodyEmail) tbodyEmail.innerHTML = "";
      if (tbodyWeb) tbodyWeb.innerHTML = "";

      if (!filtered.length) {
        const emptyRow = `
          <tr>
            <td colspan="6" style="text-align:center; padding:40px; color:#94a3b8;">
              لا توجد نتائج مطابقة لفلتر البحث.
            </td>
          </tr>`;
        if (currentMailWebBoard === "email" && tbodyEmail)
          tbodyEmail.innerHTML = emptyRow;
        if (currentMailWebBoard === "web" && tbodyWeb)
          tbodyWeb.innerHTML = emptyRow;
        return;
      }

      filtered.forEach((emp) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${emp.name}<br><small style="color:#94a3b8;">(${
          emp.id
        })</small></td>
          <td>${emp.department}</td>
          <td>${emp.score}</td>
          <td><span class="risk-badge ${emp.riskLevel}">${translateRiskLevel(
          emp.riskLevel
        )}</span></td>
          <td>${emp.lastActivity}</td>
          <td>
            <button class="btn-link" onclick="showDetailsMailWeb('${currentMailWebBoard}','${
          emp.id
        }')">
              التفاصيل
            </button>
          </td>
        `;
        if (currentMailWebBoard === "email" && tbodyEmail)
          tbodyEmail.appendChild(tr);
        if (currentMailWebBoard === "web" && tbodyWeb) tbodyWeb.appendChild(tr);
      });
    };

    if (searchMW) searchMW.addEventListener("input", doFilter);
    if (filterMW) filterMW.addEventListener("change", doFilter);
  }

  document.querySelectorAll(".modal-close[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close");
      closeModal(id);
    });
  });

  window.addEventListener("click", (ev) => {
    const modal = document.getElementById("publishModal");
    if (modal && ev.target === modal) closeModal2();
  });
});
