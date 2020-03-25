import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-up',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
