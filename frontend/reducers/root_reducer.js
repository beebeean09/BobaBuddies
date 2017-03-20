import SessionReducer from './session_reducer';
import { CitiesReducer, CityReducer } from './cities_reducer';
import { combineReducers } from 'redux';
import { EventsReducer } from './events_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  city: CityReducer,
  events: EventsReducer
});

export default RootReducer;
