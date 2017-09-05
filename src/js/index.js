/**
 * Created by Administrator on 2017/2/15.
 */

import Vue from 'vue';
import store from '../vuex'
import router from '../router'
import axios from 'axios'
import Home from '../pages/home/home.vue'


import '../assets/common.css'  //通用格式化css
import  '../util/flexible'    //移动端适配设置

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//设置接口请求地址 本地开发关闭 生产环境打开
// axios.defaults.baseURL = 'https://zeji.tempus.cn/zeji-front/test/';

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    //请求拦截处理
    return config;
}, function (error) {
    //请求错误时执行
    return Promise.reject(error);
});
//添加响应拦截器
axios.interceptors.response.use(function(response){
    //响应拦截处理
    return response;
},function(error){
    //请求错误时执行
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;  //将axios引入到项目


let vm = new Vue({
    el: '#app',
    store,
    router,
    template: '<Home/>',
    components: { Home }
});

