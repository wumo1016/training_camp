<template>
  <div class="navbar">
    <Hambuger @toggleClick="toggleClick" :isActive="isActive" />
    <Breadcrumb />
  </div>
</template>

<script setup lang="ts">
import Hambuger from './Hambuger/index.vue'
import Breadcrumb from './Breadcrumb/index.vue'
import { useAppStore } from '@/store/app'
import { computed } from '@vue/reactivity'

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
}
</style>
