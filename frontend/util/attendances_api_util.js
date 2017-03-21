export const createAttendance = (attendance) => (
  $.ajax({
    method: 'POST',
    url: 'api/attendances',
    data: { attendance }
  })
);

export const removeAttendance = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/attendances/${id}`
  })
);
