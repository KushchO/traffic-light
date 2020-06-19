import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLights from '../views/TrafficLights.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: TrafficLights,
    props: { light: '' }   
  },
  {
    path: '/green',
    name: 'Green',
    component: TrafficLights,
    props: { light: 'green' }
  },
  {
    path: '/red',
    name: 'Red',    
    component: TrafficLights,
    props: { light: 'red' }
  },
  {
    path: '/yellow',
    name: 'Yellow',    
    component: TrafficLights,
    props: { light: 'yellow' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
