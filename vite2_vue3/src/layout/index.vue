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
        <h2>app main</h2>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/SideBar/index.vue'
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
      min-height: calc(100vh - 84px);
      background: gray;
    }
  }
}
</style>
