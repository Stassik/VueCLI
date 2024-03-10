<template>
    <div class="">
        <h2 class="">Задание 2</h2>
        <ul>
        <BookItem v-for="book in bookList" :key="book.id" :book="book"></BookItem>
        </ul>
    </div>    
</template>
<script>
import BookItem from './BookItem.vue';
export default {
    name:'BookList',
    components:{
        BookItem
    },
    data(){
        return{
            bookList: [
                {name: 'Книга 1',author: 'Автор 1', year: '2020', descr: 'Дополнительное описание'},
                {name: 'Книга 2',author: 'Автор 2', year: '2024', descr: 'Дополнительное описание'},
                {name: 'Книга 3',author: 'Автор 3', year: '2022', descr: 'Дополнительное описание'},
                {name: 'Книга 4',author: 'Автор 4', year: '2021', descr: ''},
            ]
        }
    }
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