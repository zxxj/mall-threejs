<script setup>
import { ref } from 'vue'
import { getHomePage } from '@/service/modules/home'

let result = await getHomePage()

const hero = ref(result.hero)
</script>

<template>
  <ul>
    <li v-for="item in hero" :key="item">{{ item.category }}</li>
  </ul>
</template>

<style scoped></style>
