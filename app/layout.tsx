import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plasma Etch Tool Monitor | Service Dashboard',
  description: 'Professional service engineering dashboard for plasma etching tool health monitoring and diagnostics',
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
      <body
        className={`${geistSans.className} antialiased`}
        style={{
          '--font-geist-sans': geistSans.style.fontFamily,
          '--font-geist-mono': geistMono.style.fontFamily,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}
