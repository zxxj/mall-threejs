<script setup>
import { getHomePage } from '@/service/modules/home'
import { ref } from 'vue'

let result = await getHomePage()

const hero = ref(result.hero)
</script>

<template>
  <ul>
    <li v-for="item in hero" :key="item">{{ item.category }}</li>
  </ul>
</template>

<style scoped></style>
