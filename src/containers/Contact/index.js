// == Import npm
import { connect } from 'react-redux';

// == Import actions
import { changeField, registrationSubmit } from 'src/actions/actionContact';

// == Import component
import Contact from 'src/components/Contact';

// == Fonction props
const mapStateToProps = (state) => ({
  lastName: state.contact.lastName,
  firstName: state.contact.firstName,
  phone: state.contact.phone,
  email: state.contact.email,
  message: state.contact.message,
  regexName: state.contact.regexName,
  regexText: state.contact.regexText,
  regexNumber: state.contact.regexNumber,
  regexEmail: state.contact.regexEmail,
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
