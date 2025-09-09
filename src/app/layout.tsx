import type { Metadata, Viewport } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloater from '@/components/ui/WhatsAppFloater'
import BreadcrumbWrapper from '@/components/ui/BreadcrumbWrapper'

const exo2 = Exo_2({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-exo-2'
})

export const metadata: Metadata = {
  title: 'SpeedyIP - Patent Services | Fast Track Your Innovation',
  description: 'Get your patent filed quickly with SpeedyIP. Expert patent attorneys, competitive pricing, and fast-track processing. Compare plans and get your quote today.',
  keywords: 'patent filing, patent attorney, intellectual property, patent services, patent application, patent search, patent prosecution, USPTO filing, patent drafting',
  authors: [{ name: 'SpeedyIP Team' }],
  creator: 'SpeedyIP',
  publisher: 'SpeedyIP',
  robots: 'index, follow',
  openGraph: {
    title: 'SpeedyIP - Patent Services | Fast Track Your Innovation',
    description: 'Get your patent filed quickly with SpeedyIP. Expert patent attorneys, competitive pricing, and fast-track processing.',
    type: 'website',
    url: 'https://speedyip.com',
    siteName: 'SpeedyIP',
    locale: 'en_US',
    images: [
      {
        url: 'https://speedyip.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SpeedyIP Patent Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpeedyIP - Patent Services | Fast Track Your Innovation',
    description: 'Get your patent filed quickly with SpeedyIP. Expert patent attorneys, competitive pricing, and fast-track processing.',
    images: ['https://speedyip.com/twitter-image.jpg'],
    creator: '@speedyip',
  },
  alternates: {
    canonical: 'https://speedyip.com',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://speedyip.com" />
        <meta name="theme-color" content="#13292a" />
        <meta name="msapplication-TileColor" content="#13292a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SpeedyIP" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={exo2.className}>
        <Header />
        <BreadcrumbWrapper />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloater />
      </body>
    </html>
  )
}