<template>
    <div>
        <p>{{ movie.title }}</p>
        <ul  v-if="movie.showDetails">
            <li>{{ movie.director }}</li>
            <li>{{ movie.year }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'MovieInfo',
    props: {
        movie: Object
    }
}
</script>
<style>

</style>