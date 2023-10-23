<template>
    <div class="wrapper">
        <h2 class="title">Обрані пари</h2>
        <ul class="list">
            <li v-for="pair in selectedPairsList" class="item" :key="pair.Symbol">
                {{ pair[0] }} - {{ pair[1] }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ListOfSelected',
        props: {
            selectedPairsList: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="css" scoped>
    .list {
        padding: 20px;
        border: 1px solid red;
        color: red;
    }
    .item {
        margin-bottom: 20px;
        border-bottom: 1px solid red;
        list-style: none;
    }
</style>