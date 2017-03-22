import React from 'react';
import { Link } from 'react-router';

class DashboardHosting extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    // debugger;
    return (
      <div className="dashboard-main-container">
        <div className="dashboard-navbar">
          <Link to="/dashboard/events">Current Events</Link>
          <Link to="/dashboard/hosting">Hosting Events</Link>
        </div>
        <div className="dashboard-hosting">
          {this.props.hostedEvents.map((event, idx) => (
            <ul key={idx}>
              <li>Event Id: {event.id}</li>
              <li>Title: {event.title}</li>
              <li>Address: {event.address}</li>
              <li>Date: {event.date}</li>
              <li>Time: {event.time}</li>
              <li>Seats: {event.seats}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default DashboardHosting;
