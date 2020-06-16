import { connect } from 'react-redux';
import { increase, decrease } from './action';
import App from './app.jsx';

const mapStateToProps = state => {
  return {
    number: state.number
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHigherNumber: () => dispatch(increase()),
    getLowerNumber: () => dispatch(decrease())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
