import App from 'next/app'
import PlausibleProvider from 'next-plausible'
import {Raleway, Roboto} from '@next/font/google'

import '/styles/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css';

const robotoFont = Roboto({
    variable: '--primary-font',
    subsets: ['latin'],
    weight: '400',
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
})

const ralewayFont = Raleway({
    variable: '--heading-font',
    subsets: ['latin'],
    weight: '700',
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
});


class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <PlausibleProvider domain="rowanandravenyarn.ca" trackOutboundLinks={true}>
                <main className={`${robotoFont.variable} ${ralewayFont.variable}`}>
                    <Component {...pageProps} />
                </main>
            </PlausibleProvider>
        )
    }
}

export default MyApp
