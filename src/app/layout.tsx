import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import ThreeScene from './components/ThreeScene'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sm-bitm',
  description: 'Spic-Macay BIT Mesra Chapter Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
      
        <Header />
        {children}
        <Footer />
        <ThreeScene />
      </body>
    </html>
  )
}
