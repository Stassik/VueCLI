<template>
    <li>
        <p class="">{{user.firstName}}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.email }}</p>
    </li>
</template>
<script>
export default {
    name: 'UserItem',
    props:{
        user: Object
    }
}
</script>
<style>
    
</style>