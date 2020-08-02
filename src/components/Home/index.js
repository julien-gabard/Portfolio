// == Import npm
import React from 'react';

// == Import images
import saturnLogo from 'src/assets/images/saturn.png';

// == Import scss
import './home.scss';

// == Component
const Home = () => (
  <div className="home" id="home">
    <img src={saturnLogo} alt="logo-planet" className="home__logo" />
    <h1 className="home__name">Julien Gabard</h1>
    <p className="home__content">Développeur web</p>
  </div>
);

// == Export
export default Home;
