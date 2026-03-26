import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ryan Judy — Digital Strategist & Marketing Technologist',
  description:
    'Portfolio of Ryan Judy — Digital Strategist and Marketing Technologist based in Columbus, OH. Specializing in web strategy, UX, and data-driven digital marketing.',
  openGraph: {
    title: 'Ryan Judy — Digital Strategist & Marketing Technologist',
    description:
      'Building impactful digital experiences at the intersection of strategy, technology, and marketing.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
