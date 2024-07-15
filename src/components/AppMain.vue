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
        <h2 id="main-title" v-if="store.movieList.length === 0 && store.TVseriesList.length === 0">Cosa hai voglia di guardare stasera?</h2>

        <h2 v-if="store.movieList.length > 0">Films:</h2>
        <div class="cards-container">
            <FilmCard v-for="(film, i) in store.movieList" :key="i" :details="film"/>
        </div>

        <h2 v-if="store.TVseriesList.length > 0">TV Series:</h2>
        <div class="cards-container">
            <TVseriesCard v-for="series in store.TVseriesList" :info="series"/>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables.scss" as *;

h2{
    #main-title{
        text-align: center;
        margin: 30px;
    }
}

.cards-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>