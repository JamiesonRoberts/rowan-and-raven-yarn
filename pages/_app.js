import PlausibleProvider from 'next-plausible'
import {Raleway, Roboto} from '@next/font/google'

import '/styles/styles.css'

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: '400',
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
})

const ralewayFont = Raleway({
    subsets: ['latin'],
    fallback: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    display: 'swap'
});


const App = ({Component, pageProps}) => {
    console.log(ralewayFont);
    return (
        <PlausibleProvider domain="rowanandravenyarn.ca" trackOutboundLinks={true}>
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
