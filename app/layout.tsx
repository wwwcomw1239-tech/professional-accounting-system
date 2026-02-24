import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'تعلم المحاسبة مجاناً | أكاديمية المحاسبة العربية',
  description: 'منصة عربية مجانية لتعلم المحاسبة بمسارات ودورات ودروس منظمة.',
  openGraph: {
    title: 'أكاديمية المحاسبة العربية',
    description: 'تعلم المحاسبة مجاناً باللغة العربية',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
