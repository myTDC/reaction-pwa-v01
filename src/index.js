import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './DEComp/Reducers';


const de_store = createStore(reducers, {}, applyMiddleware(reduxThunk));



ReactDOM.render(
    <Provider store={de_store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
