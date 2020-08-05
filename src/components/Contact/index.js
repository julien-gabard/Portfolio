// == Import npm
import React from 'react';

// == Import SCSS
import './contact.scss';

// == Component
const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact__title">
      <h2 className="contact__title-content">Contact</h2>
      <div className="contact__title-line" />
    </div>
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
        />
      </label>
    </form>
  </div>
);

// == Export
export default Contact;
