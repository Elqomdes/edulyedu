import type { Metadata } from "next";
import CorporateHeader from "./components/CorporateHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduly Eğitim Teknolojileri",
  description: "Eğitim teknolojileri alanında yenilikçi çözümler sunan lider firma",
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      }
    ],
    shortcut: '/icon.svg',
    apple: [
      {
        url: '/icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/icon.svg',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/icon.svg',
      }
    ]
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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