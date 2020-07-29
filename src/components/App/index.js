// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Board from 'src/containers/Board';

// == Import scss
import './app.scss';

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
