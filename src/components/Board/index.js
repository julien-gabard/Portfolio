// == Import npm
import React from 'react';

// == Import scss
import './board.scss';

// == Component
const Board = () => (
  <div className="board">
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

// == Export
export default Board;
