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
| "/cities"            | CitiesIndexContainer       |
| "/cities/:id"        | EventIndexContainer        |
| "/new-event-form     | NewEventContainer          |
| "/dashboard          | DashboardEventContainer    |
| "/dashboard/history  | DashboardHistoryContainer  |
