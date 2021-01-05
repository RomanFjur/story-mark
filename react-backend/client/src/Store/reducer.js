const initialState = {
    loading: false,
    token: localStorage.getItem('token') || '',
    user: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_USER_STARTED':
            return {
                ...state,
                loading: true
            };
        case 'ADD_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                token: action.payload
            };
        case 'ADD_USER_FAILURE':
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
                user: [...state.user, action.payload]
            };
        case 'LOGIN_USER_FAILURE':
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