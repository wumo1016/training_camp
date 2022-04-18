<template>
  <div class="navbar">
    <Hambuger @toggleClick="toggleClick" :isActive="isActive" />
    <Breadcrumb />
    <div class="right-menu">
      <ScreenFull class="right-menu-item hover-effect" />
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <SizeSelect class="right-menu-item hover-effect" />
      </el-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import Hambuger from './hambuger/index.vue'
import Breadcrumb from './breadcrumb/index.vue'
import ScreenFull from './screenfull/index.vue'
import SizeSelect from './size-select/index.vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const isActive = computed(() => appStore.sidebarIsActive)

const toggleClick = () => {
  appStore.TOGGLE_SIDEBAR()
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
