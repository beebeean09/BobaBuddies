import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, demoLogin } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch, replace) => {
  // const url = location.pathname
  return {
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(demoLogin()),
    replace
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
