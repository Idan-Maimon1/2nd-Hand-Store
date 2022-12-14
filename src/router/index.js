import { createRouter, createWebHashHistory } from 'vue-router'
import productsPage from '../views/products-page.vue'
import productDetails from '../views/products-details.vue'
import landingpage from '../views/landing-page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: landingpage
    }, 
    {
      path: '/products/',
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
