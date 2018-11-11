import Main from '@/components/main'
import Home from '@/views/Home.vue'

export const routes = [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/server',
    component: Main,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "about" */ '../views/serverList.vue')
      }
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]
