import React from 'react';
import { Link } from 'react-router';

class CityEventIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    // this.state = {city_id: 1, host_id: 3, title: "Boba Party", date: "2017-03-20", time: "03:00:00",
    //               address: "1234 App Academy St.", seats: 5};
  }

  componentWillMount() {
    // debugger;
    if (this.props.city) {
      this.props.fetchCity(this.props.city.id);
    }
  }

  handleAttendance(id) {
    // e.preventDefault();
    debugger;
    // const userId = this.props.userId;
    // const eventId = this.props.eventId;
    const attendance = { event_id: id };
    this.props.createAttendance(attendance);
  }

  render() {

    const { city } = this.props;
    const currentUser = this.props;

    const eventList = city.events.map(event => (
      <div key={event.id} className="event-index">
        <ul className="event-title">Title: {event.title}</ul>
        <ul className="event-address">Address: {event.address}</ul>
        <ul>Date: {event.date}</ul>
        <ul>Time: {event.time}</ul>
        <ul>Seats: {event.seats}</ul>
        <ul>Host Id: {event.host_id}</ul>
        <div className="join-unjoin-button">
          <button onClick={this.handleAttendance.bind(this, event.id)}>Join</button>
        </div>
      </div>
    ));

    return (
      <div className="event-index-main-container">
        <div className="event-index-cover">
          <div className="event-cover-img">
            <img src={city.image} alt={city.name} />
          </div>
          <h1>{city.name}</h1>
        </div>
        <div className="event-index-header">
          <h2>Welcome! Check out the events below!</h2>
        </div>
        <div className="event-nav-links">
          <Link to={`/cities/${city.id}/new-event-form`}>Create New Event</Link>
          <Link to="/cities">Back to cities</Link>
        </div>
        <div className="event-index-container">
          {eventList}
        </div>
      </div>
    );
  }
}


export default CityEventIndex;
