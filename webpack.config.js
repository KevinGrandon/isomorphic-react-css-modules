module.exports = {
    entry: [
        './views/main.js'
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=1!postcss'
            },
            {
                test: /\.js$/,
                loader: 'babel',
            },
        ],
    }
};
