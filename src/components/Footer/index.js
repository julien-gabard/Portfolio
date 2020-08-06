// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './footer.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

// == Component
const Footer = ({ showIcons, clickShowIcons }) => {
  let animeIconLinkedin = 'footer__list-link-linkedin';
  let animeIconGithub = 'footer__list-link-github';
  let animeIconFacebook = 'footer__list-link-facebook';

  const handleClick = () => {
    clickShowIcons();
  };

  if (showIcons === true) {
    animeIconLinkedin = 'footer__list-link-linkedin show__linkedin';
    animeIconGithub = 'footer__list-link-github show__github';
    animeIconFacebook = 'footer__list-link-facebook show__facebook';
  }

  return (
    <div className="footer">
      <h4 className="footer__title">Julien Gabard Copyright <span className="footer__title-copy">&copy;</span></h4>
      <div className="footer__user" onClick={handleClick}>
        <FontAwesomeIcon icon={faLayerGroup} className="footer__user-icone" />
      </div>
      <div className="footer__list">
        <a href="https://www.linkedin.com/in/julien-gabard" className={animeIconLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} className="footer__list-link-icone" />
        </a>
        <a href="https://github.com/julien-gabard" className={animeIconGithub}>
          <FontAwesomeIcon icon={faGithubSquare} className="footer__list-link-icone github" />
        </a>
        <a href="https://www.facebook.com/julien.gabard.3/" className={animeIconFacebook}>
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
