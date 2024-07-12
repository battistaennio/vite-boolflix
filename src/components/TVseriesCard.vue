<script>
import { store, showFlag } from '../store';

export default {
    name: "TVseriesCard",
    props: { info: Object },
    computed: {
        flagUrl() {
            return this.showFlag(this.info.original_language);
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
        <img v-if="info.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" :alt="info.title">
        <span v-else>copertina non disponibile</span>
        <span>Titolo: {{ info.name }}</span>
        <span>Titolo originale: {{ info.original_name }}</span>
        <span>Lingua:</span>
        <img class="flag" v-if="flagUrl" :src="flagUrl">
        <span v-else>{{info.original_language}}</span>
        <span>Voto: {{ info.vote_average }}</span>
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
