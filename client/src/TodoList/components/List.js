import React from 'react';
import Item from './Item';

export default ({ todos, toggleTodo, deleteTodo, changeItem }) => {
  return (
    <ul className='todo-app__list' id='todo-list'>
      {todos.map(todo => (
        <Item
          key={todo.id}
          {...todo}
          itemOnClick={() => toggleTodo(todo.id)}
          deleteOnClick={() => deleteTodo(todo.id)}
          itemOnChange={(id, text) => changeItem(id, text)}
        />
      ))}
    </ul>
  );
};
