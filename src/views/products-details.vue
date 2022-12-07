<template>
    <section class="details-layout">
        <section class="details-imgs-cont">
            <div class="selected-img-cont">
                <img :src="getSelectedImgUrl()">
            </div>
            <section class="unselected-imgs">
                <img @click="selectedImgIdx = idx" v-for="(currImg, idx) in currProduct.imgs"
                    :src="getImgUrl(currImg)" :class="idx === selectedImgIdx ? 'selected-img' : 'unselected-img'" :key="currImg">
            </section>
        </section>
        <section class="product-info">
            {{ currProduct }}
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            selectedImgIdx: 0,
            currProdId: "",
            currProduct: [],
        }
    },
    async created() {
        this.currProdId = this.$route.params.id
        this.currProduct = this.$store.getters.productById(this.currProdId)
    },
    methods: {
        getImgUrl(imgName) {
            return new URL("../assets/imgs/" + imgName, import.meta.url)
        },
        getSelectedImgUrl() {
            return new URL("../assets/imgs/" + this.currProduct.imgs[this.selectedImgIdx], import.meta.url)
        },
    }
}
</script>