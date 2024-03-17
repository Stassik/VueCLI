<template>
    <div class="notfound">
        <HeaderComp></HeaderComp>
        <main class="main container center">
            <h1 class="title">Извините, страница не найдена!</h1>
        </main>
        
        <FooterComp></FooterComp> 
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';

export default {
    name: 'NotFoundPage',
    components: {
        HeaderComp,
        FooterComp,
    },
}
</script>
<style>
    
</style>