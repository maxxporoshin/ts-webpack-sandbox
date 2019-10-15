const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        index: './index.ts'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.ts/,
            use: 'ts-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
