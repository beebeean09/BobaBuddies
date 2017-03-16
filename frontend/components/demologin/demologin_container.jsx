import { connect } from 'react-redux';
import DemoLogin from './demoLogin';
import { demoLogin } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoLogin);
