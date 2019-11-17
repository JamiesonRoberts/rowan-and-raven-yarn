// next.config.js
const withPlugins = require('next-compose-plugins');

const path = require('path');
const withCSS = require('@zeit/next-css');
const withSvgr = require('next-svgr');

const nextConfig = {
    webpack: (config, options) => {
        config.resolve.alias['styles'] = path.join(__dirname, 'resources', 'styles');
        config.resolve.alias['views'] = path.join(__dirname, 'resources', 'views');
        return config;
    },
};

module.exports = withPlugins([
    [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
        },
    }],
    withSvgr,
], nextConfig);
