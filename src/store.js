import { reactive } from "vue";

export const store = reactive({
    searchTxt: "",

    //film
    apiURLfilm: "https://api.themoviedb.org/3/search/movie?api_key=d9509d0b5a3aea54142f22ed37d866b1&language=it_IT&query=",
    movieList: [],

    //serie tv
    apiURLtvSeries: "https://api.themoviedb.org/3/search/tv?api_key=d9509d0b5a3aea54142f22ed37d866b1&language=it_IT&query=",
    TVseriesList: [],

});

export function showFlag(lingua) {
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

export function voteToNumber(voto) {
    let convert = parseInt(voto);
    let number = Math.round((convert - 1) * (5 - 1) / (10 - 1) + 1);
    return number
}