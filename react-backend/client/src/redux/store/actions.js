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

const addPostSuccess = (posts) => ({
  type: "ADD_POST_SUCCESS",
  payload: posts
});

const socketGetUsers = () => ({
  type: "SOCKET_GET_USERS"
});

const socketGetPosts = () => ({
  type: "SOCKET_GET_POSTS"
});

const socketEvent = (data) => ({
  type: "SOCKET_EVENT",
  payload: data
})