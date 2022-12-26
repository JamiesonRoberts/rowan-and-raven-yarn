// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlausibleProxy } = require('next-plausible');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
    silent: true,
    hideSourceMaps: true,
};

const nextConfig = withPlausibleProxy({
    subdirectory: 'analytics',
})({
    swcMinify: true,
    reactStrictMode: true,
    sentry: {
        hideSourceMaps: true,
        autoInstrumentServerFunctions: false,
    },
    i18n: {
        locales: ['en-CA'],
        defaultLocale: 'en-CA',
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
            {
                source: '/policies/:slug*',
                destination: '/', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
})

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
