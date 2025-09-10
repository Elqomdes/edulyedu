"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowSuccessModal(true);
      setShowSuccessToast(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setShowErrorToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Ad Soyad"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-posta *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="E-posta"
                      disabled={isSubmitting}
                    />
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
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Konu"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Mesajınız"
                    rows={6}
                    disabled={isSubmitting}
                  />
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
              <div className="toast-subtitle">Mesaj gönderilirken bir sorun yaşandı</div>
            </div>
            <button className="toast-close" onClick={() => setShowErrorToast(false)}>×</button>
          </div>
          <div className="toast-progress error-progress"></div>
        </div>
      )}
    </div>
  );
}