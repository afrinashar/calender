import   { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import fetchEvents  from '../services/api.jsx';

const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchEvents();
      const transformedEvents = apiData.map((event) => ({
        id: event.id,
        title: event.summary,
        start: new Date(event.start),
        end: new Date(event.end),
        desc: event.desc,
        link: event.link,
        candidate: `${event.user_det?.candidate?.candidate_firstName} ${event.user_det?.candidate?.candidate_lastName}`,
        email: event.user_det?.candidate?.candidate_email,
      }));
      setEvents(transformedEvents);
    };

    fetchData();
  }, []);

  const handleSelectEvent = (event) => {
    alert(
      `Event: ${event.title}\nCandidate: ${event.candidate}\nEmail: ${event.email}\nLink: ${event.link}`
    );
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={handleSelectEvent}
    />
  );
}

export default CalendarComponent;
