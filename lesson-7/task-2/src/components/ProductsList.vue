<template>
    <div class="section">
        <h2 class="section__title">Список товарів</h2>
        <div class="section__wrapper">
            <ul class="section__list">
                <li
                    v-for="product in productsShowcase"
                    :key="product.id"
                    class="section__product product"
                >
                    <h3 class="product__title">{{ product.name }}</h3>
                    <span class="product__price">{{ product.price }}</span>
                    <button class="product__button" @click="moveToCart(product.id)">Купити</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsList",
    computed: {
        productsShowcase() {
            return this.$store.getters.productsShowcase;
        },
    },
    methods: {
        moveToCart(id) {
            this.$store.dispatch("moveProductToCart", id);
        },
    },
};
</script>

<style lang="scss" scoped></style>
