<template>
    <div class="list">
        <notebooks-list-item v-for="notebook in notebooksData" :card-data="notebook" :key="notebook.id"/>
    </div>
</template>

<script>
import NotebooksListItem from './NotebooksListItem.vue';
    export default {
        name: 'NotebooksList',
        components: {
            NotebooksListItem,
        },
        props: {
            notebooksData: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>