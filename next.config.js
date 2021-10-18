// next.config.js
const withPlugins = require('next-compose-plugins');

const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
    async redirects() {
        return [
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
