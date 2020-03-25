import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Home from '@/views/Home'
import BookDetail from '@/views/BookDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sign-up',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/books/:id',
    component: BookDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
