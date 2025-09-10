import type { Metadata } from "next";
import CorporateHeader from "./components/CorporateHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduly Eğitim Teknolojileri",
  description: "Eğitim teknolojileri alanında yenilikçi çözümler sunan lider firma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{
        margin: 0,
        padding: '0',
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: 'var(--background)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        lineHeight: 1.65,
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '0.01em'
      }}>
        <CorporateHeader />
        {children}
      </body>
    </html>
  );
}