<template>
  <div>
    <svg-icon
      style="cursor: pointer"
      :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue'
import screenfull from 'screenfull'

const { proxy } = getCurrentInstance()!
const isFullscreen = ref(false)

const handleClick = () => {
  if (screenfull.isEnabled) return screenfull.toggle()
  return proxy?.$message({
    message: 'you browser can not work',
    type: 'warning'
  })
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', () => {
      isFullscreen.value = screenfull.isFullscreen
    })
  }
})
</script>
