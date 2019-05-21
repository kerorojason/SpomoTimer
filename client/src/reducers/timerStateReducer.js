export default function(
  state = {
    workList: undefined,
    breakList: undefined,
    device: undefined,
    todo: undefined,
    workTime: 25,
    breakTime: 5,
    working: true
  },
  action
) {
  switch (action.type) {
    case 'SET_PLAYLIST':
      return { ...state, ...action.payload } || false;
    case 'SET_DEVICE':
      return { ...state, ...action.payload } || false;
    case 'SET_TODO':
      return { ...state, ...action.payload } || false;

    case 'SET_WORKTIME':
      return { ...state, ...{ workTime: action.payload } };
    case 'ADD_WORKTIME':
      return { ...state, ...{ workTime: state.workTime + 1 } };
    case 'MINUS_WORKTIME':
      return { ...state, ...{ workTime: state.workTime - 1 } };
    case 'SET_BREAKTIME':
      return { ...state, ...{ breakTime: action.payload } };
    case 'ADD_BREAKTIME':
      return { ...state, ...{ breakTime: state.breakTime + 1 } };
    case 'MINUS_BREAKTIME':
      return { ...state, ...{ breakTime: state.breakTime - 1 } };
    // case 'INIT_TIMELEFT':
    //   return { ...state, ...action.payload };
    // case 'COUNT_DOWN':
    //   return { ...state, ...{ timeLeft: state.timeLeft - 1 } };
    default:
      return state;
  }
}
