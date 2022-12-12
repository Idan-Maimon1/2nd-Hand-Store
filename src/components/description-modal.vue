<template>
    <section class="description-modal-layout" @click.prevent="close"></section>
    <section class="description-modal-cont">
        <div class="description-modal-header"><svg @click.prevent="close" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <div class="description-title">Description</div>
        </div>
        <div class="description-modal-content">
            {{ this.description }}
        </div>
    </section>
</template>
<script>
export default {
    props: {
        description: {
            type: String
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>