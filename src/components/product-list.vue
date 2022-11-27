
<template>
    <section class="product-list-layout grid-layout">
        <side-filters />
        <div class="product-list-cont">
            <product-preview v-for="a in 30" />
        </div>
    </section>
</template>

<script>

import sideFilters from './side-filters.vue';
import productPreview from './product-preview.vue'

export default {
    components: {
        productPreview,
        sideFilters
    },
}
</script>