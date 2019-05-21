const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload || false;

    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
          count: 0
        },
        ...state
      ];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case 'ADD_COUNT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, count: todo.count + 1 } : todo
      );

    case 'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};

export default todos;
