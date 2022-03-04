import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';



let calendars = [
    { calendarId: 'c_328os62b0238c6h93arsgpj4jo@group.calendar.google.com' }
];

function GoogleCalendar() {
    return (
        <section>
            <Calendar
                apiKey={calendarAPI} calendars={calendars}
            />
        </section>
    );
}

export default GoogleCalendar;
