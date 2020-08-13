// == Import npm
import { combineReducers } from 'redux';

// == Import reducer
import menuReducer from './menuReducer';
import contactReducer from './contactReducer';
import footerReducer from './footerReducer';

// == Component
const rootReducer = combineReducers({
  menu: menuReducer,
  contact: contactReducer,
  footer: footerReducer,
});

// == Export
export default rootReducer;
