<template>
  <div id="news" class="container-fluid">
      <div style="background-color:#0390fc">
        <h2 class="title text-center font-Helvetica" >Noticias</h2>
      </div>
    <div class="row mt-md-5 mt-sm-5 mt-xs-5">
      <!-- Inicio Noticia 1 -->
      <div class="col-lg-6 col-xs-12" v-for="(movie, index) of movies"
          :key="index">
        <div
          class="d-flex justify-content-center align-items-center"
          
        >
          <div class="p-1">
            <img :src="movie.urlToImage" alt="Imagen de la noticia">
          </div>

          <div class="p-2">
            <h3 class="card-title">{{movie.title}}</h3>
            <hr>
            <p>
              {{movie.description}}
            </p>
          </div>
        </div>

        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
          <a
            :href="movie.url"
            type="button"
            class="btn btn-light"
            target="_blank"
            >Ver más</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin Noticia 1 -->
</template>


<script>
import axios from "axios";

export default {
  name: "SectionApi",
  data() {
    return {
      movies: null,
    };
  },
  mounted() {
    axios
      .get("http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=9a1461f61fed442197db42acc58ae209")
      .then((response) => {
        this.movies = response.data.articles.slice(0, 4);
        console.log(this.movies);
      });
  },
};
</script>


<style scoped>

    div {

    background-color: #078bf0; 
    }

    img {
      width: 150px;
      height: 300px;
      object-fit: cover;
      }
</style>




