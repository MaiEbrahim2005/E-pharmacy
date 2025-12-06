/* eslint-disable no-console */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
require("dotenv").config(); // يقرأ المتغيرات من ملف .env

admin.initializeApp();

// جلب مفتاح SendGrid من Environment Variable بطريقة آمنة
const SENDGRID_KEY = process.env.SENDGRID_KEY;

if (!SENDGRID_KEY) {
  console.error(
      "SendGrid API key not set. تأكدي من ملف .env أو الأمر firebase functions:env:set",
  );
}

sgMail.setApiKey(SENDGRID_KEY);

// دالة لإرسال تذكيرات المرضى المزمنين
exports.sendReminderEmails = functions.https.onRequest(async (req, res) => {
  try {
    const db = admin.firestore();

    // جلب كل المرضى المزمنين
    const snapshot = await db.collection("patients")
        .where("chronic", "==", true)
        .get();

    if (snapshot.empty) {
      console.log("No chronic patients found.");
      return res.status(200).send("No chronic patients found.");
    }

    const results = [];

    for (const doc of snapshot.docs) {
      const data = doc.data();

      // شرط وجود إيميل
      if (!data.email) continue;

      const msg = {
        to: data.email,
        from: "omniakamel9999@gmail.com", // تأكدي إنه مفعل في SendGrid
        subject: "Monthly Health Reminder",
        text:
          "Hello, please remember to take your medication " +
          "and schedule your monthly checkup.",
      };

      try {
        await sgMail.send(msg);
        console.log(`Email sent to ${data.email}`);
        results.push({to: data.email, success: true});
      } catch (err) {
        console.error(
            `Error sending to ${data.email}:`,
          err && err.response ? err.response.body : err.message || err,
        );
        results.push({to: data.email, success: false, error: err.message || err});
      }
    }

    return res.status(200).send({message: "Done", results});
  } catch (error) {
    console.error("Fatal error sending reminders:", error);
    return res.status(500).send("Error sending reminder emails");
  }
});
