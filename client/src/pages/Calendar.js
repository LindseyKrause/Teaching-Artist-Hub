import React from 'react';
import GoogleCalendar from "../components/Calendar";
import { ApolloProvider } from "@apollo/react-hooks";


function Calendar() {

    return (
        <div className="calendar-widget">
            <section>
                <div className="flex-row justify-center mb-4">
                    <GoogleCalendar />
                </div>
            </section>
        </div>
    )
}

export default Calendar;