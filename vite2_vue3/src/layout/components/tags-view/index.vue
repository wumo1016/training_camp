<template>
  <div class="tags-view-container">
    <div class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="{
          active: isActive(tag)
        }"
        v-for="(tag, index) in visitedTags"
        :key="index"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
      >
        {{ tag.meta.title || '' }}
        <el-icon>
          <close @click.prevent.stop="closeSelectedTag(tag)" />
        </el-icon>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, type RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/store/app'
import { computed, onMounted, watch } from 'vue'

const route = useRoute()
const appStore = useAppStore()

const isActive = (tag: RouteRecordRaw) => tag.path === route.path
const visitedTags = computed<any>(() => appStore.visitedViews)

const addTags = () => {
  const { name } = route
  if (name) appStore.addView(route)
}

const closeSelectedTag = (tag: RouteRecordRaw) => {
  appStore.removeView(tag)
}

watch(
  () => route.path,
  () => {
    addTags()
  }
)

onMounted(() => {
  addTags()
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  width: 100%;
  height: 34px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      background: #fff;
      color: #495060;
      padding: 0 8px;
      box-sizing: border-box;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          position: relative;
          display: inline-block;
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
          background: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.tags-view-container {
  .el-icon {
    width: 16px;
    height: 16px;
    position: relative;
    left: 2px;
    top: -1px;
    border-radius: 50%;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 100% 50%;
    &:before {
      transform: scale(0.6);
      display: inline-block;
      vertical-align: -1px;
    }
    &:hover {
      background-color: #b4bccc;
      color: #fff;
    }
  }
}
</style>
