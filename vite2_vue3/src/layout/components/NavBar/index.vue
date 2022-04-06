<template>
  <div class="navbar">
    <Hambuger @toggleClick="toggleClick" :isActive="isActive" />
    <Breadcrumb />
    <div class="right-menu">
      <ScreenFull class="right-item hover-effect" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import Hambuger from './Hambuger/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import ScreenFull from './Screenfull/index.vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const isActive = computed(() => appStore.sidebarIsActive)

const toggleClick = () => {
  appStore.toggleSidebar()
}
</script>

<style lang="scss">
.navbar {
  height: 50px;
  background: #fff;
  display: flex;
  .right-menu {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
  }
}
</style>
