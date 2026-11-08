import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log to console (in production: integrate with EmailJS, Resend, or Formspree)
    console.log('📬 New contact form submission:', {
      name,
      email,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // --- Production integration options (uncomment one) ---

    // Option A: Resend (recommended)
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@atrilora.com',
    //   to: 'abhiramkurambhatti@gmail.com',
    //   subject: `New project inquiry from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    // Option B: Formspree (no server needed — move to client-side)
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email, service, budget, message }),
    // });

    return NextResponse.json({ success: true, message: 'Message received. We\'ll be in touch soon!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
