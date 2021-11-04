let newEvent = {
   summary: "Google I/O 2015",
   location: "800 Howard St., San Francisco, CA 94103",
   description: "A chance to hear more about Google's developer products.",
   start: {
      dateTime: `2021-11-05T16:04:51`,
      timeZone: "Europe/Zurich",
   },
   end: {
      dateTime: `2021-11-05T16:04:51-01:23`,
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

let timeZone = new Date().toJSON();
console.log(timeZone);
const addMovieButton = document.getElementById("add_event");

let currentDateTime = document.getElementById("meeting-time");

const addEvent = () => {
   let request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: newEvent,
   });

   request.execute(function (event) {
      appendPre("Event created: " + event.htmlLink);
   });
   console.log(currentDateTime.value);
};

addMovieButton.addEventListener("click", addEvent);
