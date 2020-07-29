// == Import npm
import { combineReducers } from 'redux';

// == Import reducer
import appReducer from './appReducer';

// == Component
const rootReducer = combineReducers({
  app: appReducer,
});

// == Export
export default rootReducer;
