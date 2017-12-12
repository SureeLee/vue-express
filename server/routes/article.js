var express =require('express');
var mock = require('mockjs')
var articleList = require('../mock/articleList')
var router = express.Router();
router.post('/getArticles',function(req,res,next){
    let t = mock.mock(articleList)
    res.send(t)
})

module.exports = router