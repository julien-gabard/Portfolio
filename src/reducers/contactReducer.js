// == Import actions
import {} from 'src/actions/actionApp';

// == InitialSate
const initialState = {
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  message: '',
};

// == Component
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

// == Export
export default contactReducer;
