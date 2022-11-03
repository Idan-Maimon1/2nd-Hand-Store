
<template>
    <section class="products-page-layout">
        <product-list />
    </section>
</template>

<script>

import productList from '../components/product-list.vue'

export default {
    components: {
        productList,
    },
}
</script>