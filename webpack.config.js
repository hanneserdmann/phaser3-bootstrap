const config = require('./package.json');
const path = require('path');
const HtmlWebpackTemplate = require('html-webpack-template');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images'
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: HtmlWebpackTemplate,

            fileName: 'index.html',
            appMountId: 'app',
            title: config.displayName,
        })
    ]
};