
<template>
    <section :class="[isBigCmp ? 'side-filters-big-layout' : '', 'side-filters-layout']">
        <section class="side-filters-cont">
            <div class="side-filters-title" @click="isBigCmp = !isBigCmp">Costum Filters
                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                    clip-rule="evenodd" viewBox="0 0 512.02 319.26">
                    <path
                        d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z" />
                </svg>
                <!-- <img src="../assets/imgs/arrow-down-icon.svg" /> -->
            </div>
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
                <div @click="setFilter(true, true)" class="categories-title">categories</div>
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
</template>
<script>

export default {
    data() {
        return {
            categories: ["jewelry", "hobbies", "gadgets", "watches", "art & decoration"],
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