<template>
    <div class="product">
        <h3>{{ product.name }}</h3>
        <p> {{ formattedPrice }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>
<script>
export default {
    name: "ProductDetails",
    data(){
        return{
            product: {name: 'Футболка', price: 30, available: false},
        }
    },
    computed: {
        formattedPrice(){
            return "$" + this.product.price; 
        }
    },
}
</script>
<style>


</style>