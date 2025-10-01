import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const {
      ZEPTOMAIL_API_TOKEN = '',
      ZEPTOMAIL_DOMAIN = 'shrividhya.in',
      CONTACT_EMAIL = 'contact@shrividhya.in',
    } = process.env;

    // Log environment status for debugging
    console.log('Environment check:', {
      hasToken: !!ZEPTOMAIL_API_TOKEN,
      domain: ZEPTOMAIL_DOMAIN,
      contactEmail: CONTACT_EMAIL
    });

    const { name, email } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!ZEPTOMAIL_API_TOKEN) {
      console.error('Missing ZeptoMail API token in environment variables');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact support.',
          details: 'ZEPTOMAIL_API_TOKEN environment variable is missing'
        },
        { status: 500 }
      );
    }

    // Use ZeptoMail SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.zeptomail.in',
      port: 587,
      secure: false,
      auth: {
        user: 'emailapikey',
        pass: ZEPTOMAIL_API_TOKEN,
      },
    });

    console.log('Attempting to send email to:', CONTACT_EMAIL);

    // Email content
    const textContent = `
New Lead from Exit Intent Modal

Name: ${name}
Email: ${email}
Source: Exit Intent Modal
Submitted on: ${new Date().toLocaleString('en-IN')}
    `.trim();

    const htmlContent = `
<h2>New Lead from Exit Intent Modal</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Source:</strong> Exit Intent Modal</p>
<p><em>Submitted on: ${new Date().toLocaleString('en-IN')}</em></p>
    `.trim();

    await transporter.sendMail({
      from: CONTACT_EMAIL,
      to: CONTACT_EMAIL,
      subject: 'New Lead - Exit Intent Modal',
      text: textContent,
      html: htmlContent,
    });

    console.log('Email sent successfully');

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending lead email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
