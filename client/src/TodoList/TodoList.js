import React, { Component } from 'react';

// import TodoHeader from './components/TodoHeader';
import Input from './containers/Input';
import VisibleList from './containers/VisibleList';
import TodoFooter from './components/TodoFooter';

class TodoList extends Component {
  render() {
    return (
      <div id='root' className='todo-app__root'>
        {/* <TodoHeader /> */}
        <section className='todo-app__main'>
          <Input />
          <VisibleList />
        </section>
        <TodoFooter />
      </div>
    );
  }
}

export default TodoList;
