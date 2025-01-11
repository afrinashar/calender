Calendar Component with Event Modal
This project is a React-based calendar application that leverages the FullCalendar library to display events and provides a detailed modal view for event information. It features functionalities like displaying events in multiple views (month, week, day), handling event clicks, and showing events on specific dates. The project is styled using react-bootstrap and includes icons from lucide-react.

Features
FullCalendar Integration:

Displays events in various views (month, week, day).
Supports interaction with events and dates.
Event Details Modal:

Displays detailed information for a selected event.
Handles both single and multiple events on a selected date.
Custom Event Data:

Renders event details, including candidate, interviewer, job title, and interview time.
Customizes event tooltip with additional information.
Actionable Buttons:

Options to join the meeting, view resumes, and perform actions like editing and deleting events.
Custom Styling:

Styled using Bootstrap and custom CSS for a polished UI.
Interactive icons from lucide-react for edit, delete, view, and download actions.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-url.git
Navigate to the project directory:

bash
Copy code
cd calendar-component
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Dependencies
React: Frontend framework.
FullCalendar: Calendar library.
Plugins used: dayGrid, timeGrid, and interaction.
React-Bootstrap: For responsive modal and UI components.
Lucide-React: For icons like edit, delete, view, and download.
Install these dependencies using:

bash
Copy code
npm install react-bootstrap @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction lucide-react
Folder Structure
bash
Copy code
src/
├── assets/
│   └── google.png          # Placeholder image for the modal
├── components/
│   └── CalendarComponent.js # Main calendar component
├── styles/
│   └── style.css            # Custom styles
├── App.js                   # Entry point of the app
├── index.js                 # React DOM rendering
Usage
Calendar Features
Event Views:

Switch between month, week, and day views using the calendar toolbar.
Event Click:

Click on an event to view detailed information in a modal.
Date Click:

Click on a date to view all events on that date in a list.
Join Meeting:

The modal includes a "JOIN" button, which can be linked to meeting platforms (like Google Meet).
Adding Events
To add events, update the staticData array in the component. Each event requires the following fields:

id: Unique identifier for the event.
summary: Title of the event.
desc: Event description.
start: Start time of the event (ISO format).
end: End time of the event (ISO format).
user_det: Details of the interviewer and candidate.
job_id: Job title associated with the interview.
Example:

javascript
Copy code
{
  id: 4,
  summary: "Frontend Developer",
  desc: "Final Round",
  start: "2025-01-15T10:00:00+05:30",
  end: "2025-01-15T11:00:00+05:30",
  user_det: {
    handled_by: { firstName: "John", lastName: "Doe" },
    candidate: { candidate_firstName: "Jane", candidate_lastName: "Smith" },
  },
  job_id: { jobRequest_Title: "Frontend Developer" },
},
Customization
Styling
Modify the style.css file to update the appearance of the calendar and modal.
Example styles include .custom-event for custom tooltips.
Modal Content
Update the modal layout or actions in the JSX under <Modal.Body>.
Screenshots
Calendar View

Event Details Modal

