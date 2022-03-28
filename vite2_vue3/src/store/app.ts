import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: {
      isActive: true
    }
  }),
  getters: {
    sidebarIsActive: state => state.sidebar.isActive
  },
  actions: {
    toggleSidebar() {
      this.sidebar.isActive = !this.sidebar.isActive
    }
  }
})
