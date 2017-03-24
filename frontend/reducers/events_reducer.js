import { RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_ERRORS,
  DELETE_EVENT,
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS } from '../actions/events_actions';

import merge from 'lodash/merge';

export const EventsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      debugger;
      return merge({}, state, action.event);
    case DELETE_EVENT:
    debugger;
      return {};
    default:
      return state;
  }
};

export const EventsErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    default:
      return state;
  }
};
