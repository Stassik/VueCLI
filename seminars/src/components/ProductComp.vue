<template>
    <div class="product">
      <h2>Список товаров</h2>
      <button v-on:click="sortByPrice(false)">По убыванию</button>
      <button v-on:click="sortByPrice(true)">По возрастанию</button>
      <div class="product__item"  v-for="product in products" :key="product.id" >
      <h3>{{ product.name }}</h3>
      <p>Цена: {{ product.price }}</p>
      <p>{{ product.descr }}</p>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ProductComp',
    data(){
      return{
        products: [{
            id: 1,
            name: 'Товар 1',
            descr: 'Описание 1',
            price: 100
        },
        {
            id: 2,
            name: 'Товар 2',
            descr: 'Описание 2',
            price: 50
        },
        {
            id: 3,
            name: 'Товар 3',
            descr: 'Описание 3',
            price: 200
        },
        ]
      }
      
    },
    methods: {
      sortByPrice(ascending) {
        if (ascending) {
            this.products.sort((a, b) => a.price - b.price);
        } else {
            this.products.sort((a, b) => b.price - a.price);
        }
      }
      
    }
    
  }
  </script>
  
 
  <style scoped>
    .product__item {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #eee;
    }
  </style>
  