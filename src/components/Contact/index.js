// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './contact.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// == Component
const Contact = ({ handleChange }) => {
  const changeField = (evt) => {
    handleChange(evt.target.name, evt.target.value);
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
      <form className="contact__form">
        <label htmlFor="lastName" className="contact__form-label">
          Nom de famille *
          <input
            className="contact__form-input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Nom"
            autoComplete="on"
            pattern="([ a-zA-Z---áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)"
            onChange={changeField}
          />
        </label>
        <label htmlFor="firstName" className="contact__form-label">
          Prénom *
          <input
            className="contact__form-input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
            autoComplete="on"
            pattern="([ a-zA-Z---áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)"
            onChange={changeField}
          />
        </label>
        <label htmlFor="phone" className="contact__form-label">
          Téléphone
          <input
            className="contact__form-input"
            type="tel"
            name="phone"
            id="phone"
            placeholder="0* ** ** ** **"
            autoComplete="on"
            pattern="([ 0-9-/-]*)"
            onChange={changeField}
          />
        </label>
        <label htmlFor="email" className="contact__form-label">
          Adresse Email *
          <input
            className="contact__form-input email"
            type="email"
            name="email"
            id="email"
            placeholder="exemple@gmail.com"
            autoComplete="on"
            pattern="([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)"
            onChange={changeField}
          />
        </label>
        <label htmlFor="message" className="contact__form-label">
          Message *
          <textarea
            rows="10"
            cols="40"
            className="contact__form-input message"
            name="message"
            id="message"
            placeholder="Votre message ..."
            autoComplete="off"
            pattern="([ a-zA-Z-0-9-,-.---_?!:()áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]*)"
            onChange={changeField}
          />
        </label>
        <button type="submit" className="contact__form-button">
          Envoyer
          <FontAwesomeIcon icon={faPaperPlane} className="contact__form-button-icone" />
        </button>
      </form>
    </div>
  );
};

// == PropTypes
Contact.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

// == Export
export default Contact;
