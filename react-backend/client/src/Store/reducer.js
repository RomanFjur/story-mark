const initialState = {
    loading: false,
    token: localStorage.getItem('token') || undefined,
    user: [],
    users: [],
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
                user: [action.payload]
            };
        case 'GET_USERS_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            };
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default reducer;