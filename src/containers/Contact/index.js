// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { changeField } from 'src/actions/actionContact';

// == Import component
import Contact from 'src/components/Contact';

// == Fonction props
const mapStateToProps = (/* state */) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (identifier, value) => {
    dispatch(changeField(identifier, value));
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
