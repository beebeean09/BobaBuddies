import * as EventAPIUtil from '../util/events_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";
export const DELETE_EVENT = "DELETE_EVENT";
export const SUBTRACT_SEAT = "SUBTRACT_SEAT";
export const ADD_SEAT = "ADD_SEAT";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveUserEvents = events => ({
  type: RECEIVE_USER_EVENTS,
  events
});

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
});

export const deleteEvent = (event) => ({
  type: DELETE_EVENT,
  event
});

export const subtractSeat = eventId => ({
  type: SUBTRACT_SEAT,
  eventId
});

export const addSeat = eventId => ({
  type: ADD_SEAT,
  eventId
});

export const fetchEvent = (id) => dispatch => (
  EventAPIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const fetchEvents = (cityId) => dispatch => (
  EventAPIUtil.fetchEvents(cityId).then(events => dispatch(receiveEvents(events)))
);

export const fetchUserEvents = () => dispatch => (
  EventAPIUtil.fetchUserEvents().then(events => dispatch(receiveUserEvents(events)))
);

export const createEvent = (newEvent) => dispatch => {

  return EventAPIUtil.createEvent(newEvent).then(event => dispatch(receiveEvent(event)));
};

export const removeEvent = (id) => dispatch => (
  EventAPIUtil.removeEvent(id).then(event => dispatch(deleteEvent(event)))
);
