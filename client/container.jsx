import { connect } from 'react-redux';
import { increase, decrease } from './actions/action';
import Counter from './components/counter/counter.jsx';

const mapStateToProps = (state) => ({
  number: state.number
});
const mapDispatchToProps = (dispatch) => ({
  getHigherNumber: () => dispatch(increase()),
  getLowerNumber: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
