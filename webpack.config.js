module.exports = {
    entry: [
        './views/main.js'
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders:
                    [
                        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]--[hash:base64:5]',
                        'postcss-loader',
                    ]
            },
            {
                test: /\.js$/,
                loader: 'babel',
            },
        ],
    }
};
