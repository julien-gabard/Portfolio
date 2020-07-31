// == Import npm
import React from 'react';

// == Import images
import planetLogo from 'src/assets/images/planet.png';

// == Import scss
import './home.scss';

// == Component
const Home = () => (
  <div className="home__logo">
    <img src={planetLogo} alt="logo-planet" className="home__logo-image" />
    <h1 className="home__logo-name">Julien Gabard</h1>
  </div>
);

// == Export
export default Home;
