<script>
//import axios
import axios from "axios";
//import store
import { store } from './store';

//import components
import AppSearchBar from './components/AppSearchBar.vue';

export default {
  name: "app",
  components: {
    AppSearchBar,
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
  <AppSearchBar @startRequest="getRequest"/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
