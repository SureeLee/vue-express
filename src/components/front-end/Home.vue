<template>
  <div>
      <div v-for="article in articles" :key="article.articleId">
          {{article.title}}
          {{article.time}}
          {{article.summary}}
      </div>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
    name:'home',
    data(){
        return {
            articles:[]
        }
    },
    beforeCreate(){
        api.getArticles()
        .then(data=>{
            this.articles = data.data.articles
            var json = JSON.stringify(data.data.articles)
            console.log(json)
        })
    }
} 
</script>