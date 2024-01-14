<script setup>
import { onMounted } from 'vue'
import { getHomePage } from '../service/modules/home'

onMounted(async () => {
  const res = await getHomePage()
  console.log(res)
})
</script>

<template>aaa</template>

<style scoped>
</style>
