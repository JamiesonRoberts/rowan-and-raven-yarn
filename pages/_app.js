import React from 'react'
import App from 'next/app'
import PlausibleProvider from 'next-plausible'

import '../components/styles.css'

class MyApp extends App {
    render() {
        if (typeof window !== 'undefined') {
            const WebFont = require('webfontloader');

            WebFont.load({
                google: {
                    families: ['Raleway:400', 'Roboto:400&display=swap'],
                },
                active: () => {
                    sessionStorage.fontsLoaded = true
                },
            });
        }

        const { Component, pageProps } = this.props
        return (
            <PlausibleProvider domain="rowanandravenyarn.ca">
                <Component {...pageProps} />
            </PlausibleProvider>
        )
    }
}

export default MyApp
