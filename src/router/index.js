import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue') 
  },
  {
    path: '/task',
    name: 'task',
    component: () => import('../views/Task.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
