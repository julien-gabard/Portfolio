// == Import actions
import { CHANGE_FIELD, REGISTRATION_SUBMIT } from 'src/actions/actionContact';

// == InitialSate
const initialState = {
  // value of the lastName field of the contact form
  lastName: '',
  // value of the firstName field of the contact form
  firstName: '',
  // value of the phone field of the contact form
  phone: '',
  // value of the email field of the contact form
  email: '',
  // value of the message field of the contact form
  message: '',
};

// == Component
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const target = action.identifier;
      const { value } = action;
      return {
        ...state,
        [target]: value,
      };
    }
    case REGISTRATION_SUBMIT: {
      return {
        ...state,
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        message: '',
      };
    }
    default: return state;
  }
};

// == Export
export default contactReducer;
