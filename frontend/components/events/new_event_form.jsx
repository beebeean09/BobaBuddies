import React from 'react';
import { Link } from 'react-router';

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", address: "", date: "", time: "", seats: 0, host_id: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    this.props.createEvent();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    debugger;

    const { city_id } = this.props;

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
                type="dateTime"
                value={this.state.date}
                onChange={this.update('date')}/>
            </label>
            <label>
              <input
                type="text"
                value={this.state.address}
                placeholder="Address"
                onChange={this.update('address')}/>
            </label>
            <label>Seats:
              {this.state.seats}
            </label>
            <br/>
            <input type="submit" value="Create New Event"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEventForm;

// <label>
//   <input
//     type="dateTime"
//     value={this.state.date}
//     onChange={this.update('date')}/>
// </label>
