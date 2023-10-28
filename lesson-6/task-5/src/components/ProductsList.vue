<template>
    <div class="items">
        <a v-for="product in products" :href="product.link" class="item" :key="product.id">
            <div class="image-wrapper">
                <img :src="product.image" :alt="product.name" />
            </div>
            <h3 class="title">{{ product.name }}</h3>
            <div class="price">{{ product.price }}</div>
        </a>
    </div>
</template>

<script>
export default {
    name: "ProductsList",
    props: {
        products: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="css" scoped>
.items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
.item {
    display: block;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
}
.image-wrapper {
    padding-bottom: 60%;
    position: relative;
    margin-bottom: 20px;
}
img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
.title {
    font-size: 20px;
    margin-bottom: 20px;
}
.price {
    color: red;
    font-size: 24px;
}
</style>
