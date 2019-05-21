import React from 'react';
import emoji from 'emoji-dictionary';
// import AutosizeInput from 'react-input-autosize';

export default ({
  text,
  completed,
  count,
  id,
  itemOnClick,
  deleteOnClick,
  itemOnChange
}) => {
  return (
    <li className='todo-app__item'>
      <div className='todo-app__checkbox'>
        <input
          type='checkbox'
          checked={completed}
          id={id}
          onChange={itemOnClick}
        />
        <label htmlFor={id} />
      </div>
      <input
        size={text.length + 3}
        className='todo-app__item-detail '
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        value={text}
        onChange={e => itemOnChange(id, e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && e.target.value.trim().length !== 0) {
            e.target.blur();
          }
        }}
      />
      <p className='todo-app__item-count'>
        {emoji.getUnicode('tomato').repeat(count)}
      </p>
      <div className='todo-app__item-delete' onClick={deleteOnClick}>
        <i className='fas fa-trash-alt' />
      </div>
    </li>
  );
};
