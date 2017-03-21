import * as AttendanceAPIUtil from '../util/attendances_api_util';

export const RECEIVE_ATTENDANCE = "RECEIVE_ATTENDANCE";
export const REMOVE_ATTENDANCE = "REMOVE_ATTENDANCE";

export const receiveAttendance = (attendance) => ({
  type: RECEIVE_ATTENDANCE,
  attendance
});

export const removeAttendance = (id) => ({
  type: REMOVE_ATTENDANCE
});

export const createAttendance = (newAttendance) => dispatch => (
  AttendanceAPIUtil.createAttendance(newAttendance)
                   .then(attendance => dispatch(receiveAttendance(attendance)))
);

export const deleteAttendance = (id) => dispatch => (
  AttendanceAPIUtil.deleteAttendance(id)
                   .then(attendance => dispatch(removeAttendance(attendance)))
);
