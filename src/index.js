import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// IMPORT REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import studentsReducer from './redux/reducers/studentsReducer';

// CREATE STORE IMPORTING THE REDUCER
const store = createStore(studentsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// PROVIDE STORE TO THE APP
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
