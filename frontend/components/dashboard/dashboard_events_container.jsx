import { connect } from 'react-redux';
import DashboardEvents from './dashboard_events';

const mapStateToProps = (state) => {
  return {
    events: Object.keys(state.session.currentUser.events).map(id => state.session.currentUser.events[id]),
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(DashboardEvents);
