// == Import npm
import React from 'react';

// == Import ico
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faBookOpen, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// == Import images
import OclockLogo from '../../assets/images/Oclock.webp';
import OpquastLogo from '../../assets/images/opquast.svg';

// == Import SCSS
import './training.scss';

// == Component
const Training = () => (
  <div className="training" id="training">
    <div className="training__title">
      <h2 className="training__title-content">Formation</h2>
      <div className="training__title-line" />
    </div>
    <div className="training__detail">
      <FontAwesomeIcon icon={faBookOpen} className="training__detail-icone" />
      <p className="training__detail-p">
        Formation de 6 mois en téléprésentiel du 15/11/19 au 01/05/20 chez
        <a href="https://oclock.io/formations/developpeur-web" className="training__detail-p-link">O'clock</a>.
      </p>
    </div>
    <div className="training__detail">
      <FontAwesomeIcon icon={faCalendarAlt} className="training__detail-icone" />
      <p className="training__detail-p">
        3 mois de socle HTML5, CSS3, PHP et JavaScipt.
      </p>
    </div>
    <div className="training__detail">
      <FontAwesomeIcon icon={faCalendarAlt} className="training__detail-icone" />
      <p className="training__detail-p">
        1 mois de spécialisation React, Redux.
      </p>
    </div>
    <div className="training__detail">
      <FontAwesomeIcon icon={faCalendarAlt} className="training__detail-icone" />
      <p className="training__detail-p">
        1 mois de projet en conditions professionnelles
      </p>
    </div>
    <div className="training__detail">
      <FontAwesomeIcon icon={faHandshake} className="training__detail-icone" />
      <p className="training__detail-p">
        Titre Professionnel Développeur Web et Web mobile de Niveau V ( bac +2 )
      </p>
    </div>
    <div className="training__content">
      <p className="training__content-p">
        Cette formation m'a permis d'acquérir les bonnes pratiques : écrire un code propre, lisible,
        créer des sites entièrement responsive, savoir chercher les réponses à un problème,
        et finalement, j'ai appris à apprendre.
      </p>
      <p className="training__content-p">
        Le dernier mois de formation était consacré à la réalisation d'un projet en équipe,
        en suivant la méthode Agile et en conditions professionnelles.
      </p>
      <p className="training__content-p">
        Au-delà des compétences purement techniques, j'ai appris à mener un projet de bout en bout,
        préparer les documents de conception tels que le cahier des charges, les wireframes, définir
        un MVP, créer les Users stories avec Trello, ainsi que les documents propres
        à la base de données (MCD et dictionnaire de données).
      </p>
    </div>
    <div data-aos="fade-down" data-aos-duration="2000">
      <div className="training__logo">
        <a href="https://oclock.io/?gclid=EAIaIQobChMIpMzH5uSB6wIVF4jVCh2BFgsREAAYASAAEgI9nfD_BwE">
          <img src={OclockLogo} alt="logo" className="training__logo-img" />
        </a>
        <a href="https://directory.opquast.com/fr/certificat/SRDTJA/">
          <img src={OpquastLogo} alt="logo" className="training__logo-img" />
        </a>
      </div>
    </div>
  </div>
);

// == Export
export default Training;
