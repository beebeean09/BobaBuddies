import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';

import { fetchCity, fetchAllCities } from './actions/cities_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchCity = fetchCity;
  window.fetchAllCities = fetchAllCities;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
