<template>
    <section class="details-main-cont">
        <section class="details-layout">
            <section class="details-imgs-cont">
                <div class="details-imgs-display">
                    <img class="main-selected-img" :src="getImgUrl(true, true)">
                    <section class="unselected-imgs">
                        <img @click="selectedImgIdx = idx" v-for="(currImg, idx) in currProduct.imgs.slice(0, 4)"
                            :src="getImgUrl(currImg)"
                            :class="idx === selectedImgIdx ? 'selected-img' : 'unselected-img'" :key="currImg">
                    </section>
                </div>
            </section>
            <section class="product-info">
                <img class="details-bkg" src="../assets/imgs/splash.svg" alt="">
                <div class="product-info-title">
                    {{ currProduct.title }}
                </div>
                <section class="product-info-cont">
                    <div class="product-info-location">
                        <span> location</span> {{ currProduct.location.city }}, {{ currProduct.location.country }}
                    </div>

                    <div class="product-info-price">
                        <span>price</span> {{ currProduct.price }}
                    </div>
                    <div class="product-info-condition">
                        <span>condition</span> {{ currProduct.condition }}
                    </div>
                    <div class="product-info-description">
                        <span> product description</span> {{ fitDescription(currProduct.description) }}
                        <button @click="isDescriptionModal = true" class="description-btn"><img
                                src="../assets/imgs/eye.svg" alt=""> Read more</button>
                    </div>
                    <div class="product-info-date">
                        <span> last updated at </span>{{ getEditedAtDate }}
                    </div>
                    <div class="product-info-seller">
                        <div><span> seller info</span></div>
                        <div><span>name</span> {{ currProduct.seller.name }}</div>
                        <div><span>phone number</span> {{ currProduct.seller.phone }}</div>
                    </div>
                </section>
            </section>
        </section>
        <description-modal v-if="this.isDescriptionModal" :description="currProduct.description"
            @close="isDescriptionModal = false"></description-modal>
        <div class="contact-seller" @click="redirectToWhatsapp"><img src="../assets/imgs/whatsapp.svg" alt=""></div>
    </section>
</template>

<script>
import descriptionModal from '../components/description-modal.vue';

export default {
    data() {
        return {
            selectedImgIdx: 0,
            currProdId: "",
            currProduct: null,
            isDescriptionModal: false,
        }
    },
    async created() {
        this.currProdId = this.$route.params.id
        await this.getProductById(this.currProdId)
    },
    methods: {
        getImgUrl(imgName, isSelectedImg = false) {
            const cloudinaryUrl = "https://res.cloudinary.com/dipjgyi1r/image/upload/v1670645003/2nd-hand/"
            if (isSelectedImg) {
                return new URL(cloudinaryUrl + this.currProduct.imgs[this.selectedImgIdx], import.meta.url)
            }
            return new URL(cloudinaryUrl + imgName, import.meta.url)
        },
        async getProductById(productId) {
            try {
                this.currProduct = await this.$store.dispatch({
                    type: 'getProductById',
                    productId,
                })
            } catch (err) {
                console.log(err);
            }
        },
        fitDescription(str) {
            if (str.length > 100) {
                return str.slice(0, 100) + "..."
            }
            return
        },
        redirectToWhatsapp() {
            window.open('https://wa.me/' + this.currProduct.seller.phone, '_blank')
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
    components: {
        descriptionModal
    },
}
</script>
