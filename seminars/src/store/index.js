import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bookList: [
            { name: 'Книга 1', author: 'Автор 1', year: '2020', descr: 'Дополнительное описание' },
            { name: 'Книга 2', author: 'Автор 2', year: '2024', descr: 'Дополнительное описание' },
            { name: 'Книга 3', author: 'Автор 3', year: '2022', descr: 'Дополнительное описание' },
            { name: 'Книга 4', author: 'Автор 4', year: '2021', descr: '' },
        ],
        count: 0,
        cartItems: [
            { id: 1, name: 'Картошка', price: 95 },
            { id: 2, name: 'Маркошка', price: 80 },
            { id: 3, name: 'Рыбка', price: 350 },
            { id: 4, name: 'Кебаб', price: 100 },
            { id: 5, name: 'Кутаб', price: 50 },
        ]
    },
    mutations: {
        INCREMENT(state) {
            state.count = state.count + 1;
        },
        DECREMENT(state) {
            state.count = state.count - 1;
        },
        ADD_ITEM_TO_CART(state, newItem) {
            state.cartItems.push(newItem);
        }
    },
    // actions: {

    // },
    getters: {
        getBookList: (state) => state.bookList,
        getCart: (state) => state.cartItems,
        totalItems: (state) => state.cartItems.length,
        totalPrice: (state) => {
            let totalPrice = 0;
            state.cartItems.forEach(item => {
                totalPrice += Number(item.price);

            });
            return totalPrice;
        }

    },
    // modules: {

    // }
});

