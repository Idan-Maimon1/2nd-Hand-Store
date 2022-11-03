import { createRouter, createWebHashHistory } from 'vue-router'
import productsPage from '../views/products-page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'productsPage',
      component: productsPage
    },
  ]
})

export default router
