## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar
 - Footer

**CitiesIndexContainer**
 - CityIndex

**EventIndexContainer**
 - EventIndex

**NewEventFormContainer**
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
| "/cities"            | CitiesIndexContainer       |
| "/cities/:id"        | EventIndexContainer        |
| "/new-event-form     | NewEventFormContainer          |
| "/dashboard          | DashboardEventContainer    |
| "/dashboard/history  | DashboardHistoryContainer  |
