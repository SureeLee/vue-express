import axios from 'axios'
import store from '../store/modules/user'

axios.defaults.headers.post['Content-Type'] = 'application/json'
//配置axios全局拦截，header加入token传给后台验证权限，报错
//Request header field Token is not allowed by Access-Control-Allow-Headers in preflight response.
// axios.interceptors.request.use(config => {
//     if (1==1) {
//       config.headers['Token'] = 'store.state.token'; // 让每个请求携带自定义token 请根据实际情况自行修改
//     }
//     return config;
//   }, error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   })

export default{
    
    getArticles() {
        return axios.post('http://localhost:3000/article/getArticles')
    },
    getArticleById(id) {
        return axios.post('http://localhost:3000/article/getArticleById',{articleId:id})
    },
    getArticleByPage(page,limit) {
        return axios.post('http://localhost:3000/article/getArticleByPage',{page:page,limit:limit})
    },
    login(user) {
        return axios.post('http://localhost:3000/user/login',{user:user})
    }
}
