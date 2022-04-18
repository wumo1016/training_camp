<template>
  <div>
    <el-dropdown trigger="click" @command="handleSize">
      <div>
        <svg-icon class-name="size-icon" icon-class="size"></svg-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in sizeOptions"
            :key="item.value"
            :command="item.value"
            :disabled="item.value === size"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import type { ISize } from '@/plugins/element'

const appStore = useAppStore()
const route = useRoute()
const router = useRouter()

const size = computed(() => appStore.size)

const sizeOptions = ref([
  { label: 'Large', value: 'large' },
  { label: 'Default', value: 'default' },
  { label: 'Small', value: 'small' }
])

const refreshView = async () => {
  const { fullPath } = route
  await nextTick()
  router.replace({
    path: '/redirect' + fullPath
  })
}

const handleSize = (command: ISize) => {
  appStore.SET_SIZE(command)
  // refreshView()
}
</script>

<style lang="scss">
.size-icon {
  font-size: 18px;
}
</style>
