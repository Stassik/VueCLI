<template>
    <div class="">
        <h2>Задание 1</h2>
        <ul>
            <UserItem v-for="user in userList" :key="user.id" :user="user"></UserItem>
        </ul>
    </div>    
</template>
<script>
import UserItem from './UserItem.vue';

export default {
    name:'UserList',
    components: {
        UserItem
    },
    data(){
        return{
            userList: [
            {firstName: 'Имя 1', lastName: 'Фамилия 1', email: 'почта1@почта.ru'},
            {firstName: 'Имя 2', lastName: 'Фамилия 2', email: 'почта2@почта.ru'},
            {firstName: 'Имя 3', lastName: 'Фамилия 3', email: 'почта3@почта.ru'},
            {firstName: 'Имя 4', lastName: 'Фамилия 4', email: 'почта4@почта.ru'},
            {firstName: 'Имя 5', lastName: 'Фамилия 5', email: 'почта5@почта.ru'}

            ],
        }
    }
}
</script>
<style>
    
</style>