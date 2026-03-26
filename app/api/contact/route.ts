import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  if (!contactEmail) {
    console.error('CONTACT_EMAIL is not set')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@sparkstreet.digital>',
      to: contactEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #111;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; width: 80px; font-size: 14px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #111; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px;"><a href="mailto:${email}" style="color: #00D4E8;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111; font-size: 14px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin: 24px 0 0; font-size: 12px; color: #999;">Sent from portfolio contact form</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
