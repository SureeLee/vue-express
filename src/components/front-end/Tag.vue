<template>
    <div>
        <vheader></vheader>
        <div>
            <div class="box">
                <div v-for="article in articles" :key="article.articleId">
                    <!-- <mu-raised-button class="demo-raised-button right">{{article.sign}}</mu-raised-button> -->
                    <mu-chip class="demo-chip right">
                        {{article.sign}}
                    </mu-chip>
                </div>
            </div>
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
    </div>
</template>

<script>
import api from '../../api/index'
import vheader from './header'
export default {
    name:'home',
    data(){
        return {
            articles:[]
        }
    }, 
    components:{
        vheader,
    },
    created(){
        api.getArticles()
        .then(data=>{
            this.articles = data.data.articles
            var json = JSON.stringify(data.data.articles)
            console.log(json)
        })
    },
    mounted(){
        this.$store.dispatch('changeHeadLine','标签')
    }
} 
</script>

<style>
.box {
    clear: both;
    width: 60%;
    margin-top: 30px;
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
    font-weight: 200;
    color: black;
}
.right {
    float:left;
    margin-bottom: 20px;
    margin-right: 30px;
    font-size: 20px;
}
</style>
