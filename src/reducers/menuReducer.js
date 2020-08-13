// == Import actions
import { MENU_BUTTON_ACTION } from 'src/actions/actionMenu';

// == InitialSate
const initialState = {
  displayBoard: false,
};

// == Component
const menuReducer = (state = initialState, action = {}) => {
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
export default menuReducer;
