import Vue from 'vue'
import VueRouter from 'vue-router'
import RedEnvelope from '@/views/RedEnvelope'
import ClaimDetails from '@/views/ClaimDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'redEnvelope',
    component: RedEnvelope
  },
  {
    path: '/detail',
    name: 'claimDetails',
    component: ClaimDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
