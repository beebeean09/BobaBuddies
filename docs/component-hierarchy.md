## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar
 - Footer

**CityIndexContainer**
 - CityIndex

**CityEventIndexContainer**
 - CityEventIndex

**NewEventContainer**
 - NewEventForm

**DashboardContainer**
 - Dashboard
   + DashboardEventContainer
     * DashboardEvent
   + DashboardHistoryContainer
     * DashboardHistory

# Routes

| path                 | component                  |
| -------------------- | -------------------------- |
| "/sign-in"           | AuthFormContainer          |
| "/sign-up"           | AuthFormContainer          |
| "/home"              | HomeContainer              |
| "/cities"            | CityIndexContainer         |
| "/cities/:id"        | CityEventIndexContainer    |
| "/new-event-form     | NewEventContainer          |
| "/dashboard          | DashboardEventContainer    |
| "/dashboard/history  | DashboardHistoryContainer  |
