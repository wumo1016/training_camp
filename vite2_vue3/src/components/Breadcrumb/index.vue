<template>
  <el-breadcrumb class="app-breadcrumb breadcrumb-container" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <span v-if="index == breadList.length - 1" class="no-redirect">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  useRoute,
  useRouter,
  type RouteLocationMatched,
  type RouteLocationRaw
} from 'vue-router'
import { compile } from 'path-to-regexp'

const route = useRoute()
const router = useRouter()
const breadList = ref<Array<RouteLocationMatched>>([])

// 获取面包屑
const getBreadcrumb = () => {
  let matched = route.matched.filter(v => !!v.meta?.title && !v.meta.breadcrumb)
  if (matched.length && !matched[0].meta.dashboard) {
    matched = (
      [
        {
          path: '/dashboard',
          meta: {
            title: 'Dashboard'
          }
        }
      ] as RouteLocationMatched[]
    ).concat(matched)
  }
  breadList.value = matched
}
// 监控路由变化
watch(
  () => route.path,
  () => {
    getBreadcrumb()
  },
  {
    immediate: true
  }
)
// 点击面包屑事件
const handleLink = (item: RouteLocationMatched) => {
  const { path, redirect } = item
  if (redirect) return router.push(redirect as RouteLocationRaw)
  router.push(compile(path)(route.params))
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  line-height: 50px;
  font-size: 14px;
  margin-left: 8px;
}

.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>

<style lang="scss">
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}

.breadcrumb-move {
  transition: all 0.5s;
}
</style>
