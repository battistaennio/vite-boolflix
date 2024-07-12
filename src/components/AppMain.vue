<script>
import { store } from '../store';
import FilmCard from './FilmCard.vue';
import TVseriesCard from './TVseriesCard.vue';

export default {
    name: "AppMain",
    components: {
        FilmCard,
        TVseriesCard,
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
        <h2 v-if="store.movieList.length === 0 && store.TVseriesList.length === 0">Cosa hai voglia di guardare stasera?</h2>

        <h2 v-if="store.movieList.length > 0">Films:</h2>
        <FilmCard v-for="(film, i) in store.movieList" :key="i" :details="film"/>

        <h2 v-if="store.TVseriesList.length > 0">TV Series:</h2>
        <TVseriesCard v-for="series in store.TVseriesList" :info="series"/>
    </section>
</template>

<style scoped lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables.scss" as *;
</style>