import { authRef, provider } from '../Config/fb';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const FETCH_USER = 'FETCH_USER';

export const signInSample = (/*Takes Payload of the associated Action*/) => {
    return { /*Retunrs an action*/
        type: SIGN_IN
    };
};

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            console.log('fetching user | in Action| Found', user);
            dispatch({ type: FETCH_USER, payload: user });
        } else {
            console.log('fetching user | in Action| NotFound');
            dispatch({ type: FETCH_USER, payload: null });
        }
        });
};
    
export const signIn = () => dispatch => {
    // dispatch({ type: SIGN_IN, fbaref: authRef});
    console.log('SignIn Initiated');
    authRef
    .signInWithPopup(provider)
    .then(result => {
        
        console.log('SignIn Successful!', result);
        ()=>fetchUser();
    })
    .catch(error => {
        console.log('Error when logging In', error);
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