const path = require('path');

module.exports = {
    resolve: {
        alias: {
            'styles': path.resolve(__dirname, 'resources', 'styles'),
            'views': path.resolve(__dirname, 'resources', 'views'),
        },
    },
};
