// == Import npm
import React from 'react';

// == Import images
import planetLogo from 'src/assets/images/planet.png';

// == Import scss
import './home.scss';

// == Component
const Home = () => (
  <div className="home">
    <img src={planetLogo} alt="logo-planet" className="home__logo" />
    <h1 className="home__name">Julien Gabard</h1>
    <p className="home__content">Développeur web</p>
  </div>
);

// == Export
export default Home;
