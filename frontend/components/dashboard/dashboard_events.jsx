import React from 'react';
import { Link } from 'react-router';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  splitDay(daydate) {
    const day = daydate.split(" ")[0];
    return day;
  }

  splitDate(daydate) {
    const date = daydate.split(" ")[1] + " " + daydate.split(" ")[2];
    return date;
  }

  render() {

    const {events} = this.props;
    const {hostedEvents} = this.props;
    const currentLocation = this.props.location.pathname;
    // debugger;
    const dashboardEvents = (currentLocation === '/dashboard/events') ?
    events : hostedEvents;

    const dashboardHeader = (currentLocation === '/dashboard/events') ?
    <h1>Upcoming Events</h1> : <h1>Hosting Events</h1>;

    const dashboardEventsList = dashboardEvents.map((event, idx) => (
      <ul key={event.id} className="event-index">
        <div className="event-index-card">
          <div className="event-index-top">
            <div className="event-index-datetime">
              <li className="day">{this.splitDay(event.date)}</li>
              <li className="date">{this.splitDate(event.date)}</li>
              <li className="time">{event.time}</li>
            </div>
            <div className="event-index-profile">
              <img src={event.host.profile_image}/>
              <h2>{event.host.first_name}</h2>
            </div>
          </div>
          <div className="event-index-main-title">
            <li className="dashboard-title">{event.title}</li>
            <li className="address">Address: {event.address}</li>
          </div>
          <div className="event-index-seats">
            <li>Seats Left: {event.seats}</li>
          </div>
        </div>
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



    return (
      <div className="dashboard-main-container">
        <div className="dashboard-navbar">
          <div className="dashboard-navbar-left">
            <Link to="/dashboard/events">Current Events</Link>
            <Link to="/dashboard/hosting">Hosting Events</Link>
          </div>
          <div className="dashboard-navbar-right">
            <img src={this.props.currentUser.profile_image}/>
            <h3>Hello, {this.props.currentUser.first_name}!</h3>
          </div>
        </div>
        <div className="dashboard-events-header">
          {dashboardHeader}
        </div>
        <div className="dashboard-content">
          {(dashboardEvents.length > 0) ?
            <div className="dashboard-index-container">
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
