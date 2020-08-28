import { combineReducers } from 'redux';
import alert from './alert';
import tube from './tube';

export default combineReducers({
  alert,
  tube
});