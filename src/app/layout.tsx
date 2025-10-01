import type { Metadata, Viewport } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'

const exo2 = Exo_2({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-exo-2'
})

export const metadata: Metadata = {
  title: 'SpeedyIP - Expert Patent Filing Services | Fast Track Your Innovation',
  description: 'Professional patent filing services with expert attorneys. Get your patent filed in 30 days with USPTO-certified professionals. Free consultation available.',
  authors: [{ name: 'SpeedyIP Team' }],
  creator: 'SpeedyIP',
  publisher: 'SpeedyIP',
  robots: 'index, follow',
  openGraph: {
    title: 'SpeedyIP - Expert Patent Filing Services',
    description: 'Professional patent filing services with expert attorneys. Get your patent filed in 30 days with USPTO-certified professionals.',
    type: 'website',
    url: 'https://speedyip.com',
    siteName: 'SpeedyIP',
    locale: 'en_US',
    images: [
      {
        url: 'https://speedyip.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SpeedyIP Patent Filing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpeedyIP - Expert Patent Filing Services',
    description: 'Professional patent filing services with expert attorneys. Get your patent filed in 30 days.',
    images: ['https://speedyip.com/twitter-image.jpg'],
    creator: '@speedyip',
  },
  alternates: {
    canonical: 'https://speedyip.com',
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
        <meta name="theme-color" content="#0066B2" />
        <meta name="msapplication-TileColor" content="#0066B2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SpeedyIP" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={exo2.className}>
        {/* Skip Links for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <a 
          href="#navigation" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to navigation
        </a>
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}