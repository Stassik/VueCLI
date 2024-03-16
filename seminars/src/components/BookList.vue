<template>
    <div class="">
        <h2 class="">Задание 2</h2>
        <ul>
        <BookItem v-for="book in getBookList" :key="book.id" :book="book"></BookItem>
        </ul>
    </div>    
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import BookItem from './BookItem.vue';
export default {
    name:'BookList',
    components:{
        BookItem
    },
    data(){
        return{
        }
    },

    computed: {
    ...mapState(['bookList']),
    ...mapGetters(['getBookList'])
  },
  
}
</script>
<style>
    ul{
        margin: 0 auto;
        max-width: 900px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 30px;
        list-style: none;
    }
</style>