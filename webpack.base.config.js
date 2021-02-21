'use strict';
/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 14:07:28
 * @LastEditTime: 2021-02-20 18:36:59
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-VAdmin\webpack.base.config.js
 * @version: 
 */
/**
 *
 *          ┌─┐       ┌─┐
 *       ┌──┘ ┴───────┘ ┴──┐
 *       │                 │
 *       │       ───       │
 *       │  ─┬┘       └┬─  │
 *       │                 │
 *       │       ─┴─       │
 *       │                 │
 *       └───┐         ┌───┘
 *           │         │
 *           │         │
 *           │         │
 *           │         └──────────────┐
 *           │                        │
 *           │                        ├─┐
 *           │                        ┌─┘
 *           │                        │
 *           └─┐  ┐  ┌───────┬──┐  ┌──┘
 *             │ ─┤ ─┤       │ ─┤ ─┤
 *             └──┴──┘       └──┴──┘
 *
 *        神兽保佑 （神兽来源与网络） 代码无BUG!
 *
 **/
const path = require('path');
const os = require('os'); // 系统操作函数
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const EXCLUDE = /node_modules|bower_components/;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}
const NODE_MODULES_PATH = resolve("./node_modules");
const fontAwesomePath = path.join(__dirname, './node_modules/font-awesome/css/font-awesome.css');
const localforagePath = path.join(__dirname, './node_modules/localforage/dist/localforage.js');

module.exports = {
    entry : {
        vendor: ['vue', 'vue-router', 'vuex', 'whatwg-fetch', 'fetch-jsonp'],
        index: './src/app_index.ts'
    },
	output: {
		filename: '[name].js',
        publicPath: './',
		path: resolve('./dist')
	},
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.js?$/,
                exclude: EXCLUDE,
                include: [resolve('./src')],
                use: [
                    'babel-loader?cacheDirectory=true'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: resolve('./tsconfig.json'),
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js"),
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js"),
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js"),
                            },
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        name: './assets/images/[name].[hash:9].[ext]',
                        mimetype: 'image/png',
                        limit: 8192
                    }
                }]
            },
            {
                test: /\.(mp4|ogg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 18192
                    }
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[path][name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loader: "file-loader",
                options: {
                    name: './assets/fonts/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.json$/,
                use: 'val-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            fontAwesome: fontAwesomePath,
            vue: "@vue/runtime-dom",
            localforage: localforagePath
        },
        extensions: ['.ts', '.tsx', '.js', '.css', '.vue', '.less', '.json', '.*'],
        enforceExtension: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jquery: 'jQuery',
            jQuery: 'jQuery',
            'window.jQuery': 'jQuery'
        }),
        new MiniCssExtractPlugin({
            filename: "./assets/css/[name].[chunkhash].css",
            chunkFilename: "./assets/css/[id].css"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ProgressBarPlugin(
            {
                format: chalk.blueBright('  build :bar :percent (:elapsed seconds) '),
                clear: true,
                summary: false,
                customSummary: res => {
                    process.stderr.write(chalk.blueBright('    '))
                }
            }
        ),
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}