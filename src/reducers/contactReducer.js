// == Import actions
import {
  CHANGE_FIELD,
  EMPTY_SUBMITTED,
  FORM_ERROR,
  FORM_SENT,
  SHOW_MESSAGE,
} from 'src/actions/actionContact';

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
  regexText: RegExp(/^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'?!:-]+$/u),
  // Regex validate phone
  regexNumber: RegExp(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/),
  // Regex validate email
  regexEmail: RegExp(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/),
  // Error message when submitting the form
  messageError: '',
  // Message when the message is sent
  messageSent: '',
  // display send or error message
  showMsg: false,
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
    case EMPTY_SUBMITTED: {
      return {
        ...state,
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        message: '',
      };
    }
    case FORM_ERROR: {
      return {
        ...state,
        messageError: action.value,
      };
    }
    case FORM_SENT: {
      return {
        ...state,
        messageSent: action.value,
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        showMsg: !state.showMsg,
      };
    }
    default: return state;
  }
};

// == Export
export default contactReducer;
