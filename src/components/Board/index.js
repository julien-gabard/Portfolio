// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import scss
import './board.scss';

// == Component
const Board = ({ displayBoard }) => {
  let boardClassname = 'board';
  let linkClassname = 'board__li';

  if (displayBoard === true) {
    boardClassname = 'board board-open';
    linkClassname = 'board__li li-open';
  }

  return (
    <div className={boardClassname}>
      <ul className="board__ul">
        <li className={linkClassname}>
          <a href="#" className="board__li-link">Acceuil</a>
        </li>
        <li className={linkClassname}>
          <a href="#about" className="board__li-link">A propos</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link">Compétences</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link">Formation</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link">Projets</a>
        </li>
        <li className={linkClassname}>
          <a href="#" className="board__li-link">Contact</a>
        </li>
      </ul>
    </div>
  );
};

// == PropTypes
Board.propTypes = {
  displayBoard: PropTypes.bool,
};

// == PropTypes default
Board.defaultProps = {
  displayBoard: PropTypes.bool,
};

// == Export
export default Board;
