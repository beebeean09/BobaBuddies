import { connect } from 'react-redux';
import DashboardHosting from './dashboard_hosting';

const mapStateToProps = (state) => {
  return {
    hostedEvents: Object.keys(state.session.currentUser.hosted_events).map(id => state.session.currentUser.hosted_events[id]),
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps, null)(DashboardHosting);
