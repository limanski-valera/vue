<template>
    <div>
        <label for="number">Card Number</label>
        <input type="text" id="number" v-model="cardNumber" />
    </div>
    <div>
        <label>
            Expiry Date
            <input type="text" v-model="cardDate" />
        </label>
        <label>
            Secure Code
            <input type="number" v-model="cardCvv" />
        </label>
    </div>
    {{ cardNumber }}
</template>

<script>
export default {
    name: "CreditCardForm",
    props: {
        number: {
            type: String,
        },
        date: {
            type: String,
        },
        cvv: {
            type: Number,
        },
    },
    computed: {
        cardNumber: {
            get(){
                return this.number.replace(/[\D]+/g, '')
            },
            set(val){
                val = val.replace(/[\D]+/g, '')
                this.$emit('update:number', val)
            }
        },
        cardDate: {
            get() {
                return this.date;
            },
            set(val) {
                this.$emit("update:date", val);
            },
        },
        cardCvv: {
            get() {
                return this.cvv;
            },
            set(val) {
                this.$emit("update:cvv", val);
            },
        },
    },
};
</script>

<style lang="css" scoped></style>
