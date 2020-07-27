// == Import actions
import { MENU_BUTTON_ACTION } from 'src/actions/actionApp';

// == InitialSate
const initialState = {
  displayBoard: false,
};

// == Component
const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MENU_BUTTON_ACTION: {
      return {
        ...state,
        displayBoard: !state.displayBoard,
      };
    }
    default: return state;
  }
};

// == Export
export default appReducer;
