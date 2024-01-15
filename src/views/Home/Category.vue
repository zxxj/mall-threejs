<script setup>
import { useRouter } from 'vue-router'

defineProps({
  data: {
    type: Array
  }
})

const router = useRouter()
</script>

<template>
  <div class="container">
    <div class="category-title">乐享生活100+</div>
    <ul class="list">
      <li v-for="item in data" :key="item" class="item">
        <img :src="item.menuThumbnail" :alt="item.displayName" />
        <div class="title">{{ item.displayName }}</div>
      </li>
    </ul>

    <a-button class="go" type="primary" danger @click="router.push('/product')"
      >立即享受生活</a-button
    >
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin: 0 auto;

  .category-title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }

  .go {
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .list {
    height: 180px;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      cursor: pointer;
      margin: 20px;
      width: 180px;
      height: 50px;
      text-align: center;
      border-bottom-right-radius: 20px;
      background-color: #fff;
      box-shadow: 5px 10px 10px #d2d2d2;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }

      .title {
        margin-left: 15px;
        font-weight: bold;
        font-size: 15px;
        margin-top: 5px;
      }
    }
  }
}
</style>
