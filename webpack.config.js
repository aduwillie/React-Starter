var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            { test: /\.(tsx?)/, use: ['ts-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: false
        })
    ]
}