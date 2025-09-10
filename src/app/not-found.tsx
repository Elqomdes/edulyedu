"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #212d35 0%, #48616d 50%, #7099b2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(6, 6, 6, 0.15)'
      }}>
        {/* Error Illustration */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: 'linear-gradient(135deg, #9cd6df, #7099b2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#212d35',
            boxShadow: '0 8px 25px rgba(112, 153, 178, 0.3)'
          }}>
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3rem)',
          fontWeight: '800',
          color: '#212d35',
          marginBottom: '16px',
          lineHeight: '1.2'
        }}>
          Sayfa Bulunamadı
        </h1>

        <p style={{
          fontSize: '1.125rem',
          color: '#48616d',
          marginBottom: '32px',
          lineHeight: '1.6'
        }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          Ana sayfaya dönerek diğer içeriklere ulaşabilirsiniz.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center'
        }}>
          <Link href="/" className="btn" style={{ marginBottom: '8px' }}>
            🏠 Ana Sayfa
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => window.history.back()}
          >
            ← Geri Dön
          </button>
        </div>

        {/* Additional Help */}
        <div style={{
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#48616d'
          }}>
            Sorun devam ederse,{" "}
            <Link href="/iletisim" style={{
              color: '#7099b2',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              bizimle iletişime geçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}