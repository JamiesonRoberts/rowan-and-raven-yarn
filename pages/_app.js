import React from 'react';
import App from 'next/app';

import 'styles/app.scss';

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        if (typeof window !== 'undefined') {
            const WebFont = require('webfontloader');

            WebFont.load({
                google: {
                    families: ['Raleway:400', 'Roboto:400&display=swap'],
                },
            });
        }

        const { Component, pageProps } = this.props;

        const layout = Component.layout || (page => page);

        const meta = Component.head || (() => null);

        return [
            meta(),
            layout(<Component {...pageProps}/>),
        ];
    }
}

export default MyApp;
