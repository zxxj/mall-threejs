<script setup>
import { defineAsyncComponent } from 'vue'
import Loading from './Loading.vue'

const asyncComponent = defineAsyncComponent({
  // 加载函数
  loader: () => import('./Home.vue'),
  // 加载异步组件时,使用的组件
  loadingComponent: Loading,
  // 展示加载组件前的延迟时间,默认为200ms
  delay: 200
})
</script>

<template>
  <Suspense>
    <template #fallback>
      <Loading />
    </template>
    <template #default>
      <asyncComponent />
    </template>
  </Suspense>
</template>

<style scoped></style>
