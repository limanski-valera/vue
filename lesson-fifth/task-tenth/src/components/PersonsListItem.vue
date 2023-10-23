<template>
    <li class="person">
        {{ name }}
    </li>
</template>

<script>
    export default {
        name: 'PersonsListItem',
        props: {
            name: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="css" scoped>
    .person {
        margin: 5px;
        padding: 5px;
        border: 1px solid black;
        color: black;
        background-color: transparent;
        list-style: none;
        cursor: pointer;
    }
    .men .person {
        border-color: blue;
        color: blue;
    }
    .men .person.selected {
        background-color: rgba(0, 0, 255, 0.2);
    }
    .girl .person {
        border-color: palevioletred;
        color: palevioletred;
    }
    .girl .person.selected {
        background-color: rgba(216, 112, 147, 0.2);
    }
</style>