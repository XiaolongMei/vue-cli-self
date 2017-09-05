/**
 * Created by yuanbin.xie on 2017/3/16.
 */

import Vue from 'vue'
import Router from 'vue-router'

/*
同步加载组件样式
import FlightListPanel from '../pages/flight-list-panel/flight-list-panel.vue'

*/

//异步加载组件样式
// const FlightListPanel = resolve => require(['../pages/flight-list-panel/flight-list-panel.vue'], resolve);


import Home from '../pages/home/home.vue'

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                main: Home
            }
        },
        {
            path: '/home',
            components: {
                main: Home
            }
        }
    ]
})