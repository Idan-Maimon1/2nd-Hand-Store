<script >
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app-header.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    appHeader
  },
}
</script>

<template>
  <app-header />
  <section class="page-content-layout">
    <RouterView />
  </section>
</template>