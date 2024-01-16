<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Loading from '@/views/Home/Loading.vue'
import Card from './components/Card.vue'
import Scene from './components/Scene.vue'
import { getProductList } from '@/service/modules/product'
import { useControlStore } from '@/stores/control'

onMounted(async () => {
  const res = await getProductList()
  products.value = res
})

onUnmounted(() => {
  // window.removeEventListener('mousewheel')
})

const control = useControlStore()
const products = ref([])

window.addEventListener('mousewheel', (e) => {
  if (e.deltaY > 0) {
    control.changeFullScreen(true)
  } else {
    control.changeFullScreen(false)
  }
})
</script>

<template>
  <template v-if="products.length < 1">
    <Loading />
  </template>
  <div class="product-list" v-else>
    <div class="left" :class="control.isFullScreen ? 'hidden' : 'left'">
      <div class="title-container">
        <img class="icon" src="@/assets/images/recommed.png" />
        <div class="text">推荐商品</div>
      </div>
      <Card
        :data="products.list"
        :is-show-title="true"
        :is-show-car="true"
        :height="255"
        :cover-height="160"
      />
    </div>
    <div class="center">
      <Scene />
    </div>
    <div class="right" :class="control.isFullScreen ? 'hidden' : 'right'">
      <div class="title-container">
        <img class="icon" src="@/assets/images/场景购.png" />
        <div class="text">切换使用场景</div>
      </div>

      <Card
        :data="products.hdr"
        :is-show-title="false"
        :is-show-car="false"
        :is-load-hdr="true"
        :cover-width="260"
        :coverHeight="100"
        :width="280"
        :height="122"
        :mt="10"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  z-index: 9;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    margin-top: 46px;
    width: 300px;
    height: calc(100vh - 46px);
    transition: all 1s;
  }

  .left {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .right {
    margin-right: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .center {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
    img {
      vertical-align: middle;
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }

    .text {
      font-size: 18px;
      font-weight: bold;
      color: #ff4d4f;
    }
  }
}

.left.hidden {
  transform: translateX(-100%);
  transition: all 0.5s;
}

.right.hidden {
  transform: translateX(100%);
  transition: all 0.5s;
}
</style>
