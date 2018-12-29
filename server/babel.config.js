// const Environments = require('./webpack/environments');
module.exports = api => {

    api.cache(true);
    
    return {
        presets: [
            ["@babel/env", {
                "modules": "commonjs",
                "targets": {
                    "node": "8"
                }
            }],
            "@babel/typescript",
        ],

        plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
            ["babel-plugin-webpack-alias", {
                "config": "alias.config.js",
                "findConfig": true
            }]
        ]
    }
  }