import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@v/Dashboard/index.vue'),
        meta: {
          title: 'Dashboard'
        }
      }
    ]
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/document',
    component: Layout, // 布局组件作为一级路由
    redirect: '/document/index',
    children: [
      {
        path: 'index',
        name: 'Document',
        component: () =>
          import(
            /* webpackChunkName: "documentation" */ '@/views/Document/index.vue'
          ),
        meta: {
          title: 'Document',
          icon: 'document'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () =>
          import(/* webpackChunkName: "guide" */ '@/views/Duide/index.vue'),
        meta: {
          title: 'Guide',
          icon: 'guide'
        }
      }
    ]
  }
]

const routes = [...constantRoutes, ...asyncRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
