const path = require('path');

module.exports = {
    title: "Mike's React Scaffold",
    components: "./app/components/**/*.jsx",
    updateWebpackConfig(webpackConfig) {
        const dir = path.join(__dirname, 'app', 'components');
	console.log('Loading components from: ' + dir);
        webpackConfig.module.loaders.push(
            {
                test: /\.jsx?$/,
                include: dir,
                loader: 'babel'
            },
	    {
                test: /\.css$/,
                include: dir,
                loader: 'style!css?modules&importLoader=1'
            }
        )

        return webpackConfig;
    }
};
