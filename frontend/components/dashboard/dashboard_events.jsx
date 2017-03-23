import React from 'react';
import { Link } from 'react-router';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    debugger;
    const {events} = this.props;
    const {hostedEvents} = this.props;
    const currentLocation = this.props.location.pathname;

    const dashboardEvents = (currentLocation === '/dashboard/events') ?
    events : hostedEvents;

    const dashboardHeader = (currentLocation === '/dashboard/events') ?
    <h1>Upcoming Events</h1> : <h1>Hosting Events</h1>;

    const dashboardEventsList = dashboardEvents.map((event, idx) => (
      <ul className="dashboard-event-card" key={idx}>
        <li>Event Id: {event.id}</li>
        <li>Title: {event.title}</li>
        <li>Address: {event.address}</li>
        <li>Date: {event.date}</li>
        <li>Time: {event.time}</li>
        <li>Seats: {event.seats}</li>
      </ul>
    ));

    // debugger;
    return (
      <div className="dashboard-main-container">
        <div className="dashboard-navbar">
          <Link to="/dashboard/events">Current Events</Link>
          <Link to="/dashboard/hosting">Hosting Events</Link>
        </div>
        <div className="dashboard-events-header">
          {dashboardHeader}
        </div>
        <div className="dashboard-content">
          {dashboardEventsList}
        </div>
      </div>
    );
  }
}

export default DashboardEvents;
