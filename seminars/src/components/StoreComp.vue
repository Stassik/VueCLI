<template>
    <div class="store">
        <h2>Корзина покупок</h2>
        <label for="name">Название</label>
        <input type="text" name="название" id="name" v-model="item.name">
        <label for="name">Цена</label>
        <input type="text" name="цена" id="price" v-model="item.price">
        <label for="name">Артикул</label>
        <input type="number" name="артикул" id="id" v-model="item.id">
        <button v-on:click="addItemToCart(item)">Добавить в корзину</button>
        <ul>
            <li v-for="item in getCart" :key="item.id">
            
                Артикул: {{ item.id }}<br>
                Название: {{ item.name }}<br>
                Цена: {{ item.price }}
            </li>
        </ul>
        <p>Итого товаров в корзине: {{ totalItems }}</p>
        <p><strong>Итого:</strong> {{ totalPrice }}</p>
    </div>

</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
    data(){
        return{
            item: {
                name:'',
                id: 0,
                price: 0
            }    
        }
    },
    computed: {
            ...mapState(['count']),
            ...mapGetters(['getCart', 'totalItems', 'totalPrice'])

        },
        methods: {
            ...mapMutations(['ADD_ITEM_TO_CART']),
            addItemToCart(newItem){
                this.ADD_ITEM_TO_CART(newItem)
            },
            
        }
}
</script>
<style>
    
</style>