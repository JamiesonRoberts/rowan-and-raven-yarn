// next.config.js
const withPlugins = require('next-compose-plugins');

const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-CA'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-CA'
    },
    async redirects() {
        return [
            {
                source: '/password',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/products/:slug*',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/collections/:slug*',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
            {
                source: '/pages/:slug*',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
};

module.exports = withPlugins([
    withPlausibleProxy({
        subdirectory: 'analytics'
    })
], nextConfig);
