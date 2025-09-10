"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="page-container">

      {/* Kurumsal Hero Section */}
      <section className="corporate-hero">
        <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>

        <div className="container">
          <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span className="badge-icon">🏛️</span>
              <span className="badge-text">Türkiye'nin Eğitim Teknoloji Lideri</span>
            </div>

            <h1 className="hero-title">
              Eğitim Kurumlarının Dijital
              <span className="highlight">Dönüşüm</span>
              Ortağı
            </h1>

            <p className="hero-subtitle">
              Bilimsel temelli yapay zeka teknolojilerimizle 500+ eğitim kurumu ve
              50.000+ öğrenciye hizmet veriyoruz. Öğrenci başarısını artırmak için
              tasarlanmış kurumsal çözümlerimizle eğitimde yeni bir çağ başlatıyoruz.
            </p>

            <div className="hero-actions">
              <Link href="/iletisim" className="btn btn-primary">
                <span className="btn-icon">📞</span>
                Ücretsiz Danışmanlık
              </Link>
              <Link href="#platformlar" className="btn btn-secondary">
                <span className="btn-icon">🎯</span>
                Platformlarımızı Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Değerler Bölümü */}
      <section className="corporate-values">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <span className="badge-icon">⭐</span>
              <span className="badge-text">Kurumsal Değerlerimiz</span>
            </div>
            <h2 className="section-title">
              Eğitimde
              <span className="highlight">Mükemmellik</span>
              İlkemiz
            </h2>
            <p className="section-subtitle">
              Bilimsel temelli yaklaşımla geliştirdiğimiz çözümlerimiz, eğitim kurumlarının
              dijital dönüşüm yolculuklarında güvenilir bir partner olarak yanlarında oluyoruz.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3 className="value-title">Öğrenci Odaklı</h3>
              <p className="value-description">
                Her öğrencinin benzersiz öğrenme yolculuğunu destekleyen kişiselleştirilmiş
                eğitim deneyimleri tasarlıyoruz.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3 className="value-title">Bilimsel Yaklaşım</h3>
              <p className="value-description">
                Eğitim araştırmaları ve bilimsel verilere dayalı metodolojilerimizle
                öğrenci başarısını kanıtlanmış şekilde artırıyoruz.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">İş Birliği</h3>
              <p className="value-description">
                Eğitim kurumları, öğretmenler ve öğrencilerle güçlü iş birlikleri
                kurarak sürdürülebilir eğitim çözümleri üretiyoruz.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">İnovasyon</h3>
              <p className="value-description">
                Eğitim teknolojilerindeki son gelişmeleri takip ederek, sektörde
                öncü ve yenilikçi çözümler sunuyoruz.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">Güvenilirlik</h3>
              <p className="value-description">
                Kurumsal güvenlik standartları ve veri gizliliği ilkelerine bağlı
                kalarak güvenilir bir eğitim platformu sağlıyoruz.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3 className="value-title">Sürekli Gelişim</h3>
              <p className="value-description">
                Eğitim ihtiyaçlarını sürekli olarak analiz ederek platformumuzu
                geliştiriyor ve iyileştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Platformları Bölümü */}
      <section id="platformlar" className="education-platforms">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge">
              <span className="badge-icon">🎯</span>
              <span className="badge-text">Eğitim Platformlarımız</span>
            </div>
            <h2 className="section-title">
              Kapsamlı
              <span className="highlight">Eğitim Çözümleri</span>
            </h2>
            <p className="section-subtitle">
              Farklı eğitim ihtiyaçlarına yönelik geliştirdiğimiz platformlarımızla
              her öğrencinin başarı yolculuğunu destekliyoruz.
            </p>
          </div>

          <div className="platforms-grid">
            <div className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">📚</div>
                <h3 className="platform-title">Akademik Başarı Platformu</h3>
              </div>
              <p className="platform-description">
                Öğrencilerin akademik performansını izleyen ve geliştiren akıllı
                yönetim sistemi. Kişiselleştirilmiş öğrenme yolları ve performans
                analizi araçları.
              </p>
              <div className="platform-features">
                <span>📊 Performans Takibi</span>
                <span>🎯 Kişisel Planlama</span>
                <span>📈 İlerleme Raporları</span>
              </div>
            </div>

            <div className="platform-card featured">
              <div className="featured-badge">🏆 Öne Çıkan</div>
              <div className="platform-header">
                <div className="platform-icon">🧪</div>
                <h3 className="platform-title">STEM Eğitim Platformu</h3>
                </div>
              <p className="platform-description">
                Bilim, Teknoloji, Mühendislik ve Matematik alanlarında uzmanlaşmış
                interaktif öğrenme platformu. Öğrencilerin 21. yüzyıl becerilerini
                geliştirmesi için tasarlandı.
              </p>
              <div className="platform-features">
                <span>🔬 Laboratuvar Simülasyonu</span>
                <span>⚡ Proje Bazlı Öğrenme</span>
                <span>🤖 Kodlama Pratikleri</span>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">🎨</div>
                <h3 className="platform-title">Yaratıcı Sanatlar Platformu</h3>
              </div>
              <p className="platform-description">
                Görsel sanatlar, müzik ve yaratıcı yazma alanlarında öğrencilerin
                sanatsal yeteneklerini keşfetmeleri ve geliştirmelerini sağlar.
              </p>
              <div className="platform-features">
                <span>🎨 Dijital Sanat Araçları</span>
                <span>🎵 Müzik Beste Pratikleri</span>
                <span>✍️ Yaratıcı Yazma Rehberi</span>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">🌍</div>
                <h3 className="platform-title">Dil Öğrenme Platformu</h3>
                </div>
              <p className="platform-description">
                Yapay zeka destekli dil öğrenme sistemi. Öğrencilerin yabancı dil
                becerilerini doğal ve eğlenceli bir şekilde geliştirmelerini sağlar.
              </p>
              <div className="platform-features">
                <span>🗣️ Konuşma Pratikleri</span>
                <span>📝 Yazma Egzersizleri</span>
                <span>🎧 Dinleme Aktiviteleri</span>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">🏃‍♂️</div>
                <h3 className="platform-title">Spor ve Sağlık Platformu</h3>
              </div>
              <p className="platform-description">
                Fiziksel eğitim ve sağlıklı yaşam konularında öğrencilere rehberlik
                eden platform. Spor bilimi ve beslenme konularında kapsamlı içerikler.
              </p>
              <div className="platform-features">
                <span>🏃‍♂️ Antrenman Programları</span>
                <span>🥗 Beslenme Rehberi</span>
                <span>💪 Fitness Takibi</span>
              </div>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="platform-icon">🧠</div>
                <h3 className="platform-title">Psikolojik Rehberlik Platformu</h3>
                </div>
              <p className="platform-description">
                Öğrencilerin duygusal ve sosyal gelişimini destekleyen psikolojik
                rehberlik sistemi. Öğrencilerin duygusal zekasını geliştirmeye yönelik içerikler.
              </p>
              <div className="platform-features">
                <span>❤️ Duygusal Zeka Eğitimi</span>
                <span>🤝 Sosyal Beceriler</span>
                <span>🧘‍♂️ Stres Yönetimi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Son CTA Bölümü */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Şimdi Başlayın</span>
            </div>
            <h2 className="cta-title">
              Eğitim Kurumunuzun Geleceğini
              <span className="highlight">Bugün Şekillendirin</span>
            </h2>
            <p className="cta-subtitle">
              Ücretsiz danışmanlık ve demo fırsatımızdan yararlanarak kurumunuzun
              dijital dönüşüm yolculuğuna hemen başlayın.
            </p>

            <div className="cta-buttons">
              <Link href="/iletisim" className="btn btn-primary">
                <span className="btn-icon">📞</span>
                Ücretsiz Danışmanlık Alın
              </Link>
              <Link href="/hakkimizda" className="btn btn-secondary">
                <span className="btn-icon">ℹ️</span>
                Daha Fazla Bilgi
              </Link>
            </div>

            <div className="cta-trust">
              <div className="trust-badge">
                <span className="trust-icon">✅</span>
                <span className="trust-text">7 Gün Ücretsiz Deneme</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">🛡️</span>
                <span className="trust-text">ISO 27001 Sertifikalı</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">📞</span>
                <span className="trust-text">7/24 Teknik Destek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Premium Footer */}
      <footer className="ultra-footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">🎓</div>
                <div className="logo-text">Eduly</div>
                <div className="logo-subtitle">Eğitim Teknolojileri</div>
              </div>
              <p className="footer-description">
                Türkiye'de eğitim teknolojilerinde öncü ve güvenilir firma olarak,
                yapay zeka destekli eğitim çözümlerimizle geleceğin eğitim
                paradigmalarını bugün hayata geçiriyoruz.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span className="social-icon">📺</span>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div className="footer-section">
              <h3 className="footer-title">Platformlarımız</h3>
              <ul className="footer-links">
                <li><a href="https://hedefly.com">Hedefly - Öğrenci Koçluk</a></li>
                <li><a href="https://matly.com">Matly - Matematik Öğrenimi</a></li>
                <li><a href="https://fenly.com">Fenly - Fen Bilimleri</a></li>
                <li><a href="/platformlar">Tüm Platformlar</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="footer-section">
              <h3 className="footer-title">Şirket</h3>
              <ul className="footer-links">
                <li><a href="/hakkimizda">Hakkımızda</a></li>
                <li><a href="/ekip">Ekibimiz</a></li>
                <li><a href="/kariyer">Kariyer</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/haberler">Haberler</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-section">
              <h3 className="footer-title">Destek</h3>
              <ul className="footer-links">
                <li><a href="/yardim">Yardım Merkezi</a></li>
                <li><a href="/iletisim">İletişim</a></li>
                <li><a href="/sss">Sık Sorulan Sorular</a></li>
                <li><a href="/destek">Teknik Destek</a></li>
                <li><a href="/status">Sistem Durumu</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">İletişim</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@eduly.com.tr</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Pzt - Cum: 09:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h3 className="newsletter-title">Güncel Kalın</h3>
              <p className="newsletter-description">
                Eğitim teknolojilerindeki son gelişmeler ve yeniliklerden haberdar olun.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Abone Ol
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; 2024 Eduly Eğitim Teknolojileri A.Ş. Tüm hakları saklıdır.</p>
              </div>
              <div className="footer-bottom-links">
                <a href="/gizlilik">Gizlilik Politikası</a>
                <a href="/kullanim">Kullanım Koşulları</a>
                <a href="/cerez">Çerez Politikası</a>
                <a href="/guvenlik">Güvenlik</a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="footer-certifications">
            <div className="cert-item">
              <span className="cert-icon">🔒</span>
              <span className="cert-text">ISO 27001 Sertifikalı</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🛡️</span>
              <span className="cert-text">KVKK Uyumlu</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">⭐</span>
              <span className="cert-text">Türkçe Eğitim Bakanlığı Onaylı</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}