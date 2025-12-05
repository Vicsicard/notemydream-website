import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './google-analytics'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Note My Dream',
  description: 'Capture and reflect on your dreams with AI-powered insights',
  manifest: '/manifest.json',
  themeColor: '#6B5CE7',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Note My Dream',
  },
  openGraph: {
    title: 'Note My Dream — Your Morning Reflection Companion',
    description: 'Wake up, speak your dream, and start your day with gentle clarity.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
