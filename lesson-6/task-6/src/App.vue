<template>
    <credit-card-form v-model:card-number="cardData.number" />
    {{ cardData.number }}
</template>

<script>
import CreditCardForm from "./components/CreditCardForm";

export default {
    name: "App",
    components: {
        CreditCardForm,
    },
    data() {
        return {
            cardData: {
                number: null,
                date: null,
                cvv: null,
            },
        };
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
</style>
