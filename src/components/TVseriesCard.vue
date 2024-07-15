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
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-box{
    min-height: 100px;
    background-color: black;
    border: 1px solid black;
    width: 342px;

    .no-poster{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 342px;
        height: 513px;
    }

    img{
        width: 342px;
        height: 513px;

    }

    .text-card{
        padding: 10px;

        .section-txt{
            margin-bottom: 7px;

            img.flag {
            width: 25px;
            height: 15px;
            }

        }

    }
}
</style>
