/* 入口js */
import Vue from 'vue'
import App  from './App.vue'
import router from './router'

new Vue({
    el: '#app',
    render: h => h(App),
    // 为根组件加入路由
    router
})