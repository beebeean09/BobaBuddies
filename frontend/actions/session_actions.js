import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR ERRORS";

const demo = { user: {
  email: "buddies@gmail.com",
  password: "bobaboba" }};

export const signup = currentUser => dispatch => (
  UserAPIUtil.signup(currentUser)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = currentUser => dispatch => (
  SessionAPIUtil.login(currentUser)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const demoLogin = () => dispatch => (
  SessionAPIUtil.demoLogin().then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = errors => ({
  type: CLEAR_ERRORS
});
