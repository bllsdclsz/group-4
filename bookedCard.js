function createBookedMovie(pMovie, pDateTime) {
   bookedMovieList.innerHTML += `<section class="booked-card">
      <img
      src=https://image.tmdb.org/t/p/original${pMovie.poster_path}
      alt="film"
      class=""
      />
      <div class="booked-card-description">
         <div class="booked-description">
            <h2>${pMovie.title}</h2>
            <p>${pMovie.description}</p>
         </div>
         <div>
            <p>${pDateTime}</p>
         </div>
         <button type="button" id="delete-movie">Delete</button>
      </div>
   </section>`;
   const deleteButtons = document.querySelectorAll("#delete-movie");
   deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", (event) => {
         event.preventDefault();
         console.log(pMovie)
         removeEvent(pMovie)
      })
   })
}
