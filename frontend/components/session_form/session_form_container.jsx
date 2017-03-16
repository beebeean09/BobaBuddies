import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup, demoLogin, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors,
  loggedIn: Boolean(session.currentUser)
  // signUpInfo: state.user.user
});


const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'sign-in') ? login : signup;
  return {
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(demoLogin()),
    processForm: user => dispatch(processForm(user)),
    // login: guest => dispatch(login(guest)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
