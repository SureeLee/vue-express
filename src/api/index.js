import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

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
