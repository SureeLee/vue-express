var express =require('express');
var mock = require('mockjs')
var router = express.Router();
router.post('/login',function(req,res,next){
    // console.log('登陆成功？')
    console.log(req.body.user.name)
    console.log(req.header['Token'])
    let user = {
        "code":200,
        "name":"Leley",
        "token":"123",
        "role":["admin"]
    }

    res.send(user)
})

module.exports = router