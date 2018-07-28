import { FETCH_USER } from '../Actions/Auth_Act';

export default (state = false, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null;
        default:
            return state;
    }
};