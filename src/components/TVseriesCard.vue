<script>
import { store, showFlag, voteToNumber } from '../store';

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
        showFlag,
        voteToNumber
    }
}
</script>

<template>
    <div class="card-box">
        <img v-if="info.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" :alt="info.title">
        <span v-else class="no-poster">copertina non disponibile</span>
        <div class="text-card">
            <div class="section-txt">
                <strong>Titolo:</strong> <span>{{ info.name }}</span>
            </div>
            <div class="section-txt">
                <strong>Titolo originale:</strong> <span>{{ info.original_name }}</span>
            </div>
            <div class="section-txt">
                <strong>Lingua: </strong>
                <img class="flag" v-if="flagUrl" :src="flagUrl">
                <span v-else>{{info.original_language}}</span>
            </div>
            <div class="section-txt">
                <strong>Voto: </strong> <font-awesome-icon v-for="n in voteToNumber(info.vote_average)" :key="n" icon="star" />
            </div>
            <div class="section-txt">
                <strong>Overview: </strong> <span>{{ info.overview }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss"
</style>
