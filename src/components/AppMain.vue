<script>
import { store } from '../store';
import FilmCard from './FilmCard.vue';

export default {
    name: "AppMain",
    components: {
        FilmCard,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <section>
        <h2>Film:</h2>
        <FilmCard v-for="(film, i) in store.movieList" :key="i" :details="film"/>

        <h2>Serie TV:</h2>
    </section>
</template>

<style scoped lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables.scss" as *;
</style>