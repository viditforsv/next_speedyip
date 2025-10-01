import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Handle redirects for trailing slash consistency
export async function GET(request: NextRequest) {
  return NextResponse.redirect(new URL('/api/test-email', request.url))
}

export async function POST(request: NextRequest) {
  try {
    const {
      ZEPTOMAIL_API_TOKEN = '',
      ZEPTOMAIL_DOMAIN = 'shrividhya.in',
      CONTACT_EMAIL = 'contact@shrividhya.in',
    } = process.env

    // Log environment status for debugging
    console.log('Environment check:', {
      hasToken: !!ZEPTOMAIL_API_TOKEN,
      domain: ZEPTOMAIL_DOMAIN,
      contactEmail: CONTACT_EMAIL
    })

    // Handle frontend data format
    const { type, formData } = await request.json()

    if (!ZEPTOMAIL_API_TOKEN) {
      console.error('Missing ZeptoMail API token in environment variables')
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact support.',
          details: 'ZEPTOMAIL_API_TOKEN environment variable is missing'
        },
        { status: 500 }
      )
    }

    // Extract data from formData based on type
    const { name, email, phone, subject, message, courseInterest } = formData || {}

    // Handle different form types
    let recipient: string
    let emailSubject: string
    let textContent: string
    let htmlContent: string

    if (type === 'book-demo') {
      // Book Demo form data
      const {
        studentName, schoolName, grade, board, subjects, preferredContact,
        bestTimeToCall, parentName, parentPhone, country, city
      } = formData || {}

      if (!studentName || !schoolName || !parentName || !parentPhone || !country || !city || !grade || !board || !preferredContact) {
        return NextResponse.json(
          { error: "Please fill in all required fields." },
          { status: 400 }
        )
      }

      recipient = 'contact@shrividhya.in'
      emailSubject = 'Book a Free Demo Class Request'

      textContent = `
New Demo Class Booking Request

Student Information:
- Student Name: ${studentName}
- School Name: ${schoolName}
- Grade: ${grade}
- Board: ${board}
- Subjects of Interest: ${subjects?.join(', ') || 'Not specified'}

Parent Information:
- Parent Name: ${parentName}
- Parent Phone: ${parentPhone}
- Country: ${country}
- City: ${city}

Contact Preferences:
- Preferred Contact Method: ${preferredContact}
- Best Time to Contact: ${bestTimeToCall || 'Not specified'}

Additional Message:
${message || 'No additional message provided'}

Submitted on: ${new Date().toLocaleString('en-IN')}
`.trim()

      htmlContent = `
<h2>New Demo Class Booking Request</h2>

<h3>Student Information:</h3>
<p><strong>Student Name:</strong> ${studentName}</p>
<p><strong>School Name:</strong> ${schoolName}</p>
<p><strong>Grade:</strong> ${grade}</p>
<p><strong>Board:</strong> ${board}</p>
<p><strong>Subjects of Interest:</strong> ${subjects?.join(', ') || 'Not specified'}</p>

<h3>Parent Information:</h3>
<p><strong>Parent Name:</strong> ${parentName}</p>
<p><strong>Parent Phone:</strong> ${parentPhone}</p>
<p><strong>Country:</strong> ${country}</p>
<p><strong>City:</strong> ${city}</p>

<h3>Contact Preferences:</h3>
<p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
<p><strong>Best Time to Contact:</strong> ${bestTimeToCall || 'Not specified'}</p>

<h3>Additional Message:</h3>
<p>${message ? message.replace(/\n/g, '<br>') : 'No additional message provided'}</p>

<p><em>Submitted on: ${new Date().toLocaleString('en-IN')}</em></p>
      `.trim()
      
    } else {
      // Contact form data (existing logic)
      if (!subject) {
        return NextResponse.json(
          { error: "Email subject is required." },
          { status: 400 }
        )
      }

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: "Name, email, and message are required." },
          { status: 400 }
        )
      }

      recipient = CONTACT_EMAIL
      emailSubject = `Contact Form: ${subject}`

      textContent = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}
Course Interest: ${courseInterest || 'Not specified'}

Message:
${message}
`.trim()

      htmlContent = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Course Interest:</strong> ${courseInterest || 'Not specified'}</p>
<br>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `.trim()
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
    })

    console.log('Attempting to send email to:', recipient)

    await transporter.sendMail({
      from: 'contact@shrividhya.in',
      to: recipient,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    })

    console.log('Email sent successfully')

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })

  } catch (err) {
    // Log the error to Vercel logs or local console
    console.error('Send email error:', err)
    // Always return a JSON error
    const errorMessage = err instanceof Error ? err.message : String(err)
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        details: errorMessage 
      },
      { status: 500 }
    )
  }
} 