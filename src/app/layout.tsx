import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import Cursor from '@/components/ui/Cursor'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { WHATSAPP_NUMBER } from '@/lib/data'

const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'WebCraft Studio — We Build Digital Experiences',
  description: 'Premium web design agency. Stunning websites jo clients ko convert karti hain.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <Cursor />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton phone={WHATSAPP_NUMBER} />
        <Footer />
      </body>
    </html>
  )
}
