module.exports = {
    output: {
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=1!postcss'
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
