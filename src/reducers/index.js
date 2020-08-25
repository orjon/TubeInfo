import { combineReducers } from 'redux';
import alert from './alert';
import statuses from './statuses';

export default combineReducers({
  alert,
  statuses
});