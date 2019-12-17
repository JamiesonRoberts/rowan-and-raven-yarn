import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Fragment } from 'react';

class MyDocument extends Document {
    setGoogleTags() {
        return {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-154678171-1');
      `
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                <Fragment>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-154678171-1"
                    />
                    <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                </Fragment>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
