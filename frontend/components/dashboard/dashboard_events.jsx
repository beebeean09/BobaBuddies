import React from 'react';
import DashboardHostingContainer from './dashboard_hosting_container';
import { Link } from 'react-router';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {events} = this.props;

    const dashboardEvents = events.map((event, idx) => (
      <ul key={idx}>
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

        <div className="dashboard-content">
          <h1>DashboardEvents Here!!!</h1>
          {this.props.currentUser ?
           dashboardEvents :
            <DashboardHostingContainer />}
        </div>
      </div>
    );
  }
}

export default DashboardEvents;
