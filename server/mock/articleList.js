var Mock = require('mockjs')
var Random = Mock.Random
module.exports = {
    'articles|15-20':[{
        'articleId|+1':1,
        title:'@cname@cname',
        time:Random.now('yyyy-MM-dd HH:mm:ss'),
        summary:'@cname(10)@cname@cname@cname@cname@cname',
    }]
}
