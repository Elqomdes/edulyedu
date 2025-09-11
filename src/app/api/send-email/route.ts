import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// EmailJS konfigürasyonu
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'service_edulyedu';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'template_edulyedu';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || 'your_public_key';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validasyon
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      );
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçersiz email formatı' },
        { status: 400 }
      );
    }

    // EmailJS ile email gönderme
    const emailData = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_email: 'info@edulyedu.com',
      reply_to: email,
    };

    // EmailJS API çağrısı
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailData,
      EMAILJS_PUBLIC_KEY
    );

    if (result.status === 200) {
      return NextResponse.json({
        success: true,
        message: 'Email başarıyla gönderildi'
      });
    } else {
      throw new Error('Email gönderilemedi');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Email gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
