import type { Metadata } from 'next'
import { Inter, Teko } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const teko = Teko({ weight: ['300', '400', '500', '600', '700'], variable: '--teko', subsets: ['latin'] })
export const metadata: Metadata = {
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
      <body className={`${inter.className}  ${teko.variable}`}>
        <NextTopLoader showSpinner={false} color='#F875AA' />
        {children}
      </body>
    </html>
  )
}
