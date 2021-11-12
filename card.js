function createMovieCard(pMovie) {
   movieList.innerHTML += `<section class="card opacity-transition">
   <img
   src=https://image.tmdb.org/t/p/original${pMovie.poster_path}
   alt="film"
   class="opacity-transition"
   />
   <div class="card-description opacity-transition">
   <div class="description">
   <h3>${pMovie.title}</h3>
   <p>${pMovie.overview}</p>
   <form id="add_event">
      <input
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      required
      />
      <button type="submit" id="card-button">Book Now</button>
   </form>
   
   </div>
   </div>
   </section>`;
   const currentDateTime = document.querySelector("#meeting-time");
   const addMovieForm = document.getElementById("add_event");
   addMovieForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addEvent(currentDateTime.value, "02:00", pMovie.title);
   });
}
