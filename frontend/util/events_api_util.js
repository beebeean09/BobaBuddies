
export const fetchEvents = cityId => (
  $.ajax({
    method: 'GET',
    url: `/api/cities/${cityId}/events`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  })
);

export const removeEvent = (id) => {
  return (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);
};
