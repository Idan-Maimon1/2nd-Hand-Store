
<template>
    <section class="product-list-layout grid-layout">
        <side-filters />
        <div class="product-list-cont">
            <transition appear name="fade" v-for="(currProduct) in products">
                <product-preview :key="currProduct" :currProduct="currProduct" />
            </transition>
        </div>
    </section>
</template>

<script>

import sideFilters from './side-filters.vue';
import productPreview from './product-preview.vue'

export default {
    data() {
        return {}
    },
    computed: {
        products() { return this.$store.getters.products }
    },
    methods: {},
    created() { },
    components: {
        productPreview,
        sideFilters,
    },
}
</script>