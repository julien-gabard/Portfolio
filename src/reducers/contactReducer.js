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
  // Regex validate lastName and firstName
  regexName: RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u),
  // Regex validate message
  regexText: RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'?!:-]+$/u),
  // Regex validate phone
  regexNumber: RegExp(/^(0|(00|\+)33)[67][0-9]{8}$/),
  // Regex validate email
  regexEmail: RegExp(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/),
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
