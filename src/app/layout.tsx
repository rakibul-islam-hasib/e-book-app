import type { Metadata } from 'next'
import { Edu_TAS_Beginner, Inter, Teko } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'] })
// const teko = Teko({ weight: ['300', '400', '500', '600', '700'], variable: '--teko', subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'E-Book',
  description: 'Md Rakibul Islam',
}

// const edu_tas = Edu_TAS_Beginner({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--teko' })
const teko = localFont(
  {
    src: '../assets/fonts/teko.ttf',
    display: 'swap',
    variable: '--teko',
  }
)

const fastTrack = localFont({
  src: '../assets/fonts/Fast-Track.otf',
  display: 'swap',
  variable: '--fast-track',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${teko.className} ${fastTrack.variable}`}>
        <NextTopLoader showSpinner={false} color='#F875AA' />
        {children}
      </body>
    </html>
  )
}
