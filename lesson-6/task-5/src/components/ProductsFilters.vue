<template>
    <div class="sidebar">
        <div
            class="section"
            :class="{
                'not-selected': isSellersEmpty,
            }"
        >
            <h2>Продавець</h2>
            <div v-for="(seller, index) in sellersList" :key="index">
                <label>
                    <input
                        @change="changeFilterItem(seller, selectedSellers)"
                        type="checkbox"
                        :checked="seller.checked"
                    />
                    {{ seller.name }}
                </label>
            </div>
        </div>
        <div
            class="section"
            :class="{
                'not-selected': isBrandsEmpty,
            }"
        >
            <h2>Бренд</h2>
            <div>
                <input type="text" placeholder="Пошук" v-model="searchedBrand"/>
            </div>
            <div v-for="brand in searchedBrandsList" :key="brand.id">
                <label>
                    <input
                        @change="changeFilterItem(brand, selectedBrands)"
                        type="checkbox"
                        :checked="brand.checked"
                    />
                    {{ brand.name }}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsFilters",
    props: {
        brandsList: {
            type: Array,
            default: () => [],
        },
        sellersList: {
            type: Array,
            default: () => [],
        },
        selectedSellers: {
            type: Array,
        },
        selectedSellersModifiers: {
            type: Object,
            default: () => ({}),
        },
        selectedBrands: {
            type: Array,
        },
        selectedBrandsModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data(){
        return {
            searchedBrand: null,
        }
    },
    computed: {
        selectedSellersList: {
            get() {
                return this.selectedSellers;
            },
            set(val) {
                this.$emit("update:selectedSellers", val);
            },
        },
        selectedBrandsList: {
            get() {
                return this.selectedBrands;
            },
            set(val) {
                this.$emit("update:selectedBrands", val);
            },
        },
        isSellersEmpty() {
            return this.selectedSellersModifiers.check && !this.selectedSellers.length;
        },
        isBrandsEmpty() {
            return this.selectedBrandsModifiers.check && !this.selectedBrands.length;
        },
        searchedBrandsList(){
            if(this.searchedBrand){
                let newList = this.brandsList.filter(brand => {
                    return brand.name.toLowerCase().includes(this.searchedBrand.toLowerCase())
                })
                return newList
            } else return this.brandsList
        }
    },
    methods: {
        changeFilterItem(item, selectedArray) {
            item.checked = !item.checked;
            if (item.checked) {
                selectedArray.push(item.name);
            } else if (selectedArray.includes(item.name)) {
                const elemIndex = selectedArray.findIndex((elem) => elem === item.name);
                selectedArray.splice(elemIndex, 1);
            }
        },
    },
};
</script>

<style lang="css" scoped>
.sidebar {
    padding: 15px;
    border: 1px solid black;
    border-radius: 20px;
}
.section {
    border: 1px solid transparent;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 20px;
}
.not-selected {
    border-color: green;
}
</style>
