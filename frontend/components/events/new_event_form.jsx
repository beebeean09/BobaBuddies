import React from 'react';
import { Link, hashHistory } from 'react-router';
import Datetime from 'react-datetime';

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", address: "", date: "2017-10-09", time: "06:00:00",
      seats: 7, city_id: this.props.cityId};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    debugger;
    // const event = this.state;
    e.preventDefault();

    this.props.createEvent(this.state);
    return hashHistory.push(`/cities/${this.props.cityId}`);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    // debugger;


    return (
      <div className="new-event-form-main">
        <div className="new-event-form-header">
          <h1>Thinking about hosting a Boba Buddies Event?</h1>
          <h2>Fill out the information below to create one today!</h2>
        </div>
        <div className="new-event-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.update('title')}/>
            </label>
            <label>
              <input
                type="text"
                value={this.state.address}
                placeholder="Address"
                onChange={this.update('address')}/>
            </label>
            <div className="datetime-container">
              <label>
                <input
                  className="datetime"
                  type="date"
                  value={this.state.date}
                  onChange={this.update('date')}/>
              </label>
              <label>
                <input
                  className="datetime"
                  type="time"
                  value={this.state.time}
                  onChange={this.update('time')}/>
              </label>
            </div>
            <br/>
            <input className="new-event-submit-button" type="submit" value="Create New Event"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEventForm;

// <Datetime
//   className="date"
//   value={""}
//   onChange={this.update('date')}
//   timeFormat={false}/>


// <Datetime
//   className="time"
//   value={this.state.time}
//   onChange={this.update('time')}
//   dateFormat={false}/>

// value={this.state.date}
// onChange={this.update('date')}
// <label>Seats:
//   <input
//     type="number"
//     value={this.state.seats}
//     onChange={this.update('seats')}/>
// </label>
// <Datetime
//   className="time"
//   value={this.state.time}
//   onChange={this.update('time')}
//   dateFormat={false}>
// </Datetime>
