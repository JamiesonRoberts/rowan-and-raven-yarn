import Link from 'next/link'

import Logo from '@/components/Logo'

export const metadata = {
  title: 'Whoops, something went wrong.',
}

export default function NotFound() {
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
      <h1>404 - Page Not Found</h1>
      <Link href={'/'}>Return back to the main page</Link>
    </div>
  )
}
