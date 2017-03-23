import { connect } from 'react-redux';
import DashboardEvents from './dashboard_events';
import { fetchEvents} from '../../actions/events_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.session.currentUser.events,
    hostedEvents: state.session.currentUser.hosted_events,
    currentUser: state.session.currentUser,
    event: state.events,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEvents);
