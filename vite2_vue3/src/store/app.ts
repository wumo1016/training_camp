import { defineStore } from 'pinia'
import type { ISize } from '@/plugins/element'
import type { RouteRecordRaw } from 'vue-router'

interface IAppStore {
  sidebar: {
    isActive: boolean
  }
  size: ISize
  visitedViews: RouteRecordRaw[]
}

interface IAppActions {
  toggleSidebar: Function
  setSize: Function
  addView: Function
  removeView: Function
}

export const useAppStore = defineStore<
  string,
  IAppStore,
  { sidebarIsActive: any },
  IAppActions
>('app', {
  persist: true,
  state: () => ({
    sidebar: {
      isActive: true
    },
    size: 'default',
    visitedViews: []
  }),
  getters: {
    sidebarIsActive: (state: IAppStore) => state.sidebar.isActive
  },
  actions: {
    toggleSidebar() {
      this.sidebar.isActive = !this.sidebar.isActive
    },
    setSize(size: ISize) {
      this.size = size
    },
    addView(view: RouteRecordRaw) {
      if (this.visitedViews.some(v => v.path === view.path)) return
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta?.title || 'tag-name'
        })
      )
    },
    removeView(view: RouteRecordRaw) {
      const i = this.visitedViews.indexOf(view)
      if (i > -1) {
        this.visitedViews.splice(i, 1)
      }
    }
  }
})
