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

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .sidebar-container {
    height: 100%;
    background-color: $menuBg;
    // menu未收起时样式
    &-menu:not(.el-menu--collapse) {
      width: $sideBarWidth;
    }
    // 菜单收起时的样式调整
    .el-menu--collapse {
      // 隐藏submenu title
      .submenu-title {
        display: none;
      }
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
    .el-menu {
      border: none;
    }
  }
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
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
