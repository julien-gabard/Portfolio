// == Import actions
import {
  REGISTRATION_SUBMIT,
  formError,
  formSent,
  showMessage,
} from 'src/actions/actionContact';

// == Middleware
const leMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTRATION_SUBMIT:
      if (
        store.getState().contact.regexName.test(store.getState().contact.lastName)
        && store.getState().contact.regexName.test(store.getState().contact.firstName)
        && store.getState().contact.regexEmail.test(store.getState().contact.email)
        && store.getState().contact.regexText.test(store.getState().contact.message)) {
        // console.log('soumis');
        store.dispatch(formSent('Message envoyer'));
      }
      else {
        store.dispatch(formError('Veuillez entré des données valides.'));
        store.dispatch(showMessage());
        setTimeout(() => {
          store.dispatch(showMessage());
        }, 10000);
      }
      next(action);
      break;
    default:
      next(action);
  }
};

// == Export
export default leMiddleware;
