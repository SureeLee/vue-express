import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export default{
    
    getArticles(){
        console.log('api')
        return axios.post('http://localhost:3000/article/getArticles')
    }
}
