const path = require('path'); // CommomJS

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'dist', 'js'),
        filename: 'webpack.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map'
}