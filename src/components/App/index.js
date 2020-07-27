// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import Board from 'src/components/Board';

// == Import react-feather
import { Menu, Plus } from 'react-feather';

// == Import scss
import './app.scss';

// == Composant
const App = ({ displayBoard, onHandleClick }) => {
  const handleClick = () => {
    onHandleClick();
  };

  return (
    <div className="app">
      <div className="app__menu">
        <button type="button" className="app__button" onClick={handleClick}>
          <Menu className="app__button__menu" size="50" />
        </button>
        <button type="button" className="app__button">
          <Plus className="app__button__menu" size="50" />
        </button>
      </div>
      {displayBoard && <Board />}
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
