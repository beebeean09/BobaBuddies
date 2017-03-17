## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar
 - Footer

**CitiesContainer**
 - CityIndex
 - CityDetail

**CityEventDetailContainer**
 - EventIndex

**NewEventContainer**
 - EventForm

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
| "/cities"            | CitiesContainer            |
| "/cities/:id"        | CityDetailEventContainer   |
| "/new-event          | NewEventContainer          |
| "/dashboard          | DashboardEventContainer    |
| "/dashboard/history  | DashboardHistoryContainer  |
