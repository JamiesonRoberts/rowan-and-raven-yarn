// next.config.js
const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withSvgr = require("next-svgr");

module.exports = withPlugins([
    [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]___[hash:base64:5]',
        },
    }],
    withSvgr,
]);
