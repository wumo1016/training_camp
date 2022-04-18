<template>
  <component :is="comp" v-bind="linkProps">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate'
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
// 判断是不是外链
const isExt = computed(() => isExternal(props.to))
// 组件名
const comp = computed(() => {
  if (isExt.value) return 'a'
  return 'router-link'
})
// 组件属性
const linkProps = computed(() => {
  if (isExt.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    }
  }
  return {
    to: props.to
  }
})
</script>
