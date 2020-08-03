// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
// == Containers
import Board from 'src/containers/Board';
// == Components
import Background from 'src/components/Background';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Skill from 'src/components/Skill';

// == Import scss
import './app.scss';

// == Import feather
import { ArrowUpCircle } from 'react-feather';

// == Composant
const App = ({ displayBoard, onHandleClick }) => {
  let buttonClass = 'nav-icon';
  let upButtonClass = 'app__link-up';

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
    upButtonClass = 'app__link-up visible';
  }

  return (
    <div className="app" onScroll={scrollStep}>
      <Background />
      <div className="app__menu">
        <button type="button" className="app__button" onClick={handleClick}>
          <div className={buttonClass}>
            <div />
          </div>
        </button>
        <a href="#home" className={upButtonClass}>
          <ArrowUpCircle className="app__link-up-icone" size="40" />
        </a>
      </div>
      <Board />
      <Home />
      <About />
      <Skill />
    </div>
  );
};

// == PropTypes
App.propTypes = {
  displayBoard: PropTypes.bool.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

// == Export
export default App;
