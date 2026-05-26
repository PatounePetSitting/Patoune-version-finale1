import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import twilio from "twilio";

// Configure environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Enable body parser for JSON content
app.use(express.json());

// API: Handle booking notifications (Email & SMS)
app.post("/api/bookings", async (req, res) => {
  const {
    ownerName,
    petName,
    petType,
    email,
    phone,
    city,
    startDate,
    endDate,
    serviceType,
    notes,
  } = req.body;

  let emailSent = false;
  let smsSent = false;
  let emailError = "";
  let smsError = "";

  // 1. Email Sending logic (Nodemailer)
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "sophie.sitia@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.warn("⚠️ SMTP credentials (SMTP_USER / SMTP_PASS) not configured. Email notification skipped.");
      emailError = "SMTP_USER and SMTP_PASS variables are missing in your environment configuration.";
    } else if (!notificationEmail) {
      console.warn("⚠️ NOTIFICATION_EMAIL not configured. Email notification skipped.");
      emailError = "NOTIFICATION_EMAIL variable is missing in your environment configuration.";
    } else {
      // Lazy initiate Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const emojiPet = petType === "dog" ? "🐶" : petType === "cat" ? "🐱" : "🐹";

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
          <div style="background-color: #0c1821; color: #fff; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px;">🐾 Nouvelle Réservation - Patoune</h1>
          </div>
          <div style="padding: 24px; background-color: #fbfbfb;">
            <p style="font-size: 16px; margin-top: 0;">Félicitations, vous avez reçu une nouvelle demande de garde d'animaux !</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold; width: 40%;">Propriétaire</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">${ownerName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Téléphone</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Nom de l'animal</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">${petName} ${emojiPet} (${petType === "dog" ? "Chien" : petType === "cat" ? "Chat" : "Autre"})</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Ville d'origine</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">📍 ${city}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Période du séjour</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;">📅 Du <strong>${startDate}</strong> au <strong>${endDate}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6; font-weight: bold;">Formule demandée</td>
                <td style="padding: 10px; border-bottom: 1px solid #f3f4f6;"><span style="background-color: #f0f7ff; color: #1e3a8a; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 13px;">${serviceType}</span></td>
              </tr>
            </table>

            <div style="background-color: #fff; border: 1px solid #f0f0f0; border-radius: 8px; padding: 16px; margin-top: 20px;">
              <h4 style="margin: 0 0 8px 0; color: #374151;">📝 Notes / Consignes particulières :</h4>
              <p style="margin: 0; font-style: italic; color: #4b5563;">${notes || "Aucune consigne spécifique n'a été laissée."}</p>
            </div>
          </div>
          <div style="background-color: #f3f4f6; text-align: center; padding: 16px; font-size: 11px; color: #9ca3af;">
            <p style="margin: 0;">Ce courriel automatisé a été envoyé par l'application de Pet Sitting de Patoune Nice.</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Patoune Nice Notification" <${smtpUser}>`,
        to: notificationEmail,
        subject: `🐾 Nouvelle Garde : ${petName} par ${ownerName} à ${city}`,
        html: htmlContent,
      });

      emailSent = true;
      console.log(`✅ Email notification sent successfully to ${notificationEmail}`);
    }
  } catch (err: any) {
    console.error("❌ Nodemailer error:", err);
    emailError = err.message || "Failed to send email via SMTP server.";
  }

  // 2. SMS / WhatsApp Sending logic (Twilio & CallMeBot)
  let whatsAppSent = false;
  let whatsAppError = "";

  // A. CallMeBot configuration (Super popular and easy free personal WhatsApp notification gateway)
  try {
    const callmebotPhone = process.env.CALLMEBOT_PHONE || "+33763208713";
    const callmebotApiKey = process.env.CALLMEBOT_API_KEY; // e.g. "123456"

    if (callmebotApiKey) {
      const emojiPet = petType === "dog" ? "🐶" : petType === "cat" ? "🐱" : "🐹";
      const messageText = `🐾 Nouvelle demande Patoune de ${ownerName} (${phone}) :
Garde pour ${petName} ${emojiPet} (${petType === 'dog' ? 'Chien' : petType === 'cat' ? 'Chat' : 'Autre'})
📍 Ville : ${city}
📅 Dates : Du ${startDate} au ${endDate}
✨ Formule : ${serviceType}
📝 Notes : ${notes || "Aucune"}`;

      const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(callmebotPhone)}&text=${encodeURIComponent(messageText)}&apikey=${encodeURIComponent(callmebotApiKey)}`;
      
      const response = await fetch(callMeBotUrl);
      if (response.ok) {
        whatsAppSent = true;
        console.log(`✅ Silent WhatsApp notification sent successfully to Sophie via CallMeBot.`);
      } else {
        const errorText = await response.text();
        console.warn(`⚠️ CallMeBot API returned a error: ${response.status} - ${errorText}`);
        whatsAppError = `CallMeBot returned status ${response.status}: ${errorText}`;
      }
    }
  } catch (err: any) {
    console.error("❌ CallMeBot WhatsApp trigger exception:", err);
    whatsAppError = err.message || "Failed to trigger CallMeBot automated WhatsApp message.";
  }

  // B. Twilio standard SMS & optional Twilio WhatsApp setup
  try {
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_FROM_NUMBER;
    const notificationPhone = process.env.NOTIFICATION_PHONE_NUMBER || "+33763208713";
    const enableTwilioWhatsApp = process.env.ENABLE_TWILIO_WHATSAPP === "true";

    if (!twilioSid || !twilioToken || !twilioFrom) {
      console.warn("⚠️ Twilio configuration variables are missing. Twilio notifications skipped.");
      smsError = "TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, or TWILIO_FROM_NUMBER is missing in your environment configuration.";
    } else {
      const client = twilio(twilioSid, twilioToken);
      const emojiPet = petType === "dog" ? "🐶" : petType === "cat" ? "🐱" : "🐹";

      const textMessage = `[Patoune] Nouvelle garde de ${petName} (${petType === "dog" ? "Chien" : petType === "cat" ? "Chat" : "Autre"}) demandée par ${ownerName} (${phone}) à ${city} du ${startDate} au ${endDate}. Prestation: ${serviceType}.`;

      // Standard Twilio SMS Dispatch
      await client.messages.create({
        body: textMessage,
        from: twilioFrom,
        to: notificationPhone,
      });
      smsSent = true;
      console.log(`✅ SMS notification sent successfully via Twilio SMS to ${notificationPhone}`);

      // Optional Twilio WhatsApp Gateway dispatch
      if (enableTwilioWhatsApp) {
        const fromWhatsApp = twilioFrom.startsWith("whatsapp:") ? twilioFrom : `whatsapp:${twilioFrom}`;
        const toWhatsApp = notificationPhone.startsWith("whatsapp:") ? notificationPhone : `whatsapp:${notificationPhone}`;

        await client.messages.create({
          body: textMessage,
          from: fromWhatsApp,
          to: toWhatsApp,
        });
        whatsAppSent = true;
        console.log(`✅ Silent Twilio WhatsApp notification sent successfully to ${toWhatsApp}`);
      }
    }
  } catch (err: any) {
    console.error("❌ Twilio notify error:", err);
    smsError = err.message || "Failed to send SMS message or WhatsApp via Twilio.";
  }

  res.json({
    success: true,
    emailSent,
    smsSent,
    whatsAppSent,
    emailError: emailError || null,
    smsError: smsError || null,
    whatsAppError: whatsAppError || null,
  });
});

// Serve static elements & fallback routing integration with Vite development middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // For Express 4 standard spa fallbacks
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully running on http://localhost:${PORT}`);
  });
}

startServer();
