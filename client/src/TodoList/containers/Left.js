import React from 'react';
import { connect } from 'react-redux';

const leftText = props => {
  return <div className='todo-app__total'> {props.left} left</div>;
};

const mapStateToProps = state => ({
  left: state.todos.filter(todo => !todo.completed).length
});

export default connect(mapStateToProps)(leftText);
