import React, { Component } from 'react';
//import logo from './plane-green.svg';
import './App.css';
// import Footer from './DEComp/Footer';
import AppBar from './MUI/AppBar';

import Dash from './DEComp/Dash/Dashboard';

import { BrowserRouter } from 'react-router-dom';
//import ToDoList from './DEComp/UserTodo/ToDoList';
// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {

  componentDidMount(){
    console.log(this.props);
  }
  
  render() {
  
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-back-top">
            <AppBar appTitle="TDC | myDE"/>
          </header>
          
          <div className="App-fore-content">
              <Dash/>
          </div>

          <div className="App-back-bottom"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
