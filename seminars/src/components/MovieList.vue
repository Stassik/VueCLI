<template>
    <div>
        <h2>Задание 3</h2>
        <ul>
            <li v-for="movie in movies" :key="movie.id" v-on:click="show(movie)">
                <MovieInfo :movie="movie"></MovieInfo>
            </li>
        </ul>
    </div>


</template>
<script>
import MovieInfo from './MovieInfo.vue';

export default {
    name: 'MovieList',
    components: {
        MovieInfo
    },
    data(){
        return{
            movies: [
                { id: 1, title: 'Фильм 1', director: 'Режиссер 1', year: 2020, showDetails: false },
                { id: 2, title: 'Фильм 2', director: 'Режиссер 2', year: 2019, showDetails: false },
                { id: 3, title: 'Фильм 3', director: 'Режиссер 3', year: 2021, showDetails: false }
            ],
        }
    },
    methods: {
        show(movie){
            movie.showDetails = !movie.showDetails;
        }
    }
}
</script>
<style>
li:hover {
    cursor: pointer;
}
</style>