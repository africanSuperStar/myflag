import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "contact-us" */ '@/views/ContactUs.vue')
  },
  {
    path: '/apply-online',
    name: 'Apply Online',
    component: () => import(/* webpackChunkName: "apply-online"*/ '@/views/ApplyOnline.vue')
  },
  {
    path: '/faqs',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "about" */ '@/views/FAQ.vue')
  },
  {
    path: '/liquidation',
    name: 'Liquidation',
    component: () => import(/* webpackChunkName: "liquidation" */ '@/views/Liquidation.vue')
  },
  {
    path: '/rehabilitation',
    name: 'Rehabilitation',
    component: () => import(/* webpackChunkName: "rehabilitation" */ '@/views/Rehabilitation.vue')
  },
  {
    path: '/sequestration',
    name: 'Sequestration',
    component: () => import(/* webpackChunkName: "sequestration" */ '@/views/Sequestration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
