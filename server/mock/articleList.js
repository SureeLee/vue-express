var Mock = require('mockjs')
var Random = Mock.Random
module.exports =  {
    'articles|10':[{
        'articleId|+1':1,
        title:'@cname@cname',
        sign:'@cname',
        time:Random.now('yyyy-MM-dd HH:mm:ss'),
        summary:'@cname(10)@cname@cname@cname@cname@cname',
        //total:'@cname(1000)'
    }]
}
