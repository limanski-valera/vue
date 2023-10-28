<template>
    <credit-card-form
        v-model:number="creditCardData.number"
        v-model:date="creditCardData.date"
        v-model:cvv="creditCardData.cvv"
    />
</template>

<script>
import CreditCardForm from "@/components/CreditCardForm";

export default {
    name: "App",
    components: {
        CreditCardForm,
    },
    data() {
        return {
            creditCardData: {
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
