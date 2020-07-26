// == Import npm
import React from 'react';

// == Import scss
import './board.scss';

// == Component
const Board = () => (
  <div className="board">
    <ul className="board__ul">
      <li className="board__li">A props</li>
      <li className="board__li">Compétences</li>
      <li className="board__li">Formation</li>
      <li className="board__li">Projets</li>
      <li className="board__li">Contact</li>
    </ul>
  </div>
);

// == Export
export default Board;
