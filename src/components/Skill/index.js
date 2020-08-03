// == Import npm
import React from 'react';

// == Import SCSS
import './skill.scss';

// == Component
const Skill = () => (
  <div className="skill" id="skill">
    <div className="skill__title">
      <div className="skill__title-line" />
      <h2 className="skill__title-content">Compétences</h2>
    </div>
    <div className="skill__list">
      <h3 className="skill__list-title">Technologies & Outils</h3>
      <div className="skill__list-content">
        <div className="skill__list-item">
          Image
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Skill;
