<script setup>
import { useControlStore } from '@/stores/control'
import Header from './views/Home/Header.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
const control = useControlStore()
</script>

<template>
  <Header :class="!control.isFullScreen ? 'hidden' : 'header'" />
  <RouterView />
</template>

<style scoped>
.header {
  transform: translateY(-100%);
}
.header.hidden {
  transform: translateY(100%);
}
</style>
