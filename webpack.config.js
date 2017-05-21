const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src/client');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    resolve: {
        alias: {
            states: path.resolve(srcPath, 'states'),
            components: path.resolve(srcPath, 'components'),
            api: path.resolve(srcPath, 'api')
        }
    },
    entry: {
        index: './index.jsx',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        modules: false
                                    }
                                ],
                                'react'
                            ],
                            plugins: [
                                'babel-plugin-transform-class-properties',
                                'transform-object-rest-spread',
                                [
                                    "import", {
                                        libraryName: "antd", style: "css"
                                    }
                                ] // `style: true` for less
                            ]
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            }, {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }

        ]
    },
    //plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: 2})],
    plugins: [],
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 7070
    },
    devtool: 'cheap-source-map'
};
