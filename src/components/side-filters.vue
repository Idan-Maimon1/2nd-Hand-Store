
<template>
    <section class="side-filters-layout">
        <section class="side-filters-cont">
            categories
            <div v-for="(category, idx) in this.categories"
                @click="setFilter({ category: category, price: { min: 0, max: 0 } })" :key="category">{{ category }}</div>
        </section>
    </section>
</template>
<script>

export default {
    data() {
        return {
            categories: ["art & decoration", "gadgets", "hobbies", "jewelry", "watches"],
        }
    },
    computed: {
    },
    methods: {
        setFilter(filter) {
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.category = filter?.category || ''
            filterBy.minPrice = filter?.price.min || 0
            filterBy.maxPrice = filter?.price.max || 1000
            this.$store.dispatch({ type: "setFilter", filterBy })
            // this.setQuery(filterBy)
        },
        setQuery(query) {
            this.$router.push({ path: `/products/${query.category ? "query.category" : ""}`, query })
        },
    },
    created() { },
    components: {
    },
}
</script>