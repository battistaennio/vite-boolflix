<script>
export default {
    name: "TVseriesCard",
    props: { info: Object },
    computed: {
        flagUrl() {
            return this.showFlag(this.info.original_language);
        }
    },
    methods: {
        showFlag(lingua) {
            if (lingua === "en") {
                return "https://media.istockphoto.com/id/479199262/it/foto/full-frame-immagine-di-bandiera-inghilterra.jpg?s=612x612&w=0&k=20&c=0LWTVtBte4YM9tNO4omcnLP8HE-cRU54CXCFRZF4r3U=";
            } else if (lingua === "es") {
                return "https://italflag.it/wp-content/uploads/2021/11/Bandiera-Spagna.jpg";
            } else if (lingua === "it") {
                return "https://img.freepik.com/free-vector/illustration-italy-flag_53876-27098.jpg";
            } else if (lingua === "fr") {
                return "https://media.istockphoto.com/id/657672390/it/vettoriale/bandiera-della-francia.jpg?s=612x612&w=0&k=20&c=jGlTdnq3qX-TORNjeq8UnraF4cQqkojaAFvZw8HCGoM=";
            } else {
                return "";
            }
        }
    }
}
</script>

<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" :alt="info.title">
        <span>Titolo: {{ info.name }}</span>
        <span>Titolo originale: {{ info.original_name }}</span>
        <span>Lingua:</span>
        <img class="flag" v-if="flagUrl" :src="flagUrl" alt="Flag">
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
