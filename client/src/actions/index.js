import axios from 'axios';
export * from './TodoListActions';
export * from './PlayListActions';
export * from './TimerActions';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_USER', payload: res.data });
};
