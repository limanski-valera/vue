<template>
    <div class="list">
        <h2 class="title">
            {{ title }}
        </h2>
        <ul class="body">
            <persons-list-item
                v-for="(person, index) in personsData"
                :key="person.Symbol"
                :name="person"
                @click="onPersonClick(index)"
                :class="{
                    selected: index === selectedPersonIndex,
                }"
            />
        </ul>
    </div>
</template>

<script>
import PersonsListItem from "./PersonsListItem.vue";
export default {
    components: { PersonsListItem },
    name: "PersonsList",
    props: {
        personsData: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: "Список кандидатів",
        },
        selectedPersonIndex: {
            type: Number || null,
            default: null
        }
    },
    computed: {
        selectedPerson: {
            get(){
                return this.selectedPersonIndex
            },
            set(newValue) {
                this.$emit("personSelected", newValue);
            },
        },
    },
    methods: {
        onPersonClick(index) {
            this.selectedPerson = index;
        },
    },
};
</script>

<style lang="css" scoped>
.body {
    border: 1px solid silver;
    padding: 15px;
}
</style>
