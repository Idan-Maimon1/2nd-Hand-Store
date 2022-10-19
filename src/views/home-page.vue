
<template>
    <section class="homepage-layout">
        <tasks-table />
    </section>
</template>

<script>

import tasksTable from '../components/tasks-table.vue'

export default {
    components: {
        tasksTable,
    },
}
</script>