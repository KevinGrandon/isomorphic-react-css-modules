var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: './dist/',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new ExtractTextPlugin('./css/bundle.css'),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    [
                        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]--[hash:base64:5]',
                        'postcss-loader',
                    ]
                )
            }
        ]
    },
    postcss: function(webpack) {
        return [
            require('postcss-import')({ addDependencyTo: webpack }),
            require('postcss-url')(),
            require('postcss-cssnext')(),
            require('postcss-browser-reporter')(),
            require('postcss-reporter')()
        ];
    },
};
