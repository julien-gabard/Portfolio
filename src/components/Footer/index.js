// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

// == Import SCSS
import './footer.scss';

// == Component
const Footer = ({ showIcons, clickShowIcons }) => {
  let animeIconLinkedin = 'footer__list-link-linkedin';
  let linkLinkedin = '';
  let animeIconGithub = 'footer__list-link-github';
  let linkGithub = '';
  let animeIconFacebook = 'footer__list-link-facebook';
  let linkFacebook = '';

  const handleClick = () => {
    clickShowIcons();
  };

  if (showIcons === true) {
    animeIconLinkedin = 'footer__list-link-linkedin show__linkedin';
    linkLinkedin = 'https://www.linkedin.com/in/julien-gabard';
    animeIconGithub = 'footer__list-link-github show__github';
    linkGithub = 'https://github.com/julien-gabard';
    animeIconFacebook = 'footer__list-link-facebook show__facebook';
    linkFacebook = 'https://www.facebook.com/julien.gabard.3/';
  }

  return (
    <div className="footer">
      <h4 className="footer__title">Julien Gabard <span className="footer__title-copy">&copy;</span></h4>
      <div className="footer__user" onClick={handleClick}>
        <FontAwesomeIcon icon={faShareAlt} className="footer__user-icone" />
      </div>
      <div className="footer__list">
        <a href={linkLinkedin} className={animeIconLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} className="footer__list-link-icone" />
        </a>
        <a href={linkGithub} className={animeIconGithub}>
          <FontAwesomeIcon icon={faGithubSquare} className="footer__list-link-icone github" />
        </a>
        <a href={linkFacebook} className={animeIconFacebook}>
          <FontAwesomeIcon icon={faFacebookSquare} className="footer__list-link-icone" />
        </a>
      </div>
    </div>
  );
};

// == Component PropTypes
Footer.propTypes = {
  showIcons: PropTypes.bool.isRequired,
  clickShowIcons: PropTypes.func.isRequired,
};

// == Export component
export default Footer;
