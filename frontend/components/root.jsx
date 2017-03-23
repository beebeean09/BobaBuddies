import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import { clearErrors } from '../actions/session_actions';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import CitiesIndexContainer from './cities/cities_index_container';
import CityEventIndexContainer from './cities/city_event_index_container';
import NewEventFormContainer from './events/new_event_form_container';
import DashboardEventsContainer from './dashboard/dashboard_events_container';
import DashboardHostingContainer from './dashboard/dashboard_hosting_container';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      store.dispatch(clearErrors());
    if (currentUser) {
      replace('/');
    }
  };

  const redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/sign-in');
    }
  };



  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App } >
          <IndexRoute component={ HomeContainer }/>
          <Route path="/sign-in" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
          <Route path="/sign-up" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
          <Route path="/cities" component={CitiesIndexContainer} />
          <Route path="/cities/:cityId" component={CityEventIndexContainer} />
          <Route path="/cities/:cityId/new-event-form" component={NewEventFormContainer} onEnter={redirectIfNotLoggedIn}/>
          <Route path="/dashboard/events" component={DashboardEventsContainer} onEnter={redirectIfNotLoggedIn}/>
          <Route path="/dashboard/hosting" component={DashboardEventsContainer} onEnter={redirectIfNotLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};




export default Root;
// <Route path="/dashboard/hosting" component={DashboardHostingContainer} onEnter={redirectIfNotLoggedIn}/>
