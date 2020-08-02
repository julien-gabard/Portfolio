// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
// == Containers
import Board from 'src/containers/Board';
// == Components
import Background from 'src/components/Background';
import Home from 'src/components/Home';
import About from 'src/components/About';

// == Import scss
import './app.scss';

// == Import feather
import { ChevronUp } from 'react-feather';

// == Composant
const App = ({ displayBoard, onHandleClick }) => {
  const handleClick = () => {
    onHandleClick();
  };

  let buttonClassname = 'nav-icon';

  if (displayBoard === true) {
    buttonClassname = 'nav-icon open';
  }

  return (
    <div className="app">
      <Background />
      <div className="app__menu">
        <button type="button" className="app__button" onClick={handleClick}>
          <div className={buttonClassname}>
            <div />
          </div>
        </button>
        <a href="#home" className="app__link-up">
          <ChevronUp className="app__link-up-icone" size="50" />
        </a>
      </div>
      <Board />
      <Home />
      <About />
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
