import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REALM GAME VN | Vương Quốc Game Visual Noel',
  description: 'Nơi chia sẻ các tựa game hay nhất',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}