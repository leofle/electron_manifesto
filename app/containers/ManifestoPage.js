import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Manifesto from '../components/Manifesto';
import * as ManifestoActions from '../actions/manifesto';

function mapStateToProps(state) {
  return {
    frase: state.frase
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ManifestoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Manifesto);
