import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomeView',
      name: 'home',
      component: HomeView
    },
    {
      path: '/models',
      name: 'models',
      component: () => import('../views/ModelsView.vue')
    }
  ]
})

export default router
