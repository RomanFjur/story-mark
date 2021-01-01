import HTTPClient from '../Services/api.js';
const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');

const initialState = [localStorage.getItem('token')];

const reducer = async (state = initialState, action) => {
    switch (action.type){
        case 'POST':
            const user = await endpointCreateUser(action.value);
            localStorage.setItem('token', user);
            return await state.push(user);
        default:
            return state;
    }
}

export default reducer;