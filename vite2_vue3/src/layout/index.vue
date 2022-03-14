<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">navbar</div>
        <div class="tags-view">tagsview</div>
      </div>
      <div class="app-main">
        <router-view #default="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="compKey" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/SideBar/index.vue'

const route = useRoute()
const compKey = computed(() => route.path)
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .sidebar-container {
    height: 100%;
    background-color: $menuBg;
    &-menu:not(.el-menu--collapse) {
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
      .navbar {
        height: 50px;
        background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      height: calc(100vh - 84px);
      background: gray;
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
