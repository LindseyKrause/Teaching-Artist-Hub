import React from 'react';
import GoogleCalendar from "../components/Calendar";

const Calendar = () => {
   
    return (
        <main>
        <section className="flex-row justify-center mb-4">
            <GoogleCalendar></GoogleCalendar>
        </section>
        </main>
    )
}

export default Calendar;