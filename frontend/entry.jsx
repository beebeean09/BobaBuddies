import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store.js';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, root);
});
