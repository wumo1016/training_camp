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
      <SideBarItem />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
// el-menu-item封装
import SideBarItem from './SideBarItem.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SideBarItem
  },
  setup() {
    const route = useRoute()
    // 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
    const activeMenu = computed(() => {
      const { path } = route
      return path
    })
    // 菜单展开收起状态 后面会放store里
    const isCollapse = ref(false)

    return {
      isCollapse,
      activeMenu
    }
  }
})
</script>

<style module lang="scss" src="@/styles/variables.scss"></style>
