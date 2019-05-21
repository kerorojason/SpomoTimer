// import { v4 } from 'uuid';
import axios from 'axios';

export const fetchTodos = () => async dispatch => {
  const res = await axios({ method: 'get', url: '/api/todos' });
  dispatch({ type: 'FETCH_TODOS', payload: res.data });
};

export const addTodo = (text, id) => async (dispatch, getState) => {
  axios({ method: 'post', url: `/api/todos/${id}`, data: { text } });
  dispatch({
    type: 'ADD_TODO',
    id,
    text
  });
};

export const toggleTodo = id => async (dispatch, getState) => {
  axios({ method: 'put', url: `/api/todos/${id}/toggle` });
  dispatch({
    type: 'TOGGLE_TODO',
    id
  });
};

export const deleteTodo = id => async (dispatch, getState) => {
  axios({ method: 'delete', url: `/api/todos/${id}` });
  dispatch({
    type: 'DELETE_TODO',
    id
  });
};

export const editTodo = (id, text) => async (dispatch, getState) => {
  axios({ method: 'put', url: `/api/todos/${id}/edit`, data: { text } });
  dispatch({
    type: 'EDIT_TODO',
    id,
    text
  });
};

export const addCount = id => async (dispatch, getState) => {
  axios({ method: 'put', url: `/api/todos/${id}/add-count` });
  dispatch({
    type: 'ADD_COUNT',
    id
  });
};

export const clearCompleted = () => async (dispatch, getState) => {
  axios({ method: 'delete', url: '/api/todos' });
  dispatch({
    type: 'CLEAR_COMPLETED'
  });
};

export const setVisibilityFilter = filter => async (dispatch, getState) => {
  dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
