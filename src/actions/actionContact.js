// == Export
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';
export const FORM_ERROR = 'FORM_ERROR';
export const FORM_SENT = 'FORM_SENT';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';

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

// when the message is sent
export const formSent = (value) => ({
  type: FORM_SENT,
  value,
});

// Show message sent or error
export const showMessage = () => ({
  type: SHOW_MESSAGE,
});
