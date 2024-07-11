<script>

export default {
    name: "FilmCard",
    props: {details : Object}
}
</script>

<template>
    <div>
        <span>Titolo: {{ details.title }}</span>
        <span>Titolo originale: {{ details.original_title }}</span>
        <span>Lingua: {{ details.original_language }}</span>
        <span>Voto: {{ details.vote_average }}</span>
    </div>
</template>

<style scoped lang="scss">
div{
    min-height: 100px;
    background-color: aqua;
    border: 1px solid black;

    span{
        display: block;
    }
}

</style>