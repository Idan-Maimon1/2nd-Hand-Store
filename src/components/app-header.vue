
<template>
    <section class="app-header-layout">
        <section :class="[this.$route.name === 'landing-page' ? 'gray-outline' : '', 'app-header-cont', 'grid-layout']">
            <section class="header-logo-cont pointer" @click.prevent="showLandingPage()">
                <img src="/trade-icon.svg" alt="">
                <div><span>2</span>ndHand</div>
            </section> 
            <section class="app-header-main-content">
                <div class="search-bar-layout" v-if="this.$route.name !== 'landing-page'">
                    <div class="search-bar-cont">
                        <input type="text" placeholder="What are you looking for?">
                        <button><img src="/search-icon.svg" alt=""></button>
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
        }
    },
    created() {
    },
    methods: {
        showLandingPage() {
            this.$router.push({ path: "/" })
        },
    },
    computed: {
    }
}
</script>