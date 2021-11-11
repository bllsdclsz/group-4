function createMovieCard(pMovie) {
   movieList.innerHTML += `<section class="card opacity-transition">
   <img
   src=https://image.tmdb.org/t/p/original${pMovie.poster_path}
   alt="film"
   class="opacity-transition"
   />
   <div class="card-description opacity-transition">
   <div class="description">
   <h2>${pMovie.title}</h2>
   <p>${pMovie.overview}</p>
   <form id="add_event">
      <input
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      required
      />
      <button type="submit">Book Now</button>
   </form>
   
   </div>
   </div>
   </section>`;
   const currentDateTime = document.querySelector("#meeting-time");
   const addMovieForm = document.getElementById("add_event");
   addMovieForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addEvent(currentDateTime.value, "01:00");
   });
}
