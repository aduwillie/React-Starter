var path = require('path');

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
    }
}