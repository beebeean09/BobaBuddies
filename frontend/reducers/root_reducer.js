import SessionReducer from './session_reducer';
import { CitiesReducer, CityReducer } from './cities_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  city: CityReducer
});

export default RootReducer;
