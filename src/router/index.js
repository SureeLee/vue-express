import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/front-end/Home'
import Article from '../components/front-end/Article'
import Login from '../components/back-end/Login'

Vue.use(VueRouter)
import {constantRouterMap,asyncRouterMap} from './routes'

const router =  new VueRouter({
    mode:'history',
    //这里要将两个路由数组拼成一个[]，否则只能检测到一个
    routes :constantRouterMap//.concat(asyncRouterMap)
})
export default router