import { connect } from 'react-redux';
import DashboardEvents from './dashboard_events';

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.session.currentUser.events,
    hostedEvents: state.session.currentUser.hosted_events,
    currentUser: state.session.currentUser,
  };
};

export default connect(mapStateToProps, null)(DashboardEvents);
