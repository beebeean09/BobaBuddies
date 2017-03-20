import React from 'react';
import { Link } from 'react-router';

class CityEventIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {city_id: 1, host_id: 3, title: "Boba Party", date: "2017-03-20", time: "03:00:00",
                  address: "1234 App Academy St.", seats: 5};
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // const { city } = this.props;
    // const eventList = this.props.events.map(event => (
    //   <div className="event-index">
    //     <ul className="event-title">{event.title}</ul>
    //     <ul className="event-address">{event.address}</ul>
    //     <ul>{event.date}</ul>
    //     <ul>{event.time}</ul>
    //     <ul>{event.seats}</ul>
    //   </div>
    // ));

    // {eventList}
    debugger;
    // const { cityId } = this.props;
    // const { city } = this.props;

    // <img src={`/assets/${city.image}`}/>
    return (
      <div className="event-index-main-container">
        <div className="event-index-cover">
          <h1>City Name</h1>
        </div>
        <div>
          <h2>Welcome ! Check out the events below!</h2>
        </div>
        <div className="event-index-container">
          <p>hello</p>
        </div>
        <div className="event-nav-links">
          <Link  to="/new-event-form">Create New Event</Link>
          <Link to="/cities">Back to cities</Link>
        </div>
      </div>
    );
  }
}


export default CityEventIndex;
