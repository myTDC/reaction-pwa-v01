import React, { Component } from 'react';
// import Route from 'react-router';

const hifunc = () => {
    return 2;                
}

class SignOn extends Component {

    componentDidMount(){
        console.log(this.props);
    }

    display(varit){
        console.log(varit);
    }

    render(){
        return(
                <div onClick={this.display}> 
                    <p>HEEEELLLLLOOOOOOO I'm From {this.props.title}</p> 
                </div>
        )
    }
}

export default SignOn;