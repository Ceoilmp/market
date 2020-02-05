import Vue from 'vue'
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const Home = () => import('views/home/home.vue')
const Class = () => import('views/class/class.vue')
const Cart = () => import('views/cart/cart.vue')
const About = () => import('views/about/about.vue')
const Profile = () => import('views/profile/profile.vue')

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
    path:'/class',
    component:Class
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
