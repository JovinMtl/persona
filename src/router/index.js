import { createRouter, createWebHistory } from '@ionic/vue-router';

import Feuille from '../views/layout/feuille.vue'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '',
    component: Feuille,
    alias: '/home'
  },
  {
    path: '/:notFound(.*)',
    component: Feuille
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
