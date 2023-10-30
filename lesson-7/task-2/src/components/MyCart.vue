<template>
    <div class="section">
        <h2 class="section__title">Кошик</h2>
        <div v-if="productsInCart.length" class="section__wrapper">
            <ul class="section__list">
                <li
                    v-for="product in productsInCart"
                    :key="product.id"
                    class="section__product product"
                >
                    <h3 class="product__title">{{ product.name }}</h3>
                    <span class="product__price">{{ product.price }}</span>
                    <button class="product__button" @click="refuseTheGoods(product.id)">Відмовитись</button>
                </li>
            </ul>
            <div class="cart-footer">
                <h3 class="cart-footer__title">Разом до оплати</h3>
                <span class="cart-footer__total">{{ totalPrice }}</span>
                <button class="cart-footer__button">Оплатити</button>
            </div>
        </div>
        <template v-else>Ваш кошик порожній</template>
    </div>
</template>

<script>
export default {
    name: "MyCart",
    computed: {
        productsInCart() {
            return this.$store.getters.productsInCart;
        },
        totalPrice() {
            return this.$store.getters.totalPrice;
        },
    },
    methods: {
        refuseTheGoods(id){
            this.$store.dispatch('refuseTheGoods', id)
        }
    }
};
</script>

<style lang="scss" scoped>
.cart-footer {
    display: flex;
    align-items: center;
    gap: 30px;
    &__title {
        flex: 1 1 auto;
    }
    &__total {
    }
    &__button {
    }
}
</style>
