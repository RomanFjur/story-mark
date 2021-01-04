import HTTPClient from '../services/api.js';

const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');
const endpointLoginAsUser = client.endpoint('POST', '/auth/login');

const defaultState = {
    logginIn: false,
    user: {}
};

const reducer = async (state = defaultState, action) => {
    switch (action.type){
        case 'REG':
            return endpointCreateUser(action.value);
        case 'LOGIN':
            const {token, user} = await endpointLoginAsUser(action.value);
            localStorage.setItem('token', token);
            return {
                loggedIn: true,
                user: {...user}
            };
        default:
            return state;
    }
}

export default reducer;