import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Raleway, Roboto } from 'next/font/google'

import '@/components/_globals/globals.css'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: '400',
  fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--primary-font',
})

const ralewayFont = Raleway({
  subsets: ['latin'],
  fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  display: 'swap',
  variable: '--heading-font',
})

export const viewport = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#FFFFFF',
  colorScheme: 'light',
}

export const metadata = {
  metadataBase: new URL('https://rowanandravenyarn.ca/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en-CA'
      className={`${robotoFont.variable} ${ralewayFont.variable}`}
    >
      <CloudflareWebAnalyticsProvider
        token={'6a6028e0d56f4d9dbe9fe4298d04766c'}
      />
      <body>{children}</body>
    </html>
  )
}
