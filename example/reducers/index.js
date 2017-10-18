import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
//import { forms } from '../../dist/rxform';
import { forms } from '../../src';

export default combineReducers({
  forms,
  routing: routerReducer
});
