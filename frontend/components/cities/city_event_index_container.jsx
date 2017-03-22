import { connect } from 'react-redux';
import { fetchAllCities, fetchCity } from '../../actions/cities_actions';
import CityEventIndex from './city_event_index';
import { createAttendance } from '../../actions/attendances_actions';
import { subtractSeat, fetchEvents } from '../../actions/events_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger;
  return{
    city: state.cities[ownProps.params.cityId],
    currentUser: state.session.currentUser
    // userId: ,
    // eventId: state.session.event.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchCity: (id) => dispatch(fetchCity(id)),
  createAttendance: (attendance) => dispatch(createAttendance(attendance)),
  subtractSeat: (id) => dispatch(subtractSeat(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEventIndex);
