<script>
//import axios
import axios from "axios";
//import store
import { store } from './store';

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
    getRequest() {
      console.log("click");
      let endPoint = store.apiURL;

      if(store.searchTxt !== ""){
        endPoint += `${store.searchTxt}`
      }
      axios.get(endPoint)
        .then(response => {
          store.movieList = response.data.results;
          console.log(store.movieList);
        })
        .catch(error => {
          console.log(error);
        })
    },

  },
  created() {
    this.getRequest();
  }
}
</script>

<template>
  <AppHeader @search="getRequest"/>
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
