<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array
  }
})

const currentBg = ref(props.data[0].bg_color)

const onChange = (current) => {
  currentBg.value = props.data[current].bg_color
}
</script>

<template>
  <div class="container">
    <div class="banner-bg" :style="{ backgroundColor: currentBg }"></div>

    <a-carousel arrows autoplay :after-change="onChange">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <right-circle-outlined />
        </div>
      </template>

      <div class="item" v-for="item in data" :key="item">
        <div class="left">
          <div class="subTitle">{{ item.sub_title.trim() || item.desktop_sub_title }}</div>
          <div class="title">{{ item.title.trim() || item.desktop_title }}</div>
        </div>
        <div class="right">
          <img :src="`https://pixl.decathlon.com.cn/${item.picture_desktop}/banner.jpg`" alt="" />
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: absolute;
  z-index: 1;
  padding-top: 46px;
}

.banner-bg {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 600px;
  transform-origin: 0 0;
  transform: skew(0, -8deg);
  transition: background-color 0.5s;
}

.item {
  display: flex !important;
  justify-content: center;
  height: 575px;
  .left {
    width: 200;
    margin: 100px 130px 0 0;
    .subTitle,
    .title {
      font-size: 50px;
      font-weight: bold;
      color: #fff;
    }

    .subTitle {
      font-size: 25px;
      text-align: right;
    }
  }

  .right {
    cursor: pointer;
    margin-top: 45px;
    transform-origin: 0 100%;
    transform: skew(0, -8deg);
    overflow: hidden;
    border-radius: 20px;
    border-bottom-right-radius: 80px;

    img {
      transform-origin: 0 0;
      transform: skew(0, 8deg);
    }
  }
}
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 600px;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 35px;
  height: 35px;
  font-size: 35px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
