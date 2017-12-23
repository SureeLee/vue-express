var express =require('express');
var mock = require('mockjs')
var articleList = require('../mock/articleList')
var article = require('../mock/article')
var router = express.Router();
router.post('/getArticles',function(req,res,next){
    let t = mock.mock(articleList)
    res.send(t)
})

router.post('/getArticleById',function(req,res,next){
    let t = mock.mock(article)
    res.send(t)
})

router.post('/getArticleByPage',function(req,res,next){
    
    let t = mock.mock(articleList)
    res.send({
        hasNext:true,
        t
    })
})
module.exports = router