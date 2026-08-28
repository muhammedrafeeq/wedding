import type { Metadata, Viewport } from 'next';
import { 
  Pinyon_Script, 
  Great_Vibes, 
  Lateef, 
  El_Messiri, 
  Amiri, 
  Cormorant_Garamond, 
  Playfair_Display, 
  Montserrat 
} from 'next/font/google';
import './globals.css';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-curly',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const lateef = Lateef({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

const elMessiri = El_Messiri({
  weight: ['400', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic-heading',
  display: 'swap',
});

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: WEDDING_CONFIG.socialSharing.title,
  description: WEDDING_CONFIG.socialSharing.description,
  openGraph: {
    title: WEDDING_CONFIG.socialSharing.title,
    description: WEDDING_CONFIG.socialSharing.description,
    images: [WEDDING_CONFIG.socialSharing.ogImage],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#F2F1E8',
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
    <html 
      lang="en" 
      className={`
        ${pinyonScript.variable} 
        ${greatVibes.variable} 
        ${lateef.variable} 
        ${elMessiri.variable} 
        ${amiri.variable} 
        ${cormorant.variable} 
        ${playfair.variable} 
        ${montserrat.variable}
      `}
    >
      <body className="bg-[#F2F1E8] text-[#3a2c18] antialiased selection:bg-[#D2C08A]/30 selection:text-[#3a2c18]">
        {children}
      </body>
    </html>
  );
}
