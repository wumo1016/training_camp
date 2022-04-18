<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <NavBar />
        <div class="tags-view">
          <TagsView />
        </div>
      </div>
      <div class="app-main">
        <router-view #default="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cacheViews">
              <component :is="Component" :key="compKey" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/side-bar/index.vue'
import NavBar from './components/nav-bar/index.vue'
import TagsView from './components/tags-view/index.vue'

const route = useRoute()
const compKey = computed(() => route.path)
const cacheViews = ref([])
</script>

<style scoped lang="scss">
@import '@/styles/variables.module.scss';
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  :deep(.sidebar-container) {
    height: 100%;
    background-color: $menuBg;
    .sidebar-container-menu:not(.el-menu--collapse) {
      width: $sideBarWidth;
    }
    .el-menu {
      border: none;
    }
    .el-submenu {
      .el-menu {
        .el-menu-item {
          background-color: $subMenuBg !important;
          &:hover {
            background-color: $subMenuHover !important;
          }
        }
      }
    }
  }
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    > .header {
      background: cyan;
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      height: calc(100vh - 84px);
      overflow: hidden;

      .fade-transform-enter-active,
      .fade-transform-leave-active {
        transition: all 0.5s;
      }

      .fade-transform-enter-from {
        opacity: 0;
        transform: translateX(-30px);
      }

      .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
      }
    }
  }
}
</style>
