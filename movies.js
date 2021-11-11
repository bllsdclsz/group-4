let movies;
let movieList = document.querySelector(".movie_list");

fetch("https://api.themoviedb.org/3/movie/popular?api_key=aadc24f1dd4399ac50c5f4c872dff158")
   .then((response) => response.json())
   .then((data) => {
      console.log(data.results);
      movies = data.results;
   })
   .then(() => {
      for (let movie of movies) {
         createMovieCard(movie);
      }
   })
   .catch((err) => {
      console.error(err);
   });


   let dataLocation = document.querySelector("[data-location='Zurich']")



