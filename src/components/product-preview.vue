
<template>
    <section class="product-preview-layout" @click.prevent="showDetails">
        <img :src="getImgUrl(currProduct.imgs[0])">
        <div class="product-min-info">
            <div class="min-info-title">{{ currProduct.title }}</div>
            <div class="min-info-price">{{ currProduct.price }}</div>
            <div class="min-info-city">{{ currProduct.location.city }}</div>
        </div>
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
        getImgUrl(imgName) {
            return new URL("../assets/imgs/" + imgName, import.meta.url)
        },
    },
    created() {
    }
}
</script>
