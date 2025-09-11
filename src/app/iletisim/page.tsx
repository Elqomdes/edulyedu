"use client";

import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// EmailJS konfigürasyonu - Gerçek değerler
const EMAILJS_SERVICE_ID = 'service_7ylpvna';
const EMAILJS_TEMPLATE_ID = 'template_ypcggf8';
const EMAILJS_PUBLIC_KEY = 'quNu5gUgfBaEvzkq9';

// Konfigürasyon kontrolü için fonksiyon
const isValidEmailJSConfig = () => {
  return EMAILJS_SERVICE_ID &&
         EMAILJS_TEMPLATE_ID &&
         EMAILJS_PUBLIC_KEY &&
         EMAILJS_SERVICE_ID.startsWith('service_') &&
         EMAILJS_TEMPLATE_ID.startsWith('template_') &&
         EMAILJS_PUBLIC_KEY.length >= 15; // EmailJS public key'ler genellikle 15-20 karakter arası
};

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailConfigured, setIsEmailConfigured] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS konfigürasyonunu kontrol et ve başlat
  useEffect(() => {
    const isConfigured = isValidEmailJSConfig();
    setIsEmailConfigured(isConfigured);

    console.log('EmailJS Configuration Check:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY ? '***' + EMAILJS_PUBLIC_KEY.slice(-4) : 'not set',
      isConfigured: isConfigured
    });

    if (isConfigured) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('✅ EmailJS initialized successfully');
        console.log('📧 Ready to send emails to: info@edulyedu.com');
      } catch (initError) {
        console.error('❌ EmailJS initialization failed:', initError);
        setIsEmailConfigured(false);
      }
    } else {
      console.log('⚠️ EmailJS not configured properly - using demo mode');
      console.log('Expected format: service_*, template_*, 15+ char public key');
      console.log('Current values:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKeyLength: EMAILJS_PUBLIC_KEY.length
      });
    }
  }, []);

  // Toast mesajlarını otomatik kapat
  useEffect(() => {
    if (showSuccessToast) {
      const timer = setTimeout(() => setShowSuccessToast(false), 5000);
      return () => clearTimeout(timer);
    }
    if (showErrorToast) {
      const timer = setTimeout(() => setShowErrorToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessToast, showErrorToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Form validasyonu
      if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
        throw new Error('Lütfen tüm alanları doldurun');
      }

      // Email format kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Geçerli bir email adresi giriniz');
      }

      // Her zaman gerçek EmailJS kullan (artık demo mode yok)
      // EmailJS ile email gönderme
      const templateParams = {
        name: formData.name,
        message: formData.message,
        title: formData.subject,
        email: formData.email,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        // Başarılı gönderim
        console.log("✅ Email sent successfully:", result);
    setFormData({ name: "", email: "", subject: "", message: "" });
        setShowSuccessModal(true);
        setShowSuccessToast(true);
      } else {
        throw new Error(`Email gönderilemedi (Status: ${result.status})`);
      }

    } catch (error) {
      console.error("Email sending error:", error);

      // Hata mesajını kullanıcı dostu hale getir
      let errorMessage = 'Mesaj gönderilirken bir sorun yaşandı';

      if (error instanceof Error) {
        if (error.message.includes('Lütfen tüm alanları')) {
          errorMessage = error.message;
        } else if (error.message.includes('Geçerli bir email')) {
          errorMessage = error.message;
        } else if (error.message.includes('EmailJS')) {
          errorMessage = 'Email servisi geçici olarak kullanılamıyor. Lütfen daha sonra tekrar deneyin.';
        } else if (error.message.includes('network')) {
          errorMessage = 'İnternet bağlantınızı kontrol edip tekrar deneyin.';
        }
      }

      // Özel hata mesajını ayarla ve toast'u göster
      setErrorMessage(errorMessage);
      setShowErrorToast(true);

      // Console'a detaylı hata bilgisi
      console.error('Form submission failed:', {
        error: errorMessage,
        formData: formData,
        isConfigured: isEmailConfigured
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Form alanı validation fonksiyonu
  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Ad Soyad zorunludur';
        } else if (value.trim().length < 2) {
          error = 'Ad Soyad en az 2 karakter olmalıdır';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'E-posta zorunludur';
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = 'Geçerli bir e-posta adresi giriniz';
          }
        }
        break;
      case 'subject':
        if (!value.trim()) {
          error = 'Konu zorunludur';
        } else if (value.trim().length < 3) {
          error = 'Konu en az 3 karakter olmalıdır';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Mesaj zorunludur';
        } else if (value.trim().length < 10) {
          error = 'Mesaj en az 10 karakter olmalıdır';
        }
        break;
    }

    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return error === '';
  };

  // Input change handler with validation
  const handleChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    validateField(name, value);
  };

  // handleChange function removed - using handleChangeWithValidation instead

  return (
    <div className="contact-page">

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <div className="section-badge">
                  <span className="badge-icon">🎓</span>
                  <span className="badge-text">Eğitim Danışmanlığı</span>
                </div>
                <h2 className="section-title">
                  Eğitim Teknolojileri
                  <span className="highlight">Danışmanlığı</span>
                </h2>
                <p className="section-subtitle">
                  Eğitim kurumunuzun dijital dönüşümü için uzman ekibimizden ücretsiz danışmanlık alın.
                  Platformlarımızı yakından tanıyın, ihtiyaçlarınıza özel çözümler keşfedin.
                </p>
              </div>

              {/* EmailJS Konfigürasyon Uyarısı */}
              {!isEmailConfigured && (
                <div className="email-config-warning">
                  <div className="warning-icon">⚠️</div>
                  <div className="warning-content">
                    <div className="warning-title">Email Servisi Yapılandırılmamış</div>
                    <div className="warning-text">
                      Şu anda demo modunda çalışıyorsunuz. Gerçek email gönderme için
                      <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">
                        EmailJS hesabınızı</a> yapılandırın.
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Ad Soyad *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChangeWithValidation}
                      className={`form-input ${fieldErrors.name ? 'form-input-error' : ''}`}
                      placeholder="Ad Soyad"
                      disabled={isSubmitting}
                    />
                    {fieldErrors.name && <div className="field-error">{fieldErrors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-posta *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChangeWithValidation}
                      className={`form-input ${fieldErrors.email ? 'form-input-error' : ''}`}
                      placeholder="E-posta"
                      disabled={isSubmitting}
                    />
                    {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Konu *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChangeWithValidation}
                    className={`form-input ${fieldErrors.subject ? 'form-input-error' : ''}`}
                    placeholder="Konu"
                    disabled={isSubmitting}
                  />
                  {fieldErrors.subject && <div className="field-error">{fieldErrors.subject}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChangeWithValidation}
                    className={`form-textarea ${fieldErrors.message ? 'form-textarea-error' : ''}`}
                    placeholder="Mesajınız"
                    rows={6}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.message && <div className="field-error">{fieldErrors.message}</div>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Ücretsiz Danışmanlık Talebi Gönder"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info-header">
                <div className="section-badge">
                  <span className="badge-icon">🏢</span>
                  <span className="badge-text">Kurumsal İletişim</span>
                </div>
                <h2 className="section-title">
                  Eğitim Teknolojileri
                  <span className="highlight">Uzmanları</span>
                </h2>
                <p className="section-subtitle">
                  Eğitim kurumunuzun dijital dönüşümü için uzman ekibimizden anında destek alın.
                  Platform tanıtımları, demo talepleri ve işbirliği fırsatları için hazırız.
                </p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    📧
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">E-posta</h3>
                    <p className="contact-info-primary">info@eduly.com.tr</p>
                    <p className="contact-info-secondary">
                      Genel sorularınız için 24 saat içinde dönüş yapıyoruz
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    🕒
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">Çalışma Saatleri</h3>
                    <p className="contact-info-primary">Pzt - Cum: 09:00 - 18:00</p>
                    <p className="contact-info-secondary">
                      Hafta sonu ve resmi tatillerde kapalıyız
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={closeSuccessModal}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-content">
              <div className="success-icon">✅</div>
              <h3 className="success-title">Mesajınız Başarıyla Gönderildi!</h3>
              <p className="success-message">
                Eğitim danışmanlık talebiniz alınmıştır. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </p>
              <div className="success-details">
                <div className="detail-item">
                  <span className="detail-icon">⏱️</span>
                  <span>24 saat içinde dönüş</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🎯</span>
                  <span>Ücretsiz danışmanlık</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <span>E-posta onayı gönderildi</span>
                </div>
              </div>
              <button className="btn btn-primary success-close-btn" onClick={closeSuccessModal}>
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="success-toast">
          <div className="toast-content">
            <div className="toast-icon">✅</div>
            <div className="toast-text">
              <div className="toast-title">Mesajınız gönderildi!</div>
              <div className="toast-subtitle">En kısa sürede size dönüş yapacağız</div>
            </div>
            <button className="toast-close" onClick={() => setShowSuccessToast(false)}>×</button>
          </div>
          <div className="toast-progress"></div>
        </div>
      )}

      {/* Error Toast */}
      {showErrorToast && (
        <div className="error-toast">
          <div className="toast-content">
            <div className="toast-icon">❌</div>
            <div className="toast-text">
              <div className="toast-title">Hata Oluştu</div>
              <div className="toast-subtitle">{errorMessage || 'Mesaj gönderilirken bir sorun yaşandı'}</div>
            </div>
            <button className="toast-close" onClick={() => setShowErrorToast(false)}>×</button>
          </div>
          <div className="toast-progress error-progress"></div>
        </div>
      )}
    </div>
  );
}