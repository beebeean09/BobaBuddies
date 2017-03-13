# BobaBuddies

[Heroku Link]()

## Minimum Viable Product

BobaBuddies is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Choose your current city
- [ ] Ability to host events
- [ ] Ability to join events
- [ ] Dashboard of joined/hosted events
- [ ] [Production README]()

## Design Docs

- [View Wireframes]()
- [React Components]()
- [API Endpoints]()
- [DB Schema]()
- [Sample State]()

## Implementation Timeline

### Phase 1: Backend Setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] `User` signup/signin components
- [ ] Style signup/signin components
- [ ] Seed users for database

### Phase 2: Cities and Events Model, API, and Components (3 days)
**Objective:** Cities are listed and events in those cities can be created, read, edited and destroyed through the API.
Note model
- [ ] Seed test data
- [ ] CRUD API for `CitiesController` and `EventsController`
- [ ] Components for Redux loops
  - [ ] `EventIndex`
  - [ ] `EventForm`
  - [ ] `CityIndex`
  - [ ] `CityDetail`
- [ ] Style cities page and individual cities page
- [ ] Seed cities and events

### Phase 3: Events Dashboard and Guest Login (2 days)
- [ ] Create a guest login
- [ ] Create a dashboard so users can see all events
  - [ ] Current events
  - [ ] Past events (History)

### Bonus Features (TBD)
- [ ] Profile viewing available
- [ ] Google map API integration for events
- [ ] Add ability to choose home city
- [ ] Add attendances view list on individual events
