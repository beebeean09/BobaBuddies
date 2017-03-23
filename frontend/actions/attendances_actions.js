import * as AttendanceAPIUtil from '../util/attendances_api_util';

export const RECEIVE_ATTENDANCE = "RECEIVE_ATTENDANCE";
export const REMOVE_ATTENDANCE = "REMOVE_ATTENDANCE";
export const RECEIVE_ATTENDANCES = "RECEIVE_ATTENDANCES";

export const receiveAttendance = (attendance) => ({
  type: RECEIVE_ATTENDANCE,
  attendance
});

export const removeAttendance = (id) => ({
  type: REMOVE_ATTENDANCE
});

export const receiveAttendances = () => ({
  type: RECEIVE_ATTENDANCES
});

export const createAttendance = (newAttendance) => dispatch => (
  AttendanceAPIUtil.createAttendance(newAttendance)
                   .then(attendance => dispatch(receiveAttendance(attendance)))
);

export const deleteAttendance = (id) => dispatch => (
  AttendanceAPIUtil.deleteAttendance(id)
                   .then(attendance => dispatch(removeAttendance(attendance)))
);

export const fetchAttendances = () => dispatch => (
  AttendanceAPIUtil.fetchAttendances()
                    .then(attendances => dispatch(receiveAttendances(attendances)))
);

export const fetchAttendance = (id) => dispatch => (
  AttendanceAPIUtil.fetchAttendances(id)
                    .then(attendance => dispatch(receiveAttendance(attendance)))
);
