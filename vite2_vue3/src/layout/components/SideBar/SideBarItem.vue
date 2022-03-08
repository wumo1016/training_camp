<template>
  <div v-for="item in list" class="sidebar-item-container">
    <template v-if="item.children?.length">
      <el-sub-menu :index="resolvePath(item.path)" popper-append-to-body>
        <template #title>
          <svg-icon
            v-if="item?.meta?.icon"
            class="menu-icon"
            :icon-class="item.meta.icon"
          ></svg-icon>
          <span class="submenu-title">{{ item?.meta?.title }}</span>
        </template>
        <sidebar-item :list="item.children" :base-path="item.path" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="resolvePath(item.path)">
        <svg-icon
          v-if="item?.meta?.icon"
          class="menu-icon"
          :icon-class="item.meta.icon"
        ></svg-icon>
        <template #title>
          <span>{{ item?.meta?.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SidebarItem'
}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const props = defineProps({
  list: {
    type: Array as PropType<Array<RouteRecordRaw>>,
    required: true
  },
  basePath: {
    type: String,
    required: false,
    default: ''
  }
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
