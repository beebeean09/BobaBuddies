import { connect } from 'react-redux';
import DashboardEvents from './dashboard_events';
import { fetchUserEvents } from '../../actions/events_actions';

const mapStateToProps = (state) => {
  debugger;
  return {
    events: Object.keys(state.session.currentUser.events).map(id => state.session.currentUser.events[id]),
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(DashboardEvents);
