# BobaBuddies

[Boba Buddies][heroku]

[heroku]: https://bobabuddies.herokuapp.com/#/

BobaBuddies is a full-stack web application inspired by Tea With Strangers. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Dashboard Rendering (Hosted or Current Events)
dashboard current and hosted events
###

![image of notebook index](wireframes/home-logged-in.png)

### City Event Index Rendering


<!-- ```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
``` -->


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
