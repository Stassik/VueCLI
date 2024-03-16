<template>
  <div id="app">
    <ProductDetails></ProductDetails>
    <UserList></UserList>
    <BookList></BookList>
    <MovieList></MovieList>
    <CounterComp></CounterComp>
    <StoreComp></StoreComp>
    
    
  </div>
</template>

<script>

import ProductDetails from './components/ProductDetails.vue';
import UserList from './components/UserList.vue';
import BookList from './components/BookList.vue';
import MovieList from './components/MovieList.vue';
import CounterComp from './components/CounterComp.vue';
import StoreComp from './components/StoreComp.vue';

export default {
  name: 'App',
  components: {
    ProductDetails,
    UserList,
    BookList,
    MovieList,
    CounterComp,
    StoreComp
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
