// == Import npm
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// == Import reducer
import reducer from 'src/reducers';

// == Store
const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

// == Export
export default store;
