import HTTPClient from '../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');

export const registration = (user) => {
  return (dispatch) => {
    dispatch(addUserStarted());
    endpointCreateUser(user)
    .then(res => {
      localStorage.setItem("token", res);
      dispatch(addUserSuccess(res));
    })
    .catch(err => {
      dispatch(addUserFailure(err.message));
    });
  };
};

export const login = () => {
  return (dispatch, getState) => {
    endpointLoginAsUser(getState())
    .then(res => {
      dispatch(loginUserSuccess(res));
    })
    .catch(err => {
      dispatch(loginUserFailure(err.message));
    });
  };
}

const addUserStarted = () => ({
  type: "ADD_USER_STARTED"
});

const addUserSuccess = (token) => ({
  type: "ADD_USER_SUCCESS",
  payload: token
});

const addUserFailure = (error) => ({
  type: "ADD_USER_FAILURE",
  payload: {
    error
  }
});

const loginUserSuccess = (user) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: {
    ...user
  }
});

const loginUserFailure = (error) => ({
  type: "LOGIN_USER_FAILURE",
  payload: {
    error
  }
});