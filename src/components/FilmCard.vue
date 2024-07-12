<script>
import { store, showFlag } from '../store';

export default {
    name: "FilmCard",
    props: { details: Object },

    computed: {
        flagUrl() {
            return this.showFlag(this.details.original_language);
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        showFlag
    }
}
</script>

<template>
    <div>
        <img v-if="details.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" :alt="details.title">
        <span v-else>copertina non disponibile</span>
        <span>Titolo: {{ details.title }}</span>
        <span>Titolo originale: {{ details.original_title }}</span>
        <span>Lingua:</span>
        <img class="flag" v-if="flagUrl" :src="flagUrl">
        <span v-else>{{details.original_language}}</span>
        <span>Voto: {{ details.vote_average }}</span>
    </div>
</template>

<style scoped lang="scss">
div {
    min-height: 100px;
    background-color: aqua;
    border: 1px solid black;

    span {
        display: block;
    }

    img.flag {
        width: 25px;
        height: 15px;
    }
}
</style>
