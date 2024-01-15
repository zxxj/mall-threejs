<script setup>
defineProps({
  data: {
    type: Array
  },
  icon: {
    type: String
  },
  isShowTitle: {
    type: Boolean,
    defalut: true
  },
  isShowCar: {
    type: Boolean,
    default: true
  },
  width: {
    type: Number,
    default: 280
  },
  height: {
    type: Number,
    default: 270
  },
  coverWidth: {
    type: Number,
    default: 220
  },
  coverHeight: {
    type: Number,
    default: 180
  },
  isLoadHdr: {
    type: Boolean,
    default: false
  },
  mt: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <template v-for="item in data" :key="item">
    <div class="card" :style="{ width: width + 'px', height: height + 'px' }">
      <div class="title" v-show="isShowTitle">{{ item.title }}</div>
      <img
        class="cover"
        :src="isLoadHdr ? `./files/hdr/${item}.jpg` : `${item.imgsrc}`"
        :style="{ width: coverWidth + 'px', height: coverHeight + 'px', marginTop: mt + 'px' }"
      />
      <a-button class="car" v-show="isShowCar">加入购物车</a-button>
    </div>
  </template>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 280px;
  height: 270px;
  background-color: rgba(26, 26, 26, 1);
  border-radius: 20px;

  .title {
    color: #ff9900;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }
  .cover {
    width: 220px;
    height: 180px;
    border-radius: 10px;
  }

  .car {
    margin-top: 10px;
    width: 220px;
  }
}
</style>
