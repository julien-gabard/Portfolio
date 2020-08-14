// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './contact.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Component
const Contact = ({
  handleChange,
  registrationSubmit,
  lastName,
  firstName,
  phone,
  email,
  message,
}) => {
  // == Regex validate input
  const regexName = RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
  const regexText = RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'?!:-]+$/u);
  const regexNumber = RegExp(/^[0-9 ./-]+$/i);
  const regexEmail = RegExp(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/);

  // == ClassName input
  const [lastNameClass, setLastNameClass] = useState('contact__form-input-lastName');
  const [firstNameClass, setfirstNameClass] = useState('contact__form-input-firstName');
  const [phoneClass, setPhoneClass] = useState('contact__form-input-phone');
  const [emailClass, setEmailClass] = useState('contact__form-input-email');
  const [messageClass, setMessaheClass] = useState('contact__form-input-message');

  useEffect(() => {
    if (regexName.test(lastName)) {
      setLastNameClass('contact__form-input-lastName input__valide');
    }
    if (regexName.test(lastName) === false) {
      setLastNameClass('contact__form-input-lastName');
    }
    if (regexName.test(firstName)) {
      setfirstNameClass('contact__form-input-firstName input__valide');
    }
    if (regexName.test(firstName) === false) {
      setfirstNameClass('contact__form-input-firstName');
    }
    if (regexNumber.test(phone)) {
      setPhoneClass('contact__form-input-phone input__valide');
    }
    if (regexNumber.test(phone) === false) {
      setPhoneClass('contact__form-input-phone');
    }
    if (regexEmail.test(email)) {
      setEmailClass('contact__form-input-email input__valide');
    }
    if (regexEmail.test(email) === false) {
      setEmailClass('contact__form-input-email');
    }
    if (regexText.test(message)) {
      setMessaheClass('contact__form-input-message input__valide');
    }
    if (regexText.test(message) === false) {
      setMessaheClass('contact__form-input-message');
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
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="lastName" className="contact__form-label">
            Nom de famille *
            <input
              className={lastNameClass}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom"
              autoComplete="on"
              onChange={changeField}
              value={lastName}
            />
          </label>
          <label htmlFor="firstName" className="contact__form-label">
            Prénom *
            <input
              className={firstNameClass}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              autoComplete="on"
              onChange={changeField}
              value={firstName}
            />
          </label>
          <label htmlFor="phone" className="contact__form-label">
            Téléphone
            <input
              className={phoneClass}
              type="tel"
              name="phone"
              id="phone"
              placeholder="0* ** ** ** **"
              autoComplete="on"
              // pattern="([ 0-9-/-]*)"
              onChange={changeField}
              value={phone}
            />
          </label>
          <label htmlFor="email" className="contact__form-label">
            Adresse Email *
            <input
              className={emailClass}
              type="email"
              name="email"
              id="email"
              placeholder="exemple@gmail.com"
              autoComplete="on"
              onChange={changeField}
              value={email}
            />
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
};

// == Export
export default Contact;
