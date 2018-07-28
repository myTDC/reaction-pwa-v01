import { authRef, provider } from '../Config/fb';

export const FETCH_USER = 'fetch_user';
export const SIGN_IN = 'sign_in';

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({ type: FETCH_USER, payload: user });
        } else {
            dispatch({ type: FETCH_USER, payload: null });
        }
        });
};
    
export const signIn = () => dispatch => {
    authRef
    .signInWithPopup(provider)
    .then(result => {
        console.log('SignIn Successful!');
    })
    .catch(error => {
        console.log(error);
    });
};
    
export const signOut = () => dispatch => {
    authRef
    .signOut()
    .then(() => {
            // Sign-out successful.
            console.log('SignOut Successful!');
    })
    .catch(error => { console.log(error); });
};