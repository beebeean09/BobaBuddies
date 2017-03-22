import { RECEIVE_EVENTS, RECEIVE_EVENT, RECEIVE_ERRORS, DELETE_EVENT,
  SUBTRACT_SEAT } from '../actions/events_actions';
import merge from 'lodash/merge';

export const EventsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, state, action.events);
    case RECEIVE_EVENT:
      debugger;
      return merge({}, state, action.event);
    case DELETE_EVENT:
      return {};
    // case ADD_SEAT:
    default:
      return state;
  }
};



// case SUBTRACT_SEAT:
// debugger;
// if (state[action.eventId]) {
//   const newState = Object.assign({}, state);
//   const seats = state[action.eventId].seats - 1;
//   newState[action.eventId].seats = seats;
//   return newState;
// } else {
//   return state;
// }
