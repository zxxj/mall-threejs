import { createRouter, createWebHistory } from 'vue-router'
import { useControlStore } from '@/stores/control'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/product',
      component: () => import('@/views/Product/index.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const control = useControlStore()
  control.changeFullScreen(false)
  control.isFullScreen = false
  console.log(control.isFullScreen)
})

export default router
