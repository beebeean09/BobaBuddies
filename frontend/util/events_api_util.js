
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
