import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Pradyuman Sharma | Creative Developer',
  description:
    'Full Stack Developer focused on building high-impact, smooth, and aesthetic web experiences.',
};

import HeroBackground from '@/components/canvas/HeroBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} text-white antialiased selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <HeroBackground />
        {children}
      </body>
    </html>
  );
}
