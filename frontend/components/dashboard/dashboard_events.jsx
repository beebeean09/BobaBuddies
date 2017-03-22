import React from 'react';

class DashboardEvents extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {

    debugger;
    return (
      <div>
        <h1>DashboardEvents Here!!!</h1>
        {this.props.events.map((event, idx) => (
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
    );
  }
}

export default DashboardEvents;
