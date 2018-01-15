import { combineReducers } from 'redux';
import error from './error.js';
import system from './system.js';
import template from './template.js';

const rootReducer = combineReducers({
  error,
  system,
  template,
});

export default rootReducer;
