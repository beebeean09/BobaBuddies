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

**CityDetail**
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

| path                 | component                |
| -------------------- | ------------------------ |
| "/sign-in"           | AuthFormContainer        |
| "/sign-up"           | AuthFormContainer        |
| "/home"              | HomeContainer            |
| "/cities"            | CitiesContainer          |
| "/cities/:id"        | CityDetail               |
| "/new-event          | EventForm                |
| "/dashboard          | DashboardEventContainer  |
| "/dashboard/history  | DashboardHistoryContainer  |
