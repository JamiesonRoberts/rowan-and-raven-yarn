'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

import Logo from '@/components/Logo'

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: '60rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '2rem',
        margin: '0 auto',
      }}
    >
      <Logo />
      <h1>Whoops - Something didn&apos;t quite go right there</h1>
      <Link href='/'>Return back to the main page</Link>
    </div>
  )
}
