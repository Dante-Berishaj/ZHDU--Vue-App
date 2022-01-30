import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cities from '../views/Cities.vue'
import Test from '../views/Test.vue'
import Hotels from '../views/Hotels.vue'
import Attractions from '../views/Attractions.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: Attractions
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tests',
    name: 'Test',
    component: Test
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: Hotels
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
