<template>
    <footer class="footer">
        <div class="footer__container container center">
            <div class="footer__item">
                <div class="footer__descr">
                    <img src="../assets/Logo.png" alt="logo" class="footer__logo logo">
                    <p class="footer__text text">It is a long established fact that a reader will be distracted
                        lookings.
                    </p>
                    <div class="footer__logo-box">
                        <svg class="footer__logo-icon logo-icon_tw">
                            <use xlink:href="../assets/sprite.svg#tw_icon"></use>
                        </svg>
                        <svg class="footer__logo-icon logo-icon_ln">
                            <use xlink:href="../assets/sprite.svg#ln_icon"></use>
                        </svg>
                    </div>

                </div>
                <div class="">
                    <h3 class="footer__title subtitle">Pages</h3>
                    <NavComp classEl="footer"></NavComp>
                </div>
            </div>
            <div class="footer__item">
                <div class="footer__contacts">
                    <h3 class="footer__title subtitle">Contact</h3>
                    <ul class="footer__contacts-list list">
                        <li class="footer__contacts-item">55 East Birchwood Ave.<br>Brooklyn, New York 11201</li>
                        <li class="footer__contacts-item">contact@interno.com</li>
                        <li class="footer__contacts-item">(123) 456 - 7890</li>
                    </ul>
                </div>

            </div>

        </div>
    </footer>
  </template>
  
  <script>
  import NavComp from './NavComp.vue';
  
  export default {
    name: 'FooterComp',
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