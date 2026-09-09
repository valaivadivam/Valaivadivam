/**
 * ==========================================================================
 * VALAIVADIVAM — ENQUIRY BACKEND
 *
 * Paste this into a Google Apps Script project bound to your enquiry
 * spreadsheet, then deploy it as a Web App. Full walkthrough in
 * SETUP-ENQUIRIES.md.
 *
 * What it does with each submission:
 *   1. Appends a row to the sheet
 *   2. Emails you a notification
 *
 * Why this design: your Gmail account and the sheet stay behind Google's
 * login. The website only ever knows a URL that accepts submissions — it
 * cannot read the sheet, cannot read your mail, and holds no password.
 * That is the whole reason the form doesn't talk to Gmail directly.
 * ==========================================================================
 */

/* ---- SETTINGS ----------------------------------------------------------- */

// Where notifications are sent.
var NOTIFY_EMAIL = "valaivadivam@gmail.com";

// Tab name inside the spreadsheet. Created automatically if missing.
var SHEET_NAME = "Enquiries";

/* ------------------------------------------------------------------------- */

var HEADERS = [
  "Date & Time", "Type", "Full Name", "Phone", "Email",
  "Course", "Service", "Company", "Training Mode", "Message", "Status"
];

/**
 * Receives the POST from the website.
 * The site sends as text/plain to avoid a CORS preflight, so the JSON is
 * read from the raw body rather than from e.parameter.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    saveToSheet(data);
    sendNotification(data);

    return json({ result: "success" });
  } catch (err) {
    // Logged to the Apps Script console (View → Executions) for debugging
    console.error("Enquiry failed: " + err);
    return json({ result: "error", message: String(err) });
  }
}

/** Lets you confirm the deployment is live by visiting the URL in a browser. */
function doGet() {
  return json({ result: "ok", message: "Valaivadivam enquiry endpoint is running." });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Appends one row, creating the tab and header row on first run. */
function saveToSheet(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    var header = sheet.getRange(1, 1, 1, HEADERS.length);
    header.setFontWeight("bold");
    header.setBackground("#1A56DB");
    header.setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    data.type || "Enquiry",
    data.name || "",
    data.phone || "",
    data.email || "",
    data.course || "",
    data.service || "",
    data.company || "",
    data.trainingMode || "",
    data.message || "",
    data.status || "New"
  ]);
}

/** Emails the enquiry to NOTIFY_EMAIL. */
function sendNotification(data) {
  var isCourse = (data.type || "").indexOf("Course") !== -1;
  var subject = isCourse
    ? "New Course Enquiry — " + (data.course || "Course")
    : "New Service Enquiry — " + (data.service || "Website");

  var rows = [
    ["Type", data.type],
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Course", data.course],
    ["Service", data.service],
    ["Company", data.company],
    ["Training Mode", data.trainingMode],
    ["Message", data.message],
    ["Status", data.status || "New"],
    ["Received", new Date().toLocaleString()]
  ].filter(function (r) { return r[1]; });

  var html =
    '<div style="font-family:Arial,sans-serif;max-width:600px">' +
      '<h2 style="color:#0B2545;margin-bottom:4px">' + subject + "</h2>" +
      '<p style="color:#4A6079;margin-top:0">Submitted from valaivadivam.com</p>' +
      '<table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;width:100%">' +
        rows.map(function (r, i) {
          return '<tr style="background:' + (i % 2 ? "#F5F8FF" : "#FFFFFF") + '">' +
            '<td style="color:#1A56DB;font-weight:bold;width:35%;vertical-align:top">' + r[0] + "</td>" +
            '<td style="color:#0B2545">' + String(r[1]).replace(/</g, "&lt;") + "</td>" +
          "</tr>";
        }).join("") +
      "</table>" +
    "</div>";

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: html,
    // Lets you hit Reply in Gmail and answer the person directly
    replyTo: data.email || NOTIFY_EMAIL
  });
}

/**
 * Run this once from the Apps Script editor to check the sheet write and the
 * email both work, without touching the website.
 */
function testEnquiry() {
  var sample = {
    type: "Course Enquiry",
    name: "Test Person",
    phone: "9876543210",
    email: "test@example.com",
    course: "Full Stack Python Development",
    trainingMode: "100% Online",
    message: "This is a test enquiry.",
    status: "New"
  };
  saveToSheet(sample);
  sendNotification(sample);
}
