// == Import actions
import { CLICK_SHOW_ICONS } from 'src/actions/actionFooter';

// == InitialSate
const initialState = {
  showIcons: false,
};

// == Component
const footerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLICK_SHOW_ICONS: {
      return {
        ...state,
        showIcons: !state.showIcons,
      };
    }
    default: return state;
  }
};

// == Export
export default footerReducer;
