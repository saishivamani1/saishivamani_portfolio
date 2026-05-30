import type { Metadata } from 'next';
import { Bangers, Noto_Sans_JP, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import MangaCursor from './components/MangaCursor';
import JsonLd from './components/JsonLd';
import { Analytics } from '@vercel/analytics/next';

/* ─── Fonts via next/font (no render-blocking) ───────────────────────────── */
const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-manga',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

/* ─── Constants ──────────────────────────────────────────────────────────── */
const BASE_URL = 'https://saishivamaniportfolio.vercel.app';
const OG_IMAGE = `${BASE_URL}/portrait.png`;

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sai Shivamani — Software Engineer | AI Systems • Cloud • Full-Stack Development',
    template: '%s | Sai Shivamani',
  },
  description:
    'Portfolio of Sai Shivamani — Software Engineer specializing in AI Systems, NLP, Cloud Computing, and Full-Stack Development. Building intelligent systems with Python, React, FastAPI, AWS, and Transformers.',
  keywords: [
    'Sai Shivamani',
    'Software Engineer',
    'AI Systems Engineer',
    'NLP Engineer',
    'Cloud Computing',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'Python Developer',
    'React Developer',
    'FastAPI',
    'Hugging Face',
    'Transformers',
    'AWS',
    'Portfolio',
    'Hyderabad',
    'India',
    'AI Engineer Portfolio India',
  ],
  authors: [{ name: 'Sai Shivamani', url: BASE_URL }],
  creator: 'Sai Shivamani',
  publisher: 'Sai Shivamani',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Sai Shivamani Portfolio',
    title: 'Sai Shivamani — Software Engineer | AI Systems • Cloud • Full-Stack',
    description:
      'Software Engineer from Hyderabad specializing in AI Systems, NLP, Cloud Computing, and Full-Stack Development. Building intelligent systems with Python, React, FastAPI & AWS.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Sai Shivamani — Software Engineer | AI Systems • Cloud • Full-Stack Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Shivamani — Software Engineer | AI Systems • Cloud • Full-Stack',
    description:
      'Portfolio of Sai Shivamani — Software Engineer specializing in AI Systems, NLP, Cloud Computing, and Full-Stack Development from Hyderabad, India.',
    images: [OG_IMAGE],
    creator: '@saishivamani1',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },
  other: {
    'theme-color': '#000000',
  },
};

/* ─── Layout ─────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${bangers.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <JsonLd />
      </head>
      <body className="bg-black text-white antialiased">
        <MangaCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
