import api from '../../api/index'
import router from '../../router/index'

const state = {
    name : '',
    token : '',
    role : []
}

const mutations = {
    SET_TOKEN :(state,user)=>{
        sessionStorage.setItem('Admin-Token',user.token);
        state.token = user.token
    },
    SET_USER :(state,user)=>{
        state.name = user.name
        state.role = user.role
    },
    USER_LOGOUT :(state)=>{
        state.name = ''
        state.token = ''
        state.role = []
        sessionStorage.removeItem('Admin-Token');
    }
}

const actions = {
    UserLogin({commit},data){
       
        api.login(data)
        .then(({data})=>{
            if(data.code==200){
                commit('SET_TOKEN',data)
                router.replace({path:'/admin'})
            }else{
                console.log('Login refused')
                router.replace({path:'/login'})
            }
        })
        .catch((error)=>{
            console.log(error.toString())
        })
    },

    GetUserInfo({commit}){
        let data = {
            name:'aasd',
            role:["admin"]
        }
        commit('SET_USER',data)
    }
}

export default {
    state,
    mutations,
    actions
}