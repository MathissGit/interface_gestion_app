import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {

        const fetchEvents = async () => {
            const appointments = [
                { title: 'Meeting with Bob', date: '2024-06-14' },
                { title: 'Dentist Appointment', date: '2024-06-16' },
                { title: 'Conference', date: '2024-06-18' },
            ];
            setEvents(appointments);
        };
        fetchEvents();
    }, []);

    return (
        <div style={{ width: '100%' }}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    );
};

export default Calendar;
