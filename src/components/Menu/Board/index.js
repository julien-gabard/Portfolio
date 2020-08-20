// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import scss
import './board.scss';

// == Component
const Board = ({ displayBoard, clickBoardLink }) => {
  // className
  const [boardClass, setBoardClass] = useState('board');
  const [linkClass, setLinkClass] = useState('board__li');

  useEffect(() => {
    if (displayBoard === true) {
      setBoardClass('board board-open');
      setLinkClass('board__li li-open');
    }
    if (displayBoard === false) {
      setBoardClass('board board-close');
      setLinkClass('board__li li-close');
    }
  }, [displayBoard]);

  const handleClick = () => {
    clickBoardLink();
  };

  return (
    <div className={boardClass}>
      <ul className="board__ul">
        <li className={linkClass}>
          <a href="#about" className="board__li-link" onClick={handleClick}>A propos</a>
        </li>
        <li className={linkClass}>
          <a href="#skill" className="board__li-link" onClick={handleClick}>Compétences</a>
        </li>
        <li className={linkClass}>
          <a href="#training" className="board__li-link" onClick={handleClick}>Formation</a>
        </li>
        <li className={linkClass}>
          <a href="#project" className="board__li-link" onClick={handleClick}>Projets</a>
        </li>
        <li className={linkClass}>
          <a href="#contact" className="board__li-link" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

// == PropTypes
Board.propTypes = {
  displayBoard: PropTypes.bool,
  clickBoardLink: PropTypes.func.isRequired,
};

// == PropTypes default
Board.defaultProps = {
  displayBoard: PropTypes.bool,
};

// == Export
export default Board;
