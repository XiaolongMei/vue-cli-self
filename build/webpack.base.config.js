/**
 * Created by xieyuanbin on 2017/8/17.
 * Email:yuanbin.xie@tempus.cn
 */

let path = require('path');
let BUILD_PATH = path.join(__dirname, "../dist");  //输出目录
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        index: "./src/js/index.js",
        vendor: ["vue",'vuex','vue-router','axios']
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'components': path.join(__dirname, "../src/components"),
            'pages': path.join(__dirname, "../src/pages"),
            'util': path.join(__dirname, "../src/util")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','less-loader'] }),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|eot|ttf)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: "./assets/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new ExtractTextPlugin('css/[name].[hash:8].css')
    ]

};