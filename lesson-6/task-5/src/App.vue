<template>
    <div class="wrapper">
        <products-filters
            :brandsList="brandsList"
            :sellersList="sellersList"
            v-model:selected-sellers.check="selectedSellers"
            v-model:selected-brands.check="selectedBrands"
        />
        <products-list class="items" :products="filteredProducts" />
    </div>
</template>

<script>
import { productsArray } from "@/data/data";
import ProductsFilters from "./components/ProductsFilters.vue";
import ProductsList from "./components/ProductsList.vue";
export default {
    name: "App",
    components: { ProductsFilters, ProductsList },
    data() {
        return {
            products: productsArray,
            selectedSellers: [],
            selectedBrands: [],
        };
    },
    computed: {
        brandsList() {
            let brands = new Set();

            this.products.forEach((elem) => {
                brands.add(elem.brand);
            });

            let i = 0;
            brands = Array.from(brands, function (elem) {
                return { name: elem, checked: false, id: i++ };
            });

            return brands;
        },
        sellersList() {
            let sellers = new Set();
            this.products.forEach((elem) => {
                sellers.add(elem.seller);
            });

            let i = 0;
            sellers = Array.from(sellers, function (elem) {
                return { name: elem, checked: false, id: i++ };
            });
            return sellers;
        },
        filteredProducts() {
            if (this.selectedBrands.length || this.selectedSellers.length) {
                let newProducts = [];
                if (this.selectedBrands.length && this.selectedSellers.length) {
                    newProducts = this.products.filter((product) => {
                        return (
                            this.selectedSellers.includes(product.seller) &&
                            this.selectedBrands.includes(product.brand)
                        );
                    });
                } else {
                    if (this.selectedSellers.length) {
                        newProducts = this.products.filter((product) => {
                            return this.selectedSellers.includes(product.seller);
                        });
                    }
                    if (this.selectedBrands.length) {
                        newProducts = this.products.filter((product) => {
                            return this.selectedBrands.includes(product.brand);
                        });
                    }
                }
                return newProducts;
            } else return this.products;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}
.wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
.items {
    flex: 1 1 auto;
}
a {
    color: inherit;
    text-decoration: none;
    transition: transform 0.3s;
}
a:hover {
    transform: scale(1.02);
}
</style>
