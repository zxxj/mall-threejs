<script setup>
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ShoppingCartOutlined,
  UserOutlined,
  ShopOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons-vue'

const router = useRouter()
const current = ref(['shop'])
const items = ref([
  {
    key: 'shop',
    icon: () => h(ShopOutlined),
    label: '门店',
    title: '门店'
  },
  {
    key: 'car',
    icon: () => h(ShoppingCartOutlined),
    label: '购物车',
    title: '购物车'
  },
  {
    key: 'account',
    icon: () => h(UserOutlined),
    label: '账户',
    title: '账户'
  },

  {
    key: 'help',
    icon: () => h(QuestionCircleOutlined),
    label: '帮助',
    title: '帮助'
  }
])
const searchValue = ref('')

const onSearch = (value) => {
  console.log('use value', value)
}
</script>

<template>
  <div class="container">
    <div class="logo" @click="router.push('/home')">
      <img src="@/assets/images/圣诞屋.png" />
      <div class="text">zhangxinxin-mall</div>
    </div>
    <div class="search">
      <a-input-search
        width="100%"
        v-model:value="searchValue"
        placeholder="请输入商品名称或店铺名称"
        @search="onSearch"
      />
    </div>
    <div class="menu">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  z-index: 999;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;

  .logo {
    width: 249px;
  }

  .menu {
    width: 400px;
  }

  .search {
    flex: 1;
  }
}

.logo {
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .text {
    margin-left: 10px;
  }
}
</style>
