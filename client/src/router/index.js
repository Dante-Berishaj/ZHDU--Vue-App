import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Cities from '../views/Cities'
import Hotels from '../views/Hotels'
import Attractions from '../views/Attractions'
import Restaurants from '../views/Restaurants'
import Prishtina from '../views/cityDetails/Prishtina'
import Prizreni from '../views/cityDetails/Prizreni'
import Peja from '../views/cityDetails/Peja'
import Mitrovica from '../views/cityDetails/Mitrovica'
import Gjakova from '../views/cityDetails/Gjakova'
import HotelDetails from '../views/details/HotelDetails'
import RestaurantDetails from '../views/details/RestaurantDetails'
import Dashboard from '../views/Dashboard.vue'
import Register from '../components/auth/Register.vue'
import Login from '../components/auth/Login.vue'
import User from '../views/User.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cities",
    name: "Cities",
    component: Cities,
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
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: Hotels
  },
  {
    path: '/hotelDetails/:id',
    name: 'hotelDetails',
    component: HotelDetails
  },
  {
    path: '/restaurantDetails/:id',
    name: 'restaurantDetails',
    component: RestaurantDetails
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
  {
    path: '/user',
    name: 'User',
    component: User
  },

]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
