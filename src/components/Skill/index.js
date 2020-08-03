// == Import npm
import React from 'react';

// == Import SCSS
import './skill.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faReact,
  faGithub,
  faSass,
  faYarn,
  faBootstrap,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons';

// == Component
const Skill = () => (
  <div className="skill" id="skill">
    <div className="skill__title">
      <div className="skill__title-line" />
      <h2 className="skill__title-content">Compétences</h2>
    </div>
    <div className="skill__list">
      <h3 className="skill__list-title">Technologies & Outils</h3>
      <div className="skill__list-seperate" />
      <div className="skill__list-content">
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faHtml5} className="skill__list-item-logo" />
          <p className="skill__list-item-name">HTML 5</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faCss3Alt} className="skill__list-item-logo" />
          <p className="skill__list-item-name">CSS 3</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faJs} className="skill__list-item-logo" />
          <p className="skill__list-item-name">JavaScript</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faPhp} className="skill__list-item-logo" />
          <p className="skill__list-item-name">PHP</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faReact} className="skill__list-item-logo" />
          <p className="skill__list-item-name">React</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faGithub} className="skill__list-item-logo" />
          <p className="skill__list-item-name">Github</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faSass} className="skill__list-item-logo" />
          <p className="skill__list-item-name">Sass</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faYarn} className="skill__list-item-logo" />
          <p className="skill__list-item-name">Yarn</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faBootstrap} className="skill__list-item-logo" />
          <p className="skill__list-item-name">Bootstrap</p>
        </div>
        <div className="skill__list-item">
          <FontAwesomeIcon icon={faLaravel} className="skill__list-item-logo" />
          <p className="skill__list-item-name">Laravel</p>
        </div>
      </div>
    </div>
    <div className="skill__personality">
      <h3 className="skill__personality-title">Personnalité</h3>
      <div className="skill__personality-seperate" />
      <p className="skill__personality-content">Autonome</p>
      <p className="skill__personality-content">Travail en équipe</p>
      <p className="skill__personality-content">Curieux</p>
      <p className="skill__personality-content">Rigoureux</p>
    </div>
  </div>
);

// == Export
export default Skill;
