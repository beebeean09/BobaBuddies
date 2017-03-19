import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents, fetchEvent } from '../actions/events_actions';

const mapStateToProps = (state) => ({
  events: Object.keys(state.events).map(id => state.events[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default connect(null, null)(EventIndex);
