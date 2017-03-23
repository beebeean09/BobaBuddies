import React from 'react';
import { Link } from 'react-router';

class CityEventIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger;

  }

  componentDidMount() {
    this.props.fetchAllCities();
  }

  componentWillReceiveProps(nextProps) {
    // debugger;
    if (nextProps !== this.props) {
      this.setState({attendances: nextProps.attendances});
    }
  }

  handleAddAttendance(id) {
    const attendance = { event_id: id };
    this.props.createAttendance(attendance);
    debugger;
    // this.props.subtractSeat(id);
  }

  findEvent(event, id) { event.id === id;}

  handleDeleteAttendance(id) {
    debugger;
    // const attendance = this.props.eventsAttending.find(this.findEvent(event, id));
    // this.props.deleteAttendance(attendance.id);
    this.props.deleteAttendance(id);
  }

  render() {

    const { city } = this.props;
    const currentUser = this.props;

    // const attendanceButton = {this.props.eventsAttending.includes(event.id) ?
    // <div className="join-unjoin-button">
    //   <button onClick={this.handleAddAttendance.bind(this, event.id)}>Join</button>
    // </div> :
    // <div className="join-unjoin-button">
    //   <button onClick={this.handleDeleteAttendance.bind(this, event.id)}>Unjoin</button>
    // </div> }

    // </div>

    // <div className="event-index-header">
    // debugger;
    const eventList = (this.props.city) ? city.events.map(event => (
      <ul key={event.id} className="event-index">
          <li >Title: {event.title}</li>
          <li >Address: {event.address}</li>
        <li>Date: {event.date}</li>
        <li>Time: {event.time}</li>
        <li>Seats: {event.seats}</li>
        <li>Host Id: {event.host_id}</li>
      {this.props.eventsAttending.includes(event.id) ?
      <div className="join-unjoin-button">
        <button onClick={this.handleDeleteAttendance.bind(this, event.id)}>Unjoin</button>
      </div> :
      <div className="join-unjoin-button">
        <button onClick={this.handleAddAttendance.bind(this, event.id)}>Join</button>
      </div> }

      </ul>
    )) :
    <div></div>;

    return (
      (this.props.city) ?
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
      </div> : <div></div>
    );
  }
}


export default CityEventIndex;
