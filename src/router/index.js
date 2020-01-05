import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Search from '../views/Search/Search'
import Login from '../views/Login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    name: 'Msite',
    component: Msite,
    meta:{
      showfooter:true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{
      showfooter:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      showfooter:true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{
      showfooter:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:"/",
    redirect:"/msite"
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass:'on'
})

export default router
