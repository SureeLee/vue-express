// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.config.productionTip = false


router.beforeEach((to,from,next)=>{
  var userInfo= JSON.parse(sessionStorage.getItem('Admin-Token'))
  if(userInfo){
    if(to.path=='/login'){
      next({path:'/'})
    }else{
      //登录第一次进入没有role，进入if获取role,然后next(to.path)再次循环到这，进入else
      if(store.state.user.role.length===0){
        store.dispatch('GetUserInfo').then(()=>{
          const roles = store.state.user.role
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.state.permission.addRouters) // 动态添加可访问路由表
            console.dir(router)
            //跟教程写的一样，如果直接next(),这时候router.addRoutes还没完成添加，所以路由无效
            //需要利用next(to.path)再次进入beforeEach循环，然后进入else中执行next()
            //此时router.addRoutes已经完成添加
            next(to.path)
          }).catch(err => {
            console.log(err);
          });
        })
      }else{
        next()
      }
    }
  }else{
    //这里如果不加to.path==login判断而直接next(login)会陷入死循环，因为会一直触发beforeEach()
    if(to.path=='/login'){
      next()
    }else{
      next('/login')
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
