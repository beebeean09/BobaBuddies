import * as CityAPIUtil from '../util/cities_api_util';

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";
export const CLEAR_CITY = "CLEAR_CITY";

export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});

export const clearCities = () => ({
  type: CLEAR_CITY
});

export const fetchCity = id => dispatch => (
  CityAPIUtil.fetchCity(id).then(city => dispatch(receiveCity(city)))
);

export const fetchAllCities = () => dispatch => (
  CityAPIUtil.fetchAllCities().then(cities => dispatch(receiveCities(cities)))
);
