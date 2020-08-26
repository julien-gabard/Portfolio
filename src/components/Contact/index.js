// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Import SCSS
import './contact.scss';

// == Component
const Contact = ({
  handleChange,
  registrationSubmit,
  lastName,
  firstName,
  phone,
  email,
  message,
  regexName,
  regexText,
  regexNumber,
  regexEmail,
  messageError,
  messageSent,
  showMsg,
}) => {
  // == ClassName input
  const [lastNameClass, setLastNameClass] = useState('contact__form-input-lastName');
  const [firstNameClass, setfirstNameClass] = useState('contact__form-input-firstName');
  const [phoneClass, setPhoneClass] = useState('contact__form-input-phone');
  const [emailClass, setEmailClass] = useState('contact__form-input-email');
  const [messageClass, setMessaheClass] = useState('contact__form-input-message');

  // == ClassName show message
  const [showMessage, setShowMessage] = useState('contact__show-message');

  // == Show message error input
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (regexName.test(lastName)) {
      setLastNameClass('contact__form-input-lastName input__valid');
      setErrorLastName(false);
    }
    if (regexName.test(lastName) === false && lastName !== '') {
      setLastNameClass('contact__form-input-lastName input__invalid');
      setErrorLastName(true);
    }
    if (lastName === '') {
      setLastNameClass('contact__form-input-lastName');
      setErrorLastName(false);
    }
    if (regexName.test(firstName)) {
      setfirstNameClass('contact__form-input-firstName input__valid');
      setErrorFirstName(false);
    }
    if (regexName.test(firstName) === false && firstName !== '') {
      setfirstNameClass('contact__form-input-firstName input__invalid');
      setErrorFirstName(true);
    }
    if (firstName === '') {
      setfirstNameClass('contact__form-input-firstName');
      setErrorFirstName(false);
    }
    if (regexNumber.test(phone)) {
      setPhoneClass('contact__form-input-phone input__valid');
      setErrorPhone(false);
    }
    if (regexNumber.test(phone) === false && phone !== '') {
      setPhoneClass('contact__form-input-phone input__invalid');
      setErrorPhone(true);
    }
    if (phone === '') {
      setPhoneClass('contact__form-input-phone');
      setErrorPhone(false);
    }
    if (regexEmail.test(email)) {
      setEmailClass('contact__form-input-email input__valid');
      setErrorEmail(false);
    }
    if (regexEmail.test(email) === false && email !== '') {
      setEmailClass('contact__form-input-email input__invalid');
      setErrorEmail(true);
    }
    if (email === '') {
      setEmailClass('contact__form-input-email');
      setErrorEmail(false);
    }
    if (regexText.test(message)) {
      setMessaheClass('contact__form-input-message input__valid');
      setErrorMessage(false);
    }
    if (regexText.test(message) === false && message !== '') {
      setMessaheClass('contact__form-input-message input__invalid');
      setErrorMessage(true);
    }
    if (message === '') {
      setMessaheClass('contact__form-input-message');
      setErrorMessage(false);
    }
    if (messageError) {
      setShowMessage('contact__show-message error__message');
    }
    if (messageSent) {
      setShowMessage('contact__show-message sent__message');
    }
  });

  const changeField = (evt) => {
    handleChange(evt.target.name, evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registrationSubmit();
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <h2 className="contact__title-content">Contact</h2>
        <div className="contact__title-line" />
      </div>
      <p className="contact__detail">
        Les champs précédés d'un astérisque (*) sont obligatoires.
      </p>
      {showMsg && <p className={showMessage}>{messageError !== '' ? messageError : messageSent}</p>}
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="lastName" className="contact__form-label">
            Nom *
            <input
              className={lastNameClass}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Votre nom de famille"
              autoComplete="on"
              onChange={changeField}
              value={lastName}
            />
            {errorLastName && <p className="contact__form-p">Le nom saisis est invalide.</p>}
          </label>
          <label htmlFor="firstName" className="contact__form-label">
            Prénom *
            <input
              className={firstNameClass}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Votre prénom"
              autoComplete="on"
              onChange={changeField}
              value={firstName}
            />
            {errorFirstName && <p className="contact__form-p">Le prénom saisis est invalide.</p>}
          </label>
          <label htmlFor="phone" className="contact__form-label">
            Téléphone
            <input
              className={phoneClass}
              type="tel"
              name="phone"
              id="phone"
              placeholder="Votre numéro de téléphone"
              autoComplete="on"
              onChange={changeField}
              value={phone}
            />
            {errorPhone && <p className="contact__form-p">Le téléphone saisis est invalide.</p>}
          </label>
          <label htmlFor="email" className="contact__form-label">
            Adresse Email *
            <input
              className={emailClass}
              type="email"
              name="email"
              id="email"
              placeholder="exemple@exemple.com"
              autoComplete="on"
              onChange={changeField}
              value={email}
            />
            {errorEmail && <p className="contact__form-p">L'adresse mail saisis est invalide.</p>}
          </label>
          <label htmlFor="message" className="contact__form-label">
            Message *
            <textarea
              rows="10"
              className={messageClass}
              name="message"
              id="message"
              placeholder="Votre message ..."
              autoComplete="off"
              onChange={changeField}
              value={message}
            />
            {errorMessage && <p className="contact__form-p">Le message saisis est invalide.</p>}
          </label>
          <button type="submit" className="contact__form-button">
            Envoyer
            <FontAwesomeIcon icon={faPaperPlane} className="contact__form-button-icone" />
          </button>
        </form>
      </div>
    </div>
  );
};

// == PropTypes
Contact.propTypes = {
  handleChange: PropTypes.func.isRequired,
  registrationSubmit: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  regexName: PropTypes.instanceOf(RegExp).isRequired,
  regexText: PropTypes.instanceOf(RegExp).isRequired,
  regexNumber: PropTypes.instanceOf(RegExp).isRequired,
  regexEmail: PropTypes.instanceOf(RegExp).isRequired,
  messageError: PropTypes.string.isRequired,
  messageSent: PropTypes.string.isRequired,
  showMsg: PropTypes.bool.isRequired,
};

// == Export
export default Contact;
