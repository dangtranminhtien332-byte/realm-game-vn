import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
