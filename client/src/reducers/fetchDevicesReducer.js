export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_DEVICES':
      return action.payload || false;
    default:
      return state;
  }
}
