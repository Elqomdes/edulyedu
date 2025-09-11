import { NextRequest, NextResponse } from 'next/server';

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

    // Geçici olarak sadece validasyon yap - gerçek email gönderme için EmailJS kullan

    // Demo modunda başarı döndür
    return NextResponse.json({
      success: true,
      message: 'Email başarıyla gönderildi (Demo modunda)',
      demo: true
    });

  } catch (error) {
    console.error('Email processing error:', error);
    return NextResponse.json(
      { error: 'Email işlenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}