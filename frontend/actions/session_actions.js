import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearUser = () => ({
  type: CLEAR_CURRENT_USER
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = currentUser => dispatch => {
  return SessionAPIUtil.login(currentUser)
      .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
      .then(() => dispatch(clearUser()));
};

export const signup = currentUser => dispatch => {
  return UserAPIUtil.signup(currentUser)
      .then(user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};
