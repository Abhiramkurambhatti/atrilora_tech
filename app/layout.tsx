import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atrilora Technologies — Design · Develop · Automate · Grow',
  description:
    'A one-stop digital partner for startups and businesses. We build websites, mobile apps, AI automations, brand identities and digital marketing strategies that drive real growth.',
  keywords: ['digital agency', 'web development', 'mobile app', 'AI automation', 'branding', 'digital marketing', 'startup', 'India'],
  authors: [{ name: 'Atrilora Technologies' }],
  openGraph: {
    title: 'Atrilora Technologies — Design · Develop · Automate · Grow',
    description: 'A one-stop digital partner for startups and businesses.',
    url: 'https://atrilora.com',
    siteName: 'Atrilora Technologies',
    type: 'website',
    images: [
      {
        url: '/images/hero-desk.jpg',
        width: 1920,
        height: 1080,
        alt: 'Atrilora Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atrilora Technologies — Design · Develop · Automate · Grow',
    description: 'A one-stop digital partner for startups and businesses.',
    images: ['/images/hero-desk.jpg'],
  },
  metadataBase: new URL('https://atrilora.com'),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Atrilora Technologies',
              url: 'https://atrilora.com',
              logo: 'https://atrilora.com/images/logo.svg',
              description: 'A one-stop digital agency for startups and businesses.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9552050093',
                contactType: 'customer service',
                email: 'abhiramkurambhatti@gmail.com',
              },
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-ivory text-rich-black">
        {children}
      </body>
    </html>
  );
}
