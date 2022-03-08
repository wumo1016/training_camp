<template>
  <div>
    <!-- 测试展开收起 -->
    <h6 @click="isCollapse = !isCollapse">展收测试</h6>
    <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="$style.menuBg"
      :text-color="$style.menuText"
      :active-text-color="$style.menuActiveText"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <SideBarItem
        v-for="route in menuRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SideBarItem from './SideBarItem.vue'
import { routes } from '@/router'

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
const isCollapse = ref(false)
const menuRoutes = routes
</script>

<!-- module默认值是 $style 也可以指定名称 module='xxx' -->
<style module lang="scss" src="@/styles/variables.scss"></style>
