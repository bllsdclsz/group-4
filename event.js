let timeZone = new Date().toJSON();
let currentDateTime = document.getElementById("meeting-time");
currentDateTime.value = timeZone
   .split("")
   .splice(0, timeZone.length - 8)
   .join("");

console.log(timeZone);
console.log(timeZone.split("").slice(0, timeZone.lastIndexOf(":")).join(""));
console.log(currentDateTime.value);
let image = document.querySelector("img");

let movies;
const addMovieButton = document.getElementById("add_event");
let somthing = [1, 2, 3, 4];
let movieList = document.querySelector(".movie_list");

fetch("https://api.themoviedb.org/3/movie/popular?api_key=aadc24f1dd4399ac50c5f4c872dff158")
   .then((response) => response.json())
   .then((data) => {
      console.log(data.results);
      movies = data.results;
   })
   .then(() => {
      for (let movie of movies) {
         createMovieCard(movie)
      }
   })
   .catch((err) => {
      console.error(err);
   });

function createMovieCard(pMovie) {
   return (movieList.innerHTML += `<section class="card opacity-transition">
            <img
               src=https://image.tmdb.org/t/p/original${pMovie.poster_path}
               alt="film"
               class="opacity-transition"
            />
            <div class="card-description opacity-transition">
               <div class="description">
                  <h2>${pMovie.title}</h2>
                  <p>${pMovie.overview}</p>
                  <input
                     type="datetime-local"
                     id="meeting-time"
                     name="meeting-time"
                  />
                  <button type="button">Book Now</button>
               </div>
            </div>
          </section>`);
}
console.log(somthing);
console.log(movies);

const addEvent = (pDateTime, pMovieTime) => {
   let newEvent = {
      summary: "Sample Event for CINEMATIQ",
      location: "800 Howard St., San Francisco, CA 94103",
      description: "A chance to hear more about Google's developer products.",
      start: {
         dateTime: `${pDateTime}:00`,
         timeZone: "Europe/Zurich",
      },
      end: {
         dateTime: `${pDateTime}:00-${pMovieTime}`,
         timeZone: "Europe/Zurich",
      },
      recurrence: ["RRULE:FREQ=DAILY;COUNT=1"],
      attendees: [{ email: "team4@powercoders.org" }],
      reminders: {
         useDefault: false,
         overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
         ],
      },
   };
   let request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: newEvent,
   });

   request.execute(function (event) {
      appendPre("Event created: " + event.htmlLink);
   });
   console.log(currentDateTime.value);
};

addMovieButton.addEventListener("click", () => {
   addEvent(currentDateTime.value, "01:00");
});
