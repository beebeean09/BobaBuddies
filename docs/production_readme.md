# BobaB

[Boba Buddies][heroku]

[heroku]: https://bobabuddies.herokuapp.com/#/

BobaBuddies is a full-stack web application inspired by Evernote. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation


### Dashboard Rendering (Hosted or Current Events)

###

![image of notebook index](wireframes/home-logged-in.png)

### Notebooks


<!-- ```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
``` -->

### Tags


![tag screenshot](wireframes/tag-search.png)

## Future Directions for the Project

In the future, I would like to implement other features as well such as a Google API that can conveniently list all the events coming up in the chosen city. Also, a status bar that shows how filled a specific event is listed in each city along with the number of seats shown on each event.

### Google API

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Event Attendance Status Bar

Although the number of available seats is already shown on each event, an attendance status bar would be a nice way to show
