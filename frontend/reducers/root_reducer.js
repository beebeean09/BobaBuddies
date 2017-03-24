import SessionReducer from './session_reducer';
import { CitiesReducer, CityReducer } from './cities_reducer';
import { combineReducers } from 'redux';
import { EventsReducer } from './events_reducer';
import { AttendancesReducer } from './attendances_reducer';
import { EventsErrorsReducer } from './events_reducer';

const RootReducer = combineReducers({
  attendances: AttendancesReducer,
  session: SessionReducer,
  cities: CitiesReducer,
  city: CityReducer,
  events: EventsReducer,
  eventErrors: EventsErrorsReducer
});

export default RootReducer;
