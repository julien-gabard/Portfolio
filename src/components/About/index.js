// == Import npm
import React from 'react';

// == Import scss
import './about.scss';

// == Component
const About = () => (
  <div className="about">
    <h2 className="about__title">A propos</h2>
    <p className="about__content">
      Bonjour moi c'est Julien, développeur web curieux, rigoureux et autonome.
    </p>
    <p className="about__content">
      En novembre 2019, j'ai entamé une reconversion dans le domaine du développement web
      en suivant une formation intensive chez
      <a href="https://oclock.io/?gclid=EAIaIQobChMIkoOAtvX56gIVCPhRCh1QLAvnEAAYASAAEgJ7afD_BwE" className="about__content-link"> O'clock </a>
      qui ces terminer en mai 2020.
    </p>
    <p className="about__content">
      Après, de nombreuse années dans la mécanique auto et dans la vente commerciale, il était temps
      pour moi de me tourner vers un domaine qui me passionne depuis de nombreuse années et où
      j'allais m'épanouir.
    </p>
    <p className="about__content">
      Passionné par l'univers du web, j'ai naturellement choisi de me spécialiser dans les
      langages axés UI plus particulièrement React.js.
    </p>
  </div>
);

// == Export
export default About;
