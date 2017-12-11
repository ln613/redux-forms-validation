import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { formsReducer } from 'redux-forms-validation';
import './index.css';
import App from './App';

const store = createStore(combineReducers({ forms: formsReducer }), {}, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
