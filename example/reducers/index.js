import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import forms from '../../src/formsReducer';

export default combineReducers({
  forms,
  routing: routerReducer
});
