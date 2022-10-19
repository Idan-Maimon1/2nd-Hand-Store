import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/home-page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
  ]
})

export default router
