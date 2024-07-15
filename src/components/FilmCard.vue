<script>
import { store, showFlag, voteToNumber } from '../store';

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
        showFlag,
        voteToNumber
    }
}
</script>

<template>
    <div class="card-box">
        <img v-if="details.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342/${details.poster_path}`" :alt="details.title">
        <span v-else class="no-poster">copertina non disponibile</span>
        <div class="text-card">
            <div class="section-txt">
                <strong>Titolo:</strong> <span>{{ details.title }}</span>
            </div>
            <div class="section-txt">
                <strong>Titolo originale:</strong> <span>{{ details.original_title }}</span>
            </div>
            <div class="section-txt">
                <strong>Lingua: </strong>
                <img class="flag" v-if="flagUrl" :src="flagUrl">
                <span v-else>{{details.original_language}}</span>
            </div>
            <div class="section-txt">
                <strong>Voto: </strong> <font-awesome-icon v-for="n in voteToNumber(details.vote_average)" :key="n" icon="star" />
            </div>
            <div class="section-txt">
                <strong>Overview: </strong> <span>{{ details.overview }}</span>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/mixins" as *;

.card-box{
    background-color: black;
    border: 1px solid black;
    @include cardHeightWidth;

    &:hover{
        img:first-child{
            display: none;
        }

        .text-card{
            display: block;
        }
    }

    .no-poster{
        display: flex;
        align-items: center;
        justify-content: center;
        @include cardHeightWidth;
        &:hover{
            display: none;

            .text-card{
                display: block;
            }
        }
    }

    img{
        @include cardHeightWidth;
    }

    .text-card{
        padding: 10px;
        display: none;

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
