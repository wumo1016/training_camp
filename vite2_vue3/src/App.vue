<template>
  <el-config-provider :locale="locale" :size="size">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useAppStore } from '@/store/app'

const locale = ref(zhCn)
const appStore = useAppStore()
const size = computed(() => appStore.size)
</script>

<style></style>
