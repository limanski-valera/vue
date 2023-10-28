<template>
    <div class="item">
        {{ name }}
    </div>
</template>

<script>
    export default {
        name: 'DepartmentsListItem',
        props: {
            name: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="css" scoped>
    .item {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid transparent;
        cursor: pointer;
    }
    .item.selected {
        border-color: silver;
    }
</style>