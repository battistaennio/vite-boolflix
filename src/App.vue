<script>
//import axios
import axios from "axios";
//import store
import { store } from './store';
//import fontawesome


//import components
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getFilm() {
      let endPoint = store.apiURLfilm;

      if(store.searchTxt !== ""){
        endPoint += `${store.searchTxt}`
      }
      axios.get(endPoint)
        .then(response => {
          store.movieList = response.data.results;
        })
        .catch(error => {
          console.log(error);
        })
    },

    getTVseries(){
      let endPoint = store.apiURLtvSeries;

    if(store.searchTxt !== ""){
        endPoint += `${store.searchTxt}`
    }
    axios.get(endPoint)
        .then(response => {
          store.TVseriesList = response.data.results;
      })
        .catch(error => {
          console.log(error);
      })

    },

    getRequests(){
      this.getFilm(),
      this.getTVseries()
    }


  },
  created() {
    this.getRequests();
  }
}
</script>

<template>
  <AppHeader @search="getRequests"/>
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
