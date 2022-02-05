import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import Dashboard from '@/pages/Dashboard.vue';
import CartMain from '@/pages/CartMain.vue';
import LikesMain from '@/pages/LikesMain.vue';

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Главная страница',
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: '/cart',
    component: CartMain,
    meta: {
      title: 'Cart',
    },
  },
  {
    path: '/likes',
    component: LikesMain,
    meta: {
      title: 'Избранное',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
