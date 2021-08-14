

import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';


require('dotenv').config()


function GoogleCalendar() {
    let calendars = [
        {calendarId: process.env.CALENDAR_ID}
    ];
    return (
        <section>
            <Calendar apiKey={process.env.API_KEY} calendars={calendars} />
        </section>
    );
}

export default GoogleCalendar;