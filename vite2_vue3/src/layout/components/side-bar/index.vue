<template>
  <div>
    <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="VariableStyle.menuBg"
      :text-color="VariableStyle.menuText"
      :active-text-color="VariableStyle.menuActiveText"
      :collapse="!appStore.sidebarIsActive"
      collapse-transition
    >
      <SideBarItem :list="menuRoutes" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, type RouteRecordRaw } from 'vue-router'
import SideBarItem from './SideBarItem.vue'
import { routes } from '@/router'
import { isExternal } from '@/utils/validate'
import VariableStyle from '@/styles/variables.module.scss'
import { useAppStore } from '@/store/app'

const route = useRoute()
const activeMenu = computed(() => {
  const { path, meta } = route
  return meta.activeMenu || path
})
const appStore = useAppStore()

const menuRoutes = ref<Array<RouteRecordRaw>>([])
routes.forEach(item => {
  if (item.meta?.hidden) return
  item.children = item.children?.filter(v => !v.meta?.hidden)
  if (item.children && item.children.length < 2 && !item.meta?.alwaysShow) {
    menuRoutes.value.push(
      ...item.children?.map(v => {
        v.path = isExternal(v.path) ? v.path : `${item.path}/${v.path}`
        return v
      })
    )
  } else {
    menuRoutes.value.push(item)
  }
})
</script>

<!-- module默认值是 $style 也可以指定名称 module='xxx' -->
<!-- <style module lang="scss" src="@/styles/variables.module.scss"></style> -->
