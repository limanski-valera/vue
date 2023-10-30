<template>
    <div>
        <label
            >Card Number
            <input type="text" v-model="cardNumberValue" maxlength="19"/>
        </label>
    </div>
    <div>
        <label
            >Expiry Date
            <input type="text" v-model="cardDateValue" maxlength="5" />
        </label>
        <label
            >Secure Code
            <input type="number" v-model="cvvValue" />
        </label>
    </div>
</template>

<script>
export default {
    name: "CreditCardForm",
    props: {
        cardNumber: {
            type: String,
        },
        cardDate: {
            type: String,
        },
        cvv: {
            type: Number,
        },
    },
    computed: {
        cardNumberValue: {
            get() {
                let value = this.cardNumber;
                if (value) {
                    value = this.formattedNumber(value);
                }
                return value;
            },
            set(value) {
                value = value.replace(/\D/g, "");
                this.$emit("update:cardNumber", value);
            },
        },
        cardDateValue: {
            get(){
                return this.cardDate
            },
            set(value){
                this.$emit('update:cardDate', value)
            }
        },
        cvvValue: {
            get(){
                return this.cvv
            },
            set(value){
                this.$emit('update:cvv', value)
            }
        },
    },
    methods: {
        formattedNumber(string) {
            return string.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        },
    },
};
</script>

<style lang="scss" scoped></style>
