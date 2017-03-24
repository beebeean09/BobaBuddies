# BobaBuddies

[Heroku Link](https://bobabuddies.herokuapp.com/)

## Minimum Viable Product

BobaBuddies is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] Choose your current city
- [x] Ability to host events
- [x] Ability to join events
- [x] Dashboard of joined/hosted events
- [ ] [Production README]()

## Design Docs

- [View Wireframes](https://github.com/beebeean09/BobaBuddies/tree/master/docs/wireframes)
- [React Components](https://github.com/beebeean09/BobaBuddies/blob/master/docs/component-hierarchy.md)
- [API Endpoints](https://github.com/beebeean09/BobaBuddies/blob/master/docs/api-endpoints.md)
- [DB Schema](https://github.com/beebeean09/BobaBuddies/blob/master/docs/schema.md)
- [Sample State](https://github.com/beebeean09/BobaBuddies/blob/master/docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication
- [x] `User` model/migration
- [x] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [x] Webpack & react/redux modules
- [x] `APIUtil` to interact with the API
- [x] Redux cycle for frontend authentication
- [x] `User` signup/signin components
- [x] Style signup/signin components
- [x] Create a guest login
- [x] Seed demo user for database
- [x] Create Navbar component
- [x] Home component

### Phase 2: Cities and Events Model, API, and Components (3 days)
**Objective:** Cities are listed and events in those cities can be created, read, edited and destroyed through the API.
Note model
- [x] CRUD API for `CitiesController` and `EventsController`
- [x] Components for Redux loops
  - CityIndexContainer
    - [x] `CityIndex`
  - CityEventIndexContainer
    - [x] `CityEventIndex`
  - NewEventFormContainer
    - [x] `NewEventForm`
- [x] Style cities page and individual cities page
- [x] Seed test data
- [x] Seed cities and events

### Phase 3: Events Dashboard, Join Events, and Guest Login (2 days)
- [X] Ability to join events
- [x] Ability to host events
- [x] Create a dashboard so users can see all events
  - [x] Current events
  - [x] Hosting events
- [x] Footer Component

### Bonus Features (TBD)
- [ ] User Profile viewing available
- [ ] Google map API integration for events
- [ ] Add ability to choose home city
- [ ] Add attendances view list on individual events
