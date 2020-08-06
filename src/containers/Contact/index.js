// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { changeField, registrationSubmit } from 'src/actions/actionContact';

// == Import component
import Contact from 'src/components/Contact';

// == Fonction props
const mapStateToProps = (/* state */) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (identifier, value) => {
    dispatch(changeField(identifier, value));
  },
  registrationSubmit: () => {
    dispatch(registrationSubmit());
  },
});

// == Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);
