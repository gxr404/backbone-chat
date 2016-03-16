var webpack = require('webpack');
module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/main.js']
    },

    output: {
        path: './dist/',
        publicPath: '/dist/', //server访问时的路径
        filename: 'main.build.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules|dist/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            exclude: /node_modules|dist/,
            loaders: ['style', 'css', 'sass']
        },{
            test:/\.(jpg|png|gif|jpeg)$/,
            loader:'url-loader'
        }]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}
