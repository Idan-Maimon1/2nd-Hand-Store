
<template>
    <section class="products-page-layout">
        <product-list :products="products" />
    </section>
</template>

<script>

import productList from '../components/product-list.vue'

export default {
    data() {
        return {
            products: []
        }
    },
    components: {
        productList,
    },
    async created() {
        await this.$store.dispatch({ type: 'loadProducts' })
        this.products = this.$store.getters.products
    }
}
</script>