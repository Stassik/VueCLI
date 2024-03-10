<template>
    <li>
        <p>Название: {{book.name}}</p>
        <p>Автор: {{ book.author }}</p>
        <p>Год издания: {{ book.year }}</p>
        <button v-on:click="toggleDetails()">Показать еще...</button>
        <div v-if="availability">
            <p v-if="book.descr">Дополнительная информация: {{ book.descr }}</p>
            <p v-else>Нет дополнительной информации</p>
        </div>
       
    </li>
</template>
<script>
export default {
    name:'BookItem',
    props: {
        book: Object,
    },
    data(){
        return{
            availability: false,
        }
    },
    methods: {
        toggleDetails(){
            this.availability = !this.availability;
        }
    },
   
}
</script>
<style>
li{
    width: calc((100% - 30px) / 2);
}
</style>