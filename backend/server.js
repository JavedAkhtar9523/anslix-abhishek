const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter - FIXED: changed createTransporter to createTransport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Email template function
const createEmailTemplate = (formData) => {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f6f9;
                color: #333;
                line-height: 1.6;
            }
            
            .email-container {
                max-width: 600px;
                margin: 20px auto;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            
            .header {
                background: linear-gradient(135deg, #ff6b00 0%, #ff8b30 100%);
                padding: 40px 30px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                animation: rotate 20s linear infinite;
            }
            
            .header h1 {
                color: white;
                font-size: 28px;
                font-weight: bold;
                margin-bottom: 10px;
                position: relative;
                z-index: 2;
            }
            
            .header p {
                color: rgba(255,255,255,0.9);
                font-size: 16px;
                position: relative;
                z-index: 2;
            }
            
            .content {
                background: white;
                padding: 40px;
            }
            
            .form-data {
                background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
                border-radius: 15px;
                padding: 30px;
                margin-bottom: 30px;
                border-left: 5px solid #ff6b00;
            }
            
            .data-row {
                display: flex;
                margin-bottom: 20px;
                align-items: flex-start;
            }
            
            .data-row:last-child {
                margin-bottom: 0;
            }
            
            .label {
                font-weight: bold;
                color: #ff6b00;
                min-width: 120px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .value {
                flex: 1;
                color: #333;
                font-size: 16px;
                word-wrap: break-word;
            }
            
            .message-box {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 10px;
                padding: 20px;
                margin-top: 10px;
            }
            
            .timestamp {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                text-align: center;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            .footer {
                background: #081932;
                color: white;
                padding: 30px;
                text-align: center;
            }
            
            .footer h3 {
                color: #ff6b00;
                margin-bottom: 10px;
                font-size: 18px;
            }
            
            .footer p {
                color: rgba(255,255,255,0.8);
                font-size: 14px;
                margin-bottom: 5px;
            }
            
            .action-buttons {
                margin-top: 20px;
            }
            
            .btn {
                display: inline-block;
                padding: 12px 25px;
                background: linear-gradient(135deg, #ff6b00 0%, #ff8b30 100%);
                color: white;
                text-decoration: none;
                border-radius: 25px;
                font-weight: bold;
                margin: 0 10px;
                transition: transform 0.3s ease;
            }
            
            .btn:hover {
                transform: translateY(-2px);
            }
            
            .priority-high {
                background: linear-gradient(135deg, #ff4757 0%, #ff6b7a 100%);
            }
            
            .priority-medium {
                background: linear-gradient(135deg, #ffa502 0%, #ffb732 100%);
            }
            
            .priority-low {
                background: linear-gradient(135deg, #2ed573 0%, #7bed9f 100%);
            }
            
            @keyframes rotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                    border-radius: 15px;
                }
                
                .header, .content, .footer {
                    padding: 20px;
                }
                
                .data-row {
                    flex-direction: column;
                }
                
                .label {
                    margin-bottom: 5px;
                    min-width: auto;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>🚀 New Contact Form Submission</h1>
                <p>Someone wants to connect with Anslix!</p>
            </div>
            
            <div class="content">
                <div class="timestamp">
                    📅 Received on ${currentDate}
                </div>
                
                <div class="form-data">
                    <div class="data-row">
                        <div class="label">👤 Name:</div>
                        <div class="value">${formData.name}</div>
                    </div>
                    
                    <div class="data-row">
                        <div class="label">📧 Email:</div>
                        <div class="value">${formData.email}</div>
                    </div>
                    
                    <div class="data-row">
                        <div class="label">📋 Subject:</div>
                        <div class="value">${formData.subject}</div>
                    </div>
                    
                    <div class="data-row">
                        <div class="label">💬 Message:</div>
                        <div class="value">
                            <div class="message-box">
                                ${formData.message.replace(/\n/g, "<br>")}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <a href="mailto:${
                      formData.email
                    }" class="btn">📧 Reply Now</a>
                    <a href="tel:+919131890800" class="btn priority-medium">📞 Call Back</a>
                </div>
            </div>
            
            <div class="footer">
                <h3>Anslix - Transforming Education</h3>
                <p>📧 Email: support@anslix.com | info@anslix.com</p>
                <p>📱 Phone: (+91) 9131890800 | (+91) 8358909154</p>
                <p>🌐 Visit: www.anslix.com</p>
                <p style="margin-top: 15px; font-size: 12px; opacity: 0.7;">
                    This email was automatically generated from your website contact form.
                </p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const formData = { name, email, subject, message };

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `🚀 New Contact Form Submission: ${subject}`,
      html: createEmailTemplate(formData),
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Thank you for contacting Anslix! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f6f9; }
                .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #ff6b00 0%, #ff8b30 100%); padding: 30px; text-align: center; color: white; }
                .content { padding: 30px; }
                .footer { background: #081932; padding: 20px; text-align: center; color: white; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 Thank You, ${name}!</h1>
                    <p>Your message has been received successfully</p>
                </div>
                <div class="content">
                    <p>Hi <strong>${name}</strong>,</p>
                    <p>Thank you for reaching out to us! We've received your message regarding "<strong>${subject}</strong>" and our team will get back to you within 24 hours.</p>
                    <p>In the meantime, feel free to explore our services and programs on our website.</p>
                    <p>Best regards,<br><strong>Team Anslix</strong></p>
                </div>
                <div class="footer">
                    <p>📧 support@anslix.com | 📱 (+91) 9131890800</p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

module.exports = app;
