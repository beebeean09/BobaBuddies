import { RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE } from '../actions/attendances_actions';

export const AttendancesReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ATTENDANCE:
    debugger;
      return Object.assign({}, state, action.attendance);
    default:
      return state;
  }
};
