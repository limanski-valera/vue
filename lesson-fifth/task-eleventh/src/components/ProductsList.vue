<template>
    <div class="list">
        <products-list-item
            @click="onProductClick(index)"
            v-for="(product, index) in products"
            :key="product"
            :name="product"
            :class="{
                'selected': index === selectedProductIndex
            }"
        />
    </div>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";
export default {
    components: { ProductsListItem },
    name: "ProductsList",
    props: {
        products: {
            type: Array,
            default: () => [],
        },
        selectedProductIndex: {
            type: Number,
            default: null,
        },
    },
    methods: {
        onProductClick(index) {
            this.$emit("productSelected", index);
        },
    },
};
</script>

<style lang="scss" scoped></style>
