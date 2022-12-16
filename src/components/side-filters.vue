
<template>
    <section class="side-filters-layout">
        <section class="side-filters-cont">
            <section class="side-filters-price">
                <h2>Price Range</h2>
                <div class="min-price-inputs">
                    <input type="number" id="min-price" min="0" max="150" v-model="filter.price.min" @change="setFilter()">
                    <input type="range" id="min-price-range" class="slider" min="0" max="150"
                        v-model="filter.price.min" @change="setFilter()">
                </div>
                <div class="max-price-inputs">
                    <input type="number" id="min-price" min="1" max="150" v-model="filter.price.max" @change="setFilter()">
                    <input type="range" id="max-price-range" class="slider" min="1" max="150"
                        v-model="filter.price.max" @change="setFilter()">
                </div>
            </section>
            <section class="side-filters-categories">
                <div @click="filter.category = ''; setFilter();">categories</div>
                <div v-for="(category, idx) in this.categories" @click="filter.category = category; setFilter();"
                    :key="idx + 7">
                    {{ category }}
                </div>
            </section>
        </section>
    </section>
    <section class="side-filters-layout-mobile" v-if="isBigCmp">
        <section class="side-filters-cont-mobile">
        </section>
    </section>
</template>
<script>

export default {
    data() {
        return {
            categories: ["art & decoration", "gadgets", "hobbies", "jewelry", "watches"],
            isBigCmp: false,
            filter: { category: '', price: { min: 0, max: 150, } },
        }
    },
    computed: {
    },
    methods: {
        setFilter() {
            console.log('this.filter: ',this.filter)
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.category = this.filter?.category || ''
            filterBy.minPrice = this.filter?.price?.min || 0
            filterBy.maxPrice = this.filter?.price?.max || 150
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