import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Qualification/Qualification';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portifolio/Portfolio';
import ProjectInMind from './Components/ProjectInMind/ProjectInMind';
import Contactme from './Components/contactme/contactme';
import Testimonial from './Components/testimonial/testimonial';
import Footer from './Components/footer/footer';
import ScrollUp from './Components/Scroll-up/Scroll-up';


function App() {
  return (
    <main className="main">
      <Header/>
      <Home/>
      <About/>
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <ProjectInMind />
      <Testimonial />
      <Contactme />
      <Footer />
     <ScrollUp />
    </main>
  ) 
   
  
}

export default App;
