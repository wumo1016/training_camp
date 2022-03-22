import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@v/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
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
        name: 'document',
        component: () =>
          import(
            /* webpackChunkName: "documentation" */ '@/views/document/index.vue'
          ),
        meta: {
          title: 'Document',
          // icon: 'documentation'
          icon: 'el-icon-plus'
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
          import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
        meta: {
          title: 'guide',
          icon: 'guide',
          hidden: true
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: 'System',
      icon: 'lock',
      alwaysShow: true
    },
    children: [
      {
        path: 'menu',
        component: () =>
          import(/* webpackChunkName: "menu" */ '@/views/system/menu.vue'),
        meta: {
          title: 'Menu Management',
          hidden: true
        }
      },
      {
        path: 'role',
        component: () =>
          import(/* webpackChunkName: "role" */ '@/views/system/role.vue'),
        meta: {
          title: 'Role Management',
          hidden: true
        }
      },
      {
        path: 'user',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/system/user.vue'),
        meta: {
          title: 'User Management'
        }
      }
    ]
  },
  {
    // 外链路由
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com/',
        redirect: '/',
        meta: {
          title: 'External Link',
          icon: 'link'
        }
      }
    ]
  }
]

export const routes: Array<RouteRecordRaw> = [...constantRoutes, ...asyncRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
