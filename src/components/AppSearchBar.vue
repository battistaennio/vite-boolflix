<script>
import { store } from '../store';

export default {
    name: "AppSearchBar",
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <input type="text" v-model="store.searchTxt">
    <button @click="$emit('startRequest')">cerca</button>

    <div v-for="(film, i) in store.movieList" :key="i">
        <span>{{ film.title }}</span>
        <span>{{ film.original_title }}</span>
        <span>{{ film.original_language }}</span>
        <span>{{ film.vote_average }}</span>

    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables.scss" as *;

div{
    min-height: 100px;
    background-color: aqua;
    border: 1px solid black;

    span{
        display: block;
    }
}
</style>