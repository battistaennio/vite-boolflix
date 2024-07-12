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
    <header>
        <h1>boolflix</h1>
        <div>
            <input @keyup.enter="$emit('search')" type="text" v-model="store.searchTxt" placeholder="Inserisci il titolo">
            <button @click="$emit('search')">cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../style/general.scss" as *;
@use "../style/partials/variables.scss" as *;

header{
    background-color: $secondary-background-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;


    h1{
        color: $secondary-txt-color;
        text-transform: uppercase;
    }

    input{
       padding: 5px;
       font-size: 15px;
       border: none;
       border-radius: 5px;
    }

    button{
        padding: 2.5px 10px;
        font-size: 15px;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: $secondary-txt-color;
        cursor: pointer;
    }
}
</style>