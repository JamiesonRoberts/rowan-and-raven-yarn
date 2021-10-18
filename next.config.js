// next.config.js
const withPlugins = require('next-compose-plugins');

const withSvgr = require("next-svgr");
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
    withSvgr,
    withPlausibleProxy({
        subdirectory: 'analytics'
    })
], nextConfig);
