var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var postCSSValues = require('postcss-modules-values')
var autoprefixer = require('autoprefixer')

module.exports = {
    entry: './app/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new ExtractTextPlugin('style.css', {allChunks: true})
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            },
            cacheDirectory: __dirname + '/tmp'
        },{
            test: /.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoader=1&localIdentName=[name]___[local]___[hash:base64:5]!postcss-loader')
        }]
    },
    postcss: [
        postCSSValues,
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
    devServer: {
         headers: { "Access-Control-Allow-Origin": "*" },
         contentBase: '.',
         port: 8443,
         historyApiFallback: {
            index: 'index.html'
         }
    }
};
