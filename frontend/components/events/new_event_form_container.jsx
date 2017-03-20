import { connect } from 'react-redux';
import NewEventForm from './new_event_form';
import { createEvent } from '../../actions/events_actions';

const mapStateToProps = (state, ownProps) => ({
  city_id: ownProps.params.city_id
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);
