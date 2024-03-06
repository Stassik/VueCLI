<template>
    <header class="header">
        <div class="header__container container center">
            <img src="../assets/Logo.png" alt="logo" class="header__logo logo">
            <NavComp classEl="header"></NavComp>
        </div>
    </header>
  </template>
  
  <script>
  import NavComp from './NavComp.vue';

  export default {
    name: 'HeaderComp',
    components: {
    NavComp,
  },
    data(){
      return{
      }
    }
   
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  
  </style>
  