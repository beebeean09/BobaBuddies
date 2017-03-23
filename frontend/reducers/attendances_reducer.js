import { RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE, RECEIVE_ATTENDANCES } from '../actions/attendances_actions';
import merge from 'lodash/merge';

export const AttendancesReducer = (state = {errors: []}, action) => {
  switch(action.type) {
    // case RECEIVE_ATTENDANCE:
    //   debugger;
    //   let newState = merge({}, state);
    //   newState.session.currentUser.events.push(action.attendance);
    //   return newState;
    case RECEIVE_ATTENDANCES:
      return Object.assign({}, state, action.attendances);
    case REMOVE_ATTENDANCE:
    debugger;
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
