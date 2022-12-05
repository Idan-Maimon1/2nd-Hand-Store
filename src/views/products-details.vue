<template>
    <div>
        <!-- {{ currProduct }} -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            currProdId: "",
            currProduct: []
        }
    },
    async created() {
        this.currProdId = this.$route.params.id
        this.currProduct = this.$store.getters.productById(this.currProdId)
    },
    methods: {}
}
</script>