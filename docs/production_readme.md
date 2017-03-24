# BobaBuddies

[Boba Buddies][heroku]

[heroku]: https://bobabuddies.herokuapp.com/#/

BobaBuddies is a full-stack web application inspired by Tea With Strangers. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Dashboard Rendering (Hosted or Current Events)

Every event is stored in the database with a required `city_id`, `host_id`, `title`, `address`, `date`, `time`, and `seats`. Because each user can either attend/unattend an event or host an event, it was necessary to make a join table named Attendances, which contained a user_id and event_id to allow a connection between users (host/attendee) and events.

With the Attendances table, it was possible to then store that data to keep track of when users decide to host an event or attend/unattend an event. Using associations from the user, the events a user was attending was accessible through `attendances` and the events a user was hosting was accessible through `hosted_events` from the `host_id` in the events table.

The component rendering the current events and hosting events is all done within the `DashboardEvents`. There are two links on the page: 'Current Events' and 'Hosting Events'. It checks the pathname of the current location and depending on the pathname, it will then render either the current events or hosting events. This also allowed me to use just one component for both routes (`/dashboard/events` and `/dashboard/hosting`).

The `DashboardEvents` render method discussed can be seen below:

```javascript
render: function () {
  const { events } = this.props;
  const { hostedEvents } = this.props;
  const currentLocation = this.props.location.pathname;

  const dashboardEvents = (currentLocation === '/dashboard/events') ?
  events : hostedEvents;
}
```
![image of dashboard events](wireframes/dashboard.png)

### City Event Index Rendering

The component rendering all of the events in the selected city is the `CityEventIndex`. Each event listed has a button to either 'JOIN' or 'UNJOIN', which was implemented by checking in the render method if the events attending by the current user is listed on the page. If the `id` of an event on the `CityEventIndex` matches the `id` of an event listed as attending under the current user, then if would render the button would render as 'UNJOIN', if not, it would render as 'JOIN'. Once clicked, it would carry out the `handleDeleteAttendance` method which deletes that attendance from the database or the `handleAddAttendance` method which creates that attendance from the database.

Because the events for each city is nested under the corresponding city, I used the Session Reducer to handle the attendance action and cause a change in the state, so that the page would re-render.

```javascript
const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ATTENDANCE:
      let newState = merge({}, state);
      newState.currentUser.events.push(action.attendance.event);
      return newState;
    case REMOVE_ATTENDANCE:
      debugger;
      let events = state.currentUser.events.slice();
      let index = events.indexOf(action.id.event_id);
      events.splice(index, 1);
      currentUser = Object.assign({}, state.currentUser, { events });
      return Object.assign({}, state, { currentUser });
    default:
      return state;
  }
};
```
<!--
For the `handleDeleteAttendance` method, the `id` of the event to delete is passed in instead of the attendance because it allowed me to easily have all of the information about the event, providing me with a way to easily edit the number of seats in the event as well. -->


![CityEventIndex](wireframes/CityEventIndex.png)

### CityIndex

Below is the CityIndex page, which lists all the possible cities a user can click on to see what events are available in that selected city.

![CityIndex](wireframes/CityIndex.png)

## Future Directions for the Project

In the future, I would like to implement other features on BobaBuddies as well. Please review them below for a more descriptive outline of these features.

### User/Host Profile Viewing

The ability to view a host profile is a feature that is available by clicking on the host's profile picture shown on each event.
It will allow users to find out more about the host before deciding to join the event they are hosting.

### Google Map API

A Google Map API is not a standard feature on Tea With Strangers, but I feel it would be a good feature to have for users to choose and be able to decide on which events they would like to attend according to their proximity.

### Event Attendance Status Bar

Although the number of available seats is already shown on each event, an attendance status bar would be a nice way to display it as well.
