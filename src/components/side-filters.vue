
<template>
    <section class="side-filters-layout">
        <section class="side-filters-cont">
            <section class="side-filters-price">
                <h2>Price Range</h2>
                <div class="min-price-inputs">
                    <input type="number" id="min-price" min="0" :max="minInputHighestValue" v-model="filter.price.min"
                        @change="setFilter()">
                    <input type="range" id="min-price-range" class="slider" min="0" :max="minInputHighestValue"
                        v-model="filter.price.min" @change="setFilter()">
                </div>
                <div class="max-price-inputs">
                    <input type="number" id="max-price" :min="maxInputLowestValue" max="150" v-model="filter.price.max"
                        @change="setFilter()">
                    <input type="range" id="max-price-range" class="slider" :min="maxInputLowestValue" max="150"
                        v-model="filter.price.max" @change="setFilter()">
                </div>
            </section>
            <section class="side-filters-categories">
                <div @click="setFilter(true, true)">categories</div>
                <div v-for="(category, idx) in this.categories" @click.prevent="setFilter(category);" :key="idx + 7"
                    :class="filter.category === category ? 'selected-category' : ''">
                    {{ category }}
                    <svg @click.stop="setFilter(true, true)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
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
            categories: ["art & decoration", "jewelry", "hobbies", "gadgets", "watches"],
            isBigCmp: false,
            filter: { category: '', price: { min: 0, max: 150, } },
        }
    },
    computed: {
        maxInputLowestValue() {
            return this.filter.price.min > 0 ? this.filter.price.min : 0
        },
        minInputHighestValue() {
            return this.filter.price.max < 150 ? this.filter.price.max : 150
        }
    },
    methods: {
        setFilter(category, isUnsetCategory = false) {
            if (category) {
                this.filter.category = isUnsetCategory ? '' : category
            }
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.category = this.filter?.category || ''
            filterBy.minPrice = this.filter?.price?.min || 0
            filterBy.maxPrice = this.filter?.price?.max || 150
            this.$store.dispatch({ type: "setFilter", filterBy })
            console.log('this.filter: ', this.filter)
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