import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Models',
      name: 'Models',
      component: () => import('../views/ModelsView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/Renting',
      name: 'Renting',
      component: () => import('../views/RentingView.vue')
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('../views/ContactUsView.vue')
    },
  ]
})

export default router
