
<template>
    <section class="product-preview-layout" @click.prevent="showDetails">
        <img :src="getImgUrl(currProduct.imgs[0])">
        <div class="product-date">{{ getEditedAtDate }}</div>
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
    computed: {
        getEditedAtDate() {
            const date = new Date(this.currProduct.editedAt)
            const yy = (date.getFullYear() + '').slice(-2)
            let mm = date.getMonth() + 1
            let dd = date.getDate()
            if (dd < 10) dd = '0' + dd
            if (mm < 10) mm = '0' + mm
            return dd + '/' + mm + '/' + yy
        }
    },
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
