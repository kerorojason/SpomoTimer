import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { v4 } from 'uuid';

let Input = ({ dispatch }) => {
  return (
    <input
      type='text'
      className='todo-app__input'
      id='todo-input'
      placeholder='What needs to be done?'
      onKeyDown={e => {
        if (e.key === 'Enter' && e.target.value.trim().length !== 0) {
          dispatch(addTodo(e.target.value, v4()));
          e.target.value = '';
          e.target.blur();
        }
      }}
    />
  );
};

Input = connect()(Input);
export default Input;
