<template>
  <div class="sidebar-item-container">
    <!-- 一个路由下只有一个子路由的时候 只渲染这个子路由 -->
    <template v-if="theOnlyOneChildRoute && !theOnlyOneChildRoute.children">
      <el-menu-item :index="resolvePath(theOnlyOneChildRoute.path)">
        <svg-icon v-if="icon" class="menu-icon" :icon-class="icon"></svg-icon>
        <template #title>
          <span>{{ theOnlyOneChildRoute?.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由时 -->
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title>
        <svg-icon
          v-if="item?.meta?.icon"
          class="menu-icon"
          :icon-class="item.meta.icon"
        ></svg-icon>
        <span class="submenu-title">{{ item?.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SidebarItem'
}
</script>

<script setup lang="ts">
import { type PropType, computed, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    type: String,
    required: true
  }
})

const { item } = toRefs(props)

const showingChildNumber = computed(() => {
  const children = (props.item.children || []).filter(child => {
    if (child.meta && child.meta.hidden) return false
    return true
  })
  return children.length
})

const theOnlyOneChildRoute = computed(() => {
  if (showingChildNumber.value > 1) {
    return null
  }

  if (item.value.children) {
    for (const child of item.value.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }

  return {
    ...props.item,
    path: ''
  }
})

const icon = computed(() => {
  return (
    theOnlyOneChildRoute.value?.meta?.icon ||
    (props.item.meta && props.item.meta.icon)
  )
})

const resolvePath = (childPath: string) => {
  return props.basePath + '/' + childPath
}
</script>

<style lang="scss">
.sidebar-item-container {
  .menu-icon {
    margin-right: 16px;
    margin-left: 5px;
    vertical-align: middle;
  }
}
</style>
