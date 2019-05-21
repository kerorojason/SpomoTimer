import { combineReducers } from 'redux';
import authReducer from './authReducer';
import playListsReducer from './playListsReducer';
import timerStateReducer from './timerStateReducer.js';
import fetchDevicesReducer from './fetchDevicesReducer';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  auth: authReducer,
  playLists: playListsReducer,
  timerState: timerStateReducer,
  devices: fetchDevicesReducer,
  todos,
  visibilityFilter
});
