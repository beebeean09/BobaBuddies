import { connect } from 'react-redux';
import { fetchEvents, fetchEvent } from '../../actions/events_actions';
import CityEventIndex from './city_event_index';


const mapStateToProps = (state, ownProps) => {
  debugger;
  return{
    events: Object.keys(state.events).map(id => state.events[id])

  };
  // ownProps.params.city_id
  // events: state.events
  // city: state.city
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(CityEventIndex);
