<template>
    <input type="text" v-model="search" class="input" placeholder="Пошук" />
</template>

<script>
export default {
    name: "SearchingForm",
    data() {
        return {
            searchingValue: null,
        };
    },
    computed: {
        search: {
            get(){
                return this.searchingValue
            },
            set(newValue){
                this.searchingValue = newValue
                this.$emit('searching', newValue.toLowerCase())
            }
        }
    }
};
</script>

<style lang="css" scoped>
.input {
    height: 40px;
    padding: 0 15px;
    border: 1px solid silver;
    border-radius: 5px;
}
</style>
