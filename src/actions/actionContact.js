// == Export
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';

// == Components
// Returns the value of the contact form fields.
export const changeField = (identifier, value) => ({
  type: CHANGE_FIELD,
  identifier,
  value,
});
// Listen to the contact form submission.
export const registrationSubmit = () => ({
  type: REGISTRATION_SUBMIT,
});
