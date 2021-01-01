import HTTPClient from '../Services/api.js';
const client = new HTTPClient('http://localhost:3000');
const endpointCreateUser = client.endpoint('POST', '/auth/register');

const reducer = async (state = [], action) => {
    switch (action.type){
        case 'POST':
            const user = await endpointCreateUser(action.value);
            state = await state;
            state.push(user);
            console.log(state);
            return state;
        // case 'DEC':
        //     return state - 1;
        // case 'RES':
        //         return 0;
        default:
            return state;
    }
}

export default reducer;