import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateElection from '../views/CreateElection.vue'
import ExpressInterest from '../views/ExpressInterest.vue'
import CreateInterest from '../views/CreateInterest.vue'
import CandidateView from '../views/CandidateView.vue'
import Elections from '../views/Elections.vue'
import ElectionDetails from '../views/ElectionDetails.vue'
import AddPosition from '../views/AddPosition.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-election',
    name: 'CreateElection',
    component: CreateElection
  },
  {
    path: '/details',
    name: 'CandidateView',
    component: CandidateView
  },
  {
    path: '/election-details',
    name: 'ElectionDetails',
    component: ElectionDetails
  },
  {
    path: '/create-eoi',
    name: 'CreateInterest',
    component: CreateInterest
  },
  {
    path: '/elections',
    name: 'Elections',
    component: Elections
  },
  {
    path: '/eoi',
    name: 'ExpressInterest',
    component: ExpressInterest
  },
  {
    path: '/add-position',
    name: 'AddPosition',
    component: AddPosition
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
