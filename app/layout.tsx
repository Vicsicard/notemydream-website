import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteMyDream — Your Morning Reflection Companion',
  description: 'Wake up, speak your dream, and start your day with gentle clarity. A calm, private space to explore your inner world.',
  openGraph: {
    title: 'NoteMyDream — Your Morning Reflection Companion',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
