const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        exclude: /node_modules/,
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html')
    })],
    module: {
        loaders: [
            {
                test: /\.jsx/,
                include: path.join(__dirname, 'src'),
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        hot: true
    }
};
