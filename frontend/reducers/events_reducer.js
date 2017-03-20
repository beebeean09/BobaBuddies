import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_ERRORS } from '../actions/events_actions';
import merge from 'lodash/merge';

export const EventsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_EVENTS:
    debugger;
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      return merge({}, state, action.event);
    default:
      return state;
  }
};
