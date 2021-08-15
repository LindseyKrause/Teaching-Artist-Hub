import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';

const API_KEY = 'AIzaSyCTLwpyb-j-woXYEA2vF04Y2cBPLBydvto';

let calendars = [
    { calendarId: 'c_328os62b0238c6h93arsgpj4jo@group.calendar.google.com' }
];

function GoogleCalendar () {
    return (
        <section>
            <Calendar apiKey={API_KEY} calendars={calendars} />
        </section>
    );
}

export default GoogleCalendar;