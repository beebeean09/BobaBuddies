import * as EventAPIUtil from '../util/events_api_util';

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
  EventAPIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)),
                          err => dispatch(receiveErrors(err.responseJSON)))
);
export const fetchEvents = () => dispatch => (
  EventAPIUtil.fetchEvents().then(events => dispatch(receiveEvents(events)),
                          err => dispatch(receiveErrors(err.responseJSON)))
);
export const createEvent = (newEvent) => dispatch => (
  EventAPIUtil.fetchEvent(newEvent).then(event => dispatch(receiveEvent(event)))
);
