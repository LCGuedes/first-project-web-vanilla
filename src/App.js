import React from 'react';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Qualification from './Components/Qualification/Qualification';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portifolio/Portfolio';

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
    </main>
  ) 
   
  
}

export default App;
