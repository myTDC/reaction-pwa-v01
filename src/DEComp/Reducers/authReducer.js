// import { FETCH_USER } from '../Actions/Auth_Act';

// import { FETCH_USER, SIGN_IN } from '../Actions/UserRegistrar_Actions';
import { FETCH_USER } from '../Actions/UserRegistrar_Actions';
// import { authRef, provider } from '../Config/fb';

const initState = {
    isAuth: false,
    currentUser: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || null;
        default:
            return state;
    }
};