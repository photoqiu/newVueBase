'use strict';
/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 14:07:28
 * @LastEditTime: 2021-02-19 17:12:51
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-Admin-Template\webpack.dev.config.js
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
process.env.NODE_ENV = 'development';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config.js');
const { merge } = require('webpack-merge')

function resolvePath(dir) {
    return path.resolve(__dirname, dir);
}
let selfIp
function getIpAddress() {
    const interfaces = require('os').networkInterfaces
    for (let devName in interfaces) {
        const iface = interfaces[devName]
        for (let i = 0; i < iface.length; i += 1) {
            let alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address
            }
        }
    }
}
try {
    selfIp = getIpAddress()
} catch (e) {
    selfIp = 'localhost'
}
const PORT = 9000
const webpackConfigDev = {
    mode: 'development',
    optimization: {
        minimize: false,
    },
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            IS_DEVELOPMETN: true,
        }),
        // 将打包后的资源注入到html文件内    
        new HtmlWebpackPlugin({
            template: resolvePath('./src/template/index.html'),
            dlls: [],
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    stats: 'errors-only',
    watchOptions: {
        ignored: /node_modules/
    },
    devServer: {
        contentBase: resolvePath('./dist'),
        historyApiFallback: false,
        open: true,
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        proxy: {
            '/atreus': {
                target: 'http://139.129.201.64:8020/',
                pathRewrite: { '^/atreus-api': '/atreus-api' }
            }
        },
        noInfo: true,
        inline: true,
        progress: true,
        publicPath: "/",
        port: PORT,
        host: "127.0.0.1",
        stats: {
            colors: true
        },
        overlay: {
            warnings: true,
            errors: true
        },
        compress: true,
        disableHostCheck: true
    }
}
module.exports = merge(webpackConfigBase, webpackConfigDev)