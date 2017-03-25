import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT,
  CLEAR_ERRORS
} from '../actions/session_actions';

import { RECEIVE_ATTENDANCE,
  REMOVE_ATTENDANCE,
  ADD_SEAT,
  SUBTRACT_SEAT } from '../actions/attendances_actions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
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
      let newState = merge({}, state);
      newState.currentUser.events.push(action.attendance.event);
      return newState;
    case REMOVE_ATTENDANCE:
      let events = state.currentUser.events.slice();
      let index = events.indexOf(action.id.event_id);
      events.splice(index, 1);
      currentUser = Object.assign({}, state.currentUser, { events });
      return Object.assign({}, state, { currentUser });
    default:
      return state;
  }
};

// newState = merge({}, state);
// delete newState.currentUser.events[action.id.event_id];
// return newState;

export default SessionReducer;
