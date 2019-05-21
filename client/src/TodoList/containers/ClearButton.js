import { connect } from 'react-redux';
import { clearCompleted } from '../../actions';
import Button from '../components/Button';

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(clearCompleted())
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
