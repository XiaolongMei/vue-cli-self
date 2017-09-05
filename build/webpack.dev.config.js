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
// let WebpackDevServer = require('webpack-dev-server');


module.exports = Merge(BaseConfig,{
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: "js/[name].min.js"
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: path.join(BUILD_PATH, "index.html"),
            template: './src/index.html',
            chunks: ["vendor", "index"],
            inject: true,
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new webpack.DefinePlugin({
            'process.env': '"development"'
        })
    ],
    devServer: {
        contentBase: BUILD_PATH,
        // quiet: true,
        // open: true,
        port: '9009',
        //host: '172.16.111.91',
        proxy: {
            '*': {
                target: 'https://zeji.tempus.cn/zeji-front/test',
                secure: false
            }
        }
    }


});