// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Board from 'src/containers/Board';

// == Import scss
import './app.scss';

// == Import images
import planetLogo from 'src/assets/images/planet.png';

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
      <div className="app__menu">
        <button type="button" className="app__button" onClick={handleClick}>
          <div className={buttonClassname}>
            <div />
          </div>
        </button>
      </div>
      <div className="app__logo">
        <img src={planetLogo} alt="logo-planet" className="app__logo-image" />
        <h1 className="app__logo-name">Julien Gabard</h1>
      </div>
      <Board />
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
