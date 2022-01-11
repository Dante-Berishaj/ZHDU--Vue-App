import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cities from '../views/Cities.vue'
import Test from '../views/Test.vue'
import Hotels from '../views/Hotels.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
