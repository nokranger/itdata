import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/createITData.vue')
  },
  {
    path: '/getdata',
    name: 'getdata',
    component: () => import(/* webpackChunkName: "about" */ '../views/getITData.vue')
  },
  {
    path: '/createdo',
    name: 'createdo',
    component: () => import(/* webpackChunkName: "about" */ '../views/createDOData.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
