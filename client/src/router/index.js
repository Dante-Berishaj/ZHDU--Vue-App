import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cities from '../views/Cities.vue'
import Hotels from '../views/Hotels.vue'
import Attractions from '../views/Attractions.vue'
import Prishtina from '../views/cityDetails/Prishtina'
import Prizreni from '../views/cityDetails/Prizreni'
import Peja from '../views/cityDetails/Peja'
import Mitrovica from '../views/cityDetails/Mitrovica'
import Gjakova from '../views/cityDetails/Gjakova'

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
    path: '/prishtina',
    name: 'Prishtina',
    component: Prishtina
  },
   {
    path: '/prizreni',
    name: 'Prizreni',
    component: Prizreni
  },
  {
    path: '/peja',
    name: 'peja',
    component: Peja
  },
  {
    path: '/gjakova',
    name: 'Gjakova',
    component: Gjakova
  },
  {
    path: '/mitrovica',
    name: 'Mitrovica',
    component: Mitrovica
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
    path: '/hotels',
    name: 'Hotels',
    component: Hotels
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
