<template>
  <div class="header">
    <department-list
        @departmentSelected="onDepartmentSelected"
        :departments="departmentsData"
        :selected-department-index="selectedDepartmentIndex"
    />
    <products-list
        @productSelected="onProductSelected"
        :products="productsData"
        :selected-product-index="selectedProductIndex"
    />
  </div>

</template>

<script>
import departments from "@/data/department";
import products from "@/data/products";
import DepartmentList from "./components/DepartmentsList.vue";
import ProductsList from "./components/ProductsList.vue";

export default {
    name: "App",
    components: {
        DepartmentList,
        ProductsList,
    },
    data() {
        return {
            departmentsData: departments,
            productsData: products,
            selectedDepartmentIndex: 1,
            selectedProductIndex: null,
        };
    },
    computed: {
        newProductInStore() {
            return [this.selectedDepartmentIndex, this.selectedProductIndex];
        },
    },
    methods: {
        onDepartmentSelected(index) {
            this.selectedDepartmentIndex = index;
        },
        onProductSelected(index) {
            this.selectedProductIndex = index;
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.header {
  display: flex;
  gap: 30px;
}
</style>
