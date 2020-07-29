// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import scss
import './board.scss';

// == Component
const Board = ({ displayBoard }) => {
  let boardClassname = 'board';

  if (displayBoard === true) {
    boardClassname = 'board board__open';
  }

  return (
    <div className={boardClassname}>
      <ul className="board__ul">
        <li className="board__li">
          <a href="#" className="board__li-lien">A propos</a>
        </li>
        <li className="board__li">
          <a href="#" className="board__li-lien">Compétences</a>
        </li>
        <li className="board__li">
          <a href="#" className="board__li-lien">Formation</a>
        </li>
        <li className="board__li">
          <a href="#" className="board__li-lien">Projets</a>
        </li>
        <li className="board__li">
          <a href="#" className="board__li-lien">Contact</a>
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
