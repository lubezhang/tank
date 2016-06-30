var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var config = require("./config");

module.exports = {
    entry: {
        app: path.resolve(config.srcPagePath, 'index.jsx')
    },
    output: {
        path: config.buildPath,
        filename: 'bundle.js',
        publicPath: "/build/",
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3001
    },
    //babel重要的loader在这里
    module: {
        loaders: config.getLoaders()
    },
    plugins: [

    ]
}
