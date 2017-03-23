
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

export const fetchUserEvents = (cityId) => (
  $.ajax({
    method: 'GET',
    url: '/api/events/user_events'
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  })
);
