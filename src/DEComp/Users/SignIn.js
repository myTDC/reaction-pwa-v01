import React from 'react';
import './SignIn.css';

const SignIn = (props) => {
    console.log(props);
    
    return(
        <div> <p>HEEEELLLLLOOOOOOO I'm From {props.title}</p> </div>
    );
};

export default SignIn;