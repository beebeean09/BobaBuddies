import { RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE, RECEIVE_ATTENDANCES } from '../actions/attendances_actions';
import merge from 'lodash/merge';

export const AttendancesReducer = (state = {errors: []}, action) => {
  switch(action.type) {
    case RECEIVE_ATTENDANCE:
      return merge({}, state, action.attendance);
    case RECEIVE_ATTENDANCES:
      return Object.assign({}, state, action.attendances);
    default:
      return state;
  }
};
