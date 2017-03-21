import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';
import { createAttendance } from './actions/attendances_actions';

import { fetchEvents } from './actions/events_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.createAttendance = createAttendance;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
