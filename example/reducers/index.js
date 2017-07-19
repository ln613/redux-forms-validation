import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import form from '../../src/formReducer';

export default combineReducers({
  form,
  routing: routerReducer
});
