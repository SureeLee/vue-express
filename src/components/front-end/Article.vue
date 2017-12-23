<template>
    <div>
        <vheader></vheader>
        <div>
            <div class="box">
                <div class="title">
                    {{article.title}}
                </div>
                <div class="sign">
                    <mu-chip class="demo-chip">
                        {{article.sign}}
                    </mu-chip>
                </div>
                <div class="time">
                    {{article.time}}
                </div>
                <div class="summary">
                    {{article.total}}
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
            article:{}
        }
    },
    components:{
        vheader,
    },
    created(){
        //找了一下午的bug，路由发送是router，获取参数是route.........
        api.getArticleById(this.$route.params.articleId)
        .then(data=>{
            this.article = data.data.article
            var json = JSON.stringify(data.data.article)
            console.log(json)
        })
    },
    updated(){
        this.$store.dispatch('changeHeadLine',this.article.sign)
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
    font-weight: 200;
    color: black;
}
.sign {
    margin-bottom: 10px;
}
</style>
