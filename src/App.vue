<script >
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app-header.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    appHeader
  },
  async created() {
    await this.$store.dispatch({ type: 'loadProducts', filter: false })
  }
}
</script>

<template>
  <app-header />
  <section class="page-content-layout">
    <RouterView v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </RouterView>
  </section>
</template>