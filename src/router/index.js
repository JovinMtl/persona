import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

import Feuille from '../views/layout/feuille.vue'
import home from '../views/pages/home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/homes',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/home',
    component: Feuille
  },
  {
    path: '/homee',
    component: home
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
