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

const login = (values) => ({
  type: "LOGIN",
  payload: values
});

const loginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: token
});

const registration = (values) => ({
  type: "REGISTRATION",
  payload: values
})

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

const addStatus = (status) => ({
  type: "ADD_STATUS",
  payload: status
});

const addStatusSuccess = (user) => ({
  type: "ADD_STATUS_SUCCESS",
  payload: {
    ...user
  }
});

const logout = () => ({
  type: "LOGOUT"
});

const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS"
});

const addPost = (post) => ({
  type: "ADD_POST",
  payload: post
});

const addPostSuccess = (post) => ({
  type: "ADD_POST_SUCCESS",
  payload: {
    ...post
  }
});