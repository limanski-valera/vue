<template>
    <div class="cards-list">
        <cards-list-item v-for="card in cardsList" :card-data="card" :key="card.id"/>
    </div>
</template>

<script>
import CardsListItem from './CardsListItem.vue';

    export default {
    name: 'CardsList',
    props: {
        cardsList: Array,
        default: () => [],
    },
    components: { CardsListItem }
}
</script>

<style lang="css" scoped>
    .cards-list {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        gap: 25px;
    }
</style>