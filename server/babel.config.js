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
            [require.resolve('babel-plugin-module-resolver'), {
                root: ["."],
                alias: {
                    '@common': './src/common',
                    '@data-sources': './src/data-sources',
                    '@resolvers': './src/resolvers',
                    '@type-definitions': './src/type-definitions',
                    '@utils': './src/utils'
                }
            }]
        ]
    }
  }