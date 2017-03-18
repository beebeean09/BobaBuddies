export const fetchAllCities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cities'
  })
);

export const fetchCity = id => (
  $.ajax({
    method: 'GET',
    url: `/api/cities/${id}`
  })
);
