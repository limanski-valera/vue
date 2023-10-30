<template>
  <div>
    <header class="header">
        <h1 class="header__title">Вітаємо на нашому сайті</h1>
        <currency-select class="header__currency"/>
    </header>
    <products-list />
    <my-cart />
  </div>
</template>

<script>
import CurrencySelect from './components/CurrencySelect.vue';
import MyCart from './components/MyCart.vue';
import ProductsList from './components/ProductsList.vue';

export default {
  name: "App",
  components: {
    CurrencySelect,
    ProductsList,
    MyCart
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
    }
    &__currency {
        width: 150px;
    }
}
.section {
    max-width: 600px;
    &__title {
    }
    &__wrapper {
        border: 1px solid black;
        padding: 10px;
    }
    &__list {
        list-style: none;
    }
    &__product {
    }
}
.product {
    display: flex;
    align-items: center;
    gap: 30px;
    &__title {
        flex: 1 1 auto;
    }
    &__price {
    }
    &__button {
    }
}
</style>
