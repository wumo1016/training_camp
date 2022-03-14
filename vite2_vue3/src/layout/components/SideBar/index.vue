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
      collapse-transition
    >
      <SideBarItem :list="menuRoutes" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import SideBarItem from './SideBarItem.vue'
import { routes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import { isExternal } from '@/utils/validate'

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
const isCollapse = ref(false)

const menuRoutes = ref<Array<RouteRecordRaw>>([])
routes.forEach(item => {
  if (item.meta?.hidden) return
  item.children = item.children?.filter(v => !v.meta?.hidden)
  if (item.children && item.children.length < 2) {
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
<style module lang="scss" src="@/styles/variables.scss"></style>
