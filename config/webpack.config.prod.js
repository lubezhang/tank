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
        chunkFilename: '[hash].[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    //babel重要的loader在这里
    module: {
        loaders: config.getLoaders()
    },
    plugins: [
        new webpack.optimize.DedupePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}
