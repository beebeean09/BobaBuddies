import React from 'react';
import { Link } from 'react-router';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {

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

    const bobasaurMessageFilled =
    <div className="dashboard-message-bobasaur">
      <div className="dashboard-bobasaur-filled">
        <h1>Yay it seems like you've got a couple events coming up!</h1>
        <img src="http://res.cloudinary.com/beebeean09/image/upload/v1490247543/1-Bulbasaur_f4qnao.png"
          alt="bobasaur_img"/>
      </div>
    </div> ;


    debugger;
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
          {(dashboardEvents.length > 0) ?
            <div>
              {bobasaurMessageFilled}
              <div className="dashboard-eventlist">
                {dashboardEventsList}
              </div>
            </div>
            :
            <div>
              <div className="dashboard-message-bobasaur">
                <h1>Seems like your dashboard is empty. Choose a city to join an event!</h1>
                <img src="http://res.cloudinary.com/beebeean09/image/upload/v1490247543/1-Bulbasaur_f4qnao.png"
                  alt="bobasaur_img"/>
              </div>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default DashboardEvents;
