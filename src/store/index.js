import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import state from './state'
import actions from './actions'
import mutations from './mutations'
import user from './modules/user'
import permission from './modules/permission'
const store =  new Vuex.Store({
    modules: {
        user,
        permission
      },
    state,
    mutations,
    actions
})
export default store;