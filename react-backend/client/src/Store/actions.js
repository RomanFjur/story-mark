// export const registration = (user) => {
//   return async (dispatch, getState) => {
//     dispatch(getTokenStarted());
//     try {
//       const createdToken = await endpointCreateUser(user);
//       localStorage.setItem("token", createdToken.token);
//       dispatch(getTokenSuccess(createdToken.token));
//       const success = await endpointLoginAsUser(getState());
//       dispatch(loginUserSuccess(success));
//       return;
//     } catch (error) {
//       dispatch(failure(error.message));
//       return;
//     }
//   };
// };

// export const findUser = (user) => {
//   return async (dispatch, getState) => {
//     dispatch(getTokenStarted());
//     try {
//       const success = await endpointLoginAsUser(user);
//       localStorage.setItem("token", success.token);
//       dispatch(getTokenSuccess(success.token));
//       const auth = await endpointLoginAsUser(getState());
//       dispatch(loginUserSuccess(auth));
//       const users = await endpointLoadUsers();
//       dispatch(getUsersSuccess(users));
//       console.log(success, auth, users);
//       return;
//     } catch (error) {
//       dispatch(failure(error.message));
//       return;
//     }
//   };
// }

// export const loadUsers = () => {
//   return async (dispatch, getState) => {
//     dispatch(getUsersStarted());
//     try {
//       const success = await endpointLoadUsers();
//       console.log(success);
//       dispatch(getUsersSuccess(success));
//       return;
//     } catch (error) {
//       dispatch(getUsersFailure(error.message));
//       return;
//     }
//   };
// }
const getToken = (values) => ({
  type: "GET_TOKEN",
  payload: values
});

const registration = (values) => ({
  type: "ADD_USER",
  payload: values
})

const getTokenStarted = () => ({
  type: "GET_TOKEN_STARTED"
});

const getTokenSuccess = (token) => ({
  type: "GET_TOKEN_SUCCESS",
  payload: token
});

const failure = (error) => ({
  type: "FAILURE",
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

const getUsers = () => ({
  type: "GET_USERS"
});

const getUsersStarted = () => ({
  type: "GET_USERS_STARTED"
});

const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users
});

const getUsersFailure = (error) => ({
  type: "GET_USERS_FAILURE",
  payload: {
    error
  }
});

const loadUserPage = (userId) => ({
  type: "LOAD_USER_PAGE",
  payload: userId
});

const loadUserPageSuccess = (userPage) => ({
  type: "LOAD_USER_PAGE_SUCCESS",
  payload: {
    ...userPage
  }
});

const loadUserPostsSuccess = (posts) => ({
  type: "LOAD_USER_POSTS_SUCCESS",
  payload: posts
});