import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { Raleway, Roboto } from '@next/font/google'

import '@/styles/styles.css'

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: '400',
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

const ralewayFont = Raleway({
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap',
})

const App = ({ Component, pageProps }) => {
    return (
        <PlausibleProvider
            domain='rowanandravenyarn.ca'
            trackOutboundLinks={true}
        >
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='shortcut icon' href='/favicon.ico' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#000000'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <style jsx global>{`
                :root {
                    --primary-font: ${robotoFont.style.fontFamily};
                    --heading-font: ${ralewayFont.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default App
