import { reactive } from "vue";

export const store = reactive({

    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=d9509d0b5a3aea54142f22ed37d866b1&language=it_IT&query=",

    movieList: [],

    searchTxt: "",
});