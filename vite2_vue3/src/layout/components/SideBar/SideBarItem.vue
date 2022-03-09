<template>
  <template v-for="item in list">
    <template v-if="item.children?.length">
      <el-sub-menu :index="resolvePath(item.path)" popper-append-to-body>
        <template #title>
          <i class="menu-icon" v-if="item?.meta?.icon">
            <svg-icon :icon-class="item.meta.icon"></svg-icon>
          </i>
          <span>{{ item?.meta?.title }}</span>
        </template>
        <sidebar-item :list="item.children" :base-path="item.path" />
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="resolvePath(item.path)">
        <i class="menu-icon" v-if="item?.meta?.icon">
          <svg-icon :icon-class="item.meta.icon"></svg-icon>
        </i>
        <template #title>
          <span>
            {{ item?.meta?.title }}
          </span>
        </template>
      </el-menu-item>
    </template>
  </template>
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

<style scoped lang="scss">
.menu-icon {
  margin-right: 10px;
  font-size: 16px;
}
</style>
