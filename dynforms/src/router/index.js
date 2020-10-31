import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CreateForm from '../views/CreateForm.vue'
import Qrmodule from '../components/Qr/qr'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/create',
    name: 'FormCreator',
    component: CreateForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
