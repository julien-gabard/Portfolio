// == Export
export const CHANGE_FIELD = 'CHANGE_FIELD';

// == Components
// Returns the value of the contact form fields.
export const changeField = (identifier, value) => ({
  type: CHANGE_FIELD,
  identifier,
  value,
});
