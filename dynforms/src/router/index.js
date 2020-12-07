import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Qrmodule from '../components/Qr/qr'
import Default from '../components/Layouts/Default'
import Dashboard from '../components/Layouts/Dashboard'
import CCLayout from '../components/Layouts/CompCreator'
import StyleOption from '../views/StyleOption'
import EasyMode from '../views/Easy'
import CustomMode from '../views/Custom'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Default,
  children: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    components: About
  },
  {
    path: '/scannow',
    name: 'QrScanner',
    component: Qrmodule
  }
]},
 {
  path: '/dashboard',
  component: Dashboard,
  children: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]},
  {
  path: '/creator',
  component: CCLayout,
  children: [
  {
    path: '/',
    name: 'Style Choice',
    component: StyleOption 
  },
  {
    path: '/easy',
    name: 'easy',
    component: EasyMode
  },
  {
    path: '/custom',
    name: 'custom',
    component: CustomMode
  }
]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
