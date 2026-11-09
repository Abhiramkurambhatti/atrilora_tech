import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const SERVICE_LABELS: Record<string, string> = {
  web: 'Website Development',
  mobile: 'Mobile App Development',
  ai: 'AI & Automation Solutions',
  branding: 'Branding & Design',
  marketing: 'Digital Marketing',
  full: 'Full Package (All Services)',
};

const BUDGET_LABELS: Record<string, string> = {
  under50k: 'Under ₹50,000',
  '50k-1l': '₹50,000 – ₹1,00,000',
  '1l-3l': '₹1,00,000 – ₹3,00,000',
  '3l-10l': '₹3,00,000 – ₹10,00,000',
  '10l+': '₹10,00,000+',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const serviceName = SERVICE_LABELS[service] || service;
    const budgetName = BUDGET_LABELS[budget] || budget;
    const recipientEmail = process.env.CONTACT_EMAIL || 'abhiramkurambhatti@gmail.com';
    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Clean HTML Email Template matching the Atrilora Luxury Brand
    const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FBF7F1; margin: 0; padding: 24px; color: #0E0E0E; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid rgba(154, 123, 79, 0.25); box-shadow: 0 8px 32px rgba(154, 123, 79, 0.1); }
    .header { background: #0E0E0E; padding: 32px 28px; text-align: center; }
    .header h1 { margin: 0; color: #FBF7F1; font-size: 20px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700; }
    .header p { margin: 6px 0 0; color: #C9A66B; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; }
    .content { padding: 36px 32px; }
    .badge { display: inline-block; background: #F3EBDD; color: #8A6A3C; padding: 6px 14px; border-radius: 100px; font-size: 12px; font-weight: 600; margin-bottom: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table td { padding: 12px 0; border-bottom: 1px solid #F3EBDD; vertical-align: top; font-size: 14px; }
    .label { color: #8A6A3C; font-weight: 600; width: 110px; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
    .value { color: #0E0E0E; font-weight: 500; }
    .message-box { background: #FBF7F1; border-left: 3px solid #C9A66B; border-radius: 12px; padding: 18px 20px; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap; }
    .button-wrap { text-align: center; margin-top: 32px; }
    .cta-button { display: inline-block; background: #0E0E0E; color: #FBF7F1 !important; text-decoration: none; padding: 14px 32px; border-radius: 100px; font-size: 14px; font-weight: 600; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #9A7B4F; background: #FBF7F1; border-top: 1px solid #F3EBDD; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>Atrilora Technologies</h1>
      <p>New Project Inquiry</p>
    </div>
    <div class="content">
      <div class="badge">Received via atrilora.com · ${submissionTime}</div>
      <table class="table">
        <tr>
          <td class="label">Client Name</td>
          <td class="value"><strong>${name}</strong></td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="value"><a href="mailto:${email}" style="color: #9A7B4F; text-decoration: none; font-weight: 600;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Service</td>
          <td class="value">${serviceName}</td>
        </tr>
        <tr>
          <td class="label">Budget</td>
          <td class="value"><span style="background: #F3EBDD; color: #8A6A3C; padding: 3px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">${budgetName}</span></td>
        </tr>
      </table>

      <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #8A6A3C; margin-top: 24px;">Project Description:</div>
      <div class="message-box">${message}</div>

      <div class="button-wrap">
        <a class="cta-button" href="mailto:${email}?subject=Re: Atrilora Technologies Inquiry - ${encodeURIComponent(name)}">Reply to ${name}</a>
      </div>
    </div>
    <div class="footer">
      Atrilora Technologies · Design · Develop · Automate · Grow
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
New Project Inquiry - Atrilora Technologies
-------------------------------------------
Client Name: ${name}
Email: ${email}
Service: ${serviceName}
Budget: ${budgetName}
Date: ${submissionTime}

Project Description:
${message}
    `;

    console.log('📬 Processing contact form submission for:', email);

    let emailSent = false;
    let deliveryMethod = 'none';

    // 1. Priority 1: Resend API if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromAddress = process.env.RESEND_FROM || 'Atrilora Inquiry <onboarding@resend.dev>';

        const resendResult = await resend.emails.send({
          from: fromAddress,
          to: recipientEmail,
          replyTo: email,
          subject: `✨ New Inquiry: ${name} (${serviceName})`,
          html: htmlEmail,
          text: textContent,
        });

        if (resendResult.data?.id) {
          emailSent = true;
          deliveryMethod = 'resend';
          console.log('✅ Email delivered via Resend. ID:', resendResult.data.id);
        }
      } catch (err) {
        console.error('Resend delivery failed, falling back:', err);
      }
    }

    // 2. Priority 2: Nodemailer (SMTP / Gmail App Password)
    if (!emailSent && ((process.env.SMTP_USER && process.env.SMTP_PASS) || process.env.GMAIL_APP_PASSWORD)) {
      try {
        const transporter = nodemailer.createTransport(
          process.env.GMAIL_APP_PASSWORD || (process.env.SMTP_HOST && process.env.SMTP_HOST.includes('gmail'))
            ? {
                service: 'gmail',
                auth: {
                  user: process.env.SMTP_USER || recipientEmail,
                  pass: process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS,
                },
              }
            : {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: process.env.SMTP_SECURE === 'true',
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASS,
                },
              }
        );

        await transporter.sendMail({
          from: `"Atrilora Technologies" <${process.env.SMTP_USER || recipientEmail}>`,
          to: recipientEmail,
          replyTo: `"${name}" <${email}>`,
          subject: `✨ New Inquiry: ${name} (${serviceName})`,
          html: htmlEmail,
          text: textContent,
        });

        emailSent = true;
        deliveryMethod = 'nodemailer';
        console.log('✅ Email delivered via Nodemailer SMTP to:', recipientEmail);
      } catch (err) {
        console.error('Nodemailer delivery failed, trying fallback:', err);
      }
    }

    // 3. Priority 3: Zero-setup Direct Forwarding (FormSubmit.co API)
    // Works out of the box with NO api key required!
    // Simply delivers the form directly to abhiramkurambhatti@gmail.com.
    if (!emailSent) {
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `✨ New Project Inquiry from ${name} (${serviceName})`,
            _replyto: email,
            _template: 'table',
            Name: name,
            Email: email,
            Service: serviceName,
            Budget: budgetName,
            Message: message,
            SubmittedAt: submissionTime,
          }),
        });

        if (response.ok) {
          emailSent = true;
          deliveryMethod = 'formsubmit_direct';
          console.log('✅ Form successfully dispatched to FormSubmit for:', recipientEmail);
        } else {
          const resText = await response.text();
          console.warn('FormSubmit responded with:', response.status, resText);
        }
      } catch (err) {
        console.error('FormSubmit delivery error:', err);
      }
    }

    // Always succeed from the user's perspective, but report status in response
    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! We will get in touch with you shortly.',
      delivered: emailSent,
      method: deliveryMethod,
    });
  } catch (error) {
    console.error('Contact form endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
