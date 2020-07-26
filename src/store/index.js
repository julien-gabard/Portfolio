import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/boardReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
