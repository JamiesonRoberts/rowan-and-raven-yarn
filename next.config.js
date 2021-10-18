// next.config.js
const withPlugins = require('next-compose-plugins');

const withSvgr = require("next-svgr");
const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlugins([
    withSvgr,
    withPlausibleProxy({
        subdirectory: 'analytics'
    })
]);
