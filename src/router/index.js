import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('views/home/Home')
const Cart = ()=> import('views/cart/Cart')
const Category = ()=> import('views/category/Category')
const Profile = ()=> import('views/profile/Profile')
const Detail = ()=> import('views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail,
  },
]

const router = new VueRouter({
  routes,
  mode:'history'//使用H5的history形式的route，默认hash形式，url会是 /#/xxx
})

// 3.导出路由
export default router