export const createAttendance = (attendance) => {
  debugger;
  return (
  $.ajax({
    method: 'POST',
    url: 'api/attendances',
    data: { attendance }
  })
);
};

export const deleteAttendance = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/attendances/${id}`
  })
);

export const fetchAttendances = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/attendances'
  });
};

export const fetchAttendance = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/attendances/${id}`
  });
};
