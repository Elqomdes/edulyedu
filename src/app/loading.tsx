export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #212d35 0%, #48616d 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div className="spinner"></div>
      <p style={{
        color: 'rgba(255,255,255,0.8)',
        fontSize: '1.1rem',
        marginTop: '20px',
        fontWeight: '500'
      }}>Eduly yükleniyor...</p>
    </div>
  );
}