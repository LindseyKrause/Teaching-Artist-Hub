import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';

const calendarAPI = process.env.API_KEY;

let calendars = [
    { calendarId: process.env.CALENDAR_ID }
];

function GoogleCalendar () {
    return (
        <section>
            <Calendar apiKey={calendarAPI} calendars={calendars} />
        </section>
    );
}

export default GoogleCalendar;