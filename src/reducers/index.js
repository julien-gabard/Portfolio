// == Import npm
import { combineReducers } from 'redux';

// == Import reducer
import appReducer from './appReducer';
import contactReducer from './contactReducer';

// == Component
const rootReducer = combineReducers({
  app: appReducer,
  contact: contactReducer,
});

// == Export
export default rootReducer;
