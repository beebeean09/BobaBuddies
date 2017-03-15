import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});


export default connect(mapStateToProps, null)(Home);
