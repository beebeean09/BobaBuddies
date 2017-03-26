import {
   RECEIVE_CITIES,
   RECEIVE_CITY,
   CLEAR_CITY} from '../actions/cities_actions';

import { RECEIVE_EVENT, SUBTRACT_SEAT, ADD_SEAT } from '../actions/events_actions';

import merge from 'lodash/merge';

export const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITIES:
      return merge({}, state, action.cities);
    // case SUBTRACT_SEAT:
    //   let newState = merge({}, state);
    //   if (newState.events) {
    //     let events = newState.events.slice();
    //     let index = events.indexOf(action.eventId);
    //     events.splice(index, 1);
    //     let seats = events.seats - 1;
    //     let cities = Object.assign({}, state.cities.events, { seats });
    //     return Object.assign({}, state, { cities });
    //   }
    //   return newState;
    // case ADD_SEAT:
    //   debugger;
    //   newState = merge({}, state);
    //   if (newState.events) {
    //     newState.events.seats = newState.events.seats + 1;
    //   }
    //   return newState;
    default:
      return state;
  }
};

export const CityReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITY:
      return merge({}, state, action.city);
    case RECEIVE_EVENT:
      const newState = merge({}, state);
      if (newState.events) {
        newState.events.push(action.event);
      }
      return newState;
    case CLEAR_CITY:
      return {};
    default:
      return state;
  }
};
