import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@/views/home'
import Login from '@/views/login'
import Welcome from '@/views/welcome'
import Notfond from '@/views/404'

import Article from '@/components/article'
import Image from '@/components/image'
import Publish from '@/components/publish'
import Fans from '@/components/fans'
import Comment from '@/components/comment'
import Setting from '@/components/setting'

import store from '@/store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/article',
          name: 'article',
          component: Article
        },
        {
          path: '/image',
          name: 'image',
          component: Image
        },
        {
          path: '/publish',
          name: 'publish',
          component: Publish
        },
        {
          path: '/fans',
          name: 'fans',
          component: Fans
        },
        {
          path: '/comment',
          name: 'comment',
          component: Comment
        },
        {
          path: '/setting',
          name: 'setting',
          component: Setting
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: Notfond
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!store.getUser().token) return next('/login')
  next()
})

export default router
