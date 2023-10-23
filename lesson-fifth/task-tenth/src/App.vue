<template>
    <persons-board
        @pairSelected="onPairSelected"
        :mens-list="mens"
        :girls-list="girls"
        :selected-pair="selectedPair"
    />
    <button @click="transferPair" :disabled="isButtonDisabled">Додати</button>
    <list-of-selected v-if="selectedPairsList.length" :selected-pairs-list="selectedPairsList" />
</template>

<script>
import persons from "@/data/persons";
import PersonsBoard from "./components/PersonsBoard.vue";
import ListOfSelected from "./components/ListOfSelected.vue";

export default {
    name: "App",
    components: {
        PersonsBoard,
        ListOfSelected,
    },
    data() {
        return {
            mens: persons["Хлопці"],
            girls: persons["Дівчата"],
            selectedPair: [null, null],
            selectedPairsList: [],
        };
    },
    computed: {
        isButtonDisabled() {
            if (this.selectedPair[0] !== null && this.selectedPair[1] !== null) {
                return false;
            } else return true;
        },
    },
    methods: {
        onPairSelected(selectedPair) {
            this.selectedPair = selectedPair;
        },
        transferPair() {
            // Індекси обраних осіб
            const selectedMenIndex = this.selectedPair[0];
            const selectedGirlIndex = this.selectedPair[1];

            // Видаляємо осіб зі списків
            const selectedMen = this.mens.splice(selectedMenIndex, 1)[0];
            const selectedGirl = this.girls.splice(selectedGirlIndex, 1)[0];

            // Додаємо пару в список обраних
            this.selectedPairsList.push([selectedMen, selectedGirl]);

            // Обнуляємо пари
            this.selectedPair = [null, null];
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
}
</style>
