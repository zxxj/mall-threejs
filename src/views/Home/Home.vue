<script setup>
import { getHomePage } from '@/service/modules/home'
import Banner from './Banner.vue'
import Category from './Category.vue'

let result = await getHomePage()
console.log(result)
</script>

<template>
  <div class="container">
    <div class="banner-bg"></div>
    <Banner :data="result.banner" />
    <Category :data="result.sports" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.banner-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 575px;
  background-color: orangered;
  transform-origin: 0 0;
  transform: skew(0, -8deg);
}
</style>
