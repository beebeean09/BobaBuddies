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
![image of dashboard events](wireframes/home-logged-in.png)

### City Event Index Rendering






![tag screenshot](wireframes/tag-search.png)

## Future Directions for the Project

In the future, I would like to implement other features on BobaBuddies as well. Please review them below for a more descriptive outline of these features.

### User/Host Profile Viewing

The ability to view a host profile is a feature that is available by clicking on the host's profile picture shown on each event.
It will allow users to find out more about the host before deciding to join the event they are hosting.

### Google Map API

A Google Map API is not a standard feature on Tea With Strangers, but I feel it would be a good feature to have for users to choose and be able to decide on which events they would like to attend according to their proximity.

### Event Attendance Status Bar

Although the number of available seats is already shown on each event, an attendance status bar would be a nice way to display it as well.
