<template>
  <div class="navbar">
    <Hambuger @toggleClick="toggleClick" :isActive="isActive" />
    <Breadcrumb />
    <div class="right-menu">
      <ScreenFull class="right-menu-item hover-effect" />
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <SizeSelect class="right-menu-item hover-effect" />
      </el-tooltip>
      <Avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import Hambuger from './hambuger/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import ScreenFull from './screenfull/index.vue'
import SizeSelect from './size-select/index.vue'
import Avatar from './avatar/index.vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const isActive = computed(() => appStore.sidebarIsActive)

const toggleClick = () => {
  appStore.toggleSidebar()
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-item {
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
  }
}
</style>
