<template>
  <div id="app">
    <ProductDetails></ProductDetails>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome"/>
    <SeminarTask1/>
    <ProductComp/> -->
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

// import HelloWorld from './components/HelloWorld.vue';
// import SeminarTask1 from "./components/SeminarTask1.vue";
// import ProductComp from './components/ProductComp.vue';

export default {
  name: 'App',
  components: {
    ProductDetails,
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
