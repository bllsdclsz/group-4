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
};
