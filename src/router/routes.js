import Home from '../components/front-end/Home'
import Article from '../components/front-end/Article'
import Tag from '../components/front-end/Tag'
import About from '../components/front-end/About'
import Admin from '../components/back-end/Admin'
import ArticleList from '../components/back-end/ArticleList'
import Login from '../components/back-end/Login'

export const constantRouterMap = [
    {
        path:'/login',
        hidden:true,
        component:Login,
        name:'login'
    },
]

export const asyncRouterMap = [
    {
        path:'/admin',
        //name:'admin',
        hidden:true,
        meta:{role:['admin']},
        component:Admin,
        children:[
            {
                path:'/',hidden:true,redirect: {name:'articleList'},meta:{role:['admin']}
            },
            {
                path:'articleList',component:ArticleList,name:'articleList',meta:{role:['admin']},
            },
        ]
    }
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