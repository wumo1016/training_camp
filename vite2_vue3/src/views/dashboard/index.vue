<template>
  <div>
    <el-calendar v-model="value" />
    <h1>Dashboard page</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="scss" scoped>
h1 {
  color: $menuActiveText;
}
</style>
