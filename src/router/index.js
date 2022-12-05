import { createRouter, createWebHashHistory } from 'vue-router'
import productsPage from '../views/products-page.vue'
import productDetails from '../views/products-details.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'productsPage',
      component: productsPage
    },
    {
      path: '/product/:id/',
      name: 'product-details',
      component: productDetails,
    },
  ]
})

export default router
