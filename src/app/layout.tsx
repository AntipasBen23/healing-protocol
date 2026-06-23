import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Healing Protocol — Food Therapy & Lifestyle Medicine Institution | Abuja, Nigeria',
  description: "Nigeria's premier food therapy and lifestyle medicine institution based in Abuja. Personalised protocols, executive wellness, membership programmes, and the HealingProtocol Academy.",
  keywords: [
    'food therapy Abuja',
    'lifestyle medicine Nigeria',
    'wellness clinic Abuja',
    'diabetes reversal Nigeria',
    'hypertension natural treatment Abuja',
    'executive wellness programme Nigeria',
    'nutrition consultation Abuja',
    'food as medicine Nigeria',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
