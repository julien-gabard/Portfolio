// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
// == Containers
import Board from 'src/containers/Board';

// == Import SCSS
import './menu.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ displayBoard, onHandleClick }) => {
  let buttonClass = 'nav-icon';
  let upButtonClass = 'menu__link-up';

  const [scroll, setScroll] = useState(0);

  const handleClick = () => {
    onHandleClick();
  };

  const scrollStep = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', scrollStep);
    };
    watchScroll();
    // Remove listener
    return () => {
      window.removeEventListener('scroll', scrollStep);
    };
  });

  if (displayBoard === true) {
    buttonClass = 'nav-icon open';
  }

  if (scroll === 0) {
    upButtonClass = 'menu__link-up visible';
  }

  return (
    <>
      <div className="menu" onScroll={scrollStep}>
        <button type="button" className="menu__button" onClick={handleClick}>
          <div className={buttonClass}>
            <div />
          </div>
        </button>
        <a href="#home" className={upButtonClass}>
          <FontAwesomeIcon icon={faArrowUp} className="menu__link-up-icone" />
        </a>
        <ul className="menu__list-link-ul">
          <li className="menu__list-link-li">
            <a href="#about" className="menu__list-link-a">A propos</a>
          </li>
          <li className="menu__list-link-li">
            <a href="#skill" className="menu__list-link-a">Compétences</a>
          </li>
          <li className="menu__list-link-li">
            <a href="#training" className="menu__list-link-a">Formation</a>
          </li>
          <li className="menu__list-link-li">
            <a href="#project" className="menu__list-link-a">Projets</a>
          </li>
          <li className="menu__list-link-li">
            <a href="#contact" className="menu__list-link-a">Contact</a>
          </li>
        </ul>
      </div>
      <Board />
    </>
  );
};

// == PropTypes
Menu.propTypes = {
  displayBoard: PropTypes.bool.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

// == Export
export default Menu;
