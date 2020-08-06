// == Import npm
import { combineReducers } from 'redux';

// == Import reducer
import appReducer from './appReducer';
import contactReducer from './contactReducer';
import footerReducer from './footerReducer';

// == Component
const rootReducer = combineReducers({
  app: appReducer,
  contact: contactReducer,
  footer: footerReducer,
});

// == Export
export default rootReducer;
