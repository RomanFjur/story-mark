const initialState = {
    loading: false,
    token: localStorage.getItem('token') || undefined,
    loginedUser: '',
    watchingUser: '',
    users: [],
    posts: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_TOKEN_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'GET_TOKEN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                token: action.payload
            };
        case 'FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                loginedUser: action.payload
            };
        case 'GET_USERS_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                error: null,
                users: action.payload,
            };
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'LOAD_USER_PAGE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                watchingUser: action.payload
            };
        case 'LOAD_USER_POSTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                posts: action.payload.posts
            };
        case 'ADD_STATUS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                loginedUser: action.payload
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                token: undefined
            };
        case 'ADD_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                posts: action.payload.posts
            };
        default:
            return state;
    }
}

export default reducer;