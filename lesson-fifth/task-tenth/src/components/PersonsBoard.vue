<template>
    <div class="board">
        <persons-list @personSelected="onMenSelected" title="Хлопці" :persons-data="mensList" :selected-person-index="selectedPair[0]" class="board-item men"/>
        <persons-list @personSelected="onGirlSelected" title="Дівчата" :persons-data="girlsList" :selected-person-index="selectedPair[1]" class="board-item girl"/>
    </div>
</template>

<script>
import PersonsList from "./PersonsList.vue";
export default {
    components: { PersonsList },
    name: "PersonsBoard",
    props: {
        mensList: {
            type: Array,
            default: () => []
        },
        girlsList: {
            type: Array,
            default: () => []
        },
        selectedPair: {
            type: Array,
            default: () => [null, null]
        }
    },
    computed: {
        setSelectedPair: {
            get(){
                return this.selectedPair
            },
            set(object){
                this.$emit('pairSelected', [object.selectedMen, object.selectedGirl])
            }
        }
    },
    methods: {
        onMenSelected(index){
            this.setSelectedPair = {selectedMen: index, selectedGirl: this.selectedPair[1]}
        },
        onGirlSelected(index){
            this.setSelectedPair = {selectedMen: this.selectedPair[0], selectedGirl: index}
        },
    }
};
</script>

<style lang="css" scoped>
    .board {
        display: flex;
        gap: 30px;
    }
    .board-item {
        flex: 1 1 calc((100% - 30px) / 2);
    }
</style>
