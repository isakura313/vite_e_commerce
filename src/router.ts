import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
