// == Import npm
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// == Import middleware
import contactMiddleware from 'src/middleware/contactMiddleware';

// == Import reducer
import reducer from 'src/reducers';

// == Combine devTools avec le middleware
const enhancers = composeWithDevTools(
  applyMiddleware(
    // ... middlewares
    contactMiddleware,
  ),
);

// == Store
const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

// == Export
export default store;
