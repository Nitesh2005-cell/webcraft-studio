import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json()
  if (!name || !email || !message)
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New Inquiry from ${name} — WebCraft Studio`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;background:#0a0a0a;color:#f5f0e8;padding:40px;border-radius:8px;">
        <h2 style="color:#c9a84c;">New Client Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone||'—'}</p>
        <p><b>Service:</b> ${service||'—'}</p>
        <div style="margin-top:16px;padding:16px;background:#1a1a1a;border-left:3px solid #c9a84c;">
          <p style="margin:0;">${message}</p>
        </div>
      </div>`,
  })

  return NextResponse.json({ success: true })
}
