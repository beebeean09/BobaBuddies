import { connect } from 'react-redux';
import { fetchAllCities, fetchCity } from '../../actions/cities_actions';
import CityEventIndex from './city_event_index';
import { createAttendance, fetchAttendance, deleteAttendance } from '../../actions/attendances_actions';
import { subtractSeat, fetchEvents } from '../../actions/events_actions';


const mapStateToProps = (state, ownProps) => {
  debugger;

  let eventsAttending = [];
  if (state.session.currentUser.events) {
    eventsAttending = state.session.currentUser.events.map(event => event.id);
  }

  return{
    city: state.cities[ownProps.params.cityId],
    currentUser: state.session.currentUser,
    events: state.events,
    eventsAttending,
    attendances: state.attendances
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchCity: (id) => dispatch(fetchCity(id)),
  createAttendance: (attendance) => dispatch(createAttendance(attendance)),
  subtractSeat: (id) => dispatch(subtractSeat(id)),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchAttendance: (id) => dispatch(fetchAttendance(id)),
  deleteAttendance: (id) => dispatch(deleteAttendance(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEventIndex);
