# vue-express

> A Vue.js project with express as the back-end

先使用vue-cli建立vue项目，然后在vue项目中新建一个server文件夹，在server里用express-generator建立一个express后台，这样前后台分别监听8080和3000端口。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# express load at localhost:3000
supervisor ./bin/www
```
一个粗糙的vue+vuex+vue-router+axios+express+mockJs+elementUI+museUI项目。基本前端功能都实现了，后台只用了express简单处理了请求，返回了一些假数据。并没有连接数据库。

```
//ToDo
整理前端css、js
连接MongoDB做存储
不同分辨率调整
```
