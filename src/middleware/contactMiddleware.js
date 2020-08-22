// == Import axios
import axios from 'axios';

// == Import actions
import {
  REGISTRATION_SUBMIT,
  formError,
  formSent,
  showMessage,
  emptySubmitted,
} from 'src/actions/actionContact';

// == Middleware
const leMiddleware = (store) => (next) => (action) => {
  const messageTimeout = () => {
    store.dispatch(store.getState().contact.showMsg === true ? clearTimeout() : showMessage());
    if (store.getState().contact.showMsg === true) {
      setTimeout(() => {
        store.dispatch(showMessage());
      }, 10000);
    }
  };
  switch (action.type) {
    case REGISTRATION_SUBMIT:
      if (
        store.getState().contact.regexName.test(store.getState().contact.lastName)
        && store.getState().contact.regexName.test(store.getState().contact.firstName)
        && store.getState().contact.regexEmail.test(store.getState().contact.email)
        && store.getState().contact.regexText.test(store.getState().contact.message)) {
        const data = new FormData();
        data.append('lastName', store.getState().contact.lastName);
        data.append('firstName', store.getState().contact.firstName);
        data.append('phone', store.getState().contact.phone);
        data.append('email', store.getState().contact.email);
        data.append('message', store.getState().contact.message);

        axios.post('http://localhost:3002/api/contact.php', data)
          .then((response) => {
            if (response.status === 200) {
              store.dispatch(formError(''));
              store.dispatch(formSent('Message envoyer'));
              store.dispatch(emptySubmitted());
              messageTimeout();
            }
          });
      }
      else {
        store.dispatch(formSent(''));
        store.dispatch(formError('Veuillez entré des données valides.'));
        messageTimeout();
      }
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export
export default leMiddleware;
