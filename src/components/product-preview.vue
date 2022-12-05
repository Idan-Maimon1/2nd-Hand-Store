
<template>
    <section class="product-preview-layout" @click.prevent="showDetails">
        <a href=""></a>
        <!-- {{ this.currProduct }} -->
    </section>
</template>
<script>

export default {
    props: {
        currProduct: Object,
    },
    data() {
        return {
        }
    },
    computed: {},
    methods: {
        showDetails() {
            this.$router.push({ path: `/product/${this.currProduct._id}` })
        },
    },
    created() {
    }
}
</script>
