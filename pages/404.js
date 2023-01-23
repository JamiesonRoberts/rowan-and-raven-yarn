import Head from 'next/head'
import Link from 'next/link'

import Logo from '@/components/Logo'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - page not found</title>
            </Head>

            <main className={'layout'}>
                <Logo alt='Rowan & Raven Yarn' className={'logo'} />
                <div>
                    <h1 className={'title'}>404 - page not found</h1>
                    <Link href={'/'}>Return back to the main page</Link>
                </div>
            </main>
        </>
    )
}
