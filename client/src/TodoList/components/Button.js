import React from 'react';

export default props => {
  return (
    <button
      className='todo-app__btn'
      onClick={props.onClick}
      disabled={props.active}
      style={{ color: props.active ? '#ffa7c4' : '#e6e6e6' }}
    >
      {props.children}
    </button>
  );
};
