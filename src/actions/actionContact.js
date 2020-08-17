// == Export
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';
export const FORM_ERROR = 'FORM_ERROR';

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

// Error when submitting the form
export const formError = (value) => ({
  type: FORM_ERROR,
  value,
});
