<template>
    <select v-model="selectedCurrency">
        <option
            v-for="currency in currencyList"
            :key="currency"
            :selected="currency === selectedCurrency"
        >
            {{ currency }}
        </option>
    </select>
</template>

<script>
export default {
    name: "CurrencySelect",
    computed: {
        currencyList() {
            return this.$store.state.currencyList;
        },
        selectedCurrency: {
            get() {
                return this.$store.state.selectedCurrency;
            },
            set(val) {
                this.$store.dispatch("changeSelectedCurrency", val);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
