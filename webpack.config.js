'use strict';

/**
    * @file Entry point for webpack determines if dev or prod
    * @author John Butler
*/


module.exports = (env = {}) => {
    // env comes from package.json
    const buildMode = (env.prod) ? './webpack.prod.config.js' : './webpack.dev.config.js';

    console.log('\x1b[34m%s', `**\n  => Building: ${env.prod ? "PRODUCTION" : "DEVELOPMENT"}\n**\n`);

    return require(buildMode);
};
