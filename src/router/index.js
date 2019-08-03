import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '@/views/home'
import Login from '@/views/login'
import Welcome from '@/views/welcome'

import Article from '@/components/article'
import Image from '@/components/image'
import Publish from '@/components/publish'
import Fans from '@/components/fans'
import Comment from '@/components/comment'
import Setting from '@/components/setting'
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
      // name: 'home',
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
    }
  ]
})

export default router
