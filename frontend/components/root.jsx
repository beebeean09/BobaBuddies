import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import { clearErrors } from '../actions/session_actions';
import HomeContainer from './home/home_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      store.dispatch(clearErrors());
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App } >
          <IndexRoute component={ HomeContainer }/>
        </Route>
        <Route path="/sign-in" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/sign-up" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};




export default Root;
