import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT,
  CLEAR_ERRORS
} from '../actions/session_actions';

import { RECEIVE_ATTENDANCE } from '../actions/attendances_actions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] });
    case RECEIVE_ATTENDANCE:
      debugger;
      let newState = Object.assign({}, _nullUser, { currentUser });
      newState.currentUser.events.push(action.attendance);
      return newState;
    default:
      return state;
  }
};


export default SessionReducer;
