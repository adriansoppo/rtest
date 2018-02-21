const webpack = require('webpack');
const path = require('path');
// const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    // plugins: [
    //     new MinifyPlugin()
    // ]
};