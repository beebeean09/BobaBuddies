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
    if (nextProps !== this.props) {
      this.setState({attendances: nextProps.attendances});
    }
  }

  handleAddAttendance(id) {
    const attendance = { event_id: id };
    this.props.createAttendance(attendance);
  }


  handleDeleteAttendance(id) {
    this.props.deleteAttendance(id);
  }
  // <div className="event-index-seats">
  //   <li>Seats Left: {event.seats}</li>
  // </div>

  render() {

    const { city } = this.props;
    const currentUser = this.props;
    // debugger;
    const eventList = (this.props.city) ? city.events.map(event => (
      <ul key={event.id} className="event-index">
        <div className="event-index-card">
          <div className="event-index-top">
            <div className="event-index-datetime">
              <li className="date">{event.date}</li>
              <li className="time">{event.time}</li>
            </div>
            <div className="event-index-profile">
              <img src="https://res.cloudinary.com/beebeean09/image/upload/v1490342606/boba_fett-10_1x_wzaqyy.png"/>
              <h2>Boba Master</h2>
            </div>
          </div>
          <div className="event-index-bottom">
            <div className="event-index-main-title">
              <li>{event.title}</li>
              <li>Address: {event.address}</li>
            </div>

            {this.props.currentUser ?
              (this.props.eventsAttending.includes(event.id) ?
              <div className="join-unjoin-button">
                <button onClick={this.handleDeleteAttendance.bind(this, event.id)}>Unjoin</button>
              </div> :
              <div className="join-unjoin-button">
                <button onClick={this.handleAddAttendance.bind(this, event.id)}>Join</button>
              </div> ) :
              <Link className="join-unjoin-button" to='/sign-up'>Sign In to Join</Link>
            }
          </div>
        </div>

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
