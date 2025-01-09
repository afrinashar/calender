/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // Import interaction plugin
import { Modal, Button, ListGroup,Card } from "react-bootstrap";
import image from '../src/assets/google.png'
 import { Eye, Download } from 'lucide-react';
 import './style.css'
const CalendarComponent = () => {
  const staticData = [
    {
      id: 1,
       summary: "react developer",
      desc: "1st Round",
      start: "2025-01-09T18:00:00+05:30",
      end: "2025-01-09T18:40:00+05:30",
      //link: "http://www.hhh.com",
      user_det: {
        handled_by: { firstName: "Vinodhini", lastName: "HR" },
        candidate: { candidate_firstName: "mohan", candidate_lastName: "raj" },
      },
      job_id: { jobRequest_Title: "React developer" },
    },
    {
      id: 2,
      summary: "MERN developer",
      desc: "Test",
      start: "2025-01-08T18:00:00+05:30",
      end: "2025-01-08T18:40:00+05:30",
      //link: "http://www.hhh.com",
      user_det: {
        handled_by: { firstName: "Vinodhini", lastName: "HR" },
        candidate: { candidate_firstName: "mohan", candidate_lastName: "raj" },
      },
      job_id: { jobRequest_Title: "Node developer" },
    },
    {
      id: 3,
      summary: "python developer",
      desc: "2nd Round",
      start: "2025-01-11T20:00:00+05:30",
      end: "2025-01-11T21:00:00+05:30",
      //link: "http://www.hhh.com",
      user_det: {
        handled_by: { firstName: "Vinodhini", lastName: "HR" },
        candidate: { candidate_firstName: "mohan", candidate_lastName: "raj" },
      },
      job_id: { jobRequest_Title: "django developer" },
    },
  ];

  const [events] = useState(
    staticData.map((event) => ({
      id: event.id,
      title: event.summary,
      start: event.start,
      end: event.end,
      url: event.link,
      description: event.desc,
      handledBy: `${event.user_det?.handled_by?.firstName || "N/A"} ${
        event.user_det?.handled_by?.lastName || ""
      }`,
      candidate: `${event.user_det?.candidate?.candidate_firstName || "N/A"} ${
        event.user_det?.candidate?.candidate_lastName || ""
      }`,
      jobTitle: event.job_id?.jobRequest_Title || "Developer",
    }))
  );

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isMultipleEvents, setIsMultipleEvents] = useState(false);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
     
    setIsMultipleEvents(false);
    setShowModal(true);
  };

  const handleDateClick = (info) => {
    const eventsOnDate = events.filter(
      (event) =>
        new Date(event.start).toDateString() ===
        new Date(info.dateStr).toDateString()
    );
    if (eventsOnDate.length > 0) {
      setSelectedEvents(eventsOnDate);
      setIsMultipleEvents(true);
      setShowModal(true);
    }
  };
console.log(selectedEvent, "event");

  return (
    <div className="container mt-4">
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          start: "prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,dayGridYear",
        }}
        height="auto"
        events={events.map((event) => ({
          ...event,
          // Add custom tooltip
          classNames: ["custom-event"],
          extendedProps: { tooltip: event.description },
        }))}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        editable={true}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isMultipleEvents ? "Events on this Date" : "Event Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {isMultipleEvents ? (
    <ListGroup>
      {selectedEvents.map((event) => (
        <ListGroup.Item key={event.id}>
          <strong>{event.title}</strong> <br />
          {new Date(event.start).toLocaleString()} -{" "}
          {new Date(event.end).toLocaleString()}
          <br />
          <Button
            variant="link"
            className="text-primary"
            onClick={() => {
              setSelectedEvent(event);
              setIsMultipleEvents(false);
            }}
          >
            View Details
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    selectedEvent && (
      <div className="card p-4 shadow-sm">
        <div className="row">
          {/* Candidate and Interview Details */}
          <div className="col-md-7">
            <h4 className="mb-4 text-primary">
              Interview With: {selectedEvent?.candidate}
            </h4>

            <div className="mb-3">
              <p className="mb-2">
                <strong>Position:</strong> {selectedEvent?.jobTitle}
              </p>

              <p className="mb-2">
                <strong>Created By:</strong> {selectedEvent?.handledBy}
              </p>

              <p className="mb-2">
                <strong>Interview Date:</strong>{" "}
                {new Date(selectedEvent?.start).toLocaleDateString()}
              </p>

              <p className="mb-2">
                <strong>Interview Time:</strong>{" "}
                {new Date(selectedEvent?.start).toLocaleTimeString()} -{" "}
                {new Date(selectedEvent?.end).toLocaleTimeString()}
              </p>

              <p className="mb-2">
                <strong>Interview Via:</strong>{" "}
                {selectedEvent?.url ? "Google Meet" :"Google Meet"}
              </p>
            </div>

            {/* File Section */}
            <div className="mt-4">
              <div className="d-flex align-items-center gap-2 text-primary mb-2">
                <span>Resume.docx</span>
                <i
                  className="bi bi-eye-fill cursor-pointer"
                  title="View Resume"
                ></i>
                <i
                  className="bi bi-download cursor-pointer"
                  title="Download Resume"
                ></i>
              </div>

              <div className="d-flex align-items-center gap-2 text-primary">
                <span>Aadharcard</span>
                <i
                  className="bi bi-eye-fill cursor-pointer"
                  title="View Aadharcard"
                ></i>
                <i
                  className="bi bi-download cursor-pointer"
                  title="Download Aadharcard"
                ></i>
              </div>
            </div>
          </div>

          {/* Image and Join Button */}
          <div className="col-md-5 text-center">
            <img
              src={image}
              alt="Meet Icon"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <button className="btn btn-primary w-100">
              JOIN
            </button>
          </div>
        </div>
      </div>
    )
  )}
</Modal.Body>

         
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default CalendarComponent;
