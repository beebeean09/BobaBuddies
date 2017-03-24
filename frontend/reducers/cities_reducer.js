import {
   RECEIVE_CITIES,
   RECEIVE_CITY,
   CLEAR_CITY} from '../actions/cities_actions';

import { RECEIVE_EVENT } from '../actions/events_actions';

import merge from 'lodash/merge';

export const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITIES:
      return merge({}, state, action.cities);
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
      debugger;
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
