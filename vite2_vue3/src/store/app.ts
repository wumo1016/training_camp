import { defineStore } from 'pinia'
import type { ISize } from '@/plugins/element'

export const useAppStore = defineStore('app', {
  persist: true,
  state: () => ({
    sidebar: {
      isActive: true
    },
    size: 'default'
  }),
  getters: {
    sidebarIsActive: state => state.sidebar.isActive
  },
  actions: {
    TOGGLE_SIDEBAR() {
      this.sidebar.isActive = !this.sidebar.isActive
    },
    SET_SIZE(size: ISize) {
      this.size = size
    }
  }
})
