
<template>
    <section class="product-list-layout grid-layout">
        <side-filters />
        <div class="product-list-cont">
            <product-preview :key="currProduct" v-for="(currProduct,idx) in products" :currProduct="currProduct" />
        </div>
    </section>
</template>

<script>

import sideFilters from './side-filters.vue';
import productPreview from './product-preview.vue'

export default {
    computed: {
        products() { return this.$store.getters.products },
    },
    methods: {},
    created() { },
    components: {
        productPreview,
        sideFilters
    },
}
</script>