<template>
  <div class="tags-view-container">
    <el-tabs v-model="activeRoute">
      <el-tab-pane
        v-for="(tag, index) in visitedTags"
        :key="index"
        :name="tag.path"
        :closable="!isAffix(tag)"
      >
        <template #label>
          <div
            :class="{
              active: isActive(tag)
            }"
          >
            {{ tag.meta.title || '' }}
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class="tags-view-wrapper">
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
        <el-icon v-if="!isAffix(tag)">
          <close @click.prevent.stop="closeSelectedTag(tag)" />
        </el-icon>
      </router-link>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/store/app'
import { computed, onMounted, watch } from 'vue'
import { routes } from '@/router'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const activeRoute = computed(() => route.path)
const isActive = (tag: RouteRecordRaw) => tag.path === route.path
const visitedTags = computed<any>(() => appStore.visitedViews)

const addTags = () => {
  const { name } = route
  if (name) appStore.addView(route)
}

const toLastView = (tag: RouteRecordRaw) => {
  const lastRoute = visitedTags.value.at(-1)
  if (lastRoute) {
    router.push(lastRoute.path)
  } else {
    if (tag.name === 'dashboard') {
      router.replace({ path: '/redirect' + tag.path })
    } else {
      router.push('/')
    }
  }
}

const closeSelectedTag = (tag: RouteRecordRaw) => {
  appStore.removeView(tag)
  if (isActive(tag)) toLastView(tag)
}

// 从路由表中过滤出要affixed tagviews
const fillterAffixTags = (routes: Array<RouteRecordRaw>, basePath = '/') => {
  let tags: RouteRecordRaw[] = []
  routes.forEach(route => {
    if (route.meta && route.meta.affix) {
      // 把路由路径解析成完整路径，路由可能是相对路径
      tags.push({
        name: route.name,
        path: route.path,
        meta: { ...route.meta }
      } as RouteRecordRaw)
    }
    // 深度优先遍历 子路由（子路由路径可能相对于route.path父路由路径）
    if (route.children) {
      const childTags = fillterAffixTags(route.children, route.path)
      if (childTags.length) {
        tags = [...tags, ...childTags]
      }
    }
  })
  return tags
}

// 初始添加affix的tag
const initTags = () => {
  const affixTags = fillterAffixTags(routes)
  for (const tag of affixTags) {
    if (tag.name) appStore.addView(tag)
  }
}

// 是否是始终固定在tagsview上的tag
const isAffix = (tag: RouteRecordRaw) => {
  return tag.meta?.affix
}

watch(
  () => route.path,
  () => {
    addTags()
  }
)

onMounted(() => {
  initTags()
  addTags()
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  width: 100%;
  height: 34px;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  :deep(.el-tabs) {
    width: 100%;
    height: 100%;
    .el-tabs__header {
      height: 100%;
      margin: 0;
      // .el-tabs__nav-wrap {
      //   height: 100%;
      // }
      // .el-tabs__nav-scroll {
      //   height: 100%;
      // }
      // .el-tabs__nav {
      //   height: 100%;
      // }
    }

    .el-tabs__nav-next,
    .el-tabs__nav-prev {
      line-height: 34px;
    }
    .el-tabs__item {
      height: 34px;
      line-height: 34px;
    }
  }
  // .tags-view-wrapper {
  //   .tags-view-item {
  //     display: inline-block;
  //     height: 26px;
  //     line-height: 26px;
  //     border: 1px solid #d8dce5;
  //     background: #fff;
  //     color: #495060;
  //     padding: 0 8px;
  //     box-sizing: border-box;
  //     font-size: 12px;
  //     margin-left: 5px;
  //     margin-top: 4px;
  //     &:first-of-type {
  //       margin-left: 15px;
  //     }
  //     &:last-of-type {
  //       margin-right: 15px;
  //     }
  //     &.active {
  //       background-color: #42b983;
  //       color: #fff;
  //       border-color: #42b983;
  //       &::before {
  //         position: relative;
  //         display: inline-block;
  //         content: '';
  //         width: 8px;
  //         height: 8px;
  //         border-radius: 50%;
  //         margin-right: 5px;
  //         background: #fff;
  //       }
  //     }
  //   }
  // }
}
</style>

<style lang="scss">
// .tags-view-container {
//   .el-icon {
//     width: 16px;
//     height: 16px;
//     position: relative;
//     left: 2px;
//     top: -1px;
//     border-radius: 50%;
//     text-align: center;
//     transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//     transform-origin: 100% 50%;
//     &:before {
//       transform: scale(0.6);
//       display: inline-block;
//       vertical-align: -1px;
//     }
//     &:hover {
//       background-color: #b4bccc;
//       color: #fff;
//     }
//   }
// }
</style>
