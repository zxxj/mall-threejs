<script setup>
import use3D from '@/utils/3d'
import { ref } from 'vue'

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
    default: 250
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

const currentSelected = ref(0)
const handleClick = (item, index) => {
  console.log(item, index)
  // use3D.setModel(item.modelName)
  console.log(use3D)
  currentSelected.value = index
}

defineExpose({
  handleClick
})
</script>

<template>
  <template v-for="(item, index) in data" :key="item">
    <div
      :class="currentSelected == index ? 'active' : 'card'"
      class="card"
      :style="{ width: width + 'px', height: height + 'px' }"
      @click="handleClick(item, index)"
    >
      <div class="title" v-show="isShowTitle">{{ item.title }}</div>
      <img
        class="cover"
        :src="isLoadHdr ? `./files/hdr/${item}.jpg` : `${item.imgsrc}`"
        :style="{ width: coverWidth + 'px', height: coverHeight + 'px', marginTop: mt + 'px' }"
      />
      <a-button class="car" v-show="isShowCar" type="primary" danger>加入购物车</a-button>
    </div>
  </template>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 15px;
  width: 280px;
  height: 270px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.3s;
    box-shadow: 0px 0px 20px 1px #ff4d4f;
  }

  &.active {
    transform: translateY(-3px);
    box-shadow: 0px 0px 20px 5px #ff4d4f;
    border: 2px solid #ff4d4f;
  }

  .title {
    color: #ff4d4f;
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
