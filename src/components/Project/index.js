// == Import npm
import React from 'react';

// == Import scss
import './project.scss';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// == Component
const Project = () => (
  <div className="project" id="project">
    <div className="project__title">
      <div className="project__title-line" />
      <h2 className="project__title-content">Projets</h2>
    </div>
    <div className="project__content">
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
        <div className="project__card">
          <h3 className="project__card-title">Snake v0.4.3</h3>
          <p className="project__card-content">
            Le projet est un petit jeu Snake sur navigateur. Je prévois un système de score,
            de difficultés et d'un historique des scores avec le pseudo de la personne.
          </p>
          <div className="project__card-list__label">
            <p className="project__card-label">React</p>
            <p className="project__card-label">Webpack</p>
            <p className="project__card-label">Babel</p>
          </div>
          <div className="project__card-list-icone">
            <a href="https://github.com/julien-gabard/Snake-Game">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
            </a>
            <FontAwesomeIcon icon={faLink} className="project__card-icone" color="red" />
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
        <div className="project__card project__jeveuxpermuter">
          <h3 className="project__card-title">jeveuxpermuter.com</h3>
          <p className="project__card-content">
            Le site permet à un agent de la fonction publique de pouvoirs trouvé un permutant
            facilement dans toute la France. Pour l'instant, il est orienté pour la police,
            on a le projet de l'ouvrir a plus de corps de métiers de la fonction
            publique comme par exemple les hôpitaux, la gendarmerie...
          </p>
          <div className="project__card-list__label">
            <p className="project__card-label">React</p>
            <p className="project__card-label">Axios</p>
            <p className="project__card-label">React-router</p>
            <p className="project__card-label">symfony 5</p>
          </div>
          <div className="project__card-list-icone">
            <a href="https://github.com/O-clock-Atlantis/projet-permutation-front">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
            </a>
            <a href="https://jeveuxpermuter.com/">
              <FontAwesomeIcon icon={faLink} className="project__card-icone" color="red" />
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
        <div className="project__card project__todolist">
          <h3 className="project__card-title">TodoList</h3>
          <p className="project__card-content">
            C'est un petit site permettant de gérer ses tâches, quel que soit leur sujet.
            Il ne contient qu'une seule et unique page permettant de réaliser toutes les
            actions nécessaires. Cette page va lister toutes les tâches déjà saisies,
            ainsi que leurs catégories respectives.
            Seuls les tâches actives (non archivées) sont affichées par défaut.
          </p>
          <div className="project__card-list__label">
            <p className="project__card-label">JavaScript</p>
            <p className="project__card-label">Lumen</p>
          </div>
          <div className="project__card-list-icone">
            <a href="https://github.com/julien-gabard/Todolist">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
              <p className="project__card-icone__name">Front</p>
            </a>
            <a href="https://github.com/julien-gabard/Todolist-api">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
              <p className="project__card-icone__name">Back</p>
            </a>
            <a href="http://54.167.206.247/Todolist/">
              <FontAwesomeIcon icon={faLink} className="project__card-icone" />
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
        <div className="project__card project__oshop">
          <h3 className="project__card-title">Oshop (back-end)</h3>
          <p className="project__card-content">
            Back-end de l'application Oshop réalisé en cours. Possibilité de créer un compte,
            de se connecter et gestion des comptes en admin.
            Créer, éditer et supprimer des produits, catégories, etc.
          </p>
          <div className="project__card-list__label">
            <p className="project__card-label">PHP</p>
            <p className="project__card-label">Lumen</p>
          </div>
          <div className="project__card-list-icone">
            <a href="https://github.com/julien-gabard/Oshop-backend">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
            </a>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
        <div className="project__card project__portfolio">
          <h3 className="project__card-title">Portfolio v1.0</h3>
          <p className="project__card-content">
            Protfolio développer avec React / Redux. Animation faite en SCSS
            et avec la librairie AOS.
          </p>
          <div className="project__card-list__label">
            <p className="project__card-label">React</p>
            <p className="project__card-label">Redux</p>
            <p className="project__card-label">Axios</p>
            <p className="project__card-label">Librairie AOS</p>
            <p className="project__card-label">PHP</p>
          </div>
          <div className="project__card-list-icone">
            <a href="https://github.com/julien-gabard/Todolist">
              <FontAwesomeIcon icon={faGithub} className="project__card-icone" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// == Export
export default Project;
