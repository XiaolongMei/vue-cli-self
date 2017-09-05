/**
 * Created by xieyuanbin on 2017/8/17.
 * Email:yuanbin.xie@tempus.cn
 */

const Merge = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BUILD_PATH = path.join(__dirname, "../dist");  //输出目录
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = Merge(BaseConfig,{
    output: {
        path: BUILD_PATH,
        filename: "js/[name].min.js"
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: path.join(BUILD_PATH, "index.html"),
            template: './src/index.html',
            chunks: ["manifest", "vendor", "index"],
            inject: true,
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['manifest','vendor'],
            filename: 'js/[name].[chunkhash:8].min.js'
        }),

        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress:{
                warnings:false,
                drop_console: true,  //no console删除页面中的console.log
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })

    ]
});