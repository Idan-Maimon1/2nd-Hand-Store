<template>
    <section class="details-layout">
        <section class="details-imgs-cont">
            <div class="details-imgs-display">
                <img class="main-selected-img" :src="getSelectedImgUrl()">
                <section class="unselected-imgs">
                    <img @click="selectedImgIdx = idx" v-for="(currImg, idx) in currProduct.imgs.slice(0, 4)"
                        :src="getImgUrl(currImg)" :class="idx === selectedImgIdx ? 'selected-img' : 'unselected-img'"
                        :key="currImg">
                </section>
            </div>
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
            return new URL("https://res.cloudinary.com/dipjgyi1r/image/upload/v1670645003/2nd-hand/" + imgName, import.meta.url)
        },
        getSelectedImgUrl() {
            return new URL("https://res.cloudinary.com/dipjgyi1r/image/upload/v1670645003/2nd-hand/" + this.currProduct.imgs[this.selectedImgIdx], import.meta.url)
        },
    }
}
</script>