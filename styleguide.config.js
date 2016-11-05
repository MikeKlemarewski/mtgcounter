const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var postCSSValues = require('postcss-modules-values')

module.exports = {
    title: "Mike's React Scaffold",
    components: "./app/components/**/*.jsx",
    updateWebpackConfig(webpackConfig) {
        const dir = path.join(__dirname, 'app', 'components');
        webpackConfig.module.loaders.push(
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            },
            {
                test: /.css$/,
                include: dir,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoader=1&localIdentName=[name]___[local]___[hash:base64:5]!postcss-loader')
            }
        )

        webpackConfig.plugins.push(
            new ExtractTextPlugin('style.css', {allChunks: true})
        )
        webpackConfig.postcss = [
            postCSSValues,
            autoprefixer({ browsers: ['last 2 versions'] })
        ]

        return webpackConfig;
    }
};
