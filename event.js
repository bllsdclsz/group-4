const addEvent = (pDateTime, pMovieTime, pTitle) => {
   let newEvent = {
      summary: `${pTitle}`,
      location: "800 Howard St., San Francisco, CA 94103",
      description: "A chance to hear more about Google's developer products.",
      start: {
         dateTime: `${pDateTime}:00+01:00`,
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

   gapi.client.calendar.events
      .list({
         calendarId: "primary",
         timeMin: new Date().toISOString(),
         showDeleted: false,
         singleEvents: true,
         maxResults: 10,
         orderBy: "startTime",
      })
      .then((response) => {
         let events = response.result.items;
         if (events.length > 0) {
            if (
               events.filter((element) => {
                  !(element.start.dateTime <= newEvent.start.dateTime) || !(element.start.dateTime > newEvent.end.dateTime);
               })
            ) {
               request.execute(function (event) {
                  createBookedMovie(event, event.start.dateTime);
               });
            } else {
               alert("You have a event this time you specified.");
            }
         } else {
            request.execute(function (event) {
               createBookedMovie(event, event.start.dateTime);
            });
         }
      });
      return newEvent;
};

function removeEvent(pEvent) {
   gapi.client.load('calendar', 'v3', function() {
      var request = gapi.client.calendar.events.delete({
          'calendarId': 'primary',
          'eventId': pEvent.id
      });
      request.execute(function(response) {
          if(response.error || response == false){
              alert('Error');
          }
          else{
              alert('Success');               
          }
      });
  });
}
