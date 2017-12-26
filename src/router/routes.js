import Home from '../components/front-end/Home'
import Article from '../components/front-end/Article'
import Tag from '../components/front-end/Tag'
import About from '../components/front-end/About'
import Admin from '../components/back-end/Admin'
import ArticleList from '../components/back-end/ArticleList'
import error404 from '../components/404'
import Login from '../components/back-end/Login'
import ArticleCreate from '../components/back-end/ArticleCreate'
import Test_2 from '../components/back-end/Test_2'
import Test_3 from '../components/back-end/Test_3'
import Test_4 from '../components/back-end/Test_4'

export const constantRouterMap = [
    //404怎么挂载的？permission路由过滤函数?
    {
        path:'/login',
        hidden:true,
        component:Login,
        name:'登录'
    },
    { path: '/404', component: error404, hidden: true },
]

export const asyncRouterMap = [
    {
        path:'/admin',
        name:'文章',
        meta:{role:['admin']},
        component:Admin,
        redirect:'/admin/articleList',
        icon:'el-icon-document',
        children:[
            {
                path:'articleList',component:ArticleList,name:'文章列表',meta:{role:['admin']},icon:'el-icon-edit'
            },
            {
                path:'ArticleCreate',component:ArticleCreate,name:'编辑',meta:{role:['admin']},icon:'el-icon-edit'
            },
        ]
    },
    {
        path:'/Test_2',component:Admin,name:'Test_2',meta:{role:['admin']},noChildren:true,redirect:'/Test_2/index',icon:'el-icon-setting',
        children:[
            {
                path:'index',component:Test_2,name:'',meta:{role:['admin']},
            },
        ]
    },
    {
        path:'/Test_3',component:Admin,name:'Test_3',meta:{role:['admin']},redirect:'/Test_3/Test_4',icon:'el-icon-menu',
        children:[
            {
                path:'Test_4',component:Test_4,name:'Test_4',meta:{role:['admin']},icon:'el-icon-refresh'
            },
        ]

    },
    { path: '*', redirect: '/404', hidden: true }
]
// export default [
//     {
//         path:'/',
//         hidden:true,
//         component:Home
//     },    
//     {
//         path:'/login',
//         hidden:true,
//         component:Login,
//         name:'login'
//     },
//     {
//         path:'/article/:articleId',
//         name:'getArticle',
//         hidden:true,
//         component:Article
//     },
//     {
//         path:'/tag',
//         name:'tag',
//         hidden:true,
//         component:Tag
//     },
//     {
//         path:'/about',
//         name:'about',
//         hidden:true,
//         component:About
//     },
//     {
//         path:'/admin',
//         name:'admin',
//         hidden:true,
//         meta:{role:['admin']},
//         component:Admin,
//         children:[
//             {
//                 path:'/',hidden:true,redirect: {name:'articleList'},meta:{role:['admin']},
//             },
//             {
//                 path:'articleList',component:ArticleList,name:'articleList',meta:{role:['admin']},
//             },
//         ]
//     }

// ]