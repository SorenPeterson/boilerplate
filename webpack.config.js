const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
