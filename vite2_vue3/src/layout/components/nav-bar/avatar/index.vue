<template>
  <el-dropdown class="avatar-container">
    <div class="avatar-wrapper">
      <img :src="avatar" class="user-avatar" />
      <i class="el-icon-caret-bottom" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <router-link to="/profile/index">
          <el-dropdown-item divided>个人设置</el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logout">
          <span style="display: block">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import avatar from '@/assets/logo.png'

const logout = () => {
  console.log('退出登录')
}
</script>

<style lang="scss" scoped>
.avatar-container {
  margin-right: 10px;
  .avatar-wrapper {
    .user-avatar {
      width: 26px;
      height: 26px;
      border-radius: 10px;
      cursor: pointer;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      font-size: 12px;
    }
  }
}
</style>
