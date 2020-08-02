// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import scss
import './board.scss';

// == Component
const Board = ({ displayBoard, clickBoardLink }) => {
  let boardClassname = 'board';
  let linkClassname = 'board__li';

  if (displayBoard === true) {
    boardClassname = 'board board-open';
    linkClassname = 'board__li li-open';
  }

  const handleClick = () => {
    clickBoardLink();
  };

  return (
    <div className={boardClassname}>
      <ul className="board__ul">
        <li className={linkClassname}>
          <a href="#about" className="board__li-link" onClick={handleClick}>A propos</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link" onClick={handleClick}>Compétences</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link" onClick={handleClick}>Formation</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link" onClick={handleClick}>Projets</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link" onClick={handleClick}>Contact</a>
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
