import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from './views/Msite.vue'
import Order from './views/Order.vue'
import Person from './views/Person.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes: [
        {
            path: '/msite',
            component: Msite,
            // 控制foot组件是否显示
            meta: {
                showfoot: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showfoot: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showfoot: true
            }
        },
        {
            path: '/person',
            component: Person,
            meta: {
                showfoot: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/msite'
        }
    ]


})