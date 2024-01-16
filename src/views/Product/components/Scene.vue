<script setup>
import Use3D from '@/utils/3d'
import { onMounted } from 'vue'

onMounted(() => {
  const use3d = new Use3D('threejs')
})
</script>

<template>
  <div id="threejs"></div>
</template>

<style lang="scss" scoped></style>
