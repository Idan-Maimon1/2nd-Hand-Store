
<template>
    <section class="app-header-layout">
        <section
            :class="[this.$route.name === 'product-details' ? 'black-outline' : '', 'app-header-cont', 'grid-layout']">
            <section class="header-logo-cont pointer" @click.prevent="showLandingPage()">
                <img src="/trade-icon.svg" alt="">
                <div><span>2</span>ndHand</div>
            </section>
            <section class="app-header-main-content">
                <div class="search-bar-layout" v-if="this.$route.name !== 'landing-page'">
                    <div class="search-bar-cont">
                        <input type="text" placeholder="What are you looking for?" v-model="searchedTerm"
                            @click="isSearch = true">
                        <button><img src="/search-icon.svg" alt=""></button>
                        <div v-if="isSearch" class="search-results-cont">
                            <div v-for="result in results" :key="result" @click="showDetailsPage(result._id)">
                                {{ result.title }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav"></div>
            </section>
        </section>
    </section>
</template>
<script>
export default {
    data() {
        return {
            products: '',
            isSearch: false,
            searchedTerm: '',
        }
    },
    created() {
    },
    methods: {
        showLandingPage() {
            this.$router.push({ path: "/" })
        },
        showDetailsPage(productId) {
            this.isSearch = false
            this.$router.push({ path: `/product/${productId}` })
        }

    },
    computed: {
        results() {
            if (!this.products) {
                this.products = this.$store.getters.products
            }
            const resultsArray = this.products.filter(product => product.title.toLowerCase().includes(this.searchedTerm.toLowerCase()))
            return resultsArray.length > 7 ? resultsArray.splice(0, 7) : resultsArray
        }
    }
}
</script>