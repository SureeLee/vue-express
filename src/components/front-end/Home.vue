<template>
    <div>
        <vheader></vheader>
        <div>
            <div v-for="article in articles" :key="article.articleId">
                <div class="box">
                    <div class="title">
                        {{article.title}}
                    </div>
                    <div class="time">
                        {{article.time}}
                    </div>
                    <div class="summary">
                        {{article.summary}}
                    </div>
                    <div>
                        <router-link :to="{ name:'getArticle', params: {articleId:article.articleId}}" class="all">阅读全文></router-link>
                    </div>
                    <mu-divider/>
                </div>
            </div>
        </div>
        <div>
            <mu-raised-button v-if='loadMoreShow' class="demo-raised-button center" @click='loadMore'>{{loadMoreText}}</mu-raised-button>
        </div>
    </div>
</template>

<script>
import api from '../../api/index'
import vheader from './header'
export default {
    name:'home',
    data(){
        return {
            articles:[],
            loadMoreText:'加载更多',
            loadMoreShow:true,
            page:1,
            limit:10
        }
    },
    components:{
        vheader,
    },
    created(){
        api.getArticles()
        .then(({data:{articles}})=>{
            this.articles = articles
            var json = JSON.stringify(articles)
            console.log(json)
        })
    },
    mounted(){
        this.$store.dispatch('changeHeadLine','主页')
    },
    methods:{
        loadMore(){
            this.loadMoreText='加载中...'
            api.getArticleByPage(this.page,this.limit)
            .then(({data:{hasNext,t}})=>{
                //后台传入多个参数，每个参数名需要保持一致，然后再具体t.articles取json值
                this.articles = this.articles.concat(t.articles)
                if(hasNext){
                    this.loadMoreText='加载更多'
                    this.loadMoreShow=true
                }else{
                    this.loadMoreShow=false
                }
            })
            this.page++
        }
    }
} 
</script>

<style>
.box {
    width: 60%;
    margin-top: 20px;
    margin-left: 20%;
}
.title {
    font-size: 26px;
    margin-bottom: 10px;
}
.time {
    font-size: 16px;
    color: rgb(173, 173, 173);
    margin-bottom: 10px;
    font-weight: 200
}
.summary {
    font-size: 16px;
    font-weight: 200
}
.all {
    font-size: 20px;
    margin-left: 91%;
    font-weight: 1000;
    color: rgb(111, 110, 110);
}
.center {
    margin-left: 48%;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
