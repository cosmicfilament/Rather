const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const WebpackBar = require('webpackbar');

const zuben = 'http://192.168.1.52:3000/';
const mizar = 'http://192.168.1.37:3000/';
const localhost = 'http://localhost:3000';

// devServer is a webpack server that lets you run your front end web code live
module.exports = merge(common, {
    name: 'webpack.dev.config',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: zuben
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        watchContentBase: true,
        historyApiFallback: true,
        host: '192.168.1.52',
        port: 3000,
        hot: true,
        open: true,
        disableHostCheck: true,
        noInfo: true,
        stats: 'minimal'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar()
    ]
});
