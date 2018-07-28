import React, { Component } from 'react';
//import logo from './plane-green.svg';
import './App.css';
import Footer from './DEComp/Footer';
import Button from '@material-ui/core/Button';
import AppBar from './MUI/AppBar';

import Dash from './DEComp/Dash/Dashboard'

import { BrowserRouter } from 'react-router-dom';
//import ToDoList from './DEComp/UserTodo/ToDoList';
// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  state = {
      isAuth: false
  }
  
  
  
  
  render() {
  
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-back-top">
          <AppBar appTitle="TDC | DE"/>
            <h1 className="App-title"> Welcome to React </h1>
            
          </header>
          
          <div className="App-content">
              <div className="Content">
              <Dash/>
              <ul>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 10</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 1</p></li>
              <li><p>my article 20</p></li>
              </ul>

              <a href="_blank">blah blah bleh bleh</a> <br/><br/>

              {/*<h4>Title:{this.displayfile(0).title}</h4>
              <h4>IamgeUrl:{this.displayfile(0).image}</h4>
              <h4>Url:{this.displayfile(0).url}</h4>
              <h4>Length:{this.displayfile(0).length}</h4>*/}
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
                <Button variant="contained" color="primary">
                  Articles Display 
                </Button>
              </div>
          </div>
          <div className="App-back-bottom"></div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
