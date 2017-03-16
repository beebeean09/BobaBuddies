import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout, demoLogin } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
