import Link from "next/link";

export default function Hakkimizda() {
  return (
    <div className="hakkimizda-page">
      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-icon">🎓</span>
              <span className="badge-text">Eğitim Vizyonu</span>
            </div>
            <h2 className="section-title">
              Eğitimde
              <span className="highlight">Geleceği Şekillendiriyoruz</span>
            </h2>
            <p className="section-subtitle">
              Yapay zeka destekli eğitim teknolojilerimizle öğrencilerin ve eğitimcilerin
              başarısını maksimuma çıkararak, eğitimde yeni bir çağ başlatıyoruz
            </p>
          </div>

          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-card">
              <div className="vision-header">
                <div className="vision-icon">🌟</div>
                <h3 className="vision-title">Vizyonumuz</h3>
              </div>
              <p className="vision-text">
                Eğitim kurumlarının dijital dönüşümünde güvenilir partner olarak, öğrencilerin
                kişiselleştirilmiş öğrenme yolculuklarında en iyi deneyimi sunmak. Yapay zeka
                teknolojilerimizle eğitimde fırsat eşitliğini sağlayarak, her öğrencinin kendi
                hızında başarılı olmasına olanak tanımak.
              </p>
              <div className="vision-highlights">
                <span className="highlight-item">🎓 Kişiselleştirilmiş Öğrenme</span>
                <span className="highlight-item">🤖 Akıllı Eğitim Teknolojileri</span>
                <span className="highlight-item">🌟 Öğrenci Başarı Odaklı</span>
              </div>
            </div>

            {/* Mission */}
            <div className="vision-card">
              <div className="vision-header">
                <div className="vision-icon">🚀</div>
                <h3 className="vision-title">Misyonumuz</h3>
              </div>
              <p className="vision-text">
                Eğitim kurumlarına en ileri yapay zeka teknolojilerini sunarak, öğrencilerin
                öğrenme potansiyellerini maksimuma çıkarmak. Kurumların dijital dönüşüm
                süreçlerinde yanlarında olarak, eğitimde kalite ve erişilebilirlik standartlarını
                sürekli yükseltmek ve geleceğin eğitimcilerini yetiştirmek.
              </p>
              <div className="vision-highlights">
                <span className="highlight-item">🏫 Kurum Odaklı Çözümler</span>
                <span className="highlight-item">📊 Veri Güdümlü Eğitim</span>
                <span className="highlight-item">🔬 Bilimsel Yaklaşım</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">Eğitim Değerleri</span>
            </div>
            <h2 className="section-title">
              Eğitimde
              <span className="highlight">Başarıyı Şekillendiren</span>
              Değerlerimiz
            </h2>
            <p className="section-subtitle">
              Eğitim kurumlarının başarısını odağımıza alarak, öğrenci odaklı yaklaşımla
              teknolojimizi geliştiriyoruz. Bilimsel temelli çözümlerimizle güvenilir bir
              eğitim deneyimi sunuyoruz.
            </p>
          </div>

          <div className="grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">İnovasyon ve Teknoloji</h3>
              <p className="feature-description">
                Eğitim teknolojilerindeki en son gelişmeleri takip ederek, bilimsel araştırmalar
                ve teknoloji inovasyonlarını eğitimle buluşturuyoruz. Geleceğin eğitim
                paradigmalarını bugün hayata geçiriyoruz.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="feature-title">Güvenilirlik ve Kalite</h3>
              <p className="feature-description">
                Öğrencilerin ve eğitimcilerin güvenini kazanmak için en yüksek teknolojik
                standartlarda çözümler geliştiriyoruz. Veri güvenliği ve eğitim kalitesi
                önceliklerimiz arasındadır.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Sürekli İyileşme</h3>
              <p className="feature-description">
                Eğitim teknolojilerindeki gelişmeleri yakından takip ederek sistemlerimizi
                sürekli güncelliyor ve iyileştiriyoruz. Öğrencilerin başarısı için
                yenilikçi çözümler üretmeye devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <div className="container">
          <div className="goals-header">
            <h3 className="goals-title">Hedeflerimiz</h3>
            <p className="goals-subtitle">
              2025 yılına kadar ulaşmayı hedeflediğimiz önemli kilometre taşları
            </p>
          </div>

            <div className="goals-grid">
              <div className="goal-item">
                <div className="goal-icon">🎓</div>
                <div className="goal-content">
                  <h4 className="goal-title">1 Milyon Öğrenci</h4>
                  <p className="goal-description">
                    Platformlarımızı kullanan öğrenci sayısını 1 milyona ulaştırmak
                  </p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">🏫</div>
                <div className="goal-content">
                  <h4 className="goal-title">5.000 Okul Ortaklığı</h4>
                  <p className="goal-description">
                    Türkiye&apos;deki okulların %80&apos;i ile iş birliği yapmak
                  </p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">🌍</div>
                <div className="goal-content">
                  <h4 className="goal-title">Uluslararası Genişleme</h4>
                  <p className="goal-description">
                    Avrupa ve Orta Doğu&apos;da lider eğitim teknoloji şirketi olmak
                  </p>
                </div>
              </div>

              <div className="goal-item">
                <div className="goal-icon">🔬</div>
                <div className="goal-content">
                  <h4 className="goal-title">Araştırma & Geliştirme</h4>
                  <p className="goal-description">
                    Eğitim teknolojilerinde uluslararası patentler almak
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Eğitimde Dijital
              <span className="highlight">Dönüşüm</span>
              Hazır mısınız?
            </h2>
            <p className="cta-subtitle">
              Kurumunuzun eğitim teknolojilerini güncellemeye hazır mısınız?
              Ücretsiz danışmanlık ve demo fırsatımızdan yararlanın.
            </p>
            <Link href="/iletisim" className="cta-button">
              Ücretsiz Danışmanlık Alın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}