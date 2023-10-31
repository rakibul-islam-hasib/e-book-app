import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Book',
  description: 'Md Rakibul Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color='#F875AA' />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
