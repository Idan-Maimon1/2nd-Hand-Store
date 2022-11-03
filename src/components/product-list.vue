
<template>
    <section class="product-list-layout">
        <div class="product-list-cont">
            <product-preview v-for="a in 30"/>
        </div>
    </section>
</template>

<script>

import productPreview from './product-preview.vue'

export default {
    components: {
        productPreview,
    },
}
</script>