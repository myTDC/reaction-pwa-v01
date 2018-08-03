import React, { Component } from 'react';
//Styling
import './Dashboard.css';

//Libs
import Button from '@material-ui/core/Button';
import { Route, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
//Custom Libs import {  } from '';
import { fetchUser } from '../Actions/Auth_Act';
import { Articles } from '../Articles/Articles';
import { signIn } from '../Actions/UserRegistrar_Actions';

class Dashboard extends Component{
    handleSubmit(event) {
        console.log('App| Handling form Submission');
    }

    displayfile(_id) {
        const MyArticles = {...Articles};
        // console.log(MyArticles[_id].title);
        //let currArt = MyArticles[_id].title;
        return MyArticles[_id];
    }
    

    render(){
        // const checkAuth  = (isUserAuthenticated) => {
        //     console.log('Checking Auth State');
        //     fetchUser();
        //     //dispatchEvent(fetchUser());
        
        //     // if(isUserAuthenticated){
        
        //     //   const authState = {...this.state.isAuth};
        //     //   authState.isAuth = true;
              
        //     //   return true;
        //     //     //<ArtList/>
        //     // }
        // }
        return(
            <div className="Dash">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Articles</NavLink></li>
                        <li><NavLink to='/'>Participate</NavLink></li>
                        <li><NavLink to='/'>Profile</NavLink></li>
                        <li><NavLink to='/'>Sponsors</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path='/' exact Component={<h1>articles</h1>} />
                <Route path='/participate' exact Component={<h1>aparticipate</h1>} />
                <Route path='/profile' exact Component={<h1>profile</h1>} />
                <Route path='/sponsors' exact Component={<h1>sponsors</h1>} />
                <Route path='/signin' exact Component={<h1>signis</h1>} />
                <Route path='/articles' exact Component={<h1>articles</h1>} />
                <Route path='/articles/:id' exact Component={<h2>articles/article</h2>} />
            </Switch>
            <Button variant="contained" color="primary" onClick={this.props.onSignIn()}>
                Hello Dashboard | Login
            </Button>
            <Button variant="contained" color="primary" onClick={this.props.fetchUser()}>
                Hello Dashboard | Login
            </Button>
            {/*<h4>Title:{this.displayfile(0).title}</h4>
            <h4>IamgeUrl:{this.displayfile(0).image}</h4>
            <h4>Url:{this.displayfile(0).url}</h4>
            <h4>Length:{this.displayfile(0).length}</h4>*/}

            <ul>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
                <li>Art 1</li>
            </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSignIn: () => dispatch(signIn),
        onFetchUser: () => dispatch(fetchUser)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);