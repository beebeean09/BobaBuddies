import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_ERRORS } from '../actions/events_actions';
import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return merge({}, action.event);
    // case RECEIVE_ERRORS:
    //
    default:
      return state;
  }
};
