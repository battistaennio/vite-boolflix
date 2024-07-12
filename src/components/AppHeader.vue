<script>
import { store } from '../store';

export default {
    name: "AppHeader",
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <div>
        <input @keyup.enter="$emit('search')" type="text" v-model="store.searchTxt">
        <button @click="$emit('search')">cerca</button>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables.scss" as *;
</style>