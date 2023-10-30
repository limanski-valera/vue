import { createStore } from "vuex";

const DOLLAR_RATE = 38;

export default createStore({
    state() {
        return {
            productsList: [
                { id: 1, name: "Хліб", grnPrice: 24 },
                { id: 2, name: "Молоко", grnPrice: 31 },
                { id: 3, name: "Ковбаса", grnPrice: 350 },
                { id: 4, name: "Шовдарь", grnPrice: 950 },
                { id: 5, name: "Пікниця", grnPrice: 210 },
                { id: 6, name: "Вода", grnPrice: 15 },
                { id: 7, name: "Ноутбук", grnPrice: 59999 },
                { id: 8, name: "Комплект моніторів", grnPrice: 25000 },
                { id: 9, name: "Інвертор", grnPrice: 13000 },
                { id: 10, name: "Акумулятор", grnPrice: 11000 },
            ],
            productsInCart: [],
            currencyList: ["uah", "usd"],
            selectedCurrency: "uah",
        };
    },
    getters: {
        productsShowcase(state) {
            let showcase = [...state.productsList];
            showcase.map((product) => {
                if (state.selectedCurrency === "uah") {
                    product.price = `${product.grnPrice} грн.`;
                } else if (state.selectedCurrency === "usd") {
                    product.price = product.grnPrice / DOLLAR_RATE;
                    product.price = `${product.price.toFixed(2)} $`;
                }
                return product;
            });
            return showcase;
        },
        productsInCart(state) {
            let productsList = [];
            if (state.productsInCart.length) {
                productsList = [...state.productsInCart];
                productsList.map((product) => {
                    if (state.selectedCurrency === "uah") {
                        product.price = `${product.grnPrice} грн.`;
                    } else if (state.selectedCurrency === "usd") {
                        product.price = product.grnPrice / DOLLAR_RATE;
                        product.price = `${product.price.toFixed(2)} $`;
                    }
                });
            }
            return productsList;
        },
        totalPrice(state) {
            let total = 0;
            if (state.productsInCart.length) {
                state.productsInCart.forEach((product) => {
                    total += product.grnPrice;
                });
            }
            if (state.selectedCurrency === "uah") {
                total = `${total} грн.`;
            } else if (state.selectedCurrency === "usd") {
                total = `${(total / DOLLAR_RATE).toFixed(2)} $`;
            }
            return total;
        },
    },
    mutations: {
        changeSelectedCurrency(state, val) {
            state.selectedCurrency = val;
        },
        moveProductToCart(state, productId) {
          const product = state.productsList.find(item => item.id === productId)
          state.productsInCart.push(product)
          state.productsList = state.productsList.filter(item => item.id !== productId)
        },
        refuseTheGoods(state, productId){
          const product = state.productsInCart.find(item => item.id === productId)
          state.productsList.push(product)
          state.productsInCart = state.productsInCart.filter(item => item.id !== productId)
        }
    },
    actions: {
        changeSelectedCurrency(context, val) {
            context.commit("changeSelectedCurrency", val);
        },
        moveProductToCart(context, productId) {
            context.commit("moveProductToCart", productId);
        },
        refuseTheGoods(context, productId){
          context.commit('refuseTheGoods', productId)
        }
    },
    modules: {},
});
