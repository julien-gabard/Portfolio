// == Import npm
import React, { useEffect } from 'react';

// == Impor AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// == Import components
// == Containers
import Contact from 'src/containers/Contact';
import Footer from 'src/containers/Footer';
import Menu from 'src/containers/Menu';
// == Components
import Background from 'src/components/Background';
import Home from 'src/components/Home';
import About from 'src/components/About';
import Skill from 'src/components/Skill';
import Training from 'src/components/Training';
import Project from 'src/components/Project';

// == Import scss
import './app.scss';

// == Composant
const App = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="app">
      <Background />
      <Menu />
      <Home />
      <About />
      <Skill />
      <Training />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

// == Export
export default App;
