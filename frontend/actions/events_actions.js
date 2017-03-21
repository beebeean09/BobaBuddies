import * as EventAPIUtil from '../util/events_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveErrors = () => ({
  type: RECEIVE_ERRORS
});

export const fetchEvent = (id) => dispatch => (
  EventAPIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const fetchEvents = (cityId) => dispatch => (
  EventAPIUtil.fetchEvents(cityId).then(events => dispatch(receiveEvents(events)))
);

export const createEvent = (newEvent) => dispatch => {
  // debugger;

  return EventAPIUtil.createEvent(newEvent).then(event => dispatch(receiveEvent(event)))
                              .then(hashHistory.push('/cities'));
};
